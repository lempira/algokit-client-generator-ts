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

export const APP_SPEC: Arc56Contract = {"arcs":[],"name":"LifeCycleApp","structs":{},"methods":[{"name":"hello","args":[{"name":"name","type":"string"}],"returns":{"type":"string"},"events":[],"actions":{"create":[],"call":["NoOp"]}},{"name":"hello","args":[],"returns":{"type":"string"},"events":[],"actions":{"create":[],"call":["NoOp"]}},{"name":"create","desc":"ABI create method with 1 argument","args":[{"name":"greeting","type":"string","desc":"The greeting"}],"returns":{"type":"string","desc":"The formatted greeting"},"events":[],"actions":{"create":["NoOp"],"call":[]}},{"name":"create","desc":"ABI create method with 2 arguments","args":[{"name":"greeting","type":"string"},{"name":"times","type":"uint32"}],"returns":{"type":"void"},"events":[],"actions":{"create":["NoOp"],"call":[]}}],"state":{"schema":{"global":{"ints":1,"bytes":1},"local":{"ints":0,"bytes":0}},"keys":{"global":{"greeting":{"key":"Z3JlZXRpbmc=","keyType":"bytes","valueType":"bytes","desc":""},"times":{"key":"dGltZXM=","keyType":"bytes","valueType":"uint64","desc":""}},"local":{},"box":{}},"maps":{"global":{},"local":{},"box":{}}},"source":{"approval":"I3ByYWdtYSB2ZXJzaW9uIDgKaW50Y2Jsb2NrIDAgMSAxMApieXRlY2Jsb2NrIDB4IDB4NzQ2OTZkNjU3MyAweDY3NzI2NTY1NzQ2OTZlNjcgMHgxNTFmN2M3NQp0eG4gTnVtQXBwQXJncwppbnRjXzAgLy8gMAo9PQpibnogbWFpbl9sMTAKdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMApwdXNoYnl0ZXMgMHgwMmJlY2UxMSAvLyAiaGVsbG8oc3RyaW5nKXN0cmluZyIKPT0KYm56IG1haW5fbDkKdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMApwdXNoYnl0ZXMgMHhhYjA2YzFhOCAvLyAiaGVsbG8oKXN0cmluZyIKPT0KYm56IG1haW5fbDgKdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMApwdXNoYnl0ZXMgMHg5N2YxZmMxMSAvLyAiY3JlYXRlKHN0cmluZylzdHJpbmciCj09CmJueiBtYWluX2w3CnR4bmEgQXBwbGljYXRpb25BcmdzIDAKcHVzaGJ5dGVzIDB4NjAxOTMyNjQgLy8gImNyZWF0ZShzdHJpbmcsdWludDMyKXZvaWQiCj09CmJueiBtYWluX2w2CmVycgptYWluX2w2Ogp0eG4gT25Db21wbGV0aW9uCmludGNfMCAvLyBOb09wCj09CnR4biBBcHBsaWNhdGlvbklECmludGNfMCAvLyAwCj09CiYmCmFzc2VydAp0eG5hIEFwcGxpY2F0aW9uQXJncyAxCnN0b3JlIDMKdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMgppbnRjXzAgLy8gMApleHRyYWN0X3VpbnQzMgpzdG9yZSA0CmxvYWQgMwpsb2FkIDQKY2FsbHN1YiBjcmVhdGVfNwppbnRjXzEgLy8gMQpyZXR1cm4KbWFpbl9sNzoKdHhuIE9uQ29tcGxldGlvbgppbnRjXzAgLy8gTm9PcAo9PQp0eG4gQXBwbGljYXRpb25JRAppbnRjXzAgLy8gMAo9PQomJgphc3NlcnQKdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQpjYWxsc3ViIGNyZWF0ZV82CnN0b3JlIDIKYnl0ZWNfMyAvLyAweDE1MWY3Yzc1CmxvYWQgMgpjb25jYXQKbG9nCmludGNfMSAvLyAxCnJldHVybgptYWluX2w4Ogp0eG4gT25Db21wbGV0aW9uCmludGNfMCAvLyBOb09wCj09CnR4biBBcHBsaWNhdGlvbklECmludGNfMCAvLyAwCiE9CiYmCmFzc2VydApjYWxsc3ViIGhlbGxvXzQKc3RvcmUgMQpieXRlY18zIC8vIDB4MTUxZjdjNzUKbG9hZCAxCmNvbmNhdApsb2cKaW50Y18xIC8vIDEKcmV0dXJuCm1haW5fbDk6CnR4biBPbkNvbXBsZXRpb24KaW50Y18wIC8vIE5vT3AKPT0KdHhuIEFwcGxpY2F0aW9uSUQKaW50Y18wIC8vIDAKIT0KJiYKYXNzZXJ0CnR4bmEgQXBwbGljYXRpb25BcmdzIDEKY2FsbHN1YiBoZWxsb18zCnN0b3JlIDAKYnl0ZWNfMyAvLyAweDE1MWY3Yzc1CmxvYWQgMApjb25jYXQKbG9nCmludGNfMSAvLyAxCnJldHVybgptYWluX2wxMDoKdHhuIE9uQ29tcGxldGlvbgppbnRjXzAgLy8gTm9PcAo9PQpibnogbWFpbl9sMTYKdHhuIE9uQ29tcGxldGlvbgppbnRjXzEgLy8gT3B0SW4KPT0KYm56IG1haW5fbDE1CnR4biBPbkNvbXBsZXRpb24KcHVzaGludCA0IC8vIFVwZGF0ZUFwcGxpY2F0aW9uCj09CmJueiBtYWluX2wxNAplcnIKbWFpbl9sMTQ6CnR4biBBcHBsaWNhdGlvbklECmludGNfMCAvLyAwCiE9CmFzc2VydApjYWxsc3ViIHVwZGF0ZV8yCmludGNfMSAvLyAxCnJldHVybgptYWluX2wxNToKdHhuIEFwcGxpY2F0aW9uSUQKaW50Y18wIC8vIDAKPT0KYXNzZXJ0CmNhbGxzdWIgYmFyZWNyZWF0ZV81CmludGNfMSAvLyAxCnJldHVybgptYWluX2wxNjoKdHhuIEFwcGxpY2F0aW9uSUQKaW50Y18wIC8vIDAKPT0KYXNzZXJ0CmNhbGxzdWIgYmFyZWNyZWF0ZV81CmludGNfMSAvLyAxCnJldHVybgoKLy8gaW50X3RvX2FzY2lpCmludHRvYXNjaWlfMDoKcHJvdG8gMSAxCnB1c2hieXRlcyAweDMwMzEzMjMzMzQzNTM2MzczODM5IC8vICIwMTIzNDU2Nzg5IgpmcmFtZV9kaWcgLTEKaW50Y18xIC8vIDEKZXh0cmFjdDMKcmV0c3ViCgovLyBpdG9hCml0b2FfMToKcHJvdG8gMSAxCmZyYW1lX2RpZyAtMQppbnRjXzAgLy8gMAo9PQpibnogaXRvYV8xX2w1CmZyYW1lX2RpZyAtMQppbnRjXzIgLy8gMTAKLwppbnRjXzAgLy8gMAo+CmJueiBpdG9hXzFfbDQKYnl0ZWNfMCAvLyAiIgppdG9hXzFfbDM6CmZyYW1lX2RpZyAtMQppbnRjXzIgLy8gMTAKJQpjYWxsc3ViIGludHRvYXNjaWlfMApjb25jYXQKYiBpdG9hXzFfbDYKaXRvYV8xX2w0OgpmcmFtZV9kaWcgLTEKaW50Y18yIC8vIDEwCi8KY2FsbHN1YiBpdG9hXzEKYiBpdG9hXzFfbDMKaXRvYV8xX2w1OgpwdXNoYnl0ZXMgMHgzMCAvLyAiMCIKaXRvYV8xX2w2OgpyZXRzdWIKCi8vIHVwZGF0ZQp1cGRhdGVfMjoKcHJvdG8gMCAwCnR4biBTZW5kZXIKZ2xvYmFsIENyZWF0b3JBZGRyZXNzCj09Ci8vIHVuYXV0aG9yaXplZAphc3NlcnQKcHVzaGludCBUTVBMX1VQREFUQUJMRSAvLyBUTVBMX1VQREFUQUJMRQovLyBDaGVjayBhcHAgaXMgdXBkYXRhYmxlCmFzc2VydApyZXRzdWIKCi8vIGhlbGxvCmhlbGxvXzM6CnByb3RvIDEgMQpieXRlY18wIC8vICIiCmJ5dGVjXzAgLy8gIiIKc3RvcmUgNQppbnRjXzAgLy8gMApzdG9yZSA2CmhlbGxvXzNfbDE6CmxvYWQgNgpieXRlY18xIC8vICJ0aW1lcyIKYXBwX2dsb2JhbF9nZXQKPApieiBoZWxsb18zX2wzCmxvYWQgNQpieXRlY18yIC8vICJncmVldGluZyIKYXBwX2dsb2JhbF9nZXQKY29uY2F0CnB1c2hieXRlcyAweDJjMjAgLy8gIiwgIgpjb25jYXQKZnJhbWVfZGlnIC0xCmV4dHJhY3QgMiAwCmNvbmNhdApwdXNoYnl0ZXMgMHgwYSAvLyAiXG4iCmNvbmNhdApzdG9yZSA1CmxvYWQgNgppbnRjXzEgLy8gMQorCnN0b3JlIDYKYiBoZWxsb18zX2wxCmhlbGxvXzNfbDM6CmxvYWQgNQpmcmFtZV9idXJ5IDAKZnJhbWVfZGlnIDAKbGVuCml0b2IKZXh0cmFjdCA2IDAKZnJhbWVfZGlnIDAKY29uY2F0CmZyYW1lX2J1cnkgMApyZXRzdWIKCi8vIGhlbGxvCmhlbGxvXzQ6CnByb3RvIDAgMQpieXRlY18wIC8vICIiCmJ5dGVjXzAgLy8gIiIKc3RvcmUgNwppbnRjXzAgLy8gMApzdG9yZSA4CmhlbGxvXzRfbDE6CmxvYWQgOApieXRlY18xIC8vICJ0aW1lcyIKYXBwX2dsb2JhbF9nZXQKPApieiBoZWxsb180X2wzCmxvYWQgNwpieXRlY18yIC8vICJncmVldGluZyIKYXBwX2dsb2JhbF9nZXQKY29uY2F0CnB1c2hieXRlcyAweDJjMjA2ZDc5NzM3NDY1NzI3OTIwNzA2NTcyNzM2ZjZlMGEgLy8gIiwgbXlzdGVyeSBwZXJzb25cbiIKY29uY2F0CnN0b3JlIDcKbG9hZCA4CmludGNfMSAvLyAxCisKc3RvcmUgOApiIGhlbGxvXzRfbDEKaGVsbG9fNF9sMzoKbG9hZCA3CmZyYW1lX2J1cnkgMApmcmFtZV9kaWcgMApsZW4KaXRvYgpleHRyYWN0IDYgMApmcmFtZV9kaWcgMApjb25jYXQKZnJhbWVfYnVyeSAwCnJldHN1YgoKLy8gYmFyZV9jcmVhdGUKYmFyZWNyZWF0ZV81Ogpwcm90byAwIDAKYnl0ZWNfMiAvLyAiZ3JlZXRpbmciCnB1c2hieXRlcyAweDQ4NjU2YzZjNmYgLy8gIkhlbGxvIgphcHBfZ2xvYmFsX3B1dApieXRlY18xIC8vICJ0aW1lcyIKaW50Y18xIC8vIDEKYXBwX2dsb2JhbF9wdXQKaW50Y18xIC8vIDEKcmV0dXJuCgovLyBjcmVhdGUKY3JlYXRlXzY6CnByb3RvIDEgMQpieXRlY18wIC8vICIiCmJ5dGVjXzIgLy8gImdyZWV0aW5nIgpmcmFtZV9kaWcgLTEKZXh0cmFjdCAyIDAKYXBwX2dsb2JhbF9wdXQKYnl0ZWNfMSAvLyAidGltZXMiCmludGNfMSAvLyAxCmFwcF9nbG9iYWxfcHV0CmZyYW1lX2RpZyAtMQpleHRyYWN0IDIgMApwdXNoYnl0ZXMgMHg1ZiAvLyAiXyIKY29uY2F0CmJ5dGVjXzEgLy8gInRpbWVzIgphcHBfZ2xvYmFsX2dldApjYWxsc3ViIGl0b2FfMQpjb25jYXQKZnJhbWVfYnVyeSAwCmZyYW1lX2RpZyAwCmxlbgppdG9iCmV4dHJhY3QgNiAwCmZyYW1lX2RpZyAwCmNvbmNhdApmcmFtZV9idXJ5IDAKcmV0c3ViCgovLyBjcmVhdGUKY3JlYXRlXzc6CnByb3RvIDIgMApieXRlY18yIC8vICJncmVldGluZyIKZnJhbWVfZGlnIC0yCmV4dHJhY3QgMiAwCmFwcF9nbG9iYWxfcHV0CmJ5dGVjXzEgLy8gInRpbWVzIgpmcmFtZV9kaWcgLTEKYXBwX2dsb2JhbF9wdXQKaW50Y18xIC8vIDEKcmV0dXJu","clear":"I3ByYWdtYSB2ZXJzaW9uIDgKaW50Y2Jsb2NrIDEKY2FsbHN1YiBjbGVhcl8wCmludGNfMCAvLyAxCnJldHVybgoKLy8gY2xlYXIKY2xlYXJfMDoKcHJvdG8gMCAwCmludGNfMCAvLyAxCnJldHVybg=="},"bareActions":{"create":["NoOp","OptIn"],"call":["UpdateApplication"]}}

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

