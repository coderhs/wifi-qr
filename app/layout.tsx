import '@mantine/core/styles.css';

import React from 'react';
import { ColorSchemeScript, mantineHtmlProps, MantineProvider } from '@mantine/core';
import { theme } from '../theme';
import { AppShell, Box } from '@mantine/core';


export const metadata = {
  title: 'WIFI QR Code Generator',
  description: 'Generate a QR code to share your wifi with guest!',
};

import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <Box style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />
            <Box style={{ flex: 1 }}>
              {children}
            </Box>
            <Footer />
          </Box>
        </MantineProvider>
      </body>
    </html>
  );
}
