'use client';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-field-paper bg-paper-texture">
      <header className="pt-12 pb-6 px-4 lg:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col items-start">
          <a href="/" className="font-display text-sm text-moss hover:text-moss-dark transition-colors mb-4">&larr; Back to Home</a>
          <h1 className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-bark leading-none">Terms of Use</h1>
        </div>
        <div className="field-divider mt-6" />
      </header>

      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="space-y-8">
          <section>
            <p className="font-body text-bark-light leading-relaxed">
              Welcome to the Solarpunk Survival Guide. By using the Site, you agree to comply with the following Terms of Use. If you do not agree to these terms, please stop using the Site.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-bark">Content Usage</h2>
            <p className="font-body text-bark-light leading-relaxed mt-3">
              All guide content on the Site is written by community volunteers for personal learning and reference. You may freely browse and share links on social media, but you may not use the Site content for commercial purposes without permission. If you wish to republish or reference content from this Site on other platforms, please cite the source and link back to the original article.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-bark">Content Accuracy</h2>
            <p className="font-body text-bark-light leading-relaxed mt-3">
              The guide content on this Site is written based on actual gameplay experience from community players, and we strive to ensure accuracy. However, as the game receives ongoing updates, some information may have timeliness discrepancies. The Site assumes no responsibility for game progress issues or other losses resulting from using guide content. Please treat our information as reference and refer to in-game displays for actual gameplay.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-bark">Intellectual Property</h2>
            <p className="font-body text-bark-light leading-relaxed mt-3">
              The Solarpunk game name, icons, game screenshots, and related assets are owned by Cyberwave and rokaplay. This Site is a fan-made third-party guide website and has no official affiliation with the game developers. Original guide text content on this Site is co-owned by the authors and the community.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-bark">Disclaimer</h2>
            <p className="font-body text-bark-light leading-relaxed mt-3">
              This Site provides content and information on an "as-is" basis, without any express or implied warranties. The Site makes no promises regarding availability, content completeness, or service continuity. We reserve the right to modify these Terms of Use at any time, and modified terms take effect immediately upon posting on the Site.
            </p>
          </section>
        </div>
        <div className="field-divider mt-16" />
      </main>

      <footer className="max-w-6xl mx-auto px-4 lg:px-8 py-10 text-center">
        <p className="font-body text-xs text-stone">&copy; {new Date().getFullYear()} Solarpunk Survival Guide · <a href="/" className="hover:text-bark transition-colors">Back to Home</a> · <a href="/privacy" className="hover:text-bark transition-colors">Privacy Policy</a></p>
      </footer>
    </div>
  );
}
