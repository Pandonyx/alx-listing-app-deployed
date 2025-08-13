import BookingForm from "@/components/booking/BookingForm";
import OrderSummary from "@/components/booking/OrderSummary";
import CancellationPolicy from "@/components/booking/CancellationPolicy";

export default function BookingPage() {
  const bookingDetails = {
    propertyName: "Villa Arrecife Beach House",
    price: 7500,
    bookingFee: 65,
    totalNights: 3,
    startDate: "24 August 2024",
    imageUrl:
      "https://images.unsplash.com/photo-1505691723518-36a5ac3b2aa5?q=80&w=1200&auto=format&fit=crop",
    rating: 4.76,
    reviewsCount: 345,
    currency: "USD",
  };

  return (
    <div className="container p-6 mx-auto">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Left: form + rules */}
        <div className="space-y-6 lg:col-span-2">
          <BookingForm />
          <CancellationPolicy />
        </div>

        {/* Right: sticky summary */}
        <div className="lg:col-span-1">
          <div className="lg:sticky lg:top-6">
            <OrderSummary bookingDetails={bookingDetails} />
          </div>
        </div>
      </div>
    </div>
  );
}
