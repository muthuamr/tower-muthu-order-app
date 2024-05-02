import { Order } from './types';

export enum ActionTypes {
  ADD_ORDER = 'ADD_ORDER',
  REMOVE_ORDER = 'REMOVE_ORDER',
}

export interface AddOrderAction {
  type: ActionTypes.ADD_ORDER;
  payload: Order;
}

export interface RemoveOrderAction {
  type: ActionTypes.REMOVE_ORDER;
  payload: string;
}

export type Action = AddOrderAction | RemoveOrderAction;

export const addOrder = (order: Order) => ({
  type: ActionTypes.ADD_ORDER,
  payload: order,
});

export const removeOrder = (id: string) => ({
  type: ActionTypes.REMOVE_ORDER,
  payload: id,
});