type uint32 = number;
type bytes = Uint8Array;
type uint64 = bigint;

/**
 * Defines the types of available calls and state of the LifeCycleApp smart contract.
 */
export type LifeCycleAppTypes = {
  /**
   * Maps method signatures / names to their argument and return types.
   */
  methods:
    & Record<'hello(string)string', {
      argsObj: {
        name: string
      }
      argsTuple: [name: string]
      returns: string
    }>
    & Record<'hello()string', {
      argsObj: {
      }
      argsTuple: []
      returns: string
    }>
    & Record<'create(string)string', {
      argsObj: {
        /**
         * The greeting
         */
        greeting: string
      }
      argsTuple: [greeting: string]
      /**
       * The formatted greeting
       */
      returns: string
    }>
    & Record<'create(string,uint32)void', {
      argsObj: {
        greeting: string
        times: number
      }
      argsTuple: [greeting: string, times: number]
      returns: void
    }>
  /**
   * Defines the shape of the state of the application.
   */
  state: {
    global: {
      keys: {
        greeting: BinaryState
        times: bigint
      }
    }
  }
}

/**
 * Defines the possible abi call signatures.
 */
export type LifeCycleAppSignatures = keyof LifeCycleAppTypes['methods']
/**
 * Defines the possible abi call signatures for methods that return a non-void value.
 */
