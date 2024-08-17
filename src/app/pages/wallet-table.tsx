import { DeleteIcon } from '@chakra-ui/icons';
import { Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import LinkIcon from '../../static/svg/link-icon.svg';
import LoGoIconETH from '../../static/svg/logo/ETH.svg';
import LoGoIconUSDT from '../../static/svg/logo/USDT.svg';
import MyTable from '../components/my-table';

export default function WalletTable() {
  const { t } = useTranslation();
  const columns = [
    {
      title: t('walletTable.td1'),
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
      title: t('walletTable.td2'),
      dataIndex: 'networkbalance',
      key: 'NetworkBalance',
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
      title: t('walletTable.td3'),
      dataIndex: 'fromtokenbalance',
      key: 'FromTokenBalance',
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
      title: t('walletTable.td4'),
      dataIndex: 'totokenbalance',
      key: 'ToTokenBalance',
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
      title: t('table.Operate'),
      key: 'operate',
      render: (e: any) => {
        return (
          <Flex>
            <DeleteIcon />
          </Flex>
        );
      },
    },
  ];

  const dataSource = [
    {
      time: '2/12/2024 12:12:12',
      wallet: '0xdA....31ec7',
      hash: '0xdA....31ec7',
      type: 'SELL',
      from: '0.01',
      to: '0.01USDT',
      status: 'SUCCESS',
      tradefee: '0.0001',
      gasfee: '0.000001',
    },
  ];
  return <MyTable columns={columns} dataSource={dataSource} />;
}
