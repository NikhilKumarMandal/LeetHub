Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip,
} = require("./runtime/index-browser.js");

const Prisma = {};

exports.Prisma = Prisma;
exports.$Enums = {};

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a",
};

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
};
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
};
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
};
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
};
Prisma.Decimal = Decimal;

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
};
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
};
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
};
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
};
Prisma.validator = Public.validator;

/**
 * Extensions
 */
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
};
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
};

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull;
Prisma.JsonNull = objectEnumValues.instances.JsonNull;
Prisma.AnyNull = objectEnumValues.instances.AnyNull;

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull,
};

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: "ReadUncommitted",
  ReadCommitted: "ReadCommitted",
  RepeatableRead: "RepeatableRead",
  Serializable: "Serializable",
});

exports.Prisma.UserScalarFieldEnum = {
  id: "id",
  name: "name",
  email: "email",
  avatar: "avatar",
  role: "role",
  password: "password",
  refreshToken: "refreshToken",
  createdAt: "createdAt",
  updatedAt: "updatedAt",
  dailyQuestionCount: "dailyQuestionCount",
  lastQuestionDate: "lastQuestionDate",
};

exports.Prisma.InterviewScalarFieldEnum = {
  id: "id",
  jobPosition: "jobPosition",
  jobDescription: "jobDescription",
  duration: "duration",
  type: "type",
  questionList: "questionList",
  createdAt: "createdAt",
  userId: "userId",
};

exports.Prisma.ProblemScalarFieldEnum = {
  id: "id",
  title: "title",
  problemNumber: "problemNumber",
  description: "description",
  difficulty: "difficulty",
  topic: "topic",
  companyName: "companyName",
  userId: "userId",
  ytLink: "ytLink",
  examples: "examples",
  constraints: "constraints",
  hints: "hints",
  editorial: "editorial",
  starterFunction: "starterFunction",
  codeSnippets: "codeSnippets",
  referenceSolutions: "referenceSolutions",
  isPremium: "isPremium",
  image: "image",
  executionWrappers: "executionWrappers",
  createdAt: "createdAt",
  updatedAt: "updatedAt",
};

exports.Prisma.ProblemTestCaseScalarFieldEnum = {
  id: "id",
  input: "input",
  output: "output",
  isPublic: "isPublic",
  problemId: "problemId",
  createdAt: "createdAt",
  updatedAt: "updatedAt",
};

exports.Prisma.SubmissionScalarFieldEnum = {
  id: "id",
  userId: "userId",
  problemId: "problemId",
  sourceCode: "sourceCode",
  language: "language",
  stdin: "stdin",
  stdout: "stdout",
  stderr: "stderr",
  compileOutput: "compileOutput",
  status: "status",
  memory: "memory",
  time: "time",
  createdAt: "createdAt",
  updatedAt: "updatedAt",
};

exports.Prisma.TestCaseScalarFieldEnum = {
  id: "id",
  submissionId: "submissionId",
  testCase: "testCase",
  passed: "passed",
  stdout: "stdout",
  expected: "expected",
  stderr: "stderr",
  compileOutput: "compileOutput",
  status: "status",
  memory: "memory",
  time: "time",
  createdAt: "createdAt",
  updatedAt: "updatedAt",
};

exports.Prisma.ProblemSolvedScalarFieldEnum = {
  id: "id",
  userId: "userId",
  problemId: "problemId",
  createdAt: "createdAt",
  updatedAt: "updatedAt",
};

exports.Prisma.DiscussionScalarFieldEnum = {
  id: "id",
  userId: "userId",
  problemId: "problemId",
  content: "content",
  createdAt: "createdAt",
  updatedAt: "updatedAt",
  parentId: "parentId",
};

exports.Prisma.ProblemVoteScalarFieldEnum = {
  id: "id",
  userId: "userId",
  problemId: "problemId",
  type: "type",
  createdAt: "createdAt",
};

