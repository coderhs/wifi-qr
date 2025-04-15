'use client';

import { Burger, Container, Group, Drawer } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './Header.module.css';
import Logo from '@/components/Logo';
import NavLinks from '../NavLinks';



export function Header() {
  const [opened, { toggle, close }] = useDisclosure(false);

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Logo />
        <Group gap={5} visibleFrom="xs">
          <NavLinks />
        </Group>
        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />

        <Drawer
          opened={opened}
          onClose={close}
          title="Menu"
          padding="md"
          size="xs"
          hiddenFrom="xs"
          zIndex={1000}
        >
          <NavLinks fullWidth />
        </Drawer>
      </Container>
    </header>
  );
}
