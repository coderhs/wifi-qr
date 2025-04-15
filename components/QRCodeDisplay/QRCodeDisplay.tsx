
import { useEffect, useRef, useState } from 'react';
import QRCode from 'qrcode';
import { Paper, Center, Box, Title, Text, Group, Button } from '@mantine/core';
import { IconDownload, IconPrinter } from '@tabler/icons-react';


export default function QRCodeDisplay({ data }: { data: any }) {
  const [qrUrl, setQrUrl] = useState<string>('');
  const printRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    if (printRef.current) {
      const printContents = printRef.current.innerHTML;
      const originalContents = document.body.innerHTML;

      document.body.innerHTML = printContents;
      window.print();
      document.body.innerHTML = originalContents;
      window.location.reload(); // re-render your app
    }
  };

  useEffect(() => {
    if (!data.ssid) return;

    let qrData = `WIFI:T:${data.encryption};S:${data.ssid};P:${data.password};`;
    if (data.hidden) qrData += 'H:true;';
    qrData += ';';

    QRCode.toDataURL(qrData, { errorCorrectionLevel: 'H' }).then((url) => {
      const entry = {
        id: crypto.randomUUID(),
        ssid: data.ssid,
        qr: url,
        createdAt: new Date().toISOString(),
      };
      setQrUrl(url);
      const existing = JSON.parse(localStorage.getItem('wifi-qr-history') || '[]');
      localStorage.setItem('wifi-qr-history', JSON.stringify([...existing, entry]));
    });

  }, [data]);

  const downloadQRCode = () => {
    const link = document.createElement('a');
    link.href = qrUrl;
    link.download = `${data.ssid}-wifi-qr.png`;
    link.click();
  };

  if (!data.ssid) return null;

  return (
    <>
      <Box mt="lg" ref={printRef} id="print-card">
        <Paper
          withBorder
          shadow="md"
          p="xl"
          radius="md"
          style={{
            width: 300,
            margin: '0 auto',
            textAlign: 'center',
            backgroundColor: 'white',
          }}
        >
          <Title order={3} mb="md">
            Wi-Fi Access
          </Title>

          <Center>
            <Box
              style={{
                backgroundColor: 'white',
                padding: 8,
                borderRadius: 8,
                border: '1px solid #eee',
              }}
            >
              <img src={qrUrl} alt={`QR code for ${data.ssid}`} style={{ width: 200, height: 200 }} />
            </Box>
          </Center>

          <Text mt="md" fw={500}>
            Wi-Fi SSID: <span style={{ fontWeight: 700 }}>{data.ssid}</span>
          </Text>

          <Text mt="xs" size="sm" c="dimmed">
            Scan the above QR code with your phone to connect to the Wi-Fi.
          </Text>
        </Paper>
      </Box>
      <Group justify="center" mt="md">
        <Button
          onClick={handlePrint}
          variant="outline"
          size="sm"
          leftSection={<IconPrinter size={16} />}
        >
          Print
        </Button>
        <Button
          onClick={downloadQRCode}
          variant="outline"
          size="sm"
          leftSection={<IconDownload size={16} />}
        >
          Download
        </Button>
      </Group>
      </>
  );
}
