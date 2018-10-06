import React, {Component} from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import classnames from 'classnames'
import { connect } from 'react-redux'
import {addTodo} from "../../actions/toDoActions";
import {getTodo} from "../../actions/toDoActions";

class AddTask extends Component {
    state = {
        task : '',
        priority: '',
        errors: {},

    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });

     sendTodo = (e) => {
         e.preventDefault()
         const {task, priority} = this.state;
         const newToDo = {
             task,
             priority: Number(priority),
             id: uuid(),
         }

         if (task === '') {
             this.setState({errors: {task: 'Type something!'}})
             return
         }
         if (priority === '') {
             this.setState({errors: {priority: 'Type a priority'}})
             return
         }if (isNaN(priority) === true) {
             this.setState({errors: {priority: 'Must be a number'}})
             return
         }
         this.props.addTodo(newToDo);
         this.setState({
             task : '',
             priority: '',
             errors: {},
         });

     }





    render() {
        const {task, priority, errors} = this.state;

        return (
            <div style={{padding: '30px'}}className='container'>
                <form onSubmit={this.sendTodo}>
                    <div className="form-row"  >
                        <div className="col-sm-9">
                            <input onChange={this.onChange} type="text" name="task" className={classnames('form-control', {
                                'is-invalid': errors.task
                            })}  value={task} placeholder="Type a task"/>  {errors.task && <div  style={{position: 'absolute'}} className="invalid-feedback">{errors.task}</div>}
                        </div>
                        <div className="col-sm-2">
                            <input onChange={this.onChange} type="text"style={{position: 'relative'}} name="priority" className={classnames('form-control editedform', {
                                'is-invalid': errors.priority
                            })} value={priority} placeholder="Priority"/>
                            {errors.priority && <div className="invalid-feedback" style={{position: 'absolute'}}>{errors.priority}</div>}
                            <input  className="btn btn-primary rwd" style={{position: 'absolute', top:'0', left: '100%'}} type="submit" value="Add task"/>
                        </div>


                    </div>
                </form>


            </div>
        );
    }
}

export default connect(null, {addTodo, getTodo})(AddTask);


