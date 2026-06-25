'use client';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-field-paper bg-paper-texture">
      <header className="pt-12 pb-6 px-4 lg:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col items-start">
          <a href="/" className="font-display text-sm text-moss hover:text-moss-dark transition-colors mb-4">&larr; Back to Home</a>
          <h1 className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-bark leading-none">Privacy Policy</h1>
        </div>
        <div className="field-divider mt-6" />
      </header>

      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="space-y-8">
          <section>
            <p className="font-body text-bark-light leading-relaxed">
              The Solarpunk Survival Guide ("the Site") values your privacy. This Privacy Policy explains how we collect, use, and protect your information. By using the Site, you agree to the terms of this Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-bark">Information We Collect</h2>
            <p className="font-body text-bark-light leading-relaxed mt-3">
              The Site collects anonymous visit statistics through Google Analytics, including page views, visit duration, approximate geographic location, and device type. This data cannot be used to identify individuals and is only used for analyzing site traffic and optimizing content.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-bark">Cookie Usage</h2>
            <p className="font-body text-bark-light leading-relaxed mt-3">
              The Site uses Google Analytics cookies to track visit data. You can disable cookies in your browser settings, but this may affect the normal functionality of some features. We do not use cookies to collect personally identifiable information or for ad tracking.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-bark">Third-Party Services</h2>
            <p className="font-body text-bark-light leading-relaxed mt-3">
              The Site uses Google Analytics and Google Tag Manager for traffic analysis. Please refer to Google's official website for the privacy policies of these services. The Site contains links to third-party platforms such as Afdian. We are not responsible for the privacy practices of these external websites.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-bark">Data Security</h2>
            <p className="font-body text-bark-light leading-relaxed mt-3">
              The Site takes reasonable technical measures to protect data security. Since the Site only collects anonymous statistical data and does not store any personally identifiable user information, there is no risk of personal data breaches.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-bark">Contact Us</h2>
            <p className="font-body text-bark-light leading-relaxed mt-3">
              If you have any questions about this Privacy Policy, please contact us via Afdian.
            </p>
          </section>
        </div>
        <div className="field-divider mt-16" />
      </main>

      <footer className="max-w-6xl mx-auto px-4 lg:px-8 py-10 text-center">
        <p className="font-body text-xs text-stone">&copy; {new Date().getFullYear()} Solarpunk Survival Guide · <a href="/" className="hover:text-bark transition-colors">Back to Home</a> · <a href="/terms" className="hover:text-bark transition-colors">Terms of Use</a></p>
      </footer>
    </div>
  );
}
