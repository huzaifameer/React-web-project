import DestinationDataFile from "./Destination-data"
import "./Destination-styles.css"
import javapic1 from "../Assets/java1.jpg"
import javapic2 from "../Assets/java-pic.png"
import jScript1 from "../Assets/javaScript1.jpeg"
import jScript2 from "../Assets/jScript2.png"
import htmlCss1 from "../Assets/htmlpic1.jpg"
import htmlCss2 from "../Assets/htmlCss2.jpg"
import phpBack1 from "../Assets/back-end1.jpg"
import phpBack2 from "../Assets/back-end2.jpg"
import pyhtonPic1 from "../Assets/python1.png"
import pyhtonPic2 from "../Assets/python2.png"



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
             <DestinationDataFile
                cName="first-desc-reverse"
                heading = "PHP and back-end Technologies"
                text="PHP (Hypertext Preprocessor) is a server-side scripting language used predominantly in web development.
                    It dynamically generates web content within HTML, making it ideal for building web applications, content 
                    management systems (CMS), and e-commerce platforms. PHP seamlessly integrates with databases like MySQL, 
                    simplifying database-driven web applications. Despite competition from newer languages, PHP remains popular
                     due to its simplicity and extensive community support."
                media1={phpBack1}
                media2={phpBack2}
                readMore="https://www.w3schools.com/php"
             />
             <DestinationDataFile
                cName="first-desc"
                heading = "Python"
                text="Python is a versatile, high-level programming language known for its readability and simplicity. It is 
                    employed in web development, data analysis, scientific computing, artificial intelligence, and automation. 
                    Python features robust web frameworks like Django and Flask, making it suitable for building scalable web 
                    applications. Its extensive library ecosystem includes NumPy, pandas, and TensorFlow, catering to data science 
                    and machine learning applications, while its cross-platform compatibility and active community foster widespread adoption."
                media1={pyhtonPic1}
                media2={pyhtonPic2}
                readMore="https://www.w3schools.com/python"
             />
        </div>
    )
}
export default Destination;