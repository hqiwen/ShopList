import { Card, Descriptions } from "antd/es";
import React from "react";
import { Link } from "react-router-dom";

interface cardProps {
  path: string;
  goodsName: string;
  goodsPrice: number;
}

const ShowCard: React.FC<cardProps> = (props) => {
  const { path, goodsName: name, goodsPrice: price } = props;

  return (
    <Card
      cover={
        <Link to={path}>
          <img
            width="100%"
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        </Link>
      }
      hoverable={true}
    >
      <Descriptions title="商品描述" layout="horizontal" size="middle">
        <Descriptions.Item label="商品名">{name}</Descriptions.Item>
        <Descriptions.Item label="商品价格">{price}</Descriptions.Item>
      </Descriptions>
    </Card>
  );
};

export default ShowCard;
