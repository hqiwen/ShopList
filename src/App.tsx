import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

const Goods = React.lazy(() => import("./page/Goods"));
const Home = React.lazy(() => import("./page/Home"));
const Login = React.lazy(() => import("./page/Login"));
const Space = React.lazy(() => import("./page/Space"));

function AuthAPP() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/space" component={Space} />
          <Route path="/goods/:goodsKind/:goodsId" component={Goods} />
          <Route path="/login" component={Login} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default AuthAPP;
