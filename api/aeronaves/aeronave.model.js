const mongoose = require("mongoose");

const aeronaveSchema = new mongoose.Schema({
  manufacturer: {
    type: String,
    require: true,
    trim: true,
  },
  model: {
    type: String,
    require: true,
    trim: true,
  },
  year: {
    type: Number,
    require: true,
  },
  permitAero: {
    type: String,
    require: true,
  },
  acronym: {
    type: String,
    require: true,
  },
  autonomy: {
    type: Number,
    require: true,
  },
  numberPassengers: {
    type: Number,
    require: true,
  },
});

const Aeronave = mongoose.model("Aeronave", aeronaveSchema);

module.exports = Aeronave;
