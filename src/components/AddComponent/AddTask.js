import React, {Component} from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import { connect } from 'react-redux'
import {addTodo} from "../../actions/toDoActions";
import {getTodo} from "../../actions/toDoActions";

class AddTask extends Component {
    state = {
        task : '',
        priority: '',

    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });

     sendTodo = (e) => {
        e.preventDefault()
        const {task, priority} = this.state;
        const newToDo = {
            task,
            priority : Number(priority),
            id: uuid(),
        }
        if (task !== '' && priority !== ''){
            this.props.addTodo(newToDo)
            this.setState({
                task : '',
                priority: '',
            })

        }
    }
    render() {
        const {task, priority} = this.state;

        return (
            <div style={{padding: '20px'}}className='container'>
                <form onSubmit={this.sendTodo}>
                    <div className="form-row">
                        <div className="col-8">
                            <input onChange={this.onChange} type="text" name="task" className="form-control" value={task} placeholder="Type a task"/>
                        </div>
                        <div className="col">
                            <input onChange={this.onChange} type="text" name="priority" className="form-control" value={priority} placeholder="Type a priority of a task"/>
                        </div>
                        <input className="btn btn-primary" type="submit" value="Add task"/>

                    </div>
                </form>


            </div>
        );
    }
}

export default connect(null, {addTodo, getTodo})(AddTask);


