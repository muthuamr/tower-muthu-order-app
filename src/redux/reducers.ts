import { combineReducers } from "redux";
import {ActionTypes,OrderState} from './types';

const initialOrderState:OrderState={
    orders:[],
    loading:false,
    error:null
}

const orderReducer = (state = initialOrderState, action: any): OrderState => {
    switch (action.type) {
      case ActionTypes.FETCH_ORDER_SUCCESS:
        return {
          ...state,
          loading: true,
          orders:action.payload,
        };        
      case ActionTypes.ADD_ORDER_SUCCESS:
        return {
          ...state,
          loading: false,
          orders: [...state.orders, action.payload],
        };
      case ActionTypes.DELETE_ORDER_SUCCESS:
        return {
          ...state,
          loading: false,
          orders: state.orders.filter(order => order.id !== action.payload),
        };
      default:
        return state;
    }
  };
  
  const rootReducer = combineReducers({
    order: orderReducer,
  });
  
  export default rootReducer;