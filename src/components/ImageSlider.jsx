
import slideIconLeft from "../assets/images/icon-angle-left.svg";
import slideIconRight from "../assets/images/icon-angle-right.svg";
import { useState } from "react";

const ImageSlider = ({slides}) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.lenght - 1 : currentIndex -1;
        setCurrentIndex(newIndex);
    }
    const goToNext = () => {
        const isLastslide = currentIndex === slides.lenght
        const newIndex = isLastslide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    return (
        <>
            <div className="slider-controls">
            <button className="slider-btn" onClick={goToPrevious}>
                <img src={slideIconLeft} alt="slideIconLeft"  />
            </button>

            <button className="slider-btn" onClick={goToNext}>
                <img src={slideIconRight} alt="slideIconRight" />
            </button>
            </div>
            <div>Good</div>
        </>
    )
}
export default ImageSlider;