import { TriangleDownIcon } from '@chakra-ui/icons';
import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import Image from 'next/image';
import { useContext, useMemo } from 'react';
import { CurrentNetWrokIdContext, NetWrokChooseContext } from '../chainContext';
import { initialNetwroks } from '../tools/InitialDatas'
// import LoGoIconUSDT from '../../static/svg/logo/USDT.svg';

export default function MySelect() {
  const chooseNetwork = useContext(NetWrokChooseContext)
  const currentNetworkId = useContext(CurrentNetWrokIdContext)
  const currentNetwork = useMemo(() => {
    const network = initialNetwroks.find(value => value.chainId == currentNetworkId)
    return <Flex alignItems="center" w="full">
      <Image src={require(`../../static/svg/chain/${network?.name}.svg`).default} alt="" /> <Text pl={2}>{network?.name}</Text>
    </Flex>
  }, [currentNetworkId])
  const menuItems = initialNetwroks.map((network, key) => {
    return <MenuItem onClick={() => { chooseNetwork(network.chainId) }} key={key}>
      <Image src={require(`../../static/svg/chain/${network?.name}.svg`).default} alt="" /> <Text pl={2}>{network.name}</Text>
    </MenuItem>
  })
  return (
    <Menu>
      <MenuButton
        as={Button}
        bg="#222"
        h="45px"
        w="full"
        borderRadius="12px"
        color="#fff"
        rightIcon={<TriangleDownIcon boxSize={3} />}
      >
        {currentNetwork}
      </MenuButton>
      <MenuList bg="#222">
        {menuItems}
      </MenuList>
    </Menu>
  );
}
