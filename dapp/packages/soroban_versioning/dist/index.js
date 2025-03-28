import { Buffer } from "buffer";
import {
  Client as ContractClient,
  Spec as ContractSpec,
} from "@stellar/stellar-sdk/contract";
export * from "@stellar/stellar-sdk";
export * as contract from "@stellar/stellar-sdk/contract";
export * as rpc from "@stellar/stellar-sdk/rpc";
if (typeof window !== "undefined") {
  //@ts-ignore Buffer exists
  window.Buffer = window.Buffer || Buffer;
}
export const Errors = {
  0: { message: "UnexpectedError" },
  1: { message: "InvalidKey" },
  2: { message: "ProjectAlreadyExist" },
  3: { message: "UnregisteredMaintainer" },
  4: { message: "NoHashFound" },
  5: { message: "InvalidDomainError" },
  6: { message: "MaintainerNotDomainOwner" },
  7: { message: "ProposalInputValidation" },
  8: { message: "NoProposalorPageFound" },
  9: { message: "AlreadyVoted" },
  10: { message: "ProposalVotingTime" },
  11: { message: "AlreadyExecuted" },
};
export class Client extends ContractClient {
  options;
  static async deploy(
    /** Constructor/Initialization Args for the contract's `__constructor` method */
    { admin },
    /** Options for initalizing a Client as well as for calling a method, with extras specific to deploying. */
    options,
  ) {
    return ContractClient.deploy({ admin }, options);
  }
  constructor(options) {
    super(
      new ContractSpec([
        "AAAAAAAAAcFDcmVhdGUgYSBwcm9wb3NhbCBvbiB0aGUgREFPIG9mIHRoZSBwcm9qZWN0LgpQcm9wb3NhbCBpbml0aWF0b3JzIGFyZSBhdXRvbWF0aWNhbGx5IHB1dCBpbiB0aGUgYWJzdGFpbiBncm91cC4KIyBBcmd1bWVudHMKKiBgZW52YCAtIFRoZSBlbnZpcm9ubWVudCBvYmplY3QKKiBgcHJvcG9zZXJgIC0gQWRkcmVzcyBvZiB0aGUgcHJvcG9zYWwgY3JlYXRvcgoqIGBwcm9qZWN0X2tleWAgLSBVbmlxdWUgaWRlbnRpZmllciBmb3IgdGhlIHByb2plY3QKKiBgdGl0bGVgIC0gVGl0bGUgb2YgdGhlIHByb3Bvc2FsCiogYGlwZnNgIC0gSVBGUyBjb250ZW50IGlkZW50aWZpZXIgZGVzY3JpYmluZyB0aGUgcHJvcG9zYWwKKiBgdm90aW5nX2VuZHNfYXRgIC0gVU5JWCB0aW1lc3RhbXAgd2hlbiB2b3RpbmcgZW5kcwojIFJldHVybnMKKiBgdTMyYCAtIFRoZSBJRCBvZiB0aGUgY3JlYXRlZCBwcm9wb3NhbAAAAAAAAA9jcmVhdGVfcHJvcG9zYWwAAAAABQAAAAAAAAAIcHJvcG9zZXIAAAATAAAAAAAAAAtwcm9qZWN0X2tleQAAAAAOAAAAAAAAAAV0aXRsZQAAAAAAABAAAAAAAAAABGlwZnMAAAAQAAAAAAAAAA52b3RpbmdfZW5kc19hdAAAAAAABgAAAAEAAAAE",
        "AAAAAAAAAQ5DYXN0IGEgdm90ZSBvbiBhIHByb3Bvc2FsLgpEb3VibGUgdm90ZXMgYXJlIG5vdCBhbGxvd2VkLgojIEFyZ3VtZW50cwoqIGBlbnZgIC0gVGhlIGVudmlyb25tZW50IG9iamVjdAoqIGB2b3RlcmAgLSBBZGRyZXNzIG9mIHRoZSB2b3RlcgoqIGBwcm9qZWN0X2tleWAgLSBVbmlxdWUgaWRlbnRpZmllciBmb3IgdGhlIHByb2plY3QKKiBgcHJvcG9zYWxfaWRgIC0gSUQgb2YgdGhlIHByb3Bvc2FsCiogYHZvdGVgIC0gQXBwcm92ZSwgcmVqZWN0IG9yIGFic3RhaW4gZGVjaXNpb24AAAAAAAR2b3RlAAAABAAAAAAAAAAFdm90ZXIAAAAAAAATAAAAAAAAAAtwcm9qZWN0X2tleQAAAAAOAAAAAAAAAAtwcm9wb3NhbF9pZAAAAAAEAAAAAAAAAAR2b3RlAAAH0AAAAARWb3RlAAAAAA==",
        "AAAAAAAAAAAAAAAHZXhlY3V0ZQAAAAADAAAAAAAAAAptYWludGFpbmVyAAAAAAATAAAAAAAAAAtwcm9qZWN0X2tleQAAAAAOAAAAAAAAAAtwcm9wb3NhbF9pZAAAAAAEAAAAAQAAB9AAAAAOUHJvcG9zYWxTdGF0dXMAAA==",
        "AAAAAAAAARRHZXQgb25lIHBhZ2Ugb2YgcHJvcG9zYWwgb2YgdGhlIERBTy4KQSBwYWdlIGhhcyAwIHRvIE1BWF9QUk9QT1NBTFNfUEVSX1BBR0UgcHJvcG9zYWxzLgojIEFyZ3VtZW50cwoqIGBlbnZgIC0gVGhlIGVudmlyb25tZW50IG9iamVjdAoqIGBwcm9qZWN0X2tleWAgLSBVbmlxdWUgaWRlbnRpZmllciBmb3IgdGhlIHByb2plY3QKKiBgcGFnZWAgLSBQYWdlIG9mIHByb3Bvc2FscwojIFJldHVybnMKKiBgdHlwZXM6OkRhb2AgLSBUaGUgRGFvIG9iamVjdCAodmVjdG9yIG9mIHByb3Bvc2FscykAAAAHZ2V0X2RhbwAAAAACAAAAAAAAAAtwcm9qZWN0X2tleQAAAAAOAAAAAAAAAARwYWdlAAAABAAAAAEAAAfQAAAAA0RhbwA=",
        "AAAAAAAAANdPbmx5IHJldHVybiBhIHNpbmdsZSBwcm9wb3NhbAojIEFyZ3VtZW50cwoqIGBlbnZgIC0gVGhlIGVudmlyb25tZW50IG9iamVjdAoqIGBwcm9qZWN0X2tleWAgLSBVbmlxdWUgaWRlbnRpZmllciBmb3IgdGhlIHByb2plY3QKKiBgcHJvcG9zYWxfaWRgIC0gSUQgb2YgdGhlIHByb3Bvc2FsCiMgUmV0dXJucwoqIGB0eXBlczo6UHJvcG9zYWxgIC0gVGhlIHByb3Bvc2FsIG9iamVjdAAAAAAMZ2V0X3Byb3Bvc2FsAAAAAgAAAAAAAAALcHJvamVjdF9rZXkAAAAADgAAAAAAAAALcHJvcG9zYWxfaWQAAAAABAAAAAEAAAfQAAAACFByb3Bvc2Fs",
        "AAAAAAAAAAAAAAANX19jb25zdHJ1Y3RvcgAAAAAAAAEAAAAAAAAABWFkbWluAAAAAAAAEwAAAAA=",
        "AAAAAAAAAAAAAAAHdXBncmFkZQAAAAABAAAAAAAAAA1uZXdfd2FzbV9oYXNoAAAAAAAD7gAAACAAAAAA",
        "AAAAAAAAAAAAAAAHdmVyc2lvbgAAAAAAAAAAAQAAAAQ=",
        "AAAAAAAAADRSZWdpc3RlciBhIG5ldyBHaXQgcHJvamVjdHMgYW5kIGFzc29jaWF0ZWQgbWV0YWRhdGEuAAAACHJlZ2lzdGVyAAAABgAAAAAAAAAKbWFpbnRhaW5lcgAAAAAAEwAAAAAAAAAEbmFtZQAAABAAAAAAAAAAC21haW50YWluZXJzAAAAA+oAAAATAAAAAAAAAAN1cmwAAAAAEAAAAAAAAAAEaGFzaAAAABAAAAAAAAAAEmRvbWFpbl9jb250cmFjdF9pZAAAAAAAEwAAAAEAAAAO",
        "AAAAAAAAAChDaGFuZ2UgdGhlIGNvbmZpZ3VyYXRpb24gb2YgdGhlIHByb2plY3QuAAAADXVwZGF0ZV9jb25maWcAAAAAAAAFAAAAAAAAAAptYWludGFpbmVyAAAAAAATAAAAAAAAAANrZXkAAAAADgAAAAAAAAALbWFpbnRhaW5lcnMAAAAD6gAAABMAAAAAAAAAA3VybAAAAAAQAAAAAAAAAARoYXNoAAAAEAAAAAA=",
        "AAAAAAAAABhTZXQgdGhlIGxhc3QgY29tbWl0IGhhc2gAAAAGY29tbWl0AAAAAAADAAAAAAAAAAptYWludGFpbmVyAAAAAAATAAAAAAAAAAtwcm9qZWN0X2tleQAAAAAOAAAAAAAAAARoYXNoAAAAEAAAAAA=",
        "AAAAAAAAABhHZXQgdGhlIGxhc3QgY29tbWl0IGhhc2gAAAAKZ2V0X2NvbW1pdAAAAAAAAQAAAAAAAAALcHJvamVjdF9rZXkAAAAADgAAAAEAAAAQ",
        "AAAAAAAAAAAAAAALZ2V0X3Byb2plY3QAAAAAAQAAAAAAAAALcHJvamVjdF9rZXkAAAAADgAAAAEAAAfQAAAAB1Byb2plY3QA",
        "AAAABAAAAAAAAAAAAAAADkNvbnRyYWN0RXJyb3JzAAAAAAAMAAAAAAAAAA9VbmV4cGVjdGVkRXJyb3IAAAAAAAAAAAAAAAAKSW52YWxpZEtleQAAAAAAAQAAAAAAAAATUHJvamVjdEFscmVhZHlFeGlzdAAAAAACAAAAAAAAABZVbnJlZ2lzdGVyZWRNYWludGFpbmVyAAAAAAADAAAAAAAAAAtOb0hhc2hGb3VuZAAAAAAEAAAAAAAAABJJbnZhbGlkRG9tYWluRXJyb3IAAAAAAAUAAAAAAAAAGE1haW50YWluZXJOb3REb21haW5Pd25lcgAAAAYAAAAAAAAAF1Byb3Bvc2FsSW5wdXRWYWxpZGF0aW9uAAAAAAcAAAAAAAAAFU5vUHJvcG9zYWxvclBhZ2VGb3VuZAAAAAAAAAgAAAAAAAAADEFscmVhZHlWb3RlZAAAAAkAAAAAAAAAElByb3Bvc2FsVm90aW5nVGltZQAAAAAACgAAAAAAAAAPQWxyZWFkeUV4ZWN1dGVkAAAAAAs=",
        "AAAAAgAAAAAAAAAAAAAAB0RhdGFLZXkAAAAAAQAAAAAAAAAAAAAABUFkbWluAAAA",
        "AAAAAgAAAAAAAAAAAAAADlByb3Bvc2FsU3RhdHVzAAAAAAAEAAAAAAAAAAAAAAAGQWN0aXZlAAAAAAAAAAAAAAAAAAhBcHByb3ZlZAAAAAAAAAAAAAAACFJlamVjdGVkAAAAAAAAAAAAAAAJQ2FuY2VsbGVkAAAA",
        "AAAAAgAAAAAAAAAAAAAABFZvdGUAAAADAAAAAAAAAAAAAAAHQXBwcm92ZQAAAAAAAAAAAAAAAAZSZWplY3QAAAAAAAAAAAAAAAAAB0Fic3RhaW4A",
        "AAAAAQAAAAAAAAAAAAAACFByb3Bvc2FsAAAACQAAAAAAAAACaWQAAAAAAAQAAAAAAAAABGlwZnMAAAAQAAAAAAAAAANucWcAAAAABAAAAAAAAAAGc3RhdHVzAAAAAAfQAAAADlByb3Bvc2FsU3RhdHVzAAAAAAAAAAAABXRpdGxlAAAAAAAAEAAAAAAAAAAOdm90ZXJzX2Fic3RhaW4AAAAAA+oAAAATAAAAAAAAAA52b3RlcnNfYXBwcm92ZQAAAAAD6gAAABMAAAAAAAAADXZvdGVyc19yZWplY3QAAAAAAAPqAAAAEwAAAAAAAAAOdm90aW5nX2VuZHNfYXQAAAAAAAY=",
        "AAAAAQAAAAAAAAAAAAAAA0RhbwAAAAABAAAAAAAAAAlwcm9wb3NhbHMAAAAAAAPqAAAH0AAAAAhQcm9wb3NhbA==",
        "AAAAAgAAAAAAAAAAAAAAClByb2plY3RLZXkAAAAAAAQAAAABAAAAAAAAAANLZXkAAAAAAQAAAA4AAAABAAAAAAAAAAhMYXN0SGFzaAAAAAEAAAAOAAAAAQAAAAAAAAADRGFvAAAAAAIAAAAOAAAABAAAAAEAAAAAAAAAEURhb1RvdGFsUHJvcG9zYWxzAAAAAAAAAQAAAA4=",
        "AAAAAQAAAAAAAAAAAAAABkNvbmZpZwAAAAAAAgAAAAAAAAAEaGFzaAAAABAAAAAAAAAAA3VybAAAAAAQ",
        "AAAAAQAAAAAAAAAAAAAAB1Byb2plY3QAAAAAAwAAAAAAAAAGY29uZmlnAAAAAAfQAAAABkNvbmZpZwAAAAAAAAAAAAttYWludGFpbmVycwAAAAPqAAAAEwAAAAAAAAAEbmFtZQAAABA=",
      ]),
      options,
    );
    this.options = options;
  }
  fromJSON = {
    create_proposal: this.txFromJSON,
    vote: this.txFromJSON,
    execute: this.txFromJSON,
    get_dao: this.txFromJSON,
    get_proposal: this.txFromJSON,
    upgrade: this.txFromJSON,
    version: this.txFromJSON,
    register: this.txFromJSON,
    update_config: this.txFromJSON,
    commit: this.txFromJSON,
    get_commit: this.txFromJSON,
    get_project: this.txFromJSON,
  };
}
