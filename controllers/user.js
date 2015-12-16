// contollers/userController.js
var postModel = require('../models/user_model.js');
var user = function () {};
user.prototype.login = function(req, res){
    postModel.getUser();
    res.render('index.html'); // load the index.ejs file
};
user.prototype.logout = function (req,res) {

};
module.exports = new user();
