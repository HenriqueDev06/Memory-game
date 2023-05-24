import React, { useState, useEffect } from "react";
import { useNavigate, useParams, RouterProps } from "react-router-dom";

import { GameContainer, StatusContainer } from "./styles";
import Board from "../board";
import Card from "../card";
import { GameData } from "../../data/gameCardsData";

interface Card {
  id: number;
  image: string;
  flipped: boolean;
  matched: boolean;
}

interface GameStats {
  totalMoves: number;
  matchedPairs: number;
}

const GameComponent: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [isFlipping, setIsFlipping] = useState(false);
  const [gameStats, setGameStats] = useState<GameStats>({
    totalMoves: 0,
    matchedPairs: 0,
  });

  const { theme } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    console.log(GameData[theme]);
    setCards(shuffleArray(GameData[theme]));
  }, []);

  const shuffleArray = (array: any[]) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = newArray[i];
      newArray[i] = newArray[j];
      newArray[j] = temp;
    }
    return newArray;
  };

  const updateCardMatched = (image: string, matched: boolean) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.image === image ? { ...card, matched } : card
      )
    );
  };

  const flipCard = (id: number) => {
    const updatedCards = cards.map((card) =>
      card.id === id ? { ...card, flipped: true } : card
    );
    setCards(updatedCards);
    return updatedCards;
  };

  const unflipCards = (flippedCards: Card[]) => {
    setTimeout(() => {
      const updatedCards = cards.map((card) =>
        flippedCards.includes(card) ? { ...card, flipped: false } : card
      );
      setCards(updatedCards);
      setIsFlipping(false);
    }, 1000);
  };

  const handleCardClick = (id: number) => {
    if (isFlipping) return;

    setIsFlipping(true);
    setGameStats((prevStats) => ({
      ...prevStats,
      totalMoves: prevStats.totalMoves + 1,
    }));

    const flippedCards = flipCard(id).filter(
      (card) => card.flipped && !card.matched
    );

    if (flippedCards.length === 2) {
      const [firstCard, secondCard] = flippedCards;

      if (firstCard.image === secondCard.image) {
        updateCardMatched(firstCard.image, true);
        setIsFlipping(false);
      } else {
        unflipCards(flippedCards);
      }
    } else {
      setIsFlipping(false);
    }
  };

  const getGameStats = () => {
    const matchedPairs = cards.filter((card) => card.matched).length / 2;
    return { ...gameStats, matchedPairs };
  };

  const checkGameWin = () => {
    return gameStats.matchedPairs === 10;
  };

  useEffect(() => {
    setGameStats(getGameStats());
  }, [cards]);

  useEffect(() => {
    if (checkGameWin()) {
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, [gameStats]);

  return (
    <GameContainer className="game">
      <StatusContainer className="bitfont">
        Pares: {gameStats.matchedPairs} Moves: {gameStats.totalMoves}
      </StatusContainer>
      <Board cards={cards} handleCardClick={handleCardClick} />
    </GameContainer>
  );
};

export default GameComponent;
