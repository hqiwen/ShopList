import { GETORDERS, Order, OrderActionType, POSTORDER } from "./actionType";

const defaultState: Order[] = [
    {
        user: "default",
        goodsName: "A0",
        sumPrice: 0,
        goodsNumber: 0
    }
];

export default (state = defaultState, action: OrderActionType) : Order[] => {
    switch (action.type) {
        case GETORDERS:
            return state;
        case POSTORDER: 
            return [...state, action.order]
    }
};
