const mongoose = require("mongoose");

const aerolineaSchema = new mongoose.Schema({
  airlineName: { type: String, required: true, trim: true, unique: true },
  country: { type: String, required: true, trim: true },
  aircraftFleet: { type: Number },
  operationalAircraft: { type: Number },
  inoperativeAircraft: { type: Number },
  tripulacion: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tripulacion",
    },
  ],
  aeronaves: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Aeronave", //TO DO MODELO AERONAVES
    },
  ],
});

const Aerolinea = mongoose.model("Aerolinea", aerolineaSchema);

module.exports = Aerolinea;
