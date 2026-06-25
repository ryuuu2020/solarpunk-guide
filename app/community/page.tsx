'use client';

export default function CommunityPage() {
  const events = [
    { date: '2026-06-20', title: 'New Automated Farm Layout Discovered by Community', desc: 'A community player shared an all-new automated farm layout design that boosts yield per unit area by roughly 40% through optimized conveyor belt paths and sorter placement. The layout has been verified across multiple island environments, and the community is testing its performance in different biomes. The complete blueprint is available in the community channel — download and try it out.' },
    { date: '2026-06-15', title: '"Crystal Caverns" Biome Confirmed for Next Update', desc: 'The dev team confirmed in their latest dev log that the next major update will introduce the new underground "Crystal Caverns" biome. This biome will feature unique resource types, new environmental mechanics, and an accompanying research tech tree. The update is expected to launch next quarter, with an exact date to be announced in a future notice.' },
    { date: '2026-06-10', title: 'Community Airship Blueprint Design Contest Launched', desc: 'The community has kicked off the first "Airship Blueprint Design Contest," encouraging players to share their airship designs. Submissions range from small exploration vessels to massive mobile bases, showcasing the depth and breadth of Solarpunk\'s airship system. Top designs will be permanently displayed on the community showcase page, and the highest-voted design will become the community\'s recommended blueprint.' },
    { date: '2026-06-05', title: 'New Solar Array Optimization Blueprint Released', desc: 'A player with an energy engineering background applied real-world solar layout algorithms to redesign the in-game solar array arrangement. The new layout improves average daily power generation by roughly 15% over the same area, with special optimization for sun angle utilization on low-latitude islands. The blueprint file is available for download in the community resource library.' },
    { date: '2026-05-28', title: 'Cross-Island Logistics Network Discussion', desc: 'The community hosted a dedicated discussion on cross-island automated logistics, with multiple high-level players sharing their multi-island transport solutions. The discussion covered various approaches including direct conveyor belt connections, scheduled airship transport, and custom logistics scheduling algorithms, each with detailed efficiency data and use case analysis. The discussion summary has been published.' },
    { date: '2026-05-20', title: 'Community Translation Team Completes Full Guide Localization', desc: 'Through the joint efforts of the community translation team, all content on the Solarpunk Guide site has been fully translated and proofread. This marks a new milestone for the player community\'s resources. The translation team is still recruiting new members — players with the ability and enthusiasm are welcome to join the volunteer team.' },
  ];

  return (
    <div className="min-h-screen bg-field-paper bg-paper-texture">
      <header className="pt-12 pb-6 px-4 lg:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col items-start">
          <a href="/" className="font-display text-sm text-moss hover:text-moss-dark transition-colors mb-4">&larr; Back to Home</a>
          <h1 className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-bark leading-none">Community</h1>
          <p className="font-body text-base text-stone mt-3 max-w-md leading-relaxed italic">Solarpunk player community updates and activities</p>
        </div>
        <div className="field-divider mt-6" />
      </header>

      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="flex-1 lg:max-w-[65%] space-y-12">
            <section>
              <h2 className="font-display text-2xl font-bold text-bark">About the Community</h2>
              <p className="font-body text-bark-light leading-relaxed mt-4">
                The Solarpunk player community is an information exchange platform organized voluntarily by players who love the game. We are dedicated to providing players with timely game news, high-quality guides, and a friendly environment for discussion. Whether you're a newcomer who just started or a veteran who has flown across the skies, there's a place for you here.
              </p>
              <p className="font-body text-bark-light leading-relaxed mt-3">
                The community's core activities include guide creation and maintenance, game news translation, player creation showcases, and regular community event organization. The guide site content is entirely written and maintained by community volunteers, with each guide reviewed by multiple experienced players. We are committed to keeping all guide content free and open, hoping that through our collective efforts, every Solarpunk player can have a better gaming experience.
              </p>
              <p className="font-body text-bark-light leading-relaxed mt-3">
                The community's current main communication channels include the Afdian platform, player-run discussion groups, and the guide site's comment sections. We regularly organize various events such as blueprint design contests, efficiency challenges, and topic discussions to keep the community active and foster interaction and collaboration among players. All events and announcements are posted first on this page and in the Latest Updates section of the homepage.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-bark mb-6">Recent Updates</h2>
              <div className="space-y-4">
                {events.map((e, i) => (
                  <div key={i} className="journal-card p-6">
                    <span className="font-body text-xs text-stone">{e.date}</span>
                    <h3 className="font-display text-lg font-semibold text-bark mt-1">{e.title}</h3>
                    <p className="font-body text-sm text-bark-light leading-relaxed mt-2">{e.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-bark mb-6">Join the Community</h2>
              <p className="font-body text-bark-light leading-relaxed">
                If you love Solarpunk and want to contribute to the player community, we warmly welcome you to join us. Whether you're skilled at guide writing, data testing, blueprint design, or translation proofreading, there's a role for you here. The community is currently especially seeking volunteers in these areas: automation system guide writing, game data testing and verification, guide content proofreading, and new version update translations. Interested players can contact us via the Afdian platform.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-bark mb-6">Frequently Asked Questions</h2>
              <div className="space-y-2">
                <details className="journal-card p-4 group cursor-pointer">
                  <summary className="font-display font-semibold text-bark text-sm marker:text-moss">How can I contribute content to the guide site?</summary>
                  <p className="font-body text-sm text-bark-light leading-relaxed mt-3 pl-3 border-l-2 border-moss/30">
                    Feel free to contact us via the Afdian platform and let us know the type and direction of content you'd like to contribute. Our editorial team will get in touch to discuss the specific collaboration approach. Generally, the process for writing a new guide is: submit an outline → editorial review → draft writing → data verification → proofreading and publishing. The entire process typically takes one to two weeks, depending on the complexity of the content.
                  </p>
                </details>
                <details className="journal-card p-4 group cursor-pointer">
                  <summary className="font-display font-semibold text-bark text-sm marker:text-moss">Will the guide site always be free?</summary>
                  <p className="font-body text-sm text-bark-light leading-relaxed mt-3 pl-3 border-l-2 border-moss/30">
                    Yes. All guide content will remain permanently free. We are a community project and do not pursue commercial profit. Site operating costs are covered through community member support on Afdian — all donations are completely voluntary. Even in extreme circumstances requiring funding support, we would never put guide content behind a paywall. This is our promise to the community.
                  </p>
                </details>
                <details className="journal-card p-4 group cursor-pointer">
                  <summary className="font-display font-semibold text-bark text-sm marker:text-moss">How often does the community hold events?</summary>
                  <p className="font-body text-sm text-bark-light leading-relaxed mt-3 pl-3 border-l-2 border-moss/30">
                    Community events don't follow a fixed schedule — we tend to arrange them flexibly based on the game's update pace and community activity levels. Generally, there are at least one or two themed events per quarter, such as blueprint contests, efficiency challenges, or topic discussions. After each major game update, we immediately organize community testing and guide update activities. Specific event arrangements are announced in advance on this page and the homepage's Latest Updates section.
                  </p>
                </details>
              </div>
            </section>
          </div>

          <aside className="lg:w-[30%] space-y-10 shrink-0">
            <div className="field-sidebar-block">
              <h3 className="font-display text-base font-semibold text-bark mb-4">Community Links</h3>
              <div className="space-y-2 font-body text-sm">
                <a href="https://afdian.com/a/gameguidehub" target="_blank" rel="noopener noreferrer" className="block text-moss hover:text-moss-dark transition-colors">❤️ Support us on Afdian</a>
              </div>
            </div>
            <div className="field-sidebar-block">
              <h3 className="font-display text-base font-semibold text-bark mb-4">Volunteer Recruitment</h3>
              <div className="space-y-1 font-body text-xs text-bark-light leading-relaxed">
                <p>Guide Writer — Write and update game guides</p>
                <p>Data Tester — Verify game values and data</p>
                <p>Translator — Localize English news and content</p>
                <p>UI Designer — Improve guide presentation</p>
              </div>
            </div>
          </aside>
        </div>
        <div className="field-divider mt-16" />
      </main>
      <footer className="max-w-6xl mx-auto px-4 lg:px-8 py-10 text-center">
        <p className="font-body text-xs text-stone">&copy; {new Date().getFullYear()} Solarpunk Survival Guide · <a href="/privacy" className="hover:text-bark transition-colors">Privacy Policy</a> · <a href="/terms" className="hover:text-bark transition-colors">Terms of Use</a></p>
      </footer>
    </div>
  );
}
