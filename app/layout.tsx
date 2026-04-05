import type { Metadata } from 'next';
import '@/styles/globals.css';
import SiteFooter from '@/components/SiteFooter';

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
      <body className="min-h-screen bg-bg text-ink font-mono antialiased pb-20">
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
