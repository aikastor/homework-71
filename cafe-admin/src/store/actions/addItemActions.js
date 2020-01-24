import {RECEIVE_DATA, REQUEST_DATA} from "./actionTypes";
import axiosApi from "../../axiosApi";

export const addItemRequest = () => ({type: REQUEST_DATA});
export const addItemSuccess = () => ({type: RECEIVE_DATA});

export const addItem = (item) => {
  return async dispatch=> {
    dispatch (addItemRequest());
    await axiosApi.post('/react-menu.json', item);
    dispatch(addItemSuccess());
  }
};