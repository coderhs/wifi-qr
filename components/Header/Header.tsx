'use client';

import { ActionIcon, Burger, Container, Group, useMantineColorScheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './Header.module.css';
import { Button, Box } from '@mantine/core';
import Logo from '@/components/Logo';
import { IconSun, IconMoonStars } from '@tabler/icons-react';


export function Header() {
  const [opened, { toggle }] = useDisclosure(false);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  const dark = colorScheme === 'dark';

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Logo />
        <Group gap={5} visibleFrom="xs">
          <Button
            variant="outline" size="xs" radius="xs"
            component="a"
            href="https://hsps.in"
            target="_blank"
            rel="noopener noreferrer"
          >
            hsps.in
          </Button>
          <Button
            variant="outline" color="gray" size="xs" radius="xs"
            component="a"
            href="https://github.com/coderhs/wifi-qr"
            target="_blank"
            rel="noopener"
          >
            Github
          </Button>
          <ActionIcon
            onClick={() => toggleColorScheme()}
            variant="subtle"
            color={dark ? 'yellow' : 'blue'}
            size="lg"
            aria-label="Toggle color scheme"
          >
            {dark ? <IconSun size={20} /> : <IconMoonStars size={20} />}
          </ActionIcon>
        </Group>
        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}
