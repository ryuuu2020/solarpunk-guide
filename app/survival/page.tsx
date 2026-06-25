import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solarpunk Survival Guide — Floating Island Survival from Scratch',
  description: 'Complete Solarpunk beginner guide: what to do on Day 1, energy systems, food sources, base location, airship repair. Build your floating island home from zero.',
};

export default function SurvivalPage() {
  return (
    <div className="min-h-screen bg-field-paper bg-paper-texture">
      <header className="pt-12 pb-6 px-4 lg:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col items-start">
          <a href="/" className="font-display text-sm text-moss hover:text-moss-dark transition-colors mb-4">&larr; Back to Home</a>
          <h1 className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-bark leading-none">
            Survival Guide
          </h1>
          <p className="font-body text-base text-stone mt-3 max-w-md leading-relaxed italic">
            A complete Solarpunk survival walkthrough from scratch
          </p>
        </div>
        <div className="field-divider mt-6" />
      </header>

      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="flex-1 lg:max-w-[65%] space-y-16">

            {/* Day 1: First Steps */}
            <section>
              <h2 className="font-display text-3xl font-bold text-bark">Day 1: Must-Do Checklist</h2>
              <div className="space-y-4 mt-6">
                <p className="font-body text-bark-light leading-relaxed">
                  Your first day in the Solarpunk world is critical. You spawn on a floating island with basic trees, stones, and limited resources nearby. Here is the standard new-player opening procedure.
                </p>

                <div className="journal-card p-6">
                  <h3 className="font-display text-lg font-semibold text-bark mb-4">Day 1 Action Checklist</h3>
                  <ol className="space-y-4 font-body text-bark-light">
                    <li className="flex gap-3">
                      <span className="step-number shrink-0">1</span>
                      <div>
                        <strong className="text-bark">Craft the Survival Handbook</strong>
                        <p className="mt-1">Collect 2 Wood (chop trees), press F to open the crafting menu, and craft the "Survival Handbook." This is the single most important item in the game — it unlocks the recipe browser, tracks game progress, and provides hints for your next steps.</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="step-number shrink-0">2</span>
                      <div>
                        <strong className="text-bark">Build a Temporary Shelter</strong>
                        <p className="mt-1">Build a 4x4 wooden hut. It doesn't need to be big — you just need space for a workbench and bed at first. Make sure it has a roof (rain will damage uncovered items).</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="step-number shrink-0">3</span>
                      <div>
                        <strong className="text-bark">Craft Basic Tools</strong>
                        <p className="mt-1">Craft a Wooden Axe (+50% woodcutting efficiency), Wooden Pickaxe (+50% mining efficiency), and Wooden Sword (basic self-defense). Prioritize crafting tools rather than gathering bare-handed.</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="step-number shrink-0">4</span>
                      <div>
                        <strong className="text-bark">Gather Food</strong>
                        <p className="mt-1">Harvest berry bushes (3-5 berries each) and knock down apples from trees if available on your island. You need at least 20 units of food on Day 1 to maintain your hunger bar.</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="step-number shrink-0">5</span>
                      <div>
                        <strong className="text-bark">Craft a Campfire</strong>
                        <p className="mt-1">Use 5 Wood and 3 Stone to craft a Campfire. Temperatures drop at night — the Campfire provides warmth and cooking functionality.</p>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
            </section>

            {/* Energy System */}
            <section>
              <h2 className="font-display text-3xl font-bold text-bark">Energy System Deep Dive</h2>
              <div className="space-y-4 mt-6">
                <p className="font-body text-bark-light leading-relaxed">
                  Solarpunk's energy system is the foundation of all automated production. Without power, your conveyor belts, drones, and advanced workbenches cannot function. Understanding the energy system is key to advancing in the game.
                </p>

                <h3 className="font-display text-xl font-semibold text-bark mt-8">Power Generation Comparison</h3>
                <div className="overflow-x-auto mt-4">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="border-b-2 border-moss/30">
                        <th className="text-left py-3 px-4 font-display font-semibold text-bark">Device</th>
                        <th className="text-left py-3 px-4 font-display font-semibold text-bark">Output (/hr)</th>
                        <th className="text-left py-3 px-4 font-display font-semibold text-bark">Active Time</th>
                        <th className="text-left py-3 px-4 font-display font-semibold text-bark">Required Materials</th>
                      </tr>
                    </thead>
                    <tbody className="font-body text-bark-light">
                      <tr className="border-b border-clay/30">
                        <td className="py-3 px-4 font-semibold text-bark">Solar Panel</td>
                        <td className="py-3 px-4">15 units</td>
                        <td className="py-3 px-4">Daytime only</td>
                        <td className="py-3 px-4">Iron Ingot x5 + Glass x3 + Copper Wire x8</td>
                      </tr>
                      <tr className="border-b border-clay/30">
                        <td className="py-3 px-4 font-semibold text-bark">Wind Turbine</td>
                        <td className="py-3 px-4">8 units</td>
                        <td className="py-3 px-4">All day</td>
                        <td className="py-3 px-4">Iron Ingot x8 + Cloth x4 + Wood x6</td>
                      </tr>
                      <tr className="border-b border-clay/30">
                        <td className="py-3 px-4 font-semibold text-bark">Battery Pack</td>
                        <td className="py-3 px-4">Stores 50 units</td>
                        <td className="py-3 px-4">Passive charge/discharge</td>
                        <td className="py-3 px-4">Copper Ingot x6 + Iron Ingot x3 + Glass x2</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-semibold text-bark">Advanced Solar</td>
                        <td className="py-3 px-4">25 units</td>
                        <td className="py-3 px-4">Daytime only</td>
                        <td className="py-3 px-4">Steel Ingot x5 + Reinforced Glass x3 + Chip x2</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="font-display text-xl font-semibold text-bark mt-8">Recommended Energy Configurations</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <div className="journal-card p-5">
                    <h4 className="font-display font-semibold text-bark text-sm">Early Game (Day 1-7)</h4>
                    <ul className="font-body text-sm text-bark-light mt-2 space-y-1 list-disc list-inside">
                      <li>1x Solar Panel</li>
                      <li>1x Battery Pack</li>
                      <li>Powers: Workbench + Furnace</li>
                    </ul>
                  </div>
                  <div className="journal-card p-5">
                    <h4 className="font-display font-semibold text-bark text-sm">Mid Game (After L2 Island Unlock)</h4>
                    <ul className="font-body text-sm text-bark-light mt-2 space-y-1 list-disc list-inside">
                      <li>2x Solar Panel</li>
                      <li>1x Wind Turbine</li>
                      <li>3x Battery Pack</li>
                      <li>Powers: Conveyor Belts + Automation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Food & Farming */}
            <section>
              <h2 className="font-display text-3xl font-bold text-bark">Food & Farming</h2>
              <div className="space-y-4 mt-6">
                <p className="font-body text-bark-light leading-relaxed">
                  Food is the foundation of survival. A depleted hunger bar causes continuous health loss. Solarpunk offers multiple food sources: gathering, hunting, farming, and automated farms.
                </p>

                <h3 className="font-display text-xl font-semibold text-bark mt-8">Food Source Priority</h3>
                <div className="space-y-3 mt-4">
                  <div className="journal-card p-4">
                    <span className="field-tag moss text-[10px] mb-2 inline-block">Early</span>
                    <h4 className="font-display font-semibold text-bark">Berry Gathering + Simple Farming</h4>
                    <p className="font-body text-sm text-bark-light mt-1">Harvest berry bushes on the island, use Wood to build 4-6 farmland plots, and plant Carrots (fastest growing, 3 days to mature).</p>
                  </div>
                  <div className="journal-card p-4">
                    <span className="field-tag terracotta text-[10px] mb-2 inline-block">Mid</span>
                    <h4 className="font-display font-semibold text-bark">Diverse Farm + Sprinkler System</h4>
                    <p className="font-body text-sm text-bark-light mt-1">Expand farmland to 12-16 plots, adding Wheat and Potatoes. Build Sprinklers connected to water pipes for automated irrigation.</p>
                  </div>
                  <div className="journal-card p-4">
                    <span className="field-tag stone text-[10px] mb-2 inline-block">Late</span>
                    <h4 className="font-display font-semibold text-bark">Full Auto Farm + Food Processing</h4>
                    <p className="font-body text-sm text-bark-light mt-1">Auto Planter + Auto Harvester + Conveyor Belts feeding directly into storage. Build a Food Processing Station to craft advanced foods (Bread, Jam).</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Island Tiers */}
            <section>
              <h2 className="font-display text-3xl font-bold text-bark">Island Tiers & Resource Distribution</h2>
              <div className="space-y-4 mt-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="border-b-2 border-moss/30">
                        <th className="text-left py-3 px-4 font-display font-semibold text-bark">Tier</th>
                        <th className="text-left py-3 px-4 font-display font-semibold text-bark">Unlock Condition</th>
                        <th className="text-left py-3 px-4 font-display font-semibold text-bark">Main Resources</th>
                        <th className="text-left py-3 px-4 font-display font-semibold text-bark">Difficulty</th>
                      </tr>
                    </thead>
                    <tbody className="font-body text-bark-light">
                      <tr className="border-b border-clay/30">
                        <td className="py-3 px-4"><span className="field-tag moss text-[10px]">L1 Starter</span></td>
                        <td className="py-3 px-4">Spawn point</td>
                        <td className="py-3 px-4">Wood, Stone, Berries, Small Copper</td>
                        <td className="py-3 px-4">Low</td>
                      </tr>
                      <tr className="border-b border-clay/30">
                        <td className="py-3 px-4"><span className="field-tag terracotta text-[10px]">L2 Intermediate</span></td>
                        <td className="py-3 px-4">Repair airship + complete trade</td>
                        <td className="py-3 px-4">Copper Ore (abundant), Iron Ore, Coal</td>
                        <td className="py-3 px-4">Medium</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4"><span className="field-tag stone text-[10px]">L3 Advanced</span></td>
                        <td className="py-3 px-4">Airship engine upgrade</td>
                        <td className="py-3 px-4">Cobalt Ore, Gold Ore, Chip Materials</td>
                        <td className="py-3 px-4">High</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

          </div>

          <aside className="lg:w-[30%] space-y-10 shrink-0">
            <div className="field-sidebar-block">
              <h3 className="font-display text-base font-semibold text-bark mb-4">Quick Navigation</h3>
              <div className="space-y-2 font-body text-sm">
                <a href="#day1" className="block text-bark-light hover:text-bark transition-colors">Day 1 Checklist</a>
                <a href="#energy" className="block text-bark-light hover:text-bark transition-colors">Energy System</a>
                <a href="#food" className="block text-bark-light hover:text-bark transition-colors">Food & Farming</a>
                <a href="#islands" className="block text-bark-light hover:text-bark transition-colors">Island Tiers</a>
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
