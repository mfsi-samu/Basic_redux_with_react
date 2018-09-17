# Basic redux with reactjs
### This repository contains a simple reactjs project which have a global state maintained by redux.
 In this project there is a input box where user can write signal status like stop/ready/go then there will be a light indication showing according to signal status. This status update maintaining by redux state.


## Redux setup 
#### Installation
 * npm install --save redux 
 * npm install --save react-redux

 First one helps to write redux/reducer logic.
 Second one helps to enject redux into reactjs project.
 
### Redux implementation in 3 steps.
    1. Creating reducer.
    2. Enject redux into index.js file.
    3. Using reducer into a component.

### 1. Created reducer file inside the directory store/Reducers/TraficReducer.js

```
// define initial state variables
const initState ={
    signalStatus: ""
}

// define reducer for state update on the basis of action type.
const reducer =(state=initState, action)=>{
    
    switch(action.type)
    {
        case 'UPDATE_SIGNAL':
         return({
             ...state,
             signalStatus: action.signalStatus
         })
        break;
        default:
        return state;
    }

}

export default reducer;
```

#### Reducer (TraficReducer.js)
File contains the initial state variables and a switch case which helps to maintain action creator. whenever dispatcher call the action creator with passing some parameter the code execution goes here and match the action type and execute the code.

### 2. Enject redux into reactjs project.
You need to enject redux in the parent file from where reactjs start render the App component.
in this project index.js file where I enjected the redux.
```
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore,combineReducers}from 'redux'; 
import {Provider} from 'react-redux';

import traficReducer from './store/Reducers/traficReducer' //import your reducer

//create rootReducer or combine all reducers if you have more than one reducer.
const rootReducer = combineReducers({
    traficRedux : traficReducer
})
//Create store and pass your rootReducer to store.
const store = createStore(rootReducer);

//Wrap App component inside Provider component. pass store to provider component.
const app =(
    <Provider store={store}>
        <App/>
    </Provider>
)
ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
```

Now, redux enject in reactjs.

### 3. Using reducer into a component. (TraficLight.js)
```
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
const mapDispatchToRedux = dispatch => {
    return {
        onTextUpdate: (signal) => dispatch({ type: 'UPDATE_SIGNAL', signalStatus: signal })
    }
}

// connect reducer state and action creator with component.
export default connect(mapPropsToRedux, mapDispatchToRedux)(TraficLight);
```

### Project setup locally
  1. Clone this project into your local system.
  2. run npm i (for all package installation)
  3. npm start



Live Demo :- https://fir-210d8.firebaseapp.com/

