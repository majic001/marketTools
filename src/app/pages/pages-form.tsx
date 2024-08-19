import { Button, Flex } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import {
  AgreementEnum,
  PlaceOrderEnum,
  SpeedEnum,
  TypeEnum,
} from '../components/modal';
import MyInput from '../components/my-input';
import MyRadio from '../components/my-radio';
import MySelect from '../components/my-select';
import MySelectBi from './modal/SelectBi';
import styles from './pages.module.css';
import useCurrentPrice from '../hooks/useCurrentPrice'
import { useContext, useEffect, useState } from 'react';
import { FromTokenChooseContext, FromTokenContext, ToTokenChooseContext, ToTokenContext } from '../chainContext';
import useOperate from '../hooks/useOperate';
export default function PagesForm() {
  const { t } = useTranslation();
  const currentPrice = useCurrentPrice()
  const fromTokenAddr = useContext(FromTokenContext)
  const toTokenAddr = useContext(ToTokenContext)
  const fromTokenChange = useContext(FromTokenChooseContext)
  const toTokenChange = useContext(ToTokenChooseContext)
  const [targetPrice, setTargetPrice] = useState(currentPrice)
  const [buyOrSell, setBuyOrSell] = useState(false)
  const [gasFeeLevel, setGasFeeLevel] = useState(2)
  const [place, setPlace] = useState(2)
  const [rpcUrl, setRpcUrl] = useState('')
  const doOperate = useOperate()

  const changeBuyOrSell = (action: boolean) => {
    setBuyOrSell(action)
    const tempToken = fromTokenAddr;
    fromTokenChange(toTokenAddr);
    toTokenChange(tempToken);
  }
  useEffect(() => {
    let price = currentPrice;
    if (buyOrSell) {
      price = price * 1.05
    } else {
      price = price * 0.95
    }
    setTargetPrice(Math.floor(price * 100) / 100)
  }, [currentPrice, buyOrSell])


  return (
    <div className={styles.formWidth}>
      <Flex w="full" h="54px" gap={5}>
        <Flex w="55%" h="54px">
          <MySelect />
        </Flex>
        <Flex w="45%" h="54px">
          <MyRadio items={TypeEnum} value={buyOrSell} lastDo={changeBuyOrSell} />
        </Flex>
      </Flex>
      <MySelectBi mt={2} label={t('basicToken')} isBase={true} />
      <MySelectBi mt={4} label={t('targetToken')} isBase={false} />
      <Flex w="full" gap={5} pt={4}>
        <Flex w="50%">
          <MyInput addonBefore="$" label={t('currentPrice')} value={Math.floor(currentPrice * 100) / 100} isRead={true} />
        </Flex>
        <Flex w="50%">
          <MyInput addonBefore="$" label={t('targetPrice')} value={targetPrice} isRead={false} />
        </Flex>
      </Flex>
      <Flex w="full" gap={5} pt={4} alignItems="flex-end">
        <Flex w="50%">
          <MyRadio
            label={t('eachOrderAmount')}
            items={PlaceOrderEnum}
            value={place}
            lastDo={setPlace}
          />
        </Flex>
        <Flex w="50%" gap={1}>
          <MyInput addonBefore="$" />
          <MyInput addonBefore="$" />
          <MyInput addonBefore="±" />
        </Flex>
      </Flex>
      <Flex w="full" pt={4}>
        <MyInput label={t('customizeRPC')} price={rpcUrl} lastDo={setRpcUrl} />
      </Flex>
      <Flex w="full" pt={4} gap={5}>
        <Flex w="50%">
          <MyRadio label={t('speed')} items={SpeedEnum} value={gasFeeLevel} lastDo={setGasFeeLevel} />
        </Flex>
        <Flex w="50%">
          <MyRadio label={t('agreement')} items={AgreementEnum} value={1} />
        </Flex>
      </Flex>
      <Flex pt={4}>
        <Button w="full" size={'lg'} bg={'#FFB119'} onClick={async () => {
          await doOperate({
            buyOrSell: buyOrSell,
            targetPrice: targetPrice,
            gasFeeLevel: gasFeeLevel,
            rpcUrl: rpcUrl,
            tradePlace: place,
            tradeAmount: 0
          })
        }}>
          {t('submit.btn.start')}
        </Button>

      </Flex>
    </div>
  );
}
