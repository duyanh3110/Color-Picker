import React, { Component } from "react";
import "../App.css";

class Result extends Component {
    setStyle() {
        return {
            color: this.props.textColor,
            borderColor: this.props.textColor,
            fontSize: this.props.fontSize
        };
    }

    render() {
        return (
            <div className = "col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <p>Color: { this.props.color } - FontSize: {this.props.fontSize }px</p>
                <div 
                    id = "content" 
                    style = { this.setStyle() }
                >
                    Content
                </div>
            </div>
        );
    }
}

export default Result;