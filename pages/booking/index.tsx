import axios from "axios";
import { useState, FormEvent } from "react";
import { useRouter } from "next/router";

interface BookingFormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  cardNumber: string;
  expirationDate: string;
  cvv: string;
  billingAddress: string;
}

export default function BookingForm() {
  const router = useRouter();
  const { id, checkIn, checkOut, nights } = router.query;

  const [formData] = useState<BookingFormData>({
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
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await axios.post("/api/bookings", formData);
      alert("Booking confirmed!");
    } catch (err) {
      console.error(err);
      setError("Failed to submit booking.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Selection summary (from property page) */}
      {(id || checkIn || checkOut) && (
        <div className='p-3 mb-4 text-sm rounded-md bg-gray-50'>
          <div>
            <strong>Property:</strong>{" "}
            {typeof id === "string" ? decodeURIComponent(id) : ""}
          </div>
          <div>
            <strong>Check-in:</strong>{" "}
            {typeof checkIn === "string" ? checkIn : ""}
          </div>
          <div>
            <strong>Check-out:</strong>{" "}
            {typeof checkOut === "string" ? checkOut : ""}
          </div>
          <div>
            <strong>Nights:</strong> {typeof nights === "string" ? nights : ""}
          </div>
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
