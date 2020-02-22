import { login } from "../../Api/api";
import { LOGIN, SetAuthenticate } from "./actionType";

export const setAuthenticate = (isAuthenticated: boolean) => ({
    type: SetAuthenticate,
    payload: isAuthenticated
})

//@api/login
export const checkLogin = ({ username, password}) => (dispatch) => {
        return login({ username, password }).then((payload: {userId, userName, password}) => {
            dispatch({ type: LOGIN, payload });
            dispatch(setAuthenticate(true))
        });
}

export function signout(cb) {
    return function (dispatch) {
        dispatch(setAuthenticate(false));
        setTimeout(cb, 2000);
    }
}
