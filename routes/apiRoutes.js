var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/users", function(req, res) {
    db.user.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/users", function(req, res) {
   // console.log(newUser);
    //console.log(req.body);
    var newUser = req.body;
    newUser.credits = 200;
    db.user.create(newUser).then(function(dbExample) {
      
      console.log(dbExample);
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/users/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
