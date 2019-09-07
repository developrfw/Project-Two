var db = require("../models");

module.exports = function (app) {
  // Get all examples
  app.get("/api/users", function (req, res) {
    db.user.findAll({}).then(function (dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/users", function (req, res) {
    // console.log(newUser);
    //console.log(req.body);
    var newUser = req.body;
    newUser.credits = 200;
    db.user.create(newUser).then(function (dbExample) {
      console.log(dbExample);
      res.json(dbExample);
    });
  });

  app.put("/api/users", function(req, res) {
    console.log(req.body.id);
    console.log(req.body.credits);
    db.user.update({
      credits: req.body.credits
      },  {
      where: {
        id: req.body.id
      }
    }).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });
};
