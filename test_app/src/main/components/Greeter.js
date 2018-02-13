import React, {Component} from 'react'
import "../../resources/Greeter.css"
import {connect} from "react-redux";
import "../../resources/Greeter.css"

import '@nokia-csf-uxr/csfWidgets/csfWidgets.css'

class Greeter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            time: new Date(),
        }
        this.changeHandler = this.changeHandler.bind(this);
    }

    changeHandler(e) {
        this.setState({
            name: e.value
        })
    }

    componentDidMount() {
        this.timerId = setInterval(() => {
            this.setState({
                time: new Date()
            })
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId)
    }

    render() {
        return (
            <div>
                <span>Hello, {this.props.name}</span>
                <span>It is {this.state.time.toLocaleString()}</span>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        name: state.name
    }
}

export default connect(mapStateToProps, null)(Greeter)