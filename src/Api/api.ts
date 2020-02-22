import { Modal } from "antd/es";

const DOMAIN = 'http://localhost:3000';


function fetchError(info) {
    Modal.error({
        title: "请求错误",
        content: info
    })
}

function get(url: string, params?: {}) {
    if (params) {
        let paramsArray = [{}];
        Object.keys(params).forEach(key => paramsArray.push(key + "=" + params[key]))
        if (url.search(/\?/) === -1) {
            url += "?" + paramsArray.join("&")
        } else {
            url += "&" + paramsArray.join("&")
        }
    }
    return fetch(DOMAIN + url).then(response => response.json(), err => fetchError(err))
}

function post(url, data) {
    return fetch(DOMAIN + url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(data)
    }).then(response => response.json(), err => fetchError(err))
}

export function getGoods() {
    return get('/api/getGood');
}

export function getComments() {
    return get('/api/getComment');
}

export function getOrders() {
    return get('/api/getOrder');
}

export function login(data) {
    return post("/api/login", data);
}

export function postOrder(order) {
    return post("/api/postOrder", order);
}
