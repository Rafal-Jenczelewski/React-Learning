import React, {Component} from 'react';
import logo from '../../resources/logo.svg';
import '../../resources/App.css';
import Greeter from './Greeter'
import NameInput from "./NameInput";
import {BrowserRouter, Route} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <Greeter/>
                <BrowserRouter>
                    <Route exact path={"/"} component={NameInput}/>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
