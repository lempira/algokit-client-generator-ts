/* eslint-disable */
// @ts-nocheck
/**
 * This file was automatically generated by @algorandfoundation/algokit-client-generator.
 * DO NOT MODIFY IT BY HAND.
 * requires: @algorandfoundation/algokit-utils: ^3
 */
import { ABIReturn, AppReturn, SendAppTransactionResult } from '@algorandfoundation/algokit-utils/types/app'
import { Arc56Contract, getArc56ReturnValue } from '@algorandfoundation/algokit-utils/types/app-arc56'
import {
  AppClient,
  AppClientMethodCallParams,
  AppClientParams,
  AppClientBareCallParams,
  CallOnComplete,
  AppClientCompilationParams,
  ResolveAppClientByCreatorAndName,
} from '@algorandfoundation/algokit-utils/types/app-client'
import { AppFactory, AppFactoryDeployParams, AppFactoryParams, CreateSchema } from '@algorandfoundation/algokit-utils/types/app-factory'
import AlgoKitComposer, { AppCallMethodCall, AppMethodCallTransactionArgument, SimulateOptions } from '@algorandfoundation/algokit-utils/types/composer'
import { ExecuteParams, SendSingleTransactionResult, SendAtomicTransactionComposerResults } from '@algorandfoundation/algokit-utils/types/transaction'
import { modelsv2, OnApplicationComplete, Transaction, TransactionSigner } from 'algosdk'
import SimulateResponse = modelsv2.SimulateResponse

