export interface OrderState{
  orders:Order[];
  loading:boolean;
  error:string | null;
}

export enum ActionTypes {
  FETCH_ORDER_REQUEST = 'FETCH_ORDER_REQUEST',
  FETCH_ORDER_SUCCESS = 'FETCH_ORDER_SUCCESS',
  ADD_ORDER_REQUEST = 'ADD_ORDER_REQUEST',
  ADD_ORDER_SUCCESS = 'ADD_ORDER_SUCCESS',
  DELETE_ORDER_REQUEST = 'DELETE_ORDER_REQUEST',
  DELETE_ORDER_SUCCESS = 'DELETE_ORDER_SUCCESS', 
}

export interface Order {
  id?: string;
  firstName?: string;
  lastName: string;
  description: string;
  quantity: number;
}
