import {
  AuthActionTypes,
  AuthState,
  LOGIN,
  LOGOUT,
  SetAuthenticate,
} from "./actionType";

const defaultState: AuthState = {
  isAuthenticated: false,
  curUser: {
    userId: -1,
    userName: "",
    userPassword: "",
  },
  users: [
    {
      userId: 1,
      userName: "Jack",
      userPassword: "ccc",
    },
    {
      userId: 2,
      userName: "Tom",
      userPassword: "aaa",
    },
  ],
};

export default function Auth(
  state: AuthState = defaultState,
  action: AuthActionTypes
): AuthState {
  switch (action.type) {
    case SetAuthenticate:
      return { ...state, isAuthenticated: action.payload };
    case LOGIN:
      return { ...state, curUser: action.user };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        curUser: {
          userId: -1,
          userName: "",
          userPassword: "",
        },
      };
    default:
      return state;
  }
}
