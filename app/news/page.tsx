'use client';

export default function NewsPage() {
  const news = [
    {
      date: '2026-06-25',
      title: 'Co-op Community Spotlight: Top 5 Island Base Designs from Week 2',
      summary: "Two weeks after Solarpunk's launch, the community has produced stunning base designs that push the floating island builder to its limits. We rounded up the 5 most impressive — and practical — layouts. #1: The Windmill Spiral by Reddit user SolarSailor stacks 8 wind turbines in a spiral pattern for 100% uptime even during calm weather, using a clever conveyor loop to automatically distribute batteries. #2: The Greenhouse Dome by Steam user FloatingFarm layers 3 concentric rings of sprinkler-fed crop plots around a central water collector, achieving an estimated 60% water efficiency boost over linear layouts. #3: The Skyport Hub by YouTube creator CozyBuilder demonstrates a docking station layout that handles 3 airships simultaneously without collision — a must-see for multiplayer groups. #4: The Cliffside Citadel uses natural island terrain to create vertical farming terraces that look like a hanging garden. #5: The Minimalist Pod packs full functionality (power, food, crafting) into just 5×5 foundation tiles for speedrunners chasing efficiency records. Which one fits your playstyle?",
      category: 'Community',
    },
    {
      date: '2026-06-25',
      title: 'Patch 1.0.3: Airship Physics Overhaul, Farming Buffs, and Console Progress',
      summary: 'Cyberwave released patch 1.0.3, delivering critical fixes to airship collision detection — navigating between floating islands should now feel significantly more reliable. Early-game farming received major tuning: first-time melon and wheat harvests now yield higher seed returns, and cotton growth speed has been boosted by 25%, accelerating the path to mid-tier automation milestones. A new save state migration system ensures backward compatibility for pre-1.0.3 save files. The team is actively working on a list of 16 high-priority bugs affecting cooperative play, with the most impactful fix addressing a client inventory bug for players joining friends\' worlds. Console certification for Xbox and PS5 is underway, while the Nintendo Switch 2 version remains a longer-term project as the team prioritizes current build stability.',
      category: 'Game Update',
    },
    {
      date: '2026-06-25',
      title: 'Farming Guide: Max Efficiency Layouts Published',
      summary: 'Our complete farming efficiency guide is now live, covering everything from your first berry bushes to endgame greenhouse scaling. Learn the 5×5 sprinkler rule, optimal wheat grid layouts, and when greenhouse ROI actually makes sense. Includes power consumption math (3 power/hr per Sprinkler) and crop priority rankings: Wheat > Cotton > Watermelon for your first greenhouse.',
      category: 'Guide Update',
    },
    {
      date: '2026-06-20',
      title: 'Community Discovers New Automated Farm Layout — 40% Yield Increase',
      summary: 'A veteran player shared an optimized automated farm layout design. By improving conveyor belt paths and sorter placement, the design achieves roughly 40% higher yield per unit area. The community team is conducting compatibility tests across multiple island environments, after which the complete layout blueprint and building tutorial will be published on the guide site.',
      category: 'Community Discovery',
    },
    {
      date: '2026-06-15',
      title: '"Crystal Caverns" Biome Confirmed for Next Major Update',
      summary: 'The dev team officially confirmed in their latest developer log that the next major content update will introduce a new underground biome called "Crystal Caverns." This area is expected to feature unique crystal mineral resources, exclusive environmental survival challenge mechanics, and a new tech tree branch. According to the devs, the Crystal Caverns will be unlike any existing island environment, requiring players to develop entirely new survival strategies. A specific launch date hasn\'t been announced but is expected next quarter.',
      category: 'Official Announcement',
    },
    {
      date: '2026-06-10',
      title: 'Community Airship Blueprint Sharing Event Now Open',
      summary: 'The community has officially launched its first Airship Blueprint Design Contest. Over 50 submissions have been received so far, ranging from single-player exploration vessels to multiplayer mobile bases. Judging criteria include functionality, aesthetics, building efficiency, and technical innovation. Winning designs will be permanently displayed on the guide site and will become the community\'s official recommended blueprints.',
      category: 'Community Event',
    },
    {
      date: '2026-06-05',
      title: 'Guide Site Completes Major Energy System Guide Update',
      summary: 'Our Energy System guide has been fully updated to the latest version. New content includes geothermal power details, hybrid energy system optimization strategies, and energy configuration guides for extreme environments (polar/desert). All energy device parameter data has also been updated to match the current game version.',
      category: 'Guide Update',
    },
    {
      date: '2026-05-28',
      title: 'Solarpunk Releases Performance Optimization Patch',
      summary: 'The dev team released a performance optimization patch for large automated bases. After the update, frame rate performance for large conveyor belt networks and drone systems has significantly improved — community testing reports roughly 25% FPS improvement in save files with over 500 automation components. Several known automation system logic errors were also fixed.',
      category: 'Game Update',
    },
    {
      date: '2026-05-20',
      title: 'Community Translation Team Completes All Guide Localization',
      summary: 'After a month of effort, the community translation team completed the localization of all guide content on this site. This marks an important milestone for the Solarpunk player community. The translation team is still recruiting new volunteers — interested players are welcome to join.',
      category: 'Community News',
    },
  ];

  return (
    <div className="min-h-screen bg-field-paper bg-paper-texture">
      <header className="pt-12 pb-6 px-4 lg:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col items-start">
          <a href="/" className="font-display text-sm text-moss hover:text-moss-dark transition-colors mb-4">&larr; Back to Home</a>
          <h1 className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-bark leading-none">News</h1>
          <p className="font-body text-base text-stone mt-3 max-w-md leading-relaxed italic">Latest Solarpunk game news and guide site updates</p>
        </div>
        <div className="field-divider mt-6" />
      </header>

      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="flex-1 lg:max-w-[65%] space-y-12">
            <section>
              <p className="font-body text-bark-light leading-relaxed">
                This page aggregates the latest updates from the Solarpunk guide site and game community, including official game update announcements, important community discoveries, guide site content updates, and community event previews. We continuously track the game's latest developments to ensure players get valuable information as soon as possible. News is sorted in reverse chronological order, with the newest at the top.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-bark mb-6">Recent News</h2>
              <div className="space-y-4">
                {news.map((n, i) => (
                  <div key={i} className="journal-card p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-body text-xs text-stone">{n.date}</span>
                      <span className="field-tag stone text-[10px]">{n.category}</span>
                    </div>
                    <h3 className="font-display text-lg font-semibold text-bark">{n.title}</h3>
                    <p className="font-body text-sm text-bark-light leading-relaxed mt-2">{n.summary}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-bark mb-6">Frequently Asked Questions</h2>
              <div className="space-y-2">
                <details className="journal-card p-4 group cursor-pointer">
                  <summary className="font-display font-semibold text-bark text-sm marker:text-moss">When is the next game update?</summary>
                  <p className="font-body text-sm text-bark-light leading-relaxed mt-3 pl-3 border-l-2 border-moss/30">
                    The dev team typically releases a major content update each quarter, with smaller fix patches in between. The recently confirmed "Crystal Caverns" update is expected to arrive next quarter. Exact release dates are subject to official announcements — we will notify players through the News page and homepage Latest Updates as soon as information becomes available.
                  </p>
                </details>
                <details className="journal-card p-4 group cursor-pointer">
                  <summary className="font-display font-semibold text-bark text-sm marker:text-moss">How can I submit community news?</summary>
                  <p className="font-body text-sm text-bark-light leading-relaxed mt-3 pl-3 border-l-2 border-moss/30">
                    If you have Solarpunk-related news tips or community discoveries you\'d like to share, please contact us via the Afdian platform. Please include the source of your information (official links, community post links, etc.) and a brief explanation when submitting. After editorial confirmation, qualifying submissions will be included on the News page.
                  </p>
                </details>
                <details className="journal-card p-4 group cursor-pointer">
                  <summary className="font-display font-semibold text-bark text-sm marker:text-moss">How often does the guide site publish news?</summary>
                  <p className="font-body text-sm text-bark-light leading-relaxed mt-3 pl-3 border-l-2 border-moss/30">
                    The frequency of news publishing has no fixed pattern and depends on the activity level of game updates and community events. During periods of frequent game updates or concentrated community events, news updates become more frequent. We recommend checking the homepage "Latest Updates" section as a daily reference — it displays the most important news summaries in real time.
                  </p>
                </details>
              </div>
            </section>
          </div>

          <aside className="lg:w-[30%] space-y-10 shrink-0">
            <div className="field-sidebar-block">
              <h3 className="font-display text-base font-semibold text-bark mb-4">News Categories</h3>
              <div className="space-y-2 font-body text-sm text-bark-light">
                <p>Official Announcement — Messages officially released by the dev team</p>
                <p>Game Update — Patch notes and version update details</p>
                <p>Community Discovery — Tips and optimizations found by players</p>
                <p>Guide Update — Site content update notifications</p>
                <p>Community Event — Player events and contests</p>
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
