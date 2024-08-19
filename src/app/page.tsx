// app/page.tsx
'use client';
import { Button, Flex, Stack, useToast } from '@chakra-ui/react';
import { WalletTypeEnum } from './components/modal';
import MyRadio from './components/my-radio';

import { useState } from 'react';
import styles from './page.module.css';
import MyPagesForm from './pages/pages-form';
import MyPagesHeader from './pages/pages-header';
import MyRransactionTable from './pages/transaction-table';
import MyWalletTable from './pages/wallet-table';
import './i18n'; // 导入配置好的 i18n 实例

export default function Page() {
  // const { colorMode, toggleColorMode } = useColorMode();
  const toast = useToast();
  const [getTableType, setTableType] = useState('transaction');
  return (
    <div className={styles?.body}>
      <div className={styles?.page}>
        <Stack spacing={4} direction="row" align="center">
          <Button
            onClick={() =>
              toast({
                title: '提示',
                description: '我是一个正常提示',
                duration: 2000,
                variant: 'left-accent',
                position: 'top-right',
              })
            }
          >
            提示
          </Button>
        </Stack>
        <Flex alignItems="center" pt={3} justifyContent="center">
          <Flex
            w={{ base: 'full', sm: 'full', md: '1200px', lg: '1400px' }}
            gap="2"
            flexWrap={{ base: 'revert', sm: 'revert', md: 'wrap' }}
            position="relative"
          >
            <MyPagesHeader />
            <Flex>
              <Flex
                className={styles?.box_item}
                w={{ base: 'full', sm: 'full', md: '400px', lg: '440px' }}
                minH={700}
              >
                <MyPagesForm />
              </Flex>
              <Flex
                className={styles?.box_item}
                w={{ base: 'full', sm: 'full', md: '800px', lg: '960px' }}
                wrap="wrap"
                minH={700}
                ml="20px"
                direction="column"
              >
                <Flex pb="4" w="full">
                  <MyRadio
                    items={WalletTypeEnum}
                    value={getTableType}
                    onChange={setTableType}
                  />
                </Flex>
                {getTableType === 'transaction' ? (
                  <MyRransactionTable />
                ) : (
                  <MyWalletTable />
                )}
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </div>
    </div>
  );
}
