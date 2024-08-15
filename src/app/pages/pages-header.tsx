import { Flex, Text, useColorModeValue } from '@chakra-ui/react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

import HeadImg from '../../static/images/newHeadBg.png';
import MyDeleteButton from '../components/my-delete-button';
import MyLngSelect from '../components/my-lng-select';
import MyWalletButton from '../components/my-wallet-button';
import MyImportWallet from './modal/ImportWallet';
export default function PagesHeader() {
  const { t } = useTranslation();
  const color = useColorModeValue('#000', '#fff');
  return (
    <>
      <Image
        src={HeadImg}
        style={{
          position: 'absolute',
          right: '-50px',
          height: '271px',
          width: 'auto',
        }}
      />
      <Flex flexWrap="wrap" h="265px">
        <Flex w="100%" fontSize="4xl" color="#FFB119" alignItems="top">
          <Flex flex="1">{t('welcome')}</Flex>
          <Flex>
            <MyLngSelect />
          </Flex>
        </Flex>
        <Flex w="100%" flexWrap="wrap">
          <Flex w="full">
            <Text w="797px" fontSize="1rem" color={color}>
              {t('headDes')}
            </Text>
          </Flex>
          <Flex gap={8}>
            <MyImportWallet />
            <MyWalletButton />
            <MyDeleteButton />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
