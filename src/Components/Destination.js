import DestinationDataFile from "./Destination-data"
import "./Destination-styles.css"
import javapic1 from "../Assets/java1.jpg"
import javapic2 from "../Assets/java-pic.png"
import jScript1 from "../Assets/javaScript1.jpeg"
import jScript2 from "../Assets/jScript2.png"
import htmlCss1 from "../Assets/htmlpic1.jpg"
import htmlCss2 from "../Assets/htmlCss2.jpg"


const Destination =()=>{
    return(
        <div className="destination">
            <h1>What do we utilise most commonly</h1>
            <p>A lot of career opportunities, innovation, a wide range of industries, and remote employment choices.</p>
            <DestinationDataFile
                cName="first-desc"
                heading = "Java"
                text="Java is a versatile, object-oriented programming language known for its portability across platforms. 
                    It is widely used in web development, Android app development, and enterprise software. Java boasts 
                    strong security features and scalability. Its syntax resembles C, making it accessible for developers, 
                    and it supports multi-threading for high-performance applications. Java's rich ecosystem includes popular 
                    frameworks like Spring and Hibernate."
                media1={javapic1}
                media2={javapic2}
                readMore="https://www.w3schools.com/java"
             />
             <DestinationDataFile
                cName="first-desc-reverse"
                heading = "JavaScript"
                text="JavaScript is a dynamic, high-level scripting language essential for web development. It enhances web 
                    interactivity by allowing real-time manipulation of web page elements in browsers. JavaScript powers modern
                    web applications and can run on the server-side using Node.js. It is supported by an extensive ecosystem of 
                    libraries and frameworks, including React and Angular, simplifying web development."
                media1={jScript1}
                media2={jScript2}
                readMore="https://www.w3schools.com/js"
             />
             <DestinationDataFile
                cName="first-desc"
                heading = "HTML and CSS"
                text="HTML (Hypertext Markup Language) defines the structure of web content using tags, while CSS 
                    (Cascading Style Sheets) controls layout and presentation. They work in tandem to create visually
                     appealing and structured web pages. HTML5 introduces multimedia support and improved semantics, 
                     while CSS3 adds transitions, animations, and responsive design, making them indispensable for web 
                     designers and developers."
                media1={htmlCss1}
                media2={htmlCss2}
                readMore="https://www.w3schools.com/html"
             />
        </div>
    )
}
export default Destination;