const express = require("express");

const aeronaveRouter = express.Router();

const {
  create,
  getOne,
  getAll,
  getOneByName,
  updateOne,
  deleteOne,
} = require("./aeronave.controller");

const { isAuth } = require("../middleware/auth.middleware");

aeronaveRouter.post("/", create);
aeronaveRouter.get("/", getAll);
aeronaveRouter.get("/:id", getOne);
aeronaveRouter.get("/name/:name", getOneByName);
aeronaveRouter.patch("/:id", [isAuth], updateOne);
aeronaveRouter.delete("/:id", [isAuth], deleteOne);

module.exports = aeronaveRouter;
