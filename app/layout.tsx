import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Solarpunk Survival Guide — Complete Floating Island Survival & Building Guide',
  description: 'Free Solarpunk game guide covering resource gathering, crafting recipes, energy systems, automation, farming, airship upgrades, and full game progression. A cozy survival builder by Cyberwave/rokaplay.',
  metadataBase: new URL('https://solarpunk-guide-ecru.vercel.app'),
  openGraph: {
    title: 'Solarpunk Survival Guide',
    description: 'Free Solarpunk game guide covering resource gathering, crafting recipes, energy systems, automation, farming, airship upgrades, and full game progression.',
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
    <html lang="en">
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
        {/* Google AdSense */}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8925824244664340" crossOrigin="anonymous" />
      </head>
      <body className="font-body min-h-screen flex flex-col bg-field-paper">
        <div className="flex-1">{children}</div>
        <footer className="text-center py-4 border-t border-stone/20">
          <a href="https://afdian.com/a/gameguidehub" target="_blank" rel="noopener noreferrer" className="font-body text-xs text-stone hover:text-bark transition-colors">❤️ Support Us</a>
        </footer>
      </body>
    </html>
  );
}
