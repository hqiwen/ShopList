import { Card, Comment, Descriptions, Divider, List } from "antd/es";
import React from "react";
import { Redirect } from "react-router";
import { fakeAuth, getCurUser } from "../App";
import Footer from "../component/footer";
import Header from "../component/header";
import { getComments, getOrders } from "./Goods";

const Space: React.FC = () => {
    let curUser = getCurUser();

    return fakeAuth.isAuthenticated ?
        (
            <div>
                <Header></Header>
                <main>
                    <Descriptions title="个人信息" layout="horizontal" size="middle">
                        <Descriptions.Item label="用户名">{curUser.userName}</Descriptions.Item>
                        <Descriptions.Item label="用户密码">{curUser.userPassword}</Descriptions.Item>
                    </Descriptions>
                    <Divider></Divider>
                    <div>
                        <h2>我的评论</h2>
                        <SpaceComment></SpaceComment>
                    </div>
                    <div>
                        <h2>我的订单</h2>
                        <SpaceList></SpaceList>
                    </div>
                </main>
                <Footer></Footer>
            </div>
        ) : (
            <Redirect to="/"></Redirect>
        )
}

function getOwnerComments() {
    let userName = getCurUser().userName;
    return getComments().filter((val) => val.user === userName);
}

function getOwnerOrders() {
    let userName = getCurUser().userName;
    return getOrders().filter((val) => val.user === userName);
}

const SpaceComment: React.FC = () => {
    let comments = getOwnerComments();
    return (
        <List
            style={{ padding: 15 }}
            header={`${comments.length} comments`}
            itemLayout="horizontal"
            dataSource={comments}
            renderItem={item => (
                <li>
                    <Comment
                        author={item.user}
                        avatar={item.avatar}
                        content={<p>{item.content}</p>}
                    />
                </li>
            )}
        />
    )
}

const SpaceList: React.FC = () => {
    let orders = getOwnerOrders();
    return (
        <List
            style={{ padding: 15 }}
            header={`${orders.length} orders`}
            itemLayout="horizontal"
            dataSource={orders}
            renderItem={item => (
                <li>
                    <Card hoverable={true}>
                        <Descriptions layout="horizontal" size="middle">
                            <Descriptions.Item label="购买名称">: <span>{item.goodsName}</span></Descriptions.Item>
                            <Descriptions.Item label="购买数量">: <span>{item.goodsNumber}</span></Descriptions.Item>
                            <Descriptions.Item label="总价">: <span style={{ color: "red", fontSize: "24px" }}>{item.sumPrice}</span></Descriptions.Item>
                        </Descriptions>
                    </Card>
                </li>
            )}
        />
    )
}

export default Space;