export const APP_SPEC: Arc56Contract = {"arcs":[],"name":"DuplicateStructsContract","desc":"\n        This contract is to be used as a test artifact to verify behavior around struct generation to ensure that \n        the scenarios similar to whats outlined in this contract can not result in a typed client with duplicate struct \n        definitions.\n    ","structs":{"SomeStruct":{"a":"uint64","b":"uint64"}},"methods":[{"name":"method_a_that_uses_struct","args":[],"returns":{"type":"(uint64,uint64)","struct":"SomeStruct"},"events":[],"actions":{"create":[],"call":["NoOp"]}},{"name":"method_b_that_uses_same_struct","args":[],"returns":{"type":"(uint64,uint64)","struct":"SomeStruct"},"events":[],"actions":{"create":[],"call":["NoOp"]}}],"state":{"schema":{"global":{"ints":0,"bytes":0},"local":{"ints":0,"bytes":0}},"keys":{"global":{},"local":{},"box":{}},"maps":{"global":{},"local":{},"box":{}}},"source":{"approval":"I3ByYWdtYSB2ZXJzaW9uIDEwCgpzbWFydF9jb250cmFjdHMuZGVsZWdhdG9yX2NvbnRyYWN0LmNvbnRyYWN0LkR1cGxpY2F0ZVN0cnVjdHNDb250cmFjdC5hcHByb3ZhbF9wcm9ncmFtOgogICAgLy8gY29udHJhY3QucHk6MTIKICAgIC8vIGNsYXNzIER1cGxpY2F0ZVN0cnVjdHNDb250cmFjdChBUkM0Q29udHJhY3QpOgogICAgdHhuIE51bUFwcEFyZ3MKICAgIGJ6IG1haW5fYmFyZV9yb3V0aW5nQDYKICAgIG1ldGhvZCAibWV0aG9kX2FfdGhhdF91c2VzX3N0cnVjdCgpKHVpbnQ2NCx1aW50NjQpIgogICAgbWV0aG9kICJtZXRob2RfYl90aGF0X3VzZXNfc2FtZV9zdHJ1Y3QoKSh1aW50NjQsdWludDY0KSIKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDAKICAgIG1hdGNoIG1haW5fbWV0aG9kX2FfdGhhdF91c2VzX3N0cnVjdF9yb3V0ZUAyIG1haW5fbWV0aG9kX2JfdGhhdF91c2VzX3NhbWVfc3RydWN0X3JvdXRlQDMKICAgIGVyciAvLyByZWplY3QgdHJhbnNhY3Rpb24KCm1haW5fbWV0aG9kX2FfdGhhdF91c2VzX3N0cnVjdF9yb3V0ZUAyOgogICAgLy8gY29udHJhY3QucHk6MTkKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICB0eG4gT25Db21wbGV0aW9uCiAgICAhCiAgICBhc3NlcnQgLy8gT25Db21wbGV0aW9uIGlzIE5vT3AKICAgIHR4biBBcHBsaWNhdGlvbklECiAgICBhc3NlcnQgLy8gaXMgbm90IGNyZWF0aW5nCiAgICBjYWxsc3ViIG1ldGhvZF9hX3RoYXRfdXNlc19zdHJ1Y3QKICAgIGJ5dGUgMHgxNTFmN2M3NQogICAgc3dhcAogICAgY29uY2F0CiAgICBsb2cKICAgIGludCAxCiAgICByZXR1cm4KCm1haW5fbWV0aG9kX2JfdGhhdF91c2VzX3NhbWVfc3RydWN0X3JvdXRlQDM6CiAgICAvLyBjb250cmFjdC5weToyNgogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIHR4biBPbkNvbXBsZXRpb24KICAgICEKICAgIGFzc2VydCAvLyBPbkNvbXBsZXRpb24gaXMgTm9PcAogICAgdHhuIEFwcGxpY2F0aW9uSUQKICAgIGFzc2VydCAvLyBpcyBub3QgY3JlYXRpbmcKICAgIGNhbGxzdWIgbWV0aG9kX2JfdGhhdF91c2VzX3NhbWVfc3RydWN0CiAgICBieXRlIDB4MTUxZjdjNzUKICAgIHN3YXAKICAgIGNvbmNhdAogICAgbG9nCiAgICBpbnQgMQogICAgcmV0dXJuCgptYWluX2JhcmVfcm91dGluZ0A2OgogICAgLy8gY29udHJhY3QucHk6MTIKICAgIC8vIGNsYXNzIER1cGxpY2F0ZVN0cnVjdHNDb250cmFjdChBUkM0Q29udHJhY3QpOgogICAgdHhuIE9uQ29tcGxldGlvbgogICAgIQogICAgYXNzZXJ0IC8vIHJlamVjdCB0cmFuc2FjdGlvbgogICAgdHhuIEFwcGxpY2F0aW9uSUQKICAgICEKICAgIGFzc2VydCAvLyBpcyBjcmVhdGluZwogICAgaW50IDEKICAgIHJldHVybgoKCi8vIHNtYXJ0X2NvbnRyYWN0cy5kZWxlZ2F0b3JfY29udHJhY3QuY29udHJhY3QuRHVwbGljYXRlU3RydWN0c0NvbnRyYWN0Lm1ldGhvZF9hX3RoYXRfdXNlc19zdHJ1Y3QoKSAtPiBieXRlczoKbWV0aG9kX2FfdGhhdF91c2VzX3N0cnVjdDoKICAgIC8vIGNvbnRyYWN0LnB5OjE5LTIwCiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgLy8gZGVmIG1ldGhvZF9hX3RoYXRfdXNlc19zdHJ1Y3Qoc2VsZikgLT4gU29tZVN0cnVjdDoKICAgIHByb3RvIDAgMQogICAgLy8gY29udHJhY3QucHk6MjEtMjQKICAgIC8vIHJldHVybiBTb21lU3RydWN0KAogICAgLy8gICAgIGFyYzQuVUludDY0KDEpLAogICAgLy8gICAgIGFyYzQuVUludDY0KDIpLAogICAgLy8gKQogICAgYnl0ZSAweDAwMDAwMDAwMDAwMDAwMDEwMDAwMDAwMDAwMDAwMDAyCiAgICByZXRzdWIKCgovLyBzbWFydF9jb250cmFjdHMuZGVsZWdhdG9yX2NvbnRyYWN0LmNvbnRyYWN0LkR1cGxpY2F0ZVN0cnVjdHNDb250cmFjdC5tZXRob2RfYl90aGF0X3VzZXNfc2FtZV9zdHJ1Y3QoKSAtPiBieXRlczoKbWV0aG9kX2JfdGhhdF91c2VzX3NhbWVfc3RydWN0OgogICAgLy8gY29udHJhY3QucHk6MjYtMjcKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICAvLyBkZWYgbWV0aG9kX2JfdGhhdF91c2VzX3NhbWVfc3RydWN0KHNlbGYpIC0+IFNvbWVTdHJ1Y3Q6CiAgICBwcm90byAwIDEKICAgIC8vIGNvbnRyYWN0LnB5OjI4LTMxCiAgICAvLyByZXR1cm4gU29tZVN0cnVjdCgKICAgIC8vICAgICBhcmM0LlVJbnQ2NCgzKSwKICAgIC8vICAgICBhcmM0LlVJbnQ2NCg0KSwKICAgIC8vICkKICAgIGJ5dGUgMHgwMDAwMDAwMDAwMDAwMDAzMDAwMDAwMDAwMDAwMDAwNAogICAgcmV0c3ViCg==","clear":"I3ByYWdtYSB2ZXJzaW9uIDEwCgpzbWFydF9jb250cmFjdHMuZGVsZWdhdG9yX2NvbnRyYWN0LmNvbnRyYWN0LkR1cGxpY2F0ZVN0cnVjdHNDb250cmFjdC5jbGVhcl9zdGF0ZV9wcm9ncmFtOgogICAgLy8gY29udHJhY3QucHk6MTIKICAgIC8vIGNsYXNzIER1cGxpY2F0ZVN0cnVjdHNDb250cmFjdChBUkM0Q29udHJhY3QpOgogICAgaW50IDEKICAgIHJldHVybgo="},"bareActions":{"create":["NoOp"],"call":[]}}

