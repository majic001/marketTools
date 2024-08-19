import { useContext, useEffect, useState } from 'react';
import { initialTokenMaps, baseApiUrl } from '../tools/InitialDatas'
import { CurrentNetWrokIdContext, FromTokenContext } from '../chainContext';
import { quoteApi } from '../tools';

export default function useCurentPrice(): number {
    const chainId = useContext(CurrentNetWrokIdContext)
    const fromTokenAddr = useContext(FromTokenContext)
    const [price, setPrice] = useState(0.00)
    useEffect(() => {
        const getPrice = async () => {
            const tokenMap = initialTokenMaps.find(token => token.chainId == chainId)
            if (tokenMap) {
                const token = tokenMap.tokens.find(item => item.name === 'USDT')
                if (token) {
                    try {
                        const data = await quoteApi({
                            fromChainId: chainId.toString(),
                            fromTokenAddress: fromTokenAddr,
                            fromAddress: "0x743A3C201Ae432E8aa02C43dDd4C5533f51697aB",
                            fromAmount: "1",
                            toChainId: chainId.toString(),
                            toTokenAddress: token.address,
                            toAddress: "0x743A3C201Ae432E8aa02C43dDd4C5533f51697aB",
                            swapScene: "MarketTool",
                            gasFeeLevel: "2",
                            slippage: "0.01",
                            priorityFee: "0",
                            walletType: 4
                        })
                        if (data.result) {
                            setPrice(data.result.swapRate)
                        }

                    } catch (error) {
                        console.log(error)
                    } finally {

                    }
                }
            }
        }
        getPrice()

    }, [chainId, fromTokenAddr])



    return price
}