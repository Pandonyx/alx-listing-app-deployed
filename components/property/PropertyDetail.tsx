type Address = { state?: string; city?: string; country?: string };
type Offers = { bed?: string; shower?: string; occupants?: string };
type DetailProperty = {
  name: string;
  address?: Address;
  rating?: number;
  price?: number;
  image?: string;
  offers?: Offers;
  discount?: string;
};

export default function PropertyDetail({ property }: { property: DetailProperty }) {
  const { name, address, rating, price, image, offers } = property || {};

  return (
    <div className="space-y-4">
      <div className="aspect-[4/3] w-full bg-gray-100 rounded-xl overflow-hidden">
        {image ? (
          <img src={image} alt={name} className="object-cover w-full h-full" />
        ) : (
          <div className="grid w-full h-full place-items-center text-gray-500">No image</div>
        )}
      </div>

      <div className="space-y-1">
        <h1 className="text-2xl font-semibold">{name}</h1>
        <p className="text-gray-600">
          {[address?.city, address?.country].filter(Boolean).join(", ")}
        </p>
        <p className="text-sm text-gray-500">Rating: {rating ?? "-"}</p>
        <p className="text-lg font-semibold">{price != null ? `$${price}/night` : ""}</p>
        <p className="text-sm text-gray-500">
          {offers?.bed ? `${offers.bed} beds` : ""}
          {offers?.bed && offers?.shower ? " · " : ""}
          {offers?.shower ? `${offers.shower} baths` : ""}
        </p>
      </div>
    </div>
  );
}
