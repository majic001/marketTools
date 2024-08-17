import { TriangleDownIcon } from '@chakra-ui/icons';
import { Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import LoGoIconETH from '../../static/svg/logo/ETH.svg';
const styles = {
  backgroundColor: '#222',
  height: '75px',
  width: '100%',
  borderRadius: '12px',
  justifyContent: 'space-between',
  alignItems: 'center',
  cursor: 'pointer',
};

export default function MyTopBottomValue(props: any) {
  return (
    <Flex
      style={styles}
      px={4}
      mt={props?.mt || 0}
      onClick={() => props?.onClick?.()}
    >
      <Flex alignItems="center">
        <Image src={LoGoIconETH} style={{ width: '38px' }} alt="" />
        <Text px={3} color="#fff">
          ETH
        </Text>
      </Flex>
      <Flex alignItems="center">
        <Text pr={3} fontSize="14px" color="#fff">
          {props?.label || '基础代币'}
        </Text>
        <TriangleDownIcon boxSize={4} color="#fff" />
      </Flex>
    </Flex>
  );
}
