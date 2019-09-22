import { Card, Comment, Descriptions, Divider, List } from "antd/es";
import React from "react";
import { useSelector } from "react-redux/es";
import { Redirect } from "react-router";
import Footer from "../component/footer";
import Header from "../component/header";
import { RootState } from "../index";
import { Comment as CommentType } from "../store/Comments/actionType";
import { Order as OrderType } from "../store/Orders/actionType";

const Space: React.FC = () => {
    const isAuthenticated = useSelector<RootState, any>(state => state.Auth.isAuthenticated);
    const curUser = useSelector<RootState, any>(state => state.Auth.curUser);

    return isAuthenticated ?
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

const SpaceComment: React.FC = () => {
    const comments: CommentType[] = useSelector<RootState, any>(state => state.Comments);
    const curUser = useSelector<RootState, any>(state => state.Auth.curUser);
    const userName = curUser.userName;
    const ownComments = comments.filter(val => val.user === userName);
    return (
        <List
            style={{ padding: 15 }}
            header={`${ownComments.length} comments`}
            itemLayout="horizontal"
            dataSource={ ownComments }
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
    const orders: OrderType[] = useSelector<RootState, any>(state => state.Orders);
    const curUser = useSelector<RootState, any>(state => state.Auth.curUser);
    const userName = curUser.userName;
    const ownOrders = orders.filter(val => val.user === userName);

    return (
        <List
            style={{ padding: 15 }}
            header={`${ownOrders.length} orders`}
            itemLayout="horizontal"
            dataSource={ownOrders}
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