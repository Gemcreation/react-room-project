
import darkImg from '../assets/images/image-about-dark.jpg';
import lightImg from '../assets/images/image-about-light.jpg';

const AboutSection = ()=> {
    return(
        <section className="about-area main">
            <img src={darkImg} className="about-img" />
    
            <div className="about-text">
                <h3>ABOUT OUR FURNITURE</h3>
                <p>
                    Our multifunctional collection blends design and function to suit your
                    individual taste. Make each room unique or pick a cohesive theme that
                    best expresses your interests…
                </p>
            </div>
    
            <img src={lightImg} className="about-img" />
        </section>
    );
}

export default AboutSection;