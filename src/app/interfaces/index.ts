export interface NetWrok {
    chainId: number;
    name: string;
    redRpcUrl: string;
}

export interface Token {
    name: string;
    address: string;
}

export interface TokenMap {
    chainId: number;
    tokens: Token[]
}

export interface IWallet {
    account: string;
    fromBalance: number;
    toBalance: number;
}

export interface SwapInfo {
    time: string,
    wallet: string,
    hash: string,
    type: string,
    from: string,
    to: string,
    status: string,
    tradefee: string,
    gasfee: string,
}

export interface SwapParm {
    buyOrSell: boolean,
    targetPrice: number,
    gasFeeLevel: number,
    rpcUrl: string,
    tradePlace: number,
    tradeAmount: number
}

export interface QuoteParm {
    fromChainId: string,
    fromTokenAddress: string,
    fromAddress: string,
    fromAmount: string,
    toChainId: string,
    toTokenAddress: string,
    toAddress: string,
    swapScene: string,
    gasFeeLevel: string,
    slippage: string,
    priorityFee: string,
    walletType: number
}

export interface SaveParm {
    dexId: number,
    fromChainId: string,
    fromTokenAddress: string,
    fromAddress: string,
    fromAmount: string,
    toChainId: string,
    toTokenAddress: string,
    toAddress: string,
    toTokenAmountExpected: string,
    toTokenAmount: string,
    gas: string,
    swapScene: string,
    gasFeeLevel: string,
    slippage: string,
    txHash: string,
    status: number,
    walletType: number
}

