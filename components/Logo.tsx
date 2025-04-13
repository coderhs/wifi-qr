import { Box } from '@mantine/core';

export default function Logo() {
  return (
    <Box
      style={{
        backgroundImage: 'url(/wifi-qr-logo.png)',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        width: 240,
        height: 80,
      }}
    />
  )
}
