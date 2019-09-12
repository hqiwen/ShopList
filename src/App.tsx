import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Goods from "./page/Goods";
import Home from "./page/Home";
import Login from "./page/Login";

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb: Function) {
    this.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout(cb: Function) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

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

const Space: React.FC = () => {
  return (
    <div>this is your private space</div>
  )
}

export { fakeAuth };

export default AuthAPP;
