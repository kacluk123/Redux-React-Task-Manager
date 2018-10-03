import {ADD_TODO} from "./types";

export const addTodo = (todo) => dispatch => {
    dispatch({
        type: ADD_TODO,
        payload: todo,
    })
}