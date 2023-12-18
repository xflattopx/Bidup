// Swiper.tsx
import React, { useRef } from 'react';
import { SwiperContainer, SwiperList } from './styles';
import { SwiperItemType } from './types';
import SwiperItem from './SwiperItem';
import { getRefValue, useStateRef } from './hooks';
import { getTouchEventData } from './dom';

export type Props = {
  items: Array<SwiperItemType>;
  onBidClick: (id: number) => void; // Callback function for handling bid click
};

function Swiper({ items, onBidClick }: Props) {
  const currentOffsetXRef = useRef(0);
  const startXRef = useRef(0);
  const [offsetX, setOffsetX, offsetXRef] = useStateRef(0);

  const onTouchMove = (e: TouchEvent | MouseEvent) => {
    const currentX = getTouchEventData(e).clientX;
    const diff = getRefValue(startXRef) - currentX;
    const newOffsetX = getRefValue(currentOffsetXRef) - diff;
    setOffsetX(newOffsetX);
  };

  const onTouchEnd = () => {
    window.removeEventListener('touchmove', onTouchMove);
    window.removeEventListener('touchend', onTouchEnd);
    window.removeEventListener('mousemove', onTouchMove);
    window.removeEventListener('mouseup', onTouchEnd);
  };

  const onMouseDown = (e: React.MouseEvent<HTMLElement>) => {
    const currentOffsetX = getRefValue(offsetXRef);
    currentOffsetXRef.current = currentOffsetX;
    startXRef.current = getTouchEventData(e).clientX;

    window.addEventListener('mousemove', onTouchMove);
    window.addEventListener('mouseup', onTouchEnd);
    window.addEventListener('touchmove', onTouchMove);
    window.addEventListener('touchend', onTouchEnd);
  };

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>) => {
    currentOffsetXRef.current = getRefValue(offsetXRef);
    startXRef.current = getTouchEventData(e).clientX;
  };

  return (
    <SwiperContainer>
      <SwiperList
        style={{ transform: `translate3d(${offsetX}px, 0, 0)` }}
        //</SwiperContainer>onTouchStart={onTouchStart}
        onMouseDown={onMouseDown}
      >
        {items.map((item, index) => (
          <SwiperItem
            item={{
              id: item.id,
              pickup_location: item.pickup_location,
              dropoff_location: item.dropoff_location,
              description: item.description,
              preferred_delivery_time: item.preferred_delivery_time,
              price_offer: item.price_offer,
              status: item.status,
            }}
            onBidClick={onBidClick} // Pass the callback function to SwiperItem
            key={index}
            {...item}
          />
        ))}
      </SwiperList>
    </SwiperContainer>
  );
}

export default Swiper;
