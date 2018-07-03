var mysql = require('mysql');
var config = require('./config');

class Mysql {
    constructor() {
        this.connPool = mysql.createPool(config);
    }
};

module.exports = new Mysql();
