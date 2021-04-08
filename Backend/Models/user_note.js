const mongoose = require("mongoose")

const Schema  = mongoose.Schema
const noteSchema = new Schema({
    title:{type:String,required:true},
    content:{type:String,required:true}
})

const note = mongoose.model("Note",noteSchema);

module.exports = note;