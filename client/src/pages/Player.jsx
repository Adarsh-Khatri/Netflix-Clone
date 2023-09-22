import React from "react";
import { useNavigate } from "react-router-dom";
import { PLAYER_CONTAINER } from "../styles/Player.styled.js";
import { BsArrowLeft } from "react-icons/bs";
import video from "../assets/video.mp4";
export default function Player() {
  const navigate = useNavigate();

  return (
    <PLAYER_CONTAINER>
      <div className="player">
        <div className="back">
          <BsArrowLeft onClick={() => navigate(-1)} />
        </div>
        <video src={video} autoPlay loop controls muted />
      </div>
    </PLAYER_CONTAINER>
  );
}
