import NavBar from "../Components/nav-bar";
import Hero from "../Components/Hero";
function Home() {
    return (
        <>
        <NavBar/>
        <Hero
        cName="hero"
        heroImage="https://img.freepik.com/premium-photo/cup-coffee-beansgenerative-ai_391052-22577.jpg?w=1060"
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