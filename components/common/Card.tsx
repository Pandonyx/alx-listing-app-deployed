import React from 'react';
import { CardProps } from '../../interfaces';

const Card: React.FC<CardProps> = ({ title, description, image, price, rating, location }) => {
  return (
    <div className="overflow-hidden transition-shadow duration-200 bg-white shadow-sm rounded-xl hover:shadow-md">
      {/* Image Section */}
      <div className="relative">
        <img 
          src={image || '/assets/images/*.jpg'} 
          alt={title || 'Property'} 
          className="object-cover w-full h-64"
        />
        
      </div>
      
      {/* Content Section */}
      <div className="p-4">
        {/* Location and Rating */}
        <div className="flex items-start justify-between mb-2">
          <div>
            {location && (
              <p className="mb-1 text-sm text-brand-gray-500">{location}</p>
            )}
            {title && (
              <h3 className="mb-1 text-lg font-semibold text-brand-gray-800">{title}</h3>
            )}
          </div>
          {rating && (
            <div className="flex items-center">
              <span className="text-sm text-yellow-400">★</span>
              <span className="ml-1 text-sm text-brand-gray-600">{rating}</span>
            </div>
          )}
        </div>
        
        {/* Description */}
        {description && (
          <p className="mb-3 text-sm text-brand-gray-600 line-clamp-2">{description}</p>
        )}
        
        {/* Price */}
        {price && (
          <div className="flex items-center justify-between">
            <p className="font-semibold text-brand-gray-800">
              ${price} <span className="text-sm font-normal text-brand-gray-500">/ night</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;