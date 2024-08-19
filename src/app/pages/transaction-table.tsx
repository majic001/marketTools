import { Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import LinkIcon from '../../static/svg/link-icon.svg';
import LoGoIconETH from '../../static/svg/logo/ETH.svg';
import LoGoIconUSDT from '../../static/svg/logo/USDT.svg';
import MyTransactionTable from '../components/my-transaction-table';

export default function MyRransactionTable() {
  const columns = [
    {
      title: 'Time',
      dataIndex: 'time',
      key: 'time',
    },
    {
      title: 'WALLET',
      dataIndex: 'wallet',
      key: 'wallet',
      render: (e: any) => {
        return (
          <Flex>
            <Text pr={1}>{e?.wallet}</Text>
            <Image src={LinkIcon} alt="" />
          </Flex>
        );
      },
    },
    {
      title: 'HASH',
      dataIndex: 'hash',
      key: 'HASH',
      render: (e: any) => {
        return (
          <Flex>
            <Text pr={1}>{e?.hash}</Text>
            <Image src={LinkIcon} alt="" />
          </Flex>
        );
      },
    },
    {
      title: 'TYPE',
      dataIndex: 'type',
      key: 'TYPE',
    },
    {
      title: 'FROM',
      dataIndex: 'from',
      key: 'FROM',
      render: (e: any) => {
        return (
          <Flex>
            <Image src={LoGoIconETH} alt="" />
            <Text pl={2}>{e?.from}</Text>
          </Flex>
        );
      },
    },
    {
      title: 'TO',
      dataIndex: 'to',
      key: 'TO',
      render: (e: any) => {
        return (
          <Flex>
            <Image src={LoGoIconUSDT} alt="" />
            <Text pl={2}>{e?.to}</Text>
          </Flex>
        );
      },
    },
    {
      title: 'STATUS',
      dataIndex: 'status',
      key: 'STATUS',
    },
    {
      title: 'TradeFee',
      dataIndex: 'tradefee',
      key: 'TradeFee',
      render: (e: any) => {
        return (
          <>
            <Flex fontSize="15px">{e?.tradefee} ETH</Flex>
            <Flex fontSize="12px" color="#7C7C7C">
              ≈ $1.38
            </Flex>
          </>
        );
      },
    },
    {
      title: 'GASFEE',
      dataIndex: 'gasfee',
      key: 'GASFEE',
      render: (e: any) => {
        return (
          <>
            <Flex fontSize="15px">{e?.gasfee} ETH</Flex>
            <Flex fontSize="12px" color="#7C7C7C">
              ≈ $1.38
            </Flex>
          </>
        );
      },
    },
  ];
  return <MyTransactionTable columns={columns} isTransaction={true} />;
}
