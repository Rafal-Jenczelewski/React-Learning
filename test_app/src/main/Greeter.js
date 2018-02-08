import React, {Component} from 'react'

class Greeter extends Component {
    render() {
        return (
            <div><span>Hello, {this.props.name}</span></div>
        )
    }
}

export default Greeter;