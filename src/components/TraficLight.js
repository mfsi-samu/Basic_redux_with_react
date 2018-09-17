import React from "react";
import { connect } from 'react-redux'; // connect component helps to bind reducers with component

import './TraficLight.css'

class TraficLight extends React.Component {
    state = {
        signal: ""
    }

    signalUpdate = (event) => {
        this.setState({
            signal: event.target.value
        })
        // call reducer and dispatch the action cretor.
        this.props.onTextUpdate(event.target.value.toLowerCase());
    }

    render() {
        console.log(this.props.signalStatus);
        return (
            <div className="traficLight">
                <h3>Trafic Light Control(type stop/ready/go)</h3>
                <input value={this.state.signal} onChange={(event) => this.signalUpdate(event)} />
                <br />
                <p>
                    <span className={this.props.signalStatus == "stop" ? "stopTrue" : "stopFalse"}>
                    </span>
                </p>
                <br />
                <p>
                    <span className={this.props.signalStatus == "ready" ? "readyTrue" : "readyFalse"}>
                    </span>
                </p>
                <br />
                <p>
                    <span className={this.props.signalStatus == "go" ? "goTrue" : "goFalse"}>
                    </span>
                </p>
                <h2>Signal Status : {this.props.signalStatus}</h2>
            </div>
        );
    }
}

// set required local props variables from reducers states. 
const mapPropsToRedux = state => {
    return {
        signalStatus: state.traficRedux.signalStatus
    }
}

// set dispatch action creators 
const mapDispatchToRedux = (dispatch) => {
    return {
        onTextUpdate: (signal) => dispatch({ type: 'UPDATE_SIGNAL', signalStatus: signal })
    }
}

// connect reducer state and action creator with component.
export default connect(mapPropsToRedux, mapDispatchToRedux)(TraficLight);