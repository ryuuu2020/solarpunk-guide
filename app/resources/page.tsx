export const metadata = {
  title: "Solarpunk Resources Guide — Gathering & Management (2026)",
  description:
    "Complete resources guide for Solarpunk. Resource gathering, storage, and management.",
};


export default function ResourcesPage() {
  const resources = [
    { name: 'Wood', type: 'Basic Building Material', locations: 'All islands', tool: 'Stone/Iron Axe', uses: 'Construction, tools, fuel' },
    { name: 'Stone', type: 'Basic Building Material', locations: 'All islands', tool: 'Stone/Iron Pickaxe', uses: 'Building material, furnace, roads' },
    { name: 'Fiber', type: 'Basic Material', locations: 'All islands', tool: 'Hand gathering', uses: 'Cloth, rope, basic tools' },
    { name: 'Iron Ore', type: 'Metal Ore', locations: 'Grassland, desert islands', tool: 'Iron Pickaxe+', uses: 'Iron Ingot → tools, machinery, structural parts' },
    { name: 'Copper Ore', type: 'Metal Ore', locations: 'Mainly Grassland Archipelago', tool: 'Iron Pickaxe+', uses: 'Copper wire, circuit boards, electrical components' },
    { name: 'Gold Ore', type: 'Rare Mineral', locations: 'Desert, polar islands', tool: 'Advanced Pickaxe', uses: 'Advanced circuits, decoration, trade' },
    { name: 'Silica Sand', type: 'Industrial Raw Material', locations: 'Desert, beach areas', tool: 'Shovel', uses: 'Glass, silicon wafers, solar panels' },
    { name: 'Crystal Ore', type: 'Special Mineral', locations: 'Crystal Caverns', tool: 'Advanced Pickaxe', uses: 'Optical components, advanced energy equipment' },
    { name: 'Titanium Ore', type: 'Advanced Metal', locations: 'Skyridge Highlands', tool: 'Top-tier Pickaxe', uses: 'Titanium alloy → airship engines, advanced armor' },
    { name: 'Energy Core Fragments', type: 'Rare Material', locations: 'Skyridge Highlands', tool: 'Special gathering', uses: 'Airship engine core, ultimate equipment' },
    { name: 'Coal', type: 'Fuel', locations: 'Underground veins', tool: 'Iron Pickaxe', uses: 'Furnace fuel, early energy' },
    { name: 'Oil', type: 'Fuel/Raw Material', locations: 'Specific island geological zones', tool: 'Drilling Equipment', uses: 'Advanced fuel, plastic, chemical raw materials' },
  ];

  return (
    <div className="min-h-screen bg-field-paper bg-paper-texture">
      
      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="flex-1 lg:max-w-[65%] space-y-12">
            <section>
              <h2 className="font-display text-2xl font-bold text-bark">Resource System Overview</h2>
              <p className="font-body text-bark-light leading-relaxed mt-4">
                Resource gathering is the foundation of all activities in Solarpunk. From the wood and stone needed for your first shelter to the titanium alloy and energy core fragments required for an airship engine core, every resource has its specific spawn location, gathering tool requirement, and optimal acquisition timing. Understanding resource distribution patterns and gathering efficiency can dramatically shorten your progression from "resource-starved" to "material-abundant."
              </p>
              <p className="font-body text-bark-light leading-relaxed mt-3">
                Resources in the game can be roughly divided into four tiers by rarity and usage stage: Basic Resources (Wood, Stone, Fiber) can be gathered on all islands and are permanent consumables for construction and infrastructure maintenance; Intermediate Resources (Iron, Copper, Coal) are mainly distributed on L2-tier and above islands — the foundation for industrialization and automation; Advanced Resources (Gold, Silica Sand, Crystal) only appear in specific biomes and require dedicated travel and gathering plans; Ultimate Resources (Titanium Ore, Energy Core Fragments) are distributed on high-danger islands, representing the game's most advanced technology tier.
              </p>
              <p className="font-body text-bark-light leading-relaxed mt-3">
                Gathering efficiency can be improved through two paths: using higher-tier tools (Stone → Iron → Alloy) to directly increase the quantity and speed of each gathering action; and establishing automated gathering networks for continuous machine operation. The former suits early game and exploration phases, while the latter is essential for large-scale production in late game. The recommended progression strategy: accumulate your first batch of intermediate metals through manual gathering → build Furnaces and basic automation lines → use automated production to feed back into gathering → unlock higher-tier tools and gathering equipment → repeat the cycle.
              </p>
              <p className="font-body text-bark-light leading-relaxed mt-3">
                For cross-island resource acquisition, the most efficient approach is to establish specialized gathering outposts on each major resource island. For example: copper and iron mining outposts in the Grassland Archipelago, silica sand and gold mining outposts on desert islands. Funnel the outputs of these outposts to your main base via airship or conveyor belt for unified smelting, processing, and production. This distributed gathering network is currently recognized as the best practice for large-scale base resource management. Each resource has different gathering frequency and consumption rates — regularly reviewing your resource stockpile data helps adjust the production allocation of each outpost in a timely manner.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-bark mb-6">Resource Quick Reference</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b-2 border-moss/30">
                      <th className="text-left py-3 px-3 font-display font-semibold text-bark">Resource</th>
                      <th className="text-left py-3 px-3 font-display font-semibold text-bark">Type</th>
                      <th className="text-left py-3 px-3 font-display font-semibold text-bark">Locations</th>
                      <th className="text-left py-3 px-3 font-display font-semibold text-bark">Tool</th>
                      <th className="text-left py-3 px-3 font-display font-semibold text-bark">Primary Uses</th>
                    </tr>
                  </thead>
                  <tbody className="font-body text-bark-light">
                    {resources.map((r, i) => (
                      <tr key={i} className="border-b border-clay/30 hover:bg-field-paper-warm/50 transition-colors">
                        <td className="py-3 px-3 font-semibold text-bark">{r.name}</td>
                        <td className="py-3 px-3 text-xs">{r.type}</td>
                        <td className="py-3 px-3 text-xs">{r.locations}</td>
                        <td className="py-3 px-3 text-xs">{r.tool}</td>
                        <td className="py-3 px-3 text-xs">{r.uses}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="font-body text-xs text-stone mt-4 italic">* Resource distribution info is based on current game version data and may adjust with updates.</p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-bark mb-6">Frequently Asked Questions</h2>
              <div className="space-y-2">
                <details className="journal-card p-4 group cursor-pointer">
                  <summary className="font-display font-semibold text-bark text-sm marker:text-moss">Are the starting island\'s resources enough?</summary>
                  <p className="font-body text-sm text-bark-light leading-relaxed mt-3 pl-3 border-l-2 border-moss/30">
                    The starting island has enough resources to support building a basic base and repairing your airship, but only for basic resources. Wood, Stone, and Fiber are abundant; small amounts of Iron Ore can be found through exploration; but Intermediate resources like Copper Ore and Gold Ore are extremely scarce on the starting island. You need to repair your airship as soon as possible to reach L2-tier Grassland Archipelago islands for richer mineral resources. If you plan to keep the starting island as your long-term main base, you must establish a cross-island resource transport network.
                  </p>
                </details>
                <details className="journal-card p-4 group cursor-pointer">
                  <summary className="font-display font-semibold text-bark text-sm marker:text-moss">How do I efficiently gather rare minerals?</summary>
                  <p className="font-body text-sm text-bark-light leading-relaxed mt-3 pl-3 border-l-2 border-moss/30">
                    First, identify the mineral's primary distribution island (e.g., Gold in desert and polar islands, Titanium in Skyridge Highlands). Establish an outpost on the target island with power, shelter, and basic storage facilities. Use the highest-tier gathering tool you can craft. If conditions allow, build Mining Machines and conveyor belt systems for automated gathering. For rare resources that cannot be auto-gathered (such as Energy Core Fragments), prepare ample supplies and high-tier defensive gear, as these resources are typically found in the most dangerous island regions.
                  </p>
                </details>
                <details className="journal-card p-4 group cursor-pointer">
                  <summary className="font-display font-semibold text-bark text-sm marker:text-moss">Do mineral resources respawn?</summary>
                  <p className="font-body text-sm text-bark-light leading-relaxed mt-3 pl-3 border-l-2 border-moss/30">
                    Most surface mineral veins do not automatically respawn after being mined. This is why resource management is so important in Solarpunk — if you mine all the minerals on one island, you'll need to travel to new islands for alternative sources. However, certain deep mineral veins (those requiring Mining Machines for extraction) may have slow regeneration rates (the community has varying observations on this, which may differ between versions). For long-term sustainability, we recommend simultaneously developing multiple resource islands and distributing gathering intensity appropriately to avoid over-exploitation of any single mineral source.
                  </p>
                </details>
              </div>
            </section>
          </div>

          <aside className="lg:w-[30%] space-y-10 shrink-0">
            <div className="field-sidebar-block">
              <h3 className="font-display text-base font-semibold text-bark mb-4">Related Guides</h3>
              <div className="space-y-2 font-body text-sm">
                <a href="/map" className="block text-moss hover:text-moss-dark transition-colors">World Map</a>
                <a href="/crafting" className="block text-moss hover:text-moss-dark transition-colors">Crafting Recipes</a>
                <a href="/automation" className="block text-moss hover:text-moss-dark transition-colors">Automation System Guide</a>
              </div>
            </div>

            <div className="bg-moss-light/50 border border-moss/20 p-6">
              <h3 className="font-display text-sm font-semibold text-moss-dark mb-2">Gathering Efficiency Tip</h3>
              <p className="font-body text-xs text-bark-light leading-relaxed">
                Using higher-tier tools can boost per-action gathering yield by 40%-80% (community estimate). Upgrade your tools before starting large-scale gathering — it's an investment that pays for itself.
              </p>
            </div>
          </aside>
        </div>
        <div className="field-divider mt-16" />
      </main>
          </div>
  );
}
