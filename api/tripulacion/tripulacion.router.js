const express = require("express");

const tripulacionRouter = express.Router();

const {
  create,
  getOne,
  getAll,
  getOneByName,
  updateOne,
  deleteOne,
} = require("./tripulacion.controller");

const { isAuth } = require("../middleware/auth.middleware");

tripulacionRouter.post("/", create);
tripulacionRouter.get("/", getAll);
tripulacionRouter.get("/:id", getOne);
tripulacionRouter.get("/name/:name", getOneByName);
tripulacionRouter.patch("/:id", [isAuth], updateOne);
tripulacionRouter.delete("/:id", [isAuth], deleteOne);

module.exports = tripulacionRouter;
