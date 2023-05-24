import React, { FC, useState, useEffect } from "react";
import { Howl } from "howler";
import { useNavigate } from "react-router-dom";

import {
  Container,
  MenuContainer,
  ThemesContainer,
  ThemeButton,
} from "./styles";

const sound = new Howl({
  src: [
    "https://res.cloudinary.com/dmceve2cp/video/upload/v1684860358/zapsplat_multimedia_button_click_fast_wooden_organic_005_78839_jstuhb.mp3",
  ],
});

const music = new Howl({
  src: [
    "https://res.cloudinary.com/dmceve2cp/video/upload/v1684862205/SnapSave.io_-_Fall_Guys__Everybody_Falls_-_8_Bit_Lofi_Hip_Hop_128_kbps_otikra.mp3",
  ],
  loop: true,
});

const Home: FC = () => {
  const [selectedTheme, setSelectedTheme] = useState("minecraft");

  const navigate = useNavigate();

  const handleThemeButtonClick = (themeId: string) => {
    setSelectedTheme(themeId);
    sound.play();
  };

  useEffect(() => {
    music.load();
    music.play();
    music.volume(0.4);

    return () => {
      music.unload();
    };
  }, []);

  const handleButtonClick = () => {
    music.fade(0.4, 0, 1000);
    setTimeout(() => {
      navigate(`/game/${selectedTheme}`);
    }, 2000);
  };

  return (
    <Container>
      <MenuContainer>
        <img
          alt=" logo"
          id="logo"
          src="https://res.cloudinary.com/dmceve2cp/image/upload/v1684858595/6822ad6e75111784bd5025f59ecd727d_idk0ju.png"
        />
        <ThemesContainer>
          <ThemeButton
            image="https://res.cloudinary.com/dmceve2cp/image/upload/v1684854335/download_mjsd5z.png"
            themeId="youtube"
            selected={selectedTheme === "youtube"}
            onClick={() => handleThemeButtonClick("youtube")}
          />
          <ThemeButton
            image="https://res.cloudinary.com/dmceve2cp/image/upload/v1684854279/images_g1n54n.jpg"
            themeId="minecraft"
            selected={selectedTheme === "minecraft"}
            onClick={() => handleThemeButtonClick("minecraft")}
          />
          <ThemeButton
            image="https://res.cloudinary.com/dmceve2cp/image/upload/v1684807320/download_mclmxu.jpg"
            themeId="bda"
            selected={selectedTheme === "bda"}
            onClick={() => handleThemeButtonClick("bda")}
          />
          <ThemeButton
            image="https://res.cloudinary.com/dmceve2cp/image/upload/v1684807423/download_kevnt8.png"
            themeId="brasileirao"
            selected={selectedTheme === "brasileirao"}
            onClick={() => handleThemeButtonClick("brasileirao")}
          />
          <ThemeButton
            image="https://res.cloudinary.com/dmceve2cp/image/upload/v1684807537/download_yjbv2k.png"
            themeId="netflix"
            selected={selectedTheme === "netflix"}
            onClick={() => handleThemeButtonClick("netflix")}
          />
          <ThemeButton
            image="https://res.cloudinary.com/dmceve2cp/image/upload/v1684854210/download_oet6m9.png"
            themeId="anime"
            selected={selectedTheme === "anime"}
            onClick={() => handleThemeButtonClick("anime")}
          />
        </ThemesContainer>
        <button className="button-74" type="button" onClick={handleButtonClick}>
          Jogar
        </button>
      </MenuContainer>
    </Container>
  );
};
export { Home };
