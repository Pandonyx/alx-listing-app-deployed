"use client";

import React, { useState, FormEvent } from "react";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  cardNumber: string;
  exp: string; // MM/YY
  cvv: string;
  street: string;
  unit: string;
  city: string;
  state: string;
  zip: string;
  country: string;
};

const initialState: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  cardNumber: "",
  exp: "",
  cvv: "",
  street: "",
  unit: "",
  city: "",
  state: "",
  zip: "",
  country: "",
};

const BookingForm: React.FC = () => {
  const [data, setData] = useState<FormData>(initialState);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = e.target;
    // Basic numeric-only enforcement for card/cvv/zip/phone (keeps spaces for card)
    const numericFields = ["cardNumber", "cvv", "zip", "phone"];
    const cleaned =
      numericFields.includes(name) ?
        value.replace(/[^\d\s]/g, "") :
        value;
    setData((d) => ({ ...d, [name]: cleaned }));
  };

  // Tiny validators (enough for milestone needs)
  const luhnValid = (num: string) => {
    const digits = num.replace(/\s+/g, "");
    if (digits.length < 12) return false;
    let sum = 0;
    let dbl = false;
    for (let i = digits.length - 1; i >= 0; i--) {
      let n = parseInt(digits[i], 10);
      if (dbl) {
        n *= 2;
        if (n > 9) n -= 9;
      }
      sum += n;
      dbl = !dbl;
    }
    return sum % 10 === 0;
  };

  const validate = (): boolean => {
    const errs: Record<string, string> = {};
    if (!data.firstName) errs.firstName = "Required";
    if (!data.lastName) errs.lastName = "Required";
    if (!/^\S+@\S+\.\S+$/.test(data.email)) errs.email = "Invalid email";
    if (!data.phone) errs.phone = "Required";

    if (!luhnValid(data.cardNumber)) errs.cardNumber = "Invalid card number";
    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(data.exp))
      errs.exp = "Use MM/YY";
    if (!/^\d{3,4}$/.test(data.cvv)) errs.cvv = "3–4 digits";

    if (!data.street) errs.street = "Required";
    if (!data.city) errs.city = "Required";
    if (!data.state) errs.state = "Required";
    if (!/^\d{4,10}$/.test(data.zip)) errs.zip = "Invalid ZIP/Postal code";
    if (!data.country) errs.country = "Required";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Simulate processing:
    // In a real app you'd call your API here (never store CVV).
    alert("Booking confirmed! (demo)");
    // Reset sensitive fields
    setData((d) => ({ ...d, cardNumber: "", cvv: "" }));
  };

  const inputBase =
    "border rounded-md p-2 w-full mt-2 focus:outline-none focus:ring-2 focus:ring-green-500";

  const labelBase = "text-sm font-medium";

  const Err = ({ field }: { field: keyof FormData }) =>
    errors[field] ? (
      <p className="mt-1 text-xs text-red-600">{errors[field]}</p>
    ) : null;

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold">Contact Detail</h2>

      <form className="mt-4" onSubmit={onSubmit} noValidate>
        {/* Contact Information */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label htmlFor="firstName" className={labelBase}>First Name</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              autoComplete="given-name"
              className={inputBase}
              value={data.firstName}
              onChange={handleChange}
              required
            />
            <Err field="firstName" />
          </div>
          <div>
            <label htmlFor="lastName" className={labelBase}>Last Name</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              autoComplete="family-name"
              className={inputBase}
              value={data.lastName}
              onChange={handleChange}
              required
            />
            <Err field="lastName" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2">
          <div>
            <label htmlFor="email" className={labelBase}>Email</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className={inputBase}
              value={data.email}
              onChange={handleChange}
              required
            />
            <Err field="email" />
          </div>
          <div>
            <label htmlFor="phone" className={labelBase}>Phone Number</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              inputMode="numeric"
              autoComplete="tel"
              placeholder="e.g. 0612 345 678"
              className={inputBase}
              value={data.phone}
              onChange={handleChange}
              required
            />
            <Err field="phone" />
          </div>
        </div>

        {/* Payment Information */}
        <h2 className="mt-6 text-xl font-semibold">Pay with</h2>
        <div className="mt-4">
          <label htmlFor="cardNumber" className={labelBase}>Card Number</label>
          <input
            id="cardNumber"
            name="cardNumber"
            type="text"
            inputMode="numeric"
            autoComplete="cc-number"
            placeholder="1234 5678 9012 3456"
            className={inputBase}
            value={data.cardNumber}
            onChange={handleChange}
            required
          />
          <Err field="cardNumber" />
        </div>

        <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2">
          <div>
            <label htmlFor="exp" className={labelBase}>Expiration Date</label>
            <input
              id="exp"
              name="exp"
              type="text"
              inputMode="numeric"
              autoComplete="cc-exp"
              placeholder="MM/YY"
              className={inputBase}
              value={data.exp}
              onChange={handleChange}
              required
            />
            <Err field="exp" />
          </div>
          <div>
            <label htmlFor="cvv" className={labelBase}>CVV</label>
            <input
              id="cvv"
              name="cvv"
              type="password"
              inputMode="numeric"
              autoComplete="cc-csc"
              placeholder="3 or 4 digits"
              className={inputBase}
              value={data.cvv}
              onChange={handleChange}
              required
            />
            <Err field="cvv" />
          </div>
        </div>

        {/* Billing Address */}
        <h2 className="mt-6 text-xl font-semibold">Billing Address</h2>
        <div className="mt-4">
          <label htmlFor="street" className={labelBase}>Street Address</label>
          <input
            id="street"
            name="street"
            type="text"
            autoComplete="address-line1"
            className={inputBase}
            value={data.street}
            onChange={handleChange}
            required
          />
          <Err field="street" />
        </div>

        <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2">
          <div>
            <label htmlFor="unit" className={labelBase}>Apt/Suite</label>
            <input
              id="unit"
              name="unit"
              type="text"
              autoComplete="address-line2"
              className={inputBase}
              value={data.unit}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="city" className={labelBase}>City</label>
            <input
              id="city"
              name="city"
              type="text"
              autoComplete="address-level2"
              className={inputBase}
              value={data.city}
              onChange={handleChange}
              required
            />
            <Err field="city" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2">
          <div>
            <label htmlFor="state" className={labelBase}>State</label>
            <input
              id="state"
              name="state"
              type="text"
              autoComplete="address-level1"
              className={inputBase}
              value={data.state}
              onChange={handleChange}
              required
            />
            <Err field="state" />
          </div>
          <div>
            <label htmlFor="zip" className={labelBase}>Zip Code</label>
            <input
              id="zip"
              name="zip"
              type="text"
              inputMode="numeric"
              autoComplete="postal-code"
              className={inputBase}
              value={data.zip}
              onChange={handleChange}
              required
            />
            <Err field="zip" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2">
          <div>
            <label htmlFor="country" className={labelBase}>Country</label>
            <input
              id="country"
              name="country"
              type="text"
              autoComplete="country-name"
              className={inputBase}
              value={data.country}
              onChange={handleChange}
              required
            />
            <Err field="country" />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full px-4 py-2 mt-6 text-white transition bg-green-500 rounded-md hover:bg-green-600"
        >
          Confirm &amp; Pay
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
