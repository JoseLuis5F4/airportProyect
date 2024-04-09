const Aeronave = require("./aeronave.model");

// FUNCIONES CRUD

const create = async (req, res, next) => {
  try {
    const aeronave = await Aeronave.create(req.body);
    res.json({
      status: 201,
      msg: "creado",
      data: aeronave,
    });
  } catch (error) {
    next(error);
  }
};

const getOne = async (req, res, next) => {
  try {
    const id = req.params.id;
    const aeronave = await Aeronave.findById(id);
    res.json({
      status: 200,
      msg: "ok",
      data: aeronave,
    });
  } catch (error) {
    next(error);
  }
};
const getOneByName = async (req, res, next) => {
  try {
    const name = req.params.name;
    const aeronave = await Aeronave.findOne({ name: name });
    res.json({
      status: 200,
      msg: "ok",
      data: aeronave,
    });
  } catch (error) {
    next(error);
  }
};
const getAll = async (req, res, next) => {
  try {
    const aeronave = await Aeronave.find();
    res.json({
      status: 200,
      msg: "ok",
      data: aeronave,
    });
  } catch (error) {
    next(error);
  }
};

const updateOne = async (req, res, next) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const aeronave = await Aeronave.findByIdAndUpdate(id, body, {
      new: true,
    });
    res.json({
      status: 200,
      msg: "ok",
      data: aeronave,
    });
  } catch (error) {
    next(error);
  }
};

const deleteOne = async (req, res, next) => {
  try {
    const id = req.params.id;
    const aeronave = await Aeronave.findByIdAndDelete(id);
    res.json({
      status: 200,
      msg: "ok",
      data: aeronave,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { create, getOne, getAll, getOneByName, updateOne, deleteOne };
