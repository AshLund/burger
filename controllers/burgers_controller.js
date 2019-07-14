var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

  router.post("/api/burgers", function(req, res) {
    burger.create([
      "burger_name", "devoured"
    ], [
      req.body.burger_name, false
    ], function (result) {
        res.json(result)
    });
  });


module.exports = router;