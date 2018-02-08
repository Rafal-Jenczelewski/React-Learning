import React, {Component} from 'react'
import "../../resources/Greeter.css"
import {connect} from "react-redux";

class Greeter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            time: new Date(),
        }

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