// app/providers.tsx
'use client';
import { ChakraProvider } from '@chakra-ui/react';
import { AddSwapInfosContext, CurrentNetWrokIdContext, FromTokenChooseContext, FromTokenContext, NetWrokChooseContext, PrivateKeysContext, SetPrivateKeysContext, SwapInfosContext, ToTokenChooseContext, ToTokenContext, } from './chainContext';
import { useEffect, useMemo, useState } from 'react';
import { initialTokenMaps } from './tools/InitialDatas'
import useOperate from './hooks/useOperate';
import { SwapInfo } from './interfaces';



export function Providers({ children }: { children: React.ReactNode }) {
  const [chainId, setChainId] = useState(1)
  const tokens = initialTokenMaps.find(token => token.chainId == chainId)
  const [privateKeys, setPrivateKeys] = useState('')
  const [fromTokenAddr, setFromTokenAddr] = useState(tokens?.tokens[0].address ?? '')
  const [toTokenAddr, setToTokenAddrr] = useState(tokens?.tokens[1].address ?? '')

  const [swapInfos, setSwapInfos] = useState<SwapInfo[]>([])
  useEffect(() => {
    const data = localStorage.getItem('swapInfos');
    if (data) {
      setSwapInfos(JSON.parse(data));
    }
  }, [])
  useEffect(() => {
    localStorage.setItem('messages', JSON.stringify(swapInfos));
  }, [swapInfos]);

  useEffect(() => {
    console.log(swapInfos.length)
  }, [swapInfos])
  useEffect(() => {
    const tokens = initialTokenMaps.find(token => token.chainId == chainId)
    if (tokens) {
      setFromTokenAddr(tokens.tokens[0].address)
      setToTokenAddrr(tokens.tokens[1].address)
    }
  }, [chainId])

  return (
    <CurrentNetWrokIdContext.Provider value={chainId}>
      <NetWrokChooseContext.Provider value={setChainId}>
        <FromTokenContext.Provider value={fromTokenAddr}>
          <FromTokenChooseContext.Provider value={setFromTokenAddr}>
            <ToTokenContext.Provider value={toTokenAddr}>
              <ToTokenChooseContext.Provider value={setToTokenAddrr}>
                <PrivateKeysContext.Provider value={privateKeys}>
                  <SetPrivateKeysContext.Provider value={setPrivateKeys}>
                    <SwapInfosContext.Provider value={swapInfos}>
                      <AddSwapInfosContext.Provider value={setSwapInfos}>
                        <ChakraProvider>{children}</ChakraProvider>
                      </AddSwapInfosContext.Provider>
                    </SwapInfosContext.Provider>

                  </SetPrivateKeysContext.Provider>
                </PrivateKeysContext.Provider>
              </ToTokenChooseContext.Provider>
            </ToTokenContext.Provider>
          </FromTokenChooseContext.Provider>
        </FromTokenContext.Provider>
      </NetWrokChooseContext.Provider>
    </CurrentNetWrokIdContext.Provider>

  );
}
