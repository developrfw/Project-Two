var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/users", function(req, res) {
    db.user.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.get("/api/users/:id", function(req, res) {
    // Find one user with the id in req.params.id and return them to the user with res.json
    db.user
      .findOne({
        where: {
          id: req.params.id
        }
      })
      .then(function(dbuser) {
        res.json(dbuser);
      });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.json(dbExample);
    });
  });
};