/**
 * A state record containing binary data
 */
export interface BinaryState {
  /**
   * Gets the state value as a Uint8Array
   */
  asByteArray(): Uint8Array | undefined
  /**
   * Gets the state value as a string
   */
  asString(): string | undefined
}

class BinaryStateValue implements BinaryState {
  constructor(private value: Uint8Array | undefined) {}

  asByteArray(): Uint8Array | undefined {
    return this.value
  }

  asString(): string | undefined {
    return this.value !== undefined ? Buffer.from(this.value).toString('utf-8') : undefined
  }
}

/**
 * Expands types for IntelliSense so they are more human readable
 * See https://stackoverflow.com/a/69288824
 */
export type Expand<T> = T extends (...args: infer A) => infer R
  ? (...args: Expand<A>) => Expand<R>
  : T extends infer O
    ? { [K in keyof O]: O[K] }
    : never


// Aliases for non-encoded ABI values

type uint64 = bigint;

// Type definitions for ARC-56 structs

export type SomeStruct = {
  a: uint64,
  b: uint64
}


/**
 * Defines the types of available calls and state of the DuplicateStructsContract smart contract.
 */
export type DuplicateStructsContractTypes = {
  /**
   * Maps method signatures / names to their argument and return types.
   */
  methods:
    & Record<'method_a_that_uses_struct()(uint64,uint64)' | 'method_a_that_uses_struct', {
      argsObj: {
      }
      argsTuple: []
      returns: SomeStruct
    }>
    & Record<'method_b_that_uses_same_struct()(uint64,uint64)' | 'method_b_that_uses_same_struct', {
      argsObj: {
      }
      argsTuple: []
      returns: SomeStruct
    }>
}

/**
 * Defines the possible abi call signatures.
 */
export type DuplicateStructsContractSignatures = keyof DuplicateStructsContractTypes['methods']
/**
 * Defines the possible abi call signatures for methods that return a non-void value.
 */
export type DuplicateStructsContractNonVoidMethodSignatures = keyof DuplicateStructsContractTypes['methods'] extends infer T ? T extends keyof DuplicateStructsContractTypes['methods'] ? MethodReturn<T> extends void ? never : T  : never : never
/**
 * Defines an object containing all relevant parameters for a single call to the contract.
 */
export type CallParams<TSignature extends DuplicateStructsContractSignatures> = Expand<
  Omit<AppClientMethodCallParams, 'method' | 'args' | 'onComplete'> &
    {
      /** The args for the ABI method call, either as an ordered array or an object */
      args: Expand<MethodArgs<TSignature>>
    }
>
/**
 * Maps a method signature from the DuplicateStructsContract smart contract to the method's arguments in either tuple or struct form
 */
export type MethodArgs<TSignature extends DuplicateStructsContractSignatures> = DuplicateStructsContractTypes['methods'][TSignature]['argsObj' | 'argsTuple']
/**
 * Maps a method signature from the DuplicateStructsContract smart contract to the method's return type
 */
export type MethodReturn<TSignature extends DuplicateStructsContractSignatures> = DuplicateStructsContractTypes['methods'][TSignature]['returns']


/**
 * Defines supported create method params for this smart contract
 */
