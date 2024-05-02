import { combineReducers } from "redux";
import {ActionTypes, ActionType,Order} from './types';

interface OrderState{
    orders:Order[];
}

const initialOrderState:OrderState={
    orders:[]
}

const orderReducer = (state = initialOrderState, action: ActionType): OrderState => {
    switch (action.type) {
      case ActionTypes.ADD_ORDER:
        return {
          ...state,
          orders: [...state.orders, action.payload],
        };
      case ActionTypes.REMOVE_ORDER:
        return {
          ...state,
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