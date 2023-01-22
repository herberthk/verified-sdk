"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const contractAddress = {
    'L1-goerli': {
        'Client': '0x933D1170FcD7b4A78F8b5fFB7c0Cb302edFD833F',
        'KYC': '',
        'System': '',
        'Holder': '',
        'Ledger': '',
        'Account': '',
        'Factory': '0x6405ddCD72841f0827D51A65a6AB89B7486d4A48',
        'Cash': '0x2f7Ff905D8aD56Ab2F9afE10AD7486DbD258d3F8',
        'Bond': '0x2E44D8FDd5343142b5224c57E44E13e249e93FdB',
        'Token': '',
        'Oracle': '',
        'Rates': '0x04d3C888F112AF5cD43928e2456631401D591664',
        'PreTrade': '',
        'Trade': '',
        'PostTrade': '',
        'SecuritiesRegistry': '',
        'Security': '0xDF81795A2c6078FD541F6C5E949153F2bC76b6b6',
        'OrderPool': '',
        'PoolFactory': '',
        'Stocks': '',
        'Bonds': '',
        'Liquidity': '0x9Ab60Ce0ae460Cfa7961858c0065034e35e009FD',
        'Vitta': '0xB40716004C92C8B6C65DA47b8073089027C189D1',
        'Distribution': '0x721965FAf93C94EeB1479F649f3c6ce67b0108D2',
        'BalancerPrimaryIssueManager': '0x58812451877775E360C14Cd216B771f58392Fd0f',
        'BalancerSecondaryIssueManager': '0xbb59eBa91F3819c8CDD624F5b5C77ec1BF175b58',
        'Custody': '0xF6ebB33E758eC36A2D3065F4633131DFF8307A07',
        'CASH': {
            'VCUSD': '0x441059c70c8294BecC1796275507C93Ea61db12B',
            'VCEUR': '0xA63D3324C253A6947dFfC2Fa7731297073632fce',
            'VCINR': '0x17166D19107Be2a588Adf9773492090631e97c80'
        },
        'BOND': {
            'VBUSD': '0xA5CcB17569195C2C4DC71099232C5046da568b06',
            'VBEUR': '0xBa60968eF7A487B53c22e019061d4FDa946313C1',
            'VBINR': '0x167E576bEBf95d25449E6EFa0516b23d52Bef19a'
        },
    },
    'L2-goerli': {
        'Client': '0x52b20fd184398A3B24cD24B5Be7bbdA32B9b304A',
        'KYC': '0x6610e9F8f7f7B85f079d09dCA5D8b335e65b317C',
        'System': '0xFEb48eAc3d1C30EE99164eF7feB79a71A2B9B4FB',
        'Holder': '0xDF71A1e2bA368574Ff62aC07dA05006544AF2120',
        'Ledger': '0xC19536D250293ced7821a13CA0b4D0b766C81b4e',
        'Account': '0x1C5Bdc536D96aa54030428a11E943EF5bbD41C99',
        'Factory': '0x9b842C77E3D6681b4Ee66CebE2d522d35D37510e',
        'Cash': '0xe4929371d7452aeb90F7c092F873d049892eafbA',
        'Bond': '0x30a9b280FB9070f14ee3157c41C68c04236C1858',
        'Token': '0x785AE38047650A9CC298B7ff694Ce29466585F7F',
        'Oracle': '0x643CB95e3D94ace3cbeb5002DBf8C5a1C292fd17',
        'Rates': '0xD292658282828BB845c1c64CA19621a98c622c6a',
        'PreTrade': '0x5d49E52CE8aA2c715E6Fdf8Fd46B43cbfAEd6650',
        'Trade': '0x5E58Cc659d8a8E61450A7363C60a0Bd1d88942c5',
        'PostTrade': '0x3FBdFE4a6Ea67bC45d31F32ABf801766530E2Ff0',
        'SecuritiesRegistry': '0xE6bEb64f49250D7D455D9910224c03faA93f6fEc',
        'Security': '0x4BBfC384503C4A420551Db8E4C56c7BBda85B9EF',
        'OrderPool': '0x8F1531627A7675Ffb04Dc2d4C83D976E22A239D3',
        'PoolFactory': '0x45d6D11B9e888F3735d57eea2d732e9f62DFE3e7',
        'Products': '0xb206a38a8CaCb79d53f3AA1C977E6f75632b50fd',
        'Stocks': '0x344cA252E2fCDDDF7F070Cf50920dB1bAAD0dEc5',
        'Bonds': '0xb3D8BB812cC4F7680995B03dFF7c8A2168DCB9A4',
        'Liquidity': '',
        'Distribution': '0xc5c2Aeb737C016FDB2655Ff7B748667f5ab6A7f1',
        'BalancerPrimaryIssueManager': '',
        'BalancerSecondaryIssueManager': '',
        'Custody': '',
        'CASH': {
            'VCUSD': '0x7817ee8Ed70aE456d220Ac56c625074799A7fE1d',
            'VCEUR': '0xb0Cda6bee0575152F8E16D2D1842566C74545f42',
            'VCINR': '0x2a970A962D97Cc642a1d064828C7c2496A6D853d'
        },
        'BOND': {
            'VBUSD': '0x0a19EC33Ad167853fdc3F50d6406FB554872A483',
            'VBEUR': '0x79ac6b5049d5538Da09596d90848355D94c72386',
            'VBINR': '0xe52a3147F1bbCe5402F32B0633a1842719b94Cea'
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
