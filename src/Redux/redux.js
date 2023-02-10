import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import * as actions from './actionTypes';

const initialState = {
  email: '',
  password: '',
}


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.UPDATE_EMAIL:
      return { ...state, email: action.payload };
    case actions.UPDATE_PASSWORD:
      return { ...state, password: action.payload };
    default:
      return state;
  };
}

export const store = createStore(reducer, applyMiddleware(thunk));