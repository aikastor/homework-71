import {RECEIVE_DATA, REQUEST_DATA} from "../actions/actionTypes";


const initialState = {
  menu: {},
  loading: false,
};
const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_DATA:
      return {...state, loading: true};
    case RECEIVE_DATA:
      let data = action.data;
      return {...state, menu:  data, loading: false};
    default:
      return state
  }
};

export default menuReducer;