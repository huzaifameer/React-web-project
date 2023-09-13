import "./Project.css"
import ProjectData from "./Project-data";
import javaProj from "../Assets/javaProjImg.jpg"
import PyhtonProj from "../Assets/pyhtonProjImg.png"
import WebProj from "../Assets/webProjImg.png"

function Project(){
    return(
        <div className="project">
            <h1>Recent Projects</h1>
            <p>You can discover many unique projects using our github account.</p>
            <div className="projectCard">
                <ProjectData
                image={javaProj}
                heading="Project - 1"
                text="This project was created with Java. The main concepts used for 
                    this are java fundamentals, objects, classes, and encapsulation. 
                    We worked on this project for about a week."
                />
                <ProjectData
                image={PyhtonProj}
                heading="Project - 2"
                text="This project was created with Python. The main concepts used for 
                    this are java fundamentals including functions and simple logics. 
                    We worked on this project for less no of days."
                />
                <ProjectData
                image={WebProj}
                heading="Project - 3"
                text="This project was created with HTML, CSS and JavaScript.Also
                    React has been used as the framework to build this web. The main concepts used for 
                    this are java fundamentals including functions and simple logics. "
                />
            </div>
        </div>
    )
}
export default Project;