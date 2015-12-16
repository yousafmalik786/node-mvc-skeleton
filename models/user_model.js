// models/user_model.js
/*
var userModel = function (){};
  userModel.prototype.getUser = function(connection){
        connection.open();
  };
module.exports = new userModel();*/

var userModel = module.exports = function(connection){
}
userModel.prototype.getUser = function(connection){
    console.log(connection);
}