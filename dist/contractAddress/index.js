"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const contractAddress = {
    5: {
        'Client': '0x3e132ee9fc32428655b2151A4E6C3f2B1FD49923',
        'Factory': '0x4c74BB3B701Ad556bEC623228555e363923d7d7f',
        'Cash': '0x8e0eF99e187d99f38ed8c4f65c0eE5b9e8FC7304',
        'Bond': '0xf9f1715dC1512693C03F8767Cbc9C39d84ffD93a',
        'Token': '0x5f22708f8Ed8622E1E5296c99215c56fDc5f1C04',
        'Oracle': '0x0Ae1A4711d7bAe34865A9Bf1A69C4243b89ac073',
        'Rates': '0xC805B6D74d17c9DD2dA508AbeA90a1b9bCC2344c',
        'Security': '0x93527FaeCD88c108C3Fb78a1Ca72536eeb1Adbf7',
        'SecuritiesFactory': '0x647a7EA364a31fa18c65f4043CD55718d245D774',
        'Vitta': '0x8aa063d709A7Ec84086A0b5330c75D73af528cD3',
        'Liquidity': '0xce6FD14dD748F5f371BB226a3FdF6fEA3a4C423B',
        'Distribution': '0x719141e877FcF9306299A3Ec5b7F9dcadd0F4cD8',
        'BalancerPrimaryIssueManager': '0x57E416421ffCDF26d630F2bf36776Dc019A9Dc02',
        'BalancerSecondaryIssueManager': '0x252b67835032D25b3913571446EDB0d1597D2DFf',
        'BalancerMarginIssueManager': '0xeC1Ebd0629c7D8db515cbD29DcafB7Ca106C56e5',
        'Custody': '0x60aEDad13a34b1DC45bDeA9eD6a66d639563e917',
        'CASH': {
            'VCUSD': '0xcd9e67b873Cf50eeb1Dc08b95a29782a5f108f1A',
            'VCEUR': '0xd8B292d6d4ad28C089DAC27FBc0D6dc7bD2Df538',
            'VCCHF': '0xd92965Cb9f1056ECCB90171fDe4c26337a64beEd',
            'VCINR': '0x0d2ea8520Ac523253AC1816fE1002adD615cc077'
        },
        'BOND': {
            'VBUSD': '0x33762f93Ca0edccbb3Ef0084A15afc73EAc3F9f3',
            'VBEUR': '0xb4bf88282F5fC47fa8B4984cf85FCFf77bDE14de',
            'VCCHF': '0x2dC17af0Ae170203CC978aB5328369861Bd24D1B',
            'VBINR': '0x10476c24C19d5d29D34E701669071d9E93D96862'
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
        'Client': '0x2C5718206b37b8744784ce44f374DE13dd7BC2d1',
        'Factory': '',
        'Cash': '',
        'Bond': '',
        'Token': '',
        'Oracle': '',
        'Rates': '',
        'Security': '0x5b8bc9986A44c1814603Ba7C66C5e2eC332262c5',
        'SecuritiesFactory': '0xF0bbA007515fF51C9310225106512B921de4cdAA',
        'Vitta': '0xAb26871f689241758F42627d812E2A3eda7c630e',
        'Liquidity': '0x2E6F17DF38B4686D17C6ec63eF3Ee8f926b1769a',
        'Distribution': '0x96De7417058Dff11D570011eA100e6F0B6Af98eC',
        'BalancerPrimaryIssueManager': '0x30fE817317Ffc5A45e8cB457fD1AC8ca0CE068D4',
        'BalancerSecondaryIssueManager': '0xb9AD11aC80AD0BE1B83ba6b83E4E27C110c18a33',
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
        'Client': '0xE7422FdB4e9a39489bFe7ef9F1E1b27dC7860195',
        'Factory': '',
        'Cash': '',
        'Bond': '',
        'Token': '',
        'Oracle': '',
        'Rates': '',
        'Security': '0xb1539a85F9252137BE0B2f1169EaE235B6D45142',
        'SecuritiesFactory': '0x04631b0B934c1d35B1f0FDAa1E000AC85c93ec7A',
        'Vitta': '0x1B95D408DE85e07d0De5d5b545202E32a023772E',
        'Liquidity': '0xBD5A0178C276d1553Eb388AdA03F6Cb79Eb6F67D',
        'Distribution': '0x8acBeFF5F1F2e0A4298A6449494C0aA6Dd830d3D',
        'BalancerPrimaryIssueManager': '0x2A46d8Ca28F0b84D58d20b5158C2417E6F9CE76F',
        'BalancerSecondaryIssueManager': '0x2c6F953dfc7b922ef3101c65c62f9349fCd65e1A',
        'BalancerMarginIssueManager': '0x0d062A0064b762ed8AEe7DE9E79b532e6215c77a',
        'Custody': '0x4A59d0A82A9e1196c7789a25b0F302A683b220E7',
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
    'balancerVault': '0xBA12222222228d8Ba445958a75a0704d566BF2C8'
};
exports.default = contractAddress;
