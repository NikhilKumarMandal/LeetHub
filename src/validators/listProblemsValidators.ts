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
      optional: true,
      customSanitizer: {
        options: (value) => value.toUpperCase(),
      },
      custom: {
        options: (value) => {
          const validDifficulties = ["EASY", "MEDIUM", "HARD"];
          return !value || validDifficulties.includes(value);
        },
      },
    },
    status: {
      optional: true,
      customSanitizer: {
        options: (value) => value.toLowerCase(),
      },
      custom: {
        options: (value) => {
          const allowed = ["solved", "unsolved"];
          return allowed.includes(value);
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
