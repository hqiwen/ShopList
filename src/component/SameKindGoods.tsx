import { Col, Row } from "antd";
import React from "react";
import { GoodsState } from "../store/Goods/actionType";
import ShowCard from "./showCard";

function getPath(goodsKind: string, goodsId: number) {
  return `/goods/${goodsKind}/${goodsId}`;
}

const SameKindGoods: React.FC<GoodsState> = (props) => {
  const { GoodsProducts: products, GoodsKind: kind } = props;

  return (
    <div className="gutter">
      <h3 style={{ padding: 15 }}>{kind}</h3>
      <Row gutter={16}>
        <Col className="gutter-row" xs={12} sm={8} md={6} lg={6} xl={6}>
          <ShowCard
            path={getPath(kind, products[0].goodsId)}
            goodsName={products[0].goodsName}
            goodsPrice={products[0].goodsPrice}
          />
        </Col>
        <Col className="gutter-row" xs={12} sm={8} md={6} lg={6} xl={6}>
          <ShowCard
            path={getPath(kind, products[1].goodsId)}
            goodsName={products[1].goodsName}
            goodsPrice={products[1].goodsPrice}
          />
        </Col>
        <Col className="gutter-row" xs={12} sm={8} md={6} lg={6} xl={6}>
          <ShowCard
            path={getPath(kind, products[2].goodsId)}
            goodsName={products[2].goodsName}
            goodsPrice={products[2].goodsPrice}
          />
        </Col>
        <Col className="gutter-row" xs={12} sm={8} md={6} lg={6} xl={6}>
          <ShowCard
            path={getPath(kind, products[2].goodsId)}
            goodsName={products[2].goodsName}
            goodsPrice={products[2].goodsPrice}
          />
        </Col>
      </Row>
    </div>
  );
};

export default SameKindGoods;
