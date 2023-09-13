import NavBar from "../Components/nav-bar";
import Hero from "../Components/Hero";
import AboutImage from "../Assets/AboutPagePic.png"
import Footer from "../Components/footer"

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
        <Footer/>
        </>
    )
}
export default About;