const Tripulacion = require("./tripulacion.model");

// FUNCIONES CRUD

const create = async (req, res, next) => {
  try {
    const tripulacion = await Tripulacion.create(req.body);
    res.json({
      status: 201,
      msg: "creado",
      data: tripulacion,
    });
  } catch (error) {
    next(error);
  }
};

const getOne = async (req, res, next) => {
  try {
    const id = req.params.id;
    const tripulacion = await Tripulacion.findById(id);
    res.json({
      status: 200,
      msg: "ok",
      data: tripulacion,
    });
  } catch (error) {
    next(error);
  }
};
const getOneByName = async (req, res, next) => {
  try {
    const name = req.params.name;
    const tripulacion = await Tripulacion.findOne({ name: name });
    res.json({
      status: 200,
      msg: "ok",
      data: tripulacion,
    });
  } catch (error) {
    next(error);
  }
};
const getAll = async (req, res, next) => {
  try {
    const tripulacion = await Tripulacion.find();
    res.json({
      status: 200,
      msg: "ok",
      data: tripulacion,
    });
  } catch (error) {
    next(error);
  }
};

const updateOne = async (req, res, next) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const tripulacion = await Tripulacion.findByIdAndUpdate(id, body, {
      new: true,
    });
    res.json({
      status: 200,
      msg: "ok",
      data: tripulacion,
    });
  } catch (error) {
    next(error);
  }
};

const deleteOne = async (req, res, next) => {
  try {
    const id = req.params.id;
    const tripulacion = await Tripulacion.findByIdAndDelete(id);
    res.json({
      status: 200,
      msg: "ok",
      data: tripulacion,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { create, getOne, getAll, getOneByName, updateOne, deleteOne };
