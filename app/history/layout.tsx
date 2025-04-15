import { ReactNode } from 'react';
import { Box, Title, Container, Text, Button, Stack, Group } from '@mantine/core';
import Link from 'next/link';

export default function HistoryLayout({ children }: { children: ReactNode }) {
  return (
    <Container size="md">
      <Box p="md">
        <Group justify="space-between" align="center" mb="md">
          <Title order={2}>QR History</Title>
          <Button
            component={Link}
            href="/"
            size="xs"
            radius="xs"
          >
            Back to Home
          </Button>
        </Group>
        <Text size="sm" c="dimmed" mb="md">
          All the QR codes are stored in your browser’s local storage.
        </Text>
        <Stack>
        {children}
        </Stack>
      </Box>
    </Container>
  );
}
