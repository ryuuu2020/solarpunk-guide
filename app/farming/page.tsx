export default function FarmingPage() {
  const crops = [
    { name: 'Carrot', growth: 'Fast', water: 'Low', notes: 'Good starter crop, grows quickly with minimal water' },
    { name: 'Corn', growth: 'Medium', water: 'Medium', notes: 'Staple food crop, good yield for sustaining daily needs' },
    { name: 'Cotton', growth: 'Medium', water: 'Low', notes: 'Produces cloth material for crafting and clothing' },
    { name: 'Tomato', growth: 'Fast', water: 'Medium', notes: 'Versatile food crop, can be eaten raw or used in cooking' },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <h1 className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-bark leading-none mb-4">Farming System Guide</h1>
      <p className="font-body text-base text-stone max-w-2xl italic mb-8">Growing crops, managing water, and building a sustainable food supply</p>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="flex-1 lg:max-w-[65%] space-y-12">
          <section>
            <h2 className="font-display text-2xl font-bold text-bark">Farming Overview</h2>
            <p className="font-body text-bark-light leading-relaxed mt-4">
              Farming is one of Solarpunk&apos;s core systems for maintaining a stable food supply. Unlike wild gathering, farming provides a controllable, sustainable source of food and crafting materials. From your first small plot to island-spanning fields, farming evolves throughout the entire game.
            </p>
            <p className="font-body text-bark-light leading-relaxed mt-3">
              Crop growth is affected by water availability, sunlight, and soil conditions. Different islands have different climates, which affects what crops grow best where. Temperate islands suit most common crops, while extreme climates may require additional preparation like greenhouses.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-bark mb-6">Crops</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-moss/30">
                    <th className="text-left py-3 px-3 font-display font-semibold text-bark">Crop</th>
                    <th className="text-left py-3 px-3 font-display font-semibold text-bark">Growth Speed</th>
                    <th className="text-left py-3 px-3 font-display font-semibold text-bark">Water Need</th>
                    <th className="text-left py-3 px-3 font-display font-semibold text-bark">Notes</th>
                  </tr>
                </thead>
                <tbody className="font-body text-bark-light">
                  {crops.map((c, i) => (
                    <tr key={i} className="border-b border-clay/30">
                      <td className="py-3 px-3 font-semibold text-bark">{c.name}</td>
                      <td className="py-3 px-3">{c.growth}</td>
                      <td className="py-3 px-3">{c.water}</td>
                      <td className="py-3 px-3 text-xs">{c.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="font-body text-xs text-stone mt-4 italic">Solarpunk features additional crops beyond those listed here. Experiment with different island climates for best results.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-bark mb-4">Irrigation</h2>
            <p className="font-body text-bark-light leading-relaxed">
              Early game: Water crops manually using a Water Can filled from a Well or Rain Collector. This works well for small farms of a few plots.
            </p>
            <p className="font-body text-bark-light leading-relaxed mt-3">
              Mid game: Unlock Sprinklers through research. Place them near crop fields and they automatically pump water from the ground to water surrounding plots. Wireless Sprinklers become available with advanced research, removing the need for cable connections.
            </p>
            <p className="font-body text-bark-light leading-relaxed mt-3">
              Sprinklers require power from your energy grid. Make sure your solar panels and batteries can handle the additional load before expanding your automated irrigation system.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-bark mb-4">Farming Tips</h2>
            <div className="space-y-2">
              <details className="journal-card p-4 group cursor-pointer">
                <summary className="font-display font-semibold text-bark text-sm marker:text-moss">How do I start farming?</summary>
                <p className="font-body text-sm text-bark-light leading-relaxed mt-3 pl-3 border-l-2 border-moss/30">
                  Craft farmland plots using basic materials. Plant seeds (carrot and corn are good starters). Water them daily with a Water Can filled from a nearby water source. Harvest when ready. Start small — 4-6 plots is manageable for a new farmer.
                </p>
              </details>
              <details className="journal-card p-4 group cursor-pointer">
                <summary className="font-display font-semibold text-bark text-sm marker:text-moss">How do I automate watering?</summary>
                <p className="font-body text-sm text-bark-light leading-relaxed mt-3 pl-3 border-l-2 border-moss/30">
                  Research and craft Sprinklers. Place them near your farmland and connect to your power grid. Each Sprinkler waters a radius of adjacent plots automatically. Upgrade to Wireless Sprinklers later to eliminate cable management.
                </p>
              </details>
            </div>
          </section>
        </div>

        <aside className="lg:w-[30%] space-y-10 shrink-0">
          <div className="field-sidebar-block">
            <h3 className="font-display text-base font-semibold text-bark mb-4">Related Guides</h3>
            <div className="space-y-2 font-body text-sm">
              <a href="/automation" className="block text-moss hover:text-moss-dark transition-colors">Automation & Machines</a>
              <a href="/energy" className="block text-moss hover:text-moss-dark transition-colors">Energy System Guide</a>
              <a href="/resources" className="block text-moss hover:text-moss-dark transition-colors">Resource Gathering</a>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