export type LifeCycleAppNonVoidMethodSignatures = keyof LifeCycleAppTypes['methods'] extends infer T ? T extends keyof LifeCycleAppTypes['methods'] ? MethodReturn<T> extends void ? never : T  : never : never
/**
 * Defines an object containing all relevant parameters for a single call to the contract.
 */
export type CallParams<TSignature extends LifeCycleAppSignatures> = Expand<
  Omit<AppClientMethodCallParams, 'method' | 'args' | 'onComplete'> &
    {
      /** The args for the ABI method call, either as an ordered array or an object */
      args: Expand<MethodArgs<TSignature>>
    }
>
/**
 * Maps a method signature from the LifeCycleApp smart contract to the method's arguments in either tuple or struct form
 */
export type MethodArgs<TSignature extends LifeCycleAppSignatures> = LifeCycleAppTypes['methods'][TSignature]['argsObj' | 'argsTuple']
/**
 * Maps a method signature from the LifeCycleApp smart contract to the method's return type
 */
export type MethodReturn<TSignature extends LifeCycleAppSignatures> = LifeCycleAppTypes['methods'][TSignature]['returns']

/**
 * Defines the shape of the keyed global state of the application.
 */
export type GlobalKeysState = LifeCycleAppTypes['state']['global']['keys']


