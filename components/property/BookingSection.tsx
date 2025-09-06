import { useState, useMemo } from "react";
import { useRouter } from "next/router";

const BookingSection: React.FC<{ price: number; propertyId: string }> = ({ price, propertyId }) => {
  const router = useRouter();
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const nights = useMemo(() => {
    if (!checkIn || !checkOut) return 0;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diff = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
    return diff > 0 ? diff : 0;
  }, [checkIn, checkOut]);

  const total = nights > 0 ? price * nights : 0;

  const handleReserve = () => {
    if (!checkIn || !checkOut) {
      alert("Please select check-in and check-out dates.");
      return;
    }
    if (nights <= 0) {
      alert("Check-out must be after check-in.");
      return;
    }
    router.push({
      pathname: "/booking",
      query: { id: propertyId, checkIn, checkOut, nights: String(nights) },
    });
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-xl font-semibold">${price}/night</h3>
      <div className="mt-4">
        <label>Check-in</label>
        <input
          type="date"
          className="w-full p-2 mt-2 border"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
        />
      </div>
      <div className="mt-4">
        <label>Check-out</label>
        <input
          type="date"
          className="w-full p-2 mt-2 border"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
        />
      </div>

      {/* Total payment */}
      <div className="mt-4">
        <p>
          Total payment: <strong>${total || price * 1}</strong>
          {nights > 0 ? ` (${nights} night${nights > 1 ? "s" : ""})` : ""}
        </p>
      </div>

      {/* Reserve button */}
      <button onClick={handleReserve} className="px-4 py-2 mt-4 text-white bg-green-500 rounded-md">
        Reserve now
      </button>
    </div>
  );
};

export default BookingSection;
