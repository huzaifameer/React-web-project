import NavBar from "../Components/nav-bar";
import Hero from "../Components/Hero";
import HomePage from "../Assets/HomePagePic.png"
import Destination from "../Components/Destination";
import Footer from "../Components/footer"
import Project from "../Components/Project";
function Home() {
    return (
        <>
        <NavBar/>
        <Hero
        cName="hero"
        heroImage={HomePage}
        title="Begin your journey With Us"
        text="Providing a better service for you"
        buttonText="Official GitHub "
        url="https://github.com/huzaifameer"
        btnClass="show"
        />
        <Destination></Destination>
        <Project/>
        <Footer/>
        </>
    )
}
export default Home;