import { checkSchema } from "express-validator";

export default checkSchema({
  email: {
    errorMessage: "Email is requried!",
    notEmpty: true,
    trim: true,
  },
  name: {
    trim: true,
    errorMessage: "Name is requried!",
    notEmpty: true,
  },
  password: {
    trim: true,
    notEmpty: true,
    isLength: {
      options: {
        min: 8,
      },
      errorMessage: "Password should be at least 8 chars",
    },
  },
});