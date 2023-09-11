import NavBar from "../Components/nav-bar";
import Hero from "../Components/Hero";
import HomePage from "../Assets/HomePagePic.png"
function Home() {
    return (
        <>
        <NavBar/>
        <Hero
        cName="hero"
        heroImage={HomePage}
        title="Begin your journey With Us"
        text="Providing a better service for you"
        buttonText="Our Plan"
        url="/"
        btnClass="show"
        />
        </>
    )
}
export default Home;