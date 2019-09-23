export const GETUSER = "GETUSER";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SetAuthenticate = "SetAuthenticate"

export interface GetUserAction {
  type: typeof GETUSER
  username: string
}

export interface LoginAction {
    type: typeof LOGIN;
    username: string;
    password: string | number;
}

export interface SetAuthenticateAction {
    type: typeof SetAuthenticate;
    payload: boolean;
}

export interface LogoutAction {
    type: typeof LOGOUT;
    cb: Function;
}

export type AuthActionTypes = GetUserAction | SetAuthenticateAction;

export interface User {
    userId: number;
    userName: string;
    userPassword: string | number;
}

export interface AuthState {
    isAuthenticated: false;
    user: User[];
}
