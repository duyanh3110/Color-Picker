import React, { Component } from "react";
import "./App.css";
import ColorPicker from './components/ColorPicker';
import SizeSetting from './components/SizeSetting';
import Reset from './components/Reset';
import Result from './components/Result';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'red',
            fontSize: 12,
        };
    }

    onSetColor = (params) => {
        this.setState({
            color: params,
        });
    }

    onSetSize = (value) => {
        let fontSize = this.state.fontSize + value;
        // if ((fontSize >= 8) && (fontSize <= 36)) {
        //     this.setState({
        //         fontSize: fontSize,
        //     });
        // }
        this.setState({
            fontSize: (fontSize >= 8 && fontSize <= 36) ? fontSize : this.state.fontSize
        })
    }

    onSetReset = (value) => {
        if(value) {
            this.setState({
                color: 'red',
                fontSize: 12,
            })
        }
    }

    render() {
        return (
            <div className = "container">
                <div className = "row">
                    <div className = "col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <ColorPicker 
                            color = { this.state.color } 
                            onActiveColor = { this.onSetColor }
                        />
                    </div>
                    <div className = "col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <SizeSetting 
                            fontSize = { this.state.fontSize }
                            onActiveSize = { this.onSetSize }
                        />
                        <Reset 
                            onActiveReset = { this.onSetReset }
                        />
                    </div>
                </div>
                <Result 
                    textColor = { this.state.color }
                    fontSize = { this.state.fontSize }
                />
            </div>
        );
    }
}

export default App;