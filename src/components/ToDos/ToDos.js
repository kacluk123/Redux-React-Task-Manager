import React, {Component} from 'react';
import PropTypes from 'prop-types';
import NewToDo from './newToDo'
import {getTodo} from "../../actions/toDoActions";
import {connect} from 'react-redux'
class ToDos extends Component {
    render() {
        const {toDos} = this.props;
        console.log(toDos)
        return (
            <div className='container'>
                <div className="card">
                    <ul className="list-group list-group-flush">
                    {toDos.sort(function(a,b) {return b.priority-a.priority;}).map( todo => (
                    <NewToDo task={todo}/>
                ))}
                    </ul>
                </div>
            </div>

        );
    }
}


ToDos.propTypes = {
    toDos: PropTypes.array.isRequired,
    getTodo: PropTypes.func.isRequired,


}

const mapStateToProps = (state) => ({
    toDos: state.toDos
})

export default connect(mapStateToProps, {getTodo})(ToDos);