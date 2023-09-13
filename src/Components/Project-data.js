import "./Project.css"

function ProjectData(props){
    return(
        <div className="p-card">
            <div className="p-image">
                <img src={props.image} alt="Image"></img>
            </div>
            <h4>{props.heading}</h4>
            <p>{props.text}</p>
        </div>
    )
}
export default ProjectData;