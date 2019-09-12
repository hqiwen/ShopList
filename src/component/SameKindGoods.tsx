import { Col, Row } from 'antd';
import React from "react";
import ShowCard from "./showCard";

function getPath(goodsId: number) {
    return `/goods/${goodsId}`;
}

interface kindProps {
    "GoodsKind": string,
    "GoodsProduct":
        {
            "goodsId": number,
            "goodsName": string,
            "goodsPrice": number
        }[]
}


const SameKindGoods: React.FC<kindProps> = (props) => {
    const GoodsProduct = props.GoodsProduct;

    return (
        <div className="gutter">
            <h3 style={{ padding: 15 }}>{props.GoodsKind}</h3>
            <Row gutter={24}>
                <Col className="gutter-row" span={6}>
                    <ShowCard path={getPath(GoodsProduct[0].goodsId)} goodsName={GoodsProduct[0].goodsName} goodsPrice={GoodsProduct[0].goodsPrice}></ShowCard>
                </Col>
                <Col className="gutter-row" span={6}>
                    <ShowCard path={getPath(GoodsProduct[1].goodsId)} goodsName={GoodsProduct[1].goodsName} goodsPrice={GoodsProduct[1].goodsPrice}></ShowCard>
                </Col>
                <Col className="gutter-row" span={6}>
                    <ShowCard path={getPath(GoodsProduct[2].goodsId)} goodsName={GoodsProduct[2].goodsName} goodsPrice={GoodsProduct[2].goodsPrice}></ShowCard>
                </Col>
                <Col className="gutter-row" span={6}>
                    <ShowCard path={getPath(GoodsProduct[2].goodsId)} goodsName={GoodsProduct[2].goodsName} goodsPrice={GoodsProduct[2].goodsPrice}></ShowCard>
                </Col>
            </Row>
        </div>
    )
}

export default SameKindGoods;