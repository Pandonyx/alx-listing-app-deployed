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
    <div className='overflow-hidden border shadow-sm rounded-2xl'>
      <div className='aspect-[4/3] bg-gray-100'>
        {thumbnailUrl ? (
          <img
            src={thumbnailUrl}
            alt={title}
            className='object-cover w-full h-full'
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
            {pricePerNight != null ? `$${pricePerNight}/night` : "—"}
          </span>
          {rating != null && (
            <span className='text-sm'>⭐ {Number(rating).toFixed(1)}</span>
          )}
        </div>

        <p className='text-xs text-gray-500'>
          {beds ? `${beds} beds` : ""}
          {beds && baths ? " · " : ""}
          {baths ? `${baths} baths` : ""}
        </p>
      </div>
    </div>
  );
}
