'use client';

export default function AirshipPage() {
  const engines = [
    { name: 'Basic Engine', tier: 'T1', thrust: 'Basic', fuel: 'Low', desc: 'The default engine on your starting airship. Limited thrust, only capable of traveling between the starting island and L2 Grassland Archipelago. Suitable for beginners exploring nearby islands.' },
    { name: 'Intermediate Engine', tier: 'T2', thrust: 'Medium', fuel: 'Medium', desc: 'An upgraded engine that unlocks travel to L3-tier islands. Improved fuel efficiency — the workhorse for mid-game exploration.' },
    { name: 'Heavy Engine', tier: 'T3', thrust: 'High', fuel: 'High', desc: 'Powerful thrust allows for larger cargo loads, ideal for logistics transport ships. Higher fuel consumption — pair with a large fuel tank.' },
    { name: 'Ultimate Engine', tier: 'T4', thrust: 'Extreme', fuel: 'Very High', desc: 'The most powerful engine in the game, unlocking travel to all floating island regions. Capable of moving a massive airship fully loaded.' },
  ];

  return (
    <div className="min-h-screen bg-field-paper bg-paper-texture">
      <header className="pt-12 pb-6 px-4 lg:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col items-start">
          <a href="/" className="font-display text-sm text-moss hover:text-moss-dark transition-colors mb-4">&larr; Back to Home</a>
          <h1 className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-bark leading-none">Airship System Deep Dive</h1>
          <p className="font-body text-base text-stone mt-3 max-w-md leading-relaxed italic">Engine selection, deck layout, and building a mobile base above the clouds</p>
        </div>
        <div className="field-divider mt-6" />
      </header>

      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="flex-1 lg:max-w-[65%] space-y-12">
            <section>
              <h2 className="font-display text-2xl font-bold text-bark">Airship System Overview</h2>
              <p className="font-body text-bark-light leading-relaxed mt-4">
                The airship is Solarpunk's most iconic system — it serves as both your vehicle for traveling between floating islands and a fully customizable mobile base. From the initially repaired wreck to a late-game flying fortress, the airship system's development spans nearly the entire game. Each engine upgrade unlocks new island regions, and each deck expansion gives you more customization space and functional improvements.
              </p>
              <p className="font-body text-bark-light leading-relaxed mt-3">
                The airship system can be divided into three core parts: the Engine System determines how far you can fly and how much you can carry, the Deck Layout determines the actual functionality and living comfort of your ship, and Fuel Management affects the economics and sustainability of flight. These three parts constrain and complement each other — a more powerful engine allows for a larger deck and heavier payload, but also requires more fuel and a larger fuel tank. Finding the balance between thrust, payload, and range in airship design is an ongoing optimization challenge for every ship designer.
              </p>
              <p className="font-body text-bark-light leading-relaxed mt-3">
                An airship is more than just a vehicle. On the deck, you can place workbenches, storage chests, research stations, planting areas, and energy equipment — transforming it into a fully self-sufficient mobile base. This "flying base" concept is particularly important in late-game exploration — when you need to travel to high-danger islands far from your main base, the ship's facilities can sustain your basic survival and production needs. Many veteran players choose to build two airships for different purposes: a lightweight exploration vessel for rapid scouting and short trips, and a heavy mobile base for long-range expeditions and island development.
              </p>
              <p className="font-body text-bark-light leading-relaxed mt-3">
                Fuel management is a non-negligible cost factor in airship operations. Every flight consumes a certain amount of fuel, proportional to flight distance, engine type, and current cargo weight. Establishing a stable fuel production and resupply system (typically involving biomass refining or cross-island resource procurement) is essential for long-term operation of multiple airships. Always verify sufficient fuel reserves before long voyages and carry a reserve supply — running out of fuel mid-cloud is one of the worst experiences in Solarpunk.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-bark mb-6">Engine Type Comparison</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b-2 border-moss/30">
                      <th className="text-left py-3 px-3 font-display font-semibold text-bark">Engine</th>
                      <th className="text-left py-3 px-3 font-display font-semibold text-bark">Tier</th>
                      <th className="text-left py-3 px-3 font-display font-semibold text-bark">Thrust</th>
                      <th className="text-left py-3 px-3 font-display font-semibold text-bark">Fuel Use</th>
                      <th className="text-left py-3 px-3 font-display font-semibold text-bark">Description</th>
                    </tr>
                  </thead>
                  <tbody className="font-body text-bark-light">
                    {engines.map((e, i) => (
                      <tr key={i} className="border-b border-clay/30">
                        <td className="py-3 px-3 font-semibold text-bark">{e.name}</td>
                        <td className="py-3 px-3">{e.tier}</td>
                        <td className="py-3 px-3">{e.thrust}</td>
                        <td className="py-3 px-3">{e.fuel}</td>
                        <td className="py-3 px-3 text-xs">{e.desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="font-body text-xs text-stone mt-4 italic">* Fuel consumption and thrust data are community estimates; actual values depend on cargo weight and travel distance.</p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-bark mb-6">Deck Layout Recommendations</h2>
              <p className="font-body text-bark-light leading-relaxed">
                A typical small exploration airship deck layout: Engine Room (rear) → Cockpit (front) → Storage Area (center) → Small Living Quarters (center wings). The fuel tank should be placed as close to the engine as possible to minimize pipeline losses. Reserve space for an escape pod on the deck — while it takes up room, it can save your core supplies and tech progress during extreme storms or engine failures. Large mobile base layouts are more complex, requiring dedicated energy compartments, production workshops, storage areas, and sufficient living space to support long-duration self-sufficient voyages.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-bark mb-6">Frequently Asked Questions</h2>
              <div className="space-y-2">
                <details className="journal-card p-4 group cursor-pointer">
                  <summary className="font-display font-semibold text-bark text-sm marker:text-moss">What materials are needed to repair the airship?</summary>
                  <p className="font-body text-sm text-bark-light leading-relaxed mt-3 pl-3 border-l-2 border-moss/30">
                    Initial airship repair requires crafting a Repair Kit (Iron Ingot x5 + Wood x8 + Cloth x2) and using it at the Airship Dock. Iron Ingots are obtained by smelting Iron Ore in a Furnace, and Cloth is obtained by processing Fiber or Fiber Crops. After repair, you also need to unlock Basic Navigation Technology research and use the "Test Flight" function at the dock once to complete the calibration for your first flight. The entire process requires full energy and material support from a small base.
                  </p>
                </details>
                <details className="journal-card p-4 group cursor-pointer">
                  <summary className="font-display font-semibold text-bark text-sm marker:text-moss">How many airships should I build?</summary>
                  <p className="font-body text-sm text-bark-light leading-relaxed mt-3 pl-3 border-l-2 border-moss/30">
                    It depends on your game stage and goals. In early game, focus resources on building one general-purpose airship to meet basic island unlocking and resource transport needs. Mid-game, add a dedicated logistics ship for regular material transport between unlocked islands. Late game, you can maintain a small fleet across multiple islands, each with different roles: exploration vessel, transport ship, mobile base ship, and combat vessel. But note that each additional airship increases fuel consumption and maintenance costs.
                  </p>
                </details>
                <details className="journal-card p-4 group cursor-pointer">
                  <summary className="font-display font-semibold text-bark text-sm marker:text-moss">Can airships be used for combat?</summary>
                  <p className="font-body text-sm text-bark-light leading-relaxed mt-3 pl-3 border-l-2 border-moss/30">
                    The current version of Solarpunk does not have a dedicated airship combat system. Airships are primarily used for exploration, transport, and as mobile bases. However, you can install defensive equipment on the deck to handle environmental hazards — such as storm shields for extreme weather and reinforced armor for high-speed collision protection. Future version updates may introduce richer airship interaction mechanics. The community has also discussed and expressed anticipation for potential aerial combat systems.
                  </p>
                </details>
              </div>
            </section>
          </div>

          <aside className="lg:w-[30%] space-y-10 shrink-0">
            <div className="field-sidebar-block">
              <h3 className="font-display text-base font-semibold text-bark mb-4">Related Guides</h3>
              <div className="space-y-2 font-body text-sm">
                <a href="/energy" className="block text-moss hover:text-moss-dark transition-colors">Energy System Guide</a>
                <a href="/map" className="block text-moss hover:text-moss-dark transition-colors">World Map</a>
                <a href="/automation" className="block text-moss hover:text-moss-dark transition-colors">Automation System Guide</a>
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
