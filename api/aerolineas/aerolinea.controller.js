const Aerolinea = require("./aerolinea.model");

// FUNCIONES CRUD

const create = async (req, res, next) => {
  try {
    const aerolinea = await Aerolinea.create(req.body);
    res.json({
      status: 201,
      msg: "creado",
      data: aerolinea,
    });
  } catch (error) {
    next(error);
  }
};

const getOne = async (req, res, next) => {
  try {
    const id = req.params.id;
    const aerolinea = await Aerolinea.findById(id);
    res.json({
      status: 200,
      msg: "ok",
      data: aerolinea,
    });
  } catch (error) {
    next(error);
  }
};
const getOneByName = async (req, res, next) => {
  try {
    const name = req.params.name;
    const aerolinea = await Aerolinea.findOne({ name: name });
    res.json({
      status: 200,
      msg: "ok",
      data: aerolinea,
    });
  } catch (error) {
    next(error);
  }
};
const getAll = async (req, res, next) => {
  try {
    const aerolinea = await Aerolinea.find();
    res.json({
      status: 200,
      msg: "ok",
      data: aerolinea,
    });
  } catch (error) {
    next(error);
  }
};

const updateOne = async (req, res, next) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const aerolinea = await Aerolinea.findByIdAndUpdate(id, body, {
      new: true,
    });
    res.json({
      status: 200,
      msg: "ok",
      data: aerolinea,
    });
  } catch (error) {
    next(error);
  }
};

const deleteOne = async (req, res, next) => {
  try {
    const id = req.params.id;
    const aerolinea = await Aerolinea.findByIdAndDelete(id);
    res.json({
      status: 200,
      msg: "ok",
      data: aerolinea,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { create, getOne, getAll, getOneByName, updateOne, deleteOne };
