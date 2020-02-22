import { getGoods } from "../../Api/api";
import * as ActionTypes from "./actionType";

export const fetchGoods = () => {
    return function (dispatch) {
        getGoods().then(payload => {
            dispatch({ type: ActionTypes.GETGOODS, payload });
        });
    }
}

