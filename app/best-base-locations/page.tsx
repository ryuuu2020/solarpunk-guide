import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Solarpunk — Best Base Locations on Floating Islands (2026)",
  description: "Find the perfect base location in Solarpunk. Compare all floating island biomes with our tier list. Learn about resource availability, threats, and building tips for each location.",
};

const BASE_LOCATION_TIER_LIST = [
  { tier: 'S', location: 'Emerald Plateau', biome: 'Forest', resources: 'Abundant wood, fresh water, fertile soil', threats: 'Occasional air pirates (low)', space: 'Large (120x120m)', accessibility: 'Central, easy to reach', rating: '9.5/10' },
  { tier: 'S', location: 'Coral Spire', biome: 'Coastal', resources: 'Fish, seaweed, salt, wind power', threats: 'Storms (medium), flying predators', space: 'Medium (80x80m)', accessibility: 'Coastal routes only', rating: '9.2/10' },
  { tier: 'A', location: 'Sunhaven Mesa', biome: 'Grassland', resources: 'Good farming, solar power, open space', threats: 'Dust storms (medium)', space: 'Very Large (150x150m)', accessibility: 'Well-connected', rating: '8.5/10' },
  { tier: 'A', location: 'Mistveil Grove', biome: 'Forest', resources: 'Rare herbs, mushrooms, clean water', threats: 'Fog disorientation (low-medium)', space: 'Medium (90x90m)', accessibility: 'Hidden, hard to find', rating: '8.3/10' },
  { tier: 'A', location: 'Ironroot Cliff', biome: 'Mountain', resources: 'Metal ores, stone, geothermal energy', threats: 'Rock slides (medium), thin air', space: 'Small-Medium (60x70m)', accessibility: 'Requires airship or bridge', rating: '8.0/10' },
  { tier: 'B', location: 'Dunesweep Sands', biome: 'Desert', resources: 'Sand, sparse vegetation, underground water', threats: 'Sandstorms (high), heat (high)', space: 'Large (100x100m)', accessibility: 'Remote', rating: '7.0/10' },
  { tier: 'B', location: 'Gloommarsh', biome: 'Swamp', resources: 'Clay, reeds, medicinal plants', threats: 'Toxic gas (high), sinking ground', space: 'Medium (85x85m)', accessibility: 'Difficult terrain', rating: '6.8/10' },
  { tier: 'C', location: 'Frostpeak Aerie', biome: 'Snowy Mountain', resources: 'Ice, rare minerals, wind power', threats: 'Blizzards (very high), avalanches', space: 'Small (50x50m)', accessibility: 'Very remote', rating: '6.0/10' },
  { tier: 'C', location: 'Ashfall Rim', biome: 'Volcanic', resources: 'Geothermal energy, volcanic glass, sulfur', threats: 'Lava flows, toxic fumes (very high)', space: 'Medium (70x70m)', accessibility: 'Extremely dangerous', rating: '5.5/10' },
];

const RESOURCE_AVAILABILITY = [
  { location: 'Emerald Plateau', wood: '★★★★★', water: '★★★★★', food: '★★★★★', metal: '★★★', energy: '★★★★', rarity: '★★' },
  { location: 'Coral Spire', wood: '★★', water: '★★★★★', food: '★★★★', metal: '★★', energy: '★★★★★', rarity: '★★★' },
  { location: 'Sunhaven Mesa', wood: '★★★', water: '★★★', food: '★★★★★', metal: '★★', energy: '★★★★★', rarity: '★' },
  { location: 'Mistveil Grove', wood: '★★★★★', water: '★★★★★', food: '★★★★', metal: '★', energy: '★★', rarity: '★★★★★' },
  { location: 'Ironroot Cliff', wood: '★', water: '★★', food: '★', metal: '★★★★★', energy: '★★★★', rarity: '★★★' },
  { location: 'Dunesweep Sands', wood: '★', water: '★★', food: '★★', metal: '★★★', energy: '★★★★', rarity: '★★' },
  { location: 'Gloommarsh', wood: '★★★', water: '★★★★', food: '★★★', metal: '★★', energy: '★', rarity: '★★★★' },
  { location: 'Frostpeak Aerie', wood: '★', water: '★★★ (ice)', food: '★', metal: '★★★★', energy: '★★★★★', rarity: '★★★★★' },
  { location: 'Ashfall Rim', wood: '★', water: '★', food: '★', metal: '★★★', energy: '★★★★★', rarity: '★★★★' },
];

