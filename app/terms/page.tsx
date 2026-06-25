import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Use — Solarpunk Survival Guide',
  description: 'Terms of use for the Solarpunk Survival Guide.',
};

export default function TermsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <h1 className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-bark leading-none mb-8">Terms of Use</h1>

      <div className="space-y-8">
        <section>
          <p className="font-body text-bark-light leading-relaxed">
            Welcome to the Solarpunk Survival Guide. By using the Site, you agree to comply with the following Terms of Use.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-bark">Content Usage</h2>
          <p className="font-body text-bark-light leading-relaxed mt-3">
            All guide content is written by community volunteers for personal learning and reference. You may freely browse and share links on social media. Commercial use requires permission. Cite the source when republishing.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-bark">Content Accuracy</h2>
          <p className="font-body text-bark-light leading-relaxed mt-3">
            Guide content is based on community gameplay experience. As the game receives updates, some information may have timeliness discrepancies. Treat our information as reference.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-bark">Intellectual Property</h2>
          <p className="font-body text-bark-light leading-relaxed mt-3">
            The Solarpunk game name, icons, screenshots, and related assets are owned by Cyberwave and rokaplay. This Site is a fan-made third-party guide with no official affiliation. Original guide text is co-owned by the authors and the community.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-bark">Disclaimer</h2>
          <p className="font-body text-bark-light leading-relaxed mt-3">
            This Site provides content &quot;as-is&quot; without warranties. We reserve the right to modify these Terms at any time.
          </p>
        </section>
      </div>
    </div>
  );
}
