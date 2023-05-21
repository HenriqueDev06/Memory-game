import React, { FC } from "react";

import { Container } from "./styles";
import GameComponent from "../../components/gameComponent";

const GamePage: FC = () => (
  <Container>
    <GameComponent />
  </Container>
);

export { GamePage };
