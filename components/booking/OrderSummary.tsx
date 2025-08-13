import React from "react";

export interface BookingDetails {
  propertyName: string;
  price: number;       // subtotal (accommodation)
  bookingFee: number;  // fee
  totalNights: number;
  startDate: string;
  imageUrl?: string;
  rating?: number;
  reviewsCount?: number;
  currency?: string;   // e.g. "USD", "MAD"
}

const formatMoney = (amount: number, currency = "USD") =>
  new Intl.NumberFormat(undefined, { style: "currency", currency }).format(amount);

const OrderSummary: React.FC<{ bookingDetails: BookingDetails }> = ({ bookingDetails }) => {
  const {
    propertyName,
    price,
    bookingFee,
    totalNights,
    startDate,
    imageUrl = "https://placehold.co/600x400?text=Property",
    rating = 4.76,
    reviewsCount = 345,
    currency = "USD",
  } = bookingDetails;

  const grandTotal = price + bookingFee;

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold">Review Order Details</h2>

      <div className="flex items-center mt-4">
        <img
          src={imageUrl}
          alt="Property"
          className="object-cover w-32 h-32 rounded-md"
        />
        <div className="ml-4">
          <h3 className="text-lg font-semibold">{propertyName}</h3>
          <p className="text-sm text-gray-500">
            {rating.toFixed(2)} ({reviewsCount} reviews)
          </p>
          <p className="text-sm text-gray-500">
            {startDate} • {totalNights} {totalNights === 1 ? "Night" : "Nights"}
          </p>
        </div>
      </div>

      {/* Price Breakdown */}
      <div className="mt-6 space-y-2">
        <div className="flex justify-between">
          <p>Booking Fee</p>
          <p>{formatMoney(bookingFee, currency)}</p>
        </div>
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>{formatMoney(price, currency)}</p>
        </div>
        <div className="flex justify-between pt-2 font-semibold border-t">
          <p>Grand Total</p>
          <p>{formatMoney(grandTotal, currency)}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
