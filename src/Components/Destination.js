import DestinationDataFile from "./Destination-data"
import "./Destination-styles.css"
import javapic1 from "../Assets/Java-Vdo-2.mp4"
import javapic2 from "../Assets/java-pic.png"


const Destination =()=>{
    return(
        <div className="destination">
            <h1>What do we utilise most commonly</h1>
            <p>A lot of career opportunities, innovation, a wide range of industries, and remote employment choices.</p>
            <DestinationDataFile
                heading = "Java"
                text="Java is a versatile, object-oriented programming language known for its portability across platforms. 
                    It is widely used in web development, Android app development, and enterprise software. Java boasts 
                    strong security features and scalability. Its syntax resembles C, making it accessible for developers, 
                    and it supports multi-threading for high-performance applications. Java's rich ecosystem includes popular 
                    frameworks like Spring and Hibernate."
                media1={javapic1}
                media2={javapic2}
             />
        </div>
    )
}
export default Destination;