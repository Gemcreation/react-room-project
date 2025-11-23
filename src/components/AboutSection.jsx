
import darkImg from '../assets/images/image-about-dark.jpg';
import lightImg from '../assets/images/image-about-light.jpg';

const AboutSection = ()=> {
    return(
        <section className="about-area main">
        {/* second SECTION at the below, carry two img and a text inbtw */}
            <img src={darkImg} className="about-img" />
    
            <div className="about-text">
                <h3>ABOUT OUR FURNITURE</h3>
                <p>
                Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.
                </p>
            </div>
    
            <img src={lightImg} className="about-img" />
        </section>
    );
}

export default AboutSection;