import { TriangleDownIcon } from '@chakra-ui/icons';
import { Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import LoGoIconETH from '../../static/svg/logo/ETH.svg';
import LoGoIconUSDT from '../../static/svg/logo/USDT.svg';
const styles = {
  backgroundColor: '#222',
  height: '75px',
  width: '100%',
  borderRadius: '12px',
  justifyContent: 'space-between',
  alignItems: 'center',
  cursor: 'pointer',
};

export default function MyTopBottomValue() {
  return (
    <Flex style={{ position: 'relative' }} flexWrap="wrap" w="full" my={2}>
      <Flex style={styles} px={4}>
        <Flex alignItems="center">
          <Image src={LoGoIconETH} style={{ width: '38px' }} alt="" />
          <Text px={3}>ETH</Text>
        </Flex>
        <Flex alignItems="center">
          <Text pr={3} fontSize="14px">
            基础代币
          </Text>
          <TriangleDownIcon boxSize={4} />
        </Flex>
      </Flex>
      <Flex mt={4} style={styles} px={4}>
        <Flex alignItems="center">
          <Image src={LoGoIconUSDT} style={{ width: '38px' }} alt="" />
          <Text px={3}>ETH</Text>
        </Flex>
        <Flex alignItems="center">
          <Text pr={3} fontSize="14px">
            目标代币
          </Text>
          <TriangleDownIcon boxSize={4} />
        </Flex>
      </Flex>
    </Flex>
  );
}
