const Employee = require("../models/employeeModel");
const asyncHandler = require("express-async-handler");

const getEmployee = asyncHandler(async (req, res) => {
  const coach = await Employee.find({ req });
  res.set("Access-Control-Allow-Origin", "*");

  res.status(200).json(coach);
});

const getOneEmployee = asyncHandler(async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");

  const coach = await Employee.findById(req.params.id);
  if (!coach) {
    res.status(400);
    throw new Error("Coach not found ");
  }

  res.status(200).json(coach);
});
const createEmployee = asyncHandler(async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");

  let data = req.body;
  const employee = await Employee.create(data);
  res.status(200).json(employee);
});

const updateEmployee = asyncHandler(async (req, res) => {
  const employee = await Employee.findById(req.params.id);
  res.set("Access-Control-Allow-Origin", "*");
  if (!employee) {
    res.status(400);
    throw new Error("Employee not found ");
  }

  const updated = await Employee.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updated);
});

const deleteEmployee = asyncHandler(async (req, res) => {
  const employee = await Employee.findById(req.params.id);
  res.set("Access-Control-Allow-Origin", "*");
  if (!employee) {
    res.status(400);
    throw new Error("employee not found ");
  }

  employee.remove();
  res.status(200).json({ id: req.params.id });
});
module.exports = {
  getEmployee,
  getOneEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee,
};
