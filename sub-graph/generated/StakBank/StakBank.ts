// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt,
} from "@graphprotocol/graph-ts";

export class AddedToWhitelist extends ethereum.Event {
  get params(): AddedToWhitelist__Params {
    return new AddedToWhitelist__Params(this);
  }
}

export class AddedToWhitelist__Params {
  _event: AddedToWhitelist;

  constructor(event: AddedToWhitelist) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class MinHeldTokensChanged extends ethereum.Event {
  get params(): MinHeldTokensChanged__Params {
    return new MinHeldTokensChanged__Params(this);
  }
}

export class MinHeldTokensChanged__Params {
  _event: MinHeldTokensChanged;

  constructor(event: MinHeldTokensChanged) {
    this._event = event;
  }

  get amount(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class RemovedFromWhitelist extends ethereum.Event {
  get params(): RemovedFromWhitelist__Params {
    return new RemovedFromWhitelist__Params(this);
  }
}

export class RemovedFromWhitelist__Params {
  _event: RemovedFromWhitelist;

  constructor(event: RemovedFromWhitelist) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class StakingBegins extends ethereum.Event {
  get params(): StakingBegins__Params {
    return new StakingBegins__Params(this);
  }
}

export class StakingBegins__Params {
  _event: StakingBegins;

  constructor(event: StakingBegins) {
    this._event = event;
  }

  get timestamp(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get stakingFunds(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Withdraw extends ethereum.Event {
  get params(): Withdraw__Params {
    return new Withdraw__Params(this);
  }
}

export class Withdraw__Params {
  _event: Withdraw;

  constructor(event: Withdraw) {
    this._event = event;
  }

  get pool(): i32 {
    return this._event.parameters[0].value.toI32();
  }

  get userAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get principal(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get yieldNumber(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get userFundsRemaining(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get stakingFundsRemaining(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }
}

export class StakBank__getUserDepositsResultValue0Struct extends ethereum.Tuple {
  get pool(): i32 {
    return this[0].toI32();
  }

  get amount(): BigInt {
    return this[1].toBigInt();
  }

  get depositTime(): BigInt {
    return this[2].toBigInt();
  }
}

export class StakBank__poolsResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;
  value4: BigInt;
  value5: BigInt;
  value6: BigInt;
  value7: BigInt;
  value8: BigInt;

  constructor(
    value0: BigInt,
    value1: BigInt,
    value2: BigInt,
    value3: BigInt,
    value4: BigInt,
    value5: BigInt,
    value6: BigInt,
    value7: BigInt,
    value8: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
    this.value8 = value8;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromUnsignedBigInt(this.value5));
    map.set("value6", ethereum.Value.fromUnsignedBigInt(this.value6));
    map.set("value7", ethereum.Value.fromUnsignedBigInt(this.value7));
    map.set("value8", ethereum.Value.fromUnsignedBigInt(this.value8));
    return map;
  }
}

export class StakBank extends ethereum.SmartContract {
  static bind(address: Address): StakBank {
    return new StakBank("StakBank", address);
  }

  active(): boolean {
    let result = super.call("active", "active():(bool)", []);

    return result[0].toBoolean();
  }

  try_active(): ethereum.CallResult<boolean> {
    let result = super.tryCall("active", "active():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  cutoffTime(): BigInt {
    let result = super.call("cutoffTime", "cutoffTime():(uint256)", []);

    return result[0].toBigInt();
  }

  try_cutoffTime(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("cutoffTime", "cutoffTime():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getNDays(daysStaked: BigInt, _pool: i32): BigInt {
    let result = super.call("getNDays", "getNDays(uint256,uint8):(uint64)", [
      ethereum.Value.fromUnsignedBigInt(daysStaked),
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_pool)),
    ]);

    return result[0].toBigInt();
  }

  try_getNDays(daysStaked: BigInt, _pool: i32): ethereum.CallResult<BigInt> {
    let result = super.tryCall("getNDays", "getNDays(uint256,uint8):(uint64)", [
      ethereum.Value.fromUnsignedBigInt(daysStaked),
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_pool)),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getStakingFunds(_pool: i32): BigInt {
    let result = super.call(
      "getStakingFunds",
      "getStakingFunds(uint8):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_pool))]
    );

    return result[0].toBigInt();
  }

  try_getStakingFunds(_pool: i32): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getStakingFunds",
      "getStakingFunds(uint8):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_pool))]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getUserDepositTotal(userAddress: Address, _pool: i32): BigInt {
    let result = super.call(
      "getUserDepositTotal",
      "getUserDepositTotal(address,uint8):(uint256)",
      [
        ethereum.Value.fromAddress(userAddress),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_pool)),
      ]
    );

    return result[0].toBigInt();
  }

  try_getUserDepositTotal(
    userAddress: Address,
    _pool: i32
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getUserDepositTotal",
      "getUserDepositTotal(address,uint8):(uint256)",
      [
        ethereum.Value.fromAddress(userAddress),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_pool)),
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getUserDeposits(
    userAddress: Address
  ): Array<StakBank__getUserDepositsResultValue0Struct> {
    let result = super.call(
      "getUserDeposits",
      "getUserDeposits(address):((uint8,uint256,uint256)[])",
      [ethereum.Value.fromAddress(userAddress)]
    );

    return result[0].toTupleArray<
      StakBank__getUserDepositsResultValue0Struct
    >();
  }

  try_getUserDeposits(
    userAddress: Address
  ): ethereum.CallResult<Array<StakBank__getUserDepositsResultValue0Struct>> {
    let result = super.tryCall(
      "getUserDeposits",
      "getUserDeposits(address):((uint8,uint256,uint256)[])",
      [ethereum.Value.fromAddress(userAddress)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTupleArray<StakBank__getUserDepositsResultValue0Struct>()
    );
  }

  getUserFunds(_pool: i32): BigInt {
    let result = super.call("getUserFunds", "getUserFunds(uint8):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_pool)),
    ]);

    return result[0].toBigInt();
  }

  try_getUserFunds(_pool: i32): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getUserFunds",
      "getUserFunds(uint8):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_pool))]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getUserYield(userAddress: Address, _pool: i32): BigInt {
    let result = super.call(
      "getUserYield",
      "getUserYield(address,uint8):(uint256)",
      [
        ethereum.Value.fromAddress(userAddress),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_pool)),
      ]
    );

    return result[0].toBigInt();
  }

  try_getUserYield(
    userAddress: Address,
    _pool: i32
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getUserYield",
      "getUserYield(address,uint8):(uint256)",
      [
        ethereum.Value.fromAddress(userAddress),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_pool)),
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getYieldMultiplier(daysStaked: BigInt, _pool: i32): BigInt {
    let result = super.call(
      "getYieldMultiplier",
      "getYieldMultiplier(uint256,uint8):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(daysStaked),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_pool)),
      ]
    );

    return result[0].toBigInt();
  }

  try_getYieldMultiplier(
    daysStaked: BigInt,
    _pool: i32
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getYieldMultiplier",
      "getYieldMultiplier(uint256,uint8):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(daysStaked),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_pool)),
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  isWhitelisted(_address: Address): boolean {
    let result = super.call("isWhitelisted", "isWhitelisted(address):(bool)", [
      ethereum.Value.fromAddress(_address),
    ]);

    return result[0].toBoolean();
  }

  try_isWhitelisted(_address: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isWhitelisted",
      "isWhitelisted(address):(bool)",
      [ethereum.Value.fromAddress(_address)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  minHeldTokens(): BigInt {
    let result = super.call("minHeldTokens", "minHeldTokens():(uint256)", []);

    return result[0].toBigInt();
  }

  try_minHeldTokens(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "minHeldTokens",
      "minHeldTokens():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  minStakingAmount(): BigInt {
    let result = super.call(
      "minStakingAmount",
      "minStakingAmount():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_minStakingAmount(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "minStakingAmount",
      "minStakingAmount():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  pools(param0: i32): StakBank__poolsResult {
    let result = super.call(
      "pools",
      "pools(uint8):(uint256,uint64,uint64,uint64,uint256,uint256,uint256,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(param0))]
    );

    return new StakBank__poolsResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBigInt(),
      result[5].toBigInt(),
      result[6].toBigInt(),
      result[7].toBigInt(),
      result[8].toBigInt()
    );
  }

  try_pools(param0: i32): ethereum.CallResult<StakBank__poolsResult> {
    let result = super.tryCall(
      "pools",
      "pools(uint8):(uint256,uint64,uint64,uint64,uint256,uint256,uint256,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(param0))]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new StakBank__poolsResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toBigInt(),
        value[5].toBigInt(),
        value[6].toBigInt(),
        value[7].toBigInt(),
        value[8].toBigInt()
      )
    );
  }

  startTime(): BigInt {
    let result = super.call("startTime", "startTime():(uint256)", []);

    return result[0].toBigInt();
  }

  try_startTime(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("startTime", "startTime():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  totalRewardSupply(): BigInt {
    let result = super.call(
      "totalRewardSupply",
      "totalRewardSupply():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_totalRewardSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "totalRewardSupply",
      "totalRewardSupply():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get StakContract(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AddToWhitelistCall extends ethereum.Call {
  get inputs(): AddToWhitelistCall__Inputs {
    return new AddToWhitelistCall__Inputs(this);
  }

  get outputs(): AddToWhitelistCall__Outputs {
    return new AddToWhitelistCall__Outputs(this);
  }
}

export class AddToWhitelistCall__Inputs {
  _call: AddToWhitelistCall;

  constructor(call: AddToWhitelistCall) {
    this._call = call;
  }

  get _address(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class AddToWhitelistCall__Outputs {
  _call: AddToWhitelistCall;

  constructor(call: AddToWhitelistCall) {
    this._call = call;
  }
}

export class AddToWhitelistBatchCall extends ethereum.Call {
  get inputs(): AddToWhitelistBatchCall__Inputs {
    return new AddToWhitelistBatchCall__Inputs(this);
  }

  get outputs(): AddToWhitelistBatchCall__Outputs {
    return new AddToWhitelistBatchCall__Outputs(this);
  }
}

export class AddToWhitelistBatchCall__Inputs {
  _call: AddToWhitelistBatchCall;

  constructor(call: AddToWhitelistBatchCall) {
    this._call = call;
  }

  get _address(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }
}

export class AddToWhitelistBatchCall__Outputs {
  _call: AddToWhitelistBatchCall;

  constructor(call: AddToWhitelistBatchCall) {
    this._call = call;
  }
}

export class BeginStakingCall extends ethereum.Call {
  get inputs(): BeginStakingCall__Inputs {
    return new BeginStakingCall__Inputs(this);
  }

  get outputs(): BeginStakingCall__Outputs {
    return new BeginStakingCall__Outputs(this);
  }
}

export class BeginStakingCall__Inputs {
  _call: BeginStakingCall;

  constructor(call: BeginStakingCall) {
    this._call = call;
  }
}

export class BeginStakingCall__Outputs {
  _call: BeginStakingCall;

  constructor(call: BeginStakingCall) {
    this._call = call;
  }
}

export class DepositCall extends ethereum.Call {
  get inputs(): DepositCall__Inputs {
    return new DepositCall__Inputs(this);
  }

  get outputs(): DepositCall__Outputs {
    return new DepositCall__Outputs(this);
  }
}

export class DepositCall__Inputs {
  _call: DepositCall;

  constructor(call: DepositCall) {
    this._call = call;
  }

  get depositAmount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _pool(): i32 {
    return this._call.inputValues[1].value.toI32();
  }
}

export class DepositCall__Outputs {
  _call: DepositCall;

  constructor(call: DepositCall) {
    this._call = call;
  }
}

export class RemovFromWhitelistCall extends ethereum.Call {
  get inputs(): RemovFromWhitelistCall__Inputs {
    return new RemovFromWhitelistCall__Inputs(this);
  }

  get outputs(): RemovFromWhitelistCall__Outputs {
    return new RemovFromWhitelistCall__Outputs(this);
  }
}

export class RemovFromWhitelistCall__Inputs {
  _call: RemovFromWhitelistCall;

  constructor(call: RemovFromWhitelistCall) {
    this._call = call;
  }

  get _address(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class RemovFromWhitelistCall__Outputs {
  _call: RemovFromWhitelistCall;

  constructor(call: RemovFromWhitelistCall) {
    this._call = call;
  }
}

export class RemovFromWhitelistBatchCall extends ethereum.Call {
  get inputs(): RemovFromWhitelistBatchCall__Inputs {
    return new RemovFromWhitelistBatchCall__Inputs(this);
  }

  get outputs(): RemovFromWhitelistBatchCall__Outputs {
    return new RemovFromWhitelistBatchCall__Outputs(this);
  }
}

export class RemovFromWhitelistBatchCall__Inputs {
  _call: RemovFromWhitelistBatchCall;

  constructor(call: RemovFromWhitelistBatchCall) {
    this._call = call;
  }

  get _address(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }
}

export class RemovFromWhitelistBatchCall__Outputs {
  _call: RemovFromWhitelistBatchCall;

  constructor(call: RemovFromWhitelistBatchCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetHeldTokensCall extends ethereum.Call {
  get inputs(): SetHeldTokensCall__Inputs {
    return new SetHeldTokensCall__Inputs(this);
  }

  get outputs(): SetHeldTokensCall__Outputs {
    return new SetHeldTokensCall__Outputs(this);
  }
}

export class SetHeldTokensCall__Inputs {
  _call: SetHeldTokensCall;

  constructor(call: SetHeldTokensCall) {
    this._call = call;
  }

  get _amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetHeldTokensCall__Outputs {
  _call: SetHeldTokensCall;

  constructor(call: SetHeldTokensCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class WithdrawCall extends ethereum.Call {
  get inputs(): WithdrawCall__Inputs {
    return new WithdrawCall__Inputs(this);
  }

  get outputs(): WithdrawCall__Outputs {
    return new WithdrawCall__Outputs(this);
  }
}

export class WithdrawCall__Inputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }

  get _pool(): i32 {
    return this._call.inputValues[0].value.toI32();
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}
