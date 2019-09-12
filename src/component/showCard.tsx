import { Card, Icon } from "antd/es";
import React from "react";
import { Link } from "react-router-dom";

const { Meta } = Card;

interface cardProps {
    path: string;
    goodsName: string;
    goodsPrice: number;
}

const ShowCard: React.FC<cardProps> = (props) => {

    return (
        <Card
            cover={
                <Link to={props.path}><img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                /></Link>
            }
            actions={[
                <Icon type="setting" key="setting" />,
                <Icon type="edit" key="edit" />,
                <Icon type="ellipsis" key="ellipsis" />,
            ]}
        >
            <Meta
                title="商品名"
                description = { props.goodsName }
            />
            <Meta
                title="商品价格"
                description = { props.goodsPrice }
            />
        </Card>
    ) 
}

export default ShowCard;
