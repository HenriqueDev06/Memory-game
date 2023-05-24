import React from "react";

import Card from "../card";
import { BoardContainer } from "./styes";

interface Card {
  id: number;
  image: string;
  flipped: boolean;
}

interface BoardProps {
  cards: Card[];
  handleCardClick: (id: number) => void;
}

const Board: React.FC<BoardProps> = ({ cards, handleCardClick }) => {
  return (
    <BoardContainer className="board">
      {cards.map((card: Card) => (
        <Card
          key={card.id}
          id={card.id}
          image={card.image}
          flipped={card.flipped}
          onClick={handleCardClick}
        />
      ))}
    </BoardContainer>
  );
};

export default Board;
