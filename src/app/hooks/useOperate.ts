import { useCallback } from 'react';

import { SwapParm } from '../interfaces';
import useEVMSwap from './useEVMSwap';


export default function useOperate() {

    const doSwap = useEVMSwap()

    const doOperate = useCallback(async (param: SwapParm) => {
        await doSwap(param)
    }, [])

    return doOperate
}