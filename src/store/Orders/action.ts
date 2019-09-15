import * as ActionTypes from "./actionType";

export const getOrders = () => ({
    type: ActionTypes.GETORDERS
});

export const postOrder = (order: ActionTypes.Order) => ({
           type: ActionTypes.POSTORDER,
           order: order
       });

