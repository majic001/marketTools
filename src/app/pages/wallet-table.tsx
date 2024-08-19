import { DeleteIcon } from '@chakra-ui/icons';
import { Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import LinkIcon from '../../static/svg/link-icon.svg';
import LoGoIconETH from '../../static/svg/logo/ETH.svg';
import LoGoIconUSDT from '../../static/svg/logo/USDT.svg';
import MyTable from '../components/my-table';
import { useContext } from 'react';
import { PrivateKeysContext } from '../chainContext';
import useCurrentWallet from '../hooks/useCurrentWallet';
import { maskMiddle } from '../tools';

export default function WalletTable() {
  const { t } = useTranslation();
  const [wallets] = useCurrentWallet()

  const columns = [
    {
      title: t('walletTable.td2'),
      dataIndex: 'account',
      key: 'account',
      render: (e: any) => {
        return (
          <Flex>
            <Text pr={1}>{maskMiddle(e?.account)}</Text>
            <Image src={LinkIcon} alt="" />
          </Flex>
        );
      },
    },
    {
      title: t('walletTable.td3'),
      dataIndex: 'fromBalance',
      key: 'fromBalance',
      render: (e: any) => {
        return (
          <Flex>
            <Image src={LoGoIconETH} alt="" />
            <Text pl={2}>{e?.fromBalance}</Text>
          </Flex>
        );
      },
    },
    {
      title: t('walletTable.td4'),
      dataIndex: 'toBalance',
      key: 'toBalance',
      render: (e: any) => {
        return (
          <Flex>
            <Image src={LoGoIconUSDT} alt="" />
            <Text pl={2}>{e?.toBalance}</Text>
          </Flex>
        );
      },
    }
  ];

  return <MyTable columns={columns} dataSource={wallets} />;
}
