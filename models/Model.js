// This will always require mongoose to connect to db/coneection
const mongoose = require("../db/connection");
// Creates the schema, what is it that will be needed/required
const controllerSchema = new mongoose.Schema({
    title: {
        //uses string class thus capital S.
        type: String,
        required: true
    },
    url: { 
        type: String,
        required: true
    },
    description: String,
    date: {
        type: String,
        required: true
    },
    comments: [String]
})
//constructs the model
const Controller = mongoose.model("controller", controllerSchema);
//exports the model
module.exports = Controller;