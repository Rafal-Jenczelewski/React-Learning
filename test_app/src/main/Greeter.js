import React, {Component} from 'react'
import "../resources/Greeter.css"

class Greeter extends Component {
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
            name: e.target.value
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
                <span>My name is <input value={this.state.name} onChange={this.changeHandler.bind(this)} type="text" /></span>
            </div>
        )
    }
}

export default Greeter;