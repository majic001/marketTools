// app/providers.tsx
'use client';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
};

const theme = extendTheme({ config });
export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