/**
 * Defines supported create method params for this smart contract
 */
export type LifeCycleAppCreateCallParams =
  | Expand<AppClientBareCallParams & {method?: undefined} & {onComplete?: OnApplicationComplete.NoOpOC | OnApplicationComplete.OptInOC} & CreateSchema>
  | Expand<CallParams<'create(string)string'> & {method: 'create(string)string'} & {onComplete?: OnApplicationComplete.NoOpOC} & CreateSchema>
  | Expand<CallParams<'create(string,uint32)void'> & {method: 'create(string,uint32)void'} & {onComplete?: OnApplicationComplete.NoOpOC} & CreateSchema>
/**
 * Defines supported update method params for this smart contract
 */
export type LifeCycleAppUpdateCallParams =
  | Expand<AppClientBareCallParams> & {method?: undefined}
/**
 * Defines arguments required for the deploy method.
 */
export type LifeCycleAppDeployParams = Expand<Omit<AppFactoryDeployParams, 'createParams' | 'updateParams' | 'deleteParams'> & {
  /**
   * Create transaction parameters to use if a create needs to be issued as part of deployment; use `method` to define ABI call (if available) or leave out for a bare call (if available)
   */
  createParams?: LifeCycleAppCreateCallParams
  /**
   * Update transaction parameters to use if a create needs to be issued as part of deployment; use `method` to define ABI call (if available) or leave out for a bare call (if available)
   */
  updateParams?: LifeCycleAppUpdateCallParams
}>


/**
 * Exposes methods for constructing `AppClient` params objects for ABI calls to the LifeCycleApp smart contract
 */
