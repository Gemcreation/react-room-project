
import SecondSectionImg1 from "../assets/images/image-about-dark.jpg";
import SecondSectionImg2 from "../assets/images/image-about-light.jpg";

const SecondSection = () => {

    return(

        <section id="about" className="about main">
            <div>
                <img src={SecondSectionImg1} alt="About furniture light" />
            </div>

            <div className="text-content">
                <h2>ABOUT OUR FURNITURE</h2>
                <p>
                    Our multifunctional collection blends design and function to suit your individual taste.
                    Make each room unique, or pick a cohesive theme that best expresses your interests and what
                    inspires you. Find the furniture pieces you need, from traditional to contemporary styles
                    or anything in between. Product specialists are available to help you create your dream space.
                </p>
            </div>

            <div>
                <img src={SecondSectionImg2} alt="About furniture light" />
            </div>
      </section>

    )
}

export default SecondSection;