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

export class CECEngine extends Contract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  );
  clone(): CECEngine;
  methods: {
    MAX_CYCLE_SIZE(): TransactionObject<string>;

    MAX_EVENT_SCHEDULE_SIZE(): TransactionObject<string>;

    ONE_POINT_ZERO(): TransactionObject<string>;

    PRECISION(): TransactionObject<string>;

    adjustEndOfMonthConvention(
      eomc: number | string,
      startTime: number | string,
      cycle: {
        i: number | string;
        p: number | string;
        s: number | string;
        isSet: boolean;
      }
    ): TransactionObject<string>;

    computeCyclicScheduleSegment(
      arg0: {
        contractType: number | string;
        calendar: number | string;
        contractRole: number | string;
        dayCountConvention: number | string;
        businessDayConvention: number | string;
        endOfMonthConvention: number | string;
        creditEventTypeCovered: number | string;
        feeBasis: number | string;
        statusDate: number | string;
        maturityDate: number | string;
        notionalPrincipal: number | string;
        feeRate: number | string;
        coverageOfCreditEnhancement: number | string;
        contractReference_1: {
          object: string | number[];
          object2: string | number[];
          _type: number | string;
          role: number | string;
        };
        contractReference_2: {
          object: string | number[];
          object2: string | number[];
          _type: number | string;
          role: number | string;
        };
      },
      arg1: number | string,
      arg2: number | string,
      arg3: number | string
    ): TransactionObject<string[]>;

    computeEventTimeForEvent(
      _event: string | number[],
      bdc: number | string,
      calendar: number | string,
      maturityDate: number | string
    ): TransactionObject<string>;

    computeInitialState(terms: {
      contractType: number | string;
      calendar: number | string;
      contractRole: number | string;
      dayCountConvention: number | string;
      businessDayConvention: number | string;
      endOfMonthConvention: number | string;
      creditEventTypeCovered: number | string;
      feeBasis: number | string;
      statusDate: number | string;
      maturityDate: number | string;
      notionalPrincipal: number | string;
      feeRate: number | string;
      coverageOfCreditEnhancement: number | string;
      contractReference_1: {
        object: string | number[];
        object2: string | number[];
        _type: number | string;
        role: number | string;
      };
      contractReference_2: {
        object: string | number[];
        object2: string | number[];
        _type: number | string;
        role: number | string;
      };
    }): TransactionObject<{
      contractPerformance: string;
      statusDate: string;
      maturityDate: string;
      exerciseDate: string;
      terminationDate: string;
      feeAccrued: string;
      exerciseAmount: string;
    }>;

    computeNextCyclicEvent(
      arg0: {
        contractType: number | string;
        calendar: number | string;
        contractRole: number | string;
        dayCountConvention: number | string;
        businessDayConvention: number | string;
        endOfMonthConvention: number | string;
        creditEventTypeCovered: number | string;
        feeBasis: number | string;
        statusDate: number | string;
        maturityDate: number | string;
        notionalPrincipal: number | string;
        feeRate: number | string;
        coverageOfCreditEnhancement: number | string;
        contractReference_1: {
          object: string | number[];
          object2: string | number[];
          _type: number | string;
          role: number | string;
        };
        contractReference_2: {
          object: string | number[];
          object2: string | number[];
          _type: number | string;
          role: number | string;
        };
      },
      arg1: number | string,
      arg2: number | string
    ): TransactionObject<string>;

    computeNextNonCyclicEvent(
      terms: {
        contractType: number | string;
        calendar: number | string;
        contractRole: number | string;
        dayCountConvention: number | string;
        businessDayConvention: number | string;
        endOfMonthConvention: number | string;
        creditEventTypeCovered: number | string;
        feeBasis: number | string;
        statusDate: number | string;
        maturityDate: number | string;
        notionalPrincipal: number | string;
        feeRate: number | string;
        coverageOfCreditEnhancement: number | string;
        contractReference_1: {
          object: string | number[];
          object2: string | number[];
          _type: number | string;
          role: number | string;
        };
        contractReference_2: {
          object: string | number[];
          object2: string | number[];
          _type: number | string;
          role: number | string;
        };
      },
      lastNonCyclicEvent: string | number[]
    ): TransactionObject<string>;

    computeNonCyclicScheduleSegment(
      terms: {
        contractType: number | string;
        calendar: number | string;
        contractRole: number | string;
        dayCountConvention: number | string;
        businessDayConvention: number | string;
        endOfMonthConvention: number | string;
        creditEventTypeCovered: number | string;
        feeBasis: number | string;
        statusDate: number | string;
        maturityDate: number | string;
        notionalPrincipal: number | string;
        feeRate: number | string;
        coverageOfCreditEnhancement: number | string;
        contractReference_1: {
          object: string | number[];
          object2: string | number[];
          _type: number | string;
          role: number | string;
        };
        contractReference_2: {
          object: string | number[];
          object2: string | number[];
          _type: number | string;
          role: number | string;
        };
      },
      segmentStart: number | string,
      segmentEnd: number | string
    ): TransactionObject<string[]>;

    computePayoffForEvent(
      terms: {
        contractType: number | string;
        calendar: number | string;
        contractRole: number | string;
        dayCountConvention: number | string;
        businessDayConvention: number | string;
        endOfMonthConvention: number | string;
        creditEventTypeCovered: number | string;
        feeBasis: number | string;
        statusDate: number | string;
        maturityDate: number | string;
        notionalPrincipal: number | string;
        feeRate: number | string;
        coverageOfCreditEnhancement: number | string;
        contractReference_1: {
          object: string | number[];
          object2: string | number[];
          _type: number | string;
          role: number | string;
        };
        contractReference_2: {
          object: string | number[];
          object2: string | number[];
          _type: number | string;
          role: number | string;
        };
      },
      state: {
        contractPerformance: number | string;
        statusDate: number | string;
        maturityDate: number | string;
        exerciseDate: number | string;
        terminationDate: number | string;
        feeAccrued: number | string;
        exerciseAmount: number | string;
      },
      _event: string | number[],
      externalData: string | number[]
    ): TransactionObject<string>;

    computeStateForEvent(
      terms: {
        contractType: number | string;
        calendar: number | string;
        contractRole: number | string;
        dayCountConvention: number | string;
        businessDayConvention: number | string;
        endOfMonthConvention: number | string;
        creditEventTypeCovered: number | string;
        feeBasis: number | string;
        statusDate: number | string;
        maturityDate: number | string;
        notionalPrincipal: number | string;
        feeRate: number | string;
        coverageOfCreditEnhancement: number | string;
        contractReference_1: {
          object: string | number[];
          object2: string | number[];
          _type: number | string;
          role: number | string;
        };
        contractReference_2: {
          object: string | number[];
          object2: string | number[];
          _type: number | string;
          role: number | string;
        };
      },
      state: {
        contractPerformance: number | string;
        statusDate: number | string;
        maturityDate: number | string;
        exerciseDate: number | string;
        terminationDate: number | string;
        feeAccrued: number | string;
        exerciseAmount: number | string;
      },
      _event: string | number[],
      externalData: string | number[]
    ): TransactionObject<{
      contractPerformance: string;
      statusDate: string;
      maturityDate: string;
      exerciseDate: string;
      terminationDate: string;
      feeAccrued: string;
      exerciseAmount: string;
    }>;

    contractType(): TransactionObject<string>;

    decodeEvent(
      _event: string | number[]
    ): TransactionObject<{
      0: string;
      1: string;
    }>;

    encodeEvent(
      eventType: number | string,
      scheduleTime: number | string
    ): TransactionObject<string>;

    getEpochOffset(eventType: number | string): TransactionObject<string>;

    isEventScheduled(
      arg0: string | number[],
      arg1: {
        contractType: number | string;
        calendar: number | string;
        contractRole: number | string;
        dayCountConvention: number | string;
        businessDayConvention: number | string;
        endOfMonthConvention: number | string;
        creditEventTypeCovered: number | string;
        feeBasis: number | string;
        statusDate: number | string;
        maturityDate: number | string;
        notionalPrincipal: number | string;
        feeRate: number | string;
        coverageOfCreditEnhancement: number | string;
        contractReference_1: {
          object: string | number[];
          object2: string | number[];
          _type: number | string;
          role: number | string;
        };
        contractReference_2: {
          object: string | number[];
          object2: string | number[];
          _type: number | string;
          role: number | string;
        };
      },
      arg2: {
        contractPerformance: number | string;
        statusDate: number | string;
        maturityDate: number | string;
        exerciseDate: number | string;
        terminationDate: number | string;
        feeAccrued: number | string;
        exerciseAmount: number | string;
      },
      arg3: { exerciseAmount: number | string; isSet: boolean }
    ): TransactionObject<boolean>;

    shiftCalcTime(
      timestamp: number | string,
      convention: number | string,
      calendar: number | string,
      maturityDate: number | string
    ): TransactionObject<string>;

    shiftEventTime(
      timestamp: number | string,
      convention: number | string,
      calendar: number | string,
      maturityDate: number | string
    ): TransactionObject<string>;
  };
  events: {
    allEvents: (
      options?: EventOptions,
      cb?: Callback<EventLog>
    ) => EventEmitter;
  };
}
