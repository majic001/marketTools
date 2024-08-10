// app/providers.tsx
'use client';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import i18n from './i18n'; // 导入配置好的 i18n 实例
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
};

const theme = extendTheme({ config });
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme} i18n={i18n}>
      {children}
    </ChakraProvider>
  );
}
