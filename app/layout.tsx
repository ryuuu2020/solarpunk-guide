import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Solarpunk Survival Guide — Complete Floating Island Survival & Building Guide',
  description: 'Free Solarpunk game guide covering resource gathering, crafting recipes, energy systems, automation, farming, airship upgrades, and full game progression. A cozy survival builder by Cyberwave/rokaplay.',
  metadataBase: new URL('https://solarpunk-game-wiki.vercel.app'),
  openGraph: {
    title: 'Solarpunk Survival Guide',
    description: 'Free Solarpunk game guide covering resource gathering, crafting recipes, energy systems, automation, farming, airship upgrades, and full game progression.',
    type: 'website',
  },
  verification: {
    google: '4cd6cdf221ea7b0b',
  },
};

const NAV_ITEMS = [
  { label: 'Field Log', href: '/' },
  { label: 'Guides', href: '/guides' },
  { label: 'Crafting', href: '/crafting' },
  { label: 'World Map', href: '/map' },
  { label: 'Tips', href: '/tips' },
  { label: 'Community', href: '/community' },
];

const CRAFTING_RECIPES = [
  { name: 'Crafting Table', materials: 'Basic crafting station for early recipes', tier: '1' },
  { name: 'Solar Panel', materials: 'Generates energy from sunlight', tier: '2' },
  { name: 'Sprinkler', materials: 'Automatically waters nearby crop fields', tier: '2' },
  { name: 'Transport Drone', materials: 'Transports resources between islands', tier: '3' },
];

