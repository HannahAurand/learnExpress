//Brings in the Model.js and data
var Controller = require("../models/Model");
const data = require("./seeds.json");
var User = require("../models/User");
//This clears the collection and then adds the data to the database
Controller.remove({}).then(() =>{
    return Controller.collection.insert(data);
}).then(() => {
    process.exit();
});

User.remove({}).then(() => {
    process.exit();
});