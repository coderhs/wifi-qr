import { useEffect, useRef } from 'react';
import QRCode from 'qrcode';
import { Paper, Center } from '@mantine/core';

export default function QRCodeDisplay({ data }: { data: any }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!data.ssid) return;

    let qrData = `WIFI:T:${data.encryption};S:${data.ssid};P:${data.password};`;
    if (data.hidden) qrData += 'H:true;';
    qrData += ';';

    QRCode.toCanvas(canvasRef.current, qrData, { errorCorrectionLevel: 'H' });

    QRCode.toDataURL(`WIFI:T:WPA;S:${data.ssid};P:${data.password};;`).then((url) => {
      const entry = {
        id: crypto.randomUUID(),
        ssid: data.ssid,
        qr: url,
        createdAt: new Date().toISOString(),
      };

      const existing = JSON.parse(localStorage.getItem('wifi-qr-history') || '[]');
      localStorage.setItem('wifi-qr-history', JSON.stringify([...existing, entry]));
    });

  }, [data]);

  if (!data.ssid) return null;

  return (
    <Center>
      <Paper shadow="md" p="md" radius="md">
        <canvas ref={canvasRef} />
      </Paper>
    </Center>
  );
}
