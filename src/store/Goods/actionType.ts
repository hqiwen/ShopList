export const GETGOODS = "GETGOODS";

export interface GoodsState {
    GoodsKind: string;
    GoodsProducts: GoodsProduct[];
}

export interface GoodsProduct {
    goodsId: number;
    goodsName: string;
    goodsPrice: number;
    discount: number;
}

export interface GetGoodsAction {
    type: typeof GETGOODS
}

export type GetGoodsActionType = GetGoodsAction;