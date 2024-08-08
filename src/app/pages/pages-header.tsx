import { Flex, Text, useColorModeValue } from '@chakra-ui/react';
import Image from 'next/image';
import HeadImg from '../../static/images/newHeadBg.png';
import MyDeleteButton from '../components/my-delete-button';
import MyImportButton from '../components/my-import-button';
import MyWalletButton from '../components/my-wallet-button';
export default function PagesHeader() {
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
        alt=""
      />
      <Flex flexWrap="wrap" h="265px">
        <Flex w="100%" fontSize="4xl" color="#FFB119">
          市值管理工具
        </Flex>
        <Flex w="100%" flexWrap="wrap">
          <Flex w="full">
            <Text w="797px" fontSize="1rem" color={color}>
              City Canvas commemorates several major upgrades that have
              significantly impacted the Ethereum ecosystem. The names of these
              cities also symbolize the flourishing development of decentralized
              technology and community.
            </Text>
          </Flex>
          <Flex gap={8}>
            <MyImportButton />
            <MyWalletButton />
            <MyDeleteButton />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
