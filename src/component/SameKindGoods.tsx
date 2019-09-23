import { Col, Row } from 'antd';
import React from "react";
import ShowCard from "./showCard";

function getPath(goodsKind: string, goodsId: number) {
    return `/goods/${goodsKind}/${goodsId}`;
}

interface kindProps {
    "GoodsKind": string,
    "GoodsProducts":
    {
        "goodsId": number,
        "goodsName": string,
        "goodsPrice": number,
        "discount": number,
    }[]
}


const SameKindGoods: React.FC<kindProps> = (props) => {
    const GoodsProducts = props.GoodsProducts;
    const goodsKind = props.GoodsKind;
    console.log(GoodsProducts);
    return (
        <div className="gutter">
            <h3 style={{ padding: 15 }}>{props.GoodsKind}</h3>
            <Row gutter={16}>
                <Col className="gutter-row" xs={12} sm={8} md={6} lg={6} xl={6}>
                    <ShowCard path={getPath(goodsKind, GoodsProducts[0].goodsId)} goodsName={GoodsProducts[0].goodsName} goodsPrice={GoodsProducts[0].goodsPrice}></ShowCard>
                </Col>
                <Col className="gutter-row" xs={12} sm={8} md={6} lg={6} xl={6}>
                    <ShowCard path={getPath(goodsKind, GoodsProducts[1].goodsId)} goodsName={GoodsProducts[1].goodsName} goodsPrice={GoodsProducts[1].goodsPrice}></ShowCard>
                </Col>
                <Col className="gutter-row" xs={12} sm={8} md={6} lg={6} xl={6}>
                    <ShowCard path={getPath(goodsKind, GoodsProducts[2].goodsId)} goodsName={GoodsProducts[2].goodsName} goodsPrice={GoodsProducts[2].goodsPrice}></ShowCard>
                </Col>
                <Col className="gutter-row" xs={12} sm={8} md={6} lg={6} xl={6}>
                    <ShowCard path={getPath(goodsKind, GoodsProducts[2].goodsId)} goodsName={GoodsProducts[2].goodsName} goodsPrice={GoodsProducts[2].goodsPrice}></ShowCard>
                </Col>
            </Row>
        </div>
    )
}

export default SameKindGoods;