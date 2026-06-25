import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Solarpunk 生存指南 — 浮岛生存建造完全攻略',
  description: '免费的 Solarpunk 游戏攻略站，包含资源采集、制作配方、能源系统、自动化、农耕、飞船升级与完整游戏进程指南。由 Cyberwave/rokaplay 开发的温馨生存建造游戏。',
  metadataBase: new URL('https://solarpunk-guide-ecru.vercel.app'),
  openGraph: {
    title: 'Solarpunk 生存指南',
    description: '免费的 Solarpunk 游戏攻略站，包含资源采集、制作配方、能源系统、自动化、农耕、飞船升级与完整游戏进程指南。',
    type: 'website',
  },
  verification: {
    google: '4cd6cdf221ea7b0b',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <head>
        <meta name="google-site-verification" content="4cd6cdf221ea7b0b" />
        <script async src={`https://www.googletagmanager.com/gtag/js?id=G-ET6778V62K`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-ET6778V62K');
            `,
          }}
        />
      </head>
      <body className="font-body min-h-screen bg-field-paper">
        {children}
      </body>
    </html>
  );
}
