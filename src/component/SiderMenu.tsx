import { Icon, Menu } from "antd/es";
import SubMenu from "antd/es/menu/SubMenu";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const SiderMenu: React.FC = () => {
    const [goodsIds] = useState([1,2]); 
    const formatIds = goodsIds.map((id) => `/goods/${id}`)
    return (
        <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
        >
            <SubMenu
                key="sub1"
                title={
                    < span >
                    <Icon type="laptop" />
                        家电
              </span>
                }
            >
                <Menu.Item key="1"><Link to={formatIds[0]}>家电1</Link></Menu.Item>
                <Menu.Item key="2"><Link to={formatIds[1]}>家电2</Link></Menu.Item>
                <Menu.Item key="3">家电3</Menu.Item>
                <Menu.Item key="4">家电4</Menu.Item>
            </SubMenu>
            <SubMenu
                key="sub2"
                title={
                    <span>
                        <Icon type="laptop" />
                        冰箱
              </span>
                }
            >
                <Menu.Item key="5">冰箱1</Menu.Item>
                <Menu.Item key="6">冰箱2</Menu.Item>
                <Menu.Item key="7">冰箱3</Menu.Item>
                <Menu.Item key="8">冰箱4</Menu.Item>
            </SubMenu>
            <SubMenu
                key="sub3"
                title={
                    <span>
                        <Icon type="laptop" />
                        电脑
              </span>
                }
            >
                <Menu.Item key="9">电脑1</Menu.Item>
                <Menu.Item key="10">电脑2</Menu.Item>
                <Menu.Item key="11">电脑3</Menu.Item>
                <Menu.Item key="12">电脑4</Menu.Item>
            </SubMenu>
        </Menu>
    )
}

export default SiderMenu;