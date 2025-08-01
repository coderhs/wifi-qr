'use client';

import {
  Box,
  Text,
  Group,
  Card,
  ActionIcon,
  Paper
} from '@mantine/core';
import { useEffect, useRef, useState } from 'react';
import { IconTrash, IconDownload, IconPrinter } from '@tabler/icons-react';

type WifiEntry = {
  id: string;
  ssid: string;
  qr: string; // QR code as data URL (from qrcode library)
  createdAt: string;
};

const STORAGE_KEY = 'wifi-qr-history';

export default function HistoryPage() {
  const [entries, setEntries] = useState<WifiEntry[]>([]);
  const printRefs = useRef<Record<string, HTMLDivElement | null>>({});

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

  const downloadQRCode = (entry: WifiEntry) => {
    const link = document.createElement('a');
    link.href = entry.qr;
    link.download = `${entry.ssid}-wifi-qr.png`;
    link.click();
  };

  const handlePrint = (id: string) => {
    const content = printRefs.current[id];
    if (!content) return;

    const printWindow = window.open('', '', 'width=600,height=800');
    if (!printWindow) return;

    printWindow.document.write(`
      <html>
        <head>
          <title>Print QR</title>
        </head>
        <body>${content.innerHTML}</body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    printWindow.close();
  };


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
            <Box id={`print-${entry.id}`}>
              <Paper
                p="sm"
                withBorder
                style={{ width: 140, textAlign: 'center', backgroundColor: 'white' }}
              >
                <img
                  src={entry.qr}
                  alt={`QR code for ${entry.ssid}`}
                  style={{ width: '100%' }}
                />
                <Text size="xs" mt="xs">
                  SSID: <strong>{entry.ssid}</strong>
                </Text>
                <Text size="xs" c="dimmed">
                  Scan to connect
                </Text>
              </Paper>
            </Box>


            <ActionIcon onClick={() => deleteEntry(entry.id)} color="red" variant="subtle">
              <IconTrash size={20} />
            </ActionIcon>
            <ActionIcon onClick={() => downloadQRCode(entry)} color="red" variant="subtle">
              <IconDownload size={20} />
            </ActionIcon>
          </Group>
        </Card>
      ))}
      </>
  );
}
