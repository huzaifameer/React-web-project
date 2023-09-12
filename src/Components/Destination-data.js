import { Component } from "react";
import "./Destination-styles.css"


class DestinationData extends Component{
    render(){
        return(
            <div className="first-desc">
                <div className="desc-text">
                    <h2>{this.props.heading}</h2>
                    <p>{this.props.text}</p>
                </div>
                <div className="image">
                    <video controls src={this.props.media1} type="video/mp4" loop autoPlay />
                    <img alt="java-pic-2" src={this.props.media2} />
                </div>    
            </div>
        )
    }
}
export default DestinationData;