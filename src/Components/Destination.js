import javapic1 from "../Assets/JavaImg1.png"


const Destination =()=>{
    return(
        <div className="destination">
            <h1>What do we utilise most commonly</h1>
            <p>A lot of career opportunities, innovation, a wide range of industries, and remote employment choices.</p>
            <div className="first-desc">
                <div className="desc-text">
                    <h2>Java</h2>
                    <p>
                        Java is a versatile, object-oriented programming language known for its portability across platforms. 
                        It is widely used in web development, Android app development, and enterprise software. Java boasts 
                        strong security features and scalability. Its syntax resembles C, making it accessible for developers, 
                        and it supports multi-threading for high-performance applications. Java's rich ecosystem includes popular 
                        frameworks like Spring and Hibernate.
                    </p>
                </div>
                <div className="image">
                    <img alt="Java-pic-1" src={javapic1} />
                </div>    
            </div> 
        </div>
    )
}
export default Destination;