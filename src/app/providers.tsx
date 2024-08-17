// app/providers.tsx
'use client';
import { ChakraProvider } from '@chakra-ui/react';
import i18n from './i18n'; // 导入配置好的 i18n 实例

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <div i18n={i18n}>
      <ChakraProvider>{children}</ChakraProvider>
    </div>
  );
}
