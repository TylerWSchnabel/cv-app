/* eslint-disable no-useless-constructor */
import React, { Component} from "react";

class Header extends Component {

    constructor(props) {
        super(props)
    }

    render(){
        return(
            <div className="head">
                <div className="headName">
                    <h1>{this.props.name}</h1>
                </div>
                <div className="contactInfo">
                    <div className="headPhone">
                        <p>{this.props.phone}</p>
                    </div>
                    <div className="headEmail">
                        <p>{this.props.email}</p>
                    </div>
                    <div className="headLinkedIn">
                        <p>{this.props.linkedIn}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;