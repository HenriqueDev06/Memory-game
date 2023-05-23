import { url } from "inspector";
import styled from "styled-components";

export const Container = styled.section`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background: url("https://images4.alphacoders.com/966/966314.jpg");
  background-size: cover;
`;

export const MenuContainer = styled.div`
  background: url("https://res.cloudinary.com/dmceve2cp/image/upload/v1684711070/256_Wood_Planks_08_ccrsfu.png");
  background-size: cover;

  border-width: 7px;
  border-style: solid;
  border-image: url("https://res.cloudinary.com/dmceve2cp/image/upload/v1684710923/256_Brick_05_zgaxv0.png")
    8 repeat;

  box-shadow: inset 0px 0px 7px 4px rgba(0, 0, 0, 0.4);

  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;

  padding: 25px 20px;

  #logo {
    width: 270px;

    margin-bottom: 15px;
  }

  button {
    width: 70%;
    margin: 14px auto;
    background: url(https://res.cloudinary.com/dmceve2cp/image/upload/v1684855904/256_Marble_01_fgebug.png);
    background-size: 116%;
    border-width: 7px;
    background-repeat: no-repeat;
    border-style: solid;
    background-position: center;
    height: 60px;
    border-image: url(https://res.cloudinary.com/dmceve2cp/image/upload/v1684855914/256_Tiles_Square_01_zbkg8a.png)
      16 repeat;

    font-family: "Poppins";
    box-shadow: inset 0px 0px 7px 4px rgba(0, 0, 0, 0.4);

    transition: 0.4s ease;

    color: #262626;
    font-weight: 600;

    font-size: 16px;

    text-shadow: 2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff, 1px 1px #fff,
      -1px -1px #fff, 1px -1px #fff, -1px 1px #fff;

    :hover {
      background-size: 100%;
      border-image-slice: 14;
      cursor: pointer;
    }

    :active {
      border-width: 10px;
    }
  }
`;

export const ThemesContainer = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  justify-items: center;
  align-content: center;
  grid-template-columns: 1fr 1fr 1fr;

  grid-gap: 10px;
`;

export const ThemeButton = styled.div<{
  image: string;
  themeId: string;
  selected?: boolean;
}>`
  width: 70px;
  height: 70px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url(${(props) => props.image});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;

  cursor: pointer;

  transition: 0.8s ease;

  border-image-source: ${(props) =>
    props.selected
      ? "url(https://res.cloudinary.com/dmceve2cp/image/upload/v1684858860/s2_Brick_02_Grey_gxkrvl.png)"
      : "url(https://res.cloudinary.com/dmceve2cp/image/upload/v1684858867/s2_Brick_02_Orange_sz0dpf.png)"};

  border-image-slice: 16;
  border-image-repeat: repeat;
  border-style: solid;
  border-width: 5px;

  box-shadow: inset 0px 0px 4px 4px rgba(0, 0, 0, 0.4);
`;
