import { Flex } from '@chakra-ui/react';
import Image from 'next/image';
import deleteImg from '../../static/svg/deleteBtn.svg';
const styles = {
  btn: {
    cursor: 'pointer',
  },
};

export default function MyDeleteButton() {
  return (
    <Flex css={styles?.btn}>
      <Image src={deleteImg} alt="" />
    </Flex>
  );
}
