import { TriangleDownIcon } from '@chakra-ui/icons';
import { Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { initialTokenMaps } from '../tools/InitialDatas'
import { useContext, useMemo } from 'react';
import { CurrentNetWrokIdContext, FromTokenContext, ToTokenContext } from '../chainContext';
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
  const chainId = useContext(CurrentNetWrokIdContext)
  const fromTokenAddr = useContext(FromTokenContext)
  const toTokenAddr = useContext(ToTokenContext)
  const token = useMemo(() => {
    const tokenMap = initialTokenMaps.find(token => token.chainId == chainId)
    if (tokenMap) {
      if (props.isBase) {
        return tokenMap.tokens.find(item => item.address === fromTokenAddr)
      } else {
        return tokenMap.tokens.find(item => item.address === toTokenAddr)
      }
    } else {
      return undefined
    }

  }, [chainId, fromTokenAddr, toTokenAddr])

  return (
    <Flex
      css={styles}
      px={4}
      mt={props?.mt || 0}
      onClick={() => props?.onClick?.()}
    >
      <Flex alignItems="center">
        <Image src={require(`../../static/svg/token/${token?.name ?? 'USDT'}.svg`).default} style={{ width: '38px' }} alt="" />
        <Text px={3} color="#fff">
          {token?.name}
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
