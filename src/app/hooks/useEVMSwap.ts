import { useCallback, useContext, useEffect, useState } from 'react';
import { initialTokenMaps, baseApiUrl } from '../tools/InitialDatas'
import { AddSwapInfosContext, CurrentNetWrokIdContext, FromTokenContext, PrivateKeysContext, ToTokenContext } from '../chainContext';
import { SwapInfo, SwapParm } from '../interfaces';
import { initialNetwroks } from '../tools/InitialDatas'
import { JsonRpcProvider, TransactionReceipt, Wallet, formatEther, getBigInt } from 'ethers';
import { getEVMTokenBalance, quoteApi, saveApi } from '../tools';
import moment from 'moment';


export default function useEVMSwap() {
    const chainId = useContext(CurrentNetWrokIdContext)
    const privateKeys = useContext(PrivateKeysContext)
    const addSwapInfo = useContext(AddSwapInfosContext)
    const fromTokenAddr = useContext(FromTokenContext)
    const toTokenAddr = useContext(ToTokenContext)
    const allKeys = privateKeys.split(',')
    const network = initialNetwroks.find(value => value.chainId == chainId)


    const doSwap = async (param: SwapParm) => {
        const provider = new JsonRpcProvider(param.rpcUrl ? param.rpcUrl : network?.redRpcUrl)
        let keys = allKeys.sort(() => (Math.random() - 0.5))
        let length = keys.length
        while (length > 0) {
            let tmpKeys: string[] = []
            for (let i = 0; i < keys.length; i++) {
                if (keys[i]) {
                    try {
                        const wallet = new Wallet(keys[i], provider)
                        const fromAmount = '1'
                        const data = await quoteApi(
                            {
                                fromChainId: chainId.toString(),
                                fromTokenAddress: fromTokenAddr,
                                fromAddress: wallet.address,
                                fromAmount: fromAmount,
                                toChainId: chainId.toString(),
                                toTokenAddress: toTokenAddr,
                                toAddress: wallet.address,
                                swapScene: "MarketTool",
                                gasFeeLevel: param.gasFeeLevel.toString(),
                                slippage: "0.05",
                                priorityFee: "0",
                                walletType: 4
                            }
                        )
                        if (data.result) {
                            if (data.result.egats == 3 || data.result.egats == 4) {
                                // tmpKeys.push(keys[i])
                                const beforeBalance = await getEVMTokenBalance(toTokenAddr, wallet, provider)
                                const txResponse = await wallet.sendTransaction({
                                    from: data.result.encodeData.from,
                                    to: data.result.encodeData.to,
                                    data: data.result.encodeData.data,
                                    value: data.result.encodeData.value
                                });
                                if (data.result.egats == 4) {
                                    const receipt = await txResponse.wait();
                                    if (receipt?.status == 1) {
                                        const afterBalance = await getEVMTokenBalance(toTokenAddr, wallet, provider)
                                        const diff = (Number(afterBalance) - Number(beforeBalance)).toString()

                                        const gas = formatEther(receipt.gasUsed * receipt.gasPrice)
                                        addSwapInfo((prevItems: SwapInfo[]) => [...prevItems, {
                                            time: moment().format(),
                                            wallet: data.result.encodeData.from,
                                            hash: receipt.hash,
                                            type: param.buyOrSell ? 'BUY' : 'SELL',
                                            from: fromAmount,
                                            to: diff,
                                            status: 'SUCCESS',
                                            tradefee: data.result.lossRate,
                                            gasfee: gas,
                                        }])
                                        await saveApi(
                                            {
                                                dexId: data.result.dexId,
                                                fromChainId: chainId.toString(),
                                                fromTokenAddress: fromTokenAddr,
                                                fromAddress: data.result.encodeData.from,
                                                fromAmount: fromAmount,
                                                toChainId: chainId.toString(),
                                                toTokenAddress: toTokenAddr,
                                                toAddress: data.result.encodeData.from,
                                                toTokenAmountExpected: data.result.toTokenAmountExpected,
                                                toTokenAmount: diff,
                                                gas: gas,
                                                swapScene: "MarketTool",
                                                gasFeeLevel: param.gasFeeLevel.toString(),
                                                slippage: '0.05',
                                                txHash: receipt.hash,
                                                status: 1,
                                                walletType: 4
                                            }
                                        )

                                    }
                                }

                            }
                        }

                    } catch (err) {

                    } finally {

                    }
                }

            }
            keys = tmpKeys
            length = keys.length
        }
    }

    return doSwap


}