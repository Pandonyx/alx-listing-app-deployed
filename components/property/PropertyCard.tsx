import Link from "next/link";
import Image from "next/image";

type Property = {
  id: string | number;
  title: string;
  thumbnailUrl?: string;
  pricePerNight?: number;
  rating?: number | null;
  beds?: number | null;
  baths?: number | null;
  city?: string;
  country?: string;
};

export default function PropertyCard({ property }: { property: Property }) {
  const {
    id,
    title,
    thumbnailUrl,
    pricePerNight,
    rating,
    beds,
    baths,
    city,
    country,
  } = property;

  return (
    <Link
      href={`/property/${encodeURIComponent(String(id))}`}
      className='overflow-hidden border shadow-sm rounded-2xl block hover:shadow-md transition-shadow'
    >
      <div className='relative aspect-[4/3] bg-gray-100 overflow-hidden'>
        {thumbnailUrl ? (
          <Image
            src={thumbnailUrl}
            alt={title}
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className='object-cover'
            priority={false}
          />
        ) : (
          <div className='grid w-full h-full text-sm text-gray-500 place-items-center'>
            No image
          </div>
        )}
      </div>

      <div className='p-3 space-y-1'>
        <h3 className='font-semibold line-clamp-1'>{title}</h3>
        <p className='text-sm text-gray-600 line-clamp-1'>
          {[city, country].filter(Boolean).join(", ")}
        </p>

        <div className='flex items-center justify-between pt-1'>
          <span className='font-semibold'>
            {pricePerNight != null ? `$${pricePerNight}/night` : ""}
          </span>
          {rating != null && (
            <span className='text-sm'>{"\u2605"} {Number(rating).toFixed(1)}</span>
          )}
        </div>

        <p className='text-xs text-gray-500'>
          {beds ? `${beds} beds` : ""}
          {beds && baths ? " \u00B7 " : ""}
          {baths ? `${baths} baths` : ""}
        </p>
      </div>
    </Link>
  );
}

