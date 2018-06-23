var express = require('express');
// rmiddleware/routing for router object
var router = express.Router();

// import model to use for database functions.
var burger = require('../models/burger');


// GET and render index page with data from burger table
router.get('/', function(req, res){
    // passing through model to obtain mysql data
    burger.selectAll(function(data){
        var burgerObject = {
            burgers: data
        };
        res.render('index', burgerObject);
    });
});

// POST new burger to database and return new ID
router.post('/api/burgers', function(req, res) {
    burger.insertOne(['burger_name', 'devoured'], [req.body.burger_name, req.body.devoured], function(result){
        // retrieve insert id of a new row via .insertId (SQL doc)
        res.json({ id: result.insertId});
    });
});

// updating a existing burger
router.put('/api/burgers/:id', function(req, res) {
    var updateID = req.params.id;
    var condition = "id = " + updateID;

    burger.updateOne(
        {
            devoured: req.body.devoured
        },
        condition,
        function(result) {
            if(result.changedRows === 0) {
                return res.status(404).end();
            }
            res.status(200).end();
        }
    );
});


// for server.js use.
module.exports = router;