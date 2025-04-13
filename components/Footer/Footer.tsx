import { IconBrandMastodon } from '@tabler/icons-react';
import { ActionIcon, Container, Group, Box } from '@mantine/core';
import classes from './Footer.module.css';
import Logo from '@/components/Logo';
import Link from 'next/link';

export function Footer() {
  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Logo />
        <Group gap={0} className={classes.links} justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" color="gray" variant="subtle">
            <Link href="https://ruby.social/@coderhs">
              <IconBrandMastodon size={18} stroke={1.5} />
            </Link>
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
}
