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
