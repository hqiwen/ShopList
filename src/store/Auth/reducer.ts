import { AuthActionTypes, AuthState, GETUSER, LOGIN, SetAuthenticate } from "./actionType";

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

export default function Auth(state = defaultState, action: AuthActionTypes): AuthState {
    switch (action.type) {
        case GETUSER:
            return state;
        case SetAuthenticate:
            return Object.assign({}, state, {
                isAuthenticated: action.payload
            })
        case LOGIN: 
            return Object.assign({}, state, {
                curUser: action.user
            })
    }
};
