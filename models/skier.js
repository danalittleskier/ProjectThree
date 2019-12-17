const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const skierSchema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  gender: { type: String, required: true },
  level: { type: String, required: true },
  // snow_preference: { type: String},
  resort_preference: { type: String },
  username: { type: String, required: true },
  ski: {
    type: Schema.Types.ObjectId,
    ref: "Ski"
  }
});

const Skier = mongoose.model("Skier", skierSchema);

module.exports = Skier;