import { checkSchema } from "express-validator";

export default checkSchema(
  {
    q: {
      optional: true,
      trim: true,
      customSanitizer: {
        options: (value: unknown) => {
          return value ? String(value) : "";
        },
      },
    },
    topic: {
      customSanitizer: {
        options: (value: unknown) => {
          if (!value) return undefined;
          if (Array.isArray(value)) return value;
          return [value];
        },
      },
    },
    difficulty: {
      custom: {
        options: (value) => {
          const validDifficulties = ["EASY", "MEDIUM", "HARD"];
          return !value || validDifficulties.includes(value);
        },
      },
    },
    page: {
      customSanitizer: {
        options: (value) => {
          const parsedValue = Number(value);
          return Number.isNaN(parsedValue) ? 1 : parsedValue;
        },
      },
    },
    limit: {
      customSanitizer: {
        options: (value) => {
          const parsedValue = Number(value);
          return Number.isNaN(parsedValue) ? 10 : parsedValue;
        },
      },
    },
  },
  ["query"]
);
