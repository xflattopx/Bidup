import React, { useState, useEffect, useCallback, ReactElement, ComponentType } from "react";
import useEmblaCarousel, { EmblaCarouselType } from "embla-carousel-react";
import styled from "styled-components";
import { DotButton, PrevButton, NextButton } from "./EmblaCarouselButtons";

interface EmblaCarouselComponentProps {
  requests: DeliveryRequest[];
}

interface DeliveryRequest {
  id: number;
  pickup_location: string;
  dropoff_location: string;
  description: string;
  preferred_delivery_time: string;
  price_offer: number;
  bid_end_time: string;
  status: string;
}

const Embla = styled.div`
  position: relative;
`;

interface ViewportProps {
  component: ComponentType;
}

const Viewport = styled.div<ViewportProps>`
  overflow: hidden;

  &.is-draggable {
    cursor: move;
    cursor: grab;
  }

  &.is-dragging {
    cursor: grabbing;
  }
`;

const Container = styled.div`
  display: flex;
  will-change: transform;
  margin-left: -1rem;
`;

const Slide = styled.div`
  flex: 0 0 auto;
  width: 80%;
  position: relative;
  padding-left: 1rem;
  counter-increment: embla;
`;

const SlideInner = styled.div`
  background-color: rgb(40, 44, 52);
  position: relative;
  border-radius: 0.5rem;
  min-height: 200px;
  padding-bottom: 46%;
  font-size: 5rem;

  &::before {
    color: white;
    font-weight: 300;
    line-height: 1;
    content: counter(embla);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Dots = styled.div`
  position: absolute;
  margin-top: 1rem;
  display: flex;
  list-style: none;
  padding-left: 0;
  justify-content: center;
  left: 0;
  right: 0;
  top: 100%;
`;

const EmblaCarouselWrapper = styled.div`
  // Add any additional styling if needed
`;

const EmblaCarouselComponent: React.FC<EmblaCarouselComponentProps> = ({ requests }) => {
  const [EmblaCarouselReact, embla] = useEmblaCarousel({ loop: false });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback((index: number) => embla?.scrollTo(index), [embla]);
  const scrollPrev = useCallback(() => embla?.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla?.scrollNext(), [embla]);

  useEffect(() => {
    const initializeEmbla = () => {
      if (embla) {
        const onSelect = () => {
          setSelectedIndex(embla.selectedScrollSnap());
          setPrevBtnEnabled(embla.canScrollPrev());
          setNextBtnEnabled(embla.canScrollNext());
        };
        setScrollSnaps(embla.scrollSnapList());
        embla.on("select", onSelect);
        onSelect();
      }
    };

    initializeEmbla();
  }, [embla]);

  return (
    <Embla>
      <Viewport component={EmblaCarouselReact as ComponentType} />
      <Container>
        {requests.map((request, index) => (
          <Slide key={index}>
            <SlideInner>
              <div>
                <p>ID: {request.id}</p>
                <p>Pickup Location: {request.pickup_location}</p>
                <p>Drop-off Location: {request.dropoff_location}</p>
                <p>Description: {request.description}</p>
                <p>Preferred Delivery Time: {request.preferred_delivery_time}</p>
                <p>Price Offer: ${request.price_offer}</p>
                <p>Status: {request.status}</p>
              </div>
            </SlideInner>
          </Slide>
        ))}
      </Container>
      <Dots>
        {scrollSnaps.map((snap, index) => (
          <DotButton
            selected={index === selectedIndex}
            onClick={() => scrollTo?.(index)}
            key={index}
          />
        ))}
      </Dots>
      <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
    </Embla>
  );
};

export default EmblaCarouselComponent;
