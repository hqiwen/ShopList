import { Col, Layout, Row } from "antd/es";
import React from "react";
import { useSelector } from "react-redux/es";
import Footer from "../component/footer";
import Header from "../component/header";
import SameKindGoods from "../component/SameKindGoods";
import SiderMenu from "../component/SiderMenu";
import { RootState } from "../index";
import { GoodsState } from "../store/Goods/actionType";
const { Sider } = Layout;

const GoodsPadding: React.FC = () => {
  return <div style={{ height: 16 }}></div>;
};

const Home: React.FC = () => {
  const goods: GoodsState[] = useSelector<RootState, GoodsState[]>(
    (state: RootState) => state.Goods
  );

  return (
    <div>
      <Header />
      <Layout>
        <Row>
          <Col span={4}>
            <Sider style={{ background: "#fff" }}>
              <SiderMenu goods={goods} />
            </Sider>
          </Col>
          <Col span={20}>
            <SameKindGoods
              GoodsKind={goods[0].GoodsKind}
              GoodsProducts={goods[0].GoodsProducts}
            />
            <GoodsPadding />
            <SameKindGoods
              GoodsKind={goods[1].GoodsKind}
              GoodsProducts={goods[1].GoodsProducts}
            />
            <GoodsPadding />
            <SameKindGoods
              GoodsKind={goods[1].GoodsKind}
              GoodsProducts={goods[1].GoodsProducts}
            />
          </Col>
        </Row>
      </Layout>
      <Footer />
    </div>
  );
};

export default Home;
