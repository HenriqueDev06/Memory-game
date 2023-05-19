import React, { useState, useEffect } from 'react';

import { GameContainer } from './styles';

import Board from '../board';
import Card from '../card';

import { cardsData } from '../../data/gameCardsData';

interface Card {
  id: number;
  image: string;
  flipped: boolean;
}

const GameComponent: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  useEffect(() => {
    const initialCards: Card[] = cardsData;
    setCards(initialCards);
  }, []);

  const handleCardClick = (id: number) => {
    // Lógica para manipular o clique em uma carta
    // Atualize o estado das cartas viradas e verifique se elas são correspondentes
    const updatedCards = cards.map((card) => {
      if (card.id === id) {
        return { ...card, flipped: true };
      }
      return card;
    });
    setCards(updatedCards);
    setFlippedCards([...flippedCards, id]);
  };

  return (
    <GameContainer className="game">
      <h1>Jogo da Memória</h1>
      <Board cards={cards} handleCardClick={handleCardClick} />
    </GameContainer>
  );
};

export default GameComponent;
