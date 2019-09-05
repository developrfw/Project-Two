var db = require("../models");
module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("login");
  });

  // Load example page and pass in an example by id
  app.get("/index", function(req, res) {
    console.log(req.query);
    db.user.findByPk(req.query.id).then(function(user) {
      console.log(user.username);
      res.render("index", {
        user
      });
    });
   
  });

  // Rendering users.handlebars
  app.get("/users", function(req, res) {
    res.render("users");
  });
  
  
  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
