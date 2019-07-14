var connection = require("./connection.js");

var orm={
    selectAll: function (tableName, cb) {
        var queryString = "SELECT * FROM ??"
        connection.query(queryString, [tableName], function(err, result) {
            if (err) throw err;
            cb(result)
          });
        },
    insertOne: function (tableName, colName, value, cb) {
        var queryString = "INSERT INTO ??"
        connection.query(queryString, [tableName, colName, value], function (err, result) {
            if (err) throw err;
            cb(result)
        });
    },

}
    // updateOne: 





module.exports = orm;
