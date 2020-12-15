import { LOGIN, LOGOUT, SetAuthenticate, User } from "./actionType";

export const setAuthenticate = (isAuthenticated: boolean) => ({
  type: SetAuthenticate,
  payload: isAuthenticated,
});

export const setCurUser = (curUser: User) => ({
  type: LOGIN,
  user: curUser,
});

function getUseByUserName(user: User[], username: string) {
  return user.find((val) => val.userName === username);
}

export function shouldLogin(
  user: User[],
  username: string,
  password: string | number
) {
  const needCheckedUser = getUseByUserName(user, username);
  return needCheckedUser?.userPassword === password;
}

export const logout = () => ({
  type: LOGOUT,
});

export const login = (user: User) => (dispatch) => {
  dispatch(setCurUser(user));
  dispatch(setAuthenticate(true));
};
