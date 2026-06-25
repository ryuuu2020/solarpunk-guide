import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solarpunk Building Guide — Base Construction & Automation Layout Complete Guide',
  description: 'Complete Solarpunk building system guide: building types, material tiers, automation conveyor layouts, drone networks, optimal base designs. Build an efficient floating island factory.',
};

export default function BuildingPage() {
  return (
    <div className="min-h-screen bg-field-paper bg-paper-texture">
      <header className="pt-12 pb-6 px-4 lg:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col items-start">
          <a href="/" className="font-display text-sm text-moss hover:text-moss-dark transition-colors mb-4">&larr; Back to Home</a>
          <h1 className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-bark leading-none">
            Building Guide
          </h1>
          <p className="font-body text-base text-stone mt-3 max-w-md leading-relaxed italic">
            From wooden huts to fully automated factories — Solarpunk building system deep dive
          </p>
        </div>
        <div className="field-divider mt-6" />
      </header>

      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="flex-1 lg:max-w-[65%] space-y-16">

            {/* Building Materials */}
            <section>
              <h2 className="font-display text-3xl font-bold text-bark">Building Material Tiers</h2>
              <div className="space-y-4 mt-6">
                <p className="font-body text-bark-light leading-relaxed">
                  Solarpunk's building system has three material tiers, each providing better durability and aesthetics bonuses.
                </p>
                <div className="overflow-x-auto mt-4">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="border-b-2 border-moss/30">
                        <th className="text-left py-3 px-4 font-display font-semibold text-bark">Tier</th>
                        <th className="text-left py-3 px-4 font-display font-semibold text-bark">Material</th>
                        <th className="text-left py-3 px-4 font-display font-semibold text-bark">Durability</th>
                        <th className="text-left py-3 px-4 font-display font-semibold text-bark">Aesthetics Bonus</th>
                        <th className="text-left py-3 px-4 font-display font-semibold text-bark">Unlock</th>
                      </tr>
                    </thead>
                    <tbody className="font-body text-bark-light">
                      <tr className="border-b border-clay/30">
                        <td className="py-3 px-4"><span className="field-tag moss text-[10px]">T1</span></td>
                        <td className="py-3 px-4">Wood</td>
                        <td className="py-3 px-4">100 HP</td>
                        <td className="py-3 px-4">+0</td>
                        <td className="py-3 px-4">Default unlock</td>
                      </tr>
                      <tr className="border-b border-clay/30">
                        <td className="py-3 px-4"><span className="field-tag terracotta text-[10px]">T2</span></td>
                        <td className="py-3 px-4">Stone</td>
                        <td className="py-3 px-4">250 HP</td>
                        <td className="py-3 px-4">+1/piece</td>
                        <td className="py-3 px-4">L2 island stone mining</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4"><span className="field-tag stone text-[10px]">T3</span></td>
                        <td className="py-3 px-4">Steel</td>
                        <td className="py-3 px-4">500 HP</td>
                        <td className="py-3 px-4">+2/piece</td>
                        <td className="py-3 px-4">L3 island cobalt mining</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Automation Layout */}
            <section>
              <h2 className="font-display text-3xl font-bold text-bark">Automation Conveyor Belt Layouts</h2>
              <div className="space-y-4 mt-6">
                <p className="font-body text-bark-light leading-relaxed">
                  Automation is Solarpunk's most fundamental advanced gameplay. Smart conveyor belt layouts can multiply production efficiency by 5-10 times.
                </p>

                <h3 className="font-display text-xl font-semibold text-bark mt-8">Basic Layout Patterns</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <div className="journal-card p-5">
                    <h4 className="font-display font-semibold text-bark text-sm">Bus Pattern (Recommended for Beginners)</h4>
                    <p className="font-body text-xs text-bark-light mt-2">
                      A main conveyor belt runs through the factory, with production lines branching off from the bus. Clear structure, easy to expand — suitable for early to mid-game.
                    </p>
                    <ul className="font-body text-xs text-bark-light mt-2 space-y-1 list-disc list-inside">
                      <li>Main bus: Copper Ingots + Iron Ingots + Wood</li>
                      <li>Branch lines: each branch handles one product</li>
                      <li>Scale: 5-15 workbenches</li>
                    </ul>
                  </div>
                  <div className="journal-card p-5">
                    <h4 className="font-display font-semibold text-bark text-sm">Modular Pattern (Advanced)</h4>
                    <p className="font-body text-xs text-bark-light mt-2">
                      Each product is its own independent module, with modules connected via drones. Highly scalable, easy to debug — ideal for late-game mass production.
                    </p>
                    <ul className="font-body text-xs text-bark-light mt-2 space-y-1 list-disc list-inside">
                      <li>Modules connected by drones</li>
                      <li>Each module is self-sufficient</li>
                      <li>Scale: 15+ workbenches</li>
                    </ul>
                  </div>
                </div>

                <h3 className="font-display text-xl font-semibold text-bark mt-8">Smart Sorter Setup</h3>
                <p className="font-body text-bark-light leading-relaxed mt-4">
                  Smart Sorters are the core component of automation systems. Place them at conveyor belt intersections, set filter rules, and automatically sort different resources to their corresponding storage.
                </p>
                <div className="journal-card p-4 mt-4">
                  <h4 className="font-display font-semibold text-bark text-sm">Recommended Sorting Rules</h4>
                  <ul className="font-body text-sm text-bark-light mt-2 space-y-1 list-disc list-inside">
                    <li>Sorter 1: Copper Ore → Furnace Line / Other → Continue</li>
                    <li>Sorter 2: Iron Ore → Furnace Line / Other → Continue</li>
                    <li>Sorter 3: Finished Products → Storage / Raw Materials → Return to Bus</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Drone System */}
            <section>
              <h2 className="font-display text-3xl font-bold text-bark">Drone Transport Network</h2>
              <div className="space-y-4 mt-6">
                <p className="font-body text-bark-light leading-relaxed">
                  Drones are the most powerful logistics tool in late game. Each drone can carry 5 items across islands, completely solving the long-distance transport problem that conveyor belts cannot handle.
                </p>
                <div className="overflow-x-auto mt-4">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="border-b-2 border-moss/30">
                        <th className="text-left py-3 px-4 font-display font-semibold text-bark">Drone Tier</th>
                        <th className="text-left py-3 px-4 font-display font-semibold text-bark">Capacity</th>
                        <th className="text-left py-3 px-4 font-display font-semibold text-bark">Flight Range</th>
                        <th className="text-left py-3 px-4 font-display font-semibold text-bark">Energy Use</th>
                      </tr>
                    </thead>
                    <tbody className="font-body text-bark-light">
                      <tr className="border-b border-clay/30">
                        <td className="py-3 px-4">Basic Drone</td>
                        <td className="py-3 px-4">5 items</td>
                        <td className="py-3 px-4">Same island</td>
                        <td className="py-3 px-4">3 units/trip</td>
                      </tr>
                      <tr className="border-b border-clay/30">
                        <td className="py-3 px-4">Advanced Drone</td>
                        <td className="py-3 px-4">10 items</td>
                        <td className="py-3 px-4">Adjacent islands</td>
                        <td className="py-3 px-4">5 units/trip</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">Cargo Drone</td>
                        <td className="py-3 px-4">20 items</td>
                        <td className="py-3 px-4">Any island</td>
                        <td className="py-3 px-4">8 units/trip</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="font-display text-3xl font-bold text-bark">Frequently Asked Questions</h2>
              <div className="space-y-2 mt-6">
                {[
                  { q: 'Items on the conveyor belt are stuck — what should I do?', a: 'Check if the belt direction is correct and whether the Smart Sorter has matching filter rules. If items reach the end of the belt with nowhere to go, they will stay at the end. Make sure every belt end is connected to a storage chest or workbench.' },
                  { q: 'Why aren\'t my drones working?', a: 'Check if the Drone Station has power and if the target location is within the drone\'s flight range. Basic Drones can only fly within the same island.' },
                  { q: 'What does building aesthetics do?', a: 'Aesthetics affects residents\' happiness and work efficiency. High-aesthetics bases can boost workbench production speed by 10-20%.' },
                ].map((faq, i) => (
                  <details key={i} className="journal-card p-4 cursor-pointer">
                    <summary className="font-display font-semibold text-bark text-sm marker:text-moss">{faq.q}</summary>
                    <p className="font-body text-sm text-bark-light leading-relaxed mt-3 pl-1 border-l-2 border-moss/30 pl-3">{faq.a}</p>
                  </details>
                ))}
              </div>
            </section>

          </div>

          <aside className="lg:w-[30%] space-y-10 shrink-0">
            <div className="field-sidebar-block">
              <h3 className="font-display text-base font-semibold text-bark mb-4">Quick Navigation</h3>
              <div className="space-y-2 font-body text-sm">
                <a href="#materials" className="block text-bark-light hover:text-bark transition-colors">Building Materials</a>
                <a href="#automation" className="block text-bark-light hover:text-bark transition-colors">Conveyor Belt Layouts</a>
                <a href="#drones" className="block text-bark-light hover:text-bark transition-colors">Drone System</a>
                <a href="#faq" className="block text-bark-light hover:text-bark transition-colors">FAQ</a>
              </div>
            </div>
          </aside>
        </div>
        <div className="field-divider mt-16" />
      </main>

      <footer className="max-w-6xl mx-auto px-4 lg:px-8 py-10 text-center">
        <p className="font-body text-xs text-stone">
          &copy; {new Date().getFullYear()} Solarpunk Survival Guide · <a href="/" className="hover:text-bark transition-colors">Back to Home</a>
        </p>
      </footer>
    </div>
  );
}
