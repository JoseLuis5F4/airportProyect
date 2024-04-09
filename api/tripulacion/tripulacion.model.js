const mongoose = require("mongoose");

const tripulacionSchema = new mongoose.Schema({
  pilotName: { type: String, required: true, trim: true, unique: true },
  copilotName: { type: String, required: true, trim: true, unique: true },
  cabinCrew: { type: Number },
  flightEngineer: { type: Boolean },
});

const Tripulacion = mongoose.model("Tripulacion", tripulacionSchema);

module.exports = Tripulacion;
