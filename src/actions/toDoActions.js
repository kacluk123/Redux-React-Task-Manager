import {ADD_TODO} from "./types";
import {GET_TODO} from "./types";
import {DELETE_TODO} from "./types";
import {CHANGE_TODO} from "./types";

export const addTodo = (todo) => dispatch => {
    dispatch({
        type: ADD_TODO,
        payload: todo,
    })
}

export const getTodo = () => dispatch => {
    dispatch({
        type: GET_TODO,
    })
}

export const deleteTodo = (id) => dispatch => {
    dispatch({
        type: DELETE_TODO,
        payload: id,
    })
}

export const changeTodo = (todo) => dispatch => {
    dispatch({
        type: CHANGE_TODO,
        payload: todo,
    })
}