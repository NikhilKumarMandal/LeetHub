import { Request } from "express";

type Role = "USER" | "ADMIN";

export interface UserData {
  name: string;
  email: string;
  avatar?: string;
  password: string;
  role?: Role;
}

export type AuthCookie = {
  accessToken: string;
  refreshToken: string;
};

export interface IRefreshTokenPayload {
  id: string;
}

export interface AuthRequest extends Request {
  auth: {
    sub: string;
    role: string;
    id?: string;
    name: string;
    email: string;
  };
  files?: {
    [fieldname: string]: Express.Multer.File[];
  };
}

export interface ProblemData {
  title: string;
  description: string;
  difficulty: "EASY" | "MEDIUM" | "HARD";
  topic: string[];
  userId: string;
  examples: any;
  constraints: string;
  hints?: string;
  editorial?: string;
  codeSnippets: any;
  referenceSolutions: any;
}

export const Roles = {
  USER: "USER",
  ADMIN: "ADMIN",
  SUPERADMIN: "SUPERADMIN",
} as const;

export interface Submission {
  userId: string;
  problemId: string;
  sourceCode: string;
  language: string;
  stdin: string;
  stdout: string;
  stderr?: string | null;
  compileOutput?: string | null;
  status: string;
  memory?: string | null;
  time?: string | null;
}

export interface TestCaseResult {
  submissionId: string | number | undefined;
  testCase: string;
  passed: boolean;
  stdout: string;
  expected: string;
  stderr?: string;
  compileOutput?: string;
  status: string;
  memory?: number | string;
  time?: number | string;
}

export interface DiscussionData {
  content: string;
  userId: string;
  problemId: string;
  parentId?: string | null;
}

export interface ProblemQueryParams {
  title?: string;
  problemNumber?: number;
  topic?: string[];
}
