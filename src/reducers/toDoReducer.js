import {ADD_TODO} from "../actions/types";
import {GET_TODO} from "../actions/types";

const initialState = {
    toDos: [
        {task: 'Make a dinner', priority: '4'}
        ],

};

export default function(state=initialState.toDos, action){
    switch(action.type){
        case ADD_TODO:
            return{
                ...state,
                toDos: [action.payload, ...state.toDos]
            }
        case GET_TODO:
            return {
                ...state,
            }
        default:
            return state;
    }
}

