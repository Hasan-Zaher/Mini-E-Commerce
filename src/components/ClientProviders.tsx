'use client';

import { ThemeProvider, CssBaseline } from '@mui/material';
import { NextIntlClientProvider } from 'next-intl';
import { Providers } from '@/redux/Providers';
import theme from '@/lib/theme';

type Props = {
  children: React.ReactNode;
  locale: string;
  messages: any;
};

export default function ClientProviders({ children, locale, messages }: Props) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <ThemeProvider theme={theme}  >
        <CssBaseline />
        <Providers>
          {children}
        </Providers>
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
