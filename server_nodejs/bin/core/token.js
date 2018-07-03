// token类
var jwt = require('jwt-simple');
var uuid = require('node-uuid');
var moment = require('moment');

var secret = uuid.v4();
var expires = moment().add(7, 'day').valueOf();

var token = module.exports;

//生成token
token.get = (json) => {
    json.sign = uuid.v1();
    json.exp = expires;
    return jwt.encode(json, secret);
};

// 验证
token.verify = (req, res, next, params) => {
    try {
        var token = pf.getReqValue(req, 'token') || req.headers['x-access-token'];
        var payload = jwt.decode(token, secret);
        // TODO token数据验证  params
        req.payload = payload;
        next();
        //throw new Error('error');
    } catch (e) {
        pf.send(res, sd.errorCode.token_fail);
    }
};