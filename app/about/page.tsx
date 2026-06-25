import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Solarpunk Survival Guide — Community-Run Game Guide',
  description: 'Solarpunk Survival Guide is a free, community-maintained game guide. Learn about our mission and content coverage.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-field-paper bg-paper-texture">
      <header className="pt-12 pb-6 px-4 lg:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col items-start">
          <a href="/" className="font-display text-sm text-moss hover:text-moss-dark transition-colors mb-4">&larr; Back to Home</a>
          <h1 className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-bark leading-none">About</h1>
          <p className="font-body text-base text-stone mt-3 max-w-md leading-relaxed italic">Learn about the Solarpunk Survival Guide</p>
        </div>
        <div className="field-divider mt-6" />
      </header>

      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="flex-1 lg:max-w-[65%] space-y-12">
            <section>
              <h2 className="font-display text-2xl font-bold text-bark">Our Mission</h2>
              <p className="font-body text-bark-light leading-relaxed mt-4">
                The Solarpunk Survival Guide is a free, community-maintained game guide site. Our goal is to provide Solarpunk players with comprehensive, accurate, and easy-to-understand game guides, helping every player build their own green utopia on floating islands.
              </p>
            </section>
            <section>
              <h2 className="font-display text-2xl font-bold text-bark">Content Coverage</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
                {['Survival Starter Guide', 'Energy Systems Deep Dive', 'Complete Resource Gathering', 'Building & Automation', 'Airship System Guide', 'Crafting Recipe Reference', 'Farming & Food', 'Island Exploration Guide', 'Advanced Tips Collection'].map(item => (
                  <div key={item} className="journal-card p-3 text-center">
                    <span className="font-body text-sm text-bark">{item}</span>
                  </div>
                ))}
              </div>
            </section>
            <section>
              <h2 className="font-display text-2xl font-bold text-bark">Disclaimer</h2>
              <div className="journal-card p-6 mt-4">
                <p className="font-body text-sm text-bark-light leading-relaxed">
                  The Solarpunk Survival Guide is a fan-made third-party guide website and is not officially affiliated with Cyberwave or rokaplay in any way.
                </p>
                <p className="font-body text-sm text-bark-light leading-relaxed mt-3">
                  All content on this site is contributed and maintained by the player community. Guide information is for reference only, and game data may change with version updates. We strive to ensure accuracy but are not responsible for any game progress issues resulting from using our guide information.
                </p>
                <p className="font-body text-sm text-bark-light leading-relaxed mt-3">
                  The Solarpunk game name, icons, and related assets are copyright of their respective owners.
                </p>
              </div>
            </section>
          </div>
          <aside className="lg:w-[30%] space-y-10 shrink-0">
            <div className="field-sidebar-block">
              <h3 className="font-display text-base font-semibold text-bark mb-4">Contact & Support</h3>
              <div className="space-y-3 font-body text-sm text-bark-light">
                <p>Feedback & Suggestions: Contact us via Afdian</p>
                <a href="https://afdian.com/a/gameguidehub" target="_blank" rel="noopener noreferrer" className="block text-moss hover:text-moss-dark transition-colors">Support us on Afdian</a>
              </div>
            </div>
          </aside>
        </div>
        <div className="field-divider mt-16" />
      </main>
      <footer className="max-w-6xl mx-auto px-4 lg:px-8 py-10 text-center">
        <p className="font-body text-xs text-stone">&copy; {new Date().getFullYear()} Solarpunk Survival Guide · <a href="/" className="hover:text-bark transition-colors">Back to Home</a></p>
      </footer>
    </div>
  );
}
