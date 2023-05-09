"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const contractAddress = {
    5: {
        'Client': '0x3a4258bE84ddDb689CFeD49107726B8700ec593e',
        'Factory': '0x979096681423F77396e1C2a4d0A0B1e2cfd4b886',
        'Cash': '0xB58142f2e2c1238E900a461eb3E14ECD232eA868',
        'Bond': '0x22b5a9F9be86bcD7Ffef3C1683aF04A1F3b83959',
        'Token': '0x4aC88676E3d1F10469f131F8F6B84E9Ca61De514',
        'Oracle': '0x109F99eA5ED3DA588469173Fc32A843c8830296a',
        'Rates': '0x766545084E1C461dB5EC5A381E3cb6817aD271Ad',
        'Security': '0x68dFe8f2806052D6288467c58aEDc1165a6085F1',
        'SecuritiesFactory': '0x7F0B92c1FBB5F71B5c9cc65d030cB09Dd6812E88',
        'Vitta': '0x91cCDa0346e2358D61Cf57fC2C67e0fD29489906',
        'Liquidity': '0x511ca18c39453fa89030Ca7DCe91dA8d1B2BDC18',
        'Distribution': '0x4aC9f5aC46a9A00D5c752Fc8788ea86E083EfaA8',
        'BalancerPrimaryIssueManager': '0x8589178Abf7b4fc1532faB6162934c1E5f19c8E0',
        'BalancerSecondaryIssueManager': '0xcd55C9a8d127A93b5D7060d844BbF3B123D746D9',
        'BalancerMarginIssueManager': '0x3002cdA2983a6Fa1676f6dF1503A02A677F562be',
        'Custody': '',
        'CASH': {
            'VCUSD': '0xa18244Fb7236EE7E0D5382579eE0341FA621B9bB',
            'VCEUR': '0x8A2002c9dBA52909647Bca0049058bb0daB0196d',
            'VCCHF': '0x6c2e82cEb14Ed629192518128a49fb0B43616d58',
            'VCINR': '0xa241A295a9E7C7d6f40f7BaF6E971438e5D52f07'
        },
        'BOND': {
            'VBUSD': '0xC54c7D322432C817a47fa99468d6C38f93ce9205',
            'VBEUR': '0xEee16BA238308315a3AE7e3cfad51447469dE2B2',
            'VCCHF': '0xa9F081b179688F0b676297d211865703e3FB13CD',
            'VBINR': '0x99EEBAeE18680c50463eb1A4784f7426b75D22EE'
        },
    },
    'verified': {
        'Client': '',
        'Factory': '',
        'Cash': '',
        'Bond': '',
        'Token': '',
        'Oracle': '',
        'Rates': '',
        'Security': '',
        'SecuritiesFactory': '',
        'Vitta': '',
        'Liquidity': '',
        'Distribution': '',
        'BalancerPrimaryIssueManager': '',
        'BalancerSecondaryIssueManager': '',
        'BalancerMarginIssueManager': '',
        'Custody': '',
        'CASH': {
            'VCUSD': '',
            'VCEUR': '',
            'VCCHF': '',
            'VCINR': ''
        },
        'BOND': {
            'VBUSD': '',
            'VBEUR': '',
            'VCCHF': '',
            'VBINR': ''
        },
    },
    137: {
        'Client': '0xF6C805B604e58322E342B6dAe8146f5892F4E26a',
        'Factory': '',
        'Cash': '',
        'Bond': '',
        'Token': '',
        'Oracle': '',
        'Rates': '',
        'Security': '0xc3A4517768fce19D55e3417FACD282746CaB0D5A',
        'SecuritiesFactory': '0x4bE9e52079d302FC99041642acf5ef33779f960b',
        'Vitta': '0x40b8764740149704A09bF7526b82D92E4c0958a9',
        'Liquidity': '0x266d35A820B8e7f1CcAf7f14A24eC2232aE3D010',
        'Distribution': '0xa5D4c6d6Fb8efFb3785F31352be3343E0B7113A3',
        'BalancerPrimaryIssueManager': '0xaeb0135cF07CDdb695dF7f15E8a9D5f7eCCF6076',
        'BalancerSecondaryIssueManager': '0x1E99ae988c872598Bf1874BEf42020Df9796f6dA',
        'BalancerMarginIssueManager': '',
        'Custody': '',
        'CASH': {
            'VCUSD': '',
            'VCEUR': '',
            'VCCHF': '',
            'VCINR': ''
        },
        'BOND': {
            'VBUSD': '',
            'VBEUR': '',
            'VCCHF': '',
            'VBINR': ''
        },
    },
    1: {
        'Client': '',
        'Factory': '',
        'Cash': '',
        'Bond': '',
        'Token': '',
        'Oracle': '',
        'Rates': '',
        'Security': '',
        'SecuritiesFactory': '',
        'Vitta': '',
        'Liquidity': '',
        'Distribution': '',
        'BalancerPrimaryIssueManager': '',
        'BalancerSecondaryIssueManager': '',
        'BalancerMarginIssueManager': '',
        'Custody': '',
        'CASH': {
            'VCUSD': '',
            'VCEUR': '',
            'VCCHF': '',
            'VCINR': ''
        },
        'BOND': {
            'VBUSD': '',
            'VBEUR': '',
            'VCCHF': '',
            'VBINR': ''
        },
    },
    42161: {
        'Client': '',
        'Factory': '',
        'Cash': '',
        'Bond': '',
        'Token': '',
        'Oracle': '',
        'Rates': '',
        'Security': '',
        'SecuritiesFactory': '',
        'Vitta': '',
        'Liquidity': '',
        'Distribution': '',
        'BalancerPrimaryIssueManager': '',
        'BalancerSecondaryIssueManager': '',
        'BalancerMarginIssueManager': '',
        'Custody': '',
        'CASH': {
            'VCUSD': '',
            'VCEUR': '',
            'VCCHF': '',
            'VCINR': ''
        },
        'BOND': {
            'VBUSD': '',
            'VBEUR': '',
            'VCCHF': '',
            'VBINR': ''
        },
    },
    10: {
        'Client': '',
        'Factory': '',
        'Cash': '',
        'Bond': '',
        'Token': '',
        'Oracle': '',
        'Rates': '',
        'Security': '',
        'SecuritiesFactory': '',
        'Vitta': '',
        'Liquidity': '',
        'Distribution': '',
        'BalancerPrimaryIssueManager': '',
        'BalancerSecondaryIssueManager': '',
        'BalancerMarginIssueManager': '',
        'Custody': '',
        'CASH': {
            'VCUSD': '',
            'VCEUR': '',
            'VCCHF': '',
            'VCINR': ''
        },
        'BOND': {
            'VBUSD': '',
            'VBEUR': '',
            'VCCHF': '',
            'VBINR': ''
        },
    },
    56: {
        'Client': '',
        'Factory': '',
        'Cash': '',
        'Bond': '',
        'Token': '',
        'Oracle': '',
        'Rates': '',
        'Security': '',
        'SecuritiesFactory': '',
        'Vitta': '',
        'Liquidity': '',
        'Distribution': '',
        'BalancerPrimaryIssueManager': '',
        'BalancerSecondaryIssueManager': '',
        'BalancerMarginIssueManager': '',
        'Custody': '',
        'CASH': {
            'VCUSD': '',
            'VCEUR': '',
            'VCCHF': '',
            'VCINR': ''
        },
        'BOND': {
            'VBUSD': '',
            'VBEUR': '',
            'VCCHF': '',
            'VBINR': ''
        },
    },
    100: {
        'Client': '0x44d2463791Ef7d13574675733e75f160311970b9',
        'Factory': '0x388d1591A572800C2f9cd0987f8A536F178C9806',
        'Cash': '0x76621e82ff4416897Bb8316853ecBE15E7FB9279',
        'Bond': '0xcc2FCff86F5Fb20207c77C1d83bEA5645172737a',
        'Token': '0x4C5feED47d13a1b4ba7c307975edE38773440C7F',
        'Oracle': '0xE2D404aEC7Dd40219A7Ea19be3Fb797399ebB559',
        'Rates': '0x8DfC45b4b8Ead2a4FEF1710eE80D250F774d8ABe',
        'Security': '0xc090208AF73839e2Ec074Db27294548e7d19d8FA',
        'SecuritiesFactory': '0x00674E4f81C613afd1B832d3839dCEdc4679F50B',
        'Vitta': '0x2F5d5A76C6faf10320fe943307d61d76d75D09fd',
        'Liquidity': '0x8365A76099629CDd6B28c3D85862A220504C0b46',
        'Distribution': '0xe44Dc13cBF4C785843ac7B325DD8F6b01D2961CA',
        'BalancerPrimaryIssueManager': '0x5640812D73f0D3d820832BFb53ed6fC4a9383283',
        'BalancerSecondaryIssueManager': '0x178E33786349cEE3E4dec3c51EF2a1108E8d958e',
        'BalancerMarginIssueManager': '0x6013c4f00Bc8456aD45EF945FEA4DC4ab30026Fc',
        'Custody': '0x4A59d0A82A9e1196c7789a25b0F302A683b220E7',
        'CASH': {
            'VCUSD': '0x3D1775138127098bf97A2574D8a0d3Be909eC49f',
            'VCEUR': '0x896CeEE4d36b24713dDd05f126d59b22A2d252CF',
            'VCCHF': '0x8F6Ffa70612Ef2216669f07C18FABC5209c45423',
            'VCINR': '0xb6FDa76ced0F022BB783B68b2AD6EaA2759799DC'
        },
        'BOND': {
            'VBUSD': '0x2D34b1187742928Fd50c89cC978467cE7691Ce7c',
            'VBEUR': '0x56f9ED9914546DeBBA541FEF303fA39CfcF4b63C',
            'VCCHF': '0x8eE273Ac39C83EF01e3Df73d15B562a9056B03Bd',
            'VBINR': '0xd9b9A355Baf5FC1467118306e1C82732771eD140'
        },
    }
};
exports.default = contractAddress;
