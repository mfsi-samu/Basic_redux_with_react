import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore,combineReducers}from 'redux';
import {Provider} from 'react-redux';

import traficReducer from './store/Reducers/traficReducer'

const rootReducer = combineReducers({
    traficRedux : traficReducer
})

const store = createStore(rootReducer);

const app =(
    <Provider store={store}>
        <App/>
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
