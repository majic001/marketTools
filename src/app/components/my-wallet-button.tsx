import { Flex } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
const styles = {
  btn: {
    cursor: 'pointer',
  },
};

export default function MyWalletButton() {
  return (
    <Flex css={styles?.btn}>
      <Image src={require('../../static/svg/walletBtn.svg')} alt="" />
    </Flex>
  );
}
