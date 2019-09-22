import { login } from "../../Api/api";
import { AuthActionTypes, GETUSER, LOGIN, SetAuthenticate, User } from "./actionType";

export const getUser = (username: string): AuthActionTypes => ({
    type: GETUSER,
    username: username
});

export const setAuthenticate = (isAuthenticated: boolean) => ({
    type: SetAuthenticate,
    payload: isAuthenticated
})

function getUseByUserName(user: User[], username: string) {
    return user.filter((val) => { return val.userName === username })[0];
}

export function shouldLogin(user: User[], username: string, password: string | number) {
    const needCheckedUser = getUseByUserName(user, username) || {};
    if (needCheckedUser.userPassword === password) {
        return true;
    } else {
        return false;
    }
}

//@api/login
const Login = (body) => {
    return function (dispatch) {
        login(body).then(payload => {//{ user: User, succcess : string, error : string }
            dispatch({ type: LOGIN, payload });
        });
    }
}

export { Login };

let curUser = {
    "userId": -1,
    "userName": "",
    "userPassword": ""
};

function getCurUser() {
    return curUser;
}
