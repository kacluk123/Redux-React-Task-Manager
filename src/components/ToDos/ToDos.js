import React, {Component} from 'react';
import PropTypes from 'prop-types';
import NewToDo from './newToDo'
import {getTodo} from "../../actions/toDoActions";
import {connect} from 'react-redux'
class ToDos extends Component {
    componentDidMount(){
        this.props.getTodo();
    }

    render() {
        const {toDos} = this.props;
        console.log(toDos)
        return (
            <React.Fragment>
                {toDos.map( todo => (
                    <NewToDo task={todo}/>
                ))}

            </React.Fragment>
        );
    }
}


ToDos.propTypes = {
    toDos: PropTypes.array.isRequired,
    getTodo: PropTypes.func.isRequired,


}

const mapStateToProps = (state) => ({
    toDos: state.toDos.toDos
})

export default connect(mapStateToProps, {getTodo})(ToDos);
