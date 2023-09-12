import NavBar from "../Components/nav-bar";
import Hero from "../Components/Hero";
import ContactPic from "../Assets/ContactPic.png"

function Contact() {
    return (
        <>
        <NavBar/>
        <Hero
                cName="hero-mid"
                heroImage={ContactPic}
                title="Contact Us"
                btnClass="hide"
        />
        </>
    )
}
export default Contact;