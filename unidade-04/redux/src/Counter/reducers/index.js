import { combineReducers } from "redux";
import { DECREMENT, INCREMENT } from '../actions';

const counter = (state = { amount: 0, date: new Date()  } , action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                ...action.added
            }
        case DECREMENT:
            return {
                ...state,
                ...action.subtracted
            }
        default:
            return state;
    }
};

export default combineReducers({ counter });
