import { AuthActionTypes, AuthState, LOGIN, SetAuthenticate } from "./actionType";
const defaultState: AuthState = {
    isAuthenticated: false,
    curUser: {
        "userId": -1,
        "userName": "",
        "userPassword": ""
    },
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

export default function Auth(state: AuthState = defaultState, action: AuthActionTypes): AuthState {
    switch (action.type) {
        case SetAuthenticate:
            return {...state, isAuthenticated: action.payload}
        case LOGIN: 
            return {...state, curUser: action.user}
        default:
            return state
    }
};
