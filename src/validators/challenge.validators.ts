import { checkSchema } from "express-validator";

export default checkSchema({
  name: {
    errorMessage: "Name is requried!",
    notEmpty: true,
    trim: true,
  },
  totalDays: {
    errorMessage: "TotalDays is required!",
    notEmpty: true,
    trim: true,
  },
  description: {
    trim: true,
    notEmpty: true,
    errorMessage: "description is requried!",
  },
});
