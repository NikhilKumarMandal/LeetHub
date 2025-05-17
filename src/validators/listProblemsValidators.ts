import { checkSchema } from "express-validator";

export default checkSchema(
  {
    title: {
      trim: true,
      customSanitizer: {
        options: (value: unknown) => {
          return value ? value : "";
        },
      },
    },
    problemNumber: {
      customSanitizer: {
        options: (value: unknown) => {
          const parsedValue = Number(value);
          return value && !Number.isNaN(parsedValue) ? parsedValue : undefined;
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
