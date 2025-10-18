
import slideImg from "../assets/images/desktop-image-hero-1.jpg";
import slideIconLeft from "../assets/images/icon-angle-left.svg";
import slideIconRight from "../assets/images/icon-angle-right.svg";
import arrow from "../assets/images/icon-arrow.svg";

const FirstSection = () => {

    return(

        <section className="hero">
            <article className="hero-left">
                <div className="slider-wrap">
                    <img src={slideImg} alt="Hero" />
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
                            {/* <span class="arrow"></span> */}
                        </a>
                </div>
                
                <div className="hero-right-handling-btn">
                    <div className="slider-controls">
                        <button className="slider-btn">
                            <img src={slideIconLeft} alt="slideIconLeft" />
                        </button>

                        <button className="slider-btn">
                            <img src={slideIconRight} alt="slideIconRight" />
                        </button>
                    </div>
                </div>
                
            </article>
        </section>

    )
}

export default FirstSection;