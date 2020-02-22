export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SetAuthenticate = "SetAuthenticate"

export interface LoginAction {
    type: typeof LOGIN;
    user: User;
}

export interface SetAuthenticateAction {
    type: typeof SetAuthenticate;
    payload: boolean;
}

export interface LogoutAction {
    type: typeof LOGOUT;
    cb: Function;
}

export type AuthActionTypes = SetAuthenticateAction | LoginAction;

export interface User {
    userId: number;
    userName: string;
    userPassword: string | number;
}

export interface AuthState {
    isAuthenticated: boolean;
    curUser: User,
    user: User[];
}