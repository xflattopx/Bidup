import styled from 'styled-components';

export const SwiperContainer = styled.div`
    width: 100%;
    max-width: 100%;
    overflow: auto;
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
`;

export const swiperItem = styled.li`
    width = 100%;
`;

