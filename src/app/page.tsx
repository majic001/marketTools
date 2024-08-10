// app/page.tsx
'use client';
import { Button, Flex, Stack, useColorMode, useToast } from '@chakra-ui/react';
import MyTable from './components/my-table';
import styles from './page.module.css';
import MyPagesForm from './pages/pages-form';
import MyPagesHeader from './pages/pages-header';
export default function Page() {
  const { colorMode, toggleColorMode } = useColorMode();
  const toast = useToast();
  return (
    <div className={styles?.page}>
      <Stack spacing={4} direction="row" align="center">
        <Button onClick={toggleColorMode}>
          主题模式 {colorMode === 'light' ? 'Dark' : 'Light'}
        </Button>
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
        <Flex
          w="1460px"
          gap="2"
          flexWrap="wrap"
          style={{ position: 'relative' }}
        >
          <MyPagesHeader />
          <Flex gap="7" w="full">
            <Flex
              w="465px"
              border="2px dashed #AD5CFF"
              borderRadius="12px"
              p="4"
              bg="rgba(9, 9, 9, 0.7)"
              minH={700}
            >
              <MyPagesForm />
            </Flex>
            <Flex
              flex="1"
              border="2px dashed #AD5CFF"
              borderRadius="12px"
              bg="rgba(9, 9, 9, 0.7)"
              p="4"
              flexWrap="wrap"
              minH={700}
            >
              <MyTable />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
}
