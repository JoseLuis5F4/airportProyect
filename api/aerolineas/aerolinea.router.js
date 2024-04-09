const express = require("express");

const aerolineasRouter = express.Router();

const {
  create,
  getOne,
  getAll,
  getOneByName,
  updateOne,
  deleteOne,
} = require("./aerolinea.controller");

const { isAuth } = require("../middleware/auth.middleware");

aerolineasRouter.post("/", create);
aerolineasRouter.get("/", getAll);
aerolineasRouter.get("/:id", getOne);
aerolineasRouter.get("/name/:name", getOneByName);
aerolineasRouter.patch("/:id", [isAuth], updateOne);
aerolineasRouter.delete("/:id", [isAuth], deleteOne);

module.exports = aerolineasRouter;
