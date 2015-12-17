// models/user_model.js
// note : this way supported in var modelname = require('path/to/model');
var userModel = function (){};
userModel.prototype.getUser = function(){
   var db = global.connection;
   db.query('select * from AUTHENTICOM limit 10', function(err, rows, fields) {
        if (err) throw err;

        console.log('result: ', rows);
    });

};
module.exports = new userModel();

//Note : this way support like require('path/to/model') and then model object is available
/*
userModel = {
    getUser : function(){
        return "abc";
    }
}
*/
