const fs = require('fs');
const Koa = require('koa');
const koaBody = require('koa-body');
const Router = require('koa-router')
const path = require('path')

const app = new Koa();
const router = new Router({
    prefix: "/api"
});

let goods = require('./mock/goods');
router.get('/getGood', async ctx => {
    ctx.body = JSON.stringify({
        code: 200,
        data: goods
    });
});

let comments = require('./mock/comments');
router.get('/getComment', async ctx => {
    ctx.body = JSON.stringify({
        code: 200,
        data: comments
    });
});

let users = require('./mock/user');
router.get('/getUser', async ctx => {
    ctx.body = JSON.stringify({
        code: 200,
        data: users
    });
});

let order = require('./mock/order');
router.get('/getOrder', async ctx => {
    ctx.body = JSON.stringify({
        code: 200,
        data: order
    });
});

router.post('/postOrder', koaBody(), async ctx => {
    let body = ctx.req.body; //{"user": "Jack","sumPrice": 30,"goodsName" : "A7" }
    order.push(body);
    ctx.body = JSON.stringify({
        code: 200,
        info: '订单成功'
    });
})

router.post('/login', koaBody(), async ctx => {
    let body = ctx.req.body; //{username,password}
    let user = users.find(item => item.username === body.username && item.password === body.password);
    if (user) {
        ctx.req.session.user = user;
        ctx.body = JSON.stringify({
            code: 200,
            data: user,
            info: '登录成功'
        });
    } else {
        ctx.body = JSON.stringify({
            code: 401,
            info: '登录失败'
        });
    }
});

let write = () => {
    return new Promise((resolve) => {
        fs.readFile(path.join(__dirname, '/goods.json'), function (err, data) {
            if (err) {
                resolve({code: -1, msg: "failed" + err })
            }
            let jsonData = JSON.parse(data.toString());
            resolve({ code: 0, data: jsonData  })
        })
    });
}

app.use(async (ctx, next) => {
    if (ctx.path === "/") {
        ctx.body = 'hello world';
    }
    next();
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, console.log("app is start at port 3000 !!!"));
