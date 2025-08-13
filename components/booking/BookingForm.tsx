const BookingForm = () => (
  <div className="p-6 bg-white rounded-lg shadow-md">
    <h2 className="text-xl font-semibold">Contact Detail</h2>
    <form>
      {/* Contact Information */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label>First Name</label>
          <input type="text" className="w-full p-2 mt-2 border" />
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" className="w-full p-2 mt-2 border" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label>Email</label>
          <input type="email" className="w-full p-2 mt-2 border" />
        </div>
        <div>
          <label>Phone Number</label>
          <input type="text" className="w-full p-2 mt-2 border" />
        </div>
      </div>

      {/* Payment Information */}
      <h2 className="mt-6 text-xl font-semibold">Pay with</h2>
      <div className="mt-4">
        <label>Card Number</label>
        <input type="text" className="w-full p-2 mt-2 border" />
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label>Expiration Date</label>
          <input type="text" className="w-full p-2 mt-2 border" />
        </div>
        <div>
          <label>CVV</label>
          <input type="text" className="w-full p-2 mt-2 border" />
        </div>
      </div>

      {/* Billing Address */}
      <h2 className="mt-6 text-xl font-semibold">Billing Address</h2>
      <div className="mt-4">
        <label>Street Address</label>
        <input type="text" className="w-full p-2 mt-2 border" />
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label>City</label>
          <input type="text" className="w-full p-2 mt-2 border" />
        </div>
        <div>
          <label>State</label>
          <input type="text" className="w-full p-2 mt-2 border" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label>Zip Code</label>
          <input type="text" className="w-full p-2 mt-2 border" />
        </div>
        <div>
          <label>Country</label>
          <input type="text" className="w-full p-2 mt-2 border" />
        </div>
      </div>

      {/* Submit Button */}
      <button className="w-full px-4 py-2 mt-6 text-white bg-green-500 rounded-md">
        Confirm & Pay
      </button>
    </form>
  </div>
);

export default BookingForm;

const CancellationPolicy = () => (
  <div className="mt-6">
    <h2 className="text-xl font-semibold">Cancellation policy</h2>
    <p className="mt-2 text-gray-600">
      Free cancellation before Aug 23. Cancel before check-in on Aug 24 for a partial refund.
    </p>

    <h2 className="mt-6 text-xl font-semibold">Ground Rules</h2>
    <ul className="mt-2 text-gray-600 list-disc list-inside">
      <li>Follow the house rules</li>
      <li>Treat your Host’s home like your own</li>
    </ul>
  </div>
);

export default CancellationPolicy;