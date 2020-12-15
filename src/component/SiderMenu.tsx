import { Icon, Menu } from "antd/es";
import SubMenu from "antd/es/menu/SubMenu";
import React from "react";
import { Link } from "react-router-dom";
import { GoodsProduct, GoodsState } from "../store/Goods/actionType";

function getGoodsKind(goods): GoodsProduct[] {
  return goods.map((val) => val.GoodsKind);
}

interface SiderMenuProp {
  goods: GoodsState[];
}

const SiderMenu: React.FC<SiderMenuProp> = (props) => {
  //展示前四位
  const goodsIds = [1, 2, 3, 4];
  const kinds = getGoodsKind(props.goods);

  const formatIds = kinds.map((val) =>
    goodsIds.map((id) => `/goods/${val}/${id}`)
  );

  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      style={{ height: "100%", borderRight: 0 }}
    >
      <SubMenu
        key="sub1"
        title={
          <span>
            <Icon type="laptop" />
            {kinds[0]}
          </span>
        }
      >
        <Menu.Item key="1">
          <Link to={formatIds[0][0]}> {kinds[0]}1</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to={formatIds[0][1]}> {kinds[0]}2</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to={formatIds[0][2]}> {kinds[0]}3</Link>
        </Menu.Item>
      </SubMenu>
      <SubMenu
        key="sub2"
        title={
          <span>
            <Icon type="car" />
            {kinds[1]}
          </span>
        }
      >
        <Menu.Item key="5">
          <Link to={formatIds[1][0]}>{kinds[1]}1</Link>
        </Menu.Item>
        <Menu.Item key="6">
          <Link to={formatIds[1][1]}>{kinds[1]}2</Link>
        </Menu.Item>
        <Menu.Item key="7">
          <Link to={formatIds[1][2]}>{kinds[1]}3</Link>
        </Menu.Item>
      </SubMenu>
    </Menu>
  );
};

export default SiderMenu;
