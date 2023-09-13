import "./Hero-styles.css";

function Hero(props) {
    return (
        <>
        <div className={props.cName}>
            <img alt="Hero-Image" src={props.heroImage} />
            <div className="hero-text">
                <h1>{props.title}</h1>
                <p>{props.text}</p>
                <a href={props.url} className={props.btnClass}><i class="fa-brands fa-github"> </i>{props.buttonText}</a>
            </div>
        </div>
        </>
    )
}
export default Hero;