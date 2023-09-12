import NavBar from "../Components/nav-bar";
import Hero from "../Components/Hero";
import ServicePic from "../Assets/ServicePic.png"
function Services() {
    return (
        <>
            <NavBar/>
            <Hero
                cName="hero-mid"
                heroImage={ServicePic}
                title="Our Services"
                btnClass="hide"
        />
        </>
    )
}
export default Services;