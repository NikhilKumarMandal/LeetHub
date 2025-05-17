/**
 * Client
 **/

import * as runtime from "./runtime/library.js";
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model User
 *
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>;
/**
 * Model Problem
 *
 */
export type Problem = $Result.DefaultSelection<Prisma.$ProblemPayload>;
/**
 * Model ProblemTestCase
 *
 */
export type ProblemTestCase =
  $Result.DefaultSelection<Prisma.$ProblemTestCasePayload>;
/**
 * Model Submission
 *
 */
export type Submission = $Result.DefaultSelection<Prisma.$SubmissionPayload>;
/**
 * Model TestCase
 *
 */
export type TestCase = $Result.DefaultSelection<Prisma.$TestCasePayload>;
/**
 * Model ProblemSolved
 *
 */
export type ProblemSolved =
  $Result.DefaultSelection<Prisma.$ProblemSolvedPayload>;
/**
 * Model Discussion
 *
 */
export type Discussion = $Result.DefaultSelection<Prisma.$DiscussionPayload>;
/**
 * Model ProblemVote
 *
 */
export type ProblemVote = $Result.DefaultSelection<Prisma.$ProblemVotePayload>;
/**
 * Model Playlist
 *
 */
export type Playlist = $Result.DefaultSelection<Prisma.$PlaylistPayload>;
/**
 * Model ProblemInPlaylist
 *
 */
export type ProblemInPlaylist =
  $Result.DefaultSelection<Prisma.$ProblemInPlaylistPayload>;
/**
 * Model Subscription
 *
 */
export type Subscription =
  $Result.DefaultSelection<Prisma.$SubscriptionPayload>;

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
    ADMIN: "ADMIN";
    USER: "USER";
  };

  export type UserRole = (typeof UserRole)[keyof typeof UserRole];

  export const Difficulty: {
    EASY: "EASY";
    MEDIUM: "MEDIUM";
    HARD: "HARD";
  };

  export type Difficulty = (typeof Difficulty)[keyof typeof Difficulty];

  export const VoteType: {
    UPVOTE: "UPVOTE";
    DOWNVOTE: "DOWNVOTE";
  };

  export type VoteType = (typeof VoteType)[keyof typeof VoteType];
}

export type UserRole = $Enums.UserRole;

export const UserRole: typeof $Enums.UserRole;

export type Difficulty = $Enums.Difficulty;

export const Difficulty: typeof $Enums.Difficulty;

export type VoteType = $Enums.VoteType;

export const VoteType: typeof $Enums.VoteType;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = "log" extends keyof ClientOptions
    ? ClientOptions["log"] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<ClientOptions["log"]>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>["other"] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(
    optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>
  );
  $on<V extends U>(
    eventType: V,
    callback: (
      event: V extends "query" ? Prisma.QueryEvent : Prisma.LogEvent
    ) => void
  ): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel }
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (
      prisma: Omit<PrismaClient, runtime.ITXClientDenyList>
    ) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    }
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<
    "extends",
    Prisma.TypeMapCb<ClientOptions>,
    ExtArgs,
    $Utils.Call<
      Prisma.TypeMapCb<ClientOptions>,
      {
        extArgs: ExtArgs;
      }
    >
  >;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.problem`: Exposes CRUD operations for the **Problem** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Problems
   * const problems = await prisma.problem.findMany()
   * ```
   */
  get problem(): Prisma.ProblemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.problemTestCase`: Exposes CRUD operations for the **ProblemTestCase** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more ProblemTestCases
   * const problemTestCases = await prisma.problemTestCase.findMany()
   * ```
   */
  get problemTestCase(): Prisma.ProblemTestCaseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.submission`: Exposes CRUD operations for the **Submission** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Submissions
   * const submissions = await prisma.submission.findMany()
   * ```
   */
  get submission(): Prisma.SubmissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.testCase`: Exposes CRUD operations for the **TestCase** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more TestCases
   * const testCases = await prisma.testCase.findMany()
   * ```
   */
  get testCase(): Prisma.TestCaseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.problemSolved`: Exposes CRUD operations for the **ProblemSolved** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more ProblemSolveds
   * const problemSolveds = await prisma.problemSolved.findMany()
   * ```
   */
  get problemSolved(): Prisma.ProblemSolvedDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.discussion`: Exposes CRUD operations for the **Discussion** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Discussions
   * const discussions = await prisma.discussion.findMany()
   * ```
   */
  get discussion(): Prisma.DiscussionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.problemVote`: Exposes CRUD operations for the **ProblemVote** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more ProblemVotes
   * const problemVotes = await prisma.problemVote.findMany()
   * ```
   */
  get problemVote(): Prisma.ProblemVoteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.playlist`: Exposes CRUD operations for the **Playlist** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Playlists
   * const playlists = await prisma.playlist.findMany()
   * ```
   */
  get playlist(): Prisma.PlaylistDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.problemInPlaylist`: Exposes CRUD operations for the **ProblemInPlaylist** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more ProblemInPlaylists
   * const problemInPlaylists = await prisma.problemInPlaylist.findMany()
   * ```
   */
  get problemInPlaylist(): Prisma.ProblemInPlaylistDelegate<
    ExtArgs,
    ClientOptions
  >;

  /**
   * `prisma.subscription`: Exposes CRUD operations for the **Subscription** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Subscriptions
   * const subscriptions = await prisma.subscription.findMany()
   * ```
   */
  get subscription(): Prisma.SubscriptionDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  export import JsonObject = runtime.JsonObject;
  export import JsonArray = runtime.JsonArray;
  export import JsonValue = runtime.JsonValue;
  export import InputJsonObject = runtime.InputJsonObject;
  export import InputJsonArray = runtime.InputJsonArray;
  export import InputJsonValue = runtime.InputJsonValue;

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  type SelectAndOmit = {
    select: any;
    omit: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> =
    T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<
    T extends (...args: any) => $Utils.JsPromise<any>,
  > = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude
    ? "Please either choose `select` or `include`."
    : T extends SelectAndOmit
      ? "Please either choose `select` or `omit`."
      : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> =
    T extends Array<any>
      ? False
      : T extends Date
        ? False
        : T extends Uint8Array
          ? False
          : T extends BigInt
            ? False
            : T extends object
              ? True
              : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<
    __Either<O, K>
  >;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = O extends unknown ? _Either<O, K, strict> : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O
    ? O[K]
    : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never;
  export type At<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
      ? 1
      : 0;

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<
    T,
    U = Omit<T, "_avg" | "_sum" | "_count" | "_min" | "_max">,
  > = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<"OR", K>, Extends<"AND", K>>,
      Extends<"NOT", K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<
            UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
          >
        : never
      : {} extends FieldPaths<T[K]>
        ? never
        : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<
    T,
    K extends Enumerable<keyof T> | keyof T,
  > = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
    ? never
    : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    User: "User";
    Problem: "Problem";
    ProblemTestCase: "ProblemTestCase";
    Submission: "Submission";
    TestCase: "TestCase";
    ProblemSolved: "ProblemSolved";
    Discussion: "Discussion";
    ProblemVote: "ProblemVote";
    Playlist: "Playlist";
    ProblemInPlaylist: "ProblemInPlaylist";
    Subscription: "Subscription";
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb<ClientOptions = {}>
    extends $Utils.Fn<
      { extArgs: $Extensions.InternalArgs },
      $Utils.Record<string, any>
    > {
    returns: Prisma.TypeMap<
      this["params"]["extArgs"],
      ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
    >;
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > = {
    globalOmitOptions: {
      omit: GlobalOmitOptions;
    };
    meta: {
      modelProps:
        | "user"
        | "problem"
        | "problemTestCase"
        | "submission"
        | "testCase"
        | "problemSolved"
        | "discussion"
        | "problemVote"
        | "playlist"
        | "problemInPlaylist"
        | "subscription";
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>;
        fields: Prisma.UserFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.UserCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
      Problem: {
        payload: Prisma.$ProblemPayload<ExtArgs>;
        fields: Prisma.ProblemFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ProblemFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ProblemFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>;
          };
          findFirst: {
            args: Prisma.ProblemFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ProblemFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>;
          };
          findMany: {
            args: Prisma.ProblemFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>[];
          };
          create: {
            args: Prisma.ProblemCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>;
          };
          createMany: {
            args: Prisma.ProblemCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.ProblemCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>[];
          };
          delete: {
            args: Prisma.ProblemDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>;
          };
          update: {
            args: Prisma.ProblemUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>;
          };
          deleteMany: {
            args: Prisma.ProblemDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.ProblemUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.ProblemUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>[];
          };
          upsert: {
            args: Prisma.ProblemUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>;
          };
          aggregate: {
            args: Prisma.ProblemAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateProblem>;
          };
          groupBy: {
            args: Prisma.ProblemGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ProblemGroupByOutputType>[];
          };
          count: {
            args: Prisma.ProblemCountArgs<ExtArgs>;
            result: $Utils.Optional<ProblemCountAggregateOutputType> | number;
          };
        };
      };
      ProblemTestCase: {
        payload: Prisma.$ProblemTestCasePayload<ExtArgs>;
        fields: Prisma.ProblemTestCaseFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ProblemTestCaseFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProblemTestCasePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ProblemTestCaseFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProblemTestCasePayload>;
          };
          findFirst: {
            args: Prisma.ProblemTestCaseFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProblemTestCasePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ProblemTestCaseFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProblemTestCasePayload>;
          };
          findMany: {
            args: Prisma.ProblemTestCaseFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProblemTestCasePayload>[];
          };
          create: {
            args: Prisma.ProblemTestCaseCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProblemTestCasePayload>;
          };
          createMany: {
            args: Prisma.ProblemTestCaseCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.ProblemTestCaseCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProblemTestCasePayload>[];
          };
          delete: {
            args: Prisma.ProblemTestCaseDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProblemTestCasePayload>;
          };
          update: {
            args: Prisma.ProblemTestCaseUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProblemTestCasePayload>;
          };
          deleteMany: {
            args: Prisma.ProblemTestCaseDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.ProblemTestCaseUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.ProblemTestCaseUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProblemTestCasePayload>[];
          };
          upsert: {
            args: Prisma.ProblemTestCaseUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProblemTestCasePayload>;
          };
          aggregate: {
            args: Prisma.ProblemTestCaseAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateProblemTestCase>;
          };
          groupBy: {
            args: Prisma.ProblemTestCaseGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ProblemTestCaseGroupByOutputType>[];
          };
          count: {
            args: Prisma.ProblemTestCaseCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<ProblemTestCaseCountAggregateOutputType>
              | number;
          };
        };
      };
      Submission: {
        payload: Prisma.$SubmissionPayload<ExtArgs>;
        fields: Prisma.SubmissionFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.SubmissionFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.SubmissionFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>;
          };
          findFirst: {
            args: Prisma.SubmissionFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.SubmissionFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>;
          };
          findMany: {
            args: Prisma.SubmissionFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>[];
          };
          create: {
            args: Prisma.SubmissionCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>;
          };
          createMany: {
            args: Prisma.SubmissionCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.SubmissionCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>[];
          };
          delete: {
            args: Prisma.SubmissionDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>;
          };
          update: {
            args: Prisma.SubmissionUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>;
          };
          deleteMany: {
            args: Prisma.SubmissionDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.SubmissionUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.SubmissionUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>[];
          };
          upsert: {
            args: Prisma.SubmissionUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>;
          };
          aggregate: {
            args: Prisma.SubmissionAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateSubmission>;
          };
          groupBy: {
            args: Prisma.SubmissionGroupByArgs<ExtArgs>;
            result: $Utils.Optional<SubmissionGroupByOutputType>[];
          };
          count: {
            args: Prisma.SubmissionCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<SubmissionCountAggregateOutputType>
              | number;
          };
        };
      };
      TestCase: {
        payload: Prisma.$TestCasePayload<ExtArgs>;
        fields: Prisma.TestCaseFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.TestCaseFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TestCasePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.TestCaseFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TestCasePayload>;
          };
          findFirst: {
            args: Prisma.TestCaseFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TestCasePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.TestCaseFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TestCasePayload>;
          };
          findMany: {
            args: Prisma.TestCaseFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TestCasePayload>[];
          };
          create: {
            args: Prisma.TestCaseCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TestCasePayload>;
          };
          createMany: {
            args: Prisma.TestCaseCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.TestCaseCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TestCasePayload>[];
          };
          delete: {
            args: Prisma.TestCaseDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TestCasePayload>;
          };
          update: {
            args: Prisma.TestCaseUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TestCasePayload>;
          };
          deleteMany: {
            args: Prisma.TestCaseDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.TestCaseUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.TestCaseUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TestCasePayload>[];
          };
          upsert: {
            args: Prisma.TestCaseUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TestCasePayload>;
          };
          aggregate: {
            args: Prisma.TestCaseAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateTestCase>;
          };
          groupBy: {
            args: Prisma.TestCaseGroupByArgs<ExtArgs>;
            result: $Utils.Optional<TestCaseGroupByOutputType>[];
          };
          count: {
            args: Prisma.TestCaseCountArgs<ExtArgs>;
            result: $Utils.Optional<TestCaseCountAggregateOutputType> | number;
          };
        };
      };
      ProblemSolved: {
        payload: Prisma.$ProblemSolvedPayload<ExtArgs>;
        fields: Prisma.ProblemSolvedFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ProblemSolvedFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProblemSolvedPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ProblemSolvedFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProblemSolvedPayload>;
          };
          findFirst: {
            args: Prisma.ProblemSolvedFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProblemSolvedPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ProblemSolvedFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProblemSolvedPayload>;
          };
          findMany: {
            args: Prisma.ProblemSolvedFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProblemSolvedPayload>[];
          };
          create: {
            args: Prisma.ProblemSolvedCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProblemSolvedPayload>;
          };
          createMany: {
            args: Prisma.ProblemSolvedCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.ProblemSolvedCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProblemSolvedPayload>[];
          };
          delete: {
            args: Prisma.ProblemSolvedDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProblemSolvedPayload>;
          };
          update: {
            args: Prisma.ProblemSolvedUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProblemSolvedPayload>;
          };
          deleteMany: {
            args: Prisma.ProblemSolvedDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.ProblemSolvedUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.ProblemSolvedUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProblemSolvedPayload>[];
          };
          upsert: {
            args: Prisma.ProblemSolvedUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProblemSolvedPayload>;
          };
          aggregate: {
            args: Prisma.ProblemSolvedAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateProblemSolved>;
          };
          groupBy: {
            args: Prisma.ProblemSolvedGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ProblemSolvedGroupByOutputType>[];
          };
          count: {
            args: Prisma.ProblemSolvedCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<ProblemSolvedCountAggregateOutputType>
              | number;
          };
        };
      };
      Discussion: {
        payload: Prisma.$DiscussionPayload<ExtArgs>;
        fields: Prisma.DiscussionFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.DiscussionFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DiscussionPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.DiscussionFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DiscussionPayload>;
          };
          findFirst: {
            args: Prisma.DiscussionFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DiscussionPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.DiscussionFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DiscussionPayload>;
          };
          findMany: {
            args: Prisma.DiscussionFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DiscussionPayload>[];
          };
          create: {
            args: Prisma.DiscussionCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DiscussionPayload>;
          };
          createMany: {
            args: Prisma.DiscussionCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.DiscussionCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DiscussionPayload>[];
          };
          delete: {
            args: Prisma.DiscussionDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DiscussionPayload>;
          };
          update: {
            args: Prisma.DiscussionUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DiscussionPayload>;
          };
          deleteMany: {
            args: Prisma.DiscussionDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.DiscussionUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.DiscussionUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DiscussionPayload>[];
          };
          upsert: {
            args: Prisma.DiscussionUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DiscussionPayload>;
          };
          aggregate: {
            args: Prisma.DiscussionAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateDiscussion>;
          };
          groupBy: {
            args: Prisma.DiscussionGroupByArgs<ExtArgs>;
            result: $Utils.Optional<DiscussionGroupByOutputType>[];
          };
          count: {
            args: Prisma.DiscussionCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<DiscussionCountAggregateOutputType>
              | number;
          };
        };
      };
      ProblemVote: {
        payload: Prisma.$ProblemVotePayload<ExtArgs>;
        fields: Prisma.ProblemVoteFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ProblemVoteFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProblemVotePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ProblemVoteFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProblemVotePayload>;
          };
          findFirst: {
            args: Prisma.ProblemVoteFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProblemVotePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ProblemVoteFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProblemVotePayload>;
          };
          findMany: {
            args: Prisma.ProblemVoteFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProblemVotePayload>[];
          };
          create: {
            args: Prisma.ProblemVoteCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProblemVotePayload>;
          };
          createMany: {
            args: Prisma.ProblemVoteCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.ProblemVoteCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProblemVotePayload>[];
          };
          delete: {
            args: Prisma.ProblemVoteDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProblemVotePayload>;
          };
          update: {
            args: Prisma.ProblemVoteUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProblemVotePayload>;
          };
          deleteMany: {
            args: Prisma.ProblemVoteDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.ProblemVoteUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.ProblemVoteUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProblemVotePayload>[];
          };
          upsert: {
            args: Prisma.ProblemVoteUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProblemVotePayload>;
          };
          aggregate: {
            args: Prisma.ProblemVoteAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateProblemVote>;
          };
          groupBy: {
            args: Prisma.ProblemVoteGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ProblemVoteGroupByOutputType>[];
          };
          count: {
            args: Prisma.ProblemVoteCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<ProblemVoteCountAggregateOutputType>
              | number;
          };
        };
      };
      Playlist: {
        payload: Prisma.$PlaylistPayload<ExtArgs>;
        fields: Prisma.PlaylistFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.PlaylistFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.PlaylistFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>;
          };
          findFirst: {
            args: Prisma.PlaylistFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.PlaylistFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>;
          };
          findMany: {
            args: Prisma.PlaylistFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>[];
          };
          create: {
            args: Prisma.PlaylistCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>;
          };
          createMany: {
            args: Prisma.PlaylistCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.PlaylistCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>[];
          };
          delete: {
            args: Prisma.PlaylistDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>;
          };
          update: {
            args: Prisma.PlaylistUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>;
          };
          deleteMany: {
            args: Prisma.PlaylistDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.PlaylistUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.PlaylistUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>[];
          };
          upsert: {
            args: Prisma.PlaylistUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>;
          };
          aggregate: {
            args: Prisma.PlaylistAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregatePlaylist>;
          };
          groupBy: {
            args: Prisma.PlaylistGroupByArgs<ExtArgs>;
            result: $Utils.Optional<PlaylistGroupByOutputType>[];
          };
          count: {
            args: Prisma.PlaylistCountArgs<ExtArgs>;
            result: $Utils.Optional<PlaylistCountAggregateOutputType> | number;
          };
        };
      };
      ProblemInPlaylist: {
        payload: Prisma.$ProblemInPlaylistPayload<ExtArgs>;
        fields: Prisma.ProblemInPlaylistFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ProblemInPlaylistFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProblemInPlaylistPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ProblemInPlaylistFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProblemInPlaylistPayload>;
          };
          findFirst: {
            args: Prisma.ProblemInPlaylistFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProblemInPlaylistPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ProblemInPlaylistFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProblemInPlaylistPayload>;
          };
          findMany: {
            args: Prisma.ProblemInPlaylistFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProblemInPlaylistPayload>[];
          };
          create: {
            args: Prisma.ProblemInPlaylistCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProblemInPlaylistPayload>;
          };
          createMany: {
            args: Prisma.ProblemInPlaylistCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.ProblemInPlaylistCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProblemInPlaylistPayload>[];
          };
          delete: {
            args: Prisma.ProblemInPlaylistDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProblemInPlaylistPayload>;
          };
          update: {
            args: Prisma.ProblemInPlaylistUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProblemInPlaylistPayload>;
          };
          deleteMany: {
            args: Prisma.ProblemInPlaylistDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.ProblemInPlaylistUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.ProblemInPlaylistUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProblemInPlaylistPayload>[];
          };
          upsert: {
            args: Prisma.ProblemInPlaylistUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProblemInPlaylistPayload>;
          };
          aggregate: {
            args: Prisma.ProblemInPlaylistAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateProblemInPlaylist>;
          };
          groupBy: {
            args: Prisma.ProblemInPlaylistGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ProblemInPlaylistGroupByOutputType>[];
          };
          count: {
            args: Prisma.ProblemInPlaylistCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<ProblemInPlaylistCountAggregateOutputType>
              | number;
          };
        };
      };
      Subscription: {
        payload: Prisma.$SubscriptionPayload<ExtArgs>;
        fields: Prisma.SubscriptionFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.SubscriptionFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.SubscriptionFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>;
          };
          findFirst: {
            args: Prisma.SubscriptionFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.SubscriptionFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>;
          };
          findMany: {
            args: Prisma.SubscriptionFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[];
          };
          create: {
            args: Prisma.SubscriptionCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>;
          };
          createMany: {
            args: Prisma.SubscriptionCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.SubscriptionCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[];
          };
          delete: {
            args: Prisma.SubscriptionDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>;
          };
          update: {
            args: Prisma.SubscriptionUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>;
          };
          deleteMany: {
            args: Prisma.SubscriptionDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.SubscriptionUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.SubscriptionUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[];
          };
          upsert: {
            args: Prisma.SubscriptionUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>;
          };
          aggregate: {
            args: Prisma.SubscriptionAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateSubscription>;
          };
          groupBy: {
            args: Prisma.SubscriptionGroupByArgs<ExtArgs>;
            result: $Utils.Optional<SubscriptionGroupByOutputType>[];
          };
          count: {
            args: Prisma.SubscriptionCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<SubscriptionCountAggregateOutputType>
              | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<
    "define",
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = "pretty" | "colorless" | "minimal";
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    };
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig;
  }
  export type GlobalOmitConfig = {
    user?: UserOmit;
    problem?: ProblemOmit;
    problemTestCase?: ProblemTestCaseOmit;
    submission?: SubmissionOmit;
    testCase?: TestCaseOmit;
    problemSolved?: ProblemSolvedOmit;
    discussion?: DiscussionOmit;
    problemVote?: ProblemVoteOmit;
    playlist?: PlaylistOmit;
    problemInPlaylist?: ProblemInPlaylistOmit;
    subscription?: SubscriptionOmit;
  };

  /* Types for Logging */
  export type LogLevel = "info" | "query" | "warn" | "error";
  export type LogDefinition = {
    level: LogLevel;
    emit: "stdout" | "event";
  };

  export type GetLogType<T extends LogLevel | LogDefinition> =
    T extends LogDefinition
      ? T["emit"] extends "event"
        ? T["level"]
        : never
      : never;
  export type GetEvents<T extends any> =
    T extends Array<LogLevel | LogDefinition>
      ?
          | GetLogType<T[0]>
          | GetLogType<T[1]>
          | GetLogType<T[2]>
          | GetLogType<T[3]>
      : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | "findUnique"
    | "findUniqueOrThrow"
    | "findMany"
    | "findFirst"
    | "findFirstOrThrow"
    | "create"
    | "createMany"
    | "createManyAndReturn"
    | "update"
    | "updateMany"
    | "updateManyAndReturn"
    | "upsert"
    | "delete"
    | "deleteMany"
    | "executeRaw"
    | "queryRaw"
    | "aggregate"
    | "count"
    | "runCommandRaw"
    | "findRaw"
    | "groupBy";

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>
  ): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<
    Prisma.DefaultPrismaClient,
    runtime.ITXClientDenyList
  >;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    problem: number;
    submission: number;
    problemSolved: number;
    discussions: number;
    votesOnProblems: number;
    playlists: number;
  };

  export type UserCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    problem?: boolean | UserCountOutputTypeCountProblemArgs;
    submission?: boolean | UserCountOutputTypeCountSubmissionArgs;
    problemSolved?: boolean | UserCountOutputTypeCountProblemSolvedArgs;
    discussions?: boolean | UserCountOutputTypeCountDiscussionsArgs;
    votesOnProblems?: boolean | UserCountOutputTypeCountVotesOnProblemsArgs;
    playlists?: boolean | UserCountOutputTypeCountPlaylistsArgs;
  };

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProblemArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ProblemWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSubmissionArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: SubmissionWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProblemSolvedArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ProblemSolvedWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDiscussionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: DiscussionWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVotesOnProblemsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ProblemVoteWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPlaylistsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: PlaylistWhereInput;
  };

  /**
   * Count Type ProblemCountOutputType
   */

  export type ProblemCountOutputType = {
    submission: number;
    solvedBy: number;
    testcases: number;
    discussions: number;
    votes: number;
    problemsPlatlists: number;
  };

  export type ProblemCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    submission?: boolean | ProblemCountOutputTypeCountSubmissionArgs;
    solvedBy?: boolean | ProblemCountOutputTypeCountSolvedByArgs;
    testcases?: boolean | ProblemCountOutputTypeCountTestcasesArgs;
    discussions?: boolean | ProblemCountOutputTypeCountDiscussionsArgs;
    votes?: boolean | ProblemCountOutputTypeCountVotesArgs;
    problemsPlatlists?:
      | boolean
      | ProblemCountOutputTypeCountProblemsPlatlistsArgs;
  };

  // Custom InputTypes
  /**
   * ProblemCountOutputType without action
   */
  export type ProblemCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProblemCountOutputType
     */
    select?: ProblemCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * ProblemCountOutputType without action
   */
  export type ProblemCountOutputTypeCountSubmissionArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: SubmissionWhereInput;
  };

  /**
   * ProblemCountOutputType without action
   */
  export type ProblemCountOutputTypeCountSolvedByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ProblemSolvedWhereInput;
  };

  /**
   * ProblemCountOutputType without action
   */
  export type ProblemCountOutputTypeCountTestcasesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ProblemTestCaseWhereInput;
  };

  /**
   * ProblemCountOutputType without action
   */
  export type ProblemCountOutputTypeCountDiscussionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: DiscussionWhereInput;
  };

  /**
   * ProblemCountOutputType without action
   */
  export type ProblemCountOutputTypeCountVotesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ProblemVoteWhereInput;
  };

  /**
   * ProblemCountOutputType without action
   */
  export type ProblemCountOutputTypeCountProblemsPlatlistsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ProblemInPlaylistWhereInput;
  };

  /**
   * Count Type SubmissionCountOutputType
   */

  export type SubmissionCountOutputType = {
    testcase: number;
  };

  export type SubmissionCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    testcase?: boolean | SubmissionCountOutputTypeCountTestcaseArgs;
  };

  // Custom InputTypes
  /**
   * SubmissionCountOutputType without action
   */
  export type SubmissionCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SubmissionCountOutputType
     */
    select?: SubmissionCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * SubmissionCountOutputType without action
   */
  export type SubmissionCountOutputTypeCountTestcaseArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: TestCaseWhereInput;
  };

  /**
   * Count Type DiscussionCountOutputType
   */

  export type DiscussionCountOutputType = {
    replies: number;
  };

  export type DiscussionCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    replies?: boolean | DiscussionCountOutputTypeCountRepliesArgs;
  };

  // Custom InputTypes
  /**
   * DiscussionCountOutputType without action
   */
  export type DiscussionCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the DiscussionCountOutputType
     */
    select?: DiscussionCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * DiscussionCountOutputType without action
   */
  export type DiscussionCountOutputTypeCountRepliesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: DiscussionWhereInput;
  };

  /**
   * Count Type PlaylistCountOutputType
   */

  export type PlaylistCountOutputType = {
    problems: number;
  };

  export type PlaylistCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    problems?: boolean | PlaylistCountOutputTypeCountProblemsArgs;
  };

  // Custom InputTypes
  /**
   * PlaylistCountOutputType without action
   */
  export type PlaylistCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PlaylistCountOutputType
     */
    select?: PlaylistCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * PlaylistCountOutputType without action
   */
  export type PlaylistCountOutputTypeCountProblemsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ProblemInPlaylistWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    email: string | null;
    role: $Enums.UserRole | null;
    password: string | null;
    refreshToken: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    email: string | null;
    role: $Enums.UserRole | null;
    password: string | null;
    refreshToken: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    name: number;
    email: number;
    avatar: number;
    role: number;
    password: number;
    refreshToken: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    role?: true;
    password?: true;
    refreshToken?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    role?: true;
    password?: true;
    refreshToken?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    avatar?: true;
    role?: true;
    password?: true;
    refreshToken?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type UserAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type UserGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserWhereInput;
    orderBy?:
      | UserOrderByWithAggregationInput
      | UserOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    name: string | null;
    email: string;
    avatar: JsonValue | null;
    role: $Enums.UserRole;
    password: string;
    refreshToken: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T["by"]> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends "_count"
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type UserSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      email?: boolean;
      avatar?: boolean;
      role?: boolean;
      password?: boolean;
      refreshToken?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      problem?: boolean | User$problemArgs<ExtArgs>;
      submission?: boolean | User$submissionArgs<ExtArgs>;
      problemSolved?: boolean | User$problemSolvedArgs<ExtArgs>;
      discussions?: boolean | User$discussionsArgs<ExtArgs>;
      votesOnProblems?: boolean | User$votesOnProblemsArgs<ExtArgs>;
      playlists?: boolean | User$playlistsArgs<ExtArgs>;
      subscription?: boolean | User$subscriptionArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["user"]
  >;

  export type UserSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      email?: boolean;
      avatar?: boolean;
      role?: boolean;
      password?: boolean;
      refreshToken?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs["result"]["user"]
  >;

  export type UserSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      email?: boolean;
      avatar?: boolean;
      role?: boolean;
      password?: boolean;
      refreshToken?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs["result"]["user"]
  >;

  export type UserSelectScalar = {
    id?: boolean;
    name?: boolean;
    email?: boolean;
    avatar?: boolean;
    role?: boolean;
    password?: boolean;
    refreshToken?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type UserOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | "id"
    | "name"
    | "email"
    | "avatar"
    | "role"
    | "password"
    | "refreshToken"
    | "createdAt"
    | "updatedAt",
    ExtArgs["result"]["user"]
  >;
  export type UserInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    problem?: boolean | User$problemArgs<ExtArgs>;
    submission?: boolean | User$submissionArgs<ExtArgs>;
    problemSolved?: boolean | User$problemSolvedArgs<ExtArgs>;
    discussions?: boolean | User$discussionsArgs<ExtArgs>;
    votesOnProblems?: boolean | User$votesOnProblemsArgs<ExtArgs>;
    playlists?: boolean | User$playlistsArgs<ExtArgs>;
    subscription?: boolean | User$subscriptionArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type UserIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};
  export type UserIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $UserPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "User";
    objects: {
      problem: Prisma.$ProblemPayload<ExtArgs>[];
      submission: Prisma.$SubmissionPayload<ExtArgs>[];
      problemSolved: Prisma.$ProblemSolvedPayload<ExtArgs>[];
      discussions: Prisma.$DiscussionPayload<ExtArgs>[];
      votesOnProblems: Prisma.$ProblemVotePayload<ExtArgs>[];
      playlists: Prisma.$PlaylistPayload<ExtArgs>[];
      subscription: Prisma.$SubscriptionPayload<ExtArgs> | null;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string | null;
        email: string;
        avatar: Prisma.JsonValue | null;
        role: $Enums.UserRole;
        password: string;
        refreshToken: string | null;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs["result"]["user"]
    >;
    composites: {};
  };

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> =
    $Result.GetResult<Prisma.$UserPayload, S>;

  type UserCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<UserFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: UserCountAggregateInputType | true;
  };

  export interface UserDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["User"];
      meta: { name: "User" };
    };
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     */
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(
      args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     */
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(
      args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs["orderBy"] }
        : { orderBy?: UserGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetUserGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the User model
     */
    readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    problem<T extends User$problemArgs<ExtArgs> = {}>(
      args?: Subset<T, User$problemArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$ProblemPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    submission<T extends User$submissionArgs<ExtArgs> = {}>(
      args?: Subset<T, User$submissionArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$SubmissionPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    problemSolved<T extends User$problemSolvedArgs<ExtArgs> = {}>(
      args?: Subset<T, User$problemSolvedArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$ProblemSolvedPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    discussions<T extends User$discussionsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$discussionsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$DiscussionPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    votesOnProblems<T extends User$votesOnProblemsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$votesOnProblemsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$ProblemVotePayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    playlists<T extends User$playlistsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$playlistsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$PlaylistPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    subscription<T extends User$subscriptionArgs<ExtArgs> = {}>(
      args?: Subset<T, User$subscriptionArgs<ExtArgs>>
    ): Prisma__SubscriptionClient<
      $Result.GetResult<
        Prisma.$SubscriptionPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", "String">;
    readonly name: FieldRef<"User", "String">;
    readonly email: FieldRef<"User", "String">;
    readonly avatar: FieldRef<"User", "Json">;
    readonly role: FieldRef<"User", "UserRole">;
    readonly password: FieldRef<"User", "String">;
    readonly refreshToken: FieldRef<"User", "String">;
    readonly createdAt: FieldRef<"User", "DateTime">;
    readonly updatedAt: FieldRef<"User", "DateTime">;
  }

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findMany
   */
  export type UserFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User create
   */
  export type UserCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>;
  };

  /**
   * User createMany
   */
  export type UserCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User update
   */
  export type UserUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
  };

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
  };

  /**
   * User upsert
   */
  export type UserUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput;
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>;
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
  };

  /**
   * User delete
   */
  export type UserDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to delete.
     */
    limit?: number;
  };

  /**
   * User.problem
   */
  export type User$problemArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null;
    where?: ProblemWhereInput;
    orderBy?:
      | ProblemOrderByWithRelationInput
      | ProblemOrderByWithRelationInput[];
    cursor?: ProblemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ProblemScalarFieldEnum | ProblemScalarFieldEnum[];
  };

  /**
   * User.submission
   */
  export type User$submissionArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null;
    where?: SubmissionWhereInput;
    orderBy?:
      | SubmissionOrderByWithRelationInput
      | SubmissionOrderByWithRelationInput[];
    cursor?: SubmissionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[];
  };

  /**
   * User.problemSolved
   */
  export type User$problemSolvedArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProblemSolved
     */
    select?: ProblemSolvedSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProblemSolved
     */
    omit?: ProblemSolvedOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemSolvedInclude<ExtArgs> | null;
    where?: ProblemSolvedWhereInput;
    orderBy?:
      | ProblemSolvedOrderByWithRelationInput
      | ProblemSolvedOrderByWithRelationInput[];
    cursor?: ProblemSolvedWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ProblemSolvedScalarFieldEnum | ProblemSolvedScalarFieldEnum[];
  };

  /**
   * User.discussions
   */
  export type User$discussionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Discussion
     */
    select?: DiscussionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Discussion
     */
    omit?: DiscussionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionInclude<ExtArgs> | null;
    where?: DiscussionWhereInput;
    orderBy?:
      | DiscussionOrderByWithRelationInput
      | DiscussionOrderByWithRelationInput[];
    cursor?: DiscussionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: DiscussionScalarFieldEnum | DiscussionScalarFieldEnum[];
  };

  /**
   * User.votesOnProblems
   */
  export type User$votesOnProblemsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProblemVote
     */
    select?: ProblemVoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProblemVote
     */
    omit?: ProblemVoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemVoteInclude<ExtArgs> | null;
    where?: ProblemVoteWhereInput;
    orderBy?:
      | ProblemVoteOrderByWithRelationInput
      | ProblemVoteOrderByWithRelationInput[];
    cursor?: ProblemVoteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ProblemVoteScalarFieldEnum | ProblemVoteScalarFieldEnum[];
  };

  /**
   * User.playlists
   */
  export type User$playlistsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null;
    where?: PlaylistWhereInput;
    orderBy?:
      | PlaylistOrderByWithRelationInput
      | PlaylistOrderByWithRelationInput[];
    cursor?: PlaylistWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[];
  };

  /**
   * User.subscription
   */
  export type User$subscriptionArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null;
    where?: SubscriptionWhereInput;
  };

  /**
   * User without action
   */
  export type UserDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
  };

  /**
   * Model Problem
   */

  export type AggregateProblem = {
    _count: ProblemCountAggregateOutputType | null;
    _avg: ProblemAvgAggregateOutputType | null;
    _sum: ProblemSumAggregateOutputType | null;
    _min: ProblemMinAggregateOutputType | null;
    _max: ProblemMaxAggregateOutputType | null;
  };

  export type ProblemAvgAggregateOutputType = {
    problemNumber: number | null;
  };

  export type ProblemSumAggregateOutputType = {
    problemNumber: number | null;
  };

  export type ProblemMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    problemNumber: number | null;
    description: string | null;
    difficulty: $Enums.Difficulty | null;
    userId: string | null;
    constraints: string | null;
    hints: string | null;
    editorial: string | null;
    isPremium: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type ProblemMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    problemNumber: number | null;
    description: string | null;
    difficulty: $Enums.Difficulty | null;
    userId: string | null;
    constraints: string | null;
    hints: string | null;
    editorial: string | null;
    isPremium: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type ProblemCountAggregateOutputType = {
    id: number;
    title: number;
    problemNumber: number;
    description: number;
    difficulty: number;
    topic: number;
    userId: number;
    examples: number;
    constraints: number;
    hints: number;
    editorial: number;
    codeSnippets: number;
    referenceSolutions: number;
    isPremium: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type ProblemAvgAggregateInputType = {
    problemNumber?: true;
  };

  export type ProblemSumAggregateInputType = {
    problemNumber?: true;
  };

  export type ProblemMinAggregateInputType = {
    id?: true;
    title?: true;
    problemNumber?: true;
    description?: true;
    difficulty?: true;
    userId?: true;
    constraints?: true;
    hints?: true;
    editorial?: true;
    isPremium?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type ProblemMaxAggregateInputType = {
    id?: true;
    title?: true;
    problemNumber?: true;
    description?: true;
    difficulty?: true;
    userId?: true;
    constraints?: true;
    hints?: true;
    editorial?: true;
    isPremium?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type ProblemCountAggregateInputType = {
    id?: true;
    title?: true;
    problemNumber?: true;
    description?: true;
    difficulty?: true;
    topic?: true;
    userId?: true;
    examples?: true;
    constraints?: true;
    hints?: true;
    editorial?: true;
    codeSnippets?: true;
    referenceSolutions?: true;
    isPremium?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type ProblemAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Problem to aggregate.
     */
    where?: ProblemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Problems to fetch.
     */
    orderBy?:
      | ProblemOrderByWithRelationInput
      | ProblemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ProblemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Problems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Problems.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Problems
     **/
    _count?: true | ProblemCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: ProblemAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: ProblemSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ProblemMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ProblemMaxAggregateInputType;
  };

  export type GetProblemAggregateType<T extends ProblemAggregateArgs> = {
    [P in keyof T & keyof AggregateProblem]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProblem[P]>
      : GetScalarType<T[P], AggregateProblem[P]>;
  };

  export type ProblemGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ProblemWhereInput;
    orderBy?:
      | ProblemOrderByWithAggregationInput
      | ProblemOrderByWithAggregationInput[];
    by: ProblemScalarFieldEnum[] | ProblemScalarFieldEnum;
    having?: ProblemScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProblemCountAggregateInputType | true;
    _avg?: ProblemAvgAggregateInputType;
    _sum?: ProblemSumAggregateInputType;
    _min?: ProblemMinAggregateInputType;
    _max?: ProblemMaxAggregateInputType;
  };

  export type ProblemGroupByOutputType = {
    id: string;
    title: string;
    problemNumber: number;
    description: string;
    difficulty: $Enums.Difficulty;
    topic: string[];
    userId: string;
    examples: JsonValue;
    constraints: string;
    hints: string | null;
    editorial: string | null;
    codeSnippets: JsonValue;
    referenceSolutions: JsonValue;
    isPremium: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: ProblemCountAggregateOutputType | null;
    _avg: ProblemAvgAggregateOutputType | null;
    _sum: ProblemSumAggregateOutputType | null;
    _min: ProblemMinAggregateOutputType | null;
    _max: ProblemMaxAggregateOutputType | null;
  };

  type GetProblemGroupByPayload<T extends ProblemGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<ProblemGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof ProblemGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProblemGroupByOutputType[P]>
            : GetScalarType<T[P], ProblemGroupByOutputType[P]>;
        }
      >
    >;

  export type ProblemSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      problemNumber?: boolean;
      description?: boolean;
      difficulty?: boolean;
      topic?: boolean;
      userId?: boolean;
      examples?: boolean;
      constraints?: boolean;
      hints?: boolean;
      editorial?: boolean;
      codeSnippets?: boolean;
      referenceSolutions?: boolean;
      isPremium?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      submission?: boolean | Problem$submissionArgs<ExtArgs>;
      solvedBy?: boolean | Problem$solvedByArgs<ExtArgs>;
      testcases?: boolean | Problem$testcasesArgs<ExtArgs>;
      discussions?: boolean | Problem$discussionsArgs<ExtArgs>;
      votes?: boolean | Problem$votesArgs<ExtArgs>;
      problemsPlatlists?: boolean | Problem$problemsPlatlistsArgs<ExtArgs>;
      _count?: boolean | ProblemCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["problem"]
  >;

  export type ProblemSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      problemNumber?: boolean;
      description?: boolean;
      difficulty?: boolean;
      topic?: boolean;
      userId?: boolean;
      examples?: boolean;
      constraints?: boolean;
      hints?: boolean;
      editorial?: boolean;
      codeSnippets?: boolean;
      referenceSolutions?: boolean;
      isPremium?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["problem"]
  >;

  export type ProblemSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      problemNumber?: boolean;
      description?: boolean;
      difficulty?: boolean;
      topic?: boolean;
      userId?: boolean;
      examples?: boolean;
      constraints?: boolean;
      hints?: boolean;
      editorial?: boolean;
      codeSnippets?: boolean;
      referenceSolutions?: boolean;
      isPremium?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["problem"]
  >;

  export type ProblemSelectScalar = {
    id?: boolean;
    title?: boolean;
    problemNumber?: boolean;
    description?: boolean;
    difficulty?: boolean;
    topic?: boolean;
    userId?: boolean;
    examples?: boolean;
    constraints?: boolean;
    hints?: boolean;
    editorial?: boolean;
    codeSnippets?: boolean;
    referenceSolutions?: boolean;
    isPremium?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type ProblemOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | "id"
    | "title"
    | "problemNumber"
    | "description"
    | "difficulty"
    | "topic"
    | "userId"
    | "examples"
    | "constraints"
    | "hints"
    | "editorial"
    | "codeSnippets"
    | "referenceSolutions"
    | "isPremium"
    | "createdAt"
    | "updatedAt",
    ExtArgs["result"]["problem"]
  >;
  export type ProblemInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    submission?: boolean | Problem$submissionArgs<ExtArgs>;
    solvedBy?: boolean | Problem$solvedByArgs<ExtArgs>;
    testcases?: boolean | Problem$testcasesArgs<ExtArgs>;
    discussions?: boolean | Problem$discussionsArgs<ExtArgs>;
    votes?: boolean | Problem$votesArgs<ExtArgs>;
    problemsPlatlists?: boolean | Problem$problemsPlatlistsArgs<ExtArgs>;
    _count?: boolean | ProblemCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type ProblemIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type ProblemIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $ProblemPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "Problem";
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
      submission: Prisma.$SubmissionPayload<ExtArgs>[];
      solvedBy: Prisma.$ProblemSolvedPayload<ExtArgs>[];
      testcases: Prisma.$ProblemTestCasePayload<ExtArgs>[];
      discussions: Prisma.$DiscussionPayload<ExtArgs>[];
      votes: Prisma.$ProblemVotePayload<ExtArgs>[];
      problemsPlatlists: Prisma.$ProblemInPlaylistPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        title: string;
        problemNumber: number;
        description: string;
        difficulty: $Enums.Difficulty;
        topic: string[];
        userId: string;
        examples: Prisma.JsonValue;
        constraints: string;
        hints: string | null;
        editorial: string | null;
        codeSnippets: Prisma.JsonValue;
        referenceSolutions: Prisma.JsonValue;
        isPremium: boolean;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs["result"]["problem"]
    >;
    composites: {};
  };

  type ProblemGetPayload<
    S extends boolean | null | undefined | ProblemDefaultArgs,
  > = $Result.GetResult<Prisma.$ProblemPayload, S>;

  type ProblemCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<ProblemFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: ProblemCountAggregateInputType | true;
  };

  export interface ProblemDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Problem"];
      meta: { name: "Problem" };
    };
    /**
     * Find zero or one Problem that matches the filter.
     * @param {ProblemFindUniqueArgs} args - Arguments to find a Problem
     * @example
     * // Get one Problem
     * const problem = await prisma.problem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProblemFindUniqueArgs>(
      args: SelectSubset<T, ProblemFindUniqueArgs<ExtArgs>>
    ): Prisma__ProblemClient<
      $Result.GetResult<
        Prisma.$ProblemPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Problem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProblemFindUniqueOrThrowArgs} args - Arguments to find a Problem
     * @example
     * // Get one Problem
     * const problem = await prisma.problem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProblemFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ProblemFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProblemClient<
      $Result.GetResult<
        Prisma.$ProblemPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Problem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemFindFirstArgs} args - Arguments to find a Problem
     * @example
     * // Get one Problem
     * const problem = await prisma.problem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProblemFindFirstArgs>(
      args?: SelectSubset<T, ProblemFindFirstArgs<ExtArgs>>
    ): Prisma__ProblemClient<
      $Result.GetResult<
        Prisma.$ProblemPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Problem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemFindFirstOrThrowArgs} args - Arguments to find a Problem
     * @example
     * // Get one Problem
     * const problem = await prisma.problem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProblemFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ProblemFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProblemClient<
      $Result.GetResult<
        Prisma.$ProblemPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Problems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Problems
     * const problems = await prisma.problem.findMany()
     *
     * // Get first 10 Problems
     * const problems = await prisma.problem.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const problemWithIdOnly = await prisma.problem.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ProblemFindManyArgs>(
      args?: SelectSubset<T, ProblemFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ProblemPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Problem.
     * @param {ProblemCreateArgs} args - Arguments to create a Problem.
     * @example
     * // Create one Problem
     * const Problem = await prisma.problem.create({
     *   data: {
     *     // ... data to create a Problem
     *   }
     * })
     *
     */
    create<T extends ProblemCreateArgs>(
      args: SelectSubset<T, ProblemCreateArgs<ExtArgs>>
    ): Prisma__ProblemClient<
      $Result.GetResult<
        Prisma.$ProblemPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Problems.
     * @param {ProblemCreateManyArgs} args - Arguments to create many Problems.
     * @example
     * // Create many Problems
     * const problem = await prisma.problem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ProblemCreateManyArgs>(
      args?: SelectSubset<T, ProblemCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Problems and returns the data saved in the database.
     * @param {ProblemCreateManyAndReturnArgs} args - Arguments to create many Problems.
     * @example
     * // Create many Problems
     * const problem = await prisma.problem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Problems and only return the `id`
     * const problemWithIdOnly = await prisma.problem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ProblemCreateManyAndReturnArgs>(
      args?: SelectSubset<T, ProblemCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ProblemPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Problem.
     * @param {ProblemDeleteArgs} args - Arguments to delete one Problem.
     * @example
     * // Delete one Problem
     * const Problem = await prisma.problem.delete({
     *   where: {
     *     // ... filter to delete one Problem
     *   }
     * })
     *
     */
    delete<T extends ProblemDeleteArgs>(
      args: SelectSubset<T, ProblemDeleteArgs<ExtArgs>>
    ): Prisma__ProblemClient<
      $Result.GetResult<
        Prisma.$ProblemPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Problem.
     * @param {ProblemUpdateArgs} args - Arguments to update one Problem.
     * @example
     * // Update one Problem
     * const problem = await prisma.problem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ProblemUpdateArgs>(
      args: SelectSubset<T, ProblemUpdateArgs<ExtArgs>>
    ): Prisma__ProblemClient<
      $Result.GetResult<
        Prisma.$ProblemPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Problems.
     * @param {ProblemDeleteManyArgs} args - Arguments to filter Problems to delete.
     * @example
     * // Delete a few Problems
     * const { count } = await prisma.problem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ProblemDeleteManyArgs>(
      args?: SelectSubset<T, ProblemDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Problems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Problems
     * const problem = await prisma.problem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ProblemUpdateManyArgs>(
      args: SelectSubset<T, ProblemUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Problems and returns the data updated in the database.
     * @param {ProblemUpdateManyAndReturnArgs} args - Arguments to update many Problems.
     * @example
     * // Update many Problems
     * const problem = await prisma.problem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Problems and only return the `id`
     * const problemWithIdOnly = await prisma.problem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends ProblemUpdateManyAndReturnArgs>(
      args: SelectSubset<T, ProblemUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ProblemPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Problem.
     * @param {ProblemUpsertArgs} args - Arguments to update or create a Problem.
     * @example
     * // Update or create a Problem
     * const problem = await prisma.problem.upsert({
     *   create: {
     *     // ... data to create a Problem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Problem we want to update
     *   }
     * })
     */
    upsert<T extends ProblemUpsertArgs>(
      args: SelectSubset<T, ProblemUpsertArgs<ExtArgs>>
    ): Prisma__ProblemClient<
      $Result.GetResult<
        Prisma.$ProblemPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Problems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemCountArgs} args - Arguments to filter Problems to count.
     * @example
     * // Count the number of Problems
     * const count = await prisma.problem.count({
     *   where: {
     *     // ... the filter for the Problems we want to count
     *   }
     * })
     **/
    count<T extends ProblemCountArgs>(
      args?: Subset<T, ProblemCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], ProblemCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Problem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ProblemAggregateArgs>(
      args: Subset<T, ProblemAggregateArgs>
    ): Prisma.PrismaPromise<GetProblemAggregateType<T>>;

    /**
     * Group by Problem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends ProblemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProblemGroupByArgs["orderBy"] }
        : { orderBy?: ProblemGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, ProblemGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetProblemGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Problem model
     */
    readonly fields: ProblemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Problem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProblemClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    submission<T extends Problem$submissionArgs<ExtArgs> = {}>(
      args?: Subset<T, Problem$submissionArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$SubmissionPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    solvedBy<T extends Problem$solvedByArgs<ExtArgs> = {}>(
      args?: Subset<T, Problem$solvedByArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$ProblemSolvedPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    testcases<T extends Problem$testcasesArgs<ExtArgs> = {}>(
      args?: Subset<T, Problem$testcasesArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$ProblemTestCasePayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    discussions<T extends Problem$discussionsArgs<ExtArgs> = {}>(
      args?: Subset<T, Problem$discussionsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$DiscussionPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    votes<T extends Problem$votesArgs<ExtArgs> = {}>(
      args?: Subset<T, Problem$votesArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$ProblemVotePayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    problemsPlatlists<T extends Problem$problemsPlatlistsArgs<ExtArgs> = {}>(
      args?: Subset<T, Problem$problemsPlatlistsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$ProblemInPlaylistPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Problem model
   */
  interface ProblemFieldRefs {
    readonly id: FieldRef<"Problem", "String">;
    readonly title: FieldRef<"Problem", "String">;
    readonly problemNumber: FieldRef<"Problem", "Int">;
    readonly description: FieldRef<"Problem", "String">;
    readonly difficulty: FieldRef<"Problem", "Difficulty">;
    readonly topic: FieldRef<"Problem", "String[]">;
    readonly userId: FieldRef<"Problem", "String">;
    readonly examples: FieldRef<"Problem", "Json">;
    readonly constraints: FieldRef<"Problem", "String">;
    readonly hints: FieldRef<"Problem", "String">;
    readonly editorial: FieldRef<"Problem", "String">;
    readonly codeSnippets: FieldRef<"Problem", "Json">;
    readonly referenceSolutions: FieldRef<"Problem", "Json">;
    readonly isPremium: FieldRef<"Problem", "Boolean">;
    readonly createdAt: FieldRef<"Problem", "DateTime">;
    readonly updatedAt: FieldRef<"Problem", "DateTime">;
  }

  // Custom InputTypes
  /**
   * Problem findUnique
   */
  export type ProblemFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null;
    /**
     * Filter, which Problem to fetch.
     */
    where: ProblemWhereUniqueInput;
  };

  /**
   * Problem findUniqueOrThrow
   */
  export type ProblemFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null;
    /**
     * Filter, which Problem to fetch.
     */
    where: ProblemWhereUniqueInput;
  };

  /**
   * Problem findFirst
   */
  export type ProblemFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null;
    /**
     * Filter, which Problem to fetch.
     */
    where?: ProblemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Problems to fetch.
     */
    orderBy?:
      | ProblemOrderByWithRelationInput
      | ProblemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Problems.
     */
    cursor?: ProblemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Problems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Problems.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Problems.
     */
    distinct?: ProblemScalarFieldEnum | ProblemScalarFieldEnum[];
  };

  /**
   * Problem findFirstOrThrow
   */
  export type ProblemFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null;
    /**
     * Filter, which Problem to fetch.
     */
    where?: ProblemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Problems to fetch.
     */
    orderBy?:
      | ProblemOrderByWithRelationInput
      | ProblemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Problems.
     */
    cursor?: ProblemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Problems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Problems.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Problems.
     */
    distinct?: ProblemScalarFieldEnum | ProblemScalarFieldEnum[];
  };

  /**
   * Problem findMany
   */
  export type ProblemFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null;
    /**
     * Filter, which Problems to fetch.
     */
    where?: ProblemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Problems to fetch.
     */
    orderBy?:
      | ProblemOrderByWithRelationInput
      | ProblemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Problems.
     */
    cursor?: ProblemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Problems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Problems.
     */
    skip?: number;
    distinct?: ProblemScalarFieldEnum | ProblemScalarFieldEnum[];
  };

  /**
   * Problem create
   */
  export type ProblemCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null;
    /**
     * The data needed to create a Problem.
     */
    data: XOR<ProblemCreateInput, ProblemUncheckedCreateInput>;
  };

  /**
   * Problem createMany
   */
  export type ProblemCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Problems.
     */
    data: ProblemCreateManyInput | ProblemCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Problem createManyAndReturn
   */
  export type ProblemCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null;
    /**
     * The data used to create many Problems.
     */
    data: ProblemCreateManyInput | ProblemCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Problem update
   */
  export type ProblemUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null;
    /**
     * The data needed to update a Problem.
     */
    data: XOR<ProblemUpdateInput, ProblemUncheckedUpdateInput>;
    /**
     * Choose, which Problem to update.
     */
    where: ProblemWhereUniqueInput;
  };

  /**
   * Problem updateMany
   */
  export type ProblemUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Problems.
     */
    data: XOR<ProblemUpdateManyMutationInput, ProblemUncheckedUpdateManyInput>;
    /**
     * Filter which Problems to update
     */
    where?: ProblemWhereInput;
    /**
     * Limit how many Problems to update.
     */
    limit?: number;
  };

  /**
   * Problem updateManyAndReturn
   */
  export type ProblemUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null;
    /**
     * The data used to update Problems.
     */
    data: XOR<ProblemUpdateManyMutationInput, ProblemUncheckedUpdateManyInput>;
    /**
     * Filter which Problems to update
     */
    where?: ProblemWhereInput;
    /**
     * Limit how many Problems to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Problem upsert
   */
  export type ProblemUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null;
    /**
     * The filter to search for the Problem to update in case it exists.
     */
    where: ProblemWhereUniqueInput;
    /**
     * In case the Problem found by the `where` argument doesn't exist, create a new Problem with this data.
     */
    create: XOR<ProblemCreateInput, ProblemUncheckedCreateInput>;
    /**
     * In case the Problem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProblemUpdateInput, ProblemUncheckedUpdateInput>;
  };

  /**
   * Problem delete
   */
  export type ProblemDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null;
    /**
     * Filter which Problem to delete.
     */
    where: ProblemWhereUniqueInput;
  };

  /**
   * Problem deleteMany
   */
  export type ProblemDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Problems to delete
     */
    where?: ProblemWhereInput;
    /**
     * Limit how many Problems to delete.
     */
    limit?: number;
  };

  /**
   * Problem.submission
   */
  export type Problem$submissionArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null;
    where?: SubmissionWhereInput;
    orderBy?:
      | SubmissionOrderByWithRelationInput
      | SubmissionOrderByWithRelationInput[];
    cursor?: SubmissionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[];
  };

  /**
   * Problem.solvedBy
   */
  export type Problem$solvedByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProblemSolved
     */
    select?: ProblemSolvedSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProblemSolved
     */
    omit?: ProblemSolvedOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemSolvedInclude<ExtArgs> | null;
    where?: ProblemSolvedWhereInput;
    orderBy?:
      | ProblemSolvedOrderByWithRelationInput
      | ProblemSolvedOrderByWithRelationInput[];
    cursor?: ProblemSolvedWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ProblemSolvedScalarFieldEnum | ProblemSolvedScalarFieldEnum[];
  };

  /**
   * Problem.testcases
   */
  export type Problem$testcasesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProblemTestCase
     */
    select?: ProblemTestCaseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProblemTestCase
     */
    omit?: ProblemTestCaseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemTestCaseInclude<ExtArgs> | null;
    where?: ProblemTestCaseWhereInput;
    orderBy?:
      | ProblemTestCaseOrderByWithRelationInput
      | ProblemTestCaseOrderByWithRelationInput[];
    cursor?: ProblemTestCaseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?:
      | ProblemTestCaseScalarFieldEnum
      | ProblemTestCaseScalarFieldEnum[];
  };

  /**
   * Problem.discussions
   */
  export type Problem$discussionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Discussion
     */
    select?: DiscussionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Discussion
     */
    omit?: DiscussionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionInclude<ExtArgs> | null;
    where?: DiscussionWhereInput;
    orderBy?:
      | DiscussionOrderByWithRelationInput
      | DiscussionOrderByWithRelationInput[];
    cursor?: DiscussionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: DiscussionScalarFieldEnum | DiscussionScalarFieldEnum[];
  };

  /**
   * Problem.votes
   */
  export type Problem$votesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProblemVote
     */
    select?: ProblemVoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProblemVote
     */
    omit?: ProblemVoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemVoteInclude<ExtArgs> | null;
    where?: ProblemVoteWhereInput;
    orderBy?:
      | ProblemVoteOrderByWithRelationInput
      | ProblemVoteOrderByWithRelationInput[];
    cursor?: ProblemVoteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ProblemVoteScalarFieldEnum | ProblemVoteScalarFieldEnum[];
  };

  /**
   * Problem.problemsPlatlists
   */
  export type Problem$problemsPlatlistsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProblemInPlaylist
     */
    select?: ProblemInPlaylistSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProblemInPlaylist
     */
    omit?: ProblemInPlaylistOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInPlaylistInclude<ExtArgs> | null;
    where?: ProblemInPlaylistWhereInput;
    orderBy?:
      | ProblemInPlaylistOrderByWithRelationInput
      | ProblemInPlaylistOrderByWithRelationInput[];
    cursor?: ProblemInPlaylistWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?:
      | ProblemInPlaylistScalarFieldEnum
      | ProblemInPlaylistScalarFieldEnum[];
  };

  /**
   * Problem without action
   */
  export type ProblemDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null;
  };

  /**
   * Model ProblemTestCase
   */

  export type AggregateProblemTestCase = {
    _count: ProblemTestCaseCountAggregateOutputType | null;
    _min: ProblemTestCaseMinAggregateOutputType | null;
    _max: ProblemTestCaseMaxAggregateOutputType | null;
  };

  export type ProblemTestCaseMinAggregateOutputType = {
    id: string | null;
    input: string | null;
    output: string | null;
    isPublic: boolean | null;
    problemId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type ProblemTestCaseMaxAggregateOutputType = {
    id: string | null;
    input: string | null;
    output: string | null;
    isPublic: boolean | null;
    problemId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type ProblemTestCaseCountAggregateOutputType = {
    id: number;
    input: number;
    output: number;
    isPublic: number;
    problemId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type ProblemTestCaseMinAggregateInputType = {
    id?: true;
    input?: true;
    output?: true;
    isPublic?: true;
    problemId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type ProblemTestCaseMaxAggregateInputType = {
    id?: true;
    input?: true;
    output?: true;
    isPublic?: true;
    problemId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type ProblemTestCaseCountAggregateInputType = {
    id?: true;
    input?: true;
    output?: true;
    isPublic?: true;
    problemId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type ProblemTestCaseAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which ProblemTestCase to aggregate.
     */
    where?: ProblemTestCaseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProblemTestCases to fetch.
     */
    orderBy?:
      | ProblemTestCaseOrderByWithRelationInput
      | ProblemTestCaseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ProblemTestCaseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProblemTestCases from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProblemTestCases.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ProblemTestCases
     **/
    _count?: true | ProblemTestCaseCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ProblemTestCaseMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ProblemTestCaseMaxAggregateInputType;
  };

  export type GetProblemTestCaseAggregateType<
    T extends ProblemTestCaseAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateProblemTestCase]: P extends
      | "_count"
      | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProblemTestCase[P]>
      : GetScalarType<T[P], AggregateProblemTestCase[P]>;
  };

  export type ProblemTestCaseGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ProblemTestCaseWhereInput;
    orderBy?:
      | ProblemTestCaseOrderByWithAggregationInput
      | ProblemTestCaseOrderByWithAggregationInput[];
    by: ProblemTestCaseScalarFieldEnum[] | ProblemTestCaseScalarFieldEnum;
    having?: ProblemTestCaseScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProblemTestCaseCountAggregateInputType | true;
    _min?: ProblemTestCaseMinAggregateInputType;
    _max?: ProblemTestCaseMaxAggregateInputType;
  };

  export type ProblemTestCaseGroupByOutputType = {
    id: string;
    input: string;
    output: string;
    isPublic: boolean;
    problemId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: ProblemTestCaseCountAggregateOutputType | null;
    _min: ProblemTestCaseMinAggregateOutputType | null;
    _max: ProblemTestCaseMaxAggregateOutputType | null;
  };

  type GetProblemTestCaseGroupByPayload<T extends ProblemTestCaseGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<ProblemTestCaseGroupByOutputType, T["by"]> & {
          [P in keyof T &
            keyof ProblemTestCaseGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProblemTestCaseGroupByOutputType[P]>
            : GetScalarType<T[P], ProblemTestCaseGroupByOutputType[P]>;
        }
      >
    >;

  export type ProblemTestCaseSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      input?: boolean;
      output?: boolean;
      isPublic?: boolean;
      problemId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      problem?: boolean | ProblemDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["problemTestCase"]
  >;

  export type ProblemTestCaseSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      input?: boolean;
      output?: boolean;
      isPublic?: boolean;
      problemId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      problem?: boolean | ProblemDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["problemTestCase"]
  >;

  export type ProblemTestCaseSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      input?: boolean;
      output?: boolean;
      isPublic?: boolean;
      problemId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      problem?: boolean | ProblemDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["problemTestCase"]
  >;

  export type ProblemTestCaseSelectScalar = {
    id?: boolean;
    input?: boolean;
    output?: boolean;
    isPublic?: boolean;
    problemId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type ProblemTestCaseOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | "id"
    | "input"
    | "output"
    | "isPublic"
    | "problemId"
    | "createdAt"
    | "updatedAt",
    ExtArgs["result"]["problemTestCase"]
  >;
  export type ProblemTestCaseInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    problem?: boolean | ProblemDefaultArgs<ExtArgs>;
  };
  export type ProblemTestCaseIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    problem?: boolean | ProblemDefaultArgs<ExtArgs>;
  };
  export type ProblemTestCaseIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    problem?: boolean | ProblemDefaultArgs<ExtArgs>;
  };

  export type $ProblemTestCasePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "ProblemTestCase";
    objects: {
      problem: Prisma.$ProblemPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        input: string;
        output: string;
        isPublic: boolean;
        problemId: string;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs["result"]["problemTestCase"]
    >;
    composites: {};
  };

  type ProblemTestCaseGetPayload<
    S extends boolean | null | undefined | ProblemTestCaseDefaultArgs,
  > = $Result.GetResult<Prisma.$ProblemTestCasePayload, S>;

  type ProblemTestCaseCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    ProblemTestCaseFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: ProblemTestCaseCountAggregateInputType | true;
  };

  export interface ProblemTestCaseDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["ProblemTestCase"];
      meta: { name: "ProblemTestCase" };
    };
    /**
     * Find zero or one ProblemTestCase that matches the filter.
     * @param {ProblemTestCaseFindUniqueArgs} args - Arguments to find a ProblemTestCase
     * @example
     * // Get one ProblemTestCase
     * const problemTestCase = await prisma.problemTestCase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProblemTestCaseFindUniqueArgs>(
      args: SelectSubset<T, ProblemTestCaseFindUniqueArgs<ExtArgs>>
    ): Prisma__ProblemTestCaseClient<
      $Result.GetResult<
        Prisma.$ProblemTestCasePayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one ProblemTestCase that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProblemTestCaseFindUniqueOrThrowArgs} args - Arguments to find a ProblemTestCase
     * @example
     * // Get one ProblemTestCase
     * const problemTestCase = await prisma.problemTestCase.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProblemTestCaseFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ProblemTestCaseFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProblemTestCaseClient<
      $Result.GetResult<
        Prisma.$ProblemTestCasePayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first ProblemTestCase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemTestCaseFindFirstArgs} args - Arguments to find a ProblemTestCase
     * @example
     * // Get one ProblemTestCase
     * const problemTestCase = await prisma.problemTestCase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProblemTestCaseFindFirstArgs>(
      args?: SelectSubset<T, ProblemTestCaseFindFirstArgs<ExtArgs>>
    ): Prisma__ProblemTestCaseClient<
      $Result.GetResult<
        Prisma.$ProblemTestCasePayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first ProblemTestCase that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemTestCaseFindFirstOrThrowArgs} args - Arguments to find a ProblemTestCase
     * @example
     * // Get one ProblemTestCase
     * const problemTestCase = await prisma.problemTestCase.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProblemTestCaseFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ProblemTestCaseFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProblemTestCaseClient<
      $Result.GetResult<
        Prisma.$ProblemTestCasePayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more ProblemTestCases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemTestCaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProblemTestCases
     * const problemTestCases = await prisma.problemTestCase.findMany()
     *
     * // Get first 10 ProblemTestCases
     * const problemTestCases = await prisma.problemTestCase.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const problemTestCaseWithIdOnly = await prisma.problemTestCase.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ProblemTestCaseFindManyArgs>(
      args?: SelectSubset<T, ProblemTestCaseFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ProblemTestCasePayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a ProblemTestCase.
     * @param {ProblemTestCaseCreateArgs} args - Arguments to create a ProblemTestCase.
     * @example
     * // Create one ProblemTestCase
     * const ProblemTestCase = await prisma.problemTestCase.create({
     *   data: {
     *     // ... data to create a ProblemTestCase
     *   }
     * })
     *
     */
    create<T extends ProblemTestCaseCreateArgs>(
      args: SelectSubset<T, ProblemTestCaseCreateArgs<ExtArgs>>
    ): Prisma__ProblemTestCaseClient<
      $Result.GetResult<
        Prisma.$ProblemTestCasePayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many ProblemTestCases.
     * @param {ProblemTestCaseCreateManyArgs} args - Arguments to create many ProblemTestCases.
     * @example
     * // Create many ProblemTestCases
     * const problemTestCase = await prisma.problemTestCase.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ProblemTestCaseCreateManyArgs>(
      args?: SelectSubset<T, ProblemTestCaseCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many ProblemTestCases and returns the data saved in the database.
     * @param {ProblemTestCaseCreateManyAndReturnArgs} args - Arguments to create many ProblemTestCases.
     * @example
     * // Create many ProblemTestCases
     * const problemTestCase = await prisma.problemTestCase.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ProblemTestCases and only return the `id`
     * const problemTestCaseWithIdOnly = await prisma.problemTestCase.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ProblemTestCaseCreateManyAndReturnArgs>(
      args?: SelectSubset<T, ProblemTestCaseCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ProblemTestCasePayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a ProblemTestCase.
     * @param {ProblemTestCaseDeleteArgs} args - Arguments to delete one ProblemTestCase.
     * @example
     * // Delete one ProblemTestCase
     * const ProblemTestCase = await prisma.problemTestCase.delete({
     *   where: {
     *     // ... filter to delete one ProblemTestCase
     *   }
     * })
     *
     */
    delete<T extends ProblemTestCaseDeleteArgs>(
      args: SelectSubset<T, ProblemTestCaseDeleteArgs<ExtArgs>>
    ): Prisma__ProblemTestCaseClient<
      $Result.GetResult<
        Prisma.$ProblemTestCasePayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one ProblemTestCase.
     * @param {ProblemTestCaseUpdateArgs} args - Arguments to update one ProblemTestCase.
     * @example
     * // Update one ProblemTestCase
     * const problemTestCase = await prisma.problemTestCase.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ProblemTestCaseUpdateArgs>(
      args: SelectSubset<T, ProblemTestCaseUpdateArgs<ExtArgs>>
    ): Prisma__ProblemTestCaseClient<
      $Result.GetResult<
        Prisma.$ProblemTestCasePayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more ProblemTestCases.
     * @param {ProblemTestCaseDeleteManyArgs} args - Arguments to filter ProblemTestCases to delete.
     * @example
     * // Delete a few ProblemTestCases
     * const { count } = await prisma.problemTestCase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ProblemTestCaseDeleteManyArgs>(
      args?: SelectSubset<T, ProblemTestCaseDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more ProblemTestCases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemTestCaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProblemTestCases
     * const problemTestCase = await prisma.problemTestCase.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ProblemTestCaseUpdateManyArgs>(
      args: SelectSubset<T, ProblemTestCaseUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more ProblemTestCases and returns the data updated in the database.
     * @param {ProblemTestCaseUpdateManyAndReturnArgs} args - Arguments to update many ProblemTestCases.
     * @example
     * // Update many ProblemTestCases
     * const problemTestCase = await prisma.problemTestCase.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ProblemTestCases and only return the `id`
     * const problemTestCaseWithIdOnly = await prisma.problemTestCase.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends ProblemTestCaseUpdateManyAndReturnArgs>(
      args: SelectSubset<T, ProblemTestCaseUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ProblemTestCasePayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one ProblemTestCase.
     * @param {ProblemTestCaseUpsertArgs} args - Arguments to update or create a ProblemTestCase.
     * @example
     * // Update or create a ProblemTestCase
     * const problemTestCase = await prisma.problemTestCase.upsert({
     *   create: {
     *     // ... data to create a ProblemTestCase
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProblemTestCase we want to update
     *   }
     * })
     */
    upsert<T extends ProblemTestCaseUpsertArgs>(
      args: SelectSubset<T, ProblemTestCaseUpsertArgs<ExtArgs>>
    ): Prisma__ProblemTestCaseClient<
      $Result.GetResult<
        Prisma.$ProblemTestCasePayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of ProblemTestCases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemTestCaseCountArgs} args - Arguments to filter ProblemTestCases to count.
     * @example
     * // Count the number of ProblemTestCases
     * const count = await prisma.problemTestCase.count({
     *   where: {
     *     // ... the filter for the ProblemTestCases we want to count
     *   }
     * })
     **/
    count<T extends ProblemTestCaseCountArgs>(
      args?: Subset<T, ProblemTestCaseCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], ProblemTestCaseCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a ProblemTestCase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemTestCaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ProblemTestCaseAggregateArgs>(
      args: Subset<T, ProblemTestCaseAggregateArgs>
    ): Prisma.PrismaPromise<GetProblemTestCaseAggregateType<T>>;

    /**
     * Group by ProblemTestCase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemTestCaseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends ProblemTestCaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProblemTestCaseGroupByArgs["orderBy"] }
        : { orderBy?: ProblemTestCaseGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, ProblemTestCaseGroupByArgs, OrderByArg> &
        InputErrors
    ): {} extends InputErrors
      ? GetProblemTestCaseGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ProblemTestCase model
     */
    readonly fields: ProblemTestCaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProblemTestCase.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProblemTestCaseClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    problem<T extends ProblemDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, ProblemDefaultArgs<ExtArgs>>
    ): Prisma__ProblemClient<
      | $Result.GetResult<
          Prisma.$ProblemPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the ProblemTestCase model
   */
  interface ProblemTestCaseFieldRefs {
    readonly id: FieldRef<"ProblemTestCase", "String">;
    readonly input: FieldRef<"ProblemTestCase", "String">;
    readonly output: FieldRef<"ProblemTestCase", "String">;
    readonly isPublic: FieldRef<"ProblemTestCase", "Boolean">;
    readonly problemId: FieldRef<"ProblemTestCase", "String">;
    readonly createdAt: FieldRef<"ProblemTestCase", "DateTime">;
    readonly updatedAt: FieldRef<"ProblemTestCase", "DateTime">;
  }

  // Custom InputTypes
  /**
   * ProblemTestCase findUnique
   */
  export type ProblemTestCaseFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProblemTestCase
     */
    select?: ProblemTestCaseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProblemTestCase
     */
    omit?: ProblemTestCaseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemTestCaseInclude<ExtArgs> | null;
    /**
     * Filter, which ProblemTestCase to fetch.
     */
    where: ProblemTestCaseWhereUniqueInput;
  };

  /**
   * ProblemTestCase findUniqueOrThrow
   */
  export type ProblemTestCaseFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProblemTestCase
     */
    select?: ProblemTestCaseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProblemTestCase
     */
    omit?: ProblemTestCaseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemTestCaseInclude<ExtArgs> | null;
    /**
     * Filter, which ProblemTestCase to fetch.
     */
    where: ProblemTestCaseWhereUniqueInput;
  };

  /**
   * ProblemTestCase findFirst
   */
  export type ProblemTestCaseFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProblemTestCase
     */
    select?: ProblemTestCaseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProblemTestCase
     */
    omit?: ProblemTestCaseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemTestCaseInclude<ExtArgs> | null;
    /**
     * Filter, which ProblemTestCase to fetch.
     */
    where?: ProblemTestCaseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProblemTestCases to fetch.
     */
    orderBy?:
      | ProblemTestCaseOrderByWithRelationInput
      | ProblemTestCaseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ProblemTestCases.
     */
    cursor?: ProblemTestCaseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProblemTestCases from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProblemTestCases.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ProblemTestCases.
     */
    distinct?:
      | ProblemTestCaseScalarFieldEnum
      | ProblemTestCaseScalarFieldEnum[];
  };

  /**
   * ProblemTestCase findFirstOrThrow
   */
  export type ProblemTestCaseFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProblemTestCase
     */
    select?: ProblemTestCaseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProblemTestCase
     */
    omit?: ProblemTestCaseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemTestCaseInclude<ExtArgs> | null;
    /**
     * Filter, which ProblemTestCase to fetch.
     */
    where?: ProblemTestCaseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProblemTestCases to fetch.
     */
    orderBy?:
      | ProblemTestCaseOrderByWithRelationInput
      | ProblemTestCaseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ProblemTestCases.
     */
    cursor?: ProblemTestCaseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProblemTestCases from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProblemTestCases.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ProblemTestCases.
     */
    distinct?:
      | ProblemTestCaseScalarFieldEnum
      | ProblemTestCaseScalarFieldEnum[];
  };

  /**
   * ProblemTestCase findMany
   */
  export type ProblemTestCaseFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProblemTestCase
     */
    select?: ProblemTestCaseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProblemTestCase
     */
    omit?: ProblemTestCaseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemTestCaseInclude<ExtArgs> | null;
    /**
     * Filter, which ProblemTestCases to fetch.
     */
    where?: ProblemTestCaseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProblemTestCases to fetch.
     */
    orderBy?:
      | ProblemTestCaseOrderByWithRelationInput
      | ProblemTestCaseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ProblemTestCases.
     */
    cursor?: ProblemTestCaseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProblemTestCases from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProblemTestCases.
     */
    skip?: number;
    distinct?:
      | ProblemTestCaseScalarFieldEnum
      | ProblemTestCaseScalarFieldEnum[];
  };

  /**
   * ProblemTestCase create
   */
  export type ProblemTestCaseCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProblemTestCase
     */
    select?: ProblemTestCaseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProblemTestCase
     */
    omit?: ProblemTestCaseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemTestCaseInclude<ExtArgs> | null;
    /**
     * The data needed to create a ProblemTestCase.
     */
    data: XOR<ProblemTestCaseCreateInput, ProblemTestCaseUncheckedCreateInput>;
  };

  /**
   * ProblemTestCase createMany
   */
  export type ProblemTestCaseCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many ProblemTestCases.
     */
    data: ProblemTestCaseCreateManyInput | ProblemTestCaseCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * ProblemTestCase createManyAndReturn
   */
  export type ProblemTestCaseCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProblemTestCase
     */
    select?: ProblemTestCaseSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ProblemTestCase
     */
    omit?: ProblemTestCaseOmit<ExtArgs> | null;
    /**
     * The data used to create many ProblemTestCases.
     */
    data: ProblemTestCaseCreateManyInput | ProblemTestCaseCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemTestCaseIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * ProblemTestCase update
   */
  export type ProblemTestCaseUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProblemTestCase
     */
    select?: ProblemTestCaseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProblemTestCase
     */
    omit?: ProblemTestCaseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemTestCaseInclude<ExtArgs> | null;
    /**
     * The data needed to update a ProblemTestCase.
     */
    data: XOR<ProblemTestCaseUpdateInput, ProblemTestCaseUncheckedUpdateInput>;
    /**
     * Choose, which ProblemTestCase to update.
     */
    where: ProblemTestCaseWhereUniqueInput;
  };

  /**
   * ProblemTestCase updateMany
   */
  export type ProblemTestCaseUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update ProblemTestCases.
     */
    data: XOR<
      ProblemTestCaseUpdateManyMutationInput,
      ProblemTestCaseUncheckedUpdateManyInput
    >;
    /**
     * Filter which ProblemTestCases to update
     */
    where?: ProblemTestCaseWhereInput;
    /**
     * Limit how many ProblemTestCases to update.
     */
    limit?: number;
  };

  /**
   * ProblemTestCase updateManyAndReturn
   */
  export type ProblemTestCaseUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProblemTestCase
     */
    select?: ProblemTestCaseSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ProblemTestCase
     */
    omit?: ProblemTestCaseOmit<ExtArgs> | null;
    /**
     * The data used to update ProblemTestCases.
     */
    data: XOR<
      ProblemTestCaseUpdateManyMutationInput,
      ProblemTestCaseUncheckedUpdateManyInput
    >;
    /**
     * Filter which ProblemTestCases to update
     */
    where?: ProblemTestCaseWhereInput;
    /**
     * Limit how many ProblemTestCases to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemTestCaseIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * ProblemTestCase upsert
   */
  export type ProblemTestCaseUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProblemTestCase
     */
    select?: ProblemTestCaseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProblemTestCase
     */
    omit?: ProblemTestCaseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemTestCaseInclude<ExtArgs> | null;
    /**
     * The filter to search for the ProblemTestCase to update in case it exists.
     */
    where: ProblemTestCaseWhereUniqueInput;
    /**
     * In case the ProblemTestCase found by the `where` argument doesn't exist, create a new ProblemTestCase with this data.
     */
    create: XOR<
      ProblemTestCaseCreateInput,
      ProblemTestCaseUncheckedCreateInput
    >;
    /**
     * In case the ProblemTestCase was found with the provided `where` argument, update it with this data.
     */
    update: XOR<
      ProblemTestCaseUpdateInput,
      ProblemTestCaseUncheckedUpdateInput
    >;
  };

  /**
   * ProblemTestCase delete
   */
  export type ProblemTestCaseDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProblemTestCase
     */
    select?: ProblemTestCaseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProblemTestCase
     */
    omit?: ProblemTestCaseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemTestCaseInclude<ExtArgs> | null;
    /**
     * Filter which ProblemTestCase to delete.
     */
    where: ProblemTestCaseWhereUniqueInput;
  };

  /**
   * ProblemTestCase deleteMany
   */
  export type ProblemTestCaseDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which ProblemTestCases to delete
     */
    where?: ProblemTestCaseWhereInput;
    /**
     * Limit how many ProblemTestCases to delete.
     */
    limit?: number;
  };

  /**
   * ProblemTestCase without action
   */
  export type ProblemTestCaseDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProblemTestCase
     */
    select?: ProblemTestCaseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProblemTestCase
     */
    omit?: ProblemTestCaseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemTestCaseInclude<ExtArgs> | null;
  };

  /**
   * Model Submission
   */

  export type AggregateSubmission = {
    _count: SubmissionCountAggregateOutputType | null;
    _min: SubmissionMinAggregateOutputType | null;
    _max: SubmissionMaxAggregateOutputType | null;
  };

  export type SubmissionMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    problemId: string | null;
    language: string | null;
    stdin: string | null;
    stdout: string | null;
    stderr: string | null;
    compileOutput: string | null;
    status: string | null;
    memory: string | null;
    time: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type SubmissionMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    problemId: string | null;
    language: string | null;
    stdin: string | null;
    stdout: string | null;
    stderr: string | null;
    compileOutput: string | null;
    status: string | null;
    memory: string | null;
    time: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type SubmissionCountAggregateOutputType = {
    id: number;
    userId: number;
    problemId: number;
    sourceCode: number;
    language: number;
    stdin: number;
    stdout: number;
    stderr: number;
    compileOutput: number;
    status: number;
    memory: number;
    time: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type SubmissionMinAggregateInputType = {
    id?: true;
    userId?: true;
    problemId?: true;
    language?: true;
    stdin?: true;
    stdout?: true;
    stderr?: true;
    compileOutput?: true;
    status?: true;
    memory?: true;
    time?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type SubmissionMaxAggregateInputType = {
    id?: true;
    userId?: true;
    problemId?: true;
    language?: true;
    stdin?: true;
    stdout?: true;
    stderr?: true;
    compileOutput?: true;
    status?: true;
    memory?: true;
    time?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type SubmissionCountAggregateInputType = {
    id?: true;
    userId?: true;
    problemId?: true;
    sourceCode?: true;
    language?: true;
    stdin?: true;
    stdout?: true;
    stderr?: true;
    compileOutput?: true;
    status?: true;
    memory?: true;
    time?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type SubmissionAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Submission to aggregate.
     */
    where?: SubmissionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Submissions to fetch.
     */
    orderBy?:
      | SubmissionOrderByWithRelationInput
      | SubmissionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: SubmissionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Submissions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Submissions
     **/
    _count?: true | SubmissionCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: SubmissionMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: SubmissionMaxAggregateInputType;
  };

  export type GetSubmissionAggregateType<T extends SubmissionAggregateArgs> = {
    [P in keyof T & keyof AggregateSubmission]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubmission[P]>
      : GetScalarType<T[P], AggregateSubmission[P]>;
  };

  export type SubmissionGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: SubmissionWhereInput;
    orderBy?:
      | SubmissionOrderByWithAggregationInput
      | SubmissionOrderByWithAggregationInput[];
    by: SubmissionScalarFieldEnum[] | SubmissionScalarFieldEnum;
    having?: SubmissionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SubmissionCountAggregateInputType | true;
    _min?: SubmissionMinAggregateInputType;
    _max?: SubmissionMaxAggregateInputType;
  };

  export type SubmissionGroupByOutputType = {
    id: string;
    userId: string;
    problemId: string;
    sourceCode: JsonValue;
    language: string;
    stdin: string | null;
    stdout: string | null;
    stderr: string | null;
    compileOutput: string | null;
    status: string;
    memory: string | null;
    time: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: SubmissionCountAggregateOutputType | null;
    _min: SubmissionMinAggregateOutputType | null;
    _max: SubmissionMaxAggregateOutputType | null;
  };

  type GetSubmissionGroupByPayload<T extends SubmissionGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<SubmissionGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof SubmissionGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubmissionGroupByOutputType[P]>
            : GetScalarType<T[P], SubmissionGroupByOutputType[P]>;
        }
      >
    >;

  export type SubmissionSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      problemId?: boolean;
      sourceCode?: boolean;
      language?: boolean;
      stdin?: boolean;
      stdout?: boolean;
      stderr?: boolean;
      compileOutput?: boolean;
      status?: boolean;
      memory?: boolean;
      time?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      problem?: boolean | ProblemDefaultArgs<ExtArgs>;
      testcase?: boolean | Submission$testcaseArgs<ExtArgs>;
      _count?: boolean | SubmissionCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["submission"]
  >;

  export type SubmissionSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      problemId?: boolean;
      sourceCode?: boolean;
      language?: boolean;
      stdin?: boolean;
      stdout?: boolean;
      stderr?: boolean;
      compileOutput?: boolean;
      status?: boolean;
      memory?: boolean;
      time?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      problem?: boolean | ProblemDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["submission"]
  >;

  export type SubmissionSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      problemId?: boolean;
      sourceCode?: boolean;
      language?: boolean;
      stdin?: boolean;
      stdout?: boolean;
      stderr?: boolean;
      compileOutput?: boolean;
      status?: boolean;
      memory?: boolean;
      time?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      problem?: boolean | ProblemDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["submission"]
  >;

  export type SubmissionSelectScalar = {
    id?: boolean;
    userId?: boolean;
    problemId?: boolean;
    sourceCode?: boolean;
    language?: boolean;
    stdin?: boolean;
    stdout?: boolean;
    stderr?: boolean;
    compileOutput?: boolean;
    status?: boolean;
    memory?: boolean;
    time?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type SubmissionOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | "id"
    | "userId"
    | "problemId"
    | "sourceCode"
    | "language"
    | "stdin"
    | "stdout"
    | "stderr"
    | "compileOutput"
    | "status"
    | "memory"
    | "time"
    | "createdAt"
    | "updatedAt",
    ExtArgs["result"]["submission"]
  >;
  export type SubmissionInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    problem?: boolean | ProblemDefaultArgs<ExtArgs>;
    testcase?: boolean | Submission$testcaseArgs<ExtArgs>;
    _count?: boolean | SubmissionCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type SubmissionIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    problem?: boolean | ProblemDefaultArgs<ExtArgs>;
  };
  export type SubmissionIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    problem?: boolean | ProblemDefaultArgs<ExtArgs>;
  };

  export type $SubmissionPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "Submission";
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
      problem: Prisma.$ProblemPayload<ExtArgs>;
      testcase: Prisma.$TestCasePayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        userId: string;
        problemId: string;
        sourceCode: Prisma.JsonValue;
        language: string;
        stdin: string | null;
        stdout: string | null;
        stderr: string | null;
        compileOutput: string | null;
        status: string;
        memory: string | null;
        time: string | null;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs["result"]["submission"]
    >;
    composites: {};
  };

  type SubmissionGetPayload<
    S extends boolean | null | undefined | SubmissionDefaultArgs,
  > = $Result.GetResult<Prisma.$SubmissionPayload, S>;

  type SubmissionCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    SubmissionFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: SubmissionCountAggregateInputType | true;
  };

  export interface SubmissionDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Submission"];
      meta: { name: "Submission" };
    };
    /**
     * Find zero or one Submission that matches the filter.
     * @param {SubmissionFindUniqueArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubmissionFindUniqueArgs>(
      args: SelectSubset<T, SubmissionFindUniqueArgs<ExtArgs>>
    ): Prisma__SubmissionClient<
      $Result.GetResult<
        Prisma.$SubmissionPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Submission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubmissionFindUniqueOrThrowArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubmissionFindUniqueOrThrowArgs>(
      args: SelectSubset<T, SubmissionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SubmissionClient<
      $Result.GetResult<
        Prisma.$SubmissionPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Submission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindFirstArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubmissionFindFirstArgs>(
      args?: SelectSubset<T, SubmissionFindFirstArgs<ExtArgs>>
    ): Prisma__SubmissionClient<
      $Result.GetResult<
        Prisma.$SubmissionPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Submission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindFirstOrThrowArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubmissionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, SubmissionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SubmissionClient<
      $Result.GetResult<
        Prisma.$SubmissionPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Submissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Submissions
     * const submissions = await prisma.submission.findMany()
     *
     * // Get first 10 Submissions
     * const submissions = await prisma.submission.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const submissionWithIdOnly = await prisma.submission.findMany({ select: { id: true } })
     *
     */
    findMany<T extends SubmissionFindManyArgs>(
      args?: SelectSubset<T, SubmissionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$SubmissionPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Submission.
     * @param {SubmissionCreateArgs} args - Arguments to create a Submission.
     * @example
     * // Create one Submission
     * const Submission = await prisma.submission.create({
     *   data: {
     *     // ... data to create a Submission
     *   }
     * })
     *
     */
    create<T extends SubmissionCreateArgs>(
      args: SelectSubset<T, SubmissionCreateArgs<ExtArgs>>
    ): Prisma__SubmissionClient<
      $Result.GetResult<
        Prisma.$SubmissionPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Submissions.
     * @param {SubmissionCreateManyArgs} args - Arguments to create many Submissions.
     * @example
     * // Create many Submissions
     * const submission = await prisma.submission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends SubmissionCreateManyArgs>(
      args?: SelectSubset<T, SubmissionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Submissions and returns the data saved in the database.
     * @param {SubmissionCreateManyAndReturnArgs} args - Arguments to create many Submissions.
     * @example
     * // Create many Submissions
     * const submission = await prisma.submission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Submissions and only return the `id`
     * const submissionWithIdOnly = await prisma.submission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends SubmissionCreateManyAndReturnArgs>(
      args?: SelectSubset<T, SubmissionCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$SubmissionPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Submission.
     * @param {SubmissionDeleteArgs} args - Arguments to delete one Submission.
     * @example
     * // Delete one Submission
     * const Submission = await prisma.submission.delete({
     *   where: {
     *     // ... filter to delete one Submission
     *   }
     * })
     *
     */
    delete<T extends SubmissionDeleteArgs>(
      args: SelectSubset<T, SubmissionDeleteArgs<ExtArgs>>
    ): Prisma__SubmissionClient<
      $Result.GetResult<
        Prisma.$SubmissionPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Submission.
     * @param {SubmissionUpdateArgs} args - Arguments to update one Submission.
     * @example
     * // Update one Submission
     * const submission = await prisma.submission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends SubmissionUpdateArgs>(
      args: SelectSubset<T, SubmissionUpdateArgs<ExtArgs>>
    ): Prisma__SubmissionClient<
      $Result.GetResult<
        Prisma.$SubmissionPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Submissions.
     * @param {SubmissionDeleteManyArgs} args - Arguments to filter Submissions to delete.
     * @example
     * // Delete a few Submissions
     * const { count } = await prisma.submission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends SubmissionDeleteManyArgs>(
      args?: SelectSubset<T, SubmissionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Submissions
     * const submission = await prisma.submission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends SubmissionUpdateManyArgs>(
      args: SelectSubset<T, SubmissionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Submissions and returns the data updated in the database.
     * @param {SubmissionUpdateManyAndReturnArgs} args - Arguments to update many Submissions.
     * @example
     * // Update many Submissions
     * const submission = await prisma.submission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Submissions and only return the `id`
     * const submissionWithIdOnly = await prisma.submission.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends SubmissionUpdateManyAndReturnArgs>(
      args: SelectSubset<T, SubmissionUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$SubmissionPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Submission.
     * @param {SubmissionUpsertArgs} args - Arguments to update or create a Submission.
     * @example
     * // Update or create a Submission
     * const submission = await prisma.submission.upsert({
     *   create: {
     *     // ... data to create a Submission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Submission we want to update
     *   }
     * })
     */
    upsert<T extends SubmissionUpsertArgs>(
      args: SelectSubset<T, SubmissionUpsertArgs<ExtArgs>>
    ): Prisma__SubmissionClient<
      $Result.GetResult<
        Prisma.$SubmissionPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionCountArgs} args - Arguments to filter Submissions to count.
     * @example
     * // Count the number of Submissions
     * const count = await prisma.submission.count({
     *   where: {
     *     // ... the filter for the Submissions we want to count
     *   }
     * })
     **/
    count<T extends SubmissionCountArgs>(
      args?: Subset<T, SubmissionCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], SubmissionCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Submission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends SubmissionAggregateArgs>(
      args: Subset<T, SubmissionAggregateArgs>
    ): Prisma.PrismaPromise<GetSubmissionAggregateType<T>>;

    /**
     * Group by Submission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends SubmissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubmissionGroupByArgs["orderBy"] }
        : { orderBy?: SubmissionGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, SubmissionGroupByArgs, OrderByArg> &
        InputErrors
    ): {} extends InputErrors
      ? GetSubmissionGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Submission model
     */
    readonly fields: SubmissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Submission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubmissionClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    problem<T extends ProblemDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, ProblemDefaultArgs<ExtArgs>>
    ): Prisma__ProblemClient<
      | $Result.GetResult<
          Prisma.$ProblemPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    testcase<T extends Submission$testcaseArgs<ExtArgs> = {}>(
      args?: Subset<T, Submission$testcaseArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$TestCasePayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Submission model
   */
  interface SubmissionFieldRefs {
    readonly id: FieldRef<"Submission", "String">;
    readonly userId: FieldRef<"Submission", "String">;
    readonly problemId: FieldRef<"Submission", "String">;
    readonly sourceCode: FieldRef<"Submission", "Json">;
    readonly language: FieldRef<"Submission", "String">;
    readonly stdin: FieldRef<"Submission", "String">;
    readonly stdout: FieldRef<"Submission", "String">;
    readonly stderr: FieldRef<"Submission", "String">;
    readonly compileOutput: FieldRef<"Submission", "String">;
    readonly status: FieldRef<"Submission", "String">;
    readonly memory: FieldRef<"Submission", "String">;
    readonly time: FieldRef<"Submission", "String">;
    readonly createdAt: FieldRef<"Submission", "DateTime">;
    readonly updatedAt: FieldRef<"Submission", "DateTime">;
  }

  // Custom InputTypes
  /**
   * Submission findUnique
   */
  export type SubmissionFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null;
    /**
     * Filter, which Submission to fetch.
     */
    where: SubmissionWhereUniqueInput;
  };

  /**
   * Submission findUniqueOrThrow
   */
  export type SubmissionFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null;
    /**
     * Filter, which Submission to fetch.
     */
    where: SubmissionWhereUniqueInput;
  };

  /**
   * Submission findFirst
   */
  export type SubmissionFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null;
    /**
     * Filter, which Submission to fetch.
     */
    where?: SubmissionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Submissions to fetch.
     */
    orderBy?:
      | SubmissionOrderByWithRelationInput
      | SubmissionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Submissions.
     */
    cursor?: SubmissionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Submissions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Submissions.
     */
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[];
  };

  /**
   * Submission findFirstOrThrow
   */
  export type SubmissionFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null;
    /**
     * Filter, which Submission to fetch.
     */
    where?: SubmissionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Submissions to fetch.
     */
    orderBy?:
      | SubmissionOrderByWithRelationInput
      | SubmissionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Submissions.
     */
    cursor?: SubmissionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Submissions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Submissions.
     */
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[];
  };

  /**
   * Submission findMany
   */
  export type SubmissionFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null;
    /**
     * Filter, which Submissions to fetch.
     */
    where?: SubmissionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Submissions to fetch.
     */
    orderBy?:
      | SubmissionOrderByWithRelationInput
      | SubmissionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Submissions.
     */
    cursor?: SubmissionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Submissions.
     */
    skip?: number;
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[];
  };

  /**
   * Submission create
   */
  export type SubmissionCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null;
    /**
     * The data needed to create a Submission.
     */
    data: XOR<SubmissionCreateInput, SubmissionUncheckedCreateInput>;
  };

  /**
   * Submission createMany
   */
  export type SubmissionCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Submissions.
     */
    data: SubmissionCreateManyInput | SubmissionCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Submission createManyAndReturn
   */
  export type SubmissionCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null;
    /**
     * The data used to create many Submissions.
     */
    data: SubmissionCreateManyInput | SubmissionCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Submission update
   */
  export type SubmissionUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null;
    /**
     * The data needed to update a Submission.
     */
    data: XOR<SubmissionUpdateInput, SubmissionUncheckedUpdateInput>;
    /**
     * Choose, which Submission to update.
     */
    where: SubmissionWhereUniqueInput;
  };

  /**
   * Submission updateMany
   */
  export type SubmissionUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Submissions.
     */
    data: XOR<
      SubmissionUpdateManyMutationInput,
      SubmissionUncheckedUpdateManyInput
    >;
    /**
     * Filter which Submissions to update
     */
    where?: SubmissionWhereInput;
    /**
     * Limit how many Submissions to update.
     */
    limit?: number;
  };

  /**
   * Submission updateManyAndReturn
   */
  export type SubmissionUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null;
    /**
     * The data used to update Submissions.
     */
    data: XOR<
      SubmissionUpdateManyMutationInput,
      SubmissionUncheckedUpdateManyInput
    >;
    /**
     * Filter which Submissions to update
     */
    where?: SubmissionWhereInput;
    /**
     * Limit how many Submissions to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Submission upsert
   */
  export type SubmissionUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null;
    /**
     * The filter to search for the Submission to update in case it exists.
     */
    where: SubmissionWhereUniqueInput;
    /**
     * In case the Submission found by the `where` argument doesn't exist, create a new Submission with this data.
     */
    create: XOR<SubmissionCreateInput, SubmissionUncheckedCreateInput>;
    /**
     * In case the Submission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubmissionUpdateInput, SubmissionUncheckedUpdateInput>;
  };

  /**
   * Submission delete
   */
  export type SubmissionDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null;
    /**
     * Filter which Submission to delete.
     */
    where: SubmissionWhereUniqueInput;
  };

  /**
   * Submission deleteMany
   */
  export type SubmissionDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Submissions to delete
     */
    where?: SubmissionWhereInput;
    /**
     * Limit how many Submissions to delete.
     */
    limit?: number;
  };

  /**
   * Submission.testcase
   */
  export type Submission$testcaseArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TestCase
     */
    select?: TestCaseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TestCase
     */
    omit?: TestCaseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseInclude<ExtArgs> | null;
    where?: TestCaseWhereInput;
    orderBy?:
      | TestCaseOrderByWithRelationInput
      | TestCaseOrderByWithRelationInput[];
    cursor?: TestCaseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: TestCaseScalarFieldEnum | TestCaseScalarFieldEnum[];
  };

  /**
   * Submission without action
   */
  export type SubmissionDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null;
  };

  /**
   * Model TestCase
   */

  export type AggregateTestCase = {
    _count: TestCaseCountAggregateOutputType | null;
    _min: TestCaseMinAggregateOutputType | null;
    _max: TestCaseMaxAggregateOutputType | null;
  };

  export type TestCaseMinAggregateOutputType = {
    id: string | null;
    submissionId: string | null;
    testCase: string | null;
    passed: boolean | null;
    stdout: string | null;
    expected: string | null;
    stderr: string | null;
    compileOutput: string | null;
    status: string | null;
    memory: string | null;
    time: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type TestCaseMaxAggregateOutputType = {
    id: string | null;
    submissionId: string | null;
    testCase: string | null;
    passed: boolean | null;
    stdout: string | null;
    expected: string | null;
    stderr: string | null;
    compileOutput: string | null;
    status: string | null;
    memory: string | null;
    time: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type TestCaseCountAggregateOutputType = {
    id: number;
    submissionId: number;
    testCase: number;
    passed: number;
    stdout: number;
    expected: number;
    stderr: number;
    compileOutput: number;
    status: number;
    memory: number;
    time: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type TestCaseMinAggregateInputType = {
    id?: true;
    submissionId?: true;
    testCase?: true;
    passed?: true;
    stdout?: true;
    expected?: true;
    stderr?: true;
    compileOutput?: true;
    status?: true;
    memory?: true;
    time?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type TestCaseMaxAggregateInputType = {
    id?: true;
    submissionId?: true;
    testCase?: true;
    passed?: true;
    stdout?: true;
    expected?: true;
    stderr?: true;
    compileOutput?: true;
    status?: true;
    memory?: true;
    time?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type TestCaseCountAggregateInputType = {
    id?: true;
    submissionId?: true;
    testCase?: true;
    passed?: true;
    stdout?: true;
    expected?: true;
    stderr?: true;
    compileOutput?: true;
    status?: true;
    memory?: true;
    time?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type TestCaseAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which TestCase to aggregate.
     */
    where?: TestCaseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TestCases to fetch.
     */
    orderBy?:
      | TestCaseOrderByWithRelationInput
      | TestCaseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: TestCaseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TestCases from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TestCases.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned TestCases
     **/
    _count?: true | TestCaseCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: TestCaseMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: TestCaseMaxAggregateInputType;
  };

  export type GetTestCaseAggregateType<T extends TestCaseAggregateArgs> = {
    [P in keyof T & keyof AggregateTestCase]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTestCase[P]>
      : GetScalarType<T[P], AggregateTestCase[P]>;
  };

  export type TestCaseGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: TestCaseWhereInput;
    orderBy?:
      | TestCaseOrderByWithAggregationInput
      | TestCaseOrderByWithAggregationInput[];
    by: TestCaseScalarFieldEnum[] | TestCaseScalarFieldEnum;
    having?: TestCaseScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TestCaseCountAggregateInputType | true;
    _min?: TestCaseMinAggregateInputType;
    _max?: TestCaseMaxAggregateInputType;
  };

  export type TestCaseGroupByOutputType = {
    id: string;
    submissionId: string;
    testCase: string;
    passed: boolean;
    stdout: string | null;
    expected: string;
    stderr: string | null;
    compileOutput: string | null;
    status: string;
    memory: string | null;
    time: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: TestCaseCountAggregateOutputType | null;
    _min: TestCaseMinAggregateOutputType | null;
    _max: TestCaseMaxAggregateOutputType | null;
  };

  type GetTestCaseGroupByPayload<T extends TestCaseGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<TestCaseGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof TestCaseGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestCaseGroupByOutputType[P]>
            : GetScalarType<T[P], TestCaseGroupByOutputType[P]>;
        }
      >
    >;

  export type TestCaseSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      submissionId?: boolean;
      testCase?: boolean;
      passed?: boolean;
      stdout?: boolean;
      expected?: boolean;
      stderr?: boolean;
      compileOutput?: boolean;
      status?: boolean;
      memory?: boolean;
      time?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      submission?: boolean | SubmissionDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["testCase"]
  >;

  export type TestCaseSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      submissionId?: boolean;
      testCase?: boolean;
      passed?: boolean;
      stdout?: boolean;
      expected?: boolean;
      stderr?: boolean;
      compileOutput?: boolean;
      status?: boolean;
      memory?: boolean;
      time?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      submission?: boolean | SubmissionDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["testCase"]
  >;

  export type TestCaseSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      submissionId?: boolean;
      testCase?: boolean;
      passed?: boolean;
      stdout?: boolean;
      expected?: boolean;
      stderr?: boolean;
      compileOutput?: boolean;
      status?: boolean;
      memory?: boolean;
      time?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      submission?: boolean | SubmissionDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["testCase"]
  >;

  export type TestCaseSelectScalar = {
    id?: boolean;
    submissionId?: boolean;
    testCase?: boolean;
    passed?: boolean;
    stdout?: boolean;
    expected?: boolean;
    stderr?: boolean;
    compileOutput?: boolean;
    status?: boolean;
    memory?: boolean;
    time?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type TestCaseOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | "id"
    | "submissionId"
    | "testCase"
    | "passed"
    | "stdout"
    | "expected"
    | "stderr"
    | "compileOutput"
    | "status"
    | "memory"
    | "time"
    | "createdAt"
    | "updatedAt",
    ExtArgs["result"]["testCase"]
  >;
  export type TestCaseInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    submission?: boolean | SubmissionDefaultArgs<ExtArgs>;
  };
  export type TestCaseIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    submission?: boolean | SubmissionDefaultArgs<ExtArgs>;
  };
  export type TestCaseIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    submission?: boolean | SubmissionDefaultArgs<ExtArgs>;
  };

  export type $TestCasePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "TestCase";
    objects: {
      submission: Prisma.$SubmissionPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        submissionId: string;
        testCase: string;
        passed: boolean;
        stdout: string | null;
        expected: string;
        stderr: string | null;
        compileOutput: string | null;
        status: string;
        memory: string | null;
        time: string | null;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs["result"]["testCase"]
    >;
    composites: {};
  };

  type TestCaseGetPayload<
    S extends boolean | null | undefined | TestCaseDefaultArgs,
  > = $Result.GetResult<Prisma.$TestCasePayload, S>;

  type TestCaseCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<TestCaseFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: TestCaseCountAggregateInputType | true;
  };

  export interface TestCaseDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["TestCase"];
      meta: { name: "TestCase" };
    };
    /**
     * Find zero or one TestCase that matches the filter.
     * @param {TestCaseFindUniqueArgs} args - Arguments to find a TestCase
     * @example
     * // Get one TestCase
     * const testCase = await prisma.testCase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TestCaseFindUniqueArgs>(
      args: SelectSubset<T, TestCaseFindUniqueArgs<ExtArgs>>
    ): Prisma__TestCaseClient<
      $Result.GetResult<
        Prisma.$TestCasePayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one TestCase that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TestCaseFindUniqueOrThrowArgs} args - Arguments to find a TestCase
     * @example
     * // Get one TestCase
     * const testCase = await prisma.testCase.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TestCaseFindUniqueOrThrowArgs>(
      args: SelectSubset<T, TestCaseFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TestCaseClient<
      $Result.GetResult<
        Prisma.$TestCasePayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first TestCase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCaseFindFirstArgs} args - Arguments to find a TestCase
     * @example
     * // Get one TestCase
     * const testCase = await prisma.testCase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TestCaseFindFirstArgs>(
      args?: SelectSubset<T, TestCaseFindFirstArgs<ExtArgs>>
    ): Prisma__TestCaseClient<
      $Result.GetResult<
        Prisma.$TestCasePayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first TestCase that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCaseFindFirstOrThrowArgs} args - Arguments to find a TestCase
     * @example
     * // Get one TestCase
     * const testCase = await prisma.testCase.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TestCaseFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TestCaseFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TestCaseClient<
      $Result.GetResult<
        Prisma.$TestCasePayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more TestCases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TestCases
     * const testCases = await prisma.testCase.findMany()
     *
     * // Get first 10 TestCases
     * const testCases = await prisma.testCase.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const testCaseWithIdOnly = await prisma.testCase.findMany({ select: { id: true } })
     *
     */
    findMany<T extends TestCaseFindManyArgs>(
      args?: SelectSubset<T, TestCaseFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$TestCasePayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a TestCase.
     * @param {TestCaseCreateArgs} args - Arguments to create a TestCase.
     * @example
     * // Create one TestCase
     * const TestCase = await prisma.testCase.create({
     *   data: {
     *     // ... data to create a TestCase
     *   }
     * })
     *
     */
    create<T extends TestCaseCreateArgs>(
      args: SelectSubset<T, TestCaseCreateArgs<ExtArgs>>
    ): Prisma__TestCaseClient<
      $Result.GetResult<
        Prisma.$TestCasePayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many TestCases.
     * @param {TestCaseCreateManyArgs} args - Arguments to create many TestCases.
     * @example
     * // Create many TestCases
     * const testCase = await prisma.testCase.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends TestCaseCreateManyArgs>(
      args?: SelectSubset<T, TestCaseCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many TestCases and returns the data saved in the database.
     * @param {TestCaseCreateManyAndReturnArgs} args - Arguments to create many TestCases.
     * @example
     * // Create many TestCases
     * const testCase = await prisma.testCase.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many TestCases and only return the `id`
     * const testCaseWithIdOnly = await prisma.testCase.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends TestCaseCreateManyAndReturnArgs>(
      args?: SelectSubset<T, TestCaseCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$TestCasePayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a TestCase.
     * @param {TestCaseDeleteArgs} args - Arguments to delete one TestCase.
     * @example
     * // Delete one TestCase
     * const TestCase = await prisma.testCase.delete({
     *   where: {
     *     // ... filter to delete one TestCase
     *   }
     * })
     *
     */
    delete<T extends TestCaseDeleteArgs>(
      args: SelectSubset<T, TestCaseDeleteArgs<ExtArgs>>
    ): Prisma__TestCaseClient<
      $Result.GetResult<
        Prisma.$TestCasePayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one TestCase.
     * @param {TestCaseUpdateArgs} args - Arguments to update one TestCase.
     * @example
     * // Update one TestCase
     * const testCase = await prisma.testCase.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends TestCaseUpdateArgs>(
      args: SelectSubset<T, TestCaseUpdateArgs<ExtArgs>>
    ): Prisma__TestCaseClient<
      $Result.GetResult<
        Prisma.$TestCasePayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more TestCases.
     * @param {TestCaseDeleteManyArgs} args - Arguments to filter TestCases to delete.
     * @example
     * // Delete a few TestCases
     * const { count } = await prisma.testCase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends TestCaseDeleteManyArgs>(
      args?: SelectSubset<T, TestCaseDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more TestCases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TestCases
     * const testCase = await prisma.testCase.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends TestCaseUpdateManyArgs>(
      args: SelectSubset<T, TestCaseUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more TestCases and returns the data updated in the database.
     * @param {TestCaseUpdateManyAndReturnArgs} args - Arguments to update many TestCases.
     * @example
     * // Update many TestCases
     * const testCase = await prisma.testCase.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more TestCases and only return the `id`
     * const testCaseWithIdOnly = await prisma.testCase.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends TestCaseUpdateManyAndReturnArgs>(
      args: SelectSubset<T, TestCaseUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$TestCasePayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one TestCase.
     * @param {TestCaseUpsertArgs} args - Arguments to update or create a TestCase.
     * @example
     * // Update or create a TestCase
     * const testCase = await prisma.testCase.upsert({
     *   create: {
     *     // ... data to create a TestCase
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TestCase we want to update
     *   }
     * })
     */
    upsert<T extends TestCaseUpsertArgs>(
      args: SelectSubset<T, TestCaseUpsertArgs<ExtArgs>>
    ): Prisma__TestCaseClient<
      $Result.GetResult<
        Prisma.$TestCasePayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of TestCases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCaseCountArgs} args - Arguments to filter TestCases to count.
     * @example
     * // Count the number of TestCases
     * const count = await prisma.testCase.count({
     *   where: {
     *     // ... the filter for the TestCases we want to count
     *   }
     * })
     **/
    count<T extends TestCaseCountArgs>(
      args?: Subset<T, TestCaseCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], TestCaseCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a TestCase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends TestCaseAggregateArgs>(
      args: Subset<T, TestCaseAggregateArgs>
    ): Prisma.PrismaPromise<GetTestCaseAggregateType<T>>;

    /**
     * Group by TestCase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCaseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends TestCaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TestCaseGroupByArgs["orderBy"] }
        : { orderBy?: TestCaseGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, TestCaseGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetTestCaseGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the TestCase model
     */
    readonly fields: TestCaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TestCase.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TestCaseClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    submission<T extends SubmissionDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, SubmissionDefaultArgs<ExtArgs>>
    ): Prisma__SubmissionClient<
      | $Result.GetResult<
          Prisma.$SubmissionPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the TestCase model
   */
  interface TestCaseFieldRefs {
    readonly id: FieldRef<"TestCase", "String">;
    readonly submissionId: FieldRef<"TestCase", "String">;
    readonly testCase: FieldRef<"TestCase", "String">;
    readonly passed: FieldRef<"TestCase", "Boolean">;
    readonly stdout: FieldRef<"TestCase", "String">;
    readonly expected: FieldRef<"TestCase", "String">;
    readonly stderr: FieldRef<"TestCase", "String">;
    readonly compileOutput: FieldRef<"TestCase", "String">;
    readonly status: FieldRef<"TestCase", "String">;
    readonly memory: FieldRef<"TestCase", "String">;
    readonly time: FieldRef<"TestCase", "String">;
    readonly createdAt: FieldRef<"TestCase", "DateTime">;
    readonly updatedAt: FieldRef<"TestCase", "DateTime">;
  }

  // Custom InputTypes
  /**
   * TestCase findUnique
   */
  export type TestCaseFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TestCase
     */
    select?: TestCaseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TestCase
     */
    omit?: TestCaseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseInclude<ExtArgs> | null;
    /**
     * Filter, which TestCase to fetch.
     */
    where: TestCaseWhereUniqueInput;
  };

  /**
   * TestCase findUniqueOrThrow
   */
  export type TestCaseFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TestCase
     */
    select?: TestCaseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TestCase
     */
    omit?: TestCaseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseInclude<ExtArgs> | null;
    /**
     * Filter, which TestCase to fetch.
     */
    where: TestCaseWhereUniqueInput;
  };

  /**
   * TestCase findFirst
   */
  export type TestCaseFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TestCase
     */
    select?: TestCaseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TestCase
     */
    omit?: TestCaseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseInclude<ExtArgs> | null;
    /**
     * Filter, which TestCase to fetch.
     */
    where?: TestCaseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TestCases to fetch.
     */
    orderBy?:
      | TestCaseOrderByWithRelationInput
      | TestCaseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for TestCases.
     */
    cursor?: TestCaseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TestCases from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TestCases.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TestCases.
     */
    distinct?: TestCaseScalarFieldEnum | TestCaseScalarFieldEnum[];
  };

  /**
   * TestCase findFirstOrThrow
   */
  export type TestCaseFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TestCase
     */
    select?: TestCaseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TestCase
     */
    omit?: TestCaseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseInclude<ExtArgs> | null;
    /**
     * Filter, which TestCase to fetch.
     */
    where?: TestCaseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TestCases to fetch.
     */
    orderBy?:
      | TestCaseOrderByWithRelationInput
      | TestCaseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for TestCases.
     */
    cursor?: TestCaseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TestCases from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TestCases.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TestCases.
     */
    distinct?: TestCaseScalarFieldEnum | TestCaseScalarFieldEnum[];
  };

  /**
   * TestCase findMany
   */
  export type TestCaseFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TestCase
     */
    select?: TestCaseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TestCase
     */
    omit?: TestCaseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseInclude<ExtArgs> | null;
    /**
     * Filter, which TestCases to fetch.
     */
    where?: TestCaseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TestCases to fetch.
     */
    orderBy?:
      | TestCaseOrderByWithRelationInput
      | TestCaseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing TestCases.
     */
    cursor?: TestCaseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TestCases from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TestCases.
     */
    skip?: number;
    distinct?: TestCaseScalarFieldEnum | TestCaseScalarFieldEnum[];
  };

  /**
   * TestCase create
   */
  export type TestCaseCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TestCase
     */
    select?: TestCaseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TestCase
     */
    omit?: TestCaseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseInclude<ExtArgs> | null;
    /**
     * The data needed to create a TestCase.
     */
    data: XOR<TestCaseCreateInput, TestCaseUncheckedCreateInput>;
  };

  /**
   * TestCase createMany
   */
  export type TestCaseCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many TestCases.
     */
    data: TestCaseCreateManyInput | TestCaseCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * TestCase createManyAndReturn
   */
  export type TestCaseCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TestCase
     */
    select?: TestCaseSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the TestCase
     */
    omit?: TestCaseOmit<ExtArgs> | null;
    /**
     * The data used to create many TestCases.
     */
    data: TestCaseCreateManyInput | TestCaseCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * TestCase update
   */
  export type TestCaseUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TestCase
     */
    select?: TestCaseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TestCase
     */
    omit?: TestCaseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseInclude<ExtArgs> | null;
    /**
     * The data needed to update a TestCase.
     */
    data: XOR<TestCaseUpdateInput, TestCaseUncheckedUpdateInput>;
    /**
     * Choose, which TestCase to update.
     */
    where: TestCaseWhereUniqueInput;
  };

  /**
   * TestCase updateMany
   */
  export type TestCaseUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update TestCases.
     */
    data: XOR<
      TestCaseUpdateManyMutationInput,
      TestCaseUncheckedUpdateManyInput
    >;
    /**
     * Filter which TestCases to update
     */
    where?: TestCaseWhereInput;
    /**
     * Limit how many TestCases to update.
     */
    limit?: number;
  };

  /**
   * TestCase updateManyAndReturn
   */
  export type TestCaseUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TestCase
     */
    select?: TestCaseSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the TestCase
     */
    omit?: TestCaseOmit<ExtArgs> | null;
    /**
     * The data used to update TestCases.
     */
    data: XOR<
      TestCaseUpdateManyMutationInput,
      TestCaseUncheckedUpdateManyInput
    >;
    /**
     * Filter which TestCases to update
     */
    where?: TestCaseWhereInput;
    /**
     * Limit how many TestCases to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * TestCase upsert
   */
  export type TestCaseUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TestCase
     */
    select?: TestCaseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TestCase
     */
    omit?: TestCaseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseInclude<ExtArgs> | null;
    /**
     * The filter to search for the TestCase to update in case it exists.
     */
    where: TestCaseWhereUniqueInput;
    /**
     * In case the TestCase found by the `where` argument doesn't exist, create a new TestCase with this data.
     */
    create: XOR<TestCaseCreateInput, TestCaseUncheckedCreateInput>;
    /**
     * In case the TestCase was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TestCaseUpdateInput, TestCaseUncheckedUpdateInput>;
  };

  /**
   * TestCase delete
   */
  export type TestCaseDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TestCase
     */
    select?: TestCaseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TestCase
     */
    omit?: TestCaseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseInclude<ExtArgs> | null;
    /**
     * Filter which TestCase to delete.
     */
    where: TestCaseWhereUniqueInput;
  };

  /**
   * TestCase deleteMany
   */
  export type TestCaseDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which TestCases to delete
     */
    where?: TestCaseWhereInput;
    /**
     * Limit how many TestCases to delete.
     */
    limit?: number;
  };

  /**
   * TestCase without action
   */
  export type TestCaseDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TestCase
     */
    select?: TestCaseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TestCase
     */
    omit?: TestCaseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseInclude<ExtArgs> | null;
  };

  /**
   * Model ProblemSolved
   */

  export type AggregateProblemSolved = {
    _count: ProblemSolvedCountAggregateOutputType | null;
    _min: ProblemSolvedMinAggregateOutputType | null;
    _max: ProblemSolvedMaxAggregateOutputType | null;
  };

  export type ProblemSolvedMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    problemId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type ProblemSolvedMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    problemId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type ProblemSolvedCountAggregateOutputType = {
    id: number;
    userId: number;
    problemId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type ProblemSolvedMinAggregateInputType = {
    id?: true;
    userId?: true;
    problemId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type ProblemSolvedMaxAggregateInputType = {
    id?: true;
    userId?: true;
    problemId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type ProblemSolvedCountAggregateInputType = {
    id?: true;
    userId?: true;
    problemId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type ProblemSolvedAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which ProblemSolved to aggregate.
     */
    where?: ProblemSolvedWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProblemSolveds to fetch.
     */
    orderBy?:
      | ProblemSolvedOrderByWithRelationInput
      | ProblemSolvedOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ProblemSolvedWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProblemSolveds from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProblemSolveds.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ProblemSolveds
     **/
    _count?: true | ProblemSolvedCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ProblemSolvedMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ProblemSolvedMaxAggregateInputType;
  };

  export type GetProblemSolvedAggregateType<
    T extends ProblemSolvedAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateProblemSolved]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProblemSolved[P]>
      : GetScalarType<T[P], AggregateProblemSolved[P]>;
  };

  export type ProblemSolvedGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ProblemSolvedWhereInput;
    orderBy?:
      | ProblemSolvedOrderByWithAggregationInput
      | ProblemSolvedOrderByWithAggregationInput[];
    by: ProblemSolvedScalarFieldEnum[] | ProblemSolvedScalarFieldEnum;
    having?: ProblemSolvedScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProblemSolvedCountAggregateInputType | true;
    _min?: ProblemSolvedMinAggregateInputType;
    _max?: ProblemSolvedMaxAggregateInputType;
  };

  export type ProblemSolvedGroupByOutputType = {
    id: string;
    userId: string;
    problemId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: ProblemSolvedCountAggregateOutputType | null;
    _min: ProblemSolvedMinAggregateOutputType | null;
    _max: ProblemSolvedMaxAggregateOutputType | null;
  };

  type GetProblemSolvedGroupByPayload<T extends ProblemSolvedGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<ProblemSolvedGroupByOutputType, T["by"]> & {
          [P in keyof T &
            keyof ProblemSolvedGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProblemSolvedGroupByOutputType[P]>
            : GetScalarType<T[P], ProblemSolvedGroupByOutputType[P]>;
        }
      >
    >;

  export type ProblemSolvedSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      problemId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      problem?: boolean | ProblemDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["problemSolved"]
  >;

  export type ProblemSolvedSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      problemId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      problem?: boolean | ProblemDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["problemSolved"]
  >;

  export type ProblemSolvedSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      problemId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      problem?: boolean | ProblemDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["problemSolved"]
  >;

  export type ProblemSolvedSelectScalar = {
    id?: boolean;
    userId?: boolean;
    problemId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type ProblemSolvedOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    "id" | "userId" | "problemId" | "createdAt" | "updatedAt",
    ExtArgs["result"]["problemSolved"]
  >;
  export type ProblemSolvedInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    problem?: boolean | ProblemDefaultArgs<ExtArgs>;
  };
  export type ProblemSolvedIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    problem?: boolean | ProblemDefaultArgs<ExtArgs>;
  };
  export type ProblemSolvedIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    problem?: boolean | ProblemDefaultArgs<ExtArgs>;
  };

  export type $ProblemSolvedPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "ProblemSolved";
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
      problem: Prisma.$ProblemPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        userId: string;
        problemId: string;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs["result"]["problemSolved"]
    >;
    composites: {};
  };

  type ProblemSolvedGetPayload<
    S extends boolean | null | undefined | ProblemSolvedDefaultArgs,
  > = $Result.GetResult<Prisma.$ProblemSolvedPayload, S>;

  type ProblemSolvedCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    ProblemSolvedFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: ProblemSolvedCountAggregateInputType | true;
  };

  export interface ProblemSolvedDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["ProblemSolved"];
      meta: { name: "ProblemSolved" };
    };
    /**
     * Find zero or one ProblemSolved that matches the filter.
     * @param {ProblemSolvedFindUniqueArgs} args - Arguments to find a ProblemSolved
     * @example
     * // Get one ProblemSolved
     * const problemSolved = await prisma.problemSolved.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProblemSolvedFindUniqueArgs>(
      args: SelectSubset<T, ProblemSolvedFindUniqueArgs<ExtArgs>>
    ): Prisma__ProblemSolvedClient<
      $Result.GetResult<
        Prisma.$ProblemSolvedPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one ProblemSolved that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProblemSolvedFindUniqueOrThrowArgs} args - Arguments to find a ProblemSolved
     * @example
     * // Get one ProblemSolved
     * const problemSolved = await prisma.problemSolved.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProblemSolvedFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ProblemSolvedFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProblemSolvedClient<
      $Result.GetResult<
        Prisma.$ProblemSolvedPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first ProblemSolved that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemSolvedFindFirstArgs} args - Arguments to find a ProblemSolved
     * @example
     * // Get one ProblemSolved
     * const problemSolved = await prisma.problemSolved.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProblemSolvedFindFirstArgs>(
      args?: SelectSubset<T, ProblemSolvedFindFirstArgs<ExtArgs>>
    ): Prisma__ProblemSolvedClient<
      $Result.GetResult<
        Prisma.$ProblemSolvedPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first ProblemSolved that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemSolvedFindFirstOrThrowArgs} args - Arguments to find a ProblemSolved
     * @example
     * // Get one ProblemSolved
     * const problemSolved = await prisma.problemSolved.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProblemSolvedFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ProblemSolvedFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProblemSolvedClient<
      $Result.GetResult<
        Prisma.$ProblemSolvedPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more ProblemSolveds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemSolvedFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProblemSolveds
     * const problemSolveds = await prisma.problemSolved.findMany()
     *
     * // Get first 10 ProblemSolveds
     * const problemSolveds = await prisma.problemSolved.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const problemSolvedWithIdOnly = await prisma.problemSolved.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ProblemSolvedFindManyArgs>(
      args?: SelectSubset<T, ProblemSolvedFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ProblemSolvedPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a ProblemSolved.
     * @param {ProblemSolvedCreateArgs} args - Arguments to create a ProblemSolved.
     * @example
     * // Create one ProblemSolved
     * const ProblemSolved = await prisma.problemSolved.create({
     *   data: {
     *     // ... data to create a ProblemSolved
     *   }
     * })
     *
     */
    create<T extends ProblemSolvedCreateArgs>(
      args: SelectSubset<T, ProblemSolvedCreateArgs<ExtArgs>>
    ): Prisma__ProblemSolvedClient<
      $Result.GetResult<
        Prisma.$ProblemSolvedPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many ProblemSolveds.
     * @param {ProblemSolvedCreateManyArgs} args - Arguments to create many ProblemSolveds.
     * @example
     * // Create many ProblemSolveds
     * const problemSolved = await prisma.problemSolved.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ProblemSolvedCreateManyArgs>(
      args?: SelectSubset<T, ProblemSolvedCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many ProblemSolveds and returns the data saved in the database.
     * @param {ProblemSolvedCreateManyAndReturnArgs} args - Arguments to create many ProblemSolveds.
     * @example
     * // Create many ProblemSolveds
     * const problemSolved = await prisma.problemSolved.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ProblemSolveds and only return the `id`
     * const problemSolvedWithIdOnly = await prisma.problemSolved.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ProblemSolvedCreateManyAndReturnArgs>(
      args?: SelectSubset<T, ProblemSolvedCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ProblemSolvedPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a ProblemSolved.
     * @param {ProblemSolvedDeleteArgs} args - Arguments to delete one ProblemSolved.
     * @example
     * // Delete one ProblemSolved
     * const ProblemSolved = await prisma.problemSolved.delete({
     *   where: {
     *     // ... filter to delete one ProblemSolved
     *   }
     * })
     *
     */
    delete<T extends ProblemSolvedDeleteArgs>(
      args: SelectSubset<T, ProblemSolvedDeleteArgs<ExtArgs>>
    ): Prisma__ProblemSolvedClient<
      $Result.GetResult<
        Prisma.$ProblemSolvedPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one ProblemSolved.
     * @param {ProblemSolvedUpdateArgs} args - Arguments to update one ProblemSolved.
     * @example
     * // Update one ProblemSolved
     * const problemSolved = await prisma.problemSolved.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ProblemSolvedUpdateArgs>(
      args: SelectSubset<T, ProblemSolvedUpdateArgs<ExtArgs>>
    ): Prisma__ProblemSolvedClient<
      $Result.GetResult<
        Prisma.$ProblemSolvedPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more ProblemSolveds.
     * @param {ProblemSolvedDeleteManyArgs} args - Arguments to filter ProblemSolveds to delete.
     * @example
     * // Delete a few ProblemSolveds
     * const { count } = await prisma.problemSolved.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ProblemSolvedDeleteManyArgs>(
      args?: SelectSubset<T, ProblemSolvedDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more ProblemSolveds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemSolvedUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProblemSolveds
     * const problemSolved = await prisma.problemSolved.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ProblemSolvedUpdateManyArgs>(
      args: SelectSubset<T, ProblemSolvedUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more ProblemSolveds and returns the data updated in the database.
     * @param {ProblemSolvedUpdateManyAndReturnArgs} args - Arguments to update many ProblemSolveds.
     * @example
     * // Update many ProblemSolveds
     * const problemSolved = await prisma.problemSolved.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ProblemSolveds and only return the `id`
     * const problemSolvedWithIdOnly = await prisma.problemSolved.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends ProblemSolvedUpdateManyAndReturnArgs>(
      args: SelectSubset<T, ProblemSolvedUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ProblemSolvedPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one ProblemSolved.
     * @param {ProblemSolvedUpsertArgs} args - Arguments to update or create a ProblemSolved.
     * @example
     * // Update or create a ProblemSolved
     * const problemSolved = await prisma.problemSolved.upsert({
     *   create: {
     *     // ... data to create a ProblemSolved
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProblemSolved we want to update
     *   }
     * })
     */
    upsert<T extends ProblemSolvedUpsertArgs>(
      args: SelectSubset<T, ProblemSolvedUpsertArgs<ExtArgs>>
    ): Prisma__ProblemSolvedClient<
      $Result.GetResult<
        Prisma.$ProblemSolvedPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of ProblemSolveds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemSolvedCountArgs} args - Arguments to filter ProblemSolveds to count.
     * @example
     * // Count the number of ProblemSolveds
     * const count = await prisma.problemSolved.count({
     *   where: {
     *     // ... the filter for the ProblemSolveds we want to count
     *   }
     * })
     **/
    count<T extends ProblemSolvedCountArgs>(
      args?: Subset<T, ProblemSolvedCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], ProblemSolvedCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a ProblemSolved.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemSolvedAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ProblemSolvedAggregateArgs>(
      args: Subset<T, ProblemSolvedAggregateArgs>
    ): Prisma.PrismaPromise<GetProblemSolvedAggregateType<T>>;

    /**
     * Group by ProblemSolved.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemSolvedGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends ProblemSolvedGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProblemSolvedGroupByArgs["orderBy"] }
        : { orderBy?: ProblemSolvedGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, ProblemSolvedGroupByArgs, OrderByArg> &
        InputErrors
    ): {} extends InputErrors
      ? GetProblemSolvedGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ProblemSolved model
     */
    readonly fields: ProblemSolvedFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProblemSolved.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProblemSolvedClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    problem<T extends ProblemDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, ProblemDefaultArgs<ExtArgs>>
    ): Prisma__ProblemClient<
      | $Result.GetResult<
          Prisma.$ProblemPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the ProblemSolved model
   */
  interface ProblemSolvedFieldRefs {
    readonly id: FieldRef<"ProblemSolved", "String">;
    readonly userId: FieldRef<"ProblemSolved", "String">;
    readonly problemId: FieldRef<"ProblemSolved", "String">;
    readonly createdAt: FieldRef<"ProblemSolved", "DateTime">;
    readonly updatedAt: FieldRef<"ProblemSolved", "DateTime">;
  }

  // Custom InputTypes
  /**
   * ProblemSolved findUnique
   */
  export type ProblemSolvedFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProblemSolved
     */
    select?: ProblemSolvedSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProblemSolved
     */
    omit?: ProblemSolvedOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemSolvedInclude<ExtArgs> | null;
    /**
     * Filter, which ProblemSolved to fetch.
     */
    where: ProblemSolvedWhereUniqueInput;
  };

  /**
   * ProblemSolved findUniqueOrThrow
   */
  export type ProblemSolvedFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProblemSolved
     */
    select?: ProblemSolvedSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProblemSolved
     */
    omit?: ProblemSolvedOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemSolvedInclude<ExtArgs> | null;
    /**
     * Filter, which ProblemSolved to fetch.
     */
    where: ProblemSolvedWhereUniqueInput;
  };

  /**
   * ProblemSolved findFirst
   */
  export type ProblemSolvedFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProblemSolved
     */
    select?: ProblemSolvedSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProblemSolved
     */
    omit?: ProblemSolvedOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemSolvedInclude<ExtArgs> | null;
    /**
     * Filter, which ProblemSolved to fetch.
     */
    where?: ProblemSolvedWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProblemSolveds to fetch.
     */
    orderBy?:
      | ProblemSolvedOrderByWithRelationInput
      | ProblemSolvedOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ProblemSolveds.
     */
    cursor?: ProblemSolvedWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProblemSolveds from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProblemSolveds.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ProblemSolveds.
     */
    distinct?: ProblemSolvedScalarFieldEnum | ProblemSolvedScalarFieldEnum[];
  };

  /**
   * ProblemSolved findFirstOrThrow
   */
  export type ProblemSolvedFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProblemSolved
     */
    select?: ProblemSolvedSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProblemSolved
     */
    omit?: ProblemSolvedOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemSolvedInclude<ExtArgs> | null;
    /**
     * Filter, which ProblemSolved to fetch.
     */
    where?: ProblemSolvedWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProblemSolveds to fetch.
     */
    orderBy?:
      | ProblemSolvedOrderByWithRelationInput
      | ProblemSolvedOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ProblemSolveds.
     */
    cursor?: ProblemSolvedWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProblemSolveds from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProblemSolveds.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ProblemSolveds.
     */
    distinct?: ProblemSolvedScalarFieldEnum | ProblemSolvedScalarFieldEnum[];
  };

  /**
   * ProblemSolved findMany
   */
  export type ProblemSolvedFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProblemSolved
     */
    select?: ProblemSolvedSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProblemSolved
     */
    omit?: ProblemSolvedOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemSolvedInclude<ExtArgs> | null;
    /**
     * Filter, which ProblemSolveds to fetch.
     */
    where?: ProblemSolvedWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProblemSolveds to fetch.
     */
    orderBy?:
      | ProblemSolvedOrderByWithRelationInput
      | ProblemSolvedOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ProblemSolveds.
     */
    cursor?: ProblemSolvedWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProblemSolveds from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProblemSolveds.
     */
    skip?: number;
    distinct?: ProblemSolvedScalarFieldEnum | ProblemSolvedScalarFieldEnum[];
  };

  /**
   * ProblemSolved create
   */
  export type ProblemSolvedCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProblemSolved
     */
    select?: ProblemSolvedSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProblemSolved
     */
    omit?: ProblemSolvedOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemSolvedInclude<ExtArgs> | null;
    /**
     * The data needed to create a ProblemSolved.
     */
    data: XOR<ProblemSolvedCreateInput, ProblemSolvedUncheckedCreateInput>;
  };

  /**
   * ProblemSolved createMany
   */
  export type ProblemSolvedCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many ProblemSolveds.
     */
    data: ProblemSolvedCreateManyInput | ProblemSolvedCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * ProblemSolved createManyAndReturn
   */
  export type ProblemSolvedCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProblemSolved
     */
    select?: ProblemSolvedSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ProblemSolved
     */
    omit?: ProblemSolvedOmit<ExtArgs> | null;
    /**
     * The data used to create many ProblemSolveds.
     */
    data: ProblemSolvedCreateManyInput | ProblemSolvedCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemSolvedIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * ProblemSolved update
   */
  export type ProblemSolvedUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProblemSolved
     */
    select?: ProblemSolvedSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProblemSolved
     */
    omit?: ProblemSolvedOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemSolvedInclude<ExtArgs> | null;
    /**
     * The data needed to update a ProblemSolved.
     */
    data: XOR<ProblemSolvedUpdateInput, ProblemSolvedUncheckedUpdateInput>;
    /**
     * Choose, which ProblemSolved to update.
     */
    where: ProblemSolvedWhereUniqueInput;
  };

  /**
   * ProblemSolved updateMany
   */
  export type ProblemSolvedUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update ProblemSolveds.
     */
    data: XOR<
      ProblemSolvedUpdateManyMutationInput,
      ProblemSolvedUncheckedUpdateManyInput
    >;
    /**
     * Filter which ProblemSolveds to update
     */
    where?: ProblemSolvedWhereInput;
    /**
     * Limit how many ProblemSolveds to update.
     */
    limit?: number;
  };

  /**
   * ProblemSolved updateManyAndReturn
   */
  export type ProblemSolvedUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProblemSolved
     */
    select?: ProblemSolvedSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ProblemSolved
     */
    omit?: ProblemSolvedOmit<ExtArgs> | null;
    /**
     * The data used to update ProblemSolveds.
     */
    data: XOR<
      ProblemSolvedUpdateManyMutationInput,
      ProblemSolvedUncheckedUpdateManyInput
    >;
    /**
     * Filter which ProblemSolveds to update
     */
    where?: ProblemSolvedWhereInput;
    /**
     * Limit how many ProblemSolveds to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemSolvedIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * ProblemSolved upsert
   */
  export type ProblemSolvedUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProblemSolved
     */
    select?: ProblemSolvedSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProblemSolved
     */
    omit?: ProblemSolvedOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemSolvedInclude<ExtArgs> | null;
    /**
     * The filter to search for the ProblemSolved to update in case it exists.
     */
    where: ProblemSolvedWhereUniqueInput;
    /**
     * In case the ProblemSolved found by the `where` argument doesn't exist, create a new ProblemSolved with this data.
     */
    create: XOR<ProblemSolvedCreateInput, ProblemSolvedUncheckedCreateInput>;
    /**
     * In case the ProblemSolved was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProblemSolvedUpdateInput, ProblemSolvedUncheckedUpdateInput>;
  };

  /**
   * ProblemSolved delete
   */
  export type ProblemSolvedDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProblemSolved
     */
    select?: ProblemSolvedSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProblemSolved
     */
    omit?: ProblemSolvedOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemSolvedInclude<ExtArgs> | null;
    /**
     * Filter which ProblemSolved to delete.
     */
    where: ProblemSolvedWhereUniqueInput;
  };

  /**
   * ProblemSolved deleteMany
   */
  export type ProblemSolvedDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which ProblemSolveds to delete
     */
    where?: ProblemSolvedWhereInput;
    /**
     * Limit how many ProblemSolveds to delete.
     */
    limit?: number;
  };

  /**
   * ProblemSolved without action
   */
  export type ProblemSolvedDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProblemSolved
     */
    select?: ProblemSolvedSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProblemSolved
     */
    omit?: ProblemSolvedOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemSolvedInclude<ExtArgs> | null;
  };

  /**
   * Model Discussion
   */

  export type AggregateDiscussion = {
    _count: DiscussionCountAggregateOutputType | null;
    _min: DiscussionMinAggregateOutputType | null;
    _max: DiscussionMaxAggregateOutputType | null;
  };

  export type DiscussionMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    problemId: string | null;
    content: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    parentId: string | null;
  };

  export type DiscussionMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    problemId: string | null;
    content: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    parentId: string | null;
  };

  export type DiscussionCountAggregateOutputType = {
    id: number;
    userId: number;
    problemId: number;
    content: number;
    createdAt: number;
    updatedAt: number;
    parentId: number;
    _all: number;
  };

  export type DiscussionMinAggregateInputType = {
    id?: true;
    userId?: true;
    problemId?: true;
    content?: true;
    createdAt?: true;
    updatedAt?: true;
    parentId?: true;
  };

  export type DiscussionMaxAggregateInputType = {
    id?: true;
    userId?: true;
    problemId?: true;
    content?: true;
    createdAt?: true;
    updatedAt?: true;
    parentId?: true;
  };

  export type DiscussionCountAggregateInputType = {
    id?: true;
    userId?: true;
    problemId?: true;
    content?: true;
    createdAt?: true;
    updatedAt?: true;
    parentId?: true;
    _all?: true;
  };

  export type DiscussionAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Discussion to aggregate.
     */
    where?: DiscussionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Discussions to fetch.
     */
    orderBy?:
      | DiscussionOrderByWithRelationInput
      | DiscussionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: DiscussionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Discussions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Discussions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Discussions
     **/
    _count?: true | DiscussionCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: DiscussionMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: DiscussionMaxAggregateInputType;
  };

  export type GetDiscussionAggregateType<T extends DiscussionAggregateArgs> = {
    [P in keyof T & keyof AggregateDiscussion]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiscussion[P]>
      : GetScalarType<T[P], AggregateDiscussion[P]>;
  };

  export type DiscussionGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: DiscussionWhereInput;
    orderBy?:
      | DiscussionOrderByWithAggregationInput
      | DiscussionOrderByWithAggregationInput[];
    by: DiscussionScalarFieldEnum[] | DiscussionScalarFieldEnum;
    having?: DiscussionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DiscussionCountAggregateInputType | true;
    _min?: DiscussionMinAggregateInputType;
    _max?: DiscussionMaxAggregateInputType;
  };

  export type DiscussionGroupByOutputType = {
    id: string;
    userId: string;
    problemId: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    parentId: string | null;
    _count: DiscussionCountAggregateOutputType | null;
    _min: DiscussionMinAggregateOutputType | null;
    _max: DiscussionMaxAggregateOutputType | null;
  };

  type GetDiscussionGroupByPayload<T extends DiscussionGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<DiscussionGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof DiscussionGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiscussionGroupByOutputType[P]>
            : GetScalarType<T[P], DiscussionGroupByOutputType[P]>;
        }
      >
    >;

  export type DiscussionSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      problemId?: boolean;
      content?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      parentId?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      problem?: boolean | ProblemDefaultArgs<ExtArgs>;
      parent?: boolean | Discussion$parentArgs<ExtArgs>;
      replies?: boolean | Discussion$repliesArgs<ExtArgs>;
      _count?: boolean | DiscussionCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["discussion"]
  >;

  export type DiscussionSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      problemId?: boolean;
      content?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      parentId?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      problem?: boolean | ProblemDefaultArgs<ExtArgs>;
      parent?: boolean | Discussion$parentArgs<ExtArgs>;
    },
    ExtArgs["result"]["discussion"]
  >;

  export type DiscussionSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      problemId?: boolean;
      content?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      parentId?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      problem?: boolean | ProblemDefaultArgs<ExtArgs>;
      parent?: boolean | Discussion$parentArgs<ExtArgs>;
    },
    ExtArgs["result"]["discussion"]
  >;

  export type DiscussionSelectScalar = {
    id?: boolean;
    userId?: boolean;
    problemId?: boolean;
    content?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    parentId?: boolean;
  };

  export type DiscussionOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | "id"
    | "userId"
    | "problemId"
    | "content"
    | "createdAt"
    | "updatedAt"
    | "parentId",
    ExtArgs["result"]["discussion"]
  >;
  export type DiscussionInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    problem?: boolean | ProblemDefaultArgs<ExtArgs>;
    parent?: boolean | Discussion$parentArgs<ExtArgs>;
    replies?: boolean | Discussion$repliesArgs<ExtArgs>;
    _count?: boolean | DiscussionCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type DiscussionIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    problem?: boolean | ProblemDefaultArgs<ExtArgs>;
    parent?: boolean | Discussion$parentArgs<ExtArgs>;
  };
  export type DiscussionIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    problem?: boolean | ProblemDefaultArgs<ExtArgs>;
    parent?: boolean | Discussion$parentArgs<ExtArgs>;
  };

  export type $DiscussionPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "Discussion";
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
      problem: Prisma.$ProblemPayload<ExtArgs>;
      parent: Prisma.$DiscussionPayload<ExtArgs> | null;
      replies: Prisma.$DiscussionPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        userId: string;
        problemId: string;
        content: string;
        createdAt: Date;
        updatedAt: Date;
        parentId: string | null;
      },
      ExtArgs["result"]["discussion"]
    >;
    composites: {};
  };

  type DiscussionGetPayload<
    S extends boolean | null | undefined | DiscussionDefaultArgs,
  > = $Result.GetResult<Prisma.$DiscussionPayload, S>;

  type DiscussionCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    DiscussionFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: DiscussionCountAggregateInputType | true;
  };

  export interface DiscussionDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Discussion"];
      meta: { name: "Discussion" };
    };
    /**
     * Find zero or one Discussion that matches the filter.
     * @param {DiscussionFindUniqueArgs} args - Arguments to find a Discussion
     * @example
     * // Get one Discussion
     * const discussion = await prisma.discussion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DiscussionFindUniqueArgs>(
      args: SelectSubset<T, DiscussionFindUniqueArgs<ExtArgs>>
    ): Prisma__DiscussionClient<
      $Result.GetResult<
        Prisma.$DiscussionPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Discussion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DiscussionFindUniqueOrThrowArgs} args - Arguments to find a Discussion
     * @example
     * // Get one Discussion
     * const discussion = await prisma.discussion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DiscussionFindUniqueOrThrowArgs>(
      args: SelectSubset<T, DiscussionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DiscussionClient<
      $Result.GetResult<
        Prisma.$DiscussionPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Discussion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscussionFindFirstArgs} args - Arguments to find a Discussion
     * @example
     * // Get one Discussion
     * const discussion = await prisma.discussion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DiscussionFindFirstArgs>(
      args?: SelectSubset<T, DiscussionFindFirstArgs<ExtArgs>>
    ): Prisma__DiscussionClient<
      $Result.GetResult<
        Prisma.$DiscussionPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Discussion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscussionFindFirstOrThrowArgs} args - Arguments to find a Discussion
     * @example
     * // Get one Discussion
     * const discussion = await prisma.discussion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DiscussionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, DiscussionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DiscussionClient<
      $Result.GetResult<
        Prisma.$DiscussionPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Discussions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscussionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Discussions
     * const discussions = await prisma.discussion.findMany()
     *
     * // Get first 10 Discussions
     * const discussions = await prisma.discussion.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const discussionWithIdOnly = await prisma.discussion.findMany({ select: { id: true } })
     *
     */
    findMany<T extends DiscussionFindManyArgs>(
      args?: SelectSubset<T, DiscussionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$DiscussionPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Discussion.
     * @param {DiscussionCreateArgs} args - Arguments to create a Discussion.
     * @example
     * // Create one Discussion
     * const Discussion = await prisma.discussion.create({
     *   data: {
     *     // ... data to create a Discussion
     *   }
     * })
     *
     */
    create<T extends DiscussionCreateArgs>(
      args: SelectSubset<T, DiscussionCreateArgs<ExtArgs>>
    ): Prisma__DiscussionClient<
      $Result.GetResult<
        Prisma.$DiscussionPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Discussions.
     * @param {DiscussionCreateManyArgs} args - Arguments to create many Discussions.
     * @example
     * // Create many Discussions
     * const discussion = await prisma.discussion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends DiscussionCreateManyArgs>(
      args?: SelectSubset<T, DiscussionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Discussions and returns the data saved in the database.
     * @param {DiscussionCreateManyAndReturnArgs} args - Arguments to create many Discussions.
     * @example
     * // Create many Discussions
     * const discussion = await prisma.discussion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Discussions and only return the `id`
     * const discussionWithIdOnly = await prisma.discussion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends DiscussionCreateManyAndReturnArgs>(
      args?: SelectSubset<T, DiscussionCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$DiscussionPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Discussion.
     * @param {DiscussionDeleteArgs} args - Arguments to delete one Discussion.
     * @example
     * // Delete one Discussion
     * const Discussion = await prisma.discussion.delete({
     *   where: {
     *     // ... filter to delete one Discussion
     *   }
     * })
     *
     */
    delete<T extends DiscussionDeleteArgs>(
      args: SelectSubset<T, DiscussionDeleteArgs<ExtArgs>>
    ): Prisma__DiscussionClient<
      $Result.GetResult<
        Prisma.$DiscussionPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Discussion.
     * @param {DiscussionUpdateArgs} args - Arguments to update one Discussion.
     * @example
     * // Update one Discussion
     * const discussion = await prisma.discussion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends DiscussionUpdateArgs>(
      args: SelectSubset<T, DiscussionUpdateArgs<ExtArgs>>
    ): Prisma__DiscussionClient<
      $Result.GetResult<
        Prisma.$DiscussionPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Discussions.
     * @param {DiscussionDeleteManyArgs} args - Arguments to filter Discussions to delete.
     * @example
     * // Delete a few Discussions
     * const { count } = await prisma.discussion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends DiscussionDeleteManyArgs>(
      args?: SelectSubset<T, DiscussionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Discussions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscussionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Discussions
     * const discussion = await prisma.discussion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends DiscussionUpdateManyArgs>(
      args: SelectSubset<T, DiscussionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Discussions and returns the data updated in the database.
     * @param {DiscussionUpdateManyAndReturnArgs} args - Arguments to update many Discussions.
     * @example
     * // Update many Discussions
     * const discussion = await prisma.discussion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Discussions and only return the `id`
     * const discussionWithIdOnly = await prisma.discussion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends DiscussionUpdateManyAndReturnArgs>(
      args: SelectSubset<T, DiscussionUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$DiscussionPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Discussion.
     * @param {DiscussionUpsertArgs} args - Arguments to update or create a Discussion.
     * @example
     * // Update or create a Discussion
     * const discussion = await prisma.discussion.upsert({
     *   create: {
     *     // ... data to create a Discussion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Discussion we want to update
     *   }
     * })
     */
    upsert<T extends DiscussionUpsertArgs>(
      args: SelectSubset<T, DiscussionUpsertArgs<ExtArgs>>
    ): Prisma__DiscussionClient<
      $Result.GetResult<
        Prisma.$DiscussionPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Discussions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscussionCountArgs} args - Arguments to filter Discussions to count.
     * @example
     * // Count the number of Discussions
     * const count = await prisma.discussion.count({
     *   where: {
     *     // ... the filter for the Discussions we want to count
     *   }
     * })
     **/
    count<T extends DiscussionCountArgs>(
      args?: Subset<T, DiscussionCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], DiscussionCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Discussion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscussionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends DiscussionAggregateArgs>(
      args: Subset<T, DiscussionAggregateArgs>
    ): Prisma.PrismaPromise<GetDiscussionAggregateType<T>>;

    /**
     * Group by Discussion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscussionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends DiscussionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DiscussionGroupByArgs["orderBy"] }
        : { orderBy?: DiscussionGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, DiscussionGroupByArgs, OrderByArg> &
        InputErrors
    ): {} extends InputErrors
      ? GetDiscussionGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Discussion model
     */
    readonly fields: DiscussionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Discussion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DiscussionClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    problem<T extends ProblemDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, ProblemDefaultArgs<ExtArgs>>
    ): Prisma__ProblemClient<
      | $Result.GetResult<
          Prisma.$ProblemPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    parent<T extends Discussion$parentArgs<ExtArgs> = {}>(
      args?: Subset<T, Discussion$parentArgs<ExtArgs>>
    ): Prisma__DiscussionClient<
      $Result.GetResult<
        Prisma.$DiscussionPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    replies<T extends Discussion$repliesArgs<ExtArgs> = {}>(
      args?: Subset<T, Discussion$repliesArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$DiscussionPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Discussion model
   */
  interface DiscussionFieldRefs {
    readonly id: FieldRef<"Discussion", "String">;
    readonly userId: FieldRef<"Discussion", "String">;
    readonly problemId: FieldRef<"Discussion", "String">;
    readonly content: FieldRef<"Discussion", "String">;
    readonly createdAt: FieldRef<"Discussion", "DateTime">;
    readonly updatedAt: FieldRef<"Discussion", "DateTime">;
    readonly parentId: FieldRef<"Discussion", "String">;
  }

  // Custom InputTypes
  /**
   * Discussion findUnique
   */
  export type DiscussionFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Discussion
     */
    select?: DiscussionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Discussion
     */
    omit?: DiscussionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionInclude<ExtArgs> | null;
    /**
     * Filter, which Discussion to fetch.
     */
    where: DiscussionWhereUniqueInput;
  };

  /**
   * Discussion findUniqueOrThrow
   */
  export type DiscussionFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Discussion
     */
    select?: DiscussionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Discussion
     */
    omit?: DiscussionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionInclude<ExtArgs> | null;
    /**
     * Filter, which Discussion to fetch.
     */
    where: DiscussionWhereUniqueInput;
  };

  /**
   * Discussion findFirst
   */
  export type DiscussionFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Discussion
     */
    select?: DiscussionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Discussion
     */
    omit?: DiscussionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionInclude<ExtArgs> | null;
    /**
     * Filter, which Discussion to fetch.
     */
    where?: DiscussionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Discussions to fetch.
     */
    orderBy?:
      | DiscussionOrderByWithRelationInput
      | DiscussionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Discussions.
     */
    cursor?: DiscussionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Discussions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Discussions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Discussions.
     */
    distinct?: DiscussionScalarFieldEnum | DiscussionScalarFieldEnum[];
  };

  /**
   * Discussion findFirstOrThrow
   */
  export type DiscussionFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Discussion
     */
    select?: DiscussionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Discussion
     */
    omit?: DiscussionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionInclude<ExtArgs> | null;
    /**
     * Filter, which Discussion to fetch.
     */
    where?: DiscussionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Discussions to fetch.
     */
    orderBy?:
      | DiscussionOrderByWithRelationInput
      | DiscussionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Discussions.
     */
    cursor?: DiscussionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Discussions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Discussions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Discussions.
     */
    distinct?: DiscussionScalarFieldEnum | DiscussionScalarFieldEnum[];
  };

  /**
   * Discussion findMany
   */
  export type DiscussionFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Discussion
     */
    select?: DiscussionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Discussion
     */
    omit?: DiscussionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionInclude<ExtArgs> | null;
    /**
     * Filter, which Discussions to fetch.
     */
    where?: DiscussionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Discussions to fetch.
     */
    orderBy?:
      | DiscussionOrderByWithRelationInput
      | DiscussionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Discussions.
     */
    cursor?: DiscussionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Discussions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Discussions.
     */
    skip?: number;
    distinct?: DiscussionScalarFieldEnum | DiscussionScalarFieldEnum[];
  };

  /**
   * Discussion create
   */
  export type DiscussionCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Discussion
     */
    select?: DiscussionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Discussion
     */
    omit?: DiscussionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionInclude<ExtArgs> | null;
    /**
     * The data needed to create a Discussion.
     */
    data: XOR<DiscussionCreateInput, DiscussionUncheckedCreateInput>;
  };

  /**
   * Discussion createMany
   */
  export type DiscussionCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Discussions.
     */
    data: DiscussionCreateManyInput | DiscussionCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Discussion createManyAndReturn
   */
  export type DiscussionCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Discussion
     */
    select?: DiscussionSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Discussion
     */
    omit?: DiscussionOmit<ExtArgs> | null;
    /**
     * The data used to create many Discussions.
     */
    data: DiscussionCreateManyInput | DiscussionCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Discussion update
   */
  export type DiscussionUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Discussion
     */
    select?: DiscussionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Discussion
     */
    omit?: DiscussionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionInclude<ExtArgs> | null;
    /**
     * The data needed to update a Discussion.
     */
    data: XOR<DiscussionUpdateInput, DiscussionUncheckedUpdateInput>;
    /**
     * Choose, which Discussion to update.
     */
    where: DiscussionWhereUniqueInput;
  };

  /**
   * Discussion updateMany
   */
  export type DiscussionUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Discussions.
     */
    data: XOR<
      DiscussionUpdateManyMutationInput,
      DiscussionUncheckedUpdateManyInput
    >;
    /**
     * Filter which Discussions to update
     */
    where?: DiscussionWhereInput;
    /**
     * Limit how many Discussions to update.
     */
    limit?: number;
  };

  /**
   * Discussion updateManyAndReturn
   */
  export type DiscussionUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Discussion
     */
    select?: DiscussionSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Discussion
     */
    omit?: DiscussionOmit<ExtArgs> | null;
    /**
     * The data used to update Discussions.
     */
    data: XOR<
      DiscussionUpdateManyMutationInput,
      DiscussionUncheckedUpdateManyInput
    >;
    /**
     * Filter which Discussions to update
     */
    where?: DiscussionWhereInput;
    /**
     * Limit how many Discussions to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Discussion upsert
   */
  export type DiscussionUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Discussion
     */
    select?: DiscussionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Discussion
     */
    omit?: DiscussionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionInclude<ExtArgs> | null;
    /**
     * The filter to search for the Discussion to update in case it exists.
     */
    where: DiscussionWhereUniqueInput;
    /**
     * In case the Discussion found by the `where` argument doesn't exist, create a new Discussion with this data.
     */
    create: XOR<DiscussionCreateInput, DiscussionUncheckedCreateInput>;
    /**
     * In case the Discussion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DiscussionUpdateInput, DiscussionUncheckedUpdateInput>;
  };

  /**
   * Discussion delete
   */
  export type DiscussionDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Discussion
     */
    select?: DiscussionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Discussion
     */
    omit?: DiscussionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionInclude<ExtArgs> | null;
    /**
     * Filter which Discussion to delete.
     */
    where: DiscussionWhereUniqueInput;
  };

  /**
   * Discussion deleteMany
   */
  export type DiscussionDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Discussions to delete
     */
    where?: DiscussionWhereInput;
    /**
     * Limit how many Discussions to delete.
     */
    limit?: number;
  };

  /**
   * Discussion.parent
   */
  export type Discussion$parentArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Discussion
     */
    select?: DiscussionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Discussion
     */
    omit?: DiscussionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionInclude<ExtArgs> | null;
    where?: DiscussionWhereInput;
  };

  /**
   * Discussion.replies
   */
  export type Discussion$repliesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Discussion
     */
    select?: DiscussionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Discussion
     */
    omit?: DiscussionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionInclude<ExtArgs> | null;
    where?: DiscussionWhereInput;
    orderBy?:
      | DiscussionOrderByWithRelationInput
      | DiscussionOrderByWithRelationInput[];
    cursor?: DiscussionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: DiscussionScalarFieldEnum | DiscussionScalarFieldEnum[];
  };

  /**
   * Discussion without action
   */
  export type DiscussionDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Discussion
     */
    select?: DiscussionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Discussion
     */
    omit?: DiscussionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionInclude<ExtArgs> | null;
  };

  /**
   * Model ProblemVote
   */

  export type AggregateProblemVote = {
    _count: ProblemVoteCountAggregateOutputType | null;
    _min: ProblemVoteMinAggregateOutputType | null;
    _max: ProblemVoteMaxAggregateOutputType | null;
  };

  export type ProblemVoteMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    problemId: string | null;
    type: $Enums.VoteType | null;
    createdAt: Date | null;
  };

  export type ProblemVoteMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    problemId: string | null;
    type: $Enums.VoteType | null;
    createdAt: Date | null;
  };

  export type ProblemVoteCountAggregateOutputType = {
    id: number;
    userId: number;
    problemId: number;
    type: number;
    createdAt: number;
    _all: number;
  };

  export type ProblemVoteMinAggregateInputType = {
    id?: true;
    userId?: true;
    problemId?: true;
    type?: true;
    createdAt?: true;
  };

  export type ProblemVoteMaxAggregateInputType = {
    id?: true;
    userId?: true;
    problemId?: true;
    type?: true;
    createdAt?: true;
  };

  export type ProblemVoteCountAggregateInputType = {
    id?: true;
    userId?: true;
    problemId?: true;
    type?: true;
    createdAt?: true;
    _all?: true;
  };

  export type ProblemVoteAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which ProblemVote to aggregate.
     */
    where?: ProblemVoteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProblemVotes to fetch.
     */
    orderBy?:
      | ProblemVoteOrderByWithRelationInput
      | ProblemVoteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ProblemVoteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProblemVotes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProblemVotes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ProblemVotes
     **/
    _count?: true | ProblemVoteCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ProblemVoteMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ProblemVoteMaxAggregateInputType;
  };

  export type GetProblemVoteAggregateType<T extends ProblemVoteAggregateArgs> =
    {
      [P in keyof T & keyof AggregateProblemVote]: P extends "_count" | "count"
        ? T[P] extends true
          ? number
          : GetScalarType<T[P], AggregateProblemVote[P]>
        : GetScalarType<T[P], AggregateProblemVote[P]>;
    };

  export type ProblemVoteGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ProblemVoteWhereInput;
    orderBy?:
      | ProblemVoteOrderByWithAggregationInput
      | ProblemVoteOrderByWithAggregationInput[];
    by: ProblemVoteScalarFieldEnum[] | ProblemVoteScalarFieldEnum;
    having?: ProblemVoteScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProblemVoteCountAggregateInputType | true;
    _min?: ProblemVoteMinAggregateInputType;
    _max?: ProblemVoteMaxAggregateInputType;
  };

  export type ProblemVoteGroupByOutputType = {
    id: string;
    userId: string;
    problemId: string;
    type: $Enums.VoteType;
    createdAt: Date;
    _count: ProblemVoteCountAggregateOutputType | null;
    _min: ProblemVoteMinAggregateOutputType | null;
    _max: ProblemVoteMaxAggregateOutputType | null;
  };

  type GetProblemVoteGroupByPayload<T extends ProblemVoteGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<ProblemVoteGroupByOutputType, T["by"]> & {
          [P in keyof T &
            keyof ProblemVoteGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProblemVoteGroupByOutputType[P]>
            : GetScalarType<T[P], ProblemVoteGroupByOutputType[P]>;
        }
      >
    >;

  export type ProblemVoteSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      problemId?: boolean;
      type?: boolean;
      createdAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      problem?: boolean | ProblemDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["problemVote"]
  >;

  export type ProblemVoteSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      problemId?: boolean;
      type?: boolean;
      createdAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      problem?: boolean | ProblemDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["problemVote"]
  >;

  export type ProblemVoteSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      problemId?: boolean;
      type?: boolean;
      createdAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      problem?: boolean | ProblemDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["problemVote"]
  >;

  export type ProblemVoteSelectScalar = {
    id?: boolean;
    userId?: boolean;
    problemId?: boolean;
    type?: boolean;
    createdAt?: boolean;
  };

  export type ProblemVoteOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    "id" | "userId" | "problemId" | "type" | "createdAt",
    ExtArgs["result"]["problemVote"]
  >;
  export type ProblemVoteInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    problem?: boolean | ProblemDefaultArgs<ExtArgs>;
  };
  export type ProblemVoteIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    problem?: boolean | ProblemDefaultArgs<ExtArgs>;
  };
  export type ProblemVoteIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    problem?: boolean | ProblemDefaultArgs<ExtArgs>;
  };

  export type $ProblemVotePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "ProblemVote";
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
      problem: Prisma.$ProblemPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        userId: string;
        problemId: string;
        type: $Enums.VoteType;
        createdAt: Date;
      },
      ExtArgs["result"]["problemVote"]
    >;
    composites: {};
  };

  type ProblemVoteGetPayload<
    S extends boolean | null | undefined | ProblemVoteDefaultArgs,
  > = $Result.GetResult<Prisma.$ProblemVotePayload, S>;

  type ProblemVoteCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    ProblemVoteFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: ProblemVoteCountAggregateInputType | true;
  };

  export interface ProblemVoteDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["ProblemVote"];
      meta: { name: "ProblemVote" };
    };
    /**
     * Find zero or one ProblemVote that matches the filter.
     * @param {ProblemVoteFindUniqueArgs} args - Arguments to find a ProblemVote
     * @example
     * // Get one ProblemVote
     * const problemVote = await prisma.problemVote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProblemVoteFindUniqueArgs>(
      args: SelectSubset<T, ProblemVoteFindUniqueArgs<ExtArgs>>
    ): Prisma__ProblemVoteClient<
      $Result.GetResult<
        Prisma.$ProblemVotePayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one ProblemVote that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProblemVoteFindUniqueOrThrowArgs} args - Arguments to find a ProblemVote
     * @example
     * // Get one ProblemVote
     * const problemVote = await prisma.problemVote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProblemVoteFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ProblemVoteFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProblemVoteClient<
      $Result.GetResult<
        Prisma.$ProblemVotePayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first ProblemVote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemVoteFindFirstArgs} args - Arguments to find a ProblemVote
     * @example
     * // Get one ProblemVote
     * const problemVote = await prisma.problemVote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProblemVoteFindFirstArgs>(
      args?: SelectSubset<T, ProblemVoteFindFirstArgs<ExtArgs>>
    ): Prisma__ProblemVoteClient<
      $Result.GetResult<
        Prisma.$ProblemVotePayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first ProblemVote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemVoteFindFirstOrThrowArgs} args - Arguments to find a ProblemVote
     * @example
     * // Get one ProblemVote
     * const problemVote = await prisma.problemVote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProblemVoteFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ProblemVoteFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProblemVoteClient<
      $Result.GetResult<
        Prisma.$ProblemVotePayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more ProblemVotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemVoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProblemVotes
     * const problemVotes = await prisma.problemVote.findMany()
     *
     * // Get first 10 ProblemVotes
     * const problemVotes = await prisma.problemVote.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const problemVoteWithIdOnly = await prisma.problemVote.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ProblemVoteFindManyArgs>(
      args?: SelectSubset<T, ProblemVoteFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ProblemVotePayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a ProblemVote.
     * @param {ProblemVoteCreateArgs} args - Arguments to create a ProblemVote.
     * @example
     * // Create one ProblemVote
     * const ProblemVote = await prisma.problemVote.create({
     *   data: {
     *     // ... data to create a ProblemVote
     *   }
     * })
     *
     */
    create<T extends ProblemVoteCreateArgs>(
      args: SelectSubset<T, ProblemVoteCreateArgs<ExtArgs>>
    ): Prisma__ProblemVoteClient<
      $Result.GetResult<
        Prisma.$ProblemVotePayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many ProblemVotes.
     * @param {ProblemVoteCreateManyArgs} args - Arguments to create many ProblemVotes.
     * @example
     * // Create many ProblemVotes
     * const problemVote = await prisma.problemVote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ProblemVoteCreateManyArgs>(
      args?: SelectSubset<T, ProblemVoteCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many ProblemVotes and returns the data saved in the database.
     * @param {ProblemVoteCreateManyAndReturnArgs} args - Arguments to create many ProblemVotes.
     * @example
     * // Create many ProblemVotes
     * const problemVote = await prisma.problemVote.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ProblemVotes and only return the `id`
     * const problemVoteWithIdOnly = await prisma.problemVote.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ProblemVoteCreateManyAndReturnArgs>(
      args?: SelectSubset<T, ProblemVoteCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ProblemVotePayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a ProblemVote.
     * @param {ProblemVoteDeleteArgs} args - Arguments to delete one ProblemVote.
     * @example
     * // Delete one ProblemVote
     * const ProblemVote = await prisma.problemVote.delete({
     *   where: {
     *     // ... filter to delete one ProblemVote
     *   }
     * })
     *
     */
    delete<T extends ProblemVoteDeleteArgs>(
      args: SelectSubset<T, ProblemVoteDeleteArgs<ExtArgs>>
    ): Prisma__ProblemVoteClient<
      $Result.GetResult<
        Prisma.$ProblemVotePayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one ProblemVote.
     * @param {ProblemVoteUpdateArgs} args - Arguments to update one ProblemVote.
     * @example
     * // Update one ProblemVote
     * const problemVote = await prisma.problemVote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ProblemVoteUpdateArgs>(
      args: SelectSubset<T, ProblemVoteUpdateArgs<ExtArgs>>
    ): Prisma__ProblemVoteClient<
      $Result.GetResult<
        Prisma.$ProblemVotePayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more ProblemVotes.
     * @param {ProblemVoteDeleteManyArgs} args - Arguments to filter ProblemVotes to delete.
     * @example
     * // Delete a few ProblemVotes
     * const { count } = await prisma.problemVote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ProblemVoteDeleteManyArgs>(
      args?: SelectSubset<T, ProblemVoteDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more ProblemVotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemVoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProblemVotes
     * const problemVote = await prisma.problemVote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ProblemVoteUpdateManyArgs>(
      args: SelectSubset<T, ProblemVoteUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more ProblemVotes and returns the data updated in the database.
     * @param {ProblemVoteUpdateManyAndReturnArgs} args - Arguments to update many ProblemVotes.
     * @example
     * // Update many ProblemVotes
     * const problemVote = await prisma.problemVote.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ProblemVotes and only return the `id`
     * const problemVoteWithIdOnly = await prisma.problemVote.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends ProblemVoteUpdateManyAndReturnArgs>(
      args: SelectSubset<T, ProblemVoteUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ProblemVotePayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one ProblemVote.
     * @param {ProblemVoteUpsertArgs} args - Arguments to update or create a ProblemVote.
     * @example
     * // Update or create a ProblemVote
     * const problemVote = await prisma.problemVote.upsert({
     *   create: {
     *     // ... data to create a ProblemVote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProblemVote we want to update
     *   }
     * })
     */
    upsert<T extends ProblemVoteUpsertArgs>(
      args: SelectSubset<T, ProblemVoteUpsertArgs<ExtArgs>>
    ): Prisma__ProblemVoteClient<
      $Result.GetResult<
        Prisma.$ProblemVotePayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of ProblemVotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemVoteCountArgs} args - Arguments to filter ProblemVotes to count.
     * @example
     * // Count the number of ProblemVotes
     * const count = await prisma.problemVote.count({
     *   where: {
     *     // ... the filter for the ProblemVotes we want to count
     *   }
     * })
     **/
    count<T extends ProblemVoteCountArgs>(
      args?: Subset<T, ProblemVoteCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], ProblemVoteCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a ProblemVote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemVoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ProblemVoteAggregateArgs>(
      args: Subset<T, ProblemVoteAggregateArgs>
    ): Prisma.PrismaPromise<GetProblemVoteAggregateType<T>>;

    /**
     * Group by ProblemVote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemVoteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends ProblemVoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProblemVoteGroupByArgs["orderBy"] }
        : { orderBy?: ProblemVoteGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, ProblemVoteGroupByArgs, OrderByArg> &
        InputErrors
    ): {} extends InputErrors
      ? GetProblemVoteGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ProblemVote model
     */
    readonly fields: ProblemVoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProblemVote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProblemVoteClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    problem<T extends ProblemDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, ProblemDefaultArgs<ExtArgs>>
    ): Prisma__ProblemClient<
      | $Result.GetResult<
          Prisma.$ProblemPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the ProblemVote model
   */
  interface ProblemVoteFieldRefs {
    readonly id: FieldRef<"ProblemVote", "String">;
    readonly userId: FieldRef<"ProblemVote", "String">;
    readonly problemId: FieldRef<"ProblemVote", "String">;
    readonly type: FieldRef<"ProblemVote", "VoteType">;
    readonly createdAt: FieldRef<"ProblemVote", "DateTime">;
  }

  // Custom InputTypes
  /**
   * ProblemVote findUnique
   */
  export type ProblemVoteFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProblemVote
     */
    select?: ProblemVoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProblemVote
     */
    omit?: ProblemVoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemVoteInclude<ExtArgs> | null;
    /**
     * Filter, which ProblemVote to fetch.
     */
    where: ProblemVoteWhereUniqueInput;
  };

  /**
   * ProblemVote findUniqueOrThrow
   */
  export type ProblemVoteFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProblemVote
     */
    select?: ProblemVoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProblemVote
     */
    omit?: ProblemVoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemVoteInclude<ExtArgs> | null;
    /**
     * Filter, which ProblemVote to fetch.
     */
    where: ProblemVoteWhereUniqueInput;
  };

  /**
   * ProblemVote findFirst
   */
  export type ProblemVoteFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProblemVote
     */
    select?: ProblemVoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProblemVote
     */
    omit?: ProblemVoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemVoteInclude<ExtArgs> | null;
    /**
     * Filter, which ProblemVote to fetch.
     */
    where?: ProblemVoteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProblemVotes to fetch.
     */
    orderBy?:
      | ProblemVoteOrderByWithRelationInput
      | ProblemVoteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ProblemVotes.
     */
    cursor?: ProblemVoteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProblemVotes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProblemVotes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ProblemVotes.
     */
    distinct?: ProblemVoteScalarFieldEnum | ProblemVoteScalarFieldEnum[];
  };

  /**
   * ProblemVote findFirstOrThrow
   */
  export type ProblemVoteFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProblemVote
     */
    select?: ProblemVoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProblemVote
     */
    omit?: ProblemVoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemVoteInclude<ExtArgs> | null;
    /**
     * Filter, which ProblemVote to fetch.
     */
    where?: ProblemVoteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProblemVotes to fetch.
     */
    orderBy?:
      | ProblemVoteOrderByWithRelationInput
      | ProblemVoteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ProblemVotes.
     */
    cursor?: ProblemVoteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProblemVotes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProblemVotes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ProblemVotes.
     */
    distinct?: ProblemVoteScalarFieldEnum | ProblemVoteScalarFieldEnum[];
  };

  /**
   * ProblemVote findMany
   */
  export type ProblemVoteFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProblemVote
     */
    select?: ProblemVoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProblemVote
     */
    omit?: ProblemVoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemVoteInclude<ExtArgs> | null;
    /**
     * Filter, which ProblemVotes to fetch.
     */
    where?: ProblemVoteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProblemVotes to fetch.
     */
    orderBy?:
      | ProblemVoteOrderByWithRelationInput
      | ProblemVoteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ProblemVotes.
     */
    cursor?: ProblemVoteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProblemVotes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProblemVotes.
     */
    skip?: number;
    distinct?: ProblemVoteScalarFieldEnum | ProblemVoteScalarFieldEnum[];
  };

  /**
   * ProblemVote create
   */
  export type ProblemVoteCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProblemVote
     */
    select?: ProblemVoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProblemVote
     */
    omit?: ProblemVoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemVoteInclude<ExtArgs> | null;
    /**
     * The data needed to create a ProblemVote.
     */
    data: XOR<ProblemVoteCreateInput, ProblemVoteUncheckedCreateInput>;
  };

  /**
   * ProblemVote createMany
   */
  export type ProblemVoteCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many ProblemVotes.
     */
    data: ProblemVoteCreateManyInput | ProblemVoteCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * ProblemVote createManyAndReturn
   */
  export type ProblemVoteCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProblemVote
     */
    select?: ProblemVoteSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ProblemVote
     */
    omit?: ProblemVoteOmit<ExtArgs> | null;
    /**
     * The data used to create many ProblemVotes.
     */
    data: ProblemVoteCreateManyInput | ProblemVoteCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemVoteIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * ProblemVote update
   */
  export type ProblemVoteUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProblemVote
     */
    select?: ProblemVoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProblemVote
     */
    omit?: ProblemVoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemVoteInclude<ExtArgs> | null;
    /**
     * The data needed to update a ProblemVote.
     */
    data: XOR<ProblemVoteUpdateInput, ProblemVoteUncheckedUpdateInput>;
    /**
     * Choose, which ProblemVote to update.
     */
    where: ProblemVoteWhereUniqueInput;
  };

  /**
   * ProblemVote updateMany
   */
  export type ProblemVoteUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update ProblemVotes.
     */
    data: XOR<
      ProblemVoteUpdateManyMutationInput,
      ProblemVoteUncheckedUpdateManyInput
    >;
    /**
     * Filter which ProblemVotes to update
     */
    where?: ProblemVoteWhereInput;
    /**
     * Limit how many ProblemVotes to update.
     */
    limit?: number;
  };

  /**
   * ProblemVote updateManyAndReturn
   */
  export type ProblemVoteUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProblemVote
     */
    select?: ProblemVoteSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ProblemVote
     */
    omit?: ProblemVoteOmit<ExtArgs> | null;
    /**
     * The data used to update ProblemVotes.
     */
    data: XOR<
      ProblemVoteUpdateManyMutationInput,
      ProblemVoteUncheckedUpdateManyInput
    >;
    /**
     * Filter which ProblemVotes to update
     */
    where?: ProblemVoteWhereInput;
    /**
     * Limit how many ProblemVotes to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemVoteIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * ProblemVote upsert
   */
  export type ProblemVoteUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProblemVote
     */
    select?: ProblemVoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProblemVote
     */
    omit?: ProblemVoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemVoteInclude<ExtArgs> | null;
    /**
     * The filter to search for the ProblemVote to update in case it exists.
     */
    where: ProblemVoteWhereUniqueInput;
    /**
     * In case the ProblemVote found by the `where` argument doesn't exist, create a new ProblemVote with this data.
     */
    create: XOR<ProblemVoteCreateInput, ProblemVoteUncheckedCreateInput>;
    /**
     * In case the ProblemVote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProblemVoteUpdateInput, ProblemVoteUncheckedUpdateInput>;
  };

  /**
   * ProblemVote delete
   */
  export type ProblemVoteDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProblemVote
     */
    select?: ProblemVoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProblemVote
     */
    omit?: ProblemVoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemVoteInclude<ExtArgs> | null;
    /**
     * Filter which ProblemVote to delete.
     */
    where: ProblemVoteWhereUniqueInput;
  };

  /**
   * ProblemVote deleteMany
   */
  export type ProblemVoteDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which ProblemVotes to delete
     */
    where?: ProblemVoteWhereInput;
    /**
     * Limit how many ProblemVotes to delete.
     */
    limit?: number;
  };

  /**
   * ProblemVote without action
   */
  export type ProblemVoteDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProblemVote
     */
    select?: ProblemVoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProblemVote
     */
    omit?: ProblemVoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemVoteInclude<ExtArgs> | null;
  };

  /**
   * Model Playlist
   */

  export type AggregatePlaylist = {
    _count: PlaylistCountAggregateOutputType | null;
    _min: PlaylistMinAggregateOutputType | null;
    _max: PlaylistMaxAggregateOutputType | null;
  };

  export type PlaylistMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    userId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type PlaylistMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    userId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type PlaylistCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    userId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type PlaylistMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    userId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type PlaylistMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    userId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type PlaylistCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    userId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type PlaylistAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Playlist to aggregate.
     */
    where?: PlaylistWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Playlists to fetch.
     */
    orderBy?:
      | PlaylistOrderByWithRelationInput
      | PlaylistOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: PlaylistWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Playlists from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Playlists.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Playlists
     **/
    _count?: true | PlaylistCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: PlaylistMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: PlaylistMaxAggregateInputType;
  };

  export type GetPlaylistAggregateType<T extends PlaylistAggregateArgs> = {
    [P in keyof T & keyof AggregatePlaylist]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlaylist[P]>
      : GetScalarType<T[P], AggregatePlaylist[P]>;
  };

  export type PlaylistGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: PlaylistWhereInput;
    orderBy?:
      | PlaylistOrderByWithAggregationInput
      | PlaylistOrderByWithAggregationInput[];
    by: PlaylistScalarFieldEnum[] | PlaylistScalarFieldEnum;
    having?: PlaylistScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PlaylistCountAggregateInputType | true;
    _min?: PlaylistMinAggregateInputType;
    _max?: PlaylistMaxAggregateInputType;
  };

  export type PlaylistGroupByOutputType = {
    id: string;
    name: string;
    description: string | null;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: PlaylistCountAggregateOutputType | null;
    _min: PlaylistMinAggregateOutputType | null;
    _max: PlaylistMaxAggregateOutputType | null;
  };

  type GetPlaylistGroupByPayload<T extends PlaylistGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<PlaylistGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof PlaylistGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlaylistGroupByOutputType[P]>
            : GetScalarType<T[P], PlaylistGroupByOutputType[P]>;
        }
      >
    >;

  export type PlaylistSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      description?: boolean;
      userId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      problems?: boolean | Playlist$problemsArgs<ExtArgs>;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      _count?: boolean | PlaylistCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["playlist"]
  >;

  export type PlaylistSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      description?: boolean;
      userId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["playlist"]
  >;

  export type PlaylistSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      description?: boolean;
      userId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["playlist"]
  >;

  export type PlaylistSelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
    userId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type PlaylistOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    "id" | "name" | "description" | "userId" | "createdAt" | "updatedAt",
    ExtArgs["result"]["playlist"]
  >;
  export type PlaylistInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    problems?: boolean | Playlist$problemsArgs<ExtArgs>;
    user?: boolean | UserDefaultArgs<ExtArgs>;
    _count?: boolean | PlaylistCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type PlaylistIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type PlaylistIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $PlaylistPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "Playlist";
    objects: {
      problems: Prisma.$ProblemInPlaylistPayload<ExtArgs>[];
      user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        description: string | null;
        userId: string;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs["result"]["playlist"]
    >;
    composites: {};
  };

  type PlaylistGetPayload<
    S extends boolean | null | undefined | PlaylistDefaultArgs,
  > = $Result.GetResult<Prisma.$PlaylistPayload, S>;

  type PlaylistCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<PlaylistFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: PlaylistCountAggregateInputType | true;
  };

  export interface PlaylistDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Playlist"];
      meta: { name: "Playlist" };
    };
    /**
     * Find zero or one Playlist that matches the filter.
     * @param {PlaylistFindUniqueArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlaylistFindUniqueArgs>(
      args: SelectSubset<T, PlaylistFindUniqueArgs<ExtArgs>>
    ): Prisma__PlaylistClient<
      $Result.GetResult<
        Prisma.$PlaylistPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Playlist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlaylistFindUniqueOrThrowArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlaylistFindUniqueOrThrowArgs>(
      args: SelectSubset<T, PlaylistFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PlaylistClient<
      $Result.GetResult<
        Prisma.$PlaylistPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Playlist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistFindFirstArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlaylistFindFirstArgs>(
      args?: SelectSubset<T, PlaylistFindFirstArgs<ExtArgs>>
    ): Prisma__PlaylistClient<
      $Result.GetResult<
        Prisma.$PlaylistPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Playlist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistFindFirstOrThrowArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlaylistFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PlaylistFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PlaylistClient<
      $Result.GetResult<
        Prisma.$PlaylistPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Playlists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Playlists
     * const playlists = await prisma.playlist.findMany()
     *
     * // Get first 10 Playlists
     * const playlists = await prisma.playlist.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const playlistWithIdOnly = await prisma.playlist.findMany({ select: { id: true } })
     *
     */
    findMany<T extends PlaylistFindManyArgs>(
      args?: SelectSubset<T, PlaylistFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PlaylistPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Playlist.
     * @param {PlaylistCreateArgs} args - Arguments to create a Playlist.
     * @example
     * // Create one Playlist
     * const Playlist = await prisma.playlist.create({
     *   data: {
     *     // ... data to create a Playlist
     *   }
     * })
     *
     */
    create<T extends PlaylistCreateArgs>(
      args: SelectSubset<T, PlaylistCreateArgs<ExtArgs>>
    ): Prisma__PlaylistClient<
      $Result.GetResult<
        Prisma.$PlaylistPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Playlists.
     * @param {PlaylistCreateManyArgs} args - Arguments to create many Playlists.
     * @example
     * // Create many Playlists
     * const playlist = await prisma.playlist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends PlaylistCreateManyArgs>(
      args?: SelectSubset<T, PlaylistCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Playlists and returns the data saved in the database.
     * @param {PlaylistCreateManyAndReturnArgs} args - Arguments to create many Playlists.
     * @example
     * // Create many Playlists
     * const playlist = await prisma.playlist.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Playlists and only return the `id`
     * const playlistWithIdOnly = await prisma.playlist.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends PlaylistCreateManyAndReturnArgs>(
      args?: SelectSubset<T, PlaylistCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PlaylistPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Playlist.
     * @param {PlaylistDeleteArgs} args - Arguments to delete one Playlist.
     * @example
     * // Delete one Playlist
     * const Playlist = await prisma.playlist.delete({
     *   where: {
     *     // ... filter to delete one Playlist
     *   }
     * })
     *
     */
    delete<T extends PlaylistDeleteArgs>(
      args: SelectSubset<T, PlaylistDeleteArgs<ExtArgs>>
    ): Prisma__PlaylistClient<
      $Result.GetResult<
        Prisma.$PlaylistPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Playlist.
     * @param {PlaylistUpdateArgs} args - Arguments to update one Playlist.
     * @example
     * // Update one Playlist
     * const playlist = await prisma.playlist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends PlaylistUpdateArgs>(
      args: SelectSubset<T, PlaylistUpdateArgs<ExtArgs>>
    ): Prisma__PlaylistClient<
      $Result.GetResult<
        Prisma.$PlaylistPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Playlists.
     * @param {PlaylistDeleteManyArgs} args - Arguments to filter Playlists to delete.
     * @example
     * // Delete a few Playlists
     * const { count } = await prisma.playlist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends PlaylistDeleteManyArgs>(
      args?: SelectSubset<T, PlaylistDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Playlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Playlists
     * const playlist = await prisma.playlist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends PlaylistUpdateManyArgs>(
      args: SelectSubset<T, PlaylistUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Playlists and returns the data updated in the database.
     * @param {PlaylistUpdateManyAndReturnArgs} args - Arguments to update many Playlists.
     * @example
     * // Update many Playlists
     * const playlist = await prisma.playlist.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Playlists and only return the `id`
     * const playlistWithIdOnly = await prisma.playlist.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends PlaylistUpdateManyAndReturnArgs>(
      args: SelectSubset<T, PlaylistUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PlaylistPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Playlist.
     * @param {PlaylistUpsertArgs} args - Arguments to update or create a Playlist.
     * @example
     * // Update or create a Playlist
     * const playlist = await prisma.playlist.upsert({
     *   create: {
     *     // ... data to create a Playlist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Playlist we want to update
     *   }
     * })
     */
    upsert<T extends PlaylistUpsertArgs>(
      args: SelectSubset<T, PlaylistUpsertArgs<ExtArgs>>
    ): Prisma__PlaylistClient<
      $Result.GetResult<
        Prisma.$PlaylistPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Playlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistCountArgs} args - Arguments to filter Playlists to count.
     * @example
     * // Count the number of Playlists
     * const count = await prisma.playlist.count({
     *   where: {
     *     // ... the filter for the Playlists we want to count
     *   }
     * })
     **/
    count<T extends PlaylistCountArgs>(
      args?: Subset<T, PlaylistCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], PlaylistCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Playlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends PlaylistAggregateArgs>(
      args: Subset<T, PlaylistAggregateArgs>
    ): Prisma.PrismaPromise<GetPlaylistAggregateType<T>>;

    /**
     * Group by Playlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends PlaylistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlaylistGroupByArgs["orderBy"] }
        : { orderBy?: PlaylistGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, PlaylistGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetPlaylistGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Playlist model
     */
    readonly fields: PlaylistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Playlist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlaylistClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    problems<T extends Playlist$problemsArgs<ExtArgs> = {}>(
      args?: Subset<T, Playlist$problemsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$ProblemInPlaylistPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Playlist model
   */
  interface PlaylistFieldRefs {
    readonly id: FieldRef<"Playlist", "String">;
    readonly name: FieldRef<"Playlist", "String">;
    readonly description: FieldRef<"Playlist", "String">;
    readonly userId: FieldRef<"Playlist", "String">;
    readonly createdAt: FieldRef<"Playlist", "DateTime">;
    readonly updatedAt: FieldRef<"Playlist", "DateTime">;
  }

  // Custom InputTypes
  /**
   * Playlist findUnique
   */
  export type PlaylistFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null;
    /**
     * Filter, which Playlist to fetch.
     */
    where: PlaylistWhereUniqueInput;
  };

  /**
   * Playlist findUniqueOrThrow
   */
  export type PlaylistFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null;
    /**
     * Filter, which Playlist to fetch.
     */
    where: PlaylistWhereUniqueInput;
  };

  /**
   * Playlist findFirst
   */
  export type PlaylistFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null;
    /**
     * Filter, which Playlist to fetch.
     */
    where?: PlaylistWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Playlists to fetch.
     */
    orderBy?:
      | PlaylistOrderByWithRelationInput
      | PlaylistOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Playlists.
     */
    cursor?: PlaylistWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Playlists from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Playlists.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Playlists.
     */
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[];
  };

  /**
   * Playlist findFirstOrThrow
   */
  export type PlaylistFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null;
    /**
     * Filter, which Playlist to fetch.
     */
    where?: PlaylistWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Playlists to fetch.
     */
    orderBy?:
      | PlaylistOrderByWithRelationInput
      | PlaylistOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Playlists.
     */
    cursor?: PlaylistWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Playlists from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Playlists.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Playlists.
     */
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[];
  };

  /**
   * Playlist findMany
   */
  export type PlaylistFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null;
    /**
     * Filter, which Playlists to fetch.
     */
    where?: PlaylistWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Playlists to fetch.
     */
    orderBy?:
      | PlaylistOrderByWithRelationInput
      | PlaylistOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Playlists.
     */
    cursor?: PlaylistWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Playlists from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Playlists.
     */
    skip?: number;
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[];
  };

  /**
   * Playlist create
   */
  export type PlaylistCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null;
    /**
     * The data needed to create a Playlist.
     */
    data: XOR<PlaylistCreateInput, PlaylistUncheckedCreateInput>;
  };

  /**
   * Playlist createMany
   */
  export type PlaylistCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Playlists.
     */
    data: PlaylistCreateManyInput | PlaylistCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Playlist createManyAndReturn
   */
  export type PlaylistCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null;
    /**
     * The data used to create many Playlists.
     */
    data: PlaylistCreateManyInput | PlaylistCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Playlist update
   */
  export type PlaylistUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null;
    /**
     * The data needed to update a Playlist.
     */
    data: XOR<PlaylistUpdateInput, PlaylistUncheckedUpdateInput>;
    /**
     * Choose, which Playlist to update.
     */
    where: PlaylistWhereUniqueInput;
  };

  /**
   * Playlist updateMany
   */
  export type PlaylistUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Playlists.
     */
    data: XOR<
      PlaylistUpdateManyMutationInput,
      PlaylistUncheckedUpdateManyInput
    >;
    /**
     * Filter which Playlists to update
     */
    where?: PlaylistWhereInput;
    /**
     * Limit how many Playlists to update.
     */
    limit?: number;
  };

  /**
   * Playlist updateManyAndReturn
   */
  export type PlaylistUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null;
    /**
     * The data used to update Playlists.
     */
    data: XOR<
      PlaylistUpdateManyMutationInput,
      PlaylistUncheckedUpdateManyInput
    >;
    /**
     * Filter which Playlists to update
     */
    where?: PlaylistWhereInput;
    /**
     * Limit how many Playlists to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Playlist upsert
   */
  export type PlaylistUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null;
    /**
     * The filter to search for the Playlist to update in case it exists.
     */
    where: PlaylistWhereUniqueInput;
    /**
     * In case the Playlist found by the `where` argument doesn't exist, create a new Playlist with this data.
     */
    create: XOR<PlaylistCreateInput, PlaylistUncheckedCreateInput>;
    /**
     * In case the Playlist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlaylistUpdateInput, PlaylistUncheckedUpdateInput>;
  };

  /**
   * Playlist delete
   */
  export type PlaylistDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null;
    /**
     * Filter which Playlist to delete.
     */
    where: PlaylistWhereUniqueInput;
  };

  /**
   * Playlist deleteMany
   */
  export type PlaylistDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Playlists to delete
     */
    where?: PlaylistWhereInput;
    /**
     * Limit how many Playlists to delete.
     */
    limit?: number;
  };

  /**
   * Playlist.problems
   */
  export type Playlist$problemsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProblemInPlaylist
     */
    select?: ProblemInPlaylistSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProblemInPlaylist
     */
    omit?: ProblemInPlaylistOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInPlaylistInclude<ExtArgs> | null;
    where?: ProblemInPlaylistWhereInput;
    orderBy?:
      | ProblemInPlaylistOrderByWithRelationInput
      | ProblemInPlaylistOrderByWithRelationInput[];
    cursor?: ProblemInPlaylistWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?:
      | ProblemInPlaylistScalarFieldEnum
      | ProblemInPlaylistScalarFieldEnum[];
  };

  /**
   * Playlist without action
   */
  export type PlaylistDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null;
  };

  /**
   * Model ProblemInPlaylist
   */

  export type AggregateProblemInPlaylist = {
    _count: ProblemInPlaylistCountAggregateOutputType | null;
    _min: ProblemInPlaylistMinAggregateOutputType | null;
    _max: ProblemInPlaylistMaxAggregateOutputType | null;
  };

  export type ProblemInPlaylistMinAggregateOutputType = {
    id: string | null;
    playlistId: string | null;
    problemId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type ProblemInPlaylistMaxAggregateOutputType = {
    id: string | null;
    playlistId: string | null;
    problemId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type ProblemInPlaylistCountAggregateOutputType = {
    id: number;
    playlistId: number;
    problemId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type ProblemInPlaylistMinAggregateInputType = {
    id?: true;
    playlistId?: true;
    problemId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type ProblemInPlaylistMaxAggregateInputType = {
    id?: true;
    playlistId?: true;
    problemId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type ProblemInPlaylistCountAggregateInputType = {
    id?: true;
    playlistId?: true;
    problemId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type ProblemInPlaylistAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which ProblemInPlaylist to aggregate.
     */
    where?: ProblemInPlaylistWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProblemInPlaylists to fetch.
     */
    orderBy?:
      | ProblemInPlaylistOrderByWithRelationInput
      | ProblemInPlaylistOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ProblemInPlaylistWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProblemInPlaylists from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProblemInPlaylists.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ProblemInPlaylists
     **/
    _count?: true | ProblemInPlaylistCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ProblemInPlaylistMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ProblemInPlaylistMaxAggregateInputType;
  };

  export type GetProblemInPlaylistAggregateType<
    T extends ProblemInPlaylistAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateProblemInPlaylist]: P extends
      | "_count"
      | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProblemInPlaylist[P]>
      : GetScalarType<T[P], AggregateProblemInPlaylist[P]>;
  };

  export type ProblemInPlaylistGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ProblemInPlaylistWhereInput;
    orderBy?:
      | ProblemInPlaylistOrderByWithAggregationInput
      | ProblemInPlaylistOrderByWithAggregationInput[];
    by: ProblemInPlaylistScalarFieldEnum[] | ProblemInPlaylistScalarFieldEnum;
    having?: ProblemInPlaylistScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProblemInPlaylistCountAggregateInputType | true;
    _min?: ProblemInPlaylistMinAggregateInputType;
    _max?: ProblemInPlaylistMaxAggregateInputType;
  };

  export type ProblemInPlaylistGroupByOutputType = {
    id: string;
    playlistId: string;
    problemId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: ProblemInPlaylistCountAggregateOutputType | null;
    _min: ProblemInPlaylistMinAggregateOutputType | null;
    _max: ProblemInPlaylistMaxAggregateOutputType | null;
  };

  type GetProblemInPlaylistGroupByPayload<
    T extends ProblemInPlaylistGroupByArgs,
  > = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProblemInPlaylistGroupByOutputType, T["by"]> & {
        [P in keyof T &
          keyof ProblemInPlaylistGroupByOutputType]: P extends "_count"
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ProblemInPlaylistGroupByOutputType[P]>
          : GetScalarType<T[P], ProblemInPlaylistGroupByOutputType[P]>;
      }
    >
  >;

  export type ProblemInPlaylistSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      playlistId?: boolean;
      problemId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      playlist?: boolean | PlaylistDefaultArgs<ExtArgs>;
      problem?: boolean | ProblemDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["problemInPlaylist"]
  >;

  export type ProblemInPlaylistSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      playlistId?: boolean;
      problemId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      playlist?: boolean | PlaylistDefaultArgs<ExtArgs>;
      problem?: boolean | ProblemDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["problemInPlaylist"]
  >;

  export type ProblemInPlaylistSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      playlistId?: boolean;
      problemId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      playlist?: boolean | PlaylistDefaultArgs<ExtArgs>;
      problem?: boolean | ProblemDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["problemInPlaylist"]
  >;

  export type ProblemInPlaylistSelectScalar = {
    id?: boolean;
    playlistId?: boolean;
    problemId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type ProblemInPlaylistOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    "id" | "playlistId" | "problemId" | "createdAt" | "updatedAt",
    ExtArgs["result"]["problemInPlaylist"]
  >;
  export type ProblemInPlaylistInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    playlist?: boolean | PlaylistDefaultArgs<ExtArgs>;
    problem?: boolean | ProblemDefaultArgs<ExtArgs>;
  };
  export type ProblemInPlaylistIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    playlist?: boolean | PlaylistDefaultArgs<ExtArgs>;
    problem?: boolean | ProblemDefaultArgs<ExtArgs>;
  };
  export type ProblemInPlaylistIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    playlist?: boolean | PlaylistDefaultArgs<ExtArgs>;
    problem?: boolean | ProblemDefaultArgs<ExtArgs>;
  };

  export type $ProblemInPlaylistPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "ProblemInPlaylist";
    objects: {
      playlist: Prisma.$PlaylistPayload<ExtArgs>;
      problem: Prisma.$ProblemPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        playlistId: string;
        problemId: string;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs["result"]["problemInPlaylist"]
    >;
    composites: {};
  };

  type ProblemInPlaylistGetPayload<
    S extends boolean | null | undefined | ProblemInPlaylistDefaultArgs,
  > = $Result.GetResult<Prisma.$ProblemInPlaylistPayload, S>;

  type ProblemInPlaylistCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    ProblemInPlaylistFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: ProblemInPlaylistCountAggregateInputType | true;
  };

  export interface ProblemInPlaylistDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["ProblemInPlaylist"];
      meta: { name: "ProblemInPlaylist" };
    };
    /**
     * Find zero or one ProblemInPlaylist that matches the filter.
     * @param {ProblemInPlaylistFindUniqueArgs} args - Arguments to find a ProblemInPlaylist
     * @example
     * // Get one ProblemInPlaylist
     * const problemInPlaylist = await prisma.problemInPlaylist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProblemInPlaylistFindUniqueArgs>(
      args: SelectSubset<T, ProblemInPlaylistFindUniqueArgs<ExtArgs>>
    ): Prisma__ProblemInPlaylistClient<
      $Result.GetResult<
        Prisma.$ProblemInPlaylistPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one ProblemInPlaylist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProblemInPlaylistFindUniqueOrThrowArgs} args - Arguments to find a ProblemInPlaylist
     * @example
     * // Get one ProblemInPlaylist
     * const problemInPlaylist = await prisma.problemInPlaylist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProblemInPlaylistFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ProblemInPlaylistFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProblemInPlaylistClient<
      $Result.GetResult<
        Prisma.$ProblemInPlaylistPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first ProblemInPlaylist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemInPlaylistFindFirstArgs} args - Arguments to find a ProblemInPlaylist
     * @example
     * // Get one ProblemInPlaylist
     * const problemInPlaylist = await prisma.problemInPlaylist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProblemInPlaylistFindFirstArgs>(
      args?: SelectSubset<T, ProblemInPlaylistFindFirstArgs<ExtArgs>>
    ): Prisma__ProblemInPlaylistClient<
      $Result.GetResult<
        Prisma.$ProblemInPlaylistPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first ProblemInPlaylist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemInPlaylistFindFirstOrThrowArgs} args - Arguments to find a ProblemInPlaylist
     * @example
     * // Get one ProblemInPlaylist
     * const problemInPlaylist = await prisma.problemInPlaylist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProblemInPlaylistFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ProblemInPlaylistFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProblemInPlaylistClient<
      $Result.GetResult<
        Prisma.$ProblemInPlaylistPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more ProblemInPlaylists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemInPlaylistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProblemInPlaylists
     * const problemInPlaylists = await prisma.problemInPlaylist.findMany()
     *
     * // Get first 10 ProblemInPlaylists
     * const problemInPlaylists = await prisma.problemInPlaylist.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const problemInPlaylistWithIdOnly = await prisma.problemInPlaylist.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ProblemInPlaylistFindManyArgs>(
      args?: SelectSubset<T, ProblemInPlaylistFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ProblemInPlaylistPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a ProblemInPlaylist.
     * @param {ProblemInPlaylistCreateArgs} args - Arguments to create a ProblemInPlaylist.
     * @example
     * // Create one ProblemInPlaylist
     * const ProblemInPlaylist = await prisma.problemInPlaylist.create({
     *   data: {
     *     // ... data to create a ProblemInPlaylist
     *   }
     * })
     *
     */
    create<T extends ProblemInPlaylistCreateArgs>(
      args: SelectSubset<T, ProblemInPlaylistCreateArgs<ExtArgs>>
    ): Prisma__ProblemInPlaylistClient<
      $Result.GetResult<
        Prisma.$ProblemInPlaylistPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many ProblemInPlaylists.
     * @param {ProblemInPlaylistCreateManyArgs} args - Arguments to create many ProblemInPlaylists.
     * @example
     * // Create many ProblemInPlaylists
     * const problemInPlaylist = await prisma.problemInPlaylist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ProblemInPlaylistCreateManyArgs>(
      args?: SelectSubset<T, ProblemInPlaylistCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many ProblemInPlaylists and returns the data saved in the database.
     * @param {ProblemInPlaylistCreateManyAndReturnArgs} args - Arguments to create many ProblemInPlaylists.
     * @example
     * // Create many ProblemInPlaylists
     * const problemInPlaylist = await prisma.problemInPlaylist.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ProblemInPlaylists and only return the `id`
     * const problemInPlaylistWithIdOnly = await prisma.problemInPlaylist.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ProblemInPlaylistCreateManyAndReturnArgs>(
      args?: SelectSubset<T, ProblemInPlaylistCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ProblemInPlaylistPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a ProblemInPlaylist.
     * @param {ProblemInPlaylistDeleteArgs} args - Arguments to delete one ProblemInPlaylist.
     * @example
     * // Delete one ProblemInPlaylist
     * const ProblemInPlaylist = await prisma.problemInPlaylist.delete({
     *   where: {
     *     // ... filter to delete one ProblemInPlaylist
     *   }
     * })
     *
     */
    delete<T extends ProblemInPlaylistDeleteArgs>(
      args: SelectSubset<T, ProblemInPlaylistDeleteArgs<ExtArgs>>
    ): Prisma__ProblemInPlaylistClient<
      $Result.GetResult<
        Prisma.$ProblemInPlaylistPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one ProblemInPlaylist.
     * @param {ProblemInPlaylistUpdateArgs} args - Arguments to update one ProblemInPlaylist.
     * @example
     * // Update one ProblemInPlaylist
     * const problemInPlaylist = await prisma.problemInPlaylist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ProblemInPlaylistUpdateArgs>(
      args: SelectSubset<T, ProblemInPlaylistUpdateArgs<ExtArgs>>
    ): Prisma__ProblemInPlaylistClient<
      $Result.GetResult<
        Prisma.$ProblemInPlaylistPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more ProblemInPlaylists.
     * @param {ProblemInPlaylistDeleteManyArgs} args - Arguments to filter ProblemInPlaylists to delete.
     * @example
     * // Delete a few ProblemInPlaylists
     * const { count } = await prisma.problemInPlaylist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ProblemInPlaylistDeleteManyArgs>(
      args?: SelectSubset<T, ProblemInPlaylistDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more ProblemInPlaylists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemInPlaylistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProblemInPlaylists
     * const problemInPlaylist = await prisma.problemInPlaylist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ProblemInPlaylistUpdateManyArgs>(
      args: SelectSubset<T, ProblemInPlaylistUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more ProblemInPlaylists and returns the data updated in the database.
     * @param {ProblemInPlaylistUpdateManyAndReturnArgs} args - Arguments to update many ProblemInPlaylists.
     * @example
     * // Update many ProblemInPlaylists
     * const problemInPlaylist = await prisma.problemInPlaylist.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ProblemInPlaylists and only return the `id`
     * const problemInPlaylistWithIdOnly = await prisma.problemInPlaylist.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends ProblemInPlaylistUpdateManyAndReturnArgs>(
      args: SelectSubset<T, ProblemInPlaylistUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ProblemInPlaylistPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one ProblemInPlaylist.
     * @param {ProblemInPlaylistUpsertArgs} args - Arguments to update or create a ProblemInPlaylist.
     * @example
     * // Update or create a ProblemInPlaylist
     * const problemInPlaylist = await prisma.problemInPlaylist.upsert({
     *   create: {
     *     // ... data to create a ProblemInPlaylist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProblemInPlaylist we want to update
     *   }
     * })
     */
    upsert<T extends ProblemInPlaylistUpsertArgs>(
      args: SelectSubset<T, ProblemInPlaylistUpsertArgs<ExtArgs>>
    ): Prisma__ProblemInPlaylistClient<
      $Result.GetResult<
        Prisma.$ProblemInPlaylistPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of ProblemInPlaylists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemInPlaylistCountArgs} args - Arguments to filter ProblemInPlaylists to count.
     * @example
     * // Count the number of ProblemInPlaylists
     * const count = await prisma.problemInPlaylist.count({
     *   where: {
     *     // ... the filter for the ProblemInPlaylists we want to count
     *   }
     * })
     **/
    count<T extends ProblemInPlaylistCountArgs>(
      args?: Subset<T, ProblemInPlaylistCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<
              T["select"],
              ProblemInPlaylistCountAggregateOutputType
            >
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a ProblemInPlaylist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemInPlaylistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ProblemInPlaylistAggregateArgs>(
      args: Subset<T, ProblemInPlaylistAggregateArgs>
    ): Prisma.PrismaPromise<GetProblemInPlaylistAggregateType<T>>;

    /**
     * Group by ProblemInPlaylist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemInPlaylistGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends ProblemInPlaylistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProblemInPlaylistGroupByArgs["orderBy"] }
        : { orderBy?: ProblemInPlaylistGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, ProblemInPlaylistGroupByArgs, OrderByArg> &
        InputErrors
    ): {} extends InputErrors
      ? GetProblemInPlaylistGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ProblemInPlaylist model
     */
    readonly fields: ProblemInPlaylistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProblemInPlaylist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProblemInPlaylistClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    playlist<T extends PlaylistDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, PlaylistDefaultArgs<ExtArgs>>
    ): Prisma__PlaylistClient<
      | $Result.GetResult<
          Prisma.$PlaylistPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    problem<T extends ProblemDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, ProblemDefaultArgs<ExtArgs>>
    ): Prisma__ProblemClient<
      | $Result.GetResult<
          Prisma.$ProblemPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the ProblemInPlaylist model
   */
  interface ProblemInPlaylistFieldRefs {
    readonly id: FieldRef<"ProblemInPlaylist", "String">;
    readonly playlistId: FieldRef<"ProblemInPlaylist", "String">;
    readonly problemId: FieldRef<"ProblemInPlaylist", "String">;
    readonly createdAt: FieldRef<"ProblemInPlaylist", "DateTime">;
    readonly updatedAt: FieldRef<"ProblemInPlaylist", "DateTime">;
  }

  // Custom InputTypes
  /**
   * ProblemInPlaylist findUnique
   */
  export type ProblemInPlaylistFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProblemInPlaylist
     */
    select?: ProblemInPlaylistSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProblemInPlaylist
     */
    omit?: ProblemInPlaylistOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInPlaylistInclude<ExtArgs> | null;
    /**
     * Filter, which ProblemInPlaylist to fetch.
     */
    where: ProblemInPlaylistWhereUniqueInput;
  };

  /**
   * ProblemInPlaylist findUniqueOrThrow
   */
  export type ProblemInPlaylistFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProblemInPlaylist
     */
    select?: ProblemInPlaylistSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProblemInPlaylist
     */
    omit?: ProblemInPlaylistOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInPlaylistInclude<ExtArgs> | null;
    /**
     * Filter, which ProblemInPlaylist to fetch.
     */
    where: ProblemInPlaylistWhereUniqueInput;
  };

  /**
   * ProblemInPlaylist findFirst
   */
  export type ProblemInPlaylistFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProblemInPlaylist
     */
    select?: ProblemInPlaylistSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProblemInPlaylist
     */
    omit?: ProblemInPlaylistOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInPlaylistInclude<ExtArgs> | null;
    /**
     * Filter, which ProblemInPlaylist to fetch.
     */
    where?: ProblemInPlaylistWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProblemInPlaylists to fetch.
     */
    orderBy?:
      | ProblemInPlaylistOrderByWithRelationInput
      | ProblemInPlaylistOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ProblemInPlaylists.
     */
    cursor?: ProblemInPlaylistWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProblemInPlaylists from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProblemInPlaylists.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ProblemInPlaylists.
     */
    distinct?:
      | ProblemInPlaylistScalarFieldEnum
      | ProblemInPlaylistScalarFieldEnum[];
  };

  /**
   * ProblemInPlaylist findFirstOrThrow
   */
  export type ProblemInPlaylistFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProblemInPlaylist
     */
    select?: ProblemInPlaylistSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProblemInPlaylist
     */
    omit?: ProblemInPlaylistOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInPlaylistInclude<ExtArgs> | null;
    /**
     * Filter, which ProblemInPlaylist to fetch.
     */
    where?: ProblemInPlaylistWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProblemInPlaylists to fetch.
     */
    orderBy?:
      | ProblemInPlaylistOrderByWithRelationInput
      | ProblemInPlaylistOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ProblemInPlaylists.
     */
    cursor?: ProblemInPlaylistWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProblemInPlaylists from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProblemInPlaylists.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ProblemInPlaylists.
     */
    distinct?:
      | ProblemInPlaylistScalarFieldEnum
      | ProblemInPlaylistScalarFieldEnum[];
  };

  /**
   * ProblemInPlaylist findMany
   */
  export type ProblemInPlaylistFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProblemInPlaylist
     */
    select?: ProblemInPlaylistSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProblemInPlaylist
     */
    omit?: ProblemInPlaylistOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInPlaylistInclude<ExtArgs> | null;
    /**
     * Filter, which ProblemInPlaylists to fetch.
     */
    where?: ProblemInPlaylistWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProblemInPlaylists to fetch.
     */
    orderBy?:
      | ProblemInPlaylistOrderByWithRelationInput
      | ProblemInPlaylistOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ProblemInPlaylists.
     */
    cursor?: ProblemInPlaylistWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProblemInPlaylists from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProblemInPlaylists.
     */
    skip?: number;
    distinct?:
      | ProblemInPlaylistScalarFieldEnum
      | ProblemInPlaylistScalarFieldEnum[];
  };

  /**
   * ProblemInPlaylist create
   */
  export type ProblemInPlaylistCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProblemInPlaylist
     */
    select?: ProblemInPlaylistSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProblemInPlaylist
     */
    omit?: ProblemInPlaylistOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInPlaylistInclude<ExtArgs> | null;
    /**
     * The data needed to create a ProblemInPlaylist.
     */
    data: XOR<
      ProblemInPlaylistCreateInput,
      ProblemInPlaylistUncheckedCreateInput
    >;
  };

  /**
   * ProblemInPlaylist createMany
   */
  export type ProblemInPlaylistCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many ProblemInPlaylists.
     */
    data: ProblemInPlaylistCreateManyInput | ProblemInPlaylistCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * ProblemInPlaylist createManyAndReturn
   */
  export type ProblemInPlaylistCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProblemInPlaylist
     */
    select?: ProblemInPlaylistSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ProblemInPlaylist
     */
    omit?: ProblemInPlaylistOmit<ExtArgs> | null;
    /**
     * The data used to create many ProblemInPlaylists.
     */
    data: ProblemInPlaylistCreateManyInput | ProblemInPlaylistCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInPlaylistIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * ProblemInPlaylist update
   */
  export type ProblemInPlaylistUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProblemInPlaylist
     */
    select?: ProblemInPlaylistSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProblemInPlaylist
     */
    omit?: ProblemInPlaylistOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInPlaylistInclude<ExtArgs> | null;
    /**
     * The data needed to update a ProblemInPlaylist.
     */
    data: XOR<
      ProblemInPlaylistUpdateInput,
      ProblemInPlaylistUncheckedUpdateInput
    >;
    /**
     * Choose, which ProblemInPlaylist to update.
     */
    where: ProblemInPlaylistWhereUniqueInput;
  };

  /**
   * ProblemInPlaylist updateMany
   */
  export type ProblemInPlaylistUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update ProblemInPlaylists.
     */
    data: XOR<
      ProblemInPlaylistUpdateManyMutationInput,
      ProblemInPlaylistUncheckedUpdateManyInput
    >;
    /**
     * Filter which ProblemInPlaylists to update
     */
    where?: ProblemInPlaylistWhereInput;
    /**
     * Limit how many ProblemInPlaylists to update.
     */
    limit?: number;
  };

  /**
   * ProblemInPlaylist updateManyAndReturn
   */
  export type ProblemInPlaylistUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProblemInPlaylist
     */
    select?: ProblemInPlaylistSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ProblemInPlaylist
     */
    omit?: ProblemInPlaylistOmit<ExtArgs> | null;
    /**
     * The data used to update ProblemInPlaylists.
     */
    data: XOR<
      ProblemInPlaylistUpdateManyMutationInput,
      ProblemInPlaylistUncheckedUpdateManyInput
    >;
    /**
     * Filter which ProblemInPlaylists to update
     */
    where?: ProblemInPlaylistWhereInput;
    /**
     * Limit how many ProblemInPlaylists to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInPlaylistIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * ProblemInPlaylist upsert
   */
  export type ProblemInPlaylistUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProblemInPlaylist
     */
    select?: ProblemInPlaylistSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProblemInPlaylist
     */
    omit?: ProblemInPlaylistOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInPlaylistInclude<ExtArgs> | null;
    /**
     * The filter to search for the ProblemInPlaylist to update in case it exists.
     */
    where: ProblemInPlaylistWhereUniqueInput;
    /**
     * In case the ProblemInPlaylist found by the `where` argument doesn't exist, create a new ProblemInPlaylist with this data.
     */
    create: XOR<
      ProblemInPlaylistCreateInput,
      ProblemInPlaylistUncheckedCreateInput
    >;
    /**
     * In case the ProblemInPlaylist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<
      ProblemInPlaylistUpdateInput,
      ProblemInPlaylistUncheckedUpdateInput
    >;
  };

  /**
   * ProblemInPlaylist delete
   */
  export type ProblemInPlaylistDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProblemInPlaylist
     */
    select?: ProblemInPlaylistSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProblemInPlaylist
     */
    omit?: ProblemInPlaylistOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInPlaylistInclude<ExtArgs> | null;
    /**
     * Filter which ProblemInPlaylist to delete.
     */
    where: ProblemInPlaylistWhereUniqueInput;
  };

  /**
   * ProblemInPlaylist deleteMany
   */
  export type ProblemInPlaylistDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which ProblemInPlaylists to delete
     */
    where?: ProblemInPlaylistWhereInput;
    /**
     * Limit how many ProblemInPlaylists to delete.
     */
    limit?: number;
  };

  /**
   * ProblemInPlaylist without action
   */
  export type ProblemInPlaylistDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProblemInPlaylist
     */
    select?: ProblemInPlaylistSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProblemInPlaylist
     */
    omit?: ProblemInPlaylistOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInPlaylistInclude<ExtArgs> | null;
  };

  /**
   * Model Subscription
   */

  export type AggregateSubscription = {
    _count: SubscriptionCountAggregateOutputType | null;
    _min: SubscriptionMinAggregateOutputType | null;
    _max: SubscriptionMaxAggregateOutputType | null;
  };

  export type SubscriptionMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    startDate: Date | null;
    endDate: Date | null;
    isActive: boolean | null;
  };

  export type SubscriptionMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    startDate: Date | null;
    endDate: Date | null;
    isActive: boolean | null;
  };

  export type SubscriptionCountAggregateOutputType = {
    id: number;
    userId: number;
    startDate: number;
    endDate: number;
    isActive: number;
    _all: number;
  };

  export type SubscriptionMinAggregateInputType = {
    id?: true;
    userId?: true;
    startDate?: true;
    endDate?: true;
    isActive?: true;
  };

  export type SubscriptionMaxAggregateInputType = {
    id?: true;
    userId?: true;
    startDate?: true;
    endDate?: true;
    isActive?: true;
  };

  export type SubscriptionCountAggregateInputType = {
    id?: true;
    userId?: true;
    startDate?: true;
    endDate?: true;
    isActive?: true;
    _all?: true;
  };

  export type SubscriptionAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Subscription to aggregate.
     */
    where?: SubscriptionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?:
      | SubscriptionOrderByWithRelationInput
      | SubscriptionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: SubscriptionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Subscriptions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Subscriptions
     **/
    _count?: true | SubscriptionCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: SubscriptionMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: SubscriptionMaxAggregateInputType;
  };

  export type GetSubscriptionAggregateType<
    T extends SubscriptionAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateSubscription]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscription[P]>
      : GetScalarType<T[P], AggregateSubscription[P]>;
  };

  export type SubscriptionGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: SubscriptionWhereInput;
    orderBy?:
      | SubscriptionOrderByWithAggregationInput
      | SubscriptionOrderByWithAggregationInput[];
    by: SubscriptionScalarFieldEnum[] | SubscriptionScalarFieldEnum;
    having?: SubscriptionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SubscriptionCountAggregateInputType | true;
    _min?: SubscriptionMinAggregateInputType;
    _max?: SubscriptionMaxAggregateInputType;
  };

  export type SubscriptionGroupByOutputType = {
    id: string;
    userId: string;
    startDate: Date;
    endDate: Date;
    isActive: boolean;
    _count: SubscriptionCountAggregateOutputType | null;
    _min: SubscriptionMinAggregateOutputType | null;
    _max: SubscriptionMaxAggregateOutputType | null;
  };

  type GetSubscriptionGroupByPayload<T extends SubscriptionGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<SubscriptionGroupByOutputType, T["by"]> & {
          [P in keyof T &
            keyof SubscriptionGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>;
        }
      >
    >;

  export type SubscriptionSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      startDate?: boolean;
      endDate?: boolean;
      isActive?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["subscription"]
  >;

  export type SubscriptionSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      startDate?: boolean;
      endDate?: boolean;
      isActive?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["subscription"]
  >;

  export type SubscriptionSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      startDate?: boolean;
      endDate?: boolean;
      isActive?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["subscription"]
  >;

  export type SubscriptionSelectScalar = {
    id?: boolean;
    userId?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    isActive?: boolean;
  };

  export type SubscriptionOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    "id" | "userId" | "startDate" | "endDate" | "isActive",
    ExtArgs["result"]["subscription"]
  >;
  export type SubscriptionInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type SubscriptionIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type SubscriptionIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $SubscriptionPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "Subscription";
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        userId: string;
        startDate: Date;
        endDate: Date;
        isActive: boolean;
      },
      ExtArgs["result"]["subscription"]
    >;
    composites: {};
  };

  type SubscriptionGetPayload<
    S extends boolean | null | undefined | SubscriptionDefaultArgs,
  > = $Result.GetResult<Prisma.$SubscriptionPayload, S>;

  type SubscriptionCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    SubscriptionFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: SubscriptionCountAggregateInputType | true;
  };

  export interface SubscriptionDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Subscription"];
      meta: { name: "Subscription" };
    };
    /**
     * Find zero or one Subscription that matches the filter.
     * @param {SubscriptionFindUniqueArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriptionFindUniqueArgs>(
      args: SelectSubset<T, SubscriptionFindUniqueArgs<ExtArgs>>
    ): Prisma__SubscriptionClient<
      $Result.GetResult<
        Prisma.$SubscriptionPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Subscription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubscriptionFindUniqueOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriptionFindUniqueOrThrowArgs>(
      args: SelectSubset<T, SubscriptionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SubscriptionClient<
      $Result.GetResult<
        Prisma.$SubscriptionPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Subscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriptionFindFirstArgs>(
      args?: SelectSubset<T, SubscriptionFindFirstArgs<ExtArgs>>
    ): Prisma__SubscriptionClient<
      $Result.GetResult<
        Prisma.$SubscriptionPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Subscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriptionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, SubscriptionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SubscriptionClient<
      $Result.GetResult<
        Prisma.$SubscriptionPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Subscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subscriptions
     * const subscriptions = await prisma.subscription.findMany()
     *
     * // Get first 10 Subscriptions
     * const subscriptions = await prisma.subscription.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.findMany({ select: { id: true } })
     *
     */
    findMany<T extends SubscriptionFindManyArgs>(
      args?: SelectSubset<T, SubscriptionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$SubscriptionPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Subscription.
     * @param {SubscriptionCreateArgs} args - Arguments to create a Subscription.
     * @example
     * // Create one Subscription
     * const Subscription = await prisma.subscription.create({
     *   data: {
     *     // ... data to create a Subscription
     *   }
     * })
     *
     */
    create<T extends SubscriptionCreateArgs>(
      args: SelectSubset<T, SubscriptionCreateArgs<ExtArgs>>
    ): Prisma__SubscriptionClient<
      $Result.GetResult<
        Prisma.$SubscriptionPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Subscriptions.
     * @param {SubscriptionCreateManyArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends SubscriptionCreateManyArgs>(
      args?: SelectSubset<T, SubscriptionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Subscriptions and returns the data saved in the database.
     * @param {SubscriptionCreateManyAndReturnArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Subscriptions and only return the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends SubscriptionCreateManyAndReturnArgs>(
      args?: SelectSubset<T, SubscriptionCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$SubscriptionPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Subscription.
     * @param {SubscriptionDeleteArgs} args - Arguments to delete one Subscription.
     * @example
     * // Delete one Subscription
     * const Subscription = await prisma.subscription.delete({
     *   where: {
     *     // ... filter to delete one Subscription
     *   }
     * })
     *
     */
    delete<T extends SubscriptionDeleteArgs>(
      args: SelectSubset<T, SubscriptionDeleteArgs<ExtArgs>>
    ): Prisma__SubscriptionClient<
      $Result.GetResult<
        Prisma.$SubscriptionPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Subscription.
     * @param {SubscriptionUpdateArgs} args - Arguments to update one Subscription.
     * @example
     * // Update one Subscription
     * const subscription = await prisma.subscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends SubscriptionUpdateArgs>(
      args: SelectSubset<T, SubscriptionUpdateArgs<ExtArgs>>
    ): Prisma__SubscriptionClient<
      $Result.GetResult<
        Prisma.$SubscriptionPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Subscriptions.
     * @param {SubscriptionDeleteManyArgs} args - Arguments to filter Subscriptions to delete.
     * @example
     * // Delete a few Subscriptions
     * const { count } = await prisma.subscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends SubscriptionDeleteManyArgs>(
      args?: SelectSubset<T, SubscriptionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends SubscriptionUpdateManyArgs>(
      args: SelectSubset<T, SubscriptionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Subscriptions and returns the data updated in the database.
     * @param {SubscriptionUpdateManyAndReturnArgs} args - Arguments to update many Subscriptions.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Subscriptions and only return the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends SubscriptionUpdateManyAndReturnArgs>(
      args: SelectSubset<T, SubscriptionUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$SubscriptionPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Subscription.
     * @param {SubscriptionUpsertArgs} args - Arguments to update or create a Subscription.
     * @example
     * // Update or create a Subscription
     * const subscription = await prisma.subscription.upsert({
     *   create: {
     *     // ... data to create a Subscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subscription we want to update
     *   }
     * })
     */
    upsert<T extends SubscriptionUpsertArgs>(
      args: SelectSubset<T, SubscriptionUpsertArgs<ExtArgs>>
    ): Prisma__SubscriptionClient<
      $Result.GetResult<
        Prisma.$SubscriptionPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionCountArgs} args - Arguments to filter Subscriptions to count.
     * @example
     * // Count the number of Subscriptions
     * const count = await prisma.subscription.count({
     *   where: {
     *     // ... the filter for the Subscriptions we want to count
     *   }
     * })
     **/
    count<T extends SubscriptionCountArgs>(
      args?: Subset<T, SubscriptionCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], SubscriptionCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends SubscriptionAggregateArgs>(
      args: Subset<T, SubscriptionAggregateArgs>
    ): Prisma.PrismaPromise<GetSubscriptionAggregateType<T>>;

    /**
     * Group by Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends SubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionGroupByArgs["orderBy"] }
        : { orderBy?: SubscriptionGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, SubscriptionGroupByArgs, OrderByArg> &
        InputErrors
    ): {} extends InputErrors
      ? GetSubscriptionGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Subscription model
     */
    readonly fields: SubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Subscription model
   */
  interface SubscriptionFieldRefs {
    readonly id: FieldRef<"Subscription", "String">;
    readonly userId: FieldRef<"Subscription", "String">;
    readonly startDate: FieldRef<"Subscription", "DateTime">;
    readonly endDate: FieldRef<"Subscription", "DateTime">;
    readonly isActive: FieldRef<"Subscription", "Boolean">;
  }

  // Custom InputTypes
  /**
   * Subscription findUnique
   */
  export type SubscriptionFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null;
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput;
  };

  /**
   * Subscription findUniqueOrThrow
   */
  export type SubscriptionFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null;
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput;
  };

  /**
   * Subscription findFirst
   */
  export type SubscriptionFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null;
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?:
      | SubscriptionOrderByWithRelationInput
      | SubscriptionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Subscriptions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[];
  };

  /**
   * Subscription findFirstOrThrow
   */
  export type SubscriptionFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null;
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?:
      | SubscriptionOrderByWithRelationInput
      | SubscriptionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Subscriptions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[];
  };

  /**
   * Subscription findMany
   */
  export type SubscriptionFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null;
    /**
     * Filter, which Subscriptions to fetch.
     */
    where?: SubscriptionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?:
      | SubscriptionOrderByWithRelationInput
      | SubscriptionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Subscriptions.
     */
    skip?: number;
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[];
  };

  /**
   * Subscription create
   */
  export type SubscriptionCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null;
    /**
     * The data needed to create a Subscription.
     */
    data: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>;
  };

  /**
   * Subscription createMany
   */
  export type SubscriptionCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Subscription createManyAndReturn
   */
  export type SubscriptionCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null;
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Subscription update
   */
  export type SubscriptionUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null;
    /**
     * The data needed to update a Subscription.
     */
    data: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>;
    /**
     * Choose, which Subscription to update.
     */
    where: SubscriptionWhereUniqueInput;
  };

  /**
   * Subscription updateMany
   */
  export type SubscriptionUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<
      SubscriptionUpdateManyMutationInput,
      SubscriptionUncheckedUpdateManyInput
    >;
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput;
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number;
  };

  /**
   * Subscription updateManyAndReturn
   */
  export type SubscriptionUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null;
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<
      SubscriptionUpdateManyMutationInput,
      SubscriptionUncheckedUpdateManyInput
    >;
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput;
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Subscription upsert
   */
  export type SubscriptionUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null;
    /**
     * The filter to search for the Subscription to update in case it exists.
     */
    where: SubscriptionWhereUniqueInput;
    /**
     * In case the Subscription found by the `where` argument doesn't exist, create a new Subscription with this data.
     */
    create: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>;
    /**
     * In case the Subscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>;
  };

  /**
   * Subscription delete
   */
  export type SubscriptionDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null;
    /**
     * Filter which Subscription to delete.
     */
    where: SubscriptionWhereUniqueInput;
  };

  /**
   * Subscription deleteMany
   */
  export type SubscriptionDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Subscriptions to delete
     */
    where?: SubscriptionWhereInput;
    /**
     * Limit how many Subscriptions to delete.
     */
    limit?: number;
  };

  /**
   * Subscription without action
   */
  export type SubscriptionDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: "ReadUncommitted";
    ReadCommitted: "ReadCommitted";
    RepeatableRead: "RepeatableRead";
    Serializable: "Serializable";
  };

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const UserScalarFieldEnum: {
    id: "id";
    name: "name";
    email: "email";
    avatar: "avatar";
    role: "role";
    password: "password";
    refreshToken: "refreshToken";
    createdAt: "createdAt";
    updatedAt: "updatedAt";
  };

  export type UserScalarFieldEnum =
    (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const ProblemScalarFieldEnum: {
    id: "id";
    title: "title";
    problemNumber: "problemNumber";
    description: "description";
    difficulty: "difficulty";
    topic: "topic";
    userId: "userId";
    examples: "examples";
    constraints: "constraints";
    hints: "hints";
    editorial: "editorial";
    codeSnippets: "codeSnippets";
    referenceSolutions: "referenceSolutions";
    isPremium: "isPremium";
    createdAt: "createdAt";
    updatedAt: "updatedAt";
  };

  export type ProblemScalarFieldEnum =
    (typeof ProblemScalarFieldEnum)[keyof typeof ProblemScalarFieldEnum];

  export const ProblemTestCaseScalarFieldEnum: {
    id: "id";
    input: "input";
    output: "output";
    isPublic: "isPublic";
    problemId: "problemId";
    createdAt: "createdAt";
    updatedAt: "updatedAt";
  };

  export type ProblemTestCaseScalarFieldEnum =
    (typeof ProblemTestCaseScalarFieldEnum)[keyof typeof ProblemTestCaseScalarFieldEnum];

  export const SubmissionScalarFieldEnum: {
    id: "id";
    userId: "userId";
    problemId: "problemId";
    sourceCode: "sourceCode";
    language: "language";
    stdin: "stdin";
    stdout: "stdout";
    stderr: "stderr";
    compileOutput: "compileOutput";
    status: "status";
    memory: "memory";
    time: "time";
    createdAt: "createdAt";
    updatedAt: "updatedAt";
  };

  export type SubmissionScalarFieldEnum =
    (typeof SubmissionScalarFieldEnum)[keyof typeof SubmissionScalarFieldEnum];

  export const TestCaseScalarFieldEnum: {
    id: "id";
    submissionId: "submissionId";
    testCase: "testCase";
    passed: "passed";
    stdout: "stdout";
    expected: "expected";
    stderr: "stderr";
    compileOutput: "compileOutput";
    status: "status";
    memory: "memory";
    time: "time";
    createdAt: "createdAt";
    updatedAt: "updatedAt";
  };

  export type TestCaseScalarFieldEnum =
    (typeof TestCaseScalarFieldEnum)[keyof typeof TestCaseScalarFieldEnum];

  export const ProblemSolvedScalarFieldEnum: {
    id: "id";
    userId: "userId";
    problemId: "problemId";
    createdAt: "createdAt";
    updatedAt: "updatedAt";
  };

  export type ProblemSolvedScalarFieldEnum =
    (typeof ProblemSolvedScalarFieldEnum)[keyof typeof ProblemSolvedScalarFieldEnum];

  export const DiscussionScalarFieldEnum: {
    id: "id";
    userId: "userId";
    problemId: "problemId";
    content: "content";
    createdAt: "createdAt";
    updatedAt: "updatedAt";
    parentId: "parentId";
  };

  export type DiscussionScalarFieldEnum =
    (typeof DiscussionScalarFieldEnum)[keyof typeof DiscussionScalarFieldEnum];

  export const ProblemVoteScalarFieldEnum: {
    id: "id";
    userId: "userId";
    problemId: "problemId";
    type: "type";
    createdAt: "createdAt";
  };

  export type ProblemVoteScalarFieldEnum =
    (typeof ProblemVoteScalarFieldEnum)[keyof typeof ProblemVoteScalarFieldEnum];

  export const PlaylistScalarFieldEnum: {
    id: "id";
    name: "name";
    description: "description";
    userId: "userId";
    createdAt: "createdAt";
    updatedAt: "updatedAt";
  };

  export type PlaylistScalarFieldEnum =
    (typeof PlaylistScalarFieldEnum)[keyof typeof PlaylistScalarFieldEnum];

  export const ProblemInPlaylistScalarFieldEnum: {
    id: "id";
    playlistId: "playlistId";
    problemId: "problemId";
    createdAt: "createdAt";
    updatedAt: "updatedAt";
  };

  export type ProblemInPlaylistScalarFieldEnum =
    (typeof ProblemInPlaylistScalarFieldEnum)[keyof typeof ProblemInPlaylistScalarFieldEnum];

  export const SubscriptionScalarFieldEnum: {
    id: "id";
    userId: "userId";
    startDate: "startDate";
    endDate: "endDate";
    isActive: "isActive";
  };

  export type SubscriptionScalarFieldEnum =
    (typeof SubscriptionScalarFieldEnum)[keyof typeof SubscriptionScalarFieldEnum];

  export const SortOrder: {
    asc: "asc";
    desc: "desc";
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull;
    JsonNull: typeof JsonNull;
  };

  export type NullableJsonNullValueInput =
    (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];

  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull;
  };

  export type JsonNullValueInput =
    (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput];

  export const QueryMode: {
    default: "default";
    insensitive: "insensitive";
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const JsonNullValueFilter: {
    DbNull: typeof DbNull;
    JsonNull: typeof JsonNull;
    AnyNull: typeof AnyNull;
  };

  export type JsonNullValueFilter =
    (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];

  export const NullsOrder: {
    first: "first";
    last: "last";
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "String"
  >;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "String[]"
  >;

  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Json"
  >;

  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "QueryMode"
  >;

  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "UserRole"
  >;

  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "UserRole[]"
  >;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "DateTime"
  >;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "DateTime[]"
  >;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Int"
  >;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Int[]"
  >;

  /**
   * Reference to a field of type 'Difficulty'
   */
  export type EnumDifficultyFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Difficulty"
  >;

  /**
   * Reference to a field of type 'Difficulty[]'
   */
  export type ListEnumDifficultyFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Difficulty[]"
  >;

  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Boolean"
  >;

  /**
   * Reference to a field of type 'VoteType'
   */
  export type EnumVoteTypeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "VoteType"
  >;

  /**
   * Reference to a field of type 'VoteType[]'
   */
  export type ListEnumVoteTypeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "VoteType[]"
  >;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Float"
  >;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Float[]"
  >;

  /**
   * Deep Input Types
   */

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[];
    OR?: UserWhereInput[];
    NOT?: UserWhereInput | UserWhereInput[];
    id?: StringFilter<"User"> | string;
    name?: StringNullableFilter<"User"> | string | null;
    email?: StringFilter<"User"> | string;
    avatar?: JsonNullableFilter<"User">;
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole;
    password?: StringFilter<"User"> | string;
    refreshToken?: StringNullableFilter<"User"> | string | null;
    createdAt?: DateTimeFilter<"User"> | Date | string;
    updatedAt?: DateTimeFilter<"User"> | Date | string;
    problem?: ProblemListRelationFilter;
    submission?: SubmissionListRelationFilter;
    problemSolved?: ProblemSolvedListRelationFilter;
    discussions?: DiscussionListRelationFilter;
    votesOnProblems?: ProblemVoteListRelationFilter;
    playlists?: PlaylistListRelationFilter;
    subscription?: XOR<
      SubscriptionNullableScalarRelationFilter,
      SubscriptionWhereInput
    > | null;
  };

  export type UserOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrderInput | SortOrder;
    email?: SortOrder;
    avatar?: SortOrderInput | SortOrder;
    role?: SortOrder;
    password?: SortOrder;
    refreshToken?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    problem?: ProblemOrderByRelationAggregateInput;
    submission?: SubmissionOrderByRelationAggregateInput;
    problemSolved?: ProblemSolvedOrderByRelationAggregateInput;
    discussions?: DiscussionOrderByRelationAggregateInput;
    votesOnProblems?: ProblemVoteOrderByRelationAggregateInput;
    playlists?: PlaylistOrderByRelationAggregateInput;
    subscription?: SubscriptionOrderByWithRelationInput;
  };

  export type UserWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: UserWhereInput | UserWhereInput[];
      OR?: UserWhereInput[];
      NOT?: UserWhereInput | UserWhereInput[];
      name?: StringNullableFilter<"User"> | string | null;
      avatar?: JsonNullableFilter<"User">;
      role?: EnumUserRoleFilter<"User"> | $Enums.UserRole;
      password?: StringFilter<"User"> | string;
      refreshToken?: StringNullableFilter<"User"> | string | null;
      createdAt?: DateTimeFilter<"User"> | Date | string;
      updatedAt?: DateTimeFilter<"User"> | Date | string;
      problem?: ProblemListRelationFilter;
      submission?: SubmissionListRelationFilter;
      problemSolved?: ProblemSolvedListRelationFilter;
      discussions?: DiscussionListRelationFilter;
      votesOnProblems?: ProblemVoteListRelationFilter;
      playlists?: PlaylistListRelationFilter;
      subscription?: XOR<
        SubscriptionNullableScalarRelationFilter,
        SubscriptionWhereInput
      > | null;
    },
    "id" | "email"
  >;

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrderInput | SortOrder;
    email?: SortOrder;
    avatar?: SortOrderInput | SortOrder;
    role?: SortOrder;
    password?: SortOrder;
    refreshToken?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: UserCountOrderByAggregateInput;
    _max?: UserMaxOrderByAggregateInput;
    _min?: UserMinOrderByAggregateInput;
  };

  export type UserScalarWhereWithAggregatesInput = {
    AND?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    OR?: UserScalarWhereWithAggregatesInput[];
    NOT?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"User"> | string;
    name?: StringNullableWithAggregatesFilter<"User"> | string | null;
    email?: StringWithAggregatesFilter<"User"> | string;
    avatar?: JsonNullableWithAggregatesFilter<"User">;
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole;
    password?: StringWithAggregatesFilter<"User"> | string;
    refreshToken?: StringNullableWithAggregatesFilter<"User"> | string | null;
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string;
  };

  export type ProblemWhereInput = {
    AND?: ProblemWhereInput | ProblemWhereInput[];
    OR?: ProblemWhereInput[];
    NOT?: ProblemWhereInput | ProblemWhereInput[];
    id?: StringFilter<"Problem"> | string;
    title?: StringFilter<"Problem"> | string;
    problemNumber?: IntFilter<"Problem"> | number;
    description?: StringFilter<"Problem"> | string;
    difficulty?: EnumDifficultyFilter<"Problem"> | $Enums.Difficulty;
    topic?: StringNullableListFilter<"Problem">;
    userId?: StringFilter<"Problem"> | string;
    examples?: JsonFilter<"Problem">;
    constraints?: StringFilter<"Problem"> | string;
    hints?: StringNullableFilter<"Problem"> | string | null;
    editorial?: StringNullableFilter<"Problem"> | string | null;
    codeSnippets?: JsonFilter<"Problem">;
    referenceSolutions?: JsonFilter<"Problem">;
    isPremium?: BoolFilter<"Problem"> | boolean;
    createdAt?: DateTimeFilter<"Problem"> | Date | string;
    updatedAt?: DateTimeFilter<"Problem"> | Date | string;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    submission?: SubmissionListRelationFilter;
    solvedBy?: ProblemSolvedListRelationFilter;
    testcases?: ProblemTestCaseListRelationFilter;
    discussions?: DiscussionListRelationFilter;
    votes?: ProblemVoteListRelationFilter;
    problemsPlatlists?: ProblemInPlaylistListRelationFilter;
  };

  export type ProblemOrderByWithRelationInput = {
    id?: SortOrder;
    title?: SortOrder;
    problemNumber?: SortOrder;
    description?: SortOrder;
    difficulty?: SortOrder;
    topic?: SortOrder;
    userId?: SortOrder;
    examples?: SortOrder;
    constraints?: SortOrder;
    hints?: SortOrderInput | SortOrder;
    editorial?: SortOrderInput | SortOrder;
    codeSnippets?: SortOrder;
    referenceSolutions?: SortOrder;
    isPremium?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    user?: UserOrderByWithRelationInput;
    submission?: SubmissionOrderByRelationAggregateInput;
    solvedBy?: ProblemSolvedOrderByRelationAggregateInput;
    testcases?: ProblemTestCaseOrderByRelationAggregateInput;
    discussions?: DiscussionOrderByRelationAggregateInput;
    votes?: ProblemVoteOrderByRelationAggregateInput;
    problemsPlatlists?: ProblemInPlaylistOrderByRelationAggregateInput;
  };

  export type ProblemWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: ProblemWhereInput | ProblemWhereInput[];
      OR?: ProblemWhereInput[];
      NOT?: ProblemWhereInput | ProblemWhereInput[];
      title?: StringFilter<"Problem"> | string;
      problemNumber?: IntFilter<"Problem"> | number;
      description?: StringFilter<"Problem"> | string;
      difficulty?: EnumDifficultyFilter<"Problem"> | $Enums.Difficulty;
      topic?: StringNullableListFilter<"Problem">;
      userId?: StringFilter<"Problem"> | string;
      examples?: JsonFilter<"Problem">;
      constraints?: StringFilter<"Problem"> | string;
      hints?: StringNullableFilter<"Problem"> | string | null;
      editorial?: StringNullableFilter<"Problem"> | string | null;
      codeSnippets?: JsonFilter<"Problem">;
      referenceSolutions?: JsonFilter<"Problem">;
      isPremium?: BoolFilter<"Problem"> | boolean;
      createdAt?: DateTimeFilter<"Problem"> | Date | string;
      updatedAt?: DateTimeFilter<"Problem"> | Date | string;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
      submission?: SubmissionListRelationFilter;
      solvedBy?: ProblemSolvedListRelationFilter;
      testcases?: ProblemTestCaseListRelationFilter;
      discussions?: DiscussionListRelationFilter;
      votes?: ProblemVoteListRelationFilter;
      problemsPlatlists?: ProblemInPlaylistListRelationFilter;
    },
    "id"
  >;

  export type ProblemOrderByWithAggregationInput = {
    id?: SortOrder;
    title?: SortOrder;
    problemNumber?: SortOrder;
    description?: SortOrder;
    difficulty?: SortOrder;
    topic?: SortOrder;
    userId?: SortOrder;
    examples?: SortOrder;
    constraints?: SortOrder;
    hints?: SortOrderInput | SortOrder;
    editorial?: SortOrderInput | SortOrder;
    codeSnippets?: SortOrder;
    referenceSolutions?: SortOrder;
    isPremium?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: ProblemCountOrderByAggregateInput;
    _avg?: ProblemAvgOrderByAggregateInput;
    _max?: ProblemMaxOrderByAggregateInput;
    _min?: ProblemMinOrderByAggregateInput;
    _sum?: ProblemSumOrderByAggregateInput;
  };

  export type ProblemScalarWhereWithAggregatesInput = {
    AND?:
      | ProblemScalarWhereWithAggregatesInput
      | ProblemScalarWhereWithAggregatesInput[];
    OR?: ProblemScalarWhereWithAggregatesInput[];
    NOT?:
      | ProblemScalarWhereWithAggregatesInput
      | ProblemScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"Problem"> | string;
    title?: StringWithAggregatesFilter<"Problem"> | string;
    problemNumber?: IntWithAggregatesFilter<"Problem"> | number;
    description?: StringWithAggregatesFilter<"Problem"> | string;
    difficulty?:
      | EnumDifficultyWithAggregatesFilter<"Problem">
      | $Enums.Difficulty;
    topic?: StringNullableListFilter<"Problem">;
    userId?: StringWithAggregatesFilter<"Problem"> | string;
    examples?: JsonWithAggregatesFilter<"Problem">;
    constraints?: StringWithAggregatesFilter<"Problem"> | string;
    hints?: StringNullableWithAggregatesFilter<"Problem"> | string | null;
    editorial?: StringNullableWithAggregatesFilter<"Problem"> | string | null;
    codeSnippets?: JsonWithAggregatesFilter<"Problem">;
    referenceSolutions?: JsonWithAggregatesFilter<"Problem">;
    isPremium?: BoolWithAggregatesFilter<"Problem"> | boolean;
    createdAt?: DateTimeWithAggregatesFilter<"Problem"> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<"Problem"> | Date | string;
  };

  export type ProblemTestCaseWhereInput = {
    AND?: ProblemTestCaseWhereInput | ProblemTestCaseWhereInput[];
    OR?: ProblemTestCaseWhereInput[];
    NOT?: ProblemTestCaseWhereInput | ProblemTestCaseWhereInput[];
    id?: StringFilter<"ProblemTestCase"> | string;
    input?: StringFilter<"ProblemTestCase"> | string;
    output?: StringFilter<"ProblemTestCase"> | string;
    isPublic?: BoolFilter<"ProblemTestCase"> | boolean;
    problemId?: StringFilter<"ProblemTestCase"> | string;
    createdAt?: DateTimeFilter<"ProblemTestCase"> | Date | string;
    updatedAt?: DateTimeFilter<"ProblemTestCase"> | Date | string;
    problem?: XOR<ProblemScalarRelationFilter, ProblemWhereInput>;
  };

  export type ProblemTestCaseOrderByWithRelationInput = {
    id?: SortOrder;
    input?: SortOrder;
    output?: SortOrder;
    isPublic?: SortOrder;
    problemId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    problem?: ProblemOrderByWithRelationInput;
  };

  export type ProblemTestCaseWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: ProblemTestCaseWhereInput | ProblemTestCaseWhereInput[];
      OR?: ProblemTestCaseWhereInput[];
      NOT?: ProblemTestCaseWhereInput | ProblemTestCaseWhereInput[];
      input?: StringFilter<"ProblemTestCase"> | string;
      output?: StringFilter<"ProblemTestCase"> | string;
      isPublic?: BoolFilter<"ProblemTestCase"> | boolean;
      problemId?: StringFilter<"ProblemTestCase"> | string;
      createdAt?: DateTimeFilter<"ProblemTestCase"> | Date | string;
      updatedAt?: DateTimeFilter<"ProblemTestCase"> | Date | string;
      problem?: XOR<ProblemScalarRelationFilter, ProblemWhereInput>;
    },
    "id"
  >;

  export type ProblemTestCaseOrderByWithAggregationInput = {
    id?: SortOrder;
    input?: SortOrder;
    output?: SortOrder;
    isPublic?: SortOrder;
    problemId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: ProblemTestCaseCountOrderByAggregateInput;
    _max?: ProblemTestCaseMaxOrderByAggregateInput;
    _min?: ProblemTestCaseMinOrderByAggregateInput;
  };

  export type ProblemTestCaseScalarWhereWithAggregatesInput = {
    AND?:
      | ProblemTestCaseScalarWhereWithAggregatesInput
      | ProblemTestCaseScalarWhereWithAggregatesInput[];
    OR?: ProblemTestCaseScalarWhereWithAggregatesInput[];
    NOT?:
      | ProblemTestCaseScalarWhereWithAggregatesInput
      | ProblemTestCaseScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"ProblemTestCase"> | string;
    input?: StringWithAggregatesFilter<"ProblemTestCase"> | string;
    output?: StringWithAggregatesFilter<"ProblemTestCase"> | string;
    isPublic?: BoolWithAggregatesFilter<"ProblemTestCase"> | boolean;
    problemId?: StringWithAggregatesFilter<"ProblemTestCase"> | string;
    createdAt?: DateTimeWithAggregatesFilter<"ProblemTestCase"> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<"ProblemTestCase"> | Date | string;
  };

  export type SubmissionWhereInput = {
    AND?: SubmissionWhereInput | SubmissionWhereInput[];
    OR?: SubmissionWhereInput[];
    NOT?: SubmissionWhereInput | SubmissionWhereInput[];
    id?: StringFilter<"Submission"> | string;
    userId?: StringFilter<"Submission"> | string;
    problemId?: StringFilter<"Submission"> | string;
    sourceCode?: JsonFilter<"Submission">;
    language?: StringFilter<"Submission"> | string;
    stdin?: StringNullableFilter<"Submission"> | string | null;
    stdout?: StringNullableFilter<"Submission"> | string | null;
    stderr?: StringNullableFilter<"Submission"> | string | null;
    compileOutput?: StringNullableFilter<"Submission"> | string | null;
    status?: StringFilter<"Submission"> | string;
    memory?: StringNullableFilter<"Submission"> | string | null;
    time?: StringNullableFilter<"Submission"> | string | null;
    createdAt?: DateTimeFilter<"Submission"> | Date | string;
    updatedAt?: DateTimeFilter<"Submission"> | Date | string;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    problem?: XOR<ProblemScalarRelationFilter, ProblemWhereInput>;
    testcase?: TestCaseListRelationFilter;
  };

  export type SubmissionOrderByWithRelationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    problemId?: SortOrder;
    sourceCode?: SortOrder;
    language?: SortOrder;
    stdin?: SortOrderInput | SortOrder;
    stdout?: SortOrderInput | SortOrder;
    stderr?: SortOrderInput | SortOrder;
    compileOutput?: SortOrderInput | SortOrder;
    status?: SortOrder;
    memory?: SortOrderInput | SortOrder;
    time?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    user?: UserOrderByWithRelationInput;
    problem?: ProblemOrderByWithRelationInput;
    testcase?: TestCaseOrderByRelationAggregateInput;
  };

  export type SubmissionWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: SubmissionWhereInput | SubmissionWhereInput[];
      OR?: SubmissionWhereInput[];
      NOT?: SubmissionWhereInput | SubmissionWhereInput[];
      userId?: StringFilter<"Submission"> | string;
      problemId?: StringFilter<"Submission"> | string;
      sourceCode?: JsonFilter<"Submission">;
      language?: StringFilter<"Submission"> | string;
      stdin?: StringNullableFilter<"Submission"> | string | null;
      stdout?: StringNullableFilter<"Submission"> | string | null;
      stderr?: StringNullableFilter<"Submission"> | string | null;
      compileOutput?: StringNullableFilter<"Submission"> | string | null;
      status?: StringFilter<"Submission"> | string;
      memory?: StringNullableFilter<"Submission"> | string | null;
      time?: StringNullableFilter<"Submission"> | string | null;
      createdAt?: DateTimeFilter<"Submission"> | Date | string;
      updatedAt?: DateTimeFilter<"Submission"> | Date | string;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
      problem?: XOR<ProblemScalarRelationFilter, ProblemWhereInput>;
      testcase?: TestCaseListRelationFilter;
    },
    "id"
  >;

  export type SubmissionOrderByWithAggregationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    problemId?: SortOrder;
    sourceCode?: SortOrder;
    language?: SortOrder;
    stdin?: SortOrderInput | SortOrder;
    stdout?: SortOrderInput | SortOrder;
    stderr?: SortOrderInput | SortOrder;
    compileOutput?: SortOrderInput | SortOrder;
    status?: SortOrder;
    memory?: SortOrderInput | SortOrder;
    time?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: SubmissionCountOrderByAggregateInput;
    _max?: SubmissionMaxOrderByAggregateInput;
    _min?: SubmissionMinOrderByAggregateInput;
  };

  export type SubmissionScalarWhereWithAggregatesInput = {
    AND?:
      | SubmissionScalarWhereWithAggregatesInput
      | SubmissionScalarWhereWithAggregatesInput[];
    OR?: SubmissionScalarWhereWithAggregatesInput[];
    NOT?:
      | SubmissionScalarWhereWithAggregatesInput
      | SubmissionScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"Submission"> | string;
    userId?: StringWithAggregatesFilter<"Submission"> | string;
    problemId?: StringWithAggregatesFilter<"Submission"> | string;
    sourceCode?: JsonWithAggregatesFilter<"Submission">;
    language?: StringWithAggregatesFilter<"Submission"> | string;
    stdin?: StringNullableWithAggregatesFilter<"Submission"> | string | null;
    stdout?: StringNullableWithAggregatesFilter<"Submission"> | string | null;
    stderr?: StringNullableWithAggregatesFilter<"Submission"> | string | null;
    compileOutput?:
      | StringNullableWithAggregatesFilter<"Submission">
      | string
      | null;
    status?: StringWithAggregatesFilter<"Submission"> | string;
    memory?: StringNullableWithAggregatesFilter<"Submission"> | string | null;
    time?: StringNullableWithAggregatesFilter<"Submission"> | string | null;
    createdAt?: DateTimeWithAggregatesFilter<"Submission"> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<"Submission"> | Date | string;
  };

  export type TestCaseWhereInput = {
    AND?: TestCaseWhereInput | TestCaseWhereInput[];
    OR?: TestCaseWhereInput[];
    NOT?: TestCaseWhereInput | TestCaseWhereInput[];
    id?: StringFilter<"TestCase"> | string;
    submissionId?: StringFilter<"TestCase"> | string;
    testCase?: StringFilter<"TestCase"> | string;
    passed?: BoolFilter<"TestCase"> | boolean;
    stdout?: StringNullableFilter<"TestCase"> | string | null;
    expected?: StringFilter<"TestCase"> | string;
    stderr?: StringNullableFilter<"TestCase"> | string | null;
    compileOutput?: StringNullableFilter<"TestCase"> | string | null;
    status?: StringFilter<"TestCase"> | string;
    memory?: StringNullableFilter<"TestCase"> | string | null;
    time?: StringNullableFilter<"TestCase"> | string | null;
    createdAt?: DateTimeFilter<"TestCase"> | Date | string;
    updatedAt?: DateTimeFilter<"TestCase"> | Date | string;
    submission?: XOR<SubmissionScalarRelationFilter, SubmissionWhereInput>;
  };

  export type TestCaseOrderByWithRelationInput = {
    id?: SortOrder;
    submissionId?: SortOrder;
    testCase?: SortOrder;
    passed?: SortOrder;
    stdout?: SortOrderInput | SortOrder;
    expected?: SortOrder;
    stderr?: SortOrderInput | SortOrder;
    compileOutput?: SortOrderInput | SortOrder;
    status?: SortOrder;
    memory?: SortOrderInput | SortOrder;
    time?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    submission?: SubmissionOrderByWithRelationInput;
  };

  export type TestCaseWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: TestCaseWhereInput | TestCaseWhereInput[];
      OR?: TestCaseWhereInput[];
      NOT?: TestCaseWhereInput | TestCaseWhereInput[];
      submissionId?: StringFilter<"TestCase"> | string;
      testCase?: StringFilter<"TestCase"> | string;
      passed?: BoolFilter<"TestCase"> | boolean;
      stdout?: StringNullableFilter<"TestCase"> | string | null;
      expected?: StringFilter<"TestCase"> | string;
      stderr?: StringNullableFilter<"TestCase"> | string | null;
      compileOutput?: StringNullableFilter<"TestCase"> | string | null;
      status?: StringFilter<"TestCase"> | string;
      memory?: StringNullableFilter<"TestCase"> | string | null;
      time?: StringNullableFilter<"TestCase"> | string | null;
      createdAt?: DateTimeFilter<"TestCase"> | Date | string;
      updatedAt?: DateTimeFilter<"TestCase"> | Date | string;
      submission?: XOR<SubmissionScalarRelationFilter, SubmissionWhereInput>;
    },
    "id"
  >;

  export type TestCaseOrderByWithAggregationInput = {
    id?: SortOrder;
    submissionId?: SortOrder;
    testCase?: SortOrder;
    passed?: SortOrder;
    stdout?: SortOrderInput | SortOrder;
    expected?: SortOrder;
    stderr?: SortOrderInput | SortOrder;
    compileOutput?: SortOrderInput | SortOrder;
    status?: SortOrder;
    memory?: SortOrderInput | SortOrder;
    time?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: TestCaseCountOrderByAggregateInput;
    _max?: TestCaseMaxOrderByAggregateInput;
    _min?: TestCaseMinOrderByAggregateInput;
  };

  export type TestCaseScalarWhereWithAggregatesInput = {
    AND?:
      | TestCaseScalarWhereWithAggregatesInput
      | TestCaseScalarWhereWithAggregatesInput[];
    OR?: TestCaseScalarWhereWithAggregatesInput[];
    NOT?:
      | TestCaseScalarWhereWithAggregatesInput
      | TestCaseScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"TestCase"> | string;
    submissionId?: StringWithAggregatesFilter<"TestCase"> | string;
    testCase?: StringWithAggregatesFilter<"TestCase"> | string;
    passed?: BoolWithAggregatesFilter<"TestCase"> | boolean;
    stdout?: StringNullableWithAggregatesFilter<"TestCase"> | string | null;
    expected?: StringWithAggregatesFilter<"TestCase"> | string;
    stderr?: StringNullableWithAggregatesFilter<"TestCase"> | string | null;
    compileOutput?:
      | StringNullableWithAggregatesFilter<"TestCase">
      | string
      | null;
    status?: StringWithAggregatesFilter<"TestCase"> | string;
    memory?: StringNullableWithAggregatesFilter<"TestCase"> | string | null;
    time?: StringNullableWithAggregatesFilter<"TestCase"> | string | null;
    createdAt?: DateTimeWithAggregatesFilter<"TestCase"> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<"TestCase"> | Date | string;
  };

  export type ProblemSolvedWhereInput = {
    AND?: ProblemSolvedWhereInput | ProblemSolvedWhereInput[];
    OR?: ProblemSolvedWhereInput[];
    NOT?: ProblemSolvedWhereInput | ProblemSolvedWhereInput[];
    id?: StringFilter<"ProblemSolved"> | string;
    userId?: StringFilter<"ProblemSolved"> | string;
    problemId?: StringFilter<"ProblemSolved"> | string;
    createdAt?: DateTimeFilter<"ProblemSolved"> | Date | string;
    updatedAt?: DateTimeFilter<"ProblemSolved"> | Date | string;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    problem?: XOR<ProblemScalarRelationFilter, ProblemWhereInput>;
  };

  export type ProblemSolvedOrderByWithRelationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    problemId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    user?: UserOrderByWithRelationInput;
    problem?: ProblemOrderByWithRelationInput;
  };

  export type ProblemSolvedWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      userId_problemId?: ProblemSolvedUserIdProblemIdCompoundUniqueInput;
      AND?: ProblemSolvedWhereInput | ProblemSolvedWhereInput[];
      OR?: ProblemSolvedWhereInput[];
      NOT?: ProblemSolvedWhereInput | ProblemSolvedWhereInput[];
      userId?: StringFilter<"ProblemSolved"> | string;
      problemId?: StringFilter<"ProblemSolved"> | string;
      createdAt?: DateTimeFilter<"ProblemSolved"> | Date | string;
      updatedAt?: DateTimeFilter<"ProblemSolved"> | Date | string;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
      problem?: XOR<ProblemScalarRelationFilter, ProblemWhereInput>;
    },
    "id" | "userId_problemId"
  >;

  export type ProblemSolvedOrderByWithAggregationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    problemId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: ProblemSolvedCountOrderByAggregateInput;
    _max?: ProblemSolvedMaxOrderByAggregateInput;
    _min?: ProblemSolvedMinOrderByAggregateInput;
  };

  export type ProblemSolvedScalarWhereWithAggregatesInput = {
    AND?:
      | ProblemSolvedScalarWhereWithAggregatesInput
      | ProblemSolvedScalarWhereWithAggregatesInput[];
    OR?: ProblemSolvedScalarWhereWithAggregatesInput[];
    NOT?:
      | ProblemSolvedScalarWhereWithAggregatesInput
      | ProblemSolvedScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"ProblemSolved"> | string;
    userId?: StringWithAggregatesFilter<"ProblemSolved"> | string;
    problemId?: StringWithAggregatesFilter<"ProblemSolved"> | string;
    createdAt?: DateTimeWithAggregatesFilter<"ProblemSolved"> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<"ProblemSolved"> | Date | string;
  };

  export type DiscussionWhereInput = {
    AND?: DiscussionWhereInput | DiscussionWhereInput[];
    OR?: DiscussionWhereInput[];
    NOT?: DiscussionWhereInput | DiscussionWhereInput[];
    id?: StringFilter<"Discussion"> | string;
    userId?: StringFilter<"Discussion"> | string;
    problemId?: StringFilter<"Discussion"> | string;
    content?: StringFilter<"Discussion"> | string;
    createdAt?: DateTimeFilter<"Discussion"> | Date | string;
    updatedAt?: DateTimeFilter<"Discussion"> | Date | string;
    parentId?: StringNullableFilter<"Discussion"> | string | null;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    problem?: XOR<ProblemScalarRelationFilter, ProblemWhereInput>;
    parent?: XOR<
      DiscussionNullableScalarRelationFilter,
      DiscussionWhereInput
    > | null;
    replies?: DiscussionListRelationFilter;
  };

  export type DiscussionOrderByWithRelationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    problemId?: SortOrder;
    content?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    parentId?: SortOrderInput | SortOrder;
    user?: UserOrderByWithRelationInput;
    problem?: ProblemOrderByWithRelationInput;
    parent?: DiscussionOrderByWithRelationInput;
    replies?: DiscussionOrderByRelationAggregateInput;
  };

  export type DiscussionWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: DiscussionWhereInput | DiscussionWhereInput[];
      OR?: DiscussionWhereInput[];
      NOT?: DiscussionWhereInput | DiscussionWhereInput[];
      userId?: StringFilter<"Discussion"> | string;
      problemId?: StringFilter<"Discussion"> | string;
      content?: StringFilter<"Discussion"> | string;
      createdAt?: DateTimeFilter<"Discussion"> | Date | string;
      updatedAt?: DateTimeFilter<"Discussion"> | Date | string;
      parentId?: StringNullableFilter<"Discussion"> | string | null;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
      problem?: XOR<ProblemScalarRelationFilter, ProblemWhereInput>;
      parent?: XOR<
        DiscussionNullableScalarRelationFilter,
        DiscussionWhereInput
      > | null;
      replies?: DiscussionListRelationFilter;
    },
    "id"
  >;

  export type DiscussionOrderByWithAggregationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    problemId?: SortOrder;
    content?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    parentId?: SortOrderInput | SortOrder;
    _count?: DiscussionCountOrderByAggregateInput;
    _max?: DiscussionMaxOrderByAggregateInput;
    _min?: DiscussionMinOrderByAggregateInput;
  };

  export type DiscussionScalarWhereWithAggregatesInput = {
    AND?:
      | DiscussionScalarWhereWithAggregatesInput
      | DiscussionScalarWhereWithAggregatesInput[];
    OR?: DiscussionScalarWhereWithAggregatesInput[];
    NOT?:
      | DiscussionScalarWhereWithAggregatesInput
      | DiscussionScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"Discussion"> | string;
    userId?: StringWithAggregatesFilter<"Discussion"> | string;
    problemId?: StringWithAggregatesFilter<"Discussion"> | string;
    content?: StringWithAggregatesFilter<"Discussion"> | string;
    createdAt?: DateTimeWithAggregatesFilter<"Discussion"> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<"Discussion"> | Date | string;
    parentId?: StringNullableWithAggregatesFilter<"Discussion"> | string | null;
  };

  export type ProblemVoteWhereInput = {
    AND?: ProblemVoteWhereInput | ProblemVoteWhereInput[];
    OR?: ProblemVoteWhereInput[];
    NOT?: ProblemVoteWhereInput | ProblemVoteWhereInput[];
    id?: StringFilter<"ProblemVote"> | string;
    userId?: StringFilter<"ProblemVote"> | string;
    problemId?: StringFilter<"ProblemVote"> | string;
    type?: EnumVoteTypeFilter<"ProblemVote"> | $Enums.VoteType;
    createdAt?: DateTimeFilter<"ProblemVote"> | Date | string;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    problem?: XOR<ProblemScalarRelationFilter, ProblemWhereInput>;
  };

  export type ProblemVoteOrderByWithRelationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    problemId?: SortOrder;
    type?: SortOrder;
    createdAt?: SortOrder;
    user?: UserOrderByWithRelationInput;
    problem?: ProblemOrderByWithRelationInput;
  };

  export type ProblemVoteWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      userId_problemId?: ProblemVoteUserIdProblemIdCompoundUniqueInput;
      AND?: ProblemVoteWhereInput | ProblemVoteWhereInput[];
      OR?: ProblemVoteWhereInput[];
      NOT?: ProblemVoteWhereInput | ProblemVoteWhereInput[];
      userId?: StringFilter<"ProblemVote"> | string;
      problemId?: StringFilter<"ProblemVote"> | string;
      type?: EnumVoteTypeFilter<"ProblemVote"> | $Enums.VoteType;
      createdAt?: DateTimeFilter<"ProblemVote"> | Date | string;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
      problem?: XOR<ProblemScalarRelationFilter, ProblemWhereInput>;
    },
    "id" | "userId_problemId"
  >;

  export type ProblemVoteOrderByWithAggregationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    problemId?: SortOrder;
    type?: SortOrder;
    createdAt?: SortOrder;
    _count?: ProblemVoteCountOrderByAggregateInput;
    _max?: ProblemVoteMaxOrderByAggregateInput;
    _min?: ProblemVoteMinOrderByAggregateInput;
  };

  export type ProblemVoteScalarWhereWithAggregatesInput = {
    AND?:
      | ProblemVoteScalarWhereWithAggregatesInput
      | ProblemVoteScalarWhereWithAggregatesInput[];
    OR?: ProblemVoteScalarWhereWithAggregatesInput[];
    NOT?:
      | ProblemVoteScalarWhereWithAggregatesInput
      | ProblemVoteScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"ProblemVote"> | string;
    userId?: StringWithAggregatesFilter<"ProblemVote"> | string;
    problemId?: StringWithAggregatesFilter<"ProblemVote"> | string;
    type?: EnumVoteTypeWithAggregatesFilter<"ProblemVote"> | $Enums.VoteType;
    createdAt?: DateTimeWithAggregatesFilter<"ProblemVote"> | Date | string;
  };

  export type PlaylistWhereInput = {
    AND?: PlaylistWhereInput | PlaylistWhereInput[];
    OR?: PlaylistWhereInput[];
    NOT?: PlaylistWhereInput | PlaylistWhereInput[];
    id?: StringFilter<"Playlist"> | string;
    name?: StringFilter<"Playlist"> | string;
    description?: StringNullableFilter<"Playlist"> | string | null;
    userId?: StringFilter<"Playlist"> | string;
    createdAt?: DateTimeFilter<"Playlist"> | Date | string;
    updatedAt?: DateTimeFilter<"Playlist"> | Date | string;
    problems?: ProblemInPlaylistListRelationFilter;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
  };

  export type PlaylistOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    userId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    problems?: ProblemInPlaylistOrderByRelationAggregateInput;
    user?: UserOrderByWithRelationInput;
  };

  export type PlaylistWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      name_userId?: PlaylistNameUserIdCompoundUniqueInput;
      AND?: PlaylistWhereInput | PlaylistWhereInput[];
      OR?: PlaylistWhereInput[];
      NOT?: PlaylistWhereInput | PlaylistWhereInput[];
      name?: StringFilter<"Playlist"> | string;
      description?: StringNullableFilter<"Playlist"> | string | null;
      userId?: StringFilter<"Playlist"> | string;
      createdAt?: DateTimeFilter<"Playlist"> | Date | string;
      updatedAt?: DateTimeFilter<"Playlist"> | Date | string;
      problems?: ProblemInPlaylistListRelationFilter;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    },
    "id" | "name_userId"
  >;

  export type PlaylistOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    userId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: PlaylistCountOrderByAggregateInput;
    _max?: PlaylistMaxOrderByAggregateInput;
    _min?: PlaylistMinOrderByAggregateInput;
  };

  export type PlaylistScalarWhereWithAggregatesInput = {
    AND?:
      | PlaylistScalarWhereWithAggregatesInput
      | PlaylistScalarWhereWithAggregatesInput[];
    OR?: PlaylistScalarWhereWithAggregatesInput[];
    NOT?:
      | PlaylistScalarWhereWithAggregatesInput
      | PlaylistScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"Playlist"> | string;
    name?: StringWithAggregatesFilter<"Playlist"> | string;
    description?:
      | StringNullableWithAggregatesFilter<"Playlist">
      | string
      | null;
    userId?: StringWithAggregatesFilter<"Playlist"> | string;
    createdAt?: DateTimeWithAggregatesFilter<"Playlist"> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<"Playlist"> | Date | string;
  };

  export type ProblemInPlaylistWhereInput = {
    AND?: ProblemInPlaylistWhereInput | ProblemInPlaylistWhereInput[];
    OR?: ProblemInPlaylistWhereInput[];
    NOT?: ProblemInPlaylistWhereInput | ProblemInPlaylistWhereInput[];
    id?: StringFilter<"ProblemInPlaylist"> | string;
    playlistId?: StringFilter<"ProblemInPlaylist"> | string;
    problemId?: StringFilter<"ProblemInPlaylist"> | string;
    createdAt?: DateTimeFilter<"ProblemInPlaylist"> | Date | string;
    updatedAt?: DateTimeFilter<"ProblemInPlaylist"> | Date | string;
    playlist?: XOR<PlaylistScalarRelationFilter, PlaylistWhereInput>;
    problem?: XOR<ProblemScalarRelationFilter, ProblemWhereInput>;
  };

  export type ProblemInPlaylistOrderByWithRelationInput = {
    id?: SortOrder;
    playlistId?: SortOrder;
    problemId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    playlist?: PlaylistOrderByWithRelationInput;
    problem?: ProblemOrderByWithRelationInput;
  };

  export type ProblemInPlaylistWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      playlistId_problemId?: ProblemInPlaylistPlaylistIdProblemIdCompoundUniqueInput;
      AND?: ProblemInPlaylistWhereInput | ProblemInPlaylistWhereInput[];
      OR?: ProblemInPlaylistWhereInput[];
      NOT?: ProblemInPlaylistWhereInput | ProblemInPlaylistWhereInput[];
      playlistId?: StringFilter<"ProblemInPlaylist"> | string;
      problemId?: StringFilter<"ProblemInPlaylist"> | string;
      createdAt?: DateTimeFilter<"ProblemInPlaylist"> | Date | string;
      updatedAt?: DateTimeFilter<"ProblemInPlaylist"> | Date | string;
      playlist?: XOR<PlaylistScalarRelationFilter, PlaylistWhereInput>;
      problem?: XOR<ProblemScalarRelationFilter, ProblemWhereInput>;
    },
    "id" | "playlistId_problemId"
  >;

  export type ProblemInPlaylistOrderByWithAggregationInput = {
    id?: SortOrder;
    playlistId?: SortOrder;
    problemId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: ProblemInPlaylistCountOrderByAggregateInput;
    _max?: ProblemInPlaylistMaxOrderByAggregateInput;
    _min?: ProblemInPlaylistMinOrderByAggregateInput;
  };

  export type ProblemInPlaylistScalarWhereWithAggregatesInput = {
    AND?:
      | ProblemInPlaylistScalarWhereWithAggregatesInput
      | ProblemInPlaylistScalarWhereWithAggregatesInput[];
    OR?: ProblemInPlaylistScalarWhereWithAggregatesInput[];
    NOT?:
      | ProblemInPlaylistScalarWhereWithAggregatesInput
      | ProblemInPlaylistScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"ProblemInPlaylist"> | string;
    playlistId?: StringWithAggregatesFilter<"ProblemInPlaylist"> | string;
    problemId?: StringWithAggregatesFilter<"ProblemInPlaylist"> | string;
    createdAt?:
      | DateTimeWithAggregatesFilter<"ProblemInPlaylist">
      | Date
      | string;
    updatedAt?:
      | DateTimeWithAggregatesFilter<"ProblemInPlaylist">
      | Date
      | string;
  };

  export type SubscriptionWhereInput = {
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[];
    OR?: SubscriptionWhereInput[];
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[];
    id?: StringFilter<"Subscription"> | string;
    userId?: StringFilter<"Subscription"> | string;
    startDate?: DateTimeFilter<"Subscription"> | Date | string;
    endDate?: DateTimeFilter<"Subscription"> | Date | string;
    isActive?: BoolFilter<"Subscription"> | boolean;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
  };

  export type SubscriptionOrderByWithRelationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    startDate?: SortOrder;
    endDate?: SortOrder;
    isActive?: SortOrder;
    user?: UserOrderByWithRelationInput;
  };

  export type SubscriptionWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      userId?: string;
      AND?: SubscriptionWhereInput | SubscriptionWhereInput[];
      OR?: SubscriptionWhereInput[];
      NOT?: SubscriptionWhereInput | SubscriptionWhereInput[];
      startDate?: DateTimeFilter<"Subscription"> | Date | string;
      endDate?: DateTimeFilter<"Subscription"> | Date | string;
      isActive?: BoolFilter<"Subscription"> | boolean;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    },
    "id" | "userId"
  >;

  export type SubscriptionOrderByWithAggregationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    startDate?: SortOrder;
    endDate?: SortOrder;
    isActive?: SortOrder;
    _count?: SubscriptionCountOrderByAggregateInput;
    _max?: SubscriptionMaxOrderByAggregateInput;
    _min?: SubscriptionMinOrderByAggregateInput;
  };

  export type SubscriptionScalarWhereWithAggregatesInput = {
    AND?:
      | SubscriptionScalarWhereWithAggregatesInput
      | SubscriptionScalarWhereWithAggregatesInput[];
    OR?: SubscriptionScalarWhereWithAggregatesInput[];
    NOT?:
      | SubscriptionScalarWhereWithAggregatesInput
      | SubscriptionScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"Subscription"> | string;
    userId?: StringWithAggregatesFilter<"Subscription"> | string;
    startDate?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string;
    endDate?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string;
    isActive?: BoolWithAggregatesFilter<"Subscription"> | boolean;
  };

  export type UserCreateInput = {
    id?: string;
    name?: string | null;
    email: string;
    avatar?: NullableJsonNullValueInput | InputJsonValue;
    role?: $Enums.UserRole;
    password: string;
    refreshToken?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    problem?: ProblemCreateNestedManyWithoutUserInput;
    submission?: SubmissionCreateNestedManyWithoutUserInput;
    problemSolved?: ProblemSolvedCreateNestedManyWithoutUserInput;
    discussions?: DiscussionCreateNestedManyWithoutUserInput;
    votesOnProblems?: ProblemVoteCreateNestedManyWithoutUserInput;
    playlists?: PlaylistCreateNestedManyWithoutUserInput;
    subscription?: SubscriptionCreateNestedOneWithoutUserInput;
  };

  export type UserUncheckedCreateInput = {
    id?: string;
    name?: string | null;
    email: string;
    avatar?: NullableJsonNullValueInput | InputJsonValue;
    role?: $Enums.UserRole;
    password: string;
    refreshToken?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    problem?: ProblemUncheckedCreateNestedManyWithoutUserInput;
    submission?: SubmissionUncheckedCreateNestedManyWithoutUserInput;
    problemSolved?: ProblemSolvedUncheckedCreateNestedManyWithoutUserInput;
    discussions?: DiscussionUncheckedCreateNestedManyWithoutUserInput;
    votesOnProblems?: ProblemVoteUncheckedCreateNestedManyWithoutUserInput;
    playlists?: PlaylistUncheckedCreateNestedManyWithoutUserInput;
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput;
  };

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: StringFieldUpdateOperationsInput | string;
    avatar?: NullableJsonNullValueInput | InputJsonValue;
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    password?: StringFieldUpdateOperationsInput | string;
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    problem?: ProblemUpdateManyWithoutUserNestedInput;
    submission?: SubmissionUpdateManyWithoutUserNestedInput;
    problemSolved?: ProblemSolvedUpdateManyWithoutUserNestedInput;
    discussions?: DiscussionUpdateManyWithoutUserNestedInput;
    votesOnProblems?: ProblemVoteUpdateManyWithoutUserNestedInput;
    playlists?: PlaylistUpdateManyWithoutUserNestedInput;
    subscription?: SubscriptionUpdateOneWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: StringFieldUpdateOperationsInput | string;
    avatar?: NullableJsonNullValueInput | InputJsonValue;
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    password?: StringFieldUpdateOperationsInput | string;
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    problem?: ProblemUncheckedUpdateManyWithoutUserNestedInput;
    submission?: SubmissionUncheckedUpdateManyWithoutUserNestedInput;
    problemSolved?: ProblemSolvedUncheckedUpdateManyWithoutUserNestedInput;
    discussions?: DiscussionUncheckedUpdateManyWithoutUserNestedInput;
    votesOnProblems?: ProblemVoteUncheckedUpdateManyWithoutUserNestedInput;
    playlists?: PlaylistUncheckedUpdateManyWithoutUserNestedInput;
    subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput;
  };

  export type UserCreateManyInput = {
    id?: string;
    name?: string | null;
    email: string;
    avatar?: NullableJsonNullValueInput | InputJsonValue;
    role?: $Enums.UserRole;
    password: string;
    refreshToken?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: StringFieldUpdateOperationsInput | string;
    avatar?: NullableJsonNullValueInput | InputJsonValue;
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    password?: StringFieldUpdateOperationsInput | string;
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: StringFieldUpdateOperationsInput | string;
    avatar?: NullableJsonNullValueInput | InputJsonValue;
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    password?: StringFieldUpdateOperationsInput | string;
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ProblemCreateInput = {
    id?: string;
    title: string;
    problemNumber?: number;
    description: string;
    difficulty: $Enums.Difficulty;
    topic?: ProblemCreatetopicInput | string[];
    examples: JsonNullValueInput | InputJsonValue;
    constraints: string;
    hints?: string | null;
    editorial?: string | null;
    codeSnippets: JsonNullValueInput | InputJsonValue;
    referenceSolutions: JsonNullValueInput | InputJsonValue;
    isPremium?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: UserCreateNestedOneWithoutProblemInput;
    submission?: SubmissionCreateNestedManyWithoutProblemInput;
    solvedBy?: ProblemSolvedCreateNestedManyWithoutProblemInput;
    testcases?: ProblemTestCaseCreateNestedManyWithoutProblemInput;
    discussions?: DiscussionCreateNestedManyWithoutProblemInput;
    votes?: ProblemVoteCreateNestedManyWithoutProblemInput;
    problemsPlatlists?: ProblemInPlaylistCreateNestedManyWithoutProblemInput;
  };

  export type ProblemUncheckedCreateInput = {
    id?: string;
    title: string;
    problemNumber?: number;
    description: string;
    difficulty: $Enums.Difficulty;
    topic?: ProblemCreatetopicInput | string[];
    userId: string;
    examples: JsonNullValueInput | InputJsonValue;
    constraints: string;
    hints?: string | null;
    editorial?: string | null;
    codeSnippets: JsonNullValueInput | InputJsonValue;
    referenceSolutions: JsonNullValueInput | InputJsonValue;
    isPremium?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    submission?: SubmissionUncheckedCreateNestedManyWithoutProblemInput;
    solvedBy?: ProblemSolvedUncheckedCreateNestedManyWithoutProblemInput;
    testcases?: ProblemTestCaseUncheckedCreateNestedManyWithoutProblemInput;
    discussions?: DiscussionUncheckedCreateNestedManyWithoutProblemInput;
    votes?: ProblemVoteUncheckedCreateNestedManyWithoutProblemInput;
    problemsPlatlists?: ProblemInPlaylistUncheckedCreateNestedManyWithoutProblemInput;
  };

  export type ProblemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    problemNumber?: IntFieldUpdateOperationsInput | number;
    description?: StringFieldUpdateOperationsInput | string;
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty;
    topic?: ProblemUpdatetopicInput | string[];
    examples?: JsonNullValueInput | InputJsonValue;
    constraints?: StringFieldUpdateOperationsInput | string;
    hints?: NullableStringFieldUpdateOperationsInput | string | null;
    editorial?: NullableStringFieldUpdateOperationsInput | string | null;
    codeSnippets?: JsonNullValueInput | InputJsonValue;
    referenceSolutions?: JsonNullValueInput | InputJsonValue;
    isPremium?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutProblemNestedInput;
    submission?: SubmissionUpdateManyWithoutProblemNestedInput;
    solvedBy?: ProblemSolvedUpdateManyWithoutProblemNestedInput;
    testcases?: ProblemTestCaseUpdateManyWithoutProblemNestedInput;
    discussions?: DiscussionUpdateManyWithoutProblemNestedInput;
    votes?: ProblemVoteUpdateManyWithoutProblemNestedInput;
    problemsPlatlists?: ProblemInPlaylistUpdateManyWithoutProblemNestedInput;
  };

  export type ProblemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    problemNumber?: IntFieldUpdateOperationsInput | number;
    description?: StringFieldUpdateOperationsInput | string;
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty;
    topic?: ProblemUpdatetopicInput | string[];
    userId?: StringFieldUpdateOperationsInput | string;
    examples?: JsonNullValueInput | InputJsonValue;
    constraints?: StringFieldUpdateOperationsInput | string;
    hints?: NullableStringFieldUpdateOperationsInput | string | null;
    editorial?: NullableStringFieldUpdateOperationsInput | string | null;
    codeSnippets?: JsonNullValueInput | InputJsonValue;
    referenceSolutions?: JsonNullValueInput | InputJsonValue;
    isPremium?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    submission?: SubmissionUncheckedUpdateManyWithoutProblemNestedInput;
    solvedBy?: ProblemSolvedUncheckedUpdateManyWithoutProblemNestedInput;
    testcases?: ProblemTestCaseUncheckedUpdateManyWithoutProblemNestedInput;
    discussions?: DiscussionUncheckedUpdateManyWithoutProblemNestedInput;
    votes?: ProblemVoteUncheckedUpdateManyWithoutProblemNestedInput;
    problemsPlatlists?: ProblemInPlaylistUncheckedUpdateManyWithoutProblemNestedInput;
  };

  export type ProblemCreateManyInput = {
    id?: string;
    title: string;
    problemNumber?: number;
    description: string;
    difficulty: $Enums.Difficulty;
    topic?: ProblemCreatetopicInput | string[];
    userId: string;
    examples: JsonNullValueInput | InputJsonValue;
    constraints: string;
    hints?: string | null;
    editorial?: string | null;
    codeSnippets: JsonNullValueInput | InputJsonValue;
    referenceSolutions: JsonNullValueInput | InputJsonValue;
    isPremium?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ProblemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    problemNumber?: IntFieldUpdateOperationsInput | number;
    description?: StringFieldUpdateOperationsInput | string;
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty;
    topic?: ProblemUpdatetopicInput | string[];
    examples?: JsonNullValueInput | InputJsonValue;
    constraints?: StringFieldUpdateOperationsInput | string;
    hints?: NullableStringFieldUpdateOperationsInput | string | null;
    editorial?: NullableStringFieldUpdateOperationsInput | string | null;
    codeSnippets?: JsonNullValueInput | InputJsonValue;
    referenceSolutions?: JsonNullValueInput | InputJsonValue;
    isPremium?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ProblemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    problemNumber?: IntFieldUpdateOperationsInput | number;
    description?: StringFieldUpdateOperationsInput | string;
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty;
    topic?: ProblemUpdatetopicInput | string[];
    userId?: StringFieldUpdateOperationsInput | string;
    examples?: JsonNullValueInput | InputJsonValue;
    constraints?: StringFieldUpdateOperationsInput | string;
    hints?: NullableStringFieldUpdateOperationsInput | string | null;
    editorial?: NullableStringFieldUpdateOperationsInput | string | null;
    codeSnippets?: JsonNullValueInput | InputJsonValue;
    referenceSolutions?: JsonNullValueInput | InputJsonValue;
    isPremium?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ProblemTestCaseCreateInput = {
    id?: string;
    input: string;
    output: string;
    isPublic?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    problem: ProblemCreateNestedOneWithoutTestcasesInput;
  };

  export type ProblemTestCaseUncheckedCreateInput = {
    id?: string;
    input: string;
    output: string;
    isPublic?: boolean;
    problemId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ProblemTestCaseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    input?: StringFieldUpdateOperationsInput | string;
    output?: StringFieldUpdateOperationsInput | string;
    isPublic?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    problem?: ProblemUpdateOneRequiredWithoutTestcasesNestedInput;
  };

  export type ProblemTestCaseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    input?: StringFieldUpdateOperationsInput | string;
    output?: StringFieldUpdateOperationsInput | string;
    isPublic?: BoolFieldUpdateOperationsInput | boolean;
    problemId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ProblemTestCaseCreateManyInput = {
    id?: string;
    input: string;
    output: string;
    isPublic?: boolean;
    problemId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ProblemTestCaseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    input?: StringFieldUpdateOperationsInput | string;
    output?: StringFieldUpdateOperationsInput | string;
    isPublic?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ProblemTestCaseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    input?: StringFieldUpdateOperationsInput | string;
    output?: StringFieldUpdateOperationsInput | string;
    isPublic?: BoolFieldUpdateOperationsInput | boolean;
    problemId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type SubmissionCreateInput = {
    id?: string;
    sourceCode: JsonNullValueInput | InputJsonValue;
    language: string;
    stdin?: string | null;
    stdout?: string | null;
    stderr?: string | null;
    compileOutput?: string | null;
    status: string;
    memory?: string | null;
    time?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: UserCreateNestedOneWithoutSubmissionInput;
    problem: ProblemCreateNestedOneWithoutSubmissionInput;
    testcase?: TestCaseCreateNestedManyWithoutSubmissionInput;
  };

  export type SubmissionUncheckedCreateInput = {
    id?: string;
    userId: string;
    problemId: string;
    sourceCode: JsonNullValueInput | InputJsonValue;
    language: string;
    stdin?: string | null;
    stdout?: string | null;
    stderr?: string | null;
    compileOutput?: string | null;
    status: string;
    memory?: string | null;
    time?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    testcase?: TestCaseUncheckedCreateNestedManyWithoutSubmissionInput;
  };

  export type SubmissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    sourceCode?: JsonNullValueInput | InputJsonValue;
    language?: StringFieldUpdateOperationsInput | string;
    stdin?: NullableStringFieldUpdateOperationsInput | string | null;
    stdout?: NullableStringFieldUpdateOperationsInput | string | null;
    stderr?: NullableStringFieldUpdateOperationsInput | string | null;
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    memory?: NullableStringFieldUpdateOperationsInput | string | null;
    time?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutSubmissionNestedInput;
    problem?: ProblemUpdateOneRequiredWithoutSubmissionNestedInput;
    testcase?: TestCaseUpdateManyWithoutSubmissionNestedInput;
  };

  export type SubmissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    problemId?: StringFieldUpdateOperationsInput | string;
    sourceCode?: JsonNullValueInput | InputJsonValue;
    language?: StringFieldUpdateOperationsInput | string;
    stdin?: NullableStringFieldUpdateOperationsInput | string | null;
    stdout?: NullableStringFieldUpdateOperationsInput | string | null;
    stderr?: NullableStringFieldUpdateOperationsInput | string | null;
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    memory?: NullableStringFieldUpdateOperationsInput | string | null;
    time?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    testcase?: TestCaseUncheckedUpdateManyWithoutSubmissionNestedInput;
  };

  export type SubmissionCreateManyInput = {
    id?: string;
    userId: string;
    problemId: string;
    sourceCode: JsonNullValueInput | InputJsonValue;
    language: string;
    stdin?: string | null;
    stdout?: string | null;
    stderr?: string | null;
    compileOutput?: string | null;
    status: string;
    memory?: string | null;
    time?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type SubmissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    sourceCode?: JsonNullValueInput | InputJsonValue;
    language?: StringFieldUpdateOperationsInput | string;
    stdin?: NullableStringFieldUpdateOperationsInput | string | null;
    stdout?: NullableStringFieldUpdateOperationsInput | string | null;
    stderr?: NullableStringFieldUpdateOperationsInput | string | null;
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    memory?: NullableStringFieldUpdateOperationsInput | string | null;
    time?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type SubmissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    problemId?: StringFieldUpdateOperationsInput | string;
    sourceCode?: JsonNullValueInput | InputJsonValue;
    language?: StringFieldUpdateOperationsInput | string;
    stdin?: NullableStringFieldUpdateOperationsInput | string | null;
    stdout?: NullableStringFieldUpdateOperationsInput | string | null;
    stderr?: NullableStringFieldUpdateOperationsInput | string | null;
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    memory?: NullableStringFieldUpdateOperationsInput | string | null;
    time?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TestCaseCreateInput = {
    id?: string;
    testCase: string;
    passed: boolean;
    stdout?: string | null;
    expected: string;
    stderr?: string | null;
    compileOutput?: string | null;
    status: string;
    memory?: string | null;
    time?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    submission: SubmissionCreateNestedOneWithoutTestcaseInput;
  };

  export type TestCaseUncheckedCreateInput = {
    id?: string;
    submissionId: string;
    testCase: string;
    passed: boolean;
    stdout?: string | null;
    expected: string;
    stderr?: string | null;
    compileOutput?: string | null;
    status: string;
    memory?: string | null;
    time?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type TestCaseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    testCase?: StringFieldUpdateOperationsInput | string;
    passed?: BoolFieldUpdateOperationsInput | boolean;
    stdout?: NullableStringFieldUpdateOperationsInput | string | null;
    expected?: StringFieldUpdateOperationsInput | string;
    stderr?: NullableStringFieldUpdateOperationsInput | string | null;
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    memory?: NullableStringFieldUpdateOperationsInput | string | null;
    time?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    submission?: SubmissionUpdateOneRequiredWithoutTestcaseNestedInput;
  };

  export type TestCaseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    submissionId?: StringFieldUpdateOperationsInput | string;
    testCase?: StringFieldUpdateOperationsInput | string;
    passed?: BoolFieldUpdateOperationsInput | boolean;
    stdout?: NullableStringFieldUpdateOperationsInput | string | null;
    expected?: StringFieldUpdateOperationsInput | string;
    stderr?: NullableStringFieldUpdateOperationsInput | string | null;
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    memory?: NullableStringFieldUpdateOperationsInput | string | null;
    time?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TestCaseCreateManyInput = {
    id?: string;
    submissionId: string;
    testCase: string;
    passed: boolean;
    stdout?: string | null;
    expected: string;
    stderr?: string | null;
    compileOutput?: string | null;
    status: string;
    memory?: string | null;
    time?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type TestCaseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    testCase?: StringFieldUpdateOperationsInput | string;
    passed?: BoolFieldUpdateOperationsInput | boolean;
    stdout?: NullableStringFieldUpdateOperationsInput | string | null;
    expected?: StringFieldUpdateOperationsInput | string;
    stderr?: NullableStringFieldUpdateOperationsInput | string | null;
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    memory?: NullableStringFieldUpdateOperationsInput | string | null;
    time?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TestCaseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    submissionId?: StringFieldUpdateOperationsInput | string;
    testCase?: StringFieldUpdateOperationsInput | string;
    passed?: BoolFieldUpdateOperationsInput | boolean;
    stdout?: NullableStringFieldUpdateOperationsInput | string | null;
    expected?: StringFieldUpdateOperationsInput | string;
    stderr?: NullableStringFieldUpdateOperationsInput | string | null;
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    memory?: NullableStringFieldUpdateOperationsInput | string | null;
    time?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ProblemSolvedCreateInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: UserCreateNestedOneWithoutProblemSolvedInput;
    problem: ProblemCreateNestedOneWithoutSolvedByInput;
  };

  export type ProblemSolvedUncheckedCreateInput = {
    id?: string;
    userId: string;
    problemId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ProblemSolvedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutProblemSolvedNestedInput;
    problem?: ProblemUpdateOneRequiredWithoutSolvedByNestedInput;
  };

  export type ProblemSolvedUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    problemId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ProblemSolvedCreateManyInput = {
    id?: string;
    userId: string;
    problemId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ProblemSolvedUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ProblemSolvedUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    problemId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type DiscussionCreateInput = {
    id?: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: UserCreateNestedOneWithoutDiscussionsInput;
    problem: ProblemCreateNestedOneWithoutDiscussionsInput;
    parent?: DiscussionCreateNestedOneWithoutRepliesInput;
    replies?: DiscussionCreateNestedManyWithoutParentInput;
  };

  export type DiscussionUncheckedCreateInput = {
    id?: string;
    userId: string;
    problemId: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    parentId?: string | null;
    replies?: DiscussionUncheckedCreateNestedManyWithoutParentInput;
  };

  export type DiscussionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutDiscussionsNestedInput;
    problem?: ProblemUpdateOneRequiredWithoutDiscussionsNestedInput;
    parent?: DiscussionUpdateOneWithoutRepliesNestedInput;
    replies?: DiscussionUpdateManyWithoutParentNestedInput;
  };

  export type DiscussionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    problemId?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    parentId?: NullableStringFieldUpdateOperationsInput | string | null;
    replies?: DiscussionUncheckedUpdateManyWithoutParentNestedInput;
  };

  export type DiscussionCreateManyInput = {
    id?: string;
    userId: string;
    problemId: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    parentId?: string | null;
  };

  export type DiscussionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type DiscussionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    problemId?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    parentId?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type ProblemVoteCreateInput = {
    id?: string;
    type: $Enums.VoteType;
    createdAt?: Date | string;
    user: UserCreateNestedOneWithoutVotesOnProblemsInput;
    problem: ProblemCreateNestedOneWithoutVotesInput;
  };

  export type ProblemVoteUncheckedCreateInput = {
    id?: string;
    userId: string;
    problemId: string;
    type: $Enums.VoteType;
    createdAt?: Date | string;
  };

  export type ProblemVoteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?: EnumVoteTypeFieldUpdateOperationsInput | $Enums.VoteType;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutVotesOnProblemsNestedInput;
    problem?: ProblemUpdateOneRequiredWithoutVotesNestedInput;
  };

  export type ProblemVoteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    problemId?: StringFieldUpdateOperationsInput | string;
    type?: EnumVoteTypeFieldUpdateOperationsInput | $Enums.VoteType;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ProblemVoteCreateManyInput = {
    id?: string;
    userId: string;
    problemId: string;
    type: $Enums.VoteType;
    createdAt?: Date | string;
  };

  export type ProblemVoteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?: EnumVoteTypeFieldUpdateOperationsInput | $Enums.VoteType;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ProblemVoteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    problemId?: StringFieldUpdateOperationsInput | string;
    type?: EnumVoteTypeFieldUpdateOperationsInput | $Enums.VoteType;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PlaylistCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    problems?: ProblemInPlaylistCreateNestedManyWithoutPlaylistInput;
    user: UserCreateNestedOneWithoutPlaylistsInput;
  };

  export type PlaylistUncheckedCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    userId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    problems?: ProblemInPlaylistUncheckedCreateNestedManyWithoutPlaylistInput;
  };

  export type PlaylistUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    problems?: ProblemInPlaylistUpdateManyWithoutPlaylistNestedInput;
    user?: UserUpdateOneRequiredWithoutPlaylistsNestedInput;
  };

  export type PlaylistUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    userId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    problems?: ProblemInPlaylistUncheckedUpdateManyWithoutPlaylistNestedInput;
  };

  export type PlaylistCreateManyInput = {
    id?: string;
    name: string;
    description?: string | null;
    userId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type PlaylistUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PlaylistUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    userId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ProblemInPlaylistCreateInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    playlist: PlaylistCreateNestedOneWithoutProblemsInput;
    problem: ProblemCreateNestedOneWithoutProblemsPlatlistsInput;
  };

  export type ProblemInPlaylistUncheckedCreateInput = {
    id?: string;
    playlistId: string;
    problemId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ProblemInPlaylistUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    playlist?: PlaylistUpdateOneRequiredWithoutProblemsNestedInput;
    problem?: ProblemUpdateOneRequiredWithoutProblemsPlatlistsNestedInput;
  };

  export type ProblemInPlaylistUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    playlistId?: StringFieldUpdateOperationsInput | string;
    problemId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ProblemInPlaylistCreateManyInput = {
    id?: string;
    playlistId: string;
    problemId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ProblemInPlaylistUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ProblemInPlaylistUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    playlistId?: StringFieldUpdateOperationsInput | string;
    problemId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type SubscriptionCreateInput = {
    id?: string;
    startDate?: Date | string;
    endDate: Date | string;
    isActive?: boolean;
    user: UserCreateNestedOneWithoutSubscriptionInput;
  };

  export type SubscriptionUncheckedCreateInput = {
    id?: string;
    userId: string;
    startDate?: Date | string;
    endDate: Date | string;
    isActive?: boolean;
  };

  export type SubscriptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    user?: UserUpdateOneRequiredWithoutSubscriptionNestedInput;
  };

  export type SubscriptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
  };

  export type SubscriptionCreateManyInput = {
    id?: string;
    userId: string;
    startDate?: Date | string;
    endDate: Date | string;
    isActive?: boolean;
  };

  export type SubscriptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
  };

  export type SubscriptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<
          Required<JsonNullableFilterBase<$PrismaModel>>,
          Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, "path">
        >,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<
        Omit<Required<JsonNullableFilterBase<$PrismaModel>>, "path">
      >;

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    path?: string[];
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    not?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
  };

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>;
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type ProblemListRelationFilter = {
    every?: ProblemWhereInput;
    some?: ProblemWhereInput;
    none?: ProblemWhereInput;
  };

  export type SubmissionListRelationFilter = {
    every?: SubmissionWhereInput;
    some?: SubmissionWhereInput;
    none?: SubmissionWhereInput;
  };

  export type ProblemSolvedListRelationFilter = {
    every?: ProblemSolvedWhereInput;
    some?: ProblemSolvedWhereInput;
    none?: ProblemSolvedWhereInput;
  };

  export type DiscussionListRelationFilter = {
    every?: DiscussionWhereInput;
    some?: DiscussionWhereInput;
    none?: DiscussionWhereInput;
  };

  export type ProblemVoteListRelationFilter = {
    every?: ProblemVoteWhereInput;
    some?: ProblemVoteWhereInput;
    none?: ProblemVoteWhereInput;
  };

  export type PlaylistListRelationFilter = {
    every?: PlaylistWhereInput;
    some?: PlaylistWhereInput;
    none?: PlaylistWhereInput;
  };

  export type SubscriptionNullableScalarRelationFilter = {
    is?: SubscriptionWhereInput | null;
    isNot?: SubscriptionWhereInput | null;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type ProblemOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type SubmissionOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type ProblemSolvedOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type DiscussionOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type ProblemVoteOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type PlaylistOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    avatar?: SortOrder;
    role?: SortOrder;
    password?: SortOrder;
    refreshToken?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    role?: SortOrder;
    password?: SortOrder;
    refreshToken?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    role?: SortOrder;
    password?: SortOrder;
    refreshToken?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<
          Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>,
          Exclude<
            keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>,
            "path"
          >
        >,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<
        Omit<
          Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>,
          "path"
        >
      >;

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    path?: string[];
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    not?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedJsonNullableFilter<$PrismaModel>;
    _max?: NestedJsonNullableFilter<$PrismaModel>;
  };

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumUserRoleWithAggregatesFilter<$PrismaModel>
      | $Enums.UserRole;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumUserRoleFilter<$PrismaModel>;
    _max?: NestedEnumUserRoleFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type EnumDifficultyFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>;
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>;
    not?: NestedEnumDifficultyFilter<$PrismaModel> | $Enums.Difficulty;
  };

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    has?: string | StringFieldRefInput<$PrismaModel> | null;
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>;
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>;
    isEmpty?: boolean;
  };
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<
          Required<JsonFilterBase<$PrismaModel>>,
          Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, "path">
        >,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, "path">>;

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    path?: string[];
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    not?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
  };

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type UserScalarRelationFilter = {
    is?: UserWhereInput;
    isNot?: UserWhereInput;
  };

  export type ProblemTestCaseListRelationFilter = {
    every?: ProblemTestCaseWhereInput;
    some?: ProblemTestCaseWhereInput;
    none?: ProblemTestCaseWhereInput;
  };

  export type ProblemInPlaylistListRelationFilter = {
    every?: ProblemInPlaylistWhereInput;
    some?: ProblemInPlaylistWhereInput;
    none?: ProblemInPlaylistWhereInput;
  };

  export type ProblemTestCaseOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type ProblemInPlaylistOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type ProblemCountOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    problemNumber?: SortOrder;
    description?: SortOrder;
    difficulty?: SortOrder;
    topic?: SortOrder;
    userId?: SortOrder;
    examples?: SortOrder;
    constraints?: SortOrder;
    hints?: SortOrder;
    editorial?: SortOrder;
    codeSnippets?: SortOrder;
    referenceSolutions?: SortOrder;
    isPremium?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type ProblemAvgOrderByAggregateInput = {
    problemNumber?: SortOrder;
  };

  export type ProblemMaxOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    problemNumber?: SortOrder;
    description?: SortOrder;
    difficulty?: SortOrder;
    userId?: SortOrder;
    constraints?: SortOrder;
    hints?: SortOrder;
    editorial?: SortOrder;
    isPremium?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type ProblemMinOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    problemNumber?: SortOrder;
    description?: SortOrder;
    difficulty?: SortOrder;
    userId?: SortOrder;
    constraints?: SortOrder;
    hints?: SortOrder;
    editorial?: SortOrder;
    isPremium?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type ProblemSumOrderByAggregateInput = {
    problemNumber?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type EnumDifficultyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>;
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumDifficultyWithAggregatesFilter<$PrismaModel>
      | $Enums.Difficulty;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumDifficultyFilter<$PrismaModel>;
    _max?: NestedEnumDifficultyFilter<$PrismaModel>;
  };
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<
          Required<JsonWithAggregatesFilterBase<$PrismaModel>>,
          Exclude<
            keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>,
            "path"
          >
        >,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<
        Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, "path">
      >;

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    path?: string[];
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    not?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedJsonFilter<$PrismaModel>;
    _max?: NestedJsonFilter<$PrismaModel>;
  };

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type ProblemScalarRelationFilter = {
    is?: ProblemWhereInput;
    isNot?: ProblemWhereInput;
  };

  export type ProblemTestCaseCountOrderByAggregateInput = {
    id?: SortOrder;
    input?: SortOrder;
    output?: SortOrder;
    isPublic?: SortOrder;
    problemId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type ProblemTestCaseMaxOrderByAggregateInput = {
    id?: SortOrder;
    input?: SortOrder;
    output?: SortOrder;
    isPublic?: SortOrder;
    problemId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type ProblemTestCaseMinOrderByAggregateInput = {
    id?: SortOrder;
    input?: SortOrder;
    output?: SortOrder;
    isPublic?: SortOrder;
    problemId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type TestCaseListRelationFilter = {
    every?: TestCaseWhereInput;
    some?: TestCaseWhereInput;
    none?: TestCaseWhereInput;
  };

  export type TestCaseOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type SubmissionCountOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    problemId?: SortOrder;
    sourceCode?: SortOrder;
    language?: SortOrder;
    stdin?: SortOrder;
    stdout?: SortOrder;
    stderr?: SortOrder;
    compileOutput?: SortOrder;
    status?: SortOrder;
    memory?: SortOrder;
    time?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type SubmissionMaxOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    problemId?: SortOrder;
    language?: SortOrder;
    stdin?: SortOrder;
    stdout?: SortOrder;
    stderr?: SortOrder;
    compileOutput?: SortOrder;
    status?: SortOrder;
    memory?: SortOrder;
    time?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type SubmissionMinOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    problemId?: SortOrder;
    language?: SortOrder;
    stdin?: SortOrder;
    stdout?: SortOrder;
    stderr?: SortOrder;
    compileOutput?: SortOrder;
    status?: SortOrder;
    memory?: SortOrder;
    time?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type SubmissionScalarRelationFilter = {
    is?: SubmissionWhereInput;
    isNot?: SubmissionWhereInput;
  };

  export type TestCaseCountOrderByAggregateInput = {
    id?: SortOrder;
    submissionId?: SortOrder;
    testCase?: SortOrder;
    passed?: SortOrder;
    stdout?: SortOrder;
    expected?: SortOrder;
    stderr?: SortOrder;
    compileOutput?: SortOrder;
    status?: SortOrder;
    memory?: SortOrder;
    time?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type TestCaseMaxOrderByAggregateInput = {
    id?: SortOrder;
    submissionId?: SortOrder;
    testCase?: SortOrder;
    passed?: SortOrder;
    stdout?: SortOrder;
    expected?: SortOrder;
    stderr?: SortOrder;
    compileOutput?: SortOrder;
    status?: SortOrder;
    memory?: SortOrder;
    time?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type TestCaseMinOrderByAggregateInput = {
    id?: SortOrder;
    submissionId?: SortOrder;
    testCase?: SortOrder;
    passed?: SortOrder;
    stdout?: SortOrder;
    expected?: SortOrder;
    stderr?: SortOrder;
    compileOutput?: SortOrder;
    status?: SortOrder;
    memory?: SortOrder;
    time?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type ProblemSolvedUserIdProblemIdCompoundUniqueInput = {
    userId: string;
    problemId: string;
  };

  export type ProblemSolvedCountOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    problemId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type ProblemSolvedMaxOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    problemId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type ProblemSolvedMinOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    problemId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type DiscussionNullableScalarRelationFilter = {
    is?: DiscussionWhereInput | null;
    isNot?: DiscussionWhereInput | null;
  };

  export type DiscussionCountOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    problemId?: SortOrder;
    content?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    parentId?: SortOrder;
  };

  export type DiscussionMaxOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    problemId?: SortOrder;
    content?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    parentId?: SortOrder;
  };

  export type DiscussionMinOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    problemId?: SortOrder;
    content?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    parentId?: SortOrder;
  };

  export type EnumVoteTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.VoteType | EnumVoteTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.VoteType[] | ListEnumVoteTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.VoteType[] | ListEnumVoteTypeFieldRefInput<$PrismaModel>;
    not?: NestedEnumVoteTypeFilter<$PrismaModel> | $Enums.VoteType;
  };

  export type ProblemVoteUserIdProblemIdCompoundUniqueInput = {
    userId: string;
    problemId: string;
  };

  export type ProblemVoteCountOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    problemId?: SortOrder;
    type?: SortOrder;
    createdAt?: SortOrder;
  };

  export type ProblemVoteMaxOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    problemId?: SortOrder;
    type?: SortOrder;
    createdAt?: SortOrder;
  };

  export type ProblemVoteMinOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    problemId?: SortOrder;
    type?: SortOrder;
    createdAt?: SortOrder;
  };

  export type EnumVoteTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VoteType | EnumVoteTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.VoteType[] | ListEnumVoteTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.VoteType[] | ListEnumVoteTypeFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumVoteTypeWithAggregatesFilter<$PrismaModel>
      | $Enums.VoteType;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumVoteTypeFilter<$PrismaModel>;
    _max?: NestedEnumVoteTypeFilter<$PrismaModel>;
  };

  export type PlaylistNameUserIdCompoundUniqueInput = {
    name: string;
    userId: string;
  };

  export type PlaylistCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    userId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type PlaylistMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    userId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type PlaylistMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    userId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type PlaylistScalarRelationFilter = {
    is?: PlaylistWhereInput;
    isNot?: PlaylistWhereInput;
  };

  export type ProblemInPlaylistPlaylistIdProblemIdCompoundUniqueInput = {
    playlistId: string;
    problemId: string;
  };

  export type ProblemInPlaylistCountOrderByAggregateInput = {
    id?: SortOrder;
    playlistId?: SortOrder;
    problemId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type ProblemInPlaylistMaxOrderByAggregateInput = {
    id?: SortOrder;
    playlistId?: SortOrder;
    problemId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type ProblemInPlaylistMinOrderByAggregateInput = {
    id?: SortOrder;
    playlistId?: SortOrder;
    problemId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type SubscriptionCountOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    startDate?: SortOrder;
    endDate?: SortOrder;
    isActive?: SortOrder;
  };

  export type SubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    startDate?: SortOrder;
    endDate?: SortOrder;
    isActive?: SortOrder;
  };

  export type SubscriptionMinOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    startDate?: SortOrder;
    endDate?: SortOrder;
    isActive?: SortOrder;
  };

  export type ProblemCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          ProblemCreateWithoutUserInput,
          ProblemUncheckedCreateWithoutUserInput
        >
      | ProblemCreateWithoutUserInput[]
      | ProblemUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | ProblemCreateOrConnectWithoutUserInput
      | ProblemCreateOrConnectWithoutUserInput[];
    createMany?: ProblemCreateManyUserInputEnvelope;
    connect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[];
  };

  export type SubmissionCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          SubmissionCreateWithoutUserInput,
          SubmissionUncheckedCreateWithoutUserInput
        >
      | SubmissionCreateWithoutUserInput[]
      | SubmissionUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | SubmissionCreateOrConnectWithoutUserInput
      | SubmissionCreateOrConnectWithoutUserInput[];
    createMany?: SubmissionCreateManyUserInputEnvelope;
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[];
  };

  export type ProblemSolvedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          ProblemSolvedCreateWithoutUserInput,
          ProblemSolvedUncheckedCreateWithoutUserInput
        >
      | ProblemSolvedCreateWithoutUserInput[]
      | ProblemSolvedUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | ProblemSolvedCreateOrConnectWithoutUserInput
      | ProblemSolvedCreateOrConnectWithoutUserInput[];
    createMany?: ProblemSolvedCreateManyUserInputEnvelope;
    connect?: ProblemSolvedWhereUniqueInput | ProblemSolvedWhereUniqueInput[];
  };

  export type DiscussionCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          DiscussionCreateWithoutUserInput,
          DiscussionUncheckedCreateWithoutUserInput
        >
      | DiscussionCreateWithoutUserInput[]
      | DiscussionUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | DiscussionCreateOrConnectWithoutUserInput
      | DiscussionCreateOrConnectWithoutUserInput[];
    createMany?: DiscussionCreateManyUserInputEnvelope;
    connect?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[];
  };

  export type ProblemVoteCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          ProblemVoteCreateWithoutUserInput,
          ProblemVoteUncheckedCreateWithoutUserInput
        >
      | ProblemVoteCreateWithoutUserInput[]
      | ProblemVoteUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | ProblemVoteCreateOrConnectWithoutUserInput
      | ProblemVoteCreateOrConnectWithoutUserInput[];
    createMany?: ProblemVoteCreateManyUserInputEnvelope;
    connect?: ProblemVoteWhereUniqueInput | ProblemVoteWhereUniqueInput[];
  };

  export type PlaylistCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          PlaylistCreateWithoutUserInput,
          PlaylistUncheckedCreateWithoutUserInput
        >
      | PlaylistCreateWithoutUserInput[]
      | PlaylistUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | PlaylistCreateOrConnectWithoutUserInput
      | PlaylistCreateOrConnectWithoutUserInput[];
    createMany?: PlaylistCreateManyUserInputEnvelope;
    connect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[];
  };

  export type SubscriptionCreateNestedOneWithoutUserInput = {
    create?: XOR<
      SubscriptionCreateWithoutUserInput,
      SubscriptionUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput;
    connect?: SubscriptionWhereUniqueInput;
  };

  export type ProblemUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          ProblemCreateWithoutUserInput,
          ProblemUncheckedCreateWithoutUserInput
        >
      | ProblemCreateWithoutUserInput[]
      | ProblemUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | ProblemCreateOrConnectWithoutUserInput
      | ProblemCreateOrConnectWithoutUserInput[];
    createMany?: ProblemCreateManyUserInputEnvelope;
    connect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[];
  };

  export type SubmissionUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          SubmissionCreateWithoutUserInput,
          SubmissionUncheckedCreateWithoutUserInput
        >
      | SubmissionCreateWithoutUserInput[]
      | SubmissionUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | SubmissionCreateOrConnectWithoutUserInput
      | SubmissionCreateOrConnectWithoutUserInput[];
    createMany?: SubmissionCreateManyUserInputEnvelope;
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[];
  };

  export type ProblemSolvedUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          ProblemSolvedCreateWithoutUserInput,
          ProblemSolvedUncheckedCreateWithoutUserInput
        >
      | ProblemSolvedCreateWithoutUserInput[]
      | ProblemSolvedUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | ProblemSolvedCreateOrConnectWithoutUserInput
      | ProblemSolvedCreateOrConnectWithoutUserInput[];
    createMany?: ProblemSolvedCreateManyUserInputEnvelope;
    connect?: ProblemSolvedWhereUniqueInput | ProblemSolvedWhereUniqueInput[];
  };

  export type DiscussionUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          DiscussionCreateWithoutUserInput,
          DiscussionUncheckedCreateWithoutUserInput
        >
      | DiscussionCreateWithoutUserInput[]
      | DiscussionUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | DiscussionCreateOrConnectWithoutUserInput
      | DiscussionCreateOrConnectWithoutUserInput[];
    createMany?: DiscussionCreateManyUserInputEnvelope;
    connect?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[];
  };

  export type ProblemVoteUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          ProblemVoteCreateWithoutUserInput,
          ProblemVoteUncheckedCreateWithoutUserInput
        >
      | ProblemVoteCreateWithoutUserInput[]
      | ProblemVoteUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | ProblemVoteCreateOrConnectWithoutUserInput
      | ProblemVoteCreateOrConnectWithoutUserInput[];
    createMany?: ProblemVoteCreateManyUserInputEnvelope;
    connect?: ProblemVoteWhereUniqueInput | ProblemVoteWhereUniqueInput[];
  };

  export type PlaylistUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          PlaylistCreateWithoutUserInput,
          PlaylistUncheckedCreateWithoutUserInput
        >
      | PlaylistCreateWithoutUserInput[]
      | PlaylistUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | PlaylistCreateOrConnectWithoutUserInput
      | PlaylistCreateOrConnectWithoutUserInput[];
    createMany?: PlaylistCreateManyUserInputEnvelope;
    connect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[];
  };

  export type SubscriptionUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<
      SubscriptionCreateWithoutUserInput,
      SubscriptionUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput;
    connect?: SubscriptionWhereUniqueInput;
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type ProblemUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          ProblemCreateWithoutUserInput,
          ProblemUncheckedCreateWithoutUserInput
        >
      | ProblemCreateWithoutUserInput[]
      | ProblemUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | ProblemCreateOrConnectWithoutUserInput
      | ProblemCreateOrConnectWithoutUserInput[];
    upsert?:
      | ProblemUpsertWithWhereUniqueWithoutUserInput
      | ProblemUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: ProblemCreateManyUserInputEnvelope;
    set?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[];
    disconnect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[];
    delete?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[];
    connect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[];
    update?:
      | ProblemUpdateWithWhereUniqueWithoutUserInput
      | ProblemUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | ProblemUpdateManyWithWhereWithoutUserInput
      | ProblemUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: ProblemScalarWhereInput | ProblemScalarWhereInput[];
  };

  export type SubmissionUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          SubmissionCreateWithoutUserInput,
          SubmissionUncheckedCreateWithoutUserInput
        >
      | SubmissionCreateWithoutUserInput[]
      | SubmissionUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | SubmissionCreateOrConnectWithoutUserInput
      | SubmissionCreateOrConnectWithoutUserInput[];
    upsert?:
      | SubmissionUpsertWithWhereUniqueWithoutUserInput
      | SubmissionUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: SubmissionCreateManyUserInputEnvelope;
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[];
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[];
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[];
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[];
    update?:
      | SubmissionUpdateWithWhereUniqueWithoutUserInput
      | SubmissionUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | SubmissionUpdateManyWithWhereWithoutUserInput
      | SubmissionUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[];
  };

  export type ProblemSolvedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          ProblemSolvedCreateWithoutUserInput,
          ProblemSolvedUncheckedCreateWithoutUserInput
        >
      | ProblemSolvedCreateWithoutUserInput[]
      | ProblemSolvedUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | ProblemSolvedCreateOrConnectWithoutUserInput
      | ProblemSolvedCreateOrConnectWithoutUserInput[];
    upsert?:
      | ProblemSolvedUpsertWithWhereUniqueWithoutUserInput
      | ProblemSolvedUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: ProblemSolvedCreateManyUserInputEnvelope;
    set?: ProblemSolvedWhereUniqueInput | ProblemSolvedWhereUniqueInput[];
    disconnect?:
      | ProblemSolvedWhereUniqueInput
      | ProblemSolvedWhereUniqueInput[];
    delete?: ProblemSolvedWhereUniqueInput | ProblemSolvedWhereUniqueInput[];
    connect?: ProblemSolvedWhereUniqueInput | ProblemSolvedWhereUniqueInput[];
    update?:
      | ProblemSolvedUpdateWithWhereUniqueWithoutUserInput
      | ProblemSolvedUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | ProblemSolvedUpdateManyWithWhereWithoutUserInput
      | ProblemSolvedUpdateManyWithWhereWithoutUserInput[];
    deleteMany?:
      | ProblemSolvedScalarWhereInput
      | ProblemSolvedScalarWhereInput[];
  };

  export type DiscussionUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          DiscussionCreateWithoutUserInput,
          DiscussionUncheckedCreateWithoutUserInput
        >
      | DiscussionCreateWithoutUserInput[]
      | DiscussionUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | DiscussionCreateOrConnectWithoutUserInput
      | DiscussionCreateOrConnectWithoutUserInput[];
    upsert?:
      | DiscussionUpsertWithWhereUniqueWithoutUserInput
      | DiscussionUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: DiscussionCreateManyUserInputEnvelope;
    set?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[];
    disconnect?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[];
    delete?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[];
    connect?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[];
    update?:
      | DiscussionUpdateWithWhereUniqueWithoutUserInput
      | DiscussionUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | DiscussionUpdateManyWithWhereWithoutUserInput
      | DiscussionUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: DiscussionScalarWhereInput | DiscussionScalarWhereInput[];
  };

  export type ProblemVoteUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          ProblemVoteCreateWithoutUserInput,
          ProblemVoteUncheckedCreateWithoutUserInput
        >
      | ProblemVoteCreateWithoutUserInput[]
      | ProblemVoteUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | ProblemVoteCreateOrConnectWithoutUserInput
      | ProblemVoteCreateOrConnectWithoutUserInput[];
    upsert?:
      | ProblemVoteUpsertWithWhereUniqueWithoutUserInput
      | ProblemVoteUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: ProblemVoteCreateManyUserInputEnvelope;
    set?: ProblemVoteWhereUniqueInput | ProblemVoteWhereUniqueInput[];
    disconnect?: ProblemVoteWhereUniqueInput | ProblemVoteWhereUniqueInput[];
    delete?: ProblemVoteWhereUniqueInput | ProblemVoteWhereUniqueInput[];
    connect?: ProblemVoteWhereUniqueInput | ProblemVoteWhereUniqueInput[];
    update?:
      | ProblemVoteUpdateWithWhereUniqueWithoutUserInput
      | ProblemVoteUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | ProblemVoteUpdateManyWithWhereWithoutUserInput
      | ProblemVoteUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: ProblemVoteScalarWhereInput | ProblemVoteScalarWhereInput[];
  };

  export type PlaylistUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          PlaylistCreateWithoutUserInput,
          PlaylistUncheckedCreateWithoutUserInput
        >
      | PlaylistCreateWithoutUserInput[]
      | PlaylistUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | PlaylistCreateOrConnectWithoutUserInput
      | PlaylistCreateOrConnectWithoutUserInput[];
    upsert?:
      | PlaylistUpsertWithWhereUniqueWithoutUserInput
      | PlaylistUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: PlaylistCreateManyUserInputEnvelope;
    set?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[];
    disconnect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[];
    delete?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[];
    connect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[];
    update?:
      | PlaylistUpdateWithWhereUniqueWithoutUserInput
      | PlaylistUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | PlaylistUpdateManyWithWhereWithoutUserInput
      | PlaylistUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: PlaylistScalarWhereInput | PlaylistScalarWhereInput[];
  };

  export type SubscriptionUpdateOneWithoutUserNestedInput = {
    create?: XOR<
      SubscriptionCreateWithoutUserInput,
      SubscriptionUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput;
    upsert?: SubscriptionUpsertWithoutUserInput;
    disconnect?: SubscriptionWhereInput | boolean;
    delete?: SubscriptionWhereInput | boolean;
    connect?: SubscriptionWhereUniqueInput;
    update?: XOR<
      XOR<
        SubscriptionUpdateToOneWithWhereWithoutUserInput,
        SubscriptionUpdateWithoutUserInput
      >,
      SubscriptionUncheckedUpdateWithoutUserInput
    >;
  };

  export type ProblemUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          ProblemCreateWithoutUserInput,
          ProblemUncheckedCreateWithoutUserInput
        >
      | ProblemCreateWithoutUserInput[]
      | ProblemUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | ProblemCreateOrConnectWithoutUserInput
      | ProblemCreateOrConnectWithoutUserInput[];
    upsert?:
      | ProblemUpsertWithWhereUniqueWithoutUserInput
      | ProblemUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: ProblemCreateManyUserInputEnvelope;
    set?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[];
    disconnect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[];
    delete?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[];
    connect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[];
    update?:
      | ProblemUpdateWithWhereUniqueWithoutUserInput
      | ProblemUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | ProblemUpdateManyWithWhereWithoutUserInput
      | ProblemUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: ProblemScalarWhereInput | ProblemScalarWhereInput[];
  };

  export type SubmissionUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          SubmissionCreateWithoutUserInput,
          SubmissionUncheckedCreateWithoutUserInput
        >
      | SubmissionCreateWithoutUserInput[]
      | SubmissionUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | SubmissionCreateOrConnectWithoutUserInput
      | SubmissionCreateOrConnectWithoutUserInput[];
    upsert?:
      | SubmissionUpsertWithWhereUniqueWithoutUserInput
      | SubmissionUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: SubmissionCreateManyUserInputEnvelope;
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[];
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[];
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[];
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[];
    update?:
      | SubmissionUpdateWithWhereUniqueWithoutUserInput
      | SubmissionUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | SubmissionUpdateManyWithWhereWithoutUserInput
      | SubmissionUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[];
  };

  export type ProblemSolvedUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          ProblemSolvedCreateWithoutUserInput,
          ProblemSolvedUncheckedCreateWithoutUserInput
        >
      | ProblemSolvedCreateWithoutUserInput[]
      | ProblemSolvedUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | ProblemSolvedCreateOrConnectWithoutUserInput
      | ProblemSolvedCreateOrConnectWithoutUserInput[];
    upsert?:
      | ProblemSolvedUpsertWithWhereUniqueWithoutUserInput
      | ProblemSolvedUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: ProblemSolvedCreateManyUserInputEnvelope;
    set?: ProblemSolvedWhereUniqueInput | ProblemSolvedWhereUniqueInput[];
    disconnect?:
      | ProblemSolvedWhereUniqueInput
      | ProblemSolvedWhereUniqueInput[];
    delete?: ProblemSolvedWhereUniqueInput | ProblemSolvedWhereUniqueInput[];
    connect?: ProblemSolvedWhereUniqueInput | ProblemSolvedWhereUniqueInput[];
    update?:
      | ProblemSolvedUpdateWithWhereUniqueWithoutUserInput
      | ProblemSolvedUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | ProblemSolvedUpdateManyWithWhereWithoutUserInput
      | ProblemSolvedUpdateManyWithWhereWithoutUserInput[];
    deleteMany?:
      | ProblemSolvedScalarWhereInput
      | ProblemSolvedScalarWhereInput[];
  };

  export type DiscussionUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          DiscussionCreateWithoutUserInput,
          DiscussionUncheckedCreateWithoutUserInput
        >
      | DiscussionCreateWithoutUserInput[]
      | DiscussionUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | DiscussionCreateOrConnectWithoutUserInput
      | DiscussionCreateOrConnectWithoutUserInput[];
    upsert?:
      | DiscussionUpsertWithWhereUniqueWithoutUserInput
      | DiscussionUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: DiscussionCreateManyUserInputEnvelope;
    set?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[];
    disconnect?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[];
    delete?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[];
    connect?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[];
    update?:
      | DiscussionUpdateWithWhereUniqueWithoutUserInput
      | DiscussionUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | DiscussionUpdateManyWithWhereWithoutUserInput
      | DiscussionUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: DiscussionScalarWhereInput | DiscussionScalarWhereInput[];
  };

  export type ProblemVoteUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          ProblemVoteCreateWithoutUserInput,
          ProblemVoteUncheckedCreateWithoutUserInput
        >
      | ProblemVoteCreateWithoutUserInput[]
      | ProblemVoteUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | ProblemVoteCreateOrConnectWithoutUserInput
      | ProblemVoteCreateOrConnectWithoutUserInput[];
    upsert?:
      | ProblemVoteUpsertWithWhereUniqueWithoutUserInput
      | ProblemVoteUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: ProblemVoteCreateManyUserInputEnvelope;
    set?: ProblemVoteWhereUniqueInput | ProblemVoteWhereUniqueInput[];
    disconnect?: ProblemVoteWhereUniqueInput | ProblemVoteWhereUniqueInput[];
    delete?: ProblemVoteWhereUniqueInput | ProblemVoteWhereUniqueInput[];
    connect?: ProblemVoteWhereUniqueInput | ProblemVoteWhereUniqueInput[];
    update?:
      | ProblemVoteUpdateWithWhereUniqueWithoutUserInput
      | ProblemVoteUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | ProblemVoteUpdateManyWithWhereWithoutUserInput
      | ProblemVoteUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: ProblemVoteScalarWhereInput | ProblemVoteScalarWhereInput[];
  };

  export type PlaylistUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          PlaylistCreateWithoutUserInput,
          PlaylistUncheckedCreateWithoutUserInput
        >
      | PlaylistCreateWithoutUserInput[]
      | PlaylistUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | PlaylistCreateOrConnectWithoutUserInput
      | PlaylistCreateOrConnectWithoutUserInput[];
    upsert?:
      | PlaylistUpsertWithWhereUniqueWithoutUserInput
      | PlaylistUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: PlaylistCreateManyUserInputEnvelope;
    set?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[];
    disconnect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[];
    delete?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[];
    connect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[];
    update?:
      | PlaylistUpdateWithWhereUniqueWithoutUserInput
      | PlaylistUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | PlaylistUpdateManyWithWhereWithoutUserInput
      | PlaylistUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: PlaylistScalarWhereInput | PlaylistScalarWhereInput[];
  };

  export type SubscriptionUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<
      SubscriptionCreateWithoutUserInput,
      SubscriptionUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput;
    upsert?: SubscriptionUpsertWithoutUserInput;
    disconnect?: SubscriptionWhereInput | boolean;
    delete?: SubscriptionWhereInput | boolean;
    connect?: SubscriptionWhereUniqueInput;
    update?: XOR<
      XOR<
        SubscriptionUpdateToOneWithWhereWithoutUserInput,
        SubscriptionUpdateWithoutUserInput
      >,
      SubscriptionUncheckedUpdateWithoutUserInput
    >;
  };

  export type ProblemCreatetopicInput = {
    set: string[];
  };

  export type UserCreateNestedOneWithoutProblemInput = {
    create?: XOR<
      UserCreateWithoutProblemInput,
      UserUncheckedCreateWithoutProblemInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutProblemInput;
    connect?: UserWhereUniqueInput;
  };

  export type SubmissionCreateNestedManyWithoutProblemInput = {
    create?:
      | XOR<
          SubmissionCreateWithoutProblemInput,
          SubmissionUncheckedCreateWithoutProblemInput
        >
      | SubmissionCreateWithoutProblemInput[]
      | SubmissionUncheckedCreateWithoutProblemInput[];
    connectOrCreate?:
      | SubmissionCreateOrConnectWithoutProblemInput
      | SubmissionCreateOrConnectWithoutProblemInput[];
    createMany?: SubmissionCreateManyProblemInputEnvelope;
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[];
  };

  export type ProblemSolvedCreateNestedManyWithoutProblemInput = {
    create?:
      | XOR<
          ProblemSolvedCreateWithoutProblemInput,
          ProblemSolvedUncheckedCreateWithoutProblemInput
        >
      | ProblemSolvedCreateWithoutProblemInput[]
      | ProblemSolvedUncheckedCreateWithoutProblemInput[];
    connectOrCreate?:
      | ProblemSolvedCreateOrConnectWithoutProblemInput
      | ProblemSolvedCreateOrConnectWithoutProblemInput[];
    createMany?: ProblemSolvedCreateManyProblemInputEnvelope;
    connect?: ProblemSolvedWhereUniqueInput | ProblemSolvedWhereUniqueInput[];
  };

  export type ProblemTestCaseCreateNestedManyWithoutProblemInput = {
    create?:
      | XOR<
          ProblemTestCaseCreateWithoutProblemInput,
          ProblemTestCaseUncheckedCreateWithoutProblemInput
        >
      | ProblemTestCaseCreateWithoutProblemInput[]
      | ProblemTestCaseUncheckedCreateWithoutProblemInput[];
    connectOrCreate?:
      | ProblemTestCaseCreateOrConnectWithoutProblemInput
      | ProblemTestCaseCreateOrConnectWithoutProblemInput[];
    createMany?: ProblemTestCaseCreateManyProblemInputEnvelope;
    connect?:
      | ProblemTestCaseWhereUniqueInput
      | ProblemTestCaseWhereUniqueInput[];
  };

  export type DiscussionCreateNestedManyWithoutProblemInput = {
    create?:
      | XOR<
          DiscussionCreateWithoutProblemInput,
          DiscussionUncheckedCreateWithoutProblemInput
        >
      | DiscussionCreateWithoutProblemInput[]
      | DiscussionUncheckedCreateWithoutProblemInput[];
    connectOrCreate?:
      | DiscussionCreateOrConnectWithoutProblemInput
      | DiscussionCreateOrConnectWithoutProblemInput[];
    createMany?: DiscussionCreateManyProblemInputEnvelope;
    connect?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[];
  };

  export type ProblemVoteCreateNestedManyWithoutProblemInput = {
    create?:
      | XOR<
          ProblemVoteCreateWithoutProblemInput,
          ProblemVoteUncheckedCreateWithoutProblemInput
        >
      | ProblemVoteCreateWithoutProblemInput[]
      | ProblemVoteUncheckedCreateWithoutProblemInput[];
    connectOrCreate?:
      | ProblemVoteCreateOrConnectWithoutProblemInput
      | ProblemVoteCreateOrConnectWithoutProblemInput[];
    createMany?: ProblemVoteCreateManyProblemInputEnvelope;
    connect?: ProblemVoteWhereUniqueInput | ProblemVoteWhereUniqueInput[];
  };

  export type ProblemInPlaylistCreateNestedManyWithoutProblemInput = {
    create?:
      | XOR<
          ProblemInPlaylistCreateWithoutProblemInput,
          ProblemInPlaylistUncheckedCreateWithoutProblemInput
        >
      | ProblemInPlaylistCreateWithoutProblemInput[]
      | ProblemInPlaylistUncheckedCreateWithoutProblemInput[];
    connectOrCreate?:
      | ProblemInPlaylistCreateOrConnectWithoutProblemInput
      | ProblemInPlaylistCreateOrConnectWithoutProblemInput[];
    createMany?: ProblemInPlaylistCreateManyProblemInputEnvelope;
    connect?:
      | ProblemInPlaylistWhereUniqueInput
      | ProblemInPlaylistWhereUniqueInput[];
  };

  export type SubmissionUncheckedCreateNestedManyWithoutProblemInput = {
    create?:
      | XOR<
          SubmissionCreateWithoutProblemInput,
          SubmissionUncheckedCreateWithoutProblemInput
        >
      | SubmissionCreateWithoutProblemInput[]
      | SubmissionUncheckedCreateWithoutProblemInput[];
    connectOrCreate?:
      | SubmissionCreateOrConnectWithoutProblemInput
      | SubmissionCreateOrConnectWithoutProblemInput[];
    createMany?: SubmissionCreateManyProblemInputEnvelope;
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[];
  };

  export type ProblemSolvedUncheckedCreateNestedManyWithoutProblemInput = {
    create?:
      | XOR<
          ProblemSolvedCreateWithoutProblemInput,
          ProblemSolvedUncheckedCreateWithoutProblemInput
        >
      | ProblemSolvedCreateWithoutProblemInput[]
      | ProblemSolvedUncheckedCreateWithoutProblemInput[];
    connectOrCreate?:
      | ProblemSolvedCreateOrConnectWithoutProblemInput
      | ProblemSolvedCreateOrConnectWithoutProblemInput[];
    createMany?: ProblemSolvedCreateManyProblemInputEnvelope;
    connect?: ProblemSolvedWhereUniqueInput | ProblemSolvedWhereUniqueInput[];
  };

  export type ProblemTestCaseUncheckedCreateNestedManyWithoutProblemInput = {
    create?:
      | XOR<
          ProblemTestCaseCreateWithoutProblemInput,
          ProblemTestCaseUncheckedCreateWithoutProblemInput
        >
      | ProblemTestCaseCreateWithoutProblemInput[]
      | ProblemTestCaseUncheckedCreateWithoutProblemInput[];
    connectOrCreate?:
      | ProblemTestCaseCreateOrConnectWithoutProblemInput
      | ProblemTestCaseCreateOrConnectWithoutProblemInput[];
    createMany?: ProblemTestCaseCreateManyProblemInputEnvelope;
    connect?:
      | ProblemTestCaseWhereUniqueInput
      | ProblemTestCaseWhereUniqueInput[];
  };

  export type DiscussionUncheckedCreateNestedManyWithoutProblemInput = {
    create?:
      | XOR<
          DiscussionCreateWithoutProblemInput,
          DiscussionUncheckedCreateWithoutProblemInput
        >
      | DiscussionCreateWithoutProblemInput[]
      | DiscussionUncheckedCreateWithoutProblemInput[];
    connectOrCreate?:
      | DiscussionCreateOrConnectWithoutProblemInput
      | DiscussionCreateOrConnectWithoutProblemInput[];
    createMany?: DiscussionCreateManyProblemInputEnvelope;
    connect?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[];
  };

  export type ProblemVoteUncheckedCreateNestedManyWithoutProblemInput = {
    create?:
      | XOR<
          ProblemVoteCreateWithoutProblemInput,
          ProblemVoteUncheckedCreateWithoutProblemInput
        >
      | ProblemVoteCreateWithoutProblemInput[]
      | ProblemVoteUncheckedCreateWithoutProblemInput[];
    connectOrCreate?:
      | ProblemVoteCreateOrConnectWithoutProblemInput
      | ProblemVoteCreateOrConnectWithoutProblemInput[];
    createMany?: ProblemVoteCreateManyProblemInputEnvelope;
    connect?: ProblemVoteWhereUniqueInput | ProblemVoteWhereUniqueInput[];
  };

  export type ProblemInPlaylistUncheckedCreateNestedManyWithoutProblemInput = {
    create?:
      | XOR<
          ProblemInPlaylistCreateWithoutProblemInput,
          ProblemInPlaylistUncheckedCreateWithoutProblemInput
        >
      | ProblemInPlaylistCreateWithoutProblemInput[]
      | ProblemInPlaylistUncheckedCreateWithoutProblemInput[];
    connectOrCreate?:
      | ProblemInPlaylistCreateOrConnectWithoutProblemInput
      | ProblemInPlaylistCreateOrConnectWithoutProblemInput[];
    createMany?: ProblemInPlaylistCreateManyProblemInputEnvelope;
    connect?:
      | ProblemInPlaylistWhereUniqueInput
      | ProblemInPlaylistWhereUniqueInput[];
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type EnumDifficultyFieldUpdateOperationsInput = {
    set?: $Enums.Difficulty;
  };

  export type ProblemUpdatetopicInput = {
    set?: string[];
    push?: string | string[];
  };

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
  };

  export type UserUpdateOneRequiredWithoutProblemNestedInput = {
    create?: XOR<
      UserCreateWithoutProblemInput,
      UserUncheckedCreateWithoutProblemInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutProblemInput;
    upsert?: UserUpsertWithoutProblemInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutProblemInput,
        UserUpdateWithoutProblemInput
      >,
      UserUncheckedUpdateWithoutProblemInput
    >;
  };

  export type SubmissionUpdateManyWithoutProblemNestedInput = {
    create?:
      | XOR<
          SubmissionCreateWithoutProblemInput,
          SubmissionUncheckedCreateWithoutProblemInput
        >
      | SubmissionCreateWithoutProblemInput[]
      | SubmissionUncheckedCreateWithoutProblemInput[];
    connectOrCreate?:
      | SubmissionCreateOrConnectWithoutProblemInput
      | SubmissionCreateOrConnectWithoutProblemInput[];
    upsert?:
      | SubmissionUpsertWithWhereUniqueWithoutProblemInput
      | SubmissionUpsertWithWhereUniqueWithoutProblemInput[];
    createMany?: SubmissionCreateManyProblemInputEnvelope;
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[];
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[];
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[];
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[];
    update?:
      | SubmissionUpdateWithWhereUniqueWithoutProblemInput
      | SubmissionUpdateWithWhereUniqueWithoutProblemInput[];
    updateMany?:
      | SubmissionUpdateManyWithWhereWithoutProblemInput
      | SubmissionUpdateManyWithWhereWithoutProblemInput[];
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[];
  };

  export type ProblemSolvedUpdateManyWithoutProblemNestedInput = {
    create?:
      | XOR<
          ProblemSolvedCreateWithoutProblemInput,
          ProblemSolvedUncheckedCreateWithoutProblemInput
        >
      | ProblemSolvedCreateWithoutProblemInput[]
      | ProblemSolvedUncheckedCreateWithoutProblemInput[];
    connectOrCreate?:
      | ProblemSolvedCreateOrConnectWithoutProblemInput
      | ProblemSolvedCreateOrConnectWithoutProblemInput[];
    upsert?:
      | ProblemSolvedUpsertWithWhereUniqueWithoutProblemInput
      | ProblemSolvedUpsertWithWhereUniqueWithoutProblemInput[];
    createMany?: ProblemSolvedCreateManyProblemInputEnvelope;
    set?: ProblemSolvedWhereUniqueInput | ProblemSolvedWhereUniqueInput[];
    disconnect?:
      | ProblemSolvedWhereUniqueInput
      | ProblemSolvedWhereUniqueInput[];
    delete?: ProblemSolvedWhereUniqueInput | ProblemSolvedWhereUniqueInput[];
    connect?: ProblemSolvedWhereUniqueInput | ProblemSolvedWhereUniqueInput[];
    update?:
      | ProblemSolvedUpdateWithWhereUniqueWithoutProblemInput
      | ProblemSolvedUpdateWithWhereUniqueWithoutProblemInput[];
    updateMany?:
      | ProblemSolvedUpdateManyWithWhereWithoutProblemInput
      | ProblemSolvedUpdateManyWithWhereWithoutProblemInput[];
    deleteMany?:
      | ProblemSolvedScalarWhereInput
      | ProblemSolvedScalarWhereInput[];
  };

  export type ProblemTestCaseUpdateManyWithoutProblemNestedInput = {
    create?:
      | XOR<
          ProblemTestCaseCreateWithoutProblemInput,
          ProblemTestCaseUncheckedCreateWithoutProblemInput
        >
      | ProblemTestCaseCreateWithoutProblemInput[]
      | ProblemTestCaseUncheckedCreateWithoutProblemInput[];
    connectOrCreate?:
      | ProblemTestCaseCreateOrConnectWithoutProblemInput
      | ProblemTestCaseCreateOrConnectWithoutProblemInput[];
    upsert?:
      | ProblemTestCaseUpsertWithWhereUniqueWithoutProblemInput
      | ProblemTestCaseUpsertWithWhereUniqueWithoutProblemInput[];
    createMany?: ProblemTestCaseCreateManyProblemInputEnvelope;
    set?: ProblemTestCaseWhereUniqueInput | ProblemTestCaseWhereUniqueInput[];
    disconnect?:
      | ProblemTestCaseWhereUniqueInput
      | ProblemTestCaseWhereUniqueInput[];
    delete?:
      | ProblemTestCaseWhereUniqueInput
      | ProblemTestCaseWhereUniqueInput[];
    connect?:
      | ProblemTestCaseWhereUniqueInput
      | ProblemTestCaseWhereUniqueInput[];
    update?:
      | ProblemTestCaseUpdateWithWhereUniqueWithoutProblemInput
      | ProblemTestCaseUpdateWithWhereUniqueWithoutProblemInput[];
    updateMany?:
      | ProblemTestCaseUpdateManyWithWhereWithoutProblemInput
      | ProblemTestCaseUpdateManyWithWhereWithoutProblemInput[];
    deleteMany?:
      | ProblemTestCaseScalarWhereInput
      | ProblemTestCaseScalarWhereInput[];
  };

  export type DiscussionUpdateManyWithoutProblemNestedInput = {
    create?:
      | XOR<
          DiscussionCreateWithoutProblemInput,
          DiscussionUncheckedCreateWithoutProblemInput
        >
      | DiscussionCreateWithoutProblemInput[]
      | DiscussionUncheckedCreateWithoutProblemInput[];
    connectOrCreate?:
      | DiscussionCreateOrConnectWithoutProblemInput
      | DiscussionCreateOrConnectWithoutProblemInput[];
    upsert?:
      | DiscussionUpsertWithWhereUniqueWithoutProblemInput
      | DiscussionUpsertWithWhereUniqueWithoutProblemInput[];
    createMany?: DiscussionCreateManyProblemInputEnvelope;
    set?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[];
    disconnect?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[];
    delete?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[];
    connect?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[];
    update?:
      | DiscussionUpdateWithWhereUniqueWithoutProblemInput
      | DiscussionUpdateWithWhereUniqueWithoutProblemInput[];
    updateMany?:
      | DiscussionUpdateManyWithWhereWithoutProblemInput
      | DiscussionUpdateManyWithWhereWithoutProblemInput[];
    deleteMany?: DiscussionScalarWhereInput | DiscussionScalarWhereInput[];
  };

  export type ProblemVoteUpdateManyWithoutProblemNestedInput = {
    create?:
      | XOR<
          ProblemVoteCreateWithoutProblemInput,
          ProblemVoteUncheckedCreateWithoutProblemInput
        >
      | ProblemVoteCreateWithoutProblemInput[]
      | ProblemVoteUncheckedCreateWithoutProblemInput[];
    connectOrCreate?:
      | ProblemVoteCreateOrConnectWithoutProblemInput
      | ProblemVoteCreateOrConnectWithoutProblemInput[];
    upsert?:
      | ProblemVoteUpsertWithWhereUniqueWithoutProblemInput
      | ProblemVoteUpsertWithWhereUniqueWithoutProblemInput[];
    createMany?: ProblemVoteCreateManyProblemInputEnvelope;
    set?: ProblemVoteWhereUniqueInput | ProblemVoteWhereUniqueInput[];
    disconnect?: ProblemVoteWhereUniqueInput | ProblemVoteWhereUniqueInput[];
    delete?: ProblemVoteWhereUniqueInput | ProblemVoteWhereUniqueInput[];
    connect?: ProblemVoteWhereUniqueInput | ProblemVoteWhereUniqueInput[];
    update?:
      | ProblemVoteUpdateWithWhereUniqueWithoutProblemInput
      | ProblemVoteUpdateWithWhereUniqueWithoutProblemInput[];
    updateMany?:
      | ProblemVoteUpdateManyWithWhereWithoutProblemInput
      | ProblemVoteUpdateManyWithWhereWithoutProblemInput[];
    deleteMany?: ProblemVoteScalarWhereInput | ProblemVoteScalarWhereInput[];
  };

  export type ProblemInPlaylistUpdateManyWithoutProblemNestedInput = {
    create?:
      | XOR<
          ProblemInPlaylistCreateWithoutProblemInput,
          ProblemInPlaylistUncheckedCreateWithoutProblemInput
        >
      | ProblemInPlaylistCreateWithoutProblemInput[]
      | ProblemInPlaylistUncheckedCreateWithoutProblemInput[];
    connectOrCreate?:
      | ProblemInPlaylistCreateOrConnectWithoutProblemInput
      | ProblemInPlaylistCreateOrConnectWithoutProblemInput[];
    upsert?:
      | ProblemInPlaylistUpsertWithWhereUniqueWithoutProblemInput
      | ProblemInPlaylistUpsertWithWhereUniqueWithoutProblemInput[];
    createMany?: ProblemInPlaylistCreateManyProblemInputEnvelope;
    set?:
      | ProblemInPlaylistWhereUniqueInput
      | ProblemInPlaylistWhereUniqueInput[];
    disconnect?:
      | ProblemInPlaylistWhereUniqueInput
      | ProblemInPlaylistWhereUniqueInput[];
    delete?:
      | ProblemInPlaylistWhereUniqueInput
      | ProblemInPlaylistWhereUniqueInput[];
    connect?:
      | ProblemInPlaylistWhereUniqueInput
      | ProblemInPlaylistWhereUniqueInput[];
    update?:
      | ProblemInPlaylistUpdateWithWhereUniqueWithoutProblemInput
      | ProblemInPlaylistUpdateWithWhereUniqueWithoutProblemInput[];
    updateMany?:
      | ProblemInPlaylistUpdateManyWithWhereWithoutProblemInput
      | ProblemInPlaylistUpdateManyWithWhereWithoutProblemInput[];
    deleteMany?:
      | ProblemInPlaylistScalarWhereInput
      | ProblemInPlaylistScalarWhereInput[];
  };

  export type SubmissionUncheckedUpdateManyWithoutProblemNestedInput = {
    create?:
      | XOR<
          SubmissionCreateWithoutProblemInput,
          SubmissionUncheckedCreateWithoutProblemInput
        >
      | SubmissionCreateWithoutProblemInput[]
      | SubmissionUncheckedCreateWithoutProblemInput[];
    connectOrCreate?:
      | SubmissionCreateOrConnectWithoutProblemInput
      | SubmissionCreateOrConnectWithoutProblemInput[];
    upsert?:
      | SubmissionUpsertWithWhereUniqueWithoutProblemInput
      | SubmissionUpsertWithWhereUniqueWithoutProblemInput[];
    createMany?: SubmissionCreateManyProblemInputEnvelope;
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[];
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[];
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[];
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[];
    update?:
      | SubmissionUpdateWithWhereUniqueWithoutProblemInput
      | SubmissionUpdateWithWhereUniqueWithoutProblemInput[];
    updateMany?:
      | SubmissionUpdateManyWithWhereWithoutProblemInput
      | SubmissionUpdateManyWithWhereWithoutProblemInput[];
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[];
  };

  export type ProblemSolvedUncheckedUpdateManyWithoutProblemNestedInput = {
    create?:
      | XOR<
          ProblemSolvedCreateWithoutProblemInput,
          ProblemSolvedUncheckedCreateWithoutProblemInput
        >
      | ProblemSolvedCreateWithoutProblemInput[]
      | ProblemSolvedUncheckedCreateWithoutProblemInput[];
    connectOrCreate?:
      | ProblemSolvedCreateOrConnectWithoutProblemInput
      | ProblemSolvedCreateOrConnectWithoutProblemInput[];
    upsert?:
      | ProblemSolvedUpsertWithWhereUniqueWithoutProblemInput
      | ProblemSolvedUpsertWithWhereUniqueWithoutProblemInput[];
    createMany?: ProblemSolvedCreateManyProblemInputEnvelope;
    set?: ProblemSolvedWhereUniqueInput | ProblemSolvedWhereUniqueInput[];
    disconnect?:
      | ProblemSolvedWhereUniqueInput
      | ProblemSolvedWhereUniqueInput[];
    delete?: ProblemSolvedWhereUniqueInput | ProblemSolvedWhereUniqueInput[];
    connect?: ProblemSolvedWhereUniqueInput | ProblemSolvedWhereUniqueInput[];
    update?:
      | ProblemSolvedUpdateWithWhereUniqueWithoutProblemInput
      | ProblemSolvedUpdateWithWhereUniqueWithoutProblemInput[];
    updateMany?:
      | ProblemSolvedUpdateManyWithWhereWithoutProblemInput
      | ProblemSolvedUpdateManyWithWhereWithoutProblemInput[];
    deleteMany?:
      | ProblemSolvedScalarWhereInput
      | ProblemSolvedScalarWhereInput[];
  };

  export type ProblemTestCaseUncheckedUpdateManyWithoutProblemNestedInput = {
    create?:
      | XOR<
          ProblemTestCaseCreateWithoutProblemInput,
          ProblemTestCaseUncheckedCreateWithoutProblemInput
        >
      | ProblemTestCaseCreateWithoutProblemInput[]
      | ProblemTestCaseUncheckedCreateWithoutProblemInput[];
    connectOrCreate?:
      | ProblemTestCaseCreateOrConnectWithoutProblemInput
      | ProblemTestCaseCreateOrConnectWithoutProblemInput[];
    upsert?:
      | ProblemTestCaseUpsertWithWhereUniqueWithoutProblemInput
      | ProblemTestCaseUpsertWithWhereUniqueWithoutProblemInput[];
    createMany?: ProblemTestCaseCreateManyProblemInputEnvelope;
    set?: ProblemTestCaseWhereUniqueInput | ProblemTestCaseWhereUniqueInput[];
    disconnect?:
      | ProblemTestCaseWhereUniqueInput
      | ProblemTestCaseWhereUniqueInput[];
    delete?:
      | ProblemTestCaseWhereUniqueInput
      | ProblemTestCaseWhereUniqueInput[];
    connect?:
      | ProblemTestCaseWhereUniqueInput
      | ProblemTestCaseWhereUniqueInput[];
    update?:
      | ProblemTestCaseUpdateWithWhereUniqueWithoutProblemInput
      | ProblemTestCaseUpdateWithWhereUniqueWithoutProblemInput[];
    updateMany?:
      | ProblemTestCaseUpdateManyWithWhereWithoutProblemInput
      | ProblemTestCaseUpdateManyWithWhereWithoutProblemInput[];
    deleteMany?:
      | ProblemTestCaseScalarWhereInput
      | ProblemTestCaseScalarWhereInput[];
  };

  export type DiscussionUncheckedUpdateManyWithoutProblemNestedInput = {
    create?:
      | XOR<
          DiscussionCreateWithoutProblemInput,
          DiscussionUncheckedCreateWithoutProblemInput
        >
      | DiscussionCreateWithoutProblemInput[]
      | DiscussionUncheckedCreateWithoutProblemInput[];
    connectOrCreate?:
      | DiscussionCreateOrConnectWithoutProblemInput
      | DiscussionCreateOrConnectWithoutProblemInput[];
    upsert?:
      | DiscussionUpsertWithWhereUniqueWithoutProblemInput
      | DiscussionUpsertWithWhereUniqueWithoutProblemInput[];
    createMany?: DiscussionCreateManyProblemInputEnvelope;
    set?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[];
    disconnect?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[];
    delete?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[];
    connect?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[];
    update?:
      | DiscussionUpdateWithWhereUniqueWithoutProblemInput
      | DiscussionUpdateWithWhereUniqueWithoutProblemInput[];
    updateMany?:
      | DiscussionUpdateManyWithWhereWithoutProblemInput
      | DiscussionUpdateManyWithWhereWithoutProblemInput[];
    deleteMany?: DiscussionScalarWhereInput | DiscussionScalarWhereInput[];
  };

  export type ProblemVoteUncheckedUpdateManyWithoutProblemNestedInput = {
    create?:
      | XOR<
          ProblemVoteCreateWithoutProblemInput,
          ProblemVoteUncheckedCreateWithoutProblemInput
        >
      | ProblemVoteCreateWithoutProblemInput[]
      | ProblemVoteUncheckedCreateWithoutProblemInput[];
    connectOrCreate?:
      | ProblemVoteCreateOrConnectWithoutProblemInput
      | ProblemVoteCreateOrConnectWithoutProblemInput[];
    upsert?:
      | ProblemVoteUpsertWithWhereUniqueWithoutProblemInput
      | ProblemVoteUpsertWithWhereUniqueWithoutProblemInput[];
    createMany?: ProblemVoteCreateManyProblemInputEnvelope;
    set?: ProblemVoteWhereUniqueInput | ProblemVoteWhereUniqueInput[];
    disconnect?: ProblemVoteWhereUniqueInput | ProblemVoteWhereUniqueInput[];
    delete?: ProblemVoteWhereUniqueInput | ProblemVoteWhereUniqueInput[];
    connect?: ProblemVoteWhereUniqueInput | ProblemVoteWhereUniqueInput[];
    update?:
      | ProblemVoteUpdateWithWhereUniqueWithoutProblemInput
      | ProblemVoteUpdateWithWhereUniqueWithoutProblemInput[];
    updateMany?:
      | ProblemVoteUpdateManyWithWhereWithoutProblemInput
      | ProblemVoteUpdateManyWithWhereWithoutProblemInput[];
    deleteMany?: ProblemVoteScalarWhereInput | ProblemVoteScalarWhereInput[];
  };

  export type ProblemInPlaylistUncheckedUpdateManyWithoutProblemNestedInput = {
    create?:
      | XOR<
          ProblemInPlaylistCreateWithoutProblemInput,
          ProblemInPlaylistUncheckedCreateWithoutProblemInput
        >
      | ProblemInPlaylistCreateWithoutProblemInput[]
      | ProblemInPlaylistUncheckedCreateWithoutProblemInput[];
    connectOrCreate?:
      | ProblemInPlaylistCreateOrConnectWithoutProblemInput
      | ProblemInPlaylistCreateOrConnectWithoutProblemInput[];
    upsert?:
      | ProblemInPlaylistUpsertWithWhereUniqueWithoutProblemInput
      | ProblemInPlaylistUpsertWithWhereUniqueWithoutProblemInput[];
    createMany?: ProblemInPlaylistCreateManyProblemInputEnvelope;
    set?:
      | ProblemInPlaylistWhereUniqueInput
      | ProblemInPlaylistWhereUniqueInput[];
    disconnect?:
      | ProblemInPlaylistWhereUniqueInput
      | ProblemInPlaylistWhereUniqueInput[];
    delete?:
      | ProblemInPlaylistWhereUniqueInput
      | ProblemInPlaylistWhereUniqueInput[];
    connect?:
      | ProblemInPlaylistWhereUniqueInput
      | ProblemInPlaylistWhereUniqueInput[];
    update?:
      | ProblemInPlaylistUpdateWithWhereUniqueWithoutProblemInput
      | ProblemInPlaylistUpdateWithWhereUniqueWithoutProblemInput[];
    updateMany?:
      | ProblemInPlaylistUpdateManyWithWhereWithoutProblemInput
      | ProblemInPlaylistUpdateManyWithWhereWithoutProblemInput[];
    deleteMany?:
      | ProblemInPlaylistScalarWhereInput
      | ProblemInPlaylistScalarWhereInput[];
  };

  export type ProblemCreateNestedOneWithoutTestcasesInput = {
    create?: XOR<
      ProblemCreateWithoutTestcasesInput,
      ProblemUncheckedCreateWithoutTestcasesInput
    >;
    connectOrCreate?: ProblemCreateOrConnectWithoutTestcasesInput;
    connect?: ProblemWhereUniqueInput;
  };

  export type ProblemUpdateOneRequiredWithoutTestcasesNestedInput = {
    create?: XOR<
      ProblemCreateWithoutTestcasesInput,
      ProblemUncheckedCreateWithoutTestcasesInput
    >;
    connectOrCreate?: ProblemCreateOrConnectWithoutTestcasesInput;
    upsert?: ProblemUpsertWithoutTestcasesInput;
    connect?: ProblemWhereUniqueInput;
    update?: XOR<
      XOR<
        ProblemUpdateToOneWithWhereWithoutTestcasesInput,
        ProblemUpdateWithoutTestcasesInput
      >,
      ProblemUncheckedUpdateWithoutTestcasesInput
    >;
  };

  export type UserCreateNestedOneWithoutSubmissionInput = {
    create?: XOR<
      UserCreateWithoutSubmissionInput,
      UserUncheckedCreateWithoutSubmissionInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutSubmissionInput;
    connect?: UserWhereUniqueInput;
  };

  export type ProblemCreateNestedOneWithoutSubmissionInput = {
    create?: XOR<
      ProblemCreateWithoutSubmissionInput,
      ProblemUncheckedCreateWithoutSubmissionInput
    >;
    connectOrCreate?: ProblemCreateOrConnectWithoutSubmissionInput;
    connect?: ProblemWhereUniqueInput;
  };

  export type TestCaseCreateNestedManyWithoutSubmissionInput = {
    create?:
      | XOR<
          TestCaseCreateWithoutSubmissionInput,
          TestCaseUncheckedCreateWithoutSubmissionInput
        >
      | TestCaseCreateWithoutSubmissionInput[]
      | TestCaseUncheckedCreateWithoutSubmissionInput[];
    connectOrCreate?:
      | TestCaseCreateOrConnectWithoutSubmissionInput
      | TestCaseCreateOrConnectWithoutSubmissionInput[];
    createMany?: TestCaseCreateManySubmissionInputEnvelope;
    connect?: TestCaseWhereUniqueInput | TestCaseWhereUniqueInput[];
  };

  export type TestCaseUncheckedCreateNestedManyWithoutSubmissionInput = {
    create?:
      | XOR<
          TestCaseCreateWithoutSubmissionInput,
          TestCaseUncheckedCreateWithoutSubmissionInput
        >
      | TestCaseCreateWithoutSubmissionInput[]
      | TestCaseUncheckedCreateWithoutSubmissionInput[];
    connectOrCreate?:
      | TestCaseCreateOrConnectWithoutSubmissionInput
      | TestCaseCreateOrConnectWithoutSubmissionInput[];
    createMany?: TestCaseCreateManySubmissionInputEnvelope;
    connect?: TestCaseWhereUniqueInput | TestCaseWhereUniqueInput[];
  };

  export type UserUpdateOneRequiredWithoutSubmissionNestedInput = {
    create?: XOR<
      UserCreateWithoutSubmissionInput,
      UserUncheckedCreateWithoutSubmissionInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutSubmissionInput;
    upsert?: UserUpsertWithoutSubmissionInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutSubmissionInput,
        UserUpdateWithoutSubmissionInput
      >,
      UserUncheckedUpdateWithoutSubmissionInput
    >;
  };

  export type ProblemUpdateOneRequiredWithoutSubmissionNestedInput = {
    create?: XOR<
      ProblemCreateWithoutSubmissionInput,
      ProblemUncheckedCreateWithoutSubmissionInput
    >;
    connectOrCreate?: ProblemCreateOrConnectWithoutSubmissionInput;
    upsert?: ProblemUpsertWithoutSubmissionInput;
    connect?: ProblemWhereUniqueInput;
    update?: XOR<
      XOR<
        ProblemUpdateToOneWithWhereWithoutSubmissionInput,
        ProblemUpdateWithoutSubmissionInput
      >,
      ProblemUncheckedUpdateWithoutSubmissionInput
    >;
  };

  export type TestCaseUpdateManyWithoutSubmissionNestedInput = {
    create?:
      | XOR<
          TestCaseCreateWithoutSubmissionInput,
          TestCaseUncheckedCreateWithoutSubmissionInput
        >
      | TestCaseCreateWithoutSubmissionInput[]
      | TestCaseUncheckedCreateWithoutSubmissionInput[];
    connectOrCreate?:
      | TestCaseCreateOrConnectWithoutSubmissionInput
      | TestCaseCreateOrConnectWithoutSubmissionInput[];
    upsert?:
      | TestCaseUpsertWithWhereUniqueWithoutSubmissionInput
      | TestCaseUpsertWithWhereUniqueWithoutSubmissionInput[];
    createMany?: TestCaseCreateManySubmissionInputEnvelope;
    set?: TestCaseWhereUniqueInput | TestCaseWhereUniqueInput[];
    disconnect?: TestCaseWhereUniqueInput | TestCaseWhereUniqueInput[];
    delete?: TestCaseWhereUniqueInput | TestCaseWhereUniqueInput[];
    connect?: TestCaseWhereUniqueInput | TestCaseWhereUniqueInput[];
    update?:
      | TestCaseUpdateWithWhereUniqueWithoutSubmissionInput
      | TestCaseUpdateWithWhereUniqueWithoutSubmissionInput[];
    updateMany?:
      | TestCaseUpdateManyWithWhereWithoutSubmissionInput
      | TestCaseUpdateManyWithWhereWithoutSubmissionInput[];
    deleteMany?: TestCaseScalarWhereInput | TestCaseScalarWhereInput[];
  };

  export type TestCaseUncheckedUpdateManyWithoutSubmissionNestedInput = {
    create?:
      | XOR<
          TestCaseCreateWithoutSubmissionInput,
          TestCaseUncheckedCreateWithoutSubmissionInput
        >
      | TestCaseCreateWithoutSubmissionInput[]
      | TestCaseUncheckedCreateWithoutSubmissionInput[];
    connectOrCreate?:
      | TestCaseCreateOrConnectWithoutSubmissionInput
      | TestCaseCreateOrConnectWithoutSubmissionInput[];
    upsert?:
      | TestCaseUpsertWithWhereUniqueWithoutSubmissionInput
      | TestCaseUpsertWithWhereUniqueWithoutSubmissionInput[];
    createMany?: TestCaseCreateManySubmissionInputEnvelope;
    set?: TestCaseWhereUniqueInput | TestCaseWhereUniqueInput[];
    disconnect?: TestCaseWhereUniqueInput | TestCaseWhereUniqueInput[];
    delete?: TestCaseWhereUniqueInput | TestCaseWhereUniqueInput[];
    connect?: TestCaseWhereUniqueInput | TestCaseWhereUniqueInput[];
    update?:
      | TestCaseUpdateWithWhereUniqueWithoutSubmissionInput
      | TestCaseUpdateWithWhereUniqueWithoutSubmissionInput[];
    updateMany?:
      | TestCaseUpdateManyWithWhereWithoutSubmissionInput
      | TestCaseUpdateManyWithWhereWithoutSubmissionInput[];
    deleteMany?: TestCaseScalarWhereInput | TestCaseScalarWhereInput[];
  };

  export type SubmissionCreateNestedOneWithoutTestcaseInput = {
    create?: XOR<
      SubmissionCreateWithoutTestcaseInput,
      SubmissionUncheckedCreateWithoutTestcaseInput
    >;
    connectOrCreate?: SubmissionCreateOrConnectWithoutTestcaseInput;
    connect?: SubmissionWhereUniqueInput;
  };

  export type SubmissionUpdateOneRequiredWithoutTestcaseNestedInput = {
    create?: XOR<
      SubmissionCreateWithoutTestcaseInput,
      SubmissionUncheckedCreateWithoutTestcaseInput
    >;
    connectOrCreate?: SubmissionCreateOrConnectWithoutTestcaseInput;
    upsert?: SubmissionUpsertWithoutTestcaseInput;
    connect?: SubmissionWhereUniqueInput;
    update?: XOR<
      XOR<
        SubmissionUpdateToOneWithWhereWithoutTestcaseInput,
        SubmissionUpdateWithoutTestcaseInput
      >,
      SubmissionUncheckedUpdateWithoutTestcaseInput
    >;
  };

  export type UserCreateNestedOneWithoutProblemSolvedInput = {
    create?: XOR<
      UserCreateWithoutProblemSolvedInput,
      UserUncheckedCreateWithoutProblemSolvedInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutProblemSolvedInput;
    connect?: UserWhereUniqueInput;
  };

  export type ProblemCreateNestedOneWithoutSolvedByInput = {
    create?: XOR<
      ProblemCreateWithoutSolvedByInput,
      ProblemUncheckedCreateWithoutSolvedByInput
    >;
    connectOrCreate?: ProblemCreateOrConnectWithoutSolvedByInput;
    connect?: ProblemWhereUniqueInput;
  };

  export type UserUpdateOneRequiredWithoutProblemSolvedNestedInput = {
    create?: XOR<
      UserCreateWithoutProblemSolvedInput,
      UserUncheckedCreateWithoutProblemSolvedInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutProblemSolvedInput;
    upsert?: UserUpsertWithoutProblemSolvedInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutProblemSolvedInput,
        UserUpdateWithoutProblemSolvedInput
      >,
      UserUncheckedUpdateWithoutProblemSolvedInput
    >;
  };

  export type ProblemUpdateOneRequiredWithoutSolvedByNestedInput = {
    create?: XOR<
      ProblemCreateWithoutSolvedByInput,
      ProblemUncheckedCreateWithoutSolvedByInput
    >;
    connectOrCreate?: ProblemCreateOrConnectWithoutSolvedByInput;
    upsert?: ProblemUpsertWithoutSolvedByInput;
    connect?: ProblemWhereUniqueInput;
    update?: XOR<
      XOR<
        ProblemUpdateToOneWithWhereWithoutSolvedByInput,
        ProblemUpdateWithoutSolvedByInput
      >,
      ProblemUncheckedUpdateWithoutSolvedByInput
    >;
  };

  export type UserCreateNestedOneWithoutDiscussionsInput = {
    create?: XOR<
      UserCreateWithoutDiscussionsInput,
      UserUncheckedCreateWithoutDiscussionsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutDiscussionsInput;
    connect?: UserWhereUniqueInput;
  };

  export type ProblemCreateNestedOneWithoutDiscussionsInput = {
    create?: XOR<
      ProblemCreateWithoutDiscussionsInput,
      ProblemUncheckedCreateWithoutDiscussionsInput
    >;
    connectOrCreate?: ProblemCreateOrConnectWithoutDiscussionsInput;
    connect?: ProblemWhereUniqueInput;
  };

  export type DiscussionCreateNestedOneWithoutRepliesInput = {
    create?: XOR<
      DiscussionCreateWithoutRepliesInput,
      DiscussionUncheckedCreateWithoutRepliesInput
    >;
    connectOrCreate?: DiscussionCreateOrConnectWithoutRepliesInput;
    connect?: DiscussionWhereUniqueInput;
  };

  export type DiscussionCreateNestedManyWithoutParentInput = {
    create?:
      | XOR<
          DiscussionCreateWithoutParentInput,
          DiscussionUncheckedCreateWithoutParentInput
        >
      | DiscussionCreateWithoutParentInput[]
      | DiscussionUncheckedCreateWithoutParentInput[];
    connectOrCreate?:
      | DiscussionCreateOrConnectWithoutParentInput
      | DiscussionCreateOrConnectWithoutParentInput[];
    createMany?: DiscussionCreateManyParentInputEnvelope;
    connect?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[];
  };

  export type DiscussionUncheckedCreateNestedManyWithoutParentInput = {
    create?:
      | XOR<
          DiscussionCreateWithoutParentInput,
          DiscussionUncheckedCreateWithoutParentInput
        >
      | DiscussionCreateWithoutParentInput[]
      | DiscussionUncheckedCreateWithoutParentInput[];
    connectOrCreate?:
      | DiscussionCreateOrConnectWithoutParentInput
      | DiscussionCreateOrConnectWithoutParentInput[];
    createMany?: DiscussionCreateManyParentInputEnvelope;
    connect?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[];
  };

  export type UserUpdateOneRequiredWithoutDiscussionsNestedInput = {
    create?: XOR<
      UserCreateWithoutDiscussionsInput,
      UserUncheckedCreateWithoutDiscussionsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutDiscussionsInput;
    upsert?: UserUpsertWithoutDiscussionsInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutDiscussionsInput,
        UserUpdateWithoutDiscussionsInput
      >,
      UserUncheckedUpdateWithoutDiscussionsInput
    >;
  };

  export type ProblemUpdateOneRequiredWithoutDiscussionsNestedInput = {
    create?: XOR<
      ProblemCreateWithoutDiscussionsInput,
      ProblemUncheckedCreateWithoutDiscussionsInput
    >;
    connectOrCreate?: ProblemCreateOrConnectWithoutDiscussionsInput;
    upsert?: ProblemUpsertWithoutDiscussionsInput;
    connect?: ProblemWhereUniqueInput;
    update?: XOR<
      XOR<
        ProblemUpdateToOneWithWhereWithoutDiscussionsInput,
        ProblemUpdateWithoutDiscussionsInput
      >,
      ProblemUncheckedUpdateWithoutDiscussionsInput
    >;
  };

  export type DiscussionUpdateOneWithoutRepliesNestedInput = {
    create?: XOR<
      DiscussionCreateWithoutRepliesInput,
      DiscussionUncheckedCreateWithoutRepliesInput
    >;
    connectOrCreate?: DiscussionCreateOrConnectWithoutRepliesInput;
    upsert?: DiscussionUpsertWithoutRepliesInput;
    disconnect?: DiscussionWhereInput | boolean;
    delete?: DiscussionWhereInput | boolean;
    connect?: DiscussionWhereUniqueInput;
    update?: XOR<
      XOR<
        DiscussionUpdateToOneWithWhereWithoutRepliesInput,
        DiscussionUpdateWithoutRepliesInput
      >,
      DiscussionUncheckedUpdateWithoutRepliesInput
    >;
  };

  export type DiscussionUpdateManyWithoutParentNestedInput = {
    create?:
      | XOR<
          DiscussionCreateWithoutParentInput,
          DiscussionUncheckedCreateWithoutParentInput
        >
      | DiscussionCreateWithoutParentInput[]
      | DiscussionUncheckedCreateWithoutParentInput[];
    connectOrCreate?:
      | DiscussionCreateOrConnectWithoutParentInput
      | DiscussionCreateOrConnectWithoutParentInput[];
    upsert?:
      | DiscussionUpsertWithWhereUniqueWithoutParentInput
      | DiscussionUpsertWithWhereUniqueWithoutParentInput[];
    createMany?: DiscussionCreateManyParentInputEnvelope;
    set?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[];
    disconnect?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[];
    delete?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[];
    connect?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[];
    update?:
      | DiscussionUpdateWithWhereUniqueWithoutParentInput
      | DiscussionUpdateWithWhereUniqueWithoutParentInput[];
    updateMany?:
      | DiscussionUpdateManyWithWhereWithoutParentInput
      | DiscussionUpdateManyWithWhereWithoutParentInput[];
    deleteMany?: DiscussionScalarWhereInput | DiscussionScalarWhereInput[];
  };

  export type DiscussionUncheckedUpdateManyWithoutParentNestedInput = {
    create?:
      | XOR<
          DiscussionCreateWithoutParentInput,
          DiscussionUncheckedCreateWithoutParentInput
        >
      | DiscussionCreateWithoutParentInput[]
      | DiscussionUncheckedCreateWithoutParentInput[];
    connectOrCreate?:
      | DiscussionCreateOrConnectWithoutParentInput
      | DiscussionCreateOrConnectWithoutParentInput[];
    upsert?:
      | DiscussionUpsertWithWhereUniqueWithoutParentInput
      | DiscussionUpsertWithWhereUniqueWithoutParentInput[];
    createMany?: DiscussionCreateManyParentInputEnvelope;
    set?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[];
    disconnect?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[];
    delete?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[];
    connect?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[];
    update?:
      | DiscussionUpdateWithWhereUniqueWithoutParentInput
      | DiscussionUpdateWithWhereUniqueWithoutParentInput[];
    updateMany?:
      | DiscussionUpdateManyWithWhereWithoutParentInput
      | DiscussionUpdateManyWithWhereWithoutParentInput[];
    deleteMany?: DiscussionScalarWhereInput | DiscussionScalarWhereInput[];
  };

  export type UserCreateNestedOneWithoutVotesOnProblemsInput = {
    create?: XOR<
      UserCreateWithoutVotesOnProblemsInput,
      UserUncheckedCreateWithoutVotesOnProblemsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutVotesOnProblemsInput;
    connect?: UserWhereUniqueInput;
  };

  export type ProblemCreateNestedOneWithoutVotesInput = {
    create?: XOR<
      ProblemCreateWithoutVotesInput,
      ProblemUncheckedCreateWithoutVotesInput
    >;
    connectOrCreate?: ProblemCreateOrConnectWithoutVotesInput;
    connect?: ProblemWhereUniqueInput;
  };

  export type EnumVoteTypeFieldUpdateOperationsInput = {
    set?: $Enums.VoteType;
  };

  export type UserUpdateOneRequiredWithoutVotesOnProblemsNestedInput = {
    create?: XOR<
      UserCreateWithoutVotesOnProblemsInput,
      UserUncheckedCreateWithoutVotesOnProblemsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutVotesOnProblemsInput;
    upsert?: UserUpsertWithoutVotesOnProblemsInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutVotesOnProblemsInput,
        UserUpdateWithoutVotesOnProblemsInput
      >,
      UserUncheckedUpdateWithoutVotesOnProblemsInput
    >;
  };

  export type ProblemUpdateOneRequiredWithoutVotesNestedInput = {
    create?: XOR<
      ProblemCreateWithoutVotesInput,
      ProblemUncheckedCreateWithoutVotesInput
    >;
    connectOrCreate?: ProblemCreateOrConnectWithoutVotesInput;
    upsert?: ProblemUpsertWithoutVotesInput;
    connect?: ProblemWhereUniqueInput;
    update?: XOR<
      XOR<
        ProblemUpdateToOneWithWhereWithoutVotesInput,
        ProblemUpdateWithoutVotesInput
      >,
      ProblemUncheckedUpdateWithoutVotesInput
    >;
  };

  export type ProblemInPlaylistCreateNestedManyWithoutPlaylistInput = {
    create?:
      | XOR<
          ProblemInPlaylistCreateWithoutPlaylistInput,
          ProblemInPlaylistUncheckedCreateWithoutPlaylistInput
        >
      | ProblemInPlaylistCreateWithoutPlaylistInput[]
      | ProblemInPlaylistUncheckedCreateWithoutPlaylistInput[];
    connectOrCreate?:
      | ProblemInPlaylistCreateOrConnectWithoutPlaylistInput
      | ProblemInPlaylistCreateOrConnectWithoutPlaylistInput[];
    createMany?: ProblemInPlaylistCreateManyPlaylistInputEnvelope;
    connect?:
      | ProblemInPlaylistWhereUniqueInput
      | ProblemInPlaylistWhereUniqueInput[];
  };

  export type UserCreateNestedOneWithoutPlaylistsInput = {
    create?: XOR<
      UserCreateWithoutPlaylistsInput,
      UserUncheckedCreateWithoutPlaylistsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutPlaylistsInput;
    connect?: UserWhereUniqueInput;
  };

  export type ProblemInPlaylistUncheckedCreateNestedManyWithoutPlaylistInput = {
    create?:
      | XOR<
          ProblemInPlaylistCreateWithoutPlaylistInput,
          ProblemInPlaylistUncheckedCreateWithoutPlaylistInput
        >
      | ProblemInPlaylistCreateWithoutPlaylistInput[]
      | ProblemInPlaylistUncheckedCreateWithoutPlaylistInput[];
    connectOrCreate?:
      | ProblemInPlaylistCreateOrConnectWithoutPlaylistInput
      | ProblemInPlaylistCreateOrConnectWithoutPlaylistInput[];
    createMany?: ProblemInPlaylistCreateManyPlaylistInputEnvelope;
    connect?:
      | ProblemInPlaylistWhereUniqueInput
      | ProblemInPlaylistWhereUniqueInput[];
  };

  export type ProblemInPlaylistUpdateManyWithoutPlaylistNestedInput = {
    create?:
      | XOR<
          ProblemInPlaylistCreateWithoutPlaylistInput,
          ProblemInPlaylistUncheckedCreateWithoutPlaylistInput
        >
      | ProblemInPlaylistCreateWithoutPlaylistInput[]
      | ProblemInPlaylistUncheckedCreateWithoutPlaylistInput[];
    connectOrCreate?:
      | ProblemInPlaylistCreateOrConnectWithoutPlaylistInput
      | ProblemInPlaylistCreateOrConnectWithoutPlaylistInput[];
    upsert?:
      | ProblemInPlaylistUpsertWithWhereUniqueWithoutPlaylistInput
      | ProblemInPlaylistUpsertWithWhereUniqueWithoutPlaylistInput[];
    createMany?: ProblemInPlaylistCreateManyPlaylistInputEnvelope;
    set?:
      | ProblemInPlaylistWhereUniqueInput
      | ProblemInPlaylistWhereUniqueInput[];
    disconnect?:
      | ProblemInPlaylistWhereUniqueInput
      | ProblemInPlaylistWhereUniqueInput[];
    delete?:
      | ProblemInPlaylistWhereUniqueInput
      | ProblemInPlaylistWhereUniqueInput[];
    connect?:
      | ProblemInPlaylistWhereUniqueInput
      | ProblemInPlaylistWhereUniqueInput[];
    update?:
      | ProblemInPlaylistUpdateWithWhereUniqueWithoutPlaylistInput
      | ProblemInPlaylistUpdateWithWhereUniqueWithoutPlaylistInput[];
    updateMany?:
      | ProblemInPlaylistUpdateManyWithWhereWithoutPlaylistInput
      | ProblemInPlaylistUpdateManyWithWhereWithoutPlaylistInput[];
    deleteMany?:
      | ProblemInPlaylistScalarWhereInput
      | ProblemInPlaylistScalarWhereInput[];
  };

  export type UserUpdateOneRequiredWithoutPlaylistsNestedInput = {
    create?: XOR<
      UserCreateWithoutPlaylistsInput,
      UserUncheckedCreateWithoutPlaylistsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutPlaylistsInput;
    upsert?: UserUpsertWithoutPlaylistsInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutPlaylistsInput,
        UserUpdateWithoutPlaylistsInput
      >,
      UserUncheckedUpdateWithoutPlaylistsInput
    >;
  };

  export type ProblemInPlaylistUncheckedUpdateManyWithoutPlaylistNestedInput = {
    create?:
      | XOR<
          ProblemInPlaylistCreateWithoutPlaylistInput,
          ProblemInPlaylistUncheckedCreateWithoutPlaylistInput
        >
      | ProblemInPlaylistCreateWithoutPlaylistInput[]
      | ProblemInPlaylistUncheckedCreateWithoutPlaylistInput[];
    connectOrCreate?:
      | ProblemInPlaylistCreateOrConnectWithoutPlaylistInput
      | ProblemInPlaylistCreateOrConnectWithoutPlaylistInput[];
    upsert?:
      | ProblemInPlaylistUpsertWithWhereUniqueWithoutPlaylistInput
      | ProblemInPlaylistUpsertWithWhereUniqueWithoutPlaylistInput[];
    createMany?: ProblemInPlaylistCreateManyPlaylistInputEnvelope;
    set?:
      | ProblemInPlaylistWhereUniqueInput
      | ProblemInPlaylistWhereUniqueInput[];
    disconnect?:
      | ProblemInPlaylistWhereUniqueInput
      | ProblemInPlaylistWhereUniqueInput[];
    delete?:
      | ProblemInPlaylistWhereUniqueInput
      | ProblemInPlaylistWhereUniqueInput[];
    connect?:
      | ProblemInPlaylistWhereUniqueInput
      | ProblemInPlaylistWhereUniqueInput[];
    update?:
      | ProblemInPlaylistUpdateWithWhereUniqueWithoutPlaylistInput
      | ProblemInPlaylistUpdateWithWhereUniqueWithoutPlaylistInput[];
    updateMany?:
      | ProblemInPlaylistUpdateManyWithWhereWithoutPlaylistInput
      | ProblemInPlaylistUpdateManyWithWhereWithoutPlaylistInput[];
    deleteMany?:
      | ProblemInPlaylistScalarWhereInput
      | ProblemInPlaylistScalarWhereInput[];
  };

  export type PlaylistCreateNestedOneWithoutProblemsInput = {
    create?: XOR<
      PlaylistCreateWithoutProblemsInput,
      PlaylistUncheckedCreateWithoutProblemsInput
    >;
    connectOrCreate?: PlaylistCreateOrConnectWithoutProblemsInput;
    connect?: PlaylistWhereUniqueInput;
  };

  export type ProblemCreateNestedOneWithoutProblemsPlatlistsInput = {
    create?: XOR<
      ProblemCreateWithoutProblemsPlatlistsInput,
      ProblemUncheckedCreateWithoutProblemsPlatlistsInput
    >;
    connectOrCreate?: ProblemCreateOrConnectWithoutProblemsPlatlistsInput;
    connect?: ProblemWhereUniqueInput;
  };

  export type PlaylistUpdateOneRequiredWithoutProblemsNestedInput = {
    create?: XOR<
      PlaylistCreateWithoutProblemsInput,
      PlaylistUncheckedCreateWithoutProblemsInput
    >;
    connectOrCreate?: PlaylistCreateOrConnectWithoutProblemsInput;
    upsert?: PlaylistUpsertWithoutProblemsInput;
    connect?: PlaylistWhereUniqueInput;
    update?: XOR<
      XOR<
        PlaylistUpdateToOneWithWhereWithoutProblemsInput,
        PlaylistUpdateWithoutProblemsInput
      >,
      PlaylistUncheckedUpdateWithoutProblemsInput
    >;
  };

  export type ProblemUpdateOneRequiredWithoutProblemsPlatlistsNestedInput = {
    create?: XOR<
      ProblemCreateWithoutProblemsPlatlistsInput,
      ProblemUncheckedCreateWithoutProblemsPlatlistsInput
    >;
    connectOrCreate?: ProblemCreateOrConnectWithoutProblemsPlatlistsInput;
    upsert?: ProblemUpsertWithoutProblemsPlatlistsInput;
    connect?: ProblemWhereUniqueInput;
    update?: XOR<
      XOR<
        ProblemUpdateToOneWithWhereWithoutProblemsPlatlistsInput,
        ProblemUpdateWithoutProblemsPlatlistsInput
      >,
      ProblemUncheckedUpdateWithoutProblemsPlatlistsInput
    >;
  };

  export type UserCreateNestedOneWithoutSubscriptionInput = {
    create?: XOR<
      UserCreateWithoutSubscriptionInput,
      UserUncheckedCreateWithoutSubscriptionInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionInput;
    connect?: UserWhereUniqueInput;
  };

  export type UserUpdateOneRequiredWithoutSubscriptionNestedInput = {
    create?: XOR<
      UserCreateWithoutSubscriptionInput,
      UserUncheckedCreateWithoutSubscriptionInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionInput;
    upsert?: UserUpsertWithoutSubscriptionInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutSubscriptionInput,
        UserUpdateWithoutSubscriptionInput
      >,
      UserUncheckedUpdateWithoutSubscriptionInput
    >;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>;
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<
          Required<NestedJsonNullableFilterBase<$PrismaModel>>,
          Exclude<
            keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>,
            "path"
          >
        >,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<
        Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, "path">
      >;

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    path?: string[];
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    not?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
  };

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumUserRoleWithAggregatesFilter<$PrismaModel>
      | $Enums.UserRole;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumUserRoleFilter<$PrismaModel>;
    _max?: NestedEnumUserRoleFilter<$PrismaModel>;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedEnumDifficultyFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>;
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>;
    not?: NestedEnumDifficultyFilter<$PrismaModel> | $Enums.Difficulty;
  };

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedEnumDifficultyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>;
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumDifficultyWithAggregatesFilter<$PrismaModel>
      | $Enums.Difficulty;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumDifficultyFilter<$PrismaModel>;
    _max?: NestedEnumDifficultyFilter<$PrismaModel>;
  };
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<
          Required<NestedJsonFilterBase<$PrismaModel>>,
          Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, "path">
        >,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, "path">>;

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    path?: string[];
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    not?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
  };

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type NestedEnumVoteTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.VoteType | EnumVoteTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.VoteType[] | ListEnumVoteTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.VoteType[] | ListEnumVoteTypeFieldRefInput<$PrismaModel>;
    not?: NestedEnumVoteTypeFilter<$PrismaModel> | $Enums.VoteType;
  };

  export type NestedEnumVoteTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VoteType | EnumVoteTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.VoteType[] | ListEnumVoteTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.VoteType[] | ListEnumVoteTypeFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumVoteTypeWithAggregatesFilter<$PrismaModel>
      | $Enums.VoteType;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumVoteTypeFilter<$PrismaModel>;
    _max?: NestedEnumVoteTypeFilter<$PrismaModel>;
  };

  export type ProblemCreateWithoutUserInput = {
    id?: string;
    title: string;
    problemNumber?: number;
    description: string;
    difficulty: $Enums.Difficulty;
    topic?: ProblemCreatetopicInput | string[];
    examples: JsonNullValueInput | InputJsonValue;
    constraints: string;
    hints?: string | null;
    editorial?: string | null;
    codeSnippets: JsonNullValueInput | InputJsonValue;
    referenceSolutions: JsonNullValueInput | InputJsonValue;
    isPremium?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    submission?: SubmissionCreateNestedManyWithoutProblemInput;
    solvedBy?: ProblemSolvedCreateNestedManyWithoutProblemInput;
    testcases?: ProblemTestCaseCreateNestedManyWithoutProblemInput;
    discussions?: DiscussionCreateNestedManyWithoutProblemInput;
    votes?: ProblemVoteCreateNestedManyWithoutProblemInput;
    problemsPlatlists?: ProblemInPlaylistCreateNestedManyWithoutProblemInput;
  };

  export type ProblemUncheckedCreateWithoutUserInput = {
    id?: string;
    title: string;
    problemNumber?: number;
    description: string;
    difficulty: $Enums.Difficulty;
    topic?: ProblemCreatetopicInput | string[];
    examples: JsonNullValueInput | InputJsonValue;
    constraints: string;
    hints?: string | null;
    editorial?: string | null;
    codeSnippets: JsonNullValueInput | InputJsonValue;
    referenceSolutions: JsonNullValueInput | InputJsonValue;
    isPremium?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    submission?: SubmissionUncheckedCreateNestedManyWithoutProblemInput;
    solvedBy?: ProblemSolvedUncheckedCreateNestedManyWithoutProblemInput;
    testcases?: ProblemTestCaseUncheckedCreateNestedManyWithoutProblemInput;
    discussions?: DiscussionUncheckedCreateNestedManyWithoutProblemInput;
    votes?: ProblemVoteUncheckedCreateNestedManyWithoutProblemInput;
    problemsPlatlists?: ProblemInPlaylistUncheckedCreateNestedManyWithoutProblemInput;
  };

  export type ProblemCreateOrConnectWithoutUserInput = {
    where: ProblemWhereUniqueInput;
    create: XOR<
      ProblemCreateWithoutUserInput,
      ProblemUncheckedCreateWithoutUserInput
    >;
  };

  export type ProblemCreateManyUserInputEnvelope = {
    data: ProblemCreateManyUserInput | ProblemCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type SubmissionCreateWithoutUserInput = {
    id?: string;
    sourceCode: JsonNullValueInput | InputJsonValue;
    language: string;
    stdin?: string | null;
    stdout?: string | null;
    stderr?: string | null;
    compileOutput?: string | null;
    status: string;
    memory?: string | null;
    time?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    problem: ProblemCreateNestedOneWithoutSubmissionInput;
    testcase?: TestCaseCreateNestedManyWithoutSubmissionInput;
  };

  export type SubmissionUncheckedCreateWithoutUserInput = {
    id?: string;
    problemId: string;
    sourceCode: JsonNullValueInput | InputJsonValue;
    language: string;
    stdin?: string | null;
    stdout?: string | null;
    stderr?: string | null;
    compileOutput?: string | null;
    status: string;
    memory?: string | null;
    time?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    testcase?: TestCaseUncheckedCreateNestedManyWithoutSubmissionInput;
  };

  export type SubmissionCreateOrConnectWithoutUserInput = {
    where: SubmissionWhereUniqueInput;
    create: XOR<
      SubmissionCreateWithoutUserInput,
      SubmissionUncheckedCreateWithoutUserInput
    >;
  };

  export type SubmissionCreateManyUserInputEnvelope = {
    data: SubmissionCreateManyUserInput | SubmissionCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type ProblemSolvedCreateWithoutUserInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    problem: ProblemCreateNestedOneWithoutSolvedByInput;
  };

  export type ProblemSolvedUncheckedCreateWithoutUserInput = {
    id?: string;
    problemId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ProblemSolvedCreateOrConnectWithoutUserInput = {
    where: ProblemSolvedWhereUniqueInput;
    create: XOR<
      ProblemSolvedCreateWithoutUserInput,
      ProblemSolvedUncheckedCreateWithoutUserInput
    >;
  };

  export type ProblemSolvedCreateManyUserInputEnvelope = {
    data: ProblemSolvedCreateManyUserInput | ProblemSolvedCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type DiscussionCreateWithoutUserInput = {
    id?: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    problem: ProblemCreateNestedOneWithoutDiscussionsInput;
    parent?: DiscussionCreateNestedOneWithoutRepliesInput;
    replies?: DiscussionCreateNestedManyWithoutParentInput;
  };

  export type DiscussionUncheckedCreateWithoutUserInput = {
    id?: string;
    problemId: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    parentId?: string | null;
    replies?: DiscussionUncheckedCreateNestedManyWithoutParentInput;
  };

  export type DiscussionCreateOrConnectWithoutUserInput = {
    where: DiscussionWhereUniqueInput;
    create: XOR<
      DiscussionCreateWithoutUserInput,
      DiscussionUncheckedCreateWithoutUserInput
    >;
  };

  export type DiscussionCreateManyUserInputEnvelope = {
    data: DiscussionCreateManyUserInput | DiscussionCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type ProblemVoteCreateWithoutUserInput = {
    id?: string;
    type: $Enums.VoteType;
    createdAt?: Date | string;
    problem: ProblemCreateNestedOneWithoutVotesInput;
  };

  export type ProblemVoteUncheckedCreateWithoutUserInput = {
    id?: string;
    problemId: string;
    type: $Enums.VoteType;
    createdAt?: Date | string;
  };

  export type ProblemVoteCreateOrConnectWithoutUserInput = {
    where: ProblemVoteWhereUniqueInput;
    create: XOR<
      ProblemVoteCreateWithoutUserInput,
      ProblemVoteUncheckedCreateWithoutUserInput
    >;
  };

  export type ProblemVoteCreateManyUserInputEnvelope = {
    data: ProblemVoteCreateManyUserInput | ProblemVoteCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type PlaylistCreateWithoutUserInput = {
    id?: string;
    name: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    problems?: ProblemInPlaylistCreateNestedManyWithoutPlaylistInput;
  };

  export type PlaylistUncheckedCreateWithoutUserInput = {
    id?: string;
    name: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    problems?: ProblemInPlaylistUncheckedCreateNestedManyWithoutPlaylistInput;
  };

  export type PlaylistCreateOrConnectWithoutUserInput = {
    where: PlaylistWhereUniqueInput;
    create: XOR<
      PlaylistCreateWithoutUserInput,
      PlaylistUncheckedCreateWithoutUserInput
    >;
  };

  export type PlaylistCreateManyUserInputEnvelope = {
    data: PlaylistCreateManyUserInput | PlaylistCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type SubscriptionCreateWithoutUserInput = {
    id?: string;
    startDate?: Date | string;
    endDate: Date | string;
    isActive?: boolean;
  };

  export type SubscriptionUncheckedCreateWithoutUserInput = {
    id?: string;
    startDate?: Date | string;
    endDate: Date | string;
    isActive?: boolean;
  };

  export type SubscriptionCreateOrConnectWithoutUserInput = {
    where: SubscriptionWhereUniqueInput;
    create: XOR<
      SubscriptionCreateWithoutUserInput,
      SubscriptionUncheckedCreateWithoutUserInput
    >;
  };

  export type ProblemUpsertWithWhereUniqueWithoutUserInput = {
    where: ProblemWhereUniqueInput;
    update: XOR<
      ProblemUpdateWithoutUserInput,
      ProblemUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      ProblemCreateWithoutUserInput,
      ProblemUncheckedCreateWithoutUserInput
    >;
  };

  export type ProblemUpdateWithWhereUniqueWithoutUserInput = {
    where: ProblemWhereUniqueInput;
    data: XOR<
      ProblemUpdateWithoutUserInput,
      ProblemUncheckedUpdateWithoutUserInput
    >;
  };

  export type ProblemUpdateManyWithWhereWithoutUserInput = {
    where: ProblemScalarWhereInput;
    data: XOR<
      ProblemUpdateManyMutationInput,
      ProblemUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type ProblemScalarWhereInput = {
    AND?: ProblemScalarWhereInput | ProblemScalarWhereInput[];
    OR?: ProblemScalarWhereInput[];
    NOT?: ProblemScalarWhereInput | ProblemScalarWhereInput[];
    id?: StringFilter<"Problem"> | string;
    title?: StringFilter<"Problem"> | string;
    problemNumber?: IntFilter<"Problem"> | number;
    description?: StringFilter<"Problem"> | string;
    difficulty?: EnumDifficultyFilter<"Problem"> | $Enums.Difficulty;
    topic?: StringNullableListFilter<"Problem">;
    userId?: StringFilter<"Problem"> | string;
    examples?: JsonFilter<"Problem">;
    constraints?: StringFilter<"Problem"> | string;
    hints?: StringNullableFilter<"Problem"> | string | null;
    editorial?: StringNullableFilter<"Problem"> | string | null;
    codeSnippets?: JsonFilter<"Problem">;
    referenceSolutions?: JsonFilter<"Problem">;
    isPremium?: BoolFilter<"Problem"> | boolean;
    createdAt?: DateTimeFilter<"Problem"> | Date | string;
    updatedAt?: DateTimeFilter<"Problem"> | Date | string;
  };

  export type SubmissionUpsertWithWhereUniqueWithoutUserInput = {
    where: SubmissionWhereUniqueInput;
    update: XOR<
      SubmissionUpdateWithoutUserInput,
      SubmissionUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      SubmissionCreateWithoutUserInput,
      SubmissionUncheckedCreateWithoutUserInput
    >;
  };

  export type SubmissionUpdateWithWhereUniqueWithoutUserInput = {
    where: SubmissionWhereUniqueInput;
    data: XOR<
      SubmissionUpdateWithoutUserInput,
      SubmissionUncheckedUpdateWithoutUserInput
    >;
  };

  export type SubmissionUpdateManyWithWhereWithoutUserInput = {
    where: SubmissionScalarWhereInput;
    data: XOR<
      SubmissionUpdateManyMutationInput,
      SubmissionUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type SubmissionScalarWhereInput = {
    AND?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[];
    OR?: SubmissionScalarWhereInput[];
    NOT?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[];
    id?: StringFilter<"Submission"> | string;
    userId?: StringFilter<"Submission"> | string;
    problemId?: StringFilter<"Submission"> | string;
    sourceCode?: JsonFilter<"Submission">;
    language?: StringFilter<"Submission"> | string;
    stdin?: StringNullableFilter<"Submission"> | string | null;
    stdout?: StringNullableFilter<"Submission"> | string | null;
    stderr?: StringNullableFilter<"Submission"> | string | null;
    compileOutput?: StringNullableFilter<"Submission"> | string | null;
    status?: StringFilter<"Submission"> | string;
    memory?: StringNullableFilter<"Submission"> | string | null;
    time?: StringNullableFilter<"Submission"> | string | null;
    createdAt?: DateTimeFilter<"Submission"> | Date | string;
    updatedAt?: DateTimeFilter<"Submission"> | Date | string;
  };

  export type ProblemSolvedUpsertWithWhereUniqueWithoutUserInput = {
    where: ProblemSolvedWhereUniqueInput;
    update: XOR<
      ProblemSolvedUpdateWithoutUserInput,
      ProblemSolvedUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      ProblemSolvedCreateWithoutUserInput,
      ProblemSolvedUncheckedCreateWithoutUserInput
    >;
  };

  export type ProblemSolvedUpdateWithWhereUniqueWithoutUserInput = {
    where: ProblemSolvedWhereUniqueInput;
    data: XOR<
      ProblemSolvedUpdateWithoutUserInput,
      ProblemSolvedUncheckedUpdateWithoutUserInput
    >;
  };

  export type ProblemSolvedUpdateManyWithWhereWithoutUserInput = {
    where: ProblemSolvedScalarWhereInput;
    data: XOR<
      ProblemSolvedUpdateManyMutationInput,
      ProblemSolvedUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type ProblemSolvedScalarWhereInput = {
    AND?: ProblemSolvedScalarWhereInput | ProblemSolvedScalarWhereInput[];
    OR?: ProblemSolvedScalarWhereInput[];
    NOT?: ProblemSolvedScalarWhereInput | ProblemSolvedScalarWhereInput[];
    id?: StringFilter<"ProblemSolved"> | string;
    userId?: StringFilter<"ProblemSolved"> | string;
    problemId?: StringFilter<"ProblemSolved"> | string;
    createdAt?: DateTimeFilter<"ProblemSolved"> | Date | string;
    updatedAt?: DateTimeFilter<"ProblemSolved"> | Date | string;
  };

  export type DiscussionUpsertWithWhereUniqueWithoutUserInput = {
    where: DiscussionWhereUniqueInput;
    update: XOR<
      DiscussionUpdateWithoutUserInput,
      DiscussionUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      DiscussionCreateWithoutUserInput,
      DiscussionUncheckedCreateWithoutUserInput
    >;
  };

  export type DiscussionUpdateWithWhereUniqueWithoutUserInput = {
    where: DiscussionWhereUniqueInput;
    data: XOR<
      DiscussionUpdateWithoutUserInput,
      DiscussionUncheckedUpdateWithoutUserInput
    >;
  };

  export type DiscussionUpdateManyWithWhereWithoutUserInput = {
    where: DiscussionScalarWhereInput;
    data: XOR<
      DiscussionUpdateManyMutationInput,
      DiscussionUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type DiscussionScalarWhereInput = {
    AND?: DiscussionScalarWhereInput | DiscussionScalarWhereInput[];
    OR?: DiscussionScalarWhereInput[];
    NOT?: DiscussionScalarWhereInput | DiscussionScalarWhereInput[];
    id?: StringFilter<"Discussion"> | string;
    userId?: StringFilter<"Discussion"> | string;
    problemId?: StringFilter<"Discussion"> | string;
    content?: StringFilter<"Discussion"> | string;
    createdAt?: DateTimeFilter<"Discussion"> | Date | string;
    updatedAt?: DateTimeFilter<"Discussion"> | Date | string;
    parentId?: StringNullableFilter<"Discussion"> | string | null;
  };

  export type ProblemVoteUpsertWithWhereUniqueWithoutUserInput = {
    where: ProblemVoteWhereUniqueInput;
    update: XOR<
      ProblemVoteUpdateWithoutUserInput,
      ProblemVoteUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      ProblemVoteCreateWithoutUserInput,
      ProblemVoteUncheckedCreateWithoutUserInput
    >;
  };

  export type ProblemVoteUpdateWithWhereUniqueWithoutUserInput = {
    where: ProblemVoteWhereUniqueInput;
    data: XOR<
      ProblemVoteUpdateWithoutUserInput,
      ProblemVoteUncheckedUpdateWithoutUserInput
    >;
  };

  export type ProblemVoteUpdateManyWithWhereWithoutUserInput = {
    where: ProblemVoteScalarWhereInput;
    data: XOR<
      ProblemVoteUpdateManyMutationInput,
      ProblemVoteUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type ProblemVoteScalarWhereInput = {
    AND?: ProblemVoteScalarWhereInput | ProblemVoteScalarWhereInput[];
    OR?: ProblemVoteScalarWhereInput[];
    NOT?: ProblemVoteScalarWhereInput | ProblemVoteScalarWhereInput[];
    id?: StringFilter<"ProblemVote"> | string;
    userId?: StringFilter<"ProblemVote"> | string;
    problemId?: StringFilter<"ProblemVote"> | string;
    type?: EnumVoteTypeFilter<"ProblemVote"> | $Enums.VoteType;
    createdAt?: DateTimeFilter<"ProblemVote"> | Date | string;
  };

  export type PlaylistUpsertWithWhereUniqueWithoutUserInput = {
    where: PlaylistWhereUniqueInput;
    update: XOR<
      PlaylistUpdateWithoutUserInput,
      PlaylistUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      PlaylistCreateWithoutUserInput,
      PlaylistUncheckedCreateWithoutUserInput
    >;
  };

  export type PlaylistUpdateWithWhereUniqueWithoutUserInput = {
    where: PlaylistWhereUniqueInput;
    data: XOR<
      PlaylistUpdateWithoutUserInput,
      PlaylistUncheckedUpdateWithoutUserInput
    >;
  };

  export type PlaylistUpdateManyWithWhereWithoutUserInput = {
    where: PlaylistScalarWhereInput;
    data: XOR<
      PlaylistUpdateManyMutationInput,
      PlaylistUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type PlaylistScalarWhereInput = {
    AND?: PlaylistScalarWhereInput | PlaylistScalarWhereInput[];
    OR?: PlaylistScalarWhereInput[];
    NOT?: PlaylistScalarWhereInput | PlaylistScalarWhereInput[];
    id?: StringFilter<"Playlist"> | string;
    name?: StringFilter<"Playlist"> | string;
    description?: StringNullableFilter<"Playlist"> | string | null;
    userId?: StringFilter<"Playlist"> | string;
    createdAt?: DateTimeFilter<"Playlist"> | Date | string;
    updatedAt?: DateTimeFilter<"Playlist"> | Date | string;
  };

  export type SubscriptionUpsertWithoutUserInput = {
    update: XOR<
      SubscriptionUpdateWithoutUserInput,
      SubscriptionUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      SubscriptionCreateWithoutUserInput,
      SubscriptionUncheckedCreateWithoutUserInput
    >;
    where?: SubscriptionWhereInput;
  };

  export type SubscriptionUpdateToOneWithWhereWithoutUserInput = {
    where?: SubscriptionWhereInput;
    data: XOR<
      SubscriptionUpdateWithoutUserInput,
      SubscriptionUncheckedUpdateWithoutUserInput
    >;
  };

  export type SubscriptionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
  };

  export type SubscriptionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
  };

  export type UserCreateWithoutProblemInput = {
    id?: string;
    name?: string | null;
    email: string;
    avatar?: NullableJsonNullValueInput | InputJsonValue;
    role?: $Enums.UserRole;
    password: string;
    refreshToken?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    submission?: SubmissionCreateNestedManyWithoutUserInput;
    problemSolved?: ProblemSolvedCreateNestedManyWithoutUserInput;
    discussions?: DiscussionCreateNestedManyWithoutUserInput;
    votesOnProblems?: ProblemVoteCreateNestedManyWithoutUserInput;
    playlists?: PlaylistCreateNestedManyWithoutUserInput;
    subscription?: SubscriptionCreateNestedOneWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutProblemInput = {
    id?: string;
    name?: string | null;
    email: string;
    avatar?: NullableJsonNullValueInput | InputJsonValue;
    role?: $Enums.UserRole;
    password: string;
    refreshToken?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    submission?: SubmissionUncheckedCreateNestedManyWithoutUserInput;
    problemSolved?: ProblemSolvedUncheckedCreateNestedManyWithoutUserInput;
    discussions?: DiscussionUncheckedCreateNestedManyWithoutUserInput;
    votesOnProblems?: ProblemVoteUncheckedCreateNestedManyWithoutUserInput;
    playlists?: PlaylistUncheckedCreateNestedManyWithoutUserInput;
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutProblemInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutProblemInput,
      UserUncheckedCreateWithoutProblemInput
    >;
  };

  export type SubmissionCreateWithoutProblemInput = {
    id?: string;
    sourceCode: JsonNullValueInput | InputJsonValue;
    language: string;
    stdin?: string | null;
    stdout?: string | null;
    stderr?: string | null;
    compileOutput?: string | null;
    status: string;
    memory?: string | null;
    time?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: UserCreateNestedOneWithoutSubmissionInput;
    testcase?: TestCaseCreateNestedManyWithoutSubmissionInput;
  };

  export type SubmissionUncheckedCreateWithoutProblemInput = {
    id?: string;
    userId: string;
    sourceCode: JsonNullValueInput | InputJsonValue;
    language: string;
    stdin?: string | null;
    stdout?: string | null;
    stderr?: string | null;
    compileOutput?: string | null;
    status: string;
    memory?: string | null;
    time?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    testcase?: TestCaseUncheckedCreateNestedManyWithoutSubmissionInput;
  };

  export type SubmissionCreateOrConnectWithoutProblemInput = {
    where: SubmissionWhereUniqueInput;
    create: XOR<
      SubmissionCreateWithoutProblemInput,
      SubmissionUncheckedCreateWithoutProblemInput
    >;
  };

  export type SubmissionCreateManyProblemInputEnvelope = {
    data: SubmissionCreateManyProblemInput | SubmissionCreateManyProblemInput[];
    skipDuplicates?: boolean;
  };

  export type ProblemSolvedCreateWithoutProblemInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: UserCreateNestedOneWithoutProblemSolvedInput;
  };

  export type ProblemSolvedUncheckedCreateWithoutProblemInput = {
    id?: string;
    userId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ProblemSolvedCreateOrConnectWithoutProblemInput = {
    where: ProblemSolvedWhereUniqueInput;
    create: XOR<
      ProblemSolvedCreateWithoutProblemInput,
      ProblemSolvedUncheckedCreateWithoutProblemInput
    >;
  };

  export type ProblemSolvedCreateManyProblemInputEnvelope = {
    data:
      | ProblemSolvedCreateManyProblemInput
      | ProblemSolvedCreateManyProblemInput[];
    skipDuplicates?: boolean;
  };

  export type ProblemTestCaseCreateWithoutProblemInput = {
    id?: string;
    input: string;
    output: string;
    isPublic?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ProblemTestCaseUncheckedCreateWithoutProblemInput = {
    id?: string;
    input: string;
    output: string;
    isPublic?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ProblemTestCaseCreateOrConnectWithoutProblemInput = {
    where: ProblemTestCaseWhereUniqueInput;
    create: XOR<
      ProblemTestCaseCreateWithoutProblemInput,
      ProblemTestCaseUncheckedCreateWithoutProblemInput
    >;
  };

  export type ProblemTestCaseCreateManyProblemInputEnvelope = {
    data:
      | ProblemTestCaseCreateManyProblemInput
      | ProblemTestCaseCreateManyProblemInput[];
    skipDuplicates?: boolean;
  };

  export type DiscussionCreateWithoutProblemInput = {
    id?: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: UserCreateNestedOneWithoutDiscussionsInput;
    parent?: DiscussionCreateNestedOneWithoutRepliesInput;
    replies?: DiscussionCreateNestedManyWithoutParentInput;
  };

  export type DiscussionUncheckedCreateWithoutProblemInput = {
    id?: string;
    userId: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    parentId?: string | null;
    replies?: DiscussionUncheckedCreateNestedManyWithoutParentInput;
  };

  export type DiscussionCreateOrConnectWithoutProblemInput = {
    where: DiscussionWhereUniqueInput;
    create: XOR<
      DiscussionCreateWithoutProblemInput,
      DiscussionUncheckedCreateWithoutProblemInput
    >;
  };

  export type DiscussionCreateManyProblemInputEnvelope = {
    data: DiscussionCreateManyProblemInput | DiscussionCreateManyProblemInput[];
    skipDuplicates?: boolean;
  };

  export type ProblemVoteCreateWithoutProblemInput = {
    id?: string;
    type: $Enums.VoteType;
    createdAt?: Date | string;
    user: UserCreateNestedOneWithoutVotesOnProblemsInput;
  };

  export type ProblemVoteUncheckedCreateWithoutProblemInput = {
    id?: string;
    userId: string;
    type: $Enums.VoteType;
    createdAt?: Date | string;
  };

  export type ProblemVoteCreateOrConnectWithoutProblemInput = {
    where: ProblemVoteWhereUniqueInput;
    create: XOR<
      ProblemVoteCreateWithoutProblemInput,
      ProblemVoteUncheckedCreateWithoutProblemInput
    >;
  };

  export type ProblemVoteCreateManyProblemInputEnvelope = {
    data:
      | ProblemVoteCreateManyProblemInput
      | ProblemVoteCreateManyProblemInput[];
    skipDuplicates?: boolean;
  };

  export type ProblemInPlaylistCreateWithoutProblemInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    playlist: PlaylistCreateNestedOneWithoutProblemsInput;
  };

  export type ProblemInPlaylistUncheckedCreateWithoutProblemInput = {
    id?: string;
    playlistId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ProblemInPlaylistCreateOrConnectWithoutProblemInput = {
    where: ProblemInPlaylistWhereUniqueInput;
    create: XOR<
      ProblemInPlaylistCreateWithoutProblemInput,
      ProblemInPlaylistUncheckedCreateWithoutProblemInput
    >;
  };

  export type ProblemInPlaylistCreateManyProblemInputEnvelope = {
    data:
      | ProblemInPlaylistCreateManyProblemInput
      | ProblemInPlaylistCreateManyProblemInput[];
    skipDuplicates?: boolean;
  };

  export type UserUpsertWithoutProblemInput = {
    update: XOR<
      UserUpdateWithoutProblemInput,
      UserUncheckedUpdateWithoutProblemInput
    >;
    create: XOR<
      UserCreateWithoutProblemInput,
      UserUncheckedCreateWithoutProblemInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutProblemInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutProblemInput,
      UserUncheckedUpdateWithoutProblemInput
    >;
  };

  export type UserUpdateWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: StringFieldUpdateOperationsInput | string;
    avatar?: NullableJsonNullValueInput | InputJsonValue;
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    password?: StringFieldUpdateOperationsInput | string;
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    submission?: SubmissionUpdateManyWithoutUserNestedInput;
    problemSolved?: ProblemSolvedUpdateManyWithoutUserNestedInput;
    discussions?: DiscussionUpdateManyWithoutUserNestedInput;
    votesOnProblems?: ProblemVoteUpdateManyWithoutUserNestedInput;
    playlists?: PlaylistUpdateManyWithoutUserNestedInput;
    subscription?: SubscriptionUpdateOneWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: StringFieldUpdateOperationsInput | string;
    avatar?: NullableJsonNullValueInput | InputJsonValue;
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    password?: StringFieldUpdateOperationsInput | string;
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    submission?: SubmissionUncheckedUpdateManyWithoutUserNestedInput;
    problemSolved?: ProblemSolvedUncheckedUpdateManyWithoutUserNestedInput;
    discussions?: DiscussionUncheckedUpdateManyWithoutUserNestedInput;
    votesOnProblems?: ProblemVoteUncheckedUpdateManyWithoutUserNestedInput;
    playlists?: PlaylistUncheckedUpdateManyWithoutUserNestedInput;
    subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput;
  };

  export type SubmissionUpsertWithWhereUniqueWithoutProblemInput = {
    where: SubmissionWhereUniqueInput;
    update: XOR<
      SubmissionUpdateWithoutProblemInput,
      SubmissionUncheckedUpdateWithoutProblemInput
    >;
    create: XOR<
      SubmissionCreateWithoutProblemInput,
      SubmissionUncheckedCreateWithoutProblemInput
    >;
  };

  export type SubmissionUpdateWithWhereUniqueWithoutProblemInput = {
    where: SubmissionWhereUniqueInput;
    data: XOR<
      SubmissionUpdateWithoutProblemInput,
      SubmissionUncheckedUpdateWithoutProblemInput
    >;
  };

  export type SubmissionUpdateManyWithWhereWithoutProblemInput = {
    where: SubmissionScalarWhereInput;
    data: XOR<
      SubmissionUpdateManyMutationInput,
      SubmissionUncheckedUpdateManyWithoutProblemInput
    >;
  };

  export type ProblemSolvedUpsertWithWhereUniqueWithoutProblemInput = {
    where: ProblemSolvedWhereUniqueInput;
    update: XOR<
      ProblemSolvedUpdateWithoutProblemInput,
      ProblemSolvedUncheckedUpdateWithoutProblemInput
    >;
    create: XOR<
      ProblemSolvedCreateWithoutProblemInput,
      ProblemSolvedUncheckedCreateWithoutProblemInput
    >;
  };

  export type ProblemSolvedUpdateWithWhereUniqueWithoutProblemInput = {
    where: ProblemSolvedWhereUniqueInput;
    data: XOR<
      ProblemSolvedUpdateWithoutProblemInput,
      ProblemSolvedUncheckedUpdateWithoutProblemInput
    >;
  };

  export type ProblemSolvedUpdateManyWithWhereWithoutProblemInput = {
    where: ProblemSolvedScalarWhereInput;
    data: XOR<
      ProblemSolvedUpdateManyMutationInput,
      ProblemSolvedUncheckedUpdateManyWithoutProblemInput
    >;
  };

  export type ProblemTestCaseUpsertWithWhereUniqueWithoutProblemInput = {
    where: ProblemTestCaseWhereUniqueInput;
    update: XOR<
      ProblemTestCaseUpdateWithoutProblemInput,
      ProblemTestCaseUncheckedUpdateWithoutProblemInput
    >;
    create: XOR<
      ProblemTestCaseCreateWithoutProblemInput,
      ProblemTestCaseUncheckedCreateWithoutProblemInput
    >;
  };

  export type ProblemTestCaseUpdateWithWhereUniqueWithoutProblemInput = {
    where: ProblemTestCaseWhereUniqueInput;
    data: XOR<
      ProblemTestCaseUpdateWithoutProblemInput,
      ProblemTestCaseUncheckedUpdateWithoutProblemInput
    >;
  };

  export type ProblemTestCaseUpdateManyWithWhereWithoutProblemInput = {
    where: ProblemTestCaseScalarWhereInput;
    data: XOR<
      ProblemTestCaseUpdateManyMutationInput,
      ProblemTestCaseUncheckedUpdateManyWithoutProblemInput
    >;
  };

  export type ProblemTestCaseScalarWhereInput = {
    AND?: ProblemTestCaseScalarWhereInput | ProblemTestCaseScalarWhereInput[];
    OR?: ProblemTestCaseScalarWhereInput[];
    NOT?: ProblemTestCaseScalarWhereInput | ProblemTestCaseScalarWhereInput[];
    id?: StringFilter<"ProblemTestCase"> | string;
    input?: StringFilter<"ProblemTestCase"> | string;
    output?: StringFilter<"ProblemTestCase"> | string;
    isPublic?: BoolFilter<"ProblemTestCase"> | boolean;
    problemId?: StringFilter<"ProblemTestCase"> | string;
    createdAt?: DateTimeFilter<"ProblemTestCase"> | Date | string;
    updatedAt?: DateTimeFilter<"ProblemTestCase"> | Date | string;
  };

  export type DiscussionUpsertWithWhereUniqueWithoutProblemInput = {
    where: DiscussionWhereUniqueInput;
    update: XOR<
      DiscussionUpdateWithoutProblemInput,
      DiscussionUncheckedUpdateWithoutProblemInput
    >;
    create: XOR<
      DiscussionCreateWithoutProblemInput,
      DiscussionUncheckedCreateWithoutProblemInput
    >;
  };

  export type DiscussionUpdateWithWhereUniqueWithoutProblemInput = {
    where: DiscussionWhereUniqueInput;
    data: XOR<
      DiscussionUpdateWithoutProblemInput,
      DiscussionUncheckedUpdateWithoutProblemInput
    >;
  };

  export type DiscussionUpdateManyWithWhereWithoutProblemInput = {
    where: DiscussionScalarWhereInput;
    data: XOR<
      DiscussionUpdateManyMutationInput,
      DiscussionUncheckedUpdateManyWithoutProblemInput
    >;
  };

  export type ProblemVoteUpsertWithWhereUniqueWithoutProblemInput = {
    where: ProblemVoteWhereUniqueInput;
    update: XOR<
      ProblemVoteUpdateWithoutProblemInput,
      ProblemVoteUncheckedUpdateWithoutProblemInput
    >;
    create: XOR<
      ProblemVoteCreateWithoutProblemInput,
      ProblemVoteUncheckedCreateWithoutProblemInput
    >;
  };

  export type ProblemVoteUpdateWithWhereUniqueWithoutProblemInput = {
    where: ProblemVoteWhereUniqueInput;
    data: XOR<
      ProblemVoteUpdateWithoutProblemInput,
      ProblemVoteUncheckedUpdateWithoutProblemInput
    >;
  };

  export type ProblemVoteUpdateManyWithWhereWithoutProblemInput = {
    where: ProblemVoteScalarWhereInput;
    data: XOR<
      ProblemVoteUpdateManyMutationInput,
      ProblemVoteUncheckedUpdateManyWithoutProblemInput
    >;
  };

  export type ProblemInPlaylistUpsertWithWhereUniqueWithoutProblemInput = {
    where: ProblemInPlaylistWhereUniqueInput;
    update: XOR<
      ProblemInPlaylistUpdateWithoutProblemInput,
      ProblemInPlaylistUncheckedUpdateWithoutProblemInput
    >;
    create: XOR<
      ProblemInPlaylistCreateWithoutProblemInput,
      ProblemInPlaylistUncheckedCreateWithoutProblemInput
    >;
  };

  export type ProblemInPlaylistUpdateWithWhereUniqueWithoutProblemInput = {
    where: ProblemInPlaylistWhereUniqueInput;
    data: XOR<
      ProblemInPlaylistUpdateWithoutProblemInput,
      ProblemInPlaylistUncheckedUpdateWithoutProblemInput
    >;
  };

  export type ProblemInPlaylistUpdateManyWithWhereWithoutProblemInput = {
    where: ProblemInPlaylistScalarWhereInput;
    data: XOR<
      ProblemInPlaylistUpdateManyMutationInput,
      ProblemInPlaylistUncheckedUpdateManyWithoutProblemInput
    >;
  };

  export type ProblemInPlaylistScalarWhereInput = {
    AND?:
      | ProblemInPlaylistScalarWhereInput
      | ProblemInPlaylistScalarWhereInput[];
    OR?: ProblemInPlaylistScalarWhereInput[];
    NOT?:
      | ProblemInPlaylistScalarWhereInput
      | ProblemInPlaylistScalarWhereInput[];
    id?: StringFilter<"ProblemInPlaylist"> | string;
    playlistId?: StringFilter<"ProblemInPlaylist"> | string;
    problemId?: StringFilter<"ProblemInPlaylist"> | string;
    createdAt?: DateTimeFilter<"ProblemInPlaylist"> | Date | string;
    updatedAt?: DateTimeFilter<"ProblemInPlaylist"> | Date | string;
  };

  export type ProblemCreateWithoutTestcasesInput = {
    id?: string;
    title: string;
    problemNumber?: number;
    description: string;
    difficulty: $Enums.Difficulty;
    topic?: ProblemCreatetopicInput | string[];
    examples: JsonNullValueInput | InputJsonValue;
    constraints: string;
    hints?: string | null;
    editorial?: string | null;
    codeSnippets: JsonNullValueInput | InputJsonValue;
    referenceSolutions: JsonNullValueInput | InputJsonValue;
    isPremium?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: UserCreateNestedOneWithoutProblemInput;
    submission?: SubmissionCreateNestedManyWithoutProblemInput;
    solvedBy?: ProblemSolvedCreateNestedManyWithoutProblemInput;
    discussions?: DiscussionCreateNestedManyWithoutProblemInput;
    votes?: ProblemVoteCreateNestedManyWithoutProblemInput;
    problemsPlatlists?: ProblemInPlaylistCreateNestedManyWithoutProblemInput;
  };

  export type ProblemUncheckedCreateWithoutTestcasesInput = {
    id?: string;
    title: string;
    problemNumber?: number;
    description: string;
    difficulty: $Enums.Difficulty;
    topic?: ProblemCreatetopicInput | string[];
    userId: string;
    examples: JsonNullValueInput | InputJsonValue;
    constraints: string;
    hints?: string | null;
    editorial?: string | null;
    codeSnippets: JsonNullValueInput | InputJsonValue;
    referenceSolutions: JsonNullValueInput | InputJsonValue;
    isPremium?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    submission?: SubmissionUncheckedCreateNestedManyWithoutProblemInput;
    solvedBy?: ProblemSolvedUncheckedCreateNestedManyWithoutProblemInput;
    discussions?: DiscussionUncheckedCreateNestedManyWithoutProblemInput;
    votes?: ProblemVoteUncheckedCreateNestedManyWithoutProblemInput;
    problemsPlatlists?: ProblemInPlaylistUncheckedCreateNestedManyWithoutProblemInput;
  };

  export type ProblemCreateOrConnectWithoutTestcasesInput = {
    where: ProblemWhereUniqueInput;
    create: XOR<
      ProblemCreateWithoutTestcasesInput,
      ProblemUncheckedCreateWithoutTestcasesInput
    >;
  };

  export type ProblemUpsertWithoutTestcasesInput = {
    update: XOR<
      ProblemUpdateWithoutTestcasesInput,
      ProblemUncheckedUpdateWithoutTestcasesInput
    >;
    create: XOR<
      ProblemCreateWithoutTestcasesInput,
      ProblemUncheckedCreateWithoutTestcasesInput
    >;
    where?: ProblemWhereInput;
  };

  export type ProblemUpdateToOneWithWhereWithoutTestcasesInput = {
    where?: ProblemWhereInput;
    data: XOR<
      ProblemUpdateWithoutTestcasesInput,
      ProblemUncheckedUpdateWithoutTestcasesInput
    >;
  };

  export type ProblemUpdateWithoutTestcasesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    problemNumber?: IntFieldUpdateOperationsInput | number;
    description?: StringFieldUpdateOperationsInput | string;
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty;
    topic?: ProblemUpdatetopicInput | string[];
    examples?: JsonNullValueInput | InputJsonValue;
    constraints?: StringFieldUpdateOperationsInput | string;
    hints?: NullableStringFieldUpdateOperationsInput | string | null;
    editorial?: NullableStringFieldUpdateOperationsInput | string | null;
    codeSnippets?: JsonNullValueInput | InputJsonValue;
    referenceSolutions?: JsonNullValueInput | InputJsonValue;
    isPremium?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutProblemNestedInput;
    submission?: SubmissionUpdateManyWithoutProblemNestedInput;
    solvedBy?: ProblemSolvedUpdateManyWithoutProblemNestedInput;
    discussions?: DiscussionUpdateManyWithoutProblemNestedInput;
    votes?: ProblemVoteUpdateManyWithoutProblemNestedInput;
    problemsPlatlists?: ProblemInPlaylistUpdateManyWithoutProblemNestedInput;
  };

  export type ProblemUncheckedUpdateWithoutTestcasesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    problemNumber?: IntFieldUpdateOperationsInput | number;
    description?: StringFieldUpdateOperationsInput | string;
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty;
    topic?: ProblemUpdatetopicInput | string[];
    userId?: StringFieldUpdateOperationsInput | string;
    examples?: JsonNullValueInput | InputJsonValue;
    constraints?: StringFieldUpdateOperationsInput | string;
    hints?: NullableStringFieldUpdateOperationsInput | string | null;
    editorial?: NullableStringFieldUpdateOperationsInput | string | null;
    codeSnippets?: JsonNullValueInput | InputJsonValue;
    referenceSolutions?: JsonNullValueInput | InputJsonValue;
    isPremium?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    submission?: SubmissionUncheckedUpdateManyWithoutProblemNestedInput;
    solvedBy?: ProblemSolvedUncheckedUpdateManyWithoutProblemNestedInput;
    discussions?: DiscussionUncheckedUpdateManyWithoutProblemNestedInput;
    votes?: ProblemVoteUncheckedUpdateManyWithoutProblemNestedInput;
    problemsPlatlists?: ProblemInPlaylistUncheckedUpdateManyWithoutProblemNestedInput;
  };

  export type UserCreateWithoutSubmissionInput = {
    id?: string;
    name?: string | null;
    email: string;
    avatar?: NullableJsonNullValueInput | InputJsonValue;
    role?: $Enums.UserRole;
    password: string;
    refreshToken?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    problem?: ProblemCreateNestedManyWithoutUserInput;
    problemSolved?: ProblemSolvedCreateNestedManyWithoutUserInput;
    discussions?: DiscussionCreateNestedManyWithoutUserInput;
    votesOnProblems?: ProblemVoteCreateNestedManyWithoutUserInput;
    playlists?: PlaylistCreateNestedManyWithoutUserInput;
    subscription?: SubscriptionCreateNestedOneWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutSubmissionInput = {
    id?: string;
    name?: string | null;
    email: string;
    avatar?: NullableJsonNullValueInput | InputJsonValue;
    role?: $Enums.UserRole;
    password: string;
    refreshToken?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    problem?: ProblemUncheckedCreateNestedManyWithoutUserInput;
    problemSolved?: ProblemSolvedUncheckedCreateNestedManyWithoutUserInput;
    discussions?: DiscussionUncheckedCreateNestedManyWithoutUserInput;
    votesOnProblems?: ProblemVoteUncheckedCreateNestedManyWithoutUserInput;
    playlists?: PlaylistUncheckedCreateNestedManyWithoutUserInput;
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutSubmissionInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutSubmissionInput,
      UserUncheckedCreateWithoutSubmissionInput
    >;
  };

  export type ProblemCreateWithoutSubmissionInput = {
    id?: string;
    title: string;
    problemNumber?: number;
    description: string;
    difficulty: $Enums.Difficulty;
    topic?: ProblemCreatetopicInput | string[];
    examples: JsonNullValueInput | InputJsonValue;
    constraints: string;
    hints?: string | null;
    editorial?: string | null;
    codeSnippets: JsonNullValueInput | InputJsonValue;
    referenceSolutions: JsonNullValueInput | InputJsonValue;
    isPremium?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: UserCreateNestedOneWithoutProblemInput;
    solvedBy?: ProblemSolvedCreateNestedManyWithoutProblemInput;
    testcases?: ProblemTestCaseCreateNestedManyWithoutProblemInput;
    discussions?: DiscussionCreateNestedManyWithoutProblemInput;
    votes?: ProblemVoteCreateNestedManyWithoutProblemInput;
    problemsPlatlists?: ProblemInPlaylistCreateNestedManyWithoutProblemInput;
  };

  export type ProblemUncheckedCreateWithoutSubmissionInput = {
    id?: string;
    title: string;
    problemNumber?: number;
    description: string;
    difficulty: $Enums.Difficulty;
    topic?: ProblemCreatetopicInput | string[];
    userId: string;
    examples: JsonNullValueInput | InputJsonValue;
    constraints: string;
    hints?: string | null;
    editorial?: string | null;
    codeSnippets: JsonNullValueInput | InputJsonValue;
    referenceSolutions: JsonNullValueInput | InputJsonValue;
    isPremium?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    solvedBy?: ProblemSolvedUncheckedCreateNestedManyWithoutProblemInput;
    testcases?: ProblemTestCaseUncheckedCreateNestedManyWithoutProblemInput;
    discussions?: DiscussionUncheckedCreateNestedManyWithoutProblemInput;
    votes?: ProblemVoteUncheckedCreateNestedManyWithoutProblemInput;
    problemsPlatlists?: ProblemInPlaylistUncheckedCreateNestedManyWithoutProblemInput;
  };

  export type ProblemCreateOrConnectWithoutSubmissionInput = {
    where: ProblemWhereUniqueInput;
    create: XOR<
      ProblemCreateWithoutSubmissionInput,
      ProblemUncheckedCreateWithoutSubmissionInput
    >;
  };

  export type TestCaseCreateWithoutSubmissionInput = {
    id?: string;
    testCase: string;
    passed: boolean;
    stdout?: string | null;
    expected: string;
    stderr?: string | null;
    compileOutput?: string | null;
    status: string;
    memory?: string | null;
    time?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type TestCaseUncheckedCreateWithoutSubmissionInput = {
    id?: string;
    testCase: string;
    passed: boolean;
    stdout?: string | null;
    expected: string;
    stderr?: string | null;
    compileOutput?: string | null;
    status: string;
    memory?: string | null;
    time?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type TestCaseCreateOrConnectWithoutSubmissionInput = {
    where: TestCaseWhereUniqueInput;
    create: XOR<
      TestCaseCreateWithoutSubmissionInput,
      TestCaseUncheckedCreateWithoutSubmissionInput
    >;
  };

  export type TestCaseCreateManySubmissionInputEnvelope = {
    data:
      | TestCaseCreateManySubmissionInput
      | TestCaseCreateManySubmissionInput[];
    skipDuplicates?: boolean;
  };

  export type UserUpsertWithoutSubmissionInput = {
    update: XOR<
      UserUpdateWithoutSubmissionInput,
      UserUncheckedUpdateWithoutSubmissionInput
    >;
    create: XOR<
      UserCreateWithoutSubmissionInput,
      UserUncheckedCreateWithoutSubmissionInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutSubmissionInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutSubmissionInput,
      UserUncheckedUpdateWithoutSubmissionInput
    >;
  };

  export type UserUpdateWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: StringFieldUpdateOperationsInput | string;
    avatar?: NullableJsonNullValueInput | InputJsonValue;
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    password?: StringFieldUpdateOperationsInput | string;
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    problem?: ProblemUpdateManyWithoutUserNestedInput;
    problemSolved?: ProblemSolvedUpdateManyWithoutUserNestedInput;
    discussions?: DiscussionUpdateManyWithoutUserNestedInput;
    votesOnProblems?: ProblemVoteUpdateManyWithoutUserNestedInput;
    playlists?: PlaylistUpdateManyWithoutUserNestedInput;
    subscription?: SubscriptionUpdateOneWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: StringFieldUpdateOperationsInput | string;
    avatar?: NullableJsonNullValueInput | InputJsonValue;
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    password?: StringFieldUpdateOperationsInput | string;
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    problem?: ProblemUncheckedUpdateManyWithoutUserNestedInput;
    problemSolved?: ProblemSolvedUncheckedUpdateManyWithoutUserNestedInput;
    discussions?: DiscussionUncheckedUpdateManyWithoutUserNestedInput;
    votesOnProblems?: ProblemVoteUncheckedUpdateManyWithoutUserNestedInput;
    playlists?: PlaylistUncheckedUpdateManyWithoutUserNestedInput;
    subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput;
  };

  export type ProblemUpsertWithoutSubmissionInput = {
    update: XOR<
      ProblemUpdateWithoutSubmissionInput,
      ProblemUncheckedUpdateWithoutSubmissionInput
    >;
    create: XOR<
      ProblemCreateWithoutSubmissionInput,
      ProblemUncheckedCreateWithoutSubmissionInput
    >;
    where?: ProblemWhereInput;
  };

  export type ProblemUpdateToOneWithWhereWithoutSubmissionInput = {
    where?: ProblemWhereInput;
    data: XOR<
      ProblemUpdateWithoutSubmissionInput,
      ProblemUncheckedUpdateWithoutSubmissionInput
    >;
  };

  export type ProblemUpdateWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    problemNumber?: IntFieldUpdateOperationsInput | number;
    description?: StringFieldUpdateOperationsInput | string;
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty;
    topic?: ProblemUpdatetopicInput | string[];
    examples?: JsonNullValueInput | InputJsonValue;
    constraints?: StringFieldUpdateOperationsInput | string;
    hints?: NullableStringFieldUpdateOperationsInput | string | null;
    editorial?: NullableStringFieldUpdateOperationsInput | string | null;
    codeSnippets?: JsonNullValueInput | InputJsonValue;
    referenceSolutions?: JsonNullValueInput | InputJsonValue;
    isPremium?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutProblemNestedInput;
    solvedBy?: ProblemSolvedUpdateManyWithoutProblemNestedInput;
    testcases?: ProblemTestCaseUpdateManyWithoutProblemNestedInput;
    discussions?: DiscussionUpdateManyWithoutProblemNestedInput;
    votes?: ProblemVoteUpdateManyWithoutProblemNestedInput;
    problemsPlatlists?: ProblemInPlaylistUpdateManyWithoutProblemNestedInput;
  };

  export type ProblemUncheckedUpdateWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    problemNumber?: IntFieldUpdateOperationsInput | number;
    description?: StringFieldUpdateOperationsInput | string;
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty;
    topic?: ProblemUpdatetopicInput | string[];
    userId?: StringFieldUpdateOperationsInput | string;
    examples?: JsonNullValueInput | InputJsonValue;
    constraints?: StringFieldUpdateOperationsInput | string;
    hints?: NullableStringFieldUpdateOperationsInput | string | null;
    editorial?: NullableStringFieldUpdateOperationsInput | string | null;
    codeSnippets?: JsonNullValueInput | InputJsonValue;
    referenceSolutions?: JsonNullValueInput | InputJsonValue;
    isPremium?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    solvedBy?: ProblemSolvedUncheckedUpdateManyWithoutProblemNestedInput;
    testcases?: ProblemTestCaseUncheckedUpdateManyWithoutProblemNestedInput;
    discussions?: DiscussionUncheckedUpdateManyWithoutProblemNestedInput;
    votes?: ProblemVoteUncheckedUpdateManyWithoutProblemNestedInput;
    problemsPlatlists?: ProblemInPlaylistUncheckedUpdateManyWithoutProblemNestedInput;
  };

  export type TestCaseUpsertWithWhereUniqueWithoutSubmissionInput = {
    where: TestCaseWhereUniqueInput;
    update: XOR<
      TestCaseUpdateWithoutSubmissionInput,
      TestCaseUncheckedUpdateWithoutSubmissionInput
    >;
    create: XOR<
      TestCaseCreateWithoutSubmissionInput,
      TestCaseUncheckedCreateWithoutSubmissionInput
    >;
  };

  export type TestCaseUpdateWithWhereUniqueWithoutSubmissionInput = {
    where: TestCaseWhereUniqueInput;
    data: XOR<
      TestCaseUpdateWithoutSubmissionInput,
      TestCaseUncheckedUpdateWithoutSubmissionInput
    >;
  };

  export type TestCaseUpdateManyWithWhereWithoutSubmissionInput = {
    where: TestCaseScalarWhereInput;
    data: XOR<
      TestCaseUpdateManyMutationInput,
      TestCaseUncheckedUpdateManyWithoutSubmissionInput
    >;
  };

  export type TestCaseScalarWhereInput = {
    AND?: TestCaseScalarWhereInput | TestCaseScalarWhereInput[];
    OR?: TestCaseScalarWhereInput[];
    NOT?: TestCaseScalarWhereInput | TestCaseScalarWhereInput[];
    id?: StringFilter<"TestCase"> | string;
    submissionId?: StringFilter<"TestCase"> | string;
    testCase?: StringFilter<"TestCase"> | string;
    passed?: BoolFilter<"TestCase"> | boolean;
    stdout?: StringNullableFilter<"TestCase"> | string | null;
    expected?: StringFilter<"TestCase"> | string;
    stderr?: StringNullableFilter<"TestCase"> | string | null;
    compileOutput?: StringNullableFilter<"TestCase"> | string | null;
    status?: StringFilter<"TestCase"> | string;
    memory?: StringNullableFilter<"TestCase"> | string | null;
    time?: StringNullableFilter<"TestCase"> | string | null;
    createdAt?: DateTimeFilter<"TestCase"> | Date | string;
    updatedAt?: DateTimeFilter<"TestCase"> | Date | string;
  };

  export type SubmissionCreateWithoutTestcaseInput = {
    id?: string;
    sourceCode: JsonNullValueInput | InputJsonValue;
    language: string;
    stdin?: string | null;
    stdout?: string | null;
    stderr?: string | null;
    compileOutput?: string | null;
    status: string;
    memory?: string | null;
    time?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: UserCreateNestedOneWithoutSubmissionInput;
    problem: ProblemCreateNestedOneWithoutSubmissionInput;
  };

  export type SubmissionUncheckedCreateWithoutTestcaseInput = {
    id?: string;
    userId: string;
    problemId: string;
    sourceCode: JsonNullValueInput | InputJsonValue;
    language: string;
    stdin?: string | null;
    stdout?: string | null;
    stderr?: string | null;
    compileOutput?: string | null;
    status: string;
    memory?: string | null;
    time?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type SubmissionCreateOrConnectWithoutTestcaseInput = {
    where: SubmissionWhereUniqueInput;
    create: XOR<
      SubmissionCreateWithoutTestcaseInput,
      SubmissionUncheckedCreateWithoutTestcaseInput
    >;
  };

  export type SubmissionUpsertWithoutTestcaseInput = {
    update: XOR<
      SubmissionUpdateWithoutTestcaseInput,
      SubmissionUncheckedUpdateWithoutTestcaseInput
    >;
    create: XOR<
      SubmissionCreateWithoutTestcaseInput,
      SubmissionUncheckedCreateWithoutTestcaseInput
    >;
    where?: SubmissionWhereInput;
  };

  export type SubmissionUpdateToOneWithWhereWithoutTestcaseInput = {
    where?: SubmissionWhereInput;
    data: XOR<
      SubmissionUpdateWithoutTestcaseInput,
      SubmissionUncheckedUpdateWithoutTestcaseInput
    >;
  };

  export type SubmissionUpdateWithoutTestcaseInput = {
    id?: StringFieldUpdateOperationsInput | string;
    sourceCode?: JsonNullValueInput | InputJsonValue;
    language?: StringFieldUpdateOperationsInput | string;
    stdin?: NullableStringFieldUpdateOperationsInput | string | null;
    stdout?: NullableStringFieldUpdateOperationsInput | string | null;
    stderr?: NullableStringFieldUpdateOperationsInput | string | null;
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    memory?: NullableStringFieldUpdateOperationsInput | string | null;
    time?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutSubmissionNestedInput;
    problem?: ProblemUpdateOneRequiredWithoutSubmissionNestedInput;
  };

  export type SubmissionUncheckedUpdateWithoutTestcaseInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    problemId?: StringFieldUpdateOperationsInput | string;
    sourceCode?: JsonNullValueInput | InputJsonValue;
    language?: StringFieldUpdateOperationsInput | string;
    stdin?: NullableStringFieldUpdateOperationsInput | string | null;
    stdout?: NullableStringFieldUpdateOperationsInput | string | null;
    stderr?: NullableStringFieldUpdateOperationsInput | string | null;
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    memory?: NullableStringFieldUpdateOperationsInput | string | null;
    time?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserCreateWithoutProblemSolvedInput = {
    id?: string;
    name?: string | null;
    email: string;
    avatar?: NullableJsonNullValueInput | InputJsonValue;
    role?: $Enums.UserRole;
    password: string;
    refreshToken?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    problem?: ProblemCreateNestedManyWithoutUserInput;
    submission?: SubmissionCreateNestedManyWithoutUserInput;
    discussions?: DiscussionCreateNestedManyWithoutUserInput;
    votesOnProblems?: ProblemVoteCreateNestedManyWithoutUserInput;
    playlists?: PlaylistCreateNestedManyWithoutUserInput;
    subscription?: SubscriptionCreateNestedOneWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutProblemSolvedInput = {
    id?: string;
    name?: string | null;
    email: string;
    avatar?: NullableJsonNullValueInput | InputJsonValue;
    role?: $Enums.UserRole;
    password: string;
    refreshToken?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    problem?: ProblemUncheckedCreateNestedManyWithoutUserInput;
    submission?: SubmissionUncheckedCreateNestedManyWithoutUserInput;
    discussions?: DiscussionUncheckedCreateNestedManyWithoutUserInput;
    votesOnProblems?: ProblemVoteUncheckedCreateNestedManyWithoutUserInput;
    playlists?: PlaylistUncheckedCreateNestedManyWithoutUserInput;
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutProblemSolvedInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutProblemSolvedInput,
      UserUncheckedCreateWithoutProblemSolvedInput
    >;
  };

  export type ProblemCreateWithoutSolvedByInput = {
    id?: string;
    title: string;
    problemNumber?: number;
    description: string;
    difficulty: $Enums.Difficulty;
    topic?: ProblemCreatetopicInput | string[];
    examples: JsonNullValueInput | InputJsonValue;
    constraints: string;
    hints?: string | null;
    editorial?: string | null;
    codeSnippets: JsonNullValueInput | InputJsonValue;
    referenceSolutions: JsonNullValueInput | InputJsonValue;
    isPremium?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: UserCreateNestedOneWithoutProblemInput;
    submission?: SubmissionCreateNestedManyWithoutProblemInput;
    testcases?: ProblemTestCaseCreateNestedManyWithoutProblemInput;
    discussions?: DiscussionCreateNestedManyWithoutProblemInput;
    votes?: ProblemVoteCreateNestedManyWithoutProblemInput;
    problemsPlatlists?: ProblemInPlaylistCreateNestedManyWithoutProblemInput;
  };

  export type ProblemUncheckedCreateWithoutSolvedByInput = {
    id?: string;
    title: string;
    problemNumber?: number;
    description: string;
    difficulty: $Enums.Difficulty;
    topic?: ProblemCreatetopicInput | string[];
    userId: string;
    examples: JsonNullValueInput | InputJsonValue;
    constraints: string;
    hints?: string | null;
    editorial?: string | null;
    codeSnippets: JsonNullValueInput | InputJsonValue;
    referenceSolutions: JsonNullValueInput | InputJsonValue;
    isPremium?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    submission?: SubmissionUncheckedCreateNestedManyWithoutProblemInput;
    testcases?: ProblemTestCaseUncheckedCreateNestedManyWithoutProblemInput;
    discussions?: DiscussionUncheckedCreateNestedManyWithoutProblemInput;
    votes?: ProblemVoteUncheckedCreateNestedManyWithoutProblemInput;
    problemsPlatlists?: ProblemInPlaylistUncheckedCreateNestedManyWithoutProblemInput;
  };

  export type ProblemCreateOrConnectWithoutSolvedByInput = {
    where: ProblemWhereUniqueInput;
    create: XOR<
      ProblemCreateWithoutSolvedByInput,
      ProblemUncheckedCreateWithoutSolvedByInput
    >;
  };

  export type UserUpsertWithoutProblemSolvedInput = {
    update: XOR<
      UserUpdateWithoutProblemSolvedInput,
      UserUncheckedUpdateWithoutProblemSolvedInput
    >;
    create: XOR<
      UserCreateWithoutProblemSolvedInput,
      UserUncheckedCreateWithoutProblemSolvedInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutProblemSolvedInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutProblemSolvedInput,
      UserUncheckedUpdateWithoutProblemSolvedInput
    >;
  };

  export type UserUpdateWithoutProblemSolvedInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: StringFieldUpdateOperationsInput | string;
    avatar?: NullableJsonNullValueInput | InputJsonValue;
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    password?: StringFieldUpdateOperationsInput | string;
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    problem?: ProblemUpdateManyWithoutUserNestedInput;
    submission?: SubmissionUpdateManyWithoutUserNestedInput;
    discussions?: DiscussionUpdateManyWithoutUserNestedInput;
    votesOnProblems?: ProblemVoteUpdateManyWithoutUserNestedInput;
    playlists?: PlaylistUpdateManyWithoutUserNestedInput;
    subscription?: SubscriptionUpdateOneWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutProblemSolvedInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: StringFieldUpdateOperationsInput | string;
    avatar?: NullableJsonNullValueInput | InputJsonValue;
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    password?: StringFieldUpdateOperationsInput | string;
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    problem?: ProblemUncheckedUpdateManyWithoutUserNestedInput;
    submission?: SubmissionUncheckedUpdateManyWithoutUserNestedInput;
    discussions?: DiscussionUncheckedUpdateManyWithoutUserNestedInput;
    votesOnProblems?: ProblemVoteUncheckedUpdateManyWithoutUserNestedInput;
    playlists?: PlaylistUncheckedUpdateManyWithoutUserNestedInput;
    subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput;
  };

  export type ProblemUpsertWithoutSolvedByInput = {
    update: XOR<
      ProblemUpdateWithoutSolvedByInput,
      ProblemUncheckedUpdateWithoutSolvedByInput
    >;
    create: XOR<
      ProblemCreateWithoutSolvedByInput,
      ProblemUncheckedCreateWithoutSolvedByInput
    >;
    where?: ProblemWhereInput;
  };

  export type ProblemUpdateToOneWithWhereWithoutSolvedByInput = {
    where?: ProblemWhereInput;
    data: XOR<
      ProblemUpdateWithoutSolvedByInput,
      ProblemUncheckedUpdateWithoutSolvedByInput
    >;
  };

  export type ProblemUpdateWithoutSolvedByInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    problemNumber?: IntFieldUpdateOperationsInput | number;
    description?: StringFieldUpdateOperationsInput | string;
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty;
    topic?: ProblemUpdatetopicInput | string[];
    examples?: JsonNullValueInput | InputJsonValue;
    constraints?: StringFieldUpdateOperationsInput | string;
    hints?: NullableStringFieldUpdateOperationsInput | string | null;
    editorial?: NullableStringFieldUpdateOperationsInput | string | null;
    codeSnippets?: JsonNullValueInput | InputJsonValue;
    referenceSolutions?: JsonNullValueInput | InputJsonValue;
    isPremium?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutProblemNestedInput;
    submission?: SubmissionUpdateManyWithoutProblemNestedInput;
    testcases?: ProblemTestCaseUpdateManyWithoutProblemNestedInput;
    discussions?: DiscussionUpdateManyWithoutProblemNestedInput;
    votes?: ProblemVoteUpdateManyWithoutProblemNestedInput;
    problemsPlatlists?: ProblemInPlaylistUpdateManyWithoutProblemNestedInput;
  };

  export type ProblemUncheckedUpdateWithoutSolvedByInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    problemNumber?: IntFieldUpdateOperationsInput | number;
    description?: StringFieldUpdateOperationsInput | string;
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty;
    topic?: ProblemUpdatetopicInput | string[];
    userId?: StringFieldUpdateOperationsInput | string;
    examples?: JsonNullValueInput | InputJsonValue;
    constraints?: StringFieldUpdateOperationsInput | string;
    hints?: NullableStringFieldUpdateOperationsInput | string | null;
    editorial?: NullableStringFieldUpdateOperationsInput | string | null;
    codeSnippets?: JsonNullValueInput | InputJsonValue;
    referenceSolutions?: JsonNullValueInput | InputJsonValue;
    isPremium?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    submission?: SubmissionUncheckedUpdateManyWithoutProblemNestedInput;
    testcases?: ProblemTestCaseUncheckedUpdateManyWithoutProblemNestedInput;
    discussions?: DiscussionUncheckedUpdateManyWithoutProblemNestedInput;
    votes?: ProblemVoteUncheckedUpdateManyWithoutProblemNestedInput;
    problemsPlatlists?: ProblemInPlaylistUncheckedUpdateManyWithoutProblemNestedInput;
  };

  export type UserCreateWithoutDiscussionsInput = {
    id?: string;
    name?: string | null;
    email: string;
    avatar?: NullableJsonNullValueInput | InputJsonValue;
    role?: $Enums.UserRole;
    password: string;
    refreshToken?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    problem?: ProblemCreateNestedManyWithoutUserInput;
    submission?: SubmissionCreateNestedManyWithoutUserInput;
    problemSolved?: ProblemSolvedCreateNestedManyWithoutUserInput;
    votesOnProblems?: ProblemVoteCreateNestedManyWithoutUserInput;
    playlists?: PlaylistCreateNestedManyWithoutUserInput;
    subscription?: SubscriptionCreateNestedOneWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutDiscussionsInput = {
    id?: string;
    name?: string | null;
    email: string;
    avatar?: NullableJsonNullValueInput | InputJsonValue;
    role?: $Enums.UserRole;
    password: string;
    refreshToken?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    problem?: ProblemUncheckedCreateNestedManyWithoutUserInput;
    submission?: SubmissionUncheckedCreateNestedManyWithoutUserInput;
    problemSolved?: ProblemSolvedUncheckedCreateNestedManyWithoutUserInput;
    votesOnProblems?: ProblemVoteUncheckedCreateNestedManyWithoutUserInput;
    playlists?: PlaylistUncheckedCreateNestedManyWithoutUserInput;
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutDiscussionsInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutDiscussionsInput,
      UserUncheckedCreateWithoutDiscussionsInput
    >;
  };

  export type ProblemCreateWithoutDiscussionsInput = {
    id?: string;
    title: string;
    problemNumber?: number;
    description: string;
    difficulty: $Enums.Difficulty;
    topic?: ProblemCreatetopicInput | string[];
    examples: JsonNullValueInput | InputJsonValue;
    constraints: string;
    hints?: string | null;
    editorial?: string | null;
    codeSnippets: JsonNullValueInput | InputJsonValue;
    referenceSolutions: JsonNullValueInput | InputJsonValue;
    isPremium?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: UserCreateNestedOneWithoutProblemInput;
    submission?: SubmissionCreateNestedManyWithoutProblemInput;
    solvedBy?: ProblemSolvedCreateNestedManyWithoutProblemInput;
    testcases?: ProblemTestCaseCreateNestedManyWithoutProblemInput;
    votes?: ProblemVoteCreateNestedManyWithoutProblemInput;
    problemsPlatlists?: ProblemInPlaylistCreateNestedManyWithoutProblemInput;
  };

  export type ProblemUncheckedCreateWithoutDiscussionsInput = {
    id?: string;
    title: string;
    problemNumber?: number;
    description: string;
    difficulty: $Enums.Difficulty;
    topic?: ProblemCreatetopicInput | string[];
    userId: string;
    examples: JsonNullValueInput | InputJsonValue;
    constraints: string;
    hints?: string | null;
    editorial?: string | null;
    codeSnippets: JsonNullValueInput | InputJsonValue;
    referenceSolutions: JsonNullValueInput | InputJsonValue;
    isPremium?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    submission?: SubmissionUncheckedCreateNestedManyWithoutProblemInput;
    solvedBy?: ProblemSolvedUncheckedCreateNestedManyWithoutProblemInput;
    testcases?: ProblemTestCaseUncheckedCreateNestedManyWithoutProblemInput;
    votes?: ProblemVoteUncheckedCreateNestedManyWithoutProblemInput;
    problemsPlatlists?: ProblemInPlaylistUncheckedCreateNestedManyWithoutProblemInput;
  };

  export type ProblemCreateOrConnectWithoutDiscussionsInput = {
    where: ProblemWhereUniqueInput;
    create: XOR<
      ProblemCreateWithoutDiscussionsInput,
      ProblemUncheckedCreateWithoutDiscussionsInput
    >;
  };

  export type DiscussionCreateWithoutRepliesInput = {
    id?: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: UserCreateNestedOneWithoutDiscussionsInput;
    problem: ProblemCreateNestedOneWithoutDiscussionsInput;
    parent?: DiscussionCreateNestedOneWithoutRepliesInput;
  };

  export type DiscussionUncheckedCreateWithoutRepliesInput = {
    id?: string;
    userId: string;
    problemId: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    parentId?: string | null;
  };

  export type DiscussionCreateOrConnectWithoutRepliesInput = {
    where: DiscussionWhereUniqueInput;
    create: XOR<
      DiscussionCreateWithoutRepliesInput,
      DiscussionUncheckedCreateWithoutRepliesInput
    >;
  };

  export type DiscussionCreateWithoutParentInput = {
    id?: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: UserCreateNestedOneWithoutDiscussionsInput;
    problem: ProblemCreateNestedOneWithoutDiscussionsInput;
    replies?: DiscussionCreateNestedManyWithoutParentInput;
  };

  export type DiscussionUncheckedCreateWithoutParentInput = {
    id?: string;
    userId: string;
    problemId: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    replies?: DiscussionUncheckedCreateNestedManyWithoutParentInput;
  };

  export type DiscussionCreateOrConnectWithoutParentInput = {
    where: DiscussionWhereUniqueInput;
    create: XOR<
      DiscussionCreateWithoutParentInput,
      DiscussionUncheckedCreateWithoutParentInput
    >;
  };

  export type DiscussionCreateManyParentInputEnvelope = {
    data: DiscussionCreateManyParentInput | DiscussionCreateManyParentInput[];
    skipDuplicates?: boolean;
  };

  export type UserUpsertWithoutDiscussionsInput = {
    update: XOR<
      UserUpdateWithoutDiscussionsInput,
      UserUncheckedUpdateWithoutDiscussionsInput
    >;
    create: XOR<
      UserCreateWithoutDiscussionsInput,
      UserUncheckedCreateWithoutDiscussionsInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutDiscussionsInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutDiscussionsInput,
      UserUncheckedUpdateWithoutDiscussionsInput
    >;
  };

  export type UserUpdateWithoutDiscussionsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: StringFieldUpdateOperationsInput | string;
    avatar?: NullableJsonNullValueInput | InputJsonValue;
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    password?: StringFieldUpdateOperationsInput | string;
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    problem?: ProblemUpdateManyWithoutUserNestedInput;
    submission?: SubmissionUpdateManyWithoutUserNestedInput;
    problemSolved?: ProblemSolvedUpdateManyWithoutUserNestedInput;
    votesOnProblems?: ProblemVoteUpdateManyWithoutUserNestedInput;
    playlists?: PlaylistUpdateManyWithoutUserNestedInput;
    subscription?: SubscriptionUpdateOneWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutDiscussionsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: StringFieldUpdateOperationsInput | string;
    avatar?: NullableJsonNullValueInput | InputJsonValue;
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    password?: StringFieldUpdateOperationsInput | string;
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    problem?: ProblemUncheckedUpdateManyWithoutUserNestedInput;
    submission?: SubmissionUncheckedUpdateManyWithoutUserNestedInput;
    problemSolved?: ProblemSolvedUncheckedUpdateManyWithoutUserNestedInput;
    votesOnProblems?: ProblemVoteUncheckedUpdateManyWithoutUserNestedInput;
    playlists?: PlaylistUncheckedUpdateManyWithoutUserNestedInput;
    subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput;
  };

  export type ProblemUpsertWithoutDiscussionsInput = {
    update: XOR<
      ProblemUpdateWithoutDiscussionsInput,
      ProblemUncheckedUpdateWithoutDiscussionsInput
    >;
    create: XOR<
      ProblemCreateWithoutDiscussionsInput,
      ProblemUncheckedCreateWithoutDiscussionsInput
    >;
    where?: ProblemWhereInput;
  };

  export type ProblemUpdateToOneWithWhereWithoutDiscussionsInput = {
    where?: ProblemWhereInput;
    data: XOR<
      ProblemUpdateWithoutDiscussionsInput,
      ProblemUncheckedUpdateWithoutDiscussionsInput
    >;
  };

  export type ProblemUpdateWithoutDiscussionsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    problemNumber?: IntFieldUpdateOperationsInput | number;
    description?: StringFieldUpdateOperationsInput | string;
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty;
    topic?: ProblemUpdatetopicInput | string[];
    examples?: JsonNullValueInput | InputJsonValue;
    constraints?: StringFieldUpdateOperationsInput | string;
    hints?: NullableStringFieldUpdateOperationsInput | string | null;
    editorial?: NullableStringFieldUpdateOperationsInput | string | null;
    codeSnippets?: JsonNullValueInput | InputJsonValue;
    referenceSolutions?: JsonNullValueInput | InputJsonValue;
    isPremium?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutProblemNestedInput;
    submission?: SubmissionUpdateManyWithoutProblemNestedInput;
    solvedBy?: ProblemSolvedUpdateManyWithoutProblemNestedInput;
    testcases?: ProblemTestCaseUpdateManyWithoutProblemNestedInput;
    votes?: ProblemVoteUpdateManyWithoutProblemNestedInput;
    problemsPlatlists?: ProblemInPlaylistUpdateManyWithoutProblemNestedInput;
  };

  export type ProblemUncheckedUpdateWithoutDiscussionsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    problemNumber?: IntFieldUpdateOperationsInput | number;
    description?: StringFieldUpdateOperationsInput | string;
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty;
    topic?: ProblemUpdatetopicInput | string[];
    userId?: StringFieldUpdateOperationsInput | string;
    examples?: JsonNullValueInput | InputJsonValue;
    constraints?: StringFieldUpdateOperationsInput | string;
    hints?: NullableStringFieldUpdateOperationsInput | string | null;
    editorial?: NullableStringFieldUpdateOperationsInput | string | null;
    codeSnippets?: JsonNullValueInput | InputJsonValue;
    referenceSolutions?: JsonNullValueInput | InputJsonValue;
    isPremium?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    submission?: SubmissionUncheckedUpdateManyWithoutProblemNestedInput;
    solvedBy?: ProblemSolvedUncheckedUpdateManyWithoutProblemNestedInput;
    testcases?: ProblemTestCaseUncheckedUpdateManyWithoutProblemNestedInput;
    votes?: ProblemVoteUncheckedUpdateManyWithoutProblemNestedInput;
    problemsPlatlists?: ProblemInPlaylistUncheckedUpdateManyWithoutProblemNestedInput;
  };

  export type DiscussionUpsertWithoutRepliesInput = {
    update: XOR<
      DiscussionUpdateWithoutRepliesInput,
      DiscussionUncheckedUpdateWithoutRepliesInput
    >;
    create: XOR<
      DiscussionCreateWithoutRepliesInput,
      DiscussionUncheckedCreateWithoutRepliesInput
    >;
    where?: DiscussionWhereInput;
  };

  export type DiscussionUpdateToOneWithWhereWithoutRepliesInput = {
    where?: DiscussionWhereInput;
    data: XOR<
      DiscussionUpdateWithoutRepliesInput,
      DiscussionUncheckedUpdateWithoutRepliesInput
    >;
  };

  export type DiscussionUpdateWithoutRepliesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutDiscussionsNestedInput;
    problem?: ProblemUpdateOneRequiredWithoutDiscussionsNestedInput;
    parent?: DiscussionUpdateOneWithoutRepliesNestedInput;
  };

  export type DiscussionUncheckedUpdateWithoutRepliesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    problemId?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    parentId?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type DiscussionUpsertWithWhereUniqueWithoutParentInput = {
    where: DiscussionWhereUniqueInput;
    update: XOR<
      DiscussionUpdateWithoutParentInput,
      DiscussionUncheckedUpdateWithoutParentInput
    >;
    create: XOR<
      DiscussionCreateWithoutParentInput,
      DiscussionUncheckedCreateWithoutParentInput
    >;
  };

  export type DiscussionUpdateWithWhereUniqueWithoutParentInput = {
    where: DiscussionWhereUniqueInput;
    data: XOR<
      DiscussionUpdateWithoutParentInput,
      DiscussionUncheckedUpdateWithoutParentInput
    >;
  };

  export type DiscussionUpdateManyWithWhereWithoutParentInput = {
    where: DiscussionScalarWhereInput;
    data: XOR<
      DiscussionUpdateManyMutationInput,
      DiscussionUncheckedUpdateManyWithoutParentInput
    >;
  };

  export type UserCreateWithoutVotesOnProblemsInput = {
    id?: string;
    name?: string | null;
    email: string;
    avatar?: NullableJsonNullValueInput | InputJsonValue;
    role?: $Enums.UserRole;
    password: string;
    refreshToken?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    problem?: ProblemCreateNestedManyWithoutUserInput;
    submission?: SubmissionCreateNestedManyWithoutUserInput;
    problemSolved?: ProblemSolvedCreateNestedManyWithoutUserInput;
    discussions?: DiscussionCreateNestedManyWithoutUserInput;
    playlists?: PlaylistCreateNestedManyWithoutUserInput;
    subscription?: SubscriptionCreateNestedOneWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutVotesOnProblemsInput = {
    id?: string;
    name?: string | null;
    email: string;
    avatar?: NullableJsonNullValueInput | InputJsonValue;
    role?: $Enums.UserRole;
    password: string;
    refreshToken?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    problem?: ProblemUncheckedCreateNestedManyWithoutUserInput;
    submission?: SubmissionUncheckedCreateNestedManyWithoutUserInput;
    problemSolved?: ProblemSolvedUncheckedCreateNestedManyWithoutUserInput;
    discussions?: DiscussionUncheckedCreateNestedManyWithoutUserInput;
    playlists?: PlaylistUncheckedCreateNestedManyWithoutUserInput;
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutVotesOnProblemsInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutVotesOnProblemsInput,
      UserUncheckedCreateWithoutVotesOnProblemsInput
    >;
  };

  export type ProblemCreateWithoutVotesInput = {
    id?: string;
    title: string;
    problemNumber?: number;
    description: string;
    difficulty: $Enums.Difficulty;
    topic?: ProblemCreatetopicInput | string[];
    examples: JsonNullValueInput | InputJsonValue;
    constraints: string;
    hints?: string | null;
    editorial?: string | null;
    codeSnippets: JsonNullValueInput | InputJsonValue;
    referenceSolutions: JsonNullValueInput | InputJsonValue;
    isPremium?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: UserCreateNestedOneWithoutProblemInput;
    submission?: SubmissionCreateNestedManyWithoutProblemInput;
    solvedBy?: ProblemSolvedCreateNestedManyWithoutProblemInput;
    testcases?: ProblemTestCaseCreateNestedManyWithoutProblemInput;
    discussions?: DiscussionCreateNestedManyWithoutProblemInput;
    problemsPlatlists?: ProblemInPlaylistCreateNestedManyWithoutProblemInput;
  };

  export type ProblemUncheckedCreateWithoutVotesInput = {
    id?: string;
    title: string;
    problemNumber?: number;
    description: string;
    difficulty: $Enums.Difficulty;
    topic?: ProblemCreatetopicInput | string[];
    userId: string;
    examples: JsonNullValueInput | InputJsonValue;
    constraints: string;
    hints?: string | null;
    editorial?: string | null;
    codeSnippets: JsonNullValueInput | InputJsonValue;
    referenceSolutions: JsonNullValueInput | InputJsonValue;
    isPremium?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    submission?: SubmissionUncheckedCreateNestedManyWithoutProblemInput;
    solvedBy?: ProblemSolvedUncheckedCreateNestedManyWithoutProblemInput;
    testcases?: ProblemTestCaseUncheckedCreateNestedManyWithoutProblemInput;
    discussions?: DiscussionUncheckedCreateNestedManyWithoutProblemInput;
    problemsPlatlists?: ProblemInPlaylistUncheckedCreateNestedManyWithoutProblemInput;
  };

  export type ProblemCreateOrConnectWithoutVotesInput = {
    where: ProblemWhereUniqueInput;
    create: XOR<
      ProblemCreateWithoutVotesInput,
      ProblemUncheckedCreateWithoutVotesInput
    >;
  };

  export type UserUpsertWithoutVotesOnProblemsInput = {
    update: XOR<
      UserUpdateWithoutVotesOnProblemsInput,
      UserUncheckedUpdateWithoutVotesOnProblemsInput
    >;
    create: XOR<
      UserCreateWithoutVotesOnProblemsInput,
      UserUncheckedCreateWithoutVotesOnProblemsInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutVotesOnProblemsInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutVotesOnProblemsInput,
      UserUncheckedUpdateWithoutVotesOnProblemsInput
    >;
  };

  export type UserUpdateWithoutVotesOnProblemsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: StringFieldUpdateOperationsInput | string;
    avatar?: NullableJsonNullValueInput | InputJsonValue;
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    password?: StringFieldUpdateOperationsInput | string;
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    problem?: ProblemUpdateManyWithoutUserNestedInput;
    submission?: SubmissionUpdateManyWithoutUserNestedInput;
    problemSolved?: ProblemSolvedUpdateManyWithoutUserNestedInput;
    discussions?: DiscussionUpdateManyWithoutUserNestedInput;
    playlists?: PlaylistUpdateManyWithoutUserNestedInput;
    subscription?: SubscriptionUpdateOneWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutVotesOnProblemsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: StringFieldUpdateOperationsInput | string;
    avatar?: NullableJsonNullValueInput | InputJsonValue;
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    password?: StringFieldUpdateOperationsInput | string;
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    problem?: ProblemUncheckedUpdateManyWithoutUserNestedInput;
    submission?: SubmissionUncheckedUpdateManyWithoutUserNestedInput;
    problemSolved?: ProblemSolvedUncheckedUpdateManyWithoutUserNestedInput;
    discussions?: DiscussionUncheckedUpdateManyWithoutUserNestedInput;
    playlists?: PlaylistUncheckedUpdateManyWithoutUserNestedInput;
    subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput;
  };

  export type ProblemUpsertWithoutVotesInput = {
    update: XOR<
      ProblemUpdateWithoutVotesInput,
      ProblemUncheckedUpdateWithoutVotesInput
    >;
    create: XOR<
      ProblemCreateWithoutVotesInput,
      ProblemUncheckedCreateWithoutVotesInput
    >;
    where?: ProblemWhereInput;
  };

  export type ProblemUpdateToOneWithWhereWithoutVotesInput = {
    where?: ProblemWhereInput;
    data: XOR<
      ProblemUpdateWithoutVotesInput,
      ProblemUncheckedUpdateWithoutVotesInput
    >;
  };

  export type ProblemUpdateWithoutVotesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    problemNumber?: IntFieldUpdateOperationsInput | number;
    description?: StringFieldUpdateOperationsInput | string;
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty;
    topic?: ProblemUpdatetopicInput | string[];
    examples?: JsonNullValueInput | InputJsonValue;
    constraints?: StringFieldUpdateOperationsInput | string;
    hints?: NullableStringFieldUpdateOperationsInput | string | null;
    editorial?: NullableStringFieldUpdateOperationsInput | string | null;
    codeSnippets?: JsonNullValueInput | InputJsonValue;
    referenceSolutions?: JsonNullValueInput | InputJsonValue;
    isPremium?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutProblemNestedInput;
    submission?: SubmissionUpdateManyWithoutProblemNestedInput;
    solvedBy?: ProblemSolvedUpdateManyWithoutProblemNestedInput;
    testcases?: ProblemTestCaseUpdateManyWithoutProblemNestedInput;
    discussions?: DiscussionUpdateManyWithoutProblemNestedInput;
    problemsPlatlists?: ProblemInPlaylistUpdateManyWithoutProblemNestedInput;
  };

  export type ProblemUncheckedUpdateWithoutVotesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    problemNumber?: IntFieldUpdateOperationsInput | number;
    description?: StringFieldUpdateOperationsInput | string;
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty;
    topic?: ProblemUpdatetopicInput | string[];
    userId?: StringFieldUpdateOperationsInput | string;
    examples?: JsonNullValueInput | InputJsonValue;
    constraints?: StringFieldUpdateOperationsInput | string;
    hints?: NullableStringFieldUpdateOperationsInput | string | null;
    editorial?: NullableStringFieldUpdateOperationsInput | string | null;
    codeSnippets?: JsonNullValueInput | InputJsonValue;
    referenceSolutions?: JsonNullValueInput | InputJsonValue;
    isPremium?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    submission?: SubmissionUncheckedUpdateManyWithoutProblemNestedInput;
    solvedBy?: ProblemSolvedUncheckedUpdateManyWithoutProblemNestedInput;
    testcases?: ProblemTestCaseUncheckedUpdateManyWithoutProblemNestedInput;
    discussions?: DiscussionUncheckedUpdateManyWithoutProblemNestedInput;
    problemsPlatlists?: ProblemInPlaylistUncheckedUpdateManyWithoutProblemNestedInput;
  };

  export type ProblemInPlaylistCreateWithoutPlaylistInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    problem: ProblemCreateNestedOneWithoutProblemsPlatlistsInput;
  };

  export type ProblemInPlaylistUncheckedCreateWithoutPlaylistInput = {
    id?: string;
    problemId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ProblemInPlaylistCreateOrConnectWithoutPlaylistInput = {
    where: ProblemInPlaylistWhereUniqueInput;
    create: XOR<
      ProblemInPlaylistCreateWithoutPlaylistInput,
      ProblemInPlaylistUncheckedCreateWithoutPlaylistInput
    >;
  };

  export type ProblemInPlaylistCreateManyPlaylistInputEnvelope = {
    data:
      | ProblemInPlaylistCreateManyPlaylistInput
      | ProblemInPlaylistCreateManyPlaylistInput[];
    skipDuplicates?: boolean;
  };

  export type UserCreateWithoutPlaylistsInput = {
    id?: string;
    name?: string | null;
    email: string;
    avatar?: NullableJsonNullValueInput | InputJsonValue;
    role?: $Enums.UserRole;
    password: string;
    refreshToken?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    problem?: ProblemCreateNestedManyWithoutUserInput;
    submission?: SubmissionCreateNestedManyWithoutUserInput;
    problemSolved?: ProblemSolvedCreateNestedManyWithoutUserInput;
    discussions?: DiscussionCreateNestedManyWithoutUserInput;
    votesOnProblems?: ProblemVoteCreateNestedManyWithoutUserInput;
    subscription?: SubscriptionCreateNestedOneWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutPlaylistsInput = {
    id?: string;
    name?: string | null;
    email: string;
    avatar?: NullableJsonNullValueInput | InputJsonValue;
    role?: $Enums.UserRole;
    password: string;
    refreshToken?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    problem?: ProblemUncheckedCreateNestedManyWithoutUserInput;
    submission?: SubmissionUncheckedCreateNestedManyWithoutUserInput;
    problemSolved?: ProblemSolvedUncheckedCreateNestedManyWithoutUserInput;
    discussions?: DiscussionUncheckedCreateNestedManyWithoutUserInput;
    votesOnProblems?: ProblemVoteUncheckedCreateNestedManyWithoutUserInput;
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutPlaylistsInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutPlaylistsInput,
      UserUncheckedCreateWithoutPlaylistsInput
    >;
  };

  export type ProblemInPlaylistUpsertWithWhereUniqueWithoutPlaylistInput = {
    where: ProblemInPlaylistWhereUniqueInput;
    update: XOR<
      ProblemInPlaylistUpdateWithoutPlaylistInput,
      ProblemInPlaylistUncheckedUpdateWithoutPlaylistInput
    >;
    create: XOR<
      ProblemInPlaylistCreateWithoutPlaylistInput,
      ProblemInPlaylistUncheckedCreateWithoutPlaylistInput
    >;
  };

  export type ProblemInPlaylistUpdateWithWhereUniqueWithoutPlaylistInput = {
    where: ProblemInPlaylistWhereUniqueInput;
    data: XOR<
      ProblemInPlaylistUpdateWithoutPlaylistInput,
      ProblemInPlaylistUncheckedUpdateWithoutPlaylistInput
    >;
  };

  export type ProblemInPlaylistUpdateManyWithWhereWithoutPlaylistInput = {
    where: ProblemInPlaylistScalarWhereInput;
    data: XOR<
      ProblemInPlaylistUpdateManyMutationInput,
      ProblemInPlaylistUncheckedUpdateManyWithoutPlaylistInput
    >;
  };

  export type UserUpsertWithoutPlaylistsInput = {
    update: XOR<
      UserUpdateWithoutPlaylistsInput,
      UserUncheckedUpdateWithoutPlaylistsInput
    >;
    create: XOR<
      UserCreateWithoutPlaylistsInput,
      UserUncheckedCreateWithoutPlaylistsInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutPlaylistsInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutPlaylistsInput,
      UserUncheckedUpdateWithoutPlaylistsInput
    >;
  };

  export type UserUpdateWithoutPlaylistsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: StringFieldUpdateOperationsInput | string;
    avatar?: NullableJsonNullValueInput | InputJsonValue;
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    password?: StringFieldUpdateOperationsInput | string;
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    problem?: ProblemUpdateManyWithoutUserNestedInput;
    submission?: SubmissionUpdateManyWithoutUserNestedInput;
    problemSolved?: ProblemSolvedUpdateManyWithoutUserNestedInput;
    discussions?: DiscussionUpdateManyWithoutUserNestedInput;
    votesOnProblems?: ProblemVoteUpdateManyWithoutUserNestedInput;
    subscription?: SubscriptionUpdateOneWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutPlaylistsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: StringFieldUpdateOperationsInput | string;
    avatar?: NullableJsonNullValueInput | InputJsonValue;
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    password?: StringFieldUpdateOperationsInput | string;
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    problem?: ProblemUncheckedUpdateManyWithoutUserNestedInput;
    submission?: SubmissionUncheckedUpdateManyWithoutUserNestedInput;
    problemSolved?: ProblemSolvedUncheckedUpdateManyWithoutUserNestedInput;
    discussions?: DiscussionUncheckedUpdateManyWithoutUserNestedInput;
    votesOnProblems?: ProblemVoteUncheckedUpdateManyWithoutUserNestedInput;
    subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput;
  };

  export type PlaylistCreateWithoutProblemsInput = {
    id?: string;
    name: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: UserCreateNestedOneWithoutPlaylistsInput;
  };

  export type PlaylistUncheckedCreateWithoutProblemsInput = {
    id?: string;
    name: string;
    description?: string | null;
    userId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type PlaylistCreateOrConnectWithoutProblemsInput = {
    where: PlaylistWhereUniqueInput;
    create: XOR<
      PlaylistCreateWithoutProblemsInput,
      PlaylistUncheckedCreateWithoutProblemsInput
    >;
  };

  export type ProblemCreateWithoutProblemsPlatlistsInput = {
    id?: string;
    title: string;
    problemNumber?: number;
    description: string;
    difficulty: $Enums.Difficulty;
    topic?: ProblemCreatetopicInput | string[];
    examples: JsonNullValueInput | InputJsonValue;
    constraints: string;
    hints?: string | null;
    editorial?: string | null;
    codeSnippets: JsonNullValueInput | InputJsonValue;
    referenceSolutions: JsonNullValueInput | InputJsonValue;
    isPremium?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: UserCreateNestedOneWithoutProblemInput;
    submission?: SubmissionCreateNestedManyWithoutProblemInput;
    solvedBy?: ProblemSolvedCreateNestedManyWithoutProblemInput;
    testcases?: ProblemTestCaseCreateNestedManyWithoutProblemInput;
    discussions?: DiscussionCreateNestedManyWithoutProblemInput;
    votes?: ProblemVoteCreateNestedManyWithoutProblemInput;
  };

  export type ProblemUncheckedCreateWithoutProblemsPlatlistsInput = {
    id?: string;
    title: string;
    problemNumber?: number;
    description: string;
    difficulty: $Enums.Difficulty;
    topic?: ProblemCreatetopicInput | string[];
    userId: string;
    examples: JsonNullValueInput | InputJsonValue;
    constraints: string;
    hints?: string | null;
    editorial?: string | null;
    codeSnippets: JsonNullValueInput | InputJsonValue;
    referenceSolutions: JsonNullValueInput | InputJsonValue;
    isPremium?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    submission?: SubmissionUncheckedCreateNestedManyWithoutProblemInput;
    solvedBy?: ProblemSolvedUncheckedCreateNestedManyWithoutProblemInput;
    testcases?: ProblemTestCaseUncheckedCreateNestedManyWithoutProblemInput;
    discussions?: DiscussionUncheckedCreateNestedManyWithoutProblemInput;
    votes?: ProblemVoteUncheckedCreateNestedManyWithoutProblemInput;
  };

  export type ProblemCreateOrConnectWithoutProblemsPlatlistsInput = {
    where: ProblemWhereUniqueInput;
    create: XOR<
      ProblemCreateWithoutProblemsPlatlistsInput,
      ProblemUncheckedCreateWithoutProblemsPlatlistsInput
    >;
  };

  export type PlaylistUpsertWithoutProblemsInput = {
    update: XOR<
      PlaylistUpdateWithoutProblemsInput,
      PlaylistUncheckedUpdateWithoutProblemsInput
    >;
    create: XOR<
      PlaylistCreateWithoutProblemsInput,
      PlaylistUncheckedCreateWithoutProblemsInput
    >;
    where?: PlaylistWhereInput;
  };

  export type PlaylistUpdateToOneWithWhereWithoutProblemsInput = {
    where?: PlaylistWhereInput;
    data: XOR<
      PlaylistUpdateWithoutProblemsInput,
      PlaylistUncheckedUpdateWithoutProblemsInput
    >;
  };

  export type PlaylistUpdateWithoutProblemsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutPlaylistsNestedInput;
  };

  export type PlaylistUncheckedUpdateWithoutProblemsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    userId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ProblemUpsertWithoutProblemsPlatlistsInput = {
    update: XOR<
      ProblemUpdateWithoutProblemsPlatlistsInput,
      ProblemUncheckedUpdateWithoutProblemsPlatlistsInput
    >;
    create: XOR<
      ProblemCreateWithoutProblemsPlatlistsInput,
      ProblemUncheckedCreateWithoutProblemsPlatlistsInput
    >;
    where?: ProblemWhereInput;
  };

  export type ProblemUpdateToOneWithWhereWithoutProblemsPlatlistsInput = {
    where?: ProblemWhereInput;
    data: XOR<
      ProblemUpdateWithoutProblemsPlatlistsInput,
      ProblemUncheckedUpdateWithoutProblemsPlatlistsInput
    >;
  };

  export type ProblemUpdateWithoutProblemsPlatlistsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    problemNumber?: IntFieldUpdateOperationsInput | number;
    description?: StringFieldUpdateOperationsInput | string;
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty;
    topic?: ProblemUpdatetopicInput | string[];
    examples?: JsonNullValueInput | InputJsonValue;
    constraints?: StringFieldUpdateOperationsInput | string;
    hints?: NullableStringFieldUpdateOperationsInput | string | null;
    editorial?: NullableStringFieldUpdateOperationsInput | string | null;
    codeSnippets?: JsonNullValueInput | InputJsonValue;
    referenceSolutions?: JsonNullValueInput | InputJsonValue;
    isPremium?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutProblemNestedInput;
    submission?: SubmissionUpdateManyWithoutProblemNestedInput;
    solvedBy?: ProblemSolvedUpdateManyWithoutProblemNestedInput;
    testcases?: ProblemTestCaseUpdateManyWithoutProblemNestedInput;
    discussions?: DiscussionUpdateManyWithoutProblemNestedInput;
    votes?: ProblemVoteUpdateManyWithoutProblemNestedInput;
  };

  export type ProblemUncheckedUpdateWithoutProblemsPlatlistsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    problemNumber?: IntFieldUpdateOperationsInput | number;
    description?: StringFieldUpdateOperationsInput | string;
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty;
    topic?: ProblemUpdatetopicInput | string[];
    userId?: StringFieldUpdateOperationsInput | string;
    examples?: JsonNullValueInput | InputJsonValue;
    constraints?: StringFieldUpdateOperationsInput | string;
    hints?: NullableStringFieldUpdateOperationsInput | string | null;
    editorial?: NullableStringFieldUpdateOperationsInput | string | null;
    codeSnippets?: JsonNullValueInput | InputJsonValue;
    referenceSolutions?: JsonNullValueInput | InputJsonValue;
    isPremium?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    submission?: SubmissionUncheckedUpdateManyWithoutProblemNestedInput;
    solvedBy?: ProblemSolvedUncheckedUpdateManyWithoutProblemNestedInput;
    testcases?: ProblemTestCaseUncheckedUpdateManyWithoutProblemNestedInput;
    discussions?: DiscussionUncheckedUpdateManyWithoutProblemNestedInput;
    votes?: ProblemVoteUncheckedUpdateManyWithoutProblemNestedInput;
  };

  export type UserCreateWithoutSubscriptionInput = {
    id?: string;
    name?: string | null;
    email: string;
    avatar?: NullableJsonNullValueInput | InputJsonValue;
    role?: $Enums.UserRole;
    password: string;
    refreshToken?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    problem?: ProblemCreateNestedManyWithoutUserInput;
    submission?: SubmissionCreateNestedManyWithoutUserInput;
    problemSolved?: ProblemSolvedCreateNestedManyWithoutUserInput;
    discussions?: DiscussionCreateNestedManyWithoutUserInput;
    votesOnProblems?: ProblemVoteCreateNestedManyWithoutUserInput;
    playlists?: PlaylistCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutSubscriptionInput = {
    id?: string;
    name?: string | null;
    email: string;
    avatar?: NullableJsonNullValueInput | InputJsonValue;
    role?: $Enums.UserRole;
    password: string;
    refreshToken?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    problem?: ProblemUncheckedCreateNestedManyWithoutUserInput;
    submission?: SubmissionUncheckedCreateNestedManyWithoutUserInput;
    problemSolved?: ProblemSolvedUncheckedCreateNestedManyWithoutUserInput;
    discussions?: DiscussionUncheckedCreateNestedManyWithoutUserInput;
    votesOnProblems?: ProblemVoteUncheckedCreateNestedManyWithoutUserInput;
    playlists?: PlaylistUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutSubscriptionInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutSubscriptionInput,
      UserUncheckedCreateWithoutSubscriptionInput
    >;
  };

  export type UserUpsertWithoutSubscriptionInput = {
    update: XOR<
      UserUpdateWithoutSubscriptionInput,
      UserUncheckedUpdateWithoutSubscriptionInput
    >;
    create: XOR<
      UserCreateWithoutSubscriptionInput,
      UserUncheckedCreateWithoutSubscriptionInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutSubscriptionInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutSubscriptionInput,
      UserUncheckedUpdateWithoutSubscriptionInput
    >;
  };

  export type UserUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: StringFieldUpdateOperationsInput | string;
    avatar?: NullableJsonNullValueInput | InputJsonValue;
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    password?: StringFieldUpdateOperationsInput | string;
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    problem?: ProblemUpdateManyWithoutUserNestedInput;
    submission?: SubmissionUpdateManyWithoutUserNestedInput;
    problemSolved?: ProblemSolvedUpdateManyWithoutUserNestedInput;
    discussions?: DiscussionUpdateManyWithoutUserNestedInput;
    votesOnProblems?: ProblemVoteUpdateManyWithoutUserNestedInput;
    playlists?: PlaylistUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: StringFieldUpdateOperationsInput | string;
    avatar?: NullableJsonNullValueInput | InputJsonValue;
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    password?: StringFieldUpdateOperationsInput | string;
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    problem?: ProblemUncheckedUpdateManyWithoutUserNestedInput;
    submission?: SubmissionUncheckedUpdateManyWithoutUserNestedInput;
    problemSolved?: ProblemSolvedUncheckedUpdateManyWithoutUserNestedInput;
    discussions?: DiscussionUncheckedUpdateManyWithoutUserNestedInput;
    votesOnProblems?: ProblemVoteUncheckedUpdateManyWithoutUserNestedInput;
    playlists?: PlaylistUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type ProblemCreateManyUserInput = {
    id?: string;
    title: string;
    problemNumber?: number;
    description: string;
    difficulty: $Enums.Difficulty;
    topic?: ProblemCreatetopicInput | string[];
    examples: JsonNullValueInput | InputJsonValue;
    constraints: string;
    hints?: string | null;
    editorial?: string | null;
    codeSnippets: JsonNullValueInput | InputJsonValue;
    referenceSolutions: JsonNullValueInput | InputJsonValue;
    isPremium?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type SubmissionCreateManyUserInput = {
    id?: string;
    problemId: string;
    sourceCode: JsonNullValueInput | InputJsonValue;
    language: string;
    stdin?: string | null;
    stdout?: string | null;
    stderr?: string | null;
    compileOutput?: string | null;
    status: string;
    memory?: string | null;
    time?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ProblemSolvedCreateManyUserInput = {
    id?: string;
    problemId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type DiscussionCreateManyUserInput = {
    id?: string;
    problemId: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    parentId?: string | null;
  };

  export type ProblemVoteCreateManyUserInput = {
    id?: string;
    problemId: string;
    type: $Enums.VoteType;
    createdAt?: Date | string;
  };

  export type PlaylistCreateManyUserInput = {
    id?: string;
    name: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ProblemUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    problemNumber?: IntFieldUpdateOperationsInput | number;
    description?: StringFieldUpdateOperationsInput | string;
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty;
    topic?: ProblemUpdatetopicInput | string[];
    examples?: JsonNullValueInput | InputJsonValue;
    constraints?: StringFieldUpdateOperationsInput | string;
    hints?: NullableStringFieldUpdateOperationsInput | string | null;
    editorial?: NullableStringFieldUpdateOperationsInput | string | null;
    codeSnippets?: JsonNullValueInput | InputJsonValue;
    referenceSolutions?: JsonNullValueInput | InputJsonValue;
    isPremium?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    submission?: SubmissionUpdateManyWithoutProblemNestedInput;
    solvedBy?: ProblemSolvedUpdateManyWithoutProblemNestedInput;
    testcases?: ProblemTestCaseUpdateManyWithoutProblemNestedInput;
    discussions?: DiscussionUpdateManyWithoutProblemNestedInput;
    votes?: ProblemVoteUpdateManyWithoutProblemNestedInput;
    problemsPlatlists?: ProblemInPlaylistUpdateManyWithoutProblemNestedInput;
  };

  export type ProblemUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    problemNumber?: IntFieldUpdateOperationsInput | number;
    description?: StringFieldUpdateOperationsInput | string;
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty;
    topic?: ProblemUpdatetopicInput | string[];
    examples?: JsonNullValueInput | InputJsonValue;
    constraints?: StringFieldUpdateOperationsInput | string;
    hints?: NullableStringFieldUpdateOperationsInput | string | null;
    editorial?: NullableStringFieldUpdateOperationsInput | string | null;
    codeSnippets?: JsonNullValueInput | InputJsonValue;
    referenceSolutions?: JsonNullValueInput | InputJsonValue;
    isPremium?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    submission?: SubmissionUncheckedUpdateManyWithoutProblemNestedInput;
    solvedBy?: ProblemSolvedUncheckedUpdateManyWithoutProblemNestedInput;
    testcases?: ProblemTestCaseUncheckedUpdateManyWithoutProblemNestedInput;
    discussions?: DiscussionUncheckedUpdateManyWithoutProblemNestedInput;
    votes?: ProblemVoteUncheckedUpdateManyWithoutProblemNestedInput;
    problemsPlatlists?: ProblemInPlaylistUncheckedUpdateManyWithoutProblemNestedInput;
  };

  export type ProblemUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    problemNumber?: IntFieldUpdateOperationsInput | number;
    description?: StringFieldUpdateOperationsInput | string;
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty;
    topic?: ProblemUpdatetopicInput | string[];
    examples?: JsonNullValueInput | InputJsonValue;
    constraints?: StringFieldUpdateOperationsInput | string;
    hints?: NullableStringFieldUpdateOperationsInput | string | null;
    editorial?: NullableStringFieldUpdateOperationsInput | string | null;
    codeSnippets?: JsonNullValueInput | InputJsonValue;
    referenceSolutions?: JsonNullValueInput | InputJsonValue;
    isPremium?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type SubmissionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    sourceCode?: JsonNullValueInput | InputJsonValue;
    language?: StringFieldUpdateOperationsInput | string;
    stdin?: NullableStringFieldUpdateOperationsInput | string | null;
    stdout?: NullableStringFieldUpdateOperationsInput | string | null;
    stderr?: NullableStringFieldUpdateOperationsInput | string | null;
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    memory?: NullableStringFieldUpdateOperationsInput | string | null;
    time?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    problem?: ProblemUpdateOneRequiredWithoutSubmissionNestedInput;
    testcase?: TestCaseUpdateManyWithoutSubmissionNestedInput;
  };

  export type SubmissionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    problemId?: StringFieldUpdateOperationsInput | string;
    sourceCode?: JsonNullValueInput | InputJsonValue;
    language?: StringFieldUpdateOperationsInput | string;
    stdin?: NullableStringFieldUpdateOperationsInput | string | null;
    stdout?: NullableStringFieldUpdateOperationsInput | string | null;
    stderr?: NullableStringFieldUpdateOperationsInput | string | null;
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    memory?: NullableStringFieldUpdateOperationsInput | string | null;
    time?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    testcase?: TestCaseUncheckedUpdateManyWithoutSubmissionNestedInput;
  };

  export type SubmissionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    problemId?: StringFieldUpdateOperationsInput | string;
    sourceCode?: JsonNullValueInput | InputJsonValue;
    language?: StringFieldUpdateOperationsInput | string;
    stdin?: NullableStringFieldUpdateOperationsInput | string | null;
    stdout?: NullableStringFieldUpdateOperationsInput | string | null;
    stderr?: NullableStringFieldUpdateOperationsInput | string | null;
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    memory?: NullableStringFieldUpdateOperationsInput | string | null;
    time?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ProblemSolvedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    problem?: ProblemUpdateOneRequiredWithoutSolvedByNestedInput;
  };

  export type ProblemSolvedUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    problemId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ProblemSolvedUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    problemId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type DiscussionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    problem?: ProblemUpdateOneRequiredWithoutDiscussionsNestedInput;
    parent?: DiscussionUpdateOneWithoutRepliesNestedInput;
    replies?: DiscussionUpdateManyWithoutParentNestedInput;
  };

  export type DiscussionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    problemId?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    parentId?: NullableStringFieldUpdateOperationsInput | string | null;
    replies?: DiscussionUncheckedUpdateManyWithoutParentNestedInput;
  };

  export type DiscussionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    problemId?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    parentId?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type ProblemVoteUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?: EnumVoteTypeFieldUpdateOperationsInput | $Enums.VoteType;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    problem?: ProblemUpdateOneRequiredWithoutVotesNestedInput;
  };

  export type ProblemVoteUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    problemId?: StringFieldUpdateOperationsInput | string;
    type?: EnumVoteTypeFieldUpdateOperationsInput | $Enums.VoteType;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ProblemVoteUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    problemId?: StringFieldUpdateOperationsInput | string;
    type?: EnumVoteTypeFieldUpdateOperationsInput | $Enums.VoteType;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PlaylistUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    problems?: ProblemInPlaylistUpdateManyWithoutPlaylistNestedInput;
  };

  export type PlaylistUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    problems?: ProblemInPlaylistUncheckedUpdateManyWithoutPlaylistNestedInput;
  };

  export type PlaylistUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type SubmissionCreateManyProblemInput = {
    id?: string;
    userId: string;
    sourceCode: JsonNullValueInput | InputJsonValue;
    language: string;
    stdin?: string | null;
    stdout?: string | null;
    stderr?: string | null;
    compileOutput?: string | null;
    status: string;
    memory?: string | null;
    time?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ProblemSolvedCreateManyProblemInput = {
    id?: string;
    userId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ProblemTestCaseCreateManyProblemInput = {
    id?: string;
    input: string;
    output: string;
    isPublic?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type DiscussionCreateManyProblemInput = {
    id?: string;
    userId: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    parentId?: string | null;
  };

  export type ProblemVoteCreateManyProblemInput = {
    id?: string;
    userId: string;
    type: $Enums.VoteType;
    createdAt?: Date | string;
  };

  export type ProblemInPlaylistCreateManyProblemInput = {
    id?: string;
    playlistId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type SubmissionUpdateWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string;
    sourceCode?: JsonNullValueInput | InputJsonValue;
    language?: StringFieldUpdateOperationsInput | string;
    stdin?: NullableStringFieldUpdateOperationsInput | string | null;
    stdout?: NullableStringFieldUpdateOperationsInput | string | null;
    stderr?: NullableStringFieldUpdateOperationsInput | string | null;
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    memory?: NullableStringFieldUpdateOperationsInput | string | null;
    time?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutSubmissionNestedInput;
    testcase?: TestCaseUpdateManyWithoutSubmissionNestedInput;
  };

  export type SubmissionUncheckedUpdateWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    sourceCode?: JsonNullValueInput | InputJsonValue;
    language?: StringFieldUpdateOperationsInput | string;
    stdin?: NullableStringFieldUpdateOperationsInput | string | null;
    stdout?: NullableStringFieldUpdateOperationsInput | string | null;
    stderr?: NullableStringFieldUpdateOperationsInput | string | null;
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    memory?: NullableStringFieldUpdateOperationsInput | string | null;
    time?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    testcase?: TestCaseUncheckedUpdateManyWithoutSubmissionNestedInput;
  };

  export type SubmissionUncheckedUpdateManyWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    sourceCode?: JsonNullValueInput | InputJsonValue;
    language?: StringFieldUpdateOperationsInput | string;
    stdin?: NullableStringFieldUpdateOperationsInput | string | null;
    stdout?: NullableStringFieldUpdateOperationsInput | string | null;
    stderr?: NullableStringFieldUpdateOperationsInput | string | null;
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    memory?: NullableStringFieldUpdateOperationsInput | string | null;
    time?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ProblemSolvedUpdateWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutProblemSolvedNestedInput;
  };

  export type ProblemSolvedUncheckedUpdateWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ProblemSolvedUncheckedUpdateManyWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ProblemTestCaseUpdateWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string;
    input?: StringFieldUpdateOperationsInput | string;
    output?: StringFieldUpdateOperationsInput | string;
    isPublic?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ProblemTestCaseUncheckedUpdateWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string;
    input?: StringFieldUpdateOperationsInput | string;
    output?: StringFieldUpdateOperationsInput | string;
    isPublic?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ProblemTestCaseUncheckedUpdateManyWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string;
    input?: StringFieldUpdateOperationsInput | string;
    output?: StringFieldUpdateOperationsInput | string;
    isPublic?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type DiscussionUpdateWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutDiscussionsNestedInput;
    parent?: DiscussionUpdateOneWithoutRepliesNestedInput;
    replies?: DiscussionUpdateManyWithoutParentNestedInput;
  };

  export type DiscussionUncheckedUpdateWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    parentId?: NullableStringFieldUpdateOperationsInput | string | null;
    replies?: DiscussionUncheckedUpdateManyWithoutParentNestedInput;
  };

  export type DiscussionUncheckedUpdateManyWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    parentId?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type ProblemVoteUpdateWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?: EnumVoteTypeFieldUpdateOperationsInput | $Enums.VoteType;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutVotesOnProblemsNestedInput;
  };

  export type ProblemVoteUncheckedUpdateWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    type?: EnumVoteTypeFieldUpdateOperationsInput | $Enums.VoteType;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ProblemVoteUncheckedUpdateManyWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    type?: EnumVoteTypeFieldUpdateOperationsInput | $Enums.VoteType;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ProblemInPlaylistUpdateWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    playlist?: PlaylistUpdateOneRequiredWithoutProblemsNestedInput;
  };

  export type ProblemInPlaylistUncheckedUpdateWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string;
    playlistId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ProblemInPlaylistUncheckedUpdateManyWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string;
    playlistId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TestCaseCreateManySubmissionInput = {
    id?: string;
    testCase: string;
    passed: boolean;
    stdout?: string | null;
    expected: string;
    stderr?: string | null;
    compileOutput?: string | null;
    status: string;
    memory?: string | null;
    time?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type TestCaseUpdateWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string;
    testCase?: StringFieldUpdateOperationsInput | string;
    passed?: BoolFieldUpdateOperationsInput | boolean;
    stdout?: NullableStringFieldUpdateOperationsInput | string | null;
    expected?: StringFieldUpdateOperationsInput | string;
    stderr?: NullableStringFieldUpdateOperationsInput | string | null;
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    memory?: NullableStringFieldUpdateOperationsInput | string | null;
    time?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TestCaseUncheckedUpdateWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string;
    testCase?: StringFieldUpdateOperationsInput | string;
    passed?: BoolFieldUpdateOperationsInput | boolean;
    stdout?: NullableStringFieldUpdateOperationsInput | string | null;
    expected?: StringFieldUpdateOperationsInput | string;
    stderr?: NullableStringFieldUpdateOperationsInput | string | null;
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    memory?: NullableStringFieldUpdateOperationsInput | string | null;
    time?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TestCaseUncheckedUpdateManyWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string;
    testCase?: StringFieldUpdateOperationsInput | string;
    passed?: BoolFieldUpdateOperationsInput | boolean;
    stdout?: NullableStringFieldUpdateOperationsInput | string | null;
    expected?: StringFieldUpdateOperationsInput | string;
    stderr?: NullableStringFieldUpdateOperationsInput | string | null;
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    memory?: NullableStringFieldUpdateOperationsInput | string | null;
    time?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type DiscussionCreateManyParentInput = {
    id?: string;
    userId: string;
    problemId: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type DiscussionUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutDiscussionsNestedInput;
    problem?: ProblemUpdateOneRequiredWithoutDiscussionsNestedInput;
    replies?: DiscussionUpdateManyWithoutParentNestedInput;
  };

  export type DiscussionUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    problemId?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    replies?: DiscussionUncheckedUpdateManyWithoutParentNestedInput;
  };

  export type DiscussionUncheckedUpdateManyWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    problemId?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ProblemInPlaylistCreateManyPlaylistInput = {
    id?: string;
    problemId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ProblemInPlaylistUpdateWithoutPlaylistInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    problem?: ProblemUpdateOneRequiredWithoutProblemsPlatlistsNestedInput;
  };

  export type ProblemInPlaylistUncheckedUpdateWithoutPlaylistInput = {
    id?: StringFieldUpdateOperationsInput | string;
    problemId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ProblemInPlaylistUncheckedUpdateManyWithoutPlaylistInput = {
    id?: StringFieldUpdateOperationsInput | string;
    problemId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
