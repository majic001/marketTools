import { Flex } from '@chakra-ui/react';
import MyInput from '../components/my-input';
import MyPrimaryButton from '../components/my-primary-button';
import MyRadio from '../components/my-radio';
import MySelect from '../components/my-select';
import MyTopBottomValue from '../components/my-top-bottom-value';
import { AgreementEnum, PlaceOrderEnum, SpeedEnum, TypeEnum } from './modal';

export default function PagesForm() {
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
      <MyTopBottomValue />
      <Flex w="full" gap={5} pt={4}>
        <Flex w="50%">
          <MyInput addonBefore="$" label="当前价格" />
        </Flex>
        <Flex w="50%">
          <MyInput addonBefore="$" label="目标价格" />
        </Flex>
      </Flex>
      <Flex w="full" gap={5} pt={4} alignItems="flex-end">
        <Flex w="50%">
          <MyRadio label="每次下单金额" items={PlaceOrderEnum} value={1} />
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
          <MyRadio label="速度" items={SpeedEnum} value={1} />
        </Flex>
        <Flex w="50%">
          <MyRadio label="协议" items={AgreementEnum} value={1} />
        </Flex>
      </Flex>
      <Flex pt={4}>
        <MyPrimaryButton bg="#FFB119" label="开始" size="lg" />
      </Flex>
    </div>
  );
}
