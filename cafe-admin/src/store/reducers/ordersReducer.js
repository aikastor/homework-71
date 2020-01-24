import {
  RECEIVE_ORDERS_DATA,
  REQUEST_ORDERS_DATA
} from "../actions/actionTypes";

const initialState =  {
  orders: {},
  loading: false,
};

const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_ORDERS_DATA:
      return {...state, loading: true};
    case RECEIVE_ORDERS_DATA:
      return {...state, orders: action.data, loading: false};
    default:
      return state
  }
};

export default ordersReducer;



