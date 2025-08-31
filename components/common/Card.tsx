import React, { useState, useEffect } from "react";
import Image from "next/image";
import { CardProps } from "@/interfaces";
import { CONFIG } from "@/constants";

const fallbackImg = "/assets/images/placeholder.jpg";

const Card: React.FC<CardProps> = ({
  name,
  image,
  price,
  rating,
  address,
  discount,
  category = [],
  offers,
}) => {
  const { bed = "0", shower = "0", occupants = "0" } = offers ?? {};
  const location = `${address.city}, ${address.country}`;
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setImageError(false);
  }, [image]);

  return (
    <div className='overflow-hidden transition-shadow duration-200 bg-white shadow-sm rounded-xl hover:shadow-md'>
      {/* Image */}
      <div className='relative w-full h-56'>
        <Image
          src={imageError ? fallbackImg : image || fallbackImg}
          alt={name}
          fill
          style={{ objectFit: "cover" }}
          className='rounded-2xl'
          onError={() => setImageError(true)}
          sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
        />
        {discount && discount !== "0" && (
          <span className='absolute top-3 left-3 rounded bg-emerald-600 px-2 py-0.5 text-xs font-medium text-white'>
            –{discount}%
          </span>
        )}
      </div>

      {/* Category pills */}
      <div className='flex flex-wrap gap-2 px-4 py-3'>
        {category.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className='px-3 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-full'>
            {tag}
          </span>
        ))}
      </div>

      {/* Body */}
      <div className='px-4 pb-4'>
        {/* title + rating */}
        <div className='flex items-start justify-between mb-1'>
          <h3 className='text-base font-semibold text-gray-800'>{name}</h3>
          <div className='flex items-center text-sm'>
            <span className='text-yellow-400'>★</span>
            <span className='ml-1 text-gray-700'>{rating.toFixed(2)}</span>
          </div>
        </div>

        <p className='mb-3 text-sm text-gray-500'>{location}</p>

        {/* Facilities pill */}
        <div className='inline-flex items-center gap-4 px-4 py-2 mb-3 text-sm border rounded-full'>
          <span className='flex items-center gap-1 text-gray-700'>
            <Image
              src='/assets/icons/bed.svg'
              alt=''
              width={16}
              height={16}
            />{" "}
            {bed}
          </span>
          <span className='flex items-center gap-1 text-gray-700'>
            <Image
              src='/assets/icons/bathtub.svg'
              alt=''
              width={16}
              height={16}
            />{" "}
            {shower}
          </span>
          <span className='flex items-center gap-1 text-gray-700'>
            <Image
              src='/assets/icons/guests.svg'
              alt=''
              width={16}
              height={16}
            />{" "}
            {occupants}
          </span>
        </div>

        {/* Price */}
        <p className='flex items-center gap-1 text-sm font-semibold text-gray-800'>
          {CONFIG.DEFAULT_CURRENCY}&nbsp;{price.toLocaleString()}
          <span className='font-normal text-gray-500'> / n</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
