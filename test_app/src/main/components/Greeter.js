import React, {Component} from 'react'
import "../../resources/Greeter.css"
import {connect} from "react-redux";
import {changeName} from '../actions/index'

class Greeter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            time: new Date(),
        }

        this.changeHandler = this.changeHandler.bind(this);
    }

    changeHandler(e) {
        this.props.changeName(e.target.value)
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
                <span>My name is <input value={this.state.name} onChange={this.changeHandler.bind(this)} type="text" /></span>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        name: state.name
    }
}

const mapDispatchToProps = {
    changeName
}

export default connect(mapStateToProps, mapDispatchToProps)(Greeter)