"use strict";
// SPDX-License-Identifier: BUSL-1.1
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../index");
const SecondaryIssueManager_json_1 = require("../../../abi/assetmanager/balancer/SecondaryIssueManager.json");
var FUNCTIONS;
(function (FUNCTIONS) {
    FUNCTIONS["ISSUESECONDARY"] = "issueSecondary";
    FUNCTIONS["GETSETTLEMENTREQUESTS"] = "getSettlementRequests";
    FUNCTIONS["GETSETTLEMENTREQUEST"] = "getSettlementRequest";
    FUNCTIONS["SETSETTLEMENTSTATUS"] = "setSettlementStatus";
})(FUNCTIONS || (FUNCTIONS = {}));
class SecondaryIssueManager extends index_1.VerifiedContract {
    constructor(signer) {
        const chainId = Object.keys(SecondaryIssueManager_json_1.networks);
        const address = SecondaryIssueManager_json_1.networks[chainId].address;
        super(address, JSON.stringify(SecondaryIssueManager_json_1.abi), signer);
        this.contractAddress = address;
    }
    async issueSecondary(security, currency, securityAmount, currencyAmount, _hashedMessage, _v, _r, _s, options) {
        await this.validateInput(index_1.DATATYPES.ADDRESS, security);
        await this.validateInput(index_1.DATATYPES.ADDRESS, currency);
        await this.validateInput(index_1.DATATYPES.NUMBER, securityAmount);
        await this.validateInput(index_1.DATATYPES.NUMBER, currencyAmount);
        return this.callContract(FUNCTIONS.ISSUESECONDARY, security, currency, securityAmount, currencyAmount, _hashedMessage, _v, _r, _s, options);
    }
    async getSettlementRequests(dpid, options) {
        await this.validateInput(index_1.DATATYPES.STRING, dpid);
        return this.callContract(FUNCTIONS.GETSETTLEMENTREQUESTS, this.sanitiseInput(index_1.DATATYPES.BYTE32, dpid), options);
    }
    async getSettlementRequest(ref, poolid, options) {
        await this.validateInput(index_1.DATATYPES.STRING, ref);
        await this.validateInput(index_1.DATATYPES.STRING, poolid);
        return this.callContract(FUNCTIONS.GETSETTLEMENTREQUEST, this.sanitiseInput(index_1.DATATYPES.BYTE32, ref), this.sanitiseInput(index_1.DATATYPES.BYTE32, poolid), options);
    }
    async setSettlementStatus(ref, status, id, options) {
        await this.validateInput(index_1.DATATYPES.STRING, ref);
        await this.validateInput(index_1.DATATYPES.STRING, status);
        await this.validateInput(index_1.DATATYPES.STRING, id);
        return this.callContract(FUNCTIONS.SETSETTLEMENTSTATUS, this.sanitiseInput(index_1.DATATYPES.BYTE32, ref), this.sanitiseInput(index_1.DATATYPES.BYTE32, status), this.sanitiseInput(index_1.DATATYPES.BYTE32, id), options);
    }
}
exports.default = SecondaryIssueManager;
