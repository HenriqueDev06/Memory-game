import React from 'react';
import styled, { css } from 'styled-components';

interface CardProps {
  flipped: boolean;
}

export const CardContainer = styled.div`
  width: 100px;
  height: 100px;
  perspective: 1000px;
`;

export const CardInner = styled.div<CardProps>`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.3s;
  transform-style: preserve-3d;
  transform: ${({ flipped }) => (flipped ? 'rotateY(180deg)' : 'none')};
`;

export const CardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #ccc;
  backface-visibility: hidden;
`;

export const CardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #f2f2f2;
  backface-visibility: hidden;
  transform: rotateY(180deg);
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
`;
