import { Flex } from '@chakra-ui/react';
import Image from 'next/image';
import WalletBtnImg from '../../static/svg/walletBtn.svg';
const styles = {
  btn: {
    cursor: 'pointer',
  },
};

export default function MyWalletButton() {
  return (
    <Flex style={styles?.btn}>
      <Image src={WalletBtnImg} alt="" />
    </Flex>
  );
}