export abstract class LifeCycleAppParamsFactory {
  /**
   * Gets available create ABI call param factories
   */
  static get create() {
    return {
      _resolveByMethod<TParams extends LifeCycleAppCreateCallParams & {method: string}>(params: TParams) {
        switch(params.method) {
          case 'create(string)string':
            return LifeCycleAppParamsFactory.create.createStringString(params)
          case 'create(string,uint32)void':
            return LifeCycleAppParamsFactory.create.createStringUint32Void(params)
        }
        throw new Error(`Unknown ' + verb + ' method`)
      },

      /**
       * Constructs create ABI call params for the LifeCycleApp smart contract using the create(string)string ABI method
       *
       * @param params Parameters for the call
       * @returns An `AppClientMethodCallParams` object for the call
       */
      createStringString(params: CallParams<'create(string)string'> & AppClientCompilationParams & {onComplete?: OnApplicationComplete.NoOpOC}): AppClientMethodCallParams & AppClientCompilationParams & {onComplete?: OnApplicationComplete.NoOpOC} {
        return {
          ...params,
          method: 'create(string)string' as const,
          args: Array.isArray(params.args) ? params.args : [params.args.greeting],
        }
      },
      /**
       * Constructs create ABI call params for the LifeCycleApp smart contract using the create(string,uint32)void ABI method
       *
       * @param params Parameters for the call
       * @returns An `AppClientMethodCallParams` object for the call
       */
      createStringUint32Void(params: CallParams<'create(string,uint32)void'> & AppClientCompilationParams & {onComplete?: OnApplicationComplete.NoOpOC}): AppClientMethodCallParams & AppClientCompilationParams & {onComplete?: OnApplicationComplete.NoOpOC} {
        return {
          ...params,
          method: 'create(string,uint32)void' as const,
          args: Array.isArray(params.args) ? params.args : [params.args.greeting, params.args.times],
        }
      },
    }
  }

  /**
   * Constructs a no op call for the hello(string)string ABI method
   *
   * @param params Parameters for the call
   * @returns An `AppClientMethodCallParams` object for the call
   */
  static helloStringString(params: CallParams<'hello(string)string'> & CallOnComplete): AppClientMethodCallParams & CallOnComplete {
    return {
      ...params,
      method: 'hello(string)string' as const,
      args: Array.isArray(params.args) ? params.args : [params.args.name],
    }
  }
  /**
   * Constructs a no op call for the hello()string ABI method
   *
   * @param params Parameters for the call
   * @returns An `AppClientMethodCallParams` object for the call
   */
  static helloString(params: CallParams<'hello()string'> & CallOnComplete): AppClientMethodCallParams & CallOnComplete {
    return {
      ...params,
      method: 'hello()string' as const,
      args: Array.isArray(params.args) ? params.args : [],
    }
  }
}

/**
 * A factory to create and deploy one or more instance of  the LifeCycleApp smart contract and to create one or more app clients to interact with those (or other) app instances
 */
export class LifeCycleAppFactory {
  /**
   * The underlying `AppFactory` for when you want to have more flexibility
   */
  public readonly appFactory: AppFactory

