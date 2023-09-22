import React, { useRef, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Card from "./Card";
import { CARDSLIDER_CONTAINER } from "../styles/CardSlider.styled";


export default React.memo(function CardSlider({ data, title }) {


  const listRef = useRef();
  const [sliderPosition, setSliderPosition] = useState(0);
  const [showControls, setShowControls] = useState(false);

  const handleDirection = (direction) => {
    let distance = listRef.current.getBoundingClientRect().x - 70;
    if (direction === "left" && sliderPosition > 0) {
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
      setSliderPosition(sliderPosition - 1);
    }
    if (direction === "right" && sliderPosition < 4) {
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
      setSliderPosition(sliderPosition + 1);
    }
  };

  return (
    <CARDSLIDER_CONTAINER className="d-flex flex-column" showControls={showControls} onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}>
      <h1>{title}</h1>
      <div className="wrapper">
        <div
          className={`slider-action left ${!showControls ? "none" : ""} d-flex justify-content-center align-items-center`}>
          <AiOutlineLeft className="arrow" onClick={() => handleDirection("left")} />
        </div>
        <div className="slider d-flex" ref={listRef}>
          {
            data.map((movie, index) => <Card key={movie.id} movieData={movie} index={index} />)
          }
        </div>
        <div
          className={`slider-action right ${!showControls ? "none" : ""} d-flex justify-content-center align-items-center`} >
          <AiOutlineRight className="arrow" onClick={() => handleDirection("right")} />
        </div>
      </div>
    </CARDSLIDER_CONTAINER>
  );
});