export type DuplicateStructsContractCreateCallParams =
  | Expand<AppClientBareCallParams & {method?: undefined} & {onComplete?: OnApplicationComplete.NoOpOC} & CreateSchema>
/**
 * Defines arguments required for the deploy method.
 */
export type DuplicateStructsContractDeployParams = Expand<Omit<AppFactoryDeployParams, 'createParams' | 'updateParams' | 'deleteParams'> & {
  /**
   * Create transaction parameters to use if a create needs to be issued as part of deployment; use `method` to define ABI call (if available) or leave out for a bare call (if available)
   */
  createParams?: DuplicateStructsContractCreateCallParams
}>


/**
 * Exposes methods for constructing `AppClient` params objects for ABI calls to the DuplicateStructsContract smart contract
 */
export abstract class DuplicateStructsContractParamsFactory {
  /**
   * Constructs a no op call for the method_a_that_uses_struct()(uint64,uint64) ABI method
   *
   * @param params Parameters for the call
   * @returns An `AppClientMethodCallParams` object for the call
   */
  static methodAThatUsesStruct(params: CallParams<'method_a_that_uses_struct()(uint64,uint64)'> & CallOnComplete): AppClientMethodCallParams & CallOnComplete {
    return {
      ...params,
      method: 'method_a_that_uses_struct()(uint64,uint64)' as const,
      args: Array.isArray(params.args) ? params.args : [],
    }
  }
  /**
   * Constructs a no op call for the method_b_that_uses_same_struct()(uint64,uint64) ABI method
   *
   * @param params Parameters for the call
   * @returns An `AppClientMethodCallParams` object for the call
   */
  static methodBThatUsesSameStruct(params: CallParams<'method_b_that_uses_same_struct()(uint64,uint64)'> & CallOnComplete): AppClientMethodCallParams & CallOnComplete {
    return {
      ...params,
      method: 'method_b_that_uses_same_struct()(uint64,uint64)' as const,
      args: Array.isArray(params.args) ? params.args : [],
    }
  }
}

/**
 * A factory to create and deploy one or more instance of  the DuplicateStructsContract smart contract and to create one or more app clients to interact with those (or other) app instances
 */
export class DuplicateStructsContractFactory {
  /**
   * The underlying `AppFactory` for when you want to have more flexibility
   */
  public readonly appFactory: AppFactory

  /**
   * Creates a new instance of `DuplicateStructsContractFactory`
   *
   * @param params The parameters to initialise the app factory with
   */
  constructor(params: Expand<Omit<AppFactoryParams, 'appSpec'>>) {
    this.appFactory = new AppFactory({
      ...params,
      appSpec: APP_SPEC,
    })
  }
  
  /**
   * Returns a new `AppClient` client for an app instance of the given ID.
   *
   * Automatically populates appName, defaultSender and source maps from the factory
   * if not specified in the params.
   * @param params The parameters to create the app client
   * @returns The `AppClient`
   */
  public getAppClientById(params: Expand<Omit<AppClientParams, 'algorand' | 'appSpec'>>) {
    return new DuplicateStructsContractClient(this.appFactory.getAppClientById(params))
  }
  
  /**
   * Returns a new `AppClient` client, resolving the app by creator address and name
   * using AlgoKit app deployment semantics (i.e. looking for the app creation transaction note).
   *
   * Automatically populates appName, defaultSender and source maps from the factory
   * if not specified in the params.
   * @param params The parameters to create the app client
   * @returns The `AppClient`
   */
  public async getAppClientByCreatorAddressAndName(
    params: Expand<Omit<AppClientParams, 'algorand' | 'appSpec' | 'appId'> & ResolveAppClientByCreatorAndName>,
  ) {
    return new DuplicateStructsContractClient(await this.appFactory.getAppClientByCreatorAddressAndName(params))
  }

  /**
   * Idempotently deploys the DuplicateStructsContract smart contract.
   *
   * @param params The arguments for the contract calls and any additional parameters for the call
   * @returns The deployment result
   */
  public async deploy(params: DuplicateStructsContractDeployParams = {}) {
    const result = await this.appFactory.deploy({
      ...params,
    })
    return { result: result.result, app: new DuplicateStructsContractClient(result.app) }
  }

