import React, {Component} from 'react';
import NameInput from './NameInput';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import Notes from './Notes';

class Switch extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route exact path={'/'} component={NameInput}/>
                    <Route exact path={'/notes'} component={Notes}/>
                    <div>
                        <Link style={{display: 'block'}} to={'/'}>Home</Link>
                        <Link style={{display: 'block'}} to={'/notes'}>Notes</Link>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default Switch