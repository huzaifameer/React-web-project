import NavBar from "../Components/nav-bar";
import Hero from "../Components/Hero";
import ContactPic from "../Assets/ContactPic.png"
import Footer from "../Components/footer";

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
        <Footer/>
        </>
    )
}
export default Contact;