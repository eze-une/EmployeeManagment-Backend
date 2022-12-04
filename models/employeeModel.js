const mongoose = require("mongoose");
const { Schema, model } = mongoose;

// mongoose.Schema.Types.String.checkRequired(v => v != null);
const EmployeeSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      validate: mongoose.Schema.Types.String.checkRequired(v => v != null)

    },
    // email: {
    //   type: String,
    //   required: true,
    // },
    // password: {
    //   type: String,
    //   required: true,
    // },
    // Dob: {
    //   type: Date,
    //   required: true,
    // },
    // Gender: {
    //   type: String,
    //   enum: ["male", "female"],
    //   required: true,
    // },
    // Salary: {
    //   type: String,
    //   required: true,
    // },
  },
  // {
  //   timestamps: true,
  // }
);

EmployeeSchema.options.toJSON = {
  transform: function (doc, ret, options) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
    return ret;
  },
};

module.exports = mongoose.model("Employee", EmployeeSchema);