  /**
   * Creates a new instance of `LifeCycleAppFactory`
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
    return new LifeCycleAppClient(this.appFactory.getAppClientById(params))
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
    return new LifeCycleAppClient(await this.appFactory.getAppClientByCreatorAddressAndName(params))
  }

  /**
   * Idempotently deploys the LifeCycleApp smart contract.
   *
   * @param params The arguments for the contract calls and any additional parameters for the call
   * @returns The deployment result
   */
  public async deploy(params: LifeCycleAppDeployParams = {}) {
    const result = await this.appFactory.deploy({
      ...params,
      createParams: params.createParams?.method ? LifeCycleAppParamsFactory.create._resolveByMethod(params.createParams) : params.createParams,
    })
    return { result: result.result, app: new LifeCycleAppClient(result.app) }
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
           * Creates a new instance of the LifeCycleApp smart contract using a bare call.
           *
           * @param params The params for the bare (non-ABI) call
           * @returns The params for a create call
           */
          bare(params?: Expand<AppClientBareCallParams & AppClientCompilationParams & CreateSchema & {onComplete?: OnApplicationComplete.NoOpOC | OnApplicationComplete.OptInOC}>) {
            return $this.appFactory.params.bare.create(params)
          },
          /**
           * Creates a new instance of the LifeCycleApp smart contract using the create(string)string ABI method.
           *
           * ABI create method with 1 argument
           *
           * @param params The params for the smart contract call
           * @returns The create params: The formatted greeting
           */
          createStringString(params: Expand<CallParams<'create(string)string'> & AppClientCompilationParams & CreateSchema & {onComplete?: OnApplicationComplete.NoOpOC}>) {
            return $this.appFactory.params.create(LifeCycleAppParamsFactory.create.createStringString(params))
          },
          /**
           * Creates a new instance of the LifeCycleApp smart contract using the create(string,uint32)void ABI method.
           *
           * ABI create method with 2 arguments
           *
           * @param params The params for the smart contract call
           * @returns The create params
           */
          createStringUint32Void(params: Expand<CallParams<'create(string,uint32)void'> & AppClientCompilationParams & CreateSchema & {onComplete?: OnApplicationComplete.NoOpOC}>) {
            return $this.appFactory.params.create(LifeCycleAppParamsFactory.create.createStringUint32Void(params))
          },
        }
      },

      /**
       * Gets available deployUpdate methods
       */
      get deployUpdate() {
        return {
          /**
           * Updates an existing instance of the LifeCycleApp smart contract using a bare call.
           *
           * @param params The params for the bare (non-ABI) call
           * @returns The params for a deployUpdate call
           */
          bare(params?: Expand<AppClientBareCallParams & AppClientCompilationParams>) {
            return $this.appFactory.params.bare.deployUpdate(params)
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
           * Creates a new instance of the LifeCycleApp smart contract using a bare call.
           *
           * @param params The params for the bare (non-ABI) call
           * @returns The create result
           */
          async bare(params?: Expand<AppClientBareCallParams & AppClientCompilationParams & CreateSchema & ExecuteParams & {onComplete?: OnApplicationComplete.NoOpOC | OnApplicationComplete.OptInOC}>) {
            const result = await $this.appFactory.create(params)
            return { result: result.result, app: new LifeCycleAppClient(result.app) }
          },
          /**
           * Creates a new instance of the LifeCycleApp smart contract using an ABI method call using the create(string)string ABI method.
           *
           * ABI create method with 1 argument
           *
           * @param params The params for the smart contract call
           * @returns The create result: The formatted greeting
           */
          async createStringString(params: Expand<CallParams<'create(string)string'> & AppClientCompilationParams & CreateSchema & ExecuteParams & {onComplete?: OnApplicationComplete.NoOpOC}>) {
            const result = await $this.appFactory.create(LifeCycleAppParamsFactory.create.createStringString(params))
            return { result: { ...result.result, return: result.result.return as undefined | MethodReturn<'create(string)string'> }, app: new LifeCycleAppClient(result.app) }
          },
          /**
           * Creates a new instance of the LifeCycleApp smart contract using an ABI method call using the create(string,uint32)void ABI method.
           *
           * ABI create method with 2 arguments
           *
           * @param params The params for the smart contract call
           * @returns The create result
           */
          async createStringUint32Void(params: Expand<CallParams<'create(string,uint32)void'> & AppClientCompilationParams & CreateSchema & ExecuteParams & {onComplete?: OnApplicationComplete.NoOpOC}>) {
            const result = await $this.appFactory.create(LifeCycleAppParamsFactory.create.createStringUint32Void(params))
            return { result: { ...result.result, return: result.result.return as undefined | MethodReturn<'create(string,uint32)void'> }, app: new LifeCycleAppClient(result.app) }
          },
        }
      },

    }
  })(this)

}
/**
 * A client to make calls to the LifeCycleApp smart contract
 */
export class LifeCycleAppClient {
  /**
   * The underlying `AppClient` for when you want to have more flexibility
   */
  public readonly appClient: AppClient

  /**
   * Creates a new instance of `LifeCycleAppClient`
   *
   * @param appClient An `AppClient` instance which has been created with the LifeCycleApp app spec
   */
  constructor(appClient: AppClient)
  /**
   * Creates a new instance of `LifeCycleAppClient`
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
  decodeReturnValue<TSignature extends LifeCycleAppNonVoidMethodSignatures>(method: TSignature, returnValue: ABIReturn | undefined) {
    return returnValue !== undefined ? getArc56ReturnValue<MethodReturn<TSignature>>(returnValue, this.appClient.getABIMethod(method), APP_SPEC.structs) : undefined
  }
  
  /**
   * Returns a new `LifeCycleAppClient` client, resolving the app by creator address and name
   * using AlgoKit app deployment semantics (i.e. looking for the app creation transaction note).
   * @param params The parameters to create the app client
   */
  public static async fromCreatorAndName(params: Expand<Omit<ResolveAppClientByCreatorAndName, 'appSpec'>>): Promise<LifeCycleAppClient> {
    return new LifeCycleAppClient(await AppClient.fromCreatorAndName({...params, appSpec: APP_SPEC}))
  }
  
