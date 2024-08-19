import { createContext } from 'react';
import { SwapInfo } from './interfaces';

export const CurrentNetWrokIdContext = createContext(0);
export const NetWrokChooseContext = createContext((number: number) => { });

export const FromTokenContext = createContext('');
export const FromTokenChooseContext = createContext((number: string) => { });

export const ToTokenContext = createContext('');
export const ToTokenChooseContext = createContext((number: string) => { });

export const PrivateKeysContext = createContext('');
export const SetPrivateKeysContext = createContext((number: string) => { });

export const SwapInfosContext = createContext<SwapInfo[]>([]);
export const AddSwapInfosContext = createContext((data: any) => { });
