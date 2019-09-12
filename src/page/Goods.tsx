import { Card, Col, Comment, Icon, List, Row, Tooltip } from "antd/es";
import Meta from "antd/es/card/Meta";
import moment from "moment";
import React, { useState } from "react";
import { RouteComponentProps } from "react-router";
import Footer from "../component/footer";
import Header from "../component/header";

const data = [
    {
        author: 'Han Solo',
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        content: (
            <p>
                We supply a series of design principles, practical patterns and high quality design
                resources (Sketch and Axure), to help people create their product prototypes beautifully and
                efficiently.
      </p>
        ),
        datetime: (
            <Tooltip
                title={moment()
                    .subtract(1, 'days')
                    .format('YYYY-MM-DD HH:mm:ss')}
            >
                <span>
                    {moment()
                        .subtract(1, 'days')
                        .fromNow()}
                </span>
            </Tooltip>
        ),
    },
    {
        author: 'Han Solo',
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        content: (
            <p>
                We supply a series of design principles, practical patterns and high quality design
                resources (Sketch and Axure), to help people create their product prototypes beautifully and
                efficiently.
      </p>
        ),
        datetime: (
            <Tooltip
                title={moment()
                    .subtract(2, 'days')
                    .format('YYYY-MM-DD HH:mm:ss')}
            >
                <span>
                    {moment()
                        .subtract(2, 'days')
                        .fromNow()}
                </span>
            </Tooltip>
        ),
    },
];

interface GoodsProps extends RouteComponentProps {
    match: {
        params: {
            goodsId: number;
        },
        isExact, path, url
    }
}

const Goods: React.FC<GoodsProps> = ({ match }) => {
    const [goodsName] = useState("joke");
    const [goodsPrice] = useState(5);

    return (
        <div>
            <Header></Header>
            <main>
                <h3 style={{ padding: 15 }}>this {match.params.goodsId}goods</h3>
                <div style={{ height: 16 }}></div>
                <Row>
                    <Col offset={4} span={8}>
                        <Card
                            cover={
                                <img
                                    alt="example"
                                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                />
                            }
                            actions={[
                                <Icon type="setting" key="setting" />,
                                <Icon type="edit" key="edit" />,
                                <Icon type="ellipsis" key="ellipsis" />,
                            ]}
                        >
                            <Meta
                                title="商品名"
                                description={goodsName}
                            />
                            <Meta
                                title="商品价格"
                                description={goodsPrice}
                            />
                        </Card>
                    </Col>
                </Row>
                <div style={{ height: 16 }}></div>
                <List
                    style={{ padding: 15 }}
                    header={`${data.length} comments`}
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={item => (
                        <li>
                            <Comment
                                author={item.author}
                                avatar={item.avatar}
                                content={item.content}
                                datetime={item.datetime}
                            />
                        </li>
                    )}
                />
            </main>
            <Footer></Footer>
        </div>
    )
}

export default Goods;