  /**
   * Returns an `LifeCycleAppClient` instance for the current network based on
   * pre-determined network-specific app IDs specified in the ARC-56 app spec.
   *
   * If no IDs are in the app spec or the network isn't recognised, an error is thrown.
   * @param params The parameters to create the app client
   */
  static async fromNetwork(
    params: Expand<Omit<AppClientParams, 'appSpec' | 'appId'>>
  ): Promise<LifeCycleAppClient> {
    return new LifeCycleAppClient(await AppClient.fromNetwork({...params, appSpec: APP_SPEC}))
  }

  /**
   * Get parameters to define transactions to the current app
   */
  readonly params = (($this) => {
    return {
      /**
       * Gets available update methods
       */
      get update() {
        return {
          /**
           * Updates an existing instance of the LifeCycleApp smart contract using a bare call.
           *
           * @param params The params for the bare (non-ABI) call
           * @returns The update result
           */
          bare(params?: Expand<AppClientBareCallParams & AppClientCompilationParams>) {
            return $this.appClient.params.bare.update(params)
          },
        }
      },

      /**
       * Makes a clear_state call to an existing instance of the LifeCycleApp smart contract.
       *
       * @param params The params for the bare (non-ABI) call
       * @returns The clearState result
       */
      clearState(params?: Expand<AppClientBareCallParams>) {
        return $this.appClient.params.bare.clearState(params)
      },

      /**
       * Makes a call to the LifeCycleApp smart contract using the hello(string)string ABI method.
       *
       * @param params The params for the smart contract call
       * @returns The call params
       */
      helloStringString(params: Expand<CallParams<'hello(string)string'> & {onComplete?: OnApplicationComplete.NoOpOC}>) {
        return $this.appClient.params.call(LifeCycleAppParamsFactory.helloStringString(params))
      },
      /**
       * Makes a call to the LifeCycleApp smart contract using the hello()string ABI method.
       *
       * @param params The params for the smart contract call
       * @returns The call params
       */
      helloString(params: Expand<CallParams<'hello()string'> & {onComplete?: OnApplicationComplete.NoOpOC}> = {args: []}) {
        return $this.appClient.params.call(LifeCycleAppParamsFactory.helloString(params))
      },
    }
  })(this)

  /**
   * Get parameters to define transactions to the current app
   */
  readonly transactions = (($this) => {
    return {
      /**
       * Gets available update methods
       */
      get update() {
        return {
          /**
           * Updates an existing instance of the LifeCycleApp smart contract using a bare call.
           *
           * @param params The params for the bare (non-ABI) call
           * @returns The update result
           */
          bare(params?: Expand<AppClientBareCallParams & AppClientCompilationParams>) {
            return $this.appClient.transactions.bare.update(params)
          },
        }
      },

      /**
       * Makes a clear_state call to an existing instance of the LifeCycleApp smart contract.
       *
       * @param params The params for the bare (non-ABI) call
       * @returns The clearState result
       */
      clearState(params?: Expand<AppClientBareCallParams>) {
        return $this.appClient.transactions.bare.clearState(params)
      },

      /**
       * Makes a call to the LifeCycleApp smart contract using the hello(string)string ABI method.
       *
       * @param params The params for the smart contract call
       * @returns The call transaction
       */
      helloStringString(params: Expand<CallParams<'hello(string)string'> & {onComplete?: OnApplicationComplete.NoOpOC}>) {
        return $this.appClient.transactions.call(LifeCycleAppParamsFactory.helloStringString(params))
      },
      /**
       * Makes a call to the LifeCycleApp smart contract using the hello()string ABI method.
       *
       * @param params The params for the smart contract call
       * @returns The call transaction
       */
      helloString(params: Expand<CallParams<'hello()string'> & {onComplete?: OnApplicationComplete.NoOpOC}> = {args: []}) {
        return $this.appClient.transactions.call(LifeCycleAppParamsFactory.helloString(params))
      },
    }
  })(this)

