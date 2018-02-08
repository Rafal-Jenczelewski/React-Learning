import React from 'react';
import ReactDOM from 'react-dom';
import './resources/index.css';
import App from './main/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
