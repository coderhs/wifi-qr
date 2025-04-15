'use client';

import {
  Box,
  Text,
  Group,
  Card,
  ActionIcon,
} from '@mantine/core';
import { useEffect, useState } from 'react';
import { IconTrash } from '@tabler/icons-react';

type WifiEntry = {
  id: string;
  ssid: string;
  qr: string; // QR code as data URL (from qrcode library)
  createdAt: string;
};

const STORAGE_KEY = 'wifi-qr-history';

export default function HistoryPage() {
  const [entries, setEntries] = useState<WifiEntry[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setEntries(JSON.parse(saved));
    }
  }, []);

  const deleteEntry = (id: string) => {
    const filtered = entries.filter((e) => e.id !== id);
    setEntries(filtered);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
  };

  if (entries.length === 0) {
    return (
      <Text mt="sm">No saved QR codes yet.</Text>
    );
  }

  return (
    <>
    {entries
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .map((entry) => (
        <Card withBorder key={entry.id} p="md">
          <Group justify="space-between" align="center" wrap="nowrap">
            <Box style={{ flex: 1 }}>
              <Text fw={500}>{entry.ssid}</Text>
            </Box>
            <Box style={{ width: 80 }}>
              <img src={entry.qr} alt={`QR for ${entry.ssid}`} style={{ width: '100%' }} />
            </Box>
            <ActionIcon onClick={() => deleteEntry(entry.id)} color="red" variant="subtle">
              <IconTrash size={20} />
            </ActionIcon>
          </Group>
        </Card>
      ))}
      </>
  );
}
