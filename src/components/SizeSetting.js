import React, { Component } from "react";
import "../App.css";

class SizeSetting extends Component {
    onChangeSize(value) {
        this.props.onActiveSize(value);
    }

    render() {
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">Size: { this.props.fontSize }px</h3>
                </div>
                <div className="panel-body">
                    <button 
                        type = "button" 
                        className = "btn btn-success"
                        onClick = { () => this.onChangeSize(2) }
                    >
                        Up
                    </button>
                    &nbsp;
                    <button 
                        type = "button" 
                        className = "btn btn-success"
                        onClick = { () => this.onChangeSize(-2) }
                    >
                        Down
                    </button>
                </div>
            </div>
        );
    }
}

export default SizeSetting;