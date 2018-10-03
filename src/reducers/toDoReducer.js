import {ADD_TODO} from "../actions/types";

const initialState = {
    toDos: [],

};

export default function(state=initialState, action){
    switch(action.type){
        case ADD_TODO:
            return{
                ...state,
                toDos: [action.payload, ...state.toDos]
            }
        default:
            return state;
    }
}

