import { useContext } from 'react';
import { initialTokenMaps } from '../tools/InitialDatas'
import { CurrentNetWrokIdContext } from '../chainContext';
import { quoteApi } from '../tools';

export default function useGetTokenPrice() {
    const chainId = useContext(CurrentNetWrokIdContext)
    const tokenMap = initialTokenMaps.find(token => token.chainId == chainId)
    const token = tokenMap?.tokens.find(item => item.name === 'USDT')
    const getPrice = async (fromTokenAddr: string, account: string) => {
        if (token) {
            try {
                const data = await quoteApi({
                    fromChainId: chainId.toString(),
                    fromTokenAddress: fromTokenAddr,
                    fromAddress: account,
                    fromAmount: "1",
                    toChainId: chainId.toString(),
                    toTokenAddress: token.address,
                    toAddress: account,
                    swapScene: "MarketTool",
                    gasFeeLevel: "2",
                    slippage: "0.01",
                    priorityFee: "0",
                    walletType: 4
                })
                if (data.result) {
                    return data.result.swapRate
                }

            } catch (error) {
            } finally {

            }
        }
        return 0.00
    }




    return getPrice
}