import { PropertyProps } from "@/interfaces/index";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <div className="container p-6 mx-auto">
      <h1 className="text-4xl font-bold">{property.name}</h1>
      <div className="flex items-center mt-2 space-x-2">
        <span className="text-yellow-500">{property.rating} stars</span>
        <span>{property.address.city}, {property.address.country}</span>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 gap-4 mt-4">
        <img src={property.image} alt={property.name} className="object-cover w-full col-span-2 rounded-lg h-96" />
        {/* Add more images */}
      </div>

      {/* Description */}
      <div className="mt-4">
        <h2 className="text-2xl font-semibold">Description</h2>
        <p>{property.description}</p>
      </div>

      {/* Amenities */}
      <div className="mt-4">
        <h2 className="text-2xl font-semibold">What this place offers</h2>
        <ul className="flex flex-wrap space-x-4">
          {property.category.map((amenity, index) => (
            <li key={index} className="p-2 bg-gray-200 rounded-md">
              {amenity}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PropertyDetail;