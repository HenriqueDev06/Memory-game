import React from 'react';

import {
  CardContainer,
  CardInner,
  CardBack,
  CardFront,
  CardImage,
} from './styles';

type CardProps = {
  id: number;
  image: string;
  flipped: boolean;
  onClick: (id: number) => void;
};

const Card: React.FC<CardProps> = ({ id, image, flipped, onClick }) => {
  return (
    <CardContainer>
      <CardInner flipped={flipped} onClick={() => onClick(id)}>
        <CardFront />
        <CardBack>
          <CardImage src={image} alt="Card" />
        </CardBack>
      </CardInner>
    </CardContainer>
  );
};

export default Card;
