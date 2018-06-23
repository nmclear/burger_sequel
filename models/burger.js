var orm = require("../config/orm.js");

//Model for data logic of burgers
var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },
    insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res) {
            cb(res);
        });
    },
    updateOne: function(colVal, condition, cb){
        orm.updateOne("burgers", colVal, condition, function(res){
            cb(res);
        });
    }
};

// export for controller
module.exports = burger;