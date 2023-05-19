import React, { FC } from 'react';

import { Container } from './styles';
import GameComponent from '../../components/gameComponent';

const Home: FC = () => (
  <Container>
    <GameComponent />
  </Container>
);

export { Home };
