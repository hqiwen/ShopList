import { Button } from "antd";
import { Breadcrumb, Card, Col, Comment, Descriptions, Icon, List, Modal, Row, Tooltip } from "antd/es";
import moment from "moment";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux/es";
import { RouteComponentProps } from "react-router";
import Footer from "../component/footer";
import Header from "../component/header";
import { RootState } from "../index";
import { Comment as CommentType } from "../store/Comments/actionType";
import { POSTORDER } from "../store/Orders/actionType";

function getGoods(goods, goodsKind: string, goodsId: number) {
    const GoodsArray = goods.find(val => val.GoodsKind === goodsKind).GoodsProducts;
    const goodOnly = GoodsArray.find(val => val.goodsId === goodsId);
    console.log(goodOnly);
    return goodOnly;
}

interface GoodsProps extends RouteComponentProps {
    match: {
        params: {
            goodsId: string;
            goodsKind: string;
        },
        isExact, path, url
    },
    goods: any;
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
    const goods = useSelector<RootState, any>(state  => state.Goods);
    const comments: CommentType[] = useSelector<RootState, any>(state => state.Comments);
    const curUser = useSelector<RootState, any>(state => state.Auth.curUser);
    const { goodsKind, goodsId } = match.params;
    const { goodsName, goodsPrice, discount } = getGoods(goods, goodsKind, parseInt(goodsId));
    const [buyNumber, setBuyNumber] = useState(1);
    const sumPrice = (buyNumber * discount * goodsPrice).toFixed(2);
    const dispatch = useDispatch();

    function postOrder(goodsName, sumPrice, goodsNumber) {
        if (curUser.userId >= 0) {
            dispatch({ type: POSTORDER, order: { user: curUser.userName, goodsName: goodsName, sumPrice: sumPrice, goodsNumber: goodsNumber } })
            success();
        } else {
            loginError();
        }
    }

    return (
        <div>
            <Header></Header>
            <main>
                <Breadcrumb>
                    <Breadcrumb.Item href="/"><Icon type="home"></Icon>Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="#"><Icon type="user"></Icon>{goodsName}</Breadcrumb.Item>
                </Breadcrumb>
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
                        <p style={{ lineHeight: "48px" }}>总价: <span style={{ color: "red", fontSize: "24px" }}>{sumPrice}</span></p>
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
                                    title={moment(item.updateAt)
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

export default Goods;