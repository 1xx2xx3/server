// 跨域解决方式
module.exports = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept, X-Requested-With, x-access-token');
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
    if(req.method == 'OPTIONS')
        res.send(200);
    else
        next();
};