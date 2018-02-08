import React, {Component} from 'react'

class Greeter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            time: new Date()
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
                <span style={{display: "block"}}>Hello, {this.props.name}</span>
                <span>It is {this.state.time.toLocaleString()}</span>
            </div>
        )
    }
}

export default Greeter;