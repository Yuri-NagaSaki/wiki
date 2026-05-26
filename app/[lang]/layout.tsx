import '../global.css';
import { translations } from '@/lib/layout.shared';
import { i18nProvider } from 'fumadocs-ui/i18n';
import { RootProvider } from 'fumadocs-ui/provider/next';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: {
    default: 'AniBT Wiki',
    template: '%s | AniBT Wiki',
  },
  description: 'AniBT 使用文档与站点同步指南。',
};

export default async function RootLayout({
  params,
  children,
}: {
  params: Promise<{ lang: string }>;
  children: ReactNode;
}) {
  const { lang } = await params;

  return (
    <html lang={lang} suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <RootProvider i18n={i18nProvider(translations, lang)}>
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
