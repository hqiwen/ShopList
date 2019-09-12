import { Col, Layout, Row } from "antd/es";
import React from "react";
import Footer from "../component/footer";
import Header from "../component/header";
import SameKindGoods from "../component/SameKindGoods";
import SiderMenu from "../component/SiderMenu";
const { Sider } = Layout;

const data = [{
    "GoodsKind": "家电",
    "GoodsProduct": [
        {
            "goodsId": 1,
            "goodsName": "冰箱1",
            "goodsPrice": 1399
        },
        {
            "goodsId": 2,
            "goodsName": "冰箱2",
            "goodsPrice": 1399
        },
        {
            "goodsId": 3,
            "goodsName": "冰箱3",
            "goodsPrice": 1399
        }
    ]
},
{
    "GoodsKind": "汽车",
    "GoodsProduct": [
        {
            "goodsId": 1,
            "goodsName": "汽车1",
            "goodsPrice": 1399
        },
        {
            "goodsId": 2,
            "goodsName": "汽车2",
            "goodsPrice": 1399
        },
        {
            "goodsId": 3,
            "goodsName": "汽车3",
            "goodsPrice": 1399
        }
    ]
}
]

const GoodsPadding: React.FC = () => {
    return (
        <div style={{ height: 16 }}></div>
    )
}

const Home: React.FC = () => {

    return (
        <div>
            <Header></Header>
                <Layout>
                <Row>
                    <Col span={4}>
                        <Sider width={200} style={{ background: '#fff' }}>
                            <SiderMenu></SiderMenu>
                        </Sider>
                    </Col>
                    <Col span={20}>
                        <SameKindGoods GoodsKind={data[0].GoodsKind} GoodsProduct={data[0].GoodsProduct}></SameKindGoods>
                        <GoodsPadding></GoodsPadding>
                        <SameKindGoods GoodsKind={data[1].GoodsKind} GoodsProduct={data[1].GoodsProduct}></SameKindGoods>
                        <GoodsPadding></GoodsPadding>
                        <SameKindGoods GoodsKind={data[1].GoodsKind} GoodsProduct={data[1].GoodsProduct}></SameKindGoods>
                    </Col>
                </Row>
            </Layout>
            <Footer></Footer>
        </div>
    );
}

export default Home;