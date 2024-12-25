'use client';

import { ThemeProvider } from 'styled-components';

import { theme } from '../styles/theme';
import { GlobalStyles } from '../styles/global-styles';

import { ProviderProps } from '../types/provider-props';

export default function Providers({ children }: ProviderProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      {children}
    </ThemeProvider>
  );
}
