export const metadata = {
  title: "Solarpunk Energy Guide — Power & Electricity (2026)",
  description:
    "Complete energy guide for Solarpunk. Power generation, storage, and efficient energy systems.",
};

export default function EnergyPage() {
  const sources = [
    { name: 'Solar Panel', desc: 'Generates energy when exposed to sunlight. Most common renewable source — zero fuel cost, zero maintenance. Output varies by time of day and weather. Place in open areas with maximum sun exposure.', pros: 'No fuel, easy to build', cons: 'No power at night, reduced in cloudy weather' },
    { name: 'Windmill', desc: 'Produces energy based on current wind strength. Provides power day and night, making it a good complement to Solar Panels. Higher output on high-elevation islands with strong winds.', pros: 'All-day power, nighttime coverage', cons: 'Variable output, needs wind' },
    { name: 'Sky Turbine', desc: 'Large turbine that produces a lot of energy. An upgraded version of the Windmill with significantly higher output. Ideal for powering larger bases and multiple automated machines.', pros: 'High output, all-day operation', cons: 'Expensive to build, large footprint' },
    { name: 'Battery', desc: 'Stores excess electricity and releases it when needed. Not a generator but essential for any energy system. Each Battery has limited energy intake and output rates. Upgradable capacity: 2,200 → 3,500 → 5,500 → 8,000.', pros: 'Balances supply and demand', cons: 'Limited throughput, requires generation' },
    { name: 'Cable Connector', desc: 'Links energy networks together. Small Cable Connector for basic connections. Wireless Connector available with advanced research for cable-free power transmission.', pros: 'Essential for power grids', cons: 'Small connectors have range limits' },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <h1 className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-bark leading-none mb-4">Energy System Guide</h1>
      <p className="font-body text-base text-stone max-w-2xl italic mb-8">Solar, wind, storage, and power distribution — building a reliable energy grid</p>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="flex-1 lg:max-w-[65%] space-y-12">
          <section>
            <h2 className="font-display text-2xl font-bold text-bark mb-4">Energy System Overview</h2>
            <p className="font-body text-bark-light leading-relaxed">
              Energy powers your automated machines, lights, and advanced facilities. Without a stable energy supply, your Sprinklers, Transport Drones, and other machines simply stop working. Energy management involves three aspects: generation, storage, and distribution.
            </p>
            <p className="font-body text-bark-light leading-relaxed mt-3">
              Different islands have different energy profiles. Desert islands have abundant sunlight but less wind. Mountain islands have strong winds. Match your energy setup to each island&apos;s natural advantages. There is no single &quot;best&quot; setup — adapt to local conditions.
            </p>
            <p className="font-body text-bark-light leading-relaxed mt-3">
              For most temperate islands, start with 2 Solar Panels + 1 Windmill + 1 Battery. This provides daytime solar power, nighttime wind coverage, and storage to smooth out fluctuations. Expand your capacity as you add more machines to your base.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-bark mb-6">Energy Equipment</h2>
            <div className="space-y-4">
              {sources.map((s, i) => (
                <div key={i} className="journal-card p-6">
                  <h3 className="font-display text-lg font-semibold text-bark mb-2">{s.name}</h3>
                  <p className="font-body text-sm text-bark-light leading-relaxed mb-3">{s.desc}</p>
                  <div className="flex gap-6 pt-3 border-t border-clay/30">
                    <p className="font-body text-xs text-bark-light"><span className="font-semibold text-bark">Pros: </span>{s.pros}</p>
                    <p className="font-body text-xs text-bark-light"><span className="font-semibold text-bark">Cons: </span>{s.cons}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-bark mb-4">Power Logic & Sensors</h2>
            <p className="font-body text-bark-light leading-relaxed">
              Advanced energy management uses sensors and logic blocks. Connect a Daytime Sensor between your lights and power source — the lights automatically turn on at night and off during the day. Use Rain Sensors for weather-based switching. Logic Blocks let you invert signals and create conditional power routing.
            </p>
            <p className="font-body text-bark-light leading-relaxed mt-3">
              The Weather Station unlocks with dedicated research and provides comprehensive environmental data plus switching capabilities based on weather conditions.
            </p>
          </section>
        </div>

        <aside className="lg:w-[30%] space-y-10 shrink-0">
          <div className="field-sidebar-block">
            <h3 className="font-display text-base font-semibold text-bark mb-4">Related Guides</h3>
            <div className="space-y-2 font-body text-sm">
              <a href="/automation" className="block text-moss hover:text-moss-dark transition-colors">Automation & Machines</a>
              <a href="/farming" className="block text-moss hover:text-moss-dark transition-colors">Farming System Guide</a>
              <a href="/map" className="block text-moss hover:text-moss-dark transition-colors">World Map</a>
            </div>
          </div>
          <div className="field-sidebar-block">
            <h3 className="font-display text-base font-semibold text-bark mb-4">Recommended Setups</h3>
            <div className="font-body text-xs text-bark-light leading-relaxed space-y-2">
              <p><strong>Temperate Islands:</strong> 2 Solar + 1 Windmill + 1 Battery</p>
              <p><strong>Desert Islands:</strong> 3 Solar + 2 Batteries</p>
              <p><strong>Windy Islands:</strong> 2 Windmills + 1 Battery</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
