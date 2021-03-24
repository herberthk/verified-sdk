// @ts-nocheck

import { VerifiedContract } from '../index';
import { VerifiedWallet } from "../../wallet";
import { abi } from '../../abi/accounts/Holder.json';
import { contractAddress } from '../../contractAddress/index';
import { GetAccountStatement,CreateLedger } from '../../models/holder';

enum FUNCTIONS {
    GETENTRIES = 'getEntries',
    UPDATEACCOUNTSTATEMENT = 'updateAccountStatement',
    GETACCOUNTSTATEMENT = 'getAccountStatement',
    GETLEDGER='CreateLedger'
}

export default class HolderContract extends VerifiedContract {

    constructor(signer: VerifiedWallet) {

        const network: string = signer.provider._network.name
        super(contractAddress[network].Holder, JSON.stringify(abi), signer)
    }

    /**
     * The number of entries in the statement can be fetched using the following solidity function.
     * @returns {uint256}
     */
    public getEntries(): number {
        return this.callContract(FUNCTIONS.GETENTRIES)
    }


    public updateAccountStatement(): void {
        return this.callContract(FUNCTIONS.UPDATEACCOUNTSTATEMENT)
    }

    /**
     * For number of entries returned by getEntries(), the details of each entry can be fetched by calling getAccountStatement which returns the ledger name, ledger group and ledger balance for the index.
     * @param {uint256 statementIndex} 
     * @returns {bytes32, bytes32, bytes16}
     */
    public getAccountStatement(params: GetAccountStatement): any {
        return this.callContract(FUNCTIONS.GETACCOUNTSTATEMENT, params)
    }


    /**
     * Once the account is set up, ledgers need to be set up for grouping transactions. Where, _ledgerName is the name in characters, and _ledgerGroup is the transaction group. 
     * @param {bytes32 _ledgerName, bytes32 _ledgerGroup} 
     * @returns {address}
     */
     public createLedger(params: CreateLedger): any {
        return this.callContract(FUNCTIONS.GETACCOUNTSTATEMENT, params)
    }
}