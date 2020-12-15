export const GETORDERS = "GETORDERS";
export const POSTORDER = "POSTORDER";

export interface getOrdersAction {
  type: typeof GETORDERS;
}

export interface postOrderAction {
  type: typeof POSTORDER;
  order: Order;
}

export interface Order {
  user: string;
  goodsName: string;
  sumPrice: number;
  goodsNumber: number;
}

export type OrderActionType = getOrdersAction | postOrderAction;