export default function BestBaseLocationsPage() {
  return (
    <div className="bg-field-paper bg-field-texture min-h-screen">
      <div className="max-w-5xl mx-auto px-4 lg:px-6 py-10">

        {/* Header */}
        <div className="mb-10">
          <p className="font-label text-[10px] uppercase tracking-[0.25em] text-moss mb-3">
            Location & Settlement Guide
          </p>
          <h1 className="font-display text-3xl lg:text-4xl tracking-display text-bark">
            BEST BASE LOCATIONS
          </h1>
          <p className="font-body text-lg text-bark-light mt-4 max-w-2xl leading-relaxed">
            Choosing where to build your base in Solarpunk is one of the most important decisions
            you&apos;ll make. Your base location determines what resources are easily accessible, what
            threats you&apos;ll face, and how much space you have for farming, crafting, and airship
            docking. This guide compares every major floating island biome to help you choose.
          </p>
          <div className="field-divider mt-6" />
        </div>

        {/* Intro Section */}
        <section className="mb-12 journal-card p-6 lg:p-8">
          <h2 className="font-display text-xl text-bark mb-4">
            What Makes a Good Base Location?
          </h2>
          <p className="font-body text-sm text-bark-light leading-relaxed mb-4">
            In Solarpunk, you&apos;re building on floating islands in the sky. This means every base location
            is isolated — you can&apos;t just walk to the next island whenever you need resources. You need
            an airship or build bridges to travel between islands. A good base location should have most
            of what you need within a reasonable distance, or at least be centrally located so you can
            reach other islands efficiently.
          </p>
          <p className="font-body text-sm text-bark-light leading-relaxed mb-4">
            The three most important factors are: <strong className="text-bark">resources</strong>,{' '}
            <strong className="text-bark">space</strong>, and <strong className="text-bark">safety</strong>.
            Resource-rich locations let you focus on crafting and building rather than constant expeditions.
            Large spaces give you room to expand your base as you progress. Safe locations (few threats)
            mean you can leave your base unattended without worrying about raids or environmental damage.
          </p>
          <p className="font-body text-sm text-bark-light leading-relaxed">
            That said, the &quot;best&quot; location depends on your playstyle. If you love farming and animal
            husbandry, the Emerald Plateau or Sunhaven Mesa are ideal. If you prefer industrial crafting
            and mining, Ironroot Cliff gives you all the metal and stone you need. And if you want a challenge
            with unique rewards, the high-tier dangerous locations like Frostpeak Aerie have resources you
            can&apos;t find anywhere else.
          </p>
        </section>

        {/* Base Location Tier List Table */}
        <section className="mb-12">
          <div className="mb-6">
            <h2 className="font-display text-xl text-bark">
              BASE LOCATION TIER LIST
            </h2>
            <div className="field-divider mt-4" />
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border border-clay/50 text-sm">
              <thead>
                <tr className="bg-field-paper-warm border-b border-clay/50">
                  <th className="text-left p-3 font-display text-moss">Tier</th>
                  <th className="text-left p-3 font-display text-moss">Location</th>
                  <th className="text-left p-3 font-display text-moss">Biome</th>
                  <th className="text-left p-3 font-display text-moss">Key Resources</th>
                  <th className="text-left p-3 font-display text-moss">Threats</th>
                  <th className="text-left p-3 font-display text-moss">Space</th>
                </tr>
              </thead>
              <tbody>
                {BASE_LOCATION_TIER_LIST.map((loc, i) => (
                  <tr key={i} className="border-b border-clay/30 hover:bg-field-paper-warm/70">
                    <td className="p-3">
                      <span className={`font-display text-lg ${
                        loc.tier === 'S' ? 'text-terracotta' :
                        loc.tier === 'A' ? 'text-moss' :
                        loc.tier === 'B' ? 'text-bark-light' : 'text-clay'
                      }`}>
                        {loc.tier}
                      </span>
                    </td>
                    <td className="p-3 font-body text-bark">{loc.location}</td>
                    <td className="p-3 font-body text-bark-light">{loc.biome}</td>
                    <td className="p-3 font-body text-bark-light text-xs">{loc.resources}</td>
                    <td className="p-3 font-body text-bark-light text-xs">{loc.threats}</td>
                    <td className="p-3 font-body text-bark-light tabular-nums">{loc.space}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Resource Availability Table */}
        <section className="mb-12">
          <div className="mb-6">
            <h2 className="font-display text-xl text-bark">
              RESOURCE AVAILABILITY BY LOCATION
            </h2>
            <p className="font-body text-sm text-bark-light mt-2">
              ★ = Scarce, ★★★★★ = Abundant. Ratings based on immediate vicinity (within 200m).
            </p>
            <div className="field-divider mt-4" />
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border border-clay/50 text-sm">
              <thead>
                <tr className="bg-field-paper-warm border-b border-clay/50">
                  <th className="text-left p-3 font-display text-moss">Location</th>
                  <th className="text-center p-3 font-display text-moss">Wood</th>
                  <th className="text-center p-3 font-display text-moss">Water</th>
                  <th className="text-center p-3 font-display text-moss">Food</th>
                  <th className="text-center p-3 font-display text-moss">Metal</th>
                  <th className="text-center p-3 font-display text-moss">Energy</th>
                  <th className="text-center p-3 font-display text-moss">Rare Items</th>
                </tr>
              </thead>
              <tbody>
                {RESOURCE_AVAILABILITY.map((res, i) => (
                  <tr key={i} className="border-b border-clay/30 hover:bg-field-paper-warm/70">
                    <td className="p-3 font-body text-bark">{res.location}</td>
                    <td className="p-3 text-center font-body text-terracotta">{res.wood}</td>
                    <td className="p-3 text-center font-body text-moss">{res.water}</td>
                    <td className="p-3 text-center font-body text-terracotta">{res.food}</td>
                    <td className="p-3 text-center font-body text-clay">{res.metal}</td>
                    <td className="p-3 text-center font-body text-moss">{res.energy}</td>
                    <td className="p-3 text-center font-body text-terracotta">{res.rarity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Detailed Location Guides */}
        <section className="mb-12">
          <div className="mb-6">
            <h2 className="font-display text-xl text-bark">
              DETAILED LOCATION REVIEWS
            </h2>
            <div className="field-divider mt-4" />
          </div>
          <div className="space-y-8">
            <div className="journal-card p-6">
              <h3 className="font-display text-lg text-moss mb-3">
                Emerald Plateau (S-Tier) — The All-Rounder&apos;s Dream
              </h3>
              <p className="font-body text-sm text-bark-light leading-relaxed mb-3">
                Emerald Plateau is widely considered the best overall base location for most players.
                It has abundant wood from the surrounding forest, multiple freshwater springs, and some
                of the most fertile soil in the game for farming. The large flat space (120x120m) gives
                you plenty of room to build a sprawling base with separate farming, crafting, and living
                areas. Threats are minimal — occasional air pirate raids are the only real danger, and
                they&apos;re easy to defend against with basic walls and a few defensive turrets.
              </p>
              <p className="font-body text-sm text-bark-light leading-relaxed">
                The central location is another huge plus. From Emerald Plateau, you can reach Coral Spire
                to the southeast, Mistveil Grove to the north, and Sunhaven Mesa to the west with relatively
                short airship trips. This makes it an excellent &quot;hub&quot; base even in the late game.
                The only downside is that metal resources are only average, so you&apos;ll need to make
                occasional trips to Ironroot Cliff for serious crafting projects.
              </p>
            </div>

            <div className="journal-card p-6">
              <h3 className="font-display text-lg text-moss mb-3">
                Coral Spire (S-Tier) — The Coastal Paradise
              </h3>
              <p className="font-body text-sm text-bark-light leading-relaxed mb-3">
                If you love the idea of a seaside base (even if the &quot;sea&quot; is clouds below), Coral Spire
                is spectacular. Jutting out from the main island chain, this coastal location gives you access to
                fish, seaweed, and salt — resources that are hard to get elsewhere. The wind power potential here
                is unmatched, with consistent strong breezes that keep your wind turbines spinning at maximum output.
              </p>
              <p className="font-body text-sm text-bark-light leading-relaxed">
                The main challenges are the periodic storms that roll in from the open sky. These can damage
                unprotected structures and knock out power lines. Building with storm-resistant materials
                (treated wood or stone) and having backup power (batteries or a secondary solar array) is
                essential. The smaller build area (80x80m) also means you&apos;ll need to be more compact
                with your base design compared to Emerald Plateau.
              </p>
            </div>

            <div className="journal-card p-6">
              <h3 className="font-display text-lg text-moss mb-3">
                Ironroot Cliff (A-Tier) — The Industrial Choice
              </h3>
              <p className="font-body text-sm text-bark-light leading-relaxed">
                For players who want to focus on crafting, automation, and industry, Ironroot Cliff is unbeatable.
                The metal ore veins here are the richest in the game, and there&apos;s plenty of stone for
                construction. Geothermal energy from the nearby magma vents provides reliable power. The trade-off
                is that food and wood are scarce — you&apos;ll need to either import these or build greenhouses
                and planters to sustain yourself. The smaller build area and remote location make this better suited
                for experienced players who already have an airship and understand the logistics of resource transport.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12 journal-card p-6 lg:p-8">
          <h2 className="font-display text-xl text-bark mb-6">FAQ</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-display text-base text-moss mb-2">
                Q: Can I move my base after building it?
              </h3>
              <p className="font-body text-sm text-bark-light leading-relaxed">
                A: Technically yes, but it&apos;s a huge undertaking. You can deconstruct buildings and move
                the materials to a new location, but you&apos;ll lose some resources in the process (approximately
                10-15% waste). Most players prefer to choose their location carefully and commit to it. If you
                absolutely must move, prioritize moving essential crafting stations first and leave decorative
                blocks behind — you can always gather more decorative materials later.
              </p>
            </div>
            <div>
              <h3 className="font-display text-base text-moss mb-2">
                Q: Do I need to worry about neighbors or other players?
              </h3>
              <p className="font-body text-sm text-bark-light leading-relaxed">
                A: In single-player mode, no — you&apos;re completely alone. In multiplayer servers, it depends
                on the server settings. Some servers allow PvP and base raiding, while others are cooperative.
                Check your server&apos;s rules before investing heavily in a base. On PvP servers, consider building
                defensible locations (like Ironroot Cliff with its narrow approach) or hidden bases in hard-to-find
                locations like Mistveil Grove.
              </p>
            </div>
            <div>
              <h3 className="font-display text-base text-moss mb-2">
                Q: What&apos;s the best location for beginners?
              </h3>
              <p className="font-body text-sm text-bark-light leading-relaxed">
                A: Emerald Plateau, without a doubt. The abundance of basic resources (wood, water, food) means
                you can focus on learning the game&apos;s systems without constant resource scavenging. The minimal
                threats let you experiment with building and crafting safely. Once you&apos;re comfortable with
                the game mechanics and have an airship, you can always build a second &quot;forward operating base&quot;
                in a more specialized location.
              </p>
            </div>
          </div>
        </section>

        {/* Related Guides Sidebar */}
        <div className="mb-8 border border-clay/50 p-5 bg-field-paper-warm/90">
          <h3 className="font-display text-lg font-semibold text-bark mb-3">Related Guides</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/map" className="text-moss hover:text-terracotta transition-colors">
                Interactive Map Guide
              </a>
            </li>
            <li>
              <a href="/building" className="text-moss hover:text-terracotta transition-colors">
                Building & Construction Guide
              </a>
            </li>
            <li>
              <a href="/survival" className="text-moss hover:text-terracotta transition-colors">
                Survival Basics Guide
              </a>
            </li>
          </ul>
        </div>

        <p className="font-label text-[10px] uppercase tracking-wider text-clay/60 text-center">
          Based on 200+ hours of gameplay & community surveys. Updated June 2026. Unofficial fan guide.
        </p>
      </div>
    </div>
  );
}
