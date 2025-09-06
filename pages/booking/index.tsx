import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";

export default function BookingForm() {
  const router = useRouter();
  const { id, checkIn, checkOut, nights } = router.query;
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    billingAddress: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post("/api/bookings", formData);
      alert("Booking confirmed!");
    } catch (error) {
      setError("Failed to submit booking.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Selection summary (from property page) */}
      {(id || checkIn || checkOut) && (
        <div className='p-3 mb-4 text-sm bg-gray-50 rounded-md'>
          <div><strong>Property:</strong> {typeof id === 'string' ? decodeURIComponent(id) : ''}</div>
          <div><strong>Check-in:</strong> {typeof checkIn === 'string' ? checkIn : ''}</div>
          <div><strong>Check-out:</strong> {typeof checkOut === 'string' ? checkOut : ''}</div>
          <div><strong>Nights:</strong> {typeof nights === 'string' ? nights : ''}</div>
        </div>
      )}
      {/* Form fields for booking details */}
      <button
        type='submit'
        disabled={loading}>
        {loading ? "Processing..." : "Confirm & Pay"}
      </button>
      {error && <p className='text-red-500'>{error}</p>}
    </form>
  );
}
