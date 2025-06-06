import { checkSchema } from "express-validator";

export default checkSchema({
  title: {
    in: ["body"],
    trim: true,
    notEmpty: {
      errorMessage: "Title is required!",
    },
  },
  ytLink: {
    in: ["body"],
    optional: true,
    isString: {
      errorMessage: "YouTube link must be a string",
    },
    custom: {
      options: (value) => {
        if (!value) return true;
        const videoIdMatch = value.match(
          /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)?([a-zA-Z0-9_-]{11})/
        );

        if (!videoIdMatch || !videoIdMatch[1]) {
          throw new Error("Invalid YouTube link or video ID");
        }

        const videoId = videoIdMatch[1];
        if (videoId.length !== 11) {
          throw new Error("Invalid YouTube video ID length");
        }

        return true;
      },
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
  "testcases.*.isPublic": {
    in: ["body"],
    optional: true,
    isBoolean: {
      errorMessage: "isPublic must be a boolean",
    },
  },
});
