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
        return this.callContract(FUNCTIONS.ISSUESECONDARY, security, this.sanitiseInput(index_1.DATATYPES.BYTE32, securityType), currency, this.sanitiseInput(index_1.DATATYPES.BYTE32, cficode), securityAmount, minOrderSize, currencyAmount, margin, collateral, tradefee, options);
    }
    async close(poolId, options) {
        await this.validateInput(index_1.DATATYPES.STRING, poolId);
        return this.callContract(FUNCTIONS.CLOSE, poolId, options);
    }
}
exports.default = MarginIssueManager;
