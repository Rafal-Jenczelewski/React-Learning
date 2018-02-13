import React, {Component} from 'react';
import logo from '../../resources/logo.svg';
import '../../resources/App.css';
import Greeter from './Greeter';
import NameInput from './NameInput';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import Notes from './Notes';

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
                    <div>
                        <Route exact path={'/'} component={NameInput}/>
                        <Route exact path={'/notes'} component={Notes}/>
                        <div >
                            <Link style={{display: "block"}} to={"/"}>Home</Link>
                            <Link style={{display: "block"}} to={"/notes"}>Notes</Link>
                        </div>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
