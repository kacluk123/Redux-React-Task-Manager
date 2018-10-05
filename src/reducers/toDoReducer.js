import {ADD_TODO} from "../actions/types";
import {GET_TODO} from "../actions/types";
import {DELETE_TODO} from "../actions/types";
import {CHANGE_TODO} from "../actions/types";

const initialState = {
    toDos: [],

};

export default function(state=initialState.toDos, action){
    switch(action.type){
        case ADD_TODO:
            return [action.payload, ...state]
        case GET_TODO:
        return [
            ...state,
        ]
        case DELETE_TODO:
            console.log(state)
            return state.filter(todo => todo.id !== action.payload)
        case CHANGE_TODO:
            return state.map(todo => todo.id === action.payload.id ? (todo = action.payload) : todo)
        default:
            return state;
    }
}