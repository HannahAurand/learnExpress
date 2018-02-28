//assigns mongoose to userCOnnection
const userConnection = require('mongoose');
//makes passport database connection
userConnection.connect('mongodb://localhost/passport');
//brings in the promise function of mongoose
userConnection.Promise = Promise;
//exports userConnection to other files when called.
module.exports = userConnection;