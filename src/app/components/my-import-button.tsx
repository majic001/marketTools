import { Flex } from '@chakra-ui/react';
import Image from 'next/image';
import ImportBtnImg from '../../static/svg/importBtn.svg';
const styles = {
  btn: {
    cursor: 'pointer',
  },
};

export default function MyImportButton() {
  return (
    <Flex style={styles?.btn}>
      <Image src={ImportBtnImg} alt="" />
    </Flex>
  );
}
