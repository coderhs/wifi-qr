'use client';

import { Box } from '@mantine/core';
import { useMantineColorScheme } from '@mantine/core';

export default function Logo() {
  const { colorScheme } = useMantineColorScheme();

  const logoUrl =
    colorScheme === 'dark' ? '/wifi-qr-white.png' : '/wifi-qr-logo.png';


  return (
    <Box
      style={{
        backgroundImage: `url(${logoUrl})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        width: 240,
        height: 80,
      }}
    />
  )
}
