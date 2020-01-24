import {RECEIVE_DATA, REQUEST_DATA} from "./actionTypes";
import axiosApi from "../../axiosApi";

export const menuRequest = () => ({type: REQUEST_DATA});
export const menuSuccess = (data) => ({type: RECEIVE_DATA, data});

export const getMenu = () => {
  return async dispatch  => {
    dispatch(menuRequest());
    const response = await axiosApi.get('/react-menu.json');
    dispatch(menuSuccess(response.data));
  }
};
export const deleteItem = (itemId) =>{
  return async dispatch  => {
    dispatch(menuRequest());
    await axiosApi.delete(`/react-menu/${itemId}.json`);
    dispatch(getMenu());
  }
};
export const reloadMenu  = ()=> {
  return async dispatch => {
    dispatch(menuRequest());
    const response = await axiosApi.get('/react-menu.json');
    dispatch(menuSuccess(response.data))
  }
};
export const editItem = (itemId, editedItem) => {
  return async dispatch  => {
    dispatch(menuRequest());
     await axiosApi.patch(`/react-menu/${itemId}.json`, editedItem);
    dispatch(getMenu());
  }
};