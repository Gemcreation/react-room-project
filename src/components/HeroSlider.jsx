
import arrowLeft from '../assets/images/icon-angle-left.svg';
import arrowRight from '../assets/images/icon-angle-right.svg';
import arrowShop from '../assets/images/icon-arrow.svg';
import { useState, useRef } from "react";

const HeroSlider = ()=> {

    // VERY CLEAN SLIDE CONTENT
    const slides = [
      {
        image: "/images/desktop-image-hero-1.jpg",
        title: "Discover innovative ways to decorate",
        text: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
      },
      {
        image: "/images/desktop-image-hero-2.jpg",
        title: "We are available all across the globe",
        text: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
      },
      {
        image: "/images/desktop-image-hero-3.jpg",
        title: "Manufactured with the best materials",
        text: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
      },
    ];

    const [current, setCurrent] = useState(0);

    // Swipe refs for touch
    const startX = useRef(0);

    const goNext = () => setCurrent((prev) => (prev + 1) % slides.length);
    const goPrev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

    // TOUCH HANDLING (VERY SIMPLE)
    const handleTouchStart = (e) => (startX.current = e.touches[0].clientX);
    const handleTouchEnd = (e) => {
        const endX = e.changedTouches[0].clientX;

        if (startX.current - endX > 50) goNext();   // swipe left
        if (endX - startX.current > 50) goPrev();   // swipe right
    };

    return(
        
        <section className="hero-slider main" onTouchStart={handleTouchStart} onTouchEnd=  {handleTouchEnd}>
            {/* SLIDE IMAGE */}
            <div className="slider-image">
            <img src={slides[current].image} alt="slide visual" />
    
                {/* ARROWS */}
                <div className="slider-buttons">
                    <button className="arrow-btn" onClick={goPrev}>
                        <img src={arrowLeft} />
                    </button>
                    <button className="arrow-btn" onClick={goNext}>
                        <img src={arrowRight} />
                    </button>
                </div>
            </div>
  
            {/* TEXT CONTENT */}
            <div className="slider-text">
                <h1>{slides[current].title}</h1>
                <p>{slides[current].text}</p>
                <button className="shop-btn">
                    Shop Now <img src={arrowShop} />
                </button>
            </div>
      </section>
    );
}

export default HeroSlider;