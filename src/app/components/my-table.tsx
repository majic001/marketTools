import {
  Flex,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import Image from 'next/image';
import LinkIcon from '../../static/svg/link-icon.svg';
import LoGoIconETH from '../../static/svg/logo/ETH.svg';
import LoGoIconUSDT from '../../static/svg/logo/USDT.svg';
import MyPagination from './my-pagination';
import MyTag from './my-tag';

export default function MyTable() {
  return (
    <TableContainer w="full">
      <Table variant="simple">
        <TableCaption>
          <MyPagination />
        </TableCaption>
        <Thead bg="#222">
          <Tr>
            <Th>WALLET</Th>
            <Th>HASH</Th>
            <Th>FROM</Th>
            <Th>TO</Th>
            <Th>STATUS</Th>
            <Th>GASFEE</Th>
          </Tr>
        </Thead>
        <Tbody>
          {[1, 2, 3, 4, 5].map((i) => {
            return (
              <Tr color="#BABABA" key={i}>
                <Td>
                  <Flex>
                    <Text pr={1}>0xdA....31ec7</Text>
                    <Image src={LinkIcon} alt="" />
                  </Flex>
                </Td>
                <Td>0xdA....31ec7</Td>
                <Td>
                  <Flex>
                    <Image src={LinkIcon} alt="" />
                    <Image
                      src={LoGoIconETH}
                      alt=""
                      style={{ margin: '0 5px' }}
                    />
                    <Text>0.01 ETH</Text>
                  </Flex>
                </Td>
                <Td>
                  <Flex>
                    <Image src={LoGoIconUSDT} alt="" />
                    <Text pl={1}>35.23 USDT</Text>
                  </Flex>
                </Td>
                <Td>
                  <MyTag label="SUCCESS" />
                </Td>
                <Td>
                  <Flex fontSize="14px">0.0023 ETH</Flex>
                  <Flex fontSize="12px" color="#7C7C7C">
                    ≈ $1.38
                  </Flex>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
