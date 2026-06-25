'use client';

export default function FarmingPage() {
  const crops = [
    { name: 'Berries', growth: '2-3 days', water: 'Low', yield: 'Medium', notes: 'Best choice for beginners, edible raw, no processing needed' },
    { name: 'Leafy Greens', growth: '2-3 days', water: 'Medium', yield: 'High', notes: 'Fast growing, high yield, ideal for sustaining daily food supply' },
    { name: 'Root Vegetables', growth: '4-5 days', water: 'Low', yield: 'High', notes: 'Drought-tolerant, long storage life, great as reserve rations' },
    { name: 'Grains', growth: '5-7 days', water: 'Medium', yield: 'Medium', notes: 'Requires Mill processing, can be made into bread and other long-lasting food' },
    { name: 'Fiber Crops', growth: '4-5 days', water: 'Low', yield: 'High', notes: 'Produces cloth raw materials, key for crafting clothing and rope' },
    { name: 'Medicinal Plants', growth: '6-8 days', water: 'Medium', yield: 'Low', notes: 'Used for crafting various medicines and healing items' },
    { name: 'Dye Plants', growth: '3-5 days', water: 'Medium', yield: 'Medium', notes: 'Produces natural dyes for coloring cloth and decorative items' },
  ];

  return (
    <div className="min-h-screen bg-field-paper bg-paper-texture">
      <header className="pt-12 pb-6 px-4 lg:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col items-start">
          <a href="/" className="font-display text-sm text-moss hover:text-moss-dark transition-colors mb-4">&larr; Back to Home</a>
          <h1 className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-bark leading-none">Farming System Guide</h1>
          <p className="font-body text-base text-stone mt-3 max-w-md leading-relaxed italic">From your first plot of farmland to a large-scale automated farm — the complete farming system</p>
        </div>
        <div className="field-divider mt-6" />
      </header>

      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="flex-1 lg:max-w-[65%] space-y-12">
            <section>
              <h2 className="font-display text-2xl font-bold text-bark">Farming System Overview</h2>
              <p className="font-body text-bark-light leading-relaxed mt-4">
                Farming is Solarpunk's core system for maintaining a stable food supply and obtaining certain industrial raw materials. Unlike wild gathering, farming provides a controllable, scalable, and sustainable source of resource output. From a small patch of hand-tilled farmland to a fully automated farm network spanning multiple islands, the farming system's development spans the entire game.
              </p>
              <p className="font-body text-bark-light leading-relaxed mt-3">
                In Solarpunk, crop growth is affected by multiple factors: soil fertility, irrigation water volume, daylight hours, ambient temperature, and pest risk. Understanding and managing these variables is essential to becoming an efficient farmer. These factors also interact — for example, sufficient water accelerates fertilizer decomposition and absorption, while optimal temperature enhances crops' natural pest resistance. Mastering these deep mechanics allows you to maximize yield while minimizing resource input.
              </p>
              <p className="font-body text-bark-light leading-relaxed mt-3">
                The farming system is deeply interconnected with other game systems. The Energy System powers Sprinklers and Auto Harvesters, the Automation System processes harvests through Conveyor Belts and Sorters, and the Airship logistics network funnels farm outputs from different islands to the central processing base. A well-designed farming system not only solves your food problem but also provides a steady stream of plant-based raw materials for industrial processing — fiber crops for cloth, medicinal plants for pharmaceuticals, and dye plants for personalized building decoration. Investing in the farming system is one of the highest-return long-term strategies in the game.
              </p>
              <p className="font-body text-bark-light leading-relaxed mt-3">
                Each island's climate conditions directly determine which crops are suitable for cultivation there. Temperate islands suit most common crops; desert islands have abundant sunlight but extreme water scarcity, only supporting drought-resistant varieties with extra irrigation investment; polar islands only suit a handful of cold-resistant crops — everything else requires greenhouses and artificial heating to survive. Leverage different islands' climate characteristics for specialized farming — grow staple crops in temperate zones, fiber and dye crops in deserts, and rare medicinal plants in polar regions — this is the advanced strategy for maximizing farming output.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-bark mb-6">Crop Overview</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b-2 border-moss/30">
                      <th className="text-left py-3 px-3 font-display font-semibold text-bark">Crop</th>
                      <th className="text-left py-3 px-3 font-display font-semibold text-bark">Growth Cycle</th>
                      <th className="text-left py-3 px-3 font-display font-semibold text-bark">Water Need</th>
                      <th className="text-left py-3 px-3 font-display font-semibold text-bark">Yield</th>
                      <th className="text-left py-3 px-3 font-display font-semibold text-bark">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="font-body text-bark-light">
                    {crops.map((c, i) => (
                      <tr key={i} className="border-b border-clay/30">
                        <td className="py-3 px-3 font-semibold text-bark">{c.name}</td>
                        <td className="py-3 px-3">{c.growth}</td>
                        <td className="py-3 px-3">{c.water}</td>
                        <td className="py-3 px-3">{c.yield}</td>
                        <td className="py-3 px-3 text-xs">{c.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="font-body text-xs text-stone mt-4 italic">* Growth cycles are community estimates; actual time is affected by soil fertility, irrigation, temperature, and light.</p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-bark mb-6">Irrigation & Fertilizer</h2>
              <p className="font-body text-bark-light leading-relaxed">
                The irrigation system has three levels: Manual Watering (lowest efficiency, suitable for small farms of up to 4 plots), Sprinklers (intermediate, covers a 3x3 area, requires pipe connection to a water source), and Automated Irrigation Networks (advanced, programmable timing, on-demand water supply, supports centralized water distribution across multiple farmland areas). The fertilizer system is also three-tiered: Basic Organic Fertilizer, Compound Fertilizer, and Advanced Growth Accelerator — each tier provides progressively stronger yield boosts. Using Advanced Growth Accelerator can reduce crop maturation time by approximately 30% under identical conditions (community estimate), but the crafting cost is higher.
              </p>
              <p className="font-body text-bark-light leading-relaxed mt-3">
                The frequency of fertilization and irrigation needs precise adjustment based on crop type. Over-fertilization not only wastes resources but can also lead to soil salinization — which reduces long-term crop yields. We recommend establishing a regular soil testing and crop rotation plan starting from the second growing season. A seasoned farming expert plans a full-year cultivation and maintenance schedule for each plot, alternating high-yield crops with soil-restoring cover plants.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-bark mb-6">Frequently Asked Questions</h2>
              <div className="space-y-2">
                <details className="journal-card p-4 group cursor-pointer">
                  <summary className="font-display font-semibold text-bark text-sm marker:text-moss">Why have my crops stopped growing?</summary>
                  <p className="font-body text-sm text-bark-light leading-relaxed mt-3 pl-3 border-l-2 border-moss/30">
                    There are four main possibilities: water shortage (irrigation system failure or depleted water source), temperature too high/low (outside the crop's tolerance range), insufficient light (crop in continuous shadow), or the crop has reached maximum growth stage and awaits harvesting. First check if the irrigation system is properly supplying water, then confirm the current ambient temperature is within the crop's suitable range. If temperature is a persistent issue, consider relocating that crop to an island with a more suitable climate.
                  </p>
                </details>
                <details className="journal-card p-4 group cursor-pointer">
                  <summary className="font-display font-semibold text-bark text-sm marker:text-moss">How can I achieve year-round uninterrupted production?</summary>
                  <p className="font-body text-sm text-bark-light leading-relaxed mt-3 pl-3 border-l-2 border-moss/30">
                    Leverage the climate differences between different islands to establish a cross-island farming system. Grow most staple crops on temperate islands, use the long daylight hours of desert islands for light-hungry crops, and maintain year-round production of rare crops in greenhouses on polar islands. Use Airship logistics to centralize agricultural products from all islands at your main base for unified processing and storage. This distributed farming architecture, known in the community as the "Crop Federation" model, is currently the most sustainable agricultural production approach known.
                  </p>
                </details>
                <details className="journal-card p-4 group cursor-pointer">
                  <summary className="font-display font-semibold text-bark text-sm marker:text-moss">What prerequisites are needed for farming automation?</summary>
                  <p className="font-body text-sm text-bark-light leading-relaxed mt-3 pl-3 border-l-2 border-moss/30">
                    First, you need to unlock Sprinkler and Auto Harvester recipes through Auto Farming research. Second, you need a stable energy supply to power these devices (automated equipment for a single farmland plot consumes approximately 5 units/hour of power, community estimate). Finally, you need a Conveyor Belt system to automatically transport harvests to storage. We recommend first testing your automation design on a small to medium farm of 4-6 plots, and only expanding to larger scale after confirming stable operation.
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
                <a href="/energy" className="block text-moss hover:text-moss-dark transition-colors">Energy System Guide</a>
                <a href="/resources" className="block text-moss hover:text-moss-dark transition-colors">Resource Gathering Guide</a>
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
