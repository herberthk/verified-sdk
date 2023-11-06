"use strict";
// SPDX-License-Identifier: BUSL-1.1
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../index");
const MarginIssueManager_json_1 = require("../../../abi/assetmanager/balancer/MarginIssueManager.json");
var FUNCTIONS;
(function (FUNCTIONS) {
    FUNCTIONS["ISSUEPRODUCT"] = "issueProduct";
    FUNCTIONS["CLOSE"] = "close";
    FUNCTIONS["OFFERCOLLATERAL"] = "offerCollateral";
    FUNCTIONS["SENDCOLLATERAL"] = "sendCollateral";
    FUNCTIONS["ONMATCH"] = "onMatch";
    FUNCTIONS["ONTRADE"] = "onTrade";
    FUNCTIONS["ONSETTLE"] = "onSettle";
    FUNCTIONS["WITHDRAW"] = "withdraw";
})(FUNCTIONS || (FUNCTIONS = {}));
class MarginIssueManager extends index_1.VerifiedContract {
    constructor(signer, contractNetworkAddress) {
        const address = contractNetworkAddress;
        super(address, JSON.stringify(MarginIssueManager_json_1.abi), signer);
        this.contractAddress = address;
    }
    async issueProduct(security, securityType, currency, cficode, securityAmount, minOrderSize, currencyAmount, margin, collateral, tradeFee, options) {
        await this.validateInput(index_1.DATATYPES.ADDRESS, security);
        await this.validateInput(index_1.DATATYPES.STRING, securityType);
        await this.validateInput(index_1.DATATYPES.ADDRESS, currency);
        await this.validateInput(index_1.DATATYPES.STRING, cficode);
        await this.validateInput(index_1.DATATYPES.NUMBER, securityAmount);
        await this.validateInput(index_1.DATATYPES.NUMBER, minOrderSize);
        await this.validateInput(index_1.DATATYPES.NUMBER, currencyAmount);
        await this.validateInput(index_1.DATATYPES.NUMBER, margin);
        await this.validateInput(index_1.DATATYPES.NUMBER, collateral);
        await this.validateInput(index_1.DATATYPES.NUMBER, tradeFee);
        return this.callContract(FUNCTIONS.ISSUEPRODUCT, security, this.sanitiseInput(index_1.DATATYPES.BYTE32, securityType), currency, this.sanitiseInput(index_1.DATATYPES.BYTE32, cficode), securityAmount, minOrderSize, currencyAmount, margin, collateral, tradeFee, options);
    }
    async close(security, options) {
        await this.validateInput(index_1.DATATYPES.ADDRESS, security);
        return this.callContract(FUNCTIONS.CLOSE, security, options);
    }
    async offerCollateral(currency, amount, security, options) {
        await this.validateInput(index_1.DATATYPES.ADDRESS, currency);
        await this.validateInput(index_1.DATATYPES.NUMBER, amount);
        await this.validateInput(index_1.DATATYPES.ADDRESS, security);
        return this.callContract(FUNCTIONS.OFFERCOLLATERAL, currency, amount, security, options);
    }
    async sendCollateral(currency, amount, security, options) {
        await this.validateInput(index_1.DATATYPES.ADDRESS, currency);
        await this.validateInput(index_1.DATATYPES.NUMBER, amount);
        await this.validateInput(index_1.DATATYPES.ADDRESS, security);
        return this.callContract(FUNCTIONS.SENDCOLLATERAL, currency, amount, security, options);
    }
    async onMatch(party, counterparty, orderRef, security, securityTraded, currency, cashTraded, options) {
        await this.validateInput(index_1.DATATYPES.ADDRESS, party);
        await this.validateInput(index_1.DATATYPES.ADDRESS, counterparty);
        //await this.validateInput(DATATYPES.STRING, orderRef);
        await this.validateInput(index_1.DATATYPES.ADDRESS, security);
        await this.validateInput(index_1.DATATYPES.NUMBER, securityTraded);
        await this.validateInput(index_1.DATATYPES.ADDRESS, currency);
        await this.validateInput(index_1.DATATYPES.NUMBER, cashTraded);
        return this.callContract(FUNCTIONS.ONMATCH, party, counterparty, orderRef, security, securityTraded, currency, cashTraded, options);
    }
    async onTrade(ref, cref, security, securityTraded, currency, currencyTraded, executionTime, options) {
        //await this.validateInput(DATATYPES.STRING, ref);
        //await this.validateInput(DATATYPES.STRING, cref);
        await this.validateInput(index_1.DATATYPES.ADDRESS, security);
        await this.validateInput(index_1.DATATYPES.NUMBER, securityTraded);
        await this.validateInput(index_1.DATATYPES.ADDRESS, currency);
        await this.validateInput(index_1.DATATYPES.NUMBER, currencyTraded);
        await this.validateInput(index_1.DATATYPES.NUMBER, executionTime);
        return this.callContract(FUNCTIONS.ONTRADE, ref, cref, security, securityTraded, currency, currencyTraded, executionTime, options);
    }
    async onSettle(security, currency, financingPerSec, charge, dividendPerSec, payout, settlementTime, options) {
        await this.validateInput(index_1.DATATYPES.ADDRESS, security);
        await this.validateInput(index_1.DATATYPES.ADDRESS, currency);
        await this.validateInput(index_1.DATATYPES.NUMBER, financingPerSec);
        await this.validateInput(index_1.DATATYPES.BOOLEAN, charge);
        await this.validateInput(index_1.DATATYPES.NUMBER, dividendPerSec);
        await this.validateInput(index_1.DATATYPES.BOOLEAN, payout);
        await this.validateInput(index_1.DATATYPES.NUMBER, settlementTime);
        return this.callContract(FUNCTIONS.ONSETTLE, security, currency, financingPerSec, charge, dividendPerSec, payout, settlementTime, options);
    }
    async withdraw(security, currency, options) {
        await this.validateInput(index_1.DATATYPES.ADDRESS, security);
        await this.validateInput(index_1.DATATYPES.ADDRESS, currency);
        return this.callContract(FUNCTIONS.WITHDRAW, security, currency, options);
    }
}
exports.default = MarginIssueManager;
