import React from "react";
import background from "../assets/login.jpg";
import { BACKGROUNDIMAGE_CONTAINER } from "../styles/BackgroundImage.styled";

export default function BackgroundImage() {
  return (
    <BACKGROUNDIMAGE_CONTAINER>
      <img src={background} alt="background" />
    </BACKGROUNDIMAGE_CONTAINER>
  );
}

