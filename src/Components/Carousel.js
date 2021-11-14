import React, { useState, useEffect } from "react";
import { SlideImage, StyledSlider } from "./Carouselmage";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(2000);
  const [tempDuration, setTempDuration] = useState(2000);
  const [direction, setDirection] = useState("forward");
  const [tempDirection, setTempDirection] = useState("forward");
  const length = slides.length;

  const nextSlide = () => {
    console.log("autorun");
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      console.log(
        `This will run every ${duration} second in ${direction} direction!`
      );
      if (direction === "forward") {
        nextSlide();
      } else {
        prevSlide();
      }
    }, duration);
    return () => clearInterval(interval);
  }, [current]);

  const submit = () => {
    setDuration(tempDuration);
    setDirection(tempDirection);
  };

  return (
    <>
      <StyledSlider>
        <FaChevronLeft className="leftArrow" onClick={prevSlide} />

        {slides.map((slide, index) => {
          return (
            <div key={index}>
              {index === current && <SlideImage src={slide} alt="" />}
            </div>
          );
        })}
        <FaChevronRight className="rightArrow" onClick={nextSlide} />
      </StyledSlider>
      <span> Counter : {current}</span>
      <br />
      <br />
      <div>
        <form>
          <label>
            Duration:
            <input
              onChange={(e) => setTempDuration(e.target.value * 1000)}
              type="text"
            />
          </label>
          <br /> <br />
          <span>Direction </span>
          <input
            onClick={() => setTempDirection("forward")}
            type="radio"
            value="forward"
            id="forward"
            name="direction"
          />
          <label for="forward">Forward</label>
          <input
            onClick={() => setTempDirection("reverse")}
            type="radio"
            value="reverse"
            id="reverse"
            name="direction"
          />
          <label for="reverse">Reverse</label>
        </form>
        <br />
        <input type="submit" onClick={() => submit()} value="Submit" />
      </div>
    </>
  );
};

export default Carousel;
