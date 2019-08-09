var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
  burger.selectAll(function(burgers) {
    res.render("index", {burgers: burgers})
  })
})

router.post("/burgers/create", function (req, res) {
  burger.insertOne(req.body.burger_name, function(result) {
    res.redirect("/");
    console.log("create")
  });
});

  router.put("/burgers/:id", function (req, res) {
  burger.updateOne(req.params.id, function (result) {
      res.status(200);
      console.log("hello Nick")
  });
});

  

module.exports = router;