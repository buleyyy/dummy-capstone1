
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model InternalUser
 * 
 */
export type InternalUser = $Result.DefaultSelection<Prisma.$InternalUserPayload>
/**
 * Model AuthSession
 * 
 */
export type AuthSession = $Result.DefaultSelection<Prisma.$AuthSessionPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Program
 * 
 */
export type Program = $Result.DefaultSelection<Prisma.$ProgramPayload>
/**
 * Model Material
 * 
 */
export type Material = $Result.DefaultSelection<Prisma.$MaterialPayload>
/**
 * Model SopDocument
 * 
 */
export type SopDocument = $Result.DefaultSelection<Prisma.$SopDocumentPayload>
/**
 * Model ProgramSop
 * 
 */
export type ProgramSop = $Result.DefaultSelection<Prisma.$ProgramSopPayload>
/**
 * Model Evaluation
 * 
 */
export type Evaluation = $Result.DefaultSelection<Prisma.$EvaluationPayload>
/**
 * Model Question
 * 
 */
export type Question = $Result.DefaultSelection<Prisma.$QuestionPayload>
/**
 * Model Attempt
 * 
 */
export type Attempt = $Result.DefaultSelection<Prisma.$AttemptPayload>
/**
 * Model AttemptAnswer
 * 
 */
export type AttemptAnswer = $Result.DefaultSelection<Prisma.$AttemptAnswerPayload>
/**
 * Model ProgramReview
 * 
 */
export type ProgramReview = $Result.DefaultSelection<Prisma.$ProgramReviewPayload>
/**
 * Model Finding
 * 
 */
export type Finding = $Result.DefaultSelection<Prisma.$FindingPayload>
/**
 * Model Setting
 * 
 */
export type Setting = $Result.DefaultSelection<Prisma.$SettingPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more InternalUsers
 * const internalUsers = await prisma.internalUser.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more InternalUsers
   * const internalUsers = await prisma.internalUser.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.internalUser`: Exposes CRUD operations for the **InternalUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InternalUsers
    * const internalUsers = await prisma.internalUser.findMany()
    * ```
    */
  get internalUser(): Prisma.InternalUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.authSession`: Exposes CRUD operations for the **AuthSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuthSessions
    * const authSessions = await prisma.authSession.findMany()
    * ```
    */
  get authSession(): Prisma.AuthSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.program`: Exposes CRUD operations for the **Program** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Programs
    * const programs = await prisma.program.findMany()
    * ```
    */
  get program(): Prisma.ProgramDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.material`: Exposes CRUD operations for the **Material** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Materials
    * const materials = await prisma.material.findMany()
    * ```
    */
  get material(): Prisma.MaterialDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sopDocument`: Exposes CRUD operations for the **SopDocument** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SopDocuments
    * const sopDocuments = await prisma.sopDocument.findMany()
    * ```
    */
  get sopDocument(): Prisma.SopDocumentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.programSop`: Exposes CRUD operations for the **ProgramSop** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProgramSops
    * const programSops = await prisma.programSop.findMany()
    * ```
    */
  get programSop(): Prisma.ProgramSopDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.evaluation`: Exposes CRUD operations for the **Evaluation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Evaluations
    * const evaluations = await prisma.evaluation.findMany()
    * ```
    */
  get evaluation(): Prisma.EvaluationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.question`: Exposes CRUD operations for the **Question** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questions
    * const questions = await prisma.question.findMany()
    * ```
    */
  get question(): Prisma.QuestionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attempt`: Exposes CRUD operations for the **Attempt** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attempts
    * const attempts = await prisma.attempt.findMany()
    * ```
    */
  get attempt(): Prisma.AttemptDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attemptAnswer`: Exposes CRUD operations for the **AttemptAnswer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AttemptAnswers
    * const attemptAnswers = await prisma.attemptAnswer.findMany()
    * ```
    */
  get attemptAnswer(): Prisma.AttemptAnswerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.programReview`: Exposes CRUD operations for the **ProgramReview** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProgramReviews
    * const programReviews = await prisma.programReview.findMany()
    * ```
    */
  get programReview(): Prisma.ProgramReviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.finding`: Exposes CRUD operations for the **Finding** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Findings
    * const findings = await prisma.finding.findMany()
    * ```
    */
  get finding(): Prisma.FindingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.setting`: Exposes CRUD operations for the **Setting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Settings
    * const settings = await prisma.setting.findMany()
    * ```
    */
  get setting(): Prisma.SettingDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.10.1
   * Query Engine version: d1b3f377ca835d73fd50954a5e22128b9ebdd6b8
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
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
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    InternalUser: 'InternalUser',
    AuthSession: 'AuthSession',
    Category: 'Category',
    Program: 'Program',
    Material: 'Material',
    SopDocument: 'SopDocument',
    ProgramSop: 'ProgramSop',
    Evaluation: 'Evaluation',
    Question: 'Question',
    Attempt: 'Attempt',
    AttemptAnswer: 'AttemptAnswer',
    ProgramReview: 'ProgramReview',
    Finding: 'Finding',
    Setting: 'Setting'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "internalUser" | "authSession" | "category" | "program" | "material" | "sopDocument" | "programSop" | "evaluation" | "question" | "attempt" | "attemptAnswer" | "programReview" | "finding" | "setting"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      InternalUser: {
        payload: Prisma.$InternalUserPayload<ExtArgs>
        fields: Prisma.InternalUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InternalUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternalUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InternalUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternalUserPayload>
          }
          findFirst: {
            args: Prisma.InternalUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternalUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InternalUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternalUserPayload>
          }
          findMany: {
            args: Prisma.InternalUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternalUserPayload>[]
          }
          create: {
            args: Prisma.InternalUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternalUserPayload>
          }
          createMany: {
            args: Prisma.InternalUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InternalUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternalUserPayload>[]
          }
          delete: {
            args: Prisma.InternalUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternalUserPayload>
          }
          update: {
            args: Prisma.InternalUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternalUserPayload>
          }
          deleteMany: {
            args: Prisma.InternalUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InternalUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InternalUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternalUserPayload>[]
          }
          upsert: {
            args: Prisma.InternalUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternalUserPayload>
          }
          aggregate: {
            args: Prisma.InternalUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInternalUser>
          }
          groupBy: {
            args: Prisma.InternalUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<InternalUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.InternalUserCountArgs<ExtArgs>
            result: $Utils.Optional<InternalUserCountAggregateOutputType> | number
          }
        }
      }
      AuthSession: {
        payload: Prisma.$AuthSessionPayload<ExtArgs>
        fields: Prisma.AuthSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuthSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuthSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthSessionPayload>
          }
          findFirst: {
            args: Prisma.AuthSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuthSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthSessionPayload>
          }
          findMany: {
            args: Prisma.AuthSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthSessionPayload>[]
          }
          create: {
            args: Prisma.AuthSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthSessionPayload>
          }
          createMany: {
            args: Prisma.AuthSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuthSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthSessionPayload>[]
          }
          delete: {
            args: Prisma.AuthSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthSessionPayload>
          }
          update: {
            args: Prisma.AuthSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthSessionPayload>
          }
          deleteMany: {
            args: Prisma.AuthSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuthSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuthSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthSessionPayload>[]
          }
          upsert: {
            args: Prisma.AuthSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthSessionPayload>
          }
          aggregate: {
            args: Prisma.AuthSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuthSession>
          }
          groupBy: {
            args: Prisma.AuthSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuthSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuthSessionCountArgs<ExtArgs>
            result: $Utils.Optional<AuthSessionCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Program: {
        payload: Prisma.$ProgramPayload<ExtArgs>
        fields: Prisma.ProgramFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProgramFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProgramFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>
          }
          findFirst: {
            args: Prisma.ProgramFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProgramFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>
          }
          findMany: {
            args: Prisma.ProgramFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>[]
          }
          create: {
            args: Prisma.ProgramCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>
          }
          createMany: {
            args: Prisma.ProgramCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProgramCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>[]
          }
          delete: {
            args: Prisma.ProgramDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>
          }
          update: {
            args: Prisma.ProgramUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>
          }
          deleteMany: {
            args: Prisma.ProgramDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProgramUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProgramUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>[]
          }
          upsert: {
            args: Prisma.ProgramUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>
          }
          aggregate: {
            args: Prisma.ProgramAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProgram>
          }
          groupBy: {
            args: Prisma.ProgramGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProgramGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProgramCountArgs<ExtArgs>
            result: $Utils.Optional<ProgramCountAggregateOutputType> | number
          }
        }
      }
      Material: {
        payload: Prisma.$MaterialPayload<ExtArgs>
        fields: Prisma.MaterialFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MaterialFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MaterialFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          findFirst: {
            args: Prisma.MaterialFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MaterialFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          findMany: {
            args: Prisma.MaterialFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>[]
          }
          create: {
            args: Prisma.MaterialCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          createMany: {
            args: Prisma.MaterialCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MaterialCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>[]
          }
          delete: {
            args: Prisma.MaterialDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          update: {
            args: Prisma.MaterialUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          deleteMany: {
            args: Prisma.MaterialDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MaterialUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MaterialUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>[]
          }
          upsert: {
            args: Prisma.MaterialUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          aggregate: {
            args: Prisma.MaterialAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMaterial>
          }
          groupBy: {
            args: Prisma.MaterialGroupByArgs<ExtArgs>
            result: $Utils.Optional<MaterialGroupByOutputType>[]
          }
          count: {
            args: Prisma.MaterialCountArgs<ExtArgs>
            result: $Utils.Optional<MaterialCountAggregateOutputType> | number
          }
        }
      }
      SopDocument: {
        payload: Prisma.$SopDocumentPayload<ExtArgs>
        fields: Prisma.SopDocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SopDocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SopDocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SopDocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SopDocumentPayload>
          }
          findFirst: {
            args: Prisma.SopDocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SopDocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SopDocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SopDocumentPayload>
          }
          findMany: {
            args: Prisma.SopDocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SopDocumentPayload>[]
          }
          create: {
            args: Prisma.SopDocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SopDocumentPayload>
          }
          createMany: {
            args: Prisma.SopDocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SopDocumentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SopDocumentPayload>[]
          }
          delete: {
            args: Prisma.SopDocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SopDocumentPayload>
          }
          update: {
            args: Prisma.SopDocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SopDocumentPayload>
          }
          deleteMany: {
            args: Prisma.SopDocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SopDocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SopDocumentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SopDocumentPayload>[]
          }
          upsert: {
            args: Prisma.SopDocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SopDocumentPayload>
          }
          aggregate: {
            args: Prisma.SopDocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSopDocument>
          }
          groupBy: {
            args: Prisma.SopDocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<SopDocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.SopDocumentCountArgs<ExtArgs>
            result: $Utils.Optional<SopDocumentCountAggregateOutputType> | number
          }
        }
      }
      ProgramSop: {
        payload: Prisma.$ProgramSopPayload<ExtArgs>
        fields: Prisma.ProgramSopFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProgramSopFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramSopPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProgramSopFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramSopPayload>
          }
          findFirst: {
            args: Prisma.ProgramSopFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramSopPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProgramSopFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramSopPayload>
          }
          findMany: {
            args: Prisma.ProgramSopFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramSopPayload>[]
          }
          create: {
            args: Prisma.ProgramSopCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramSopPayload>
          }
          createMany: {
            args: Prisma.ProgramSopCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProgramSopCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramSopPayload>[]
          }
          delete: {
            args: Prisma.ProgramSopDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramSopPayload>
          }
          update: {
            args: Prisma.ProgramSopUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramSopPayload>
          }
          deleteMany: {
            args: Prisma.ProgramSopDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProgramSopUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProgramSopUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramSopPayload>[]
          }
          upsert: {
            args: Prisma.ProgramSopUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramSopPayload>
          }
          aggregate: {
            args: Prisma.ProgramSopAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProgramSop>
          }
          groupBy: {
            args: Prisma.ProgramSopGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProgramSopGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProgramSopCountArgs<ExtArgs>
            result: $Utils.Optional<ProgramSopCountAggregateOutputType> | number
          }
        }
      }
      Evaluation: {
        payload: Prisma.$EvaluationPayload<ExtArgs>
        fields: Prisma.EvaluationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EvaluationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EvaluationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationPayload>
          }
          findFirst: {
            args: Prisma.EvaluationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EvaluationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationPayload>
          }
          findMany: {
            args: Prisma.EvaluationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationPayload>[]
          }
          create: {
            args: Prisma.EvaluationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationPayload>
          }
          createMany: {
            args: Prisma.EvaluationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EvaluationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationPayload>[]
          }
          delete: {
            args: Prisma.EvaluationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationPayload>
          }
          update: {
            args: Prisma.EvaluationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationPayload>
          }
          deleteMany: {
            args: Prisma.EvaluationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EvaluationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EvaluationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationPayload>[]
          }
          upsert: {
            args: Prisma.EvaluationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationPayload>
          }
          aggregate: {
            args: Prisma.EvaluationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvaluation>
          }
          groupBy: {
            args: Prisma.EvaluationGroupByArgs<ExtArgs>
            result: $Utils.Optional<EvaluationGroupByOutputType>[]
          }
          count: {
            args: Prisma.EvaluationCountArgs<ExtArgs>
            result: $Utils.Optional<EvaluationCountAggregateOutputType> | number
          }
        }
      }
      Question: {
        payload: Prisma.$QuestionPayload<ExtArgs>
        fields: Prisma.QuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findFirst: {
            args: Prisma.QuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findMany: {
            args: Prisma.QuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          create: {
            args: Prisma.QuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          createMany: {
            args: Prisma.QuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          delete: {
            args: Prisma.QuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          update: {
            args: Prisma.QuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          deleteMany: {
            args: Prisma.QuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuestionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          upsert: {
            args: Prisma.QuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          aggregate: {
            args: Prisma.QuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestion>
          }
          groupBy: {
            args: Prisma.QuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionCountAggregateOutputType> | number
          }
        }
      }
      Attempt: {
        payload: Prisma.$AttemptPayload<ExtArgs>
        fields: Prisma.AttemptFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttemptFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttemptPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttemptFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttemptPayload>
          }
          findFirst: {
            args: Prisma.AttemptFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttemptPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttemptFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttemptPayload>
          }
          findMany: {
            args: Prisma.AttemptFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttemptPayload>[]
          }
          create: {
            args: Prisma.AttemptCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttemptPayload>
          }
          createMany: {
            args: Prisma.AttemptCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AttemptCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttemptPayload>[]
          }
          delete: {
            args: Prisma.AttemptDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttemptPayload>
          }
          update: {
            args: Prisma.AttemptUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttemptPayload>
          }
          deleteMany: {
            args: Prisma.AttemptDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttemptUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AttemptUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttemptPayload>[]
          }
          upsert: {
            args: Prisma.AttemptUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttemptPayload>
          }
          aggregate: {
            args: Prisma.AttemptAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttempt>
          }
          groupBy: {
            args: Prisma.AttemptGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttemptGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttemptCountArgs<ExtArgs>
            result: $Utils.Optional<AttemptCountAggregateOutputType> | number
          }
        }
      }
      AttemptAnswer: {
        payload: Prisma.$AttemptAnswerPayload<ExtArgs>
        fields: Prisma.AttemptAnswerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttemptAnswerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttemptAnswerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttemptAnswerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttemptAnswerPayload>
          }
          findFirst: {
            args: Prisma.AttemptAnswerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttemptAnswerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttemptAnswerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttemptAnswerPayload>
          }
          findMany: {
            args: Prisma.AttemptAnswerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttemptAnswerPayload>[]
          }
          create: {
            args: Prisma.AttemptAnswerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttemptAnswerPayload>
          }
          createMany: {
            args: Prisma.AttemptAnswerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AttemptAnswerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttemptAnswerPayload>[]
          }
          delete: {
            args: Prisma.AttemptAnswerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttemptAnswerPayload>
          }
          update: {
            args: Prisma.AttemptAnswerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttemptAnswerPayload>
          }
          deleteMany: {
            args: Prisma.AttemptAnswerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttemptAnswerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AttemptAnswerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttemptAnswerPayload>[]
          }
          upsert: {
            args: Prisma.AttemptAnswerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttemptAnswerPayload>
          }
          aggregate: {
            args: Prisma.AttemptAnswerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttemptAnswer>
          }
          groupBy: {
            args: Prisma.AttemptAnswerGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttemptAnswerGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttemptAnswerCountArgs<ExtArgs>
            result: $Utils.Optional<AttemptAnswerCountAggregateOutputType> | number
          }
        }
      }
      ProgramReview: {
        payload: Prisma.$ProgramReviewPayload<ExtArgs>
        fields: Prisma.ProgramReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProgramReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProgramReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramReviewPayload>
          }
          findFirst: {
            args: Prisma.ProgramReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProgramReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramReviewPayload>
          }
          findMany: {
            args: Prisma.ProgramReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramReviewPayload>[]
          }
          create: {
            args: Prisma.ProgramReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramReviewPayload>
          }
          createMany: {
            args: Prisma.ProgramReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProgramReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramReviewPayload>[]
          }
          delete: {
            args: Prisma.ProgramReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramReviewPayload>
          }
          update: {
            args: Prisma.ProgramReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramReviewPayload>
          }
          deleteMany: {
            args: Prisma.ProgramReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProgramReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProgramReviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramReviewPayload>[]
          }
          upsert: {
            args: Prisma.ProgramReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramReviewPayload>
          }
          aggregate: {
            args: Prisma.ProgramReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProgramReview>
          }
          groupBy: {
            args: Prisma.ProgramReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProgramReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProgramReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ProgramReviewCountAggregateOutputType> | number
          }
        }
      }
      Finding: {
        payload: Prisma.$FindingPayload<ExtArgs>
        fields: Prisma.FindingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FindingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FindingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FindingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FindingPayload>
          }
          findFirst: {
            args: Prisma.FindingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FindingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FindingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FindingPayload>
          }
          findMany: {
            args: Prisma.FindingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FindingPayload>[]
          }
          create: {
            args: Prisma.FindingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FindingPayload>
          }
          createMany: {
            args: Prisma.FindingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FindingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FindingPayload>[]
          }
          delete: {
            args: Prisma.FindingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FindingPayload>
          }
          update: {
            args: Prisma.FindingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FindingPayload>
          }
          deleteMany: {
            args: Prisma.FindingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FindingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FindingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FindingPayload>[]
          }
          upsert: {
            args: Prisma.FindingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FindingPayload>
          }
          aggregate: {
            args: Prisma.FindingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFinding>
          }
          groupBy: {
            args: Prisma.FindingGroupByArgs<ExtArgs>
            result: $Utils.Optional<FindingGroupByOutputType>[]
          }
          count: {
            args: Prisma.FindingCountArgs<ExtArgs>
            result: $Utils.Optional<FindingCountAggregateOutputType> | number
          }
        }
      }
      Setting: {
        payload: Prisma.$SettingPayload<ExtArgs>
        fields: Prisma.SettingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SettingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SettingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          findFirst: {
            args: Prisma.SettingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SettingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          findMany: {
            args: Prisma.SettingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>[]
          }
          create: {
            args: Prisma.SettingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          createMany: {
            args: Prisma.SettingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SettingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>[]
          }
          delete: {
            args: Prisma.SettingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          update: {
            args: Prisma.SettingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          deleteMany: {
            args: Prisma.SettingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SettingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SettingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>[]
          }
          upsert: {
            args: Prisma.SettingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          aggregate: {
            args: Prisma.SettingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSetting>
          }
          groupBy: {
            args: Prisma.SettingGroupByArgs<ExtArgs>
            result: $Utils.Optional<SettingGroupByOutputType>[]
          }
          count: {
            args: Prisma.SettingCountArgs<ExtArgs>
            result: $Utils.Optional<SettingCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
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
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    internalUser?: InternalUserOmit
    authSession?: AuthSessionOmit
    category?: CategoryOmit
    program?: ProgramOmit
    material?: MaterialOmit
    sopDocument?: SopDocumentOmit
    programSop?: ProgramSopOmit
    evaluation?: EvaluationOmit
    question?: QuestionOmit
    attempt?: AttemptOmit
    attemptAnswer?: AttemptAnswerOmit
    programReview?: ProgramReviewOmit
    finding?: FindingOmit
    setting?: SettingOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type InternalUserCountOutputType
   */

  export type InternalUserCountOutputType = {
    sessions: number
    findings: number
  }

  export type InternalUserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | InternalUserCountOutputTypeCountSessionsArgs
    findings?: boolean | InternalUserCountOutputTypeCountFindingsArgs
  }

  // Custom InputTypes
  /**
   * InternalUserCountOutputType without action
   */
  export type InternalUserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InternalUserCountOutputType
     */
    select?: InternalUserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InternalUserCountOutputType without action
   */
  export type InternalUserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthSessionWhereInput
  }

  /**
   * InternalUserCountOutputType without action
   */
  export type InternalUserCountOutputTypeCountFindingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FindingWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    programs: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    programs?: boolean | CategoryCountOutputTypeCountProgramsArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountProgramsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgramWhereInput
  }


  /**
   * Count Type ProgramCountOutputType
   */

  export type ProgramCountOutputType = {
    materials: number
    evaluations: number
    reviews: number
    programSops: number
  }

  export type ProgramCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    materials?: boolean | ProgramCountOutputTypeCountMaterialsArgs
    evaluations?: boolean | ProgramCountOutputTypeCountEvaluationsArgs
    reviews?: boolean | ProgramCountOutputTypeCountReviewsArgs
    programSops?: boolean | ProgramCountOutputTypeCountProgramSopsArgs
  }

  // Custom InputTypes
  /**
   * ProgramCountOutputType without action
   */
  export type ProgramCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramCountOutputType
     */
    select?: ProgramCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProgramCountOutputType without action
   */
  export type ProgramCountOutputTypeCountMaterialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaterialWhereInput
  }

  /**
   * ProgramCountOutputType without action
   */
  export type ProgramCountOutputTypeCountEvaluationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EvaluationWhereInput
  }

  /**
   * ProgramCountOutputType without action
   */
  export type ProgramCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgramReviewWhereInput
  }

  /**
   * ProgramCountOutputType without action
   */
  export type ProgramCountOutputTypeCountProgramSopsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgramSopWhereInput
  }


  /**
   * Count Type SopDocumentCountOutputType
   */

  export type SopDocumentCountOutputType = {
    programSops: number
  }

  export type SopDocumentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    programSops?: boolean | SopDocumentCountOutputTypeCountProgramSopsArgs
  }

  // Custom InputTypes
  /**
   * SopDocumentCountOutputType without action
   */
  export type SopDocumentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SopDocumentCountOutputType
     */
    select?: SopDocumentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SopDocumentCountOutputType without action
   */
  export type SopDocumentCountOutputTypeCountProgramSopsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgramSopWhereInput
  }


  /**
   * Count Type EvaluationCountOutputType
   */

  export type EvaluationCountOutputType = {
    questions: number
    attempts: number
  }

  export type EvaluationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | EvaluationCountOutputTypeCountQuestionsArgs
    attempts?: boolean | EvaluationCountOutputTypeCountAttemptsArgs
  }

  // Custom InputTypes
  /**
   * EvaluationCountOutputType without action
   */
  export type EvaluationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvaluationCountOutputType
     */
    select?: EvaluationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EvaluationCountOutputType without action
   */
  export type EvaluationCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
  }

  /**
   * EvaluationCountOutputType without action
   */
  export type EvaluationCountOutputTypeCountAttemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttemptWhereInput
  }


  /**
   * Count Type QuestionCountOutputType
   */

  export type QuestionCountOutputType = {
    attemptAnswers: number
  }

  export type QuestionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attemptAnswers?: boolean | QuestionCountOutputTypeCountAttemptAnswersArgs
  }

  // Custom InputTypes
  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionCountOutputType
     */
    select?: QuestionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountAttemptAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttemptAnswerWhereInput
  }


  /**
   * Count Type AttemptCountOutputType
   */

  export type AttemptCountOutputType = {
    answers: number
  }

  export type AttemptCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answers?: boolean | AttemptCountOutputTypeCountAnswersArgs
  }

  // Custom InputTypes
  /**
   * AttemptCountOutputType without action
   */
  export type AttemptCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttemptCountOutputType
     */
    select?: AttemptCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AttemptCountOutputType without action
   */
  export type AttemptCountOutputTypeCountAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttemptAnswerWhereInput
  }


  /**
   * Models
   */

  /**
   * Model InternalUser
   */

  export type AggregateInternalUser = {
    _count: InternalUserCountAggregateOutputType | null
    _avg: InternalUserAvgAggregateOutputType | null
    _sum: InternalUserSumAggregateOutputType | null
    _min: InternalUserMinAggregateOutputType | null
    _max: InternalUserMaxAggregateOutputType | null
  }

  export type InternalUserAvgAggregateOutputType = {
    id: number | null
  }

  export type InternalUserSumAggregateOutputType = {
    id: number | null
  }

  export type InternalUserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    passwordHash: string | null
    role: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InternalUserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    passwordHash: string | null
    role: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InternalUserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    passwordHash: number
    role: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InternalUserAvgAggregateInputType = {
    id?: true
  }

  export type InternalUserSumAggregateInputType = {
    id?: true
  }

  export type InternalUserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InternalUserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InternalUserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InternalUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InternalUser to aggregate.
     */
    where?: InternalUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InternalUsers to fetch.
     */
    orderBy?: InternalUserOrderByWithRelationInput | InternalUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InternalUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InternalUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InternalUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InternalUsers
    **/
    _count?: true | InternalUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InternalUserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InternalUserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InternalUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InternalUserMaxAggregateInputType
  }

  export type GetInternalUserAggregateType<T extends InternalUserAggregateArgs> = {
        [P in keyof T & keyof AggregateInternalUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInternalUser[P]>
      : GetScalarType<T[P], AggregateInternalUser[P]>
  }




  export type InternalUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InternalUserWhereInput
    orderBy?: InternalUserOrderByWithAggregationInput | InternalUserOrderByWithAggregationInput[]
    by: InternalUserScalarFieldEnum[] | InternalUserScalarFieldEnum
    having?: InternalUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InternalUserCountAggregateInputType | true
    _avg?: InternalUserAvgAggregateInputType
    _sum?: InternalUserSumAggregateInputType
    _min?: InternalUserMinAggregateInputType
    _max?: InternalUserMaxAggregateInputType
  }

  export type InternalUserGroupByOutputType = {
    id: number
    name: string
    email: string
    passwordHash: string
    role: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: InternalUserCountAggregateOutputType | null
    _avg: InternalUserAvgAggregateOutputType | null
    _sum: InternalUserSumAggregateOutputType | null
    _min: InternalUserMinAggregateOutputType | null
    _max: InternalUserMaxAggregateOutputType | null
  }

  type GetInternalUserGroupByPayload<T extends InternalUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InternalUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InternalUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InternalUserGroupByOutputType[P]>
            : GetScalarType<T[P], InternalUserGroupByOutputType[P]>
        }
      >
    >


  export type InternalUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sessions?: boolean | InternalUser$sessionsArgs<ExtArgs>
    findings?: boolean | InternalUser$findingsArgs<ExtArgs>
    _count?: boolean | InternalUserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["internalUser"]>

  export type InternalUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["internalUser"]>

  export type InternalUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["internalUser"]>

  export type InternalUserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InternalUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "passwordHash" | "role" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["internalUser"]>
  export type InternalUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | InternalUser$sessionsArgs<ExtArgs>
    findings?: boolean | InternalUser$findingsArgs<ExtArgs>
    _count?: boolean | InternalUserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InternalUserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type InternalUserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $InternalUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InternalUser"
    objects: {
      sessions: Prisma.$AuthSessionPayload<ExtArgs>[]
      findings: Prisma.$FindingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      passwordHash: string
      role: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["internalUser"]>
    composites: {}
  }

  type InternalUserGetPayload<S extends boolean | null | undefined | InternalUserDefaultArgs> = $Result.GetResult<Prisma.$InternalUserPayload, S>

  type InternalUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InternalUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InternalUserCountAggregateInputType | true
    }

  export interface InternalUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InternalUser'], meta: { name: 'InternalUser' } }
    /**
     * Find zero or one InternalUser that matches the filter.
     * @param {InternalUserFindUniqueArgs} args - Arguments to find a InternalUser
     * @example
     * // Get one InternalUser
     * const internalUser = await prisma.internalUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InternalUserFindUniqueArgs>(args: SelectSubset<T, InternalUserFindUniqueArgs<ExtArgs>>): Prisma__InternalUserClient<$Result.GetResult<Prisma.$InternalUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InternalUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InternalUserFindUniqueOrThrowArgs} args - Arguments to find a InternalUser
     * @example
     * // Get one InternalUser
     * const internalUser = await prisma.internalUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InternalUserFindUniqueOrThrowArgs>(args: SelectSubset<T, InternalUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InternalUserClient<$Result.GetResult<Prisma.$InternalUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InternalUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InternalUserFindFirstArgs} args - Arguments to find a InternalUser
     * @example
     * // Get one InternalUser
     * const internalUser = await prisma.internalUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InternalUserFindFirstArgs>(args?: SelectSubset<T, InternalUserFindFirstArgs<ExtArgs>>): Prisma__InternalUserClient<$Result.GetResult<Prisma.$InternalUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InternalUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InternalUserFindFirstOrThrowArgs} args - Arguments to find a InternalUser
     * @example
     * // Get one InternalUser
     * const internalUser = await prisma.internalUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InternalUserFindFirstOrThrowArgs>(args?: SelectSubset<T, InternalUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__InternalUserClient<$Result.GetResult<Prisma.$InternalUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InternalUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InternalUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InternalUsers
     * const internalUsers = await prisma.internalUser.findMany()
     * 
     * // Get first 10 InternalUsers
     * const internalUsers = await prisma.internalUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const internalUserWithIdOnly = await prisma.internalUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InternalUserFindManyArgs>(args?: SelectSubset<T, InternalUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InternalUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InternalUser.
     * @param {InternalUserCreateArgs} args - Arguments to create a InternalUser.
     * @example
     * // Create one InternalUser
     * const InternalUser = await prisma.internalUser.create({
     *   data: {
     *     // ... data to create a InternalUser
     *   }
     * })
     * 
     */
    create<T extends InternalUserCreateArgs>(args: SelectSubset<T, InternalUserCreateArgs<ExtArgs>>): Prisma__InternalUserClient<$Result.GetResult<Prisma.$InternalUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InternalUsers.
     * @param {InternalUserCreateManyArgs} args - Arguments to create many InternalUsers.
     * @example
     * // Create many InternalUsers
     * const internalUser = await prisma.internalUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InternalUserCreateManyArgs>(args?: SelectSubset<T, InternalUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InternalUsers and returns the data saved in the database.
     * @param {InternalUserCreateManyAndReturnArgs} args - Arguments to create many InternalUsers.
     * @example
     * // Create many InternalUsers
     * const internalUser = await prisma.internalUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InternalUsers and only return the `id`
     * const internalUserWithIdOnly = await prisma.internalUser.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InternalUserCreateManyAndReturnArgs>(args?: SelectSubset<T, InternalUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InternalUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InternalUser.
     * @param {InternalUserDeleteArgs} args - Arguments to delete one InternalUser.
     * @example
     * // Delete one InternalUser
     * const InternalUser = await prisma.internalUser.delete({
     *   where: {
     *     // ... filter to delete one InternalUser
     *   }
     * })
     * 
     */
    delete<T extends InternalUserDeleteArgs>(args: SelectSubset<T, InternalUserDeleteArgs<ExtArgs>>): Prisma__InternalUserClient<$Result.GetResult<Prisma.$InternalUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InternalUser.
     * @param {InternalUserUpdateArgs} args - Arguments to update one InternalUser.
     * @example
     * // Update one InternalUser
     * const internalUser = await prisma.internalUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InternalUserUpdateArgs>(args: SelectSubset<T, InternalUserUpdateArgs<ExtArgs>>): Prisma__InternalUserClient<$Result.GetResult<Prisma.$InternalUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InternalUsers.
     * @param {InternalUserDeleteManyArgs} args - Arguments to filter InternalUsers to delete.
     * @example
     * // Delete a few InternalUsers
     * const { count } = await prisma.internalUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InternalUserDeleteManyArgs>(args?: SelectSubset<T, InternalUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InternalUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InternalUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InternalUsers
     * const internalUser = await prisma.internalUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InternalUserUpdateManyArgs>(args: SelectSubset<T, InternalUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InternalUsers and returns the data updated in the database.
     * @param {InternalUserUpdateManyAndReturnArgs} args - Arguments to update many InternalUsers.
     * @example
     * // Update many InternalUsers
     * const internalUser = await prisma.internalUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InternalUsers and only return the `id`
     * const internalUserWithIdOnly = await prisma.internalUser.updateManyAndReturn({
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
    updateManyAndReturn<T extends InternalUserUpdateManyAndReturnArgs>(args: SelectSubset<T, InternalUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InternalUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InternalUser.
     * @param {InternalUserUpsertArgs} args - Arguments to update or create a InternalUser.
     * @example
     * // Update or create a InternalUser
     * const internalUser = await prisma.internalUser.upsert({
     *   create: {
     *     // ... data to create a InternalUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InternalUser we want to update
     *   }
     * })
     */
    upsert<T extends InternalUserUpsertArgs>(args: SelectSubset<T, InternalUserUpsertArgs<ExtArgs>>): Prisma__InternalUserClient<$Result.GetResult<Prisma.$InternalUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InternalUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InternalUserCountArgs} args - Arguments to filter InternalUsers to count.
     * @example
     * // Count the number of InternalUsers
     * const count = await prisma.internalUser.count({
     *   where: {
     *     // ... the filter for the InternalUsers we want to count
     *   }
     * })
    **/
    count<T extends InternalUserCountArgs>(
      args?: Subset<T, InternalUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InternalUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InternalUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InternalUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InternalUserAggregateArgs>(args: Subset<T, InternalUserAggregateArgs>): Prisma.PrismaPromise<GetInternalUserAggregateType<T>>

    /**
     * Group by InternalUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InternalUserGroupByArgs} args - Group by arguments.
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
      T extends InternalUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InternalUserGroupByArgs['orderBy'] }
        : { orderBy?: InternalUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InternalUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInternalUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InternalUser model
   */
  readonly fields: InternalUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InternalUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InternalUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sessions<T extends InternalUser$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, InternalUser$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    findings<T extends InternalUser$findingsArgs<ExtArgs> = {}>(args?: Subset<T, InternalUser$findingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FindingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InternalUser model
   */
  interface InternalUserFieldRefs {
    readonly id: FieldRef<"InternalUser", 'Int'>
    readonly name: FieldRef<"InternalUser", 'String'>
    readonly email: FieldRef<"InternalUser", 'String'>
    readonly passwordHash: FieldRef<"InternalUser", 'String'>
    readonly role: FieldRef<"InternalUser", 'String'>
    readonly isActive: FieldRef<"InternalUser", 'Boolean'>
    readonly createdAt: FieldRef<"InternalUser", 'DateTime'>
    readonly updatedAt: FieldRef<"InternalUser", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InternalUser findUnique
   */
  export type InternalUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InternalUser
     */
    select?: InternalUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InternalUser
     */
    omit?: InternalUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InternalUserInclude<ExtArgs> | null
    /**
     * Filter, which InternalUser to fetch.
     */
    where: InternalUserWhereUniqueInput
  }

  /**
   * InternalUser findUniqueOrThrow
   */
  export type InternalUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InternalUser
     */
    select?: InternalUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InternalUser
     */
    omit?: InternalUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InternalUserInclude<ExtArgs> | null
    /**
     * Filter, which InternalUser to fetch.
     */
    where: InternalUserWhereUniqueInput
  }

  /**
   * InternalUser findFirst
   */
  export type InternalUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InternalUser
     */
    select?: InternalUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InternalUser
     */
    omit?: InternalUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InternalUserInclude<ExtArgs> | null
    /**
     * Filter, which InternalUser to fetch.
     */
    where?: InternalUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InternalUsers to fetch.
     */
    orderBy?: InternalUserOrderByWithRelationInput | InternalUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InternalUsers.
     */
    cursor?: InternalUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InternalUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InternalUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InternalUsers.
     */
    distinct?: InternalUserScalarFieldEnum | InternalUserScalarFieldEnum[]
  }

  /**
   * InternalUser findFirstOrThrow
   */
  export type InternalUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InternalUser
     */
    select?: InternalUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InternalUser
     */
    omit?: InternalUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InternalUserInclude<ExtArgs> | null
    /**
     * Filter, which InternalUser to fetch.
     */
    where?: InternalUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InternalUsers to fetch.
     */
    orderBy?: InternalUserOrderByWithRelationInput | InternalUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InternalUsers.
     */
    cursor?: InternalUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InternalUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InternalUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InternalUsers.
     */
    distinct?: InternalUserScalarFieldEnum | InternalUserScalarFieldEnum[]
  }

  /**
   * InternalUser findMany
   */
  export type InternalUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InternalUser
     */
    select?: InternalUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InternalUser
     */
    omit?: InternalUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InternalUserInclude<ExtArgs> | null
    /**
     * Filter, which InternalUsers to fetch.
     */
    where?: InternalUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InternalUsers to fetch.
     */
    orderBy?: InternalUserOrderByWithRelationInput | InternalUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InternalUsers.
     */
    cursor?: InternalUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InternalUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InternalUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InternalUsers.
     */
    distinct?: InternalUserScalarFieldEnum | InternalUserScalarFieldEnum[]
  }

  /**
   * InternalUser create
   */
  export type InternalUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InternalUser
     */
    select?: InternalUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InternalUser
     */
    omit?: InternalUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InternalUserInclude<ExtArgs> | null
    /**
     * The data needed to create a InternalUser.
     */
    data: XOR<InternalUserCreateInput, InternalUserUncheckedCreateInput>
  }

  /**
   * InternalUser createMany
   */
  export type InternalUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InternalUsers.
     */
    data: InternalUserCreateManyInput | InternalUserCreateManyInput[]
  }

  /**
   * InternalUser createManyAndReturn
   */
  export type InternalUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InternalUser
     */
    select?: InternalUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InternalUser
     */
    omit?: InternalUserOmit<ExtArgs> | null
    /**
     * The data used to create many InternalUsers.
     */
    data: InternalUserCreateManyInput | InternalUserCreateManyInput[]
  }

  /**
   * InternalUser update
   */
  export type InternalUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InternalUser
     */
    select?: InternalUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InternalUser
     */
    omit?: InternalUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InternalUserInclude<ExtArgs> | null
    /**
     * The data needed to update a InternalUser.
     */
    data: XOR<InternalUserUpdateInput, InternalUserUncheckedUpdateInput>
    /**
     * Choose, which InternalUser to update.
     */
    where: InternalUserWhereUniqueInput
  }

  /**
   * InternalUser updateMany
   */
  export type InternalUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InternalUsers.
     */
    data: XOR<InternalUserUpdateManyMutationInput, InternalUserUncheckedUpdateManyInput>
    /**
     * Filter which InternalUsers to update
     */
    where?: InternalUserWhereInput
    /**
     * Limit how many InternalUsers to update.
     */
    limit?: number
  }

  /**
   * InternalUser updateManyAndReturn
   */
  export type InternalUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InternalUser
     */
    select?: InternalUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InternalUser
     */
    omit?: InternalUserOmit<ExtArgs> | null
    /**
     * The data used to update InternalUsers.
     */
    data: XOR<InternalUserUpdateManyMutationInput, InternalUserUncheckedUpdateManyInput>
    /**
     * Filter which InternalUsers to update
     */
    where?: InternalUserWhereInput
    /**
     * Limit how many InternalUsers to update.
     */
    limit?: number
  }

  /**
   * InternalUser upsert
   */
  export type InternalUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InternalUser
     */
    select?: InternalUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InternalUser
     */
    omit?: InternalUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InternalUserInclude<ExtArgs> | null
    /**
     * The filter to search for the InternalUser to update in case it exists.
     */
    where: InternalUserWhereUniqueInput
    /**
     * In case the InternalUser found by the `where` argument doesn't exist, create a new InternalUser with this data.
     */
    create: XOR<InternalUserCreateInput, InternalUserUncheckedCreateInput>
    /**
     * In case the InternalUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InternalUserUpdateInput, InternalUserUncheckedUpdateInput>
  }

  /**
   * InternalUser delete
   */
  export type InternalUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InternalUser
     */
    select?: InternalUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InternalUser
     */
    omit?: InternalUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InternalUserInclude<ExtArgs> | null
    /**
     * Filter which InternalUser to delete.
     */
    where: InternalUserWhereUniqueInput
  }

  /**
   * InternalUser deleteMany
   */
  export type InternalUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InternalUsers to delete
     */
    where?: InternalUserWhereInput
    /**
     * Limit how many InternalUsers to delete.
     */
    limit?: number
  }

  /**
   * InternalUser.sessions
   */
  export type InternalUser$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthSession
     */
    omit?: AuthSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthSessionInclude<ExtArgs> | null
    where?: AuthSessionWhereInput
    orderBy?: AuthSessionOrderByWithRelationInput | AuthSessionOrderByWithRelationInput[]
    cursor?: AuthSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuthSessionScalarFieldEnum | AuthSessionScalarFieldEnum[]
  }

  /**
   * InternalUser.findings
   */
  export type InternalUser$findingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finding
     */
    select?: FindingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Finding
     */
    omit?: FindingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FindingInclude<ExtArgs> | null
    where?: FindingWhereInput
    orderBy?: FindingOrderByWithRelationInput | FindingOrderByWithRelationInput[]
    cursor?: FindingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FindingScalarFieldEnum | FindingScalarFieldEnum[]
  }

  /**
   * InternalUser without action
   */
  export type InternalUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InternalUser
     */
    select?: InternalUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InternalUser
     */
    omit?: InternalUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InternalUserInclude<ExtArgs> | null
  }


  /**
   * Model AuthSession
   */

  export type AggregateAuthSession = {
    _count: AuthSessionCountAggregateOutputType | null
    _avg: AuthSessionAvgAggregateOutputType | null
    _sum: AuthSessionSumAggregateOutputType | null
    _min: AuthSessionMinAggregateOutputType | null
    _max: AuthSessionMaxAggregateOutputType | null
  }

  export type AuthSessionAvgAggregateOutputType = {
    userId: number | null
  }

  export type AuthSessionSumAggregateOutputType = {
    userId: number | null
  }

  export type AuthSessionMinAggregateOutputType = {
    id: string | null
    userId: number | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type AuthSessionMaxAggregateOutputType = {
    id: string | null
    userId: number | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type AuthSessionCountAggregateOutputType = {
    id: number
    userId: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type AuthSessionAvgAggregateInputType = {
    userId?: true
  }

  export type AuthSessionSumAggregateInputType = {
    userId?: true
  }

  export type AuthSessionMinAggregateInputType = {
    id?: true
    userId?: true
    expiresAt?: true
    createdAt?: true
  }

  export type AuthSessionMaxAggregateInputType = {
    id?: true
    userId?: true
    expiresAt?: true
    createdAt?: true
  }

  export type AuthSessionCountAggregateInputType = {
    id?: true
    userId?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type AuthSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuthSession to aggregate.
     */
    where?: AuthSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthSessions to fetch.
     */
    orderBy?: AuthSessionOrderByWithRelationInput | AuthSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuthSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuthSessions
    **/
    _count?: true | AuthSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuthSessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuthSessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthSessionMaxAggregateInputType
  }

  export type GetAuthSessionAggregateType<T extends AuthSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthSession[P]>
      : GetScalarType<T[P], AggregateAuthSession[P]>
  }




  export type AuthSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthSessionWhereInput
    orderBy?: AuthSessionOrderByWithAggregationInput | AuthSessionOrderByWithAggregationInput[]
    by: AuthSessionScalarFieldEnum[] | AuthSessionScalarFieldEnum
    having?: AuthSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthSessionCountAggregateInputType | true
    _avg?: AuthSessionAvgAggregateInputType
    _sum?: AuthSessionSumAggregateInputType
    _min?: AuthSessionMinAggregateInputType
    _max?: AuthSessionMaxAggregateInputType
  }

  export type AuthSessionGroupByOutputType = {
    id: string
    userId: number
    expiresAt: Date
    createdAt: Date
    _count: AuthSessionCountAggregateOutputType | null
    _avg: AuthSessionAvgAggregateOutputType | null
    _sum: AuthSessionSumAggregateOutputType | null
    _min: AuthSessionMinAggregateOutputType | null
    _max: AuthSessionMaxAggregateOutputType | null
  }

  type GetAuthSessionGroupByPayload<T extends AuthSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuthSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthSessionGroupByOutputType[P]>
            : GetScalarType<T[P], AuthSessionGroupByOutputType[P]>
        }
      >
    >


  export type AuthSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | InternalUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authSession"]>

  export type AuthSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | InternalUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authSession"]>

  export type AuthSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | InternalUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authSession"]>

  export type AuthSessionSelectScalar = {
    id?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type AuthSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "expiresAt" | "createdAt", ExtArgs["result"]["authSession"]>
  export type AuthSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | InternalUserDefaultArgs<ExtArgs>
  }
  export type AuthSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | InternalUserDefaultArgs<ExtArgs>
  }
  export type AuthSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | InternalUserDefaultArgs<ExtArgs>
  }

  export type $AuthSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuthSession"
    objects: {
      user: Prisma.$InternalUserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: number
      expiresAt: Date
      createdAt: Date
    }, ExtArgs["result"]["authSession"]>
    composites: {}
  }

  type AuthSessionGetPayload<S extends boolean | null | undefined | AuthSessionDefaultArgs> = $Result.GetResult<Prisma.$AuthSessionPayload, S>

  type AuthSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuthSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuthSessionCountAggregateInputType | true
    }

  export interface AuthSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuthSession'], meta: { name: 'AuthSession' } }
    /**
     * Find zero or one AuthSession that matches the filter.
     * @param {AuthSessionFindUniqueArgs} args - Arguments to find a AuthSession
     * @example
     * // Get one AuthSession
     * const authSession = await prisma.authSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuthSessionFindUniqueArgs>(args: SelectSubset<T, AuthSessionFindUniqueArgs<ExtArgs>>): Prisma__AuthSessionClient<$Result.GetResult<Prisma.$AuthSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuthSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuthSessionFindUniqueOrThrowArgs} args - Arguments to find a AuthSession
     * @example
     * // Get one AuthSession
     * const authSession = await prisma.authSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuthSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, AuthSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuthSessionClient<$Result.GetResult<Prisma.$AuthSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuthSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthSessionFindFirstArgs} args - Arguments to find a AuthSession
     * @example
     * // Get one AuthSession
     * const authSession = await prisma.authSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuthSessionFindFirstArgs>(args?: SelectSubset<T, AuthSessionFindFirstArgs<ExtArgs>>): Prisma__AuthSessionClient<$Result.GetResult<Prisma.$AuthSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuthSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthSessionFindFirstOrThrowArgs} args - Arguments to find a AuthSession
     * @example
     * // Get one AuthSession
     * const authSession = await prisma.authSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuthSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, AuthSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuthSessionClient<$Result.GetResult<Prisma.$AuthSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuthSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuthSessions
     * const authSessions = await prisma.authSession.findMany()
     * 
     * // Get first 10 AuthSessions
     * const authSessions = await prisma.authSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const authSessionWithIdOnly = await prisma.authSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuthSessionFindManyArgs>(args?: SelectSubset<T, AuthSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuthSession.
     * @param {AuthSessionCreateArgs} args - Arguments to create a AuthSession.
     * @example
     * // Create one AuthSession
     * const AuthSession = await prisma.authSession.create({
     *   data: {
     *     // ... data to create a AuthSession
     *   }
     * })
     * 
     */
    create<T extends AuthSessionCreateArgs>(args: SelectSubset<T, AuthSessionCreateArgs<ExtArgs>>): Prisma__AuthSessionClient<$Result.GetResult<Prisma.$AuthSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuthSessions.
     * @param {AuthSessionCreateManyArgs} args - Arguments to create many AuthSessions.
     * @example
     * // Create many AuthSessions
     * const authSession = await prisma.authSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuthSessionCreateManyArgs>(args?: SelectSubset<T, AuthSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuthSessions and returns the data saved in the database.
     * @param {AuthSessionCreateManyAndReturnArgs} args - Arguments to create many AuthSessions.
     * @example
     * // Create many AuthSessions
     * const authSession = await prisma.authSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuthSessions and only return the `id`
     * const authSessionWithIdOnly = await prisma.authSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuthSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, AuthSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuthSession.
     * @param {AuthSessionDeleteArgs} args - Arguments to delete one AuthSession.
     * @example
     * // Delete one AuthSession
     * const AuthSession = await prisma.authSession.delete({
     *   where: {
     *     // ... filter to delete one AuthSession
     *   }
     * })
     * 
     */
    delete<T extends AuthSessionDeleteArgs>(args: SelectSubset<T, AuthSessionDeleteArgs<ExtArgs>>): Prisma__AuthSessionClient<$Result.GetResult<Prisma.$AuthSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuthSession.
     * @param {AuthSessionUpdateArgs} args - Arguments to update one AuthSession.
     * @example
     * // Update one AuthSession
     * const authSession = await prisma.authSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuthSessionUpdateArgs>(args: SelectSubset<T, AuthSessionUpdateArgs<ExtArgs>>): Prisma__AuthSessionClient<$Result.GetResult<Prisma.$AuthSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuthSessions.
     * @param {AuthSessionDeleteManyArgs} args - Arguments to filter AuthSessions to delete.
     * @example
     * // Delete a few AuthSessions
     * const { count } = await prisma.authSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuthSessionDeleteManyArgs>(args?: SelectSubset<T, AuthSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuthSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuthSessions
     * const authSession = await prisma.authSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuthSessionUpdateManyArgs>(args: SelectSubset<T, AuthSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuthSessions and returns the data updated in the database.
     * @param {AuthSessionUpdateManyAndReturnArgs} args - Arguments to update many AuthSessions.
     * @example
     * // Update many AuthSessions
     * const authSession = await prisma.authSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuthSessions and only return the `id`
     * const authSessionWithIdOnly = await prisma.authSession.updateManyAndReturn({
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
    updateManyAndReturn<T extends AuthSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, AuthSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuthSession.
     * @param {AuthSessionUpsertArgs} args - Arguments to update or create a AuthSession.
     * @example
     * // Update or create a AuthSession
     * const authSession = await prisma.authSession.upsert({
     *   create: {
     *     // ... data to create a AuthSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuthSession we want to update
     *   }
     * })
     */
    upsert<T extends AuthSessionUpsertArgs>(args: SelectSubset<T, AuthSessionUpsertArgs<ExtArgs>>): Prisma__AuthSessionClient<$Result.GetResult<Prisma.$AuthSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuthSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthSessionCountArgs} args - Arguments to filter AuthSessions to count.
     * @example
     * // Count the number of AuthSessions
     * const count = await prisma.authSession.count({
     *   where: {
     *     // ... the filter for the AuthSessions we want to count
     *   }
     * })
    **/
    count<T extends AuthSessionCountArgs>(
      args?: Subset<T, AuthSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuthSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuthSessionAggregateArgs>(args: Subset<T, AuthSessionAggregateArgs>): Prisma.PrismaPromise<GetAuthSessionAggregateType<T>>

    /**
     * Group by AuthSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthSessionGroupByArgs} args - Group by arguments.
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
      T extends AuthSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuthSessionGroupByArgs['orderBy'] }
        : { orderBy?: AuthSessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuthSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuthSession model
   */
  readonly fields: AuthSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuthSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuthSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends InternalUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InternalUserDefaultArgs<ExtArgs>>): Prisma__InternalUserClient<$Result.GetResult<Prisma.$InternalUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AuthSession model
   */
  interface AuthSessionFieldRefs {
    readonly id: FieldRef<"AuthSession", 'String'>
    readonly userId: FieldRef<"AuthSession", 'Int'>
    readonly expiresAt: FieldRef<"AuthSession", 'DateTime'>
    readonly createdAt: FieldRef<"AuthSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuthSession findUnique
   */
  export type AuthSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthSession
     */
    omit?: AuthSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthSessionInclude<ExtArgs> | null
    /**
     * Filter, which AuthSession to fetch.
     */
    where: AuthSessionWhereUniqueInput
  }

  /**
   * AuthSession findUniqueOrThrow
   */
  export type AuthSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthSession
     */
    omit?: AuthSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthSessionInclude<ExtArgs> | null
    /**
     * Filter, which AuthSession to fetch.
     */
    where: AuthSessionWhereUniqueInput
  }

  /**
   * AuthSession findFirst
   */
  export type AuthSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthSession
     */
    omit?: AuthSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthSessionInclude<ExtArgs> | null
    /**
     * Filter, which AuthSession to fetch.
     */
    where?: AuthSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthSessions to fetch.
     */
    orderBy?: AuthSessionOrderByWithRelationInput | AuthSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuthSessions.
     */
    cursor?: AuthSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuthSessions.
     */
    distinct?: AuthSessionScalarFieldEnum | AuthSessionScalarFieldEnum[]
  }

  /**
   * AuthSession findFirstOrThrow
   */
  export type AuthSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthSession
     */
    omit?: AuthSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthSessionInclude<ExtArgs> | null
    /**
     * Filter, which AuthSession to fetch.
     */
    where?: AuthSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthSessions to fetch.
     */
    orderBy?: AuthSessionOrderByWithRelationInput | AuthSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuthSessions.
     */
    cursor?: AuthSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuthSessions.
     */
    distinct?: AuthSessionScalarFieldEnum | AuthSessionScalarFieldEnum[]
  }

  /**
   * AuthSession findMany
   */
  export type AuthSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthSession
     */
    omit?: AuthSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthSessionInclude<ExtArgs> | null
    /**
     * Filter, which AuthSessions to fetch.
     */
    where?: AuthSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthSessions to fetch.
     */
    orderBy?: AuthSessionOrderByWithRelationInput | AuthSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuthSessions.
     */
    cursor?: AuthSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuthSessions.
     */
    distinct?: AuthSessionScalarFieldEnum | AuthSessionScalarFieldEnum[]
  }

  /**
   * AuthSession create
   */
  export type AuthSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthSession
     */
    omit?: AuthSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a AuthSession.
     */
    data: XOR<AuthSessionCreateInput, AuthSessionUncheckedCreateInput>
  }

  /**
   * AuthSession createMany
   */
  export type AuthSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuthSessions.
     */
    data: AuthSessionCreateManyInput | AuthSessionCreateManyInput[]
  }

  /**
   * AuthSession createManyAndReturn
   */
  export type AuthSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuthSession
     */
    omit?: AuthSessionOmit<ExtArgs> | null
    /**
     * The data used to create many AuthSessions.
     */
    data: AuthSessionCreateManyInput | AuthSessionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuthSession update
   */
  export type AuthSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthSession
     */
    omit?: AuthSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a AuthSession.
     */
    data: XOR<AuthSessionUpdateInput, AuthSessionUncheckedUpdateInput>
    /**
     * Choose, which AuthSession to update.
     */
    where: AuthSessionWhereUniqueInput
  }

  /**
   * AuthSession updateMany
   */
  export type AuthSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuthSessions.
     */
    data: XOR<AuthSessionUpdateManyMutationInput, AuthSessionUncheckedUpdateManyInput>
    /**
     * Filter which AuthSessions to update
     */
    where?: AuthSessionWhereInput
    /**
     * Limit how many AuthSessions to update.
     */
    limit?: number
  }

  /**
   * AuthSession updateManyAndReturn
   */
  export type AuthSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuthSession
     */
    omit?: AuthSessionOmit<ExtArgs> | null
    /**
     * The data used to update AuthSessions.
     */
    data: XOR<AuthSessionUpdateManyMutationInput, AuthSessionUncheckedUpdateManyInput>
    /**
     * Filter which AuthSessions to update
     */
    where?: AuthSessionWhereInput
    /**
     * Limit how many AuthSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuthSession upsert
   */
  export type AuthSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthSession
     */
    omit?: AuthSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the AuthSession to update in case it exists.
     */
    where: AuthSessionWhereUniqueInput
    /**
     * In case the AuthSession found by the `where` argument doesn't exist, create a new AuthSession with this data.
     */
    create: XOR<AuthSessionCreateInput, AuthSessionUncheckedCreateInput>
    /**
     * In case the AuthSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuthSessionUpdateInput, AuthSessionUncheckedUpdateInput>
  }

  /**
   * AuthSession delete
   */
  export type AuthSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthSession
     */
    omit?: AuthSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthSessionInclude<ExtArgs> | null
    /**
     * Filter which AuthSession to delete.
     */
    where: AuthSessionWhereUniqueInput
  }

  /**
   * AuthSession deleteMany
   */
  export type AuthSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuthSessions to delete
     */
    where?: AuthSessionWhereInput
    /**
     * Limit how many AuthSessions to delete.
     */
    limit?: number
  }

  /**
   * AuthSession without action
   */
  export type AuthSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthSession
     */
    omit?: AuthSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthSessionInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
    sortOrder: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
    sortOrder: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    sortOrder: number | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    sortOrder: number | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    sortOrder: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
    sortOrder?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
    sortOrder?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    sortOrder?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    sortOrder?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    sortOrder?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    name: string
    slug: string
    sortOrder: number
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    sortOrder?: boolean
    programs?: boolean | Category$programsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    sortOrder?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    sortOrder?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    sortOrder?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "sortOrder", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    programs?: boolean | Category$programsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      programs: Prisma.$ProgramPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      slug: string
      sortOrder: number
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
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
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    programs<T extends Category$programsArgs<ExtArgs> = {}>(args?: Subset<T, Category$programsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'Int'>
    readonly name: FieldRef<"Category", 'String'>
    readonly slug: FieldRef<"Category", 'String'>
    readonly sortOrder: FieldRef<"Category", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.programs
   */
  export type Category$programsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    where?: ProgramWhereInput
    orderBy?: ProgramOrderByWithRelationInput | ProgramOrderByWithRelationInput[]
    cursor?: ProgramWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgramScalarFieldEnum | ProgramScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Program
   */

  export type AggregateProgram = {
    _count: ProgramCountAggregateOutputType | null
    _avg: ProgramAvgAggregateOutputType | null
    _sum: ProgramSumAggregateOutputType | null
    _min: ProgramMinAggregateOutputType | null
    _max: ProgramMaxAggregateOutputType | null
  }

  export type ProgramAvgAggregateOutputType = {
    id: number | null
    categoryId: number | null
  }

  export type ProgramSumAggregateOutputType = {
    id: number | null
    categoryId: number | null
  }

  export type ProgramMinAggregateOutputType = {
    id: number | null
    categoryId: number | null
    slug: string | null
    title: string | null
    summary: string | null
    coverUrl: string | null
    description: string | null
    syllabus: string | null
    meetingUrl: string | null
    trainerName: string | null
    isPublished: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProgramMaxAggregateOutputType = {
    id: number | null
    categoryId: number | null
    slug: string | null
    title: string | null
    summary: string | null
    coverUrl: string | null
    description: string | null
    syllabus: string | null
    meetingUrl: string | null
    trainerName: string | null
    isPublished: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProgramCountAggregateOutputType = {
    id: number
    categoryId: number
    slug: number
    title: number
    summary: number
    coverUrl: number
    description: number
    syllabus: number
    meetingUrl: number
    trainerName: number
    isPublished: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProgramAvgAggregateInputType = {
    id?: true
    categoryId?: true
  }

  export type ProgramSumAggregateInputType = {
    id?: true
    categoryId?: true
  }

  export type ProgramMinAggregateInputType = {
    id?: true
    categoryId?: true
    slug?: true
    title?: true
    summary?: true
    coverUrl?: true
    description?: true
    syllabus?: true
    meetingUrl?: true
    trainerName?: true
    isPublished?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProgramMaxAggregateInputType = {
    id?: true
    categoryId?: true
    slug?: true
    title?: true
    summary?: true
    coverUrl?: true
    description?: true
    syllabus?: true
    meetingUrl?: true
    trainerName?: true
    isPublished?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProgramCountAggregateInputType = {
    id?: true
    categoryId?: true
    slug?: true
    title?: true
    summary?: true
    coverUrl?: true
    description?: true
    syllabus?: true
    meetingUrl?: true
    trainerName?: true
    isPublished?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProgramAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Program to aggregate.
     */
    where?: ProgramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Programs to fetch.
     */
    orderBy?: ProgramOrderByWithRelationInput | ProgramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProgramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Programs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Programs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Programs
    **/
    _count?: true | ProgramCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProgramAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProgramSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProgramMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProgramMaxAggregateInputType
  }

  export type GetProgramAggregateType<T extends ProgramAggregateArgs> = {
        [P in keyof T & keyof AggregateProgram]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProgram[P]>
      : GetScalarType<T[P], AggregateProgram[P]>
  }




  export type ProgramGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgramWhereInput
    orderBy?: ProgramOrderByWithAggregationInput | ProgramOrderByWithAggregationInput[]
    by: ProgramScalarFieldEnum[] | ProgramScalarFieldEnum
    having?: ProgramScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProgramCountAggregateInputType | true
    _avg?: ProgramAvgAggregateInputType
    _sum?: ProgramSumAggregateInputType
    _min?: ProgramMinAggregateInputType
    _max?: ProgramMaxAggregateInputType
  }

  export type ProgramGroupByOutputType = {
    id: number
    categoryId: number | null
    slug: string
    title: string
    summary: string | null
    coverUrl: string | null
    description: string | null
    syllabus: string | null
    meetingUrl: string | null
    trainerName: string | null
    isPublished: boolean
    createdAt: Date
    updatedAt: Date
    _count: ProgramCountAggregateOutputType | null
    _avg: ProgramAvgAggregateOutputType | null
    _sum: ProgramSumAggregateOutputType | null
    _min: ProgramMinAggregateOutputType | null
    _max: ProgramMaxAggregateOutputType | null
  }

  type GetProgramGroupByPayload<T extends ProgramGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProgramGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProgramGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProgramGroupByOutputType[P]>
            : GetScalarType<T[P], ProgramGroupByOutputType[P]>
        }
      >
    >


  export type ProgramSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoryId?: boolean
    slug?: boolean
    title?: boolean
    summary?: boolean
    coverUrl?: boolean
    description?: boolean
    syllabus?: boolean
    meetingUrl?: boolean
    trainerName?: boolean
    isPublished?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | Program$categoryArgs<ExtArgs>
    materials?: boolean | Program$materialsArgs<ExtArgs>
    evaluations?: boolean | Program$evaluationsArgs<ExtArgs>
    reviews?: boolean | Program$reviewsArgs<ExtArgs>
    programSops?: boolean | Program$programSopsArgs<ExtArgs>
    _count?: boolean | ProgramCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["program"]>

  export type ProgramSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoryId?: boolean
    slug?: boolean
    title?: boolean
    summary?: boolean
    coverUrl?: boolean
    description?: boolean
    syllabus?: boolean
    meetingUrl?: boolean
    trainerName?: boolean
    isPublished?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | Program$categoryArgs<ExtArgs>
  }, ExtArgs["result"]["program"]>

  export type ProgramSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoryId?: boolean
    slug?: boolean
    title?: boolean
    summary?: boolean
    coverUrl?: boolean
    description?: boolean
    syllabus?: boolean
    meetingUrl?: boolean
    trainerName?: boolean
    isPublished?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | Program$categoryArgs<ExtArgs>
  }, ExtArgs["result"]["program"]>

  export type ProgramSelectScalar = {
    id?: boolean
    categoryId?: boolean
    slug?: boolean
    title?: boolean
    summary?: boolean
    coverUrl?: boolean
    description?: boolean
    syllabus?: boolean
    meetingUrl?: boolean
    trainerName?: boolean
    isPublished?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProgramOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "categoryId" | "slug" | "title" | "summary" | "coverUrl" | "description" | "syllabus" | "meetingUrl" | "trainerName" | "isPublished" | "createdAt" | "updatedAt", ExtArgs["result"]["program"]>
  export type ProgramInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | Program$categoryArgs<ExtArgs>
    materials?: boolean | Program$materialsArgs<ExtArgs>
    evaluations?: boolean | Program$evaluationsArgs<ExtArgs>
    reviews?: boolean | Program$reviewsArgs<ExtArgs>
    programSops?: boolean | Program$programSopsArgs<ExtArgs>
    _count?: boolean | ProgramCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProgramIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | Program$categoryArgs<ExtArgs>
  }
  export type ProgramIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | Program$categoryArgs<ExtArgs>
  }

  export type $ProgramPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Program"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs> | null
      materials: Prisma.$MaterialPayload<ExtArgs>[]
      evaluations: Prisma.$EvaluationPayload<ExtArgs>[]
      reviews: Prisma.$ProgramReviewPayload<ExtArgs>[]
      programSops: Prisma.$ProgramSopPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      categoryId: number | null
      slug: string
      title: string
      summary: string | null
      coverUrl: string | null
      description: string | null
      syllabus: string | null
      meetingUrl: string | null
      trainerName: string | null
      isPublished: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["program"]>
    composites: {}
  }

  type ProgramGetPayload<S extends boolean | null | undefined | ProgramDefaultArgs> = $Result.GetResult<Prisma.$ProgramPayload, S>

  type ProgramCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProgramFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProgramCountAggregateInputType | true
    }

  export interface ProgramDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Program'], meta: { name: 'Program' } }
    /**
     * Find zero or one Program that matches the filter.
     * @param {ProgramFindUniqueArgs} args - Arguments to find a Program
     * @example
     * // Get one Program
     * const program = await prisma.program.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProgramFindUniqueArgs>(args: SelectSubset<T, ProgramFindUniqueArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Program that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProgramFindUniqueOrThrowArgs} args - Arguments to find a Program
     * @example
     * // Get one Program
     * const program = await prisma.program.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProgramFindUniqueOrThrowArgs>(args: SelectSubset<T, ProgramFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Program that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramFindFirstArgs} args - Arguments to find a Program
     * @example
     * // Get one Program
     * const program = await prisma.program.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProgramFindFirstArgs>(args?: SelectSubset<T, ProgramFindFirstArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Program that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramFindFirstOrThrowArgs} args - Arguments to find a Program
     * @example
     * // Get one Program
     * const program = await prisma.program.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProgramFindFirstOrThrowArgs>(args?: SelectSubset<T, ProgramFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Programs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Programs
     * const programs = await prisma.program.findMany()
     * 
     * // Get first 10 Programs
     * const programs = await prisma.program.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const programWithIdOnly = await prisma.program.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProgramFindManyArgs>(args?: SelectSubset<T, ProgramFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Program.
     * @param {ProgramCreateArgs} args - Arguments to create a Program.
     * @example
     * // Create one Program
     * const Program = await prisma.program.create({
     *   data: {
     *     // ... data to create a Program
     *   }
     * })
     * 
     */
    create<T extends ProgramCreateArgs>(args: SelectSubset<T, ProgramCreateArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Programs.
     * @param {ProgramCreateManyArgs} args - Arguments to create many Programs.
     * @example
     * // Create many Programs
     * const program = await prisma.program.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProgramCreateManyArgs>(args?: SelectSubset<T, ProgramCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Programs and returns the data saved in the database.
     * @param {ProgramCreateManyAndReturnArgs} args - Arguments to create many Programs.
     * @example
     * // Create many Programs
     * const program = await prisma.program.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Programs and only return the `id`
     * const programWithIdOnly = await prisma.program.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProgramCreateManyAndReturnArgs>(args?: SelectSubset<T, ProgramCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Program.
     * @param {ProgramDeleteArgs} args - Arguments to delete one Program.
     * @example
     * // Delete one Program
     * const Program = await prisma.program.delete({
     *   where: {
     *     // ... filter to delete one Program
     *   }
     * })
     * 
     */
    delete<T extends ProgramDeleteArgs>(args: SelectSubset<T, ProgramDeleteArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Program.
     * @param {ProgramUpdateArgs} args - Arguments to update one Program.
     * @example
     * // Update one Program
     * const program = await prisma.program.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProgramUpdateArgs>(args: SelectSubset<T, ProgramUpdateArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Programs.
     * @param {ProgramDeleteManyArgs} args - Arguments to filter Programs to delete.
     * @example
     * // Delete a few Programs
     * const { count } = await prisma.program.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProgramDeleteManyArgs>(args?: SelectSubset<T, ProgramDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Programs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Programs
     * const program = await prisma.program.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProgramUpdateManyArgs>(args: SelectSubset<T, ProgramUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Programs and returns the data updated in the database.
     * @param {ProgramUpdateManyAndReturnArgs} args - Arguments to update many Programs.
     * @example
     * // Update many Programs
     * const program = await prisma.program.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Programs and only return the `id`
     * const programWithIdOnly = await prisma.program.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProgramUpdateManyAndReturnArgs>(args: SelectSubset<T, ProgramUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Program.
     * @param {ProgramUpsertArgs} args - Arguments to update or create a Program.
     * @example
     * // Update or create a Program
     * const program = await prisma.program.upsert({
     *   create: {
     *     // ... data to create a Program
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Program we want to update
     *   }
     * })
     */
    upsert<T extends ProgramUpsertArgs>(args: SelectSubset<T, ProgramUpsertArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Programs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramCountArgs} args - Arguments to filter Programs to count.
     * @example
     * // Count the number of Programs
     * const count = await prisma.program.count({
     *   where: {
     *     // ... the filter for the Programs we want to count
     *   }
     * })
    **/
    count<T extends ProgramCountArgs>(
      args?: Subset<T, ProgramCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProgramCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Program.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProgramAggregateArgs>(args: Subset<T, ProgramAggregateArgs>): Prisma.PrismaPromise<GetProgramAggregateType<T>>

    /**
     * Group by Program.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramGroupByArgs} args - Group by arguments.
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
      T extends ProgramGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProgramGroupByArgs['orderBy'] }
        : { orderBy?: ProgramGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProgramGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProgramGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Program model
   */
  readonly fields: ProgramFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Program.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProgramClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends Program$categoryArgs<ExtArgs> = {}>(args?: Subset<T, Program$categoryArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    materials<T extends Program$materialsArgs<ExtArgs> = {}>(args?: Subset<T, Program$materialsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    evaluations<T extends Program$evaluationsArgs<ExtArgs> = {}>(args?: Subset<T, Program$evaluationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends Program$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Program$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgramReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    programSops<T extends Program$programSopsArgs<ExtArgs> = {}>(args?: Subset<T, Program$programSopsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgramSopPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Program model
   */
  interface ProgramFieldRefs {
    readonly id: FieldRef<"Program", 'Int'>
    readonly categoryId: FieldRef<"Program", 'Int'>
    readonly slug: FieldRef<"Program", 'String'>
    readonly title: FieldRef<"Program", 'String'>
    readonly summary: FieldRef<"Program", 'String'>
    readonly coverUrl: FieldRef<"Program", 'String'>
    readonly description: FieldRef<"Program", 'String'>
    readonly syllabus: FieldRef<"Program", 'String'>
    readonly meetingUrl: FieldRef<"Program", 'String'>
    readonly trainerName: FieldRef<"Program", 'String'>
    readonly isPublished: FieldRef<"Program", 'Boolean'>
    readonly createdAt: FieldRef<"Program", 'DateTime'>
    readonly updatedAt: FieldRef<"Program", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Program findUnique
   */
  export type ProgramFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    /**
     * Filter, which Program to fetch.
     */
    where: ProgramWhereUniqueInput
  }

  /**
   * Program findUniqueOrThrow
   */
  export type ProgramFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    /**
     * Filter, which Program to fetch.
     */
    where: ProgramWhereUniqueInput
  }

  /**
   * Program findFirst
   */
  export type ProgramFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    /**
     * Filter, which Program to fetch.
     */
    where?: ProgramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Programs to fetch.
     */
    orderBy?: ProgramOrderByWithRelationInput | ProgramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Programs.
     */
    cursor?: ProgramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Programs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Programs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Programs.
     */
    distinct?: ProgramScalarFieldEnum | ProgramScalarFieldEnum[]
  }

  /**
   * Program findFirstOrThrow
   */
  export type ProgramFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    /**
     * Filter, which Program to fetch.
     */
    where?: ProgramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Programs to fetch.
     */
    orderBy?: ProgramOrderByWithRelationInput | ProgramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Programs.
     */
    cursor?: ProgramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Programs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Programs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Programs.
     */
    distinct?: ProgramScalarFieldEnum | ProgramScalarFieldEnum[]
  }

  /**
   * Program findMany
   */
  export type ProgramFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    /**
     * Filter, which Programs to fetch.
     */
    where?: ProgramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Programs to fetch.
     */
    orderBy?: ProgramOrderByWithRelationInput | ProgramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Programs.
     */
    cursor?: ProgramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Programs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Programs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Programs.
     */
    distinct?: ProgramScalarFieldEnum | ProgramScalarFieldEnum[]
  }

  /**
   * Program create
   */
  export type ProgramCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    /**
     * The data needed to create a Program.
     */
    data: XOR<ProgramCreateInput, ProgramUncheckedCreateInput>
  }

  /**
   * Program createMany
   */
  export type ProgramCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Programs.
     */
    data: ProgramCreateManyInput | ProgramCreateManyInput[]
  }

  /**
   * Program createManyAndReturn
   */
  export type ProgramCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * The data used to create many Programs.
     */
    data: ProgramCreateManyInput | ProgramCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Program update
   */
  export type ProgramUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    /**
     * The data needed to update a Program.
     */
    data: XOR<ProgramUpdateInput, ProgramUncheckedUpdateInput>
    /**
     * Choose, which Program to update.
     */
    where: ProgramWhereUniqueInput
  }

  /**
   * Program updateMany
   */
  export type ProgramUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Programs.
     */
    data: XOR<ProgramUpdateManyMutationInput, ProgramUncheckedUpdateManyInput>
    /**
     * Filter which Programs to update
     */
    where?: ProgramWhereInput
    /**
     * Limit how many Programs to update.
     */
    limit?: number
  }

  /**
   * Program updateManyAndReturn
   */
  export type ProgramUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * The data used to update Programs.
     */
    data: XOR<ProgramUpdateManyMutationInput, ProgramUncheckedUpdateManyInput>
    /**
     * Filter which Programs to update
     */
    where?: ProgramWhereInput
    /**
     * Limit how many Programs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Program upsert
   */
  export type ProgramUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    /**
     * The filter to search for the Program to update in case it exists.
     */
    where: ProgramWhereUniqueInput
    /**
     * In case the Program found by the `where` argument doesn't exist, create a new Program with this data.
     */
    create: XOR<ProgramCreateInput, ProgramUncheckedCreateInput>
    /**
     * In case the Program was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProgramUpdateInput, ProgramUncheckedUpdateInput>
  }

  /**
   * Program delete
   */
  export type ProgramDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    /**
     * Filter which Program to delete.
     */
    where: ProgramWhereUniqueInput
  }

  /**
   * Program deleteMany
   */
  export type ProgramDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Programs to delete
     */
    where?: ProgramWhereInput
    /**
     * Limit how many Programs to delete.
     */
    limit?: number
  }

  /**
   * Program.category
   */
  export type Program$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
  }

  /**
   * Program.materials
   */
  export type Program$materialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    where?: MaterialWhereInput
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    cursor?: MaterialWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MaterialScalarFieldEnum | MaterialScalarFieldEnum[]
  }

  /**
   * Program.evaluations
   */
  export type Program$evaluationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
    where?: EvaluationWhereInput
    orderBy?: EvaluationOrderByWithRelationInput | EvaluationOrderByWithRelationInput[]
    cursor?: EvaluationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EvaluationScalarFieldEnum | EvaluationScalarFieldEnum[]
  }

  /**
   * Program.reviews
   */
  export type Program$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramReview
     */
    select?: ProgramReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramReview
     */
    omit?: ProgramReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramReviewInclude<ExtArgs> | null
    where?: ProgramReviewWhereInput
    orderBy?: ProgramReviewOrderByWithRelationInput | ProgramReviewOrderByWithRelationInput[]
    cursor?: ProgramReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgramReviewScalarFieldEnum | ProgramReviewScalarFieldEnum[]
  }

  /**
   * Program.programSops
   */
  export type Program$programSopsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramSop
     */
    select?: ProgramSopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramSop
     */
    omit?: ProgramSopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramSopInclude<ExtArgs> | null
    where?: ProgramSopWhereInput
    orderBy?: ProgramSopOrderByWithRelationInput | ProgramSopOrderByWithRelationInput[]
    cursor?: ProgramSopWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgramSopScalarFieldEnum | ProgramSopScalarFieldEnum[]
  }

  /**
   * Program without action
   */
  export type ProgramDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
  }


  /**
   * Model Material
   */

  export type AggregateMaterial = {
    _count: MaterialCountAggregateOutputType | null
    _avg: MaterialAvgAggregateOutputType | null
    _sum: MaterialSumAggregateOutputType | null
    _min: MaterialMinAggregateOutputType | null
    _max: MaterialMaxAggregateOutputType | null
  }

  export type MaterialAvgAggregateOutputType = {
    id: number | null
    programId: number | null
    sortOrder: number | null
  }

  export type MaterialSumAggregateOutputType = {
    id: number | null
    programId: number | null
    sortOrder: number | null
  }

  export type MaterialMinAggregateOutputType = {
    id: number | null
    programId: number | null
    type: string | null
    title: string | null
    description: string | null
    url: string | null
    filePath: string | null
    sortOrder: number | null
    isPublished: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MaterialMaxAggregateOutputType = {
    id: number | null
    programId: number | null
    type: string | null
    title: string | null
    description: string | null
    url: string | null
    filePath: string | null
    sortOrder: number | null
    isPublished: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MaterialCountAggregateOutputType = {
    id: number
    programId: number
    type: number
    title: number
    description: number
    url: number
    filePath: number
    sortOrder: number
    isPublished: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MaterialAvgAggregateInputType = {
    id?: true
    programId?: true
    sortOrder?: true
  }

  export type MaterialSumAggregateInputType = {
    id?: true
    programId?: true
    sortOrder?: true
  }

  export type MaterialMinAggregateInputType = {
    id?: true
    programId?: true
    type?: true
    title?: true
    description?: true
    url?: true
    filePath?: true
    sortOrder?: true
    isPublished?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MaterialMaxAggregateInputType = {
    id?: true
    programId?: true
    type?: true
    title?: true
    description?: true
    url?: true
    filePath?: true
    sortOrder?: true
    isPublished?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MaterialCountAggregateInputType = {
    id?: true
    programId?: true
    type?: true
    title?: true
    description?: true
    url?: true
    filePath?: true
    sortOrder?: true
    isPublished?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MaterialAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Material to aggregate.
     */
    where?: MaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materials to fetch.
     */
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Materials
    **/
    _count?: true | MaterialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MaterialAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MaterialSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MaterialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MaterialMaxAggregateInputType
  }

  export type GetMaterialAggregateType<T extends MaterialAggregateArgs> = {
        [P in keyof T & keyof AggregateMaterial]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaterial[P]>
      : GetScalarType<T[P], AggregateMaterial[P]>
  }




  export type MaterialGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaterialWhereInput
    orderBy?: MaterialOrderByWithAggregationInput | MaterialOrderByWithAggregationInput[]
    by: MaterialScalarFieldEnum[] | MaterialScalarFieldEnum
    having?: MaterialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MaterialCountAggregateInputType | true
    _avg?: MaterialAvgAggregateInputType
    _sum?: MaterialSumAggregateInputType
    _min?: MaterialMinAggregateInputType
    _max?: MaterialMaxAggregateInputType
  }

  export type MaterialGroupByOutputType = {
    id: number
    programId: number
    type: string
    title: string
    description: string | null
    url: string | null
    filePath: string | null
    sortOrder: number
    isPublished: boolean
    createdAt: Date
    updatedAt: Date
    _count: MaterialCountAggregateOutputType | null
    _avg: MaterialAvgAggregateOutputType | null
    _sum: MaterialSumAggregateOutputType | null
    _min: MaterialMinAggregateOutputType | null
    _max: MaterialMaxAggregateOutputType | null
  }

  type GetMaterialGroupByPayload<T extends MaterialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MaterialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MaterialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MaterialGroupByOutputType[P]>
            : GetScalarType<T[P], MaterialGroupByOutputType[P]>
        }
      >
    >


  export type MaterialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    programId?: boolean
    type?: boolean
    title?: boolean
    description?: boolean
    url?: boolean
    filePath?: boolean
    sortOrder?: boolean
    isPublished?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    program?: boolean | ProgramDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["material"]>

  export type MaterialSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    programId?: boolean
    type?: boolean
    title?: boolean
    description?: boolean
    url?: boolean
    filePath?: boolean
    sortOrder?: boolean
    isPublished?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    program?: boolean | ProgramDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["material"]>

  export type MaterialSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    programId?: boolean
    type?: boolean
    title?: boolean
    description?: boolean
    url?: boolean
    filePath?: boolean
    sortOrder?: boolean
    isPublished?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    program?: boolean | ProgramDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["material"]>

  export type MaterialSelectScalar = {
    id?: boolean
    programId?: boolean
    type?: boolean
    title?: boolean
    description?: boolean
    url?: boolean
    filePath?: boolean
    sortOrder?: boolean
    isPublished?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MaterialOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "programId" | "type" | "title" | "description" | "url" | "filePath" | "sortOrder" | "isPublished" | "createdAt" | "updatedAt", ExtArgs["result"]["material"]>
  export type MaterialInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    program?: boolean | ProgramDefaultArgs<ExtArgs>
  }
  export type MaterialIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    program?: boolean | ProgramDefaultArgs<ExtArgs>
  }
  export type MaterialIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    program?: boolean | ProgramDefaultArgs<ExtArgs>
  }

  export type $MaterialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Material"
    objects: {
      program: Prisma.$ProgramPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      programId: number
      type: string
      title: string
      description: string | null
      url: string | null
      filePath: string | null
      sortOrder: number
      isPublished: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["material"]>
    composites: {}
  }

  type MaterialGetPayload<S extends boolean | null | undefined | MaterialDefaultArgs> = $Result.GetResult<Prisma.$MaterialPayload, S>

  type MaterialCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MaterialFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MaterialCountAggregateInputType | true
    }

  export interface MaterialDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Material'], meta: { name: 'Material' } }
    /**
     * Find zero or one Material that matches the filter.
     * @param {MaterialFindUniqueArgs} args - Arguments to find a Material
     * @example
     * // Get one Material
     * const material = await prisma.material.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MaterialFindUniqueArgs>(args: SelectSubset<T, MaterialFindUniqueArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Material that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MaterialFindUniqueOrThrowArgs} args - Arguments to find a Material
     * @example
     * // Get one Material
     * const material = await prisma.material.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MaterialFindUniqueOrThrowArgs>(args: SelectSubset<T, MaterialFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Material that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialFindFirstArgs} args - Arguments to find a Material
     * @example
     * // Get one Material
     * const material = await prisma.material.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MaterialFindFirstArgs>(args?: SelectSubset<T, MaterialFindFirstArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Material that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialFindFirstOrThrowArgs} args - Arguments to find a Material
     * @example
     * // Get one Material
     * const material = await prisma.material.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MaterialFindFirstOrThrowArgs>(args?: SelectSubset<T, MaterialFindFirstOrThrowArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Materials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Materials
     * const materials = await prisma.material.findMany()
     * 
     * // Get first 10 Materials
     * const materials = await prisma.material.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const materialWithIdOnly = await prisma.material.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MaterialFindManyArgs>(args?: SelectSubset<T, MaterialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Material.
     * @param {MaterialCreateArgs} args - Arguments to create a Material.
     * @example
     * // Create one Material
     * const Material = await prisma.material.create({
     *   data: {
     *     // ... data to create a Material
     *   }
     * })
     * 
     */
    create<T extends MaterialCreateArgs>(args: SelectSubset<T, MaterialCreateArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Materials.
     * @param {MaterialCreateManyArgs} args - Arguments to create many Materials.
     * @example
     * // Create many Materials
     * const material = await prisma.material.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MaterialCreateManyArgs>(args?: SelectSubset<T, MaterialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Materials and returns the data saved in the database.
     * @param {MaterialCreateManyAndReturnArgs} args - Arguments to create many Materials.
     * @example
     * // Create many Materials
     * const material = await prisma.material.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Materials and only return the `id`
     * const materialWithIdOnly = await prisma.material.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MaterialCreateManyAndReturnArgs>(args?: SelectSubset<T, MaterialCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Material.
     * @param {MaterialDeleteArgs} args - Arguments to delete one Material.
     * @example
     * // Delete one Material
     * const Material = await prisma.material.delete({
     *   where: {
     *     // ... filter to delete one Material
     *   }
     * })
     * 
     */
    delete<T extends MaterialDeleteArgs>(args: SelectSubset<T, MaterialDeleteArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Material.
     * @param {MaterialUpdateArgs} args - Arguments to update one Material.
     * @example
     * // Update one Material
     * const material = await prisma.material.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MaterialUpdateArgs>(args: SelectSubset<T, MaterialUpdateArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Materials.
     * @param {MaterialDeleteManyArgs} args - Arguments to filter Materials to delete.
     * @example
     * // Delete a few Materials
     * const { count } = await prisma.material.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MaterialDeleteManyArgs>(args?: SelectSubset<T, MaterialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Materials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Materials
     * const material = await prisma.material.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MaterialUpdateManyArgs>(args: SelectSubset<T, MaterialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Materials and returns the data updated in the database.
     * @param {MaterialUpdateManyAndReturnArgs} args - Arguments to update many Materials.
     * @example
     * // Update many Materials
     * const material = await prisma.material.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Materials and only return the `id`
     * const materialWithIdOnly = await prisma.material.updateManyAndReturn({
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
    updateManyAndReturn<T extends MaterialUpdateManyAndReturnArgs>(args: SelectSubset<T, MaterialUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Material.
     * @param {MaterialUpsertArgs} args - Arguments to update or create a Material.
     * @example
     * // Update or create a Material
     * const material = await prisma.material.upsert({
     *   create: {
     *     // ... data to create a Material
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Material we want to update
     *   }
     * })
     */
    upsert<T extends MaterialUpsertArgs>(args: SelectSubset<T, MaterialUpsertArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Materials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialCountArgs} args - Arguments to filter Materials to count.
     * @example
     * // Count the number of Materials
     * const count = await prisma.material.count({
     *   where: {
     *     // ... the filter for the Materials we want to count
     *   }
     * })
    **/
    count<T extends MaterialCountArgs>(
      args?: Subset<T, MaterialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MaterialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Material.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MaterialAggregateArgs>(args: Subset<T, MaterialAggregateArgs>): Prisma.PrismaPromise<GetMaterialAggregateType<T>>

    /**
     * Group by Material.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialGroupByArgs} args - Group by arguments.
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
      T extends MaterialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MaterialGroupByArgs['orderBy'] }
        : { orderBy?: MaterialGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MaterialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaterialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Material model
   */
  readonly fields: MaterialFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Material.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MaterialClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    program<T extends ProgramDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProgramDefaultArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Material model
   */
  interface MaterialFieldRefs {
    readonly id: FieldRef<"Material", 'Int'>
    readonly programId: FieldRef<"Material", 'Int'>
    readonly type: FieldRef<"Material", 'String'>
    readonly title: FieldRef<"Material", 'String'>
    readonly description: FieldRef<"Material", 'String'>
    readonly url: FieldRef<"Material", 'String'>
    readonly filePath: FieldRef<"Material", 'String'>
    readonly sortOrder: FieldRef<"Material", 'Int'>
    readonly isPublished: FieldRef<"Material", 'Boolean'>
    readonly createdAt: FieldRef<"Material", 'DateTime'>
    readonly updatedAt: FieldRef<"Material", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Material findUnique
   */
  export type MaterialFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter, which Material to fetch.
     */
    where: MaterialWhereUniqueInput
  }

  /**
   * Material findUniqueOrThrow
   */
  export type MaterialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter, which Material to fetch.
     */
    where: MaterialWhereUniqueInput
  }

  /**
   * Material findFirst
   */
  export type MaterialFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter, which Material to fetch.
     */
    where?: MaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materials to fetch.
     */
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Materials.
     */
    cursor?: MaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Materials.
     */
    distinct?: MaterialScalarFieldEnum | MaterialScalarFieldEnum[]
  }

  /**
   * Material findFirstOrThrow
   */
  export type MaterialFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter, which Material to fetch.
     */
    where?: MaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materials to fetch.
     */
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Materials.
     */
    cursor?: MaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Materials.
     */
    distinct?: MaterialScalarFieldEnum | MaterialScalarFieldEnum[]
  }

  /**
   * Material findMany
   */
  export type MaterialFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter, which Materials to fetch.
     */
    where?: MaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materials to fetch.
     */
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Materials.
     */
    cursor?: MaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Materials.
     */
    distinct?: MaterialScalarFieldEnum | MaterialScalarFieldEnum[]
  }

  /**
   * Material create
   */
  export type MaterialCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * The data needed to create a Material.
     */
    data: XOR<MaterialCreateInput, MaterialUncheckedCreateInput>
  }

  /**
   * Material createMany
   */
  export type MaterialCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Materials.
     */
    data: MaterialCreateManyInput | MaterialCreateManyInput[]
  }

  /**
   * Material createManyAndReturn
   */
  export type MaterialCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * The data used to create many Materials.
     */
    data: MaterialCreateManyInput | MaterialCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Material update
   */
  export type MaterialUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * The data needed to update a Material.
     */
    data: XOR<MaterialUpdateInput, MaterialUncheckedUpdateInput>
    /**
     * Choose, which Material to update.
     */
    where: MaterialWhereUniqueInput
  }

  /**
   * Material updateMany
   */
  export type MaterialUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Materials.
     */
    data: XOR<MaterialUpdateManyMutationInput, MaterialUncheckedUpdateManyInput>
    /**
     * Filter which Materials to update
     */
    where?: MaterialWhereInput
    /**
     * Limit how many Materials to update.
     */
    limit?: number
  }

  /**
   * Material updateManyAndReturn
   */
  export type MaterialUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * The data used to update Materials.
     */
    data: XOR<MaterialUpdateManyMutationInput, MaterialUncheckedUpdateManyInput>
    /**
     * Filter which Materials to update
     */
    where?: MaterialWhereInput
    /**
     * Limit how many Materials to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Material upsert
   */
  export type MaterialUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * The filter to search for the Material to update in case it exists.
     */
    where: MaterialWhereUniqueInput
    /**
     * In case the Material found by the `where` argument doesn't exist, create a new Material with this data.
     */
    create: XOR<MaterialCreateInput, MaterialUncheckedCreateInput>
    /**
     * In case the Material was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MaterialUpdateInput, MaterialUncheckedUpdateInput>
  }

  /**
   * Material delete
   */
  export type MaterialDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter which Material to delete.
     */
    where: MaterialWhereUniqueInput
  }

  /**
   * Material deleteMany
   */
  export type MaterialDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Materials to delete
     */
    where?: MaterialWhereInput
    /**
     * Limit how many Materials to delete.
     */
    limit?: number
  }

  /**
   * Material without action
   */
  export type MaterialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
  }


  /**
   * Model SopDocument
   */

  export type AggregateSopDocument = {
    _count: SopDocumentCountAggregateOutputType | null
    _avg: SopDocumentAvgAggregateOutputType | null
    _sum: SopDocumentSumAggregateOutputType | null
    _min: SopDocumentMinAggregateOutputType | null
    _max: SopDocumentMaxAggregateOutputType | null
  }

  export type SopDocumentAvgAggregateOutputType = {
    id: number | null
  }

  export type SopDocumentSumAggregateOutputType = {
    id: number | null
  }

  export type SopDocumentMinAggregateOutputType = {
    id: number | null
    code: string | null
    title: string | null
    version: string | null
    description: string | null
    url: string | null
    isPublished: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SopDocumentMaxAggregateOutputType = {
    id: number | null
    code: string | null
    title: string | null
    version: string | null
    description: string | null
    url: string | null
    isPublished: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SopDocumentCountAggregateOutputType = {
    id: number
    code: number
    title: number
    version: number
    description: number
    url: number
    isPublished: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SopDocumentAvgAggregateInputType = {
    id?: true
  }

  export type SopDocumentSumAggregateInputType = {
    id?: true
  }

  export type SopDocumentMinAggregateInputType = {
    id?: true
    code?: true
    title?: true
    version?: true
    description?: true
    url?: true
    isPublished?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SopDocumentMaxAggregateInputType = {
    id?: true
    code?: true
    title?: true
    version?: true
    description?: true
    url?: true
    isPublished?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SopDocumentCountAggregateInputType = {
    id?: true
    code?: true
    title?: true
    version?: true
    description?: true
    url?: true
    isPublished?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SopDocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SopDocument to aggregate.
     */
    where?: SopDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SopDocuments to fetch.
     */
    orderBy?: SopDocumentOrderByWithRelationInput | SopDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SopDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SopDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SopDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SopDocuments
    **/
    _count?: true | SopDocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SopDocumentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SopDocumentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SopDocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SopDocumentMaxAggregateInputType
  }

  export type GetSopDocumentAggregateType<T extends SopDocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateSopDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSopDocument[P]>
      : GetScalarType<T[P], AggregateSopDocument[P]>
  }




  export type SopDocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SopDocumentWhereInput
    orderBy?: SopDocumentOrderByWithAggregationInput | SopDocumentOrderByWithAggregationInput[]
    by: SopDocumentScalarFieldEnum[] | SopDocumentScalarFieldEnum
    having?: SopDocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SopDocumentCountAggregateInputType | true
    _avg?: SopDocumentAvgAggregateInputType
    _sum?: SopDocumentSumAggregateInputType
    _min?: SopDocumentMinAggregateInputType
    _max?: SopDocumentMaxAggregateInputType
  }

  export type SopDocumentGroupByOutputType = {
    id: number
    code: string
    title: string
    version: string
    description: string | null
    url: string
    isPublished: boolean
    createdAt: Date
    updatedAt: Date
    _count: SopDocumentCountAggregateOutputType | null
    _avg: SopDocumentAvgAggregateOutputType | null
    _sum: SopDocumentSumAggregateOutputType | null
    _min: SopDocumentMinAggregateOutputType | null
    _max: SopDocumentMaxAggregateOutputType | null
  }

  type GetSopDocumentGroupByPayload<T extends SopDocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SopDocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SopDocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SopDocumentGroupByOutputType[P]>
            : GetScalarType<T[P], SopDocumentGroupByOutputType[P]>
        }
      >
    >


  export type SopDocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    title?: boolean
    version?: boolean
    description?: boolean
    url?: boolean
    isPublished?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    programSops?: boolean | SopDocument$programSopsArgs<ExtArgs>
    _count?: boolean | SopDocumentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sopDocument"]>

  export type SopDocumentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    title?: boolean
    version?: boolean
    description?: boolean
    url?: boolean
    isPublished?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["sopDocument"]>

  export type SopDocumentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    title?: boolean
    version?: boolean
    description?: boolean
    url?: boolean
    isPublished?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["sopDocument"]>

  export type SopDocumentSelectScalar = {
    id?: boolean
    code?: boolean
    title?: boolean
    version?: boolean
    description?: boolean
    url?: boolean
    isPublished?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SopDocumentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "title" | "version" | "description" | "url" | "isPublished" | "createdAt" | "updatedAt", ExtArgs["result"]["sopDocument"]>
  export type SopDocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    programSops?: boolean | SopDocument$programSopsArgs<ExtArgs>
    _count?: boolean | SopDocumentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SopDocumentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SopDocumentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SopDocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SopDocument"
    objects: {
      programSops: Prisma.$ProgramSopPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      code: string
      title: string
      version: string
      description: string | null
      url: string
      isPublished: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["sopDocument"]>
    composites: {}
  }

  type SopDocumentGetPayload<S extends boolean | null | undefined | SopDocumentDefaultArgs> = $Result.GetResult<Prisma.$SopDocumentPayload, S>

  type SopDocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SopDocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SopDocumentCountAggregateInputType | true
    }

  export interface SopDocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SopDocument'], meta: { name: 'SopDocument' } }
    /**
     * Find zero or one SopDocument that matches the filter.
     * @param {SopDocumentFindUniqueArgs} args - Arguments to find a SopDocument
     * @example
     * // Get one SopDocument
     * const sopDocument = await prisma.sopDocument.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SopDocumentFindUniqueArgs>(args: SelectSubset<T, SopDocumentFindUniqueArgs<ExtArgs>>): Prisma__SopDocumentClient<$Result.GetResult<Prisma.$SopDocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SopDocument that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SopDocumentFindUniqueOrThrowArgs} args - Arguments to find a SopDocument
     * @example
     * // Get one SopDocument
     * const sopDocument = await prisma.sopDocument.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SopDocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, SopDocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SopDocumentClient<$Result.GetResult<Prisma.$SopDocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SopDocument that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SopDocumentFindFirstArgs} args - Arguments to find a SopDocument
     * @example
     * // Get one SopDocument
     * const sopDocument = await prisma.sopDocument.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SopDocumentFindFirstArgs>(args?: SelectSubset<T, SopDocumentFindFirstArgs<ExtArgs>>): Prisma__SopDocumentClient<$Result.GetResult<Prisma.$SopDocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SopDocument that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SopDocumentFindFirstOrThrowArgs} args - Arguments to find a SopDocument
     * @example
     * // Get one SopDocument
     * const sopDocument = await prisma.sopDocument.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SopDocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, SopDocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__SopDocumentClient<$Result.GetResult<Prisma.$SopDocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SopDocuments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SopDocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SopDocuments
     * const sopDocuments = await prisma.sopDocument.findMany()
     * 
     * // Get first 10 SopDocuments
     * const sopDocuments = await prisma.sopDocument.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sopDocumentWithIdOnly = await prisma.sopDocument.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SopDocumentFindManyArgs>(args?: SelectSubset<T, SopDocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SopDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SopDocument.
     * @param {SopDocumentCreateArgs} args - Arguments to create a SopDocument.
     * @example
     * // Create one SopDocument
     * const SopDocument = await prisma.sopDocument.create({
     *   data: {
     *     // ... data to create a SopDocument
     *   }
     * })
     * 
     */
    create<T extends SopDocumentCreateArgs>(args: SelectSubset<T, SopDocumentCreateArgs<ExtArgs>>): Prisma__SopDocumentClient<$Result.GetResult<Prisma.$SopDocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SopDocuments.
     * @param {SopDocumentCreateManyArgs} args - Arguments to create many SopDocuments.
     * @example
     * // Create many SopDocuments
     * const sopDocument = await prisma.sopDocument.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SopDocumentCreateManyArgs>(args?: SelectSubset<T, SopDocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SopDocuments and returns the data saved in the database.
     * @param {SopDocumentCreateManyAndReturnArgs} args - Arguments to create many SopDocuments.
     * @example
     * // Create many SopDocuments
     * const sopDocument = await prisma.sopDocument.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SopDocuments and only return the `id`
     * const sopDocumentWithIdOnly = await prisma.sopDocument.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SopDocumentCreateManyAndReturnArgs>(args?: SelectSubset<T, SopDocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SopDocumentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SopDocument.
     * @param {SopDocumentDeleteArgs} args - Arguments to delete one SopDocument.
     * @example
     * // Delete one SopDocument
     * const SopDocument = await prisma.sopDocument.delete({
     *   where: {
     *     // ... filter to delete one SopDocument
     *   }
     * })
     * 
     */
    delete<T extends SopDocumentDeleteArgs>(args: SelectSubset<T, SopDocumentDeleteArgs<ExtArgs>>): Prisma__SopDocumentClient<$Result.GetResult<Prisma.$SopDocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SopDocument.
     * @param {SopDocumentUpdateArgs} args - Arguments to update one SopDocument.
     * @example
     * // Update one SopDocument
     * const sopDocument = await prisma.sopDocument.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SopDocumentUpdateArgs>(args: SelectSubset<T, SopDocumentUpdateArgs<ExtArgs>>): Prisma__SopDocumentClient<$Result.GetResult<Prisma.$SopDocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SopDocuments.
     * @param {SopDocumentDeleteManyArgs} args - Arguments to filter SopDocuments to delete.
     * @example
     * // Delete a few SopDocuments
     * const { count } = await prisma.sopDocument.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SopDocumentDeleteManyArgs>(args?: SelectSubset<T, SopDocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SopDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SopDocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SopDocuments
     * const sopDocument = await prisma.sopDocument.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SopDocumentUpdateManyArgs>(args: SelectSubset<T, SopDocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SopDocuments and returns the data updated in the database.
     * @param {SopDocumentUpdateManyAndReturnArgs} args - Arguments to update many SopDocuments.
     * @example
     * // Update many SopDocuments
     * const sopDocument = await prisma.sopDocument.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SopDocuments and only return the `id`
     * const sopDocumentWithIdOnly = await prisma.sopDocument.updateManyAndReturn({
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
    updateManyAndReturn<T extends SopDocumentUpdateManyAndReturnArgs>(args: SelectSubset<T, SopDocumentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SopDocumentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SopDocument.
     * @param {SopDocumentUpsertArgs} args - Arguments to update or create a SopDocument.
     * @example
     * // Update or create a SopDocument
     * const sopDocument = await prisma.sopDocument.upsert({
     *   create: {
     *     // ... data to create a SopDocument
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SopDocument we want to update
     *   }
     * })
     */
    upsert<T extends SopDocumentUpsertArgs>(args: SelectSubset<T, SopDocumentUpsertArgs<ExtArgs>>): Prisma__SopDocumentClient<$Result.GetResult<Prisma.$SopDocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SopDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SopDocumentCountArgs} args - Arguments to filter SopDocuments to count.
     * @example
     * // Count the number of SopDocuments
     * const count = await prisma.sopDocument.count({
     *   where: {
     *     // ... the filter for the SopDocuments we want to count
     *   }
     * })
    **/
    count<T extends SopDocumentCountArgs>(
      args?: Subset<T, SopDocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SopDocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SopDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SopDocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SopDocumentAggregateArgs>(args: Subset<T, SopDocumentAggregateArgs>): Prisma.PrismaPromise<GetSopDocumentAggregateType<T>>

    /**
     * Group by SopDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SopDocumentGroupByArgs} args - Group by arguments.
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
      T extends SopDocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SopDocumentGroupByArgs['orderBy'] }
        : { orderBy?: SopDocumentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SopDocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSopDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SopDocument model
   */
  readonly fields: SopDocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SopDocument.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SopDocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    programSops<T extends SopDocument$programSopsArgs<ExtArgs> = {}>(args?: Subset<T, SopDocument$programSopsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgramSopPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SopDocument model
   */
  interface SopDocumentFieldRefs {
    readonly id: FieldRef<"SopDocument", 'Int'>
    readonly code: FieldRef<"SopDocument", 'String'>
    readonly title: FieldRef<"SopDocument", 'String'>
    readonly version: FieldRef<"SopDocument", 'String'>
    readonly description: FieldRef<"SopDocument", 'String'>
    readonly url: FieldRef<"SopDocument", 'String'>
    readonly isPublished: FieldRef<"SopDocument", 'Boolean'>
    readonly createdAt: FieldRef<"SopDocument", 'DateTime'>
    readonly updatedAt: FieldRef<"SopDocument", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SopDocument findUnique
   */
  export type SopDocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SopDocument
     */
    select?: SopDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SopDocument
     */
    omit?: SopDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SopDocumentInclude<ExtArgs> | null
    /**
     * Filter, which SopDocument to fetch.
     */
    where: SopDocumentWhereUniqueInput
  }

  /**
   * SopDocument findUniqueOrThrow
   */
  export type SopDocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SopDocument
     */
    select?: SopDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SopDocument
     */
    omit?: SopDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SopDocumentInclude<ExtArgs> | null
    /**
     * Filter, which SopDocument to fetch.
     */
    where: SopDocumentWhereUniqueInput
  }

  /**
   * SopDocument findFirst
   */
  export type SopDocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SopDocument
     */
    select?: SopDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SopDocument
     */
    omit?: SopDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SopDocumentInclude<ExtArgs> | null
    /**
     * Filter, which SopDocument to fetch.
     */
    where?: SopDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SopDocuments to fetch.
     */
    orderBy?: SopDocumentOrderByWithRelationInput | SopDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SopDocuments.
     */
    cursor?: SopDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SopDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SopDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SopDocuments.
     */
    distinct?: SopDocumentScalarFieldEnum | SopDocumentScalarFieldEnum[]
  }

  /**
   * SopDocument findFirstOrThrow
   */
  export type SopDocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SopDocument
     */
    select?: SopDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SopDocument
     */
    omit?: SopDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SopDocumentInclude<ExtArgs> | null
    /**
     * Filter, which SopDocument to fetch.
     */
    where?: SopDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SopDocuments to fetch.
     */
    orderBy?: SopDocumentOrderByWithRelationInput | SopDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SopDocuments.
     */
    cursor?: SopDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SopDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SopDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SopDocuments.
     */
    distinct?: SopDocumentScalarFieldEnum | SopDocumentScalarFieldEnum[]
  }

  /**
   * SopDocument findMany
   */
  export type SopDocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SopDocument
     */
    select?: SopDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SopDocument
     */
    omit?: SopDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SopDocumentInclude<ExtArgs> | null
    /**
     * Filter, which SopDocuments to fetch.
     */
    where?: SopDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SopDocuments to fetch.
     */
    orderBy?: SopDocumentOrderByWithRelationInput | SopDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SopDocuments.
     */
    cursor?: SopDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SopDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SopDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SopDocuments.
     */
    distinct?: SopDocumentScalarFieldEnum | SopDocumentScalarFieldEnum[]
  }

  /**
   * SopDocument create
   */
  export type SopDocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SopDocument
     */
    select?: SopDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SopDocument
     */
    omit?: SopDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SopDocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a SopDocument.
     */
    data: XOR<SopDocumentCreateInput, SopDocumentUncheckedCreateInput>
  }

  /**
   * SopDocument createMany
   */
  export type SopDocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SopDocuments.
     */
    data: SopDocumentCreateManyInput | SopDocumentCreateManyInput[]
  }

  /**
   * SopDocument createManyAndReturn
   */
  export type SopDocumentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SopDocument
     */
    select?: SopDocumentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SopDocument
     */
    omit?: SopDocumentOmit<ExtArgs> | null
    /**
     * The data used to create many SopDocuments.
     */
    data: SopDocumentCreateManyInput | SopDocumentCreateManyInput[]
  }

  /**
   * SopDocument update
   */
  export type SopDocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SopDocument
     */
    select?: SopDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SopDocument
     */
    omit?: SopDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SopDocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a SopDocument.
     */
    data: XOR<SopDocumentUpdateInput, SopDocumentUncheckedUpdateInput>
    /**
     * Choose, which SopDocument to update.
     */
    where: SopDocumentWhereUniqueInput
  }

  /**
   * SopDocument updateMany
   */
  export type SopDocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SopDocuments.
     */
    data: XOR<SopDocumentUpdateManyMutationInput, SopDocumentUncheckedUpdateManyInput>
    /**
     * Filter which SopDocuments to update
     */
    where?: SopDocumentWhereInput
    /**
     * Limit how many SopDocuments to update.
     */
    limit?: number
  }

  /**
   * SopDocument updateManyAndReturn
   */
  export type SopDocumentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SopDocument
     */
    select?: SopDocumentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SopDocument
     */
    omit?: SopDocumentOmit<ExtArgs> | null
    /**
     * The data used to update SopDocuments.
     */
    data: XOR<SopDocumentUpdateManyMutationInput, SopDocumentUncheckedUpdateManyInput>
    /**
     * Filter which SopDocuments to update
     */
    where?: SopDocumentWhereInput
    /**
     * Limit how many SopDocuments to update.
     */
    limit?: number
  }

  /**
   * SopDocument upsert
   */
  export type SopDocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SopDocument
     */
    select?: SopDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SopDocument
     */
    omit?: SopDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SopDocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the SopDocument to update in case it exists.
     */
    where: SopDocumentWhereUniqueInput
    /**
     * In case the SopDocument found by the `where` argument doesn't exist, create a new SopDocument with this data.
     */
    create: XOR<SopDocumentCreateInput, SopDocumentUncheckedCreateInput>
    /**
     * In case the SopDocument was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SopDocumentUpdateInput, SopDocumentUncheckedUpdateInput>
  }

  /**
   * SopDocument delete
   */
  export type SopDocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SopDocument
     */
    select?: SopDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SopDocument
     */
    omit?: SopDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SopDocumentInclude<ExtArgs> | null
    /**
     * Filter which SopDocument to delete.
     */
    where: SopDocumentWhereUniqueInput
  }

  /**
   * SopDocument deleteMany
   */
  export type SopDocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SopDocuments to delete
     */
    where?: SopDocumentWhereInput
    /**
     * Limit how many SopDocuments to delete.
     */
    limit?: number
  }

  /**
   * SopDocument.programSops
   */
  export type SopDocument$programSopsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramSop
     */
    select?: ProgramSopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramSop
     */
    omit?: ProgramSopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramSopInclude<ExtArgs> | null
    where?: ProgramSopWhereInput
    orderBy?: ProgramSopOrderByWithRelationInput | ProgramSopOrderByWithRelationInput[]
    cursor?: ProgramSopWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgramSopScalarFieldEnum | ProgramSopScalarFieldEnum[]
  }

  /**
   * SopDocument without action
   */
  export type SopDocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SopDocument
     */
    select?: SopDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SopDocument
     */
    omit?: SopDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SopDocumentInclude<ExtArgs> | null
  }


  /**
   * Model ProgramSop
   */

  export type AggregateProgramSop = {
    _count: ProgramSopCountAggregateOutputType | null
    _avg: ProgramSopAvgAggregateOutputType | null
    _sum: ProgramSopSumAggregateOutputType | null
    _min: ProgramSopMinAggregateOutputType | null
    _max: ProgramSopMaxAggregateOutputType | null
  }

  export type ProgramSopAvgAggregateOutputType = {
    programId: number | null
    sopId: number | null
  }

  export type ProgramSopSumAggregateOutputType = {
    programId: number | null
    sopId: number | null
  }

  export type ProgramSopMinAggregateOutputType = {
    programId: number | null
    sopId: number | null
  }

  export type ProgramSopMaxAggregateOutputType = {
    programId: number | null
    sopId: number | null
  }

  export type ProgramSopCountAggregateOutputType = {
    programId: number
    sopId: number
    _all: number
  }


  export type ProgramSopAvgAggregateInputType = {
    programId?: true
    sopId?: true
  }

  export type ProgramSopSumAggregateInputType = {
    programId?: true
    sopId?: true
  }

  export type ProgramSopMinAggregateInputType = {
    programId?: true
    sopId?: true
  }

  export type ProgramSopMaxAggregateInputType = {
    programId?: true
    sopId?: true
  }

  export type ProgramSopCountAggregateInputType = {
    programId?: true
    sopId?: true
    _all?: true
  }

  export type ProgramSopAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProgramSop to aggregate.
     */
    where?: ProgramSopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgramSops to fetch.
     */
    orderBy?: ProgramSopOrderByWithRelationInput | ProgramSopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProgramSopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgramSops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgramSops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProgramSops
    **/
    _count?: true | ProgramSopCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProgramSopAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProgramSopSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProgramSopMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProgramSopMaxAggregateInputType
  }

  export type GetProgramSopAggregateType<T extends ProgramSopAggregateArgs> = {
        [P in keyof T & keyof AggregateProgramSop]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProgramSop[P]>
      : GetScalarType<T[P], AggregateProgramSop[P]>
  }




  export type ProgramSopGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgramSopWhereInput
    orderBy?: ProgramSopOrderByWithAggregationInput | ProgramSopOrderByWithAggregationInput[]
    by: ProgramSopScalarFieldEnum[] | ProgramSopScalarFieldEnum
    having?: ProgramSopScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProgramSopCountAggregateInputType | true
    _avg?: ProgramSopAvgAggregateInputType
    _sum?: ProgramSopSumAggregateInputType
    _min?: ProgramSopMinAggregateInputType
    _max?: ProgramSopMaxAggregateInputType
  }

  export type ProgramSopGroupByOutputType = {
    programId: number
    sopId: number
    _count: ProgramSopCountAggregateOutputType | null
    _avg: ProgramSopAvgAggregateOutputType | null
    _sum: ProgramSopSumAggregateOutputType | null
    _min: ProgramSopMinAggregateOutputType | null
    _max: ProgramSopMaxAggregateOutputType | null
  }

  type GetProgramSopGroupByPayload<T extends ProgramSopGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProgramSopGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProgramSopGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProgramSopGroupByOutputType[P]>
            : GetScalarType<T[P], ProgramSopGroupByOutputType[P]>
        }
      >
    >


  export type ProgramSopSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    programId?: boolean
    sopId?: boolean
    program?: boolean | ProgramDefaultArgs<ExtArgs>
    sop?: boolean | SopDocumentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["programSop"]>

  export type ProgramSopSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    programId?: boolean
    sopId?: boolean
    program?: boolean | ProgramDefaultArgs<ExtArgs>
    sop?: boolean | SopDocumentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["programSop"]>

  export type ProgramSopSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    programId?: boolean
    sopId?: boolean
    program?: boolean | ProgramDefaultArgs<ExtArgs>
    sop?: boolean | SopDocumentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["programSop"]>

  export type ProgramSopSelectScalar = {
    programId?: boolean
    sopId?: boolean
  }

  export type ProgramSopOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"programId" | "sopId", ExtArgs["result"]["programSop"]>
  export type ProgramSopInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    program?: boolean | ProgramDefaultArgs<ExtArgs>
    sop?: boolean | SopDocumentDefaultArgs<ExtArgs>
  }
  export type ProgramSopIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    program?: boolean | ProgramDefaultArgs<ExtArgs>
    sop?: boolean | SopDocumentDefaultArgs<ExtArgs>
  }
  export type ProgramSopIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    program?: boolean | ProgramDefaultArgs<ExtArgs>
    sop?: boolean | SopDocumentDefaultArgs<ExtArgs>
  }

  export type $ProgramSopPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProgramSop"
    objects: {
      program: Prisma.$ProgramPayload<ExtArgs>
      sop: Prisma.$SopDocumentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      programId: number
      sopId: number
    }, ExtArgs["result"]["programSop"]>
    composites: {}
  }

  type ProgramSopGetPayload<S extends boolean | null | undefined | ProgramSopDefaultArgs> = $Result.GetResult<Prisma.$ProgramSopPayload, S>

  type ProgramSopCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProgramSopFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProgramSopCountAggregateInputType | true
    }

  export interface ProgramSopDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProgramSop'], meta: { name: 'ProgramSop' } }
    /**
     * Find zero or one ProgramSop that matches the filter.
     * @param {ProgramSopFindUniqueArgs} args - Arguments to find a ProgramSop
     * @example
     * // Get one ProgramSop
     * const programSop = await prisma.programSop.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProgramSopFindUniqueArgs>(args: SelectSubset<T, ProgramSopFindUniqueArgs<ExtArgs>>): Prisma__ProgramSopClient<$Result.GetResult<Prisma.$ProgramSopPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProgramSop that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProgramSopFindUniqueOrThrowArgs} args - Arguments to find a ProgramSop
     * @example
     * // Get one ProgramSop
     * const programSop = await prisma.programSop.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProgramSopFindUniqueOrThrowArgs>(args: SelectSubset<T, ProgramSopFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProgramSopClient<$Result.GetResult<Prisma.$ProgramSopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProgramSop that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramSopFindFirstArgs} args - Arguments to find a ProgramSop
     * @example
     * // Get one ProgramSop
     * const programSop = await prisma.programSop.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProgramSopFindFirstArgs>(args?: SelectSubset<T, ProgramSopFindFirstArgs<ExtArgs>>): Prisma__ProgramSopClient<$Result.GetResult<Prisma.$ProgramSopPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProgramSop that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramSopFindFirstOrThrowArgs} args - Arguments to find a ProgramSop
     * @example
     * // Get one ProgramSop
     * const programSop = await prisma.programSop.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProgramSopFindFirstOrThrowArgs>(args?: SelectSubset<T, ProgramSopFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProgramSopClient<$Result.GetResult<Prisma.$ProgramSopPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProgramSops that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramSopFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProgramSops
     * const programSops = await prisma.programSop.findMany()
     * 
     * // Get first 10 ProgramSops
     * const programSops = await prisma.programSop.findMany({ take: 10 })
     * 
     * // Only select the `programId`
     * const programSopWithProgramIdOnly = await prisma.programSop.findMany({ select: { programId: true } })
     * 
     */
    findMany<T extends ProgramSopFindManyArgs>(args?: SelectSubset<T, ProgramSopFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgramSopPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProgramSop.
     * @param {ProgramSopCreateArgs} args - Arguments to create a ProgramSop.
     * @example
     * // Create one ProgramSop
     * const ProgramSop = await prisma.programSop.create({
     *   data: {
     *     // ... data to create a ProgramSop
     *   }
     * })
     * 
     */
    create<T extends ProgramSopCreateArgs>(args: SelectSubset<T, ProgramSopCreateArgs<ExtArgs>>): Prisma__ProgramSopClient<$Result.GetResult<Prisma.$ProgramSopPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProgramSops.
     * @param {ProgramSopCreateManyArgs} args - Arguments to create many ProgramSops.
     * @example
     * // Create many ProgramSops
     * const programSop = await prisma.programSop.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProgramSopCreateManyArgs>(args?: SelectSubset<T, ProgramSopCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProgramSops and returns the data saved in the database.
     * @param {ProgramSopCreateManyAndReturnArgs} args - Arguments to create many ProgramSops.
     * @example
     * // Create many ProgramSops
     * const programSop = await prisma.programSop.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProgramSops and only return the `programId`
     * const programSopWithProgramIdOnly = await prisma.programSop.createManyAndReturn({
     *   select: { programId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProgramSopCreateManyAndReturnArgs>(args?: SelectSubset<T, ProgramSopCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgramSopPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProgramSop.
     * @param {ProgramSopDeleteArgs} args - Arguments to delete one ProgramSop.
     * @example
     * // Delete one ProgramSop
     * const ProgramSop = await prisma.programSop.delete({
     *   where: {
     *     // ... filter to delete one ProgramSop
     *   }
     * })
     * 
     */
    delete<T extends ProgramSopDeleteArgs>(args: SelectSubset<T, ProgramSopDeleteArgs<ExtArgs>>): Prisma__ProgramSopClient<$Result.GetResult<Prisma.$ProgramSopPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProgramSop.
     * @param {ProgramSopUpdateArgs} args - Arguments to update one ProgramSop.
     * @example
     * // Update one ProgramSop
     * const programSop = await prisma.programSop.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProgramSopUpdateArgs>(args: SelectSubset<T, ProgramSopUpdateArgs<ExtArgs>>): Prisma__ProgramSopClient<$Result.GetResult<Prisma.$ProgramSopPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProgramSops.
     * @param {ProgramSopDeleteManyArgs} args - Arguments to filter ProgramSops to delete.
     * @example
     * // Delete a few ProgramSops
     * const { count } = await prisma.programSop.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProgramSopDeleteManyArgs>(args?: SelectSubset<T, ProgramSopDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProgramSops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramSopUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProgramSops
     * const programSop = await prisma.programSop.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProgramSopUpdateManyArgs>(args: SelectSubset<T, ProgramSopUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProgramSops and returns the data updated in the database.
     * @param {ProgramSopUpdateManyAndReturnArgs} args - Arguments to update many ProgramSops.
     * @example
     * // Update many ProgramSops
     * const programSop = await prisma.programSop.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProgramSops and only return the `programId`
     * const programSopWithProgramIdOnly = await prisma.programSop.updateManyAndReturn({
     *   select: { programId: true },
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
    updateManyAndReturn<T extends ProgramSopUpdateManyAndReturnArgs>(args: SelectSubset<T, ProgramSopUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgramSopPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProgramSop.
     * @param {ProgramSopUpsertArgs} args - Arguments to update or create a ProgramSop.
     * @example
     * // Update or create a ProgramSop
     * const programSop = await prisma.programSop.upsert({
     *   create: {
     *     // ... data to create a ProgramSop
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProgramSop we want to update
     *   }
     * })
     */
    upsert<T extends ProgramSopUpsertArgs>(args: SelectSubset<T, ProgramSopUpsertArgs<ExtArgs>>): Prisma__ProgramSopClient<$Result.GetResult<Prisma.$ProgramSopPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProgramSops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramSopCountArgs} args - Arguments to filter ProgramSops to count.
     * @example
     * // Count the number of ProgramSops
     * const count = await prisma.programSop.count({
     *   where: {
     *     // ... the filter for the ProgramSops we want to count
     *   }
     * })
    **/
    count<T extends ProgramSopCountArgs>(
      args?: Subset<T, ProgramSopCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProgramSopCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProgramSop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramSopAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProgramSopAggregateArgs>(args: Subset<T, ProgramSopAggregateArgs>): Prisma.PrismaPromise<GetProgramSopAggregateType<T>>

    /**
     * Group by ProgramSop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramSopGroupByArgs} args - Group by arguments.
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
      T extends ProgramSopGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProgramSopGroupByArgs['orderBy'] }
        : { orderBy?: ProgramSopGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProgramSopGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProgramSopGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProgramSop model
   */
  readonly fields: ProgramSopFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProgramSop.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProgramSopClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    program<T extends ProgramDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProgramDefaultArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sop<T extends SopDocumentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SopDocumentDefaultArgs<ExtArgs>>): Prisma__SopDocumentClient<$Result.GetResult<Prisma.$SopDocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProgramSop model
   */
  interface ProgramSopFieldRefs {
    readonly programId: FieldRef<"ProgramSop", 'Int'>
    readonly sopId: FieldRef<"ProgramSop", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ProgramSop findUnique
   */
  export type ProgramSopFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramSop
     */
    select?: ProgramSopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramSop
     */
    omit?: ProgramSopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramSopInclude<ExtArgs> | null
    /**
     * Filter, which ProgramSop to fetch.
     */
    where: ProgramSopWhereUniqueInput
  }

  /**
   * ProgramSop findUniqueOrThrow
   */
  export type ProgramSopFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramSop
     */
    select?: ProgramSopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramSop
     */
    omit?: ProgramSopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramSopInclude<ExtArgs> | null
    /**
     * Filter, which ProgramSop to fetch.
     */
    where: ProgramSopWhereUniqueInput
  }

  /**
   * ProgramSop findFirst
   */
  export type ProgramSopFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramSop
     */
    select?: ProgramSopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramSop
     */
    omit?: ProgramSopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramSopInclude<ExtArgs> | null
    /**
     * Filter, which ProgramSop to fetch.
     */
    where?: ProgramSopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgramSops to fetch.
     */
    orderBy?: ProgramSopOrderByWithRelationInput | ProgramSopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProgramSops.
     */
    cursor?: ProgramSopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgramSops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgramSops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProgramSops.
     */
    distinct?: ProgramSopScalarFieldEnum | ProgramSopScalarFieldEnum[]
  }

  /**
   * ProgramSop findFirstOrThrow
   */
  export type ProgramSopFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramSop
     */
    select?: ProgramSopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramSop
     */
    omit?: ProgramSopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramSopInclude<ExtArgs> | null
    /**
     * Filter, which ProgramSop to fetch.
     */
    where?: ProgramSopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgramSops to fetch.
     */
    orderBy?: ProgramSopOrderByWithRelationInput | ProgramSopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProgramSops.
     */
    cursor?: ProgramSopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgramSops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgramSops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProgramSops.
     */
    distinct?: ProgramSopScalarFieldEnum | ProgramSopScalarFieldEnum[]
  }

  /**
   * ProgramSop findMany
   */
  export type ProgramSopFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramSop
     */
    select?: ProgramSopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramSop
     */
    omit?: ProgramSopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramSopInclude<ExtArgs> | null
    /**
     * Filter, which ProgramSops to fetch.
     */
    where?: ProgramSopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgramSops to fetch.
     */
    orderBy?: ProgramSopOrderByWithRelationInput | ProgramSopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProgramSops.
     */
    cursor?: ProgramSopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgramSops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgramSops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProgramSops.
     */
    distinct?: ProgramSopScalarFieldEnum | ProgramSopScalarFieldEnum[]
  }

  /**
   * ProgramSop create
   */
  export type ProgramSopCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramSop
     */
    select?: ProgramSopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramSop
     */
    omit?: ProgramSopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramSopInclude<ExtArgs> | null
    /**
     * The data needed to create a ProgramSop.
     */
    data: XOR<ProgramSopCreateInput, ProgramSopUncheckedCreateInput>
  }

  /**
   * ProgramSop createMany
   */
  export type ProgramSopCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProgramSops.
     */
    data: ProgramSopCreateManyInput | ProgramSopCreateManyInput[]
  }

  /**
   * ProgramSop createManyAndReturn
   */
  export type ProgramSopCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramSop
     */
    select?: ProgramSopSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramSop
     */
    omit?: ProgramSopOmit<ExtArgs> | null
    /**
     * The data used to create many ProgramSops.
     */
    data: ProgramSopCreateManyInput | ProgramSopCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramSopIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProgramSop update
   */
  export type ProgramSopUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramSop
     */
    select?: ProgramSopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramSop
     */
    omit?: ProgramSopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramSopInclude<ExtArgs> | null
    /**
     * The data needed to update a ProgramSop.
     */
    data: XOR<ProgramSopUpdateInput, ProgramSopUncheckedUpdateInput>
    /**
     * Choose, which ProgramSop to update.
     */
    where: ProgramSopWhereUniqueInput
  }

  /**
   * ProgramSop updateMany
   */
  export type ProgramSopUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProgramSops.
     */
    data: XOR<ProgramSopUpdateManyMutationInput, ProgramSopUncheckedUpdateManyInput>
    /**
     * Filter which ProgramSops to update
     */
    where?: ProgramSopWhereInput
    /**
     * Limit how many ProgramSops to update.
     */
    limit?: number
  }

  /**
   * ProgramSop updateManyAndReturn
   */
  export type ProgramSopUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramSop
     */
    select?: ProgramSopSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramSop
     */
    omit?: ProgramSopOmit<ExtArgs> | null
    /**
     * The data used to update ProgramSops.
     */
    data: XOR<ProgramSopUpdateManyMutationInput, ProgramSopUncheckedUpdateManyInput>
    /**
     * Filter which ProgramSops to update
     */
    where?: ProgramSopWhereInput
    /**
     * Limit how many ProgramSops to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramSopIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProgramSop upsert
   */
  export type ProgramSopUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramSop
     */
    select?: ProgramSopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramSop
     */
    omit?: ProgramSopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramSopInclude<ExtArgs> | null
    /**
     * The filter to search for the ProgramSop to update in case it exists.
     */
    where: ProgramSopWhereUniqueInput
    /**
     * In case the ProgramSop found by the `where` argument doesn't exist, create a new ProgramSop with this data.
     */
    create: XOR<ProgramSopCreateInput, ProgramSopUncheckedCreateInput>
    /**
     * In case the ProgramSop was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProgramSopUpdateInput, ProgramSopUncheckedUpdateInput>
  }

  /**
   * ProgramSop delete
   */
  export type ProgramSopDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramSop
     */
    select?: ProgramSopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramSop
     */
    omit?: ProgramSopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramSopInclude<ExtArgs> | null
    /**
     * Filter which ProgramSop to delete.
     */
    where: ProgramSopWhereUniqueInput
  }

  /**
   * ProgramSop deleteMany
   */
  export type ProgramSopDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProgramSops to delete
     */
    where?: ProgramSopWhereInput
    /**
     * Limit how many ProgramSops to delete.
     */
    limit?: number
  }

  /**
   * ProgramSop without action
   */
  export type ProgramSopDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramSop
     */
    select?: ProgramSopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramSop
     */
    omit?: ProgramSopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramSopInclude<ExtArgs> | null
  }


  /**
   * Model Evaluation
   */

  export type AggregateEvaluation = {
    _count: EvaluationCountAggregateOutputType | null
    _avg: EvaluationAvgAggregateOutputType | null
    _sum: EvaluationSumAggregateOutputType | null
    _min: EvaluationMinAggregateOutputType | null
    _max: EvaluationMaxAggregateOutputType | null
  }

  export type EvaluationAvgAggregateOutputType = {
    id: number | null
    programId: number | null
  }

  export type EvaluationSumAggregateOutputType = {
    id: number | null
    programId: number | null
  }

  export type EvaluationMinAggregateOutputType = {
    id: number | null
    programId: number | null
    type: string | null
    title: string | null
    instructions: string | null
    shuffle: boolean | null
    isPublished: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EvaluationMaxAggregateOutputType = {
    id: number | null
    programId: number | null
    type: string | null
    title: string | null
    instructions: string | null
    shuffle: boolean | null
    isPublished: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EvaluationCountAggregateOutputType = {
    id: number
    programId: number
    type: number
    title: number
    instructions: number
    shuffle: number
    isPublished: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EvaluationAvgAggregateInputType = {
    id?: true
    programId?: true
  }

  export type EvaluationSumAggregateInputType = {
    id?: true
    programId?: true
  }

  export type EvaluationMinAggregateInputType = {
    id?: true
    programId?: true
    type?: true
    title?: true
    instructions?: true
    shuffle?: true
    isPublished?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EvaluationMaxAggregateInputType = {
    id?: true
    programId?: true
    type?: true
    title?: true
    instructions?: true
    shuffle?: true
    isPublished?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EvaluationCountAggregateInputType = {
    id?: true
    programId?: true
    type?: true
    title?: true
    instructions?: true
    shuffle?: true
    isPublished?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EvaluationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Evaluation to aggregate.
     */
    where?: EvaluationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Evaluations to fetch.
     */
    orderBy?: EvaluationOrderByWithRelationInput | EvaluationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EvaluationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Evaluations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Evaluations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Evaluations
    **/
    _count?: true | EvaluationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EvaluationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EvaluationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EvaluationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EvaluationMaxAggregateInputType
  }

  export type GetEvaluationAggregateType<T extends EvaluationAggregateArgs> = {
        [P in keyof T & keyof AggregateEvaluation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvaluation[P]>
      : GetScalarType<T[P], AggregateEvaluation[P]>
  }




  export type EvaluationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EvaluationWhereInput
    orderBy?: EvaluationOrderByWithAggregationInput | EvaluationOrderByWithAggregationInput[]
    by: EvaluationScalarFieldEnum[] | EvaluationScalarFieldEnum
    having?: EvaluationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EvaluationCountAggregateInputType | true
    _avg?: EvaluationAvgAggregateInputType
    _sum?: EvaluationSumAggregateInputType
    _min?: EvaluationMinAggregateInputType
    _max?: EvaluationMaxAggregateInputType
  }

  export type EvaluationGroupByOutputType = {
    id: number
    programId: number
    type: string
    title: string
    instructions: string | null
    shuffle: boolean
    isPublished: boolean
    createdAt: Date
    updatedAt: Date
    _count: EvaluationCountAggregateOutputType | null
    _avg: EvaluationAvgAggregateOutputType | null
    _sum: EvaluationSumAggregateOutputType | null
    _min: EvaluationMinAggregateOutputType | null
    _max: EvaluationMaxAggregateOutputType | null
  }

  type GetEvaluationGroupByPayload<T extends EvaluationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EvaluationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EvaluationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EvaluationGroupByOutputType[P]>
            : GetScalarType<T[P], EvaluationGroupByOutputType[P]>
        }
      >
    >


  export type EvaluationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    programId?: boolean
    type?: boolean
    title?: boolean
    instructions?: boolean
    shuffle?: boolean
    isPublished?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    program?: boolean | ProgramDefaultArgs<ExtArgs>
    questions?: boolean | Evaluation$questionsArgs<ExtArgs>
    attempts?: boolean | Evaluation$attemptsArgs<ExtArgs>
    _count?: boolean | EvaluationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evaluation"]>

  export type EvaluationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    programId?: boolean
    type?: boolean
    title?: boolean
    instructions?: boolean
    shuffle?: boolean
    isPublished?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    program?: boolean | ProgramDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evaluation"]>

  export type EvaluationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    programId?: boolean
    type?: boolean
    title?: boolean
    instructions?: boolean
    shuffle?: boolean
    isPublished?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    program?: boolean | ProgramDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evaluation"]>

  export type EvaluationSelectScalar = {
    id?: boolean
    programId?: boolean
    type?: boolean
    title?: boolean
    instructions?: boolean
    shuffle?: boolean
    isPublished?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EvaluationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "programId" | "type" | "title" | "instructions" | "shuffle" | "isPublished" | "createdAt" | "updatedAt", ExtArgs["result"]["evaluation"]>
  export type EvaluationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    program?: boolean | ProgramDefaultArgs<ExtArgs>
    questions?: boolean | Evaluation$questionsArgs<ExtArgs>
    attempts?: boolean | Evaluation$attemptsArgs<ExtArgs>
    _count?: boolean | EvaluationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EvaluationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    program?: boolean | ProgramDefaultArgs<ExtArgs>
  }
  export type EvaluationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    program?: boolean | ProgramDefaultArgs<ExtArgs>
  }

  export type $EvaluationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Evaluation"
    objects: {
      program: Prisma.$ProgramPayload<ExtArgs>
      questions: Prisma.$QuestionPayload<ExtArgs>[]
      attempts: Prisma.$AttemptPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      programId: number
      type: string
      title: string
      instructions: string | null
      shuffle: boolean
      isPublished: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["evaluation"]>
    composites: {}
  }

  type EvaluationGetPayload<S extends boolean | null | undefined | EvaluationDefaultArgs> = $Result.GetResult<Prisma.$EvaluationPayload, S>

  type EvaluationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EvaluationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EvaluationCountAggregateInputType | true
    }

  export interface EvaluationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Evaluation'], meta: { name: 'Evaluation' } }
    /**
     * Find zero or one Evaluation that matches the filter.
     * @param {EvaluationFindUniqueArgs} args - Arguments to find a Evaluation
     * @example
     * // Get one Evaluation
     * const evaluation = await prisma.evaluation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EvaluationFindUniqueArgs>(args: SelectSubset<T, EvaluationFindUniqueArgs<ExtArgs>>): Prisma__EvaluationClient<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Evaluation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EvaluationFindUniqueOrThrowArgs} args - Arguments to find a Evaluation
     * @example
     * // Get one Evaluation
     * const evaluation = await prisma.evaluation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EvaluationFindUniqueOrThrowArgs>(args: SelectSubset<T, EvaluationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EvaluationClient<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Evaluation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationFindFirstArgs} args - Arguments to find a Evaluation
     * @example
     * // Get one Evaluation
     * const evaluation = await prisma.evaluation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EvaluationFindFirstArgs>(args?: SelectSubset<T, EvaluationFindFirstArgs<ExtArgs>>): Prisma__EvaluationClient<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Evaluation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationFindFirstOrThrowArgs} args - Arguments to find a Evaluation
     * @example
     * // Get one Evaluation
     * const evaluation = await prisma.evaluation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EvaluationFindFirstOrThrowArgs>(args?: SelectSubset<T, EvaluationFindFirstOrThrowArgs<ExtArgs>>): Prisma__EvaluationClient<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Evaluations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Evaluations
     * const evaluations = await prisma.evaluation.findMany()
     * 
     * // Get first 10 Evaluations
     * const evaluations = await prisma.evaluation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const evaluationWithIdOnly = await prisma.evaluation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EvaluationFindManyArgs>(args?: SelectSubset<T, EvaluationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Evaluation.
     * @param {EvaluationCreateArgs} args - Arguments to create a Evaluation.
     * @example
     * // Create one Evaluation
     * const Evaluation = await prisma.evaluation.create({
     *   data: {
     *     // ... data to create a Evaluation
     *   }
     * })
     * 
     */
    create<T extends EvaluationCreateArgs>(args: SelectSubset<T, EvaluationCreateArgs<ExtArgs>>): Prisma__EvaluationClient<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Evaluations.
     * @param {EvaluationCreateManyArgs} args - Arguments to create many Evaluations.
     * @example
     * // Create many Evaluations
     * const evaluation = await prisma.evaluation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EvaluationCreateManyArgs>(args?: SelectSubset<T, EvaluationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Evaluations and returns the data saved in the database.
     * @param {EvaluationCreateManyAndReturnArgs} args - Arguments to create many Evaluations.
     * @example
     * // Create many Evaluations
     * const evaluation = await prisma.evaluation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Evaluations and only return the `id`
     * const evaluationWithIdOnly = await prisma.evaluation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EvaluationCreateManyAndReturnArgs>(args?: SelectSubset<T, EvaluationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Evaluation.
     * @param {EvaluationDeleteArgs} args - Arguments to delete one Evaluation.
     * @example
     * // Delete one Evaluation
     * const Evaluation = await prisma.evaluation.delete({
     *   where: {
     *     // ... filter to delete one Evaluation
     *   }
     * })
     * 
     */
    delete<T extends EvaluationDeleteArgs>(args: SelectSubset<T, EvaluationDeleteArgs<ExtArgs>>): Prisma__EvaluationClient<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Evaluation.
     * @param {EvaluationUpdateArgs} args - Arguments to update one Evaluation.
     * @example
     * // Update one Evaluation
     * const evaluation = await prisma.evaluation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EvaluationUpdateArgs>(args: SelectSubset<T, EvaluationUpdateArgs<ExtArgs>>): Prisma__EvaluationClient<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Evaluations.
     * @param {EvaluationDeleteManyArgs} args - Arguments to filter Evaluations to delete.
     * @example
     * // Delete a few Evaluations
     * const { count } = await prisma.evaluation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EvaluationDeleteManyArgs>(args?: SelectSubset<T, EvaluationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Evaluations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Evaluations
     * const evaluation = await prisma.evaluation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EvaluationUpdateManyArgs>(args: SelectSubset<T, EvaluationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Evaluations and returns the data updated in the database.
     * @param {EvaluationUpdateManyAndReturnArgs} args - Arguments to update many Evaluations.
     * @example
     * // Update many Evaluations
     * const evaluation = await prisma.evaluation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Evaluations and only return the `id`
     * const evaluationWithIdOnly = await prisma.evaluation.updateManyAndReturn({
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
    updateManyAndReturn<T extends EvaluationUpdateManyAndReturnArgs>(args: SelectSubset<T, EvaluationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Evaluation.
     * @param {EvaluationUpsertArgs} args - Arguments to update or create a Evaluation.
     * @example
     * // Update or create a Evaluation
     * const evaluation = await prisma.evaluation.upsert({
     *   create: {
     *     // ... data to create a Evaluation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Evaluation we want to update
     *   }
     * })
     */
    upsert<T extends EvaluationUpsertArgs>(args: SelectSubset<T, EvaluationUpsertArgs<ExtArgs>>): Prisma__EvaluationClient<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Evaluations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationCountArgs} args - Arguments to filter Evaluations to count.
     * @example
     * // Count the number of Evaluations
     * const count = await prisma.evaluation.count({
     *   where: {
     *     // ... the filter for the Evaluations we want to count
     *   }
     * })
    **/
    count<T extends EvaluationCountArgs>(
      args?: Subset<T, EvaluationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EvaluationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Evaluation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EvaluationAggregateArgs>(args: Subset<T, EvaluationAggregateArgs>): Prisma.PrismaPromise<GetEvaluationAggregateType<T>>

    /**
     * Group by Evaluation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationGroupByArgs} args - Group by arguments.
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
      T extends EvaluationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EvaluationGroupByArgs['orderBy'] }
        : { orderBy?: EvaluationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EvaluationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEvaluationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Evaluation model
   */
  readonly fields: EvaluationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Evaluation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EvaluationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    program<T extends ProgramDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProgramDefaultArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    questions<T extends Evaluation$questionsArgs<ExtArgs> = {}>(args?: Subset<T, Evaluation$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    attempts<T extends Evaluation$attemptsArgs<ExtArgs> = {}>(args?: Subset<T, Evaluation$attemptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Evaluation model
   */
  interface EvaluationFieldRefs {
    readonly id: FieldRef<"Evaluation", 'Int'>
    readonly programId: FieldRef<"Evaluation", 'Int'>
    readonly type: FieldRef<"Evaluation", 'String'>
    readonly title: FieldRef<"Evaluation", 'String'>
    readonly instructions: FieldRef<"Evaluation", 'String'>
    readonly shuffle: FieldRef<"Evaluation", 'Boolean'>
    readonly isPublished: FieldRef<"Evaluation", 'Boolean'>
    readonly createdAt: FieldRef<"Evaluation", 'DateTime'>
    readonly updatedAt: FieldRef<"Evaluation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Evaluation findUnique
   */
  export type EvaluationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
    /**
     * Filter, which Evaluation to fetch.
     */
    where: EvaluationWhereUniqueInput
  }

  /**
   * Evaluation findUniqueOrThrow
   */
  export type EvaluationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
    /**
     * Filter, which Evaluation to fetch.
     */
    where: EvaluationWhereUniqueInput
  }

  /**
   * Evaluation findFirst
   */
  export type EvaluationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
    /**
     * Filter, which Evaluation to fetch.
     */
    where?: EvaluationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Evaluations to fetch.
     */
    orderBy?: EvaluationOrderByWithRelationInput | EvaluationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Evaluations.
     */
    cursor?: EvaluationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Evaluations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Evaluations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Evaluations.
     */
    distinct?: EvaluationScalarFieldEnum | EvaluationScalarFieldEnum[]
  }

  /**
   * Evaluation findFirstOrThrow
   */
  export type EvaluationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
    /**
     * Filter, which Evaluation to fetch.
     */
    where?: EvaluationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Evaluations to fetch.
     */
    orderBy?: EvaluationOrderByWithRelationInput | EvaluationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Evaluations.
     */
    cursor?: EvaluationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Evaluations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Evaluations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Evaluations.
     */
    distinct?: EvaluationScalarFieldEnum | EvaluationScalarFieldEnum[]
  }

  /**
   * Evaluation findMany
   */
  export type EvaluationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
    /**
     * Filter, which Evaluations to fetch.
     */
    where?: EvaluationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Evaluations to fetch.
     */
    orderBy?: EvaluationOrderByWithRelationInput | EvaluationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Evaluations.
     */
    cursor?: EvaluationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Evaluations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Evaluations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Evaluations.
     */
    distinct?: EvaluationScalarFieldEnum | EvaluationScalarFieldEnum[]
  }

  /**
   * Evaluation create
   */
  export type EvaluationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
    /**
     * The data needed to create a Evaluation.
     */
    data: XOR<EvaluationCreateInput, EvaluationUncheckedCreateInput>
  }

  /**
   * Evaluation createMany
   */
  export type EvaluationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Evaluations.
     */
    data: EvaluationCreateManyInput | EvaluationCreateManyInput[]
  }

  /**
   * Evaluation createManyAndReturn
   */
  export type EvaluationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * The data used to create many Evaluations.
     */
    data: EvaluationCreateManyInput | EvaluationCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Evaluation update
   */
  export type EvaluationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
    /**
     * The data needed to update a Evaluation.
     */
    data: XOR<EvaluationUpdateInput, EvaluationUncheckedUpdateInput>
    /**
     * Choose, which Evaluation to update.
     */
    where: EvaluationWhereUniqueInput
  }

  /**
   * Evaluation updateMany
   */
  export type EvaluationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Evaluations.
     */
    data: XOR<EvaluationUpdateManyMutationInput, EvaluationUncheckedUpdateManyInput>
    /**
     * Filter which Evaluations to update
     */
    where?: EvaluationWhereInput
    /**
     * Limit how many Evaluations to update.
     */
    limit?: number
  }

  /**
   * Evaluation updateManyAndReturn
   */
  export type EvaluationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * The data used to update Evaluations.
     */
    data: XOR<EvaluationUpdateManyMutationInput, EvaluationUncheckedUpdateManyInput>
    /**
     * Filter which Evaluations to update
     */
    where?: EvaluationWhereInput
    /**
     * Limit how many Evaluations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Evaluation upsert
   */
  export type EvaluationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
    /**
     * The filter to search for the Evaluation to update in case it exists.
     */
    where: EvaluationWhereUniqueInput
    /**
     * In case the Evaluation found by the `where` argument doesn't exist, create a new Evaluation with this data.
     */
    create: XOR<EvaluationCreateInput, EvaluationUncheckedCreateInput>
    /**
     * In case the Evaluation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EvaluationUpdateInput, EvaluationUncheckedUpdateInput>
  }

  /**
   * Evaluation delete
   */
  export type EvaluationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
    /**
     * Filter which Evaluation to delete.
     */
    where: EvaluationWhereUniqueInput
  }

  /**
   * Evaluation deleteMany
   */
  export type EvaluationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Evaluations to delete
     */
    where?: EvaluationWhereInput
    /**
     * Limit how many Evaluations to delete.
     */
    limit?: number
  }

  /**
   * Evaluation.questions
   */
  export type Evaluation$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    cursor?: QuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Evaluation.attempts
   */
  export type Evaluation$attemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attempt
     */
    select?: AttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attempt
     */
    omit?: AttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptInclude<ExtArgs> | null
    where?: AttemptWhereInput
    orderBy?: AttemptOrderByWithRelationInput | AttemptOrderByWithRelationInput[]
    cursor?: AttemptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttemptScalarFieldEnum | AttemptScalarFieldEnum[]
  }

  /**
   * Evaluation without action
   */
  export type EvaluationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
  }


  /**
   * Model Question
   */

  export type AggregateQuestion = {
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  export type QuestionAvgAggregateOutputType = {
    id: number | null
    evaluationId: number | null
    sortOrder: number | null
    score: number | null
  }

  export type QuestionSumAggregateOutputType = {
    id: number | null
    evaluationId: number | null
    sortOrder: number | null
    score: number | null
  }

  export type QuestionMinAggregateOutputType = {
    id: number | null
    evaluationId: number | null
    sortOrder: number | null
    text: string | null
    options: string | null
    correctAnswer: string | null
    score: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuestionMaxAggregateOutputType = {
    id: number | null
    evaluationId: number | null
    sortOrder: number | null
    text: string | null
    options: string | null
    correctAnswer: string | null
    score: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuestionCountAggregateOutputType = {
    id: number
    evaluationId: number
    sortOrder: number
    text: number
    options: number
    correctAnswer: number
    score: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type QuestionAvgAggregateInputType = {
    id?: true
    evaluationId?: true
    sortOrder?: true
    score?: true
  }

  export type QuestionSumAggregateInputType = {
    id?: true
    evaluationId?: true
    sortOrder?: true
    score?: true
  }

  export type QuestionMinAggregateInputType = {
    id?: true
    evaluationId?: true
    sortOrder?: true
    text?: true
    options?: true
    correctAnswer?: true
    score?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuestionMaxAggregateInputType = {
    id?: true
    evaluationId?: true
    sortOrder?: true
    text?: true
    options?: true
    correctAnswer?: true
    score?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuestionCountAggregateInputType = {
    id?: true
    evaluationId?: true
    sortOrder?: true
    text?: true
    options?: true
    correctAnswer?: true
    score?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type QuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Question to aggregate.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Questions
    **/
    _count?: true | QuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionMaxAggregateInputType
  }

  export type GetQuestionAggregateType<T extends QuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestion[P]>
      : GetScalarType<T[P], AggregateQuestion[P]>
  }




  export type QuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithAggregationInput | QuestionOrderByWithAggregationInput[]
    by: QuestionScalarFieldEnum[] | QuestionScalarFieldEnum
    having?: QuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionCountAggregateInputType | true
    _avg?: QuestionAvgAggregateInputType
    _sum?: QuestionSumAggregateInputType
    _min?: QuestionMinAggregateInputType
    _max?: QuestionMaxAggregateInputType
  }

  export type QuestionGroupByOutputType = {
    id: number
    evaluationId: number
    sortOrder: number
    text: string
    options: string
    correctAnswer: string
    score: number
    createdAt: Date
    updatedAt: Date
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  type GetQuestionGroupByPayload<T extends QuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionGroupByOutputType[P]>
        }
      >
    >


  export type QuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    evaluationId?: boolean
    sortOrder?: boolean
    text?: boolean
    options?: boolean
    correctAnswer?: boolean
    score?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    evaluation?: boolean | EvaluationDefaultArgs<ExtArgs>
    attemptAnswers?: boolean | Question$attemptAnswersArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    evaluationId?: boolean
    sortOrder?: boolean
    text?: boolean
    options?: boolean
    correctAnswer?: boolean
    score?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    evaluation?: boolean | EvaluationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    evaluationId?: boolean
    sortOrder?: boolean
    text?: boolean
    options?: boolean
    correctAnswer?: boolean
    score?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    evaluation?: boolean | EvaluationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectScalar = {
    id?: boolean
    evaluationId?: boolean
    sortOrder?: boolean
    text?: boolean
    options?: boolean
    correctAnswer?: boolean
    score?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type QuestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "evaluationId" | "sortOrder" | "text" | "options" | "correctAnswer" | "score" | "createdAt" | "updatedAt", ExtArgs["result"]["question"]>
  export type QuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evaluation?: boolean | EvaluationDefaultArgs<ExtArgs>
    attemptAnswers?: boolean | Question$attemptAnswersArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evaluation?: boolean | EvaluationDefaultArgs<ExtArgs>
  }
  export type QuestionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evaluation?: boolean | EvaluationDefaultArgs<ExtArgs>
  }

  export type $QuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Question"
    objects: {
      evaluation: Prisma.$EvaluationPayload<ExtArgs>
      attemptAnswers: Prisma.$AttemptAnswerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      evaluationId: number
      sortOrder: number
      text: string
      options: string
      correctAnswer: string
      score: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["question"]>
    composites: {}
  }

  type QuestionGetPayload<S extends boolean | null | undefined | QuestionDefaultArgs> = $Result.GetResult<Prisma.$QuestionPayload, S>

  type QuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionCountAggregateInputType | true
    }

  export interface QuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Question'], meta: { name: 'Question' } }
    /**
     * Find zero or one Question that matches the filter.
     * @param {QuestionFindUniqueArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionFindUniqueArgs>(args: SelectSubset<T, QuestionFindUniqueArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Question that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestionFindUniqueOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionFindFirstArgs>(args?: SelectSubset<T, QuestionFindFirstArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questions
     * const questions = await prisma.question.findMany()
     * 
     * // Get first 10 Questions
     * const questions = await prisma.question.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionWithIdOnly = await prisma.question.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestionFindManyArgs>(args?: SelectSubset<T, QuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Question.
     * @param {QuestionCreateArgs} args - Arguments to create a Question.
     * @example
     * // Create one Question
     * const Question = await prisma.question.create({
     *   data: {
     *     // ... data to create a Question
     *   }
     * })
     * 
     */
    create<T extends QuestionCreateArgs>(args: SelectSubset<T, QuestionCreateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Questions.
     * @param {QuestionCreateManyArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionCreateManyArgs>(args?: SelectSubset<T, QuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Questions and returns the data saved in the database.
     * @param {QuestionCreateManyAndReturnArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Questions and only return the `id`
     * const questionWithIdOnly = await prisma.question.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuestionCreateManyAndReturnArgs>(args?: SelectSubset<T, QuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Question.
     * @param {QuestionDeleteArgs} args - Arguments to delete one Question.
     * @example
     * // Delete one Question
     * const Question = await prisma.question.delete({
     *   where: {
     *     // ... filter to delete one Question
     *   }
     * })
     * 
     */
    delete<T extends QuestionDeleteArgs>(args: SelectSubset<T, QuestionDeleteArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Question.
     * @param {QuestionUpdateArgs} args - Arguments to update one Question.
     * @example
     * // Update one Question
     * const question = await prisma.question.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionUpdateArgs>(args: SelectSubset<T, QuestionUpdateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Questions.
     * @param {QuestionDeleteManyArgs} args - Arguments to filter Questions to delete.
     * @example
     * // Delete a few Questions
     * const { count } = await prisma.question.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionDeleteManyArgs>(args?: SelectSubset<T, QuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionUpdateManyArgs>(args: SelectSubset<T, QuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions and returns the data updated in the database.
     * @param {QuestionUpdateManyAndReturnArgs} args - Arguments to update many Questions.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Questions and only return the `id`
     * const questionWithIdOnly = await prisma.question.updateManyAndReturn({
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
    updateManyAndReturn<T extends QuestionUpdateManyAndReturnArgs>(args: SelectSubset<T, QuestionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Question.
     * @param {QuestionUpsertArgs} args - Arguments to update or create a Question.
     * @example
     * // Update or create a Question
     * const question = await prisma.question.upsert({
     *   create: {
     *     // ... data to create a Question
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Question we want to update
     *   }
     * })
     */
    upsert<T extends QuestionUpsertArgs>(args: SelectSubset<T, QuestionUpsertArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionCountArgs} args - Arguments to filter Questions to count.
     * @example
     * // Count the number of Questions
     * const count = await prisma.question.count({
     *   where: {
     *     // ... the filter for the Questions we want to count
     *   }
     * })
    **/
    count<T extends QuestionCountArgs>(
      args?: Subset<T, QuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuestionAggregateArgs>(args: Subset<T, QuestionAggregateArgs>): Prisma.PrismaPromise<GetQuestionAggregateType<T>>

    /**
     * Group by Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionGroupByArgs} args - Group by arguments.
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
      T extends QuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionGroupByArgs['orderBy'] }
        : { orderBy?: QuestionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Question model
   */
  readonly fields: QuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Question.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    evaluation<T extends EvaluationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EvaluationDefaultArgs<ExtArgs>>): Prisma__EvaluationClient<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    attemptAnswers<T extends Question$attemptAnswersArgs<ExtArgs> = {}>(args?: Subset<T, Question$attemptAnswersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttemptAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Question model
   */
  interface QuestionFieldRefs {
    readonly id: FieldRef<"Question", 'Int'>
    readonly evaluationId: FieldRef<"Question", 'Int'>
    readonly sortOrder: FieldRef<"Question", 'Int'>
    readonly text: FieldRef<"Question", 'String'>
    readonly options: FieldRef<"Question", 'String'>
    readonly correctAnswer: FieldRef<"Question", 'String'>
    readonly score: FieldRef<"Question", 'Int'>
    readonly createdAt: FieldRef<"Question", 'DateTime'>
    readonly updatedAt: FieldRef<"Question", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Question findUnique
   */
  export type QuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findUniqueOrThrow
   */
  export type QuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findFirst
   */
  export type QuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findFirstOrThrow
   */
  export type QuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findMany
   */
  export type QuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question create
   */
  export type QuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a Question.
     */
    data: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
  }

  /**
   * Question createMany
   */
  export type QuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
  }

  /**
   * Question createManyAndReturn
   */
  export type QuestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Question update
   */
  export type QuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a Question.
     */
    data: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
    /**
     * Choose, which Question to update.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question updateMany
   */
  export type QuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
  }

  /**
   * Question updateManyAndReturn
   */
  export type QuestionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Question upsert
   */
  export type QuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the Question to update in case it exists.
     */
    where: QuestionWhereUniqueInput
    /**
     * In case the Question found by the `where` argument doesn't exist, create a new Question with this data.
     */
    create: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
    /**
     * In case the Question was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
  }

  /**
   * Question delete
   */
  export type QuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter which Question to delete.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question deleteMany
   */
  export type QuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Questions to delete
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to delete.
     */
    limit?: number
  }

  /**
   * Question.attemptAnswers
   */
  export type Question$attemptAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttemptAnswer
     */
    select?: AttemptAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttemptAnswer
     */
    omit?: AttemptAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptAnswerInclude<ExtArgs> | null
    where?: AttemptAnswerWhereInput
    orderBy?: AttemptAnswerOrderByWithRelationInput | AttemptAnswerOrderByWithRelationInput[]
    cursor?: AttemptAnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttemptAnswerScalarFieldEnum | AttemptAnswerScalarFieldEnum[]
  }

  /**
   * Question without action
   */
  export type QuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
  }


  /**
   * Model Attempt
   */

  export type AggregateAttempt = {
    _count: AttemptCountAggregateOutputType | null
    _avg: AttemptAvgAggregateOutputType | null
    _sum: AttemptSumAggregateOutputType | null
    _min: AttemptMinAggregateOutputType | null
    _max: AttemptMaxAggregateOutputType | null
  }

  export type AttemptAvgAggregateOutputType = {
    id: number | null
    evaluationId: number | null
    score: number | null
    maxScore: number | null
  }

  export type AttemptSumAggregateOutputType = {
    id: number | null
    evaluationId: number | null
    score: number | null
    maxScore: number | null
  }

  export type AttemptMinAggregateOutputType = {
    id: number | null
    evaluationId: number | null
    takerName: string | null
    takerEmail: string | null
    takerPhone: string | null
    takerTitle: string | null
    startedAt: Date | null
    submittedAt: Date | null
    score: number | null
    maxScore: number | null
  }

  export type AttemptMaxAggregateOutputType = {
    id: number | null
    evaluationId: number | null
    takerName: string | null
    takerEmail: string | null
    takerPhone: string | null
    takerTitle: string | null
    startedAt: Date | null
    submittedAt: Date | null
    score: number | null
    maxScore: number | null
  }

  export type AttemptCountAggregateOutputType = {
    id: number
    evaluationId: number
    takerName: number
    takerEmail: number
    takerPhone: number
    takerTitle: number
    startedAt: number
    submittedAt: number
    score: number
    maxScore: number
    _all: number
  }


  export type AttemptAvgAggregateInputType = {
    id?: true
    evaluationId?: true
    score?: true
    maxScore?: true
  }

  export type AttemptSumAggregateInputType = {
    id?: true
    evaluationId?: true
    score?: true
    maxScore?: true
  }

  export type AttemptMinAggregateInputType = {
    id?: true
    evaluationId?: true
    takerName?: true
    takerEmail?: true
    takerPhone?: true
    takerTitle?: true
    startedAt?: true
    submittedAt?: true
    score?: true
    maxScore?: true
  }

  export type AttemptMaxAggregateInputType = {
    id?: true
    evaluationId?: true
    takerName?: true
    takerEmail?: true
    takerPhone?: true
    takerTitle?: true
    startedAt?: true
    submittedAt?: true
    score?: true
    maxScore?: true
  }

  export type AttemptCountAggregateInputType = {
    id?: true
    evaluationId?: true
    takerName?: true
    takerEmail?: true
    takerPhone?: true
    takerTitle?: true
    startedAt?: true
    submittedAt?: true
    score?: true
    maxScore?: true
    _all?: true
  }

  export type AttemptAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attempt to aggregate.
     */
    where?: AttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attempts to fetch.
     */
    orderBy?: AttemptOrderByWithRelationInput | AttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Attempts
    **/
    _count?: true | AttemptCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AttemptAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AttemptSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttemptMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttemptMaxAggregateInputType
  }

  export type GetAttemptAggregateType<T extends AttemptAggregateArgs> = {
        [P in keyof T & keyof AggregateAttempt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttempt[P]>
      : GetScalarType<T[P], AggregateAttempt[P]>
  }




  export type AttemptGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttemptWhereInput
    orderBy?: AttemptOrderByWithAggregationInput | AttemptOrderByWithAggregationInput[]
    by: AttemptScalarFieldEnum[] | AttemptScalarFieldEnum
    having?: AttemptScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttemptCountAggregateInputType | true
    _avg?: AttemptAvgAggregateInputType
    _sum?: AttemptSumAggregateInputType
    _min?: AttemptMinAggregateInputType
    _max?: AttemptMaxAggregateInputType
  }

  export type AttemptGroupByOutputType = {
    id: number
    evaluationId: number
    takerName: string
    takerEmail: string
    takerPhone: string | null
    takerTitle: string | null
    startedAt: Date
    submittedAt: Date | null
    score: number | null
    maxScore: number | null
    _count: AttemptCountAggregateOutputType | null
    _avg: AttemptAvgAggregateOutputType | null
    _sum: AttemptSumAggregateOutputType | null
    _min: AttemptMinAggregateOutputType | null
    _max: AttemptMaxAggregateOutputType | null
  }

  type GetAttemptGroupByPayload<T extends AttemptGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttemptGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttemptGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttemptGroupByOutputType[P]>
            : GetScalarType<T[P], AttemptGroupByOutputType[P]>
        }
      >
    >


  export type AttemptSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    evaluationId?: boolean
    takerName?: boolean
    takerEmail?: boolean
    takerPhone?: boolean
    takerTitle?: boolean
    startedAt?: boolean
    submittedAt?: boolean
    score?: boolean
    maxScore?: boolean
    evaluation?: boolean | EvaluationDefaultArgs<ExtArgs>
    answers?: boolean | Attempt$answersArgs<ExtArgs>
    _count?: boolean | AttemptCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attempt"]>

  export type AttemptSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    evaluationId?: boolean
    takerName?: boolean
    takerEmail?: boolean
    takerPhone?: boolean
    takerTitle?: boolean
    startedAt?: boolean
    submittedAt?: boolean
    score?: boolean
    maxScore?: boolean
    evaluation?: boolean | EvaluationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attempt"]>

  export type AttemptSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    evaluationId?: boolean
    takerName?: boolean
    takerEmail?: boolean
    takerPhone?: boolean
    takerTitle?: boolean
    startedAt?: boolean
    submittedAt?: boolean
    score?: boolean
    maxScore?: boolean
    evaluation?: boolean | EvaluationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attempt"]>

  export type AttemptSelectScalar = {
    id?: boolean
    evaluationId?: boolean
    takerName?: boolean
    takerEmail?: boolean
    takerPhone?: boolean
    takerTitle?: boolean
    startedAt?: boolean
    submittedAt?: boolean
    score?: boolean
    maxScore?: boolean
  }

  export type AttemptOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "evaluationId" | "takerName" | "takerEmail" | "takerPhone" | "takerTitle" | "startedAt" | "submittedAt" | "score" | "maxScore", ExtArgs["result"]["attempt"]>
  export type AttemptInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evaluation?: boolean | EvaluationDefaultArgs<ExtArgs>
    answers?: boolean | Attempt$answersArgs<ExtArgs>
    _count?: boolean | AttemptCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AttemptIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evaluation?: boolean | EvaluationDefaultArgs<ExtArgs>
  }
  export type AttemptIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evaluation?: boolean | EvaluationDefaultArgs<ExtArgs>
  }

  export type $AttemptPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Attempt"
    objects: {
      evaluation: Prisma.$EvaluationPayload<ExtArgs>
      answers: Prisma.$AttemptAnswerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      evaluationId: number
      takerName: string
      takerEmail: string
      takerPhone: string | null
      takerTitle: string | null
      startedAt: Date
      submittedAt: Date | null
      score: number | null
      maxScore: number | null
    }, ExtArgs["result"]["attempt"]>
    composites: {}
  }

  type AttemptGetPayload<S extends boolean | null | undefined | AttemptDefaultArgs> = $Result.GetResult<Prisma.$AttemptPayload, S>

  type AttemptCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttemptFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttemptCountAggregateInputType | true
    }

  export interface AttemptDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Attempt'], meta: { name: 'Attempt' } }
    /**
     * Find zero or one Attempt that matches the filter.
     * @param {AttemptFindUniqueArgs} args - Arguments to find a Attempt
     * @example
     * // Get one Attempt
     * const attempt = await prisma.attempt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttemptFindUniqueArgs>(args: SelectSubset<T, AttemptFindUniqueArgs<ExtArgs>>): Prisma__AttemptClient<$Result.GetResult<Prisma.$AttemptPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Attempt that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttemptFindUniqueOrThrowArgs} args - Arguments to find a Attempt
     * @example
     * // Get one Attempt
     * const attempt = await prisma.attempt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttemptFindUniqueOrThrowArgs>(args: SelectSubset<T, AttemptFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttemptClient<$Result.GetResult<Prisma.$AttemptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attempt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttemptFindFirstArgs} args - Arguments to find a Attempt
     * @example
     * // Get one Attempt
     * const attempt = await prisma.attempt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttemptFindFirstArgs>(args?: SelectSubset<T, AttemptFindFirstArgs<ExtArgs>>): Prisma__AttemptClient<$Result.GetResult<Prisma.$AttemptPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attempt that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttemptFindFirstOrThrowArgs} args - Arguments to find a Attempt
     * @example
     * // Get one Attempt
     * const attempt = await prisma.attempt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttemptFindFirstOrThrowArgs>(args?: SelectSubset<T, AttemptFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttemptClient<$Result.GetResult<Prisma.$AttemptPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Attempts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttemptFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attempts
     * const attempts = await prisma.attempt.findMany()
     * 
     * // Get first 10 Attempts
     * const attempts = await prisma.attempt.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attemptWithIdOnly = await prisma.attempt.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AttemptFindManyArgs>(args?: SelectSubset<T, AttemptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Attempt.
     * @param {AttemptCreateArgs} args - Arguments to create a Attempt.
     * @example
     * // Create one Attempt
     * const Attempt = await prisma.attempt.create({
     *   data: {
     *     // ... data to create a Attempt
     *   }
     * })
     * 
     */
    create<T extends AttemptCreateArgs>(args: SelectSubset<T, AttemptCreateArgs<ExtArgs>>): Prisma__AttemptClient<$Result.GetResult<Prisma.$AttemptPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Attempts.
     * @param {AttemptCreateManyArgs} args - Arguments to create many Attempts.
     * @example
     * // Create many Attempts
     * const attempt = await prisma.attempt.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttemptCreateManyArgs>(args?: SelectSubset<T, AttemptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Attempts and returns the data saved in the database.
     * @param {AttemptCreateManyAndReturnArgs} args - Arguments to create many Attempts.
     * @example
     * // Create many Attempts
     * const attempt = await prisma.attempt.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Attempts and only return the `id`
     * const attemptWithIdOnly = await prisma.attempt.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AttemptCreateManyAndReturnArgs>(args?: SelectSubset<T, AttemptCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttemptPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Attempt.
     * @param {AttemptDeleteArgs} args - Arguments to delete one Attempt.
     * @example
     * // Delete one Attempt
     * const Attempt = await prisma.attempt.delete({
     *   where: {
     *     // ... filter to delete one Attempt
     *   }
     * })
     * 
     */
    delete<T extends AttemptDeleteArgs>(args: SelectSubset<T, AttemptDeleteArgs<ExtArgs>>): Prisma__AttemptClient<$Result.GetResult<Prisma.$AttemptPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Attempt.
     * @param {AttemptUpdateArgs} args - Arguments to update one Attempt.
     * @example
     * // Update one Attempt
     * const attempt = await prisma.attempt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttemptUpdateArgs>(args: SelectSubset<T, AttemptUpdateArgs<ExtArgs>>): Prisma__AttemptClient<$Result.GetResult<Prisma.$AttemptPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Attempts.
     * @param {AttemptDeleteManyArgs} args - Arguments to filter Attempts to delete.
     * @example
     * // Delete a few Attempts
     * const { count } = await prisma.attempt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttemptDeleteManyArgs>(args?: SelectSubset<T, AttemptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attempts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttemptUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attempts
     * const attempt = await prisma.attempt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttemptUpdateManyArgs>(args: SelectSubset<T, AttemptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attempts and returns the data updated in the database.
     * @param {AttemptUpdateManyAndReturnArgs} args - Arguments to update many Attempts.
     * @example
     * // Update many Attempts
     * const attempt = await prisma.attempt.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Attempts and only return the `id`
     * const attemptWithIdOnly = await prisma.attempt.updateManyAndReturn({
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
    updateManyAndReturn<T extends AttemptUpdateManyAndReturnArgs>(args: SelectSubset<T, AttemptUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttemptPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Attempt.
     * @param {AttemptUpsertArgs} args - Arguments to update or create a Attempt.
     * @example
     * // Update or create a Attempt
     * const attempt = await prisma.attempt.upsert({
     *   create: {
     *     // ... data to create a Attempt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attempt we want to update
     *   }
     * })
     */
    upsert<T extends AttemptUpsertArgs>(args: SelectSubset<T, AttemptUpsertArgs<ExtArgs>>): Prisma__AttemptClient<$Result.GetResult<Prisma.$AttemptPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Attempts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttemptCountArgs} args - Arguments to filter Attempts to count.
     * @example
     * // Count the number of Attempts
     * const count = await prisma.attempt.count({
     *   where: {
     *     // ... the filter for the Attempts we want to count
     *   }
     * })
    **/
    count<T extends AttemptCountArgs>(
      args?: Subset<T, AttemptCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttemptCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attempt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttemptAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AttemptAggregateArgs>(args: Subset<T, AttemptAggregateArgs>): Prisma.PrismaPromise<GetAttemptAggregateType<T>>

    /**
     * Group by Attempt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttemptGroupByArgs} args - Group by arguments.
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
      T extends AttemptGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttemptGroupByArgs['orderBy'] }
        : { orderBy?: AttemptGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AttemptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttemptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Attempt model
   */
  readonly fields: AttemptFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Attempt.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttemptClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    evaluation<T extends EvaluationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EvaluationDefaultArgs<ExtArgs>>): Prisma__EvaluationClient<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    answers<T extends Attempt$answersArgs<ExtArgs> = {}>(args?: Subset<T, Attempt$answersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttemptAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Attempt model
   */
  interface AttemptFieldRefs {
    readonly id: FieldRef<"Attempt", 'Int'>
    readonly evaluationId: FieldRef<"Attempt", 'Int'>
    readonly takerName: FieldRef<"Attempt", 'String'>
    readonly takerEmail: FieldRef<"Attempt", 'String'>
    readonly takerPhone: FieldRef<"Attempt", 'String'>
    readonly takerTitle: FieldRef<"Attempt", 'String'>
    readonly startedAt: FieldRef<"Attempt", 'DateTime'>
    readonly submittedAt: FieldRef<"Attempt", 'DateTime'>
    readonly score: FieldRef<"Attempt", 'Int'>
    readonly maxScore: FieldRef<"Attempt", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Attempt findUnique
   */
  export type AttemptFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attempt
     */
    select?: AttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attempt
     */
    omit?: AttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptInclude<ExtArgs> | null
    /**
     * Filter, which Attempt to fetch.
     */
    where: AttemptWhereUniqueInput
  }

  /**
   * Attempt findUniqueOrThrow
   */
  export type AttemptFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attempt
     */
    select?: AttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attempt
     */
    omit?: AttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptInclude<ExtArgs> | null
    /**
     * Filter, which Attempt to fetch.
     */
    where: AttemptWhereUniqueInput
  }

  /**
   * Attempt findFirst
   */
  export type AttemptFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attempt
     */
    select?: AttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attempt
     */
    omit?: AttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptInclude<ExtArgs> | null
    /**
     * Filter, which Attempt to fetch.
     */
    where?: AttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attempts to fetch.
     */
    orderBy?: AttemptOrderByWithRelationInput | AttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attempts.
     */
    cursor?: AttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attempts.
     */
    distinct?: AttemptScalarFieldEnum | AttemptScalarFieldEnum[]
  }

  /**
   * Attempt findFirstOrThrow
   */
  export type AttemptFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attempt
     */
    select?: AttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attempt
     */
    omit?: AttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptInclude<ExtArgs> | null
    /**
     * Filter, which Attempt to fetch.
     */
    where?: AttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attempts to fetch.
     */
    orderBy?: AttemptOrderByWithRelationInput | AttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attempts.
     */
    cursor?: AttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attempts.
     */
    distinct?: AttemptScalarFieldEnum | AttemptScalarFieldEnum[]
  }

  /**
   * Attempt findMany
   */
  export type AttemptFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attempt
     */
    select?: AttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attempt
     */
    omit?: AttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptInclude<ExtArgs> | null
    /**
     * Filter, which Attempts to fetch.
     */
    where?: AttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attempts to fetch.
     */
    orderBy?: AttemptOrderByWithRelationInput | AttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Attempts.
     */
    cursor?: AttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attempts.
     */
    distinct?: AttemptScalarFieldEnum | AttemptScalarFieldEnum[]
  }

  /**
   * Attempt create
   */
  export type AttemptCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attempt
     */
    select?: AttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attempt
     */
    omit?: AttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptInclude<ExtArgs> | null
    /**
     * The data needed to create a Attempt.
     */
    data: XOR<AttemptCreateInput, AttemptUncheckedCreateInput>
  }

  /**
   * Attempt createMany
   */
  export type AttemptCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Attempts.
     */
    data: AttemptCreateManyInput | AttemptCreateManyInput[]
  }

  /**
   * Attempt createManyAndReturn
   */
  export type AttemptCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attempt
     */
    select?: AttemptSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attempt
     */
    omit?: AttemptOmit<ExtArgs> | null
    /**
     * The data used to create many Attempts.
     */
    data: AttemptCreateManyInput | AttemptCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attempt update
   */
  export type AttemptUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attempt
     */
    select?: AttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attempt
     */
    omit?: AttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptInclude<ExtArgs> | null
    /**
     * The data needed to update a Attempt.
     */
    data: XOR<AttemptUpdateInput, AttemptUncheckedUpdateInput>
    /**
     * Choose, which Attempt to update.
     */
    where: AttemptWhereUniqueInput
  }

  /**
   * Attempt updateMany
   */
  export type AttemptUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Attempts.
     */
    data: XOR<AttemptUpdateManyMutationInput, AttemptUncheckedUpdateManyInput>
    /**
     * Filter which Attempts to update
     */
    where?: AttemptWhereInput
    /**
     * Limit how many Attempts to update.
     */
    limit?: number
  }

  /**
   * Attempt updateManyAndReturn
   */
  export type AttemptUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attempt
     */
    select?: AttemptSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attempt
     */
    omit?: AttemptOmit<ExtArgs> | null
    /**
     * The data used to update Attempts.
     */
    data: XOR<AttemptUpdateManyMutationInput, AttemptUncheckedUpdateManyInput>
    /**
     * Filter which Attempts to update
     */
    where?: AttemptWhereInput
    /**
     * Limit how many Attempts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attempt upsert
   */
  export type AttemptUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attempt
     */
    select?: AttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attempt
     */
    omit?: AttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptInclude<ExtArgs> | null
    /**
     * The filter to search for the Attempt to update in case it exists.
     */
    where: AttemptWhereUniqueInput
    /**
     * In case the Attempt found by the `where` argument doesn't exist, create a new Attempt with this data.
     */
    create: XOR<AttemptCreateInput, AttemptUncheckedCreateInput>
    /**
     * In case the Attempt was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttemptUpdateInput, AttemptUncheckedUpdateInput>
  }

  /**
   * Attempt delete
   */
  export type AttemptDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attempt
     */
    select?: AttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attempt
     */
    omit?: AttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptInclude<ExtArgs> | null
    /**
     * Filter which Attempt to delete.
     */
    where: AttemptWhereUniqueInput
  }

  /**
   * Attempt deleteMany
   */
  export type AttemptDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attempts to delete
     */
    where?: AttemptWhereInput
    /**
     * Limit how many Attempts to delete.
     */
    limit?: number
  }

  /**
   * Attempt.answers
   */
  export type Attempt$answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttemptAnswer
     */
    select?: AttemptAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttemptAnswer
     */
    omit?: AttemptAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptAnswerInclude<ExtArgs> | null
    where?: AttemptAnswerWhereInput
    orderBy?: AttemptAnswerOrderByWithRelationInput | AttemptAnswerOrderByWithRelationInput[]
    cursor?: AttemptAnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttemptAnswerScalarFieldEnum | AttemptAnswerScalarFieldEnum[]
  }

  /**
   * Attempt without action
   */
  export type AttemptDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attempt
     */
    select?: AttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attempt
     */
    omit?: AttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptInclude<ExtArgs> | null
  }


  /**
   * Model AttemptAnswer
   */

  export type AggregateAttemptAnswer = {
    _count: AttemptAnswerCountAggregateOutputType | null
    _avg: AttemptAnswerAvgAggregateOutputType | null
    _sum: AttemptAnswerSumAggregateOutputType | null
    _min: AttemptAnswerMinAggregateOutputType | null
    _max: AttemptAnswerMaxAggregateOutputType | null
  }

  export type AttemptAnswerAvgAggregateOutputType = {
    id: number | null
    attemptId: number | null
    questionId: number | null
  }

  export type AttemptAnswerSumAggregateOutputType = {
    id: number | null
    attemptId: number | null
    questionId: number | null
  }

  export type AttemptAnswerMinAggregateOutputType = {
    id: number | null
    attemptId: number | null
    questionId: number | null
    answer: string | null
    isCorrect: boolean | null
  }

  export type AttemptAnswerMaxAggregateOutputType = {
    id: number | null
    attemptId: number | null
    questionId: number | null
    answer: string | null
    isCorrect: boolean | null
  }

  export type AttemptAnswerCountAggregateOutputType = {
    id: number
    attemptId: number
    questionId: number
    answer: number
    isCorrect: number
    _all: number
  }


  export type AttemptAnswerAvgAggregateInputType = {
    id?: true
    attemptId?: true
    questionId?: true
  }

  export type AttemptAnswerSumAggregateInputType = {
    id?: true
    attemptId?: true
    questionId?: true
  }

  export type AttemptAnswerMinAggregateInputType = {
    id?: true
    attemptId?: true
    questionId?: true
    answer?: true
    isCorrect?: true
  }

  export type AttemptAnswerMaxAggregateInputType = {
    id?: true
    attemptId?: true
    questionId?: true
    answer?: true
    isCorrect?: true
  }

  export type AttemptAnswerCountAggregateInputType = {
    id?: true
    attemptId?: true
    questionId?: true
    answer?: true
    isCorrect?: true
    _all?: true
  }

  export type AttemptAnswerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AttemptAnswer to aggregate.
     */
    where?: AttemptAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttemptAnswers to fetch.
     */
    orderBy?: AttemptAnswerOrderByWithRelationInput | AttemptAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttemptAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttemptAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttemptAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AttemptAnswers
    **/
    _count?: true | AttemptAnswerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AttemptAnswerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AttemptAnswerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttemptAnswerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttemptAnswerMaxAggregateInputType
  }

  export type GetAttemptAnswerAggregateType<T extends AttemptAnswerAggregateArgs> = {
        [P in keyof T & keyof AggregateAttemptAnswer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttemptAnswer[P]>
      : GetScalarType<T[P], AggregateAttemptAnswer[P]>
  }




  export type AttemptAnswerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttemptAnswerWhereInput
    orderBy?: AttemptAnswerOrderByWithAggregationInput | AttemptAnswerOrderByWithAggregationInput[]
    by: AttemptAnswerScalarFieldEnum[] | AttemptAnswerScalarFieldEnum
    having?: AttemptAnswerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttemptAnswerCountAggregateInputType | true
    _avg?: AttemptAnswerAvgAggregateInputType
    _sum?: AttemptAnswerSumAggregateInputType
    _min?: AttemptAnswerMinAggregateInputType
    _max?: AttemptAnswerMaxAggregateInputType
  }

  export type AttemptAnswerGroupByOutputType = {
    id: number
    attemptId: number
    questionId: number
    answer: string | null
    isCorrect: boolean
    _count: AttemptAnswerCountAggregateOutputType | null
    _avg: AttemptAnswerAvgAggregateOutputType | null
    _sum: AttemptAnswerSumAggregateOutputType | null
    _min: AttemptAnswerMinAggregateOutputType | null
    _max: AttemptAnswerMaxAggregateOutputType | null
  }

  type GetAttemptAnswerGroupByPayload<T extends AttemptAnswerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttemptAnswerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttemptAnswerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttemptAnswerGroupByOutputType[P]>
            : GetScalarType<T[P], AttemptAnswerGroupByOutputType[P]>
        }
      >
    >


  export type AttemptAnswerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    attemptId?: boolean
    questionId?: boolean
    answer?: boolean
    isCorrect?: boolean
    attempt?: boolean | AttemptDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attemptAnswer"]>

  export type AttemptAnswerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    attemptId?: boolean
    questionId?: boolean
    answer?: boolean
    isCorrect?: boolean
    attempt?: boolean | AttemptDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attemptAnswer"]>

  export type AttemptAnswerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    attemptId?: boolean
    questionId?: boolean
    answer?: boolean
    isCorrect?: boolean
    attempt?: boolean | AttemptDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attemptAnswer"]>

  export type AttemptAnswerSelectScalar = {
    id?: boolean
    attemptId?: boolean
    questionId?: boolean
    answer?: boolean
    isCorrect?: boolean
  }

  export type AttemptAnswerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "attemptId" | "questionId" | "answer" | "isCorrect", ExtArgs["result"]["attemptAnswer"]>
  export type AttemptAnswerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attempt?: boolean | AttemptDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }
  export type AttemptAnswerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attempt?: boolean | AttemptDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }
  export type AttemptAnswerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attempt?: boolean | AttemptDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }

  export type $AttemptAnswerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AttemptAnswer"
    objects: {
      attempt: Prisma.$AttemptPayload<ExtArgs>
      question: Prisma.$QuestionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      attemptId: number
      questionId: number
      answer: string | null
      isCorrect: boolean
    }, ExtArgs["result"]["attemptAnswer"]>
    composites: {}
  }

  type AttemptAnswerGetPayload<S extends boolean | null | undefined | AttemptAnswerDefaultArgs> = $Result.GetResult<Prisma.$AttemptAnswerPayload, S>

  type AttemptAnswerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttemptAnswerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttemptAnswerCountAggregateInputType | true
    }

  export interface AttemptAnswerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AttemptAnswer'], meta: { name: 'AttemptAnswer' } }
    /**
     * Find zero or one AttemptAnswer that matches the filter.
     * @param {AttemptAnswerFindUniqueArgs} args - Arguments to find a AttemptAnswer
     * @example
     * // Get one AttemptAnswer
     * const attemptAnswer = await prisma.attemptAnswer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttemptAnswerFindUniqueArgs>(args: SelectSubset<T, AttemptAnswerFindUniqueArgs<ExtArgs>>): Prisma__AttemptAnswerClient<$Result.GetResult<Prisma.$AttemptAnswerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AttemptAnswer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttemptAnswerFindUniqueOrThrowArgs} args - Arguments to find a AttemptAnswer
     * @example
     * // Get one AttemptAnswer
     * const attemptAnswer = await prisma.attemptAnswer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttemptAnswerFindUniqueOrThrowArgs>(args: SelectSubset<T, AttemptAnswerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttemptAnswerClient<$Result.GetResult<Prisma.$AttemptAnswerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AttemptAnswer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttemptAnswerFindFirstArgs} args - Arguments to find a AttemptAnswer
     * @example
     * // Get one AttemptAnswer
     * const attemptAnswer = await prisma.attemptAnswer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttemptAnswerFindFirstArgs>(args?: SelectSubset<T, AttemptAnswerFindFirstArgs<ExtArgs>>): Prisma__AttemptAnswerClient<$Result.GetResult<Prisma.$AttemptAnswerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AttemptAnswer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttemptAnswerFindFirstOrThrowArgs} args - Arguments to find a AttemptAnswer
     * @example
     * // Get one AttemptAnswer
     * const attemptAnswer = await prisma.attemptAnswer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttemptAnswerFindFirstOrThrowArgs>(args?: SelectSubset<T, AttemptAnswerFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttemptAnswerClient<$Result.GetResult<Prisma.$AttemptAnswerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AttemptAnswers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttemptAnswerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AttemptAnswers
     * const attemptAnswers = await prisma.attemptAnswer.findMany()
     * 
     * // Get first 10 AttemptAnswers
     * const attemptAnswers = await prisma.attemptAnswer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attemptAnswerWithIdOnly = await prisma.attemptAnswer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AttemptAnswerFindManyArgs>(args?: SelectSubset<T, AttemptAnswerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttemptAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AttemptAnswer.
     * @param {AttemptAnswerCreateArgs} args - Arguments to create a AttemptAnswer.
     * @example
     * // Create one AttemptAnswer
     * const AttemptAnswer = await prisma.attemptAnswer.create({
     *   data: {
     *     // ... data to create a AttemptAnswer
     *   }
     * })
     * 
     */
    create<T extends AttemptAnswerCreateArgs>(args: SelectSubset<T, AttemptAnswerCreateArgs<ExtArgs>>): Prisma__AttemptAnswerClient<$Result.GetResult<Prisma.$AttemptAnswerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AttemptAnswers.
     * @param {AttemptAnswerCreateManyArgs} args - Arguments to create many AttemptAnswers.
     * @example
     * // Create many AttemptAnswers
     * const attemptAnswer = await prisma.attemptAnswer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttemptAnswerCreateManyArgs>(args?: SelectSubset<T, AttemptAnswerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AttemptAnswers and returns the data saved in the database.
     * @param {AttemptAnswerCreateManyAndReturnArgs} args - Arguments to create many AttemptAnswers.
     * @example
     * // Create many AttemptAnswers
     * const attemptAnswer = await prisma.attemptAnswer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AttemptAnswers and only return the `id`
     * const attemptAnswerWithIdOnly = await prisma.attemptAnswer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AttemptAnswerCreateManyAndReturnArgs>(args?: SelectSubset<T, AttemptAnswerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttemptAnswerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AttemptAnswer.
     * @param {AttemptAnswerDeleteArgs} args - Arguments to delete one AttemptAnswer.
     * @example
     * // Delete one AttemptAnswer
     * const AttemptAnswer = await prisma.attemptAnswer.delete({
     *   where: {
     *     // ... filter to delete one AttemptAnswer
     *   }
     * })
     * 
     */
    delete<T extends AttemptAnswerDeleteArgs>(args: SelectSubset<T, AttemptAnswerDeleteArgs<ExtArgs>>): Prisma__AttemptAnswerClient<$Result.GetResult<Prisma.$AttemptAnswerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AttemptAnswer.
     * @param {AttemptAnswerUpdateArgs} args - Arguments to update one AttemptAnswer.
     * @example
     * // Update one AttemptAnswer
     * const attemptAnswer = await prisma.attemptAnswer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttemptAnswerUpdateArgs>(args: SelectSubset<T, AttemptAnswerUpdateArgs<ExtArgs>>): Prisma__AttemptAnswerClient<$Result.GetResult<Prisma.$AttemptAnswerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AttemptAnswers.
     * @param {AttemptAnswerDeleteManyArgs} args - Arguments to filter AttemptAnswers to delete.
     * @example
     * // Delete a few AttemptAnswers
     * const { count } = await prisma.attemptAnswer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttemptAnswerDeleteManyArgs>(args?: SelectSubset<T, AttemptAnswerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AttemptAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttemptAnswerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AttemptAnswers
     * const attemptAnswer = await prisma.attemptAnswer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttemptAnswerUpdateManyArgs>(args: SelectSubset<T, AttemptAnswerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AttemptAnswers and returns the data updated in the database.
     * @param {AttemptAnswerUpdateManyAndReturnArgs} args - Arguments to update many AttemptAnswers.
     * @example
     * // Update many AttemptAnswers
     * const attemptAnswer = await prisma.attemptAnswer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AttemptAnswers and only return the `id`
     * const attemptAnswerWithIdOnly = await prisma.attemptAnswer.updateManyAndReturn({
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
    updateManyAndReturn<T extends AttemptAnswerUpdateManyAndReturnArgs>(args: SelectSubset<T, AttemptAnswerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttemptAnswerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AttemptAnswer.
     * @param {AttemptAnswerUpsertArgs} args - Arguments to update or create a AttemptAnswer.
     * @example
     * // Update or create a AttemptAnswer
     * const attemptAnswer = await prisma.attemptAnswer.upsert({
     *   create: {
     *     // ... data to create a AttemptAnswer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AttemptAnswer we want to update
     *   }
     * })
     */
    upsert<T extends AttemptAnswerUpsertArgs>(args: SelectSubset<T, AttemptAnswerUpsertArgs<ExtArgs>>): Prisma__AttemptAnswerClient<$Result.GetResult<Prisma.$AttemptAnswerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AttemptAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttemptAnswerCountArgs} args - Arguments to filter AttemptAnswers to count.
     * @example
     * // Count the number of AttemptAnswers
     * const count = await prisma.attemptAnswer.count({
     *   where: {
     *     // ... the filter for the AttemptAnswers we want to count
     *   }
     * })
    **/
    count<T extends AttemptAnswerCountArgs>(
      args?: Subset<T, AttemptAnswerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttemptAnswerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AttemptAnswer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttemptAnswerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AttemptAnswerAggregateArgs>(args: Subset<T, AttemptAnswerAggregateArgs>): Prisma.PrismaPromise<GetAttemptAnswerAggregateType<T>>

    /**
     * Group by AttemptAnswer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttemptAnswerGroupByArgs} args - Group by arguments.
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
      T extends AttemptAnswerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttemptAnswerGroupByArgs['orderBy'] }
        : { orderBy?: AttemptAnswerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AttemptAnswerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttemptAnswerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AttemptAnswer model
   */
  readonly fields: AttemptAnswerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AttemptAnswer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttemptAnswerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    attempt<T extends AttemptDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AttemptDefaultArgs<ExtArgs>>): Prisma__AttemptClient<$Result.GetResult<Prisma.$AttemptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    question<T extends QuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionDefaultArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AttemptAnswer model
   */
  interface AttemptAnswerFieldRefs {
    readonly id: FieldRef<"AttemptAnswer", 'Int'>
    readonly attemptId: FieldRef<"AttemptAnswer", 'Int'>
    readonly questionId: FieldRef<"AttemptAnswer", 'Int'>
    readonly answer: FieldRef<"AttemptAnswer", 'String'>
    readonly isCorrect: FieldRef<"AttemptAnswer", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * AttemptAnswer findUnique
   */
  export type AttemptAnswerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttemptAnswer
     */
    select?: AttemptAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttemptAnswer
     */
    omit?: AttemptAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptAnswerInclude<ExtArgs> | null
    /**
     * Filter, which AttemptAnswer to fetch.
     */
    where: AttemptAnswerWhereUniqueInput
  }

  /**
   * AttemptAnswer findUniqueOrThrow
   */
  export type AttemptAnswerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttemptAnswer
     */
    select?: AttemptAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttemptAnswer
     */
    omit?: AttemptAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptAnswerInclude<ExtArgs> | null
    /**
     * Filter, which AttemptAnswer to fetch.
     */
    where: AttemptAnswerWhereUniqueInput
  }

  /**
   * AttemptAnswer findFirst
   */
  export type AttemptAnswerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttemptAnswer
     */
    select?: AttemptAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttemptAnswer
     */
    omit?: AttemptAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptAnswerInclude<ExtArgs> | null
    /**
     * Filter, which AttemptAnswer to fetch.
     */
    where?: AttemptAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttemptAnswers to fetch.
     */
    orderBy?: AttemptAnswerOrderByWithRelationInput | AttemptAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AttemptAnswers.
     */
    cursor?: AttemptAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttemptAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttemptAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AttemptAnswers.
     */
    distinct?: AttemptAnswerScalarFieldEnum | AttemptAnswerScalarFieldEnum[]
  }

  /**
   * AttemptAnswer findFirstOrThrow
   */
  export type AttemptAnswerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttemptAnswer
     */
    select?: AttemptAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttemptAnswer
     */
    omit?: AttemptAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptAnswerInclude<ExtArgs> | null
    /**
     * Filter, which AttemptAnswer to fetch.
     */
    where?: AttemptAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttemptAnswers to fetch.
     */
    orderBy?: AttemptAnswerOrderByWithRelationInput | AttemptAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AttemptAnswers.
     */
    cursor?: AttemptAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttemptAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttemptAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AttemptAnswers.
     */
    distinct?: AttemptAnswerScalarFieldEnum | AttemptAnswerScalarFieldEnum[]
  }

  /**
   * AttemptAnswer findMany
   */
  export type AttemptAnswerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttemptAnswer
     */
    select?: AttemptAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttemptAnswer
     */
    omit?: AttemptAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptAnswerInclude<ExtArgs> | null
    /**
     * Filter, which AttemptAnswers to fetch.
     */
    where?: AttemptAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttemptAnswers to fetch.
     */
    orderBy?: AttemptAnswerOrderByWithRelationInput | AttemptAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AttemptAnswers.
     */
    cursor?: AttemptAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttemptAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttemptAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AttemptAnswers.
     */
    distinct?: AttemptAnswerScalarFieldEnum | AttemptAnswerScalarFieldEnum[]
  }

  /**
   * AttemptAnswer create
   */
  export type AttemptAnswerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttemptAnswer
     */
    select?: AttemptAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttemptAnswer
     */
    omit?: AttemptAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptAnswerInclude<ExtArgs> | null
    /**
     * The data needed to create a AttemptAnswer.
     */
    data: XOR<AttemptAnswerCreateInput, AttemptAnswerUncheckedCreateInput>
  }

  /**
   * AttemptAnswer createMany
   */
  export type AttemptAnswerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AttemptAnswers.
     */
    data: AttemptAnswerCreateManyInput | AttemptAnswerCreateManyInput[]
  }

  /**
   * AttemptAnswer createManyAndReturn
   */
  export type AttemptAnswerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttemptAnswer
     */
    select?: AttemptAnswerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AttemptAnswer
     */
    omit?: AttemptAnswerOmit<ExtArgs> | null
    /**
     * The data used to create many AttemptAnswers.
     */
    data: AttemptAnswerCreateManyInput | AttemptAnswerCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptAnswerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AttemptAnswer update
   */
  export type AttemptAnswerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttemptAnswer
     */
    select?: AttemptAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttemptAnswer
     */
    omit?: AttemptAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptAnswerInclude<ExtArgs> | null
    /**
     * The data needed to update a AttemptAnswer.
     */
    data: XOR<AttemptAnswerUpdateInput, AttemptAnswerUncheckedUpdateInput>
    /**
     * Choose, which AttemptAnswer to update.
     */
    where: AttemptAnswerWhereUniqueInput
  }

  /**
   * AttemptAnswer updateMany
   */
  export type AttemptAnswerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AttemptAnswers.
     */
    data: XOR<AttemptAnswerUpdateManyMutationInput, AttemptAnswerUncheckedUpdateManyInput>
    /**
     * Filter which AttemptAnswers to update
     */
    where?: AttemptAnswerWhereInput
    /**
     * Limit how many AttemptAnswers to update.
     */
    limit?: number
  }

  /**
   * AttemptAnswer updateManyAndReturn
   */
  export type AttemptAnswerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttemptAnswer
     */
    select?: AttemptAnswerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AttemptAnswer
     */
    omit?: AttemptAnswerOmit<ExtArgs> | null
    /**
     * The data used to update AttemptAnswers.
     */
    data: XOR<AttemptAnswerUpdateManyMutationInput, AttemptAnswerUncheckedUpdateManyInput>
    /**
     * Filter which AttemptAnswers to update
     */
    where?: AttemptAnswerWhereInput
    /**
     * Limit how many AttemptAnswers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptAnswerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AttemptAnswer upsert
   */
  export type AttemptAnswerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttemptAnswer
     */
    select?: AttemptAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttemptAnswer
     */
    omit?: AttemptAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptAnswerInclude<ExtArgs> | null
    /**
     * The filter to search for the AttemptAnswer to update in case it exists.
     */
    where: AttemptAnswerWhereUniqueInput
    /**
     * In case the AttemptAnswer found by the `where` argument doesn't exist, create a new AttemptAnswer with this data.
     */
    create: XOR<AttemptAnswerCreateInput, AttemptAnswerUncheckedCreateInput>
    /**
     * In case the AttemptAnswer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttemptAnswerUpdateInput, AttemptAnswerUncheckedUpdateInput>
  }

  /**
   * AttemptAnswer delete
   */
  export type AttemptAnswerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttemptAnswer
     */
    select?: AttemptAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttemptAnswer
     */
    omit?: AttemptAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptAnswerInclude<ExtArgs> | null
    /**
     * Filter which AttemptAnswer to delete.
     */
    where: AttemptAnswerWhereUniqueInput
  }

  /**
   * AttemptAnswer deleteMany
   */
  export type AttemptAnswerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AttemptAnswers to delete
     */
    where?: AttemptAnswerWhereInput
    /**
     * Limit how many AttemptAnswers to delete.
     */
    limit?: number
  }

  /**
   * AttemptAnswer without action
   */
  export type AttemptAnswerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttemptAnswer
     */
    select?: AttemptAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttemptAnswer
     */
    omit?: AttemptAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptAnswerInclude<ExtArgs> | null
  }


  /**
   * Model ProgramReview
   */

  export type AggregateProgramReview = {
    _count: ProgramReviewCountAggregateOutputType | null
    _avg: ProgramReviewAvgAggregateOutputType | null
    _sum: ProgramReviewSumAggregateOutputType | null
    _min: ProgramReviewMinAggregateOutputType | null
    _max: ProgramReviewMaxAggregateOutputType | null
  }

  export type ProgramReviewAvgAggregateOutputType = {
    id: number | null
    programId: number | null
    rating: number | null
  }

  export type ProgramReviewSumAggregateOutputType = {
    id: number | null
    programId: number | null
    rating: number | null
  }

  export type ProgramReviewMinAggregateOutputType = {
    id: number | null
    programId: number | null
    reviewerName: string | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
  }

  export type ProgramReviewMaxAggregateOutputType = {
    id: number | null
    programId: number | null
    reviewerName: string | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
  }

  export type ProgramReviewCountAggregateOutputType = {
    id: number
    programId: number
    reviewerName: number
    rating: number
    comment: number
    createdAt: number
    _all: number
  }


  export type ProgramReviewAvgAggregateInputType = {
    id?: true
    programId?: true
    rating?: true
  }

  export type ProgramReviewSumAggregateInputType = {
    id?: true
    programId?: true
    rating?: true
  }

  export type ProgramReviewMinAggregateInputType = {
    id?: true
    programId?: true
    reviewerName?: true
    rating?: true
    comment?: true
    createdAt?: true
  }

  export type ProgramReviewMaxAggregateInputType = {
    id?: true
    programId?: true
    reviewerName?: true
    rating?: true
    comment?: true
    createdAt?: true
  }

  export type ProgramReviewCountAggregateInputType = {
    id?: true
    programId?: true
    reviewerName?: true
    rating?: true
    comment?: true
    createdAt?: true
    _all?: true
  }

  export type ProgramReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProgramReview to aggregate.
     */
    where?: ProgramReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgramReviews to fetch.
     */
    orderBy?: ProgramReviewOrderByWithRelationInput | ProgramReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProgramReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgramReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgramReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProgramReviews
    **/
    _count?: true | ProgramReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProgramReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProgramReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProgramReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProgramReviewMaxAggregateInputType
  }

  export type GetProgramReviewAggregateType<T extends ProgramReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateProgramReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProgramReview[P]>
      : GetScalarType<T[P], AggregateProgramReview[P]>
  }




  export type ProgramReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgramReviewWhereInput
    orderBy?: ProgramReviewOrderByWithAggregationInput | ProgramReviewOrderByWithAggregationInput[]
    by: ProgramReviewScalarFieldEnum[] | ProgramReviewScalarFieldEnum
    having?: ProgramReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProgramReviewCountAggregateInputType | true
    _avg?: ProgramReviewAvgAggregateInputType
    _sum?: ProgramReviewSumAggregateInputType
    _min?: ProgramReviewMinAggregateInputType
    _max?: ProgramReviewMaxAggregateInputType
  }

  export type ProgramReviewGroupByOutputType = {
    id: number
    programId: number
    reviewerName: string
    rating: number
    comment: string | null
    createdAt: Date
    _count: ProgramReviewCountAggregateOutputType | null
    _avg: ProgramReviewAvgAggregateOutputType | null
    _sum: ProgramReviewSumAggregateOutputType | null
    _min: ProgramReviewMinAggregateOutputType | null
    _max: ProgramReviewMaxAggregateOutputType | null
  }

  type GetProgramReviewGroupByPayload<T extends ProgramReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProgramReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProgramReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProgramReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ProgramReviewGroupByOutputType[P]>
        }
      >
    >


  export type ProgramReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    programId?: boolean
    reviewerName?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    program?: boolean | ProgramDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["programReview"]>

  export type ProgramReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    programId?: boolean
    reviewerName?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    program?: boolean | ProgramDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["programReview"]>

  export type ProgramReviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    programId?: boolean
    reviewerName?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    program?: boolean | ProgramDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["programReview"]>

  export type ProgramReviewSelectScalar = {
    id?: boolean
    programId?: boolean
    reviewerName?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
  }

  export type ProgramReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "programId" | "reviewerName" | "rating" | "comment" | "createdAt", ExtArgs["result"]["programReview"]>
  export type ProgramReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    program?: boolean | ProgramDefaultArgs<ExtArgs>
  }
  export type ProgramReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    program?: boolean | ProgramDefaultArgs<ExtArgs>
  }
  export type ProgramReviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    program?: boolean | ProgramDefaultArgs<ExtArgs>
  }

  export type $ProgramReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProgramReview"
    objects: {
      program: Prisma.$ProgramPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      programId: number
      reviewerName: string
      rating: number
      comment: string | null
      createdAt: Date
    }, ExtArgs["result"]["programReview"]>
    composites: {}
  }

  type ProgramReviewGetPayload<S extends boolean | null | undefined | ProgramReviewDefaultArgs> = $Result.GetResult<Prisma.$ProgramReviewPayload, S>

  type ProgramReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProgramReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProgramReviewCountAggregateInputType | true
    }

  export interface ProgramReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProgramReview'], meta: { name: 'ProgramReview' } }
    /**
     * Find zero or one ProgramReview that matches the filter.
     * @param {ProgramReviewFindUniqueArgs} args - Arguments to find a ProgramReview
     * @example
     * // Get one ProgramReview
     * const programReview = await prisma.programReview.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProgramReviewFindUniqueArgs>(args: SelectSubset<T, ProgramReviewFindUniqueArgs<ExtArgs>>): Prisma__ProgramReviewClient<$Result.GetResult<Prisma.$ProgramReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProgramReview that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProgramReviewFindUniqueOrThrowArgs} args - Arguments to find a ProgramReview
     * @example
     * // Get one ProgramReview
     * const programReview = await prisma.programReview.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProgramReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ProgramReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProgramReviewClient<$Result.GetResult<Prisma.$ProgramReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProgramReview that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramReviewFindFirstArgs} args - Arguments to find a ProgramReview
     * @example
     * // Get one ProgramReview
     * const programReview = await prisma.programReview.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProgramReviewFindFirstArgs>(args?: SelectSubset<T, ProgramReviewFindFirstArgs<ExtArgs>>): Prisma__ProgramReviewClient<$Result.GetResult<Prisma.$ProgramReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProgramReview that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramReviewFindFirstOrThrowArgs} args - Arguments to find a ProgramReview
     * @example
     * // Get one ProgramReview
     * const programReview = await prisma.programReview.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProgramReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ProgramReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProgramReviewClient<$Result.GetResult<Prisma.$ProgramReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProgramReviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProgramReviews
     * const programReviews = await prisma.programReview.findMany()
     * 
     * // Get first 10 ProgramReviews
     * const programReviews = await prisma.programReview.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const programReviewWithIdOnly = await prisma.programReview.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProgramReviewFindManyArgs>(args?: SelectSubset<T, ProgramReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgramReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProgramReview.
     * @param {ProgramReviewCreateArgs} args - Arguments to create a ProgramReview.
     * @example
     * // Create one ProgramReview
     * const ProgramReview = await prisma.programReview.create({
     *   data: {
     *     // ... data to create a ProgramReview
     *   }
     * })
     * 
     */
    create<T extends ProgramReviewCreateArgs>(args: SelectSubset<T, ProgramReviewCreateArgs<ExtArgs>>): Prisma__ProgramReviewClient<$Result.GetResult<Prisma.$ProgramReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProgramReviews.
     * @param {ProgramReviewCreateManyArgs} args - Arguments to create many ProgramReviews.
     * @example
     * // Create many ProgramReviews
     * const programReview = await prisma.programReview.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProgramReviewCreateManyArgs>(args?: SelectSubset<T, ProgramReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProgramReviews and returns the data saved in the database.
     * @param {ProgramReviewCreateManyAndReturnArgs} args - Arguments to create many ProgramReviews.
     * @example
     * // Create many ProgramReviews
     * const programReview = await prisma.programReview.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProgramReviews and only return the `id`
     * const programReviewWithIdOnly = await prisma.programReview.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProgramReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, ProgramReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgramReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProgramReview.
     * @param {ProgramReviewDeleteArgs} args - Arguments to delete one ProgramReview.
     * @example
     * // Delete one ProgramReview
     * const ProgramReview = await prisma.programReview.delete({
     *   where: {
     *     // ... filter to delete one ProgramReview
     *   }
     * })
     * 
     */
    delete<T extends ProgramReviewDeleteArgs>(args: SelectSubset<T, ProgramReviewDeleteArgs<ExtArgs>>): Prisma__ProgramReviewClient<$Result.GetResult<Prisma.$ProgramReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProgramReview.
     * @param {ProgramReviewUpdateArgs} args - Arguments to update one ProgramReview.
     * @example
     * // Update one ProgramReview
     * const programReview = await prisma.programReview.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProgramReviewUpdateArgs>(args: SelectSubset<T, ProgramReviewUpdateArgs<ExtArgs>>): Prisma__ProgramReviewClient<$Result.GetResult<Prisma.$ProgramReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProgramReviews.
     * @param {ProgramReviewDeleteManyArgs} args - Arguments to filter ProgramReviews to delete.
     * @example
     * // Delete a few ProgramReviews
     * const { count } = await prisma.programReview.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProgramReviewDeleteManyArgs>(args?: SelectSubset<T, ProgramReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProgramReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProgramReviews
     * const programReview = await prisma.programReview.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProgramReviewUpdateManyArgs>(args: SelectSubset<T, ProgramReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProgramReviews and returns the data updated in the database.
     * @param {ProgramReviewUpdateManyAndReturnArgs} args - Arguments to update many ProgramReviews.
     * @example
     * // Update many ProgramReviews
     * const programReview = await prisma.programReview.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProgramReviews and only return the `id`
     * const programReviewWithIdOnly = await prisma.programReview.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProgramReviewUpdateManyAndReturnArgs>(args: SelectSubset<T, ProgramReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgramReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProgramReview.
     * @param {ProgramReviewUpsertArgs} args - Arguments to update or create a ProgramReview.
     * @example
     * // Update or create a ProgramReview
     * const programReview = await prisma.programReview.upsert({
     *   create: {
     *     // ... data to create a ProgramReview
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProgramReview we want to update
     *   }
     * })
     */
    upsert<T extends ProgramReviewUpsertArgs>(args: SelectSubset<T, ProgramReviewUpsertArgs<ExtArgs>>): Prisma__ProgramReviewClient<$Result.GetResult<Prisma.$ProgramReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProgramReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramReviewCountArgs} args - Arguments to filter ProgramReviews to count.
     * @example
     * // Count the number of ProgramReviews
     * const count = await prisma.programReview.count({
     *   where: {
     *     // ... the filter for the ProgramReviews we want to count
     *   }
     * })
    **/
    count<T extends ProgramReviewCountArgs>(
      args?: Subset<T, ProgramReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProgramReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProgramReview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProgramReviewAggregateArgs>(args: Subset<T, ProgramReviewAggregateArgs>): Prisma.PrismaPromise<GetProgramReviewAggregateType<T>>

    /**
     * Group by ProgramReview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramReviewGroupByArgs} args - Group by arguments.
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
      T extends ProgramReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProgramReviewGroupByArgs['orderBy'] }
        : { orderBy?: ProgramReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProgramReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProgramReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProgramReview model
   */
  readonly fields: ProgramReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProgramReview.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProgramReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    program<T extends ProgramDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProgramDefaultArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProgramReview model
   */
  interface ProgramReviewFieldRefs {
    readonly id: FieldRef<"ProgramReview", 'Int'>
    readonly programId: FieldRef<"ProgramReview", 'Int'>
    readonly reviewerName: FieldRef<"ProgramReview", 'String'>
    readonly rating: FieldRef<"ProgramReview", 'Int'>
    readonly comment: FieldRef<"ProgramReview", 'String'>
    readonly createdAt: FieldRef<"ProgramReview", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProgramReview findUnique
   */
  export type ProgramReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramReview
     */
    select?: ProgramReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramReview
     */
    omit?: ProgramReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramReviewInclude<ExtArgs> | null
    /**
     * Filter, which ProgramReview to fetch.
     */
    where: ProgramReviewWhereUniqueInput
  }

  /**
   * ProgramReview findUniqueOrThrow
   */
  export type ProgramReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramReview
     */
    select?: ProgramReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramReview
     */
    omit?: ProgramReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramReviewInclude<ExtArgs> | null
    /**
     * Filter, which ProgramReview to fetch.
     */
    where: ProgramReviewWhereUniqueInput
  }

  /**
   * ProgramReview findFirst
   */
  export type ProgramReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramReview
     */
    select?: ProgramReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramReview
     */
    omit?: ProgramReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramReviewInclude<ExtArgs> | null
    /**
     * Filter, which ProgramReview to fetch.
     */
    where?: ProgramReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgramReviews to fetch.
     */
    orderBy?: ProgramReviewOrderByWithRelationInput | ProgramReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProgramReviews.
     */
    cursor?: ProgramReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgramReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgramReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProgramReviews.
     */
    distinct?: ProgramReviewScalarFieldEnum | ProgramReviewScalarFieldEnum[]
  }

  /**
   * ProgramReview findFirstOrThrow
   */
  export type ProgramReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramReview
     */
    select?: ProgramReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramReview
     */
    omit?: ProgramReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramReviewInclude<ExtArgs> | null
    /**
     * Filter, which ProgramReview to fetch.
     */
    where?: ProgramReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgramReviews to fetch.
     */
    orderBy?: ProgramReviewOrderByWithRelationInput | ProgramReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProgramReviews.
     */
    cursor?: ProgramReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgramReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgramReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProgramReviews.
     */
    distinct?: ProgramReviewScalarFieldEnum | ProgramReviewScalarFieldEnum[]
  }

  /**
   * ProgramReview findMany
   */
  export type ProgramReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramReview
     */
    select?: ProgramReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramReview
     */
    omit?: ProgramReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramReviewInclude<ExtArgs> | null
    /**
     * Filter, which ProgramReviews to fetch.
     */
    where?: ProgramReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgramReviews to fetch.
     */
    orderBy?: ProgramReviewOrderByWithRelationInput | ProgramReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProgramReviews.
     */
    cursor?: ProgramReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgramReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgramReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProgramReviews.
     */
    distinct?: ProgramReviewScalarFieldEnum | ProgramReviewScalarFieldEnum[]
  }

  /**
   * ProgramReview create
   */
  export type ProgramReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramReview
     */
    select?: ProgramReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramReview
     */
    omit?: ProgramReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a ProgramReview.
     */
    data: XOR<ProgramReviewCreateInput, ProgramReviewUncheckedCreateInput>
  }

  /**
   * ProgramReview createMany
   */
  export type ProgramReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProgramReviews.
     */
    data: ProgramReviewCreateManyInput | ProgramReviewCreateManyInput[]
  }

  /**
   * ProgramReview createManyAndReturn
   */
  export type ProgramReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramReview
     */
    select?: ProgramReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramReview
     */
    omit?: ProgramReviewOmit<ExtArgs> | null
    /**
     * The data used to create many ProgramReviews.
     */
    data: ProgramReviewCreateManyInput | ProgramReviewCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProgramReview update
   */
  export type ProgramReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramReview
     */
    select?: ProgramReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramReview
     */
    omit?: ProgramReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a ProgramReview.
     */
    data: XOR<ProgramReviewUpdateInput, ProgramReviewUncheckedUpdateInput>
    /**
     * Choose, which ProgramReview to update.
     */
    where: ProgramReviewWhereUniqueInput
  }

  /**
   * ProgramReview updateMany
   */
  export type ProgramReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProgramReviews.
     */
    data: XOR<ProgramReviewUpdateManyMutationInput, ProgramReviewUncheckedUpdateManyInput>
    /**
     * Filter which ProgramReviews to update
     */
    where?: ProgramReviewWhereInput
    /**
     * Limit how many ProgramReviews to update.
     */
    limit?: number
  }

  /**
   * ProgramReview updateManyAndReturn
   */
  export type ProgramReviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramReview
     */
    select?: ProgramReviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramReview
     */
    omit?: ProgramReviewOmit<ExtArgs> | null
    /**
     * The data used to update ProgramReviews.
     */
    data: XOR<ProgramReviewUpdateManyMutationInput, ProgramReviewUncheckedUpdateManyInput>
    /**
     * Filter which ProgramReviews to update
     */
    where?: ProgramReviewWhereInput
    /**
     * Limit how many ProgramReviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramReviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProgramReview upsert
   */
  export type ProgramReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramReview
     */
    select?: ProgramReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramReview
     */
    omit?: ProgramReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the ProgramReview to update in case it exists.
     */
    where: ProgramReviewWhereUniqueInput
    /**
     * In case the ProgramReview found by the `where` argument doesn't exist, create a new ProgramReview with this data.
     */
    create: XOR<ProgramReviewCreateInput, ProgramReviewUncheckedCreateInput>
    /**
     * In case the ProgramReview was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProgramReviewUpdateInput, ProgramReviewUncheckedUpdateInput>
  }

  /**
   * ProgramReview delete
   */
  export type ProgramReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramReview
     */
    select?: ProgramReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramReview
     */
    omit?: ProgramReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramReviewInclude<ExtArgs> | null
    /**
     * Filter which ProgramReview to delete.
     */
    where: ProgramReviewWhereUniqueInput
  }

  /**
   * ProgramReview deleteMany
   */
  export type ProgramReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProgramReviews to delete
     */
    where?: ProgramReviewWhereInput
    /**
     * Limit how many ProgramReviews to delete.
     */
    limit?: number
  }

  /**
   * ProgramReview without action
   */
  export type ProgramReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramReview
     */
    select?: ProgramReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramReview
     */
    omit?: ProgramReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramReviewInclude<ExtArgs> | null
  }


  /**
   * Model Finding
   */

  export type AggregateFinding = {
    _count: FindingCountAggregateOutputType | null
    _avg: FindingAvgAggregateOutputType | null
    _sum: FindingSumAggregateOutputType | null
    _min: FindingMinAggregateOutputType | null
    _max: FindingMaxAggregateOutputType | null
  }

  export type FindingAvgAggregateOutputType = {
    id: number | null
    auditorId: number | null
  }

  export type FindingSumAggregateOutputType = {
    id: number | null
    auditorId: number | null
  }

  export type FindingMinAggregateOutputType = {
    id: number | null
    code: string | null
    auditorId: number | null
    source: string | null
    clause: string | null
    description: string | null
    category: string | null
    rootCause: string | null
    correction: string | null
    correctiveAction: string | null
    verificationResult: string | null
    status: string | null
    targetDate: Date | null
    evidenceUrl: string | null
    reportedAt: Date | null
    verifiedAt: Date | null
    requestId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FindingMaxAggregateOutputType = {
    id: number | null
    code: string | null
    auditorId: number | null
    source: string | null
    clause: string | null
    description: string | null
    category: string | null
    rootCause: string | null
    correction: string | null
    correctiveAction: string | null
    verificationResult: string | null
    status: string | null
    targetDate: Date | null
    evidenceUrl: string | null
    reportedAt: Date | null
    verifiedAt: Date | null
    requestId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FindingCountAggregateOutputType = {
    id: number
    code: number
    auditorId: number
    source: number
    clause: number
    description: number
    category: number
    rootCause: number
    correction: number
    correctiveAction: number
    verificationResult: number
    status: number
    targetDate: number
    evidenceUrl: number
    reportedAt: number
    verifiedAt: number
    requestId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FindingAvgAggregateInputType = {
    id?: true
    auditorId?: true
  }

  export type FindingSumAggregateInputType = {
    id?: true
    auditorId?: true
  }

  export type FindingMinAggregateInputType = {
    id?: true
    code?: true
    auditorId?: true
    source?: true
    clause?: true
    description?: true
    category?: true
    rootCause?: true
    correction?: true
    correctiveAction?: true
    verificationResult?: true
    status?: true
    targetDate?: true
    evidenceUrl?: true
    reportedAt?: true
    verifiedAt?: true
    requestId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FindingMaxAggregateInputType = {
    id?: true
    code?: true
    auditorId?: true
    source?: true
    clause?: true
    description?: true
    category?: true
    rootCause?: true
    correction?: true
    correctiveAction?: true
    verificationResult?: true
    status?: true
    targetDate?: true
    evidenceUrl?: true
    reportedAt?: true
    verifiedAt?: true
    requestId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FindingCountAggregateInputType = {
    id?: true
    code?: true
    auditorId?: true
    source?: true
    clause?: true
    description?: true
    category?: true
    rootCause?: true
    correction?: true
    correctiveAction?: true
    verificationResult?: true
    status?: true
    targetDate?: true
    evidenceUrl?: true
    reportedAt?: true
    verifiedAt?: true
    requestId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FindingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Finding to aggregate.
     */
    where?: FindingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Findings to fetch.
     */
    orderBy?: FindingOrderByWithRelationInput | FindingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FindingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Findings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Findings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Findings
    **/
    _count?: true | FindingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FindingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FindingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FindingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FindingMaxAggregateInputType
  }

  export type GetFindingAggregateType<T extends FindingAggregateArgs> = {
        [P in keyof T & keyof AggregateFinding]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFinding[P]>
      : GetScalarType<T[P], AggregateFinding[P]>
  }




  export type FindingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FindingWhereInput
    orderBy?: FindingOrderByWithAggregationInput | FindingOrderByWithAggregationInput[]
    by: FindingScalarFieldEnum[] | FindingScalarFieldEnum
    having?: FindingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FindingCountAggregateInputType | true
    _avg?: FindingAvgAggregateInputType
    _sum?: FindingSumAggregateInputType
    _min?: FindingMinAggregateInputType
    _max?: FindingMaxAggregateInputType
  }

  export type FindingGroupByOutputType = {
    id: number
    code: string
    auditorId: number
    source: string
    clause: string
    description: string
    category: string
    rootCause: string | null
    correction: string | null
    correctiveAction: string | null
    verificationResult: string | null
    status: string
    targetDate: Date | null
    evidenceUrl: string | null
    reportedAt: Date
    verifiedAt: Date | null
    requestId: string | null
    createdAt: Date
    updatedAt: Date
    _count: FindingCountAggregateOutputType | null
    _avg: FindingAvgAggregateOutputType | null
    _sum: FindingSumAggregateOutputType | null
    _min: FindingMinAggregateOutputType | null
    _max: FindingMaxAggregateOutputType | null
  }

  type GetFindingGroupByPayload<T extends FindingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FindingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FindingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FindingGroupByOutputType[P]>
            : GetScalarType<T[P], FindingGroupByOutputType[P]>
        }
      >
    >


  export type FindingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    auditorId?: boolean
    source?: boolean
    clause?: boolean
    description?: boolean
    category?: boolean
    rootCause?: boolean
    correction?: boolean
    correctiveAction?: boolean
    verificationResult?: boolean
    status?: boolean
    targetDate?: boolean
    evidenceUrl?: boolean
    reportedAt?: boolean
    verifiedAt?: boolean
    requestId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    auditor?: boolean | InternalUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["finding"]>

  export type FindingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    auditorId?: boolean
    source?: boolean
    clause?: boolean
    description?: boolean
    category?: boolean
    rootCause?: boolean
    correction?: boolean
    correctiveAction?: boolean
    verificationResult?: boolean
    status?: boolean
    targetDate?: boolean
    evidenceUrl?: boolean
    reportedAt?: boolean
    verifiedAt?: boolean
    requestId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    auditor?: boolean | InternalUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["finding"]>

  export type FindingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    auditorId?: boolean
    source?: boolean
    clause?: boolean
    description?: boolean
    category?: boolean
    rootCause?: boolean
    correction?: boolean
    correctiveAction?: boolean
    verificationResult?: boolean
    status?: boolean
    targetDate?: boolean
    evidenceUrl?: boolean
    reportedAt?: boolean
    verifiedAt?: boolean
    requestId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    auditor?: boolean | InternalUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["finding"]>

  export type FindingSelectScalar = {
    id?: boolean
    code?: boolean
    auditorId?: boolean
    source?: boolean
    clause?: boolean
    description?: boolean
    category?: boolean
    rootCause?: boolean
    correction?: boolean
    correctiveAction?: boolean
    verificationResult?: boolean
    status?: boolean
    targetDate?: boolean
    evidenceUrl?: boolean
    reportedAt?: boolean
    verifiedAt?: boolean
    requestId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FindingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "auditorId" | "source" | "clause" | "description" | "category" | "rootCause" | "correction" | "correctiveAction" | "verificationResult" | "status" | "targetDate" | "evidenceUrl" | "reportedAt" | "verifiedAt" | "requestId" | "createdAt" | "updatedAt", ExtArgs["result"]["finding"]>
  export type FindingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auditor?: boolean | InternalUserDefaultArgs<ExtArgs>
  }
  export type FindingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auditor?: boolean | InternalUserDefaultArgs<ExtArgs>
  }
  export type FindingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auditor?: boolean | InternalUserDefaultArgs<ExtArgs>
  }

  export type $FindingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Finding"
    objects: {
      auditor: Prisma.$InternalUserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      code: string
      auditorId: number
      source: string
      clause: string
      description: string
      category: string
      rootCause: string | null
      correction: string | null
      correctiveAction: string | null
      verificationResult: string | null
      status: string
      targetDate: Date | null
      evidenceUrl: string | null
      reportedAt: Date
      verifiedAt: Date | null
      requestId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["finding"]>
    composites: {}
  }

  type FindingGetPayload<S extends boolean | null | undefined | FindingDefaultArgs> = $Result.GetResult<Prisma.$FindingPayload, S>

  type FindingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FindingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FindingCountAggregateInputType | true
    }

  export interface FindingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Finding'], meta: { name: 'Finding' } }
    /**
     * Find zero or one Finding that matches the filter.
     * @param {FindingFindUniqueArgs} args - Arguments to find a Finding
     * @example
     * // Get one Finding
     * const finding = await prisma.finding.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FindingFindUniqueArgs>(args: SelectSubset<T, FindingFindUniqueArgs<ExtArgs>>): Prisma__FindingClient<$Result.GetResult<Prisma.$FindingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Finding that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FindingFindUniqueOrThrowArgs} args - Arguments to find a Finding
     * @example
     * // Get one Finding
     * const finding = await prisma.finding.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FindingFindUniqueOrThrowArgs>(args: SelectSubset<T, FindingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FindingClient<$Result.GetResult<Prisma.$FindingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Finding that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FindingFindFirstArgs} args - Arguments to find a Finding
     * @example
     * // Get one Finding
     * const finding = await prisma.finding.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FindingFindFirstArgs>(args?: SelectSubset<T, FindingFindFirstArgs<ExtArgs>>): Prisma__FindingClient<$Result.GetResult<Prisma.$FindingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Finding that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FindingFindFirstOrThrowArgs} args - Arguments to find a Finding
     * @example
     * // Get one Finding
     * const finding = await prisma.finding.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FindingFindFirstOrThrowArgs>(args?: SelectSubset<T, FindingFindFirstOrThrowArgs<ExtArgs>>): Prisma__FindingClient<$Result.GetResult<Prisma.$FindingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Findings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FindingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Findings
     * const findings = await prisma.finding.findMany()
     * 
     * // Get first 10 Findings
     * const findings = await prisma.finding.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const findingWithIdOnly = await prisma.finding.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FindingFindManyArgs>(args?: SelectSubset<T, FindingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FindingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Finding.
     * @param {FindingCreateArgs} args - Arguments to create a Finding.
     * @example
     * // Create one Finding
     * const Finding = await prisma.finding.create({
     *   data: {
     *     // ... data to create a Finding
     *   }
     * })
     * 
     */
    create<T extends FindingCreateArgs>(args: SelectSubset<T, FindingCreateArgs<ExtArgs>>): Prisma__FindingClient<$Result.GetResult<Prisma.$FindingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Findings.
     * @param {FindingCreateManyArgs} args - Arguments to create many Findings.
     * @example
     * // Create many Findings
     * const finding = await prisma.finding.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FindingCreateManyArgs>(args?: SelectSubset<T, FindingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Findings and returns the data saved in the database.
     * @param {FindingCreateManyAndReturnArgs} args - Arguments to create many Findings.
     * @example
     * // Create many Findings
     * const finding = await prisma.finding.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Findings and only return the `id`
     * const findingWithIdOnly = await prisma.finding.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FindingCreateManyAndReturnArgs>(args?: SelectSubset<T, FindingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FindingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Finding.
     * @param {FindingDeleteArgs} args - Arguments to delete one Finding.
     * @example
     * // Delete one Finding
     * const Finding = await prisma.finding.delete({
     *   where: {
     *     // ... filter to delete one Finding
     *   }
     * })
     * 
     */
    delete<T extends FindingDeleteArgs>(args: SelectSubset<T, FindingDeleteArgs<ExtArgs>>): Prisma__FindingClient<$Result.GetResult<Prisma.$FindingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Finding.
     * @param {FindingUpdateArgs} args - Arguments to update one Finding.
     * @example
     * // Update one Finding
     * const finding = await prisma.finding.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FindingUpdateArgs>(args: SelectSubset<T, FindingUpdateArgs<ExtArgs>>): Prisma__FindingClient<$Result.GetResult<Prisma.$FindingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Findings.
     * @param {FindingDeleteManyArgs} args - Arguments to filter Findings to delete.
     * @example
     * // Delete a few Findings
     * const { count } = await prisma.finding.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FindingDeleteManyArgs>(args?: SelectSubset<T, FindingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Findings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FindingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Findings
     * const finding = await prisma.finding.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FindingUpdateManyArgs>(args: SelectSubset<T, FindingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Findings and returns the data updated in the database.
     * @param {FindingUpdateManyAndReturnArgs} args - Arguments to update many Findings.
     * @example
     * // Update many Findings
     * const finding = await prisma.finding.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Findings and only return the `id`
     * const findingWithIdOnly = await prisma.finding.updateManyAndReturn({
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
    updateManyAndReturn<T extends FindingUpdateManyAndReturnArgs>(args: SelectSubset<T, FindingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FindingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Finding.
     * @param {FindingUpsertArgs} args - Arguments to update or create a Finding.
     * @example
     * // Update or create a Finding
     * const finding = await prisma.finding.upsert({
     *   create: {
     *     // ... data to create a Finding
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Finding we want to update
     *   }
     * })
     */
    upsert<T extends FindingUpsertArgs>(args: SelectSubset<T, FindingUpsertArgs<ExtArgs>>): Prisma__FindingClient<$Result.GetResult<Prisma.$FindingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Findings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FindingCountArgs} args - Arguments to filter Findings to count.
     * @example
     * // Count the number of Findings
     * const count = await prisma.finding.count({
     *   where: {
     *     // ... the filter for the Findings we want to count
     *   }
     * })
    **/
    count<T extends FindingCountArgs>(
      args?: Subset<T, FindingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FindingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Finding.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FindingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FindingAggregateArgs>(args: Subset<T, FindingAggregateArgs>): Prisma.PrismaPromise<GetFindingAggregateType<T>>

    /**
     * Group by Finding.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FindingGroupByArgs} args - Group by arguments.
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
      T extends FindingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FindingGroupByArgs['orderBy'] }
        : { orderBy?: FindingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FindingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFindingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Finding model
   */
  readonly fields: FindingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Finding.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FindingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    auditor<T extends InternalUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InternalUserDefaultArgs<ExtArgs>>): Prisma__InternalUserClient<$Result.GetResult<Prisma.$InternalUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Finding model
   */
  interface FindingFieldRefs {
    readonly id: FieldRef<"Finding", 'Int'>
    readonly code: FieldRef<"Finding", 'String'>
    readonly auditorId: FieldRef<"Finding", 'Int'>
    readonly source: FieldRef<"Finding", 'String'>
    readonly clause: FieldRef<"Finding", 'String'>
    readonly description: FieldRef<"Finding", 'String'>
    readonly category: FieldRef<"Finding", 'String'>
    readonly rootCause: FieldRef<"Finding", 'String'>
    readonly correction: FieldRef<"Finding", 'String'>
    readonly correctiveAction: FieldRef<"Finding", 'String'>
    readonly verificationResult: FieldRef<"Finding", 'String'>
    readonly status: FieldRef<"Finding", 'String'>
    readonly targetDate: FieldRef<"Finding", 'DateTime'>
    readonly evidenceUrl: FieldRef<"Finding", 'String'>
    readonly reportedAt: FieldRef<"Finding", 'DateTime'>
    readonly verifiedAt: FieldRef<"Finding", 'DateTime'>
    readonly requestId: FieldRef<"Finding", 'String'>
    readonly createdAt: FieldRef<"Finding", 'DateTime'>
    readonly updatedAt: FieldRef<"Finding", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Finding findUnique
   */
  export type FindingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finding
     */
    select?: FindingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Finding
     */
    omit?: FindingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FindingInclude<ExtArgs> | null
    /**
     * Filter, which Finding to fetch.
     */
    where: FindingWhereUniqueInput
  }

  /**
   * Finding findUniqueOrThrow
   */
  export type FindingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finding
     */
    select?: FindingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Finding
     */
    omit?: FindingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FindingInclude<ExtArgs> | null
    /**
     * Filter, which Finding to fetch.
     */
    where: FindingWhereUniqueInput
  }

  /**
   * Finding findFirst
   */
  export type FindingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finding
     */
    select?: FindingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Finding
     */
    omit?: FindingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FindingInclude<ExtArgs> | null
    /**
     * Filter, which Finding to fetch.
     */
    where?: FindingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Findings to fetch.
     */
    orderBy?: FindingOrderByWithRelationInput | FindingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Findings.
     */
    cursor?: FindingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Findings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Findings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Findings.
     */
    distinct?: FindingScalarFieldEnum | FindingScalarFieldEnum[]
  }

  /**
   * Finding findFirstOrThrow
   */
  export type FindingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finding
     */
    select?: FindingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Finding
     */
    omit?: FindingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FindingInclude<ExtArgs> | null
    /**
     * Filter, which Finding to fetch.
     */
    where?: FindingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Findings to fetch.
     */
    orderBy?: FindingOrderByWithRelationInput | FindingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Findings.
     */
    cursor?: FindingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Findings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Findings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Findings.
     */
    distinct?: FindingScalarFieldEnum | FindingScalarFieldEnum[]
  }

  /**
   * Finding findMany
   */
  export type FindingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finding
     */
    select?: FindingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Finding
     */
    omit?: FindingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FindingInclude<ExtArgs> | null
    /**
     * Filter, which Findings to fetch.
     */
    where?: FindingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Findings to fetch.
     */
    orderBy?: FindingOrderByWithRelationInput | FindingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Findings.
     */
    cursor?: FindingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Findings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Findings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Findings.
     */
    distinct?: FindingScalarFieldEnum | FindingScalarFieldEnum[]
  }

  /**
   * Finding create
   */
  export type FindingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finding
     */
    select?: FindingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Finding
     */
    omit?: FindingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FindingInclude<ExtArgs> | null
    /**
     * The data needed to create a Finding.
     */
    data: XOR<FindingCreateInput, FindingUncheckedCreateInput>
  }

  /**
   * Finding createMany
   */
  export type FindingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Findings.
     */
    data: FindingCreateManyInput | FindingCreateManyInput[]
  }

  /**
   * Finding createManyAndReturn
   */
  export type FindingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finding
     */
    select?: FindingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Finding
     */
    omit?: FindingOmit<ExtArgs> | null
    /**
     * The data used to create many Findings.
     */
    data: FindingCreateManyInput | FindingCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FindingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Finding update
   */
  export type FindingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finding
     */
    select?: FindingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Finding
     */
    omit?: FindingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FindingInclude<ExtArgs> | null
    /**
     * The data needed to update a Finding.
     */
    data: XOR<FindingUpdateInput, FindingUncheckedUpdateInput>
    /**
     * Choose, which Finding to update.
     */
    where: FindingWhereUniqueInput
  }

  /**
   * Finding updateMany
   */
  export type FindingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Findings.
     */
    data: XOR<FindingUpdateManyMutationInput, FindingUncheckedUpdateManyInput>
    /**
     * Filter which Findings to update
     */
    where?: FindingWhereInput
    /**
     * Limit how many Findings to update.
     */
    limit?: number
  }

  /**
   * Finding updateManyAndReturn
   */
  export type FindingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finding
     */
    select?: FindingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Finding
     */
    omit?: FindingOmit<ExtArgs> | null
    /**
     * The data used to update Findings.
     */
    data: XOR<FindingUpdateManyMutationInput, FindingUncheckedUpdateManyInput>
    /**
     * Filter which Findings to update
     */
    where?: FindingWhereInput
    /**
     * Limit how many Findings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FindingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Finding upsert
   */
  export type FindingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finding
     */
    select?: FindingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Finding
     */
    omit?: FindingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FindingInclude<ExtArgs> | null
    /**
     * The filter to search for the Finding to update in case it exists.
     */
    where: FindingWhereUniqueInput
    /**
     * In case the Finding found by the `where` argument doesn't exist, create a new Finding with this data.
     */
    create: XOR<FindingCreateInput, FindingUncheckedCreateInput>
    /**
     * In case the Finding was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FindingUpdateInput, FindingUncheckedUpdateInput>
  }

  /**
   * Finding delete
   */
  export type FindingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finding
     */
    select?: FindingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Finding
     */
    omit?: FindingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FindingInclude<ExtArgs> | null
    /**
     * Filter which Finding to delete.
     */
    where: FindingWhereUniqueInput
  }

  /**
   * Finding deleteMany
   */
  export type FindingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Findings to delete
     */
    where?: FindingWhereInput
    /**
     * Limit how many Findings to delete.
     */
    limit?: number
  }

  /**
   * Finding without action
   */
  export type FindingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finding
     */
    select?: FindingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Finding
     */
    omit?: FindingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FindingInclude<ExtArgs> | null
  }


  /**
   * Model Setting
   */

  export type AggregateSetting = {
    _count: SettingCountAggregateOutputType | null
    _min: SettingMinAggregateOutputType | null
    _max: SettingMaxAggregateOutputType | null
  }

  export type SettingMinAggregateOutputType = {
    key: string | null
    value: string | null
    updatedAt: Date | null
  }

  export type SettingMaxAggregateOutputType = {
    key: string | null
    value: string | null
    updatedAt: Date | null
  }

  export type SettingCountAggregateOutputType = {
    key: number
    value: number
    updatedAt: number
    _all: number
  }


  export type SettingMinAggregateInputType = {
    key?: true
    value?: true
    updatedAt?: true
  }

  export type SettingMaxAggregateInputType = {
    key?: true
    value?: true
    updatedAt?: true
  }

  export type SettingCountAggregateInputType = {
    key?: true
    value?: true
    updatedAt?: true
    _all?: true
  }

  export type SettingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Setting to aggregate.
     */
    where?: SettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingOrderByWithRelationInput | SettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Settings
    **/
    _count?: true | SettingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SettingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SettingMaxAggregateInputType
  }

  export type GetSettingAggregateType<T extends SettingAggregateArgs> = {
        [P in keyof T & keyof AggregateSetting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSetting[P]>
      : GetScalarType<T[P], AggregateSetting[P]>
  }




  export type SettingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SettingWhereInput
    orderBy?: SettingOrderByWithAggregationInput | SettingOrderByWithAggregationInput[]
    by: SettingScalarFieldEnum[] | SettingScalarFieldEnum
    having?: SettingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SettingCountAggregateInputType | true
    _min?: SettingMinAggregateInputType
    _max?: SettingMaxAggregateInputType
  }

  export type SettingGroupByOutputType = {
    key: string
    value: string
    updatedAt: Date
    _count: SettingCountAggregateOutputType | null
    _min: SettingMinAggregateOutputType | null
    _max: SettingMaxAggregateOutputType | null
  }

  type GetSettingGroupByPayload<T extends SettingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SettingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SettingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SettingGroupByOutputType[P]>
            : GetScalarType<T[P], SettingGroupByOutputType[P]>
        }
      >
    >


  export type SettingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    key?: boolean
    value?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["setting"]>

  export type SettingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    key?: boolean
    value?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["setting"]>

  export type SettingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    key?: boolean
    value?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["setting"]>

  export type SettingSelectScalar = {
    key?: boolean
    value?: boolean
    updatedAt?: boolean
  }

  export type SettingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"key" | "value" | "updatedAt", ExtArgs["result"]["setting"]>

  export type $SettingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Setting"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      key: string
      value: string
      updatedAt: Date
    }, ExtArgs["result"]["setting"]>
    composites: {}
  }

  type SettingGetPayload<S extends boolean | null | undefined | SettingDefaultArgs> = $Result.GetResult<Prisma.$SettingPayload, S>

  type SettingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SettingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SettingCountAggregateInputType | true
    }

  export interface SettingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Setting'], meta: { name: 'Setting' } }
    /**
     * Find zero or one Setting that matches the filter.
     * @param {SettingFindUniqueArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SettingFindUniqueArgs>(args: SelectSubset<T, SettingFindUniqueArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Setting that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SettingFindUniqueOrThrowArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SettingFindUniqueOrThrowArgs>(args: SelectSubset<T, SettingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Setting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingFindFirstArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SettingFindFirstArgs>(args?: SelectSubset<T, SettingFindFirstArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Setting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingFindFirstOrThrowArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SettingFindFirstOrThrowArgs>(args?: SelectSubset<T, SettingFindFirstOrThrowArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Settings
     * const settings = await prisma.setting.findMany()
     * 
     * // Get first 10 Settings
     * const settings = await prisma.setting.findMany({ take: 10 })
     * 
     * // Only select the `key`
     * const settingWithKeyOnly = await prisma.setting.findMany({ select: { key: true } })
     * 
     */
    findMany<T extends SettingFindManyArgs>(args?: SelectSubset<T, SettingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Setting.
     * @param {SettingCreateArgs} args - Arguments to create a Setting.
     * @example
     * // Create one Setting
     * const Setting = await prisma.setting.create({
     *   data: {
     *     // ... data to create a Setting
     *   }
     * })
     * 
     */
    create<T extends SettingCreateArgs>(args: SelectSubset<T, SettingCreateArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Settings.
     * @param {SettingCreateManyArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const setting = await prisma.setting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SettingCreateManyArgs>(args?: SelectSubset<T, SettingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Settings and returns the data saved in the database.
     * @param {SettingCreateManyAndReturnArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const setting = await prisma.setting.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Settings and only return the `key`
     * const settingWithKeyOnly = await prisma.setting.createManyAndReturn({
     *   select: { key: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SettingCreateManyAndReturnArgs>(args?: SelectSubset<T, SettingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Setting.
     * @param {SettingDeleteArgs} args - Arguments to delete one Setting.
     * @example
     * // Delete one Setting
     * const Setting = await prisma.setting.delete({
     *   where: {
     *     // ... filter to delete one Setting
     *   }
     * })
     * 
     */
    delete<T extends SettingDeleteArgs>(args: SelectSubset<T, SettingDeleteArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Setting.
     * @param {SettingUpdateArgs} args - Arguments to update one Setting.
     * @example
     * // Update one Setting
     * const setting = await prisma.setting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SettingUpdateArgs>(args: SelectSubset<T, SettingUpdateArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Settings.
     * @param {SettingDeleteManyArgs} args - Arguments to filter Settings to delete.
     * @example
     * // Delete a few Settings
     * const { count } = await prisma.setting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SettingDeleteManyArgs>(args?: SelectSubset<T, SettingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Settings
     * const setting = await prisma.setting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SettingUpdateManyArgs>(args: SelectSubset<T, SettingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settings and returns the data updated in the database.
     * @param {SettingUpdateManyAndReturnArgs} args - Arguments to update many Settings.
     * @example
     * // Update many Settings
     * const setting = await prisma.setting.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Settings and only return the `key`
     * const settingWithKeyOnly = await prisma.setting.updateManyAndReturn({
     *   select: { key: true },
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
    updateManyAndReturn<T extends SettingUpdateManyAndReturnArgs>(args: SelectSubset<T, SettingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Setting.
     * @param {SettingUpsertArgs} args - Arguments to update or create a Setting.
     * @example
     * // Update or create a Setting
     * const setting = await prisma.setting.upsert({
     *   create: {
     *     // ... data to create a Setting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Setting we want to update
     *   }
     * })
     */
    upsert<T extends SettingUpsertArgs>(args: SelectSubset<T, SettingUpsertArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingCountArgs} args - Arguments to filter Settings to count.
     * @example
     * // Count the number of Settings
     * const count = await prisma.setting.count({
     *   where: {
     *     // ... the filter for the Settings we want to count
     *   }
     * })
    **/
    count<T extends SettingCountArgs>(
      args?: Subset<T, SettingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SettingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Setting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SettingAggregateArgs>(args: Subset<T, SettingAggregateArgs>): Prisma.PrismaPromise<GetSettingAggregateType<T>>

    /**
     * Group by Setting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingGroupByArgs} args - Group by arguments.
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
      T extends SettingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SettingGroupByArgs['orderBy'] }
        : { orderBy?: SettingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SettingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSettingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Setting model
   */
  readonly fields: SettingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Setting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SettingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Setting model
   */
  interface SettingFieldRefs {
    readonly key: FieldRef<"Setting", 'String'>
    readonly value: FieldRef<"Setting", 'String'>
    readonly updatedAt: FieldRef<"Setting", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Setting findUnique
   */
  export type SettingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Filter, which Setting to fetch.
     */
    where: SettingWhereUniqueInput
  }

  /**
   * Setting findUniqueOrThrow
   */
  export type SettingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Filter, which Setting to fetch.
     */
    where: SettingWhereUniqueInput
  }

  /**
   * Setting findFirst
   */
  export type SettingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Filter, which Setting to fetch.
     */
    where?: SettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingOrderByWithRelationInput | SettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settings.
     */
    cursor?: SettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settings.
     */
    distinct?: SettingScalarFieldEnum | SettingScalarFieldEnum[]
  }

  /**
   * Setting findFirstOrThrow
   */
  export type SettingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Filter, which Setting to fetch.
     */
    where?: SettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingOrderByWithRelationInput | SettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settings.
     */
    cursor?: SettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settings.
     */
    distinct?: SettingScalarFieldEnum | SettingScalarFieldEnum[]
  }

  /**
   * Setting findMany
   */
  export type SettingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where?: SettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingOrderByWithRelationInput | SettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Settings.
     */
    cursor?: SettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settings.
     */
    distinct?: SettingScalarFieldEnum | SettingScalarFieldEnum[]
  }

  /**
   * Setting create
   */
  export type SettingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * The data needed to create a Setting.
     */
    data: XOR<SettingCreateInput, SettingUncheckedCreateInput>
  }

  /**
   * Setting createMany
   */
  export type SettingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Settings.
     */
    data: SettingCreateManyInput | SettingCreateManyInput[]
  }

  /**
   * Setting createManyAndReturn
   */
  export type SettingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * The data used to create many Settings.
     */
    data: SettingCreateManyInput | SettingCreateManyInput[]
  }

  /**
   * Setting update
   */
  export type SettingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * The data needed to update a Setting.
     */
    data: XOR<SettingUpdateInput, SettingUncheckedUpdateInput>
    /**
     * Choose, which Setting to update.
     */
    where: SettingWhereUniqueInput
  }

  /**
   * Setting updateMany
   */
  export type SettingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Settings.
     */
    data: XOR<SettingUpdateManyMutationInput, SettingUncheckedUpdateManyInput>
    /**
     * Filter which Settings to update
     */
    where?: SettingWhereInput
    /**
     * Limit how many Settings to update.
     */
    limit?: number
  }

  /**
   * Setting updateManyAndReturn
   */
  export type SettingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * The data used to update Settings.
     */
    data: XOR<SettingUpdateManyMutationInput, SettingUncheckedUpdateManyInput>
    /**
     * Filter which Settings to update
     */
    where?: SettingWhereInput
    /**
     * Limit how many Settings to update.
     */
    limit?: number
  }

  /**
   * Setting upsert
   */
  export type SettingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * The filter to search for the Setting to update in case it exists.
     */
    where: SettingWhereUniqueInput
    /**
     * In case the Setting found by the `where` argument doesn't exist, create a new Setting with this data.
     */
    create: XOR<SettingCreateInput, SettingUncheckedCreateInput>
    /**
     * In case the Setting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SettingUpdateInput, SettingUncheckedUpdateInput>
  }

  /**
   * Setting delete
   */
  export type SettingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Filter which Setting to delete.
     */
    where: SettingWhereUniqueInput
  }

  /**
   * Setting deleteMany
   */
  export type SettingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Settings to delete
     */
    where?: SettingWhereInput
    /**
     * Limit how many Settings to delete.
     */
    limit?: number
  }

  /**
   * Setting without action
   */
  export type SettingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const InternalUserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    passwordHash: 'passwordHash',
    role: 'role',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InternalUserScalarFieldEnum = (typeof InternalUserScalarFieldEnum)[keyof typeof InternalUserScalarFieldEnum]


  export const AuthSessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type AuthSessionScalarFieldEnum = (typeof AuthSessionScalarFieldEnum)[keyof typeof AuthSessionScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    sortOrder: 'sortOrder'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const ProgramScalarFieldEnum: {
    id: 'id',
    categoryId: 'categoryId',
    slug: 'slug',
    title: 'title',
    summary: 'summary',
    coverUrl: 'coverUrl',
    description: 'description',
    syllabus: 'syllabus',
    meetingUrl: 'meetingUrl',
    trainerName: 'trainerName',
    isPublished: 'isPublished',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProgramScalarFieldEnum = (typeof ProgramScalarFieldEnum)[keyof typeof ProgramScalarFieldEnum]


  export const MaterialScalarFieldEnum: {
    id: 'id',
    programId: 'programId',
    type: 'type',
    title: 'title',
    description: 'description',
    url: 'url',
    filePath: 'filePath',
    sortOrder: 'sortOrder',
    isPublished: 'isPublished',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MaterialScalarFieldEnum = (typeof MaterialScalarFieldEnum)[keyof typeof MaterialScalarFieldEnum]


  export const SopDocumentScalarFieldEnum: {
    id: 'id',
    code: 'code',
    title: 'title',
    version: 'version',
    description: 'description',
    url: 'url',
    isPublished: 'isPublished',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SopDocumentScalarFieldEnum = (typeof SopDocumentScalarFieldEnum)[keyof typeof SopDocumentScalarFieldEnum]


  export const ProgramSopScalarFieldEnum: {
    programId: 'programId',
    sopId: 'sopId'
  };

  export type ProgramSopScalarFieldEnum = (typeof ProgramSopScalarFieldEnum)[keyof typeof ProgramSopScalarFieldEnum]


  export const EvaluationScalarFieldEnum: {
    id: 'id',
    programId: 'programId',
    type: 'type',
    title: 'title',
    instructions: 'instructions',
    shuffle: 'shuffle',
    isPublished: 'isPublished',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EvaluationScalarFieldEnum = (typeof EvaluationScalarFieldEnum)[keyof typeof EvaluationScalarFieldEnum]


  export const QuestionScalarFieldEnum: {
    id: 'id',
    evaluationId: 'evaluationId',
    sortOrder: 'sortOrder',
    text: 'text',
    options: 'options',
    correctAnswer: 'correctAnswer',
    score: 'score',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type QuestionScalarFieldEnum = (typeof QuestionScalarFieldEnum)[keyof typeof QuestionScalarFieldEnum]


  export const AttemptScalarFieldEnum: {
    id: 'id',
    evaluationId: 'evaluationId',
    takerName: 'takerName',
    takerEmail: 'takerEmail',
    takerPhone: 'takerPhone',
    takerTitle: 'takerTitle',
    startedAt: 'startedAt',
    submittedAt: 'submittedAt',
    score: 'score',
    maxScore: 'maxScore'
  };

  export type AttemptScalarFieldEnum = (typeof AttemptScalarFieldEnum)[keyof typeof AttemptScalarFieldEnum]


  export const AttemptAnswerScalarFieldEnum: {
    id: 'id',
    attemptId: 'attemptId',
    questionId: 'questionId',
    answer: 'answer',
    isCorrect: 'isCorrect'
  };

  export type AttemptAnswerScalarFieldEnum = (typeof AttemptAnswerScalarFieldEnum)[keyof typeof AttemptAnswerScalarFieldEnum]


  export const ProgramReviewScalarFieldEnum: {
    id: 'id',
    programId: 'programId',
    reviewerName: 'reviewerName',
    rating: 'rating',
    comment: 'comment',
    createdAt: 'createdAt'
  };

  export type ProgramReviewScalarFieldEnum = (typeof ProgramReviewScalarFieldEnum)[keyof typeof ProgramReviewScalarFieldEnum]


  export const FindingScalarFieldEnum: {
    id: 'id',
    code: 'code',
    auditorId: 'auditorId',
    source: 'source',
    clause: 'clause',
    description: 'description',
    category: 'category',
    rootCause: 'rootCause',
    correction: 'correction',
    correctiveAction: 'correctiveAction',
    verificationResult: 'verificationResult',
    status: 'status',
    targetDate: 'targetDate',
    evidenceUrl: 'evidenceUrl',
    reportedAt: 'reportedAt',
    verifiedAt: 'verifiedAt',
    requestId: 'requestId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FindingScalarFieldEnum = (typeof FindingScalarFieldEnum)[keyof typeof FindingScalarFieldEnum]


  export const SettingScalarFieldEnum: {
    key: 'key',
    value: 'value',
    updatedAt: 'updatedAt'
  };

  export type SettingScalarFieldEnum = (typeof SettingScalarFieldEnum)[keyof typeof SettingScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type InternalUserWhereInput = {
    AND?: InternalUserWhereInput | InternalUserWhereInput[]
    OR?: InternalUserWhereInput[]
    NOT?: InternalUserWhereInput | InternalUserWhereInput[]
    id?: IntFilter<"InternalUser"> | number
    name?: StringFilter<"InternalUser"> | string
    email?: StringFilter<"InternalUser"> | string
    passwordHash?: StringFilter<"InternalUser"> | string
    role?: StringFilter<"InternalUser"> | string
    isActive?: BoolFilter<"InternalUser"> | boolean
    createdAt?: DateTimeFilter<"InternalUser"> | Date | string
    updatedAt?: DateTimeFilter<"InternalUser"> | Date | string
    sessions?: AuthSessionListRelationFilter
    findings?: FindingListRelationFilter
  }

  export type InternalUserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sessions?: AuthSessionOrderByRelationAggregateInput
    findings?: FindingOrderByRelationAggregateInput
  }

  export type InternalUserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: InternalUserWhereInput | InternalUserWhereInput[]
    OR?: InternalUserWhereInput[]
    NOT?: InternalUserWhereInput | InternalUserWhereInput[]
    name?: StringFilter<"InternalUser"> | string
    passwordHash?: StringFilter<"InternalUser"> | string
    role?: StringFilter<"InternalUser"> | string
    isActive?: BoolFilter<"InternalUser"> | boolean
    createdAt?: DateTimeFilter<"InternalUser"> | Date | string
    updatedAt?: DateTimeFilter<"InternalUser"> | Date | string
    sessions?: AuthSessionListRelationFilter
    findings?: FindingListRelationFilter
  }, "id" | "email">

  export type InternalUserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InternalUserCountOrderByAggregateInput
    _avg?: InternalUserAvgOrderByAggregateInput
    _max?: InternalUserMaxOrderByAggregateInput
    _min?: InternalUserMinOrderByAggregateInput
    _sum?: InternalUserSumOrderByAggregateInput
  }

  export type InternalUserScalarWhereWithAggregatesInput = {
    AND?: InternalUserScalarWhereWithAggregatesInput | InternalUserScalarWhereWithAggregatesInput[]
    OR?: InternalUserScalarWhereWithAggregatesInput[]
    NOT?: InternalUserScalarWhereWithAggregatesInput | InternalUserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"InternalUser"> | number
    name?: StringWithAggregatesFilter<"InternalUser"> | string
    email?: StringWithAggregatesFilter<"InternalUser"> | string
    passwordHash?: StringWithAggregatesFilter<"InternalUser"> | string
    role?: StringWithAggregatesFilter<"InternalUser"> | string
    isActive?: BoolWithAggregatesFilter<"InternalUser"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"InternalUser"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"InternalUser"> | Date | string
  }

  export type AuthSessionWhereInput = {
    AND?: AuthSessionWhereInput | AuthSessionWhereInput[]
    OR?: AuthSessionWhereInput[]
    NOT?: AuthSessionWhereInput | AuthSessionWhereInput[]
    id?: StringFilter<"AuthSession"> | string
    userId?: IntFilter<"AuthSession"> | number
    expiresAt?: DateTimeFilter<"AuthSession"> | Date | string
    createdAt?: DateTimeFilter<"AuthSession"> | Date | string
    user?: XOR<InternalUserScalarRelationFilter, InternalUserWhereInput>
  }

  export type AuthSessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    user?: InternalUserOrderByWithRelationInput
  }

  export type AuthSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuthSessionWhereInput | AuthSessionWhereInput[]
    OR?: AuthSessionWhereInput[]
    NOT?: AuthSessionWhereInput | AuthSessionWhereInput[]
    userId?: IntFilter<"AuthSession"> | number
    expiresAt?: DateTimeFilter<"AuthSession"> | Date | string
    createdAt?: DateTimeFilter<"AuthSession"> | Date | string
    user?: XOR<InternalUserScalarRelationFilter, InternalUserWhereInput>
  }, "id">

  export type AuthSessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    _count?: AuthSessionCountOrderByAggregateInput
    _avg?: AuthSessionAvgOrderByAggregateInput
    _max?: AuthSessionMaxOrderByAggregateInput
    _min?: AuthSessionMinOrderByAggregateInput
    _sum?: AuthSessionSumOrderByAggregateInput
  }

  export type AuthSessionScalarWhereWithAggregatesInput = {
    AND?: AuthSessionScalarWhereWithAggregatesInput | AuthSessionScalarWhereWithAggregatesInput[]
    OR?: AuthSessionScalarWhereWithAggregatesInput[]
    NOT?: AuthSessionScalarWhereWithAggregatesInput | AuthSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuthSession"> | string
    userId?: IntWithAggregatesFilter<"AuthSession"> | number
    expiresAt?: DateTimeWithAggregatesFilter<"AuthSession"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"AuthSession"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: IntFilter<"Category"> | number
    name?: StringFilter<"Category"> | string
    slug?: StringFilter<"Category"> | string
    sortOrder?: IntFilter<"Category"> | number
    programs?: ProgramListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    sortOrder?: SortOrder
    programs?: ProgramOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    sortOrder?: IntFilter<"Category"> | number
    programs?: ProgramListRelationFilter
  }, "id" | "slug">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    sortOrder?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Category"> | number
    name?: StringWithAggregatesFilter<"Category"> | string
    slug?: StringWithAggregatesFilter<"Category"> | string
    sortOrder?: IntWithAggregatesFilter<"Category"> | number
  }

  export type ProgramWhereInput = {
    AND?: ProgramWhereInput | ProgramWhereInput[]
    OR?: ProgramWhereInput[]
    NOT?: ProgramWhereInput | ProgramWhereInput[]
    id?: IntFilter<"Program"> | number
    categoryId?: IntNullableFilter<"Program"> | number | null
    slug?: StringFilter<"Program"> | string
    title?: StringFilter<"Program"> | string
    summary?: StringNullableFilter<"Program"> | string | null
    coverUrl?: StringNullableFilter<"Program"> | string | null
    description?: StringNullableFilter<"Program"> | string | null
    syllabus?: StringNullableFilter<"Program"> | string | null
    meetingUrl?: StringNullableFilter<"Program"> | string | null
    trainerName?: StringNullableFilter<"Program"> | string | null
    isPublished?: BoolFilter<"Program"> | boolean
    createdAt?: DateTimeFilter<"Program"> | Date | string
    updatedAt?: DateTimeFilter<"Program"> | Date | string
    category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    materials?: MaterialListRelationFilter
    evaluations?: EvaluationListRelationFilter
    reviews?: ProgramReviewListRelationFilter
    programSops?: ProgramSopListRelationFilter
  }

  export type ProgramOrderByWithRelationInput = {
    id?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    slug?: SortOrder
    title?: SortOrder
    summary?: SortOrderInput | SortOrder
    coverUrl?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    syllabus?: SortOrderInput | SortOrder
    meetingUrl?: SortOrderInput | SortOrder
    trainerName?: SortOrderInput | SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: CategoryOrderByWithRelationInput
    materials?: MaterialOrderByRelationAggregateInput
    evaluations?: EvaluationOrderByRelationAggregateInput
    reviews?: ProgramReviewOrderByRelationAggregateInput
    programSops?: ProgramSopOrderByRelationAggregateInput
  }

  export type ProgramWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: ProgramWhereInput | ProgramWhereInput[]
    OR?: ProgramWhereInput[]
    NOT?: ProgramWhereInput | ProgramWhereInput[]
    categoryId?: IntNullableFilter<"Program"> | number | null
    title?: StringFilter<"Program"> | string
    summary?: StringNullableFilter<"Program"> | string | null
    coverUrl?: StringNullableFilter<"Program"> | string | null
    description?: StringNullableFilter<"Program"> | string | null
    syllabus?: StringNullableFilter<"Program"> | string | null
    meetingUrl?: StringNullableFilter<"Program"> | string | null
    trainerName?: StringNullableFilter<"Program"> | string | null
    isPublished?: BoolFilter<"Program"> | boolean
    createdAt?: DateTimeFilter<"Program"> | Date | string
    updatedAt?: DateTimeFilter<"Program"> | Date | string
    category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    materials?: MaterialListRelationFilter
    evaluations?: EvaluationListRelationFilter
    reviews?: ProgramReviewListRelationFilter
    programSops?: ProgramSopListRelationFilter
  }, "id" | "slug">

  export type ProgramOrderByWithAggregationInput = {
    id?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    slug?: SortOrder
    title?: SortOrder
    summary?: SortOrderInput | SortOrder
    coverUrl?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    syllabus?: SortOrderInput | SortOrder
    meetingUrl?: SortOrderInput | SortOrder
    trainerName?: SortOrderInput | SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProgramCountOrderByAggregateInput
    _avg?: ProgramAvgOrderByAggregateInput
    _max?: ProgramMaxOrderByAggregateInput
    _min?: ProgramMinOrderByAggregateInput
    _sum?: ProgramSumOrderByAggregateInput
  }

  export type ProgramScalarWhereWithAggregatesInput = {
    AND?: ProgramScalarWhereWithAggregatesInput | ProgramScalarWhereWithAggregatesInput[]
    OR?: ProgramScalarWhereWithAggregatesInput[]
    NOT?: ProgramScalarWhereWithAggregatesInput | ProgramScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Program"> | number
    categoryId?: IntNullableWithAggregatesFilter<"Program"> | number | null
    slug?: StringWithAggregatesFilter<"Program"> | string
    title?: StringWithAggregatesFilter<"Program"> | string
    summary?: StringNullableWithAggregatesFilter<"Program"> | string | null
    coverUrl?: StringNullableWithAggregatesFilter<"Program"> | string | null
    description?: StringNullableWithAggregatesFilter<"Program"> | string | null
    syllabus?: StringNullableWithAggregatesFilter<"Program"> | string | null
    meetingUrl?: StringNullableWithAggregatesFilter<"Program"> | string | null
    trainerName?: StringNullableWithAggregatesFilter<"Program"> | string | null
    isPublished?: BoolWithAggregatesFilter<"Program"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Program"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Program"> | Date | string
  }

  export type MaterialWhereInput = {
    AND?: MaterialWhereInput | MaterialWhereInput[]
    OR?: MaterialWhereInput[]
    NOT?: MaterialWhereInput | MaterialWhereInput[]
    id?: IntFilter<"Material"> | number
    programId?: IntFilter<"Material"> | number
    type?: StringFilter<"Material"> | string
    title?: StringFilter<"Material"> | string
    description?: StringNullableFilter<"Material"> | string | null
    url?: StringNullableFilter<"Material"> | string | null
    filePath?: StringNullableFilter<"Material"> | string | null
    sortOrder?: IntFilter<"Material"> | number
    isPublished?: BoolFilter<"Material"> | boolean
    createdAt?: DateTimeFilter<"Material"> | Date | string
    updatedAt?: DateTimeFilter<"Material"> | Date | string
    program?: XOR<ProgramScalarRelationFilter, ProgramWhereInput>
  }

  export type MaterialOrderByWithRelationInput = {
    id?: SortOrder
    programId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    filePath?: SortOrderInput | SortOrder
    sortOrder?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    program?: ProgramOrderByWithRelationInput
  }

  export type MaterialWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MaterialWhereInput | MaterialWhereInput[]
    OR?: MaterialWhereInput[]
    NOT?: MaterialWhereInput | MaterialWhereInput[]
    programId?: IntFilter<"Material"> | number
    type?: StringFilter<"Material"> | string
    title?: StringFilter<"Material"> | string
    description?: StringNullableFilter<"Material"> | string | null
    url?: StringNullableFilter<"Material"> | string | null
    filePath?: StringNullableFilter<"Material"> | string | null
    sortOrder?: IntFilter<"Material"> | number
    isPublished?: BoolFilter<"Material"> | boolean
    createdAt?: DateTimeFilter<"Material"> | Date | string
    updatedAt?: DateTimeFilter<"Material"> | Date | string
    program?: XOR<ProgramScalarRelationFilter, ProgramWhereInput>
  }, "id">

  export type MaterialOrderByWithAggregationInput = {
    id?: SortOrder
    programId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    filePath?: SortOrderInput | SortOrder
    sortOrder?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MaterialCountOrderByAggregateInput
    _avg?: MaterialAvgOrderByAggregateInput
    _max?: MaterialMaxOrderByAggregateInput
    _min?: MaterialMinOrderByAggregateInput
    _sum?: MaterialSumOrderByAggregateInput
  }

  export type MaterialScalarWhereWithAggregatesInput = {
    AND?: MaterialScalarWhereWithAggregatesInput | MaterialScalarWhereWithAggregatesInput[]
    OR?: MaterialScalarWhereWithAggregatesInput[]
    NOT?: MaterialScalarWhereWithAggregatesInput | MaterialScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Material"> | number
    programId?: IntWithAggregatesFilter<"Material"> | number
    type?: StringWithAggregatesFilter<"Material"> | string
    title?: StringWithAggregatesFilter<"Material"> | string
    description?: StringNullableWithAggregatesFilter<"Material"> | string | null
    url?: StringNullableWithAggregatesFilter<"Material"> | string | null
    filePath?: StringNullableWithAggregatesFilter<"Material"> | string | null
    sortOrder?: IntWithAggregatesFilter<"Material"> | number
    isPublished?: BoolWithAggregatesFilter<"Material"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Material"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Material"> | Date | string
  }

  export type SopDocumentWhereInput = {
    AND?: SopDocumentWhereInput | SopDocumentWhereInput[]
    OR?: SopDocumentWhereInput[]
    NOT?: SopDocumentWhereInput | SopDocumentWhereInput[]
    id?: IntFilter<"SopDocument"> | number
    code?: StringFilter<"SopDocument"> | string
    title?: StringFilter<"SopDocument"> | string
    version?: StringFilter<"SopDocument"> | string
    description?: StringNullableFilter<"SopDocument"> | string | null
    url?: StringFilter<"SopDocument"> | string
    isPublished?: BoolFilter<"SopDocument"> | boolean
    createdAt?: DateTimeFilter<"SopDocument"> | Date | string
    updatedAt?: DateTimeFilter<"SopDocument"> | Date | string
    programSops?: ProgramSopListRelationFilter
  }

  export type SopDocumentOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    title?: SortOrder
    version?: SortOrder
    description?: SortOrderInput | SortOrder
    url?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    programSops?: ProgramSopOrderByRelationAggregateInput
  }

  export type SopDocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    code?: string
    AND?: SopDocumentWhereInput | SopDocumentWhereInput[]
    OR?: SopDocumentWhereInput[]
    NOT?: SopDocumentWhereInput | SopDocumentWhereInput[]
    title?: StringFilter<"SopDocument"> | string
    version?: StringFilter<"SopDocument"> | string
    description?: StringNullableFilter<"SopDocument"> | string | null
    url?: StringFilter<"SopDocument"> | string
    isPublished?: BoolFilter<"SopDocument"> | boolean
    createdAt?: DateTimeFilter<"SopDocument"> | Date | string
    updatedAt?: DateTimeFilter<"SopDocument"> | Date | string
    programSops?: ProgramSopListRelationFilter
  }, "id" | "code">

  export type SopDocumentOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    title?: SortOrder
    version?: SortOrder
    description?: SortOrderInput | SortOrder
    url?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SopDocumentCountOrderByAggregateInput
    _avg?: SopDocumentAvgOrderByAggregateInput
    _max?: SopDocumentMaxOrderByAggregateInput
    _min?: SopDocumentMinOrderByAggregateInput
    _sum?: SopDocumentSumOrderByAggregateInput
  }

  export type SopDocumentScalarWhereWithAggregatesInput = {
    AND?: SopDocumentScalarWhereWithAggregatesInput | SopDocumentScalarWhereWithAggregatesInput[]
    OR?: SopDocumentScalarWhereWithAggregatesInput[]
    NOT?: SopDocumentScalarWhereWithAggregatesInput | SopDocumentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SopDocument"> | number
    code?: StringWithAggregatesFilter<"SopDocument"> | string
    title?: StringWithAggregatesFilter<"SopDocument"> | string
    version?: StringWithAggregatesFilter<"SopDocument"> | string
    description?: StringNullableWithAggregatesFilter<"SopDocument"> | string | null
    url?: StringWithAggregatesFilter<"SopDocument"> | string
    isPublished?: BoolWithAggregatesFilter<"SopDocument"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"SopDocument"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SopDocument"> | Date | string
  }

  export type ProgramSopWhereInput = {
    AND?: ProgramSopWhereInput | ProgramSopWhereInput[]
    OR?: ProgramSopWhereInput[]
    NOT?: ProgramSopWhereInput | ProgramSopWhereInput[]
    programId?: IntFilter<"ProgramSop"> | number
    sopId?: IntFilter<"ProgramSop"> | number
    program?: XOR<ProgramScalarRelationFilter, ProgramWhereInput>
    sop?: XOR<SopDocumentScalarRelationFilter, SopDocumentWhereInput>
  }

  export type ProgramSopOrderByWithRelationInput = {
    programId?: SortOrder
    sopId?: SortOrder
    program?: ProgramOrderByWithRelationInput
    sop?: SopDocumentOrderByWithRelationInput
  }

  export type ProgramSopWhereUniqueInput = Prisma.AtLeast<{
    programId_sopId?: ProgramSopProgramIdSopIdCompoundUniqueInput
    AND?: ProgramSopWhereInput | ProgramSopWhereInput[]
    OR?: ProgramSopWhereInput[]
    NOT?: ProgramSopWhereInput | ProgramSopWhereInput[]
    programId?: IntFilter<"ProgramSop"> | number
    sopId?: IntFilter<"ProgramSop"> | number
    program?: XOR<ProgramScalarRelationFilter, ProgramWhereInput>
    sop?: XOR<SopDocumentScalarRelationFilter, SopDocumentWhereInput>
  }, "programId_sopId">

  export type ProgramSopOrderByWithAggregationInput = {
    programId?: SortOrder
    sopId?: SortOrder
    _count?: ProgramSopCountOrderByAggregateInput
    _avg?: ProgramSopAvgOrderByAggregateInput
    _max?: ProgramSopMaxOrderByAggregateInput
    _min?: ProgramSopMinOrderByAggregateInput
    _sum?: ProgramSopSumOrderByAggregateInput
  }

  export type ProgramSopScalarWhereWithAggregatesInput = {
    AND?: ProgramSopScalarWhereWithAggregatesInput | ProgramSopScalarWhereWithAggregatesInput[]
    OR?: ProgramSopScalarWhereWithAggregatesInput[]
    NOT?: ProgramSopScalarWhereWithAggregatesInput | ProgramSopScalarWhereWithAggregatesInput[]
    programId?: IntWithAggregatesFilter<"ProgramSop"> | number
    sopId?: IntWithAggregatesFilter<"ProgramSop"> | number
  }

  export type EvaluationWhereInput = {
    AND?: EvaluationWhereInput | EvaluationWhereInput[]
    OR?: EvaluationWhereInput[]
    NOT?: EvaluationWhereInput | EvaluationWhereInput[]
    id?: IntFilter<"Evaluation"> | number
    programId?: IntFilter<"Evaluation"> | number
    type?: StringFilter<"Evaluation"> | string
    title?: StringFilter<"Evaluation"> | string
    instructions?: StringNullableFilter<"Evaluation"> | string | null
    shuffle?: BoolFilter<"Evaluation"> | boolean
    isPublished?: BoolFilter<"Evaluation"> | boolean
    createdAt?: DateTimeFilter<"Evaluation"> | Date | string
    updatedAt?: DateTimeFilter<"Evaluation"> | Date | string
    program?: XOR<ProgramScalarRelationFilter, ProgramWhereInput>
    questions?: QuestionListRelationFilter
    attempts?: AttemptListRelationFilter
  }

  export type EvaluationOrderByWithRelationInput = {
    id?: SortOrder
    programId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    instructions?: SortOrderInput | SortOrder
    shuffle?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    program?: ProgramOrderByWithRelationInput
    questions?: QuestionOrderByRelationAggregateInput
    attempts?: AttemptOrderByRelationAggregateInput
  }

  export type EvaluationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    programId_type?: EvaluationProgramIdTypeCompoundUniqueInput
    AND?: EvaluationWhereInput | EvaluationWhereInput[]
    OR?: EvaluationWhereInput[]
    NOT?: EvaluationWhereInput | EvaluationWhereInput[]
    programId?: IntFilter<"Evaluation"> | number
    type?: StringFilter<"Evaluation"> | string
    title?: StringFilter<"Evaluation"> | string
    instructions?: StringNullableFilter<"Evaluation"> | string | null
    shuffle?: BoolFilter<"Evaluation"> | boolean
    isPublished?: BoolFilter<"Evaluation"> | boolean
    createdAt?: DateTimeFilter<"Evaluation"> | Date | string
    updatedAt?: DateTimeFilter<"Evaluation"> | Date | string
    program?: XOR<ProgramScalarRelationFilter, ProgramWhereInput>
    questions?: QuestionListRelationFilter
    attempts?: AttemptListRelationFilter
  }, "id" | "programId_type">

  export type EvaluationOrderByWithAggregationInput = {
    id?: SortOrder
    programId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    instructions?: SortOrderInput | SortOrder
    shuffle?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EvaluationCountOrderByAggregateInput
    _avg?: EvaluationAvgOrderByAggregateInput
    _max?: EvaluationMaxOrderByAggregateInput
    _min?: EvaluationMinOrderByAggregateInput
    _sum?: EvaluationSumOrderByAggregateInput
  }

  export type EvaluationScalarWhereWithAggregatesInput = {
    AND?: EvaluationScalarWhereWithAggregatesInput | EvaluationScalarWhereWithAggregatesInput[]
    OR?: EvaluationScalarWhereWithAggregatesInput[]
    NOT?: EvaluationScalarWhereWithAggregatesInput | EvaluationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Evaluation"> | number
    programId?: IntWithAggregatesFilter<"Evaluation"> | number
    type?: StringWithAggregatesFilter<"Evaluation"> | string
    title?: StringWithAggregatesFilter<"Evaluation"> | string
    instructions?: StringNullableWithAggregatesFilter<"Evaluation"> | string | null
    shuffle?: BoolWithAggregatesFilter<"Evaluation"> | boolean
    isPublished?: BoolWithAggregatesFilter<"Evaluation"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Evaluation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Evaluation"> | Date | string
  }

  export type QuestionWhereInput = {
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    id?: IntFilter<"Question"> | number
    evaluationId?: IntFilter<"Question"> | number
    sortOrder?: IntFilter<"Question"> | number
    text?: StringFilter<"Question"> | string
    options?: StringFilter<"Question"> | string
    correctAnswer?: StringFilter<"Question"> | string
    score?: IntFilter<"Question"> | number
    createdAt?: DateTimeFilter<"Question"> | Date | string
    updatedAt?: DateTimeFilter<"Question"> | Date | string
    evaluation?: XOR<EvaluationScalarRelationFilter, EvaluationWhereInput>
    attemptAnswers?: AttemptAnswerListRelationFilter
  }

  export type QuestionOrderByWithRelationInput = {
    id?: SortOrder
    evaluationId?: SortOrder
    sortOrder?: SortOrder
    text?: SortOrder
    options?: SortOrder
    correctAnswer?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    evaluation?: EvaluationOrderByWithRelationInput
    attemptAnswers?: AttemptAnswerOrderByRelationAggregateInput
  }

  export type QuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    evaluationId?: IntFilter<"Question"> | number
    sortOrder?: IntFilter<"Question"> | number
    text?: StringFilter<"Question"> | string
    options?: StringFilter<"Question"> | string
    correctAnswer?: StringFilter<"Question"> | string
    score?: IntFilter<"Question"> | number
    createdAt?: DateTimeFilter<"Question"> | Date | string
    updatedAt?: DateTimeFilter<"Question"> | Date | string
    evaluation?: XOR<EvaluationScalarRelationFilter, EvaluationWhereInput>
    attemptAnswers?: AttemptAnswerListRelationFilter
  }, "id">

  export type QuestionOrderByWithAggregationInput = {
    id?: SortOrder
    evaluationId?: SortOrder
    sortOrder?: SortOrder
    text?: SortOrder
    options?: SortOrder
    correctAnswer?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: QuestionCountOrderByAggregateInput
    _avg?: QuestionAvgOrderByAggregateInput
    _max?: QuestionMaxOrderByAggregateInput
    _min?: QuestionMinOrderByAggregateInput
    _sum?: QuestionSumOrderByAggregateInput
  }

  export type QuestionScalarWhereWithAggregatesInput = {
    AND?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    OR?: QuestionScalarWhereWithAggregatesInput[]
    NOT?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Question"> | number
    evaluationId?: IntWithAggregatesFilter<"Question"> | number
    sortOrder?: IntWithAggregatesFilter<"Question"> | number
    text?: StringWithAggregatesFilter<"Question"> | string
    options?: StringWithAggregatesFilter<"Question"> | string
    correctAnswer?: StringWithAggregatesFilter<"Question"> | string
    score?: IntWithAggregatesFilter<"Question"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Question"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Question"> | Date | string
  }

  export type AttemptWhereInput = {
    AND?: AttemptWhereInput | AttemptWhereInput[]
    OR?: AttemptWhereInput[]
    NOT?: AttemptWhereInput | AttemptWhereInput[]
    id?: IntFilter<"Attempt"> | number
    evaluationId?: IntFilter<"Attempt"> | number
    takerName?: StringFilter<"Attempt"> | string
    takerEmail?: StringFilter<"Attempt"> | string
    takerPhone?: StringNullableFilter<"Attempt"> | string | null
    takerTitle?: StringNullableFilter<"Attempt"> | string | null
    startedAt?: DateTimeFilter<"Attempt"> | Date | string
    submittedAt?: DateTimeNullableFilter<"Attempt"> | Date | string | null
    score?: IntNullableFilter<"Attempt"> | number | null
    maxScore?: IntNullableFilter<"Attempt"> | number | null
    evaluation?: XOR<EvaluationScalarRelationFilter, EvaluationWhereInput>
    answers?: AttemptAnswerListRelationFilter
  }

  export type AttemptOrderByWithRelationInput = {
    id?: SortOrder
    evaluationId?: SortOrder
    takerName?: SortOrder
    takerEmail?: SortOrder
    takerPhone?: SortOrderInput | SortOrder
    takerTitle?: SortOrderInput | SortOrder
    startedAt?: SortOrder
    submittedAt?: SortOrderInput | SortOrder
    score?: SortOrderInput | SortOrder
    maxScore?: SortOrderInput | SortOrder
    evaluation?: EvaluationOrderByWithRelationInput
    answers?: AttemptAnswerOrderByRelationAggregateInput
  }

  export type AttemptWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AttemptWhereInput | AttemptWhereInput[]
    OR?: AttemptWhereInput[]
    NOT?: AttemptWhereInput | AttemptWhereInput[]
    evaluationId?: IntFilter<"Attempt"> | number
    takerName?: StringFilter<"Attempt"> | string
    takerEmail?: StringFilter<"Attempt"> | string
    takerPhone?: StringNullableFilter<"Attempt"> | string | null
    takerTitle?: StringNullableFilter<"Attempt"> | string | null
    startedAt?: DateTimeFilter<"Attempt"> | Date | string
    submittedAt?: DateTimeNullableFilter<"Attempt"> | Date | string | null
    score?: IntNullableFilter<"Attempt"> | number | null
    maxScore?: IntNullableFilter<"Attempt"> | number | null
    evaluation?: XOR<EvaluationScalarRelationFilter, EvaluationWhereInput>
    answers?: AttemptAnswerListRelationFilter
  }, "id">

  export type AttemptOrderByWithAggregationInput = {
    id?: SortOrder
    evaluationId?: SortOrder
    takerName?: SortOrder
    takerEmail?: SortOrder
    takerPhone?: SortOrderInput | SortOrder
    takerTitle?: SortOrderInput | SortOrder
    startedAt?: SortOrder
    submittedAt?: SortOrderInput | SortOrder
    score?: SortOrderInput | SortOrder
    maxScore?: SortOrderInput | SortOrder
    _count?: AttemptCountOrderByAggregateInput
    _avg?: AttemptAvgOrderByAggregateInput
    _max?: AttemptMaxOrderByAggregateInput
    _min?: AttemptMinOrderByAggregateInput
    _sum?: AttemptSumOrderByAggregateInput
  }

  export type AttemptScalarWhereWithAggregatesInput = {
    AND?: AttemptScalarWhereWithAggregatesInput | AttemptScalarWhereWithAggregatesInput[]
    OR?: AttemptScalarWhereWithAggregatesInput[]
    NOT?: AttemptScalarWhereWithAggregatesInput | AttemptScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Attempt"> | number
    evaluationId?: IntWithAggregatesFilter<"Attempt"> | number
    takerName?: StringWithAggregatesFilter<"Attempt"> | string
    takerEmail?: StringWithAggregatesFilter<"Attempt"> | string
    takerPhone?: StringNullableWithAggregatesFilter<"Attempt"> | string | null
    takerTitle?: StringNullableWithAggregatesFilter<"Attempt"> | string | null
    startedAt?: DateTimeWithAggregatesFilter<"Attempt"> | Date | string
    submittedAt?: DateTimeNullableWithAggregatesFilter<"Attempt"> | Date | string | null
    score?: IntNullableWithAggregatesFilter<"Attempt"> | number | null
    maxScore?: IntNullableWithAggregatesFilter<"Attempt"> | number | null
  }

  export type AttemptAnswerWhereInput = {
    AND?: AttemptAnswerWhereInput | AttemptAnswerWhereInput[]
    OR?: AttemptAnswerWhereInput[]
    NOT?: AttemptAnswerWhereInput | AttemptAnswerWhereInput[]
    id?: IntFilter<"AttemptAnswer"> | number
    attemptId?: IntFilter<"AttemptAnswer"> | number
    questionId?: IntFilter<"AttemptAnswer"> | number
    answer?: StringNullableFilter<"AttemptAnswer"> | string | null
    isCorrect?: BoolFilter<"AttemptAnswer"> | boolean
    attempt?: XOR<AttemptScalarRelationFilter, AttemptWhereInput>
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
  }

  export type AttemptAnswerOrderByWithRelationInput = {
    id?: SortOrder
    attemptId?: SortOrder
    questionId?: SortOrder
    answer?: SortOrderInput | SortOrder
    isCorrect?: SortOrder
    attempt?: AttemptOrderByWithRelationInput
    question?: QuestionOrderByWithRelationInput
  }

  export type AttemptAnswerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    attemptId_questionId?: AttemptAnswerAttemptIdQuestionIdCompoundUniqueInput
    AND?: AttemptAnswerWhereInput | AttemptAnswerWhereInput[]
    OR?: AttemptAnswerWhereInput[]
    NOT?: AttemptAnswerWhereInput | AttemptAnswerWhereInput[]
    attemptId?: IntFilter<"AttemptAnswer"> | number
    questionId?: IntFilter<"AttemptAnswer"> | number
    answer?: StringNullableFilter<"AttemptAnswer"> | string | null
    isCorrect?: BoolFilter<"AttemptAnswer"> | boolean
    attempt?: XOR<AttemptScalarRelationFilter, AttemptWhereInput>
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
  }, "id" | "attemptId_questionId">

  export type AttemptAnswerOrderByWithAggregationInput = {
    id?: SortOrder
    attemptId?: SortOrder
    questionId?: SortOrder
    answer?: SortOrderInput | SortOrder
    isCorrect?: SortOrder
    _count?: AttemptAnswerCountOrderByAggregateInput
    _avg?: AttemptAnswerAvgOrderByAggregateInput
    _max?: AttemptAnswerMaxOrderByAggregateInput
    _min?: AttemptAnswerMinOrderByAggregateInput
    _sum?: AttemptAnswerSumOrderByAggregateInput
  }

  export type AttemptAnswerScalarWhereWithAggregatesInput = {
    AND?: AttemptAnswerScalarWhereWithAggregatesInput | AttemptAnswerScalarWhereWithAggregatesInput[]
    OR?: AttemptAnswerScalarWhereWithAggregatesInput[]
    NOT?: AttemptAnswerScalarWhereWithAggregatesInput | AttemptAnswerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AttemptAnswer"> | number
    attemptId?: IntWithAggregatesFilter<"AttemptAnswer"> | number
    questionId?: IntWithAggregatesFilter<"AttemptAnswer"> | number
    answer?: StringNullableWithAggregatesFilter<"AttemptAnswer"> | string | null
    isCorrect?: BoolWithAggregatesFilter<"AttemptAnswer"> | boolean
  }

  export type ProgramReviewWhereInput = {
    AND?: ProgramReviewWhereInput | ProgramReviewWhereInput[]
    OR?: ProgramReviewWhereInput[]
    NOT?: ProgramReviewWhereInput | ProgramReviewWhereInput[]
    id?: IntFilter<"ProgramReview"> | number
    programId?: IntFilter<"ProgramReview"> | number
    reviewerName?: StringFilter<"ProgramReview"> | string
    rating?: IntFilter<"ProgramReview"> | number
    comment?: StringNullableFilter<"ProgramReview"> | string | null
    createdAt?: DateTimeFilter<"ProgramReview"> | Date | string
    program?: XOR<ProgramScalarRelationFilter, ProgramWhereInput>
  }

  export type ProgramReviewOrderByWithRelationInput = {
    id?: SortOrder
    programId?: SortOrder
    reviewerName?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    program?: ProgramOrderByWithRelationInput
  }

  export type ProgramReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProgramReviewWhereInput | ProgramReviewWhereInput[]
    OR?: ProgramReviewWhereInput[]
    NOT?: ProgramReviewWhereInput | ProgramReviewWhereInput[]
    programId?: IntFilter<"ProgramReview"> | number
    reviewerName?: StringFilter<"ProgramReview"> | string
    rating?: IntFilter<"ProgramReview"> | number
    comment?: StringNullableFilter<"ProgramReview"> | string | null
    createdAt?: DateTimeFilter<"ProgramReview"> | Date | string
    program?: XOR<ProgramScalarRelationFilter, ProgramWhereInput>
  }, "id">

  export type ProgramReviewOrderByWithAggregationInput = {
    id?: SortOrder
    programId?: SortOrder
    reviewerName?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ProgramReviewCountOrderByAggregateInput
    _avg?: ProgramReviewAvgOrderByAggregateInput
    _max?: ProgramReviewMaxOrderByAggregateInput
    _min?: ProgramReviewMinOrderByAggregateInput
    _sum?: ProgramReviewSumOrderByAggregateInput
  }

  export type ProgramReviewScalarWhereWithAggregatesInput = {
    AND?: ProgramReviewScalarWhereWithAggregatesInput | ProgramReviewScalarWhereWithAggregatesInput[]
    OR?: ProgramReviewScalarWhereWithAggregatesInput[]
    NOT?: ProgramReviewScalarWhereWithAggregatesInput | ProgramReviewScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProgramReview"> | number
    programId?: IntWithAggregatesFilter<"ProgramReview"> | number
    reviewerName?: StringWithAggregatesFilter<"ProgramReview"> | string
    rating?: IntWithAggregatesFilter<"ProgramReview"> | number
    comment?: StringNullableWithAggregatesFilter<"ProgramReview"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ProgramReview"> | Date | string
  }

  export type FindingWhereInput = {
    AND?: FindingWhereInput | FindingWhereInput[]
    OR?: FindingWhereInput[]
    NOT?: FindingWhereInput | FindingWhereInput[]
    id?: IntFilter<"Finding"> | number
    code?: StringFilter<"Finding"> | string
    auditorId?: IntFilter<"Finding"> | number
    source?: StringFilter<"Finding"> | string
    clause?: StringFilter<"Finding"> | string
    description?: StringFilter<"Finding"> | string
    category?: StringFilter<"Finding"> | string
    rootCause?: StringNullableFilter<"Finding"> | string | null
    correction?: StringNullableFilter<"Finding"> | string | null
    correctiveAction?: StringNullableFilter<"Finding"> | string | null
    verificationResult?: StringNullableFilter<"Finding"> | string | null
    status?: StringFilter<"Finding"> | string
    targetDate?: DateTimeNullableFilter<"Finding"> | Date | string | null
    evidenceUrl?: StringNullableFilter<"Finding"> | string | null
    reportedAt?: DateTimeFilter<"Finding"> | Date | string
    verifiedAt?: DateTimeNullableFilter<"Finding"> | Date | string | null
    requestId?: StringNullableFilter<"Finding"> | string | null
    createdAt?: DateTimeFilter<"Finding"> | Date | string
    updatedAt?: DateTimeFilter<"Finding"> | Date | string
    auditor?: XOR<InternalUserScalarRelationFilter, InternalUserWhereInput>
  }

  export type FindingOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    auditorId?: SortOrder
    source?: SortOrder
    clause?: SortOrder
    description?: SortOrder
    category?: SortOrder
    rootCause?: SortOrderInput | SortOrder
    correction?: SortOrderInput | SortOrder
    correctiveAction?: SortOrderInput | SortOrder
    verificationResult?: SortOrderInput | SortOrder
    status?: SortOrder
    targetDate?: SortOrderInput | SortOrder
    evidenceUrl?: SortOrderInput | SortOrder
    reportedAt?: SortOrder
    verifiedAt?: SortOrderInput | SortOrder
    requestId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    auditor?: InternalUserOrderByWithRelationInput
  }

  export type FindingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    code?: string
    requestId?: string
    AND?: FindingWhereInput | FindingWhereInput[]
    OR?: FindingWhereInput[]
    NOT?: FindingWhereInput | FindingWhereInput[]
    auditorId?: IntFilter<"Finding"> | number
    source?: StringFilter<"Finding"> | string
    clause?: StringFilter<"Finding"> | string
    description?: StringFilter<"Finding"> | string
    category?: StringFilter<"Finding"> | string
    rootCause?: StringNullableFilter<"Finding"> | string | null
    correction?: StringNullableFilter<"Finding"> | string | null
    correctiveAction?: StringNullableFilter<"Finding"> | string | null
    verificationResult?: StringNullableFilter<"Finding"> | string | null
    status?: StringFilter<"Finding"> | string
    targetDate?: DateTimeNullableFilter<"Finding"> | Date | string | null
    evidenceUrl?: StringNullableFilter<"Finding"> | string | null
    reportedAt?: DateTimeFilter<"Finding"> | Date | string
    verifiedAt?: DateTimeNullableFilter<"Finding"> | Date | string | null
    createdAt?: DateTimeFilter<"Finding"> | Date | string
    updatedAt?: DateTimeFilter<"Finding"> | Date | string
    auditor?: XOR<InternalUserScalarRelationFilter, InternalUserWhereInput>
  }, "id" | "code" | "requestId">

  export type FindingOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    auditorId?: SortOrder
    source?: SortOrder
    clause?: SortOrder
    description?: SortOrder
    category?: SortOrder
    rootCause?: SortOrderInput | SortOrder
    correction?: SortOrderInput | SortOrder
    correctiveAction?: SortOrderInput | SortOrder
    verificationResult?: SortOrderInput | SortOrder
    status?: SortOrder
    targetDate?: SortOrderInput | SortOrder
    evidenceUrl?: SortOrderInput | SortOrder
    reportedAt?: SortOrder
    verifiedAt?: SortOrderInput | SortOrder
    requestId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FindingCountOrderByAggregateInput
    _avg?: FindingAvgOrderByAggregateInput
    _max?: FindingMaxOrderByAggregateInput
    _min?: FindingMinOrderByAggregateInput
    _sum?: FindingSumOrderByAggregateInput
  }

  export type FindingScalarWhereWithAggregatesInput = {
    AND?: FindingScalarWhereWithAggregatesInput | FindingScalarWhereWithAggregatesInput[]
    OR?: FindingScalarWhereWithAggregatesInput[]
    NOT?: FindingScalarWhereWithAggregatesInput | FindingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Finding"> | number
    code?: StringWithAggregatesFilter<"Finding"> | string
    auditorId?: IntWithAggregatesFilter<"Finding"> | number
    source?: StringWithAggregatesFilter<"Finding"> | string
    clause?: StringWithAggregatesFilter<"Finding"> | string
    description?: StringWithAggregatesFilter<"Finding"> | string
    category?: StringWithAggregatesFilter<"Finding"> | string
    rootCause?: StringNullableWithAggregatesFilter<"Finding"> | string | null
    correction?: StringNullableWithAggregatesFilter<"Finding"> | string | null
    correctiveAction?: StringNullableWithAggregatesFilter<"Finding"> | string | null
    verificationResult?: StringNullableWithAggregatesFilter<"Finding"> | string | null
    status?: StringWithAggregatesFilter<"Finding"> | string
    targetDate?: DateTimeNullableWithAggregatesFilter<"Finding"> | Date | string | null
    evidenceUrl?: StringNullableWithAggregatesFilter<"Finding"> | string | null
    reportedAt?: DateTimeWithAggregatesFilter<"Finding"> | Date | string
    verifiedAt?: DateTimeNullableWithAggregatesFilter<"Finding"> | Date | string | null
    requestId?: StringNullableWithAggregatesFilter<"Finding"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Finding"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Finding"> | Date | string
  }

  export type SettingWhereInput = {
    AND?: SettingWhereInput | SettingWhereInput[]
    OR?: SettingWhereInput[]
    NOT?: SettingWhereInput | SettingWhereInput[]
    key?: StringFilter<"Setting"> | string
    value?: StringFilter<"Setting"> | string
    updatedAt?: DateTimeFilter<"Setting"> | Date | string
  }

  export type SettingOrderByWithRelationInput = {
    key?: SortOrder
    value?: SortOrder
    updatedAt?: SortOrder
  }

  export type SettingWhereUniqueInput = Prisma.AtLeast<{
    key?: string
    AND?: SettingWhereInput | SettingWhereInput[]
    OR?: SettingWhereInput[]
    NOT?: SettingWhereInput | SettingWhereInput[]
    value?: StringFilter<"Setting"> | string
    updatedAt?: DateTimeFilter<"Setting"> | Date | string
  }, "key">

  export type SettingOrderByWithAggregationInput = {
    key?: SortOrder
    value?: SortOrder
    updatedAt?: SortOrder
    _count?: SettingCountOrderByAggregateInput
    _max?: SettingMaxOrderByAggregateInput
    _min?: SettingMinOrderByAggregateInput
  }

  export type SettingScalarWhereWithAggregatesInput = {
    AND?: SettingScalarWhereWithAggregatesInput | SettingScalarWhereWithAggregatesInput[]
    OR?: SettingScalarWhereWithAggregatesInput[]
    NOT?: SettingScalarWhereWithAggregatesInput | SettingScalarWhereWithAggregatesInput[]
    key?: StringWithAggregatesFilter<"Setting"> | string
    value?: StringWithAggregatesFilter<"Setting"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"Setting"> | Date | string
  }

  export type InternalUserCreateInput = {
    name: string
    email: string
    passwordHash: string
    role: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: AuthSessionCreateNestedManyWithoutUserInput
    findings?: FindingCreateNestedManyWithoutAuditorInput
  }

  export type InternalUserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    role: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: AuthSessionUncheckedCreateNestedManyWithoutUserInput
    findings?: FindingUncheckedCreateNestedManyWithoutAuditorInput
  }

  export type InternalUserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: AuthSessionUpdateManyWithoutUserNestedInput
    findings?: FindingUpdateManyWithoutAuditorNestedInput
  }

  export type InternalUserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: AuthSessionUncheckedUpdateManyWithoutUserNestedInput
    findings?: FindingUncheckedUpdateManyWithoutAuditorNestedInput
  }

  export type InternalUserCreateManyInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    role: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InternalUserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InternalUserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthSessionCreateInput = {
    id: string
    expiresAt: Date | string
    createdAt?: Date | string
    user: InternalUserCreateNestedOneWithoutSessionsInput
  }

  export type AuthSessionUncheckedCreateInput = {
    id: string
    userId: number
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type AuthSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: InternalUserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type AuthSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthSessionCreateManyInput = {
    id: string
    userId: number
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type AuthSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    name: string
    slug: string
    sortOrder?: number
    programs?: ProgramCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    name: string
    slug: string
    sortOrder?: number
    programs?: ProgramUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    programs?: ProgramUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    programs?: ProgramUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    name: string
    slug: string
    sortOrder?: number
  }

  export type CategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
  }

  export type ProgramCreateInput = {
    slug: string
    title: string
    summary?: string | null
    coverUrl?: string | null
    description?: string | null
    syllabus?: string | null
    meetingUrl?: string | null
    trainerName?: string | null
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: CategoryCreateNestedOneWithoutProgramsInput
    materials?: MaterialCreateNestedManyWithoutProgramInput
    evaluations?: EvaluationCreateNestedManyWithoutProgramInput
    reviews?: ProgramReviewCreateNestedManyWithoutProgramInput
    programSops?: ProgramSopCreateNestedManyWithoutProgramInput
  }

  export type ProgramUncheckedCreateInput = {
    id?: number
    categoryId?: number | null
    slug: string
    title: string
    summary?: string | null
    coverUrl?: string | null
    description?: string | null
    syllabus?: string | null
    meetingUrl?: string | null
    trainerName?: string | null
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    materials?: MaterialUncheckedCreateNestedManyWithoutProgramInput
    evaluations?: EvaluationUncheckedCreateNestedManyWithoutProgramInput
    reviews?: ProgramReviewUncheckedCreateNestedManyWithoutProgramInput
    programSops?: ProgramSopUncheckedCreateNestedManyWithoutProgramInput
  }

  export type ProgramUpdateInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    syllabus?: NullableStringFieldUpdateOperationsInput | string | null
    meetingUrl?: NullableStringFieldUpdateOperationsInput | string | null
    trainerName?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneWithoutProgramsNestedInput
    materials?: MaterialUpdateManyWithoutProgramNestedInput
    evaluations?: EvaluationUpdateManyWithoutProgramNestedInput
    reviews?: ProgramReviewUpdateManyWithoutProgramNestedInput
    programSops?: ProgramSopUpdateManyWithoutProgramNestedInput
  }

  export type ProgramUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    syllabus?: NullableStringFieldUpdateOperationsInput | string | null
    meetingUrl?: NullableStringFieldUpdateOperationsInput | string | null
    trainerName?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    materials?: MaterialUncheckedUpdateManyWithoutProgramNestedInput
    evaluations?: EvaluationUncheckedUpdateManyWithoutProgramNestedInput
    reviews?: ProgramReviewUncheckedUpdateManyWithoutProgramNestedInput
    programSops?: ProgramSopUncheckedUpdateManyWithoutProgramNestedInput
  }

  export type ProgramCreateManyInput = {
    id?: number
    categoryId?: number | null
    slug: string
    title: string
    summary?: string | null
    coverUrl?: string | null
    description?: string | null
    syllabus?: string | null
    meetingUrl?: string | null
    trainerName?: string | null
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProgramUpdateManyMutationInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    syllabus?: NullableStringFieldUpdateOperationsInput | string | null
    meetingUrl?: NullableStringFieldUpdateOperationsInput | string | null
    trainerName?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgramUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    syllabus?: NullableStringFieldUpdateOperationsInput | string | null
    meetingUrl?: NullableStringFieldUpdateOperationsInput | string | null
    trainerName?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaterialCreateInput = {
    type: string
    title: string
    description?: string | null
    url?: string | null
    filePath?: string | null
    sortOrder?: number
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    program: ProgramCreateNestedOneWithoutMaterialsInput
  }

  export type MaterialUncheckedCreateInput = {
    id?: number
    programId: number
    type: string
    title: string
    description?: string | null
    url?: string | null
    filePath?: string | null
    sortOrder?: number
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MaterialUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    program?: ProgramUpdateOneRequiredWithoutMaterialsNestedInput
  }

  export type MaterialUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    programId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaterialCreateManyInput = {
    id?: number
    programId: number
    type: string
    title: string
    description?: string | null
    url?: string | null
    filePath?: string | null
    sortOrder?: number
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MaterialUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaterialUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    programId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SopDocumentCreateInput = {
    code: string
    title: string
    version?: string
    description?: string | null
    url: string
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    programSops?: ProgramSopCreateNestedManyWithoutSopInput
  }

  export type SopDocumentUncheckedCreateInput = {
    id?: number
    code: string
    title: string
    version?: string
    description?: string | null
    url: string
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    programSops?: ProgramSopUncheckedCreateNestedManyWithoutSopInput
  }

  export type SopDocumentUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    programSops?: ProgramSopUpdateManyWithoutSopNestedInput
  }

  export type SopDocumentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    programSops?: ProgramSopUncheckedUpdateManyWithoutSopNestedInput
  }

  export type SopDocumentCreateManyInput = {
    id?: number
    code: string
    title: string
    version?: string
    description?: string | null
    url: string
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SopDocumentUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SopDocumentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgramSopCreateInput = {
    program: ProgramCreateNestedOneWithoutProgramSopsInput
    sop: SopDocumentCreateNestedOneWithoutProgramSopsInput
  }

  export type ProgramSopUncheckedCreateInput = {
    programId: number
    sopId: number
  }

  export type ProgramSopUpdateInput = {
    program?: ProgramUpdateOneRequiredWithoutProgramSopsNestedInput
    sop?: SopDocumentUpdateOneRequiredWithoutProgramSopsNestedInput
  }

  export type ProgramSopUncheckedUpdateInput = {
    programId?: IntFieldUpdateOperationsInput | number
    sopId?: IntFieldUpdateOperationsInput | number
  }

  export type ProgramSopCreateManyInput = {
    programId: number
    sopId: number
  }

  export type ProgramSopUpdateManyMutationInput = {

  }

  export type ProgramSopUncheckedUpdateManyInput = {
    programId?: IntFieldUpdateOperationsInput | number
    sopId?: IntFieldUpdateOperationsInput | number
  }

  export type EvaluationCreateInput = {
    type: string
    title: string
    instructions?: string | null
    shuffle?: boolean
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    program: ProgramCreateNestedOneWithoutEvaluationsInput
    questions?: QuestionCreateNestedManyWithoutEvaluationInput
    attempts?: AttemptCreateNestedManyWithoutEvaluationInput
  }

  export type EvaluationUncheckedCreateInput = {
    id?: number
    programId: number
    type: string
    title: string
    instructions?: string | null
    shuffle?: boolean
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionUncheckedCreateNestedManyWithoutEvaluationInput
    attempts?: AttemptUncheckedCreateNestedManyWithoutEvaluationInput
  }

  export type EvaluationUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    shuffle?: BoolFieldUpdateOperationsInput | boolean
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    program?: ProgramUpdateOneRequiredWithoutEvaluationsNestedInput
    questions?: QuestionUpdateManyWithoutEvaluationNestedInput
    attempts?: AttemptUpdateManyWithoutEvaluationNestedInput
  }

  export type EvaluationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    programId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    shuffle?: BoolFieldUpdateOperationsInput | boolean
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUncheckedUpdateManyWithoutEvaluationNestedInput
    attempts?: AttemptUncheckedUpdateManyWithoutEvaluationNestedInput
  }

  export type EvaluationCreateManyInput = {
    id?: number
    programId: number
    type: string
    title: string
    instructions?: string | null
    shuffle?: boolean
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EvaluationUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    shuffle?: BoolFieldUpdateOperationsInput | boolean
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EvaluationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    programId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    shuffle?: BoolFieldUpdateOperationsInput | boolean
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionCreateInput = {
    sortOrder?: number
    text: string
    options: string
    correctAnswer: string
    score?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    evaluation: EvaluationCreateNestedOneWithoutQuestionsInput
    attemptAnswers?: AttemptAnswerCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateInput = {
    id?: number
    evaluationId: number
    sortOrder?: number
    text: string
    options: string
    correctAnswer: string
    score?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    attemptAnswers?: AttemptAnswerUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUpdateInput = {
    sortOrder?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    options?: StringFieldUpdateOperationsInput | string
    correctAnswer?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluation?: EvaluationUpdateOneRequiredWithoutQuestionsNestedInput
    attemptAnswers?: AttemptAnswerUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    evaluationId?: IntFieldUpdateOperationsInput | number
    sortOrder?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    options?: StringFieldUpdateOperationsInput | string
    correctAnswer?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attemptAnswers?: AttemptAnswerUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionCreateManyInput = {
    id?: number
    evaluationId: number
    sortOrder?: number
    text: string
    options: string
    correctAnswer: string
    score?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionUpdateManyMutationInput = {
    sortOrder?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    options?: StringFieldUpdateOperationsInput | string
    correctAnswer?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    evaluationId?: IntFieldUpdateOperationsInput | number
    sortOrder?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    options?: StringFieldUpdateOperationsInput | string
    correctAnswer?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttemptCreateInput = {
    takerName: string
    takerEmail: string
    takerPhone?: string | null
    takerTitle?: string | null
    startedAt?: Date | string
    submittedAt?: Date | string | null
    score?: number | null
    maxScore?: number | null
    evaluation: EvaluationCreateNestedOneWithoutAttemptsInput
    answers?: AttemptAnswerCreateNestedManyWithoutAttemptInput
  }

  export type AttemptUncheckedCreateInput = {
    id?: number
    evaluationId: number
    takerName: string
    takerEmail: string
    takerPhone?: string | null
    takerTitle?: string | null
    startedAt?: Date | string
    submittedAt?: Date | string | null
    score?: number | null
    maxScore?: number | null
    answers?: AttemptAnswerUncheckedCreateNestedManyWithoutAttemptInput
  }

  export type AttemptUpdateInput = {
    takerName?: StringFieldUpdateOperationsInput | string
    takerEmail?: StringFieldUpdateOperationsInput | string
    takerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    takerTitle?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    maxScore?: NullableIntFieldUpdateOperationsInput | number | null
    evaluation?: EvaluationUpdateOneRequiredWithoutAttemptsNestedInput
    answers?: AttemptAnswerUpdateManyWithoutAttemptNestedInput
  }

  export type AttemptUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    evaluationId?: IntFieldUpdateOperationsInput | number
    takerName?: StringFieldUpdateOperationsInput | string
    takerEmail?: StringFieldUpdateOperationsInput | string
    takerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    takerTitle?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    maxScore?: NullableIntFieldUpdateOperationsInput | number | null
    answers?: AttemptAnswerUncheckedUpdateManyWithoutAttemptNestedInput
  }

  export type AttemptCreateManyInput = {
    id?: number
    evaluationId: number
    takerName: string
    takerEmail: string
    takerPhone?: string | null
    takerTitle?: string | null
    startedAt?: Date | string
    submittedAt?: Date | string | null
    score?: number | null
    maxScore?: number | null
  }

  export type AttemptUpdateManyMutationInput = {
    takerName?: StringFieldUpdateOperationsInput | string
    takerEmail?: StringFieldUpdateOperationsInput | string
    takerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    takerTitle?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    maxScore?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AttemptUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    evaluationId?: IntFieldUpdateOperationsInput | number
    takerName?: StringFieldUpdateOperationsInput | string
    takerEmail?: StringFieldUpdateOperationsInput | string
    takerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    takerTitle?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    maxScore?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AttemptAnswerCreateInput = {
    answer?: string | null
    isCorrect?: boolean
    attempt: AttemptCreateNestedOneWithoutAnswersInput
    question: QuestionCreateNestedOneWithoutAttemptAnswersInput
  }

  export type AttemptAnswerUncheckedCreateInput = {
    id?: number
    attemptId: number
    questionId: number
    answer?: string | null
    isCorrect?: boolean
  }

  export type AttemptAnswerUpdateInput = {
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    attempt?: AttemptUpdateOneRequiredWithoutAnswersNestedInput
    question?: QuestionUpdateOneRequiredWithoutAttemptAnswersNestedInput
  }

  export type AttemptAnswerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    attemptId?: IntFieldUpdateOperationsInput | number
    questionId?: IntFieldUpdateOperationsInput | number
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AttemptAnswerCreateManyInput = {
    id?: number
    attemptId: number
    questionId: number
    answer?: string | null
    isCorrect?: boolean
  }

  export type AttemptAnswerUpdateManyMutationInput = {
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AttemptAnswerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    attemptId?: IntFieldUpdateOperationsInput | number
    questionId?: IntFieldUpdateOperationsInput | number
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProgramReviewCreateInput = {
    reviewerName?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    program: ProgramCreateNestedOneWithoutReviewsInput
  }

  export type ProgramReviewUncheckedCreateInput = {
    id?: number
    programId: number
    reviewerName?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type ProgramReviewUpdateInput = {
    reviewerName?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    program?: ProgramUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ProgramReviewUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    programId?: IntFieldUpdateOperationsInput | number
    reviewerName?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgramReviewCreateManyInput = {
    id?: number
    programId: number
    reviewerName?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type ProgramReviewUpdateManyMutationInput = {
    reviewerName?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgramReviewUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    programId?: IntFieldUpdateOperationsInput | number
    reviewerName?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FindingCreateInput = {
    code: string
    source?: string
    clause: string
    description: string
    category: string
    rootCause?: string | null
    correction?: string | null
    correctiveAction?: string | null
    verificationResult?: string | null
    status?: string
    targetDate?: Date | string | null
    evidenceUrl?: string | null
    reportedAt?: Date | string
    verifiedAt?: Date | string | null
    requestId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    auditor: InternalUserCreateNestedOneWithoutFindingsInput
  }

  export type FindingUncheckedCreateInput = {
    id?: number
    code: string
    auditorId: number
    source?: string
    clause: string
    description: string
    category: string
    rootCause?: string | null
    correction?: string | null
    correctiveAction?: string | null
    verificationResult?: string | null
    status?: string
    targetDate?: Date | string | null
    evidenceUrl?: string | null
    reportedAt?: Date | string
    verifiedAt?: Date | string | null
    requestId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FindingUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    clause?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    rootCause?: NullableStringFieldUpdateOperationsInput | string | null
    correction?: NullableStringFieldUpdateOperationsInput | string | null
    correctiveAction?: NullableStringFieldUpdateOperationsInput | string | null
    verificationResult?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    targetDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    evidenceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    reportedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auditor?: InternalUserUpdateOneRequiredWithoutFindingsNestedInput
  }

  export type FindingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    auditorId?: IntFieldUpdateOperationsInput | number
    source?: StringFieldUpdateOperationsInput | string
    clause?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    rootCause?: NullableStringFieldUpdateOperationsInput | string | null
    correction?: NullableStringFieldUpdateOperationsInput | string | null
    correctiveAction?: NullableStringFieldUpdateOperationsInput | string | null
    verificationResult?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    targetDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    evidenceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    reportedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FindingCreateManyInput = {
    id?: number
    code: string
    auditorId: number
    source?: string
    clause: string
    description: string
    category: string
    rootCause?: string | null
    correction?: string | null
    correctiveAction?: string | null
    verificationResult?: string | null
    status?: string
    targetDate?: Date | string | null
    evidenceUrl?: string | null
    reportedAt?: Date | string
    verifiedAt?: Date | string | null
    requestId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FindingUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    clause?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    rootCause?: NullableStringFieldUpdateOperationsInput | string | null
    correction?: NullableStringFieldUpdateOperationsInput | string | null
    correctiveAction?: NullableStringFieldUpdateOperationsInput | string | null
    verificationResult?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    targetDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    evidenceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    reportedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FindingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    auditorId?: IntFieldUpdateOperationsInput | number
    source?: StringFieldUpdateOperationsInput | string
    clause?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    rootCause?: NullableStringFieldUpdateOperationsInput | string | null
    correction?: NullableStringFieldUpdateOperationsInput | string | null
    correctiveAction?: NullableStringFieldUpdateOperationsInput | string | null
    verificationResult?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    targetDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    evidenceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    reportedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettingCreateInput = {
    key: string
    value: string
    updatedAt?: Date | string
  }

  export type SettingUncheckedCreateInput = {
    key: string
    value: string
    updatedAt?: Date | string
  }

  export type SettingUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettingUncheckedUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettingCreateManyInput = {
    key: string
    value: string
    updatedAt?: Date | string
  }

  export type SettingUpdateManyMutationInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettingUncheckedUpdateManyInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AuthSessionListRelationFilter = {
    every?: AuthSessionWhereInput
    some?: AuthSessionWhereInput
    none?: AuthSessionWhereInput
  }

  export type FindingListRelationFilter = {
    every?: FindingWhereInput
    some?: FindingWhereInput
    none?: FindingWhereInput
  }

  export type AuthSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FindingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InternalUserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InternalUserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type InternalUserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InternalUserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InternalUserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type InternalUserScalarRelationFilter = {
    is?: InternalUserWhereInput
    isNot?: InternalUserWhereInput
  }

  export type AuthSessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type AuthSessionAvgOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type AuthSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type AuthSessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type AuthSessionSumOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type ProgramListRelationFilter = {
    every?: ProgramWhereInput
    some?: ProgramWhereInput
    none?: ProgramWhereInput
  }

  export type ProgramOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    sortOrder?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
    sortOrder?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    sortOrder?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    sortOrder?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
    sortOrder?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type CategoryNullableScalarRelationFilter = {
    is?: CategoryWhereInput | null
    isNot?: CategoryWhereInput | null
  }

  export type MaterialListRelationFilter = {
    every?: MaterialWhereInput
    some?: MaterialWhereInput
    none?: MaterialWhereInput
  }

  export type EvaluationListRelationFilter = {
    every?: EvaluationWhereInput
    some?: EvaluationWhereInput
    none?: EvaluationWhereInput
  }

  export type ProgramReviewListRelationFilter = {
    every?: ProgramReviewWhereInput
    some?: ProgramReviewWhereInput
    none?: ProgramReviewWhereInput
  }

  export type ProgramSopListRelationFilter = {
    every?: ProgramSopWhereInput
    some?: ProgramSopWhereInput
    none?: ProgramSopWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MaterialOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EvaluationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProgramReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProgramSopOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProgramCountOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    coverUrl?: SortOrder
    description?: SortOrder
    syllabus?: SortOrder
    meetingUrl?: SortOrder
    trainerName?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProgramAvgOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
  }

  export type ProgramMaxOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    coverUrl?: SortOrder
    description?: SortOrder
    syllabus?: SortOrder
    meetingUrl?: SortOrder
    trainerName?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProgramMinOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    coverUrl?: SortOrder
    description?: SortOrder
    syllabus?: SortOrder
    meetingUrl?: SortOrder
    trainerName?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProgramSumOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type ProgramScalarRelationFilter = {
    is?: ProgramWhereInput
    isNot?: ProgramWhereInput
  }

  export type MaterialCountOrderByAggregateInput = {
    id?: SortOrder
    programId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrder
    url?: SortOrder
    filePath?: SortOrder
    sortOrder?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MaterialAvgOrderByAggregateInput = {
    id?: SortOrder
    programId?: SortOrder
    sortOrder?: SortOrder
  }

  export type MaterialMaxOrderByAggregateInput = {
    id?: SortOrder
    programId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrder
    url?: SortOrder
    filePath?: SortOrder
    sortOrder?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MaterialMinOrderByAggregateInput = {
    id?: SortOrder
    programId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrder
    url?: SortOrder
    filePath?: SortOrder
    sortOrder?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MaterialSumOrderByAggregateInput = {
    id?: SortOrder
    programId?: SortOrder
    sortOrder?: SortOrder
  }

  export type SopDocumentCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    title?: SortOrder
    version?: SortOrder
    description?: SortOrder
    url?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SopDocumentAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SopDocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    title?: SortOrder
    version?: SortOrder
    description?: SortOrder
    url?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SopDocumentMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    title?: SortOrder
    version?: SortOrder
    description?: SortOrder
    url?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SopDocumentSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SopDocumentScalarRelationFilter = {
    is?: SopDocumentWhereInput
    isNot?: SopDocumentWhereInput
  }

  export type ProgramSopProgramIdSopIdCompoundUniqueInput = {
    programId: number
    sopId: number
  }

  export type ProgramSopCountOrderByAggregateInput = {
    programId?: SortOrder
    sopId?: SortOrder
  }

  export type ProgramSopAvgOrderByAggregateInput = {
    programId?: SortOrder
    sopId?: SortOrder
  }

  export type ProgramSopMaxOrderByAggregateInput = {
    programId?: SortOrder
    sopId?: SortOrder
  }

  export type ProgramSopMinOrderByAggregateInput = {
    programId?: SortOrder
    sopId?: SortOrder
  }

  export type ProgramSopSumOrderByAggregateInput = {
    programId?: SortOrder
    sopId?: SortOrder
  }

  export type QuestionListRelationFilter = {
    every?: QuestionWhereInput
    some?: QuestionWhereInput
    none?: QuestionWhereInput
  }

  export type AttemptListRelationFilter = {
    every?: AttemptWhereInput
    some?: AttemptWhereInput
    none?: AttemptWhereInput
  }

  export type QuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AttemptOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EvaluationProgramIdTypeCompoundUniqueInput = {
    programId: number
    type: string
  }

  export type EvaluationCountOrderByAggregateInput = {
    id?: SortOrder
    programId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    instructions?: SortOrder
    shuffle?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EvaluationAvgOrderByAggregateInput = {
    id?: SortOrder
    programId?: SortOrder
  }

  export type EvaluationMaxOrderByAggregateInput = {
    id?: SortOrder
    programId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    instructions?: SortOrder
    shuffle?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EvaluationMinOrderByAggregateInput = {
    id?: SortOrder
    programId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    instructions?: SortOrder
    shuffle?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EvaluationSumOrderByAggregateInput = {
    id?: SortOrder
    programId?: SortOrder
  }

  export type EvaluationScalarRelationFilter = {
    is?: EvaluationWhereInput
    isNot?: EvaluationWhereInput
  }

  export type AttemptAnswerListRelationFilter = {
    every?: AttemptAnswerWhereInput
    some?: AttemptAnswerWhereInput
    none?: AttemptAnswerWhereInput
  }

  export type AttemptAnswerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuestionCountOrderByAggregateInput = {
    id?: SortOrder
    evaluationId?: SortOrder
    sortOrder?: SortOrder
    text?: SortOrder
    options?: SortOrder
    correctAnswer?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestionAvgOrderByAggregateInput = {
    id?: SortOrder
    evaluationId?: SortOrder
    sortOrder?: SortOrder
    score?: SortOrder
  }

  export type QuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    evaluationId?: SortOrder
    sortOrder?: SortOrder
    text?: SortOrder
    options?: SortOrder
    correctAnswer?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestionMinOrderByAggregateInput = {
    id?: SortOrder
    evaluationId?: SortOrder
    sortOrder?: SortOrder
    text?: SortOrder
    options?: SortOrder
    correctAnswer?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestionSumOrderByAggregateInput = {
    id?: SortOrder
    evaluationId?: SortOrder
    sortOrder?: SortOrder
    score?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AttemptCountOrderByAggregateInput = {
    id?: SortOrder
    evaluationId?: SortOrder
    takerName?: SortOrder
    takerEmail?: SortOrder
    takerPhone?: SortOrder
    takerTitle?: SortOrder
    startedAt?: SortOrder
    submittedAt?: SortOrder
    score?: SortOrder
    maxScore?: SortOrder
  }

  export type AttemptAvgOrderByAggregateInput = {
    id?: SortOrder
    evaluationId?: SortOrder
    score?: SortOrder
    maxScore?: SortOrder
  }

  export type AttemptMaxOrderByAggregateInput = {
    id?: SortOrder
    evaluationId?: SortOrder
    takerName?: SortOrder
    takerEmail?: SortOrder
    takerPhone?: SortOrder
    takerTitle?: SortOrder
    startedAt?: SortOrder
    submittedAt?: SortOrder
    score?: SortOrder
    maxScore?: SortOrder
  }

  export type AttemptMinOrderByAggregateInput = {
    id?: SortOrder
    evaluationId?: SortOrder
    takerName?: SortOrder
    takerEmail?: SortOrder
    takerPhone?: SortOrder
    takerTitle?: SortOrder
    startedAt?: SortOrder
    submittedAt?: SortOrder
    score?: SortOrder
    maxScore?: SortOrder
  }

  export type AttemptSumOrderByAggregateInput = {
    id?: SortOrder
    evaluationId?: SortOrder
    score?: SortOrder
    maxScore?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type AttemptScalarRelationFilter = {
    is?: AttemptWhereInput
    isNot?: AttemptWhereInput
  }

  export type QuestionScalarRelationFilter = {
    is?: QuestionWhereInput
    isNot?: QuestionWhereInput
  }

  export type AttemptAnswerAttemptIdQuestionIdCompoundUniqueInput = {
    attemptId: number
    questionId: number
  }

  export type AttemptAnswerCountOrderByAggregateInput = {
    id?: SortOrder
    attemptId?: SortOrder
    questionId?: SortOrder
    answer?: SortOrder
    isCorrect?: SortOrder
  }

  export type AttemptAnswerAvgOrderByAggregateInput = {
    id?: SortOrder
    attemptId?: SortOrder
    questionId?: SortOrder
  }

  export type AttemptAnswerMaxOrderByAggregateInput = {
    id?: SortOrder
    attemptId?: SortOrder
    questionId?: SortOrder
    answer?: SortOrder
    isCorrect?: SortOrder
  }

  export type AttemptAnswerMinOrderByAggregateInput = {
    id?: SortOrder
    attemptId?: SortOrder
    questionId?: SortOrder
    answer?: SortOrder
    isCorrect?: SortOrder
  }

  export type AttemptAnswerSumOrderByAggregateInput = {
    id?: SortOrder
    attemptId?: SortOrder
    questionId?: SortOrder
  }

  export type ProgramReviewCountOrderByAggregateInput = {
    id?: SortOrder
    programId?: SortOrder
    reviewerName?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type ProgramReviewAvgOrderByAggregateInput = {
    id?: SortOrder
    programId?: SortOrder
    rating?: SortOrder
  }

  export type ProgramReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    programId?: SortOrder
    reviewerName?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type ProgramReviewMinOrderByAggregateInput = {
    id?: SortOrder
    programId?: SortOrder
    reviewerName?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type ProgramReviewSumOrderByAggregateInput = {
    id?: SortOrder
    programId?: SortOrder
    rating?: SortOrder
  }

  export type FindingCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    auditorId?: SortOrder
    source?: SortOrder
    clause?: SortOrder
    description?: SortOrder
    category?: SortOrder
    rootCause?: SortOrder
    correction?: SortOrder
    correctiveAction?: SortOrder
    verificationResult?: SortOrder
    status?: SortOrder
    targetDate?: SortOrder
    evidenceUrl?: SortOrder
    reportedAt?: SortOrder
    verifiedAt?: SortOrder
    requestId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FindingAvgOrderByAggregateInput = {
    id?: SortOrder
    auditorId?: SortOrder
  }

  export type FindingMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    auditorId?: SortOrder
    source?: SortOrder
    clause?: SortOrder
    description?: SortOrder
    category?: SortOrder
    rootCause?: SortOrder
    correction?: SortOrder
    correctiveAction?: SortOrder
    verificationResult?: SortOrder
    status?: SortOrder
    targetDate?: SortOrder
    evidenceUrl?: SortOrder
    reportedAt?: SortOrder
    verifiedAt?: SortOrder
    requestId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FindingMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    auditorId?: SortOrder
    source?: SortOrder
    clause?: SortOrder
    description?: SortOrder
    category?: SortOrder
    rootCause?: SortOrder
    correction?: SortOrder
    correctiveAction?: SortOrder
    verificationResult?: SortOrder
    status?: SortOrder
    targetDate?: SortOrder
    evidenceUrl?: SortOrder
    reportedAt?: SortOrder
    verifiedAt?: SortOrder
    requestId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FindingSumOrderByAggregateInput = {
    id?: SortOrder
    auditorId?: SortOrder
  }

  export type SettingCountOrderByAggregateInput = {
    key?: SortOrder
    value?: SortOrder
    updatedAt?: SortOrder
  }

  export type SettingMaxOrderByAggregateInput = {
    key?: SortOrder
    value?: SortOrder
    updatedAt?: SortOrder
  }

  export type SettingMinOrderByAggregateInput = {
    key?: SortOrder
    value?: SortOrder
    updatedAt?: SortOrder
  }

  export type AuthSessionCreateNestedManyWithoutUserInput = {
    create?: XOR<AuthSessionCreateWithoutUserInput, AuthSessionUncheckedCreateWithoutUserInput> | AuthSessionCreateWithoutUserInput[] | AuthSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuthSessionCreateOrConnectWithoutUserInput | AuthSessionCreateOrConnectWithoutUserInput[]
    createMany?: AuthSessionCreateManyUserInputEnvelope
    connect?: AuthSessionWhereUniqueInput | AuthSessionWhereUniqueInput[]
  }

  export type FindingCreateNestedManyWithoutAuditorInput = {
    create?: XOR<FindingCreateWithoutAuditorInput, FindingUncheckedCreateWithoutAuditorInput> | FindingCreateWithoutAuditorInput[] | FindingUncheckedCreateWithoutAuditorInput[]
    connectOrCreate?: FindingCreateOrConnectWithoutAuditorInput | FindingCreateOrConnectWithoutAuditorInput[]
    createMany?: FindingCreateManyAuditorInputEnvelope
    connect?: FindingWhereUniqueInput | FindingWhereUniqueInput[]
  }

  export type AuthSessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AuthSessionCreateWithoutUserInput, AuthSessionUncheckedCreateWithoutUserInput> | AuthSessionCreateWithoutUserInput[] | AuthSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuthSessionCreateOrConnectWithoutUserInput | AuthSessionCreateOrConnectWithoutUserInput[]
    createMany?: AuthSessionCreateManyUserInputEnvelope
    connect?: AuthSessionWhereUniqueInput | AuthSessionWhereUniqueInput[]
  }

  export type FindingUncheckedCreateNestedManyWithoutAuditorInput = {
    create?: XOR<FindingCreateWithoutAuditorInput, FindingUncheckedCreateWithoutAuditorInput> | FindingCreateWithoutAuditorInput[] | FindingUncheckedCreateWithoutAuditorInput[]
    connectOrCreate?: FindingCreateOrConnectWithoutAuditorInput | FindingCreateOrConnectWithoutAuditorInput[]
    createMany?: FindingCreateManyAuditorInputEnvelope
    connect?: FindingWhereUniqueInput | FindingWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AuthSessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuthSessionCreateWithoutUserInput, AuthSessionUncheckedCreateWithoutUserInput> | AuthSessionCreateWithoutUserInput[] | AuthSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuthSessionCreateOrConnectWithoutUserInput | AuthSessionCreateOrConnectWithoutUserInput[]
    upsert?: AuthSessionUpsertWithWhereUniqueWithoutUserInput | AuthSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuthSessionCreateManyUserInputEnvelope
    set?: AuthSessionWhereUniqueInput | AuthSessionWhereUniqueInput[]
    disconnect?: AuthSessionWhereUniqueInput | AuthSessionWhereUniqueInput[]
    delete?: AuthSessionWhereUniqueInput | AuthSessionWhereUniqueInput[]
    connect?: AuthSessionWhereUniqueInput | AuthSessionWhereUniqueInput[]
    update?: AuthSessionUpdateWithWhereUniqueWithoutUserInput | AuthSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuthSessionUpdateManyWithWhereWithoutUserInput | AuthSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuthSessionScalarWhereInput | AuthSessionScalarWhereInput[]
  }

  export type FindingUpdateManyWithoutAuditorNestedInput = {
    create?: XOR<FindingCreateWithoutAuditorInput, FindingUncheckedCreateWithoutAuditorInput> | FindingCreateWithoutAuditorInput[] | FindingUncheckedCreateWithoutAuditorInput[]
    connectOrCreate?: FindingCreateOrConnectWithoutAuditorInput | FindingCreateOrConnectWithoutAuditorInput[]
    upsert?: FindingUpsertWithWhereUniqueWithoutAuditorInput | FindingUpsertWithWhereUniqueWithoutAuditorInput[]
    createMany?: FindingCreateManyAuditorInputEnvelope
    set?: FindingWhereUniqueInput | FindingWhereUniqueInput[]
    disconnect?: FindingWhereUniqueInput | FindingWhereUniqueInput[]
    delete?: FindingWhereUniqueInput | FindingWhereUniqueInput[]
    connect?: FindingWhereUniqueInput | FindingWhereUniqueInput[]
    update?: FindingUpdateWithWhereUniqueWithoutAuditorInput | FindingUpdateWithWhereUniqueWithoutAuditorInput[]
    updateMany?: FindingUpdateManyWithWhereWithoutAuditorInput | FindingUpdateManyWithWhereWithoutAuditorInput[]
    deleteMany?: FindingScalarWhereInput | FindingScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AuthSessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuthSessionCreateWithoutUserInput, AuthSessionUncheckedCreateWithoutUserInput> | AuthSessionCreateWithoutUserInput[] | AuthSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuthSessionCreateOrConnectWithoutUserInput | AuthSessionCreateOrConnectWithoutUserInput[]
    upsert?: AuthSessionUpsertWithWhereUniqueWithoutUserInput | AuthSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuthSessionCreateManyUserInputEnvelope
    set?: AuthSessionWhereUniqueInput | AuthSessionWhereUniqueInput[]
    disconnect?: AuthSessionWhereUniqueInput | AuthSessionWhereUniqueInput[]
    delete?: AuthSessionWhereUniqueInput | AuthSessionWhereUniqueInput[]
    connect?: AuthSessionWhereUniqueInput | AuthSessionWhereUniqueInput[]
    update?: AuthSessionUpdateWithWhereUniqueWithoutUserInput | AuthSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuthSessionUpdateManyWithWhereWithoutUserInput | AuthSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuthSessionScalarWhereInput | AuthSessionScalarWhereInput[]
  }

  export type FindingUncheckedUpdateManyWithoutAuditorNestedInput = {
    create?: XOR<FindingCreateWithoutAuditorInput, FindingUncheckedCreateWithoutAuditorInput> | FindingCreateWithoutAuditorInput[] | FindingUncheckedCreateWithoutAuditorInput[]
    connectOrCreate?: FindingCreateOrConnectWithoutAuditorInput | FindingCreateOrConnectWithoutAuditorInput[]
    upsert?: FindingUpsertWithWhereUniqueWithoutAuditorInput | FindingUpsertWithWhereUniqueWithoutAuditorInput[]
    createMany?: FindingCreateManyAuditorInputEnvelope
    set?: FindingWhereUniqueInput | FindingWhereUniqueInput[]
    disconnect?: FindingWhereUniqueInput | FindingWhereUniqueInput[]
    delete?: FindingWhereUniqueInput | FindingWhereUniqueInput[]
    connect?: FindingWhereUniqueInput | FindingWhereUniqueInput[]
    update?: FindingUpdateWithWhereUniqueWithoutAuditorInput | FindingUpdateWithWhereUniqueWithoutAuditorInput[]
    updateMany?: FindingUpdateManyWithWhereWithoutAuditorInput | FindingUpdateManyWithWhereWithoutAuditorInput[]
    deleteMany?: FindingScalarWhereInput | FindingScalarWhereInput[]
  }

  export type InternalUserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<InternalUserCreateWithoutSessionsInput, InternalUserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: InternalUserCreateOrConnectWithoutSessionsInput
    connect?: InternalUserWhereUniqueInput
  }

  export type InternalUserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<InternalUserCreateWithoutSessionsInput, InternalUserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: InternalUserCreateOrConnectWithoutSessionsInput
    upsert?: InternalUserUpsertWithoutSessionsInput
    connect?: InternalUserWhereUniqueInput
    update?: XOR<XOR<InternalUserUpdateToOneWithWhereWithoutSessionsInput, InternalUserUpdateWithoutSessionsInput>, InternalUserUncheckedUpdateWithoutSessionsInput>
  }

  export type ProgramCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProgramCreateWithoutCategoryInput, ProgramUncheckedCreateWithoutCategoryInput> | ProgramCreateWithoutCategoryInput[] | ProgramUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProgramCreateOrConnectWithoutCategoryInput | ProgramCreateOrConnectWithoutCategoryInput[]
    createMany?: ProgramCreateManyCategoryInputEnvelope
    connect?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
  }

  export type ProgramUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProgramCreateWithoutCategoryInput, ProgramUncheckedCreateWithoutCategoryInput> | ProgramCreateWithoutCategoryInput[] | ProgramUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProgramCreateOrConnectWithoutCategoryInput | ProgramCreateOrConnectWithoutCategoryInput[]
    createMany?: ProgramCreateManyCategoryInputEnvelope
    connect?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
  }

  export type ProgramUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProgramCreateWithoutCategoryInput, ProgramUncheckedCreateWithoutCategoryInput> | ProgramCreateWithoutCategoryInput[] | ProgramUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProgramCreateOrConnectWithoutCategoryInput | ProgramCreateOrConnectWithoutCategoryInput[]
    upsert?: ProgramUpsertWithWhereUniqueWithoutCategoryInput | ProgramUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProgramCreateManyCategoryInputEnvelope
    set?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
    disconnect?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
    delete?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
    connect?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
    update?: ProgramUpdateWithWhereUniqueWithoutCategoryInput | ProgramUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProgramUpdateManyWithWhereWithoutCategoryInput | ProgramUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProgramScalarWhereInput | ProgramScalarWhereInput[]
  }

  export type ProgramUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProgramCreateWithoutCategoryInput, ProgramUncheckedCreateWithoutCategoryInput> | ProgramCreateWithoutCategoryInput[] | ProgramUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProgramCreateOrConnectWithoutCategoryInput | ProgramCreateOrConnectWithoutCategoryInput[]
    upsert?: ProgramUpsertWithWhereUniqueWithoutCategoryInput | ProgramUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProgramCreateManyCategoryInputEnvelope
    set?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
    disconnect?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
    delete?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
    connect?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
    update?: ProgramUpdateWithWhereUniqueWithoutCategoryInput | ProgramUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProgramUpdateManyWithWhereWithoutCategoryInput | ProgramUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProgramScalarWhereInput | ProgramScalarWhereInput[]
  }

  export type CategoryCreateNestedOneWithoutProgramsInput = {
    create?: XOR<CategoryCreateWithoutProgramsInput, CategoryUncheckedCreateWithoutProgramsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProgramsInput
    connect?: CategoryWhereUniqueInput
  }

  export type MaterialCreateNestedManyWithoutProgramInput = {
    create?: XOR<MaterialCreateWithoutProgramInput, MaterialUncheckedCreateWithoutProgramInput> | MaterialCreateWithoutProgramInput[] | MaterialUncheckedCreateWithoutProgramInput[]
    connectOrCreate?: MaterialCreateOrConnectWithoutProgramInput | MaterialCreateOrConnectWithoutProgramInput[]
    createMany?: MaterialCreateManyProgramInputEnvelope
    connect?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
  }

  export type EvaluationCreateNestedManyWithoutProgramInput = {
    create?: XOR<EvaluationCreateWithoutProgramInput, EvaluationUncheckedCreateWithoutProgramInput> | EvaluationCreateWithoutProgramInput[] | EvaluationUncheckedCreateWithoutProgramInput[]
    connectOrCreate?: EvaluationCreateOrConnectWithoutProgramInput | EvaluationCreateOrConnectWithoutProgramInput[]
    createMany?: EvaluationCreateManyProgramInputEnvelope
    connect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
  }

  export type ProgramReviewCreateNestedManyWithoutProgramInput = {
    create?: XOR<ProgramReviewCreateWithoutProgramInput, ProgramReviewUncheckedCreateWithoutProgramInput> | ProgramReviewCreateWithoutProgramInput[] | ProgramReviewUncheckedCreateWithoutProgramInput[]
    connectOrCreate?: ProgramReviewCreateOrConnectWithoutProgramInput | ProgramReviewCreateOrConnectWithoutProgramInput[]
    createMany?: ProgramReviewCreateManyProgramInputEnvelope
    connect?: ProgramReviewWhereUniqueInput | ProgramReviewWhereUniqueInput[]
  }

  export type ProgramSopCreateNestedManyWithoutProgramInput = {
    create?: XOR<ProgramSopCreateWithoutProgramInput, ProgramSopUncheckedCreateWithoutProgramInput> | ProgramSopCreateWithoutProgramInput[] | ProgramSopUncheckedCreateWithoutProgramInput[]
    connectOrCreate?: ProgramSopCreateOrConnectWithoutProgramInput | ProgramSopCreateOrConnectWithoutProgramInput[]
    createMany?: ProgramSopCreateManyProgramInputEnvelope
    connect?: ProgramSopWhereUniqueInput | ProgramSopWhereUniqueInput[]
  }

  export type MaterialUncheckedCreateNestedManyWithoutProgramInput = {
    create?: XOR<MaterialCreateWithoutProgramInput, MaterialUncheckedCreateWithoutProgramInput> | MaterialCreateWithoutProgramInput[] | MaterialUncheckedCreateWithoutProgramInput[]
    connectOrCreate?: MaterialCreateOrConnectWithoutProgramInput | MaterialCreateOrConnectWithoutProgramInput[]
    createMany?: MaterialCreateManyProgramInputEnvelope
    connect?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
  }

  export type EvaluationUncheckedCreateNestedManyWithoutProgramInput = {
    create?: XOR<EvaluationCreateWithoutProgramInput, EvaluationUncheckedCreateWithoutProgramInput> | EvaluationCreateWithoutProgramInput[] | EvaluationUncheckedCreateWithoutProgramInput[]
    connectOrCreate?: EvaluationCreateOrConnectWithoutProgramInput | EvaluationCreateOrConnectWithoutProgramInput[]
    createMany?: EvaluationCreateManyProgramInputEnvelope
    connect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
  }

  export type ProgramReviewUncheckedCreateNestedManyWithoutProgramInput = {
    create?: XOR<ProgramReviewCreateWithoutProgramInput, ProgramReviewUncheckedCreateWithoutProgramInput> | ProgramReviewCreateWithoutProgramInput[] | ProgramReviewUncheckedCreateWithoutProgramInput[]
    connectOrCreate?: ProgramReviewCreateOrConnectWithoutProgramInput | ProgramReviewCreateOrConnectWithoutProgramInput[]
    createMany?: ProgramReviewCreateManyProgramInputEnvelope
    connect?: ProgramReviewWhereUniqueInput | ProgramReviewWhereUniqueInput[]
  }

  export type ProgramSopUncheckedCreateNestedManyWithoutProgramInput = {
    create?: XOR<ProgramSopCreateWithoutProgramInput, ProgramSopUncheckedCreateWithoutProgramInput> | ProgramSopCreateWithoutProgramInput[] | ProgramSopUncheckedCreateWithoutProgramInput[]
    connectOrCreate?: ProgramSopCreateOrConnectWithoutProgramInput | ProgramSopCreateOrConnectWithoutProgramInput[]
    createMany?: ProgramSopCreateManyProgramInputEnvelope
    connect?: ProgramSopWhereUniqueInput | ProgramSopWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type CategoryUpdateOneWithoutProgramsNestedInput = {
    create?: XOR<CategoryCreateWithoutProgramsInput, CategoryUncheckedCreateWithoutProgramsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProgramsInput
    upsert?: CategoryUpsertWithoutProgramsInput
    disconnect?: CategoryWhereInput | boolean
    delete?: CategoryWhereInput | boolean
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutProgramsInput, CategoryUpdateWithoutProgramsInput>, CategoryUncheckedUpdateWithoutProgramsInput>
  }

  export type MaterialUpdateManyWithoutProgramNestedInput = {
    create?: XOR<MaterialCreateWithoutProgramInput, MaterialUncheckedCreateWithoutProgramInput> | MaterialCreateWithoutProgramInput[] | MaterialUncheckedCreateWithoutProgramInput[]
    connectOrCreate?: MaterialCreateOrConnectWithoutProgramInput | MaterialCreateOrConnectWithoutProgramInput[]
    upsert?: MaterialUpsertWithWhereUniqueWithoutProgramInput | MaterialUpsertWithWhereUniqueWithoutProgramInput[]
    createMany?: MaterialCreateManyProgramInputEnvelope
    set?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    disconnect?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    delete?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    connect?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    update?: MaterialUpdateWithWhereUniqueWithoutProgramInput | MaterialUpdateWithWhereUniqueWithoutProgramInput[]
    updateMany?: MaterialUpdateManyWithWhereWithoutProgramInput | MaterialUpdateManyWithWhereWithoutProgramInput[]
    deleteMany?: MaterialScalarWhereInput | MaterialScalarWhereInput[]
  }

  export type EvaluationUpdateManyWithoutProgramNestedInput = {
    create?: XOR<EvaluationCreateWithoutProgramInput, EvaluationUncheckedCreateWithoutProgramInput> | EvaluationCreateWithoutProgramInput[] | EvaluationUncheckedCreateWithoutProgramInput[]
    connectOrCreate?: EvaluationCreateOrConnectWithoutProgramInput | EvaluationCreateOrConnectWithoutProgramInput[]
    upsert?: EvaluationUpsertWithWhereUniqueWithoutProgramInput | EvaluationUpsertWithWhereUniqueWithoutProgramInput[]
    createMany?: EvaluationCreateManyProgramInputEnvelope
    set?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    disconnect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    delete?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    connect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    update?: EvaluationUpdateWithWhereUniqueWithoutProgramInput | EvaluationUpdateWithWhereUniqueWithoutProgramInput[]
    updateMany?: EvaluationUpdateManyWithWhereWithoutProgramInput | EvaluationUpdateManyWithWhereWithoutProgramInput[]
    deleteMany?: EvaluationScalarWhereInput | EvaluationScalarWhereInput[]
  }

  export type ProgramReviewUpdateManyWithoutProgramNestedInput = {
    create?: XOR<ProgramReviewCreateWithoutProgramInput, ProgramReviewUncheckedCreateWithoutProgramInput> | ProgramReviewCreateWithoutProgramInput[] | ProgramReviewUncheckedCreateWithoutProgramInput[]
    connectOrCreate?: ProgramReviewCreateOrConnectWithoutProgramInput | ProgramReviewCreateOrConnectWithoutProgramInput[]
    upsert?: ProgramReviewUpsertWithWhereUniqueWithoutProgramInput | ProgramReviewUpsertWithWhereUniqueWithoutProgramInput[]
    createMany?: ProgramReviewCreateManyProgramInputEnvelope
    set?: ProgramReviewWhereUniqueInput | ProgramReviewWhereUniqueInput[]
    disconnect?: ProgramReviewWhereUniqueInput | ProgramReviewWhereUniqueInput[]
    delete?: ProgramReviewWhereUniqueInput | ProgramReviewWhereUniqueInput[]
    connect?: ProgramReviewWhereUniqueInput | ProgramReviewWhereUniqueInput[]
    update?: ProgramReviewUpdateWithWhereUniqueWithoutProgramInput | ProgramReviewUpdateWithWhereUniqueWithoutProgramInput[]
    updateMany?: ProgramReviewUpdateManyWithWhereWithoutProgramInput | ProgramReviewUpdateManyWithWhereWithoutProgramInput[]
    deleteMany?: ProgramReviewScalarWhereInput | ProgramReviewScalarWhereInput[]
  }

  export type ProgramSopUpdateManyWithoutProgramNestedInput = {
    create?: XOR<ProgramSopCreateWithoutProgramInput, ProgramSopUncheckedCreateWithoutProgramInput> | ProgramSopCreateWithoutProgramInput[] | ProgramSopUncheckedCreateWithoutProgramInput[]
    connectOrCreate?: ProgramSopCreateOrConnectWithoutProgramInput | ProgramSopCreateOrConnectWithoutProgramInput[]
    upsert?: ProgramSopUpsertWithWhereUniqueWithoutProgramInput | ProgramSopUpsertWithWhereUniqueWithoutProgramInput[]
    createMany?: ProgramSopCreateManyProgramInputEnvelope
    set?: ProgramSopWhereUniqueInput | ProgramSopWhereUniqueInput[]
    disconnect?: ProgramSopWhereUniqueInput | ProgramSopWhereUniqueInput[]
    delete?: ProgramSopWhereUniqueInput | ProgramSopWhereUniqueInput[]
    connect?: ProgramSopWhereUniqueInput | ProgramSopWhereUniqueInput[]
    update?: ProgramSopUpdateWithWhereUniqueWithoutProgramInput | ProgramSopUpdateWithWhereUniqueWithoutProgramInput[]
    updateMany?: ProgramSopUpdateManyWithWhereWithoutProgramInput | ProgramSopUpdateManyWithWhereWithoutProgramInput[]
    deleteMany?: ProgramSopScalarWhereInput | ProgramSopScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MaterialUncheckedUpdateManyWithoutProgramNestedInput = {
    create?: XOR<MaterialCreateWithoutProgramInput, MaterialUncheckedCreateWithoutProgramInput> | MaterialCreateWithoutProgramInput[] | MaterialUncheckedCreateWithoutProgramInput[]
    connectOrCreate?: MaterialCreateOrConnectWithoutProgramInput | MaterialCreateOrConnectWithoutProgramInput[]
    upsert?: MaterialUpsertWithWhereUniqueWithoutProgramInput | MaterialUpsertWithWhereUniqueWithoutProgramInput[]
    createMany?: MaterialCreateManyProgramInputEnvelope
    set?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    disconnect?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    delete?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    connect?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    update?: MaterialUpdateWithWhereUniqueWithoutProgramInput | MaterialUpdateWithWhereUniqueWithoutProgramInput[]
    updateMany?: MaterialUpdateManyWithWhereWithoutProgramInput | MaterialUpdateManyWithWhereWithoutProgramInput[]
    deleteMany?: MaterialScalarWhereInput | MaterialScalarWhereInput[]
  }

  export type EvaluationUncheckedUpdateManyWithoutProgramNestedInput = {
    create?: XOR<EvaluationCreateWithoutProgramInput, EvaluationUncheckedCreateWithoutProgramInput> | EvaluationCreateWithoutProgramInput[] | EvaluationUncheckedCreateWithoutProgramInput[]
    connectOrCreate?: EvaluationCreateOrConnectWithoutProgramInput | EvaluationCreateOrConnectWithoutProgramInput[]
    upsert?: EvaluationUpsertWithWhereUniqueWithoutProgramInput | EvaluationUpsertWithWhereUniqueWithoutProgramInput[]
    createMany?: EvaluationCreateManyProgramInputEnvelope
    set?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    disconnect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    delete?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    connect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    update?: EvaluationUpdateWithWhereUniqueWithoutProgramInput | EvaluationUpdateWithWhereUniqueWithoutProgramInput[]
    updateMany?: EvaluationUpdateManyWithWhereWithoutProgramInput | EvaluationUpdateManyWithWhereWithoutProgramInput[]
    deleteMany?: EvaluationScalarWhereInput | EvaluationScalarWhereInput[]
  }

  export type ProgramReviewUncheckedUpdateManyWithoutProgramNestedInput = {
    create?: XOR<ProgramReviewCreateWithoutProgramInput, ProgramReviewUncheckedCreateWithoutProgramInput> | ProgramReviewCreateWithoutProgramInput[] | ProgramReviewUncheckedCreateWithoutProgramInput[]
    connectOrCreate?: ProgramReviewCreateOrConnectWithoutProgramInput | ProgramReviewCreateOrConnectWithoutProgramInput[]
    upsert?: ProgramReviewUpsertWithWhereUniqueWithoutProgramInput | ProgramReviewUpsertWithWhereUniqueWithoutProgramInput[]
    createMany?: ProgramReviewCreateManyProgramInputEnvelope
    set?: ProgramReviewWhereUniqueInput | ProgramReviewWhereUniqueInput[]
    disconnect?: ProgramReviewWhereUniqueInput | ProgramReviewWhereUniqueInput[]
    delete?: ProgramReviewWhereUniqueInput | ProgramReviewWhereUniqueInput[]
    connect?: ProgramReviewWhereUniqueInput | ProgramReviewWhereUniqueInput[]
    update?: ProgramReviewUpdateWithWhereUniqueWithoutProgramInput | ProgramReviewUpdateWithWhereUniqueWithoutProgramInput[]
    updateMany?: ProgramReviewUpdateManyWithWhereWithoutProgramInput | ProgramReviewUpdateManyWithWhereWithoutProgramInput[]
    deleteMany?: ProgramReviewScalarWhereInput | ProgramReviewScalarWhereInput[]
  }

  export type ProgramSopUncheckedUpdateManyWithoutProgramNestedInput = {
    create?: XOR<ProgramSopCreateWithoutProgramInput, ProgramSopUncheckedCreateWithoutProgramInput> | ProgramSopCreateWithoutProgramInput[] | ProgramSopUncheckedCreateWithoutProgramInput[]
    connectOrCreate?: ProgramSopCreateOrConnectWithoutProgramInput | ProgramSopCreateOrConnectWithoutProgramInput[]
    upsert?: ProgramSopUpsertWithWhereUniqueWithoutProgramInput | ProgramSopUpsertWithWhereUniqueWithoutProgramInput[]
    createMany?: ProgramSopCreateManyProgramInputEnvelope
    set?: ProgramSopWhereUniqueInput | ProgramSopWhereUniqueInput[]
    disconnect?: ProgramSopWhereUniqueInput | ProgramSopWhereUniqueInput[]
    delete?: ProgramSopWhereUniqueInput | ProgramSopWhereUniqueInput[]
    connect?: ProgramSopWhereUniqueInput | ProgramSopWhereUniqueInput[]
    update?: ProgramSopUpdateWithWhereUniqueWithoutProgramInput | ProgramSopUpdateWithWhereUniqueWithoutProgramInput[]
    updateMany?: ProgramSopUpdateManyWithWhereWithoutProgramInput | ProgramSopUpdateManyWithWhereWithoutProgramInput[]
    deleteMany?: ProgramSopScalarWhereInput | ProgramSopScalarWhereInput[]
  }

  export type ProgramCreateNestedOneWithoutMaterialsInput = {
    create?: XOR<ProgramCreateWithoutMaterialsInput, ProgramUncheckedCreateWithoutMaterialsInput>
    connectOrCreate?: ProgramCreateOrConnectWithoutMaterialsInput
    connect?: ProgramWhereUniqueInput
  }

  export type ProgramUpdateOneRequiredWithoutMaterialsNestedInput = {
    create?: XOR<ProgramCreateWithoutMaterialsInput, ProgramUncheckedCreateWithoutMaterialsInput>
    connectOrCreate?: ProgramCreateOrConnectWithoutMaterialsInput
    upsert?: ProgramUpsertWithoutMaterialsInput
    connect?: ProgramWhereUniqueInput
    update?: XOR<XOR<ProgramUpdateToOneWithWhereWithoutMaterialsInput, ProgramUpdateWithoutMaterialsInput>, ProgramUncheckedUpdateWithoutMaterialsInput>
  }

  export type ProgramSopCreateNestedManyWithoutSopInput = {
    create?: XOR<ProgramSopCreateWithoutSopInput, ProgramSopUncheckedCreateWithoutSopInput> | ProgramSopCreateWithoutSopInput[] | ProgramSopUncheckedCreateWithoutSopInput[]
    connectOrCreate?: ProgramSopCreateOrConnectWithoutSopInput | ProgramSopCreateOrConnectWithoutSopInput[]
    createMany?: ProgramSopCreateManySopInputEnvelope
    connect?: ProgramSopWhereUniqueInput | ProgramSopWhereUniqueInput[]
  }

  export type ProgramSopUncheckedCreateNestedManyWithoutSopInput = {
    create?: XOR<ProgramSopCreateWithoutSopInput, ProgramSopUncheckedCreateWithoutSopInput> | ProgramSopCreateWithoutSopInput[] | ProgramSopUncheckedCreateWithoutSopInput[]
    connectOrCreate?: ProgramSopCreateOrConnectWithoutSopInput | ProgramSopCreateOrConnectWithoutSopInput[]
    createMany?: ProgramSopCreateManySopInputEnvelope
    connect?: ProgramSopWhereUniqueInput | ProgramSopWhereUniqueInput[]
  }

  export type ProgramSopUpdateManyWithoutSopNestedInput = {
    create?: XOR<ProgramSopCreateWithoutSopInput, ProgramSopUncheckedCreateWithoutSopInput> | ProgramSopCreateWithoutSopInput[] | ProgramSopUncheckedCreateWithoutSopInput[]
    connectOrCreate?: ProgramSopCreateOrConnectWithoutSopInput | ProgramSopCreateOrConnectWithoutSopInput[]
    upsert?: ProgramSopUpsertWithWhereUniqueWithoutSopInput | ProgramSopUpsertWithWhereUniqueWithoutSopInput[]
    createMany?: ProgramSopCreateManySopInputEnvelope
    set?: ProgramSopWhereUniqueInput | ProgramSopWhereUniqueInput[]
    disconnect?: ProgramSopWhereUniqueInput | ProgramSopWhereUniqueInput[]
    delete?: ProgramSopWhereUniqueInput | ProgramSopWhereUniqueInput[]
    connect?: ProgramSopWhereUniqueInput | ProgramSopWhereUniqueInput[]
    update?: ProgramSopUpdateWithWhereUniqueWithoutSopInput | ProgramSopUpdateWithWhereUniqueWithoutSopInput[]
    updateMany?: ProgramSopUpdateManyWithWhereWithoutSopInput | ProgramSopUpdateManyWithWhereWithoutSopInput[]
    deleteMany?: ProgramSopScalarWhereInput | ProgramSopScalarWhereInput[]
  }

  export type ProgramSopUncheckedUpdateManyWithoutSopNestedInput = {
    create?: XOR<ProgramSopCreateWithoutSopInput, ProgramSopUncheckedCreateWithoutSopInput> | ProgramSopCreateWithoutSopInput[] | ProgramSopUncheckedCreateWithoutSopInput[]
    connectOrCreate?: ProgramSopCreateOrConnectWithoutSopInput | ProgramSopCreateOrConnectWithoutSopInput[]
    upsert?: ProgramSopUpsertWithWhereUniqueWithoutSopInput | ProgramSopUpsertWithWhereUniqueWithoutSopInput[]
    createMany?: ProgramSopCreateManySopInputEnvelope
    set?: ProgramSopWhereUniqueInput | ProgramSopWhereUniqueInput[]
    disconnect?: ProgramSopWhereUniqueInput | ProgramSopWhereUniqueInput[]
    delete?: ProgramSopWhereUniqueInput | ProgramSopWhereUniqueInput[]
    connect?: ProgramSopWhereUniqueInput | ProgramSopWhereUniqueInput[]
    update?: ProgramSopUpdateWithWhereUniqueWithoutSopInput | ProgramSopUpdateWithWhereUniqueWithoutSopInput[]
    updateMany?: ProgramSopUpdateManyWithWhereWithoutSopInput | ProgramSopUpdateManyWithWhereWithoutSopInput[]
    deleteMany?: ProgramSopScalarWhereInput | ProgramSopScalarWhereInput[]
  }

  export type ProgramCreateNestedOneWithoutProgramSopsInput = {
    create?: XOR<ProgramCreateWithoutProgramSopsInput, ProgramUncheckedCreateWithoutProgramSopsInput>
    connectOrCreate?: ProgramCreateOrConnectWithoutProgramSopsInput
    connect?: ProgramWhereUniqueInput
  }

  export type SopDocumentCreateNestedOneWithoutProgramSopsInput = {
    create?: XOR<SopDocumentCreateWithoutProgramSopsInput, SopDocumentUncheckedCreateWithoutProgramSopsInput>
    connectOrCreate?: SopDocumentCreateOrConnectWithoutProgramSopsInput
    connect?: SopDocumentWhereUniqueInput
  }

  export type ProgramUpdateOneRequiredWithoutProgramSopsNestedInput = {
    create?: XOR<ProgramCreateWithoutProgramSopsInput, ProgramUncheckedCreateWithoutProgramSopsInput>
    connectOrCreate?: ProgramCreateOrConnectWithoutProgramSopsInput
    upsert?: ProgramUpsertWithoutProgramSopsInput
    connect?: ProgramWhereUniqueInput
    update?: XOR<XOR<ProgramUpdateToOneWithWhereWithoutProgramSopsInput, ProgramUpdateWithoutProgramSopsInput>, ProgramUncheckedUpdateWithoutProgramSopsInput>
  }

  export type SopDocumentUpdateOneRequiredWithoutProgramSopsNestedInput = {
    create?: XOR<SopDocumentCreateWithoutProgramSopsInput, SopDocumentUncheckedCreateWithoutProgramSopsInput>
    connectOrCreate?: SopDocumentCreateOrConnectWithoutProgramSopsInput
    upsert?: SopDocumentUpsertWithoutProgramSopsInput
    connect?: SopDocumentWhereUniqueInput
    update?: XOR<XOR<SopDocumentUpdateToOneWithWhereWithoutProgramSopsInput, SopDocumentUpdateWithoutProgramSopsInput>, SopDocumentUncheckedUpdateWithoutProgramSopsInput>
  }

  export type ProgramCreateNestedOneWithoutEvaluationsInput = {
    create?: XOR<ProgramCreateWithoutEvaluationsInput, ProgramUncheckedCreateWithoutEvaluationsInput>
    connectOrCreate?: ProgramCreateOrConnectWithoutEvaluationsInput
    connect?: ProgramWhereUniqueInput
  }

  export type QuestionCreateNestedManyWithoutEvaluationInput = {
    create?: XOR<QuestionCreateWithoutEvaluationInput, QuestionUncheckedCreateWithoutEvaluationInput> | QuestionCreateWithoutEvaluationInput[] | QuestionUncheckedCreateWithoutEvaluationInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutEvaluationInput | QuestionCreateOrConnectWithoutEvaluationInput[]
    createMany?: QuestionCreateManyEvaluationInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type AttemptCreateNestedManyWithoutEvaluationInput = {
    create?: XOR<AttemptCreateWithoutEvaluationInput, AttemptUncheckedCreateWithoutEvaluationInput> | AttemptCreateWithoutEvaluationInput[] | AttemptUncheckedCreateWithoutEvaluationInput[]
    connectOrCreate?: AttemptCreateOrConnectWithoutEvaluationInput | AttemptCreateOrConnectWithoutEvaluationInput[]
    createMany?: AttemptCreateManyEvaluationInputEnvelope
    connect?: AttemptWhereUniqueInput | AttemptWhereUniqueInput[]
  }

  export type QuestionUncheckedCreateNestedManyWithoutEvaluationInput = {
    create?: XOR<QuestionCreateWithoutEvaluationInput, QuestionUncheckedCreateWithoutEvaluationInput> | QuestionCreateWithoutEvaluationInput[] | QuestionUncheckedCreateWithoutEvaluationInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutEvaluationInput | QuestionCreateOrConnectWithoutEvaluationInput[]
    createMany?: QuestionCreateManyEvaluationInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type AttemptUncheckedCreateNestedManyWithoutEvaluationInput = {
    create?: XOR<AttemptCreateWithoutEvaluationInput, AttemptUncheckedCreateWithoutEvaluationInput> | AttemptCreateWithoutEvaluationInput[] | AttemptUncheckedCreateWithoutEvaluationInput[]
    connectOrCreate?: AttemptCreateOrConnectWithoutEvaluationInput | AttemptCreateOrConnectWithoutEvaluationInput[]
    createMany?: AttemptCreateManyEvaluationInputEnvelope
    connect?: AttemptWhereUniqueInput | AttemptWhereUniqueInput[]
  }

  export type ProgramUpdateOneRequiredWithoutEvaluationsNestedInput = {
    create?: XOR<ProgramCreateWithoutEvaluationsInput, ProgramUncheckedCreateWithoutEvaluationsInput>
    connectOrCreate?: ProgramCreateOrConnectWithoutEvaluationsInput
    upsert?: ProgramUpsertWithoutEvaluationsInput
    connect?: ProgramWhereUniqueInput
    update?: XOR<XOR<ProgramUpdateToOneWithWhereWithoutEvaluationsInput, ProgramUpdateWithoutEvaluationsInput>, ProgramUncheckedUpdateWithoutEvaluationsInput>
  }

  export type QuestionUpdateManyWithoutEvaluationNestedInput = {
    create?: XOR<QuestionCreateWithoutEvaluationInput, QuestionUncheckedCreateWithoutEvaluationInput> | QuestionCreateWithoutEvaluationInput[] | QuestionUncheckedCreateWithoutEvaluationInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutEvaluationInput | QuestionCreateOrConnectWithoutEvaluationInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutEvaluationInput | QuestionUpsertWithWhereUniqueWithoutEvaluationInput[]
    createMany?: QuestionCreateManyEvaluationInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutEvaluationInput | QuestionUpdateWithWhereUniqueWithoutEvaluationInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutEvaluationInput | QuestionUpdateManyWithWhereWithoutEvaluationInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type AttemptUpdateManyWithoutEvaluationNestedInput = {
    create?: XOR<AttemptCreateWithoutEvaluationInput, AttemptUncheckedCreateWithoutEvaluationInput> | AttemptCreateWithoutEvaluationInput[] | AttemptUncheckedCreateWithoutEvaluationInput[]
    connectOrCreate?: AttemptCreateOrConnectWithoutEvaluationInput | AttemptCreateOrConnectWithoutEvaluationInput[]
    upsert?: AttemptUpsertWithWhereUniqueWithoutEvaluationInput | AttemptUpsertWithWhereUniqueWithoutEvaluationInput[]
    createMany?: AttemptCreateManyEvaluationInputEnvelope
    set?: AttemptWhereUniqueInput | AttemptWhereUniqueInput[]
    disconnect?: AttemptWhereUniqueInput | AttemptWhereUniqueInput[]
    delete?: AttemptWhereUniqueInput | AttemptWhereUniqueInput[]
    connect?: AttemptWhereUniqueInput | AttemptWhereUniqueInput[]
    update?: AttemptUpdateWithWhereUniqueWithoutEvaluationInput | AttemptUpdateWithWhereUniqueWithoutEvaluationInput[]
    updateMany?: AttemptUpdateManyWithWhereWithoutEvaluationInput | AttemptUpdateManyWithWhereWithoutEvaluationInput[]
    deleteMany?: AttemptScalarWhereInput | AttemptScalarWhereInput[]
  }

  export type QuestionUncheckedUpdateManyWithoutEvaluationNestedInput = {
    create?: XOR<QuestionCreateWithoutEvaluationInput, QuestionUncheckedCreateWithoutEvaluationInput> | QuestionCreateWithoutEvaluationInput[] | QuestionUncheckedCreateWithoutEvaluationInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutEvaluationInput | QuestionCreateOrConnectWithoutEvaluationInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutEvaluationInput | QuestionUpsertWithWhereUniqueWithoutEvaluationInput[]
    createMany?: QuestionCreateManyEvaluationInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutEvaluationInput | QuestionUpdateWithWhereUniqueWithoutEvaluationInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutEvaluationInput | QuestionUpdateManyWithWhereWithoutEvaluationInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type AttemptUncheckedUpdateManyWithoutEvaluationNestedInput = {
    create?: XOR<AttemptCreateWithoutEvaluationInput, AttemptUncheckedCreateWithoutEvaluationInput> | AttemptCreateWithoutEvaluationInput[] | AttemptUncheckedCreateWithoutEvaluationInput[]
    connectOrCreate?: AttemptCreateOrConnectWithoutEvaluationInput | AttemptCreateOrConnectWithoutEvaluationInput[]
    upsert?: AttemptUpsertWithWhereUniqueWithoutEvaluationInput | AttemptUpsertWithWhereUniqueWithoutEvaluationInput[]
    createMany?: AttemptCreateManyEvaluationInputEnvelope
    set?: AttemptWhereUniqueInput | AttemptWhereUniqueInput[]
    disconnect?: AttemptWhereUniqueInput | AttemptWhereUniqueInput[]
    delete?: AttemptWhereUniqueInput | AttemptWhereUniqueInput[]
    connect?: AttemptWhereUniqueInput | AttemptWhereUniqueInput[]
    update?: AttemptUpdateWithWhereUniqueWithoutEvaluationInput | AttemptUpdateWithWhereUniqueWithoutEvaluationInput[]
    updateMany?: AttemptUpdateManyWithWhereWithoutEvaluationInput | AttemptUpdateManyWithWhereWithoutEvaluationInput[]
    deleteMany?: AttemptScalarWhereInput | AttemptScalarWhereInput[]
  }

  export type EvaluationCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<EvaluationCreateWithoutQuestionsInput, EvaluationUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: EvaluationCreateOrConnectWithoutQuestionsInput
    connect?: EvaluationWhereUniqueInput
  }

  export type AttemptAnswerCreateNestedManyWithoutQuestionInput = {
    create?: XOR<AttemptAnswerCreateWithoutQuestionInput, AttemptAnswerUncheckedCreateWithoutQuestionInput> | AttemptAnswerCreateWithoutQuestionInput[] | AttemptAnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AttemptAnswerCreateOrConnectWithoutQuestionInput | AttemptAnswerCreateOrConnectWithoutQuestionInput[]
    createMany?: AttemptAnswerCreateManyQuestionInputEnvelope
    connect?: AttemptAnswerWhereUniqueInput | AttemptAnswerWhereUniqueInput[]
  }

  export type AttemptAnswerUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<AttemptAnswerCreateWithoutQuestionInput, AttemptAnswerUncheckedCreateWithoutQuestionInput> | AttemptAnswerCreateWithoutQuestionInput[] | AttemptAnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AttemptAnswerCreateOrConnectWithoutQuestionInput | AttemptAnswerCreateOrConnectWithoutQuestionInput[]
    createMany?: AttemptAnswerCreateManyQuestionInputEnvelope
    connect?: AttemptAnswerWhereUniqueInput | AttemptAnswerWhereUniqueInput[]
  }

  export type EvaluationUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: XOR<EvaluationCreateWithoutQuestionsInput, EvaluationUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: EvaluationCreateOrConnectWithoutQuestionsInput
    upsert?: EvaluationUpsertWithoutQuestionsInput
    connect?: EvaluationWhereUniqueInput
    update?: XOR<XOR<EvaluationUpdateToOneWithWhereWithoutQuestionsInput, EvaluationUpdateWithoutQuestionsInput>, EvaluationUncheckedUpdateWithoutQuestionsInput>
  }

  export type AttemptAnswerUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<AttemptAnswerCreateWithoutQuestionInput, AttemptAnswerUncheckedCreateWithoutQuestionInput> | AttemptAnswerCreateWithoutQuestionInput[] | AttemptAnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AttemptAnswerCreateOrConnectWithoutQuestionInput | AttemptAnswerCreateOrConnectWithoutQuestionInput[]
    upsert?: AttemptAnswerUpsertWithWhereUniqueWithoutQuestionInput | AttemptAnswerUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: AttemptAnswerCreateManyQuestionInputEnvelope
    set?: AttemptAnswerWhereUniqueInput | AttemptAnswerWhereUniqueInput[]
    disconnect?: AttemptAnswerWhereUniqueInput | AttemptAnswerWhereUniqueInput[]
    delete?: AttemptAnswerWhereUniqueInput | AttemptAnswerWhereUniqueInput[]
    connect?: AttemptAnswerWhereUniqueInput | AttemptAnswerWhereUniqueInput[]
    update?: AttemptAnswerUpdateWithWhereUniqueWithoutQuestionInput | AttemptAnswerUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: AttemptAnswerUpdateManyWithWhereWithoutQuestionInput | AttemptAnswerUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: AttemptAnswerScalarWhereInput | AttemptAnswerScalarWhereInput[]
  }

  export type AttemptAnswerUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<AttemptAnswerCreateWithoutQuestionInput, AttemptAnswerUncheckedCreateWithoutQuestionInput> | AttemptAnswerCreateWithoutQuestionInput[] | AttemptAnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AttemptAnswerCreateOrConnectWithoutQuestionInput | AttemptAnswerCreateOrConnectWithoutQuestionInput[]
    upsert?: AttemptAnswerUpsertWithWhereUniqueWithoutQuestionInput | AttemptAnswerUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: AttemptAnswerCreateManyQuestionInputEnvelope
    set?: AttemptAnswerWhereUniqueInput | AttemptAnswerWhereUniqueInput[]
    disconnect?: AttemptAnswerWhereUniqueInput | AttemptAnswerWhereUniqueInput[]
    delete?: AttemptAnswerWhereUniqueInput | AttemptAnswerWhereUniqueInput[]
    connect?: AttemptAnswerWhereUniqueInput | AttemptAnswerWhereUniqueInput[]
    update?: AttemptAnswerUpdateWithWhereUniqueWithoutQuestionInput | AttemptAnswerUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: AttemptAnswerUpdateManyWithWhereWithoutQuestionInput | AttemptAnswerUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: AttemptAnswerScalarWhereInput | AttemptAnswerScalarWhereInput[]
  }

  export type EvaluationCreateNestedOneWithoutAttemptsInput = {
    create?: XOR<EvaluationCreateWithoutAttemptsInput, EvaluationUncheckedCreateWithoutAttemptsInput>
    connectOrCreate?: EvaluationCreateOrConnectWithoutAttemptsInput
    connect?: EvaluationWhereUniqueInput
  }

  export type AttemptAnswerCreateNestedManyWithoutAttemptInput = {
    create?: XOR<AttemptAnswerCreateWithoutAttemptInput, AttemptAnswerUncheckedCreateWithoutAttemptInput> | AttemptAnswerCreateWithoutAttemptInput[] | AttemptAnswerUncheckedCreateWithoutAttemptInput[]
    connectOrCreate?: AttemptAnswerCreateOrConnectWithoutAttemptInput | AttemptAnswerCreateOrConnectWithoutAttemptInput[]
    createMany?: AttemptAnswerCreateManyAttemptInputEnvelope
    connect?: AttemptAnswerWhereUniqueInput | AttemptAnswerWhereUniqueInput[]
  }

  export type AttemptAnswerUncheckedCreateNestedManyWithoutAttemptInput = {
    create?: XOR<AttemptAnswerCreateWithoutAttemptInput, AttemptAnswerUncheckedCreateWithoutAttemptInput> | AttemptAnswerCreateWithoutAttemptInput[] | AttemptAnswerUncheckedCreateWithoutAttemptInput[]
    connectOrCreate?: AttemptAnswerCreateOrConnectWithoutAttemptInput | AttemptAnswerCreateOrConnectWithoutAttemptInput[]
    createMany?: AttemptAnswerCreateManyAttemptInputEnvelope
    connect?: AttemptAnswerWhereUniqueInput | AttemptAnswerWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EvaluationUpdateOneRequiredWithoutAttemptsNestedInput = {
    create?: XOR<EvaluationCreateWithoutAttemptsInput, EvaluationUncheckedCreateWithoutAttemptsInput>
    connectOrCreate?: EvaluationCreateOrConnectWithoutAttemptsInput
    upsert?: EvaluationUpsertWithoutAttemptsInput
    connect?: EvaluationWhereUniqueInput
    update?: XOR<XOR<EvaluationUpdateToOneWithWhereWithoutAttemptsInput, EvaluationUpdateWithoutAttemptsInput>, EvaluationUncheckedUpdateWithoutAttemptsInput>
  }

  export type AttemptAnswerUpdateManyWithoutAttemptNestedInput = {
    create?: XOR<AttemptAnswerCreateWithoutAttemptInput, AttemptAnswerUncheckedCreateWithoutAttemptInput> | AttemptAnswerCreateWithoutAttemptInput[] | AttemptAnswerUncheckedCreateWithoutAttemptInput[]
    connectOrCreate?: AttemptAnswerCreateOrConnectWithoutAttemptInput | AttemptAnswerCreateOrConnectWithoutAttemptInput[]
    upsert?: AttemptAnswerUpsertWithWhereUniqueWithoutAttemptInput | AttemptAnswerUpsertWithWhereUniqueWithoutAttemptInput[]
    createMany?: AttemptAnswerCreateManyAttemptInputEnvelope
    set?: AttemptAnswerWhereUniqueInput | AttemptAnswerWhereUniqueInput[]
    disconnect?: AttemptAnswerWhereUniqueInput | AttemptAnswerWhereUniqueInput[]
    delete?: AttemptAnswerWhereUniqueInput | AttemptAnswerWhereUniqueInput[]
    connect?: AttemptAnswerWhereUniqueInput | AttemptAnswerWhereUniqueInput[]
    update?: AttemptAnswerUpdateWithWhereUniqueWithoutAttemptInput | AttemptAnswerUpdateWithWhereUniqueWithoutAttemptInput[]
    updateMany?: AttemptAnswerUpdateManyWithWhereWithoutAttemptInput | AttemptAnswerUpdateManyWithWhereWithoutAttemptInput[]
    deleteMany?: AttemptAnswerScalarWhereInput | AttemptAnswerScalarWhereInput[]
  }

  export type AttemptAnswerUncheckedUpdateManyWithoutAttemptNestedInput = {
    create?: XOR<AttemptAnswerCreateWithoutAttemptInput, AttemptAnswerUncheckedCreateWithoutAttemptInput> | AttemptAnswerCreateWithoutAttemptInput[] | AttemptAnswerUncheckedCreateWithoutAttemptInput[]
    connectOrCreate?: AttemptAnswerCreateOrConnectWithoutAttemptInput | AttemptAnswerCreateOrConnectWithoutAttemptInput[]
    upsert?: AttemptAnswerUpsertWithWhereUniqueWithoutAttemptInput | AttemptAnswerUpsertWithWhereUniqueWithoutAttemptInput[]
    createMany?: AttemptAnswerCreateManyAttemptInputEnvelope
    set?: AttemptAnswerWhereUniqueInput | AttemptAnswerWhereUniqueInput[]
    disconnect?: AttemptAnswerWhereUniqueInput | AttemptAnswerWhereUniqueInput[]
    delete?: AttemptAnswerWhereUniqueInput | AttemptAnswerWhereUniqueInput[]
    connect?: AttemptAnswerWhereUniqueInput | AttemptAnswerWhereUniqueInput[]
    update?: AttemptAnswerUpdateWithWhereUniqueWithoutAttemptInput | AttemptAnswerUpdateWithWhereUniqueWithoutAttemptInput[]
    updateMany?: AttemptAnswerUpdateManyWithWhereWithoutAttemptInput | AttemptAnswerUpdateManyWithWhereWithoutAttemptInput[]
    deleteMany?: AttemptAnswerScalarWhereInput | AttemptAnswerScalarWhereInput[]
  }

  export type AttemptCreateNestedOneWithoutAnswersInput = {
    create?: XOR<AttemptCreateWithoutAnswersInput, AttemptUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: AttemptCreateOrConnectWithoutAnswersInput
    connect?: AttemptWhereUniqueInput
  }

  export type QuestionCreateNestedOneWithoutAttemptAnswersInput = {
    create?: XOR<QuestionCreateWithoutAttemptAnswersInput, QuestionUncheckedCreateWithoutAttemptAnswersInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutAttemptAnswersInput
    connect?: QuestionWhereUniqueInput
  }

  export type AttemptUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: XOR<AttemptCreateWithoutAnswersInput, AttemptUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: AttemptCreateOrConnectWithoutAnswersInput
    upsert?: AttemptUpsertWithoutAnswersInput
    connect?: AttemptWhereUniqueInput
    update?: XOR<XOR<AttemptUpdateToOneWithWhereWithoutAnswersInput, AttemptUpdateWithoutAnswersInput>, AttemptUncheckedUpdateWithoutAnswersInput>
  }

  export type QuestionUpdateOneRequiredWithoutAttemptAnswersNestedInput = {
    create?: XOR<QuestionCreateWithoutAttemptAnswersInput, QuestionUncheckedCreateWithoutAttemptAnswersInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutAttemptAnswersInput
    upsert?: QuestionUpsertWithoutAttemptAnswersInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutAttemptAnswersInput, QuestionUpdateWithoutAttemptAnswersInput>, QuestionUncheckedUpdateWithoutAttemptAnswersInput>
  }

  export type ProgramCreateNestedOneWithoutReviewsInput = {
    create?: XOR<ProgramCreateWithoutReviewsInput, ProgramUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: ProgramCreateOrConnectWithoutReviewsInput
    connect?: ProgramWhereUniqueInput
  }

  export type ProgramUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<ProgramCreateWithoutReviewsInput, ProgramUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: ProgramCreateOrConnectWithoutReviewsInput
    upsert?: ProgramUpsertWithoutReviewsInput
    connect?: ProgramWhereUniqueInput
    update?: XOR<XOR<ProgramUpdateToOneWithWhereWithoutReviewsInput, ProgramUpdateWithoutReviewsInput>, ProgramUncheckedUpdateWithoutReviewsInput>
  }

  export type InternalUserCreateNestedOneWithoutFindingsInput = {
    create?: XOR<InternalUserCreateWithoutFindingsInput, InternalUserUncheckedCreateWithoutFindingsInput>
    connectOrCreate?: InternalUserCreateOrConnectWithoutFindingsInput
    connect?: InternalUserWhereUniqueInput
  }

  export type InternalUserUpdateOneRequiredWithoutFindingsNestedInput = {
    create?: XOR<InternalUserCreateWithoutFindingsInput, InternalUserUncheckedCreateWithoutFindingsInput>
    connectOrCreate?: InternalUserCreateOrConnectWithoutFindingsInput
    upsert?: InternalUserUpsertWithoutFindingsInput
    connect?: InternalUserWhereUniqueInput
    update?: XOR<XOR<InternalUserUpdateToOneWithWhereWithoutFindingsInput, InternalUserUpdateWithoutFindingsInput>, InternalUserUncheckedUpdateWithoutFindingsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type AuthSessionCreateWithoutUserInput = {
    id: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type AuthSessionUncheckedCreateWithoutUserInput = {
    id: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type AuthSessionCreateOrConnectWithoutUserInput = {
    where: AuthSessionWhereUniqueInput
    create: XOR<AuthSessionCreateWithoutUserInput, AuthSessionUncheckedCreateWithoutUserInput>
  }

  export type AuthSessionCreateManyUserInputEnvelope = {
    data: AuthSessionCreateManyUserInput | AuthSessionCreateManyUserInput[]
  }

  export type FindingCreateWithoutAuditorInput = {
    code: string
    source?: string
    clause: string
    description: string
    category: string
    rootCause?: string | null
    correction?: string | null
    correctiveAction?: string | null
    verificationResult?: string | null
    status?: string
    targetDate?: Date | string | null
    evidenceUrl?: string | null
    reportedAt?: Date | string
    verifiedAt?: Date | string | null
    requestId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FindingUncheckedCreateWithoutAuditorInput = {
    id?: number
    code: string
    source?: string
    clause: string
    description: string
    category: string
    rootCause?: string | null
    correction?: string | null
    correctiveAction?: string | null
    verificationResult?: string | null
    status?: string
    targetDate?: Date | string | null
    evidenceUrl?: string | null
    reportedAt?: Date | string
    verifiedAt?: Date | string | null
    requestId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FindingCreateOrConnectWithoutAuditorInput = {
    where: FindingWhereUniqueInput
    create: XOR<FindingCreateWithoutAuditorInput, FindingUncheckedCreateWithoutAuditorInput>
  }

  export type FindingCreateManyAuditorInputEnvelope = {
    data: FindingCreateManyAuditorInput | FindingCreateManyAuditorInput[]
  }

  export type AuthSessionUpsertWithWhereUniqueWithoutUserInput = {
    where: AuthSessionWhereUniqueInput
    update: XOR<AuthSessionUpdateWithoutUserInput, AuthSessionUncheckedUpdateWithoutUserInput>
    create: XOR<AuthSessionCreateWithoutUserInput, AuthSessionUncheckedCreateWithoutUserInput>
  }

  export type AuthSessionUpdateWithWhereUniqueWithoutUserInput = {
    where: AuthSessionWhereUniqueInput
    data: XOR<AuthSessionUpdateWithoutUserInput, AuthSessionUncheckedUpdateWithoutUserInput>
  }

  export type AuthSessionUpdateManyWithWhereWithoutUserInput = {
    where: AuthSessionScalarWhereInput
    data: XOR<AuthSessionUpdateManyMutationInput, AuthSessionUncheckedUpdateManyWithoutUserInput>
  }

  export type AuthSessionScalarWhereInput = {
    AND?: AuthSessionScalarWhereInput | AuthSessionScalarWhereInput[]
    OR?: AuthSessionScalarWhereInput[]
    NOT?: AuthSessionScalarWhereInput | AuthSessionScalarWhereInput[]
    id?: StringFilter<"AuthSession"> | string
    userId?: IntFilter<"AuthSession"> | number
    expiresAt?: DateTimeFilter<"AuthSession"> | Date | string
    createdAt?: DateTimeFilter<"AuthSession"> | Date | string
  }

  export type FindingUpsertWithWhereUniqueWithoutAuditorInput = {
    where: FindingWhereUniqueInput
    update: XOR<FindingUpdateWithoutAuditorInput, FindingUncheckedUpdateWithoutAuditorInput>
    create: XOR<FindingCreateWithoutAuditorInput, FindingUncheckedCreateWithoutAuditorInput>
  }

  export type FindingUpdateWithWhereUniqueWithoutAuditorInput = {
    where: FindingWhereUniqueInput
    data: XOR<FindingUpdateWithoutAuditorInput, FindingUncheckedUpdateWithoutAuditorInput>
  }

  export type FindingUpdateManyWithWhereWithoutAuditorInput = {
    where: FindingScalarWhereInput
    data: XOR<FindingUpdateManyMutationInput, FindingUncheckedUpdateManyWithoutAuditorInput>
  }

  export type FindingScalarWhereInput = {
    AND?: FindingScalarWhereInput | FindingScalarWhereInput[]
    OR?: FindingScalarWhereInput[]
    NOT?: FindingScalarWhereInput | FindingScalarWhereInput[]
    id?: IntFilter<"Finding"> | number
    code?: StringFilter<"Finding"> | string
    auditorId?: IntFilter<"Finding"> | number
    source?: StringFilter<"Finding"> | string
    clause?: StringFilter<"Finding"> | string
    description?: StringFilter<"Finding"> | string
    category?: StringFilter<"Finding"> | string
    rootCause?: StringNullableFilter<"Finding"> | string | null
    correction?: StringNullableFilter<"Finding"> | string | null
    correctiveAction?: StringNullableFilter<"Finding"> | string | null
    verificationResult?: StringNullableFilter<"Finding"> | string | null
    status?: StringFilter<"Finding"> | string
    targetDate?: DateTimeNullableFilter<"Finding"> | Date | string | null
    evidenceUrl?: StringNullableFilter<"Finding"> | string | null
    reportedAt?: DateTimeFilter<"Finding"> | Date | string
    verifiedAt?: DateTimeNullableFilter<"Finding"> | Date | string | null
    requestId?: StringNullableFilter<"Finding"> | string | null
    createdAt?: DateTimeFilter<"Finding"> | Date | string
    updatedAt?: DateTimeFilter<"Finding"> | Date | string
  }

  export type InternalUserCreateWithoutSessionsInput = {
    name: string
    email: string
    passwordHash: string
    role: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    findings?: FindingCreateNestedManyWithoutAuditorInput
  }

  export type InternalUserUncheckedCreateWithoutSessionsInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    role: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    findings?: FindingUncheckedCreateNestedManyWithoutAuditorInput
  }

  export type InternalUserCreateOrConnectWithoutSessionsInput = {
    where: InternalUserWhereUniqueInput
    create: XOR<InternalUserCreateWithoutSessionsInput, InternalUserUncheckedCreateWithoutSessionsInput>
  }

  export type InternalUserUpsertWithoutSessionsInput = {
    update: XOR<InternalUserUpdateWithoutSessionsInput, InternalUserUncheckedUpdateWithoutSessionsInput>
    create: XOR<InternalUserCreateWithoutSessionsInput, InternalUserUncheckedCreateWithoutSessionsInput>
    where?: InternalUserWhereInput
  }

  export type InternalUserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: InternalUserWhereInput
    data: XOR<InternalUserUpdateWithoutSessionsInput, InternalUserUncheckedUpdateWithoutSessionsInput>
  }

  export type InternalUserUpdateWithoutSessionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    findings?: FindingUpdateManyWithoutAuditorNestedInput
  }

  export type InternalUserUncheckedUpdateWithoutSessionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    findings?: FindingUncheckedUpdateManyWithoutAuditorNestedInput
  }

  export type ProgramCreateWithoutCategoryInput = {
    slug: string
    title: string
    summary?: string | null
    coverUrl?: string | null
    description?: string | null
    syllabus?: string | null
    meetingUrl?: string | null
    trainerName?: string | null
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    materials?: MaterialCreateNestedManyWithoutProgramInput
    evaluations?: EvaluationCreateNestedManyWithoutProgramInput
    reviews?: ProgramReviewCreateNestedManyWithoutProgramInput
    programSops?: ProgramSopCreateNestedManyWithoutProgramInput
  }

  export type ProgramUncheckedCreateWithoutCategoryInput = {
    id?: number
    slug: string
    title: string
    summary?: string | null
    coverUrl?: string | null
    description?: string | null
    syllabus?: string | null
    meetingUrl?: string | null
    trainerName?: string | null
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    materials?: MaterialUncheckedCreateNestedManyWithoutProgramInput
    evaluations?: EvaluationUncheckedCreateNestedManyWithoutProgramInput
    reviews?: ProgramReviewUncheckedCreateNestedManyWithoutProgramInput
    programSops?: ProgramSopUncheckedCreateNestedManyWithoutProgramInput
  }

  export type ProgramCreateOrConnectWithoutCategoryInput = {
    where: ProgramWhereUniqueInput
    create: XOR<ProgramCreateWithoutCategoryInput, ProgramUncheckedCreateWithoutCategoryInput>
  }

  export type ProgramCreateManyCategoryInputEnvelope = {
    data: ProgramCreateManyCategoryInput | ProgramCreateManyCategoryInput[]
  }

  export type ProgramUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ProgramWhereUniqueInput
    update: XOR<ProgramUpdateWithoutCategoryInput, ProgramUncheckedUpdateWithoutCategoryInput>
    create: XOR<ProgramCreateWithoutCategoryInput, ProgramUncheckedCreateWithoutCategoryInput>
  }

  export type ProgramUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ProgramWhereUniqueInput
    data: XOR<ProgramUpdateWithoutCategoryInput, ProgramUncheckedUpdateWithoutCategoryInput>
  }

  export type ProgramUpdateManyWithWhereWithoutCategoryInput = {
    where: ProgramScalarWhereInput
    data: XOR<ProgramUpdateManyMutationInput, ProgramUncheckedUpdateManyWithoutCategoryInput>
  }

  export type ProgramScalarWhereInput = {
    AND?: ProgramScalarWhereInput | ProgramScalarWhereInput[]
    OR?: ProgramScalarWhereInput[]
    NOT?: ProgramScalarWhereInput | ProgramScalarWhereInput[]
    id?: IntFilter<"Program"> | number
    categoryId?: IntNullableFilter<"Program"> | number | null
    slug?: StringFilter<"Program"> | string
    title?: StringFilter<"Program"> | string
    summary?: StringNullableFilter<"Program"> | string | null
    coverUrl?: StringNullableFilter<"Program"> | string | null
    description?: StringNullableFilter<"Program"> | string | null
    syllabus?: StringNullableFilter<"Program"> | string | null
    meetingUrl?: StringNullableFilter<"Program"> | string | null
    trainerName?: StringNullableFilter<"Program"> | string | null
    isPublished?: BoolFilter<"Program"> | boolean
    createdAt?: DateTimeFilter<"Program"> | Date | string
    updatedAt?: DateTimeFilter<"Program"> | Date | string
  }

  export type CategoryCreateWithoutProgramsInput = {
    name: string
    slug: string
    sortOrder?: number
  }

  export type CategoryUncheckedCreateWithoutProgramsInput = {
    id?: number
    name: string
    slug: string
    sortOrder?: number
  }

  export type CategoryCreateOrConnectWithoutProgramsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutProgramsInput, CategoryUncheckedCreateWithoutProgramsInput>
  }

  export type MaterialCreateWithoutProgramInput = {
    type: string
    title: string
    description?: string | null
    url?: string | null
    filePath?: string | null
    sortOrder?: number
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MaterialUncheckedCreateWithoutProgramInput = {
    id?: number
    type: string
    title: string
    description?: string | null
    url?: string | null
    filePath?: string | null
    sortOrder?: number
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MaterialCreateOrConnectWithoutProgramInput = {
    where: MaterialWhereUniqueInput
    create: XOR<MaterialCreateWithoutProgramInput, MaterialUncheckedCreateWithoutProgramInput>
  }

  export type MaterialCreateManyProgramInputEnvelope = {
    data: MaterialCreateManyProgramInput | MaterialCreateManyProgramInput[]
  }

  export type EvaluationCreateWithoutProgramInput = {
    type: string
    title: string
    instructions?: string | null
    shuffle?: boolean
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionCreateNestedManyWithoutEvaluationInput
    attempts?: AttemptCreateNestedManyWithoutEvaluationInput
  }

  export type EvaluationUncheckedCreateWithoutProgramInput = {
    id?: number
    type: string
    title: string
    instructions?: string | null
    shuffle?: boolean
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionUncheckedCreateNestedManyWithoutEvaluationInput
    attempts?: AttemptUncheckedCreateNestedManyWithoutEvaluationInput
  }

  export type EvaluationCreateOrConnectWithoutProgramInput = {
    where: EvaluationWhereUniqueInput
    create: XOR<EvaluationCreateWithoutProgramInput, EvaluationUncheckedCreateWithoutProgramInput>
  }

  export type EvaluationCreateManyProgramInputEnvelope = {
    data: EvaluationCreateManyProgramInput | EvaluationCreateManyProgramInput[]
  }

  export type ProgramReviewCreateWithoutProgramInput = {
    reviewerName?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type ProgramReviewUncheckedCreateWithoutProgramInput = {
    id?: number
    reviewerName?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type ProgramReviewCreateOrConnectWithoutProgramInput = {
    where: ProgramReviewWhereUniqueInput
    create: XOR<ProgramReviewCreateWithoutProgramInput, ProgramReviewUncheckedCreateWithoutProgramInput>
  }

  export type ProgramReviewCreateManyProgramInputEnvelope = {
    data: ProgramReviewCreateManyProgramInput | ProgramReviewCreateManyProgramInput[]
  }

  export type ProgramSopCreateWithoutProgramInput = {
    sop: SopDocumentCreateNestedOneWithoutProgramSopsInput
  }

  export type ProgramSopUncheckedCreateWithoutProgramInput = {
    sopId: number
  }

  export type ProgramSopCreateOrConnectWithoutProgramInput = {
    where: ProgramSopWhereUniqueInput
    create: XOR<ProgramSopCreateWithoutProgramInput, ProgramSopUncheckedCreateWithoutProgramInput>
  }

  export type ProgramSopCreateManyProgramInputEnvelope = {
    data: ProgramSopCreateManyProgramInput | ProgramSopCreateManyProgramInput[]
  }

  export type CategoryUpsertWithoutProgramsInput = {
    update: XOR<CategoryUpdateWithoutProgramsInput, CategoryUncheckedUpdateWithoutProgramsInput>
    create: XOR<CategoryCreateWithoutProgramsInput, CategoryUncheckedCreateWithoutProgramsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutProgramsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutProgramsInput, CategoryUncheckedUpdateWithoutProgramsInput>
  }

  export type CategoryUpdateWithoutProgramsInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
  }

  export type CategoryUncheckedUpdateWithoutProgramsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
  }

  export type MaterialUpsertWithWhereUniqueWithoutProgramInput = {
    where: MaterialWhereUniqueInput
    update: XOR<MaterialUpdateWithoutProgramInput, MaterialUncheckedUpdateWithoutProgramInput>
    create: XOR<MaterialCreateWithoutProgramInput, MaterialUncheckedCreateWithoutProgramInput>
  }

  export type MaterialUpdateWithWhereUniqueWithoutProgramInput = {
    where: MaterialWhereUniqueInput
    data: XOR<MaterialUpdateWithoutProgramInput, MaterialUncheckedUpdateWithoutProgramInput>
  }

  export type MaterialUpdateManyWithWhereWithoutProgramInput = {
    where: MaterialScalarWhereInput
    data: XOR<MaterialUpdateManyMutationInput, MaterialUncheckedUpdateManyWithoutProgramInput>
  }

  export type MaterialScalarWhereInput = {
    AND?: MaterialScalarWhereInput | MaterialScalarWhereInput[]
    OR?: MaterialScalarWhereInput[]
    NOT?: MaterialScalarWhereInput | MaterialScalarWhereInput[]
    id?: IntFilter<"Material"> | number
    programId?: IntFilter<"Material"> | number
    type?: StringFilter<"Material"> | string
    title?: StringFilter<"Material"> | string
    description?: StringNullableFilter<"Material"> | string | null
    url?: StringNullableFilter<"Material"> | string | null
    filePath?: StringNullableFilter<"Material"> | string | null
    sortOrder?: IntFilter<"Material"> | number
    isPublished?: BoolFilter<"Material"> | boolean
    createdAt?: DateTimeFilter<"Material"> | Date | string
    updatedAt?: DateTimeFilter<"Material"> | Date | string
  }

  export type EvaluationUpsertWithWhereUniqueWithoutProgramInput = {
    where: EvaluationWhereUniqueInput
    update: XOR<EvaluationUpdateWithoutProgramInput, EvaluationUncheckedUpdateWithoutProgramInput>
    create: XOR<EvaluationCreateWithoutProgramInput, EvaluationUncheckedCreateWithoutProgramInput>
  }

  export type EvaluationUpdateWithWhereUniqueWithoutProgramInput = {
    where: EvaluationWhereUniqueInput
    data: XOR<EvaluationUpdateWithoutProgramInput, EvaluationUncheckedUpdateWithoutProgramInput>
  }

  export type EvaluationUpdateManyWithWhereWithoutProgramInput = {
    where: EvaluationScalarWhereInput
    data: XOR<EvaluationUpdateManyMutationInput, EvaluationUncheckedUpdateManyWithoutProgramInput>
  }

  export type EvaluationScalarWhereInput = {
    AND?: EvaluationScalarWhereInput | EvaluationScalarWhereInput[]
    OR?: EvaluationScalarWhereInput[]
    NOT?: EvaluationScalarWhereInput | EvaluationScalarWhereInput[]
    id?: IntFilter<"Evaluation"> | number
    programId?: IntFilter<"Evaluation"> | number
    type?: StringFilter<"Evaluation"> | string
    title?: StringFilter<"Evaluation"> | string
    instructions?: StringNullableFilter<"Evaluation"> | string | null
    shuffle?: BoolFilter<"Evaluation"> | boolean
    isPublished?: BoolFilter<"Evaluation"> | boolean
    createdAt?: DateTimeFilter<"Evaluation"> | Date | string
    updatedAt?: DateTimeFilter<"Evaluation"> | Date | string
  }

  export type ProgramReviewUpsertWithWhereUniqueWithoutProgramInput = {
    where: ProgramReviewWhereUniqueInput
    update: XOR<ProgramReviewUpdateWithoutProgramInput, ProgramReviewUncheckedUpdateWithoutProgramInput>
    create: XOR<ProgramReviewCreateWithoutProgramInput, ProgramReviewUncheckedCreateWithoutProgramInput>
  }

  export type ProgramReviewUpdateWithWhereUniqueWithoutProgramInput = {
    where: ProgramReviewWhereUniqueInput
    data: XOR<ProgramReviewUpdateWithoutProgramInput, ProgramReviewUncheckedUpdateWithoutProgramInput>
  }

  export type ProgramReviewUpdateManyWithWhereWithoutProgramInput = {
    where: ProgramReviewScalarWhereInput
    data: XOR<ProgramReviewUpdateManyMutationInput, ProgramReviewUncheckedUpdateManyWithoutProgramInput>
  }

  export type ProgramReviewScalarWhereInput = {
    AND?: ProgramReviewScalarWhereInput | ProgramReviewScalarWhereInput[]
    OR?: ProgramReviewScalarWhereInput[]
    NOT?: ProgramReviewScalarWhereInput | ProgramReviewScalarWhereInput[]
    id?: IntFilter<"ProgramReview"> | number
    programId?: IntFilter<"ProgramReview"> | number
    reviewerName?: StringFilter<"ProgramReview"> | string
    rating?: IntFilter<"ProgramReview"> | number
    comment?: StringNullableFilter<"ProgramReview"> | string | null
    createdAt?: DateTimeFilter<"ProgramReview"> | Date | string
  }

  export type ProgramSopUpsertWithWhereUniqueWithoutProgramInput = {
    where: ProgramSopWhereUniqueInput
    update: XOR<ProgramSopUpdateWithoutProgramInput, ProgramSopUncheckedUpdateWithoutProgramInput>
    create: XOR<ProgramSopCreateWithoutProgramInput, ProgramSopUncheckedCreateWithoutProgramInput>
  }

  export type ProgramSopUpdateWithWhereUniqueWithoutProgramInput = {
    where: ProgramSopWhereUniqueInput
    data: XOR<ProgramSopUpdateWithoutProgramInput, ProgramSopUncheckedUpdateWithoutProgramInput>
  }

  export type ProgramSopUpdateManyWithWhereWithoutProgramInput = {
    where: ProgramSopScalarWhereInput
    data: XOR<ProgramSopUpdateManyMutationInput, ProgramSopUncheckedUpdateManyWithoutProgramInput>
  }

  export type ProgramSopScalarWhereInput = {
    AND?: ProgramSopScalarWhereInput | ProgramSopScalarWhereInput[]
    OR?: ProgramSopScalarWhereInput[]
    NOT?: ProgramSopScalarWhereInput | ProgramSopScalarWhereInput[]
    programId?: IntFilter<"ProgramSop"> | number
    sopId?: IntFilter<"ProgramSop"> | number
  }

  export type ProgramCreateWithoutMaterialsInput = {
    slug: string
    title: string
    summary?: string | null
    coverUrl?: string | null
    description?: string | null
    syllabus?: string | null
    meetingUrl?: string | null
    trainerName?: string | null
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: CategoryCreateNestedOneWithoutProgramsInput
    evaluations?: EvaluationCreateNestedManyWithoutProgramInput
    reviews?: ProgramReviewCreateNestedManyWithoutProgramInput
    programSops?: ProgramSopCreateNestedManyWithoutProgramInput
  }

  export type ProgramUncheckedCreateWithoutMaterialsInput = {
    id?: number
    categoryId?: number | null
    slug: string
    title: string
    summary?: string | null
    coverUrl?: string | null
    description?: string | null
    syllabus?: string | null
    meetingUrl?: string | null
    trainerName?: string | null
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    evaluations?: EvaluationUncheckedCreateNestedManyWithoutProgramInput
    reviews?: ProgramReviewUncheckedCreateNestedManyWithoutProgramInput
    programSops?: ProgramSopUncheckedCreateNestedManyWithoutProgramInput
  }

  export type ProgramCreateOrConnectWithoutMaterialsInput = {
    where: ProgramWhereUniqueInput
    create: XOR<ProgramCreateWithoutMaterialsInput, ProgramUncheckedCreateWithoutMaterialsInput>
  }

  export type ProgramUpsertWithoutMaterialsInput = {
    update: XOR<ProgramUpdateWithoutMaterialsInput, ProgramUncheckedUpdateWithoutMaterialsInput>
    create: XOR<ProgramCreateWithoutMaterialsInput, ProgramUncheckedCreateWithoutMaterialsInput>
    where?: ProgramWhereInput
  }

  export type ProgramUpdateToOneWithWhereWithoutMaterialsInput = {
    where?: ProgramWhereInput
    data: XOR<ProgramUpdateWithoutMaterialsInput, ProgramUncheckedUpdateWithoutMaterialsInput>
  }

  export type ProgramUpdateWithoutMaterialsInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    syllabus?: NullableStringFieldUpdateOperationsInput | string | null
    meetingUrl?: NullableStringFieldUpdateOperationsInput | string | null
    trainerName?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneWithoutProgramsNestedInput
    evaluations?: EvaluationUpdateManyWithoutProgramNestedInput
    reviews?: ProgramReviewUpdateManyWithoutProgramNestedInput
    programSops?: ProgramSopUpdateManyWithoutProgramNestedInput
  }

  export type ProgramUncheckedUpdateWithoutMaterialsInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    syllabus?: NullableStringFieldUpdateOperationsInput | string | null
    meetingUrl?: NullableStringFieldUpdateOperationsInput | string | null
    trainerName?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluations?: EvaluationUncheckedUpdateManyWithoutProgramNestedInput
    reviews?: ProgramReviewUncheckedUpdateManyWithoutProgramNestedInput
    programSops?: ProgramSopUncheckedUpdateManyWithoutProgramNestedInput
  }

  export type ProgramSopCreateWithoutSopInput = {
    program: ProgramCreateNestedOneWithoutProgramSopsInput
  }

  export type ProgramSopUncheckedCreateWithoutSopInput = {
    programId: number
  }

  export type ProgramSopCreateOrConnectWithoutSopInput = {
    where: ProgramSopWhereUniqueInput
    create: XOR<ProgramSopCreateWithoutSopInput, ProgramSopUncheckedCreateWithoutSopInput>
  }

  export type ProgramSopCreateManySopInputEnvelope = {
    data: ProgramSopCreateManySopInput | ProgramSopCreateManySopInput[]
  }

  export type ProgramSopUpsertWithWhereUniqueWithoutSopInput = {
    where: ProgramSopWhereUniqueInput
    update: XOR<ProgramSopUpdateWithoutSopInput, ProgramSopUncheckedUpdateWithoutSopInput>
    create: XOR<ProgramSopCreateWithoutSopInput, ProgramSopUncheckedCreateWithoutSopInput>
  }

  export type ProgramSopUpdateWithWhereUniqueWithoutSopInput = {
    where: ProgramSopWhereUniqueInput
    data: XOR<ProgramSopUpdateWithoutSopInput, ProgramSopUncheckedUpdateWithoutSopInput>
  }

  export type ProgramSopUpdateManyWithWhereWithoutSopInput = {
    where: ProgramSopScalarWhereInput
    data: XOR<ProgramSopUpdateManyMutationInput, ProgramSopUncheckedUpdateManyWithoutSopInput>
  }

  export type ProgramCreateWithoutProgramSopsInput = {
    slug: string
    title: string
    summary?: string | null
    coverUrl?: string | null
    description?: string | null
    syllabus?: string | null
    meetingUrl?: string | null
    trainerName?: string | null
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: CategoryCreateNestedOneWithoutProgramsInput
    materials?: MaterialCreateNestedManyWithoutProgramInput
    evaluations?: EvaluationCreateNestedManyWithoutProgramInput
    reviews?: ProgramReviewCreateNestedManyWithoutProgramInput
  }

  export type ProgramUncheckedCreateWithoutProgramSopsInput = {
    id?: number
    categoryId?: number | null
    slug: string
    title: string
    summary?: string | null
    coverUrl?: string | null
    description?: string | null
    syllabus?: string | null
    meetingUrl?: string | null
    trainerName?: string | null
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    materials?: MaterialUncheckedCreateNestedManyWithoutProgramInput
    evaluations?: EvaluationUncheckedCreateNestedManyWithoutProgramInput
    reviews?: ProgramReviewUncheckedCreateNestedManyWithoutProgramInput
  }

  export type ProgramCreateOrConnectWithoutProgramSopsInput = {
    where: ProgramWhereUniqueInput
    create: XOR<ProgramCreateWithoutProgramSopsInput, ProgramUncheckedCreateWithoutProgramSopsInput>
  }

  export type SopDocumentCreateWithoutProgramSopsInput = {
    code: string
    title: string
    version?: string
    description?: string | null
    url: string
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SopDocumentUncheckedCreateWithoutProgramSopsInput = {
    id?: number
    code: string
    title: string
    version?: string
    description?: string | null
    url: string
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SopDocumentCreateOrConnectWithoutProgramSopsInput = {
    where: SopDocumentWhereUniqueInput
    create: XOR<SopDocumentCreateWithoutProgramSopsInput, SopDocumentUncheckedCreateWithoutProgramSopsInput>
  }

  export type ProgramUpsertWithoutProgramSopsInput = {
    update: XOR<ProgramUpdateWithoutProgramSopsInput, ProgramUncheckedUpdateWithoutProgramSopsInput>
    create: XOR<ProgramCreateWithoutProgramSopsInput, ProgramUncheckedCreateWithoutProgramSopsInput>
    where?: ProgramWhereInput
  }

  export type ProgramUpdateToOneWithWhereWithoutProgramSopsInput = {
    where?: ProgramWhereInput
    data: XOR<ProgramUpdateWithoutProgramSopsInput, ProgramUncheckedUpdateWithoutProgramSopsInput>
  }

  export type ProgramUpdateWithoutProgramSopsInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    syllabus?: NullableStringFieldUpdateOperationsInput | string | null
    meetingUrl?: NullableStringFieldUpdateOperationsInput | string | null
    trainerName?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneWithoutProgramsNestedInput
    materials?: MaterialUpdateManyWithoutProgramNestedInput
    evaluations?: EvaluationUpdateManyWithoutProgramNestedInput
    reviews?: ProgramReviewUpdateManyWithoutProgramNestedInput
  }

  export type ProgramUncheckedUpdateWithoutProgramSopsInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    syllabus?: NullableStringFieldUpdateOperationsInput | string | null
    meetingUrl?: NullableStringFieldUpdateOperationsInput | string | null
    trainerName?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    materials?: MaterialUncheckedUpdateManyWithoutProgramNestedInput
    evaluations?: EvaluationUncheckedUpdateManyWithoutProgramNestedInput
    reviews?: ProgramReviewUncheckedUpdateManyWithoutProgramNestedInput
  }

  export type SopDocumentUpsertWithoutProgramSopsInput = {
    update: XOR<SopDocumentUpdateWithoutProgramSopsInput, SopDocumentUncheckedUpdateWithoutProgramSopsInput>
    create: XOR<SopDocumentCreateWithoutProgramSopsInput, SopDocumentUncheckedCreateWithoutProgramSopsInput>
    where?: SopDocumentWhereInput
  }

  export type SopDocumentUpdateToOneWithWhereWithoutProgramSopsInput = {
    where?: SopDocumentWhereInput
    data: XOR<SopDocumentUpdateWithoutProgramSopsInput, SopDocumentUncheckedUpdateWithoutProgramSopsInput>
  }

  export type SopDocumentUpdateWithoutProgramSopsInput = {
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SopDocumentUncheckedUpdateWithoutProgramSopsInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgramCreateWithoutEvaluationsInput = {
    slug: string
    title: string
    summary?: string | null
    coverUrl?: string | null
    description?: string | null
    syllabus?: string | null
    meetingUrl?: string | null
    trainerName?: string | null
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: CategoryCreateNestedOneWithoutProgramsInput
    materials?: MaterialCreateNestedManyWithoutProgramInput
    reviews?: ProgramReviewCreateNestedManyWithoutProgramInput
    programSops?: ProgramSopCreateNestedManyWithoutProgramInput
  }

  export type ProgramUncheckedCreateWithoutEvaluationsInput = {
    id?: number
    categoryId?: number | null
    slug: string
    title: string
    summary?: string | null
    coverUrl?: string | null
    description?: string | null
    syllabus?: string | null
    meetingUrl?: string | null
    trainerName?: string | null
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    materials?: MaterialUncheckedCreateNestedManyWithoutProgramInput
    reviews?: ProgramReviewUncheckedCreateNestedManyWithoutProgramInput
    programSops?: ProgramSopUncheckedCreateNestedManyWithoutProgramInput
  }

  export type ProgramCreateOrConnectWithoutEvaluationsInput = {
    where: ProgramWhereUniqueInput
    create: XOR<ProgramCreateWithoutEvaluationsInput, ProgramUncheckedCreateWithoutEvaluationsInput>
  }

  export type QuestionCreateWithoutEvaluationInput = {
    sortOrder?: number
    text: string
    options: string
    correctAnswer: string
    score?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    attemptAnswers?: AttemptAnswerCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutEvaluationInput = {
    id?: number
    sortOrder?: number
    text: string
    options: string
    correctAnswer: string
    score?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    attemptAnswers?: AttemptAnswerUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutEvaluationInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutEvaluationInput, QuestionUncheckedCreateWithoutEvaluationInput>
  }

  export type QuestionCreateManyEvaluationInputEnvelope = {
    data: QuestionCreateManyEvaluationInput | QuestionCreateManyEvaluationInput[]
  }

  export type AttemptCreateWithoutEvaluationInput = {
    takerName: string
    takerEmail: string
    takerPhone?: string | null
    takerTitle?: string | null
    startedAt?: Date | string
    submittedAt?: Date | string | null
    score?: number | null
    maxScore?: number | null
    answers?: AttemptAnswerCreateNestedManyWithoutAttemptInput
  }

  export type AttemptUncheckedCreateWithoutEvaluationInput = {
    id?: number
    takerName: string
    takerEmail: string
    takerPhone?: string | null
    takerTitle?: string | null
    startedAt?: Date | string
    submittedAt?: Date | string | null
    score?: number | null
    maxScore?: number | null
    answers?: AttemptAnswerUncheckedCreateNestedManyWithoutAttemptInput
  }

  export type AttemptCreateOrConnectWithoutEvaluationInput = {
    where: AttemptWhereUniqueInput
    create: XOR<AttemptCreateWithoutEvaluationInput, AttemptUncheckedCreateWithoutEvaluationInput>
  }

  export type AttemptCreateManyEvaluationInputEnvelope = {
    data: AttemptCreateManyEvaluationInput | AttemptCreateManyEvaluationInput[]
  }

  export type ProgramUpsertWithoutEvaluationsInput = {
    update: XOR<ProgramUpdateWithoutEvaluationsInput, ProgramUncheckedUpdateWithoutEvaluationsInput>
    create: XOR<ProgramCreateWithoutEvaluationsInput, ProgramUncheckedCreateWithoutEvaluationsInput>
    where?: ProgramWhereInput
  }

  export type ProgramUpdateToOneWithWhereWithoutEvaluationsInput = {
    where?: ProgramWhereInput
    data: XOR<ProgramUpdateWithoutEvaluationsInput, ProgramUncheckedUpdateWithoutEvaluationsInput>
  }

  export type ProgramUpdateWithoutEvaluationsInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    syllabus?: NullableStringFieldUpdateOperationsInput | string | null
    meetingUrl?: NullableStringFieldUpdateOperationsInput | string | null
    trainerName?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneWithoutProgramsNestedInput
    materials?: MaterialUpdateManyWithoutProgramNestedInput
    reviews?: ProgramReviewUpdateManyWithoutProgramNestedInput
    programSops?: ProgramSopUpdateManyWithoutProgramNestedInput
  }

  export type ProgramUncheckedUpdateWithoutEvaluationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    syllabus?: NullableStringFieldUpdateOperationsInput | string | null
    meetingUrl?: NullableStringFieldUpdateOperationsInput | string | null
    trainerName?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    materials?: MaterialUncheckedUpdateManyWithoutProgramNestedInput
    reviews?: ProgramReviewUncheckedUpdateManyWithoutProgramNestedInput
    programSops?: ProgramSopUncheckedUpdateManyWithoutProgramNestedInput
  }

  export type QuestionUpsertWithWhereUniqueWithoutEvaluationInput = {
    where: QuestionWhereUniqueInput
    update: XOR<QuestionUpdateWithoutEvaluationInput, QuestionUncheckedUpdateWithoutEvaluationInput>
    create: XOR<QuestionCreateWithoutEvaluationInput, QuestionUncheckedCreateWithoutEvaluationInput>
  }

  export type QuestionUpdateWithWhereUniqueWithoutEvaluationInput = {
    where: QuestionWhereUniqueInput
    data: XOR<QuestionUpdateWithoutEvaluationInput, QuestionUncheckedUpdateWithoutEvaluationInput>
  }

  export type QuestionUpdateManyWithWhereWithoutEvaluationInput = {
    where: QuestionScalarWhereInput
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyWithoutEvaluationInput>
  }

  export type QuestionScalarWhereInput = {
    AND?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    OR?: QuestionScalarWhereInput[]
    NOT?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    id?: IntFilter<"Question"> | number
    evaluationId?: IntFilter<"Question"> | number
    sortOrder?: IntFilter<"Question"> | number
    text?: StringFilter<"Question"> | string
    options?: StringFilter<"Question"> | string
    correctAnswer?: StringFilter<"Question"> | string
    score?: IntFilter<"Question"> | number
    createdAt?: DateTimeFilter<"Question"> | Date | string
    updatedAt?: DateTimeFilter<"Question"> | Date | string
  }

  export type AttemptUpsertWithWhereUniqueWithoutEvaluationInput = {
    where: AttemptWhereUniqueInput
    update: XOR<AttemptUpdateWithoutEvaluationInput, AttemptUncheckedUpdateWithoutEvaluationInput>
    create: XOR<AttemptCreateWithoutEvaluationInput, AttemptUncheckedCreateWithoutEvaluationInput>
  }

  export type AttemptUpdateWithWhereUniqueWithoutEvaluationInput = {
    where: AttemptWhereUniqueInput
    data: XOR<AttemptUpdateWithoutEvaluationInput, AttemptUncheckedUpdateWithoutEvaluationInput>
  }

  export type AttemptUpdateManyWithWhereWithoutEvaluationInput = {
    where: AttemptScalarWhereInput
    data: XOR<AttemptUpdateManyMutationInput, AttemptUncheckedUpdateManyWithoutEvaluationInput>
  }

  export type AttemptScalarWhereInput = {
    AND?: AttemptScalarWhereInput | AttemptScalarWhereInput[]
    OR?: AttemptScalarWhereInput[]
    NOT?: AttemptScalarWhereInput | AttemptScalarWhereInput[]
    id?: IntFilter<"Attempt"> | number
    evaluationId?: IntFilter<"Attempt"> | number
    takerName?: StringFilter<"Attempt"> | string
    takerEmail?: StringFilter<"Attempt"> | string
    takerPhone?: StringNullableFilter<"Attempt"> | string | null
    takerTitle?: StringNullableFilter<"Attempt"> | string | null
    startedAt?: DateTimeFilter<"Attempt"> | Date | string
    submittedAt?: DateTimeNullableFilter<"Attempt"> | Date | string | null
    score?: IntNullableFilter<"Attempt"> | number | null
    maxScore?: IntNullableFilter<"Attempt"> | number | null
  }

  export type EvaluationCreateWithoutQuestionsInput = {
    type: string
    title: string
    instructions?: string | null
    shuffle?: boolean
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    program: ProgramCreateNestedOneWithoutEvaluationsInput
    attempts?: AttemptCreateNestedManyWithoutEvaluationInput
  }

  export type EvaluationUncheckedCreateWithoutQuestionsInput = {
    id?: number
    programId: number
    type: string
    title: string
    instructions?: string | null
    shuffle?: boolean
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    attempts?: AttemptUncheckedCreateNestedManyWithoutEvaluationInput
  }

  export type EvaluationCreateOrConnectWithoutQuestionsInput = {
    where: EvaluationWhereUniqueInput
    create: XOR<EvaluationCreateWithoutQuestionsInput, EvaluationUncheckedCreateWithoutQuestionsInput>
  }

  export type AttemptAnswerCreateWithoutQuestionInput = {
    answer?: string | null
    isCorrect?: boolean
    attempt: AttemptCreateNestedOneWithoutAnswersInput
  }

  export type AttemptAnswerUncheckedCreateWithoutQuestionInput = {
    id?: number
    attemptId: number
    answer?: string | null
    isCorrect?: boolean
  }

  export type AttemptAnswerCreateOrConnectWithoutQuestionInput = {
    where: AttemptAnswerWhereUniqueInput
    create: XOR<AttemptAnswerCreateWithoutQuestionInput, AttemptAnswerUncheckedCreateWithoutQuestionInput>
  }

  export type AttemptAnswerCreateManyQuestionInputEnvelope = {
    data: AttemptAnswerCreateManyQuestionInput | AttemptAnswerCreateManyQuestionInput[]
  }

  export type EvaluationUpsertWithoutQuestionsInput = {
    update: XOR<EvaluationUpdateWithoutQuestionsInput, EvaluationUncheckedUpdateWithoutQuestionsInput>
    create: XOR<EvaluationCreateWithoutQuestionsInput, EvaluationUncheckedCreateWithoutQuestionsInput>
    where?: EvaluationWhereInput
  }

  export type EvaluationUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: EvaluationWhereInput
    data: XOR<EvaluationUpdateWithoutQuestionsInput, EvaluationUncheckedUpdateWithoutQuestionsInput>
  }

  export type EvaluationUpdateWithoutQuestionsInput = {
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    shuffle?: BoolFieldUpdateOperationsInput | boolean
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    program?: ProgramUpdateOneRequiredWithoutEvaluationsNestedInput
    attempts?: AttemptUpdateManyWithoutEvaluationNestedInput
  }

  export type EvaluationUncheckedUpdateWithoutQuestionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    programId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    shuffle?: BoolFieldUpdateOperationsInput | boolean
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attempts?: AttemptUncheckedUpdateManyWithoutEvaluationNestedInput
  }

  export type AttemptAnswerUpsertWithWhereUniqueWithoutQuestionInput = {
    where: AttemptAnswerWhereUniqueInput
    update: XOR<AttemptAnswerUpdateWithoutQuestionInput, AttemptAnswerUncheckedUpdateWithoutQuestionInput>
    create: XOR<AttemptAnswerCreateWithoutQuestionInput, AttemptAnswerUncheckedCreateWithoutQuestionInput>
  }

  export type AttemptAnswerUpdateWithWhereUniqueWithoutQuestionInput = {
    where: AttemptAnswerWhereUniqueInput
    data: XOR<AttemptAnswerUpdateWithoutQuestionInput, AttemptAnswerUncheckedUpdateWithoutQuestionInput>
  }

  export type AttemptAnswerUpdateManyWithWhereWithoutQuestionInput = {
    where: AttemptAnswerScalarWhereInput
    data: XOR<AttemptAnswerUpdateManyMutationInput, AttemptAnswerUncheckedUpdateManyWithoutQuestionInput>
  }

  export type AttemptAnswerScalarWhereInput = {
    AND?: AttemptAnswerScalarWhereInput | AttemptAnswerScalarWhereInput[]
    OR?: AttemptAnswerScalarWhereInput[]
    NOT?: AttemptAnswerScalarWhereInput | AttemptAnswerScalarWhereInput[]
    id?: IntFilter<"AttemptAnswer"> | number
    attemptId?: IntFilter<"AttemptAnswer"> | number
    questionId?: IntFilter<"AttemptAnswer"> | number
    answer?: StringNullableFilter<"AttemptAnswer"> | string | null
    isCorrect?: BoolFilter<"AttemptAnswer"> | boolean
  }

  export type EvaluationCreateWithoutAttemptsInput = {
    type: string
    title: string
    instructions?: string | null
    shuffle?: boolean
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    program: ProgramCreateNestedOneWithoutEvaluationsInput
    questions?: QuestionCreateNestedManyWithoutEvaluationInput
  }

  export type EvaluationUncheckedCreateWithoutAttemptsInput = {
    id?: number
    programId: number
    type: string
    title: string
    instructions?: string | null
    shuffle?: boolean
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionUncheckedCreateNestedManyWithoutEvaluationInput
  }

  export type EvaluationCreateOrConnectWithoutAttemptsInput = {
    where: EvaluationWhereUniqueInput
    create: XOR<EvaluationCreateWithoutAttemptsInput, EvaluationUncheckedCreateWithoutAttemptsInput>
  }

  export type AttemptAnswerCreateWithoutAttemptInput = {
    answer?: string | null
    isCorrect?: boolean
    question: QuestionCreateNestedOneWithoutAttemptAnswersInput
  }

  export type AttemptAnswerUncheckedCreateWithoutAttemptInput = {
    id?: number
    questionId: number
    answer?: string | null
    isCorrect?: boolean
  }

  export type AttemptAnswerCreateOrConnectWithoutAttemptInput = {
    where: AttemptAnswerWhereUniqueInput
    create: XOR<AttemptAnswerCreateWithoutAttemptInput, AttemptAnswerUncheckedCreateWithoutAttemptInput>
  }

  export type AttemptAnswerCreateManyAttemptInputEnvelope = {
    data: AttemptAnswerCreateManyAttemptInput | AttemptAnswerCreateManyAttemptInput[]
  }

  export type EvaluationUpsertWithoutAttemptsInput = {
    update: XOR<EvaluationUpdateWithoutAttemptsInput, EvaluationUncheckedUpdateWithoutAttemptsInput>
    create: XOR<EvaluationCreateWithoutAttemptsInput, EvaluationUncheckedCreateWithoutAttemptsInput>
    where?: EvaluationWhereInput
  }

  export type EvaluationUpdateToOneWithWhereWithoutAttemptsInput = {
    where?: EvaluationWhereInput
    data: XOR<EvaluationUpdateWithoutAttemptsInput, EvaluationUncheckedUpdateWithoutAttemptsInput>
  }

  export type EvaluationUpdateWithoutAttemptsInput = {
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    shuffle?: BoolFieldUpdateOperationsInput | boolean
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    program?: ProgramUpdateOneRequiredWithoutEvaluationsNestedInput
    questions?: QuestionUpdateManyWithoutEvaluationNestedInput
  }

  export type EvaluationUncheckedUpdateWithoutAttemptsInput = {
    id?: IntFieldUpdateOperationsInput | number
    programId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    shuffle?: BoolFieldUpdateOperationsInput | boolean
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUncheckedUpdateManyWithoutEvaluationNestedInput
  }

  export type AttemptAnswerUpsertWithWhereUniqueWithoutAttemptInput = {
    where: AttemptAnswerWhereUniqueInput
    update: XOR<AttemptAnswerUpdateWithoutAttemptInput, AttemptAnswerUncheckedUpdateWithoutAttemptInput>
    create: XOR<AttemptAnswerCreateWithoutAttemptInput, AttemptAnswerUncheckedCreateWithoutAttemptInput>
  }

  export type AttemptAnswerUpdateWithWhereUniqueWithoutAttemptInput = {
    where: AttemptAnswerWhereUniqueInput
    data: XOR<AttemptAnswerUpdateWithoutAttemptInput, AttemptAnswerUncheckedUpdateWithoutAttemptInput>
  }

  export type AttemptAnswerUpdateManyWithWhereWithoutAttemptInput = {
    where: AttemptAnswerScalarWhereInput
    data: XOR<AttemptAnswerUpdateManyMutationInput, AttemptAnswerUncheckedUpdateManyWithoutAttemptInput>
  }

  export type AttemptCreateWithoutAnswersInput = {
    takerName: string
    takerEmail: string
    takerPhone?: string | null
    takerTitle?: string | null
    startedAt?: Date | string
    submittedAt?: Date | string | null
    score?: number | null
    maxScore?: number | null
    evaluation: EvaluationCreateNestedOneWithoutAttemptsInput
  }

  export type AttemptUncheckedCreateWithoutAnswersInput = {
    id?: number
    evaluationId: number
    takerName: string
    takerEmail: string
    takerPhone?: string | null
    takerTitle?: string | null
    startedAt?: Date | string
    submittedAt?: Date | string | null
    score?: number | null
    maxScore?: number | null
  }

  export type AttemptCreateOrConnectWithoutAnswersInput = {
    where: AttemptWhereUniqueInput
    create: XOR<AttemptCreateWithoutAnswersInput, AttemptUncheckedCreateWithoutAnswersInput>
  }

  export type QuestionCreateWithoutAttemptAnswersInput = {
    sortOrder?: number
    text: string
    options: string
    correctAnswer: string
    score?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    evaluation: EvaluationCreateNestedOneWithoutQuestionsInput
  }

  export type QuestionUncheckedCreateWithoutAttemptAnswersInput = {
    id?: number
    evaluationId: number
    sortOrder?: number
    text: string
    options: string
    correctAnswer: string
    score?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionCreateOrConnectWithoutAttemptAnswersInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutAttemptAnswersInput, QuestionUncheckedCreateWithoutAttemptAnswersInput>
  }

  export type AttemptUpsertWithoutAnswersInput = {
    update: XOR<AttemptUpdateWithoutAnswersInput, AttemptUncheckedUpdateWithoutAnswersInput>
    create: XOR<AttemptCreateWithoutAnswersInput, AttemptUncheckedCreateWithoutAnswersInput>
    where?: AttemptWhereInput
  }

  export type AttemptUpdateToOneWithWhereWithoutAnswersInput = {
    where?: AttemptWhereInput
    data: XOR<AttemptUpdateWithoutAnswersInput, AttemptUncheckedUpdateWithoutAnswersInput>
  }

  export type AttemptUpdateWithoutAnswersInput = {
    takerName?: StringFieldUpdateOperationsInput | string
    takerEmail?: StringFieldUpdateOperationsInput | string
    takerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    takerTitle?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    maxScore?: NullableIntFieldUpdateOperationsInput | number | null
    evaluation?: EvaluationUpdateOneRequiredWithoutAttemptsNestedInput
  }

  export type AttemptUncheckedUpdateWithoutAnswersInput = {
    id?: IntFieldUpdateOperationsInput | number
    evaluationId?: IntFieldUpdateOperationsInput | number
    takerName?: StringFieldUpdateOperationsInput | string
    takerEmail?: StringFieldUpdateOperationsInput | string
    takerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    takerTitle?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    maxScore?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type QuestionUpsertWithoutAttemptAnswersInput = {
    update: XOR<QuestionUpdateWithoutAttemptAnswersInput, QuestionUncheckedUpdateWithoutAttemptAnswersInput>
    create: XOR<QuestionCreateWithoutAttemptAnswersInput, QuestionUncheckedCreateWithoutAttemptAnswersInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutAttemptAnswersInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutAttemptAnswersInput, QuestionUncheckedUpdateWithoutAttemptAnswersInput>
  }

  export type QuestionUpdateWithoutAttemptAnswersInput = {
    sortOrder?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    options?: StringFieldUpdateOperationsInput | string
    correctAnswer?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluation?: EvaluationUpdateOneRequiredWithoutQuestionsNestedInput
  }

  export type QuestionUncheckedUpdateWithoutAttemptAnswersInput = {
    id?: IntFieldUpdateOperationsInput | number
    evaluationId?: IntFieldUpdateOperationsInput | number
    sortOrder?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    options?: StringFieldUpdateOperationsInput | string
    correctAnswer?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgramCreateWithoutReviewsInput = {
    slug: string
    title: string
    summary?: string | null
    coverUrl?: string | null
    description?: string | null
    syllabus?: string | null
    meetingUrl?: string | null
    trainerName?: string | null
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: CategoryCreateNestedOneWithoutProgramsInput
    materials?: MaterialCreateNestedManyWithoutProgramInput
    evaluations?: EvaluationCreateNestedManyWithoutProgramInput
    programSops?: ProgramSopCreateNestedManyWithoutProgramInput
  }

  export type ProgramUncheckedCreateWithoutReviewsInput = {
    id?: number
    categoryId?: number | null
    slug: string
    title: string
    summary?: string | null
    coverUrl?: string | null
    description?: string | null
    syllabus?: string | null
    meetingUrl?: string | null
    trainerName?: string | null
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    materials?: MaterialUncheckedCreateNestedManyWithoutProgramInput
    evaluations?: EvaluationUncheckedCreateNestedManyWithoutProgramInput
    programSops?: ProgramSopUncheckedCreateNestedManyWithoutProgramInput
  }

  export type ProgramCreateOrConnectWithoutReviewsInput = {
    where: ProgramWhereUniqueInput
    create: XOR<ProgramCreateWithoutReviewsInput, ProgramUncheckedCreateWithoutReviewsInput>
  }

  export type ProgramUpsertWithoutReviewsInput = {
    update: XOR<ProgramUpdateWithoutReviewsInput, ProgramUncheckedUpdateWithoutReviewsInput>
    create: XOR<ProgramCreateWithoutReviewsInput, ProgramUncheckedCreateWithoutReviewsInput>
    where?: ProgramWhereInput
  }

  export type ProgramUpdateToOneWithWhereWithoutReviewsInput = {
    where?: ProgramWhereInput
    data: XOR<ProgramUpdateWithoutReviewsInput, ProgramUncheckedUpdateWithoutReviewsInput>
  }

  export type ProgramUpdateWithoutReviewsInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    syllabus?: NullableStringFieldUpdateOperationsInput | string | null
    meetingUrl?: NullableStringFieldUpdateOperationsInput | string | null
    trainerName?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneWithoutProgramsNestedInput
    materials?: MaterialUpdateManyWithoutProgramNestedInput
    evaluations?: EvaluationUpdateManyWithoutProgramNestedInput
    programSops?: ProgramSopUpdateManyWithoutProgramNestedInput
  }

  export type ProgramUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    syllabus?: NullableStringFieldUpdateOperationsInput | string | null
    meetingUrl?: NullableStringFieldUpdateOperationsInput | string | null
    trainerName?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    materials?: MaterialUncheckedUpdateManyWithoutProgramNestedInput
    evaluations?: EvaluationUncheckedUpdateManyWithoutProgramNestedInput
    programSops?: ProgramSopUncheckedUpdateManyWithoutProgramNestedInput
  }

  export type InternalUserCreateWithoutFindingsInput = {
    name: string
    email: string
    passwordHash: string
    role: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: AuthSessionCreateNestedManyWithoutUserInput
  }

  export type InternalUserUncheckedCreateWithoutFindingsInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    role: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: AuthSessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type InternalUserCreateOrConnectWithoutFindingsInput = {
    where: InternalUserWhereUniqueInput
    create: XOR<InternalUserCreateWithoutFindingsInput, InternalUserUncheckedCreateWithoutFindingsInput>
  }

  export type InternalUserUpsertWithoutFindingsInput = {
    update: XOR<InternalUserUpdateWithoutFindingsInput, InternalUserUncheckedUpdateWithoutFindingsInput>
    create: XOR<InternalUserCreateWithoutFindingsInput, InternalUserUncheckedCreateWithoutFindingsInput>
    where?: InternalUserWhereInput
  }

  export type InternalUserUpdateToOneWithWhereWithoutFindingsInput = {
    where?: InternalUserWhereInput
    data: XOR<InternalUserUpdateWithoutFindingsInput, InternalUserUncheckedUpdateWithoutFindingsInput>
  }

  export type InternalUserUpdateWithoutFindingsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: AuthSessionUpdateManyWithoutUserNestedInput
  }

  export type InternalUserUncheckedUpdateWithoutFindingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: AuthSessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AuthSessionCreateManyUserInput = {
    id: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type FindingCreateManyAuditorInput = {
    id?: number
    code: string
    source?: string
    clause: string
    description: string
    category: string
    rootCause?: string | null
    correction?: string | null
    correctiveAction?: string | null
    verificationResult?: string | null
    status?: string
    targetDate?: Date | string | null
    evidenceUrl?: string | null
    reportedAt?: Date | string
    verifiedAt?: Date | string | null
    requestId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AuthSessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthSessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthSessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FindingUpdateWithoutAuditorInput = {
    code?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    clause?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    rootCause?: NullableStringFieldUpdateOperationsInput | string | null
    correction?: NullableStringFieldUpdateOperationsInput | string | null
    correctiveAction?: NullableStringFieldUpdateOperationsInput | string | null
    verificationResult?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    targetDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    evidenceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    reportedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FindingUncheckedUpdateWithoutAuditorInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    clause?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    rootCause?: NullableStringFieldUpdateOperationsInput | string | null
    correction?: NullableStringFieldUpdateOperationsInput | string | null
    correctiveAction?: NullableStringFieldUpdateOperationsInput | string | null
    verificationResult?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    targetDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    evidenceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    reportedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FindingUncheckedUpdateManyWithoutAuditorInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    clause?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    rootCause?: NullableStringFieldUpdateOperationsInput | string | null
    correction?: NullableStringFieldUpdateOperationsInput | string | null
    correctiveAction?: NullableStringFieldUpdateOperationsInput | string | null
    verificationResult?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    targetDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    evidenceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    reportedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgramCreateManyCategoryInput = {
    id?: number
    slug: string
    title: string
    summary?: string | null
    coverUrl?: string | null
    description?: string | null
    syllabus?: string | null
    meetingUrl?: string | null
    trainerName?: string | null
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProgramUpdateWithoutCategoryInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    syllabus?: NullableStringFieldUpdateOperationsInput | string | null
    meetingUrl?: NullableStringFieldUpdateOperationsInput | string | null
    trainerName?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    materials?: MaterialUpdateManyWithoutProgramNestedInput
    evaluations?: EvaluationUpdateManyWithoutProgramNestedInput
    reviews?: ProgramReviewUpdateManyWithoutProgramNestedInput
    programSops?: ProgramSopUpdateManyWithoutProgramNestedInput
  }

  export type ProgramUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    syllabus?: NullableStringFieldUpdateOperationsInput | string | null
    meetingUrl?: NullableStringFieldUpdateOperationsInput | string | null
    trainerName?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    materials?: MaterialUncheckedUpdateManyWithoutProgramNestedInput
    evaluations?: EvaluationUncheckedUpdateManyWithoutProgramNestedInput
    reviews?: ProgramReviewUncheckedUpdateManyWithoutProgramNestedInput
    programSops?: ProgramSopUncheckedUpdateManyWithoutProgramNestedInput
  }

  export type ProgramUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    syllabus?: NullableStringFieldUpdateOperationsInput | string | null
    meetingUrl?: NullableStringFieldUpdateOperationsInput | string | null
    trainerName?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaterialCreateManyProgramInput = {
    id?: number
    type: string
    title: string
    description?: string | null
    url?: string | null
    filePath?: string | null
    sortOrder?: number
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EvaluationCreateManyProgramInput = {
    id?: number
    type: string
    title: string
    instructions?: string | null
    shuffle?: boolean
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProgramReviewCreateManyProgramInput = {
    id?: number
    reviewerName?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type ProgramSopCreateManyProgramInput = {
    sopId: number
  }

  export type MaterialUpdateWithoutProgramInput = {
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaterialUncheckedUpdateWithoutProgramInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaterialUncheckedUpdateManyWithoutProgramInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EvaluationUpdateWithoutProgramInput = {
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    shuffle?: BoolFieldUpdateOperationsInput | boolean
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUpdateManyWithoutEvaluationNestedInput
    attempts?: AttemptUpdateManyWithoutEvaluationNestedInput
  }

  export type EvaluationUncheckedUpdateWithoutProgramInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    shuffle?: BoolFieldUpdateOperationsInput | boolean
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUncheckedUpdateManyWithoutEvaluationNestedInput
    attempts?: AttemptUncheckedUpdateManyWithoutEvaluationNestedInput
  }

  export type EvaluationUncheckedUpdateManyWithoutProgramInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    shuffle?: BoolFieldUpdateOperationsInput | boolean
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgramReviewUpdateWithoutProgramInput = {
    reviewerName?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgramReviewUncheckedUpdateWithoutProgramInput = {
    id?: IntFieldUpdateOperationsInput | number
    reviewerName?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgramReviewUncheckedUpdateManyWithoutProgramInput = {
    id?: IntFieldUpdateOperationsInput | number
    reviewerName?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgramSopUpdateWithoutProgramInput = {
    sop?: SopDocumentUpdateOneRequiredWithoutProgramSopsNestedInput
  }

  export type ProgramSopUncheckedUpdateWithoutProgramInput = {
    sopId?: IntFieldUpdateOperationsInput | number
  }

  export type ProgramSopUncheckedUpdateManyWithoutProgramInput = {
    sopId?: IntFieldUpdateOperationsInput | number
  }

  export type ProgramSopCreateManySopInput = {
    programId: number
  }

  export type ProgramSopUpdateWithoutSopInput = {
    program?: ProgramUpdateOneRequiredWithoutProgramSopsNestedInput
  }

  export type ProgramSopUncheckedUpdateWithoutSopInput = {
    programId?: IntFieldUpdateOperationsInput | number
  }

  export type ProgramSopUncheckedUpdateManyWithoutSopInput = {
    programId?: IntFieldUpdateOperationsInput | number
  }

  export type QuestionCreateManyEvaluationInput = {
    id?: number
    sortOrder?: number
    text: string
    options: string
    correctAnswer: string
    score?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttemptCreateManyEvaluationInput = {
    id?: number
    takerName: string
    takerEmail: string
    takerPhone?: string | null
    takerTitle?: string | null
    startedAt?: Date | string
    submittedAt?: Date | string | null
    score?: number | null
    maxScore?: number | null
  }

  export type QuestionUpdateWithoutEvaluationInput = {
    sortOrder?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    options?: StringFieldUpdateOperationsInput | string
    correctAnswer?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attemptAnswers?: AttemptAnswerUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutEvaluationInput = {
    id?: IntFieldUpdateOperationsInput | number
    sortOrder?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    options?: StringFieldUpdateOperationsInput | string
    correctAnswer?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attemptAnswers?: AttemptAnswerUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateManyWithoutEvaluationInput = {
    id?: IntFieldUpdateOperationsInput | number
    sortOrder?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    options?: StringFieldUpdateOperationsInput | string
    correctAnswer?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttemptUpdateWithoutEvaluationInput = {
    takerName?: StringFieldUpdateOperationsInput | string
    takerEmail?: StringFieldUpdateOperationsInput | string
    takerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    takerTitle?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    maxScore?: NullableIntFieldUpdateOperationsInput | number | null
    answers?: AttemptAnswerUpdateManyWithoutAttemptNestedInput
  }

  export type AttemptUncheckedUpdateWithoutEvaluationInput = {
    id?: IntFieldUpdateOperationsInput | number
    takerName?: StringFieldUpdateOperationsInput | string
    takerEmail?: StringFieldUpdateOperationsInput | string
    takerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    takerTitle?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    maxScore?: NullableIntFieldUpdateOperationsInput | number | null
    answers?: AttemptAnswerUncheckedUpdateManyWithoutAttemptNestedInput
  }

  export type AttemptUncheckedUpdateManyWithoutEvaluationInput = {
    id?: IntFieldUpdateOperationsInput | number
    takerName?: StringFieldUpdateOperationsInput | string
    takerEmail?: StringFieldUpdateOperationsInput | string
    takerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    takerTitle?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    maxScore?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AttemptAnswerCreateManyQuestionInput = {
    id?: number
    attemptId: number
    answer?: string | null
    isCorrect?: boolean
  }

  export type AttemptAnswerUpdateWithoutQuestionInput = {
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    attempt?: AttemptUpdateOneRequiredWithoutAnswersNestedInput
  }

  export type AttemptAnswerUncheckedUpdateWithoutQuestionInput = {
    id?: IntFieldUpdateOperationsInput | number
    attemptId?: IntFieldUpdateOperationsInput | number
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AttemptAnswerUncheckedUpdateManyWithoutQuestionInput = {
    id?: IntFieldUpdateOperationsInput | number
    attemptId?: IntFieldUpdateOperationsInput | number
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AttemptAnswerCreateManyAttemptInput = {
    id?: number
    questionId: number
    answer?: string | null
    isCorrect?: boolean
  }

  export type AttemptAnswerUpdateWithoutAttemptInput = {
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    question?: QuestionUpdateOneRequiredWithoutAttemptAnswersNestedInput
  }

  export type AttemptAnswerUncheckedUpdateWithoutAttemptInput = {
    id?: IntFieldUpdateOperationsInput | number
    questionId?: IntFieldUpdateOperationsInput | number
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AttemptAnswerUncheckedUpdateManyWithoutAttemptInput = {
    id?: IntFieldUpdateOperationsInput | number
    questionId?: IntFieldUpdateOperationsInput | number
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}