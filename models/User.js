//brings in database and assigns bcrypt
var mongoose = require("../db/userConnection");
var bcrypt = require("bcrypt-nodejs");
//sets up schema
var User = mongoose.Schema({
    local : {
        userName    : String,
        password    : String
    }
});
//takes the initial password in the sign up and hashing it to database
User.methods.encrypt = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
//can compare input password with password saved
User.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};
//exports user to other files when called.
module.exports = mongoose.model("User", User);