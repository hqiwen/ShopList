import { Col, Layout, Row } from "antd/es";
import React from "react";
import { useSelector } from "react-redux/es";
import Footer from "../component/footer";
import Header from "../component/header";
import SameKindGoods from "../component/SameKindGoods";
import SiderMenu from "../component/SiderMenu";
import { RootState } from "../index";
const { Sider } = Layout;

const GoodsPadding: React.FC = () => {
    return (
        <div style={{ height: 16 }}></div>
    )
}

const Home: React.FC = () => {
    const goods = useSelector<RootState, any>(state => state.Goods);

    console.log(goods);

    return (
        <div>
            <Header></Header>
                <Layout>
                <Row>
                    <Col span={4}>
                        <Sider style={{ background: '#fff' }}>
                            <SiderMenu goods={goods}></SiderMenu>
                        </Sider>
                    </Col>
                    <Col span={20}>
                        <SameKindGoods GoodsKind={goods[0].GoodsKind} GoodsProduct={goods[0].GoodsProduct}></SameKindGoods>
                        <GoodsPadding></GoodsPadding>
                        <SameKindGoods GoodsKind={goods[1].GoodsKind} GoodsProduct={goods[1].GoodsProduct}></SameKindGoods>
                        <GoodsPadding></GoodsPadding>
                        <SameKindGoods GoodsKind={goods[1].GoodsKind} GoodsProduct={goods[1].GoodsProduct}></SameKindGoods>
                    </Col>
                </Row>
            </Layout>
            <Footer></Footer>
        </div>
    );
}

export default Home;