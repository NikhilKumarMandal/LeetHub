import { checkSchema } from "express-validator";

export default checkSchema({
  title: {
    in: ["body"],
    trim: true,
    notEmpty: {
      errorMessage: "Title is required!",
    },
  },
  description: {
    in: ["body"],
    trim: true,
    notEmpty: {
      errorMessage: "Description is required!",
    },
  },
  difficulty: {
    in: ["body"],
    notEmpty: {
      errorMessage: "Difficulty is required!",
    },
    isIn: {
      options: [["EASY", "MEDIUM", "HARD"]],
      errorMessage: "Difficulty must be one of EASY, MEDIUM, HARD",
    },
  },
  topic: {
    in: ["body"],
    isArray: {
      errorMessage: "Topic must be an array of strings",
    },
    notEmpty: {
      errorMessage: "Topic is required",
    },
  },
  companyName: {
    in: ["body"],
    isArray: {
      errorMessage: "CompanyName must be an array of strings",
    },
    optional: true,
  },
  examples: {
    in: ["body"],
    notEmpty: {
      errorMessage: "Examples are required",
    },
  },
  constraints: {
    in: ["body"],
    trim: true,
    notEmpty: {
      errorMessage: "Constraints are required!",
    },
  },
  hints: {
    in: ["body"],
    optional: true,
    isString: {
      errorMessage: "Hints must be a string",
    },
  },
  editorial: {
    in: ["body"],
    optional: true,
    isString: {
      errorMessage: "Editorial must be a string",
    },
  },
  codeSnippets: {
    in: ["body"],
    notEmpty: {
      errorMessage: "Code snippets are required",
    },
  },
  referenceSolutions: {
    in: ["body"],
    optional: true,
    isObject: {
      errorMessage: "Reference solutions must be an object",
    },
  },
  testcases: {
    in: ["body"],
    isArray: {
      errorMessage: "Testcases must be an array",
    },
    notEmpty: {
      errorMessage: "At least one testcase is required",
    },
  },
  "testcases.*.input": {
    in: ["body"],
    optional: true,
    isString: {
      errorMessage: "Each testcase input must be a string or null",
    },
  },
  "testcases.*.output": {
    in: ["body"],
    notEmpty: {
      errorMessage: "Each testcase must have an output",
    },
    isString: {
      errorMessage: "Each testcase output must be a string",
    },
  },
  "testcases.*.isPublic": {
    in: ["body"],
    optional: true,
    isBoolean: {
      errorMessage: "isPublic must be a boolean",
    },
  },
});
