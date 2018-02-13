import React, {Component} from 'react';
import {connect} from 'react-redux';
import {changeName} from '../actions/index';
import {TextInput} from '@nokia-csf-uxr/csfWidgets'

export class NameInput extends Component {
    constructor(props) {
        super(props);

        this.changeHandler = this.changeHandler.bind(this);
    }

    changeHandler(e) {
        this.props.changeName(e.value);
    }

    render() {
        return <TextInput className="inlineTextInput" label={'My name is'} text={this.props.name} onChange={this.changeHandler}/>;
    }
}

function mapStateToProps(state) {
    return {
        name: state.name
    };
}

const mapDispatchToProps = {
    changeName
};

export default connect(mapStateToProps, mapDispatchToProps)(NameInput);