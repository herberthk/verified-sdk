"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const contractAddress = {
    'L1-goerli': {
        'Client': '0xF1ECb20bce1B31ae61bd5dBf8decac0428942D18',
        'KYC': '',
        'System': '',
        'Holder': '',
        'Ledger': '',
        'Account': '',
        'Factory': '0x31A0469B5B0941aCcf75643aAB81ae319AD07733',
        'Cash': '0x13AAf050FD9BB16bb57A9D141515f789cD711004',
        'Bond': '0xc97E5FFE71eE3dBf90a01917b154a20F6DfF6eb9',
        'Token': '',
        'Oracle': '',
        'Rates': '0xDccbBf85d4881f0BA8ea7c9Cb02f4Ed8a123A3fD',
        'PreTrade': '',
        'Trade': '',
        'PostTrade': '',
        'SecuritiesRegistry': '',
        'Security': '0x6c09aA54F469052E29bBa80b632fDBc95Ea0a0e8',
        'OrderPool': '',
        'PoolFactory': '',
        'Stocks': '',
        'Bonds': '',
        'Liquidity': '0xE3B74659a6464519987DEe03F17696690BF3Ae10',
        'Distribution': '0x5c3171AFEC854f8B6FD138ee9533629ABd8A5365',
        'BalancerManager': '0x4654FbF60b3e42Df6127451cAaC5CFeD86e2eA53',
        'PrimaryIssuePoolFactory': '0x738731dbA0D01c8d6197d65437cc7B627fA687bD',
        'Custody': '',
        'CASH': {
            'VCUSD': '0x64EA01fF7e9A0986Cd70b4d19CEDB26a9f99F0c1',
            'VCEUR': '0x5f678B12C4a5fc2136CC9060B10BB2a8AFdfA5b6',
            'VCINR': '0x74153fe9E896EC7067CC53c9533BFC00c45CD629'
        },
        'BOND': {
            'VBUSD': '0x64a281e17b089aB8F0D50729b2C9C779B460e1fC',
            'VBEUR': '0x220C22b1a292504afdA9FC0fE39D83e4bcBb834E',
            'VBINR': '0x3cbaD48599a8EBfF275480E51ee03F9b1F63F0de'
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
        'PreTrade': '0x4Dd5d65BA92b09eaa762Ca81e6D59cd6B173e18A',
        'Trade': '0xD2C2BD4ACd7C134262129E6119DBa4d6b84Db808',
        'PostTrade': '0xA7a6190ad738332543D9B2287c778157F3B92D52',
        'SecuritiesRegistry': '0x85Eaa78961b913372118D53ee53Eb99Be7c4E7a8',
        'Security': '0x324dfB528BEea8419eC96C6a54E0DA7744A4f8da',
        'OrderPool': '0x69C61a08b46fdd75D6f000CCf2b85618AC7011a5',
        'PoolFactory': '0xEE713f9e7d7D03267534C2628019C16dC1c41ecB',
        'Stocks': '0xA02119054272E52f6b6380c358E995f95Db2E9B2',
        'Bonds': '0xBa0daEBb3D325e6cE3401ff2FF913a5FEe20181D',
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
