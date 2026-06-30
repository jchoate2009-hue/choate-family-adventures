import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Choate Family Adventures',
  description: 'A private family adventure companion app.',
  manifest: '/manifest.json'
};

export const viewport: Viewport = {
  themeColor: '#1f3f2c',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
