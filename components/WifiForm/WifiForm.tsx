// File: components/WifiForm.tsx
'use client';
import { useState } from 'react';
import {
  TextInput,
  PasswordInput,
  Select,
  Switch,
  Button,
  Stack,
} from '@mantine/core';

export default function WifiForm({ onGenerate }: { onGenerate: (data: any) => void }) {
  const [ssid, setSsid] = useState('');
  const [password, setPassword] = useState('');
  const [encryption, setEncryption] = useState('WPA');
  const [hidden, setHidden] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onGenerate({ ssid, password, encryption, hidden });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack>
        <TextInput
          label="Wi-Fi Name (SSID)"
          value={ssid}
          onChange={(e) => setSsid(e.target.value)}
          required
        />
        <PasswordInput
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={encryption === 'nopass'}
        />
        <Select
          label="Encryption"
          value={encryption}
          onChange={(value) => setEncryption(value || 'nopass')}
          data={[
            { value: 'WPA', label: 'WPA/WPA2' },
            { value: 'WEP', label: 'WEP' },
            { value: 'nopass', label: 'None' },
          ]}
        />
        <Switch
          label="Hidden Network"
          checked={hidden}
          onChange={(e) => setHidden(e.currentTarget.checked)}
        />
        <Button type="submit" fullWidth>
          Generate QR
        </Button>
      </Stack>
    </form>
  );
}
