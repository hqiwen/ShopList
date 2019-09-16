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
            "goodsPrice": 1399,
            "discount" : 0.85
        },
        {
            "goodsId": 2,
            "goodsName": "冰箱2",
            "goodsPrice": 1299,
            "discount": 0.75
        },
        {
            "goodsId": 3,
            "goodsName": "冰箱3",
            "goodsPrice": 1699,
            "discount": 0.9
        }
    ]
},
{
    "GoodsKind": "汽车",
    "GoodsProduct": [
        {
            "goodsId": 1,
            "goodsName": "汽车1",
            "goodsPrice": 1399,
            "discount": 0.85
        },
        {
            "goodsId": 2,
            "goodsName": "汽车2",
            "goodsPrice": 1199,
            "discount": 0.85
        },
        {
            "goodsId": 3,
            "goodsName": "汽车3",
            "goodsPrice": 1299,
            "discount": 0.85
        }
    ]
}
]

function getGoodsKind() {
    return data.map(val => val.GoodsKind);
}

function getGoods(goodsKind: string, goodsId: string) {
    const GoodsArray = data.filter(val => val.GoodsKind === goodsKind)[0].GoodsProduct;
    const goods = GoodsArray.filter(val => (val.goodsId).toString() === goodsId)[0];
    console.log(goods);
    return goods;
}

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
                        <Sider style={{ background: '#fff' }}>
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

export { getGoods, getGoodsKind };
export default Home;