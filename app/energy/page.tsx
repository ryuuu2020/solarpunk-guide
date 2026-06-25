'use client';

export default function EnergyPage() {
  const sources = [
    { name: 'Solar Panel', tier: 'T2', output: '15 units/hr', condition: 'Daytime only', desc: 'The most common renewable energy source — simple to install with low maintenance costs. Power output is affected by latitude, weather, and panel cleanliness. Efficiency can reach 20 units/hr on high-sunlight islands like deserts.', pros: 'Zero fuel consumption, easy maintenance', cons: 'Ineffective at night, halved in cloudy weather' },
    { name: 'Wind Turbine', tier: 'T2', output: '8 units/hr', condition: 'All-day', desc: 'Generates power around the clock but with unstable output. Higher efficiency on highland and coastal islands. Pairs well with Solar Panels to cover nighttime and cloudy-day basic power needs.', pros: 'All-day generation, nighttime supplement', cons: 'Unstable output, large footprint' },
    { name: 'Battery Pack', tier: 'T2', output: 'Storage capacity', condition: 'Energy storage', desc: 'Not a generator itself but a core component of any energy system. Stores surplus daytime power for nighttime use, ensuring 24-hour stable power supply.', pros: 'Balances supply/demand, stabilizes grid', cons: 'Limited capacity, degrades with age' },
    { name: 'Geothermal Generator', tier: 'T3', output: '25 units/hr', condition: '24/7 stable', desc: 'Harnesses geothermal resources for stable, weather-independent power. Can only be built in specific geothermal-active zones. High construction cost.', pros: 'Stable 24/7 output, high power', cons: 'Location-restricted, high cost' },
    { name: 'Biomass Power', tier: 'T3', output: '12 units/hr', condition: 'Fuel consumed', desc: 'Burns organic matter to generate power — useful as a waste processing solution. Benefits from renewable raw materials; drawbacks include lower output and continuous fuel supply requirements.', pros: 'Renewable input, waste recycling', cons: 'Low output, requires fuel supply' },
  ];

  return (
    <div className="min-h-screen bg-field-paper bg-paper-texture">
      <header className="pt-12 pb-6 px-4 lg:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col items-start">
          <a href="/" className="font-display text-sm text-moss hover:text-moss-dark transition-colors mb-4">&larr; Back to Home</a>
          <h1 className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-bark leading-none">Energy System Guide</h1>
          <p className="font-body text-base text-stone mt-3 max-w-md leading-relaxed italic">Solar, wind, storage & advanced energy solutions — a complete breakdown</p>
        </div>
        <div className="field-divider mt-6" />
      </header>

      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="flex-1 lg:max-w-[65%] space-y-12">
            <section>
              <h2 className="font-display text-2xl font-bold text-bark">Energy System Overview</h2>
              <p className="font-body text-bark-light leading-relaxed mt-4">
                Energy is the driving force behind all automation equipment and advanced facilities. In Solarpunk, without a stable energy supply, even the most brilliant production designs remain on paper. Energy system management involves four aspects: generation, storage, distribution, and failure recovery — a dynamic balancing act that requires continuous attention and optimization.
              </p>
              <p className="font-body text-bark-light leading-relaxed mt-3">
                When choosing energy solutions, the most important reference factor is the island's geography and climate. The same energy configuration that works perfectly on a temperate island may be entirely inadequate when moved to a polar or desert island. There is no single "best" universal energy setup — you must design dedicated energy configurations based on each island's specific environment. Good energy strategy is about flexibly adapting to local conditions, not rigidly applying a fixed formula.
              </p>
              <p className="font-body text-bark-light leading-relaxed mt-3">
                Hybrid energy systems are the current community-recognized best practice. By combining multiple energy types, you can minimize the inherent drawbacks of any single source: Solar and Wind complement each other for all-weather coverage, Battery Packs balance supply and demand fluctuations, and Geothermal or Biomass provides stable baseline output. Energy can also be interconnected between islands — if one island has excess energy while another is short, you can transport battery modules via airship or establish energy pipelines for cross-island power dispatch.
              </p>
              <p className="font-body text-bark-light leading-relaxed mt-3">
                For most temperate island players, the recommended starter energy configuration is: 2 Solar Panels + 1 Wind Turbine + 2 Battery Packs. This setup provides roughly 38 units/hr of average output (solar-dominant during the day, supplemented by wind and battery at night and in cloudy weather — community estimate), enough to power a Research Station, Basic Workbench, Sprinklers, and roughly 10 automation components. As your base expands, you will need to gradually increase generation capacity and upgrade to more advanced energy solutions.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-bark mb-6">Energy Equipment Overview</h2>
              <div className="space-y-4">
                {sources.map((s, i) => (
                  <div key={i} className="journal-card p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-display text-lg font-semibold text-bark">{s.name}</h3>
                      <span className={`field-tag ${s.tier === 'T2' ? 'moss' : 'terracotta'} text-[10px]`}>{s.tier}</span>
                    </div>
                    <div className="flex flex-wrap gap-4 mb-2">
                      <span className="font-body text-sm text-stone">Output: {s.output}</span>
                      <span className="font-body text-sm text-stone">Condition: {s.condition}</span>
                    </div>
                    <p className="font-body text-sm text-bark-light leading-relaxed mb-2">{s.desc}</p>
                    <div className="flex gap-6 mt-3 pt-3 border-t border-clay/30">
                      <p className="font-body text-xs text-bark-light"><span className="font-semibold text-bark">Pros: </span>{s.pros}</p>
                      <p className="font-body text-xs text-bark-light"><span className="font-semibold text-bark">Cons: </span>{s.cons}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="font-body text-xs text-stone mt-4 italic">* Power data are community estimates; actual output is affected by environmental factors.</p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-bark mb-6">Frequently Asked Questions</h2>
              <div className="space-y-2">
                <details className="journal-card p-4 group cursor-pointer">
                  <summary className="font-display font-semibold text-bark text-sm marker:text-moss">How do I calculate my total power generation needs?</summary>
                  <p className="font-body text-sm text-bark-light leading-relaxed mt-3 pl-3 border-l-2 border-moss/30">
                    List the power requirements of all devices in your base, sum them up, then add a 20% redundancy margin to ensure nothing shuts down during peak demand. Example: Research Station (5) + Sprinkler (8) + Basic Workbench (3) + 2 Furnaces (8×2) + Lighting (2) = 34 units/hr. With redundancy, your target generation is 41 units/hr. Then work backwards from your island's sunlight and wind conditions to calculate the number of generation devices needed.
                  </p>
                </details>
                <details className="journal-card p-4 group cursor-pointer">
                  <summary className="font-display font-semibold text-bark text-sm marker:text-moss">How long does it take to fully charge a battery?</summary>
                  <p className="font-body text-sm text-bark-light leading-relaxed mt-3 pl-3 border-l-2 border-moss/30">
                    The time to fully charge depends on your generation equipment's current surplus output. For a standard battery (capacity 100 units): if you generate 38 units/hr and consume 20 units/hr during the day, the surplus is 18 units/hr for charging, taking approximately 5-6 hours to fully charge. This is also why at least 2 Battery Packs are recommended — they can more effectively absorb the large surplus power during peak generation periods.
                  </p>
                </details>
                <details className="journal-card p-4 group cursor-pointer">
                  <summary className="font-display font-semibold text-bark text-sm marker:text-moss">What\'s the best energy setup for polar islands?</summary>
                  <p className="font-body text-sm text-bark-light leading-relaxed mt-3 pl-3 border-l-2 border-moss/30">
                    Polar islands have short daylight hours (about 8 hours/day), greatly reducing solar panel efficiency. Recommended setup: Geothermal Generator (if a geothermal point is available) + multiple Wind Turbines + large-capacity Battery Packs. Wind Turbines may actually have higher power output in polar regions due to strong winds and low temperatures. If geothermal is unavailable, consider using Biomass power as a stable baseline output source. Polar island energy configurations must especially emphasize storage capacity and redundancy design.
                  </p>
                </details>
              </div>
            </section>
          </div>

          <aside className="lg:w-[30%] space-y-10 shrink-0">
            <div className="field-sidebar-block">
              <h3 className="font-display text-base font-semibold text-bark mb-4">Related Guides</h3>
              <div className="space-y-2 font-body text-sm">
                <a href="/automation" className="block text-moss hover:text-moss-dark transition-colors">Automation System Guide</a>
                <a href="/farming" className="block text-moss hover:text-moss-dark transition-colors">Farming System Guide</a>
                <a href="/map" className="block text-moss hover:text-moss-dark transition-colors">World Map</a>
              </div>
            </div>
            <div className="field-sidebar-block">
              <h3 className="font-display text-base font-semibold text-bark mb-4">Recommended Starter Configs</h3>
              <div className="font-body text-xs text-bark-light leading-relaxed">
                <p>Temperate Islands: 2 Solar + 1 Wind + 2 Battery</p>
                <p>Desert Islands: 3 Solar + 2 Battery</p>
                <p>Polar Islands: 2 Wind + 3 Battery + Geothermal</p>
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
