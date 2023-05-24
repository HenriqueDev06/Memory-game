import styled from "styled-components";

export const BoardContainer = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  justify-content: center;
  align-items: center;
  justify-items: center;
  align-content: center;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  margin: 20px 0;

  grid-gap: 5px;
`;
