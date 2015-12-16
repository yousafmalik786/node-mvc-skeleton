
// app/routes.js
var userController = require('../controllers/user.js');
module.exports = function(app) {
    app.get('/', function(req, res) {
        userController.login(req, res);
    });

    // =====================================
    // LOGOUT ==============================
    // =====================================
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });
};

