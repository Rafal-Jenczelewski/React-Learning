import React from 'react';
import ReactDOM from 'react-dom';
import './resources/index.css';
import App from './main/components/App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import {applyMiddleware, createStore} from 'redux'
import reducer from './main/reducers/index'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

let store = createStore(reducer, applyMiddleware(logger, thunk))

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
