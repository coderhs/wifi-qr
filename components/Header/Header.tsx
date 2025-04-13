'use client';

import { useState } from 'react';
import { Burger, Container, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './Header.module.css';
import { Button, Box } from '@mantine/core';
import Logo from '@/components/Logo';


export function Header() {
  const [opened, { toggle }] = useDisclosure(false);

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
        </Group>
        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}
