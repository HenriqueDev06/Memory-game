import React from "react";
import { Howl } from "howler";

import {
  CardContainer,
  CardInner,
  CardBack,
  CardFront,
  CardImage,
} from "./styles";

type CardProps = {
  id: number;
  image: string;
  flipped: boolean;
  onClick: (id: number) => void;
};

const sound = new Howl({
  src: [
    "https://res.cloudinary.com/dmceve2cp/video/upload/v1684860358/zapsplat_multimedia_button_click_fast_wooden_organic_005_78839_jstuhb.mp3",
  ],
});

const Card: React.FC<CardProps> = ({ id, image, flipped, onClick }) => {
  const handleFlipCard = () => {
    sound.play();
    onClick(id);
  };

  return (
    <CardContainer>
      <CardInner flipped={flipped} onClick={() => handleFlipCard()}>
        <CardFront className="bitfont">?</CardFront>
        <CardBack>
          <CardImage src={image} alt="Card" />
        </CardBack>
      </CardInner>
    </CardContainer>
  );
};

export default Card;
