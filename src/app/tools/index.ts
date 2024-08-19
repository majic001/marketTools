import { Contract, Provider, Wallet, formatEther, formatUnits } from "ethers";
import { QuoteParm, SaveParm } from "../interfaces";
import ERC20ABI from '../abis/ERC20.json'
import { baseApiUrl } from "./InitialDatas";

export const maskMiddle = (str: string, maskLength = 4) => {
    if (str.length <= maskLength) {
        return str;
    }
    const maskedPart = '*'.repeat(maskLength * 2);
    const maskedString = str.slice(0, maskLength) + maskedPart + str.slice(str.length - maskLength, str.length);

    return maskedString;
}


export const quoteApi = async (params: QuoteParm) => {
    const response = await fetch(`${baseApiUrl}/spot/api/web3/swap/v3/market/quote`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        // mode: 'no-cors',
        body: JSON.stringify({
            params
        })
    })
    return await response.json()
}


export const saveApi = async (params: SaveParm) => {
    const response = await fetch(`${baseApiUrl}/spot/api/web3/swap/v3/market/saveSwapOrder`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        // mode: 'no-cors',
        body: JSON.stringify({
            params
        })
    })
    return await response.json()
}

export const getEVMTokenBalance = async (token: string, wallet: Wallet, provider: Provider) => {

    if (token === 'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee') {
        const balance = await provider.getBalance(wallet.address)
        return formatEther(balance)
    } else {
        const contract = new Contract(token, ERC20ABI, wallet)
        const balance = await contract.balanceOf(wallet.address)
        const decimals = await contract.decimals()
        return formatUnits(balance, decimals)
    }
}