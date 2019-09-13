import { Modal } from 'antd/es';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Goods from "./page/Goods";
import Home from "./page/Home";
import Login from "./page/Login";
import Space from "./page/Space";

let curUser = {
  "userId": -1,
  "userName": "",
  "userPassword": ""
};

const user = [
  {
    "userId": 1,
    "userName": "Jack",
    "userPassword": "ccc"
  },
  {
    "userId": 2,
    "userName": "Tom",
    "userPassword": "aaa"
  }
]

function getUser(username: string) {
  return user.filter((val) => { console.log(val.userName === username ); return val.userName === username })[0];
}

function getCurUser() {
  return curUser;
}


const fakeAuth = {
  isAuthenticated: false,
  authenticate(username: string, password: string | number, cb: Function) {
    const user = getUser(username) || {};
    if (user.userPassword === password) {
      this.isAuthenticated = true;
      curUser = user;
      setTimeout(cb, 100);
    } else {
      loginError();
    }
  },
  signout(cb: Function) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

function loginError() {
  Modal.error({
    title: "当前用户不存在",
    content: "请检查用户名和密码，重新输入"
  })
}

function AuthAPP() {
  return (
    <Router>
        <Switch>
          <Route path="/"  exact component={ Home } />
          <Route path="/space" component={ Space } />
          <Route path="/goods/:goodsId" component={ Goods } />
          <Route path="/login" component={ Login } />
        </Switch>
    </Router>
  )
}

export { fakeAuth, getCurUser };

export default AuthAPP;
