import { Comment, GETCOMMENTS } from "./actionType";

const defaultState: Comment[] = [
    {
        user: "Han Solo",
        avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        content: "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
        updateAt: "2019-9-24"
    }, {
        "user": "Jack",
        "avatar": "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        "content": "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
        "updateAt": "2019-9-24"
    }
]

export default (state = defaultState, action) => {
    switch (action.type) {
        case GETCOMMENTS:
            return state;
        default:
            return state
    }
};
