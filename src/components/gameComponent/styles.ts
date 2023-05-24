import styled from "styled-components";

export const GameContainer = styled.div`
  background: url("https://res.cloudinary.com/dmceve2cp/image/upload/v1684711070/256_Wood_Planks_08_ccrsfu.png");
  background-size: contain;

  border-width: 7px;
  border-style: solid;
  border-image: url("https://res.cloudinary.com/dmceve2cp/image/upload/v1684710923/256_Brick_05_zgaxv0.png")
    18 repeat;

  box-shadow: inset 0px 0px 7px 4px rgba(0, 0, 0, 0.4);

  padding: 10px 20px;
`;

export const StatusContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background: url("https://res.cloudinary.com/dmceve2cp/image/upload/v1684864773/HEDGE_1A_hdqrq3.png");
  background-size: contain;
  box-shadow: inset 0px 0px 7px 4px rgba(0, 0, 0, 0.4);

  color: #262626;
  font-weight: 600;

  font-size: 16px;

  text-shadow: 1px 0 #fff, -1px 0 #fff, 0 2px #fff, 0 -1px #fff, 1px 1px #fff,
    -1px -1px #fff, 1px -1px #fff, -1px 1px #fff;

  width: 70%;
  letter-spacing: 2px;

  padding: 10px 20px;
  margin: 0 auto;

  border-width: 7px;
  border-style: solid;
  border-image: url("https://res.cloudinary.com/dmceve2cp/image/upload/v1684864589/s2_Brick_03_Grey_gj9pie.png")
    8 repeat;
`;
