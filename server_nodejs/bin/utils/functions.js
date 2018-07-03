// 通用函数方法
global.pf = {};

// 获取接收的元素值
pf.getReqValue = (req, key) => {
    return (req.query && req.query[key]) || (req.body && req.body[key]);
};

// 发送返回数据 格式可以自己定义
pf.send = (res, code, data) => {
    res.send({
        errorCode: code ? code : null,
        data: data ? data : {}
    });
};