// Global
const express = require("express");
const user = require("../models/user.js");
const router = express.Router();
// Default the route to /users (Main Home Page)
router.get('/',function(req,res){
    res.redirect("/users");
});
// Get users
router.get('/users',function(req,res){
    user.select(function(data){
        var hbsObject = { users: data };
        res.render('index',hbsObject);
    });
});
// Create user
router.post("/users/create",function(req,res){
    user.create(["username"],[req.body.username],function(result){
        res.redirect("/users");
    });
});
// Update user
router.put('/users/update/:id', function(req,res){
    var condition = `id = ${req.params.id}`;
    user.update({ 'devoured': req.body.devoured },condition,function(data){
        res.redirect('/users');
    });
});
// Export Router
module.exports = router;