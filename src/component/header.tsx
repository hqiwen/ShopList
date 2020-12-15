import { Col, Divider, Menu, Row } from "antd/es";
import { History } from "history";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux/es";
import { useLocation } from "react-router";
import { Link, withRouter } from "react-router-dom";
import { RootState } from "..";
import logo from "../logo.svg";
import { logout } from "../store/Auth/action";
import { AuthState } from "../store/Auth/actionType";

const Logo: React.FC = () => {
  return (
    <div className="logo">
      <img src={logo} alt="logo" width="40px" height="40px"></img>
    </div>
  );
};

interface NavProps {
  history: History;
}

const Nav: React.FC<NavProps> = (props) => {
  const [current, setCurrent] = useState("home");
  const { isAuthenticated } = useSelector<RootState, AuthState>(
    (state) => state.Auth
  );
  const dispatch = useDispatch();

  function signout(cb) {
    dispatch(logout());
    setTimeout(cb, 2000);
  }

  let from = useLocation().pathname;

  const location = {
    pathname: "/login",
    state: { from },
  };

  return (
    <Menu
      onClick={(e) => {
        console.log(e);

        setCurrent(() => e.key);
      }}
      selectedKeys={[current]}
      mode="horizontal"
      style={{ lineHeight: "64px" }}
      theme="light"
    >
      <Menu.Item key="home">
        <Link to="/">首页</Link>
      </Menu.Item>
      {isAuthenticated ? (
        <Menu.Item
          key="login"
          onClick={() => {
            signout(() => props.history.push("/"));
          }}
        >
          登出
        </Menu.Item>
      ) : (
        <Menu.Item key="login">
          <Link to={location}>登陆</Link>
        </Menu.Item>
      )}
      {isAuthenticated ? (
        <Menu.Item key="space">
          <Link to="/space">个人中心</Link>
        </Menu.Item>
      ) : null}
    </Menu>
  );
};

const AuthNav = withRouter(({ history }) => <Nav history={history}></Nav>);

const Header = () => {
  return (
    <div>
      <Row>
        <Col span={4} offset={1}>
          <Logo></Logo>
        </Col>
        <Col span={6} offset={10}>
          <AuthNav></AuthNav>
        </Col>
        <Divider></Divider>
      </Row>
    </div>
  );
};

export default Header;
