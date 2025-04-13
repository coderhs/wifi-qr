'use client';
import { useState } from 'react';
import WifiForm from '@/components/WifiForm/WifiForm';
import QRCodeDisplay from '@/components/QRCodeDisplay/QRCodeDisplay';
import { Grid, Container } from '@mantine/core';
import { Paper, Title } from '@mantine/core';

export default function Home() {
  const [wifiData, setWifiData] = useState({});

  return (
    <>
    <Container size="md">
      <Title order={2} mb="md">
        Wi-Fi QR Code Generator
      </Title>
      <Grid gutter="md">
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Paper radius="md" withBorder p="xl" bg="var(--mantine-color-body)" shadow="lg">
            <WifiForm onGenerate={setWifiData} />
          </Paper>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <QRCodeDisplay data={wifiData} />
        </Grid.Col>
      </Grid>
    </Container>
  </>
  );
}
