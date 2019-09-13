import { Button } from "antd";
import { Card, Col, Comment, Descriptions, List, Modal, Row, Tooltip } from "antd/es";
import moment from "moment";
import React, { useState } from "react";
import { RouteComponentProps } from "react-router";
import { getCurUser } from "../App";
import Footer from "../component/footer";
import Header from "../component/header";

interface OrderModel {
    "user": string,
    "goodsName": string,
    "sumPrice": number,
    "goodsNumber": number
}

let order: OrderModel[] = [{
    "user" : "default",
    "goodsName": "A0",
    "sumPrice": 0,
    "goodsNumber": 0
}];

const comments = [
    {
        "user": "Han Solo",
        "avatar": "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        "content": "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
        "updateAt": new Date("2019-9-24")
    } , {
        "user": "Jack",
        "avatar": "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        "content": "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
        "updateAt": new Date("2019-9-24")
    }
]

interface GoodsProps extends RouteComponentProps {
    match: {
        params: {
            goodsId: number;
        },
        isExact, path, url
    }
}

function postOrder(goodsName, sumPrice, goodsNumber) {
    let curUser = getCurUser();
    if (curUser.userId >= 0) {
        order.push({
            "user": curUser.userName,
            "goodsName": goodsName,
            "sumPrice": sumPrice,
            "goodsNumber": goodsNumber
        });
        success();
    } else {
        loginError();
    }
    
    console.log(order);
}

function getOrders() {
    return order;
}

function getComments() {
    return comments;
}

function loginError() {
    Modal.error({
        title: "用户未登录",
        content: "在购买前请先登录你的账号"
    })
}

function success() {
    Modal.success({
        title: "购买成功",
        content: "请享受你的购买之旅"
    })
}

const Goods: React.FC<GoodsProps> = ({ match }) => {
    const [goodsName] = useState("joke");
    const [goodsPrice] = useState(5);
    const [discount] = useState(0.85);
    const [buyNumber, setBuyNumber] = useState(1);
    const sumPrice = buyNumber * discount * goodsPrice;

    return (
        <div>
            <Header></Header>
            <main>
                <h3 style={{ padding: 15 }}>this {match.params.goodsId}goods</h3>
                <div style={{ height: 16 }}></div>
                <Row>
                    <Col offset={2} span={6}>
                        <Card
                            cover={
                                <img
                                    alt="example"
                                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                />
                            }
                        >
                            <Descriptions title="商品描述" layout="horizontal" size="middle">
                                <Descriptions.Item label="商品名">{goodsName}</Descriptions.Item>
                                <Descriptions.Item label="商品价格">{goodsPrice}</Descriptions.Item>
                            </Descriptions>
                        </Card>
                    </Col>
                    <Col offset={4} span={6}>
                        <h2>想要获得它</h2>
                        <p style={{ lineHeight: "24px" }}>限时折扣: <span>{discount}</span></p>
                        <p style={{ lineHeight: "24px" }}>购买数量: <span>{buyNumber}</span></p>
                        <Button style={{ width: "50%" }} onClick={() => setBuyNumber(buyNumber + 1)}>添加</Button>
                        <Button style={{ width: "50%" }} onClick={() => buyNumber < 1 ? setBuyNumber(0) : setBuyNumber(buyNumber - 1)}>减少</Button>
                        <p style={{ lineHeight: "48px" }}>总价: <span style={{color: "red", fontSize: "24px"}}>{sumPrice}</span></p>
                        <Button style={{ width: "100%" }} onClick={() => postOrder(goodsName, sumPrice, buyNumber)}>提交</Button>
                    </Col>
                </Row>
                <div style={{ height: 16 }}></div>
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
                                datetime={<Tooltip
                                    title={ moment(item.updateAt)
                                        .format('YYYY-MM-DD HH:mm:ss')}
                                >
                                    <span>
                                        {moment(item.updateAt)
                                            .fromNow()}
                                    </span>
                                </Tooltip>
                                }
                            />
                        </li>
                    )}
                />
                <Button>添加评论</Button>
            </main>
            <Footer></Footer>
        </div>
    )
}

export { getComments, getOrders };
export default Goods;