"use strict";
// SPDX-License-Identifier: BUSL-1.1
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../index");
const L1Bond_json_1 = require("../../../abi/deposits/L1Bond.json");
var FUNCTIONS;
(function (FUNCTIONS) {
    FUNCTIONS["SUPPORTTOKENS"] = "supportTokens";
    FUNCTIONS["CHECKSUPPORTFORTOKEN"] = "checkSupportForToken";
    FUNCTIONS["GETSUPPORTEDTOKENS"] = "getSupportedTokens";
    FUNCTIONS["REQUESTISSUE"] = "requestIssue";
    FUNCTIONS["SETSIGNER"] = "setSigner";
})(FUNCTIONS || (FUNCTIONS = {}));
class VerifiedBond extends index_1.VerifiedContract {
    constructor(signer, bondCurrencyAddress) {
        const chainId = signer.provider._network.chainId.toString();
        const address = bondCurrencyAddress;
        super(address, JSON.stringify(L1Bond_json_1.abi), signer);
        this.contractAddress = address;
    }
    /**
        Specifies list of supported tokens that can be invested in the Verified Liquidity token
        @param  _tokens address of token supported
        @param  _name   string name of token supported
     */
    async supportTokens(_tokens, _name, options) {
        await this.validateInput(index_1.DATATYPES.STRING, _tokens);
        await this.validateInput(index_1.DATATYPES.STRING, _name);
        return this.callContract(FUNCTIONS.SUPPORTTOKENS, _tokens, this.sanitiseInput(index_1.DATATYPES.BYTE32, _name), options);
    }
    /**
        Checks if a specified token is supported for investing in the Verified Liquidity token
        @param  _token  token that is supported for investment
     */
    async checkSupportForToken(_token, options) {
        await this.validateInput(index_1.DATATYPES.ADDRESS, _token);
        return this.callContract(FUNCTIONS.CHECKSUPPORTFORTOKEN, _token, options);
    }
    /**
     * Returns list of supported liquidity tokens (eg, VITTA, USDC, DAI)
     * @returns array of struct of tokens
     */
    async getSupportedTokens() {
        return this.callContract(FUNCTIONS.GETSUPPORTEDTOKENS);
    }
    /**
        Used by external apps (eg, exchange, wallet) to buy Verified cash token
        @param  _token  address of token used by investor to buy the cash token
        @param  _amount amount of token that is transferred from investor to this cash token issuing contract
        @param  _buyer  address of buyer
     */
    async requestIssue(_token, _amount, _buyer, options) {
        await this.validateInput(index_1.DATATYPES.ADDRESS, _token);
        await this.validateInput(index_1.DATATYPES.NUMBER, _amount);
        await this.validateInput(index_1.DATATYPES.ADDRESS, _buyer);
        return this.callContract(FUNCTIONS.REQUESTISSUE, _token, _amount, _buyer, options);
    }
    /**
        Sets signer to verify bridge
        @param  _signer  address of signer that can only be set by owner of bridge
     */
    async setSigner(_signer, options) {
        await this.validateInput(index_1.DATATYPES.ADDRESS, _signer);
        return this.callContract(FUNCTIONS.SETSIGNER, _signer, options);
    }
}
exports.default = VerifiedBond;
