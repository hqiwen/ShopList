import { AuthActionTypes, AuthState, GETUSER, SetAuthenticate } from "./actionType";

const defaultState: AuthState = {
    isAuthenticated: false,
    user: [
        {
            userId: 1,
            userName: "Jack",
            userPassword: "ccc"
        },
        {
            userId: 2,
            userName: "Tom",
            userPassword: "aaa"
        }
    ]
};

export default function Auth(state = defaultState, action: AuthActionTypes): AuthState {
    switch (action.type) {
        case GETUSER:
            return Object.assign({}, state, {
                user: state.user.filter(val => {
                    return val.userName === action.username;
                })[0]
            })
        case SetAuthenticate:
            return Object.assign({}, state, {
                isAuthenticated : action.payload
            })
    }
};
