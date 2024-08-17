// app/page.tsx
'use client';
import { Button, Flex, Stack, useColorMode, useToast } from '@chakra-ui/react';
import { WalletTypeEnum } from './components/modal';
import MyRadio from './components/my-radio';

import { useState } from 'react';
import styles from './page.module.css';
import MyPagesForm from './pages/pages-form';
import MyPagesHeader from './pages/pages-header';
import MyRransactionTable from './pages/transaction-table';
import MyWalletTable from './pages/wallet-table';
export default function Page() {
  const { colorMode, toggleColorMode } = useColorMode();
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
        <Flex alignItems="center" pt="3rem" justifyContent="center">
          <Flex w="1700px" gap="2" flexWrap="wrap" position="relative">
            <MyPagesHeader />
            <Flex>
              <Flex className={styles?.box_item} w="460px" minH={700}>
                <MyPagesForm />
              </Flex>
              <Flex
                className={styles?.box_item}
                w="1220px"
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