const UPDATES = [
  { date: '2026-06-08', text: 'Solarpunk 1.0 launches on Steam, GOG, Epic, PS5, Xbox Series X|S, and Switch 2' },
  { date: '2026-06-08', text: 'Online co-op for 2-4 players available at launch' },
  { date: '2025-12-01', text: 'Closed beta concludes — full release date confirmed' },
];

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
      <body className="font-body min-h-screen flex flex-col bg-field-paper bg-paper-texture">
        <div className="flex min-h-screen flex-1">

          {/* ===== Sidebar (left) ===== */}
          <aside className="hidden lg:flex flex-col w-60 bg-white/80 border-r border-clay/50 shrink-0 overflow-y-auto">

            {/* Brand */}
            <a href="/" className="flex items-center gap-3 px-5 h-14 border-b border-clay/50 hover:bg-field-paper-warm transition-colors shrink-0">
              <span className="w-7 h-7 rounded-full bg-moss flex items-center justify-center">
                <span className="text-[10px] font-display font-bold text-white">SP</span>
              </span>
              <span className="font-display text-sm font-semibold tracking-tight text-bark">
                Solarpunk
              </span>
            </a>

            {/* Navigation */}
            <nav className="py-3 flex flex-col gap-0.5 shrink-0">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 px-5 py-2 text-sm font-medium text-bark-light
                             hover:text-bark hover:bg-field-paper-warm transition-colors duration-150"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Separator */}
            <div className="mx-4 field-divider my-2" />

            {/* Crafting Quick Reference */}
            <div className="field-sidebar-block mx-5 mt-4">
              <h3 className="font-display text-sm font-semibold text-bark mb-3">
                Key Recipe Reference
              </h3>
              <div className="space-y-2">
                {CRAFTING_RECIPES.map((recipe, i) => (
                  <div key={i} className="recipe-card p-3">
                    <h4 className="font-display text-xs font-semibold text-bark">
                      {recipe.name}
                    </h4>
                    <p className="font-body text-[11px] text-stone mt-1 leading-relaxed">
                      {recipe.materials}
                    </p>
                    <span className="field-tag terracotta text-[9px] mt-1.5 inline-block">
                      {recipe.tier}
                    </span>
                  </div>
                ))}
              </div>
              <a
                href="/crafting"
                className="inline-block font-body text-xs font-semibold text-moss hover:text-moss-dark transition-colors mt-3"
              >
                Full Recipe List &rarr;
              </a>
            </div>

            {/* Latest Updates */}
            <div className="field-sidebar-block mx-5 mt-6">
              <h3 className="font-display text-sm font-semibold text-bark mb-3">
                Latest Updates
              </h3>
              <div className="space-y-3">
                {UPDATES.map((update, i) => (
                  <div key={i}>
                    <span className="font-body text-[10px] text-stone">
                      {update.date}
                    </span>
                    <p className="font-body text-xs text-bark-light mt-0.5 leading-relaxed">
                      {update.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Support card */}
            <div className="mx-5 mt-6 mb-6 bg-moss-light/50 border border-moss/20 p-4">
              <h3 className="font-display text-xs font-semibold text-moss-dark mb-2">
                Support This Site
              </h3>
              <p className="font-body text-[11px] text-bark-light leading-relaxed mb-3">
                If this guide has helped you, consider supporting us to keep creating more in-depth content
              </p>
              <a
                href="https://afdian.com/a/gameguidehub"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-pill
                           bg-moss text-white text-xs font-semibold
                           hover:bg-moss-dark transition-colors duration-200"
              >
                ❤️ Support Us
              </a>
            </div>

          </aside>

          {/* ===== Main content area ===== */}
          <div className="flex-1 flex flex-col min-w-0">

            {/* ===== Hero Image ===== */}
            <div className="w-full h-48 lg:h-80 overflow-hidden">
              <img src="/hero.jpg" alt="Solarpunk" className="w-full h-full object-cover" />
            </div>

            {/* ===== Header ===== */}
            <header className="pt-12 pb-6 px-4 lg:px-8 max-w-6xl mx-auto w-full">
              <div className="flex flex-col items-start">
                <div className="w-full flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
                  <div>
                    <h1 className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-bark leading-none">
                      Solarpunk Survival Guide
                    </h1>
                    <p className="font-body text-base text-stone mt-3 max-w-md leading-relaxed italic">
                      Survive, build, and explore on floating islands — a Solarpunk field journal from the ground up
                    </p>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <a
                      href="https://afdian.com/a/gameguidehub"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-sm font-semibold text-terracotta hover:text-terracotta-dark transition-colors whitespace-nowrap"
                    >
                      ❤️ Support Us
                    </a>
                    <div className="hidden sm:flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-moss" />
                      <span className="font-body text-xs text-stone">ONLINE</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="field-divider mt-6" />
            </header>

            {/* ===== Page content ===== */}
            <main className="flex-1">
              {children}
            </main>

            {/* ===== Footer ===== */}
            <footer className="max-w-6xl mx-auto px-4 lg:px-8 py-10 w-full">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-6">
                  <span className="font-body text-sm text-stone">
                    &copy; {new Date().getFullYear()} Solarpunk Survival Guide
                  </span>
                  <a
                    href="/privacy"
                    className="font-body text-sm text-stone hover:text-bark transition-colors"
                  >
                    Privacy Policy
                  </a>
                  <a
                    href="/terms"
                    className="font-body text-sm text-stone hover:text-bark transition-colors"
                  >
                    Terms of Use
                  </a>
                  <a
                    href="/about"
                    className="font-body text-sm text-stone hover:text-bark transition-colors"
                  >
                    About
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <a
                    href="https://afdian.com/a/gameguidehub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm font-semibold text-terracotta hover:text-terracotta-dark transition-colors"
                  >
                    Afdian &rarr;
                  </a>
                </div>
              </div>
              {/* More Game Guides */}
              <div className="mt-6 pt-6 border-t border-clay/30">
                <p className="font-body text-xs text-stone mb-3 text-center">More Game Guides</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a href="https://dispatch-guide-sigma.vercel.app" className="font-body text-xs text-bark-light hover:text-bark transition-colors">Dispatch Guide</a>
                  <a href="https://menace-guide.vercel.app" className="font-body text-xs text-bark-light hover:text-bark transition-colors">MENACE Guide</a>
                  <a href="https://olden-era-guide-tau.vercel.app" className="font-body text-xs text-bark-light hover:text-bark transition-colors">Olden Era Guide</a>
                  <a href="https://going-medieval-guide.vercel.app" className="font-body text-xs text-bark-light hover:text-bark transition-colors">Going Medieval Guide</a>
                </div>
              </div>
            </footer>

          </div>
        </div>
      </body>
    </html>
  );
}
