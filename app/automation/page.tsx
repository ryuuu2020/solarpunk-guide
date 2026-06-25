'use client';

export default function AutomationPage() {
  const components = [
    { name: 'Conveyor Belt', tier: 'T2', desc: 'The foundational component of automation systems, used for transporting items between two nodes. Straight-line layouts are most efficient — turns and intersections reduce transport speed and increase energy consumption.', key: 'Basic Automation Research' },
    { name: 'Sorter', tier: 'T2', desc: 'Separates items by type from conveyor belts — the core of automated sorting systems. Can be configured with complex filter rules for multi-level classification.', key: 'Basic Automation Research' },
    { name: 'Merger', tier: 'T2', desc: 'Combines multiple conveyor belts into a single main line. Used to consolidate outputs from different sources into a unified production line or warehouse.', key: 'Basic Automation Research' },
    { name: 'Industrial Furnace', tier: 'T3', desc: 'An automated version of the Furnace that supports automatic raw material input and finished product output via conveyor belts. Production efficiency is approximately 40% higher than manual furnaces. (community estimate)', key: 'Industrial Smelting Research' },
    { name: 'Auto Workbench', tier: 'T3', desc: 'A programmable automated production device — once a recipe is set, it automatically retrieves materials from connected conveyor belts and outputs finished products.', key: 'Advanced Automation Research' },
    { name: 'Drone Station', tier: 'T3', desc: 'Commands drones for item transport with wide coverage unaffected by terrain — ideal for long-distance logistics between islands.', key: 'Drone Tech Research' },
    { name: 'Smart Controller', tier: 'T4', desc: 'The central control unit of an automation system, capable of connecting multiple devices and setting global production strategies — an essential component for building large-scale automated factories.', key: 'Smart System Research' },
  ];

  return (
    <div className="min-h-screen bg-field-paper bg-paper-texture">
      <header className="pt-12 pb-6 px-4 lg:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col items-start">
          <a href="/" className="font-display text-sm text-moss hover:text-moss-dark transition-colors mb-4">&larr; Back to Home</a>
          <h1 className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-bark leading-none">Automation System Guide</h1>
          <p className="font-body text-base text-stone mt-3 max-w-md leading-relaxed italic">The complete progression path from manual gathering to fully automated assembly lines</p>
        </div>
        <div className="field-divider mt-6" />
      </header>

      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="flex-1 lg:max-w-[65%] space-y-12">
            <section>
              <h2 className="font-display text-2xl font-bold text-bark">Automation System Overview</h2>
              <p className="font-body text-bark-light leading-relaxed mt-4">
                Automation is the core pillar of mid-to-late game Solarpunk. In early game, you must manually handle all resource gathering, processing, and item crafting. But as your base grows and production demands increase, manual operation becomes extremely inefficient and time-consuming. Automation systems let you delegate repetitive production tasks to machines, freeing your attention for exploration, building, and advanced strategic planning. A well-designed automated base can multiply your overall production efficiency several-fold to dozens of times.
              </p>
              <p className="font-body text-bark-light leading-relaxed mt-3">
                The evolution of automation systems can be roughly divided into three phases. Phase 1 is "Point-to-Point Connection" — using conveyor belts to connect a single Mining Machine to a single Furnace for the most basic automated gathering and processing. Phase 2 is "Production Assembly Line" — chaining multiple processing devices together via conveyor belts to form a complete production chain from raw material to finished product. Phase 3 is "Smart Factory" — using Smart Controllers, Drone Networks, and central scheduling systems to achieve fully automated production and resource allocation across islands and production chains. Each phase transition requires unlocking the corresponding research technology while investing significant resources in infrastructure construction.
              </p>
              <p className="font-body text-bark-light leading-relaxed mt-3">
                When planning automation systems, the most important principles are "modularity" and "scalability." Don't lay out an overly ambitious automation blueprint all at once — you'll likely discover design flaws midway and need to tear everything down. Instead, start with the smallest working automation unit (e.g., a simple Mining → Smelting → Storage pipeline), verify it runs well, then gradually expand and optimize. Leaving enough space for future expansion is also an important design habit. Conveyor belts, sorters, and processing equipment all need adequate space for layout and adjustment — cramped designs are not only hard to maintain but also lack the flexibility to adapt to changing production needs.
              </p>
              <p className="font-body text-bark-light leading-relaxed mt-3">
                Energy is the lifeblood of automation systems. All automation equipment requires power to operate, and more advanced equipment consumes more power. A medium-sized automation line (containing 15-20 equipment units) consumes roughly 150-200 units of power per hour (community estimate). Before starting automation construction, make sure your energy system has sufficient generation capacity and storage to support the additional load. Otherwise, you may find your carefully built automation factory completely idle during nighttime or cloudy days, wasting resources and time.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-bark mb-6">Automation Components Overview</h2>
              <div className="space-y-3">
                {components.map((c, i) => (
                  <div key={i} className="journal-card p-5">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-display text-base font-semibold text-bark">{c.name}</h3>
                      <span className={`field-tag ${c.tier === 'T2' ? 'moss' : c.tier === 'T3' ? 'terracotta' : 'stone'} text-[10px]`}>{c.tier}</span>
                    </div>
                    <p className="font-body text-sm text-bark-light leading-relaxed">{c.desc}</p>
                    <p className="font-body text-xs text-stone mt-1">Unlock: {c.key}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-bark mb-6">Typical Layout Example</h2>
              <p className="font-body text-bark-light leading-relaxed">
                The simplest starter layout is "Mining Machine → Conveyor Belt → Furnace → Conveyor Belt → Storage Chest." The Mining Machine automatically gathers ore, the Conveyor Belt transports ore to the Furnace for smelting, and the smelted ingots are transported by another Belt into the Storage Chest. You can continuously expand on this basic template based on your needs: add an Auto Workbench after the Furnace for processing, insert Sorters between belts for item classification, or use Mergers to combine outputs from multiple Mining Machines onto a single main belt. For more detailed layout blueprints, check the community channel's guide resources, which feature player-verified efficient designs.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-bark mb-6">Frequently Asked Questions</h2>
              <div className="space-y-2">
                <details className="journal-card p-4 group cursor-pointer">
                  <summary className="font-display font-semibold text-bark text-sm marker:text-moss">Items on conveyor belts suddenly stopped moving — what should I do?</summary>
                  <p className="font-body text-sm text-bark-light leading-relaxed mt-3 pl-3 border-l-2 border-moss/30">
                    Check these three common causes: the target device is full (e.g., storage chest full, furnace output jammed), the conveyor belt direction is set incorrectly (items moving in reverse), or insufficient power causing equipment to pause. First clear the output buffer of the target device, then confirm all belt segments have the correct direction, and finally check if the power supply is adequate. In large-scale automation systems, regularly inspecting the status of all conveyor belts is a necessary maintenance habit.
                  </p>
                </details>
                <details className="journal-card p-4 group cursor-pointer">
                  <summary className="font-display font-semibold text-bark text-sm marker:text-moss">Should I use conveyor belts or drones first for automation?</summary>
                  <p className="font-body text-sm text-bark-light leading-relaxed mt-3 pl-3 border-l-2 border-moss/30">
                    Use conveyor belts first. Belts are most efficient for short-distance, high-frequency transport scenarios and have much lower crafting and maintenance costs than drone systems. Drones are better suited for long-distance transport across complex terrain or between islands, as well as scenarios requiring flexible route adjustments. The recommended progression is: first establish in-island basic automation with conveyor belts, then connect multiple islands' automation systems with drone networks to form a global logistics network.
                  </p>
                </details>
                <details className="journal-card p-4 group cursor-pointer">
                  <summary className="font-display font-semibold text-bark text-sm marker:text-moss">How do I avoid production bottlenecks in automation systems?</summary>
                  <p className="font-body text-sm text-bark-light leading-relaxed mt-3 pl-3 border-l-2 border-moss/30">
                    Regularly check the actual output and consumption data of each link in the production chain. If items pile up before a certain device, it means the downstream capacity of that device is insufficient; if a device frequently sits idle waiting for materials, its upstream capacity is insufficient. Adjust the number of devices and processing speed parameters to balance each link's capacity. A common beginner mistake is only adding production equipment while ignoring transport and storage capacity, causing the entire line's efficiency to drop. Remember that the entire automation chain must be balanced to reach its full potential.
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
                <a href="/farming" className="block text-moss hover:text-moss-dark transition-colors">Farming System Guide</a>
                <a href="/crafting" className="block text-moss hover:text-moss-dark transition-colors">Crafting Recipes</a>
              </div>
            </div>
            <div className="field-sidebar-block">
              <h3 className="font-display text-base font-semibold text-bark mb-4">Design Principles</h3>
              <div className="space-y-1 font-body text-xs text-bark-light leading-relaxed">
                <p>Modularity — Independent, reusable units</p>
                <p>Scalability — Leave room for expansion</p>
                <p>Maintainability — Clear labels and routing</p>
                <p>Redundancy — Double lines at critical nodes</p>
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
