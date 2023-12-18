import styled from 'styled-components';

export const SwiperContainer = styled.div`
    width: 100%;
    max-width: 100%;
    overflow: hidden;
    touch-actions: pan-y;
`;

export const SwiperList = styled.ul`
    display: flex;
    flex-direction: row;
    list-style: none;
    padding: 0;
    margin: 0;
    min-width: 100%;
    cursor: grab;
    touch-action: pan-y;
    gap: 16px; /* Increased gap between cards */
`;

export const SwiperItem = styled.li`
    width: 100%;
`;

export const CardWrapper = styled.div`
  background-color: #f7f7f7; /* Light background color */
  border: 1px solid #e0e0e0; /* Light border color */
  border-radius: 12px; /* Increased border radius */
  padding: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Slightly larger box shadow */
  flex-grow: 1; /* Allow each card to take the available space */
  transition: background-color 0.3s ease; /* Smooth transition for hover effect */

  &:hover {
    background-color: #fff; /* Change background color on hover */
  }
`;

export const Title = styled.h2`
  margin-bottom: 8px;
  color: #333; /* Dark title color */
`;

export const Description = styled.p`
  margin-bottom: 8px;
  color: #666; /* Medium text color */
`;
