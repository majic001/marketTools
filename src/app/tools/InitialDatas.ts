import { NetWrok, TokenMap } from "../interfaces";

export const baseApiUrl = 'http://103.146.51.22:8123';

export const initialNetwroks: NetWrok[] = [
    {
        chainId: 1,
        name: 'Ethereum',
        redRpcUrl: 'https://eth.llamarpc.com',
    },
    {
        chainId: 56,
        name: 'BSC',
        redRpcUrl: 'https://binance.llamarpc.com',
    },
    {
        chainId: 8453,
        name: 'Base',
        redRpcUrl: 'https://base.llamarpc.com',
    },
    // {
    //     chainId: 999999997,
    //     name: 'Solana',
    //     redRpcUrl: '',
    // }

];

export const initialTokenMaps: TokenMap[] = [
    {
        chainId: 1,
        tokens: [
            {
                name: 'ETH',
                address: 'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee'
            },
            {
                name: 'USDT',
                address: '0xdAC17F958D2ee523a2206206994597C13D831ec7'
            }
        ]
    },
    {
        chainId: 56,
        tokens: [
            {
                name: 'BNB',
                address: 'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee'
            },
            {
                name: 'USDT',
                address: '0x55d398326f99059fF775485246999027B3197955'
            }
        ]
    },
    {
        chainId: 8453,
        tokens: [
            {
                name: 'ETH',
                address: 'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee'
            },
            {
                name: 'USDT',
                address: '0xfde4C96c8593536E31F229EA8f37b2ADa2699bb2'
            }
        ]
    },
    {
        chainId: 999999997,
        tokens: [
            {
                name: 'SOL',
                address: 'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee'
            },
            {
                name: 'USDT',
                address: 'Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB'
            }
        ]
    }
]