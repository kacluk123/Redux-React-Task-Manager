import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import {addTodo} from "../../actions/toDoActions";

class AddTask extends Component {
    state = {
        task : '',
        priority: '',
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    sendTodo = () => {
        const {task, priority} = this.state;

        const newToDo = {
            task,
            priority,
        }
        this.props.addTodo(newToDo)
    }
    render() {
        const {task, priority} = this.state;

        return (
            <div className='container'>
                <div className="row">

                        <div className="col-6">
                        <div className="form-group">

                            <input onChange={this.onChange} value={task} name="task" type="text" className="form-control" id="formGroupExampleInput"
                                   placeholder="Type your task"></input>
                        </div>
                    </div>
                    <div className="col1-3">
                        <div className="form-group">

                            <input onChange={this.onChange} value={priority} name="priority" type="text" className="form-control" id="formGroupExampleInput"
                                   placeholder="Type priority"></input>

                        </div>
                    </div>
                    <div className="col1-3">
                        <button type="button" onClick={this.sendTodo} className="btn btn-primary btn-lg btn-block">Add task</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null, {addTodo})(AddTask);