  /**
   * Get parameters to define transactions to the current app
   */
  readonly params = (($this) => {
    return {
      /**
       * Gets available create methods
       */
      get create() {
        return {
          /**
           * Creates a new instance of the DuplicateStructsContract smart contract using a bare call.
           *
           * @param params The params for the bare (non-ABI) call
           * @returns The params for a create call
           */
          bare(params?: Expand<AppClientBareCallParams & AppClientCompilationParams & CreateSchema & {onComplete?: OnApplicationComplete.NoOpOC}>) {
            return $this.appFactory.params.bare.create(params)
          },
        }
      },

    }
  })(this)

  /**
   * Send calls to the current app
   */
  readonly send = (($this) => {
    return {
      /**
       * Gets available create methods
       */
      get create() {
        return {
          /**
           * Creates a new instance of the DuplicateStructsContract smart contract using a bare call.
           *
           * @param params The params for the bare (non-ABI) call
           * @returns The create result
           */
          async bare(params?: Expand<AppClientBareCallParams & AppClientCompilationParams & CreateSchema & ExecuteParams & {onComplete?: OnApplicationComplete.NoOpOC}>) {
            const result = await $this.appFactory.create(params)
            return { result: result.result, app: new DuplicateStructsContractClient(result.app) }
          },
        }
      },

    }
  })(this)

}
/**
 * A client to make calls to the DuplicateStructsContract smart contract
 */
export class DuplicateStructsContractClient {
  /**
   * The underlying `AppClient` for when you want to have more flexibility
   */
  public readonly appClient: AppClient

  /**
   * Creates a new instance of `DuplicateStructsContractClient`
   *
   * @param appClient An `AppClient` instance which has been created with the DuplicateStructsContract app spec
   */
  constructor(appClient: AppClient)
  /**
   * Creates a new instance of `DuplicateStructsContractClient`
   *
   * @param params The parameters to initialise the app client with
   */
  constructor(params: Expand<Omit<AppClientParams, 'appSpec'>>)
  constructor(appClientOrParams: AppClient | Expand<Omit<AppClientParams, 'appSpec'>>) {
    this.appClient = appClientOrParams instanceof AppClient ? appClientOrParams : new AppClient({
      ...appClientOrParams,
      appSpec: APP_SPEC,
    })
  }
  
  /**
   * Checks for decode errors on the given return value and maps the return value to the return type for the given method
   * @returns The typed return value or undefined if there was no value
   */
  decodeReturnValue<TSignature extends DuplicateStructsContractNonVoidMethodSignatures>(method: TSignature, returnValue: ABIReturn | undefined) {
    return returnValue !== undefined ? getArc56ReturnValue<MethodReturn<TSignature>>(returnValue, this.appClient.getABIMethod(method), APP_SPEC.structs) : undefined
  }
  
  /**
   * Returns a new `DuplicateStructsContractClient` client, resolving the app by creator address and name
   * using AlgoKit app deployment semantics (i.e. looking for the app creation transaction note).
   * @param params The parameters to create the app client
   */
  public static async fromCreatorAndName(params: Expand<Omit<ResolveAppClientByCreatorAndName, 'appSpec'>>): Promise<DuplicateStructsContractClient> {
    return new DuplicateStructsContractClient(await AppClient.fromCreatorAndName({...params, appSpec: APP_SPEC}))
  }
  
  /**
   * Returns an `DuplicateStructsContractClient` instance for the current network based on
   * pre-determined network-specific app IDs specified in the ARC-56 app spec.
   *
   * If no IDs are in the app spec or the network isn't recognised, an error is thrown.
   * @param params The parameters to create the app client
   */
  static async fromNetwork(
    params: Expand<Omit<AppClientParams, 'appSpec' | 'appId'>>
  ): Promise<DuplicateStructsContractClient> {
    return new DuplicateStructsContractClient(await AppClient.fromNetwork({...params, appSpec: APP_SPEC}))
  }

