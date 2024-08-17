import { Flex } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import {
  AgreementEnum,
  PlaceOrderEnum,
  SpeedEnum,
  TypeEnum,
} from '../components/modal';
import MyInput from '../components/my-input';
import MyPrimaryButton from '../components/my-primary-button';
import MyRadio from '../components/my-radio';
import MySelect from '../components/my-select';
import MySelectBi from './modal/SelectBi';

export default function PagesForm() {
  const { t } = useTranslation();
  return (
    <div style={{ width: '100%' }}>
      <Flex w="full" h="54px" gap={5}>
        <Flex w="55%" h="54px">
          <MySelect />
        </Flex>
        <Flex w="45%" h="54px">
          <MyRadio items={TypeEnum} value={2} />
        </Flex>
      </Flex>
      <MySelectBi mt={2} label={t('basicToken')} />
      <MySelectBi mt={4} label={t('targetToken')} />
      <Flex w="full" gap={5} pt={4}>
        <Flex w="50%">
          <MyInput addonBefore="$" label={t('currentPrice')} />
        </Flex>
        <Flex w="50%">
          <MyInput addonBefore="$" label={t('targetPrice')} />
        </Flex>
      </Flex>
      <Flex w="full" gap={5} pt={4} alignItems="flex-end">
        <Flex w="50%">
          <MyRadio
            label={t('eachOrderAmount')}
            items={PlaceOrderEnum}
            value={1}
          />
        </Flex>
        <Flex w="50%" gap={1}>
          <MyInput addonBefore="$" />
          <MyInput addonBefore="$" />
          <MyInput addonBefore="±" />
        </Flex>
      </Flex>
      <Flex w="full" pt={4}>
        <MyInput label="自定义RPC" />
      </Flex>
      <Flex w="full" pt={4} gap={5}>
        <Flex w="50%">
          <MyRadio label={t('speed')} items={SpeedEnum} value={1} />
        </Flex>
        <Flex w="50%">
          <MyRadio label={t('agreement')} items={AgreementEnum} value={1} />
        </Flex>
      </Flex>
      <Flex pt={4}>
        <MyPrimaryButton bg="#FFB119" label={t('submit.btn.start')} size="lg" />
      </Flex>
    </div>
  );
}
