import React, { useState, useEffect } from "react";

import { GameContainer } from "./styles";

import Board from "../board";
import Card from "../card";

import { cardsData } from "../../data/gameCardsData";

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
  const [gameStats, setGameStats] = useState<GameStats>({
    totalMoves: 0,
    matchedPairs: 0,
  });

  useEffect(() => {
    setCards(cardsData);
  }, []);

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
    }, 1000);
  };

  const handleCardClick = (id: number) => {
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
      } else {
        unflipCards(flippedCards);
      }
    }
  };

  const getGameStats = () => {
    const matchedPairs = cards.filter((card) => card.matched).length / 2;

    return { ...gameStats, matchedPairs };
  };

  useEffect(() => {
    setGameStats(getGameStats());
  }, [cards]);

  useEffect(() => {
    if (gameStats.matchedPairs === cards.length / 2) {
      console.log("Parabéns, você ganhou o jogo!");
      // Aqui você pode adicionar lógica adicional para exibir uma mensagem de vitória ou realizar outras ações necessárias.
    }
  }, [gameStats]);

  return (
    <GameContainer className="game">
      <h1>Jogo da Memória</h1>
      <Board cards={cards} handleCardClick={handleCardClick} />
    </GameContainer>
  );
};

export default GameComponent;
