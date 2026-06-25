'use client';

export default function CraftingPage() {
  const recipes = [
    { name: 'Basic Workbench', materials: 'Wood x10 + Stone x5', station: 'Hand Crafting', unlock: 'Default Unlock', tier: 1, category: 'Basic' },
    { name: 'Stone Axe', materials: 'Wood x4 + Stone x3 + Fiber x2', station: 'Basic Workbench', unlock: 'Default Unlock', tier: 1, category: 'Tool' },
    { name: 'Stone Pickaxe', materials: 'Wood x4 + Stone x4 + Fiber x2', station: 'Basic Workbench', unlock: 'Default Unlock', tier: 1, category: 'Tool' },
    { name: 'Campfire', materials: 'Stone x5 + Wood x8', station: 'Hand Crafting', unlock: 'Default Unlock', tier: 1, category: 'Survival' },
    { name: 'Wood Wall', materials: 'Wood x6 + Fiber x2', station: 'Basic Workbench', unlock: 'Default Unlock', tier: 1, category: 'Building' },
    { name: 'Bed', materials: 'Wood x8 + Fiber x6 + Cloth x4', station: 'Basic Workbench', unlock: 'Default Unlock', tier: 1, category: 'Survival' },
    { name: 'Rain Collector', materials: 'Wood x12 + Iron Ingot x2 + Cloth x3', station: 'Basic Workbench', unlock: 'Basic Water Source Research', tier: 2, category: 'Survival' },
    { name: 'Solar Panel', materials: 'Silicon Wafer x4 + Copper Wire x8 + Glass x2', station: 'Electronics Workbench', unlock: 'Basic Power Research', tier: 2, category: 'Energy' },
    { name: 'Wind Turbine', materials: 'Iron Ingot x8 + Copper Wire x6 + Gear x3', station: 'Mechanical Workbench', unlock: 'Wind Tech Research', tier: 2, category: 'Energy' },
    { name: 'Research Station', materials: 'Wood x15 + Iron Ingot x5 + Copper Wire x3', station: 'Basic Workbench', unlock: 'Basic Science', tier: 1, category: 'Tech' },
    { name: 'Furnace', materials: 'Stone x20 + Iron Ingot x4', station: 'Basic Workbench', unlock: 'Basic Smelting', tier: 1, category: 'Production' },
    { name: 'Auto Watering System', materials: 'Iron Pipe x6 + Water Pump x1 + Circuit Board x2', station: 'Advanced Workbench', unlock: 'Auto Farming Research', tier: 3, category: 'Farming' },
    { name: 'Conveyor Belt', materials: 'Iron Ingot x4 + Gear x2 + Rubber x1', station: 'Mechanical Workbench', unlock: 'Basic Automation', tier: 2, category: 'Automation' },
    { name: 'Industrial Furnace', materials: 'Steel Ingot x15 + Fire Brick x8 + Temp Sensor x2', station: 'Advanced Workbench', unlock: 'Industrial Smelting', tier: 3, category: 'Production' },
    { name: 'Airship Engine Core', materials: 'Titanium Alloy x20 + Energy Core x1 + Advanced Circuit x5', station: 'Airship Assembly Station', unlock: 'Engine Tech III', tier: 4, category: 'Airship' },
  ];

  const tiers = [
    { label: 'Tier 1 — Basic Tech', desc: 'Default unlock or obtainable through basic research. Crafted using a Basic Workbench or by hand with resources available on the starting island.' },
    { label: 'Tier 2 — Intermediate Tech', desc: 'Requires completing intermediate research; some materials require cross-island gathering. Workbench upgrades to Electronics/Mechanical Workbench; products begin involving automation components.' },
    { label: 'Tier 3 — Advanced Tech', desc: 'Requires advanced research unlock, involving multi-island resource chains. Uses Advanced or specialized workbenches; products are typically used for building automation systems and advanced facilities.' },
    { label: 'Tier 4 — Ultimate Tech', desc: 'Late-game unlock requiring rare materials and cross-island collaborative production. Products are the most powerful equipment and components in the game, such as Airship Engine Cores and advanced energy systems.' },
  ];

  return (
    <div className="min-h-screen bg-field-paper bg-paper-texture">
      <header className="pt-12 pb-6 px-4 lg:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col items-start">
          <a href="/" className="font-display text-sm text-moss hover:text-moss-dark transition-colors mb-4">&larr; Back to Home</a>
          <h1 className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-bark leading-none">Crafting Recipes</h1>
          <p className="font-body text-base text-stone mt-3 max-w-md leading-relaxed italic">Complete recipe reference from basic tools to Airship Engine Cores</p>
        </div>
        <div className="field-divider mt-6" />
      </header>

      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="space-y-12">
          <section>
            <h2 className="font-display text-2xl font-bold text-bark">Recipe Overview</h2>
            <p className="font-body text-bark-light leading-relaxed mt-4">
              The crafting system is one of Solarpunk's core gameplay pillars. Almost every item in the game must be obtained through crafting, from the most basic Stone Axe to complex Airship Engine Cores — each item has its specific crafting recipe. The recipe system is divided into four stages by tech tier, and as you unlock more advanced research, the pool of available recipes grows progressively larger. Understanding how the crafting system works helps you plan resource gathering and base development more efficiently.
            </p>
            <p className="font-body text-bark-light leading-relaxed mt-3">
              In Solarpunk, crafting requires three conditions: having the corresponding recipe unlocked, gathering all required materials, and using the correct workbench. Different tiers of items require different levels of workbenches: basic items can be crafted by hand or at the Basic Workbench, intermediate items require Electronics or Mechanical Workbenches, and advanced items need specialized assembly stations. This page collects the most commonly used and important recipes in the game, categorized by function and tech tier for easy lookup. All material quantities are community estimates; actual in-game recipes may adjust with version updates.
            </p>
            <p className="font-body text-bark-light leading-relaxed mt-3">
              Each tier features significant jumps in technology and materials. Moving from Tier 1 to Tier 2 primarily involves introducing metal processing and basic electricity — you'll need to establish cross-island logistics to acquire copper and iron ore. Tier 2 to Tier 3 marks your base entering the industrial phase, where automated production begins replacing manual operation. Tier 4 represents the game's ultimate goal — only by establishing complete automated production chains and cross-island logistics networks can you reliably produce these top-tier items.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-bark mb-6">Tech Tier Guide</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {tiers.map((t, i) => (
                <div key={i} className="journal-card p-5">
                  <h3 className="font-display text-base font-semibold text-bark">{t.label}</h3>
                  <p className="font-body text-sm text-bark-light leading-relaxed mt-2">{t.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-bark mb-6">Recipe Quick Reference</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-moss/30">
                    <th className="text-left py-3 px-3 font-display font-semibold text-bark">Item</th>
                    <th className="text-left py-3 px-3 font-display font-semibold text-bark">Materials</th>
                    <th className="text-left py-3 px-3 font-display font-semibold text-bark">Station</th>
                    <th className="text-left py-3 px-3 font-display font-semibold text-bark">Unlock</th>
                    <th className="text-center py-3 px-3 font-display font-semibold text-bark">Tier</th>
                  </tr>
                </thead>
                <tbody className="font-body text-bark-light">
                  {recipes.map((r, i) => (
                    <tr key={i} className="border-b border-clay/30 hover:bg-field-paper-warm/50 transition-colors">
                      <td className="py-3 px-3">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-bark">{r.name}</span>
                          <span className="field-tag stone text-[10px]">{r.category}</span>
                        </div>
                      </td>
                      <td className="py-3 px-3 text-xs">{r.materials}</td>
                      <td className="py-3 px-3 text-xs">{r.station}</td>
                      <td className="py-3 px-3 text-xs">{r.unlock}</td>
                      <td className="py-3 px-3 text-center">
                        <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold ${r.tier <= 2 ? 'bg-moss-light text-moss-dark' : 'bg-terracotta-light text-terracotta-dark'}`}>
                          {r.tier}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="font-body text-xs text-stone mt-4 italic">* Material quantities are community estimates; actual in-game data may vary with version updates</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-bark mb-6">Material Gathering Guide</h2>
            <p className="font-body text-bark-light leading-relaxed">
              The various materials involved in crafting recipes are distributed across different floating islands. Basic materials like wood, stone, and fiber can be gathered on all islands. Metal ores (iron, copper, gold, etc.) are concentrated in specific mining islands, typically only reachable after unlocking airship travel. Rare materials like titanium alloy and energy cores are needed in smaller quantities but are harder to obtain, often requiring collaborative production across multiple islands and complex processing steps. After establishing your basic base, prioritize building your cross-island transport network to ensure a stable material supply chain. For more material details, refer to the Resource Gathering page.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-bark mb-6">Frequently Asked Questions</h2>
            <div className="space-y-2">
              <details className="journal-card p-4 group cursor-pointer">
                <summary className="font-display font-semibold text-bark text-sm marker:text-moss">How do I unlock more crafting recipes?</summary>
                <p className="font-body text-sm text-bark-light leading-relaxed mt-3 pl-3 border-l-2 border-moss/30">
                  Crafting recipes are unlocked by conducting research at the Research Station. After building a Research Station, follow the tech tree to progressively research each technology to unlock corresponding recipes. We recommend prioritizing "Basic Power" and "Basic Automation" research — these two branches unlock a large number of intermediate recipes. As the game progresses, you'll discover unique research materials on higher-tier islands used to unlock advanced and ultimate tech recipes.
                </p>
              </details>
              <details className="journal-card p-4 group cursor-pointer">
                <summary className="font-display font-semibold text-bark text-sm marker:text-moss">Why are some recipes grayed out and can't be crafted?</summary>
                <p className="font-body text-sm text-bark-light leading-relaxed mt-3 pl-3 border-l-2 border-moss/30">
                  There are three possible reasons: the recipe hasn't been unlocked yet, the current workbench tier is insufficient, or required materials are missing. First, confirm you've unlocked the recipe through the Research Station, then check if your current workbench matches the type required by the recipe. If both conditions are met, check whether all materials are present in the correct types and quantities. Some advanced recipes also require specific intermediate products like circuit boards and alloy ingots.
                </p>
              </details>
              <details className="journal-card p-4 group cursor-pointer">
                <summary className="font-display font-semibold text-bark text-sm marker:text-moss">Can I use substitute materials when I don't have enough?</summary>
                <p className="font-body text-sm text-bark-light leading-relaxed mt-3 pl-3 border-l-2 border-moss/30">
                  The game's crafting recipes have fixed material requirements and do not currently support substitute materials. However, certain intermediate products in advanced recipes (such as iron and steel ingots) can be obtained through multiple methods: manual smelting, automated production lines, or trading with other islands. When resources are tight, it's recommended to prioritize building a cross-island trading system, exchanging surplus resources for the materials you lack rather than wasting time on inefficient manual gathering.
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
