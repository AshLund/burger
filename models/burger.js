var orm = require("../config/orm.js");

var burger= {
    seletAll: function (cb) {
        orm.selectAll("burgers", function (results) {
            cb(results);
        })
    },

    create: function (tableName, colName, value, cb) {
    orm.create("burgers", colName, value, function (result) {
        cb(result);
    });
}
}

module.exports=burger