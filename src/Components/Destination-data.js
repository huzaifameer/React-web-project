import { Component } from "react";
import "./Destination-styles.css"


class DestinationData extends Component{
    render(){
        return(
            <div className={this.props.cName}>
                <div className="desc-text">
                    <h2>{this.props.heading}</h2>
                    <p>{this.props.text}</p>
                </div>
                <div className="image">
                    <img alt="pic-1" src={this.props.media1}/>
                    <img alt="pic-2" src={this.props.media2}/>
                </div>    
            </div>
        )
    }
}
export default DestinationData;