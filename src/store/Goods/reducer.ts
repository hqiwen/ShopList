import { GETGOODS, GetGoodsActionType, GoodsState } from "./actionType";

const defaultState : GoodsState[] = [
    {
        GoodsKind: "家电",
        GoodsProducts: [
            {
                goodsId: 1,
                goodsName: "冰箱1",
                goodsPrice: 1399
            },
            {
                goodsId: 2,
                goodsName: "冰箱2",
                goodsPrice: 1399
            },
            {
                goodsId: 3,
                goodsName: "冰箱3",
                goodsPrice: 1399
            }
        ]
    },
    {
        GoodsKind: "汽车",
        GoodsProducts: [
            {
                goodsId: 1,
                goodsName: "汽车1",
                goodsPrice: 1399
            },
            {
                goodsId: 2,
                goodsName: "汽车2",
                goodsPrice: 1399
            },
            {
                goodsId: 3,
                goodsName: "汽车3",
                goodsPrice: 1399
            }
        ]
    }
];

export default (state = defaultState, action : GetGoodsActionType) => {
    switch (action.type) {
        case GETGOODS:
            return state;
    }
};