exports.Prisma.PlaylistScalarFieldEnum = {
  id: "id",
  name: "name",
  description: "description",
  userId: "userId",
  summary: "summary",
  createdAt: "createdAt",
  updatedAt: "updatedAt",
};

exports.Prisma.ProblemInPlaylistScalarFieldEnum = {
  id: "id",
  playlistId: "playlistId",
  problemId: "problemId",
  createdAt: "createdAt",
  updatedAt: "updatedAt",
};

exports.Prisma.SubscriptionScalarFieldEnum = {
  id: "id",
  userId: "userId",
  startDate: "startDate",
  endDate: "endDate",
  isActive: "isActive",
};

exports.Prisma.ChallengeScalarFieldEnum = {
  id: "id",
  name: "name",
  description: "description",
  totalDays: "totalDays",
  createdAt: "createdAt",
};

exports.Prisma.ChallengeProblemScalarFieldEnum = {
  id: "id",
  challengeId: "challengeId",
  problemId: "problemId",
  day: "day",
};

exports.Prisma.UserChallengeScalarFieldEnum = {
  id: "id",
  userId: "userId",
  challengeId: "challengeId",
  startedAt: "startedAt",
  completedDays: "completedDays",
  completed: "completed",
};

exports.Prisma.BadgeScalarFieldEnum = {
  id: "id",
  userId: "userId",
  name: "name",
  iconUrl: "iconUrl",
  createdAt: "createdAt",
};

exports.Prisma.PlaylistProblemSolvedScalarFieldEnum = {
  id: "id",
  userId: "userId",
  playlistId: "playlistId",
  problemId: "problemId",
  solvedAt: "solvedAt",
  createdAt: "createdAt",
  updatedAt: "updatedAt",
};

exports.Prisma.ReviewScalarFieldEnum = {
  id: "id",
  userId: "userId",
  problemId: "problemId",
  language: "language",
  userCode: "userCode",
  isCorrect: "isCorrect",
  improvements: "improvements",
  optimizedCode: "optimizedCode",
  createdAt: "createdAt",
};

exports.Prisma.SortOrder = {
  asc: "asc",
  desc: "desc",
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
};

exports.Prisma.JsonNullValueInput = {
  JsonNull: Prisma.JsonNull,
};

exports.Prisma.QueryMode = {
  default: "default",
  insensitive: "insensitive",
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull,
};

exports.Prisma.NullsOrder = {
  first: "first",
  last: "last",
};
exports.UserRole = exports.$Enums.UserRole = {
  ADMIN: "ADMIN",
  USER: "USER",
};

exports.Difficulty = exports.$Enums.Difficulty = {
  EASY: "EASY",
  MEDIUM: "MEDIUM",
  HARD: "HARD",
};

exports.VoteType = exports.$Enums.VoteType = {
  UPVOTE: "UPVOTE",
  DOWNVOTE: "DOWNVOTE",
};

exports.Prisma.ModelName = {
  User: "User",
  Interview: "Interview",
  Problem: "Problem",
  ProblemTestCase: "ProblemTestCase",
  Submission: "Submission",
  TestCase: "TestCase",
  ProblemSolved: "ProblemSolved",
  Discussion: "Discussion",
  ProblemVote: "ProblemVote",
  Playlist: "Playlist",
  ProblemInPlaylist: "ProblemInPlaylist",
  Subscription: "Subscription",
  Challenge: "Challenge",
  ChallengeProblem: "ChallengeProblem",
  UserChallenge: "UserChallenge",
  Badge: "Badge",
  PlaylistProblemSolved: "PlaylistProblemSolved",
  Review: "Review",
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message;
        const runtime = getRuntime();
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message =
            "PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `" +
            runtime.prettyName +
            "`).";
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`;

        throw new Error(message);
      },
    });
  }
}

exports.PrismaClient = PrismaClient;

Object.assign(exports, Prisma);
