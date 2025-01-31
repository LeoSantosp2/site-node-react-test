'use client';

import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';

import { theme } from '../styles/theme';
import { GlobalStyles } from '../styles/global-styles';

import { ProviderProps } from '../types/provider-props';

export default function Providers({ children }: ProviderProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ToastContainer style={{ fontSize: 16 }} />

      {children}
    </ThemeProvider>
  );
}
