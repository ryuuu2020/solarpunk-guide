'use client';

export default function MapPage() {
  const biomes = [
    { name: 'Starting Island', climate: 'Temperate', daylight: '14 hours', danger: 'Low', resources: 'Wood, Stone, Fiber, Berries', desc: 'The player\'s starting island with a mild climate and abundant but limited resource variety. Includes a complete newcomer tutorial area and basic ecosystem.' },
    { name: 'Grassland Archipelago', climate: 'Temperate/Subtropical', daylight: '13 hours', danger: 'Low~Medium', resources: 'Copper Ore, Iron Ore, Cotton, Dye Plants', desc: 'An archipelago of medium-sized floating islands rich in mining resources — the critical stepping stone into the industrial era.' },
    { name: 'Desert Island', climate: 'Hot & Dry', daylight: '16 hours', danger: 'Medium', resources: 'Gold Ore, Silica Sand, Rare Minerals', desc: 'Abundant sunshine but extreme water scarcity. Solar panel efficiency peaks here, but you\'ll need a complete water recycling system for long-term habitation.' },
    { name: 'Crystal Caverns', climate: 'Constant Dark', daylight: '0 hours', danger: 'High', resources: 'Crystal Ore, Rare Earth Elements, Ancient Relics', desc: 'A new biome coming in the next major update. An underground cave environment with no natural light, completely dependent on artificial energy sources.' },
    { name: 'Polar Island', climate: 'Frigid', daylight: '8 hours', danger: 'High', resources: 'Rare Metals, Permafrost Crystals, Special Fibers', desc: 'A high-latitude floating island region with extremely low temperatures, requiring advanced heating equipment and powerful energy systems. Unique resources are exclusive to this zone.' },
    { name: 'Skyridge Highlands', climate: 'Volatile', daylight: '12 hours', danger: 'Extreme', resources: 'Titanium Ore, Energy Core Fragments, Data Chips', desc: 'The highest-tier floating island region unlocked in late game. Harsh environment but home to the most valuable resources. Only accessible with a fully upgraded airship.' },
  ];

  const tips = [
    'On first arrival to any new biome, build a small outpost rather than relocating your main base immediately.',
    'Bring at least 3 days\' worth of food and water to new islands — surprises are far more common than you\'d expect.',
    'Day-night cycle lengths vary dramatically between islands — energy planning must be based on the actual daylight hours of your target island.',
    'Establish complementary supply chains between desert and polar islands for maximum overall efficiency.',
    'When exploring new areas, mark resource locations first to plan future gathering routes.',
  ];

  return (
    <div className="min-h-screen bg-field-paper bg-paper-texture">
      <header className="pt-12 pb-6 px-4 lg:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col items-start">
          <a href="/" className="font-display text-sm text-moss hover:text-moss-dark transition-colors mb-4">&larr; Back to Home</a>
          <h1 className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-bark leading-none">World Map</h1>
          <p className="font-body text-base text-stone mt-3 max-w-md leading-relaxed italic">The floating island world at a glance — biomes, resource distribution & exploration routes</p>
        </div>
        <div className="field-divider mt-6" />
      </header>

      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="space-y-12">
          <section>
            <h2 className="font-display text-2xl font-bold text-bark">The Floating Island World</h2>
            <p className="font-body text-bark-light leading-relaxed mt-4">
              The world of Solarpunk consists of numerous islands floating among the clouds, each a unique micro-ecosystem. Islands are connected through airship travel, and the climate, resources, and danger levels vary dramatically between them. Understanding these differences and adjusting your strategy accordingly is key to successfully exploring the entire floating island world. The game world is not randomly generated — it's a carefully designed fixed map where every island has its unique coordinates and resource distribution.
            </p>
            <p className="font-body text-bark-light leading-relaxed mt-3">
              The starting island is your launching point — a mild climate with low danger, perfect for learning basic operations and establishing your first base. As the game progresses, you'll repair and upgrade your airship to unlock increasingly advanced island regions. Each new biome brings unique challenges and opportunities: desert islands offer excellent solar conditions but severe water shortages, polar islands yield rare metals but are dangerously cold, and Skyridge Highlands provide the best resources in the most extreme environment.
            </p>
            <p className="font-body text-bark-light leading-relaxed mt-3">
              This guide covers all known major island regions and biomes in the current version, organized by exploration order. Each entry includes climate characteristics, daylight length, danger level, and primary resource distribution — helping you prepare thoroughly before departure. Note that specific island resource distribution may adjust with game version updates; resource information on this page is aggregated from extensive community player exploration data and marked as "community estimates."
            </p>
            <p className="font-body text-bark-light leading-relaxed mt-3">
              When exploring new islands, follow the principle: observe first, establish an outpost, then develop. Upon arriving at a new island, first set up a small outpost in a safe zone with basic power, water storage, and simple shelter. Let it run for a while to confirm environmental stability before deciding whether to make it your main base for large-scale development. Additionally, establishing regular logistics transport between islands is one of the most important infrastructure projects in late-game.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-bark mb-6">Biome Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {biomes.map((b, i) => (
                <div key={i} className="journal-card p-6">
                  <h3 className="font-display text-lg font-semibold text-bark">{b.name}</h3>
                  <div className="mt-3 space-y-1.5 font-body text-sm text-bark-light">
                    <p><span className="font-semibold text-bark">Climate: </span>{b.climate}</p>
                    <p><span className="font-semibold text-bark">Daylight: </span>{b.daylight}</p>
                    <p><span className="font-semibold text-bark">Danger: </span>{b.danger}</p>
                    <p><span className="font-semibold text-bark">Main Resources: </span>{b.resources}</p>
                  </div>
                  <p className="font-body text-sm text-bark-light leading-relaxed mt-3 border-t border-clay/30 pt-3">{b.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-bark mb-6">Exploration Tips</h2>
            <div className="space-y-3">
              {tips.map((t, i) => (
                <div key={i} className="journal-card p-4">
                  <p className="font-body text-sm text-bark leading-relaxed">{t}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-bark mb-6">Frequently Asked Questions</h2>
            <div className="space-y-2">
              <details className="journal-card p-4 group cursor-pointer">
                <summary className="font-display font-semibold text-bark text-sm marker:text-moss">How do I unlock new island regions?</summary>
                <p className="font-body text-sm text-bark-light leading-relaxed mt-3 pl-3 border-l-2 border-moss/30">
                  New islands are unlocked through the airship system. The airship dock on your starting island needs to be repaired before use. After repairing your airship, you can travel to L2-tier Grassland Archipelago islands. To unlock higher-tier island regions, continuously upgrade your airship's engine system — each major engine upgrade unlocks a new island tier. We recommend prioritizing unlocking nearby, lower-danger islands first, accumulating resources before tackling advanced areas.
                </p>
              </details>
              <details className="journal-card p-4 group cursor-pointer">
                <summary className="font-display font-semibold text-bark text-sm marker:text-moss">Does island climate affect crop growing?</summary>
                <p className="font-body text-sm text-bark-light leading-relaxed mt-3 pl-3 border-l-2 border-moss/30">
                  Yes, and the impact is significant. Each island's climate conditions (temperature, daylight hours, humidity) directly affect crop growth speed and yield. For example, temperate islands suit most crops, desert islands have abundant sunlight but require heavy irrigation, and polar islands only support cold-resistant crops. You can leverage this by establishing specialized farms on different islands, maximizing the output efficiency of specific crops.
                </p>
              </details>
              <details className="journal-card p-4 group cursor-pointer">
                <summary className="font-display font-semibold text-bark text-sm marker:text-moss">Which island should I build my main base on?</summary>
                <p className="font-body text-sm text-bark-light leading-relaxed mt-3 pl-3 border-l-2 border-moss/30">
                  For most players, the starting island is the best choice for a main base. It has the mildest climate, the most complete ecosystem, and the largest buildable area. We recommend using the starting island as your central hub for living, farming, and basic production, while establishing specialized outposts (mining stations, energy stations) on other islands, funneling resources to the main base via airship logistics for processing. This "one hub, multiple outposts" layout has been proven the most efficient approach in practice.
                </p>
              </details>
            </div>
          </section>
        </div>
        <div className="field-divider mt-16" />
      </main>
      <footer className="max-w-6xl mx-auto px-4 lg:px-8 py-10 text-center">
        <p className="font-body text-xs text-stone">&copy; {new Date().getFullYear()} Solarpunk Survival Guide · <a href="/privacy" className="hover:text-bark transition-colors">Privacy Policy</a> · <a href="/terms" className="hover:text-bark transition-colors">Terms of Use</a></p>
      </footer>
    </div>
  );
}
