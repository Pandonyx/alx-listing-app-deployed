import React from "react";
import { CardProps } from "@/interfaces";
import { CONFIG } from "@/constants";

const fallbackImg = "/assets/images/Placeholder.jpg";

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
  const { bed = "", shower = "", occupants = "" } = offers ?? {};
  const location = [address.city, address.country].filter(Boolean).join(", ");
  const ratingValue = typeof rating === "number" ? rating : null;

  return (
    <div className='group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-lg'>
      {/* Image */}
      <div className='relative aspect-[4/3] w-full overflow-hidden bg-gray-100'>
        <img
          src={image || fallbackImg}
          alt={name}
          loading='lazy'
          onError={(e) => ((e.target as HTMLImageElement).src = fallbackImg)}
          className='h-full w-full object-cover transition-transform duration-300 group-hover:scale-105'
        />
        {discount && discount !== "" && discount !== "0" && (
          <span className='absolute top-3 left-3 rounded-md bg-emerald-600 px-2 py-0.5 text-xs font-medium text-white'>
            -{discount}%
          </span>
        )}
      </div>

      {/* Body */}
      <div className='p-3'>
        {/* title + rating */}
        <div className='mb-1 flex items-start justify-between'>
          <h3 className='line-clamp-1 text-[15px] font-semibold text-gray-900'>{name}</h3>
          <div className='ml-2 flex flex-shrink-0 items-center text-sm text-gray-800'>
            {ratingValue != null ? (
              <>
                <span className='text-yellow-500'>★</span>
                <span className='ml-1'>{ratingValue.toFixed(2)}</span>
              </>
            ) : (
              <span className='text-gray-400'>No rating</span>
            )}
          </div>
        </div>

        {location && (
          <p className='mb-2 text-sm text-gray-500'>{location}</p>
        )}

        {(bed || shower || occupants) && (
          <p className='mb-2 text-xs text-gray-500'>
            {[bed && `${bed} beds`, shower && `${shower} baths`, occupants && `${occupants} guests`]
              .filter(Boolean)
              .join(' · ')}
          </p>
        )}

        <p className='text-sm text-gray-900'>
          <span className='font-semibold'>
            {CONFIG.DEFAULT_CURRENCY}&nbsp;{Number(price).toLocaleString()}
          </span>
          <span className='text-gray-500'> / night</span>
        </p>
      </div>
    </div>
  );
};

export default Card;

