/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import BN from "bn.js";
import { Contract, ContractOptions } from "web3-eth-contract";
import { EventLog } from "web3-core";
import { EventEmitter } from "events";
import { ContractEvent, Callback, TransactionObject, BlockType } from "./types";

interface EventOptions {
  filter?: object;
  fromBlock?: BlockType;
  topics?: string[];
}

export class ISTKRegistry extends Contract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  );
  clone(): ISTKRegistry;
  methods: {
    getActor(assetId: string | number[]): TransactionObject<string>;

    getAddressValueForTermsAttribute(
      assetId: string | number[],
      attribute: string | number[]
    ): TransactionObject<string>;

    getBytes32ValueForTermsAttribute(
      assetId: string | number[],
      attribute: string | number[]
    ): TransactionObject<string>;

    getContractReferenceValueForTermsAttribute(
      assetId: string | number[],
      attribute: string | number[]
    ): TransactionObject<{
      object: string;
      object2: string;
      _type: string;
      role: string;
    }>;

    getCycleValueForTermsAttribute(
      assetId: string | number[],
      attribute: string | number[]
    ): TransactionObject<{ i: string; p: string; s: string; isSet: boolean }>;

    getEngine(assetId: string | number[]): TransactionObject<string>;

    getEnumValueForStateAttribute(
      assetId: string | number[],
      attribute: string | number[]
    ): TransactionObject<string>;

    getEnumValueForTermsAttribute(
      assetId: string | number[],
      attribute: string | number[]
    ): TransactionObject<string>;

    getEventAtIndex(
      assetId: string | number[],
      index: number | string
    ): TransactionObject<string>;

    getExtension(assetId: string | number[]): TransactionObject<string>;

    getFinalizedState(
      assetId: string | number[]
    ): TransactionObject<{
      contractPerformance: string;
      statusDate: string;
      nonPerformingDate: string;
      maturityDate: string;
      exerciseDate: string;
      terminationDate: string;
      lastDividendFixingDate: string;
      notionalPrincipal: string;
      exerciseAmount: string;
      exerciseQuantity: string;
      quantity: string;
      couponAmountFixed: string;
      marginFactor: string;
      adjustmentFactor: string;
      dividendPaymentAmount: string;
      splitRatio: string;
    }>;

    getIntValueForStateAttribute(
      assetId: string | number[],
      attribute: string | number[]
    ): TransactionObject<string>;

    getIntValueForTermsAttribute(
      assetId: string | number[],
      attribute: string | number[]
    ): TransactionObject<string>;

    getNextScheduleIndex(assetId: string | number[]): TransactionObject<string>;

    getNextScheduledEvent(
      assetId: string | number[]
    ): TransactionObject<string>;

    getNextUnderlyingEvent(
      assetId: string | number[]
    ): TransactionObject<string>;

    getOwnership(
      assetId: string | number[]
    ): TransactionObject<{
      creatorObligor: string;
      creatorBeneficiary: string;
      counterpartyObligor: string;
      counterpartyBeneficiary: string;
    }>;

    getPendingEvent(assetId: string | number[]): TransactionObject<string>;

    getPeriodValueForTermsAttribute(
      assetId: string | number[],
      attribute: string | number[]
    ): TransactionObject<{ i: string; p: string; isSet: boolean }>;

    getSchedule(assetId: string | number[]): TransactionObject<string[]>;

    getScheduleLength(assetId: string | number[]): TransactionObject<string>;

    getState(
      assetId: string | number[]
    ): TransactionObject<{
      contractPerformance: string;
      statusDate: string;
      nonPerformingDate: string;
      maturityDate: string;
      exerciseDate: string;
      terminationDate: string;
      lastDividendFixingDate: string;
      notionalPrincipal: string;
      exerciseAmount: string;
      exerciseQuantity: string;
      quantity: string;
      couponAmountFixed: string;
      marginFactor: string;
      adjustmentFactor: string;
      dividendPaymentAmount: string;
      splitRatio: string;
    }>;

    getTerms(
      assetId: string | number[]
    ): TransactionObject<{
      contractType: string;
      calendar: string;
      contractRole: string;
      dayCountConvention: string;
      businessDayConvention: string;
      endOfMonthConvention: string;
      redeemableByIssuer: string;
      currency: string;
      settlementCurrency: string;
      statusDate: string;
      issueDate: string;
      purchaseDate: string;
      cycleAnchorDateOfDividend: string;
      nominalPrice: string;
      notionalPrincipal: string;
      issuePrice: string;
      quantity: string;
      priceAtPurchaseDate: string;
      redemptionPrice: string;
      priceAtTerminationDate: string;
      dividendRecordPeriod: { i: string; p: string; isSet: boolean };
      dividendPaymentPeriod: { i: string; p: string; isSet: boolean };
      splitSettlementPeriod: { i: string; p: string; isSet: boolean };
      redemptionRecordPeriod: { i: string; p: string; isSet: boolean };
      redemptionPaymentPeriod: { i: string; p: string; isSet: boolean };
      cycleOfDividend: { i: string; p: string; s: string; isSet: boolean };
    }>;

    getUIntValueForTermsAttribute(
      assetId: string | number[],
      attribute: string | number[]
    ): TransactionObject<string>;

    getUintValueForStateAttribute(
      assetId: string | number[],
      attribute: string | number[]
    ): TransactionObject<string>;

    grantAccess(
      assetId: string | number[],
      methodSignature: string | number[],
      account: string
    ): TransactionObject<void>;

    hasAccess(
      assetId: string | number[],
      methodSignature: string | number[],
      account: string
    ): TransactionObject<boolean>;

    hasRootAccess(
      assetId: string | number[],
      account: string
    ): TransactionObject<boolean>;

    isEventSettled(
      assetId: string | number[],
      _event: string | number[]
    ): TransactionObject<{
      0: boolean;
      1: string;
    }>;

    isRegistered(assetId: string | number[]): TransactionObject<boolean>;

    markEventAsSettled(
      assetId: string | number[],
      _event: string | number[],
      _payoff: number | string
    ): TransactionObject<void>;

    popNextScheduledEvent(
      assetId: string | number[]
    ): TransactionObject<string>;

    popPendingEvent(assetId: string | number[]): TransactionObject<string>;

    pushPendingEvent(
      assetId: string | number[],
      pendingEvent: string | number[]
    ): TransactionObject<void>;

    registerAsset(
      assetId: string | number[],
      terms: {
        contractType: number | string;
        calendar: number | string;
        contractRole: number | string;
        dayCountConvention: number | string;
        businessDayConvention: number | string;
        endOfMonthConvention: number | string;
        redeemableByIssuer: number | string;
        currency: string;
        settlementCurrency: string;
        statusDate: number | string;
        issueDate: number | string;
        purchaseDate: number | string;
        cycleAnchorDateOfDividend: number | string;
        nominalPrice: number | string;
        notionalPrincipal: number | string;
        issuePrice: number | string;
        quantity: number | string;
        priceAtPurchaseDate: number | string;
        redemptionPrice: number | string;
        priceAtTerminationDate: number | string;
        dividendRecordPeriod: {
          i: number | string;
          p: number | string;
          isSet: boolean;
        };
        dividendPaymentPeriod: {
          i: number | string;
          p: number | string;
          isSet: boolean;
        };
        splitSettlementPeriod: {
          i: number | string;
          p: number | string;
          isSet: boolean;
        };
        redemptionRecordPeriod: {
          i: number | string;
          p: number | string;
          isSet: boolean;
        };
        redemptionPaymentPeriod: {
          i: number | string;
          p: number | string;
          isSet: boolean;
        };
        cycleOfDividend: {
          i: number | string;
          p: number | string;
          s: number | string;
          isSet: boolean;
        };
      },
      state: {
        contractPerformance: number | string;
        statusDate: number | string;
        nonPerformingDate: number | string;
        maturityDate: number | string;
        exerciseDate: number | string;
        terminationDate: number | string;
        lastDividendFixingDate: number | string;
        notionalPrincipal: number | string;
        exerciseAmount: number | string;
        exerciseQuantity: number | string;
        quantity: number | string;
        couponAmountFixed: number | string;
        marginFactor: number | string;
        adjustmentFactor: number | string;
        dividendPaymentAmount: number | string;
        splitRatio: number | string;
      },
      schedule: (string | number[])[],
      ownership: {
        creatorObligor: string;
        creatorBeneficiary: string;
        counterpartyObligor: string;
        counterpartyBeneficiary: string;
      },
      engine: string,
      actor: string,
      admin: string,
      extension: string
    ): TransactionObject<void>;

    revokeAccess(
      assetId: string | number[],
      methodSignature: string | number[],
      account: string
    ): TransactionObject<void>;

    setActor(
      assetId: string | number[],
      actor: string
    ): TransactionObject<void>;

    setCounterpartyBeneficiary(
      assetId: string | number[],
      newCounterpartyBeneficiary: string
    ): TransactionObject<void>;

    setCounterpartyObligor(
      assetId: string | number[],
      newCounterpartyObligor: string
    ): TransactionObject<void>;

    setCreatorBeneficiary(
      assetId: string | number[],
      newCreatorBeneficiary: string
    ): TransactionObject<void>;

    setCreatorObligor(
      assetId: string | number[],
      newCreatorObligor: string
    ): TransactionObject<void>;

    setEngine(
      assetId: string | number[],
      engine: string
    ): TransactionObject<void>;

    setExtension(
      assetId: string | number[],
      extension: string
    ): TransactionObject<void>;

    setFinalizedState(
      assetId: string | number[],
      terms: {
        contractPerformance: number | string;
        statusDate: number | string;
        nonPerformingDate: number | string;
        maturityDate: number | string;
        exerciseDate: number | string;
        terminationDate: number | string;
        lastDividendFixingDate: number | string;
        notionalPrincipal: number | string;
        exerciseAmount: number | string;
        exerciseQuantity: number | string;
        quantity: number | string;
        couponAmountFixed: number | string;
        marginFactor: number | string;
        adjustmentFactor: number | string;
        dividendPaymentAmount: number | string;
        splitRatio: number | string;
      }
    ): TransactionObject<void>;

    setState(
      assetId: string | number[],
      terms: {
        contractPerformance: number | string;
        statusDate: number | string;
        nonPerformingDate: number | string;
        maturityDate: number | string;
        exerciseDate: number | string;
        terminationDate: number | string;
        lastDividendFixingDate: number | string;
        notionalPrincipal: number | string;
        exerciseAmount: number | string;
        exerciseQuantity: number | string;
        quantity: number | string;
        couponAmountFixed: number | string;
        marginFactor: number | string;
        adjustmentFactor: number | string;
        dividendPaymentAmount: number | string;
        splitRatio: number | string;
      }
    ): TransactionObject<void>;

    setTerms(
      assetId: string | number[],
      terms: {
        contractType: number | string;
        calendar: number | string;
        contractRole: number | string;
        dayCountConvention: number | string;
        businessDayConvention: number | string;
        endOfMonthConvention: number | string;
        redeemableByIssuer: number | string;
        currency: string;
        settlementCurrency: string;
        statusDate: number | string;
        issueDate: number | string;
        purchaseDate: number | string;
        cycleAnchorDateOfDividend: number | string;
        nominalPrice: number | string;
        notionalPrincipal: number | string;
        issuePrice: number | string;
        quantity: number | string;
        priceAtPurchaseDate: number | string;
        redemptionPrice: number | string;
        priceAtTerminationDate: number | string;
        dividendRecordPeriod: {
          i: number | string;
          p: number | string;
          isSet: boolean;
        };
        dividendPaymentPeriod: {
          i: number | string;
          p: number | string;
          isSet: boolean;
        };
        splitSettlementPeriod: {
          i: number | string;
          p: number | string;
          isSet: boolean;
        };
        redemptionRecordPeriod: {
          i: number | string;
          p: number | string;
          isSet: boolean;
        };
        redemptionPaymentPeriod: {
          i: number | string;
          p: number | string;
          isSet: boolean;
        };
        cycleOfDividend: {
          i: number | string;
          p: number | string;
          s: number | string;
          isSet: boolean;
        };
      }
    ): TransactionObject<void>;
  };
  events: {
    allEvents: (
      options?: EventOptions,
      cb?: Callback<EventLog>
    ) => EventEmitter;
  };
}
