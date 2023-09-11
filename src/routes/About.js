import NavBar from "../Components/nav-bar";
import Hero from "../Components/Hero";
import AboutImage from "../Assets/AboutPagePic.png"

function About() {
    return (
        <>
            <NavBar/>
            <Hero
                cName="hero"
                heroImage={AboutImage}
                title="Discover more about us"
                text="Providing a better service for you"
                btnClass="show"
        />
        </>
    )
}
export default About;