import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
class NewToDo extends Component {
    render() {
        console.log(this.props.task)

            return (
                <div>
                </div>
            );
        }
    }


NewToDo.propTypes = {
    task: PropTypes.object.isRequired,
};


export default NewToDo

