// app/providers.tsx
'use client';
import { ChakraProvider } from '@chakra-ui/react';
import i18n from './i18n'; // 导入配置好的 i18n 实例
interface I18nProviderProps {
  i18n: typeof i18n;
  children: React.ReactNode;
}
const I18nProvider: React.FC<I18nProviderProps> = ({ i18n, children }) => {
  // 在这里处理 i18n 实例
  return <>{children}</>;
};

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <I18nProvider i18n={i18n}>
      <ChakraProvider>{children}</ChakraProvider>
    </I18nProvider>
  );
}
