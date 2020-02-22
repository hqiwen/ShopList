import { getOrders, postOrder } from "../../Api/api";
import * as ActionTypes from "./actionType";

export const fetchOrders = () => {
    return function (dispatch) {
        getOrders().then(payload => {
            dispatch({ type: ActionTypes.GETORDERS, payload });
        });
    }
}

export const addOrder = (order: ActionTypes.Order, cb: Function) => {
    return function (dispatch) {
        postOrder(order).then(payload => {
            dispatch({ type: ActionTypes.POSTORDER, payload });
            cb && cb();
        });
    }
}
