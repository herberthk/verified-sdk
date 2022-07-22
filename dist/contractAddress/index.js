"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const contractAddress = {
    'L1-rinkeby': {
        'Client': '0xde54a4fD12D2ecE0b97348db764248375a1b1027',
        'KYC': '',
        'System': '',
        'Holder': '',
        'Ledger': '',
        'Account': '',
        'Factory': '0x6D0B402CF0c6951eD24b779cf1d3248F2b7972fF',
        'Cash': '0x655a4E7798E1Db239145feA811050fc1aabb1B6F',
        'Bond': '0xE2EaC289E6627D3AB711A5280f6e180435C051f9',
        'Token': '',
        'Oracle': '',
        'Rates': '0x56685a403519C1963adcae67f828318F100bF5f9',
        'PreTrade': '',
        'Trade': '',
        'PostTrade': '',
        'SecuritiesRegistry': '',
        'Security': '0x3CA1Dd4EDD77a746a1ac250EFA817640e8CB8745',
        'OrderPool': '',
        'PoolFactory': '',
        'Stocks': '',
        'Bonds': '',
        'Liquidity': '0x06b40A1471d715FD0581854F22166283D89b0302',
        'Distribution': '0x7aE7fe788D1f14B22a7f6C3707320FbE3A51968b',
        'BalancerPrimaryIssueManager': '0x0AB021b3eCA4cD5451c2D80f72495d03433b3c80',
        'BalancerSecondaryIssueManager': '0x1AB6c6E32F56CEE867EB1A1D069023E3f77DD2cc',
        'Custody': '0x8357FB36fFA9dcE78A43Fb33DbFFAAB2738E5B1a',
        'CASH': {
            'VCUSD': '0x687135E1C8A4f2525483BE09C0401543F5DEd0E3',
            'VCEUR': '0xdAE14069330BeF1D66A31461164F52bD4b60E117',
            'VCINR': '0x3e148797be04E4c9C53E42D4fcEA170B58A9060c'
        },
        'BOND': {
            'VBUSD': '0xfc33051FD30056a9f5d5042eD794829Bc0AD2760',
            'VBEUR': '0xd7c13d884573A61e2d39B91B39bA389582c18c40',
            'VBINR': '0xcf7C8918EfEEBcf14aB8E672Bc922B8C4ba5ab82'
        },
    },
    'L2-goerli': {
        'Client': '0xde763208aB2279435D0e6AA4297d25164873Fe82',
        'KYC': '0xF2794Bf54939344A35A954bC02e17792D55B086c',
        'System': '0xFD27D8038527DC0a1dae97bCc166b5b57e7e200c',
        'Holder': '0x2Fe5c06027cb4184555a8A0B40905FC5F7aeCB1D',
        'Ledger': '0x2E7d7ea9EA02bB08f8FB720fA98916EcF135Ac51',
        'Account': '0x6DA3c64a5Fb9F913c6F30008de72691dE119A89B',
        'Factory': '0xDeeCF696F90f706e87B5c25bB0471548a43E501b',
        'Cash': '0xB14B5c86Ded52d3c2623b1c3e443Bd7A8aEbaf05',
        'Bond': '0xa2F8382b88BDA818C75d3246BB166a314246Abfc',
        'Token': '0xD2694C9554841c335780584b418AcA8DBE54d96E',
        'Oracle': '0x1B1671115C9A99569cfFA59D4a2CaA0a0CC69cC1',
        'Rates': '0x11B7b534bDffc8A63665b14BF1DC4b863746f7a4',
        'PreTrade': '0x1bde40708A80D41390cd2097fF1C787a4E70827d',
        'Trade': '0x103aE267406f545CABD5b711D29EAeF3FE2cf93b',
        'PostTrade': '0x076C72796885345a96919DB683a76234B48a63bF',
        'SecuritiesRegistry': '0x4Cee41ea3c9AD664449cC47f4f3cb0D99140F57A',
        'Security': '0x346A38af25f5ae61A571DFC2431d84f1D3D0Ef6e',
        'OrderPool': '0x32e1D25C0ffb5AcfCc1d3392aaAB332157D1C0cc',
        'PoolFactory': '0x6Ea7c61a85E6e07711C15Eb7B3E74f7844c1c7b9',
        'Products': '0x8300dc279ad80Ec37C4a9278F99997bb358ef7dc',
        'Stocks': '0x68252500966C0253f8BcCa1bd7300422401d047F',
        'Bonds': '0x4d57943C1DDcC9A064d4495F57B5ecD6d3e794c6',
        'Liquidity': '',
        'Distribution': '',
        'BalancerManager': '',
        'PrimaryIssuePoolFactory': '',
        'Custody': '0x138a6aF82D20c1bb4589721C846626317C5E1143',
        'CASH': {
            'VCUSD': '0xdD089A53574CabcA8082F81CC883bdBFCb0e464a',
            'VCEUR': '0xC889374e780911b6524ADde13998F7Cb2b0Bb8d5',
            'VCINR': '0xff129A350083e89F6f58cD9e6f632A74B727Fdfa'
        },
        'BOND': {
            'VBUSD': '0x6E3E4Fd4D7FDc439BbD8c29474DCaFCc21B46BB9',
            'VBEUR': '0x4458EA4561416043E6f381227e146f5557fFfE96',
            'VBINR': '0x82a3cd676d9f17776788f8810058eBA756030B7b'
        },
    },
    'mainnet': {
        'Client': '',
        'KYC': '',
        'System': '',
        'Holder': '',
        'Ledger': '',
        'Account': '',
        'Factory': '',
        'Cash': '',
        'Bond': '',
        'Token': '',
        'Oracle': '',
        'Rates': '',
        'PreTrade': '',
        'Trade': '',
        'PostTrade': '',
        'SecuritiesRegistry': '',
        'Security': '',
        'OrderPool': '',
        'PoolFactory': '',
        'Products': '',
        'Stocks': '',
        'Bonds': '',
        'Liquidity': '',
        'Distribution': '',
        'AssetManager': '',
        'Custody': '',
        'CASH': {
            'VCUSD': '',
            'VCEUR': '',
            'VCINR': ''
        },
        'BOND': {
            'VBUSD': '',
            'VBEUR': '',
            'VBINR': ''
        }
    },
    'verifiednetwork': {
        'Client': '',
        'KYC': '',
        'System': '',
        'Holder': '',
        'Ledger': '',
        'Account': '',
        'Factory': '',
        'Cash': '',
        'Bond': '',
        'Token': '',
        'Oracle': '',
        'Rates': '',
        'PreTrade': '',
        'Trade': '',
        'PostTrade': '',
        'SecuritiesRegistry': '',
        'Security': '',
        'OrderPool': '',
        'PoolFactory': '',
        'Products': '',
        'Stocks': '',
        'Bonds': '',
        'Liquidity': '',
        'Distribution': '',
        'AssetManager': '',
        'Custody': '',
        'CASH': {
            'VCUSD': '',
            'VCEUR': '',
            'VCINR': ''
        },
        'BOND': {
            'VBUSD': '',
            'VBEUR': '',
            'VBINR': ''
        }
    }
};
exports.default = contractAddress;
