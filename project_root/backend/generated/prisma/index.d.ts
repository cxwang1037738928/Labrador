
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Profile
 * 
 */
export type Profile = $Result.DefaultSelection<Prisma.$ProfilePayload>
/**
 * Model Organization
 * 
 */
export type Organization = $Result.DefaultSelection<Prisma.$OrganizationPayload>
/**
 * Model PointsTransaction
 * 
 */
export type PointsTransaction = $Result.DefaultSelection<Prisma.$PointsTransactionPayload>
/**
 * Model Image
 * 
 */
export type Image = $Result.DefaultSelection<Prisma.$ImagePayload>
/**
 * Model Annotation
 * 
 */
export type Annotation = $Result.DefaultSelection<Prisma.$AnnotationPayload>
/**
 * Model ImageVerification
 * 
 */
export type ImageVerification = $Result.DefaultSelection<Prisma.$ImageVerificationPayload>
/**
 * Model Dataset
 * 
 */
export type Dataset = $Result.DefaultSelection<Prisma.$DatasetPayload>

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
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

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
   * `prisma.profile`: Exposes CRUD operations for the **Profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profile.findMany()
    * ```
    */
  get profile(): Prisma.ProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.organization`: Exposes CRUD operations for the **Organization** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organizations
    * const organizations = await prisma.organization.findMany()
    * ```
    */
  get organization(): Prisma.OrganizationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pointsTransaction`: Exposes CRUD operations for the **PointsTransaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PointsTransactions
    * const pointsTransactions = await prisma.pointsTransaction.findMany()
    * ```
    */
  get pointsTransaction(): Prisma.PointsTransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.image`: Exposes CRUD operations for the **Image** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Images
    * const images = await prisma.image.findMany()
    * ```
    */
  get image(): Prisma.ImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.annotation`: Exposes CRUD operations for the **Annotation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Annotations
    * const annotations = await prisma.annotation.findMany()
    * ```
    */
  get annotation(): Prisma.AnnotationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.imageVerification`: Exposes CRUD operations for the **ImageVerification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ImageVerifications
    * const imageVerifications = await prisma.imageVerification.findMany()
    * ```
    */
  get imageVerification(): Prisma.ImageVerificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dataset`: Exposes CRUD operations for the **Dataset** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Datasets
    * const datasets = await prisma.dataset.findMany()
    * ```
    */
  get dataset(): Prisma.DatasetDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
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
      (Without<T, U> & U) | (Without<U, T> & T)
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
    User: 'User',
    Profile: 'Profile',
    Organization: 'Organization',
    PointsTransaction: 'PointsTransaction',
    Image: 'Image',
    Annotation: 'Annotation',
    ImageVerification: 'ImageVerification',
    Dataset: 'Dataset'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "profile" | "organization" | "pointsTransaction" | "image" | "annotation" | "imageVerification" | "dataset"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Profile: {
        payload: Prisma.$ProfilePayload<ExtArgs>
        fields: Prisma.ProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findFirst: {
            args: Prisma.ProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findMany: {
            args: Prisma.ProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          create: {
            args: Prisma.ProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          createMany: {
            args: Prisma.ProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          delete: {
            args: Prisma.ProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          update: {
            args: Prisma.ProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          deleteMany: {
            args: Prisma.ProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          upsert: {
            args: Prisma.ProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          aggregate: {
            args: Prisma.ProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfile>
          }
          groupBy: {
            args: Prisma.ProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfileCountArgs<ExtArgs>
            result: $Utils.Optional<ProfileCountAggregateOutputType> | number
          }
        }
      }
      Organization: {
        payload: Prisma.$OrganizationPayload<ExtArgs>
        fields: Prisma.OrganizationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrganizationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrganizationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findFirst: {
            args: Prisma.OrganizationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrganizationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findMany: {
            args: Prisma.OrganizationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          create: {
            args: Prisma.OrganizationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          createMany: {
            args: Prisma.OrganizationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrganizationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          delete: {
            args: Prisma.OrganizationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          update: {
            args: Prisma.OrganizationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          deleteMany: {
            args: Prisma.OrganizationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrganizationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrganizationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          upsert: {
            args: Prisma.OrganizationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          aggregate: {
            args: Prisma.OrganizationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganization>
          }
          groupBy: {
            args: Prisma.OrganizationGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganizationGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrganizationCountArgs<ExtArgs>
            result: $Utils.Optional<OrganizationCountAggregateOutputType> | number
          }
        }
      }
      PointsTransaction: {
        payload: Prisma.$PointsTransactionPayload<ExtArgs>
        fields: Prisma.PointsTransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PointsTransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointsTransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PointsTransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointsTransactionPayload>
          }
          findFirst: {
            args: Prisma.PointsTransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointsTransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PointsTransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointsTransactionPayload>
          }
          findMany: {
            args: Prisma.PointsTransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointsTransactionPayload>[]
          }
          create: {
            args: Prisma.PointsTransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointsTransactionPayload>
          }
          createMany: {
            args: Prisma.PointsTransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PointsTransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointsTransactionPayload>[]
          }
          delete: {
            args: Prisma.PointsTransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointsTransactionPayload>
          }
          update: {
            args: Prisma.PointsTransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointsTransactionPayload>
          }
          deleteMany: {
            args: Prisma.PointsTransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PointsTransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PointsTransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointsTransactionPayload>[]
          }
          upsert: {
            args: Prisma.PointsTransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointsTransactionPayload>
          }
          aggregate: {
            args: Prisma.PointsTransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePointsTransaction>
          }
          groupBy: {
            args: Prisma.PointsTransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PointsTransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PointsTransactionCountArgs<ExtArgs>
            result: $Utils.Optional<PointsTransactionCountAggregateOutputType> | number
          }
        }
      }
      Image: {
        payload: Prisma.$ImagePayload<ExtArgs>
        fields: Prisma.ImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findFirst: {
            args: Prisma.ImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findMany: {
            args: Prisma.ImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          create: {
            args: Prisma.ImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          createMany: {
            args: Prisma.ImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          delete: {
            args: Prisma.ImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          update: {
            args: Prisma.ImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          deleteMany: {
            args: Prisma.ImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          upsert: {
            args: Prisma.ImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          aggregate: {
            args: Prisma.ImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImage>
          }
          groupBy: {
            args: Prisma.ImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImageCountArgs<ExtArgs>
            result: $Utils.Optional<ImageCountAggregateOutputType> | number
          }
        }
      }
      Annotation: {
        payload: Prisma.$AnnotationPayload<ExtArgs>
        fields: Prisma.AnnotationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnnotationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnotationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnnotationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnotationPayload>
          }
          findFirst: {
            args: Prisma.AnnotationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnotationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnnotationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnotationPayload>
          }
          findMany: {
            args: Prisma.AnnotationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnotationPayload>[]
          }
          create: {
            args: Prisma.AnnotationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnotationPayload>
          }
          createMany: {
            args: Prisma.AnnotationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnnotationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnotationPayload>[]
          }
          delete: {
            args: Prisma.AnnotationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnotationPayload>
          }
          update: {
            args: Prisma.AnnotationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnotationPayload>
          }
          deleteMany: {
            args: Prisma.AnnotationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnnotationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnnotationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnotationPayload>[]
          }
          upsert: {
            args: Prisma.AnnotationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnotationPayload>
          }
          aggregate: {
            args: Prisma.AnnotationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnnotation>
          }
          groupBy: {
            args: Prisma.AnnotationGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnnotationGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnnotationCountArgs<ExtArgs>
            result: $Utils.Optional<AnnotationCountAggregateOutputType> | number
          }
        }
      }
      ImageVerification: {
        payload: Prisma.$ImageVerificationPayload<ExtArgs>
        fields: Prisma.ImageVerificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImageVerificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageVerificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImageVerificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageVerificationPayload>
          }
          findFirst: {
            args: Prisma.ImageVerificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageVerificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImageVerificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageVerificationPayload>
          }
          findMany: {
            args: Prisma.ImageVerificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageVerificationPayload>[]
          }
          create: {
            args: Prisma.ImageVerificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageVerificationPayload>
          }
          createMany: {
            args: Prisma.ImageVerificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ImageVerificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageVerificationPayload>[]
          }
          delete: {
            args: Prisma.ImageVerificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageVerificationPayload>
          }
          update: {
            args: Prisma.ImageVerificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageVerificationPayload>
          }
          deleteMany: {
            args: Prisma.ImageVerificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImageVerificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ImageVerificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageVerificationPayload>[]
          }
          upsert: {
            args: Prisma.ImageVerificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageVerificationPayload>
          }
          aggregate: {
            args: Prisma.ImageVerificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImageVerification>
          }
          groupBy: {
            args: Prisma.ImageVerificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImageVerificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImageVerificationCountArgs<ExtArgs>
            result: $Utils.Optional<ImageVerificationCountAggregateOutputType> | number
          }
        }
      }
      Dataset: {
        payload: Prisma.$DatasetPayload<ExtArgs>
        fields: Prisma.DatasetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DatasetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DatasetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetPayload>
          }
          findFirst: {
            args: Prisma.DatasetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DatasetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetPayload>
          }
          findMany: {
            args: Prisma.DatasetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetPayload>[]
          }
          create: {
            args: Prisma.DatasetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetPayload>
          }
          createMany: {
            args: Prisma.DatasetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DatasetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetPayload>[]
          }
          delete: {
            args: Prisma.DatasetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetPayload>
          }
          update: {
            args: Prisma.DatasetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetPayload>
          }
          deleteMany: {
            args: Prisma.DatasetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DatasetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DatasetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetPayload>[]
          }
          upsert: {
            args: Prisma.DatasetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetPayload>
          }
          aggregate: {
            args: Prisma.DatasetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDataset>
          }
          groupBy: {
            args: Prisma.DatasetGroupByArgs<ExtArgs>
            result: $Utils.Optional<DatasetGroupByOutputType>[]
          }
          count: {
            args: Prisma.DatasetCountArgs<ExtArgs>
            result: $Utils.Optional<DatasetCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    profile?: ProfileOmit
    organization?: OrganizationOmit
    pointsTransaction?: PointsTransactionOmit
    image?: ImageOmit
    annotation?: AnnotationOmit
    imageVerification?: ImageVerificationOmit
    dataset?: DatasetOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    images: number
    annotations: number
    ImageVerification: number
    organizations: number
    ledOrganization: number
    userTransactions: number
    cashierTransactions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | UserCountOutputTypeCountImagesArgs
    annotations?: boolean | UserCountOutputTypeCountAnnotationsArgs
    ImageVerification?: boolean | UserCountOutputTypeCountImageVerificationArgs
    organizations?: boolean | UserCountOutputTypeCountOrganizationsArgs
    ledOrganization?: boolean | UserCountOutputTypeCountLedOrganizationArgs
    userTransactions?: boolean | UserCountOutputTypeCountUserTransactionsArgs
    cashierTransactions?: boolean | UserCountOutputTypeCountCashierTransactionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAnnotationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnnotationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountImageVerificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageVerificationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrganizationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLedOrganizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PointsTransactionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCashierTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PointsTransactionWhereInput
  }


  /**
   * Count Type OrganizationCountOutputType
   */

  export type OrganizationCountOutputType = {
    members: number
    images: number
  }

  export type OrganizationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | OrganizationCountOutputTypeCountMembersArgs
    images?: boolean | OrganizationCountOutputTypeCountImagesArgs
  }

  // Custom InputTypes
  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationCountOutputType
     */
    select?: OrganizationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
  }


  /**
   * Count Type ImageCountOutputType
   */

  export type ImageCountOutputType = {
    annotations: number
    verifications: number
  }

  export type ImageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    annotations?: boolean | ImageCountOutputTypeCountAnnotationsArgs
    verifications?: boolean | ImageCountOutputTypeCountVerificationsArgs
  }

  // Custom InputTypes
  /**
   * ImageCountOutputType without action
   */
  export type ImageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageCountOutputType
     */
    select?: ImageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ImageCountOutputType without action
   */
  export type ImageCountOutputTypeCountAnnotationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnnotationWhereInput
  }

  /**
   * ImageCountOutputType without action
   */
  export type ImageCountOutputTypeCountVerificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageVerificationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    points: number | null
    validityPercentage: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    points: number | null
    validityPercentage: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    role: string | null
    points: number | null
    password: string | null
    validityPercentage: number | null
    suspicious: boolean | null
    isActive: boolean | null
    activationToken: string | null
    resetToken: string | null
    resetTokenExpiry: Date | null
    createdAt: Date | null
    lastlogin: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    role: string | null
    points: number | null
    password: string | null
    validityPercentage: number | null
    suspicious: boolean | null
    isActive: boolean | null
    activationToken: string | null
    resetToken: string | null
    resetTokenExpiry: Date | null
    createdAt: Date | null
    lastlogin: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    role: number
    points: number
    password: number
    validityPercentage: number
    suspicious: number
    isActive: number
    activationToken: number
    resetToken: number
    resetTokenExpiry: number
    createdAt: number
    lastlogin: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    points?: true
    validityPercentage?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    points?: true
    validityPercentage?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    role?: true
    points?: true
    password?: true
    validityPercentage?: true
    suspicious?: true
    isActive?: true
    activationToken?: true
    resetToken?: true
    resetTokenExpiry?: true
    createdAt?: true
    lastlogin?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    role?: true
    points?: true
    password?: true
    validityPercentage?: true
    suspicious?: true
    isActive?: true
    activationToken?: true
    resetToken?: true
    resetTokenExpiry?: true
    createdAt?: true
    lastlogin?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    role?: true
    points?: true
    password?: true
    validityPercentage?: true
    suspicious?: true
    isActive?: true
    activationToken?: true
    resetToken?: true
    resetTokenExpiry?: true
    createdAt?: true
    lastlogin?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    role: string | null
    points: number
    password: string
    validityPercentage: number | null
    suspicious: boolean
    isActive: boolean
    activationToken: string | null
    resetToken: string | null
    resetTokenExpiry: Date | null
    createdAt: Date
    lastlogin: Date | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    points?: boolean
    password?: boolean
    validityPercentage?: boolean
    suspicious?: boolean
    isActive?: boolean
    activationToken?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
    createdAt?: boolean
    lastlogin?: boolean
    images?: boolean | User$imagesArgs<ExtArgs>
    annotations?: boolean | User$annotationsArgs<ExtArgs>
    ImageVerification?: boolean | User$ImageVerificationArgs<ExtArgs>
    profile?: boolean | User$profileArgs<ExtArgs>
    organizations?: boolean | User$organizationsArgs<ExtArgs>
    ledOrganization?: boolean | User$ledOrganizationArgs<ExtArgs>
    userTransactions?: boolean | User$userTransactionsArgs<ExtArgs>
    cashierTransactions?: boolean | User$cashierTransactionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    points?: boolean
    password?: boolean
    validityPercentage?: boolean
    suspicious?: boolean
    isActive?: boolean
    activationToken?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
    createdAt?: boolean
    lastlogin?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    points?: boolean
    password?: boolean
    validityPercentage?: boolean
    suspicious?: boolean
    isActive?: boolean
    activationToken?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
    createdAt?: boolean
    lastlogin?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    points?: boolean
    password?: boolean
    validityPercentage?: boolean
    suspicious?: boolean
    isActive?: boolean
    activationToken?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
    createdAt?: boolean
    lastlogin?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "role" | "points" | "password" | "validityPercentage" | "suspicious" | "isActive" | "activationToken" | "resetToken" | "resetTokenExpiry" | "createdAt" | "lastlogin", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | User$imagesArgs<ExtArgs>
    annotations?: boolean | User$annotationsArgs<ExtArgs>
    ImageVerification?: boolean | User$ImageVerificationArgs<ExtArgs>
    profile?: boolean | User$profileArgs<ExtArgs>
    organizations?: boolean | User$organizationsArgs<ExtArgs>
    ledOrganization?: boolean | User$ledOrganizationArgs<ExtArgs>
    userTransactions?: boolean | User$userTransactionsArgs<ExtArgs>
    cashierTransactions?: boolean | User$cashierTransactionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      images: Prisma.$ImagePayload<ExtArgs>[]
      annotations: Prisma.$AnnotationPayload<ExtArgs>[]
      ImageVerification: Prisma.$ImageVerificationPayload<ExtArgs>[]
      profile: Prisma.$ProfilePayload<ExtArgs> | null
      organizations: Prisma.$OrganizationPayload<ExtArgs>[]
      ledOrganization: Prisma.$OrganizationPayload<ExtArgs>[]
      userTransactions: Prisma.$PointsTransactionPayload<ExtArgs>[]
      cashierTransactions: Prisma.$PointsTransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      role: string | null
      points: number
      password: string
      validityPercentage: number | null
      suspicious: boolean
      isActive: boolean
      activationToken: string | null
      resetToken: string | null
      resetTokenExpiry: Date | null
      createdAt: Date
      lastlogin: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

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
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    images<T extends User$imagesArgs<ExtArgs> = {}>(args?: Subset<T, User$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    annotations<T extends User$annotationsArgs<ExtArgs> = {}>(args?: Subset<T, User$annotationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnotationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ImageVerification<T extends User$ImageVerificationArgs<ExtArgs> = {}>(args?: Subset<T, User$ImageVerificationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImageVerificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    profile<T extends User$profileArgs<ExtArgs> = {}>(args?: Subset<T, User$profileArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    organizations<T extends User$organizationsArgs<ExtArgs> = {}>(args?: Subset<T, User$organizationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ledOrganization<T extends User$ledOrganizationArgs<ExtArgs> = {}>(args?: Subset<T, User$ledOrganizationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userTransactions<T extends User$userTransactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$userTransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointsTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cashierTransactions<T extends User$cashierTransactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$cashierTransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointsTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly points: FieldRef<"User", 'Int'>
    readonly password: FieldRef<"User", 'String'>
    readonly validityPercentage: FieldRef<"User", 'Float'>
    readonly suspicious: FieldRef<"User", 'Boolean'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly activationToken: FieldRef<"User", 'String'>
    readonly resetToken: FieldRef<"User", 'String'>
    readonly resetTokenExpiry: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly lastlogin: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.images
   */
  export type User$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    cursor?: ImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * User.annotations
   */
  export type User$annotationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annotation
     */
    select?: AnnotationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annotation
     */
    omit?: AnnotationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnotationInclude<ExtArgs> | null
    where?: AnnotationWhereInput
    orderBy?: AnnotationOrderByWithRelationInput | AnnotationOrderByWithRelationInput[]
    cursor?: AnnotationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnnotationScalarFieldEnum | AnnotationScalarFieldEnum[]
  }

  /**
   * User.ImageVerification
   */
  export type User$ImageVerificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageVerification
     */
    select?: ImageVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageVerification
     */
    omit?: ImageVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageVerificationInclude<ExtArgs> | null
    where?: ImageVerificationWhereInput
    orderBy?: ImageVerificationOrderByWithRelationInput | ImageVerificationOrderByWithRelationInput[]
    cursor?: ImageVerificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImageVerificationScalarFieldEnum | ImageVerificationScalarFieldEnum[]
  }

  /**
   * User.profile
   */
  export type User$profileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    where?: ProfileWhereInput
  }

  /**
   * User.organizations
   */
  export type User$organizationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    where?: OrganizationWhereInput
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    cursor?: OrganizationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * User.ledOrganization
   */
  export type User$ledOrganizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    where?: OrganizationWhereInput
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    cursor?: OrganizationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * User.userTransactions
   */
  export type User$userTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointsTransaction
     */
    select?: PointsTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointsTransaction
     */
    omit?: PointsTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointsTransactionInclude<ExtArgs> | null
    where?: PointsTransactionWhereInput
    orderBy?: PointsTransactionOrderByWithRelationInput | PointsTransactionOrderByWithRelationInput[]
    cursor?: PointsTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PointsTransactionScalarFieldEnum | PointsTransactionScalarFieldEnum[]
  }

  /**
   * User.cashierTransactions
   */
  export type User$cashierTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointsTransaction
     */
    select?: PointsTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointsTransaction
     */
    omit?: PointsTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointsTransactionInclude<ExtArgs> | null
    where?: PointsTransactionWhereInput
    orderBy?: PointsTransactionOrderByWithRelationInput | PointsTransactionOrderByWithRelationInput[]
    cursor?: PointsTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PointsTransactionScalarFieldEnum | PointsTransactionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Profile
   */

  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  export type ProfileAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ProfileSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ProfileMinAggregateOutputType = {
    id: number | null
    bio: string | null
    userId: number | null
    image: string | null
  }

  export type ProfileMaxAggregateOutputType = {
    id: number | null
    bio: string | null
    userId: number | null
    image: string | null
  }

  export type ProfileCountAggregateOutputType = {
    id: number
    bio: number
    userId: number
    image: number
    _all: number
  }


  export type ProfileAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ProfileSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ProfileMinAggregateInputType = {
    id?: true
    bio?: true
    userId?: true
    image?: true
  }

  export type ProfileMaxAggregateInputType = {
    id?: true
    bio?: true
    userId?: true
    image?: true
  }

  export type ProfileCountAggregateInputType = {
    id?: true
    bio?: true
    userId?: true
    image?: true
    _all?: true
  }

  export type ProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profile to aggregate.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profiles
    **/
    _count?: true | ProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileMaxAggregateInputType
  }

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>
  }




  export type ProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileWhereInput
    orderBy?: ProfileOrderByWithAggregationInput | ProfileOrderByWithAggregationInput[]
    by: ProfileScalarFieldEnum[] | ProfileScalarFieldEnum
    having?: ProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileCountAggregateInputType | true
    _avg?: ProfileAvgAggregateInputType
    _sum?: ProfileSumAggregateInputType
    _min?: ProfileMinAggregateInputType
    _max?: ProfileMaxAggregateInputType
  }

  export type ProfileGroupByOutputType = {
    id: number
    bio: string
    userId: number
    image: string
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  type GetProfileGroupByPayload<T extends ProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>
        }
      >
    >


  export type ProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bio?: boolean
    userId?: boolean
    image?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bio?: boolean
    userId?: boolean
    image?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bio?: boolean
    userId?: boolean
    image?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectScalar = {
    id?: boolean
    bio?: boolean
    userId?: boolean
    image?: boolean
  }

  export type ProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bio" | "userId" | "image", ExtArgs["result"]["profile"]>
  export type ProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      bio: string
      userId: number
      image: string
    }, ExtArgs["result"]["profile"]>
    composites: {}
  }

  type ProfileGetPayload<S extends boolean | null | undefined | ProfileDefaultArgs> = $Result.GetResult<Prisma.$ProfilePayload, S>

  type ProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfileCountAggregateInputType | true
    }

  export interface ProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profile'], meta: { name: 'Profile' } }
    /**
     * Find zero or one Profile that matches the filter.
     * @param {ProfileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfileFindUniqueArgs>(args: SelectSubset<T, ProfileFindUniqueArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfileFindUniqueOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfileFindFirstArgs>(args?: SelectSubset<T, ProfileFindFirstArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileWithIdOnly = await prisma.profile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfileFindManyArgs>(args?: SelectSubset<T, ProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profile.
     * @param {ProfileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     * 
     */
    create<T extends ProfileCreateArgs>(args: SelectSubset<T, ProfileCreateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profiles.
     * @param {ProfileCreateManyArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfileCreateManyArgs>(args?: SelectSubset<T, ProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Profiles and returns the data saved in the database.
     * @param {ProfileCreateManyAndReturnArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Profile.
     * @param {ProfileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     * 
     */
    delete<T extends ProfileDeleteArgs>(args: SelectSubset<T, ProfileDeleteArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profile.
     * @param {ProfileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfileUpdateArgs>(args: SelectSubset<T, ProfileUpdateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profiles.
     * @param {ProfileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfileDeleteManyArgs>(args?: SelectSubset<T, ProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfileUpdateManyArgs>(args: SelectSubset<T, ProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles and returns the data updated in the database.
     * @param {ProfileUpdateManyAndReturnArgs} args - Arguments to update many Profiles.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Profile.
     * @param {ProfileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
     */
    upsert<T extends ProfileUpsertArgs>(args: SelectSubset<T, ProfileUpsertArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends ProfileCountArgs>(
      args?: Subset<T, ProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfileAggregateArgs>(args: Subset<T, ProfileAggregateArgs>): Prisma.PrismaPromise<GetProfileAggregateType<T>>

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileGroupByArgs} args - Group by arguments.
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
      T extends ProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profile model
   */
  readonly fields: ProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Profile model
   */
  interface ProfileFieldRefs {
    readonly id: FieldRef<"Profile", 'Int'>
    readonly bio: FieldRef<"Profile", 'String'>
    readonly userId: FieldRef<"Profile", 'Int'>
    readonly image: FieldRef<"Profile", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Profile findUnique
   */
  export type ProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findUniqueOrThrow
   */
  export type ProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findFirst
   */
  export type ProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findFirstOrThrow
   */
  export type ProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findMany
   */
  export type ProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile create
   */
  export type ProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a Profile.
     */
    data: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
  }

  /**
   * Profile createMany
   */
  export type ProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profile createManyAndReturn
   */
  export type ProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Profile update
   */
  export type ProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a Profile.
     */
    data: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
    /**
     * Choose, which Profile to update.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile updateMany
   */
  export type ProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
  }

  /**
   * Profile updateManyAndReturn
   */
  export type ProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Profile upsert
   */
  export type ProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the Profile to update in case it exists.
     */
    where: ProfileWhereUniqueInput
    /**
     * In case the Profile found by the `where` argument doesn't exist, create a new Profile with this data.
     */
    create: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
    /**
     * In case the Profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
  }

  /**
   * Profile delete
   */
  export type ProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter which Profile to delete.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile deleteMany
   */
  export type ProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profiles to delete
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to delete.
     */
    limit?: number
  }

  /**
   * Profile without action
   */
  export type ProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
  }


  /**
   * Model Organization
   */

  export type AggregateOrganization = {
    _count: OrganizationCountAggregateOutputType | null
    _avg: OrganizationAvgAggregateOutputType | null
    _sum: OrganizationSumAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  export type OrganizationAvgAggregateOutputType = {
    id: number | null
    leaderId: number | null
  }

  export type OrganizationSumAggregateOutputType = {
    id: number | null
    leaderId: number | null
  }

  export type OrganizationMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    leaderId: number | null
  }

  export type OrganizationMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    leaderId: number | null
  }

  export type OrganizationCountAggregateOutputType = {
    id: number
    name: number
    description: number
    leaderId: number
    _all: number
  }


  export type OrganizationAvgAggregateInputType = {
    id?: true
    leaderId?: true
  }

  export type OrganizationSumAggregateInputType = {
    id?: true
    leaderId?: true
  }

  export type OrganizationMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    leaderId?: true
  }

  export type OrganizationMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    leaderId?: true
  }

  export type OrganizationCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    leaderId?: true
    _all?: true
  }

  export type OrganizationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organization to aggregate.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Organizations
    **/
    _count?: true | OrganizationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrganizationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrganizationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizationMaxAggregateInputType
  }

  export type GetOrganizationAggregateType<T extends OrganizationAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganization[P]>
      : GetScalarType<T[P], AggregateOrganization[P]>
  }




  export type OrganizationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationWhereInput
    orderBy?: OrganizationOrderByWithAggregationInput | OrganizationOrderByWithAggregationInput[]
    by: OrganizationScalarFieldEnum[] | OrganizationScalarFieldEnum
    having?: OrganizationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizationCountAggregateInputType | true
    _avg?: OrganizationAvgAggregateInputType
    _sum?: OrganizationSumAggregateInputType
    _min?: OrganizationMinAggregateInputType
    _max?: OrganizationMaxAggregateInputType
  }

  export type OrganizationGroupByOutputType = {
    id: number
    name: string
    description: string | null
    leaderId: number
    _count: OrganizationCountAggregateOutputType | null
    _avg: OrganizationAvgAggregateOutputType | null
    _sum: OrganizationSumAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  type GetOrganizationGroupByPayload<T extends OrganizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
        }
      >
    >


  export type OrganizationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    leaderId?: boolean
    leader?: boolean | UserDefaultArgs<ExtArgs>
    members?: boolean | Organization$membersArgs<ExtArgs>
    images?: boolean | Organization$imagesArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    leaderId?: boolean
    leader?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    leaderId?: boolean
    leader?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    leaderId?: boolean
  }

  export type OrganizationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "leaderId", ExtArgs["result"]["organization"]>
  export type OrganizationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leader?: boolean | UserDefaultArgs<ExtArgs>
    members?: boolean | Organization$membersArgs<ExtArgs>
    images?: boolean | Organization$imagesArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrganizationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leader?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OrganizationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leader?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $OrganizationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Organization"
    objects: {
      leader: Prisma.$UserPayload<ExtArgs>
      members: Prisma.$UserPayload<ExtArgs>[]
      images: Prisma.$ImagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      leaderId: number
    }, ExtArgs["result"]["organization"]>
    composites: {}
  }

  type OrganizationGetPayload<S extends boolean | null | undefined | OrganizationDefaultArgs> = $Result.GetResult<Prisma.$OrganizationPayload, S>

  type OrganizationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrganizationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrganizationCountAggregateInputType | true
    }

  export interface OrganizationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Organization'], meta: { name: 'Organization' } }
    /**
     * Find zero or one Organization that matches the filter.
     * @param {OrganizationFindUniqueArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganizationFindUniqueArgs>(args: SelectSubset<T, OrganizationFindUniqueArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Organization that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrganizationFindUniqueOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganizationFindUniqueOrThrowArgs>(args: SelectSubset<T, OrganizationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganizationFindFirstArgs>(args?: SelectSubset<T, OrganizationFindFirstArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganizationFindFirstOrThrowArgs>(args?: SelectSubset<T, OrganizationFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizations
     * const organizations = await prisma.organization.findMany()
     * 
     * // Get first 10 Organizations
     * const organizations = await prisma.organization.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organizationWithIdOnly = await prisma.organization.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrganizationFindManyArgs>(args?: SelectSubset<T, OrganizationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Organization.
     * @param {OrganizationCreateArgs} args - Arguments to create a Organization.
     * @example
     * // Create one Organization
     * const Organization = await prisma.organization.create({
     *   data: {
     *     // ... data to create a Organization
     *   }
     * })
     * 
     */
    create<T extends OrganizationCreateArgs>(args: SelectSubset<T, OrganizationCreateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Organizations.
     * @param {OrganizationCreateManyArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrganizationCreateManyArgs>(args?: SelectSubset<T, OrganizationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Organizations and returns the data saved in the database.
     * @param {OrganizationCreateManyAndReturnArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Organizations and only return the `id`
     * const organizationWithIdOnly = await prisma.organization.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrganizationCreateManyAndReturnArgs>(args?: SelectSubset<T, OrganizationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Organization.
     * @param {OrganizationDeleteArgs} args - Arguments to delete one Organization.
     * @example
     * // Delete one Organization
     * const Organization = await prisma.organization.delete({
     *   where: {
     *     // ... filter to delete one Organization
     *   }
     * })
     * 
     */
    delete<T extends OrganizationDeleteArgs>(args: SelectSubset<T, OrganizationDeleteArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Organization.
     * @param {OrganizationUpdateArgs} args - Arguments to update one Organization.
     * @example
     * // Update one Organization
     * const organization = await prisma.organization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrganizationUpdateArgs>(args: SelectSubset<T, OrganizationUpdateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Organizations.
     * @param {OrganizationDeleteManyArgs} args - Arguments to filter Organizations to delete.
     * @example
     * // Delete a few Organizations
     * const { count } = await prisma.organization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrganizationDeleteManyArgs>(args?: SelectSubset<T, OrganizationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrganizationUpdateManyArgs>(args: SelectSubset<T, OrganizationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations and returns the data updated in the database.
     * @param {OrganizationUpdateManyAndReturnArgs} args - Arguments to update many Organizations.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Organizations and only return the `id`
     * const organizationWithIdOnly = await prisma.organization.updateManyAndReturn({
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
    updateManyAndReturn<T extends OrganizationUpdateManyAndReturnArgs>(args: SelectSubset<T, OrganizationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Organization.
     * @param {OrganizationUpsertArgs} args - Arguments to update or create a Organization.
     * @example
     * // Update or create a Organization
     * const organization = await prisma.organization.upsert({
     *   create: {
     *     // ... data to create a Organization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organization we want to update
     *   }
     * })
     */
    upsert<T extends OrganizationUpsertArgs>(args: SelectSubset<T, OrganizationUpsertArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationCountArgs} args - Arguments to filter Organizations to count.
     * @example
     * // Count the number of Organizations
     * const count = await prisma.organization.count({
     *   where: {
     *     // ... the filter for the Organizations we want to count
     *   }
     * })
    **/
    count<T extends OrganizationCountArgs>(
      args?: Subset<T, OrganizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrganizationAggregateArgs>(args: Subset<T, OrganizationAggregateArgs>): Prisma.PrismaPromise<GetOrganizationAggregateType<T>>

    /**
     * Group by Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationGroupByArgs} args - Group by arguments.
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
      T extends OrganizationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizationGroupByArgs['orderBy'] }
        : { orderBy?: OrganizationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrganizationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Organization model
   */
  readonly fields: OrganizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Organization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganizationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    leader<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    members<T extends Organization$membersArgs<ExtArgs> = {}>(args?: Subset<T, Organization$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    images<T extends Organization$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Organization$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Organization model
   */
  interface OrganizationFieldRefs {
    readonly id: FieldRef<"Organization", 'Int'>
    readonly name: FieldRef<"Organization", 'String'>
    readonly description: FieldRef<"Organization", 'String'>
    readonly leaderId: FieldRef<"Organization", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Organization findUnique
   */
  export type OrganizationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findUniqueOrThrow
   */
  export type OrganizationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findFirst
   */
  export type OrganizationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findFirstOrThrow
   */
  export type OrganizationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findMany
   */
  export type OrganizationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organizations to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization create
   */
  export type OrganizationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to create a Organization.
     */
    data: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
  }

  /**
   * Organization createMany
   */
  export type OrganizationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organization createManyAndReturn
   */
  export type OrganizationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Organization update
   */
  export type OrganizationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to update a Organization.
     */
    data: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
    /**
     * Choose, which Organization to update.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization updateMany
   */
  export type OrganizationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Organizations.
     */
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to update.
     */
    limit?: number
  }

  /**
   * Organization updateManyAndReturn
   */
  export type OrganizationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * The data used to update Organizations.
     */
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Organization upsert
   */
  export type OrganizationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The filter to search for the Organization to update in case it exists.
     */
    where: OrganizationWhereUniqueInput
    /**
     * In case the Organization found by the `where` argument doesn't exist, create a new Organization with this data.
     */
    create: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
    /**
     * In case the Organization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
  }

  /**
   * Organization delete
   */
  export type OrganizationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter which Organization to delete.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization deleteMany
   */
  export type OrganizationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organizations to delete
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to delete.
     */
    limit?: number
  }

  /**
   * Organization.members
   */
  export type Organization$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Organization.images
   */
  export type Organization$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    cursor?: ImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Organization without action
   */
  export type OrganizationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
  }


  /**
   * Model PointsTransaction
   */

  export type AggregatePointsTransaction = {
    _count: PointsTransactionCountAggregateOutputType | null
    _avg: PointsTransactionAvgAggregateOutputType | null
    _sum: PointsTransactionSumAggregateOutputType | null
    _min: PointsTransactionMinAggregateOutputType | null
    _max: PointsTransactionMaxAggregateOutputType | null
  }

  export type PointsTransactionAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    cashierId: number | null
    points: number | null
  }

  export type PointsTransactionSumAggregateOutputType = {
    id: number | null
    userId: number | null
    cashierId: number | null
    points: number | null
  }

  export type PointsTransactionMinAggregateOutputType = {
    id: number | null
    userId: number | null
    cashierId: number | null
    points: number | null
    type: string | null
    reason: string | null
    createdAt: Date | null
  }

  export type PointsTransactionMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    cashierId: number | null
    points: number | null
    type: string | null
    reason: string | null
    createdAt: Date | null
  }

  export type PointsTransactionCountAggregateOutputType = {
    id: number
    userId: number
    cashierId: number
    points: number
    type: number
    reason: number
    createdAt: number
    _all: number
  }


  export type PointsTransactionAvgAggregateInputType = {
    id?: true
    userId?: true
    cashierId?: true
    points?: true
  }

  export type PointsTransactionSumAggregateInputType = {
    id?: true
    userId?: true
    cashierId?: true
    points?: true
  }

  export type PointsTransactionMinAggregateInputType = {
    id?: true
    userId?: true
    cashierId?: true
    points?: true
    type?: true
    reason?: true
    createdAt?: true
  }

  export type PointsTransactionMaxAggregateInputType = {
    id?: true
    userId?: true
    cashierId?: true
    points?: true
    type?: true
    reason?: true
    createdAt?: true
  }

  export type PointsTransactionCountAggregateInputType = {
    id?: true
    userId?: true
    cashierId?: true
    points?: true
    type?: true
    reason?: true
    createdAt?: true
    _all?: true
  }

  export type PointsTransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PointsTransaction to aggregate.
     */
    where?: PointsTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PointsTransactions to fetch.
     */
    orderBy?: PointsTransactionOrderByWithRelationInput | PointsTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PointsTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PointsTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PointsTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PointsTransactions
    **/
    _count?: true | PointsTransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PointsTransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PointsTransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PointsTransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PointsTransactionMaxAggregateInputType
  }

  export type GetPointsTransactionAggregateType<T extends PointsTransactionAggregateArgs> = {
        [P in keyof T & keyof AggregatePointsTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePointsTransaction[P]>
      : GetScalarType<T[P], AggregatePointsTransaction[P]>
  }




  export type PointsTransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PointsTransactionWhereInput
    orderBy?: PointsTransactionOrderByWithAggregationInput | PointsTransactionOrderByWithAggregationInput[]
    by: PointsTransactionScalarFieldEnum[] | PointsTransactionScalarFieldEnum
    having?: PointsTransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PointsTransactionCountAggregateInputType | true
    _avg?: PointsTransactionAvgAggregateInputType
    _sum?: PointsTransactionSumAggregateInputType
    _min?: PointsTransactionMinAggregateInputType
    _max?: PointsTransactionMaxAggregateInputType
  }

  export type PointsTransactionGroupByOutputType = {
    id: number
    userId: number
    cashierId: number
    points: number
    type: string
    reason: string | null
    createdAt: Date
    _count: PointsTransactionCountAggregateOutputType | null
    _avg: PointsTransactionAvgAggregateOutputType | null
    _sum: PointsTransactionSumAggregateOutputType | null
    _min: PointsTransactionMinAggregateOutputType | null
    _max: PointsTransactionMaxAggregateOutputType | null
  }

  type GetPointsTransactionGroupByPayload<T extends PointsTransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PointsTransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PointsTransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PointsTransactionGroupByOutputType[P]>
            : GetScalarType<T[P], PointsTransactionGroupByOutputType[P]>
        }
      >
    >


  export type PointsTransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    cashierId?: boolean
    points?: boolean
    type?: boolean
    reason?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    cashier?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pointsTransaction"]>

  export type PointsTransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    cashierId?: boolean
    points?: boolean
    type?: boolean
    reason?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    cashier?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pointsTransaction"]>

  export type PointsTransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    cashierId?: boolean
    points?: boolean
    type?: boolean
    reason?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    cashier?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pointsTransaction"]>

  export type PointsTransactionSelectScalar = {
    id?: boolean
    userId?: boolean
    cashierId?: boolean
    points?: boolean
    type?: boolean
    reason?: boolean
    createdAt?: boolean
  }

  export type PointsTransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "cashierId" | "points" | "type" | "reason" | "createdAt", ExtArgs["result"]["pointsTransaction"]>
  export type PointsTransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    cashier?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PointsTransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    cashier?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PointsTransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    cashier?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PointsTransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PointsTransaction"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      cashier: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      cashierId: number
      points: number
      type: string
      reason: string | null
      createdAt: Date
    }, ExtArgs["result"]["pointsTransaction"]>
    composites: {}
  }

  type PointsTransactionGetPayload<S extends boolean | null | undefined | PointsTransactionDefaultArgs> = $Result.GetResult<Prisma.$PointsTransactionPayload, S>

  type PointsTransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PointsTransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PointsTransactionCountAggregateInputType | true
    }

  export interface PointsTransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PointsTransaction'], meta: { name: 'PointsTransaction' } }
    /**
     * Find zero or one PointsTransaction that matches the filter.
     * @param {PointsTransactionFindUniqueArgs} args - Arguments to find a PointsTransaction
     * @example
     * // Get one PointsTransaction
     * const pointsTransaction = await prisma.pointsTransaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PointsTransactionFindUniqueArgs>(args: SelectSubset<T, PointsTransactionFindUniqueArgs<ExtArgs>>): Prisma__PointsTransactionClient<$Result.GetResult<Prisma.$PointsTransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PointsTransaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PointsTransactionFindUniqueOrThrowArgs} args - Arguments to find a PointsTransaction
     * @example
     * // Get one PointsTransaction
     * const pointsTransaction = await prisma.pointsTransaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PointsTransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, PointsTransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PointsTransactionClient<$Result.GetResult<Prisma.$PointsTransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PointsTransaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointsTransactionFindFirstArgs} args - Arguments to find a PointsTransaction
     * @example
     * // Get one PointsTransaction
     * const pointsTransaction = await prisma.pointsTransaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PointsTransactionFindFirstArgs>(args?: SelectSubset<T, PointsTransactionFindFirstArgs<ExtArgs>>): Prisma__PointsTransactionClient<$Result.GetResult<Prisma.$PointsTransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PointsTransaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointsTransactionFindFirstOrThrowArgs} args - Arguments to find a PointsTransaction
     * @example
     * // Get one PointsTransaction
     * const pointsTransaction = await prisma.pointsTransaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PointsTransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, PointsTransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PointsTransactionClient<$Result.GetResult<Prisma.$PointsTransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PointsTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointsTransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PointsTransactions
     * const pointsTransactions = await prisma.pointsTransaction.findMany()
     * 
     * // Get first 10 PointsTransactions
     * const pointsTransactions = await prisma.pointsTransaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pointsTransactionWithIdOnly = await prisma.pointsTransaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PointsTransactionFindManyArgs>(args?: SelectSubset<T, PointsTransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointsTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PointsTransaction.
     * @param {PointsTransactionCreateArgs} args - Arguments to create a PointsTransaction.
     * @example
     * // Create one PointsTransaction
     * const PointsTransaction = await prisma.pointsTransaction.create({
     *   data: {
     *     // ... data to create a PointsTransaction
     *   }
     * })
     * 
     */
    create<T extends PointsTransactionCreateArgs>(args: SelectSubset<T, PointsTransactionCreateArgs<ExtArgs>>): Prisma__PointsTransactionClient<$Result.GetResult<Prisma.$PointsTransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PointsTransactions.
     * @param {PointsTransactionCreateManyArgs} args - Arguments to create many PointsTransactions.
     * @example
     * // Create many PointsTransactions
     * const pointsTransaction = await prisma.pointsTransaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PointsTransactionCreateManyArgs>(args?: SelectSubset<T, PointsTransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PointsTransactions and returns the data saved in the database.
     * @param {PointsTransactionCreateManyAndReturnArgs} args - Arguments to create many PointsTransactions.
     * @example
     * // Create many PointsTransactions
     * const pointsTransaction = await prisma.pointsTransaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PointsTransactions and only return the `id`
     * const pointsTransactionWithIdOnly = await prisma.pointsTransaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PointsTransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, PointsTransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointsTransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PointsTransaction.
     * @param {PointsTransactionDeleteArgs} args - Arguments to delete one PointsTransaction.
     * @example
     * // Delete one PointsTransaction
     * const PointsTransaction = await prisma.pointsTransaction.delete({
     *   where: {
     *     // ... filter to delete one PointsTransaction
     *   }
     * })
     * 
     */
    delete<T extends PointsTransactionDeleteArgs>(args: SelectSubset<T, PointsTransactionDeleteArgs<ExtArgs>>): Prisma__PointsTransactionClient<$Result.GetResult<Prisma.$PointsTransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PointsTransaction.
     * @param {PointsTransactionUpdateArgs} args - Arguments to update one PointsTransaction.
     * @example
     * // Update one PointsTransaction
     * const pointsTransaction = await prisma.pointsTransaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PointsTransactionUpdateArgs>(args: SelectSubset<T, PointsTransactionUpdateArgs<ExtArgs>>): Prisma__PointsTransactionClient<$Result.GetResult<Prisma.$PointsTransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PointsTransactions.
     * @param {PointsTransactionDeleteManyArgs} args - Arguments to filter PointsTransactions to delete.
     * @example
     * // Delete a few PointsTransactions
     * const { count } = await prisma.pointsTransaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PointsTransactionDeleteManyArgs>(args?: SelectSubset<T, PointsTransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PointsTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointsTransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PointsTransactions
     * const pointsTransaction = await prisma.pointsTransaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PointsTransactionUpdateManyArgs>(args: SelectSubset<T, PointsTransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PointsTransactions and returns the data updated in the database.
     * @param {PointsTransactionUpdateManyAndReturnArgs} args - Arguments to update many PointsTransactions.
     * @example
     * // Update many PointsTransactions
     * const pointsTransaction = await prisma.pointsTransaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PointsTransactions and only return the `id`
     * const pointsTransactionWithIdOnly = await prisma.pointsTransaction.updateManyAndReturn({
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
    updateManyAndReturn<T extends PointsTransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, PointsTransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointsTransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PointsTransaction.
     * @param {PointsTransactionUpsertArgs} args - Arguments to update or create a PointsTransaction.
     * @example
     * // Update or create a PointsTransaction
     * const pointsTransaction = await prisma.pointsTransaction.upsert({
     *   create: {
     *     // ... data to create a PointsTransaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PointsTransaction we want to update
     *   }
     * })
     */
    upsert<T extends PointsTransactionUpsertArgs>(args: SelectSubset<T, PointsTransactionUpsertArgs<ExtArgs>>): Prisma__PointsTransactionClient<$Result.GetResult<Prisma.$PointsTransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PointsTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointsTransactionCountArgs} args - Arguments to filter PointsTransactions to count.
     * @example
     * // Count the number of PointsTransactions
     * const count = await prisma.pointsTransaction.count({
     *   where: {
     *     // ... the filter for the PointsTransactions we want to count
     *   }
     * })
    **/
    count<T extends PointsTransactionCountArgs>(
      args?: Subset<T, PointsTransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PointsTransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PointsTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointsTransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PointsTransactionAggregateArgs>(args: Subset<T, PointsTransactionAggregateArgs>): Prisma.PrismaPromise<GetPointsTransactionAggregateType<T>>

    /**
     * Group by PointsTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointsTransactionGroupByArgs} args - Group by arguments.
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
      T extends PointsTransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PointsTransactionGroupByArgs['orderBy'] }
        : { orderBy?: PointsTransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PointsTransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPointsTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PointsTransaction model
   */
  readonly fields: PointsTransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PointsTransaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PointsTransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cashier<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PointsTransaction model
   */
  interface PointsTransactionFieldRefs {
    readonly id: FieldRef<"PointsTransaction", 'Int'>
    readonly userId: FieldRef<"PointsTransaction", 'Int'>
    readonly cashierId: FieldRef<"PointsTransaction", 'Int'>
    readonly points: FieldRef<"PointsTransaction", 'Int'>
    readonly type: FieldRef<"PointsTransaction", 'String'>
    readonly reason: FieldRef<"PointsTransaction", 'String'>
    readonly createdAt: FieldRef<"PointsTransaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PointsTransaction findUnique
   */
  export type PointsTransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointsTransaction
     */
    select?: PointsTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointsTransaction
     */
    omit?: PointsTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointsTransactionInclude<ExtArgs> | null
    /**
     * Filter, which PointsTransaction to fetch.
     */
    where: PointsTransactionWhereUniqueInput
  }

  /**
   * PointsTransaction findUniqueOrThrow
   */
  export type PointsTransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointsTransaction
     */
    select?: PointsTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointsTransaction
     */
    omit?: PointsTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointsTransactionInclude<ExtArgs> | null
    /**
     * Filter, which PointsTransaction to fetch.
     */
    where: PointsTransactionWhereUniqueInput
  }

  /**
   * PointsTransaction findFirst
   */
  export type PointsTransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointsTransaction
     */
    select?: PointsTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointsTransaction
     */
    omit?: PointsTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointsTransactionInclude<ExtArgs> | null
    /**
     * Filter, which PointsTransaction to fetch.
     */
    where?: PointsTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PointsTransactions to fetch.
     */
    orderBy?: PointsTransactionOrderByWithRelationInput | PointsTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PointsTransactions.
     */
    cursor?: PointsTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PointsTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PointsTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PointsTransactions.
     */
    distinct?: PointsTransactionScalarFieldEnum | PointsTransactionScalarFieldEnum[]
  }

  /**
   * PointsTransaction findFirstOrThrow
   */
  export type PointsTransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointsTransaction
     */
    select?: PointsTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointsTransaction
     */
    omit?: PointsTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointsTransactionInclude<ExtArgs> | null
    /**
     * Filter, which PointsTransaction to fetch.
     */
    where?: PointsTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PointsTransactions to fetch.
     */
    orderBy?: PointsTransactionOrderByWithRelationInput | PointsTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PointsTransactions.
     */
    cursor?: PointsTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PointsTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PointsTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PointsTransactions.
     */
    distinct?: PointsTransactionScalarFieldEnum | PointsTransactionScalarFieldEnum[]
  }

  /**
   * PointsTransaction findMany
   */
  export type PointsTransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointsTransaction
     */
    select?: PointsTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointsTransaction
     */
    omit?: PointsTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointsTransactionInclude<ExtArgs> | null
    /**
     * Filter, which PointsTransactions to fetch.
     */
    where?: PointsTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PointsTransactions to fetch.
     */
    orderBy?: PointsTransactionOrderByWithRelationInput | PointsTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PointsTransactions.
     */
    cursor?: PointsTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PointsTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PointsTransactions.
     */
    skip?: number
    distinct?: PointsTransactionScalarFieldEnum | PointsTransactionScalarFieldEnum[]
  }

  /**
   * PointsTransaction create
   */
  export type PointsTransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointsTransaction
     */
    select?: PointsTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointsTransaction
     */
    omit?: PointsTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointsTransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a PointsTransaction.
     */
    data: XOR<PointsTransactionCreateInput, PointsTransactionUncheckedCreateInput>
  }

  /**
   * PointsTransaction createMany
   */
  export type PointsTransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PointsTransactions.
     */
    data: PointsTransactionCreateManyInput | PointsTransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PointsTransaction createManyAndReturn
   */
  export type PointsTransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointsTransaction
     */
    select?: PointsTransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PointsTransaction
     */
    omit?: PointsTransactionOmit<ExtArgs> | null
    /**
     * The data used to create many PointsTransactions.
     */
    data: PointsTransactionCreateManyInput | PointsTransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointsTransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PointsTransaction update
   */
  export type PointsTransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointsTransaction
     */
    select?: PointsTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointsTransaction
     */
    omit?: PointsTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointsTransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a PointsTransaction.
     */
    data: XOR<PointsTransactionUpdateInput, PointsTransactionUncheckedUpdateInput>
    /**
     * Choose, which PointsTransaction to update.
     */
    where: PointsTransactionWhereUniqueInput
  }

  /**
   * PointsTransaction updateMany
   */
  export type PointsTransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PointsTransactions.
     */
    data: XOR<PointsTransactionUpdateManyMutationInput, PointsTransactionUncheckedUpdateManyInput>
    /**
     * Filter which PointsTransactions to update
     */
    where?: PointsTransactionWhereInput
    /**
     * Limit how many PointsTransactions to update.
     */
    limit?: number
  }

  /**
   * PointsTransaction updateManyAndReturn
   */
  export type PointsTransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointsTransaction
     */
    select?: PointsTransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PointsTransaction
     */
    omit?: PointsTransactionOmit<ExtArgs> | null
    /**
     * The data used to update PointsTransactions.
     */
    data: XOR<PointsTransactionUpdateManyMutationInput, PointsTransactionUncheckedUpdateManyInput>
    /**
     * Filter which PointsTransactions to update
     */
    where?: PointsTransactionWhereInput
    /**
     * Limit how many PointsTransactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointsTransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PointsTransaction upsert
   */
  export type PointsTransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointsTransaction
     */
    select?: PointsTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointsTransaction
     */
    omit?: PointsTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointsTransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the PointsTransaction to update in case it exists.
     */
    where: PointsTransactionWhereUniqueInput
    /**
     * In case the PointsTransaction found by the `where` argument doesn't exist, create a new PointsTransaction with this data.
     */
    create: XOR<PointsTransactionCreateInput, PointsTransactionUncheckedCreateInput>
    /**
     * In case the PointsTransaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PointsTransactionUpdateInput, PointsTransactionUncheckedUpdateInput>
  }

  /**
   * PointsTransaction delete
   */
  export type PointsTransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointsTransaction
     */
    select?: PointsTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointsTransaction
     */
    omit?: PointsTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointsTransactionInclude<ExtArgs> | null
    /**
     * Filter which PointsTransaction to delete.
     */
    where: PointsTransactionWhereUniqueInput
  }

  /**
   * PointsTransaction deleteMany
   */
  export type PointsTransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PointsTransactions to delete
     */
    where?: PointsTransactionWhereInput
    /**
     * Limit how many PointsTransactions to delete.
     */
    limit?: number
  }

  /**
   * PointsTransaction without action
   */
  export type PointsTransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointsTransaction
     */
    select?: PointsTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointsTransaction
     */
    omit?: PointsTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointsTransactionInclude<ExtArgs> | null
  }


  /**
   * Model Image
   */

  export type AggregateImage = {
    _count: ImageCountAggregateOutputType | null
    _avg: ImageAvgAggregateOutputType | null
    _sum: ImageSumAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  export type ImageAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    organizationId: number | null
    fileSize: number | null
    width: number | null
    height: number | null
  }

  export type ImageSumAggregateOutputType = {
    id: number | null
    userId: number | null
    organizationId: number | null
    fileSize: number | null
    width: number | null
    height: number | null
  }

  export type ImageMinAggregateOutputType = {
    id: number | null
    userId: number | null
    organizationId: number | null
    filePath: string | null
    fileName: string | null
    fileSize: number | null
    width: number | null
    height: number | null
    format: string | null
    uploadedAt: Date | null
    status: string | null
    isVerified: boolean | null
  }

  export type ImageMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    organizationId: number | null
    filePath: string | null
    fileName: string | null
    fileSize: number | null
    width: number | null
    height: number | null
    format: string | null
    uploadedAt: Date | null
    status: string | null
    isVerified: boolean | null
  }

  export type ImageCountAggregateOutputType = {
    id: number
    userId: number
    organizationId: number
    filePath: number
    fileName: number
    fileSize: number
    width: number
    height: number
    format: number
    uploadedAt: number
    status: number
    isVerified: number
    _all: number
  }


  export type ImageAvgAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    fileSize?: true
    width?: true
    height?: true
  }

  export type ImageSumAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    fileSize?: true
    width?: true
    height?: true
  }

  export type ImageMinAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    filePath?: true
    fileName?: true
    fileSize?: true
    width?: true
    height?: true
    format?: true
    uploadedAt?: true
    status?: true
    isVerified?: true
  }

  export type ImageMaxAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    filePath?: true
    fileName?: true
    fileSize?: true
    width?: true
    height?: true
    format?: true
    uploadedAt?: true
    status?: true
    isVerified?: true
  }

  export type ImageCountAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    filePath?: true
    fileName?: true
    fileSize?: true
    width?: true
    height?: true
    format?: true
    uploadedAt?: true
    status?: true
    isVerified?: true
    _all?: true
  }

  export type ImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Image to aggregate.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Images
    **/
    _count?: true | ImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImageMaxAggregateInputType
  }

  export type GetImageAggregateType<T extends ImageAggregateArgs> = {
        [P in keyof T & keyof AggregateImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImage[P]>
      : GetScalarType<T[P], AggregateImage[P]>
  }




  export type ImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithAggregationInput | ImageOrderByWithAggregationInput[]
    by: ImageScalarFieldEnum[] | ImageScalarFieldEnum
    having?: ImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImageCountAggregateInputType | true
    _avg?: ImageAvgAggregateInputType
    _sum?: ImageSumAggregateInputType
    _min?: ImageMinAggregateInputType
    _max?: ImageMaxAggregateInputType
  }

  export type ImageGroupByOutputType = {
    id: number
    userId: number
    organizationId: number | null
    filePath: string
    fileName: string
    fileSize: number
    width: number | null
    height: number | null
    format: string | null
    uploadedAt: Date
    status: string
    isVerified: boolean
    _count: ImageCountAggregateOutputType | null
    _avg: ImageAvgAggregateOutputType | null
    _sum: ImageSumAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  type GetImageGroupByPayload<T extends ImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImageGroupByOutputType[P]>
            : GetScalarType<T[P], ImageGroupByOutputType[P]>
        }
      >
    >


  export type ImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    filePath?: boolean
    fileName?: boolean
    fileSize?: boolean
    width?: boolean
    height?: boolean
    format?: boolean
    uploadedAt?: boolean
    status?: boolean
    isVerified?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    organization?: boolean | Image$organizationArgs<ExtArgs>
    annotations?: boolean | Image$annotationsArgs<ExtArgs>
    verifications?: boolean | Image$verificationsArgs<ExtArgs>
    _count?: boolean | ImageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>

  export type ImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    filePath?: boolean
    fileName?: boolean
    fileSize?: boolean
    width?: boolean
    height?: boolean
    format?: boolean
    uploadedAt?: boolean
    status?: boolean
    isVerified?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    organization?: boolean | Image$organizationArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>

  export type ImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    filePath?: boolean
    fileName?: boolean
    fileSize?: boolean
    width?: boolean
    height?: boolean
    format?: boolean
    uploadedAt?: boolean
    status?: boolean
    isVerified?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    organization?: boolean | Image$organizationArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>

  export type ImageSelectScalar = {
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    filePath?: boolean
    fileName?: boolean
    fileSize?: boolean
    width?: boolean
    height?: boolean
    format?: boolean
    uploadedAt?: boolean
    status?: boolean
    isVerified?: boolean
  }

  export type ImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "organizationId" | "filePath" | "fileName" | "fileSize" | "width" | "height" | "format" | "uploadedAt" | "status" | "isVerified", ExtArgs["result"]["image"]>
  export type ImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    organization?: boolean | Image$organizationArgs<ExtArgs>
    annotations?: boolean | Image$annotationsArgs<ExtArgs>
    verifications?: boolean | Image$verificationsArgs<ExtArgs>
    _count?: boolean | ImageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    organization?: boolean | Image$organizationArgs<ExtArgs>
  }
  export type ImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    organization?: boolean | Image$organizationArgs<ExtArgs>
  }

  export type $ImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Image"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      organization: Prisma.$OrganizationPayload<ExtArgs> | null
      annotations: Prisma.$AnnotationPayload<ExtArgs>[]
      verifications: Prisma.$ImageVerificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      organizationId: number | null
      filePath: string
      fileName: string
      fileSize: number
      width: number | null
      height: number | null
      format: string | null
      uploadedAt: Date
      status: string
      isVerified: boolean
    }, ExtArgs["result"]["image"]>
    composites: {}
  }

  type ImageGetPayload<S extends boolean | null | undefined | ImageDefaultArgs> = $Result.GetResult<Prisma.$ImagePayload, S>

  type ImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImageCountAggregateInputType | true
    }

  export interface ImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Image'], meta: { name: 'Image' } }
    /**
     * Find zero or one Image that matches the filter.
     * @param {ImageFindUniqueArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImageFindUniqueArgs>(args: SelectSubset<T, ImageFindUniqueArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Image that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImageFindUniqueOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImageFindUniqueOrThrowArgs>(args: SelectSubset<T, ImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Image that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImageFindFirstArgs>(args?: SelectSubset<T, ImageFindFirstArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Image that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImageFindFirstOrThrowArgs>(args?: SelectSubset<T, ImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Images
     * const images = await prisma.image.findMany()
     * 
     * // Get first 10 Images
     * const images = await prisma.image.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imageWithIdOnly = await prisma.image.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ImageFindManyArgs>(args?: SelectSubset<T, ImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Image.
     * @param {ImageCreateArgs} args - Arguments to create a Image.
     * @example
     * // Create one Image
     * const Image = await prisma.image.create({
     *   data: {
     *     // ... data to create a Image
     *   }
     * })
     * 
     */
    create<T extends ImageCreateArgs>(args: SelectSubset<T, ImageCreateArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Images.
     * @param {ImageCreateManyArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const image = await prisma.image.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImageCreateManyArgs>(args?: SelectSubset<T, ImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Images and returns the data saved in the database.
     * @param {ImageCreateManyAndReturnArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const image = await prisma.image.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Images and only return the `id`
     * const imageWithIdOnly = await prisma.image.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ImageCreateManyAndReturnArgs>(args?: SelectSubset<T, ImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Image.
     * @param {ImageDeleteArgs} args - Arguments to delete one Image.
     * @example
     * // Delete one Image
     * const Image = await prisma.image.delete({
     *   where: {
     *     // ... filter to delete one Image
     *   }
     * })
     * 
     */
    delete<T extends ImageDeleteArgs>(args: SelectSubset<T, ImageDeleteArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Image.
     * @param {ImageUpdateArgs} args - Arguments to update one Image.
     * @example
     * // Update one Image
     * const image = await prisma.image.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImageUpdateArgs>(args: SelectSubset<T, ImageUpdateArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Images.
     * @param {ImageDeleteManyArgs} args - Arguments to filter Images to delete.
     * @example
     * // Delete a few Images
     * const { count } = await prisma.image.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImageDeleteManyArgs>(args?: SelectSubset<T, ImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImageUpdateManyArgs>(args: SelectSubset<T, ImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images and returns the data updated in the database.
     * @param {ImageUpdateManyAndReturnArgs} args - Arguments to update many Images.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Images and only return the `id`
     * const imageWithIdOnly = await prisma.image.updateManyAndReturn({
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
    updateManyAndReturn<T extends ImageUpdateManyAndReturnArgs>(args: SelectSubset<T, ImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Image.
     * @param {ImageUpsertArgs} args - Arguments to update or create a Image.
     * @example
     * // Update or create a Image
     * const image = await prisma.image.upsert({
     *   create: {
     *     // ... data to create a Image
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Image we want to update
     *   }
     * })
     */
    upsert<T extends ImageUpsertArgs>(args: SelectSubset<T, ImageUpsertArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageCountArgs} args - Arguments to filter Images to count.
     * @example
     * // Count the number of Images
     * const count = await prisma.image.count({
     *   where: {
     *     // ... the filter for the Images we want to count
     *   }
     * })
    **/
    count<T extends ImageCountArgs>(
      args?: Subset<T, ImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ImageAggregateArgs>(args: Subset<T, ImageAggregateArgs>): Prisma.PrismaPromise<GetImageAggregateType<T>>

    /**
     * Group by Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageGroupByArgs} args - Group by arguments.
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
      T extends ImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImageGroupByArgs['orderBy'] }
        : { orderBy?: ImageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Image model
   */
  readonly fields: ImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Image.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    organization<T extends Image$organizationArgs<ExtArgs> = {}>(args?: Subset<T, Image$organizationArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    annotations<T extends Image$annotationsArgs<ExtArgs> = {}>(args?: Subset<T, Image$annotationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnotationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    verifications<T extends Image$verificationsArgs<ExtArgs> = {}>(args?: Subset<T, Image$verificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImageVerificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Image model
   */
  interface ImageFieldRefs {
    readonly id: FieldRef<"Image", 'Int'>
    readonly userId: FieldRef<"Image", 'Int'>
    readonly organizationId: FieldRef<"Image", 'Int'>
    readonly filePath: FieldRef<"Image", 'String'>
    readonly fileName: FieldRef<"Image", 'String'>
    readonly fileSize: FieldRef<"Image", 'Int'>
    readonly width: FieldRef<"Image", 'Int'>
    readonly height: FieldRef<"Image", 'Int'>
    readonly format: FieldRef<"Image", 'String'>
    readonly uploadedAt: FieldRef<"Image", 'DateTime'>
    readonly status: FieldRef<"Image", 'String'>
    readonly isVerified: FieldRef<"Image", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Image findUnique
   */
  export type ImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image findUniqueOrThrow
   */
  export type ImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image findFirst
   */
  export type ImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image findFirstOrThrow
   */
  export type ImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image findMany
   */
  export type ImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image create
   */
  export type ImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The data needed to create a Image.
     */
    data: XOR<ImageCreateInput, ImageUncheckedCreateInput>
  }

  /**
   * Image createMany
   */
  export type ImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Images.
     */
    data: ImageCreateManyInput | ImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Image createManyAndReturn
   */
  export type ImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * The data used to create many Images.
     */
    data: ImageCreateManyInput | ImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Image update
   */
  export type ImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The data needed to update a Image.
     */
    data: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
    /**
     * Choose, which Image to update.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image updateMany
   */
  export type ImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Images.
     */
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to update.
     */
    limit?: number
  }

  /**
   * Image updateManyAndReturn
   */
  export type ImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * The data used to update Images.
     */
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Image upsert
   */
  export type ImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The filter to search for the Image to update in case it exists.
     */
    where: ImageWhereUniqueInput
    /**
     * In case the Image found by the `where` argument doesn't exist, create a new Image with this data.
     */
    create: XOR<ImageCreateInput, ImageUncheckedCreateInput>
    /**
     * In case the Image was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
  }

  /**
   * Image delete
   */
  export type ImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter which Image to delete.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image deleteMany
   */
  export type ImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Images to delete
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to delete.
     */
    limit?: number
  }

  /**
   * Image.organization
   */
  export type Image$organizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    where?: OrganizationWhereInput
  }

  /**
   * Image.annotations
   */
  export type Image$annotationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annotation
     */
    select?: AnnotationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annotation
     */
    omit?: AnnotationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnotationInclude<ExtArgs> | null
    where?: AnnotationWhereInput
    orderBy?: AnnotationOrderByWithRelationInput | AnnotationOrderByWithRelationInput[]
    cursor?: AnnotationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnnotationScalarFieldEnum | AnnotationScalarFieldEnum[]
  }

  /**
   * Image.verifications
   */
  export type Image$verificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageVerification
     */
    select?: ImageVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageVerification
     */
    omit?: ImageVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageVerificationInclude<ExtArgs> | null
    where?: ImageVerificationWhereInput
    orderBy?: ImageVerificationOrderByWithRelationInput | ImageVerificationOrderByWithRelationInput[]
    cursor?: ImageVerificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImageVerificationScalarFieldEnum | ImageVerificationScalarFieldEnum[]
  }

  /**
   * Image without action
   */
  export type ImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
  }


  /**
   * Model Annotation
   */

  export type AggregateAnnotation = {
    _count: AnnotationCountAggregateOutputType | null
    _avg: AnnotationAvgAggregateOutputType | null
    _sum: AnnotationSumAggregateOutputType | null
    _min: AnnotationMinAggregateOutputType | null
    _max: AnnotationMaxAggregateOutputType | null
  }

  export type AnnotationAvgAggregateOutputType = {
    id: number | null
    imageId: number | null
    userId: number | null
    x: number | null
    y: number | null
    width: number | null
    height: number | null
    confidence: number | null
  }

  export type AnnotationSumAggregateOutputType = {
    id: number | null
    imageId: number | null
    userId: number | null
    x: number | null
    y: number | null
    width: number | null
    height: number | null
    confidence: number | null
  }

  export type AnnotationMinAggregateOutputType = {
    id: number | null
    imageId: number | null
    userId: number | null
    label: string | null
    x: number | null
    y: number | null
    width: number | null
    height: number | null
    color: string | null
    confidence: number | null
    isValidated: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AnnotationMaxAggregateOutputType = {
    id: number | null
    imageId: number | null
    userId: number | null
    label: string | null
    x: number | null
    y: number | null
    width: number | null
    height: number | null
    color: string | null
    confidence: number | null
    isValidated: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AnnotationCountAggregateOutputType = {
    id: number
    imageId: number
    userId: number
    label: number
    x: number
    y: number
    width: number
    height: number
    color: number
    confidence: number
    isValidated: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AnnotationAvgAggregateInputType = {
    id?: true
    imageId?: true
    userId?: true
    x?: true
    y?: true
    width?: true
    height?: true
    confidence?: true
  }

  export type AnnotationSumAggregateInputType = {
    id?: true
    imageId?: true
    userId?: true
    x?: true
    y?: true
    width?: true
    height?: true
    confidence?: true
  }

  export type AnnotationMinAggregateInputType = {
    id?: true
    imageId?: true
    userId?: true
    label?: true
    x?: true
    y?: true
    width?: true
    height?: true
    color?: true
    confidence?: true
    isValidated?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AnnotationMaxAggregateInputType = {
    id?: true
    imageId?: true
    userId?: true
    label?: true
    x?: true
    y?: true
    width?: true
    height?: true
    color?: true
    confidence?: true
    isValidated?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AnnotationCountAggregateInputType = {
    id?: true
    imageId?: true
    userId?: true
    label?: true
    x?: true
    y?: true
    width?: true
    height?: true
    color?: true
    confidence?: true
    isValidated?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AnnotationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Annotation to aggregate.
     */
    where?: AnnotationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Annotations to fetch.
     */
    orderBy?: AnnotationOrderByWithRelationInput | AnnotationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnnotationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Annotations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Annotations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Annotations
    **/
    _count?: true | AnnotationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnnotationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnnotationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnnotationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnnotationMaxAggregateInputType
  }

  export type GetAnnotationAggregateType<T extends AnnotationAggregateArgs> = {
        [P in keyof T & keyof AggregateAnnotation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnnotation[P]>
      : GetScalarType<T[P], AggregateAnnotation[P]>
  }




  export type AnnotationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnnotationWhereInput
    orderBy?: AnnotationOrderByWithAggregationInput | AnnotationOrderByWithAggregationInput[]
    by: AnnotationScalarFieldEnum[] | AnnotationScalarFieldEnum
    having?: AnnotationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnnotationCountAggregateInputType | true
    _avg?: AnnotationAvgAggregateInputType
    _sum?: AnnotationSumAggregateInputType
    _min?: AnnotationMinAggregateInputType
    _max?: AnnotationMaxAggregateInputType
  }

  export type AnnotationGroupByOutputType = {
    id: number
    imageId: number
    userId: number
    label: string
    x: number
    y: number
    width: number
    height: number
    color: string
    confidence: number | null
    isValidated: boolean
    createdAt: Date
    updatedAt: Date
    _count: AnnotationCountAggregateOutputType | null
    _avg: AnnotationAvgAggregateOutputType | null
    _sum: AnnotationSumAggregateOutputType | null
    _min: AnnotationMinAggregateOutputType | null
    _max: AnnotationMaxAggregateOutputType | null
  }

  type GetAnnotationGroupByPayload<T extends AnnotationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnnotationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnnotationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnnotationGroupByOutputType[P]>
            : GetScalarType<T[P], AnnotationGroupByOutputType[P]>
        }
      >
    >


  export type AnnotationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageId?: boolean
    userId?: boolean
    label?: boolean
    x?: boolean
    y?: boolean
    width?: boolean
    height?: boolean
    color?: boolean
    confidence?: boolean
    isValidated?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    image?: boolean | ImageDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["annotation"]>

  export type AnnotationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageId?: boolean
    userId?: boolean
    label?: boolean
    x?: boolean
    y?: boolean
    width?: boolean
    height?: boolean
    color?: boolean
    confidence?: boolean
    isValidated?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    image?: boolean | ImageDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["annotation"]>

  export type AnnotationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageId?: boolean
    userId?: boolean
    label?: boolean
    x?: boolean
    y?: boolean
    width?: boolean
    height?: boolean
    color?: boolean
    confidence?: boolean
    isValidated?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    image?: boolean | ImageDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["annotation"]>

  export type AnnotationSelectScalar = {
    id?: boolean
    imageId?: boolean
    userId?: boolean
    label?: boolean
    x?: boolean
    y?: boolean
    width?: boolean
    height?: boolean
    color?: boolean
    confidence?: boolean
    isValidated?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AnnotationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "imageId" | "userId" | "label" | "x" | "y" | "width" | "height" | "color" | "confidence" | "isValidated" | "createdAt" | "updatedAt", ExtArgs["result"]["annotation"]>
  export type AnnotationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    image?: boolean | ImageDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AnnotationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    image?: boolean | ImageDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AnnotationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    image?: boolean | ImageDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AnnotationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Annotation"
    objects: {
      image: Prisma.$ImagePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      imageId: number
      userId: number
      label: string
      x: number
      y: number
      width: number
      height: number
      color: string
      confidence: number | null
      isValidated: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["annotation"]>
    composites: {}
  }

  type AnnotationGetPayload<S extends boolean | null | undefined | AnnotationDefaultArgs> = $Result.GetResult<Prisma.$AnnotationPayload, S>

  type AnnotationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnnotationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnnotationCountAggregateInputType | true
    }

  export interface AnnotationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Annotation'], meta: { name: 'Annotation' } }
    /**
     * Find zero or one Annotation that matches the filter.
     * @param {AnnotationFindUniqueArgs} args - Arguments to find a Annotation
     * @example
     * // Get one Annotation
     * const annotation = await prisma.annotation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnnotationFindUniqueArgs>(args: SelectSubset<T, AnnotationFindUniqueArgs<ExtArgs>>): Prisma__AnnotationClient<$Result.GetResult<Prisma.$AnnotationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Annotation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnnotationFindUniqueOrThrowArgs} args - Arguments to find a Annotation
     * @example
     * // Get one Annotation
     * const annotation = await prisma.annotation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnnotationFindUniqueOrThrowArgs>(args: SelectSubset<T, AnnotationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnnotationClient<$Result.GetResult<Prisma.$AnnotationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Annotation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnotationFindFirstArgs} args - Arguments to find a Annotation
     * @example
     * // Get one Annotation
     * const annotation = await prisma.annotation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnnotationFindFirstArgs>(args?: SelectSubset<T, AnnotationFindFirstArgs<ExtArgs>>): Prisma__AnnotationClient<$Result.GetResult<Prisma.$AnnotationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Annotation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnotationFindFirstOrThrowArgs} args - Arguments to find a Annotation
     * @example
     * // Get one Annotation
     * const annotation = await prisma.annotation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnnotationFindFirstOrThrowArgs>(args?: SelectSubset<T, AnnotationFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnnotationClient<$Result.GetResult<Prisma.$AnnotationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Annotations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnotationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Annotations
     * const annotations = await prisma.annotation.findMany()
     * 
     * // Get first 10 Annotations
     * const annotations = await prisma.annotation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const annotationWithIdOnly = await prisma.annotation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnnotationFindManyArgs>(args?: SelectSubset<T, AnnotationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnotationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Annotation.
     * @param {AnnotationCreateArgs} args - Arguments to create a Annotation.
     * @example
     * // Create one Annotation
     * const Annotation = await prisma.annotation.create({
     *   data: {
     *     // ... data to create a Annotation
     *   }
     * })
     * 
     */
    create<T extends AnnotationCreateArgs>(args: SelectSubset<T, AnnotationCreateArgs<ExtArgs>>): Prisma__AnnotationClient<$Result.GetResult<Prisma.$AnnotationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Annotations.
     * @param {AnnotationCreateManyArgs} args - Arguments to create many Annotations.
     * @example
     * // Create many Annotations
     * const annotation = await prisma.annotation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnnotationCreateManyArgs>(args?: SelectSubset<T, AnnotationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Annotations and returns the data saved in the database.
     * @param {AnnotationCreateManyAndReturnArgs} args - Arguments to create many Annotations.
     * @example
     * // Create many Annotations
     * const annotation = await prisma.annotation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Annotations and only return the `id`
     * const annotationWithIdOnly = await prisma.annotation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnnotationCreateManyAndReturnArgs>(args?: SelectSubset<T, AnnotationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnotationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Annotation.
     * @param {AnnotationDeleteArgs} args - Arguments to delete one Annotation.
     * @example
     * // Delete one Annotation
     * const Annotation = await prisma.annotation.delete({
     *   where: {
     *     // ... filter to delete one Annotation
     *   }
     * })
     * 
     */
    delete<T extends AnnotationDeleteArgs>(args: SelectSubset<T, AnnotationDeleteArgs<ExtArgs>>): Prisma__AnnotationClient<$Result.GetResult<Prisma.$AnnotationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Annotation.
     * @param {AnnotationUpdateArgs} args - Arguments to update one Annotation.
     * @example
     * // Update one Annotation
     * const annotation = await prisma.annotation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnnotationUpdateArgs>(args: SelectSubset<T, AnnotationUpdateArgs<ExtArgs>>): Prisma__AnnotationClient<$Result.GetResult<Prisma.$AnnotationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Annotations.
     * @param {AnnotationDeleteManyArgs} args - Arguments to filter Annotations to delete.
     * @example
     * // Delete a few Annotations
     * const { count } = await prisma.annotation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnnotationDeleteManyArgs>(args?: SelectSubset<T, AnnotationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Annotations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnotationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Annotations
     * const annotation = await prisma.annotation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnnotationUpdateManyArgs>(args: SelectSubset<T, AnnotationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Annotations and returns the data updated in the database.
     * @param {AnnotationUpdateManyAndReturnArgs} args - Arguments to update many Annotations.
     * @example
     * // Update many Annotations
     * const annotation = await prisma.annotation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Annotations and only return the `id`
     * const annotationWithIdOnly = await prisma.annotation.updateManyAndReturn({
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
    updateManyAndReturn<T extends AnnotationUpdateManyAndReturnArgs>(args: SelectSubset<T, AnnotationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnotationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Annotation.
     * @param {AnnotationUpsertArgs} args - Arguments to update or create a Annotation.
     * @example
     * // Update or create a Annotation
     * const annotation = await prisma.annotation.upsert({
     *   create: {
     *     // ... data to create a Annotation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Annotation we want to update
     *   }
     * })
     */
    upsert<T extends AnnotationUpsertArgs>(args: SelectSubset<T, AnnotationUpsertArgs<ExtArgs>>): Prisma__AnnotationClient<$Result.GetResult<Prisma.$AnnotationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Annotations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnotationCountArgs} args - Arguments to filter Annotations to count.
     * @example
     * // Count the number of Annotations
     * const count = await prisma.annotation.count({
     *   where: {
     *     // ... the filter for the Annotations we want to count
     *   }
     * })
    **/
    count<T extends AnnotationCountArgs>(
      args?: Subset<T, AnnotationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnnotationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Annotation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnotationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnnotationAggregateArgs>(args: Subset<T, AnnotationAggregateArgs>): Prisma.PrismaPromise<GetAnnotationAggregateType<T>>

    /**
     * Group by Annotation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnotationGroupByArgs} args - Group by arguments.
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
      T extends AnnotationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnnotationGroupByArgs['orderBy'] }
        : { orderBy?: AnnotationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AnnotationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnnotationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Annotation model
   */
  readonly fields: AnnotationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Annotation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnnotationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    image<T extends ImageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ImageDefaultArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Annotation model
   */
  interface AnnotationFieldRefs {
    readonly id: FieldRef<"Annotation", 'Int'>
    readonly imageId: FieldRef<"Annotation", 'Int'>
    readonly userId: FieldRef<"Annotation", 'Int'>
    readonly label: FieldRef<"Annotation", 'String'>
    readonly x: FieldRef<"Annotation", 'Float'>
    readonly y: FieldRef<"Annotation", 'Float'>
    readonly width: FieldRef<"Annotation", 'Float'>
    readonly height: FieldRef<"Annotation", 'Float'>
    readonly color: FieldRef<"Annotation", 'String'>
    readonly confidence: FieldRef<"Annotation", 'Float'>
    readonly isValidated: FieldRef<"Annotation", 'Boolean'>
    readonly createdAt: FieldRef<"Annotation", 'DateTime'>
    readonly updatedAt: FieldRef<"Annotation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Annotation findUnique
   */
  export type AnnotationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annotation
     */
    select?: AnnotationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annotation
     */
    omit?: AnnotationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnotationInclude<ExtArgs> | null
    /**
     * Filter, which Annotation to fetch.
     */
    where: AnnotationWhereUniqueInput
  }

  /**
   * Annotation findUniqueOrThrow
   */
  export type AnnotationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annotation
     */
    select?: AnnotationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annotation
     */
    omit?: AnnotationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnotationInclude<ExtArgs> | null
    /**
     * Filter, which Annotation to fetch.
     */
    where: AnnotationWhereUniqueInput
  }

  /**
   * Annotation findFirst
   */
  export type AnnotationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annotation
     */
    select?: AnnotationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annotation
     */
    omit?: AnnotationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnotationInclude<ExtArgs> | null
    /**
     * Filter, which Annotation to fetch.
     */
    where?: AnnotationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Annotations to fetch.
     */
    orderBy?: AnnotationOrderByWithRelationInput | AnnotationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Annotations.
     */
    cursor?: AnnotationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Annotations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Annotations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Annotations.
     */
    distinct?: AnnotationScalarFieldEnum | AnnotationScalarFieldEnum[]
  }

  /**
   * Annotation findFirstOrThrow
   */
  export type AnnotationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annotation
     */
    select?: AnnotationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annotation
     */
    omit?: AnnotationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnotationInclude<ExtArgs> | null
    /**
     * Filter, which Annotation to fetch.
     */
    where?: AnnotationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Annotations to fetch.
     */
    orderBy?: AnnotationOrderByWithRelationInput | AnnotationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Annotations.
     */
    cursor?: AnnotationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Annotations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Annotations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Annotations.
     */
    distinct?: AnnotationScalarFieldEnum | AnnotationScalarFieldEnum[]
  }

  /**
   * Annotation findMany
   */
  export type AnnotationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annotation
     */
    select?: AnnotationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annotation
     */
    omit?: AnnotationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnotationInclude<ExtArgs> | null
    /**
     * Filter, which Annotations to fetch.
     */
    where?: AnnotationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Annotations to fetch.
     */
    orderBy?: AnnotationOrderByWithRelationInput | AnnotationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Annotations.
     */
    cursor?: AnnotationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Annotations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Annotations.
     */
    skip?: number
    distinct?: AnnotationScalarFieldEnum | AnnotationScalarFieldEnum[]
  }

  /**
   * Annotation create
   */
  export type AnnotationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annotation
     */
    select?: AnnotationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annotation
     */
    omit?: AnnotationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnotationInclude<ExtArgs> | null
    /**
     * The data needed to create a Annotation.
     */
    data: XOR<AnnotationCreateInput, AnnotationUncheckedCreateInput>
  }

  /**
   * Annotation createMany
   */
  export type AnnotationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Annotations.
     */
    data: AnnotationCreateManyInput | AnnotationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Annotation createManyAndReturn
   */
  export type AnnotationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annotation
     */
    select?: AnnotationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Annotation
     */
    omit?: AnnotationOmit<ExtArgs> | null
    /**
     * The data used to create many Annotations.
     */
    data: AnnotationCreateManyInput | AnnotationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnotationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Annotation update
   */
  export type AnnotationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annotation
     */
    select?: AnnotationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annotation
     */
    omit?: AnnotationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnotationInclude<ExtArgs> | null
    /**
     * The data needed to update a Annotation.
     */
    data: XOR<AnnotationUpdateInput, AnnotationUncheckedUpdateInput>
    /**
     * Choose, which Annotation to update.
     */
    where: AnnotationWhereUniqueInput
  }

  /**
   * Annotation updateMany
   */
  export type AnnotationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Annotations.
     */
    data: XOR<AnnotationUpdateManyMutationInput, AnnotationUncheckedUpdateManyInput>
    /**
     * Filter which Annotations to update
     */
    where?: AnnotationWhereInput
    /**
     * Limit how many Annotations to update.
     */
    limit?: number
  }

  /**
   * Annotation updateManyAndReturn
   */
  export type AnnotationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annotation
     */
    select?: AnnotationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Annotation
     */
    omit?: AnnotationOmit<ExtArgs> | null
    /**
     * The data used to update Annotations.
     */
    data: XOR<AnnotationUpdateManyMutationInput, AnnotationUncheckedUpdateManyInput>
    /**
     * Filter which Annotations to update
     */
    where?: AnnotationWhereInput
    /**
     * Limit how many Annotations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnotationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Annotation upsert
   */
  export type AnnotationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annotation
     */
    select?: AnnotationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annotation
     */
    omit?: AnnotationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnotationInclude<ExtArgs> | null
    /**
     * The filter to search for the Annotation to update in case it exists.
     */
    where: AnnotationWhereUniqueInput
    /**
     * In case the Annotation found by the `where` argument doesn't exist, create a new Annotation with this data.
     */
    create: XOR<AnnotationCreateInput, AnnotationUncheckedCreateInput>
    /**
     * In case the Annotation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnnotationUpdateInput, AnnotationUncheckedUpdateInput>
  }

  /**
   * Annotation delete
   */
  export type AnnotationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annotation
     */
    select?: AnnotationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annotation
     */
    omit?: AnnotationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnotationInclude<ExtArgs> | null
    /**
     * Filter which Annotation to delete.
     */
    where: AnnotationWhereUniqueInput
  }

  /**
   * Annotation deleteMany
   */
  export type AnnotationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Annotations to delete
     */
    where?: AnnotationWhereInput
    /**
     * Limit how many Annotations to delete.
     */
    limit?: number
  }

  /**
   * Annotation without action
   */
  export type AnnotationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annotation
     */
    select?: AnnotationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annotation
     */
    omit?: AnnotationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnotationInclude<ExtArgs> | null
  }


  /**
   * Model ImageVerification
   */

  export type AggregateImageVerification = {
    _count: ImageVerificationCountAggregateOutputType | null
    _avg: ImageVerificationAvgAggregateOutputType | null
    _sum: ImageVerificationSumAggregateOutputType | null
    _min: ImageVerificationMinAggregateOutputType | null
    _max: ImageVerificationMaxAggregateOutputType | null
  }

  export type ImageVerificationAvgAggregateOutputType = {
    id: number | null
    imageId: number | null
    verifierId: number | null
    mlScore: number | null
  }

  export type ImageVerificationSumAggregateOutputType = {
    id: number | null
    imageId: number | null
    verifierId: number | null
    mlScore: number | null
  }

  export type ImageVerificationMinAggregateOutputType = {
    id: number | null
    imageId: number | null
    verifierId: number | null
    isValid: boolean | null
    notes: string | null
    mlScore: number | null
    verifiedAt: Date | null
  }

  export type ImageVerificationMaxAggregateOutputType = {
    id: number | null
    imageId: number | null
    verifierId: number | null
    isValid: boolean | null
    notes: string | null
    mlScore: number | null
    verifiedAt: Date | null
  }

  export type ImageVerificationCountAggregateOutputType = {
    id: number
    imageId: number
    verifierId: number
    isValid: number
    notes: number
    mlScore: number
    verifiedAt: number
    _all: number
  }


  export type ImageVerificationAvgAggregateInputType = {
    id?: true
    imageId?: true
    verifierId?: true
    mlScore?: true
  }

  export type ImageVerificationSumAggregateInputType = {
    id?: true
    imageId?: true
    verifierId?: true
    mlScore?: true
  }

  export type ImageVerificationMinAggregateInputType = {
    id?: true
    imageId?: true
    verifierId?: true
    isValid?: true
    notes?: true
    mlScore?: true
    verifiedAt?: true
  }

  export type ImageVerificationMaxAggregateInputType = {
    id?: true
    imageId?: true
    verifierId?: true
    isValid?: true
    notes?: true
    mlScore?: true
    verifiedAt?: true
  }

  export type ImageVerificationCountAggregateInputType = {
    id?: true
    imageId?: true
    verifierId?: true
    isValid?: true
    notes?: true
    mlScore?: true
    verifiedAt?: true
    _all?: true
  }

  export type ImageVerificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ImageVerification to aggregate.
     */
    where?: ImageVerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImageVerifications to fetch.
     */
    orderBy?: ImageVerificationOrderByWithRelationInput | ImageVerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImageVerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImageVerifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImageVerifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ImageVerifications
    **/
    _count?: true | ImageVerificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImageVerificationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImageVerificationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImageVerificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImageVerificationMaxAggregateInputType
  }

  export type GetImageVerificationAggregateType<T extends ImageVerificationAggregateArgs> = {
        [P in keyof T & keyof AggregateImageVerification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImageVerification[P]>
      : GetScalarType<T[P], AggregateImageVerification[P]>
  }




  export type ImageVerificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageVerificationWhereInput
    orderBy?: ImageVerificationOrderByWithAggregationInput | ImageVerificationOrderByWithAggregationInput[]
    by: ImageVerificationScalarFieldEnum[] | ImageVerificationScalarFieldEnum
    having?: ImageVerificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImageVerificationCountAggregateInputType | true
    _avg?: ImageVerificationAvgAggregateInputType
    _sum?: ImageVerificationSumAggregateInputType
    _min?: ImageVerificationMinAggregateInputType
    _max?: ImageVerificationMaxAggregateInputType
  }

  export type ImageVerificationGroupByOutputType = {
    id: number
    imageId: number
    verifierId: number
    isValid: boolean
    notes: string | null
    mlScore: number | null
    verifiedAt: Date
    _count: ImageVerificationCountAggregateOutputType | null
    _avg: ImageVerificationAvgAggregateOutputType | null
    _sum: ImageVerificationSumAggregateOutputType | null
    _min: ImageVerificationMinAggregateOutputType | null
    _max: ImageVerificationMaxAggregateOutputType | null
  }

  type GetImageVerificationGroupByPayload<T extends ImageVerificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImageVerificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImageVerificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImageVerificationGroupByOutputType[P]>
            : GetScalarType<T[P], ImageVerificationGroupByOutputType[P]>
        }
      >
    >


  export type ImageVerificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageId?: boolean
    verifierId?: boolean
    isValid?: boolean
    notes?: boolean
    mlScore?: boolean
    verifiedAt?: boolean
    image?: boolean | ImageDefaultArgs<ExtArgs>
    verifier?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["imageVerification"]>

  export type ImageVerificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageId?: boolean
    verifierId?: boolean
    isValid?: boolean
    notes?: boolean
    mlScore?: boolean
    verifiedAt?: boolean
    image?: boolean | ImageDefaultArgs<ExtArgs>
    verifier?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["imageVerification"]>

  export type ImageVerificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageId?: boolean
    verifierId?: boolean
    isValid?: boolean
    notes?: boolean
    mlScore?: boolean
    verifiedAt?: boolean
    image?: boolean | ImageDefaultArgs<ExtArgs>
    verifier?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["imageVerification"]>

  export type ImageVerificationSelectScalar = {
    id?: boolean
    imageId?: boolean
    verifierId?: boolean
    isValid?: boolean
    notes?: boolean
    mlScore?: boolean
    verifiedAt?: boolean
  }

  export type ImageVerificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "imageId" | "verifierId" | "isValid" | "notes" | "mlScore" | "verifiedAt", ExtArgs["result"]["imageVerification"]>
  export type ImageVerificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    image?: boolean | ImageDefaultArgs<ExtArgs>
    verifier?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ImageVerificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    image?: boolean | ImageDefaultArgs<ExtArgs>
    verifier?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ImageVerificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    image?: boolean | ImageDefaultArgs<ExtArgs>
    verifier?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ImageVerificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ImageVerification"
    objects: {
      image: Prisma.$ImagePayload<ExtArgs>
      verifier: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      imageId: number
      verifierId: number
      isValid: boolean
      notes: string | null
      mlScore: number | null
      verifiedAt: Date
    }, ExtArgs["result"]["imageVerification"]>
    composites: {}
  }

  type ImageVerificationGetPayload<S extends boolean | null | undefined | ImageVerificationDefaultArgs> = $Result.GetResult<Prisma.$ImageVerificationPayload, S>

  type ImageVerificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ImageVerificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImageVerificationCountAggregateInputType | true
    }

  export interface ImageVerificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ImageVerification'], meta: { name: 'ImageVerification' } }
    /**
     * Find zero or one ImageVerification that matches the filter.
     * @param {ImageVerificationFindUniqueArgs} args - Arguments to find a ImageVerification
     * @example
     * // Get one ImageVerification
     * const imageVerification = await prisma.imageVerification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImageVerificationFindUniqueArgs>(args: SelectSubset<T, ImageVerificationFindUniqueArgs<ExtArgs>>): Prisma__ImageVerificationClient<$Result.GetResult<Prisma.$ImageVerificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ImageVerification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImageVerificationFindUniqueOrThrowArgs} args - Arguments to find a ImageVerification
     * @example
     * // Get one ImageVerification
     * const imageVerification = await prisma.imageVerification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImageVerificationFindUniqueOrThrowArgs>(args: SelectSubset<T, ImageVerificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImageVerificationClient<$Result.GetResult<Prisma.$ImageVerificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ImageVerification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageVerificationFindFirstArgs} args - Arguments to find a ImageVerification
     * @example
     * // Get one ImageVerification
     * const imageVerification = await prisma.imageVerification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImageVerificationFindFirstArgs>(args?: SelectSubset<T, ImageVerificationFindFirstArgs<ExtArgs>>): Prisma__ImageVerificationClient<$Result.GetResult<Prisma.$ImageVerificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ImageVerification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageVerificationFindFirstOrThrowArgs} args - Arguments to find a ImageVerification
     * @example
     * // Get one ImageVerification
     * const imageVerification = await prisma.imageVerification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImageVerificationFindFirstOrThrowArgs>(args?: SelectSubset<T, ImageVerificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImageVerificationClient<$Result.GetResult<Prisma.$ImageVerificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ImageVerifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageVerificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ImageVerifications
     * const imageVerifications = await prisma.imageVerification.findMany()
     * 
     * // Get first 10 ImageVerifications
     * const imageVerifications = await prisma.imageVerification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imageVerificationWithIdOnly = await prisma.imageVerification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ImageVerificationFindManyArgs>(args?: SelectSubset<T, ImageVerificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImageVerificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ImageVerification.
     * @param {ImageVerificationCreateArgs} args - Arguments to create a ImageVerification.
     * @example
     * // Create one ImageVerification
     * const ImageVerification = await prisma.imageVerification.create({
     *   data: {
     *     // ... data to create a ImageVerification
     *   }
     * })
     * 
     */
    create<T extends ImageVerificationCreateArgs>(args: SelectSubset<T, ImageVerificationCreateArgs<ExtArgs>>): Prisma__ImageVerificationClient<$Result.GetResult<Prisma.$ImageVerificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ImageVerifications.
     * @param {ImageVerificationCreateManyArgs} args - Arguments to create many ImageVerifications.
     * @example
     * // Create many ImageVerifications
     * const imageVerification = await prisma.imageVerification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImageVerificationCreateManyArgs>(args?: SelectSubset<T, ImageVerificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ImageVerifications and returns the data saved in the database.
     * @param {ImageVerificationCreateManyAndReturnArgs} args - Arguments to create many ImageVerifications.
     * @example
     * // Create many ImageVerifications
     * const imageVerification = await prisma.imageVerification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ImageVerifications and only return the `id`
     * const imageVerificationWithIdOnly = await prisma.imageVerification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ImageVerificationCreateManyAndReturnArgs>(args?: SelectSubset<T, ImageVerificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImageVerificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ImageVerification.
     * @param {ImageVerificationDeleteArgs} args - Arguments to delete one ImageVerification.
     * @example
     * // Delete one ImageVerification
     * const ImageVerification = await prisma.imageVerification.delete({
     *   where: {
     *     // ... filter to delete one ImageVerification
     *   }
     * })
     * 
     */
    delete<T extends ImageVerificationDeleteArgs>(args: SelectSubset<T, ImageVerificationDeleteArgs<ExtArgs>>): Prisma__ImageVerificationClient<$Result.GetResult<Prisma.$ImageVerificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ImageVerification.
     * @param {ImageVerificationUpdateArgs} args - Arguments to update one ImageVerification.
     * @example
     * // Update one ImageVerification
     * const imageVerification = await prisma.imageVerification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImageVerificationUpdateArgs>(args: SelectSubset<T, ImageVerificationUpdateArgs<ExtArgs>>): Prisma__ImageVerificationClient<$Result.GetResult<Prisma.$ImageVerificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ImageVerifications.
     * @param {ImageVerificationDeleteManyArgs} args - Arguments to filter ImageVerifications to delete.
     * @example
     * // Delete a few ImageVerifications
     * const { count } = await prisma.imageVerification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImageVerificationDeleteManyArgs>(args?: SelectSubset<T, ImageVerificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ImageVerifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageVerificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ImageVerifications
     * const imageVerification = await prisma.imageVerification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImageVerificationUpdateManyArgs>(args: SelectSubset<T, ImageVerificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ImageVerifications and returns the data updated in the database.
     * @param {ImageVerificationUpdateManyAndReturnArgs} args - Arguments to update many ImageVerifications.
     * @example
     * // Update many ImageVerifications
     * const imageVerification = await prisma.imageVerification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ImageVerifications and only return the `id`
     * const imageVerificationWithIdOnly = await prisma.imageVerification.updateManyAndReturn({
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
    updateManyAndReturn<T extends ImageVerificationUpdateManyAndReturnArgs>(args: SelectSubset<T, ImageVerificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImageVerificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ImageVerification.
     * @param {ImageVerificationUpsertArgs} args - Arguments to update or create a ImageVerification.
     * @example
     * // Update or create a ImageVerification
     * const imageVerification = await prisma.imageVerification.upsert({
     *   create: {
     *     // ... data to create a ImageVerification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ImageVerification we want to update
     *   }
     * })
     */
    upsert<T extends ImageVerificationUpsertArgs>(args: SelectSubset<T, ImageVerificationUpsertArgs<ExtArgs>>): Prisma__ImageVerificationClient<$Result.GetResult<Prisma.$ImageVerificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ImageVerifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageVerificationCountArgs} args - Arguments to filter ImageVerifications to count.
     * @example
     * // Count the number of ImageVerifications
     * const count = await prisma.imageVerification.count({
     *   where: {
     *     // ... the filter for the ImageVerifications we want to count
     *   }
     * })
    **/
    count<T extends ImageVerificationCountArgs>(
      args?: Subset<T, ImageVerificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImageVerificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ImageVerification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageVerificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ImageVerificationAggregateArgs>(args: Subset<T, ImageVerificationAggregateArgs>): Prisma.PrismaPromise<GetImageVerificationAggregateType<T>>

    /**
     * Group by ImageVerification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageVerificationGroupByArgs} args - Group by arguments.
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
      T extends ImageVerificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImageVerificationGroupByArgs['orderBy'] }
        : { orderBy?: ImageVerificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ImageVerificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImageVerificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ImageVerification model
   */
  readonly fields: ImageVerificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ImageVerification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImageVerificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    image<T extends ImageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ImageDefaultArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    verifier<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ImageVerification model
   */
  interface ImageVerificationFieldRefs {
    readonly id: FieldRef<"ImageVerification", 'Int'>
    readonly imageId: FieldRef<"ImageVerification", 'Int'>
    readonly verifierId: FieldRef<"ImageVerification", 'Int'>
    readonly isValid: FieldRef<"ImageVerification", 'Boolean'>
    readonly notes: FieldRef<"ImageVerification", 'String'>
    readonly mlScore: FieldRef<"ImageVerification", 'Float'>
    readonly verifiedAt: FieldRef<"ImageVerification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ImageVerification findUnique
   */
  export type ImageVerificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageVerification
     */
    select?: ImageVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageVerification
     */
    omit?: ImageVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageVerificationInclude<ExtArgs> | null
    /**
     * Filter, which ImageVerification to fetch.
     */
    where: ImageVerificationWhereUniqueInput
  }

  /**
   * ImageVerification findUniqueOrThrow
   */
  export type ImageVerificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageVerification
     */
    select?: ImageVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageVerification
     */
    omit?: ImageVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageVerificationInclude<ExtArgs> | null
    /**
     * Filter, which ImageVerification to fetch.
     */
    where: ImageVerificationWhereUniqueInput
  }

  /**
   * ImageVerification findFirst
   */
  export type ImageVerificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageVerification
     */
    select?: ImageVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageVerification
     */
    omit?: ImageVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageVerificationInclude<ExtArgs> | null
    /**
     * Filter, which ImageVerification to fetch.
     */
    where?: ImageVerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImageVerifications to fetch.
     */
    orderBy?: ImageVerificationOrderByWithRelationInput | ImageVerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ImageVerifications.
     */
    cursor?: ImageVerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImageVerifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImageVerifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImageVerifications.
     */
    distinct?: ImageVerificationScalarFieldEnum | ImageVerificationScalarFieldEnum[]
  }

  /**
   * ImageVerification findFirstOrThrow
   */
  export type ImageVerificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageVerification
     */
    select?: ImageVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageVerification
     */
    omit?: ImageVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageVerificationInclude<ExtArgs> | null
    /**
     * Filter, which ImageVerification to fetch.
     */
    where?: ImageVerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImageVerifications to fetch.
     */
    orderBy?: ImageVerificationOrderByWithRelationInput | ImageVerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ImageVerifications.
     */
    cursor?: ImageVerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImageVerifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImageVerifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImageVerifications.
     */
    distinct?: ImageVerificationScalarFieldEnum | ImageVerificationScalarFieldEnum[]
  }

  /**
   * ImageVerification findMany
   */
  export type ImageVerificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageVerification
     */
    select?: ImageVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageVerification
     */
    omit?: ImageVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageVerificationInclude<ExtArgs> | null
    /**
     * Filter, which ImageVerifications to fetch.
     */
    where?: ImageVerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImageVerifications to fetch.
     */
    orderBy?: ImageVerificationOrderByWithRelationInput | ImageVerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ImageVerifications.
     */
    cursor?: ImageVerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImageVerifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImageVerifications.
     */
    skip?: number
    distinct?: ImageVerificationScalarFieldEnum | ImageVerificationScalarFieldEnum[]
  }

  /**
   * ImageVerification create
   */
  export type ImageVerificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageVerification
     */
    select?: ImageVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageVerification
     */
    omit?: ImageVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageVerificationInclude<ExtArgs> | null
    /**
     * The data needed to create a ImageVerification.
     */
    data: XOR<ImageVerificationCreateInput, ImageVerificationUncheckedCreateInput>
  }

  /**
   * ImageVerification createMany
   */
  export type ImageVerificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ImageVerifications.
     */
    data: ImageVerificationCreateManyInput | ImageVerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ImageVerification createManyAndReturn
   */
  export type ImageVerificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageVerification
     */
    select?: ImageVerificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ImageVerification
     */
    omit?: ImageVerificationOmit<ExtArgs> | null
    /**
     * The data used to create many ImageVerifications.
     */
    data: ImageVerificationCreateManyInput | ImageVerificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageVerificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ImageVerification update
   */
  export type ImageVerificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageVerification
     */
    select?: ImageVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageVerification
     */
    omit?: ImageVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageVerificationInclude<ExtArgs> | null
    /**
     * The data needed to update a ImageVerification.
     */
    data: XOR<ImageVerificationUpdateInput, ImageVerificationUncheckedUpdateInput>
    /**
     * Choose, which ImageVerification to update.
     */
    where: ImageVerificationWhereUniqueInput
  }

  /**
   * ImageVerification updateMany
   */
  export type ImageVerificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ImageVerifications.
     */
    data: XOR<ImageVerificationUpdateManyMutationInput, ImageVerificationUncheckedUpdateManyInput>
    /**
     * Filter which ImageVerifications to update
     */
    where?: ImageVerificationWhereInput
    /**
     * Limit how many ImageVerifications to update.
     */
    limit?: number
  }

  /**
   * ImageVerification updateManyAndReturn
   */
  export type ImageVerificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageVerification
     */
    select?: ImageVerificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ImageVerification
     */
    omit?: ImageVerificationOmit<ExtArgs> | null
    /**
     * The data used to update ImageVerifications.
     */
    data: XOR<ImageVerificationUpdateManyMutationInput, ImageVerificationUncheckedUpdateManyInput>
    /**
     * Filter which ImageVerifications to update
     */
    where?: ImageVerificationWhereInput
    /**
     * Limit how many ImageVerifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageVerificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ImageVerification upsert
   */
  export type ImageVerificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageVerification
     */
    select?: ImageVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageVerification
     */
    omit?: ImageVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageVerificationInclude<ExtArgs> | null
    /**
     * The filter to search for the ImageVerification to update in case it exists.
     */
    where: ImageVerificationWhereUniqueInput
    /**
     * In case the ImageVerification found by the `where` argument doesn't exist, create a new ImageVerification with this data.
     */
    create: XOR<ImageVerificationCreateInput, ImageVerificationUncheckedCreateInput>
    /**
     * In case the ImageVerification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImageVerificationUpdateInput, ImageVerificationUncheckedUpdateInput>
  }

  /**
   * ImageVerification delete
   */
  export type ImageVerificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageVerification
     */
    select?: ImageVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageVerification
     */
    omit?: ImageVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageVerificationInclude<ExtArgs> | null
    /**
     * Filter which ImageVerification to delete.
     */
    where: ImageVerificationWhereUniqueInput
  }

  /**
   * ImageVerification deleteMany
   */
  export type ImageVerificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ImageVerifications to delete
     */
    where?: ImageVerificationWhereInput
    /**
     * Limit how many ImageVerifications to delete.
     */
    limit?: number
  }

  /**
   * ImageVerification without action
   */
  export type ImageVerificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageVerification
     */
    select?: ImageVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageVerification
     */
    omit?: ImageVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageVerificationInclude<ExtArgs> | null
  }


  /**
   * Model Dataset
   */

  export type AggregateDataset = {
    _count: DatasetCountAggregateOutputType | null
    _avg: DatasetAvgAggregateOutputType | null
    _sum: DatasetSumAggregateOutputType | null
    _min: DatasetMinAggregateOutputType | null
    _max: DatasetMaxAggregateOutputType | null
  }

  export type DatasetAvgAggregateOutputType = {
    id: number | null
    createdBy: number | null
    imageIds: number | null
  }

  export type DatasetSumAggregateOutputType = {
    id: number | null
    createdBy: number | null
    imageIds: number[]
  }

  export type DatasetMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdBy: number | null
    format: string | null
    filePath: string | null
    createdAt: Date | null
    exportedAt: Date | null
  }

  export type DatasetMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdBy: number | null
    format: string | null
    filePath: string | null
    createdAt: Date | null
    exportedAt: Date | null
  }

  export type DatasetCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdBy: number
    format: number
    imageIds: number
    filePath: number
    createdAt: number
    exportedAt: number
    _all: number
  }


  export type DatasetAvgAggregateInputType = {
    id?: true
    createdBy?: true
    imageIds?: true
  }

  export type DatasetSumAggregateInputType = {
    id?: true
    createdBy?: true
    imageIds?: true
  }

  export type DatasetMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdBy?: true
    format?: true
    filePath?: true
    createdAt?: true
    exportedAt?: true
  }

  export type DatasetMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdBy?: true
    format?: true
    filePath?: true
    createdAt?: true
    exportedAt?: true
  }

  export type DatasetCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdBy?: true
    format?: true
    imageIds?: true
    filePath?: true
    createdAt?: true
    exportedAt?: true
    _all?: true
  }

  export type DatasetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dataset to aggregate.
     */
    where?: DatasetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Datasets to fetch.
     */
    orderBy?: DatasetOrderByWithRelationInput | DatasetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DatasetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Datasets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Datasets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Datasets
    **/
    _count?: true | DatasetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DatasetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DatasetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DatasetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DatasetMaxAggregateInputType
  }

  export type GetDatasetAggregateType<T extends DatasetAggregateArgs> = {
        [P in keyof T & keyof AggregateDataset]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDataset[P]>
      : GetScalarType<T[P], AggregateDataset[P]>
  }




  export type DatasetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DatasetWhereInput
    orderBy?: DatasetOrderByWithAggregationInput | DatasetOrderByWithAggregationInput[]
    by: DatasetScalarFieldEnum[] | DatasetScalarFieldEnum
    having?: DatasetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DatasetCountAggregateInputType | true
    _avg?: DatasetAvgAggregateInputType
    _sum?: DatasetSumAggregateInputType
    _min?: DatasetMinAggregateInputType
    _max?: DatasetMaxAggregateInputType
  }

  export type DatasetGroupByOutputType = {
    id: number
    name: string
    description: string | null
    createdBy: number
    format: string
    imageIds: number[]
    filePath: string | null
    createdAt: Date
    exportedAt: Date | null
    _count: DatasetCountAggregateOutputType | null
    _avg: DatasetAvgAggregateOutputType | null
    _sum: DatasetSumAggregateOutputType | null
    _min: DatasetMinAggregateOutputType | null
    _max: DatasetMaxAggregateOutputType | null
  }

  type GetDatasetGroupByPayload<T extends DatasetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DatasetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DatasetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DatasetGroupByOutputType[P]>
            : GetScalarType<T[P], DatasetGroupByOutputType[P]>
        }
      >
    >


  export type DatasetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdBy?: boolean
    format?: boolean
    imageIds?: boolean
    filePath?: boolean
    createdAt?: boolean
    exportedAt?: boolean
  }, ExtArgs["result"]["dataset"]>

  export type DatasetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdBy?: boolean
    format?: boolean
    imageIds?: boolean
    filePath?: boolean
    createdAt?: boolean
    exportedAt?: boolean
  }, ExtArgs["result"]["dataset"]>

  export type DatasetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdBy?: boolean
    format?: boolean
    imageIds?: boolean
    filePath?: boolean
    createdAt?: boolean
    exportedAt?: boolean
  }, ExtArgs["result"]["dataset"]>

  export type DatasetSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdBy?: boolean
    format?: boolean
    imageIds?: boolean
    filePath?: boolean
    createdAt?: boolean
    exportedAt?: boolean
  }

  export type DatasetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "createdBy" | "format" | "imageIds" | "filePath" | "createdAt" | "exportedAt", ExtArgs["result"]["dataset"]>

  export type $DatasetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Dataset"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      createdBy: number
      format: string
      imageIds: number[]
      filePath: string | null
      createdAt: Date
      exportedAt: Date | null
    }, ExtArgs["result"]["dataset"]>
    composites: {}
  }

  type DatasetGetPayload<S extends boolean | null | undefined | DatasetDefaultArgs> = $Result.GetResult<Prisma.$DatasetPayload, S>

  type DatasetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DatasetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DatasetCountAggregateInputType | true
    }

  export interface DatasetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Dataset'], meta: { name: 'Dataset' } }
    /**
     * Find zero or one Dataset that matches the filter.
     * @param {DatasetFindUniqueArgs} args - Arguments to find a Dataset
     * @example
     * // Get one Dataset
     * const dataset = await prisma.dataset.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DatasetFindUniqueArgs>(args: SelectSubset<T, DatasetFindUniqueArgs<ExtArgs>>): Prisma__DatasetClient<$Result.GetResult<Prisma.$DatasetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Dataset that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DatasetFindUniqueOrThrowArgs} args - Arguments to find a Dataset
     * @example
     * // Get one Dataset
     * const dataset = await prisma.dataset.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DatasetFindUniqueOrThrowArgs>(args: SelectSubset<T, DatasetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DatasetClient<$Result.GetResult<Prisma.$DatasetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dataset that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatasetFindFirstArgs} args - Arguments to find a Dataset
     * @example
     * // Get one Dataset
     * const dataset = await prisma.dataset.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DatasetFindFirstArgs>(args?: SelectSubset<T, DatasetFindFirstArgs<ExtArgs>>): Prisma__DatasetClient<$Result.GetResult<Prisma.$DatasetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dataset that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatasetFindFirstOrThrowArgs} args - Arguments to find a Dataset
     * @example
     * // Get one Dataset
     * const dataset = await prisma.dataset.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DatasetFindFirstOrThrowArgs>(args?: SelectSubset<T, DatasetFindFirstOrThrowArgs<ExtArgs>>): Prisma__DatasetClient<$Result.GetResult<Prisma.$DatasetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Datasets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatasetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Datasets
     * const datasets = await prisma.dataset.findMany()
     * 
     * // Get first 10 Datasets
     * const datasets = await prisma.dataset.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const datasetWithIdOnly = await prisma.dataset.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DatasetFindManyArgs>(args?: SelectSubset<T, DatasetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DatasetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Dataset.
     * @param {DatasetCreateArgs} args - Arguments to create a Dataset.
     * @example
     * // Create one Dataset
     * const Dataset = await prisma.dataset.create({
     *   data: {
     *     // ... data to create a Dataset
     *   }
     * })
     * 
     */
    create<T extends DatasetCreateArgs>(args: SelectSubset<T, DatasetCreateArgs<ExtArgs>>): Prisma__DatasetClient<$Result.GetResult<Prisma.$DatasetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Datasets.
     * @param {DatasetCreateManyArgs} args - Arguments to create many Datasets.
     * @example
     * // Create many Datasets
     * const dataset = await prisma.dataset.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DatasetCreateManyArgs>(args?: SelectSubset<T, DatasetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Datasets and returns the data saved in the database.
     * @param {DatasetCreateManyAndReturnArgs} args - Arguments to create many Datasets.
     * @example
     * // Create many Datasets
     * const dataset = await prisma.dataset.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Datasets and only return the `id`
     * const datasetWithIdOnly = await prisma.dataset.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DatasetCreateManyAndReturnArgs>(args?: SelectSubset<T, DatasetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DatasetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Dataset.
     * @param {DatasetDeleteArgs} args - Arguments to delete one Dataset.
     * @example
     * // Delete one Dataset
     * const Dataset = await prisma.dataset.delete({
     *   where: {
     *     // ... filter to delete one Dataset
     *   }
     * })
     * 
     */
    delete<T extends DatasetDeleteArgs>(args: SelectSubset<T, DatasetDeleteArgs<ExtArgs>>): Prisma__DatasetClient<$Result.GetResult<Prisma.$DatasetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Dataset.
     * @param {DatasetUpdateArgs} args - Arguments to update one Dataset.
     * @example
     * // Update one Dataset
     * const dataset = await prisma.dataset.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DatasetUpdateArgs>(args: SelectSubset<T, DatasetUpdateArgs<ExtArgs>>): Prisma__DatasetClient<$Result.GetResult<Prisma.$DatasetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Datasets.
     * @param {DatasetDeleteManyArgs} args - Arguments to filter Datasets to delete.
     * @example
     * // Delete a few Datasets
     * const { count } = await prisma.dataset.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DatasetDeleteManyArgs>(args?: SelectSubset<T, DatasetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Datasets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatasetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Datasets
     * const dataset = await prisma.dataset.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DatasetUpdateManyArgs>(args: SelectSubset<T, DatasetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Datasets and returns the data updated in the database.
     * @param {DatasetUpdateManyAndReturnArgs} args - Arguments to update many Datasets.
     * @example
     * // Update many Datasets
     * const dataset = await prisma.dataset.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Datasets and only return the `id`
     * const datasetWithIdOnly = await prisma.dataset.updateManyAndReturn({
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
    updateManyAndReturn<T extends DatasetUpdateManyAndReturnArgs>(args: SelectSubset<T, DatasetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DatasetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Dataset.
     * @param {DatasetUpsertArgs} args - Arguments to update or create a Dataset.
     * @example
     * // Update or create a Dataset
     * const dataset = await prisma.dataset.upsert({
     *   create: {
     *     // ... data to create a Dataset
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dataset we want to update
     *   }
     * })
     */
    upsert<T extends DatasetUpsertArgs>(args: SelectSubset<T, DatasetUpsertArgs<ExtArgs>>): Prisma__DatasetClient<$Result.GetResult<Prisma.$DatasetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Datasets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatasetCountArgs} args - Arguments to filter Datasets to count.
     * @example
     * // Count the number of Datasets
     * const count = await prisma.dataset.count({
     *   where: {
     *     // ... the filter for the Datasets we want to count
     *   }
     * })
    **/
    count<T extends DatasetCountArgs>(
      args?: Subset<T, DatasetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DatasetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dataset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatasetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DatasetAggregateArgs>(args: Subset<T, DatasetAggregateArgs>): Prisma.PrismaPromise<GetDatasetAggregateType<T>>

    /**
     * Group by Dataset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatasetGroupByArgs} args - Group by arguments.
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
      T extends DatasetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DatasetGroupByArgs['orderBy'] }
        : { orderBy?: DatasetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DatasetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDatasetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Dataset model
   */
  readonly fields: DatasetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dataset.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DatasetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Dataset model
   */
  interface DatasetFieldRefs {
    readonly id: FieldRef<"Dataset", 'Int'>
    readonly name: FieldRef<"Dataset", 'String'>
    readonly description: FieldRef<"Dataset", 'String'>
    readonly createdBy: FieldRef<"Dataset", 'Int'>
    readonly format: FieldRef<"Dataset", 'String'>
    readonly imageIds: FieldRef<"Dataset", 'Int[]'>
    readonly filePath: FieldRef<"Dataset", 'String'>
    readonly createdAt: FieldRef<"Dataset", 'DateTime'>
    readonly exportedAt: FieldRef<"Dataset", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Dataset findUnique
   */
  export type DatasetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dataset
     */
    select?: DatasetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dataset
     */
    omit?: DatasetOmit<ExtArgs> | null
    /**
     * Filter, which Dataset to fetch.
     */
    where: DatasetWhereUniqueInput
  }

  /**
   * Dataset findUniqueOrThrow
   */
  export type DatasetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dataset
     */
    select?: DatasetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dataset
     */
    omit?: DatasetOmit<ExtArgs> | null
    /**
     * Filter, which Dataset to fetch.
     */
    where: DatasetWhereUniqueInput
  }

  /**
   * Dataset findFirst
   */
  export type DatasetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dataset
     */
    select?: DatasetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dataset
     */
    omit?: DatasetOmit<ExtArgs> | null
    /**
     * Filter, which Dataset to fetch.
     */
    where?: DatasetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Datasets to fetch.
     */
    orderBy?: DatasetOrderByWithRelationInput | DatasetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Datasets.
     */
    cursor?: DatasetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Datasets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Datasets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Datasets.
     */
    distinct?: DatasetScalarFieldEnum | DatasetScalarFieldEnum[]
  }

  /**
   * Dataset findFirstOrThrow
   */
  export type DatasetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dataset
     */
    select?: DatasetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dataset
     */
    omit?: DatasetOmit<ExtArgs> | null
    /**
     * Filter, which Dataset to fetch.
     */
    where?: DatasetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Datasets to fetch.
     */
    orderBy?: DatasetOrderByWithRelationInput | DatasetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Datasets.
     */
    cursor?: DatasetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Datasets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Datasets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Datasets.
     */
    distinct?: DatasetScalarFieldEnum | DatasetScalarFieldEnum[]
  }

  /**
   * Dataset findMany
   */
  export type DatasetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dataset
     */
    select?: DatasetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dataset
     */
    omit?: DatasetOmit<ExtArgs> | null
    /**
     * Filter, which Datasets to fetch.
     */
    where?: DatasetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Datasets to fetch.
     */
    orderBy?: DatasetOrderByWithRelationInput | DatasetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Datasets.
     */
    cursor?: DatasetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Datasets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Datasets.
     */
    skip?: number
    distinct?: DatasetScalarFieldEnum | DatasetScalarFieldEnum[]
  }

  /**
   * Dataset create
   */
  export type DatasetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dataset
     */
    select?: DatasetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dataset
     */
    omit?: DatasetOmit<ExtArgs> | null
    /**
     * The data needed to create a Dataset.
     */
    data: XOR<DatasetCreateInput, DatasetUncheckedCreateInput>
  }

  /**
   * Dataset createMany
   */
  export type DatasetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Datasets.
     */
    data: DatasetCreateManyInput | DatasetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Dataset createManyAndReturn
   */
  export type DatasetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dataset
     */
    select?: DatasetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dataset
     */
    omit?: DatasetOmit<ExtArgs> | null
    /**
     * The data used to create many Datasets.
     */
    data: DatasetCreateManyInput | DatasetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Dataset update
   */
  export type DatasetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dataset
     */
    select?: DatasetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dataset
     */
    omit?: DatasetOmit<ExtArgs> | null
    /**
     * The data needed to update a Dataset.
     */
    data: XOR<DatasetUpdateInput, DatasetUncheckedUpdateInput>
    /**
     * Choose, which Dataset to update.
     */
    where: DatasetWhereUniqueInput
  }

  /**
   * Dataset updateMany
   */
  export type DatasetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Datasets.
     */
    data: XOR<DatasetUpdateManyMutationInput, DatasetUncheckedUpdateManyInput>
    /**
     * Filter which Datasets to update
     */
    where?: DatasetWhereInput
    /**
     * Limit how many Datasets to update.
     */
    limit?: number
  }

  /**
   * Dataset updateManyAndReturn
   */
  export type DatasetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dataset
     */
    select?: DatasetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dataset
     */
    omit?: DatasetOmit<ExtArgs> | null
    /**
     * The data used to update Datasets.
     */
    data: XOR<DatasetUpdateManyMutationInput, DatasetUncheckedUpdateManyInput>
    /**
     * Filter which Datasets to update
     */
    where?: DatasetWhereInput
    /**
     * Limit how many Datasets to update.
     */
    limit?: number
  }

  /**
   * Dataset upsert
   */
  export type DatasetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dataset
     */
    select?: DatasetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dataset
     */
    omit?: DatasetOmit<ExtArgs> | null
    /**
     * The filter to search for the Dataset to update in case it exists.
     */
    where: DatasetWhereUniqueInput
    /**
     * In case the Dataset found by the `where` argument doesn't exist, create a new Dataset with this data.
     */
    create: XOR<DatasetCreateInput, DatasetUncheckedCreateInput>
    /**
     * In case the Dataset was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DatasetUpdateInput, DatasetUncheckedUpdateInput>
  }

  /**
   * Dataset delete
   */
  export type DatasetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dataset
     */
    select?: DatasetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dataset
     */
    omit?: DatasetOmit<ExtArgs> | null
    /**
     * Filter which Dataset to delete.
     */
    where: DatasetWhereUniqueInput
  }

  /**
   * Dataset deleteMany
   */
  export type DatasetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Datasets to delete
     */
    where?: DatasetWhereInput
    /**
     * Limit how many Datasets to delete.
     */
    limit?: number
  }

  /**
   * Dataset without action
   */
  export type DatasetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dataset
     */
    select?: DatasetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dataset
     */
    omit?: DatasetOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    role: 'role',
    points: 'points',
    password: 'password',
    validityPercentage: 'validityPercentage',
    suspicious: 'suspicious',
    isActive: 'isActive',
    activationToken: 'activationToken',
    resetToken: 'resetToken',
    resetTokenExpiry: 'resetTokenExpiry',
    createdAt: 'createdAt',
    lastlogin: 'lastlogin'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProfileScalarFieldEnum: {
    id: 'id',
    bio: 'bio',
    userId: 'userId',
    image: 'image'
  };

  export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum]


  export const OrganizationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    leaderId: 'leaderId'
  };

  export type OrganizationScalarFieldEnum = (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum]


  export const PointsTransactionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    cashierId: 'cashierId',
    points: 'points',
    type: 'type',
    reason: 'reason',
    createdAt: 'createdAt'
  };

  export type PointsTransactionScalarFieldEnum = (typeof PointsTransactionScalarFieldEnum)[keyof typeof PointsTransactionScalarFieldEnum]


  export const ImageScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    organizationId: 'organizationId',
    filePath: 'filePath',
    fileName: 'fileName',
    fileSize: 'fileSize',
    width: 'width',
    height: 'height',
    format: 'format',
    uploadedAt: 'uploadedAt',
    status: 'status',
    isVerified: 'isVerified'
  };

  export type ImageScalarFieldEnum = (typeof ImageScalarFieldEnum)[keyof typeof ImageScalarFieldEnum]


  export const AnnotationScalarFieldEnum: {
    id: 'id',
    imageId: 'imageId',
    userId: 'userId',
    label: 'label',
    x: 'x',
    y: 'y',
    width: 'width',
    height: 'height',
    color: 'color',
    confidence: 'confidence',
    isValidated: 'isValidated',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AnnotationScalarFieldEnum = (typeof AnnotationScalarFieldEnum)[keyof typeof AnnotationScalarFieldEnum]


  export const ImageVerificationScalarFieldEnum: {
    id: 'id',
    imageId: 'imageId',
    verifierId: 'verifierId',
    isValid: 'isValid',
    notes: 'notes',
    mlScore: 'mlScore',
    verifiedAt: 'verifiedAt'
  };

  export type ImageVerificationScalarFieldEnum = (typeof ImageVerificationScalarFieldEnum)[keyof typeof ImageVerificationScalarFieldEnum]


  export const DatasetScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdBy: 'createdBy',
    format: 'format',
    imageIds: 'imageIds',
    filePath: 'filePath',
    createdAt: 'createdAt',
    exportedAt: 'exportedAt'
  };

  export type DatasetScalarFieldEnum = (typeof DatasetScalarFieldEnum)[keyof typeof DatasetScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    role?: StringNullableFilter<"User"> | string | null
    points?: IntFilter<"User"> | number
    password?: StringFilter<"User"> | string
    validityPercentage?: FloatNullableFilter<"User"> | number | null
    suspicious?: BoolFilter<"User"> | boolean
    isActive?: BoolFilter<"User"> | boolean
    activationToken?: StringNullableFilter<"User"> | string | null
    resetToken?: StringNullableFilter<"User"> | string | null
    resetTokenExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    lastlogin?: DateTimeNullableFilter<"User"> | Date | string | null
    images?: ImageListRelationFilter
    annotations?: AnnotationListRelationFilter
    ImageVerification?: ImageVerificationListRelationFilter
    profile?: XOR<ProfileNullableScalarRelationFilter, ProfileWhereInput> | null
    organizations?: OrganizationListRelationFilter
    ledOrganization?: OrganizationListRelationFilter
    userTransactions?: PointsTransactionListRelationFilter
    cashierTransactions?: PointsTransactionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrderInput | SortOrder
    points?: SortOrder
    password?: SortOrder
    validityPercentage?: SortOrderInput | SortOrder
    suspicious?: SortOrder
    isActive?: SortOrder
    activationToken?: SortOrderInput | SortOrder
    resetToken?: SortOrderInput | SortOrder
    resetTokenExpiry?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    lastlogin?: SortOrderInput | SortOrder
    images?: ImageOrderByRelationAggregateInput
    annotations?: AnnotationOrderByRelationAggregateInput
    ImageVerification?: ImageVerificationOrderByRelationAggregateInput
    profile?: ProfileOrderByWithRelationInput
    organizations?: OrganizationOrderByRelationAggregateInput
    ledOrganization?: OrganizationOrderByRelationAggregateInput
    userTransactions?: PointsTransactionOrderByRelationAggregateInput
    cashierTransactions?: PointsTransactionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    role?: StringNullableFilter<"User"> | string | null
    points?: IntFilter<"User"> | number
    password?: StringFilter<"User"> | string
    validityPercentage?: FloatNullableFilter<"User"> | number | null
    suspicious?: BoolFilter<"User"> | boolean
    isActive?: BoolFilter<"User"> | boolean
    activationToken?: StringNullableFilter<"User"> | string | null
    resetToken?: StringNullableFilter<"User"> | string | null
    resetTokenExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    lastlogin?: DateTimeNullableFilter<"User"> | Date | string | null
    images?: ImageListRelationFilter
    annotations?: AnnotationListRelationFilter
    ImageVerification?: ImageVerificationListRelationFilter
    profile?: XOR<ProfileNullableScalarRelationFilter, ProfileWhereInput> | null
    organizations?: OrganizationListRelationFilter
    ledOrganization?: OrganizationListRelationFilter
    userTransactions?: PointsTransactionListRelationFilter
    cashierTransactions?: PointsTransactionListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrderInput | SortOrder
    points?: SortOrder
    password?: SortOrder
    validityPercentage?: SortOrderInput | SortOrder
    suspicious?: SortOrder
    isActive?: SortOrder
    activationToken?: SortOrderInput | SortOrder
    resetToken?: SortOrderInput | SortOrder
    resetTokenExpiry?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    lastlogin?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    role?: StringNullableWithAggregatesFilter<"User"> | string | null
    points?: IntWithAggregatesFilter<"User"> | number
    password?: StringWithAggregatesFilter<"User"> | string
    validityPercentage?: FloatNullableWithAggregatesFilter<"User"> | number | null
    suspicious?: BoolWithAggregatesFilter<"User"> | boolean
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    activationToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    resetToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    resetTokenExpiry?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    lastlogin?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type ProfileWhereInput = {
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    id?: IntFilter<"Profile"> | number
    bio?: StringFilter<"Profile"> | string
    userId?: IntFilter<"Profile"> | number
    image?: StringFilter<"Profile"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ProfileOrderByWithRelationInput = {
    id?: SortOrder
    bio?: SortOrder
    userId?: SortOrder
    image?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    bio?: StringFilter<"Profile"> | string
    image?: StringFilter<"Profile"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type ProfileOrderByWithAggregationInput = {
    id?: SortOrder
    bio?: SortOrder
    userId?: SortOrder
    image?: SortOrder
    _count?: ProfileCountOrderByAggregateInput
    _avg?: ProfileAvgOrderByAggregateInput
    _max?: ProfileMaxOrderByAggregateInput
    _min?: ProfileMinOrderByAggregateInput
    _sum?: ProfileSumOrderByAggregateInput
  }

  export type ProfileScalarWhereWithAggregatesInput = {
    AND?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    OR?: ProfileScalarWhereWithAggregatesInput[]
    NOT?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Profile"> | number
    bio?: StringWithAggregatesFilter<"Profile"> | string
    userId?: IntWithAggregatesFilter<"Profile"> | number
    image?: StringWithAggregatesFilter<"Profile"> | string
  }

  export type OrganizationWhereInput = {
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    id?: IntFilter<"Organization"> | number
    name?: StringFilter<"Organization"> | string
    description?: StringNullableFilter<"Organization"> | string | null
    leaderId?: IntFilter<"Organization"> | number
    leader?: XOR<UserScalarRelationFilter, UserWhereInput>
    members?: UserListRelationFilter
    images?: ImageListRelationFilter
  }

  export type OrganizationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    leaderId?: SortOrder
    leader?: UserOrderByWithRelationInput
    members?: UserOrderByRelationAggregateInput
    images?: ImageOrderByRelationAggregateInput
  }

  export type OrganizationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    name?: StringFilter<"Organization"> | string
    description?: StringNullableFilter<"Organization"> | string | null
    leaderId?: IntFilter<"Organization"> | number
    leader?: XOR<UserScalarRelationFilter, UserWhereInput>
    members?: UserListRelationFilter
    images?: ImageListRelationFilter
  }, "id">

  export type OrganizationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    leaderId?: SortOrder
    _count?: OrganizationCountOrderByAggregateInput
    _avg?: OrganizationAvgOrderByAggregateInput
    _max?: OrganizationMaxOrderByAggregateInput
    _min?: OrganizationMinOrderByAggregateInput
    _sum?: OrganizationSumOrderByAggregateInput
  }

  export type OrganizationScalarWhereWithAggregatesInput = {
    AND?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    OR?: OrganizationScalarWhereWithAggregatesInput[]
    NOT?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Organization"> | number
    name?: StringWithAggregatesFilter<"Organization"> | string
    description?: StringNullableWithAggregatesFilter<"Organization"> | string | null
    leaderId?: IntWithAggregatesFilter<"Organization"> | number
  }

  export type PointsTransactionWhereInput = {
    AND?: PointsTransactionWhereInput | PointsTransactionWhereInput[]
    OR?: PointsTransactionWhereInput[]
    NOT?: PointsTransactionWhereInput | PointsTransactionWhereInput[]
    id?: IntFilter<"PointsTransaction"> | number
    userId?: IntFilter<"PointsTransaction"> | number
    cashierId?: IntFilter<"PointsTransaction"> | number
    points?: IntFilter<"PointsTransaction"> | number
    type?: StringFilter<"PointsTransaction"> | string
    reason?: StringNullableFilter<"PointsTransaction"> | string | null
    createdAt?: DateTimeFilter<"PointsTransaction"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    cashier?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PointsTransactionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    cashierId?: SortOrder
    points?: SortOrder
    type?: SortOrder
    reason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    cashier?: UserOrderByWithRelationInput
  }

  export type PointsTransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PointsTransactionWhereInput | PointsTransactionWhereInput[]
    OR?: PointsTransactionWhereInput[]
    NOT?: PointsTransactionWhereInput | PointsTransactionWhereInput[]
    userId?: IntFilter<"PointsTransaction"> | number
    cashierId?: IntFilter<"PointsTransaction"> | number
    points?: IntFilter<"PointsTransaction"> | number
    type?: StringFilter<"PointsTransaction"> | string
    reason?: StringNullableFilter<"PointsTransaction"> | string | null
    createdAt?: DateTimeFilter<"PointsTransaction"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    cashier?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PointsTransactionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    cashierId?: SortOrder
    points?: SortOrder
    type?: SortOrder
    reason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: PointsTransactionCountOrderByAggregateInput
    _avg?: PointsTransactionAvgOrderByAggregateInput
    _max?: PointsTransactionMaxOrderByAggregateInput
    _min?: PointsTransactionMinOrderByAggregateInput
    _sum?: PointsTransactionSumOrderByAggregateInput
  }

  export type PointsTransactionScalarWhereWithAggregatesInput = {
    AND?: PointsTransactionScalarWhereWithAggregatesInput | PointsTransactionScalarWhereWithAggregatesInput[]
    OR?: PointsTransactionScalarWhereWithAggregatesInput[]
    NOT?: PointsTransactionScalarWhereWithAggregatesInput | PointsTransactionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PointsTransaction"> | number
    userId?: IntWithAggregatesFilter<"PointsTransaction"> | number
    cashierId?: IntWithAggregatesFilter<"PointsTransaction"> | number
    points?: IntWithAggregatesFilter<"PointsTransaction"> | number
    type?: StringWithAggregatesFilter<"PointsTransaction"> | string
    reason?: StringNullableWithAggregatesFilter<"PointsTransaction"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PointsTransaction"> | Date | string
  }

  export type ImageWhereInput = {
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    id?: IntFilter<"Image"> | number
    userId?: IntFilter<"Image"> | number
    organizationId?: IntNullableFilter<"Image"> | number | null
    filePath?: StringFilter<"Image"> | string
    fileName?: StringFilter<"Image"> | string
    fileSize?: IntFilter<"Image"> | number
    width?: IntNullableFilter<"Image"> | number | null
    height?: IntNullableFilter<"Image"> | number | null
    format?: StringNullableFilter<"Image"> | string | null
    uploadedAt?: DateTimeFilter<"Image"> | Date | string
    status?: StringFilter<"Image"> | string
    isVerified?: BoolFilter<"Image"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    organization?: XOR<OrganizationNullableScalarRelationFilter, OrganizationWhereInput> | null
    annotations?: AnnotationListRelationFilter
    verifications?: ImageVerificationListRelationFilter
  }

  export type ImageOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    filePath?: SortOrder
    fileName?: SortOrder
    fileSize?: SortOrder
    width?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    format?: SortOrderInput | SortOrder
    uploadedAt?: SortOrder
    status?: SortOrder
    isVerified?: SortOrder
    user?: UserOrderByWithRelationInput
    organization?: OrganizationOrderByWithRelationInput
    annotations?: AnnotationOrderByRelationAggregateInput
    verifications?: ImageVerificationOrderByRelationAggregateInput
  }

  export type ImageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    userId?: IntFilter<"Image"> | number
    organizationId?: IntNullableFilter<"Image"> | number | null
    filePath?: StringFilter<"Image"> | string
    fileName?: StringFilter<"Image"> | string
    fileSize?: IntFilter<"Image"> | number
    width?: IntNullableFilter<"Image"> | number | null
    height?: IntNullableFilter<"Image"> | number | null
    format?: StringNullableFilter<"Image"> | string | null
    uploadedAt?: DateTimeFilter<"Image"> | Date | string
    status?: StringFilter<"Image"> | string
    isVerified?: BoolFilter<"Image"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    organization?: XOR<OrganizationNullableScalarRelationFilter, OrganizationWhereInput> | null
    annotations?: AnnotationListRelationFilter
    verifications?: ImageVerificationListRelationFilter
  }, "id">

  export type ImageOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    filePath?: SortOrder
    fileName?: SortOrder
    fileSize?: SortOrder
    width?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    format?: SortOrderInput | SortOrder
    uploadedAt?: SortOrder
    status?: SortOrder
    isVerified?: SortOrder
    _count?: ImageCountOrderByAggregateInput
    _avg?: ImageAvgOrderByAggregateInput
    _max?: ImageMaxOrderByAggregateInput
    _min?: ImageMinOrderByAggregateInput
    _sum?: ImageSumOrderByAggregateInput
  }

  export type ImageScalarWhereWithAggregatesInput = {
    AND?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    OR?: ImageScalarWhereWithAggregatesInput[]
    NOT?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Image"> | number
    userId?: IntWithAggregatesFilter<"Image"> | number
    organizationId?: IntNullableWithAggregatesFilter<"Image"> | number | null
    filePath?: StringWithAggregatesFilter<"Image"> | string
    fileName?: StringWithAggregatesFilter<"Image"> | string
    fileSize?: IntWithAggregatesFilter<"Image"> | number
    width?: IntNullableWithAggregatesFilter<"Image"> | number | null
    height?: IntNullableWithAggregatesFilter<"Image"> | number | null
    format?: StringNullableWithAggregatesFilter<"Image"> | string | null
    uploadedAt?: DateTimeWithAggregatesFilter<"Image"> | Date | string
    status?: StringWithAggregatesFilter<"Image"> | string
    isVerified?: BoolWithAggregatesFilter<"Image"> | boolean
  }

  export type AnnotationWhereInput = {
    AND?: AnnotationWhereInput | AnnotationWhereInput[]
    OR?: AnnotationWhereInput[]
    NOT?: AnnotationWhereInput | AnnotationWhereInput[]
    id?: IntFilter<"Annotation"> | number
    imageId?: IntFilter<"Annotation"> | number
    userId?: IntFilter<"Annotation"> | number
    label?: StringFilter<"Annotation"> | string
    x?: FloatFilter<"Annotation"> | number
    y?: FloatFilter<"Annotation"> | number
    width?: FloatFilter<"Annotation"> | number
    height?: FloatFilter<"Annotation"> | number
    color?: StringFilter<"Annotation"> | string
    confidence?: FloatNullableFilter<"Annotation"> | number | null
    isValidated?: BoolFilter<"Annotation"> | boolean
    createdAt?: DateTimeFilter<"Annotation"> | Date | string
    updatedAt?: DateTimeFilter<"Annotation"> | Date | string
    image?: XOR<ImageScalarRelationFilter, ImageWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AnnotationOrderByWithRelationInput = {
    id?: SortOrder
    imageId?: SortOrder
    userId?: SortOrder
    label?: SortOrder
    x?: SortOrder
    y?: SortOrder
    width?: SortOrder
    height?: SortOrder
    color?: SortOrder
    confidence?: SortOrderInput | SortOrder
    isValidated?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    image?: ImageOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type AnnotationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AnnotationWhereInput | AnnotationWhereInput[]
    OR?: AnnotationWhereInput[]
    NOT?: AnnotationWhereInput | AnnotationWhereInput[]
    imageId?: IntFilter<"Annotation"> | number
    userId?: IntFilter<"Annotation"> | number
    label?: StringFilter<"Annotation"> | string
    x?: FloatFilter<"Annotation"> | number
    y?: FloatFilter<"Annotation"> | number
    width?: FloatFilter<"Annotation"> | number
    height?: FloatFilter<"Annotation"> | number
    color?: StringFilter<"Annotation"> | string
    confidence?: FloatNullableFilter<"Annotation"> | number | null
    isValidated?: BoolFilter<"Annotation"> | boolean
    createdAt?: DateTimeFilter<"Annotation"> | Date | string
    updatedAt?: DateTimeFilter<"Annotation"> | Date | string
    image?: XOR<ImageScalarRelationFilter, ImageWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AnnotationOrderByWithAggregationInput = {
    id?: SortOrder
    imageId?: SortOrder
    userId?: SortOrder
    label?: SortOrder
    x?: SortOrder
    y?: SortOrder
    width?: SortOrder
    height?: SortOrder
    color?: SortOrder
    confidence?: SortOrderInput | SortOrder
    isValidated?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AnnotationCountOrderByAggregateInput
    _avg?: AnnotationAvgOrderByAggregateInput
    _max?: AnnotationMaxOrderByAggregateInput
    _min?: AnnotationMinOrderByAggregateInput
    _sum?: AnnotationSumOrderByAggregateInput
  }

  export type AnnotationScalarWhereWithAggregatesInput = {
    AND?: AnnotationScalarWhereWithAggregatesInput | AnnotationScalarWhereWithAggregatesInput[]
    OR?: AnnotationScalarWhereWithAggregatesInput[]
    NOT?: AnnotationScalarWhereWithAggregatesInput | AnnotationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Annotation"> | number
    imageId?: IntWithAggregatesFilter<"Annotation"> | number
    userId?: IntWithAggregatesFilter<"Annotation"> | number
    label?: StringWithAggregatesFilter<"Annotation"> | string
    x?: FloatWithAggregatesFilter<"Annotation"> | number
    y?: FloatWithAggregatesFilter<"Annotation"> | number
    width?: FloatWithAggregatesFilter<"Annotation"> | number
    height?: FloatWithAggregatesFilter<"Annotation"> | number
    color?: StringWithAggregatesFilter<"Annotation"> | string
    confidence?: FloatNullableWithAggregatesFilter<"Annotation"> | number | null
    isValidated?: BoolWithAggregatesFilter<"Annotation"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Annotation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Annotation"> | Date | string
  }

  export type ImageVerificationWhereInput = {
    AND?: ImageVerificationWhereInput | ImageVerificationWhereInput[]
    OR?: ImageVerificationWhereInput[]
    NOT?: ImageVerificationWhereInput | ImageVerificationWhereInput[]
    id?: IntFilter<"ImageVerification"> | number
    imageId?: IntFilter<"ImageVerification"> | number
    verifierId?: IntFilter<"ImageVerification"> | number
    isValid?: BoolFilter<"ImageVerification"> | boolean
    notes?: StringNullableFilter<"ImageVerification"> | string | null
    mlScore?: FloatNullableFilter<"ImageVerification"> | number | null
    verifiedAt?: DateTimeFilter<"ImageVerification"> | Date | string
    image?: XOR<ImageScalarRelationFilter, ImageWhereInput>
    verifier?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ImageVerificationOrderByWithRelationInput = {
    id?: SortOrder
    imageId?: SortOrder
    verifierId?: SortOrder
    isValid?: SortOrder
    notes?: SortOrderInput | SortOrder
    mlScore?: SortOrderInput | SortOrder
    verifiedAt?: SortOrder
    image?: ImageOrderByWithRelationInput
    verifier?: UserOrderByWithRelationInput
  }

  export type ImageVerificationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ImageVerificationWhereInput | ImageVerificationWhereInput[]
    OR?: ImageVerificationWhereInput[]
    NOT?: ImageVerificationWhereInput | ImageVerificationWhereInput[]
    imageId?: IntFilter<"ImageVerification"> | number
    verifierId?: IntFilter<"ImageVerification"> | number
    isValid?: BoolFilter<"ImageVerification"> | boolean
    notes?: StringNullableFilter<"ImageVerification"> | string | null
    mlScore?: FloatNullableFilter<"ImageVerification"> | number | null
    verifiedAt?: DateTimeFilter<"ImageVerification"> | Date | string
    image?: XOR<ImageScalarRelationFilter, ImageWhereInput>
    verifier?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ImageVerificationOrderByWithAggregationInput = {
    id?: SortOrder
    imageId?: SortOrder
    verifierId?: SortOrder
    isValid?: SortOrder
    notes?: SortOrderInput | SortOrder
    mlScore?: SortOrderInput | SortOrder
    verifiedAt?: SortOrder
    _count?: ImageVerificationCountOrderByAggregateInput
    _avg?: ImageVerificationAvgOrderByAggregateInput
    _max?: ImageVerificationMaxOrderByAggregateInput
    _min?: ImageVerificationMinOrderByAggregateInput
    _sum?: ImageVerificationSumOrderByAggregateInput
  }

  export type ImageVerificationScalarWhereWithAggregatesInput = {
    AND?: ImageVerificationScalarWhereWithAggregatesInput | ImageVerificationScalarWhereWithAggregatesInput[]
    OR?: ImageVerificationScalarWhereWithAggregatesInput[]
    NOT?: ImageVerificationScalarWhereWithAggregatesInput | ImageVerificationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ImageVerification"> | number
    imageId?: IntWithAggregatesFilter<"ImageVerification"> | number
    verifierId?: IntWithAggregatesFilter<"ImageVerification"> | number
    isValid?: BoolWithAggregatesFilter<"ImageVerification"> | boolean
    notes?: StringNullableWithAggregatesFilter<"ImageVerification"> | string | null
    mlScore?: FloatNullableWithAggregatesFilter<"ImageVerification"> | number | null
    verifiedAt?: DateTimeWithAggregatesFilter<"ImageVerification"> | Date | string
  }

  export type DatasetWhereInput = {
    AND?: DatasetWhereInput | DatasetWhereInput[]
    OR?: DatasetWhereInput[]
    NOT?: DatasetWhereInput | DatasetWhereInput[]
    id?: IntFilter<"Dataset"> | number
    name?: StringFilter<"Dataset"> | string
    description?: StringNullableFilter<"Dataset"> | string | null
    createdBy?: IntFilter<"Dataset"> | number
    format?: StringFilter<"Dataset"> | string
    imageIds?: IntNullableListFilter<"Dataset">
    filePath?: StringNullableFilter<"Dataset"> | string | null
    createdAt?: DateTimeFilter<"Dataset"> | Date | string
    exportedAt?: DateTimeNullableFilter<"Dataset"> | Date | string | null
  }

  export type DatasetOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdBy?: SortOrder
    format?: SortOrder
    imageIds?: SortOrder
    filePath?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    exportedAt?: SortOrderInput | SortOrder
  }

  export type DatasetWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DatasetWhereInput | DatasetWhereInput[]
    OR?: DatasetWhereInput[]
    NOT?: DatasetWhereInput | DatasetWhereInput[]
    name?: StringFilter<"Dataset"> | string
    description?: StringNullableFilter<"Dataset"> | string | null
    createdBy?: IntFilter<"Dataset"> | number
    format?: StringFilter<"Dataset"> | string
    imageIds?: IntNullableListFilter<"Dataset">
    filePath?: StringNullableFilter<"Dataset"> | string | null
    createdAt?: DateTimeFilter<"Dataset"> | Date | string
    exportedAt?: DateTimeNullableFilter<"Dataset"> | Date | string | null
  }, "id">

  export type DatasetOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdBy?: SortOrder
    format?: SortOrder
    imageIds?: SortOrder
    filePath?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    exportedAt?: SortOrderInput | SortOrder
    _count?: DatasetCountOrderByAggregateInput
    _avg?: DatasetAvgOrderByAggregateInput
    _max?: DatasetMaxOrderByAggregateInput
    _min?: DatasetMinOrderByAggregateInput
    _sum?: DatasetSumOrderByAggregateInput
  }

  export type DatasetScalarWhereWithAggregatesInput = {
    AND?: DatasetScalarWhereWithAggregatesInput | DatasetScalarWhereWithAggregatesInput[]
    OR?: DatasetScalarWhereWithAggregatesInput[]
    NOT?: DatasetScalarWhereWithAggregatesInput | DatasetScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Dataset"> | number
    name?: StringWithAggregatesFilter<"Dataset"> | string
    description?: StringNullableWithAggregatesFilter<"Dataset"> | string | null
    createdBy?: IntWithAggregatesFilter<"Dataset"> | number
    format?: StringWithAggregatesFilter<"Dataset"> | string
    imageIds?: IntNullableListFilter<"Dataset">
    filePath?: StringNullableWithAggregatesFilter<"Dataset"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Dataset"> | Date | string
    exportedAt?: DateTimeNullableWithAggregatesFilter<"Dataset"> | Date | string | null
  }

  export type UserCreateInput = {
    name: string
    email: string
    role?: string | null
    points?: number
    password: string
    validityPercentage?: number | null
    suspicious?: boolean
    isActive?: boolean
    activationToken?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    lastlogin?: Date | string | null
    images?: ImageCreateNestedManyWithoutUserInput
    annotations?: AnnotationCreateNestedManyWithoutUserInput
    ImageVerification?: ImageVerificationCreateNestedManyWithoutVerifierInput
    profile?: ProfileCreateNestedOneWithoutUserInput
    organizations?: OrganizationCreateNestedManyWithoutMembersInput
    ledOrganization?: OrganizationCreateNestedManyWithoutLeaderInput
    userTransactions?: PointsTransactionCreateNestedManyWithoutUserInput
    cashierTransactions?: PointsTransactionCreateNestedManyWithoutCashierInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    role?: string | null
    points?: number
    password: string
    validityPercentage?: number | null
    suspicious?: boolean
    isActive?: boolean
    activationToken?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    lastlogin?: Date | string | null
    images?: ImageUncheckedCreateNestedManyWithoutUserInput
    annotations?: AnnotationUncheckedCreateNestedManyWithoutUserInput
    ImageVerification?: ImageVerificationUncheckedCreateNestedManyWithoutVerifierInput
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    organizations?: OrganizationUncheckedCreateNestedManyWithoutMembersInput
    ledOrganization?: OrganizationUncheckedCreateNestedManyWithoutLeaderInput
    userTransactions?: PointsTransactionUncheckedCreateNestedManyWithoutUserInput
    cashierTransactions?: PointsTransactionUncheckedCreateNestedManyWithoutCashierInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    validityPercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    suspicious?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    activationToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastlogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: ImageUpdateManyWithoutUserNestedInput
    annotations?: AnnotationUpdateManyWithoutUserNestedInput
    ImageVerification?: ImageVerificationUpdateManyWithoutVerifierNestedInput
    profile?: ProfileUpdateOneWithoutUserNestedInput
    organizations?: OrganizationUpdateManyWithoutMembersNestedInput
    ledOrganization?: OrganizationUpdateManyWithoutLeaderNestedInput
    userTransactions?: PointsTransactionUpdateManyWithoutUserNestedInput
    cashierTransactions?: PointsTransactionUpdateManyWithoutCashierNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    validityPercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    suspicious?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    activationToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastlogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: ImageUncheckedUpdateManyWithoutUserNestedInput
    annotations?: AnnotationUncheckedUpdateManyWithoutUserNestedInput
    ImageVerification?: ImageVerificationUncheckedUpdateManyWithoutVerifierNestedInput
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    organizations?: OrganizationUncheckedUpdateManyWithoutMembersNestedInput
    ledOrganization?: OrganizationUncheckedUpdateManyWithoutLeaderNestedInput
    userTransactions?: PointsTransactionUncheckedUpdateManyWithoutUserNestedInput
    cashierTransactions?: PointsTransactionUncheckedUpdateManyWithoutCashierNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    role?: string | null
    points?: number
    password: string
    validityPercentage?: number | null
    suspicious?: boolean
    isActive?: boolean
    activationToken?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    lastlogin?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    validityPercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    suspicious?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    activationToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastlogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    validityPercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    suspicious?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    activationToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastlogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProfileCreateInput = {
    bio: string
    image: string
    user: UserCreateNestedOneWithoutProfileInput
  }

  export type ProfileUncheckedCreateInput = {
    id?: number
    bio: string
    userId: number
    image: string
  }

  export type ProfileUpdateInput = {
    bio?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    bio?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
  }

  export type ProfileCreateManyInput = {
    id?: number
    bio: string
    userId: number
    image: string
  }

  export type ProfileUpdateManyMutationInput = {
    bio?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
  }

  export type ProfileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    bio?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
  }

  export type OrganizationCreateInput = {
    name: string
    description?: string | null
    leader: UserCreateNestedOneWithoutLedOrganizationInput
    members?: UserCreateNestedManyWithoutOrganizationsInput
    images?: ImageCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    leaderId: number
    members?: UserUncheckedCreateNestedManyWithoutOrganizationsInput
    images?: ImageUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    leader?: UserUpdateOneRequiredWithoutLedOrganizationNestedInput
    members?: UserUpdateManyWithoutOrganizationsNestedInput
    images?: ImageUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    leaderId?: IntFieldUpdateOperationsInput | number
    members?: UserUncheckedUpdateManyWithoutOrganizationsNestedInput
    images?: ImageUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    leaderId: number
  }

  export type OrganizationUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrganizationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    leaderId?: IntFieldUpdateOperationsInput | number
  }

  export type PointsTransactionCreateInput = {
    points: number
    type: string
    reason?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutUserTransactionsInput
    cashier: UserCreateNestedOneWithoutCashierTransactionsInput
  }

  export type PointsTransactionUncheckedCreateInput = {
    id?: number
    userId: number
    cashierId: number
    points: number
    type: string
    reason?: string | null
    createdAt?: Date | string
  }

  export type PointsTransactionUpdateInput = {
    points?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserTransactionsNestedInput
    cashier?: UserUpdateOneRequiredWithoutCashierTransactionsNestedInput
  }

  export type PointsTransactionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    cashierId?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointsTransactionCreateManyInput = {
    id?: number
    userId: number
    cashierId: number
    points: number
    type: string
    reason?: string | null
    createdAt?: Date | string
  }

  export type PointsTransactionUpdateManyMutationInput = {
    points?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointsTransactionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    cashierId?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageCreateInput = {
    filePath: string
    fileName: string
    fileSize: number
    width?: number | null
    height?: number | null
    format?: string | null
    uploadedAt?: Date | string
    status?: string
    isVerified?: boolean
    user: UserCreateNestedOneWithoutImagesInput
    organization?: OrganizationCreateNestedOneWithoutImagesInput
    annotations?: AnnotationCreateNestedManyWithoutImageInput
    verifications?: ImageVerificationCreateNestedManyWithoutImageInput
  }

  export type ImageUncheckedCreateInput = {
    id?: number
    userId: number
    organizationId?: number | null
    filePath: string
    fileName: string
    fileSize: number
    width?: number | null
    height?: number | null
    format?: string | null
    uploadedAt?: Date | string
    status?: string
    isVerified?: boolean
    annotations?: AnnotationUncheckedCreateNestedManyWithoutImageInput
    verifications?: ImageVerificationUncheckedCreateNestedManyWithoutImageInput
  }

  export type ImageUpdateInput = {
    filePath?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    format?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutImagesNestedInput
    organization?: OrganizationUpdateOneWithoutImagesNestedInput
    annotations?: AnnotationUpdateManyWithoutImageNestedInput
    verifications?: ImageVerificationUpdateManyWithoutImageNestedInput
  }

  export type ImageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    organizationId?: NullableIntFieldUpdateOperationsInput | number | null
    filePath?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    format?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    annotations?: AnnotationUncheckedUpdateManyWithoutImageNestedInput
    verifications?: ImageVerificationUncheckedUpdateManyWithoutImageNestedInput
  }

  export type ImageCreateManyInput = {
    id?: number
    userId: number
    organizationId?: number | null
    filePath: string
    fileName: string
    fileSize: number
    width?: number | null
    height?: number | null
    format?: string | null
    uploadedAt?: Date | string
    status?: string
    isVerified?: boolean
  }

  export type ImageUpdateManyMutationInput = {
    filePath?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    format?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ImageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    organizationId?: NullableIntFieldUpdateOperationsInput | number | null
    filePath?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    format?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AnnotationCreateInput = {
    label: string
    x: number
    y: number
    width: number
    height: number
    color?: string
    confidence?: number | null
    isValidated?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    image: ImageCreateNestedOneWithoutAnnotationsInput
    user: UserCreateNestedOneWithoutAnnotationsInput
  }

  export type AnnotationUncheckedCreateInput = {
    id?: number
    imageId: number
    userId: number
    label: string
    x: number
    y: number
    width: number
    height: number
    color?: string
    confidence?: number | null
    isValidated?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnnotationUpdateInput = {
    label?: StringFieldUpdateOperationsInput | string
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    width?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    isValidated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: ImageUpdateOneRequiredWithoutAnnotationsNestedInput
    user?: UserUpdateOneRequiredWithoutAnnotationsNestedInput
  }

  export type AnnotationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    width?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    isValidated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnotationCreateManyInput = {
    id?: number
    imageId: number
    userId: number
    label: string
    x: number
    y: number
    width: number
    height: number
    color?: string
    confidence?: number | null
    isValidated?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnnotationUpdateManyMutationInput = {
    label?: StringFieldUpdateOperationsInput | string
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    width?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    isValidated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnotationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    width?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    isValidated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageVerificationCreateInput = {
    isValid: boolean
    notes?: string | null
    mlScore?: number | null
    verifiedAt?: Date | string
    image: ImageCreateNestedOneWithoutVerificationsInput
    verifier: UserCreateNestedOneWithoutImageVerificationInput
  }

  export type ImageVerificationUncheckedCreateInput = {
    id?: number
    imageId: number
    verifierId: number
    isValid: boolean
    notes?: string | null
    mlScore?: number | null
    verifiedAt?: Date | string
  }

  export type ImageVerificationUpdateInput = {
    isValid?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    mlScore?: NullableFloatFieldUpdateOperationsInput | number | null
    verifiedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: ImageUpdateOneRequiredWithoutVerificationsNestedInput
    verifier?: UserUpdateOneRequiredWithoutImageVerificationNestedInput
  }

  export type ImageVerificationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageId?: IntFieldUpdateOperationsInput | number
    verifierId?: IntFieldUpdateOperationsInput | number
    isValid?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    mlScore?: NullableFloatFieldUpdateOperationsInput | number | null
    verifiedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageVerificationCreateManyInput = {
    id?: number
    imageId: number
    verifierId: number
    isValid: boolean
    notes?: string | null
    mlScore?: number | null
    verifiedAt?: Date | string
  }

  export type ImageVerificationUpdateManyMutationInput = {
    isValid?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    mlScore?: NullableFloatFieldUpdateOperationsInput | number | null
    verifiedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageVerificationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageId?: IntFieldUpdateOperationsInput | number
    verifierId?: IntFieldUpdateOperationsInput | number
    isValid?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    mlScore?: NullableFloatFieldUpdateOperationsInput | number | null
    verifiedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DatasetCreateInput = {
    name: string
    description?: string | null
    createdBy: number
    format: string
    imageIds?: DatasetCreateimageIdsInput | number[]
    filePath?: string | null
    createdAt?: Date | string
    exportedAt?: Date | string | null
  }

  export type DatasetUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    createdBy: number
    format: string
    imageIds?: DatasetCreateimageIdsInput | number[]
    filePath?: string | null
    createdAt?: Date | string
    exportedAt?: Date | string | null
  }

  export type DatasetUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: IntFieldUpdateOperationsInput | number
    format?: StringFieldUpdateOperationsInput | string
    imageIds?: DatasetUpdateimageIdsInput | number[]
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exportedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DatasetUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: IntFieldUpdateOperationsInput | number
    format?: StringFieldUpdateOperationsInput | string
    imageIds?: DatasetUpdateimageIdsInput | number[]
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exportedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DatasetCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    createdBy: number
    format: string
    imageIds?: DatasetCreateimageIdsInput | number[]
    filePath?: string | null
    createdAt?: Date | string
    exportedAt?: Date | string | null
  }

  export type DatasetUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: IntFieldUpdateOperationsInput | number
    format?: StringFieldUpdateOperationsInput | string
    imageIds?: DatasetUpdateimageIdsInput | number[]
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exportedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DatasetUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: IntFieldUpdateOperationsInput | number
    format?: StringFieldUpdateOperationsInput | string
    imageIds?: DatasetUpdateimageIdsInput | number[]
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exportedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ImageListRelationFilter = {
    every?: ImageWhereInput
    some?: ImageWhereInput
    none?: ImageWhereInput
  }

  export type AnnotationListRelationFilter = {
    every?: AnnotationWhereInput
    some?: AnnotationWhereInput
    none?: AnnotationWhereInput
  }

  export type ImageVerificationListRelationFilter = {
    every?: ImageVerificationWhereInput
    some?: ImageVerificationWhereInput
    none?: ImageVerificationWhereInput
  }

  export type ProfileNullableScalarRelationFilter = {
    is?: ProfileWhereInput | null
    isNot?: ProfileWhereInput | null
  }

  export type OrganizationListRelationFilter = {
    every?: OrganizationWhereInput
    some?: OrganizationWhereInput
    none?: OrganizationWhereInput
  }

  export type PointsTransactionListRelationFilter = {
    every?: PointsTransactionWhereInput
    some?: PointsTransactionWhereInput
    none?: PointsTransactionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AnnotationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ImageVerificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrganizationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PointsTransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    points?: SortOrder
    password?: SortOrder
    validityPercentage?: SortOrder
    suspicious?: SortOrder
    isActive?: SortOrder
    activationToken?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiry?: SortOrder
    createdAt?: SortOrder
    lastlogin?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    points?: SortOrder
    validityPercentage?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    points?: SortOrder
    password?: SortOrder
    validityPercentage?: SortOrder
    suspicious?: SortOrder
    isActive?: SortOrder
    activationToken?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiry?: SortOrder
    createdAt?: SortOrder
    lastlogin?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    points?: SortOrder
    password?: SortOrder
    validityPercentage?: SortOrder
    suspicious?: SortOrder
    isActive?: SortOrder
    activationToken?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiry?: SortOrder
    createdAt?: SortOrder
    lastlogin?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    points?: SortOrder
    validityPercentage?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ProfileCountOrderByAggregateInput = {
    id?: SortOrder
    bio?: SortOrder
    userId?: SortOrder
    image?: SortOrder
  }

  export type ProfileAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    bio?: SortOrder
    userId?: SortOrder
    image?: SortOrder
  }

  export type ProfileMinOrderByAggregateInput = {
    id?: SortOrder
    bio?: SortOrder
    userId?: SortOrder
    image?: SortOrder
  }

  export type ProfileSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrganizationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    leaderId?: SortOrder
  }

  export type OrganizationAvgOrderByAggregateInput = {
    id?: SortOrder
    leaderId?: SortOrder
  }

  export type OrganizationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    leaderId?: SortOrder
  }

  export type OrganizationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    leaderId?: SortOrder
  }

  export type OrganizationSumOrderByAggregateInput = {
    id?: SortOrder
    leaderId?: SortOrder
  }

  export type PointsTransactionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    cashierId?: SortOrder
    points?: SortOrder
    type?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type PointsTransactionAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    cashierId?: SortOrder
    points?: SortOrder
  }

  export type PointsTransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    cashierId?: SortOrder
    points?: SortOrder
    type?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type PointsTransactionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    cashierId?: SortOrder
    points?: SortOrder
    type?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type PointsTransactionSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    cashierId?: SortOrder
    points?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type OrganizationNullableScalarRelationFilter = {
    is?: OrganizationWhereInput | null
    isNot?: OrganizationWhereInput | null
  }

  export type ImageCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    filePath?: SortOrder
    fileName?: SortOrder
    fileSize?: SortOrder
    width?: SortOrder
    height?: SortOrder
    format?: SortOrder
    uploadedAt?: SortOrder
    status?: SortOrder
    isVerified?: SortOrder
  }

  export type ImageAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    fileSize?: SortOrder
    width?: SortOrder
    height?: SortOrder
  }

  export type ImageMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    filePath?: SortOrder
    fileName?: SortOrder
    fileSize?: SortOrder
    width?: SortOrder
    height?: SortOrder
    format?: SortOrder
    uploadedAt?: SortOrder
    status?: SortOrder
    isVerified?: SortOrder
  }

  export type ImageMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    filePath?: SortOrder
    fileName?: SortOrder
    fileSize?: SortOrder
    width?: SortOrder
    height?: SortOrder
    format?: SortOrder
    uploadedAt?: SortOrder
    status?: SortOrder
    isVerified?: SortOrder
  }

  export type ImageSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    fileSize?: SortOrder
    width?: SortOrder
    height?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ImageScalarRelationFilter = {
    is?: ImageWhereInput
    isNot?: ImageWhereInput
  }

  export type AnnotationCountOrderByAggregateInput = {
    id?: SortOrder
    imageId?: SortOrder
    userId?: SortOrder
    label?: SortOrder
    x?: SortOrder
    y?: SortOrder
    width?: SortOrder
    height?: SortOrder
    color?: SortOrder
    confidence?: SortOrder
    isValidated?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnnotationAvgOrderByAggregateInput = {
    id?: SortOrder
    imageId?: SortOrder
    userId?: SortOrder
    x?: SortOrder
    y?: SortOrder
    width?: SortOrder
    height?: SortOrder
    confidence?: SortOrder
  }

  export type AnnotationMaxOrderByAggregateInput = {
    id?: SortOrder
    imageId?: SortOrder
    userId?: SortOrder
    label?: SortOrder
    x?: SortOrder
    y?: SortOrder
    width?: SortOrder
    height?: SortOrder
    color?: SortOrder
    confidence?: SortOrder
    isValidated?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnnotationMinOrderByAggregateInput = {
    id?: SortOrder
    imageId?: SortOrder
    userId?: SortOrder
    label?: SortOrder
    x?: SortOrder
    y?: SortOrder
    width?: SortOrder
    height?: SortOrder
    color?: SortOrder
    confidence?: SortOrder
    isValidated?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnnotationSumOrderByAggregateInput = {
    id?: SortOrder
    imageId?: SortOrder
    userId?: SortOrder
    x?: SortOrder
    y?: SortOrder
    width?: SortOrder
    height?: SortOrder
    confidence?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ImageVerificationCountOrderByAggregateInput = {
    id?: SortOrder
    imageId?: SortOrder
    verifierId?: SortOrder
    isValid?: SortOrder
    notes?: SortOrder
    mlScore?: SortOrder
    verifiedAt?: SortOrder
  }

  export type ImageVerificationAvgOrderByAggregateInput = {
    id?: SortOrder
    imageId?: SortOrder
    verifierId?: SortOrder
    mlScore?: SortOrder
  }

  export type ImageVerificationMaxOrderByAggregateInput = {
    id?: SortOrder
    imageId?: SortOrder
    verifierId?: SortOrder
    isValid?: SortOrder
    notes?: SortOrder
    mlScore?: SortOrder
    verifiedAt?: SortOrder
  }

  export type ImageVerificationMinOrderByAggregateInput = {
    id?: SortOrder
    imageId?: SortOrder
    verifierId?: SortOrder
    isValid?: SortOrder
    notes?: SortOrder
    mlScore?: SortOrder
    verifiedAt?: SortOrder
  }

  export type ImageVerificationSumOrderByAggregateInput = {
    id?: SortOrder
    imageId?: SortOrder
    verifierId?: SortOrder
    mlScore?: SortOrder
  }

  export type IntNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    has?: number | IntFieldRefInput<$PrismaModel> | null
    hasEvery?: number[] | ListIntFieldRefInput<$PrismaModel>
    hasSome?: number[] | ListIntFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type DatasetCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdBy?: SortOrder
    format?: SortOrder
    imageIds?: SortOrder
    filePath?: SortOrder
    createdAt?: SortOrder
    exportedAt?: SortOrder
  }

  export type DatasetAvgOrderByAggregateInput = {
    id?: SortOrder
    createdBy?: SortOrder
    imageIds?: SortOrder
  }

  export type DatasetMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdBy?: SortOrder
    format?: SortOrder
    filePath?: SortOrder
    createdAt?: SortOrder
    exportedAt?: SortOrder
  }

  export type DatasetMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdBy?: SortOrder
    format?: SortOrder
    filePath?: SortOrder
    createdAt?: SortOrder
    exportedAt?: SortOrder
  }

  export type DatasetSumOrderByAggregateInput = {
    id?: SortOrder
    createdBy?: SortOrder
    imageIds?: SortOrder
  }

  export type ImageCreateNestedManyWithoutUserInput = {
    create?: XOR<ImageCreateWithoutUserInput, ImageUncheckedCreateWithoutUserInput> | ImageCreateWithoutUserInput[] | ImageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutUserInput | ImageCreateOrConnectWithoutUserInput[]
    createMany?: ImageCreateManyUserInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type AnnotationCreateNestedManyWithoutUserInput = {
    create?: XOR<AnnotationCreateWithoutUserInput, AnnotationUncheckedCreateWithoutUserInput> | AnnotationCreateWithoutUserInput[] | AnnotationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnnotationCreateOrConnectWithoutUserInput | AnnotationCreateOrConnectWithoutUserInput[]
    createMany?: AnnotationCreateManyUserInputEnvelope
    connect?: AnnotationWhereUniqueInput | AnnotationWhereUniqueInput[]
  }

  export type ImageVerificationCreateNestedManyWithoutVerifierInput = {
    create?: XOR<ImageVerificationCreateWithoutVerifierInput, ImageVerificationUncheckedCreateWithoutVerifierInput> | ImageVerificationCreateWithoutVerifierInput[] | ImageVerificationUncheckedCreateWithoutVerifierInput[]
    connectOrCreate?: ImageVerificationCreateOrConnectWithoutVerifierInput | ImageVerificationCreateOrConnectWithoutVerifierInput[]
    createMany?: ImageVerificationCreateManyVerifierInputEnvelope
    connect?: ImageVerificationWhereUniqueInput | ImageVerificationWhereUniqueInput[]
  }

  export type ProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    connect?: ProfileWhereUniqueInput
  }

  export type OrganizationCreateNestedManyWithoutMembersInput = {
    create?: XOR<OrganizationCreateWithoutMembersInput, OrganizationUncheckedCreateWithoutMembersInput> | OrganizationCreateWithoutMembersInput[] | OrganizationUncheckedCreateWithoutMembersInput[]
    connectOrCreate?: OrganizationCreateOrConnectWithoutMembersInput | OrganizationCreateOrConnectWithoutMembersInput[]
    connect?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
  }

  export type OrganizationCreateNestedManyWithoutLeaderInput = {
    create?: XOR<OrganizationCreateWithoutLeaderInput, OrganizationUncheckedCreateWithoutLeaderInput> | OrganizationCreateWithoutLeaderInput[] | OrganizationUncheckedCreateWithoutLeaderInput[]
    connectOrCreate?: OrganizationCreateOrConnectWithoutLeaderInput | OrganizationCreateOrConnectWithoutLeaderInput[]
    createMany?: OrganizationCreateManyLeaderInputEnvelope
    connect?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
  }

  export type PointsTransactionCreateNestedManyWithoutUserInput = {
    create?: XOR<PointsTransactionCreateWithoutUserInput, PointsTransactionUncheckedCreateWithoutUserInput> | PointsTransactionCreateWithoutUserInput[] | PointsTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PointsTransactionCreateOrConnectWithoutUserInput | PointsTransactionCreateOrConnectWithoutUserInput[]
    createMany?: PointsTransactionCreateManyUserInputEnvelope
    connect?: PointsTransactionWhereUniqueInput | PointsTransactionWhereUniqueInput[]
  }

  export type PointsTransactionCreateNestedManyWithoutCashierInput = {
    create?: XOR<PointsTransactionCreateWithoutCashierInput, PointsTransactionUncheckedCreateWithoutCashierInput> | PointsTransactionCreateWithoutCashierInput[] | PointsTransactionUncheckedCreateWithoutCashierInput[]
    connectOrCreate?: PointsTransactionCreateOrConnectWithoutCashierInput | PointsTransactionCreateOrConnectWithoutCashierInput[]
    createMany?: PointsTransactionCreateManyCashierInputEnvelope
    connect?: PointsTransactionWhereUniqueInput | PointsTransactionWhereUniqueInput[]
  }

  export type ImageUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ImageCreateWithoutUserInput, ImageUncheckedCreateWithoutUserInput> | ImageCreateWithoutUserInput[] | ImageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutUserInput | ImageCreateOrConnectWithoutUserInput[]
    createMany?: ImageCreateManyUserInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type AnnotationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AnnotationCreateWithoutUserInput, AnnotationUncheckedCreateWithoutUserInput> | AnnotationCreateWithoutUserInput[] | AnnotationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnnotationCreateOrConnectWithoutUserInput | AnnotationCreateOrConnectWithoutUserInput[]
    createMany?: AnnotationCreateManyUserInputEnvelope
    connect?: AnnotationWhereUniqueInput | AnnotationWhereUniqueInput[]
  }

  export type ImageVerificationUncheckedCreateNestedManyWithoutVerifierInput = {
    create?: XOR<ImageVerificationCreateWithoutVerifierInput, ImageVerificationUncheckedCreateWithoutVerifierInput> | ImageVerificationCreateWithoutVerifierInput[] | ImageVerificationUncheckedCreateWithoutVerifierInput[]
    connectOrCreate?: ImageVerificationCreateOrConnectWithoutVerifierInput | ImageVerificationCreateOrConnectWithoutVerifierInput[]
    createMany?: ImageVerificationCreateManyVerifierInputEnvelope
    connect?: ImageVerificationWhereUniqueInput | ImageVerificationWhereUniqueInput[]
  }

  export type ProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    connect?: ProfileWhereUniqueInput
  }

  export type OrganizationUncheckedCreateNestedManyWithoutMembersInput = {
    create?: XOR<OrganizationCreateWithoutMembersInput, OrganizationUncheckedCreateWithoutMembersInput> | OrganizationCreateWithoutMembersInput[] | OrganizationUncheckedCreateWithoutMembersInput[]
    connectOrCreate?: OrganizationCreateOrConnectWithoutMembersInput | OrganizationCreateOrConnectWithoutMembersInput[]
    connect?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
  }

  export type OrganizationUncheckedCreateNestedManyWithoutLeaderInput = {
    create?: XOR<OrganizationCreateWithoutLeaderInput, OrganizationUncheckedCreateWithoutLeaderInput> | OrganizationCreateWithoutLeaderInput[] | OrganizationUncheckedCreateWithoutLeaderInput[]
    connectOrCreate?: OrganizationCreateOrConnectWithoutLeaderInput | OrganizationCreateOrConnectWithoutLeaderInput[]
    createMany?: OrganizationCreateManyLeaderInputEnvelope
    connect?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
  }

  export type PointsTransactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PointsTransactionCreateWithoutUserInput, PointsTransactionUncheckedCreateWithoutUserInput> | PointsTransactionCreateWithoutUserInput[] | PointsTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PointsTransactionCreateOrConnectWithoutUserInput | PointsTransactionCreateOrConnectWithoutUserInput[]
    createMany?: PointsTransactionCreateManyUserInputEnvelope
    connect?: PointsTransactionWhereUniqueInput | PointsTransactionWhereUniqueInput[]
  }

  export type PointsTransactionUncheckedCreateNestedManyWithoutCashierInput = {
    create?: XOR<PointsTransactionCreateWithoutCashierInput, PointsTransactionUncheckedCreateWithoutCashierInput> | PointsTransactionCreateWithoutCashierInput[] | PointsTransactionUncheckedCreateWithoutCashierInput[]
    connectOrCreate?: PointsTransactionCreateOrConnectWithoutCashierInput | PointsTransactionCreateOrConnectWithoutCashierInput[]
    createMany?: PointsTransactionCreateManyCashierInputEnvelope
    connect?: PointsTransactionWhereUniqueInput | PointsTransactionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ImageUpdateManyWithoutUserNestedInput = {
    create?: XOR<ImageCreateWithoutUserInput, ImageUncheckedCreateWithoutUserInput> | ImageCreateWithoutUserInput[] | ImageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutUserInput | ImageCreateOrConnectWithoutUserInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutUserInput | ImageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ImageCreateManyUserInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutUserInput | ImageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutUserInput | ImageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type AnnotationUpdateManyWithoutUserNestedInput = {
    create?: XOR<AnnotationCreateWithoutUserInput, AnnotationUncheckedCreateWithoutUserInput> | AnnotationCreateWithoutUserInput[] | AnnotationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnnotationCreateOrConnectWithoutUserInput | AnnotationCreateOrConnectWithoutUserInput[]
    upsert?: AnnotationUpsertWithWhereUniqueWithoutUserInput | AnnotationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AnnotationCreateManyUserInputEnvelope
    set?: AnnotationWhereUniqueInput | AnnotationWhereUniqueInput[]
    disconnect?: AnnotationWhereUniqueInput | AnnotationWhereUniqueInput[]
    delete?: AnnotationWhereUniqueInput | AnnotationWhereUniqueInput[]
    connect?: AnnotationWhereUniqueInput | AnnotationWhereUniqueInput[]
    update?: AnnotationUpdateWithWhereUniqueWithoutUserInput | AnnotationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AnnotationUpdateManyWithWhereWithoutUserInput | AnnotationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AnnotationScalarWhereInput | AnnotationScalarWhereInput[]
  }

  export type ImageVerificationUpdateManyWithoutVerifierNestedInput = {
    create?: XOR<ImageVerificationCreateWithoutVerifierInput, ImageVerificationUncheckedCreateWithoutVerifierInput> | ImageVerificationCreateWithoutVerifierInput[] | ImageVerificationUncheckedCreateWithoutVerifierInput[]
    connectOrCreate?: ImageVerificationCreateOrConnectWithoutVerifierInput | ImageVerificationCreateOrConnectWithoutVerifierInput[]
    upsert?: ImageVerificationUpsertWithWhereUniqueWithoutVerifierInput | ImageVerificationUpsertWithWhereUniqueWithoutVerifierInput[]
    createMany?: ImageVerificationCreateManyVerifierInputEnvelope
    set?: ImageVerificationWhereUniqueInput | ImageVerificationWhereUniqueInput[]
    disconnect?: ImageVerificationWhereUniqueInput | ImageVerificationWhereUniqueInput[]
    delete?: ImageVerificationWhereUniqueInput | ImageVerificationWhereUniqueInput[]
    connect?: ImageVerificationWhereUniqueInput | ImageVerificationWhereUniqueInput[]
    update?: ImageVerificationUpdateWithWhereUniqueWithoutVerifierInput | ImageVerificationUpdateWithWhereUniqueWithoutVerifierInput[]
    updateMany?: ImageVerificationUpdateManyWithWhereWithoutVerifierInput | ImageVerificationUpdateManyWithWhereWithoutVerifierInput[]
    deleteMany?: ImageVerificationScalarWhereInput | ImageVerificationScalarWhereInput[]
  }

  export type ProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    upsert?: ProfileUpsertWithoutUserInput
    disconnect?: ProfileWhereInput | boolean
    delete?: ProfileWhereInput | boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutUserInput, ProfileUpdateWithoutUserInput>, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type OrganizationUpdateManyWithoutMembersNestedInput = {
    create?: XOR<OrganizationCreateWithoutMembersInput, OrganizationUncheckedCreateWithoutMembersInput> | OrganizationCreateWithoutMembersInput[] | OrganizationUncheckedCreateWithoutMembersInput[]
    connectOrCreate?: OrganizationCreateOrConnectWithoutMembersInput | OrganizationCreateOrConnectWithoutMembersInput[]
    upsert?: OrganizationUpsertWithWhereUniqueWithoutMembersInput | OrganizationUpsertWithWhereUniqueWithoutMembersInput[]
    set?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
    disconnect?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
    delete?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
    connect?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
    update?: OrganizationUpdateWithWhereUniqueWithoutMembersInput | OrganizationUpdateWithWhereUniqueWithoutMembersInput[]
    updateMany?: OrganizationUpdateManyWithWhereWithoutMembersInput | OrganizationUpdateManyWithWhereWithoutMembersInput[]
    deleteMany?: OrganizationScalarWhereInput | OrganizationScalarWhereInput[]
  }

  export type OrganizationUpdateManyWithoutLeaderNestedInput = {
    create?: XOR<OrganizationCreateWithoutLeaderInput, OrganizationUncheckedCreateWithoutLeaderInput> | OrganizationCreateWithoutLeaderInput[] | OrganizationUncheckedCreateWithoutLeaderInput[]
    connectOrCreate?: OrganizationCreateOrConnectWithoutLeaderInput | OrganizationCreateOrConnectWithoutLeaderInput[]
    upsert?: OrganizationUpsertWithWhereUniqueWithoutLeaderInput | OrganizationUpsertWithWhereUniqueWithoutLeaderInput[]
    createMany?: OrganizationCreateManyLeaderInputEnvelope
    set?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
    disconnect?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
    delete?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
    connect?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
    update?: OrganizationUpdateWithWhereUniqueWithoutLeaderInput | OrganizationUpdateWithWhereUniqueWithoutLeaderInput[]
    updateMany?: OrganizationUpdateManyWithWhereWithoutLeaderInput | OrganizationUpdateManyWithWhereWithoutLeaderInput[]
    deleteMany?: OrganizationScalarWhereInput | OrganizationScalarWhereInput[]
  }

  export type PointsTransactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<PointsTransactionCreateWithoutUserInput, PointsTransactionUncheckedCreateWithoutUserInput> | PointsTransactionCreateWithoutUserInput[] | PointsTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PointsTransactionCreateOrConnectWithoutUserInput | PointsTransactionCreateOrConnectWithoutUserInput[]
    upsert?: PointsTransactionUpsertWithWhereUniqueWithoutUserInput | PointsTransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PointsTransactionCreateManyUserInputEnvelope
    set?: PointsTransactionWhereUniqueInput | PointsTransactionWhereUniqueInput[]
    disconnect?: PointsTransactionWhereUniqueInput | PointsTransactionWhereUniqueInput[]
    delete?: PointsTransactionWhereUniqueInput | PointsTransactionWhereUniqueInput[]
    connect?: PointsTransactionWhereUniqueInput | PointsTransactionWhereUniqueInput[]
    update?: PointsTransactionUpdateWithWhereUniqueWithoutUserInput | PointsTransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PointsTransactionUpdateManyWithWhereWithoutUserInput | PointsTransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PointsTransactionScalarWhereInput | PointsTransactionScalarWhereInput[]
  }

  export type PointsTransactionUpdateManyWithoutCashierNestedInput = {
    create?: XOR<PointsTransactionCreateWithoutCashierInput, PointsTransactionUncheckedCreateWithoutCashierInput> | PointsTransactionCreateWithoutCashierInput[] | PointsTransactionUncheckedCreateWithoutCashierInput[]
    connectOrCreate?: PointsTransactionCreateOrConnectWithoutCashierInput | PointsTransactionCreateOrConnectWithoutCashierInput[]
    upsert?: PointsTransactionUpsertWithWhereUniqueWithoutCashierInput | PointsTransactionUpsertWithWhereUniqueWithoutCashierInput[]
    createMany?: PointsTransactionCreateManyCashierInputEnvelope
    set?: PointsTransactionWhereUniqueInput | PointsTransactionWhereUniqueInput[]
    disconnect?: PointsTransactionWhereUniqueInput | PointsTransactionWhereUniqueInput[]
    delete?: PointsTransactionWhereUniqueInput | PointsTransactionWhereUniqueInput[]
    connect?: PointsTransactionWhereUniqueInput | PointsTransactionWhereUniqueInput[]
    update?: PointsTransactionUpdateWithWhereUniqueWithoutCashierInput | PointsTransactionUpdateWithWhereUniqueWithoutCashierInput[]
    updateMany?: PointsTransactionUpdateManyWithWhereWithoutCashierInput | PointsTransactionUpdateManyWithWhereWithoutCashierInput[]
    deleteMany?: PointsTransactionScalarWhereInput | PointsTransactionScalarWhereInput[]
  }

  export type ImageUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ImageCreateWithoutUserInput, ImageUncheckedCreateWithoutUserInput> | ImageCreateWithoutUserInput[] | ImageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutUserInput | ImageCreateOrConnectWithoutUserInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutUserInput | ImageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ImageCreateManyUserInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutUserInput | ImageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutUserInput | ImageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type AnnotationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AnnotationCreateWithoutUserInput, AnnotationUncheckedCreateWithoutUserInput> | AnnotationCreateWithoutUserInput[] | AnnotationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnnotationCreateOrConnectWithoutUserInput | AnnotationCreateOrConnectWithoutUserInput[]
    upsert?: AnnotationUpsertWithWhereUniqueWithoutUserInput | AnnotationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AnnotationCreateManyUserInputEnvelope
    set?: AnnotationWhereUniqueInput | AnnotationWhereUniqueInput[]
    disconnect?: AnnotationWhereUniqueInput | AnnotationWhereUniqueInput[]
    delete?: AnnotationWhereUniqueInput | AnnotationWhereUniqueInput[]
    connect?: AnnotationWhereUniqueInput | AnnotationWhereUniqueInput[]
    update?: AnnotationUpdateWithWhereUniqueWithoutUserInput | AnnotationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AnnotationUpdateManyWithWhereWithoutUserInput | AnnotationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AnnotationScalarWhereInput | AnnotationScalarWhereInput[]
  }

  export type ImageVerificationUncheckedUpdateManyWithoutVerifierNestedInput = {
    create?: XOR<ImageVerificationCreateWithoutVerifierInput, ImageVerificationUncheckedCreateWithoutVerifierInput> | ImageVerificationCreateWithoutVerifierInput[] | ImageVerificationUncheckedCreateWithoutVerifierInput[]
    connectOrCreate?: ImageVerificationCreateOrConnectWithoutVerifierInput | ImageVerificationCreateOrConnectWithoutVerifierInput[]
    upsert?: ImageVerificationUpsertWithWhereUniqueWithoutVerifierInput | ImageVerificationUpsertWithWhereUniqueWithoutVerifierInput[]
    createMany?: ImageVerificationCreateManyVerifierInputEnvelope
    set?: ImageVerificationWhereUniqueInput | ImageVerificationWhereUniqueInput[]
    disconnect?: ImageVerificationWhereUniqueInput | ImageVerificationWhereUniqueInput[]
    delete?: ImageVerificationWhereUniqueInput | ImageVerificationWhereUniqueInput[]
    connect?: ImageVerificationWhereUniqueInput | ImageVerificationWhereUniqueInput[]
    update?: ImageVerificationUpdateWithWhereUniqueWithoutVerifierInput | ImageVerificationUpdateWithWhereUniqueWithoutVerifierInput[]
    updateMany?: ImageVerificationUpdateManyWithWhereWithoutVerifierInput | ImageVerificationUpdateManyWithWhereWithoutVerifierInput[]
    deleteMany?: ImageVerificationScalarWhereInput | ImageVerificationScalarWhereInput[]
  }

  export type ProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    upsert?: ProfileUpsertWithoutUserInput
    disconnect?: ProfileWhereInput | boolean
    delete?: ProfileWhereInput | boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutUserInput, ProfileUpdateWithoutUserInput>, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type OrganizationUncheckedUpdateManyWithoutMembersNestedInput = {
    create?: XOR<OrganizationCreateWithoutMembersInput, OrganizationUncheckedCreateWithoutMembersInput> | OrganizationCreateWithoutMembersInput[] | OrganizationUncheckedCreateWithoutMembersInput[]
    connectOrCreate?: OrganizationCreateOrConnectWithoutMembersInput | OrganizationCreateOrConnectWithoutMembersInput[]
    upsert?: OrganizationUpsertWithWhereUniqueWithoutMembersInput | OrganizationUpsertWithWhereUniqueWithoutMembersInput[]
    set?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
    disconnect?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
    delete?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
    connect?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
    update?: OrganizationUpdateWithWhereUniqueWithoutMembersInput | OrganizationUpdateWithWhereUniqueWithoutMembersInput[]
    updateMany?: OrganizationUpdateManyWithWhereWithoutMembersInput | OrganizationUpdateManyWithWhereWithoutMembersInput[]
    deleteMany?: OrganizationScalarWhereInput | OrganizationScalarWhereInput[]
  }

  export type OrganizationUncheckedUpdateManyWithoutLeaderNestedInput = {
    create?: XOR<OrganizationCreateWithoutLeaderInput, OrganizationUncheckedCreateWithoutLeaderInput> | OrganizationCreateWithoutLeaderInput[] | OrganizationUncheckedCreateWithoutLeaderInput[]
    connectOrCreate?: OrganizationCreateOrConnectWithoutLeaderInput | OrganizationCreateOrConnectWithoutLeaderInput[]
    upsert?: OrganizationUpsertWithWhereUniqueWithoutLeaderInput | OrganizationUpsertWithWhereUniqueWithoutLeaderInput[]
    createMany?: OrganizationCreateManyLeaderInputEnvelope
    set?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
    disconnect?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
    delete?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
    connect?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
    update?: OrganizationUpdateWithWhereUniqueWithoutLeaderInput | OrganizationUpdateWithWhereUniqueWithoutLeaderInput[]
    updateMany?: OrganizationUpdateManyWithWhereWithoutLeaderInput | OrganizationUpdateManyWithWhereWithoutLeaderInput[]
    deleteMany?: OrganizationScalarWhereInput | OrganizationScalarWhereInput[]
  }

  export type PointsTransactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PointsTransactionCreateWithoutUserInput, PointsTransactionUncheckedCreateWithoutUserInput> | PointsTransactionCreateWithoutUserInput[] | PointsTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PointsTransactionCreateOrConnectWithoutUserInput | PointsTransactionCreateOrConnectWithoutUserInput[]
    upsert?: PointsTransactionUpsertWithWhereUniqueWithoutUserInput | PointsTransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PointsTransactionCreateManyUserInputEnvelope
    set?: PointsTransactionWhereUniqueInput | PointsTransactionWhereUniqueInput[]
    disconnect?: PointsTransactionWhereUniqueInput | PointsTransactionWhereUniqueInput[]
    delete?: PointsTransactionWhereUniqueInput | PointsTransactionWhereUniqueInput[]
    connect?: PointsTransactionWhereUniqueInput | PointsTransactionWhereUniqueInput[]
    update?: PointsTransactionUpdateWithWhereUniqueWithoutUserInput | PointsTransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PointsTransactionUpdateManyWithWhereWithoutUserInput | PointsTransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PointsTransactionScalarWhereInput | PointsTransactionScalarWhereInput[]
  }

  export type PointsTransactionUncheckedUpdateManyWithoutCashierNestedInput = {
    create?: XOR<PointsTransactionCreateWithoutCashierInput, PointsTransactionUncheckedCreateWithoutCashierInput> | PointsTransactionCreateWithoutCashierInput[] | PointsTransactionUncheckedCreateWithoutCashierInput[]
    connectOrCreate?: PointsTransactionCreateOrConnectWithoutCashierInput | PointsTransactionCreateOrConnectWithoutCashierInput[]
    upsert?: PointsTransactionUpsertWithWhereUniqueWithoutCashierInput | PointsTransactionUpsertWithWhereUniqueWithoutCashierInput[]
    createMany?: PointsTransactionCreateManyCashierInputEnvelope
    set?: PointsTransactionWhereUniqueInput | PointsTransactionWhereUniqueInput[]
    disconnect?: PointsTransactionWhereUniqueInput | PointsTransactionWhereUniqueInput[]
    delete?: PointsTransactionWhereUniqueInput | PointsTransactionWhereUniqueInput[]
    connect?: PointsTransactionWhereUniqueInput | PointsTransactionWhereUniqueInput[]
    update?: PointsTransactionUpdateWithWhereUniqueWithoutCashierInput | PointsTransactionUpdateWithWhereUniqueWithoutCashierInput[]
    updateMany?: PointsTransactionUpdateManyWithWhereWithoutCashierInput | PointsTransactionUpdateManyWithWhereWithoutCashierInput[]
    deleteMany?: PointsTransactionScalarWhereInput | PointsTransactionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutProfileInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutProfileNestedInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    upsert?: UserUpsertWithoutProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfileInput, UserUpdateWithoutProfileInput>, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserCreateNestedOneWithoutLedOrganizationInput = {
    create?: XOR<UserCreateWithoutLedOrganizationInput, UserUncheckedCreateWithoutLedOrganizationInput>
    connectOrCreate?: UserCreateOrConnectWithoutLedOrganizationInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutOrganizationsInput = {
    create?: XOR<UserCreateWithoutOrganizationsInput, UserUncheckedCreateWithoutOrganizationsInput> | UserCreateWithoutOrganizationsInput[] | UserUncheckedCreateWithoutOrganizationsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationsInput | UserCreateOrConnectWithoutOrganizationsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ImageCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<ImageCreateWithoutOrganizationInput, ImageUncheckedCreateWithoutOrganizationInput> | ImageCreateWithoutOrganizationInput[] | ImageUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutOrganizationInput | ImageCreateOrConnectWithoutOrganizationInput[]
    createMany?: ImageCreateManyOrganizationInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutOrganizationsInput = {
    create?: XOR<UserCreateWithoutOrganizationsInput, UserUncheckedCreateWithoutOrganizationsInput> | UserCreateWithoutOrganizationsInput[] | UserUncheckedCreateWithoutOrganizationsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationsInput | UserCreateOrConnectWithoutOrganizationsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ImageUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<ImageCreateWithoutOrganizationInput, ImageUncheckedCreateWithoutOrganizationInput> | ImageCreateWithoutOrganizationInput[] | ImageUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutOrganizationInput | ImageCreateOrConnectWithoutOrganizationInput[]
    createMany?: ImageCreateManyOrganizationInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutLedOrganizationNestedInput = {
    create?: XOR<UserCreateWithoutLedOrganizationInput, UserUncheckedCreateWithoutLedOrganizationInput>
    connectOrCreate?: UserCreateOrConnectWithoutLedOrganizationInput
    upsert?: UserUpsertWithoutLedOrganizationInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLedOrganizationInput, UserUpdateWithoutLedOrganizationInput>, UserUncheckedUpdateWithoutLedOrganizationInput>
  }

  export type UserUpdateManyWithoutOrganizationsNestedInput = {
    create?: XOR<UserCreateWithoutOrganizationsInput, UserUncheckedCreateWithoutOrganizationsInput> | UserCreateWithoutOrganizationsInput[] | UserUncheckedCreateWithoutOrganizationsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationsInput | UserCreateOrConnectWithoutOrganizationsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutOrganizationsInput | UserUpsertWithWhereUniqueWithoutOrganizationsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutOrganizationsInput | UserUpdateWithWhereUniqueWithoutOrganizationsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutOrganizationsInput | UserUpdateManyWithWhereWithoutOrganizationsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ImageUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<ImageCreateWithoutOrganizationInput, ImageUncheckedCreateWithoutOrganizationInput> | ImageCreateWithoutOrganizationInput[] | ImageUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutOrganizationInput | ImageCreateOrConnectWithoutOrganizationInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutOrganizationInput | ImageUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: ImageCreateManyOrganizationInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutOrganizationInput | ImageUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutOrganizationInput | ImageUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutOrganizationsNestedInput = {
    create?: XOR<UserCreateWithoutOrganizationsInput, UserUncheckedCreateWithoutOrganizationsInput> | UserCreateWithoutOrganizationsInput[] | UserUncheckedCreateWithoutOrganizationsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationsInput | UserCreateOrConnectWithoutOrganizationsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutOrganizationsInput | UserUpsertWithWhereUniqueWithoutOrganizationsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutOrganizationsInput | UserUpdateWithWhereUniqueWithoutOrganizationsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutOrganizationsInput | UserUpdateManyWithWhereWithoutOrganizationsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ImageUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<ImageCreateWithoutOrganizationInput, ImageUncheckedCreateWithoutOrganizationInput> | ImageCreateWithoutOrganizationInput[] | ImageUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutOrganizationInput | ImageCreateOrConnectWithoutOrganizationInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutOrganizationInput | ImageUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: ImageCreateManyOrganizationInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutOrganizationInput | ImageUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutOrganizationInput | ImageUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserTransactionsInput = {
    create?: XOR<UserCreateWithoutUserTransactionsInput, UserUncheckedCreateWithoutUserTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserTransactionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCashierTransactionsInput = {
    create?: XOR<UserCreateWithoutCashierTransactionsInput, UserUncheckedCreateWithoutCashierTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCashierTransactionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserTransactionsNestedInput = {
    create?: XOR<UserCreateWithoutUserTransactionsInput, UserUncheckedCreateWithoutUserTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserTransactionsInput
    upsert?: UserUpsertWithoutUserTransactionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserTransactionsInput, UserUpdateWithoutUserTransactionsInput>, UserUncheckedUpdateWithoutUserTransactionsInput>
  }

  export type UserUpdateOneRequiredWithoutCashierTransactionsNestedInput = {
    create?: XOR<UserCreateWithoutCashierTransactionsInput, UserUncheckedCreateWithoutCashierTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCashierTransactionsInput
    upsert?: UserUpsertWithoutCashierTransactionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCashierTransactionsInput, UserUpdateWithoutCashierTransactionsInput>, UserUncheckedUpdateWithoutCashierTransactionsInput>
  }

  export type UserCreateNestedOneWithoutImagesInput = {
    create?: XOR<UserCreateWithoutImagesInput, UserUncheckedCreateWithoutImagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutImagesInput
    connect?: UserWhereUniqueInput
  }

  export type OrganizationCreateNestedOneWithoutImagesInput = {
    create?: XOR<OrganizationCreateWithoutImagesInput, OrganizationUncheckedCreateWithoutImagesInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutImagesInput
    connect?: OrganizationWhereUniqueInput
  }

  export type AnnotationCreateNestedManyWithoutImageInput = {
    create?: XOR<AnnotationCreateWithoutImageInput, AnnotationUncheckedCreateWithoutImageInput> | AnnotationCreateWithoutImageInput[] | AnnotationUncheckedCreateWithoutImageInput[]
    connectOrCreate?: AnnotationCreateOrConnectWithoutImageInput | AnnotationCreateOrConnectWithoutImageInput[]
    createMany?: AnnotationCreateManyImageInputEnvelope
    connect?: AnnotationWhereUniqueInput | AnnotationWhereUniqueInput[]
  }

  export type ImageVerificationCreateNestedManyWithoutImageInput = {
    create?: XOR<ImageVerificationCreateWithoutImageInput, ImageVerificationUncheckedCreateWithoutImageInput> | ImageVerificationCreateWithoutImageInput[] | ImageVerificationUncheckedCreateWithoutImageInput[]
    connectOrCreate?: ImageVerificationCreateOrConnectWithoutImageInput | ImageVerificationCreateOrConnectWithoutImageInput[]
    createMany?: ImageVerificationCreateManyImageInputEnvelope
    connect?: ImageVerificationWhereUniqueInput | ImageVerificationWhereUniqueInput[]
  }

  export type AnnotationUncheckedCreateNestedManyWithoutImageInput = {
    create?: XOR<AnnotationCreateWithoutImageInput, AnnotationUncheckedCreateWithoutImageInput> | AnnotationCreateWithoutImageInput[] | AnnotationUncheckedCreateWithoutImageInput[]
    connectOrCreate?: AnnotationCreateOrConnectWithoutImageInput | AnnotationCreateOrConnectWithoutImageInput[]
    createMany?: AnnotationCreateManyImageInputEnvelope
    connect?: AnnotationWhereUniqueInput | AnnotationWhereUniqueInput[]
  }

  export type ImageVerificationUncheckedCreateNestedManyWithoutImageInput = {
    create?: XOR<ImageVerificationCreateWithoutImageInput, ImageVerificationUncheckedCreateWithoutImageInput> | ImageVerificationCreateWithoutImageInput[] | ImageVerificationUncheckedCreateWithoutImageInput[]
    connectOrCreate?: ImageVerificationCreateOrConnectWithoutImageInput | ImageVerificationCreateOrConnectWithoutImageInput[]
    createMany?: ImageVerificationCreateManyImageInputEnvelope
    connect?: ImageVerificationWhereUniqueInput | ImageVerificationWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<UserCreateWithoutImagesInput, UserUncheckedCreateWithoutImagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutImagesInput
    upsert?: UserUpsertWithoutImagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutImagesInput, UserUpdateWithoutImagesInput>, UserUncheckedUpdateWithoutImagesInput>
  }

  export type OrganizationUpdateOneWithoutImagesNestedInput = {
    create?: XOR<OrganizationCreateWithoutImagesInput, OrganizationUncheckedCreateWithoutImagesInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutImagesInput
    upsert?: OrganizationUpsertWithoutImagesInput
    disconnect?: OrganizationWhereInput | boolean
    delete?: OrganizationWhereInput | boolean
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutImagesInput, OrganizationUpdateWithoutImagesInput>, OrganizationUncheckedUpdateWithoutImagesInput>
  }

  export type AnnotationUpdateManyWithoutImageNestedInput = {
    create?: XOR<AnnotationCreateWithoutImageInput, AnnotationUncheckedCreateWithoutImageInput> | AnnotationCreateWithoutImageInput[] | AnnotationUncheckedCreateWithoutImageInput[]
    connectOrCreate?: AnnotationCreateOrConnectWithoutImageInput | AnnotationCreateOrConnectWithoutImageInput[]
    upsert?: AnnotationUpsertWithWhereUniqueWithoutImageInput | AnnotationUpsertWithWhereUniqueWithoutImageInput[]
    createMany?: AnnotationCreateManyImageInputEnvelope
    set?: AnnotationWhereUniqueInput | AnnotationWhereUniqueInput[]
    disconnect?: AnnotationWhereUniqueInput | AnnotationWhereUniqueInput[]
    delete?: AnnotationWhereUniqueInput | AnnotationWhereUniqueInput[]
    connect?: AnnotationWhereUniqueInput | AnnotationWhereUniqueInput[]
    update?: AnnotationUpdateWithWhereUniqueWithoutImageInput | AnnotationUpdateWithWhereUniqueWithoutImageInput[]
    updateMany?: AnnotationUpdateManyWithWhereWithoutImageInput | AnnotationUpdateManyWithWhereWithoutImageInput[]
    deleteMany?: AnnotationScalarWhereInput | AnnotationScalarWhereInput[]
  }

  export type ImageVerificationUpdateManyWithoutImageNestedInput = {
    create?: XOR<ImageVerificationCreateWithoutImageInput, ImageVerificationUncheckedCreateWithoutImageInput> | ImageVerificationCreateWithoutImageInput[] | ImageVerificationUncheckedCreateWithoutImageInput[]
    connectOrCreate?: ImageVerificationCreateOrConnectWithoutImageInput | ImageVerificationCreateOrConnectWithoutImageInput[]
    upsert?: ImageVerificationUpsertWithWhereUniqueWithoutImageInput | ImageVerificationUpsertWithWhereUniqueWithoutImageInput[]
    createMany?: ImageVerificationCreateManyImageInputEnvelope
    set?: ImageVerificationWhereUniqueInput | ImageVerificationWhereUniqueInput[]
    disconnect?: ImageVerificationWhereUniqueInput | ImageVerificationWhereUniqueInput[]
    delete?: ImageVerificationWhereUniqueInput | ImageVerificationWhereUniqueInput[]
    connect?: ImageVerificationWhereUniqueInput | ImageVerificationWhereUniqueInput[]
    update?: ImageVerificationUpdateWithWhereUniqueWithoutImageInput | ImageVerificationUpdateWithWhereUniqueWithoutImageInput[]
    updateMany?: ImageVerificationUpdateManyWithWhereWithoutImageInput | ImageVerificationUpdateManyWithWhereWithoutImageInput[]
    deleteMany?: ImageVerificationScalarWhereInput | ImageVerificationScalarWhereInput[]
  }

  export type AnnotationUncheckedUpdateManyWithoutImageNestedInput = {
    create?: XOR<AnnotationCreateWithoutImageInput, AnnotationUncheckedCreateWithoutImageInput> | AnnotationCreateWithoutImageInput[] | AnnotationUncheckedCreateWithoutImageInput[]
    connectOrCreate?: AnnotationCreateOrConnectWithoutImageInput | AnnotationCreateOrConnectWithoutImageInput[]
    upsert?: AnnotationUpsertWithWhereUniqueWithoutImageInput | AnnotationUpsertWithWhereUniqueWithoutImageInput[]
    createMany?: AnnotationCreateManyImageInputEnvelope
    set?: AnnotationWhereUniqueInput | AnnotationWhereUniqueInput[]
    disconnect?: AnnotationWhereUniqueInput | AnnotationWhereUniqueInput[]
    delete?: AnnotationWhereUniqueInput | AnnotationWhereUniqueInput[]
    connect?: AnnotationWhereUniqueInput | AnnotationWhereUniqueInput[]
    update?: AnnotationUpdateWithWhereUniqueWithoutImageInput | AnnotationUpdateWithWhereUniqueWithoutImageInput[]
    updateMany?: AnnotationUpdateManyWithWhereWithoutImageInput | AnnotationUpdateManyWithWhereWithoutImageInput[]
    deleteMany?: AnnotationScalarWhereInput | AnnotationScalarWhereInput[]
  }

  export type ImageVerificationUncheckedUpdateManyWithoutImageNestedInput = {
    create?: XOR<ImageVerificationCreateWithoutImageInput, ImageVerificationUncheckedCreateWithoutImageInput> | ImageVerificationCreateWithoutImageInput[] | ImageVerificationUncheckedCreateWithoutImageInput[]
    connectOrCreate?: ImageVerificationCreateOrConnectWithoutImageInput | ImageVerificationCreateOrConnectWithoutImageInput[]
    upsert?: ImageVerificationUpsertWithWhereUniqueWithoutImageInput | ImageVerificationUpsertWithWhereUniqueWithoutImageInput[]
    createMany?: ImageVerificationCreateManyImageInputEnvelope
    set?: ImageVerificationWhereUniqueInput | ImageVerificationWhereUniqueInput[]
    disconnect?: ImageVerificationWhereUniqueInput | ImageVerificationWhereUniqueInput[]
    delete?: ImageVerificationWhereUniqueInput | ImageVerificationWhereUniqueInput[]
    connect?: ImageVerificationWhereUniqueInput | ImageVerificationWhereUniqueInput[]
    update?: ImageVerificationUpdateWithWhereUniqueWithoutImageInput | ImageVerificationUpdateWithWhereUniqueWithoutImageInput[]
    updateMany?: ImageVerificationUpdateManyWithWhereWithoutImageInput | ImageVerificationUpdateManyWithWhereWithoutImageInput[]
    deleteMany?: ImageVerificationScalarWhereInput | ImageVerificationScalarWhereInput[]
  }

  export type ImageCreateNestedOneWithoutAnnotationsInput = {
    create?: XOR<ImageCreateWithoutAnnotationsInput, ImageUncheckedCreateWithoutAnnotationsInput>
    connectOrCreate?: ImageCreateOrConnectWithoutAnnotationsInput
    connect?: ImageWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAnnotationsInput = {
    create?: XOR<UserCreateWithoutAnnotationsInput, UserUncheckedCreateWithoutAnnotationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnnotationsInput
    connect?: UserWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ImageUpdateOneRequiredWithoutAnnotationsNestedInput = {
    create?: XOR<ImageCreateWithoutAnnotationsInput, ImageUncheckedCreateWithoutAnnotationsInput>
    connectOrCreate?: ImageCreateOrConnectWithoutAnnotationsInput
    upsert?: ImageUpsertWithoutAnnotationsInput
    connect?: ImageWhereUniqueInput
    update?: XOR<XOR<ImageUpdateToOneWithWhereWithoutAnnotationsInput, ImageUpdateWithoutAnnotationsInput>, ImageUncheckedUpdateWithoutAnnotationsInput>
  }

  export type UserUpdateOneRequiredWithoutAnnotationsNestedInput = {
    create?: XOR<UserCreateWithoutAnnotationsInput, UserUncheckedCreateWithoutAnnotationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnnotationsInput
    upsert?: UserUpsertWithoutAnnotationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAnnotationsInput, UserUpdateWithoutAnnotationsInput>, UserUncheckedUpdateWithoutAnnotationsInput>
  }

  export type ImageCreateNestedOneWithoutVerificationsInput = {
    create?: XOR<ImageCreateWithoutVerificationsInput, ImageUncheckedCreateWithoutVerificationsInput>
    connectOrCreate?: ImageCreateOrConnectWithoutVerificationsInput
    connect?: ImageWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutImageVerificationInput = {
    create?: XOR<UserCreateWithoutImageVerificationInput, UserUncheckedCreateWithoutImageVerificationInput>
    connectOrCreate?: UserCreateOrConnectWithoutImageVerificationInput
    connect?: UserWhereUniqueInput
  }

  export type ImageUpdateOneRequiredWithoutVerificationsNestedInput = {
    create?: XOR<ImageCreateWithoutVerificationsInput, ImageUncheckedCreateWithoutVerificationsInput>
    connectOrCreate?: ImageCreateOrConnectWithoutVerificationsInput
    upsert?: ImageUpsertWithoutVerificationsInput
    connect?: ImageWhereUniqueInput
    update?: XOR<XOR<ImageUpdateToOneWithWhereWithoutVerificationsInput, ImageUpdateWithoutVerificationsInput>, ImageUncheckedUpdateWithoutVerificationsInput>
  }

  export type UserUpdateOneRequiredWithoutImageVerificationNestedInput = {
    create?: XOR<UserCreateWithoutImageVerificationInput, UserUncheckedCreateWithoutImageVerificationInput>
    connectOrCreate?: UserCreateOrConnectWithoutImageVerificationInput
    upsert?: UserUpsertWithoutImageVerificationInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutImageVerificationInput, UserUpdateWithoutImageVerificationInput>, UserUncheckedUpdateWithoutImageVerificationInput>
  }

  export type DatasetCreateimageIdsInput = {
    set: number[]
  }

  export type DatasetUpdateimageIdsInput = {
    set?: number[]
    push?: number | number[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ImageCreateWithoutUserInput = {
    filePath: string
    fileName: string
    fileSize: number
    width?: number | null
    height?: number | null
    format?: string | null
    uploadedAt?: Date | string
    status?: string
    isVerified?: boolean
    organization?: OrganizationCreateNestedOneWithoutImagesInput
    annotations?: AnnotationCreateNestedManyWithoutImageInput
    verifications?: ImageVerificationCreateNestedManyWithoutImageInput
  }

  export type ImageUncheckedCreateWithoutUserInput = {
    id?: number
    organizationId?: number | null
    filePath: string
    fileName: string
    fileSize: number
    width?: number | null
    height?: number | null
    format?: string | null
    uploadedAt?: Date | string
    status?: string
    isVerified?: boolean
    annotations?: AnnotationUncheckedCreateNestedManyWithoutImageInput
    verifications?: ImageVerificationUncheckedCreateNestedManyWithoutImageInput
  }

  export type ImageCreateOrConnectWithoutUserInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutUserInput, ImageUncheckedCreateWithoutUserInput>
  }

  export type ImageCreateManyUserInputEnvelope = {
    data: ImageCreateManyUserInput | ImageCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AnnotationCreateWithoutUserInput = {
    label: string
    x: number
    y: number
    width: number
    height: number
    color?: string
    confidence?: number | null
    isValidated?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    image: ImageCreateNestedOneWithoutAnnotationsInput
  }

  export type AnnotationUncheckedCreateWithoutUserInput = {
    id?: number
    imageId: number
    label: string
    x: number
    y: number
    width: number
    height: number
    color?: string
    confidence?: number | null
    isValidated?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnnotationCreateOrConnectWithoutUserInput = {
    where: AnnotationWhereUniqueInput
    create: XOR<AnnotationCreateWithoutUserInput, AnnotationUncheckedCreateWithoutUserInput>
  }

  export type AnnotationCreateManyUserInputEnvelope = {
    data: AnnotationCreateManyUserInput | AnnotationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ImageVerificationCreateWithoutVerifierInput = {
    isValid: boolean
    notes?: string | null
    mlScore?: number | null
    verifiedAt?: Date | string
    image: ImageCreateNestedOneWithoutVerificationsInput
  }

  export type ImageVerificationUncheckedCreateWithoutVerifierInput = {
    id?: number
    imageId: number
    isValid: boolean
    notes?: string | null
    mlScore?: number | null
    verifiedAt?: Date | string
  }

  export type ImageVerificationCreateOrConnectWithoutVerifierInput = {
    where: ImageVerificationWhereUniqueInput
    create: XOR<ImageVerificationCreateWithoutVerifierInput, ImageVerificationUncheckedCreateWithoutVerifierInput>
  }

  export type ImageVerificationCreateManyVerifierInputEnvelope = {
    data: ImageVerificationCreateManyVerifierInput | ImageVerificationCreateManyVerifierInput[]
    skipDuplicates?: boolean
  }

  export type ProfileCreateWithoutUserInput = {
    bio: string
    image: string
  }

  export type ProfileUncheckedCreateWithoutUserInput = {
    id?: number
    bio: string
    image: string
  }

  export type ProfileCreateOrConnectWithoutUserInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
  }

  export type OrganizationCreateWithoutMembersInput = {
    name: string
    description?: string | null
    leader: UserCreateNestedOneWithoutLedOrganizationInput
    images?: ImageCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutMembersInput = {
    id?: number
    name: string
    description?: string | null
    leaderId: number
    images?: ImageUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutMembersInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutMembersInput, OrganizationUncheckedCreateWithoutMembersInput>
  }

  export type OrganizationCreateWithoutLeaderInput = {
    name: string
    description?: string | null
    members?: UserCreateNestedManyWithoutOrganizationsInput
    images?: ImageCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutLeaderInput = {
    id?: number
    name: string
    description?: string | null
    members?: UserUncheckedCreateNestedManyWithoutOrganizationsInput
    images?: ImageUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutLeaderInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutLeaderInput, OrganizationUncheckedCreateWithoutLeaderInput>
  }

  export type OrganizationCreateManyLeaderInputEnvelope = {
    data: OrganizationCreateManyLeaderInput | OrganizationCreateManyLeaderInput[]
    skipDuplicates?: boolean
  }

  export type PointsTransactionCreateWithoutUserInput = {
    points: number
    type: string
    reason?: string | null
    createdAt?: Date | string
    cashier: UserCreateNestedOneWithoutCashierTransactionsInput
  }

  export type PointsTransactionUncheckedCreateWithoutUserInput = {
    id?: number
    cashierId: number
    points: number
    type: string
    reason?: string | null
    createdAt?: Date | string
  }

  export type PointsTransactionCreateOrConnectWithoutUserInput = {
    where: PointsTransactionWhereUniqueInput
    create: XOR<PointsTransactionCreateWithoutUserInput, PointsTransactionUncheckedCreateWithoutUserInput>
  }

  export type PointsTransactionCreateManyUserInputEnvelope = {
    data: PointsTransactionCreateManyUserInput | PointsTransactionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PointsTransactionCreateWithoutCashierInput = {
    points: number
    type: string
    reason?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutUserTransactionsInput
  }

  export type PointsTransactionUncheckedCreateWithoutCashierInput = {
    id?: number
    userId: number
    points: number
    type: string
    reason?: string | null
    createdAt?: Date | string
  }

  export type PointsTransactionCreateOrConnectWithoutCashierInput = {
    where: PointsTransactionWhereUniqueInput
    create: XOR<PointsTransactionCreateWithoutCashierInput, PointsTransactionUncheckedCreateWithoutCashierInput>
  }

  export type PointsTransactionCreateManyCashierInputEnvelope = {
    data: PointsTransactionCreateManyCashierInput | PointsTransactionCreateManyCashierInput[]
    skipDuplicates?: boolean
  }

  export type ImageUpsertWithWhereUniqueWithoutUserInput = {
    where: ImageWhereUniqueInput
    update: XOR<ImageUpdateWithoutUserInput, ImageUncheckedUpdateWithoutUserInput>
    create: XOR<ImageCreateWithoutUserInput, ImageUncheckedCreateWithoutUserInput>
  }

  export type ImageUpdateWithWhereUniqueWithoutUserInput = {
    where: ImageWhereUniqueInput
    data: XOR<ImageUpdateWithoutUserInput, ImageUncheckedUpdateWithoutUserInput>
  }

  export type ImageUpdateManyWithWhereWithoutUserInput = {
    where: ImageScalarWhereInput
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyWithoutUserInput>
  }

  export type ImageScalarWhereInput = {
    AND?: ImageScalarWhereInput | ImageScalarWhereInput[]
    OR?: ImageScalarWhereInput[]
    NOT?: ImageScalarWhereInput | ImageScalarWhereInput[]
    id?: IntFilter<"Image"> | number
    userId?: IntFilter<"Image"> | number
    organizationId?: IntNullableFilter<"Image"> | number | null
    filePath?: StringFilter<"Image"> | string
    fileName?: StringFilter<"Image"> | string
    fileSize?: IntFilter<"Image"> | number
    width?: IntNullableFilter<"Image"> | number | null
    height?: IntNullableFilter<"Image"> | number | null
    format?: StringNullableFilter<"Image"> | string | null
    uploadedAt?: DateTimeFilter<"Image"> | Date | string
    status?: StringFilter<"Image"> | string
    isVerified?: BoolFilter<"Image"> | boolean
  }

  export type AnnotationUpsertWithWhereUniqueWithoutUserInput = {
    where: AnnotationWhereUniqueInput
    update: XOR<AnnotationUpdateWithoutUserInput, AnnotationUncheckedUpdateWithoutUserInput>
    create: XOR<AnnotationCreateWithoutUserInput, AnnotationUncheckedCreateWithoutUserInput>
  }

  export type AnnotationUpdateWithWhereUniqueWithoutUserInput = {
    where: AnnotationWhereUniqueInput
    data: XOR<AnnotationUpdateWithoutUserInput, AnnotationUncheckedUpdateWithoutUserInput>
  }

  export type AnnotationUpdateManyWithWhereWithoutUserInput = {
    where: AnnotationScalarWhereInput
    data: XOR<AnnotationUpdateManyMutationInput, AnnotationUncheckedUpdateManyWithoutUserInput>
  }

  export type AnnotationScalarWhereInput = {
    AND?: AnnotationScalarWhereInput | AnnotationScalarWhereInput[]
    OR?: AnnotationScalarWhereInput[]
    NOT?: AnnotationScalarWhereInput | AnnotationScalarWhereInput[]
    id?: IntFilter<"Annotation"> | number
    imageId?: IntFilter<"Annotation"> | number
    userId?: IntFilter<"Annotation"> | number
    label?: StringFilter<"Annotation"> | string
    x?: FloatFilter<"Annotation"> | number
    y?: FloatFilter<"Annotation"> | number
    width?: FloatFilter<"Annotation"> | number
    height?: FloatFilter<"Annotation"> | number
    color?: StringFilter<"Annotation"> | string
    confidence?: FloatNullableFilter<"Annotation"> | number | null
    isValidated?: BoolFilter<"Annotation"> | boolean
    createdAt?: DateTimeFilter<"Annotation"> | Date | string
    updatedAt?: DateTimeFilter<"Annotation"> | Date | string
  }

  export type ImageVerificationUpsertWithWhereUniqueWithoutVerifierInput = {
    where: ImageVerificationWhereUniqueInput
    update: XOR<ImageVerificationUpdateWithoutVerifierInput, ImageVerificationUncheckedUpdateWithoutVerifierInput>
    create: XOR<ImageVerificationCreateWithoutVerifierInput, ImageVerificationUncheckedCreateWithoutVerifierInput>
  }

  export type ImageVerificationUpdateWithWhereUniqueWithoutVerifierInput = {
    where: ImageVerificationWhereUniqueInput
    data: XOR<ImageVerificationUpdateWithoutVerifierInput, ImageVerificationUncheckedUpdateWithoutVerifierInput>
  }

  export type ImageVerificationUpdateManyWithWhereWithoutVerifierInput = {
    where: ImageVerificationScalarWhereInput
    data: XOR<ImageVerificationUpdateManyMutationInput, ImageVerificationUncheckedUpdateManyWithoutVerifierInput>
  }

  export type ImageVerificationScalarWhereInput = {
    AND?: ImageVerificationScalarWhereInput | ImageVerificationScalarWhereInput[]
    OR?: ImageVerificationScalarWhereInput[]
    NOT?: ImageVerificationScalarWhereInput | ImageVerificationScalarWhereInput[]
    id?: IntFilter<"ImageVerification"> | number
    imageId?: IntFilter<"ImageVerification"> | number
    verifierId?: IntFilter<"ImageVerification"> | number
    isValid?: BoolFilter<"ImageVerification"> | boolean
    notes?: StringNullableFilter<"ImageVerification"> | string | null
    mlScore?: FloatNullableFilter<"ImageVerification"> | number | null
    verifiedAt?: DateTimeFilter<"ImageVerification"> | Date | string
  }

  export type ProfileUpsertWithoutUserInput = {
    update: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type ProfileUpdateWithoutUserInput = {
    bio?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
  }

  export type ProfileUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    bio?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
  }

  export type OrganizationUpsertWithWhereUniqueWithoutMembersInput = {
    where: OrganizationWhereUniqueInput
    update: XOR<OrganizationUpdateWithoutMembersInput, OrganizationUncheckedUpdateWithoutMembersInput>
    create: XOR<OrganizationCreateWithoutMembersInput, OrganizationUncheckedCreateWithoutMembersInput>
  }

  export type OrganizationUpdateWithWhereUniqueWithoutMembersInput = {
    where: OrganizationWhereUniqueInput
    data: XOR<OrganizationUpdateWithoutMembersInput, OrganizationUncheckedUpdateWithoutMembersInput>
  }

  export type OrganizationUpdateManyWithWhereWithoutMembersInput = {
    where: OrganizationScalarWhereInput
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyWithoutMembersInput>
  }

  export type OrganizationScalarWhereInput = {
    AND?: OrganizationScalarWhereInput | OrganizationScalarWhereInput[]
    OR?: OrganizationScalarWhereInput[]
    NOT?: OrganizationScalarWhereInput | OrganizationScalarWhereInput[]
    id?: IntFilter<"Organization"> | number
    name?: StringFilter<"Organization"> | string
    description?: StringNullableFilter<"Organization"> | string | null
    leaderId?: IntFilter<"Organization"> | number
  }

  export type OrganizationUpsertWithWhereUniqueWithoutLeaderInput = {
    where: OrganizationWhereUniqueInput
    update: XOR<OrganizationUpdateWithoutLeaderInput, OrganizationUncheckedUpdateWithoutLeaderInput>
    create: XOR<OrganizationCreateWithoutLeaderInput, OrganizationUncheckedCreateWithoutLeaderInput>
  }

  export type OrganizationUpdateWithWhereUniqueWithoutLeaderInput = {
    where: OrganizationWhereUniqueInput
    data: XOR<OrganizationUpdateWithoutLeaderInput, OrganizationUncheckedUpdateWithoutLeaderInput>
  }

  export type OrganizationUpdateManyWithWhereWithoutLeaderInput = {
    where: OrganizationScalarWhereInput
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyWithoutLeaderInput>
  }

  export type PointsTransactionUpsertWithWhereUniqueWithoutUserInput = {
    where: PointsTransactionWhereUniqueInput
    update: XOR<PointsTransactionUpdateWithoutUserInput, PointsTransactionUncheckedUpdateWithoutUserInput>
    create: XOR<PointsTransactionCreateWithoutUserInput, PointsTransactionUncheckedCreateWithoutUserInput>
  }

  export type PointsTransactionUpdateWithWhereUniqueWithoutUserInput = {
    where: PointsTransactionWhereUniqueInput
    data: XOR<PointsTransactionUpdateWithoutUserInput, PointsTransactionUncheckedUpdateWithoutUserInput>
  }

  export type PointsTransactionUpdateManyWithWhereWithoutUserInput = {
    where: PointsTransactionScalarWhereInput
    data: XOR<PointsTransactionUpdateManyMutationInput, PointsTransactionUncheckedUpdateManyWithoutUserInput>
  }

  export type PointsTransactionScalarWhereInput = {
    AND?: PointsTransactionScalarWhereInput | PointsTransactionScalarWhereInput[]
    OR?: PointsTransactionScalarWhereInput[]
    NOT?: PointsTransactionScalarWhereInput | PointsTransactionScalarWhereInput[]
    id?: IntFilter<"PointsTransaction"> | number
    userId?: IntFilter<"PointsTransaction"> | number
    cashierId?: IntFilter<"PointsTransaction"> | number
    points?: IntFilter<"PointsTransaction"> | number
    type?: StringFilter<"PointsTransaction"> | string
    reason?: StringNullableFilter<"PointsTransaction"> | string | null
    createdAt?: DateTimeFilter<"PointsTransaction"> | Date | string
  }

  export type PointsTransactionUpsertWithWhereUniqueWithoutCashierInput = {
    where: PointsTransactionWhereUniqueInput
    update: XOR<PointsTransactionUpdateWithoutCashierInput, PointsTransactionUncheckedUpdateWithoutCashierInput>
    create: XOR<PointsTransactionCreateWithoutCashierInput, PointsTransactionUncheckedCreateWithoutCashierInput>
  }

  export type PointsTransactionUpdateWithWhereUniqueWithoutCashierInput = {
    where: PointsTransactionWhereUniqueInput
    data: XOR<PointsTransactionUpdateWithoutCashierInput, PointsTransactionUncheckedUpdateWithoutCashierInput>
  }

  export type PointsTransactionUpdateManyWithWhereWithoutCashierInput = {
    where: PointsTransactionScalarWhereInput
    data: XOR<PointsTransactionUpdateManyMutationInput, PointsTransactionUncheckedUpdateManyWithoutCashierInput>
  }

  export type UserCreateWithoutProfileInput = {
    name: string
    email: string
    role?: string | null
    points?: number
    password: string
    validityPercentage?: number | null
    suspicious?: boolean
    isActive?: boolean
    activationToken?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    lastlogin?: Date | string | null
    images?: ImageCreateNestedManyWithoutUserInput
    annotations?: AnnotationCreateNestedManyWithoutUserInput
    ImageVerification?: ImageVerificationCreateNestedManyWithoutVerifierInput
    organizations?: OrganizationCreateNestedManyWithoutMembersInput
    ledOrganization?: OrganizationCreateNestedManyWithoutLeaderInput
    userTransactions?: PointsTransactionCreateNestedManyWithoutUserInput
    cashierTransactions?: PointsTransactionCreateNestedManyWithoutCashierInput
  }

  export type UserUncheckedCreateWithoutProfileInput = {
    id?: number
    name: string
    email: string
    role?: string | null
    points?: number
    password: string
    validityPercentage?: number | null
    suspicious?: boolean
    isActive?: boolean
    activationToken?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    lastlogin?: Date | string | null
    images?: ImageUncheckedCreateNestedManyWithoutUserInput
    annotations?: AnnotationUncheckedCreateNestedManyWithoutUserInput
    ImageVerification?: ImageVerificationUncheckedCreateNestedManyWithoutVerifierInput
    organizations?: OrganizationUncheckedCreateNestedManyWithoutMembersInput
    ledOrganization?: OrganizationUncheckedCreateNestedManyWithoutLeaderInput
    userTransactions?: PointsTransactionUncheckedCreateNestedManyWithoutUserInput
    cashierTransactions?: PointsTransactionUncheckedCreateNestedManyWithoutCashierInput
  }

  export type UserCreateOrConnectWithoutProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
  }

  export type UserUpsertWithoutProfileInput = {
    update: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserUpdateWithoutProfileInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    validityPercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    suspicious?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    activationToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastlogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: ImageUpdateManyWithoutUserNestedInput
    annotations?: AnnotationUpdateManyWithoutUserNestedInput
    ImageVerification?: ImageVerificationUpdateManyWithoutVerifierNestedInput
    organizations?: OrganizationUpdateManyWithoutMembersNestedInput
    ledOrganization?: OrganizationUpdateManyWithoutLeaderNestedInput
    userTransactions?: PointsTransactionUpdateManyWithoutUserNestedInput
    cashierTransactions?: PointsTransactionUpdateManyWithoutCashierNestedInput
  }

  export type UserUncheckedUpdateWithoutProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    validityPercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    suspicious?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    activationToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastlogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: ImageUncheckedUpdateManyWithoutUserNestedInput
    annotations?: AnnotationUncheckedUpdateManyWithoutUserNestedInput
    ImageVerification?: ImageVerificationUncheckedUpdateManyWithoutVerifierNestedInput
    organizations?: OrganizationUncheckedUpdateManyWithoutMembersNestedInput
    ledOrganization?: OrganizationUncheckedUpdateManyWithoutLeaderNestedInput
    userTransactions?: PointsTransactionUncheckedUpdateManyWithoutUserNestedInput
    cashierTransactions?: PointsTransactionUncheckedUpdateManyWithoutCashierNestedInput
  }

  export type UserCreateWithoutLedOrganizationInput = {
    name: string
    email: string
    role?: string | null
    points?: number
    password: string
    validityPercentage?: number | null
    suspicious?: boolean
    isActive?: boolean
    activationToken?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    lastlogin?: Date | string | null
    images?: ImageCreateNestedManyWithoutUserInput
    annotations?: AnnotationCreateNestedManyWithoutUserInput
    ImageVerification?: ImageVerificationCreateNestedManyWithoutVerifierInput
    profile?: ProfileCreateNestedOneWithoutUserInput
    organizations?: OrganizationCreateNestedManyWithoutMembersInput
    userTransactions?: PointsTransactionCreateNestedManyWithoutUserInput
    cashierTransactions?: PointsTransactionCreateNestedManyWithoutCashierInput
  }

  export type UserUncheckedCreateWithoutLedOrganizationInput = {
    id?: number
    name: string
    email: string
    role?: string | null
    points?: number
    password: string
    validityPercentage?: number | null
    suspicious?: boolean
    isActive?: boolean
    activationToken?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    lastlogin?: Date | string | null
    images?: ImageUncheckedCreateNestedManyWithoutUserInput
    annotations?: AnnotationUncheckedCreateNestedManyWithoutUserInput
    ImageVerification?: ImageVerificationUncheckedCreateNestedManyWithoutVerifierInput
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    organizations?: OrganizationUncheckedCreateNestedManyWithoutMembersInput
    userTransactions?: PointsTransactionUncheckedCreateNestedManyWithoutUserInput
    cashierTransactions?: PointsTransactionUncheckedCreateNestedManyWithoutCashierInput
  }

  export type UserCreateOrConnectWithoutLedOrganizationInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLedOrganizationInput, UserUncheckedCreateWithoutLedOrganizationInput>
  }

  export type UserCreateWithoutOrganizationsInput = {
    name: string
    email: string
    role?: string | null
    points?: number
    password: string
    validityPercentage?: number | null
    suspicious?: boolean
    isActive?: boolean
    activationToken?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    lastlogin?: Date | string | null
    images?: ImageCreateNestedManyWithoutUserInput
    annotations?: AnnotationCreateNestedManyWithoutUserInput
    ImageVerification?: ImageVerificationCreateNestedManyWithoutVerifierInput
    profile?: ProfileCreateNestedOneWithoutUserInput
    ledOrganization?: OrganizationCreateNestedManyWithoutLeaderInput
    userTransactions?: PointsTransactionCreateNestedManyWithoutUserInput
    cashierTransactions?: PointsTransactionCreateNestedManyWithoutCashierInput
  }

  export type UserUncheckedCreateWithoutOrganizationsInput = {
    id?: number
    name: string
    email: string
    role?: string | null
    points?: number
    password: string
    validityPercentage?: number | null
    suspicious?: boolean
    isActive?: boolean
    activationToken?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    lastlogin?: Date | string | null
    images?: ImageUncheckedCreateNestedManyWithoutUserInput
    annotations?: AnnotationUncheckedCreateNestedManyWithoutUserInput
    ImageVerification?: ImageVerificationUncheckedCreateNestedManyWithoutVerifierInput
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    ledOrganization?: OrganizationUncheckedCreateNestedManyWithoutLeaderInput
    userTransactions?: PointsTransactionUncheckedCreateNestedManyWithoutUserInput
    cashierTransactions?: PointsTransactionUncheckedCreateNestedManyWithoutCashierInput
  }

  export type UserCreateOrConnectWithoutOrganizationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrganizationsInput, UserUncheckedCreateWithoutOrganizationsInput>
  }

  export type ImageCreateWithoutOrganizationInput = {
    filePath: string
    fileName: string
    fileSize: number
    width?: number | null
    height?: number | null
    format?: string | null
    uploadedAt?: Date | string
    status?: string
    isVerified?: boolean
    user: UserCreateNestedOneWithoutImagesInput
    annotations?: AnnotationCreateNestedManyWithoutImageInput
    verifications?: ImageVerificationCreateNestedManyWithoutImageInput
  }

  export type ImageUncheckedCreateWithoutOrganizationInput = {
    id?: number
    userId: number
    filePath: string
    fileName: string
    fileSize: number
    width?: number | null
    height?: number | null
    format?: string | null
    uploadedAt?: Date | string
    status?: string
    isVerified?: boolean
    annotations?: AnnotationUncheckedCreateNestedManyWithoutImageInput
    verifications?: ImageVerificationUncheckedCreateNestedManyWithoutImageInput
  }

  export type ImageCreateOrConnectWithoutOrganizationInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutOrganizationInput, ImageUncheckedCreateWithoutOrganizationInput>
  }

  export type ImageCreateManyOrganizationInputEnvelope = {
    data: ImageCreateManyOrganizationInput | ImageCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutLedOrganizationInput = {
    update: XOR<UserUpdateWithoutLedOrganizationInput, UserUncheckedUpdateWithoutLedOrganizationInput>
    create: XOR<UserCreateWithoutLedOrganizationInput, UserUncheckedCreateWithoutLedOrganizationInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLedOrganizationInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLedOrganizationInput, UserUncheckedUpdateWithoutLedOrganizationInput>
  }

  export type UserUpdateWithoutLedOrganizationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    validityPercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    suspicious?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    activationToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastlogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: ImageUpdateManyWithoutUserNestedInput
    annotations?: AnnotationUpdateManyWithoutUserNestedInput
    ImageVerification?: ImageVerificationUpdateManyWithoutVerifierNestedInput
    profile?: ProfileUpdateOneWithoutUserNestedInput
    organizations?: OrganizationUpdateManyWithoutMembersNestedInput
    userTransactions?: PointsTransactionUpdateManyWithoutUserNestedInput
    cashierTransactions?: PointsTransactionUpdateManyWithoutCashierNestedInput
  }

  export type UserUncheckedUpdateWithoutLedOrganizationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    validityPercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    suspicious?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    activationToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastlogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: ImageUncheckedUpdateManyWithoutUserNestedInput
    annotations?: AnnotationUncheckedUpdateManyWithoutUserNestedInput
    ImageVerification?: ImageVerificationUncheckedUpdateManyWithoutVerifierNestedInput
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    organizations?: OrganizationUncheckedUpdateManyWithoutMembersNestedInput
    userTransactions?: PointsTransactionUncheckedUpdateManyWithoutUserNestedInput
    cashierTransactions?: PointsTransactionUncheckedUpdateManyWithoutCashierNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutOrganizationsInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutOrganizationsInput, UserUncheckedUpdateWithoutOrganizationsInput>
    create: XOR<UserCreateWithoutOrganizationsInput, UserUncheckedCreateWithoutOrganizationsInput>
  }

  export type UserUpdateWithWhereUniqueWithoutOrganizationsInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutOrganizationsInput, UserUncheckedUpdateWithoutOrganizationsInput>
  }

  export type UserUpdateManyWithWhereWithoutOrganizationsInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutOrganizationsInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    role?: StringNullableFilter<"User"> | string | null
    points?: IntFilter<"User"> | number
    password?: StringFilter<"User"> | string
    validityPercentage?: FloatNullableFilter<"User"> | number | null
    suspicious?: BoolFilter<"User"> | boolean
    isActive?: BoolFilter<"User"> | boolean
    activationToken?: StringNullableFilter<"User"> | string | null
    resetToken?: StringNullableFilter<"User"> | string | null
    resetTokenExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    lastlogin?: DateTimeNullableFilter<"User"> | Date | string | null
  }

  export type ImageUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: ImageWhereUniqueInput
    update: XOR<ImageUpdateWithoutOrganizationInput, ImageUncheckedUpdateWithoutOrganizationInput>
    create: XOR<ImageCreateWithoutOrganizationInput, ImageUncheckedCreateWithoutOrganizationInput>
  }

  export type ImageUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: ImageWhereUniqueInput
    data: XOR<ImageUpdateWithoutOrganizationInput, ImageUncheckedUpdateWithoutOrganizationInput>
  }

  export type ImageUpdateManyWithWhereWithoutOrganizationInput = {
    where: ImageScalarWhereInput
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type UserCreateWithoutUserTransactionsInput = {
    name: string
    email: string
    role?: string | null
    points?: number
    password: string
    validityPercentage?: number | null
    suspicious?: boolean
    isActive?: boolean
    activationToken?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    lastlogin?: Date | string | null
    images?: ImageCreateNestedManyWithoutUserInput
    annotations?: AnnotationCreateNestedManyWithoutUserInput
    ImageVerification?: ImageVerificationCreateNestedManyWithoutVerifierInput
    profile?: ProfileCreateNestedOneWithoutUserInput
    organizations?: OrganizationCreateNestedManyWithoutMembersInput
    ledOrganization?: OrganizationCreateNestedManyWithoutLeaderInput
    cashierTransactions?: PointsTransactionCreateNestedManyWithoutCashierInput
  }

  export type UserUncheckedCreateWithoutUserTransactionsInput = {
    id?: number
    name: string
    email: string
    role?: string | null
    points?: number
    password: string
    validityPercentage?: number | null
    suspicious?: boolean
    isActive?: boolean
    activationToken?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    lastlogin?: Date | string | null
    images?: ImageUncheckedCreateNestedManyWithoutUserInput
    annotations?: AnnotationUncheckedCreateNestedManyWithoutUserInput
    ImageVerification?: ImageVerificationUncheckedCreateNestedManyWithoutVerifierInput
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    organizations?: OrganizationUncheckedCreateNestedManyWithoutMembersInput
    ledOrganization?: OrganizationUncheckedCreateNestedManyWithoutLeaderInput
    cashierTransactions?: PointsTransactionUncheckedCreateNestedManyWithoutCashierInput
  }

  export type UserCreateOrConnectWithoutUserTransactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserTransactionsInput, UserUncheckedCreateWithoutUserTransactionsInput>
  }

  export type UserCreateWithoutCashierTransactionsInput = {
    name: string
    email: string
    role?: string | null
    points?: number
    password: string
    validityPercentage?: number | null
    suspicious?: boolean
    isActive?: boolean
    activationToken?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    lastlogin?: Date | string | null
    images?: ImageCreateNestedManyWithoutUserInput
    annotations?: AnnotationCreateNestedManyWithoutUserInput
    ImageVerification?: ImageVerificationCreateNestedManyWithoutVerifierInput
    profile?: ProfileCreateNestedOneWithoutUserInput
    organizations?: OrganizationCreateNestedManyWithoutMembersInput
    ledOrganization?: OrganizationCreateNestedManyWithoutLeaderInput
    userTransactions?: PointsTransactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCashierTransactionsInput = {
    id?: number
    name: string
    email: string
    role?: string | null
    points?: number
    password: string
    validityPercentage?: number | null
    suspicious?: boolean
    isActive?: boolean
    activationToken?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    lastlogin?: Date | string | null
    images?: ImageUncheckedCreateNestedManyWithoutUserInput
    annotations?: AnnotationUncheckedCreateNestedManyWithoutUserInput
    ImageVerification?: ImageVerificationUncheckedCreateNestedManyWithoutVerifierInput
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    organizations?: OrganizationUncheckedCreateNestedManyWithoutMembersInput
    ledOrganization?: OrganizationUncheckedCreateNestedManyWithoutLeaderInput
    userTransactions?: PointsTransactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCashierTransactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCashierTransactionsInput, UserUncheckedCreateWithoutCashierTransactionsInput>
  }

  export type UserUpsertWithoutUserTransactionsInput = {
    update: XOR<UserUpdateWithoutUserTransactionsInput, UserUncheckedUpdateWithoutUserTransactionsInput>
    create: XOR<UserCreateWithoutUserTransactionsInput, UserUncheckedCreateWithoutUserTransactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserTransactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserTransactionsInput, UserUncheckedUpdateWithoutUserTransactionsInput>
  }

  export type UserUpdateWithoutUserTransactionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    validityPercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    suspicious?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    activationToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastlogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: ImageUpdateManyWithoutUserNestedInput
    annotations?: AnnotationUpdateManyWithoutUserNestedInput
    ImageVerification?: ImageVerificationUpdateManyWithoutVerifierNestedInput
    profile?: ProfileUpdateOneWithoutUserNestedInput
    organizations?: OrganizationUpdateManyWithoutMembersNestedInput
    ledOrganization?: OrganizationUpdateManyWithoutLeaderNestedInput
    cashierTransactions?: PointsTransactionUpdateManyWithoutCashierNestedInput
  }

  export type UserUncheckedUpdateWithoutUserTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    validityPercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    suspicious?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    activationToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastlogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: ImageUncheckedUpdateManyWithoutUserNestedInput
    annotations?: AnnotationUncheckedUpdateManyWithoutUserNestedInput
    ImageVerification?: ImageVerificationUncheckedUpdateManyWithoutVerifierNestedInput
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    organizations?: OrganizationUncheckedUpdateManyWithoutMembersNestedInput
    ledOrganization?: OrganizationUncheckedUpdateManyWithoutLeaderNestedInput
    cashierTransactions?: PointsTransactionUncheckedUpdateManyWithoutCashierNestedInput
  }

  export type UserUpsertWithoutCashierTransactionsInput = {
    update: XOR<UserUpdateWithoutCashierTransactionsInput, UserUncheckedUpdateWithoutCashierTransactionsInput>
    create: XOR<UserCreateWithoutCashierTransactionsInput, UserUncheckedCreateWithoutCashierTransactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCashierTransactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCashierTransactionsInput, UserUncheckedUpdateWithoutCashierTransactionsInput>
  }

  export type UserUpdateWithoutCashierTransactionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    validityPercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    suspicious?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    activationToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastlogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: ImageUpdateManyWithoutUserNestedInput
    annotations?: AnnotationUpdateManyWithoutUserNestedInput
    ImageVerification?: ImageVerificationUpdateManyWithoutVerifierNestedInput
    profile?: ProfileUpdateOneWithoutUserNestedInput
    organizations?: OrganizationUpdateManyWithoutMembersNestedInput
    ledOrganization?: OrganizationUpdateManyWithoutLeaderNestedInput
    userTransactions?: PointsTransactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCashierTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    validityPercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    suspicious?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    activationToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastlogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: ImageUncheckedUpdateManyWithoutUserNestedInput
    annotations?: AnnotationUncheckedUpdateManyWithoutUserNestedInput
    ImageVerification?: ImageVerificationUncheckedUpdateManyWithoutVerifierNestedInput
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    organizations?: OrganizationUncheckedUpdateManyWithoutMembersNestedInput
    ledOrganization?: OrganizationUncheckedUpdateManyWithoutLeaderNestedInput
    userTransactions?: PointsTransactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutImagesInput = {
    name: string
    email: string
    role?: string | null
    points?: number
    password: string
    validityPercentage?: number | null
    suspicious?: boolean
    isActive?: boolean
    activationToken?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    lastlogin?: Date | string | null
    annotations?: AnnotationCreateNestedManyWithoutUserInput
    ImageVerification?: ImageVerificationCreateNestedManyWithoutVerifierInput
    profile?: ProfileCreateNestedOneWithoutUserInput
    organizations?: OrganizationCreateNestedManyWithoutMembersInput
    ledOrganization?: OrganizationCreateNestedManyWithoutLeaderInput
    userTransactions?: PointsTransactionCreateNestedManyWithoutUserInput
    cashierTransactions?: PointsTransactionCreateNestedManyWithoutCashierInput
  }

  export type UserUncheckedCreateWithoutImagesInput = {
    id?: number
    name: string
    email: string
    role?: string | null
    points?: number
    password: string
    validityPercentage?: number | null
    suspicious?: boolean
    isActive?: boolean
    activationToken?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    lastlogin?: Date | string | null
    annotations?: AnnotationUncheckedCreateNestedManyWithoutUserInput
    ImageVerification?: ImageVerificationUncheckedCreateNestedManyWithoutVerifierInput
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    organizations?: OrganizationUncheckedCreateNestedManyWithoutMembersInput
    ledOrganization?: OrganizationUncheckedCreateNestedManyWithoutLeaderInput
    userTransactions?: PointsTransactionUncheckedCreateNestedManyWithoutUserInput
    cashierTransactions?: PointsTransactionUncheckedCreateNestedManyWithoutCashierInput
  }

  export type UserCreateOrConnectWithoutImagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutImagesInput, UserUncheckedCreateWithoutImagesInput>
  }

  export type OrganizationCreateWithoutImagesInput = {
    name: string
    description?: string | null
    leader: UserCreateNestedOneWithoutLedOrganizationInput
    members?: UserCreateNestedManyWithoutOrganizationsInput
  }

  export type OrganizationUncheckedCreateWithoutImagesInput = {
    id?: number
    name: string
    description?: string | null
    leaderId: number
    members?: UserUncheckedCreateNestedManyWithoutOrganizationsInput
  }

  export type OrganizationCreateOrConnectWithoutImagesInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutImagesInput, OrganizationUncheckedCreateWithoutImagesInput>
  }

  export type AnnotationCreateWithoutImageInput = {
    label: string
    x: number
    y: number
    width: number
    height: number
    color?: string
    confidence?: number | null
    isValidated?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAnnotationsInput
  }

  export type AnnotationUncheckedCreateWithoutImageInput = {
    id?: number
    userId: number
    label: string
    x: number
    y: number
    width: number
    height: number
    color?: string
    confidence?: number | null
    isValidated?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnnotationCreateOrConnectWithoutImageInput = {
    where: AnnotationWhereUniqueInput
    create: XOR<AnnotationCreateWithoutImageInput, AnnotationUncheckedCreateWithoutImageInput>
  }

  export type AnnotationCreateManyImageInputEnvelope = {
    data: AnnotationCreateManyImageInput | AnnotationCreateManyImageInput[]
    skipDuplicates?: boolean
  }

  export type ImageVerificationCreateWithoutImageInput = {
    isValid: boolean
    notes?: string | null
    mlScore?: number | null
    verifiedAt?: Date | string
    verifier: UserCreateNestedOneWithoutImageVerificationInput
  }

  export type ImageVerificationUncheckedCreateWithoutImageInput = {
    id?: number
    verifierId: number
    isValid: boolean
    notes?: string | null
    mlScore?: number | null
    verifiedAt?: Date | string
  }

  export type ImageVerificationCreateOrConnectWithoutImageInput = {
    where: ImageVerificationWhereUniqueInput
    create: XOR<ImageVerificationCreateWithoutImageInput, ImageVerificationUncheckedCreateWithoutImageInput>
  }

  export type ImageVerificationCreateManyImageInputEnvelope = {
    data: ImageVerificationCreateManyImageInput | ImageVerificationCreateManyImageInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutImagesInput = {
    update: XOR<UserUpdateWithoutImagesInput, UserUncheckedUpdateWithoutImagesInput>
    create: XOR<UserCreateWithoutImagesInput, UserUncheckedCreateWithoutImagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutImagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutImagesInput, UserUncheckedUpdateWithoutImagesInput>
  }

  export type UserUpdateWithoutImagesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    validityPercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    suspicious?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    activationToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastlogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    annotations?: AnnotationUpdateManyWithoutUserNestedInput
    ImageVerification?: ImageVerificationUpdateManyWithoutVerifierNestedInput
    profile?: ProfileUpdateOneWithoutUserNestedInput
    organizations?: OrganizationUpdateManyWithoutMembersNestedInput
    ledOrganization?: OrganizationUpdateManyWithoutLeaderNestedInput
    userTransactions?: PointsTransactionUpdateManyWithoutUserNestedInput
    cashierTransactions?: PointsTransactionUpdateManyWithoutCashierNestedInput
  }

  export type UserUncheckedUpdateWithoutImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    validityPercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    suspicious?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    activationToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastlogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    annotations?: AnnotationUncheckedUpdateManyWithoutUserNestedInput
    ImageVerification?: ImageVerificationUncheckedUpdateManyWithoutVerifierNestedInput
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    organizations?: OrganizationUncheckedUpdateManyWithoutMembersNestedInput
    ledOrganization?: OrganizationUncheckedUpdateManyWithoutLeaderNestedInput
    userTransactions?: PointsTransactionUncheckedUpdateManyWithoutUserNestedInput
    cashierTransactions?: PointsTransactionUncheckedUpdateManyWithoutCashierNestedInput
  }

  export type OrganizationUpsertWithoutImagesInput = {
    update: XOR<OrganizationUpdateWithoutImagesInput, OrganizationUncheckedUpdateWithoutImagesInput>
    create: XOR<OrganizationCreateWithoutImagesInput, OrganizationUncheckedCreateWithoutImagesInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutImagesInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutImagesInput, OrganizationUncheckedUpdateWithoutImagesInput>
  }

  export type OrganizationUpdateWithoutImagesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    leader?: UserUpdateOneRequiredWithoutLedOrganizationNestedInput
    members?: UserUpdateManyWithoutOrganizationsNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    leaderId?: IntFieldUpdateOperationsInput | number
    members?: UserUncheckedUpdateManyWithoutOrganizationsNestedInput
  }

  export type AnnotationUpsertWithWhereUniqueWithoutImageInput = {
    where: AnnotationWhereUniqueInput
    update: XOR<AnnotationUpdateWithoutImageInput, AnnotationUncheckedUpdateWithoutImageInput>
    create: XOR<AnnotationCreateWithoutImageInput, AnnotationUncheckedCreateWithoutImageInput>
  }

  export type AnnotationUpdateWithWhereUniqueWithoutImageInput = {
    where: AnnotationWhereUniqueInput
    data: XOR<AnnotationUpdateWithoutImageInput, AnnotationUncheckedUpdateWithoutImageInput>
  }

  export type AnnotationUpdateManyWithWhereWithoutImageInput = {
    where: AnnotationScalarWhereInput
    data: XOR<AnnotationUpdateManyMutationInput, AnnotationUncheckedUpdateManyWithoutImageInput>
  }

  export type ImageVerificationUpsertWithWhereUniqueWithoutImageInput = {
    where: ImageVerificationWhereUniqueInput
    update: XOR<ImageVerificationUpdateWithoutImageInput, ImageVerificationUncheckedUpdateWithoutImageInput>
    create: XOR<ImageVerificationCreateWithoutImageInput, ImageVerificationUncheckedCreateWithoutImageInput>
  }

  export type ImageVerificationUpdateWithWhereUniqueWithoutImageInput = {
    where: ImageVerificationWhereUniqueInput
    data: XOR<ImageVerificationUpdateWithoutImageInput, ImageVerificationUncheckedUpdateWithoutImageInput>
  }

  export type ImageVerificationUpdateManyWithWhereWithoutImageInput = {
    where: ImageVerificationScalarWhereInput
    data: XOR<ImageVerificationUpdateManyMutationInput, ImageVerificationUncheckedUpdateManyWithoutImageInput>
  }

  export type ImageCreateWithoutAnnotationsInput = {
    filePath: string
    fileName: string
    fileSize: number
    width?: number | null
    height?: number | null
    format?: string | null
    uploadedAt?: Date | string
    status?: string
    isVerified?: boolean
    user: UserCreateNestedOneWithoutImagesInput
    organization?: OrganizationCreateNestedOneWithoutImagesInput
    verifications?: ImageVerificationCreateNestedManyWithoutImageInput
  }

  export type ImageUncheckedCreateWithoutAnnotationsInput = {
    id?: number
    userId: number
    organizationId?: number | null
    filePath: string
    fileName: string
    fileSize: number
    width?: number | null
    height?: number | null
    format?: string | null
    uploadedAt?: Date | string
    status?: string
    isVerified?: boolean
    verifications?: ImageVerificationUncheckedCreateNestedManyWithoutImageInput
  }

  export type ImageCreateOrConnectWithoutAnnotationsInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutAnnotationsInput, ImageUncheckedCreateWithoutAnnotationsInput>
  }

  export type UserCreateWithoutAnnotationsInput = {
    name: string
    email: string
    role?: string | null
    points?: number
    password: string
    validityPercentage?: number | null
    suspicious?: boolean
    isActive?: boolean
    activationToken?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    lastlogin?: Date | string | null
    images?: ImageCreateNestedManyWithoutUserInput
    ImageVerification?: ImageVerificationCreateNestedManyWithoutVerifierInput
    profile?: ProfileCreateNestedOneWithoutUserInput
    organizations?: OrganizationCreateNestedManyWithoutMembersInput
    ledOrganization?: OrganizationCreateNestedManyWithoutLeaderInput
    userTransactions?: PointsTransactionCreateNestedManyWithoutUserInput
    cashierTransactions?: PointsTransactionCreateNestedManyWithoutCashierInput
  }

  export type UserUncheckedCreateWithoutAnnotationsInput = {
    id?: number
    name: string
    email: string
    role?: string | null
    points?: number
    password: string
    validityPercentage?: number | null
    suspicious?: boolean
    isActive?: boolean
    activationToken?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    lastlogin?: Date | string | null
    images?: ImageUncheckedCreateNestedManyWithoutUserInput
    ImageVerification?: ImageVerificationUncheckedCreateNestedManyWithoutVerifierInput
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    organizations?: OrganizationUncheckedCreateNestedManyWithoutMembersInput
    ledOrganization?: OrganizationUncheckedCreateNestedManyWithoutLeaderInput
    userTransactions?: PointsTransactionUncheckedCreateNestedManyWithoutUserInput
    cashierTransactions?: PointsTransactionUncheckedCreateNestedManyWithoutCashierInput
  }

  export type UserCreateOrConnectWithoutAnnotationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAnnotationsInput, UserUncheckedCreateWithoutAnnotationsInput>
  }

  export type ImageUpsertWithoutAnnotationsInput = {
    update: XOR<ImageUpdateWithoutAnnotationsInput, ImageUncheckedUpdateWithoutAnnotationsInput>
    create: XOR<ImageCreateWithoutAnnotationsInput, ImageUncheckedCreateWithoutAnnotationsInput>
    where?: ImageWhereInput
  }

  export type ImageUpdateToOneWithWhereWithoutAnnotationsInput = {
    where?: ImageWhereInput
    data: XOR<ImageUpdateWithoutAnnotationsInput, ImageUncheckedUpdateWithoutAnnotationsInput>
  }

  export type ImageUpdateWithoutAnnotationsInput = {
    filePath?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    format?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutImagesNestedInput
    organization?: OrganizationUpdateOneWithoutImagesNestedInput
    verifications?: ImageVerificationUpdateManyWithoutImageNestedInput
  }

  export type ImageUncheckedUpdateWithoutAnnotationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    organizationId?: NullableIntFieldUpdateOperationsInput | number | null
    filePath?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    format?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifications?: ImageVerificationUncheckedUpdateManyWithoutImageNestedInput
  }

  export type UserUpsertWithoutAnnotationsInput = {
    update: XOR<UserUpdateWithoutAnnotationsInput, UserUncheckedUpdateWithoutAnnotationsInput>
    create: XOR<UserCreateWithoutAnnotationsInput, UserUncheckedCreateWithoutAnnotationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAnnotationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAnnotationsInput, UserUncheckedUpdateWithoutAnnotationsInput>
  }

  export type UserUpdateWithoutAnnotationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    validityPercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    suspicious?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    activationToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastlogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: ImageUpdateManyWithoutUserNestedInput
    ImageVerification?: ImageVerificationUpdateManyWithoutVerifierNestedInput
    profile?: ProfileUpdateOneWithoutUserNestedInput
    organizations?: OrganizationUpdateManyWithoutMembersNestedInput
    ledOrganization?: OrganizationUpdateManyWithoutLeaderNestedInput
    userTransactions?: PointsTransactionUpdateManyWithoutUserNestedInput
    cashierTransactions?: PointsTransactionUpdateManyWithoutCashierNestedInput
  }

  export type UserUncheckedUpdateWithoutAnnotationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    validityPercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    suspicious?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    activationToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastlogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: ImageUncheckedUpdateManyWithoutUserNestedInput
    ImageVerification?: ImageVerificationUncheckedUpdateManyWithoutVerifierNestedInput
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    organizations?: OrganizationUncheckedUpdateManyWithoutMembersNestedInput
    ledOrganization?: OrganizationUncheckedUpdateManyWithoutLeaderNestedInput
    userTransactions?: PointsTransactionUncheckedUpdateManyWithoutUserNestedInput
    cashierTransactions?: PointsTransactionUncheckedUpdateManyWithoutCashierNestedInput
  }

  export type ImageCreateWithoutVerificationsInput = {
    filePath: string
    fileName: string
    fileSize: number
    width?: number | null
    height?: number | null
    format?: string | null
    uploadedAt?: Date | string
    status?: string
    isVerified?: boolean
    user: UserCreateNestedOneWithoutImagesInput
    organization?: OrganizationCreateNestedOneWithoutImagesInput
    annotations?: AnnotationCreateNestedManyWithoutImageInput
  }

  export type ImageUncheckedCreateWithoutVerificationsInput = {
    id?: number
    userId: number
    organizationId?: number | null
    filePath: string
    fileName: string
    fileSize: number
    width?: number | null
    height?: number | null
    format?: string | null
    uploadedAt?: Date | string
    status?: string
    isVerified?: boolean
    annotations?: AnnotationUncheckedCreateNestedManyWithoutImageInput
  }

  export type ImageCreateOrConnectWithoutVerificationsInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutVerificationsInput, ImageUncheckedCreateWithoutVerificationsInput>
  }

  export type UserCreateWithoutImageVerificationInput = {
    name: string
    email: string
    role?: string | null
    points?: number
    password: string
    validityPercentage?: number | null
    suspicious?: boolean
    isActive?: boolean
    activationToken?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    lastlogin?: Date | string | null
    images?: ImageCreateNestedManyWithoutUserInput
    annotations?: AnnotationCreateNestedManyWithoutUserInput
    profile?: ProfileCreateNestedOneWithoutUserInput
    organizations?: OrganizationCreateNestedManyWithoutMembersInput
    ledOrganization?: OrganizationCreateNestedManyWithoutLeaderInput
    userTransactions?: PointsTransactionCreateNestedManyWithoutUserInput
    cashierTransactions?: PointsTransactionCreateNestedManyWithoutCashierInput
  }

  export type UserUncheckedCreateWithoutImageVerificationInput = {
    id?: number
    name: string
    email: string
    role?: string | null
    points?: number
    password: string
    validityPercentage?: number | null
    suspicious?: boolean
    isActive?: boolean
    activationToken?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    lastlogin?: Date | string | null
    images?: ImageUncheckedCreateNestedManyWithoutUserInput
    annotations?: AnnotationUncheckedCreateNestedManyWithoutUserInput
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    organizations?: OrganizationUncheckedCreateNestedManyWithoutMembersInput
    ledOrganization?: OrganizationUncheckedCreateNestedManyWithoutLeaderInput
    userTransactions?: PointsTransactionUncheckedCreateNestedManyWithoutUserInput
    cashierTransactions?: PointsTransactionUncheckedCreateNestedManyWithoutCashierInput
  }

  export type UserCreateOrConnectWithoutImageVerificationInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutImageVerificationInput, UserUncheckedCreateWithoutImageVerificationInput>
  }

  export type ImageUpsertWithoutVerificationsInput = {
    update: XOR<ImageUpdateWithoutVerificationsInput, ImageUncheckedUpdateWithoutVerificationsInput>
    create: XOR<ImageCreateWithoutVerificationsInput, ImageUncheckedCreateWithoutVerificationsInput>
    where?: ImageWhereInput
  }

  export type ImageUpdateToOneWithWhereWithoutVerificationsInput = {
    where?: ImageWhereInput
    data: XOR<ImageUpdateWithoutVerificationsInput, ImageUncheckedUpdateWithoutVerificationsInput>
  }

  export type ImageUpdateWithoutVerificationsInput = {
    filePath?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    format?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutImagesNestedInput
    organization?: OrganizationUpdateOneWithoutImagesNestedInput
    annotations?: AnnotationUpdateManyWithoutImageNestedInput
  }

  export type ImageUncheckedUpdateWithoutVerificationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    organizationId?: NullableIntFieldUpdateOperationsInput | number | null
    filePath?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    format?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    annotations?: AnnotationUncheckedUpdateManyWithoutImageNestedInput
  }

  export type UserUpsertWithoutImageVerificationInput = {
    update: XOR<UserUpdateWithoutImageVerificationInput, UserUncheckedUpdateWithoutImageVerificationInput>
    create: XOR<UserCreateWithoutImageVerificationInput, UserUncheckedCreateWithoutImageVerificationInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutImageVerificationInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutImageVerificationInput, UserUncheckedUpdateWithoutImageVerificationInput>
  }

  export type UserUpdateWithoutImageVerificationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    validityPercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    suspicious?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    activationToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastlogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: ImageUpdateManyWithoutUserNestedInput
    annotations?: AnnotationUpdateManyWithoutUserNestedInput
    profile?: ProfileUpdateOneWithoutUserNestedInput
    organizations?: OrganizationUpdateManyWithoutMembersNestedInput
    ledOrganization?: OrganizationUpdateManyWithoutLeaderNestedInput
    userTransactions?: PointsTransactionUpdateManyWithoutUserNestedInput
    cashierTransactions?: PointsTransactionUpdateManyWithoutCashierNestedInput
  }

  export type UserUncheckedUpdateWithoutImageVerificationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    validityPercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    suspicious?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    activationToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastlogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: ImageUncheckedUpdateManyWithoutUserNestedInput
    annotations?: AnnotationUncheckedUpdateManyWithoutUserNestedInput
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    organizations?: OrganizationUncheckedUpdateManyWithoutMembersNestedInput
    ledOrganization?: OrganizationUncheckedUpdateManyWithoutLeaderNestedInput
    userTransactions?: PointsTransactionUncheckedUpdateManyWithoutUserNestedInput
    cashierTransactions?: PointsTransactionUncheckedUpdateManyWithoutCashierNestedInput
  }

  export type ImageCreateManyUserInput = {
    id?: number
    organizationId?: number | null
    filePath: string
    fileName: string
    fileSize: number
    width?: number | null
    height?: number | null
    format?: string | null
    uploadedAt?: Date | string
    status?: string
    isVerified?: boolean
  }

  export type AnnotationCreateManyUserInput = {
    id?: number
    imageId: number
    label: string
    x: number
    y: number
    width: number
    height: number
    color?: string
    confidence?: number | null
    isValidated?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImageVerificationCreateManyVerifierInput = {
    id?: number
    imageId: number
    isValid: boolean
    notes?: string | null
    mlScore?: number | null
    verifiedAt?: Date | string
  }

  export type OrganizationCreateManyLeaderInput = {
    id?: number
    name: string
    description?: string | null
  }

  export type PointsTransactionCreateManyUserInput = {
    id?: number
    cashierId: number
    points: number
    type: string
    reason?: string | null
    createdAt?: Date | string
  }

  export type PointsTransactionCreateManyCashierInput = {
    id?: number
    userId: number
    points: number
    type: string
    reason?: string | null
    createdAt?: Date | string
  }

  export type ImageUpdateWithoutUserInput = {
    filePath?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    format?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    organization?: OrganizationUpdateOneWithoutImagesNestedInput
    annotations?: AnnotationUpdateManyWithoutImageNestedInput
    verifications?: ImageVerificationUpdateManyWithoutImageNestedInput
  }

  export type ImageUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    organizationId?: NullableIntFieldUpdateOperationsInput | number | null
    filePath?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    format?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    annotations?: AnnotationUncheckedUpdateManyWithoutImageNestedInput
    verifications?: ImageVerificationUncheckedUpdateManyWithoutImageNestedInput
  }

  export type ImageUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    organizationId?: NullableIntFieldUpdateOperationsInput | number | null
    filePath?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    format?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AnnotationUpdateWithoutUserInput = {
    label?: StringFieldUpdateOperationsInput | string
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    width?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    isValidated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: ImageUpdateOneRequiredWithoutAnnotationsNestedInput
  }

  export type AnnotationUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageId?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    width?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    isValidated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnotationUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageId?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    width?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    isValidated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageVerificationUpdateWithoutVerifierInput = {
    isValid?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    mlScore?: NullableFloatFieldUpdateOperationsInput | number | null
    verifiedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: ImageUpdateOneRequiredWithoutVerificationsNestedInput
  }

  export type ImageVerificationUncheckedUpdateWithoutVerifierInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageId?: IntFieldUpdateOperationsInput | number
    isValid?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    mlScore?: NullableFloatFieldUpdateOperationsInput | number | null
    verifiedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageVerificationUncheckedUpdateManyWithoutVerifierInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageId?: IntFieldUpdateOperationsInput | number
    isValid?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    mlScore?: NullableFloatFieldUpdateOperationsInput | number | null
    verifiedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationUpdateWithoutMembersInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    leader?: UserUpdateOneRequiredWithoutLedOrganizationNestedInput
    images?: ImageUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutMembersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    leaderId?: IntFieldUpdateOperationsInput | number
    images?: ImageUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateManyWithoutMembersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    leaderId?: IntFieldUpdateOperationsInput | number
  }

  export type OrganizationUpdateWithoutLeaderInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    members?: UserUpdateManyWithoutOrganizationsNestedInput
    images?: ImageUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutLeaderInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    members?: UserUncheckedUpdateManyWithoutOrganizationsNestedInput
    images?: ImageUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateManyWithoutLeaderInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PointsTransactionUpdateWithoutUserInput = {
    points?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cashier?: UserUpdateOneRequiredWithoutCashierTransactionsNestedInput
  }

  export type PointsTransactionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    cashierId?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointsTransactionUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    cashierId?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointsTransactionUpdateWithoutCashierInput = {
    points?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserTransactionsNestedInput
  }

  export type PointsTransactionUncheckedUpdateWithoutCashierInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointsTransactionUncheckedUpdateManyWithoutCashierInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageCreateManyOrganizationInput = {
    id?: number
    userId: number
    filePath: string
    fileName: string
    fileSize: number
    width?: number | null
    height?: number | null
    format?: string | null
    uploadedAt?: Date | string
    status?: string
    isVerified?: boolean
  }

  export type UserUpdateWithoutOrganizationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    validityPercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    suspicious?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    activationToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastlogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: ImageUpdateManyWithoutUserNestedInput
    annotations?: AnnotationUpdateManyWithoutUserNestedInput
    ImageVerification?: ImageVerificationUpdateManyWithoutVerifierNestedInput
    profile?: ProfileUpdateOneWithoutUserNestedInput
    ledOrganization?: OrganizationUpdateManyWithoutLeaderNestedInput
    userTransactions?: PointsTransactionUpdateManyWithoutUserNestedInput
    cashierTransactions?: PointsTransactionUpdateManyWithoutCashierNestedInput
  }

  export type UserUncheckedUpdateWithoutOrganizationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    validityPercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    suspicious?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    activationToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastlogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: ImageUncheckedUpdateManyWithoutUserNestedInput
    annotations?: AnnotationUncheckedUpdateManyWithoutUserNestedInput
    ImageVerification?: ImageVerificationUncheckedUpdateManyWithoutVerifierNestedInput
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    ledOrganization?: OrganizationUncheckedUpdateManyWithoutLeaderNestedInput
    userTransactions?: PointsTransactionUncheckedUpdateManyWithoutUserNestedInput
    cashierTransactions?: PointsTransactionUncheckedUpdateManyWithoutCashierNestedInput
  }

  export type UserUncheckedUpdateManyWithoutOrganizationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    validityPercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    suspicious?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    activationToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastlogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ImageUpdateWithoutOrganizationInput = {
    filePath?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    format?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutImagesNestedInput
    annotations?: AnnotationUpdateManyWithoutImageNestedInput
    verifications?: ImageVerificationUpdateManyWithoutImageNestedInput
  }

  export type ImageUncheckedUpdateWithoutOrganizationInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    filePath?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    format?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    annotations?: AnnotationUncheckedUpdateManyWithoutImageNestedInput
    verifications?: ImageVerificationUncheckedUpdateManyWithoutImageNestedInput
  }

  export type ImageUncheckedUpdateManyWithoutOrganizationInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    filePath?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    format?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AnnotationCreateManyImageInput = {
    id?: number
    userId: number
    label: string
    x: number
    y: number
    width: number
    height: number
    color?: string
    confidence?: number | null
    isValidated?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImageVerificationCreateManyImageInput = {
    id?: number
    verifierId: number
    isValid: boolean
    notes?: string | null
    mlScore?: number | null
    verifiedAt?: Date | string
  }

  export type AnnotationUpdateWithoutImageInput = {
    label?: StringFieldUpdateOperationsInput | string
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    width?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    isValidated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAnnotationsNestedInput
  }

  export type AnnotationUncheckedUpdateWithoutImageInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    width?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    isValidated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnotationUncheckedUpdateManyWithoutImageInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    width?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    isValidated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageVerificationUpdateWithoutImageInput = {
    isValid?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    mlScore?: NullableFloatFieldUpdateOperationsInput | number | null
    verifiedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verifier?: UserUpdateOneRequiredWithoutImageVerificationNestedInput
  }

  export type ImageVerificationUncheckedUpdateWithoutImageInput = {
    id?: IntFieldUpdateOperationsInput | number
    verifierId?: IntFieldUpdateOperationsInput | number
    isValid?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    mlScore?: NullableFloatFieldUpdateOperationsInput | number | null
    verifiedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageVerificationUncheckedUpdateManyWithoutImageInput = {
    id?: IntFieldUpdateOperationsInput | number
    verifierId?: IntFieldUpdateOperationsInput | number
    isValid?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    mlScore?: NullableFloatFieldUpdateOperationsInput | number | null
    verifiedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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