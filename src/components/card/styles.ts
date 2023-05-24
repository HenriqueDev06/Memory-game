import React from "react";
import styled, { css } from "styled-components";

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
  transform: ${({ flipped }) => (flipped ? "rotateY(180deg)" : "none")};
`;

export const CardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(https://res.cloudinary.com/dmceve2cp/image/upload/v1684855904/256_Marble_01_fgebug.png);
  backface-visibility: hidden;
  background-position: center;
  background-size: contain;
  box-shadow: inset 0px 0px 7px 4px rgba(0, 0, 0, 0.4);

  border-width: 5px;
  border-style: solid;
  border-image: url("https://res.cloudinary.com/dmceve2cp/image/upload/v1684864589/s2_Brick_03_Grey_gj9pie.png")
    8 repeat;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #262626;
  font-weight: 600;

  font-size: 36px;

  text-shadow: 1px 0 #fff, -1px 0 #fff, 0 2px #fff, 0 -1px #fff, 1px 1px #fff,
    -1px -1px #fff, 1px -1px #fff, -1px 1px #fff;
`;

export const CardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #f2f2f2;
  backface-visibility: hidden;
  transform: rotateY(180deg);

  border-width: 2px;
  border-style: solid;
  border-image: url("https://res.cloudinary.com/dmceve2cp/image/upload/v1684864589/s2_Brick_03_Grey_gj9pie.png")
    8 repeat;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
`;
