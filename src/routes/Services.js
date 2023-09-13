import NavBar from "../Components/nav-bar";
import Hero from "../Components/Hero";
import ServicePic from "../Assets/ServicePic.png"
import Footer from "../Components/footer"
import Project from "../Components/Project"
function Services() {
    return (
        <>
            <NavBar/>
            <Hero
                cName="hero-mid"
                heroImage={ServicePic}
                title="Our Services"
                btnClass="hide"
                iconClass="IconClass-not"
        />
        <Project/>
        <Footer/>
        </>
    )
}
export default Services;