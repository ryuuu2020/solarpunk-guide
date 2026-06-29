export const metadata = {
  title: "Solarpunk Guides — Complete Strategy Collection (2026)",
  description:
    "Complete strategy guides for Solarpunk. In-depth tutorials and pro tips.",
};


export default function GuidesPage() {
  const guides = [
    {
      title: 'Complete Beginner Survival Guide',
      category: 'Basic Survival',
      tagType: 'moss' as const,
      desc: 'From landing on your first floating island to building a self-sufficient base — a step-by-step walkthrough of your first 10 hours in Solarpunk. This guide covers everything a new player needs to know: resource gathering priorities, tool crafting order, survival strategies for the first night, basic energy system setup, and how to quickly unlock key tech milestones. We explain the optimal resource allocation for each stage in detail, helping you get established in the shortest time possible. Perfect for players new to open-world survival builders, with clear explanations supported by gameplay screenshots and navigation tips to keep you on the right track from the start.',
      readTime: '15',
      difficulty: 'Beginner',
      href: '/beginners',
    },
    {
      title: 'Airship Building & Customization Tutorial',
      category: 'Airship System',
      tagType: 'terracotta' as const,
      desc: 'Deep dive into the airship building system: engine selection, deck layout, fuel management, and how to build a mobile base above the clouds. The airship is one of the most iconic systems in Solarpunk — a well-designed ship not only dramatically improves your exploration efficiency but also serves as a fully customizable mobile base. This tutorial covers everything from basic airship repair to building the ultimate flying fortress, including engine performance comparisons, optimal deck layout strategies, warehouse and living quarters planning, fuel consumption calculations and optimization, weapon installation guides, and multi-airship fleet management. Whether you are a casual explorer or a min-maxing hardcore player, you will find valuable building inspiration here.',
      readTime: '12',
      difficulty: 'Advanced',
      href: '/airship',
    },
    {
      title: 'Full Automation Production Line Guide',
      category: 'Automation',
      tagType: 'terracotta' as const,
      desc: 'A complete progression path from manual gathering to fully automated assembly lines. Covers conveyor belt layouts, automatic sorting systems, industrial furnace arrays, drone transport network configuration, and multi-island resource scheduling strategies. Automation is the core pillar of late-game Solarpunk gameplay — a well-designed automated base can multiply your production efficiency many times over, freeing your hands entirely. This guide takes a progressive approach to understanding each automation component and its optimal use cases, with multiple real-world examples showing the evolution from simple conveyor belts to complex multi-island logistics networks. We also share community-verified efficient layout blueprints you can directly copy into your save file.',
      readTime: '20',
      difficulty: 'Advanced',
      href: '/automation',
    },
    {
      title: 'Farming System Complete Breakdown',
      category: 'Farming',
      tagType: 'moss' as const,
      desc: 'From clearing your first patch of farmland to building a large-scale automated farm — a comprehensive breakdown of Solarpunk\'s farming system. Includes crop types and growth cycles, soil fertility management, irrigation system design, the effects of sunlight and temperature on crops, fertilizer crafting recipes, and automated harvesting and sorting assembly line setup. Farming is the key system for stable food supply and some industrial raw materials — understanding its deep mechanics allows you to maintain consistent resource output even in harsh environments. This guide also covers cross-island logistics farm design concepts, teaching you how to combine the climate advantages of different islands for year-round, uninterrupted large-scale agricultural production.',
      readTime: '18',
      difficulty: 'Intermediate',
      href: '/farming',
    },
    {
      title: 'Ultimate Energy System Guide',
      category: 'Energy',
      tagType: 'moss' as const,
      desc: 'A comprehensive analysis of every energy solution in Solarpunk: solar panel array optimization, wind power layout, battery storage strategies, and unlocking and using advanced energy sources like geothermal and biomass. Energy is the prerequisite for powering all automation equipment — without a reliable energy supply, even the best production designs remain on paper. This guide not only covers the stats and characteristics of each energy device but also teaches you how to design flexible hybrid energy systems based on island environment, day-night cycles, and seasonal changes. We also cover power grid wiring techniques, load balancing strategies, and failover plans to ensure your base never loses power or halts production under any circumstances.',
      readTime: '15',
      difficulty: 'Intermediate',
      href: '/energy',
    },
    {
      title: 'Complete Resource Gathering & Distribution Map',
      category: 'Resources',
      tagType: 'terracotta' as const,
      desc: 'An overview of island-wide resource distribution: the spawn rules and optimal gathering locations for wood, stone, iron ore, copper ore, gold ore, rare earth minerals, and more. Includes mineral distribution heatmaps for each island and efficient gathering route plans. Understanding resource distribution patterns helps you make smarter exploration and base location decisions. This guide catalogs every known resource type in the game, including basic building materials, metal ores, rare elements, and biomass resources, explaining their uses, tool requirements, and alternative acquisition methods. We also share the community-developed "resource belt" design philosophy, teaching you how to build efficient cross-island resource transport networks.',
      readTime: '14',
      difficulty: 'Beginner',
      href: '/resources',
    },
    {
      title: 'World Map & Biome Exploration Guide',
      category: 'Exploration',
      tagType: 'moss' as const,
      desc: 'A complete map of the floating island world, including all known island coordinates, biome types, special resource locations, and hidden area exploration guides. Learn about each island\'s climate characteristics, day-night length, danger level, and unique unlockable technologies. Significant environmental differences exist between biomes, directly affecting your survival strategies and base construction plans. This guide reads like a real field journal, recording important information discovered by pioneers exploring each region, helping you prepare thoroughly and minimize surprises and losses during exploration.',
      readTime: '10',
      difficulty: 'Beginner',
      href: '/map',
    },
    {
      title: '30 Survival Tips Collection',
      category: 'Tips',
      tagType: 'moss' as const,
      desc: 'A collection of 30 practical survival tips from veteran community players, covering resource management, base defense, weather response, efficiency optimization, and more. Every tip has been battle-tested — some are small tricks that significantly enhance your experience, while others are advanced techniques you might only discover after dozens of hours of play. From basic hotkey operations to complex automation logic debugging, from food preservation tricks to extreme weather survival strategies, this collection is a reference manual every Solarpunk player should bookmark.',
      readTime: '8',
      difficulty: 'All Levels',
      href: '/tips',
    },
  ];

  return (
    <div className="min-h-screen bg-field-paper bg-paper-texture">
      
      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="flex-1 lg:max-w-[65%] space-y-12">
            <section>
              <h2 className="font-display text-2xl font-bold text-bark">Guide Overview</h2>
              <p className="font-body text-bark-light leading-relaxed mt-4">
                Welcome to the Solarpunk Guides overview page. We have organized our guides by the game's core systems, so whether you're a newcomer stepping onto a floating island for the first time or a veteran chasing peak efficiency, you'll find what you need here. Every guide has been written and reviewed by experienced community players, with content verified across multiple game updates to ensure accuracy and usefulness. Below are all currently available guide entries — click any to view the full content.
              </p>
              <p className="font-body text-bark-light leading-relaxed mt-3">
                As an open-world survival building game, Solarpunk's core gameplay involves multiple interconnected systems: you gather resources to build facilities, build facilities to unlock advanced technology, and technological progress unlocks new resource gathering methods. This interlocking mechanism makes systematic guide reading especially important. This page will help you quickly find the most valuable guides based on your current progress and interests.
              </p>
              <p className="font-body text-bark-light leading-relaxed mt-3">
                We recommend new players read guides in this order: start with the Complete Beginner Survival Guide to learn basic operations and early objectives; then read the Energy System Guide to ensure your base has stable power; next, learn the Farming System to establish a sustainable food source; then gradually dive into Automation and Airship systems. Experienced players can jump directly to topics of interest. All numerical data in our guides comes from community estimates and actual testing, and may adjust with game version updates — please refer to in-game data for the final word.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-bark mb-6">All Guide Entries</h2>
              <div className="space-y-4">
                {guides.map((guide, i) => (
                  <a key={i} href={guide.href} className="journal-card block p-6 group">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2 flex-wrap">
                          <span className={`field-tag ${guide.tagType}`}>{guide.category}</span>
                          <span className="font-body text-xs text-stone">{guide.difficulty}</span>
                        </div>
                        <h3 className="font-display text-lg font-semibold text-bark group-hover:text-moss transition-colors duration-200">
                          {guide.title}
                        </h3>
                        <p className="font-body text-sm text-bark-light leading-relaxed mt-2">
                          {guide.desc}
                        </p>
                      </div>
                      <span className="font-body text-xs text-stone whitespace-nowrap">{guide.readTime} min read</span>
                    </div>
                  </a>
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-bark mb-6">Frequently Asked Questions</h2>
              <div className="space-y-2">
                <details className="journal-card p-4 group cursor-pointer">
                  <summary className="font-display font-semibold text-bark text-sm marker:text-moss">Which guide should a beginner start with?</summary>
                  <p className="font-body text-sm text-bark-light leading-relaxed mt-3 pl-3 border-l-2 border-moss/30">
                    We recommend starting with the "Complete Beginner Survival Guide." This guide is designed for players with zero prior experience, covering the full process from landing on the starting island to establishing your first stable base. Combined with the in-game Survival Handbook system, you can master all basic operations within one to two in-game days. After finishing the beginner guide, we recommend reading the "Ultimate Energy System Guide," since a stable energy supply is a prerequisite for all subsequent systems.
                  </p>
                </details>
                <details className="journal-card p-4 group cursor-pointer">
                  <summary className="font-display font-semibold text-bark text-sm marker:text-moss">How accurate is the numerical data in the guides?</summary>
                  <p className="font-body text-sm text-bark-light leading-relaxed mt-3 pl-3 border-l-2 border-moss/30">
                    All numerical data comes from actual testing and estimation by community players and has been verified against the latest game version at the time of publishing. However, it should be noted that Solarpunk is still receiving ongoing updates, and certain parameters may change with version updates. We re-verify guide data after each major update, but some lag is inevitable. If you find discrepancies between our data and in-game performance, feel free to contact us via Afdian with feedback.
                  </p>
                </details>
                <details className="journal-card p-4 group cursor-pointer">
                  <summary className="font-display font-semibold text-bark text-sm marker:text-moss">Are the guides updated regularly?</summary>
                  <p className="font-body text-sm text-bark-light leading-relaxed mt-3 pl-3 border-l-2 border-moss/30">
                    Yes. We closely monitor Solarpunk's official update announcements and community feedback. After each game content update, we prioritize updating the most affected guides. The typical full update cycle is about one to two weeks. Guides for new content (such as new biomes or systems) are written and published after the community has had time to explore. You can check the "Latest Updates" section on the homepage or the News page for recent guide update status.
                  </p>
                </details>
              </div>
            </section>
          </div>

          <aside className="lg:w-[30%] space-y-10 shrink-0">
            <div className="field-sidebar-block">
              <h3 className="font-display text-base font-semibold text-bark mb-4">Browse by Difficulty</h3>
              <div className="space-y-2 font-body text-sm">
                <a href="/beginners" className="block text-moss hover:text-moss-dark transition-colors">Beginner &mdash; zero experience friendly</a>
                <a href="/farming" className="block text-moss hover:text-moss-dark transition-colors">Intermediate &mdash; requires basic knowledge</a>
                <a href="/automation" className="block text-moss hover:text-moss-dark transition-colors">Advanced &mdash; for experienced players</a>
              </div>
            </div>
            <div className="field-sidebar-block">
              <h3 className="font-display text-base font-semibold text-bark mb-4">Quick Navigation</h3>
              <div className="space-y-2 font-body text-sm text-bark-light">
                <p className="font-semibold text-bark">Basic Systems</p>
                <p>Energy / Farming / Resource Gathering</p>
                <p className="font-semibold text-bark mt-3">Advanced Systems</p>
                <p>Automation / Airship Building / Advanced Construction</p>
                <p className="font-semibold text-bark mt-3">Reference Tools</p>
                <p>Crafting Recipes / Tips Collection / Map Exploration</p>
              </div>
            </div>
          </aside>
        </div>
        <div className="field-divider mt-16" />
      </main>
          </div>
  );
}