  /**
   * Get parameters to define transactions to the current app
   */
  readonly params = (($this) => {
    return {
      /**
       * Makes a clear_state call to an existing instance of the DuplicateStructsContract smart contract.
       *
       * @param params The params for the bare (non-ABI) call
       * @returns The clearState result
       */
      clearState(params?: Expand<AppClientBareCallParams>) {
        return $this.appClient.params.bare.clearState(params)
      },

      /**
       * Makes a call to the DuplicateStructsContract smart contract using the method_a_that_uses_struct()(uint64,uint64) ABI method.
       *
       * @param params The params for the smart contract call
       * @returns The call params
       */
      methodAThatUsesStruct(params: Expand<CallParams<'method_a_that_uses_struct()(uint64,uint64)'> & {onComplete?: OnApplicationComplete.NoOpOC}> = {args: []}) {
        return $this.appClient.params.call(DuplicateStructsContractParamsFactory.methodAThatUsesStruct(params))
      },
      /**
       * Makes a call to the DuplicateStructsContract smart contract using the method_b_that_uses_same_struct()(uint64,uint64) ABI method.
       *
       * @param params The params for the smart contract call
       * @returns The call params
       */
      methodBThatUsesSameStruct(params: Expand<CallParams<'method_b_that_uses_same_struct()(uint64,uint64)'> & {onComplete?: OnApplicationComplete.NoOpOC}> = {args: []}) {
        return $this.appClient.params.call(DuplicateStructsContractParamsFactory.methodBThatUsesSameStruct(params))
      },
    }
  })(this)

  /**
   * Get parameters to define transactions to the current app
   */
  readonly transactions = (($this) => {
    return {
      /**
       * Makes a clear_state call to an existing instance of the DuplicateStructsContract smart contract.
       *
       * @param params The params for the bare (non-ABI) call
       * @returns The clearState result
       */
      clearState(params?: Expand<AppClientBareCallParams>) {
        return $this.appClient.transactions.bare.clearState(params)
      },

      /**
       * Makes a call to the DuplicateStructsContract smart contract using the method_a_that_uses_struct()(uint64,uint64) ABI method.
       *
       * @param params The params for the smart contract call
       * @returns The call transaction
       */
      methodAThatUsesStruct(params: Expand<CallParams<'method_a_that_uses_struct()(uint64,uint64)'> & {onComplete?: OnApplicationComplete.NoOpOC}> = {args: []}) {
        return $this.appClient.transactions.call(DuplicateStructsContractParamsFactory.methodAThatUsesStruct(params))
      },
      /**
       * Makes a call to the DuplicateStructsContract smart contract using the method_b_that_uses_same_struct()(uint64,uint64) ABI method.
       *
       * @param params The params for the smart contract call
       * @returns The call transaction
       */
      methodBThatUsesSameStruct(params: Expand<CallParams<'method_b_that_uses_same_struct()(uint64,uint64)'> & {onComplete?: OnApplicationComplete.NoOpOC}> = {args: []}) {
        return $this.appClient.transactions.call(DuplicateStructsContractParamsFactory.methodBThatUsesSameStruct(params))
      },
    }
  })(this)

  /**
   * Send calls to the current app
   */
  readonly send = (($this) => {
    return {
      /**
       * Makes a clear_state call to an existing instance of the DuplicateStructsContract smart contract.
       *
       * @param params The params for the bare (non-ABI) call
       * @returns The clearState result
       */
      clearState(params?: Expand<AppClientBareCallParams & ExecuteParams>) {
        return $this.appClient.send.bare.clearState(params)
      },

      /**
       * Makes a call to the DuplicateStructsContract smart contract using the method_a_that_uses_struct()(uint64,uint64) ABI method.
       *
       * @param params The params for the smart contract call
       * @returns The call result
       */
      async methodAThatUsesStruct(params: Expand<CallParams<'method_a_that_uses_struct()(uint64,uint64)'> & ExecuteParams & {onComplete?: OnApplicationComplete.NoOpOC}> = {args: []}) {
        const result = await $this.appClient.send.call(DuplicateStructsContractParamsFactory.methodAThatUsesStruct(params))
        return {...result, return: result.return as undefined | MethodReturn<'method_a_that_uses_struct()(uint64,uint64)'>}
      },
      /**
       * Makes a call to the DuplicateStructsContract smart contract using the method_b_that_uses_same_struct()(uint64,uint64) ABI method.
       *
       * @param params The params for the smart contract call
       * @returns The call result
       */
      async methodBThatUsesSameStruct(params: Expand<CallParams<'method_b_that_uses_same_struct()(uint64,uint64)'> & ExecuteParams & {onComplete?: OnApplicationComplete.NoOpOC}> = {args: []}) {
        const result = await $this.appClient.send.call(DuplicateStructsContractParamsFactory.methodBThatUsesSameStruct(params))
        return {...result, return: result.return as undefined | MethodReturn<'method_b_that_uses_same_struct()(uint64,uint64)'>}
      },
    }
  })(this)

