"use strict";
// SPDX-License-Identifier: BUSL-1.1
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../index");
const SecondaryIssueManager_json_1 = require("../../../abi/assetmanager/balancer/SecondaryIssueManager.json");
var FUNCTIONS;
(function (FUNCTIONS) {
    FUNCTIONS["ISSUESECONDARY"] = "issueSecondary";
    FUNCTIONS["SETISSUINGFEE"] = "setIssuingFee";
    FUNCTIONS["GETSETTLEMENTREQUESTS"] = "getSettlementRequests";
    FUNCTIONS["GETSETTLEMENTREQUEST"] = "getSettlementRequest";
    FUNCTIONS["SETSETTLEMENTSTATUS"] = "setSettlementStatus";
    FUNCTIONS["GETSUBSCRIBERS"] = "getSubscribers";
    FUNCTIONS["CLOSE"] = "close";
})(FUNCTIONS || (FUNCTIONS = {}));
class SecondaryIssueManager extends index_1.VerifiedContract {
    constructor(signer, contractNetworkAddress) {
        const address = contractNetworkAddress;
        //const chainId: string = Object.keys(networks)
        //const address = networks[chainId].address
        super(address, JSON.stringify(SecondaryIssueManager_json_1.abi), signer);
        this.contractAddress = address;
    }
    async issueSecondary(security, currency, securityOutstanding, securityAmount, minOrderSize, currencyAmount, options) {
        await this.validateInput(index_1.DATATYPES.ADDRESS, security);
        await this.validateInput(index_1.DATATYPES.ADDRESS, currency);
        await this.validateInput(index_1.DATATYPES.NUMBER, securityOutstanding);
        await this.validateInput(index_1.DATATYPES.NUMBER, securityAmount);
        await this.validateInput(index_1.DATATYPES.NUMBER, minOrderSize);
        await this.validateInput(index_1.DATATYPES.NUMBER, currencyAmount);
        return this.callContract(FUNCTIONS.ISSUESECONDARY, security, currency, securityOutstanding, securityAmount, minOrderSize, currencyAmount, options);
    }
    async setIssuingFee(security, currency, swapfee, options) {
        await this.validateInput(index_1.DATATYPES.ADDRESS, security);
        await this.validateInput(index_1.DATATYPES.ADDRESS, currency);
        await this.validateInput(index_1.DATATYPES.NUMBER, swapfee);
        return this.callContract(FUNCTIONS.SETISSUINGFEE, security, currency, swapfee, options);
    }
    async getSettlementRequests(dpid, poolid, options) {
        await this.validateInput(index_1.DATATYPES.STRING, dpid);
        await this.validateInput(index_1.DATATYPES.STRING, poolid);
        return this.callContract(FUNCTIONS.GETSETTLEMENTREQUESTS, this.sanitiseInput(index_1.DATATYPES.BYTE32, dpid), poolid, options);
    }
    async getSettlementRequest(ref, options) {
        await this.validateInput(index_1.DATATYPES.STRING, ref);
        return this.callContract(FUNCTIONS.GETSETTLEMENTREQUEST, ref, options);
    }
    async setSettlementStatus(ref, status, options) {
        await this.validateInput(index_1.DATATYPES.STRING, ref);
        await this.validateInput(index_1.DATATYPES.STRING, status);
        return this.callContract(FUNCTIONS.SETSETTLEMENTSTATUS, ref, this.sanitiseInput(index_1.DATATYPES.BYTE32, status), options);
    }
    async getSubscribers(poolId, options) {
        await this.validateInput(index_1.DATATYPES.STRING, poolId);
        return this.callContract(FUNCTIONS.GETSUBSCRIBERS, poolId, options);
    }
    async close(poolId, options) {
        await this.validateInput(index_1.DATATYPES.STRING, poolId);
        return this.callContract(FUNCTIONS.CLOSE, poolId, options);
    }
}
exports.default = SecondaryIssueManager;
