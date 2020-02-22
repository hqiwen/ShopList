import { Col, Layout, Row } from "antd/es";
import React, { useEffect } from "react";
import { useSelector } from "react-redux/es";
import Footer from "../component/footer";
import Header from "../component/header";
import SameKindGoods from "../component/SameKindGoods";
import SiderMenu from "../component/SiderMenu";
import { RootState } from "../index";
import { fetchGoods } from "../store/Goods/action";
const { Sider } = Layout;

const GoodsPadding: React.FC = () => {
    return (
        <div style={{ height: 16 }}></div>
    )
}

const Home: React.FC = () => {
    const goods = useSelector<RootState, any>(state => state.Goods);
    console.log(goods);

    useEffect(() => {
        fetchGoods()
    }, [])

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
                        <SameKindGoods GoodsKind={goods[0].GoodsKind} GoodsProducts={goods[0].GoodsProducts}></SameKindGoods>
                        <GoodsPadding></GoodsPadding>
                        <SameKindGoods GoodsKind={goods[1].GoodsKind} GoodsProducts={goods[1].GoodsProducts}></SameKindGoods>
                        <GoodsPadding></GoodsPadding>
                        <SameKindGoods GoodsKind={goods[1].GoodsKind} GoodsProducts={goods[1].GoodsProducts}></SameKindGoods>
                    </Col>
                </Row>
            </Layout>
            <Footer></Footer>
        </div>
    );
}

export default Home;