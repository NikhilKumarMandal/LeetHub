import { checkSchema } from "express-validator";

export default checkSchema({
  name: {
    errorMessage: "Name is required!",
    notEmpty: true,
    trim: true,
  },
  description: {
    trim: true,
    errorMessage: "Description is required!",
    notEmpty: true,
  },
  summary: {
    in: ["body"],
    isArray: {
      errorMessage: "Summary must be an array of strings",
    },
    optional: true,
  },
});
