
import slideIconLeft from "../assets/images/icon-angle-left.svg";
import slideIconRight from "../assets/images/icon-angle-right.svg";
import { useState } from "react";

const slideStyles = {
  width: "100%",
  height: "100%",
  borderRadius: "10px",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const rightArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  right: "-5px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};

const leftArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  left: "32px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};

const sliderStyles = {
  position: "relative",
  height: "100%",
};


const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  return (
    <>
        <div style={sliderStyles}>
        {/* <div>
            <div onClick={goToPrevious} style={leftArrowStyles}>
            ❰
            </div>
            <div onClick={goToNext} style={rightArrowStyles}>
            ❱
            </div>
        </div> */}
        <div style={slideStylesWidthBackground}></div>
        </div>
        
        <div className="hero-right-handling-btn">
            <div onClick={goToPrevious} style={leftArrowStyles}>
                <img src={slideIconLeft} alt="slideIconLeft" />
            </div>
            <div onClick={goToNext} style={rightArrowStyles}>
                <img src={slideIconRight} alt="slideIconRight" />
            </div>
        </div>
    </>
  );
};

export default ImageSlider;