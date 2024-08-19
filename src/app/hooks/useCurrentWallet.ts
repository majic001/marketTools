import { useContext, useEffect, useState } from 'react';
import { CurrentNetWrokIdContext, PrivateKeysContext } from '../chainContext';
import { JsonRpcProvider, Wallet } from 'ethers';
import { initialNetwroks } from '../tools/InitialDatas'
import { IWallet } from '../interfaces';


export default function useCurrentWallet() {
    const chainId = useContext(CurrentNetWrokIdContext)
    const privateKeys = useContext(PrivateKeysContext)
    const [start, setStart] = useState(0)
    const [end, setEnd] = useState(10)
    const [wallets, setWallets] = useState<IWallet[]>([])

    const back = () => {
        setStart(start => start > 10 ? start - 10 : 0)
        setEnd(end => end > 10 ? end - 10 : 10)
    }
    const next = () => {
        if (privateKeys) {
            const allKeys = privateKeys.split(',')
            if (allKeys.length > 10) {
                setStart(start => start + 10 < allKeys.length ? start + 10 : start)
                setEnd(end => end + 10 < allKeys.length ? end + 10 : allKeys.length)
            }
        }

    }
    useEffect(() => {
        if (privateKeys) {
            const allKeys = privateKeys.split(',')
            const network = initialNetwroks.find(value => value.chainId == chainId)
            const provider = new JsonRpcProvider(network?.redRpcUrl)
            if (allKeys.length > 0) {
                const keys = allKeys.slice(start, end > allKeys.length ? allKeys.length : end)
                const tmpWallets = keys.map(item => {
                    const wallet = new Wallet(item, provider)
                    return {
                        account: wallet.address,
                        fromBalance: 0,
                        toBalance: 0,
                    }
                })
                setWallets(tmpWallets)
            }
        }


    }, [chainId, privateKeys, start, end])


    return [wallets, back, next]

}