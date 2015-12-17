// contollers/userController.js
var userModel = require('../models/user_model.js');
var user = function () {};
user.prototype.login = function(req, res){
    var user =  userModel.getUser();
    console.log(user);
    res.render('index.html');
};
user.prototype.logout = function (req,res) {

};
module.exports = new user();
