import {RECEIVE_DATA, REQUEST_DATA} from "../actions/actionTypes";

const initialState = {
  loading: false,
};
const addItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_DATA:
      return {...state, loading: true};
    case RECEIVE_DATA:
      return {...state, loading: false};
    default:
      return state
  }
};

export default addItemReducer;