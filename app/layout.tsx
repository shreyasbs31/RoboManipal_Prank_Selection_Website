import type { Metadata } from 'next';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Research Selection Portal',
  description: 'Research Team Selection Portal - Access your results',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-bg text-ink font-mono antialiased">
        {children}
      </body>
    </html>
  );
}
