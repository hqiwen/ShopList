import { Col, Divider, Menu, Row } from "antd/es";
import { History } from "history";
import React, { useState } from "react";
import { useSelector } from "react-redux/es";
import { Link, withRouter } from "react-router-dom";
import { RootState } from "..";
import logo from "../logo.svg";
import { signout } from "../store/Auth/action";

const Logo: React.FC = () => {
    return (
        <div className="logo">
            <img src={ logo } alt="logo" width="40px" height="40px"></img>
        </div>
    )
}

interface NavPorps{
    history: History;
}

const Nav: React.FC<NavPorps> = (props) => {
    const [current, setCurrent] = useState("home");
    const isAuthenticated = useSelector<RootState, any>(state => state.Auth.isAuthenticated);
    
    return isAuthenticated ? (
        <Menu onClick={(e) => setCurrent(e.key)} selectedKeys={[current]} mode="horizontal" style={{ lineHeight: '64px' }} theme="light">
            <Menu.Item key="home"><Link to="/">首页</Link></Menu.Item>
            <Menu.Item key="login" onClick={() => {
                signout(() => props.history.push("/"));
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
    )
}

export default Header;