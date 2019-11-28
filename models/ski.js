const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const skiSchema = new Schema({
  brand: { type: String, required: true },
  model: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  snow_recommendation: { type: String, required: true },
  turns_recommendation: { type: String, required: true },
  pace_recommendation: { type: String, required: true },
  gender: { type: String, required: true },
  description: { type: String, required: true },
  width: { type: Number, required: true },
  length: { type: Number, required: true },
  radius: { type: Number, required: true },
  tip: { type: Number, required: true },
  tail: { type: Number, required: true }
});

const Ski = mongoose.model("Ski", skiSchema);

module.exports = Ski;
