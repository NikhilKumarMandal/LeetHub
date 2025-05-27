import { checkSchema } from "express-validator";

export default checkSchema({
  content: {
    in: ["body"],
    errorMessage: "content is requried!",
    notEmpty: true,
    trim: true,
  },
  problemId: {
    in: ["body"],
    trim: true,
    errorMessage: "somthing wrong with with problem ids",
    notEmpty: true,
  },
  parentId: {
    in: ["body"],
    trim: true,
    optional: true,
  },
});