  /**
   * Methods to access state for the current DuplicateStructsContract app
   */
  state = {
  }

  public newGroup(): DuplicateStructsContractComposer {
    const client = this
    const composer = client.appClient.newGroup()
    const resultMappers: Array<undefined | ((x: ABIReturn | undefined) => any)> = []
    return {
      /**
       * Add a method_a_that_uses_struct()(uint64,uint64) method call against the DuplicateStructsContract contract
       */
      methodAThatUsesStruct(params: CallParams<'method_a_that_uses_struct()(uint64,uint64)'> & {onComplete?: OnApplicationComplete.NoOpOC}) {
        composer.addAppCallMethodCall(client.params.methodAThatUsesStruct(params))
        resultMappers.push((v) => client.decodeReturnValue('method_a_that_uses_struct()(uint64,uint64)', v))
        return this
      },
      /**
       * Add a method_b_that_uses_same_struct()(uint64,uint64) method call against the DuplicateStructsContract contract
       */
      methodBThatUsesSameStruct(params: CallParams<'method_b_that_uses_same_struct()(uint64,uint64)'> & {onComplete?: OnApplicationComplete.NoOpOC}) {
        composer.addAppCallMethodCall(client.params.methodBThatUsesSameStruct(params))
        resultMappers.push((v) => client.decodeReturnValue('method_b_that_uses_same_struct()(uint64,uint64)', v))
        return this
      },
      /**
       * Add a clear state call to the DuplicateStructsContract contract
       */
      clearState(params: AppClientBareCallParams) {
        composer.addAppCall(client.params.clearState(params))
        return this
      },
      addTransaction(txn: Transaction, signer?: TransactionSigner) {
        composer.addTransaction(txn, signer)
        return this
      },
      composer() {
        return composer
      },
      async simulate(options?: SimulateOptions) {
        const result = await composer.simulate(options)
        return {
          ...result,
          returns: result.returns?.map((val, i) => resultMappers[i] !== undefined ? resultMappers[i]!(val) : val.returnValue)
        }
      },
      async execute(params?: ExecuteParams) {
        const result = await composer.execute(params)
        return {
          ...result,
          returns: result.returns?.map((val, i) => resultMappers[i] !== undefined ? resultMappers[i]!(val) : val.returnValue)
        }
      }
    } as unknown as DuplicateStructsContractComposer
  }
}
export type DuplicateStructsContractComposer<TReturns extends [...any[]] = []> = {
  /**
   * Calls the method_a_that_uses_struct()(uint64,uint64) ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  methodAThatUsesStruct(params?: CallParams<'method_a_that_uses_struct()(uint64,uint64)'>): DuplicateStructsContractComposer<[...TReturns, MethodReturn<'method_a_that_uses_struct()(uint64,uint64)'> | undefined]>

  /**
   * Calls the method_b_that_uses_same_struct()(uint64,uint64) ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  methodBThatUsesSameStruct(params?: CallParams<'method_b_that_uses_same_struct()(uint64,uint64)'>): DuplicateStructsContractComposer<[...TReturns, MethodReturn<'method_b_that_uses_same_struct()(uint64,uint64)'> | undefined]>

  /**
   * Makes a clear_state call to an existing instance of the DuplicateStructsContract smart contract.
   *
   * @param args The arguments for the bare call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  clearState(params?: AppClientBareCallParams): DuplicateStructsContractComposer<[...TReturns, undefined]>

  /**
   * Adds a transaction to the composer
   *
   * @param txn A transaction to add to the transaction group
   * @param signer The optional signer to use when signing this transaction.
   */
  addTransaction(txn: Transaction, signer?: TransactionSigner): DuplicateStructsContractComposer<TReturns>
  /**
   * Returns the underlying AtomicTransactionComposer instance
   */
  composer(): AlgoKitComposer
  /**
   * Simulates the transaction group and returns the result
   */
  simulate(options?: SimulateOptions): Promise<DuplicateStructsContractComposerResults<TReturns> & { simulateResponse: SimulateResponse }>
  /**
   * Executes the transaction group and returns the results
   */
  execute(params?: ExecuteParams): Promise<DuplicateStructsContractComposerResults<TReturns>>
}
export type DuplicateStructsContractComposerResults<TReturns extends [...any[]]> = Expand<SendAtomicTransactionComposerResults & {
  returns: TReturns
}>