  /**
   * Send calls to the current app
   */
  readonly send = (($this) => {
    return {
      /**
       * Gets available update methods
       */
      get update() {
        return {
          /**
           * Updates an existing instance of the LifeCycleApp smart contract using a bare call.
           *
           * @param params The params for the bare (non-ABI) call
           * @returns The update result
           */
          bare(params?: Expand<AppClientBareCallParams & AppClientCompilationParams & ExecuteParams>) {
            return $this.appClient.send.bare.update(params)
          },
        }
      },

      /**
       * Makes a clear_state call to an existing instance of the LifeCycleApp smart contract.
       *
       * @param params The params for the bare (non-ABI) call
       * @returns The clearState result
       */
      clearState(params?: Expand<AppClientBareCallParams & ExecuteParams>) {
        return $this.appClient.send.bare.clearState(params)
      },

      /**
       * Makes a call to the LifeCycleApp smart contract using the hello(string)string ABI method.
       *
       * @param params The params for the smart contract call
       * @returns The call result
       */
      async helloStringString(params: Expand<CallParams<'hello(string)string'> & ExecuteParams & {onComplete?: OnApplicationComplete.NoOpOC}>) {
        const result = await $this.appClient.send.call(LifeCycleAppParamsFactory.helloStringString(params))
        return {...result, return: result.return as undefined | MethodReturn<'hello(string)string'>}
      },
      /**
       * Makes a call to the LifeCycleApp smart contract using the hello()string ABI method.
       *
       * @param params The params for the smart contract call
       * @returns The call result
       */
      async helloString(params: Expand<CallParams<'hello()string'> & ExecuteParams & {onComplete?: OnApplicationComplete.NoOpOC}> = {args: []}) {
        const result = await $this.appClient.send.call(LifeCycleAppParamsFactory.helloString(params))
        return {...result, return: result.return as undefined | MethodReturn<'hello()string'>}
      },
    }
  })(this)

  /**
   * Methods to access state for the current LifeCycleApp app
   */
  state = {
    /**
     * Methods to access global state for the current LifeCycleApp app
     */
    global: {
      /**
       * Get all current keyed values from global state
       */
      getAll: async (): Promise<Partial<Expand<GlobalKeysState>>> => {
        const result = await this.appClient.state.global.getAll()
        return {
          greeting: new BinaryStateValue(result.greeting),
          times: result.times,
        }
      },
      /**
       * Get the current value of the greeting key in global state
       */
      greeting: async (): Promise<BinaryState> => { return new BinaryStateValue((await this.appClient.state.global.getValue("greeting")) as Uint8Array | undefined) },
      /**
       * Get the current value of the times key in global state
       */
      times: async (): Promise<bigint | undefined> => { return (await this.appClient.state.global.getValue("times")) as bigint | undefined },
    },
  }

  public newGroup(): LifeCycleAppComposer {
    const client = this
    const composer = client.appClient.newGroup()
    const resultMappers: Array<undefined | ((x: ABIReturn | undefined) => any)> = []
    return {
      /**
       * Add a hello(string)string method call against the LifeCycleApp contract
       */
      helloStringString(params: CallParams<'hello(string)string'> & {onComplete?: OnApplicationComplete.NoOpOC}) {
        composer.addAppCallMethodCall(client.params.helloStringString(params))
        resultMappers.push((v) => client.decodeReturnValue('hello(string)string', v))
        return this
      },
      /**
       * Add a hello()string method call against the LifeCycleApp contract
       */
      helloString(params: CallParams<'hello()string'> & {onComplete?: OnApplicationComplete.NoOpOC}) {
        composer.addAppCallMethodCall(client.params.helloString(params))
        resultMappers.push((v) => client.decodeReturnValue('hello()string', v))
        return this
      },
      /**
       * Add a clear state call to the LifeCycleApp contract
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
    } as unknown as LifeCycleAppComposer
  }
}
export type LifeCycleAppComposer<TReturns extends [...any[]] = []> = {
  /**
   * Calls the hello(string)string ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  helloStringString(params?: CallParams<'hello(string)string'>): LifeCycleAppComposer<[...TReturns, MethodReturn<'hello(string)string'> | undefined]>

  /**
   * Calls the hello()string ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  helloString(params?: CallParams<'hello()string'>): LifeCycleAppComposer<[...TReturns, MethodReturn<'hello()string'> | undefined]>

  /**
   * Makes a clear_state call to an existing instance of the LifeCycleApp smart contract.
   *
   * @param args The arguments for the bare call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  clearState(params?: AppClientBareCallParams): LifeCycleAppComposer<[...TReturns, undefined]>

  /**
   * Adds a transaction to the composer
   *
   * @param txn A transaction to add to the transaction group
   * @param signer The optional signer to use when signing this transaction.
   */
  addTransaction(txn: Transaction, signer?: TransactionSigner): LifeCycleAppComposer<TReturns>
  /**
   * Returns the underlying AtomicTransactionComposer instance
   */
  composer(): AlgoKitComposer
  /**
   * Simulates the transaction group and returns the result
   */
  simulate(options?: SimulateOptions): Promise<LifeCycleAppComposerResults<TReturns> & { simulateResponse: SimulateResponse }>
  /**
   * Executes the transaction group and returns the results
   */
  execute(params?: ExecuteParams): Promise<LifeCycleAppComposerResults<TReturns>>
}
export type LifeCycleAppComposerResults<TReturns extends [...any[]]> = Expand<SendAtomicTransactionComposerResults & {
  returns: TReturns
}>

