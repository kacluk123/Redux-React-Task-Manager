import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {deleteTodo} from "../../actions/toDoActions";
import {changeTodo} from "../../actions/toDoActions";

class NewToDo extends Component {
    constructor(props){
        super(props)
        this.state={
            edit: false,
            task: '',
        }
    }
    onDelete = (id) =>{
        this.props.deleteTodo(id)
    }
    textChange = (e) =>{
        this.setState({
            task: e.target.value,
        })
    }
    onEdit =()=>{
        this.setState({
            edit: !this.state.edit
        })
        const {priority, id} = this.props.task;

        const editedTodo = {
            task: this.state.task,
            priority,
            id,
        }

        if(this.props.task.task !== this.state.task
            && this.state.task !== ''){
            this.props.changeTodo(editedTodo)
        }

    }

    render() {


       const {task, priority, id} = this.props.task;

            return (
                <li className="list-group-item">{ this.state.edit ?<input type="text" onChange={this.textChange} placeholder={task} className="form-control" id="formGroupExampleInput2"
                                                                                value={this.state.task}/>: task }
                    <i className="far fa-trash-alt" onClick={this.onDelete.bind(this, id )} style={{fontSize: '30px', float: 'right'}}></i>
                    <i className="far fa-edit" onClick={this.onEdit} style={{fontSize: '30px', marginRight: '10px', float: 'right'}}></i>
                </li>
            );
        }
    }


NewToDo.propTypes = {
    task: PropTypes.object.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    changeTodo: PropTypes.func.isRequired,
};


export default connect(null, {deleteTodo, changeTodo})(NewToDo);

