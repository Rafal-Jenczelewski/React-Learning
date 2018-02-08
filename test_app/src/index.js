import React from 'react';
import ReactDOM from 'react-dom';
import './resources/index.css';
import App from './main/App';
import registerServiceWorker from './registerServiceWorker';
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({adapter: new Adapter()})

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
