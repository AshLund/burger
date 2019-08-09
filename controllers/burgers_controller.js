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

router.post("/burgers/create/:name", function (req, res) {
  burger.insertOne(req.params.name, function(result) {
    res.redirect("/");
  });
});

  router.put("/burgers/:id", function (req, res) {
  burger.updateOne(req.params.id, function (result) {
      res.sendStatus(200);
      console.log("hello Nick")
  });
});

  

module.exports = router;