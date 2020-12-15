import { Button } from "antd";
import {
  Breadcrumb,
  Card,
  Col,
  Comment,
  Descriptions,
  Icon,
  List,
  Modal,
  Row,
  Tooltip,
} from "antd/es";
import moment from "moment";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux/es";
import { RouteComponentProps } from "react-router";
import Footer from "../component/footer";
import Header from "../component/header";
import { RootState } from "../index";
import { AuthState } from "../store/Auth/actionType";
import { Comment as CommentType } from "../store/Comments/actionType";
import { GoodsState } from "../store/Goods/actionType";
import { postOrder } from "../store/Orders/action";

function getGoods(goods: GoodsState[], kind: string, id: number) {
  let defaultGood = {
    goodsName: "",
    goodsPrice: 0,
    discount: 0,
  };
  let sameKind = goods.find((val) => val.GoodsKind === kind);

  const good = sameKind?.GoodsProducts?.find((val) => val.goodsId === id);

  return good ?? defaultGood;
}

interface GoodsProps extends RouteComponentProps {
  match: {
    params: {
      goodsId: string;
      goodsKind: string;
    };
    isExact;
    path;
    url;
  };
  goods: GoodsState;
}

function loginError() {
  Modal.error({
    title: "用户未登录",
    content: "在购买前请先登录你的账号",
  });
}

function success() {
  Modal.success({
    title: "购买成功",
    content: "请享受你的购买之旅",
  });
}

const Goods: React.FC<GoodsProps> = ({ match }) => {
  const goods: GoodsState[] = useSelector<RootState, GoodsState>(
    (state) => state.Goods
  );
  const comments: CommentType[] = useSelector<RootState, CommentType>(
    (state) => state.Comments
  );
  const { curUser } = useSelector<RootState, AuthState>((state) => state.Auth);

  const { goodsKind: kind, goodsId: id } = match.params;

  const { goodsName, goodsPrice, discount } = getGoods(goods, kind, Number(id));

  const [buyNumber, setBuyNumber] = useState(1);
  const sumPrice = (buyNumber * discount * goodsPrice).toFixed(2);
  const dispatch = useDispatch();

  function toPostOrder(goodsName, sumPrice, goodsNumber) {
    if (curUser.userId >= 0) {
      dispatch(
        postOrder({
          user: curUser.userName,
          goodsName,
          sumPrice,
          goodsNumber,
        })
      );
      success();
    } else {
      loginError();
    }
  }

  return (
    <div>
      <Header />
      <main>
        <Breadcrumb>
          <Breadcrumb.Item href="/">
            <Icon type="home" />
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item href="#">
            <Icon type="user" />
            {goodsName}
          </Breadcrumb.Item>
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
                <Descriptions.Item label="商品名">
                  {goodsName}
                </Descriptions.Item>
                <Descriptions.Item label="商品价格">
                  {goodsPrice}
                </Descriptions.Item>
              </Descriptions>
            </Card>
          </Col>
          <Col offset={4} span={6}>
            <h2>想要获得它</h2>
            <p style={{ lineHeight: "24px" }}>
              限时折扣: <span>{discount}</span>
            </p>
            <p style={{ lineHeight: "24px" }}>
              购买数量: <span>{buyNumber}</span>
            </p>
            <Button
              style={{ width: "50%" }}
              onClick={() => setBuyNumber(buyNumber + 1)}
            >
              添加
            </Button>
            <Button
              style={{ width: "50%" }}
              onClick={() =>
                buyNumber < 1 ? setBuyNumber(0) : setBuyNumber(buyNumber - 1)
              }
            >
              减少
            </Button>
            <p style={{ lineHeight: "48px" }}>
              总价:{" "}
              <span style={{ color: "red", fontSize: "24px" }}>{sumPrice}</span>
            </p>
            <Button
              style={{ width: "100%" }}
              onClick={() => toPostOrder(goodsName, sumPrice, buyNumber)}
            >
              提交
            </Button>
          </Col>
        </Row>
        <div style={{ height: 16 }}></div>
        <List
          style={{ padding: 15 }}
          header={`${comments.length} comments`}
          itemLayout="horizontal"
          dataSource={comments}
          renderItem={(item) => (
            <li>
              <Comment
                author={item.user}
                avatar={item.avatar}
                content={<p>{item.content}</p>}
                datetime={
                  <Tooltip
                    title={moment(item.updateAt).format("YYYY-MM-DD HH:mm:ss")}
                  >
                    <span>{moment(item.updateAt).fromNow()}</span>
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
  );
};

export default Goods;
