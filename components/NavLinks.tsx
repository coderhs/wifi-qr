'use client';

import { Button, ActionIcon, Stack } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';
import Link from 'next/link';
import { useMantineColorScheme } from '@mantine/core';

type Props = {
  fullWidth?: boolean; // for Drawer layout
};

export default function NavLinks({ fullWidth = false }: Props) {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  const dark = colorScheme === 'dark';

  return(
    <>
      <Button
        fullWidth={fullWidth}
        color="orange"
        component={Link}
        href="/history"
        variant="outline"
        mb="sm"
      >
        History
      </Button>
      <Button
        fullWidth={fullWidth}
        variant="outline"
        color="gray"
        component={Link}
        href="https://github.com/coderhs/wifi-qr"
        target="_blank"
        rel="noopener"
        mb="sm"
      >
        Github
      </Button>
      <Button
        fullWidth={fullWidth}
        variant="outline"
        component={Link}
        href="https://hsps.in"
        target="_blank"
        rel="noopener noreferrer"
        mb="sm"
      >
        hsps.in
      </Button>
      <ActionIcon
        onClick={toggleColorScheme}
        variant="subtle"
        color={dark ? 'yellow' : 'blue'}
        mb="sm"
        aria-label="Toggle color scheme"
      >
        {dark ? <IconSun size={20} /> : <IconMoonStars size={20} />}
      </ActionIcon>
    </>
  )
}
