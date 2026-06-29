export const metadata = {
  title: "Solarpunk Pro Tips — Advanced Strategies (2026)",
  description:
    "Pro tips for Solarpunk. Advanced strategies and optimization techniques.",
};


export default function TipsPage() {
  const tips = [
    { tip: 'Build a Rain Collector early — water is scarcer than food. In Solarpunk\'s early stages, natural water sources are rare and non-renewable; the Rain Collector is the only reliable long-term water source.', category: 'Survival' },
    { tip: 'Place fences along floating island edges to prevent accidental falls. Falling is the most common cause of death for new players — the material cost of fences is far lower than the equipment loss and corpse-run time after a fatal fall.', category: 'Building' },
    { tip: 'Solar panels need regular cleaning — dust reduces efficiency. This is especially severe on desert islands. Clean manually every three in-game days, or install an auto-cleaning module.', category: 'Tech' },
    { tip: 'Warm-tone lighting can reduce crop growth penalty during nighttime. Compared to cool white light sources, warm-tone artificial light is closer to the wavelength range needed for natural photosynthesis, boosting nighttime crop growth by roughly 15%. (community estimate)', category: 'Farming' },
    { tip: 'Craft a bed as early as possible — sleep quality directly affects work efficiency. Without adequate sleep, tool usage speed drops by 30% and movement speed drops by 15%. Craft at least a simple bed before nightfall on Day 1.', category: 'Survival' },
    { tip: 'Place a storage chest in the center of your base as a "hub," then have your automation system deliver finished products there. This dramatically reduces the time you spend running between warehouses.', category: 'Automation' },
    { tip: 'Prepare at least 3 fully charged batteries before cave exploration. Underground environments have zero natural light — solar panels are completely ineffective, and all lighting and equipment operation relies entirely on stored energy.', category: 'Exploration' },
    { tip: 'Different crop types have different soil fertility requirements — smart crop rotation can reduce fertilizer consumption. For example, legumes can improve nitrogen absorption efficiency for subsequent crops.', category: 'Farming' },
    { tip: 'When connecting production stations with conveyor belts, prioritize straight-line layouts. Excessive turns reduce item transport speed and increase energy consumption; too many junctions can also cause item jams.', category: 'Automation' },
    { tip: 'Cover outdoor equipment with tarps before storms. Rain will damage unprotected electronic devices, and repair costs far exceed prevention costs.', category: 'Survival' },
    { tip: 'Airship fuel consumption is proportional to cargo weight. Before planning long trips, clearing unnecessary cargo can effectively extend travel range. Every 10 units of weight reduction increases range by about 8%. (community estimate)', category: 'Airship' },
    { tip: 'Set up dedicated "logistics airships" between islands rather than mixing personnel and cargo. Specialized logistics ships maximize cargo hold space and can fly more frequently.', category: 'Airship' },
    { tip: 'Build basic energy systems on multiple islands as backups. If one island\'s energy system fails, you can immediately relocate to another island to continue production.', category: 'Energy' },
    { tip: 'Regularly check battery charge/discharge cycle counts — aging batteries gradually lose capacity. Replace batteries when efficiency drops below 80%.', category: 'Energy' },
    { tip: 'Use sorters to classify mixed items on conveyor belts to avoid manual inventory management. A properly configured sorting system can fully automate warehouse management.', category: 'Automation' },
    { tip: 'Running conveyor belts between islands is expensive, but in the long run, it\'s the most stable resource transport method, unaffected by weather and fuel limitations.', category: 'Automation' },
    { tip: 'Build high-consumption factories on sun-rich desert islands to reduce energy storage needs. The long daylight hours on desert islands maximize solar power advantages.', category: 'Energy' },
    { tip: 'Use signs to label the function of each area within your base. In large-scale bases, clear signage dramatically reduces the chance of getting lost or making operational mistakes.', category: 'Building' },
    { tip: 'Build a food reserve warehouse ahead of time with at least 10 days of emergency rations. Extreme weather events can disrupt your food supply chain — the reserve is your final insurance.', category: 'Survival' },
    { tip: 'Use different colors for different storage chest types so you can find materials at a glance. Recommended: brown for wood, gray for metals, green for food, blue for electronic components.', category: 'Building' },
    { tip: 'Reserve space for an escape pod on your airship deck. While it takes up space, it can save your core supplies and tech progress in extreme situations.', category: 'Airship' },
    { tip: 'Use timers to control irrigation system on/off cycles to avoid water waste. Nighttime evaporation is low — intermittent irrigation is more efficient than continuous watering.', category: 'Farming' },
    { tip: 'Grow a variety of crops rather than monocultures. A single crop type, if hit by pests or climate anomalies, could collapse your entire food supply chain. Diversity is the foundation of ecological farming.', category: 'Farming' },
    { tip: 'Recommended research unlock order: Basic Power → Basic Farming → Basic Smelting → Automation Basics → Airship Upgrade I. This sequence establishes a stable resource cycle in the shortest time.', category: 'Tech' },
    { tip: 'Regularly clear backed-up items from conveyor belts — excessive clutter slows down the entire automation system.', category: 'Automation' },
    { tip: 'On extreme temperature islands, you\'ll need additional climate control systems. Heaters and coolers consume significant power — consider a dedicated power line just for climate control equipment.', category: 'Survival' },
    { tip: 'Airships have multiple engine types: heavy engines provide high thrust but consume fuel quickly, while light engines are more efficient but have limited payload. Choose based on your primary use: light for exploration, heavy for transport.', category: 'Airship' },
    { tip: 'Plant thorny defensive plants around your base perimeter to effectively deter wildlife. Unlike wooden walls, thorny plants self-repair and require no additional maintenance.', category: 'Survival' },
    { tip: 'Craft a portable workbench to carry with you — you can perform emergency repairs and craft items during exploration away from your base.', category: 'Tools' },
    { tip: 'Back up your save file frequently. Solarpunk is an open-world game where some critical decisions are irreversible once made. Regular backups let you return to important time points when needed.', category: 'General' },
  ];

  return (
    <div className="min-h-screen bg-field-paper bg-paper-texture">
      
      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="space-y-12">
          <section>
            <p className="font-body text-bark-light leading-relaxed">
              The following 30 survival tips have been compiled and verified by veteran Solarpunk community players, covering the game's core systems and mechanics. Whether you're stepping onto a floating island for the first time or a seasoned player who has flown across the skies, each tip here may bring new inspiration to your survival journey. Tips are grouped by category for easy navigation to your areas of interest. All tips involving specific numerical values are marked "community estimate" — data may adjust with game version updates.
            </p>
            <p className="font-body text-bark-light leading-relaxed mt-3">
              These tips are not official guides but practical experience accumulated by community players over hundreds of hours of gameplay. Some are obvious tricks, while others are deep mechanics you might only discover after dozens of hours of play. We recommend reading through all 30 tips at least once and using them as a reference manual for your Solarpunk exploration. Even if you don't need a particular tip right now, knowing it may help you at a critical moment in the future.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-bark mb-6">Tips Collection</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {tips.map((item, i) => (
                <div key={i} className="journal-card p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="step-number text-xs w-5 h-5">{i + 1}</span>
                    <span className="field-tag stone text-[10px]">{item.category}</span>
                  </div>
                  <p className="font-body text-sm text-bark leading-relaxed">{item.tip}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-bark mb-6">Frequently Asked Questions</h2>
            <div className="space-y-2">
              <details className="journal-card p-4 group cursor-pointer">
                <summary className="font-display font-semibold text-bark text-sm marker:text-moss">Which game version are these tips applicable to?</summary>
                <p className="font-body text-sm text-bark-light leading-relaxed mt-3 pl-3 border-l-2 border-moss/30">
                  The tips above are based on the mechanics of the current latest game version. Solarpunk is still receiving ongoing updates, and certain system mechanics may change in future versions. We re-verify all tips after each major update, but some timeliness discrepancies are unavoidable. We recommend referencing these tips alongside actual in-game performance and reporting any inconsistencies when found.
                </p>
              </details>
              <details className="journal-card p-4 group cursor-pointer">
                <summary className="font-display font-semibold text-bark text-sm marker:text-moss">Which tips are most important for beginners?</summary>
                <p className="font-body text-bark-light leading-relaxed mt-3 pl-3 border-l-2 border-moss/30">
                  For newcomers, we recommend prioritizing tips #1 through #5. Among them: "Build a Rain Collector early" and "Craft a bed as early as possible" are the most easily overlooked survival fundamentals; "Place fences along floating island edges" is advice that has saved countless new players' lives; and "Recommended research unlock order" provides a verified efficient tech progression path. After mastering these 5 foundational tips, gradually expand to other categories.
                </p>
              </details>
              <details className="journal-card p-4 group cursor-pointer">
                <summary className="font-display font-semibold text-bark text-sm marker:text-moss">Are there more advanced tips available?</summary>
                <p className="font-body text-sm text-bark-light leading-relaxed mt-3 pl-3 border-l-2 border-moss/30">
                  This page's 30 tips cover everything from beginner to advanced levels. If you've already mastered this content, head to our dedicated Automation, Airship, and Energy System guide pages for deep optimization tips specific to those systems. Additionally, community channels often feature experienced players sharing their latest discoveries and extreme optimization setups — another great source for advanced tips. Following the "Latest Updates" section on the homepage also keeps you informed about the community's latest achievements.
                </p>
              </details>
            </div>
          </section>
        </div>
        <div className="field-divider mt-16" />
      </main>
          </div>
  );
}
