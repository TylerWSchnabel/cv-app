/* eslint-disable no-useless-constructor */
import React, { Component} from "react";

class About extends Component {

    constructor(props) {
        super(props)
    }

    render(){
        return(
            <div id="aboutDiv">
                <hr className="sectionDivider"></hr>
                <p id="about">
                    {this.props.about}
                </p>
            </div>
        )
    }

}

export default About