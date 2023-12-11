// SwiperItem.tsx
import React from 'react';
import { SwiperItemType } from './types';
import './swiperItem.css';

interface Props {
  item: SwiperItemType;
}

function SwiperItem({ item }: Props) {
  // Destructure the properties from the item
  const { id, pickup_location, dropoff_location, description, preferred_delivery_time, price_offer, status } = item;

  // Function to split description into chunks of characters
  const splitDescription = (text: string, charactersPerLine: number) => {
    const chunks = [];
    for (let i = 0; i < text.length; i += charactersPerLine) {
      chunks.push(text.slice(i, i + charactersPerLine));
    }
    return chunks;
  };

  // Apply inline style to make the description wrap after 60 characters per line
  const descriptionChunks = splitDescription(description, 60);

  return (
    <li className='swiper-item' draggable={false}>
      <div>
        <h2>ID: {id}</h2>
        <p>Pickup Location: {pickup_location}</p>
        <p>Drop-off Location: {dropoff_location}</p>
        {/* Apply inline style for the description */}
        {descriptionChunks.map((chunk, index) => (
          <p key={index} className="description">{chunk}</p>
        ))}
        <p>Preferred Delivery Time: {preferred_delivery_time}</p>
        <p>Price Offer: ${price_offer}</p>
        <p>Status: {status}</p>
      </div>
    </li>
  );
}

export default SwiperItem;
