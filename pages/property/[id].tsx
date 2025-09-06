import { PROPERTYLISTINGSAMPLE } from "@/constants/index";
import { useRouter } from "next/router";
import PropertyDetail from "@/components/property/PropertyDetail";
import BookingSection from "@/components/property/BookingSection";
import ReviewSection from "@/components/property/ReviewSection";

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;

  if (!router.isReady) return <p>Loading...</p>;

  const resolvedName = typeof id === "string" ? decodeURIComponent(id) : Array.isArray(id) ? decodeURIComponent(id[0] || "") : "";
  const property = PROPERTYLISTINGSAMPLE.find((item) => item.name === resolvedName);

  if (!property) return <p>Property not found</p>;

  return (
    <div className="container p-6 mx-auto">
      <div className="flex flex-col lg:flex-row lg:space-x-8">
        {/* Main Content Area */}
        <div className="lg:w-2/3">
          {/* Property Detail Section */}
          <PropertyDetail property={property} />
          
          {/* A more detailed description section (e.g., in a tabbed format)
              This is where you would place more detailed info about what we offer, host, etc.
              For this example, we'll just add a placeholder. */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold">What this place offers</h2>
            {/* You can implement a tab component here */}
            <div className="border-b border-gray-200">
              <nav className="flex -mb-px space-x-8" aria-label="Tabs">
                <a href="#" className="px-1 py-4 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:text-gray-700 hover:border-gray-300">
                  Description
                </a>
                <a href="#" className="px-1 py-4 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:text-gray-700 hover:border-gray-300">
                  About Host
                </a>
                <a href="#" className="px-1 py-4 text-sm font-medium text-indigo-600 border-b-2 border-indigo-500">
                  Reviews
                </a>
              </nav>
            </div>
            {/* Content for the tabs would go here */}
          </div>

          {/* Review Section */}
          <ReviewSection reviews={property.reviews || []} />
        </div>

        {/* Booking Section Area */}
        <div className="sticky mt-8 lg:w-1/3 lg:mt-0 top-4">
          <BookingSection price={property.price} propertyId={typeof id === "string" ? id : Array.isArray(id) ? id[0] : ""} />
        </div>
      </div>
    </div>
  );
}
