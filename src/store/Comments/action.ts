import { getComments } from "../../Api/api";
import * as ActionTypes from "./actionType";

export const fetchComments = () => {
    return function (dispatch) {
        getComments().then(payload => {
            dispatch({ type: ActionTypes.GETCOMMENTS, payload });
        });
    }
}