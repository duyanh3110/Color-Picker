import React, { Component } from "react";
import "../App.css";

class ColorPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: ['red', 'blue', 'green', 'yellow'],
        };
    }

    showColor(color) {
        return {
            backgroundColor: color
        }
    }

    setActiveColor(color) {
        this.props.onActiveColor(color);
    }

    render() {
        var elmColor = this.state.colors.map((color, index) => {
            return  <span 
                        key = { index } 
                        style = { this.showColor(color) } 
                        className = { this.props.color === color ? 'active' : '' }
                        onClick = { () => this.setActiveColor(color) }
                    />
        });

        return (
            <div className = "panel panel-primary">
                <div className = "panel-heading">
                    <h3 className = "panel-title">Color Picker</h3>
                </div>
                <div className = "panel-body">
                    { elmColor } 
                </div>
            </div>
        );
    }
}

export default ColorPicker;