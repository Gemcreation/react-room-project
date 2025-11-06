
// import slideImg from "../assets/images/desktop-image-hero-1.jpg";
import slideIconLeft from "../assets/images/icon-angle-left.svg";
import slideIconRight from "../assets/images/icon-angle-right.svg";
import arrow from "../assets/images/icon-arrow.svg";
// import ImageSlider from "./ImageSlider";
import { useState, useEffect } from "react";

const FirstSection = () => {

    // const slides = [
    //     { url: "http://localhost:3000/desktop-image-hero-1.jpg", title: "beach" },
    //     { url: "http://localhost:3000/desktop-image-hero-2.jpg", title: "boat" },
    //     { url: "http://localhost:3000/desktop-image-hero-3.jpg", title: "forest" },
    //   ];
    const slideImg = [
        "/images/desktop-image-hero-1.jpg",
        "/images/desktop-image-hero-2.jpg",
        "/images/desktop-image-hero-3.jpg",
      ];
    //above is the images from the public folder
    const [currentIndex, setCurrentIndex] = useState(0);

      //tryign to automate the image slider with useEffect
    useEffect(() => {
        const interval = setInterval(() => {
          // move to next image (loop back to first)
          setCurrentIndex((prevIndex) =>
            prevIndex === slideImg.length - 1 ? 0 : prevIndex + 1
          );
        }, 3000); // yeah, this change every 3 seconds
    
        //I'm using this to cleanup to prevent multiple intervals running
        return () => clearInterval(interval);
      }, [slideImg.length]);

      const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? slideImg.length - 1 : prevIndex - 1
        );
      };
    
      const goToNext = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === slideImg.length - 1 ? 0 : prevIndex + 1
        );
      };

      //main work
    return(

        <section className="hero main">
            <article className="hero-left">
                <div className="slider-wrap">
                    {/* <ImageSlider slides={slides} /> */}
                    {/* i was thinking to use a props but i'm able to do the slider with jsut state and make use of effect for the automatic timing */}
                    <img src={slideImg[currentIndex]} alt="Hero" />
                    
                </div>

                {/* <div className="slider-controls">
                    <button className="slider-btn">
                    <img src={slideIconLeft} alt="slideIconLeft" />
                    </button>

                    <button className="slider-btn">
                    <img src={slideIconRight} alt="slideIconRight" />
                    </button>
                </div> */}
            </article>

            <article className="hero-right">
                <div className="hero-right-text">
                        <h1 className="hero-title">Discover innovative ways to decorate</h1>

                        <p class="hero-copy">
                        We provide unmatched quality, comfort, and style for property owners across the country.
                        Our experts combine form and function in bringing your vision to life. Create a room in your
                        own style with our collection and make your property a reflection of you and what you love.
                        </p>

                        <a href="#shop" className="cta-shop">
                            <span>SHOP NOW</span> 
                            <img src={arrow} alt="Room logo" className="arrow-icon" />
                        </a>
                </div>
                
                <div className="hero-right-handling-btn">
                    <div className="slider-controls">
                        <button className="slider-btn" onClick={goToPrevious}>
                            <img src={slideIconLeft} alt="slideIconLeft" />
                        </button>

                        <button className="slider-btn" onClick={goToNext}>
                            <img src={slideIconRight} alt="slideIconRight" />
                        </button>
                    </div>
                </div>
                
            </article>
        </section>

    )
}

export default FirstSection;