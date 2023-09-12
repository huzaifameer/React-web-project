import NavBar from "../Components/nav-bar";
import Hero from "../Components/Hero";
import AboutImage from "../Assets/AboutPagePic.png"

function About() {
    return (
        <>
            <NavBar/>
            <Hero
                cName="hero-mid"
                heroImage={AboutImage}
                title="Discover more about us"
                btnClass="hide"
        />
        </>
    )
}
export default About;