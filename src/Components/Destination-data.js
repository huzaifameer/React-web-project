import { Component } from "react";
import "./Destination-styles.css"



class DestinationData extends Component{
    render(){
        return(
            <div className={this.props.cName}>
                <div className="desc-text">
                    <h2>{this.props.heading}</h2>
                    <p>{this.props.text}</p>
                    <div className="read-more">
                        <u>Read More </u>:<div><a className="readMore-link" href={this.props.readMore}><i class="fa-brands fa-readme"></i></a></div>
                    </div>
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