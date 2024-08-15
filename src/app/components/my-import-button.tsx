import { Flex } from '@chakra-ui/react';
import Image from 'next/image';
import ImportBtnImg from '../../static/svg/importBtn.svg';
const styles = {
  btn: {
    cursor: 'pointer',
  },
};

export default function MyImportButton(props: any) {
  return (
    <Flex style={styles?.btn} onClick={() => props?.onClick?.()}>
      <Image src={ImportBtnImg} alt="" />
    </Flex>
  );
}
