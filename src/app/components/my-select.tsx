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
import LoGoIconETH from '../../static/svg/logo/ETH.svg';
import LoGoIconUSDT from '../../static/svg/logo/USDT.svg';
export default function MySelect() {
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
        <Flex alignItems="center" w="full">
          <Image src={LoGoIconETH} alt="" /> <Text pl={2}>Ethereum</Text>
        </Flex>
      </MenuButton>
      <MenuList bg="#222">
        <MenuItem>
          <Image src={LoGoIconETH} alt="" /> <Text pl={2}>Ethereum</Text>
        </MenuItem>
        <MenuItem>
          <Image src={LoGoIconUSDT} alt="" /> <Text pl={2}>USDT</Text>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
