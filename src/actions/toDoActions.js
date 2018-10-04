import {ADD_TODO} from "./types";
import {GET_TODO} from "./types";

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