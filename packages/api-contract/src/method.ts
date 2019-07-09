// Copyright 2017-2019 @polkadot/api-contract authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Compact, createClass } from '@polkadot/types';
import { CodecArg, Constructor } from '@polkadot/types/types';
import { ContractABIFn, ContractABIFn$Arg, ContractABIMethod, ContractABIMethodBase, ContractABITypes } from './types';

import { assert, isString, isUndefined, stringCamelCase } from '@polkadot/util';

export function typeToString (type: ContractABITypes): string {
  if (isString(type)) {
    return type;
  } else if (Array.isArray(type)) {
    return `(${type.map((type) => typeToString(type)).join(',')})`;
  } else if (type['Option<T>']) {
    return `Option<${typeToString(type['Option<T>'].T)}>`;
  } else if (type['Result<T,E>']) {
    return `()`; // Result is not supported, but only applicable for returns
  } else if (type['Vec<T>']) {
    return `Vec<${typeToString(type['Vec<T>'].T)}>`;
  } else if (type['[T;n]']) {
    return `[${typeToString(type['[T;n]'].T)};${type['[T;n]'].n}]`;
  }

  throw new Error(`Unknown type specified ${JSON.stringify(type)}`);
}

export function createArgClass (args: Array<ContractABIFn$Arg>, baseDef: { [index: string]: string }): Constructor {
  return createClass(
    JSON.stringify(
      args.reduce((base: { [index: string]: string }, { name, type }) => {
        base[name] = type;

        return base;
      }, baseDef)
    )
  );
}

export function createMethod (name: string, method: Partial<ContractABIMethod> & ContractABIMethodBase): ContractABIFn {
  const args: Array<ContractABIFn$Arg> = method.args.map(({ name, type }) => ({
    name: stringCamelCase(name),
    type: typeToString(type)
  }));
  const Clazz = createArgClass(args, isUndefined(method.selector) ? {} : { __selector: 'u32' });
  const baseStruct: { [index: string]: any } = { __selector: method.selector };
  const encoder = (...params: Array<CodecArg>): Uint8Array => {
    assert(params.length === args.length, `Expected ${args.length} arguments to contract ${name}, found ${params.length}`);

    const u8a = new Clazz(
      args.reduce((mapped, { name }, index) => {
        mapped[name] = params[index];

        return mapped;
      }, { ...baseStruct })
    ).toU8a();

    return Compact.addLengthPrefix(u8a);
  };

  const fn = (encoder as ContractABIFn);

  fn.args = args;
  fn.isConstant = !(method.mutates || false);
  fn.type = method.return_type ? typeToString(method.return_type) : null;

  return fn;
}
