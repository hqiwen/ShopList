import { Col, Menu, Row } from "antd/es";
import { History } from "history";
import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { fakeAuth } from "../App";

const Logo: React.FC = () => {
    return (
        <div className="logo">
            <img src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="logo" width="40px" height="40px"></img>
        </div>
    )
}

interface NavPorps{
    history: History;
}

const Nav: React.FC<NavPorps> = (props) => {
    const [current, setCurrent] = useState("home");
    return fakeAuth.isAuthenticated ? (
        <Menu onClick={(e) => setCurrent(e.key)} selectedKeys={[current]} mode="horizontal" style={{ lineHeight: '64px' }} theme="light">
            <Menu.Item key="home"><Link to="/">首页</Link></Menu.Item>
            <Menu.Item key="login" onClick={() => {
                fakeAuth.signout(() => props.history.push("/"));
            }}>登出</Menu.Item>
            <Menu.Item key="space"><Link to="/space">个人中心</Link></Menu.Item>
        </Menu>
    ) : (
        <Menu onClick={(e) => setCurrent(e.key)} selectedKeys={[current]} mode="horizontal" style={{ lineHeight: '64px' }} theme="light">
            <Menu.Item key="home"><Link to="/">首页</Link></Menu.Item>
            <Menu.Item key="login"><Link to="/login">登陆</Link></Menu.Item>
        </Menu>
    )
};

const AuthNav = withRouter(
    ({ history }) => (
        <Nav history={ history }></Nav>
    )
);

const Header = () => {
    return (
        <Row>
            <Col span={4} offset={1}>
                <Logo></Logo>
            </Col>
            <Col span={6} offset={10}>
                <AuthNav></AuthNav>
            </Col>
        </Row>
    )
}

export default Header;