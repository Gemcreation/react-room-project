
import slideImg from "../assets/images/desktop-image-hero-1.jpg";
import slideIconLeft from "../assets/images/icon-angle-left.svg";
import slideIconRight from "../assets/images/icon-angle-right.svg";
import arrow from "../assets/images/icon-arrow.svg";

const FirstSection = () => {

    return(

        <section>
            <article>
                <div>
                    <img src={slideImg} alt="Hero image" />
                </div>
                <div>
                    <button>
                    <img src={slideIconLeft} alt="slideIconLeft" />
                    </button>
                    <button>
                    <img src={slideIconRight} alt="slideIconRight" />
                    </button>
                </div>
            </article>

            <article>
                <h1>Discover innovative ways to decorate</h1>

                <p>
                We provide unmatched quality, comfort, and style for property owners across the country.
                Our experts combine form and function in bringing your vision to life. Create a room in your
                own style with our collection and make your property a reflection of you and what you love.
                </p>

                <a href="#shop">
                    SHOP NOW 
                <img src={arrow} alt="Room logo" />
                    {/* <span class="arrow"></span> */}
                </a>
            </article>
        </section>

    )
}

export default FirstSection;