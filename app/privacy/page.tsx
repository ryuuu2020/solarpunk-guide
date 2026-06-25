import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — Solarpunk Survival Guide',
  description: 'Privacy policy for the Solarpunk Survival Guide.',
};

export default function PrivacyPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <h1 className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-bark leading-none mb-8">Privacy Policy</h1>

      <div className="space-y-8">
        <section>
          <p className="font-body text-bark-light leading-relaxed">
            The Solarpunk Survival Guide (&quot;the Site&quot;) values your privacy. This Privacy Policy explains how we collect, use, and protect your information.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-bark">Information We Collect</h2>
          <p className="font-body text-bark-light leading-relaxed mt-3">
            The Site collects anonymous visit statistics through Google Analytics, including page views, visit duration, approximate geographic location, and device type. This data cannot be used to identify individuals.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-bark">Cookie Usage</h2>
          <p className="font-body text-bark-light leading-relaxed mt-3">
            The Site uses Google Analytics cookies to track visit data. You can disable cookies in your browser settings.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-bark">Third-Party Services</h2>
          <p className="font-body text-bark-light leading-relaxed mt-3">
            The Site uses Google Analytics for traffic analysis. Please refer to Google&apos;s official website for the privacy policies of these services. The Site links to third-party platforms such as Afdian.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-bark">Contact Us</h2>
          <p className="font-body text-bark-light leading-relaxed mt-3">
            If you have any questions about this Privacy Policy, please contact us via Afdian.
          </p>
        </section>
      </div>
    </div>
  );
}
