import React, {Component} from 'react'
import {connect} from 'react-redux';
import {TextArea, Button} from '@nokia-csf-uxr/csfWidgets'
import {addNote} from '../actions/index'

class Notes extends Component {
    constructor(props) {
        super(props);

        this.state = {
            noteText: ""
        };

        this.changeHandler = this.changeHandler.bind(this);
        this.clickHandler = this.clickHandler.bind(this);
    }

    changeHandler(e) {
        this.setState({
            noteText: e.text
        })
    }

    clickHandler() {
        this.props.addNote(this.state.noteText);
        this.setState({
            noteText: ""
        })
    }

    render() {
        let list = [];
        for(let note of this.props.notes)
            list.push(<TextArea readonly={true} key={note} text={note}/>)

        return (
            <div>
                {list}
                <TextArea onChange={this.changeHandler} text={this.state.noteText}/>
                <Button onClick={this.clickHandler}>Add</Button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        notes: state.notes
    };
}

const mapDispatchToProps = {
    addNote
};

export default connect(mapStateToProps, mapDispatchToProps)(Notes)
