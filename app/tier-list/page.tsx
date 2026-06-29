export const metadata = {
  title: "Solarpunk Tier List — Best Items, Tools & Equipment Ranked (2026)",
  description:
    "Comprehensive Solarpunk tier list ranking every tool, weapon, energy device, and equipment from S to D tier. Updated for the latest patch with build recommendations.",
};

export default function TierListPage() {
  const toolTiers = [
    { tier: 'S', name: 'Laser Drill', type: 'Mining Tool', unlock: 'Advanced Mining research', notes: 'Highest mining speed, auto-smelts ores. Essential for late-game resource gathering.' },
    { tier: 'S', name: 'Advanced Solar Panel', type: 'Energy', unlock: 'Solar Efficiency III research', notes: 'Generates 3x power of basic panels. Backbone of all endgame energy grids.' },
    { tier: 'S', name: 'Fusion Battery', type: 'Energy Storage', unlock: 'Advanced Power Storage research', notes: 'Massive 5000kJ capacity, 0% passive drain. Required for night-time automation.' },
    { tier: 'A', name: 'Plasma Cutter', type: 'Combat Weapon', unlock: 'Plasma Weapons research', notes: 'High DPS melee weapon, excellent against mechanical enemies. Short range limits versatility.' },
    { tier: 'A', name: 'Auto-Harvester', type: 'Farming Tool', unlock: 'Automated Farming research', notes: 'Automatically harvests crops in range. Saves massive time but requires power grid.' },
    { tier: 'A', name: 'Jetpack', type: 'Mobility', unlock: 'Jetpack Prototype research', notes: 'Enables vertical traversal between floating islands. Game-changer for exploration.' },
    { tier: 'A', name: 'Medium Wind Turbine', type: 'Energy', unlock: 'Wind Power II research', notes: 'Reliable night-time power. Pairs perfectly with solar for 24/7 energy.' },
    { tier: 'B', name: 'Iron Pickaxe', type: 'Mining Tool', unlock: 'Iron Smelting research', notes: 'Solid mid-game upgrade. Decent speed but outclassed by Laser Drill.' },
    { tier: 'B', name: 'Basic Solar Panel', type: 'Energy', unlock: 'Basic Power research', notes: 'Entry-level solar. 100kJ output — enough for early research station.' },
    { tier: 'B', name: 'Crossbow', type: 'Combat Weapon', unlock: 'Basic Workshop', notes: 'Reliable ranged weapon for early defense. Low DPS but safe engagement distance.' },
    { tier: 'B', name: 'Rain Collector MK2', type: 'Water', unlock: 'Water Management II', notes: 'Doubles collection rate over basic. Worth upgrading once you have spare iron.' },
    { tier: 'B', name: 'Basic Battery', type: 'Energy Storage', unlock: 'Basic Power research', notes: '1000kJ capacity with 5% passive drain. Functional but leaks power overnight.' },
    { tier: 'C', name: 'Stone Axe', type: 'Gathering Tool', unlock: 'Starting recipe', notes: 'Basic woodcutting. Upgrade to Iron Axe ASAP for efficiency.' },
    { tier: 'C', name: 'Stone Pickaxe', type: 'Mining Tool', unlock: 'Starting recipe', notes: 'Basic mining. Needed for early stone but replace quickly.' },
    { tier: 'C', name: 'Wooden Spear', type: 'Combat Weapon', unlock: 'Starting recipe', notes: 'Bare-minimum self-defense. Only use if nothing else available.' },
    { tier: 'C', name: 'Basic Workbench', type: 'Crafting Station', unlock: 'Starting recipe', notes: 'Enables basic crafting. Upgrade to Advanced Workbench ASAP.' },
    { tier: 'D', name: 'Wooden Club', type: 'Combat Weapon', unlock: 'Starting recipe', notes: 'Almost useless. Only craft in absolute emergency.' },
    { tier: 'D', name: 'Campfire', type: 'Utility', unlock: 'Starting recipe', notes: 'Basic light and cooking. Replaced by Electric Stove once you have power.' },
  ];

  const energyTiers = [
    { tier: 'S', device: 'Advanced Solar Panel', output: '300kJ/day', cost: 'High (Titanium + Gold)', useCase: 'Primary endgame power source' },
    { tier: 'S', device: 'Fusion Battery', output: '5000kJ storage', cost: 'Very High (Fusion Core)', useCase: '100% uptime automation' },
    { tier: 'A', device: 'Medium Wind Turbine', output: '150kJ/day (avg)', cost: 'Medium (Iron + Copper)', useCase: 'Night power, complements solar' },
    { tier: 'A', device: 'Geothermal Generator', output: '200kJ/day', cost: 'High (location-locked)', useCase: 'Steady base power if near vent' },
    { tier: 'B', device: 'Basic Solar Panel', output: '100kJ/day', cost: 'Low (Silicon + Copper)', useCase: 'Early-mid game power staple' },
    { tier: 'B', device: 'Basic Battery', output: '1000kJ storage', cost: 'Low (Iron + Copper)', useCase: 'Early game overnight buffer' },
    { tier: 'C', device: 'Small Wind Turbine', output: '50kJ/day (avg)', cost: 'Low (Iron only)', useCase: 'Supplementary early power' },
    { tier: 'C', device: 'Biomass Generator', output: '80kJ per fuel', cost: 'Fuel-dependent', useCase: 'Emergency backup only' },
  ];

  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="flex-1 lg:max-w-[65%] space-y-10">
          <section>
            <h1 className="chapter-heading">Solarpunk Tier List</h1>
            <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
              Choosing the right tools and equipment in Solarpunk can make the difference between thriving and barely surviving. This tier list ranks every major tool, weapon, energy device, and equipment from S-tier (essential, game-changing) to D-tier (avoid unless desperate). Rankings are based on resource efficiency, utility across game stages, and overall impact on your floating island survival.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Tool &amp; Equipment Tier Rankings</h2>
            <p className="text-ink-light mb-4">S-Tier items fundamentally change how you play — they unlock new capabilities or dramatically multiply efficiency. A-Tier items are excellent but situational or resource-intensive. B-Tier fills the mid-game gap. C-Tier is early-game only. D-Tier items waste resources.</p>
            <div className="overflow-x-auto">
              <table className="parchment-table">
                <thead>
                  <tr><th className="w-10">Tier</th><th>Name</th><th>Type</th><th>Unlock</th><th>Notes</th></tr>
                </thead>
                <tbody>
                  {toolTiers.map((item) => (
                    <tr key={item.name}>
                      <td><span className={`inline-block px-2 py-0.5 text-xs font-bold rounded ${item.tier === 'S' ? 'bg-amber-500/20 text-amber-400' : item.tier === 'A' ? 'bg-emerald-500/20 text-emerald-400' : item.tier === 'B' ? 'bg-sky-500/20 text-sky-400' : item.tier === 'C' ? 'bg-slate-500/20 text-slate-400' : 'bg-red-500/20 text-red-400'}`}>{item.tier}</span></td>
                      <td className="font-medium">{item.name}</td>
                      <td className="text-ink-faded text-sm">{item.type}</td>
                      <td className="text-ink-faded text-sm">{item.unlock}</td>
                      <td className="text-ink-light text-sm">{item.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Energy Device Tier Rankings</h2>
            <p className="text-ink-light mb-4">Your energy infrastructure is the backbone of automation in Solarpunk. The right energy mix ensures your Research Station, Auto-Harvesters, and defense turrets never go offline. Solar dominates day-time, wind covers night-time, and batteries bridge the gaps.</p>
            <div className="overflow-x-auto">
              <table className="parchment-table">
                <thead>
                  <tr><th>Tier</th><th>Device</th><th>Output</th><th>Build Cost</th><th>Best Use</th></tr>
                </thead>
                <tbody>
                  {energyTiers.map((item) => (
                    <tr key={item.device}>
                      <td><span className={`inline-block px-2 py-0.5 text-xs font-bold rounded ${item.tier === 'S' ? 'bg-amber-500/20 text-amber-400' : item.tier === 'A' ? 'bg-emerald-500/20 text-emerald-400' : item.tier === 'B' ? 'bg-sky-500/20 text-sky-400' : 'bg-slate-500/20 text-slate-400'}`}>{item.tier}</span></td>
                      <td className="font-medium">{item.device}</td>
                      <td className="text-ink-faded text-sm">{item.output}</td>
                      <td className="text-ink-faded text-sm">{item.cost}</td>
                      <td className="text-ink-light text-sm">{item.useCase}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Tier List Strategy by Game Stage</h2>
            <h3 className="font-display text-xl font-medium text-ink mb-2">Early Game (Hours 0-5)</h3>
            <p className="text-ink-light mb-3">Focus on C-tier tools as necessities — Stone Axe and Stone Pickaxe are unavoidable. Rush to Iron Pickaxe (B-tier) for mining speed. Build Basic Solar Panel + Basic Battery as your first power setup. Skip all D-tier weapons; craft Crossbow instead.</p>
            <h3 className="font-display text-xl font-medium text-ink mb-2">Mid Game (Hours 5-15)</h3>
            <p className="text-ink-light mb-3">Transition to A-tier equipment. Auto-Harvester frees you from manual farming. Jetpack opens new islands. Build a Medium Wind Turbine to cover night-time energy needs. Replace Basic Battery to stop overnight power drain.</p>
            <h3 className="font-display text-xl font-medium text-ink mb-2">Late Game (Hours 15+)</h3>
            <p className="text-ink-light">Go all-in on S-tier. The Laser Drill and Advanced Solar Panel combo lets you mine and power simultaneously. Fusion Battery enables true 24/7 automation. At this point, optimize your grid layout for maximum coverage rather than chasing new tech.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">FAQ</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-display text-lg font-medium text-ink mb-1">What is the single most important item to rush?</h3>
                <p className="text-ink-light">The Jetpack (A-tier). While the Laser Drill is the best tool overall, the Jetpack fundamentally changes how you navigate the world. It unlocks new floating islands with unique resources, lets you bypass terrain obstacles, and dramatically speeds up exploration. Research Jetpack Prototype as soon as you have a stable food and power supply.</p>
              </div>
              <div>
                <h3 className="font-display text-lg font-medium text-ink mb-1">Are S-tier energy devices worth the build cost?</h3>
                <p className="text-ink-light">Yes, but not immediately. Advanced Solar Panels require Titanium and Gold — resources better spent on tools and research in the mid-game. Build them when you have excess rare materials and need to power large-scale automation (3+ Auto-Harvesters, defense grid, etc.). For casual bases, a mix of Basic Solar + Medium Wind Turbine is sufficient.</p>
              </div>
              <div>
                <h3 className="font-display text-lg font-medium text-ink mb-1">Why is Campfire D-tier?</h3>
                <p className="text-ink-light">The Campfire is necessary at the very start but should be replaced immediately once you unlock the Electric Stove. It requires constant wood refueling, provides poor light, and has no cooking bonuses. The resources to maintain it add up quickly. Craft one, use it for the first night, then prioritize an Electric Stove.</p>
              </div>
            </div>
          </section>
          <p className="text-sm text-ink-faded mt-8 italic">Last updated: June 2026. Tier rankings based on game version current as of this date.</p>
        </div>
        <aside className="lg:w-[30%] space-y-6">
          <div className="bg-parchment-light border border-ink-faded/20 rounded-sm p-5">
            <h3 className="font-display text-lg font-semibold text-ink mb-3">Related Guides</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/builds" className="text-accent hover:underline">Best Builds &amp; Loadouts</a></li>
              <li><a href="/crafting" className="text-accent hover:underline">Crafting System Guide</a></li>
              <li><a href="/research-tree" className="text-accent hover:underline">Research Tech Tree</a></li>
              <li><a href="/energy" className="text-accent hover:underline">Energy System Guide</a></li>
              <li><a href="/tools" className="text-accent hover:underline">Tools &amp; Equipment Database</a></li>
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}
