import React, { FC } from "react";
import { Routes, Route } from "react-router-dom";

import { GamePage, Home } from "../pages";

export const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/game/:theme" element={<GamePage />} />
    </Routes>
  );
};

export default Router;
