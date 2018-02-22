import React, {Component} from 'react'
import "../resources/Greeter.css"
import {TextInput} from '@nokia-csf-uxr/csfWidgets'
import '@nokia-csf-uxr/csfWidgets/csfWidgets.css'
import PropTypes from 'prop-types'

class Greeter extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired
    };

    static defaultProps = {
        name: "World"
    };

    constructor(props) {
        super(props);

        this.state = {
            time: new Date(),
            name: props.name
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
                <span>Hello, {this.state.name}</span>
                <span>It is {this.state.time.toLocaleString()}</span>
                <TextInput label={"My name is"} text={this.state.name} onChange={this.changeHandler}/>
            </div>
        )
    }
}

export default Greeter;