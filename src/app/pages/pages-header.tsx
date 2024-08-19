/* eslint-disable jsx-a11y/alt-text */
import { Flex, Text, useColorModeValue } from '@chakra-ui/react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import HeadImg from '../../static/images/newHeadBg.png';
import MyDeleteButton from '../components/my-delete-button';
import MyLngSelect from '../components/my-lng-select';
import MyImportWallet from './modal/ImportWallet';
import styles from './pages.module.css';

export default function PagesHeader() {
  const { t } = useTranslation();
  const color = useColorModeValue('#000', '#fff');
  return (
    <>
      <Image src={HeadImg} className={styles.header} alt="header" />
      <Flex w="full" flexWrap="wrap" h="265px" direction="column">
        <Flex w="full" alignItems="top" justifyContent="">
          <Flex flex="1" fontSize="4xl" color="#FFB119">
            {t('welcome')}
          </Flex>
          <Flex>
            <MyLngSelect />
          </Flex>
        </Flex>
        <Flex w="full" flexWrap="wrap" pt={6}>
          <Flex w="full">
            <Text w="797px" fontSize="1rem" color={color}>
              {t('headDes')}
            </Text>
          </Flex>
          <Flex gap={8} pt={8}>
            <MyImportWallet />
            <MyDeleteButton />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
