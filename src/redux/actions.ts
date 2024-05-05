import { Dispatch } from 'redux';
import { Order,ActionTypes } from './types';
import axios from 'axios';

export const addOrderRequest = () => ({
  type: ActionTypes.ADD_ORDER_REQUEST,
});

export const addOrderSuccess = (order: Order) => ({
  type: ActionTypes.ADD_ORDER_SUCCESS,
  payload: order,
});

export const deleteOrderRequest = () => ({
  type: ActionTypes.DELETE_ORDER_REQUEST,
});

export const deleteOrderSuccess = (orderId: string) => ({
  type: ActionTypes.DELETE_ORDER_SUCCESS,
  payload: orderId,
});

export const getOrderRequest=()=>({
  type:ActionTypes.FETCH_ORDER_REQUEST,
});

export const getOrderSuccess=(orders: Order[])=>({
  type:ActionTypes.FETCH_ORDER_SUCCESS,
  payload:orders,
});

export const getOrders = () => {
  return async (dispatch: Dispatch) => {
    dispatch(getOrderRequest());
    try {
      const response = await axios.get('https://653bc6c9d5d6790f5ec76c17.mockapi.io/orders');
      dispatch(getOrderSuccess(response.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const addOrder = (order: Order) => {
  return async (dispatch: Dispatch) => {
    dispatch(addOrderRequest());
    try {
      const response = await axios.post('https://653bc6c9d5d6790f5ec76c17.mockapi.io/orders', order); 
      dispatch(addOrderSuccess(response.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const removeOrder = (orderId: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(deleteOrderRequest());
    try {
      await axios.delete(`https://653bc6c9d5d6790f5ec76c17.mockapi.io/orders/${orderId}`);
      dispatch(deleteOrderSuccess(orderId));
    } catch (error) {
      console.log(error);
    }
  };
};