import NavBar from "../Components/nav-bar";
import Hero from "../Components/Hero";
import ContactPic from "../Assets/ContactPic.png"
import Footer from "../Components/footer";
import ContactForm from "../Components/ContactForm";

function Contact() {
    return (
        <>
        <NavBar/>
        <Hero
                cName="hero-mid"
                heroImage={ContactPic}
                title="Contact Us"
                btnClass="hide"
                iconClass="IconClass-not"
        />
        <ContactForm></ContactForm>
        <Footer/>
        </>
    )
}
export default Contact;