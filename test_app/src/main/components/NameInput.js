import React, {Component} from 'react'
import {connect} from "react-redux";
import {changeName} from '../actions/index'

class NameInput extends Component {
    constructor(props) {
        super(props);

        this.changeHandler = this.changeHandler.bind(this);
    }

    changeHandler(e) {
        this.props.changeName(e.target.value)
    }

    render() {
        return <span>My name is <input value={this.props.name} onChange={this.changeHandler} type="text" /></span>
    }
}

function mapStateToProps(state) {
    return {
        name: state.name
    }
}

const mapDispatchToProps = {
    changeName
};

export default connect(mapStateToProps, mapDispatchToProps)(NameInput)