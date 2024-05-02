export enum ActionTypes {
  ADD_ORDER = 'ADD_ORDER',
  REMOVE_ORDER = 'REMOVE_ORDER',
}

export interface Order {
  id?: string;
  firstName?: string;
  lastName: string;
  description: string;
  quantity: number;
}

export interface AddOrderAction {
  type: ActionTypes.ADD_ORDER;
  payload: Order;
}

export interface RemoveOrderAction {
  type: ActionTypes.REMOVE_ORDER;
  payload: string;
}

export type ActionType = AddOrderAction | RemoveOrderAction;
