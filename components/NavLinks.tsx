'use client';

import { Button, ActionIcon, Stack, Badge } from '@mantine/core';
import { IconSun, IconMoonStars, IconBrandProducthunt } from '@tabler/icons-react';
import Link from 'next/link';
import { useMantineColorScheme } from '@mantine/core';

// Easy to update vote count - just change this number
const PRODUCT_HUNT_VOTES = 7; // Update this when you know the vote count

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
        component={Link}
        href="https://hsps.in"
        target="_blank"
        rel="noopener noreferrer"
        mb="sm"
      >
        hsps.in
      </Button>
      <Button
        fullWidth={fullWidth}
        variant="outline"
        color="orange"
        component={Link}
        href="https://www.producthunt.com/products/wifi-qr-code-generator-2/launches"
        target="_blank"
        rel="noopener noreferrer"
        leftSection={<IconBrandProducthunt size={16} />}
        rightSection={
          PRODUCT_HUNT_VOTES > 0 ? (
            <Badge size="sm" color="orange" variant="filled">
              {PRODUCT_HUNT_VOTES}
            </Badge>
          ) : null
        }
        mb="sm"
      >
        Product Hunt
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
