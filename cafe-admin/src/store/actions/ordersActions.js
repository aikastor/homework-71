import {RECEIVE_ORDERS_DATA, REQUEST_ORDERS_DATA} from "./actionTypes";
import axiosApi from "../../axiosApi";

export const ordersRequest = ()=> ({type: REQUEST_ORDERS_DATA});
export const orderSuccess = (data)=> ({type: RECEIVE_ORDERS_DATA, data});

export const getOrders = () => {
  return async dispatch => {
    dispatch(ordersRequest());
    const response = await axiosApi.get('/react-cafe-orders.json');
    dispatch(orderSuccess(response.data));
  }
};

export const completeOrder =(orderID) => {
  return async dispatch => {
    dispatch(ordersRequest());
    await axiosApi.delete(`react-cafe-orders/${orderID}.json`);
    dispatch(getOrders());
  }
};