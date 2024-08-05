const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const urlSchema = new Schema({
  email: { type: String },
  longUrl: { type: String, required: true }, 
  shortUrl: { type: String },
});

const urlSubmitModel = mongoose.model("UrlSubmit", urlSchema);

module.exports = urlSubmitModel;
