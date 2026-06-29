export const metadata = {
  title: "Solarpunk Best Builds — Base Layouts, Energy & Automation Setups (2026)",
  description:
    "Best Solarpunk builds for every playstyle. Optimized base layouts, energy grid designs, farming setups, and defense configurations. Includes early, mid, and late-game builds.",
};

export default function BuildsPage() {
  const baseBuilds = [
    { tier: 'S', name: 'Fully Automated Skybase', focus: 'Automation + Energy', footprint: 'Large (8x8+)', keyStations: 'Laser Drill, Advanced Solar x4, Fusion Battery x2, Auto-Harvester x4, Defense Turrets', notes: 'Nearly self-sustaining. Produces resources faster than you can use them.' },
    { tier: 'A', name: 'Compact Island Fortress', focus: 'Defense + Efficiency', footprint: 'Medium (5x5)', keyStations: 'Plasma Cutter, Solar x2, Wind Turbine, Auto-Harvester x2, Reinforced Walls', notes: 'Excellent for hostile biomes. Minimal footprint, maximum defense.' },
    { tier: 'A', name: 'Vertical Farm Tower', focus: 'Food Production', footprint: 'Medium (4x4 x 3 floors)', keyStations: 'Auto-Harvester x6, Water Recycler, Advanced Solar x2, Fertilizer Station', notes: 'Produces enough food for 4+ players. Stack floors vertically to save island space.' },
    { tier: 'B', name: 'Explorer Outpost', focus: 'Mobility + Scouting', footprint: 'Small (3x3)', keyStations: 'Jetpack Charger, Basic Solar, Basic Battery, Small Storage, Campfire', notes: 'Minimal outpost for establishing footholds on new islands. Portable and quick to set up.' },
    { tier: 'B', name: 'Industrial Mining Hub', focus: 'Resource Gathering', footprint: 'Large (6x6)', keyStations: 'Laser Drill x2, Smelter x2, Medium Wind Turbine x2, Storage Array', notes: 'High-throughput resource processing. Best built near rich mineral deposits.' },
    { tier: 'C', name: 'Starter Shack', focus: 'Basic Survival', footprint: 'Tiny (3x3)', keyStations: 'Basic Workbench, Campfire, Basic Solar, Basic Battery, Bed', notes: 'Your first base. Functional but quickly outgrown. Upgrade to any B-tier+ build within 2 hours.' },
  ];

  const energyBuilds = [
    { name: 'Solar-Dominant Grid', components: 'Advanced Solar x4 + Fusion Battery x2', peakOutput: '1200kJ/day', nightCoverage: '~8 hours (full)', bestFor: 'Temperate biomes with clear weather', weakness: 'Storms and cloudy days reduce output by 60%' },
    { name: 'Hybrid Solar-Wind', components: 'Advanced Solar x2 + Medium Wind x3 + Fusion Battery', peakOutput: '1050kJ/day avg', nightCoverage: '~10 hours (full)', bestFor: 'Unpredictable weather biomes', weakness: 'Higher upfront cost, more space required' },
    { name: 'Geothermal Core', components: 'Geothermal Gen x2 + Basic Battery x4', peakOutput: '400kJ/day', nightCoverage: '24/7 (constant output)', bestFor: 'Bases near volcanic vents', weakness: 'Location-locked, cannot expand output' },
    { name: 'Budget Solar', components: 'Basic Solar x6 + Basic Battery x3', peakOutput: '600kJ/day', nightCoverage: '~4 hours (partial)', bestFor: 'Early-mid game on a budget', weakness: 'Battery drain overnight, can not run automation 24/7' },
  ];

  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="flex-1 lg:max-w-[65%] space-y-10">
          <section>
            <h1 className="chapter-heading">Solarpunk Best Builds &amp; Setups</h1>
            <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
              Your base design in Solarpunk determines how efficiently you gather resources, generate power, and defend against environmental threats. This guide covers optimized builds for every stage of the game — from your first 3x3 starter shack to a fully automated late-game skybase. Each build is ranked by versatility, resource efficiency, and scalability.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Base Build Tier List</h2>
            <p className="text-ink-light mb-4">Base builds are ranked from S (optimal, self-sustaining) to C (starter only). S-tier builds require significant rare materials — aim for B-tier by mid-game and transition to A/S as you accumulate Titanium, Gold, and Fusion Cores.</p>
            <div className="overflow-x-auto">
              <table className="parchment-table">
                <thead>
                  <tr><th>Tier</th><th>Build Name</th><th>Focus</th><th>Footprint</th><th>Key Components</th></tr>
                </thead>
                <tbody>
                  {baseBuilds.map((build) => (
                    <tr key={build.name}>
                      <td><span className={`inline-block px-2 py-0.5 text-xs font-bold rounded ${build.tier === 'S' ? 'bg-amber-500/20 text-amber-400' : build.tier === 'A' ? 'bg-emerald-500/20 text-emerald-400' : build.tier === 'B' ? 'bg-sky-500/20 text-sky-400' : 'bg-slate-500/20 text-slate-400'}`}>{build.tier}</span></td>
                      <td className="font-medium">{build.name}</td>
                      <td className="text-ink-faded text-sm">{build.focus}</td>
                      <td className="text-ink-faded text-sm">{build.footprint}</td>
                      <td className="text-ink-light text-sm">{build.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Energy Grid Builds</h2>
            <p className="text-ink-light mb-4">Your energy grid determines what you can run simultaneously. A well-designed grid never browns out — even during storms or at night. Choose your architecture based on your biome and automation ambitions.</p>
            <div className="overflow-x-auto">
              <table className="parchment-table">
                <thead>
                  <tr><th>Build Name</th><th>Components</th><th>Peak Output</th><th>Night Coverage</th><th>Best Biome</th></tr>
                </thead>
                <tbody>
                  {energyBuilds.map((build) => (
                    <tr key={build.name}>
                      <td className="font-medium">{build.name}</td>
                      <td className="text-ink-light text-sm">{build.components}</td>
                      <td className="text-ink-faded text-sm">{build.peakOutput}</td>
                      <td className="text-ink-faded text-sm">{build.nightCoverage}</td>
                      <td className="text-ink-light text-sm">{build.bestFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Build Progression: Starter to Skybase</h2>
            <h3 className="font-display text-xl font-medium text-ink mb-2">Phase 1 — Starter Shack (Hours 0-2)</h3>
            <p className="text-ink-light mb-3">Build a 3x3 wooden hut. Interior: Basic Workbench, Campfire, Bed, Small Storage. Exterior: Basic Solar Panel directly adjacent to the hut. Connect Solar to Workbench with copper wire. This gives you light, crafting, and basic power for research. Don't over-invest — you'll outgrow this within 2 hours.</p>
            <h3 className="font-display text-xl font-medium text-ink mb-2">Phase 2 — Compact Fortress (Hours 2-8)</h3>
            <p className="text-ink-light mb-3">Expand to a 5x5 layout. Add: Advanced Workbench, Electric Stove, Research Station, Basic Battery x2, Medium Wind Turbine. Build Reinforced Walls on the outer perimeter. Place Auto-Harvester near your first farm plot. This is your first real base — it can sustain you through the entire mid-game.</p>
            <h3 className="font-display text-xl font-medium text-ink mb-2">Phase 3 — Automated Skybase (Hours 8+)</h3>
            <p className="text-ink-light">Tear down or expand to 8x8+. Core components: Laser Drill, Advanced Solar x4, Fusion Battery x2, Auto-Harvester x4, Smelter x2, Defense Turrets on all corners. At this point your base produces resources faster than manual gathering. Focus on optimizing layout — place Auto-Harvesters adjacent to crops, Smelters near storage, and power generation on the sunniest edge of the island.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">FAQ</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-display text-lg font-medium text-ink mb-1">Which build should I aim for as a new player?</h3>
                <p className="text-ink-light">Start with the Starter Shack, then transition to Compact Island Fortress (A-tier) around hour 3-5. The Fortress gives you enough defense and efficiency to survive hostile biomes while remaining manageable in size. Don't rush for the Fully Automated Skybase — it requires rare materials you won't have until late game.</p>
              </div>
              <div>
                <h3 className="font-display text-lg font-medium text-ink mb-1">Solar-Dominant vs Hybrid energy grid — which is better?</h3>
                <p className="text-ink-light">Solar-Dominant is simpler and cheaper to build, but vulnerable to storms. Hybrid Solar-Wind provides more consistent 24/7 power and is the recommended choice for most players. The extra upfront cost of wind turbines pays off quickly in reliability. If you build near a volcanic vent, Geothermal Core is the best option — unlimited steady power with no weather dependency.</p>
              </div>
              <div>
                <h3 className="font-display text-lg font-medium text-ink mb-1">Can I build multiple bases on different islands?</h3>
                <p className="text-ink-light">Yes. The Explorer Outpost (B-tier) is designed for this. Once you have a Jetpack, you can establish small outposts on resource-rich islands. Each outpost should have a Basic Solar + Battery, a storage container, and a Campfire or Electric Stove. Link them via teleporters (once unlocked) for instant travel between bases.</p>
              </div>
            </div>
          </section>
          <p className="text-sm text-ink-faded mt-8 italic">Last updated: June 2026. Build rankings and component lists current as of this date.</p>
        </div>
        <aside className="lg:w-[30%] space-y-6">
          <div className="bg-parchment-light border border-ink-faded/20 rounded-sm p-5">
            <h3 className="font-display text-lg font-semibold text-ink mb-3">Related Guides</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/tier-list" className="text-accent hover:underline">Item &amp; Equipment Tier List</a></li>
              <li><a href="/energy" className="text-accent hover:underline">Energy System Guide</a></li>
              <li><a href="/crafting" className="text-accent hover:underline">Crafting System</a></li>
              <li><a href="/building" className="text-accent hover:underline">Building Guide</a></li>
              <li><a href="/automation" className="text-accent hover:underline">Automation Guide</a></li>
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}
