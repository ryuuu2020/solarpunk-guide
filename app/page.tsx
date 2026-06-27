const FEATURED_GUIDES = [
  {
    title: 'Complete Beginner Survival Guide',
    excerpt: 'From landing on your first floating island to building a self-sufficient base — a step-by-step walkthrough of your first 10 hours in Solarpunk',
    tag: 'GUIDE',
    tagType: 'moss' as const,
    readTime: '15',
  },
  {
    title: 'Airship Building & Customization Tutorial',
    excerpt: 'Deep dive into the airship building system: engine selection, deck layout, fuel management, and how to build a mobile base above the clouds',
    tag: 'TUTORIAL',
    tagType: 'terracotta' as const,
    readTime: '12',
  },
];

const TIPS = [
  { tip: 'Build a Rain Collector early — water is scarcer than food in the early game', category: 'Survival' },
  { tip: 'Place fences along floating island edges to prevent accidental falls', category: 'Building' },
  { tip: 'Solar panels generate energy only during daytime — use batteries to store power for nighttime', category: 'Tech' },
  { tip: 'Use Sprinklers to automate crop watering once you have a stable power supply', category: 'Farming' },
];

export default function HomePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <div className="space-y-16">

        {/* --- Welcome / Hero message --- */}
        <section>
          <h1 className="font-display text-3xl lg:text-4xl font-bold tracking-tight text-bark leading-tight text-balance">
            Welcome to the Floating Islands
          </h1>
          <p className="font-body text-lg text-bark-light leading-relaxed mt-4 max-w-2xl">
            Solarpunk is an open-world survival crafting game where you build a home on islands floating in the sky — solo or with friends. Grow crops, raise animals, power your base with renewable energy, and upgrade your airship to reach new islands. This guide takes you from zero to mastering every core system.
          </p>
        </section>

        {/* --- Featured Guides --- */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-display text-xl font-semibold text-bark">
                Featured Guides
              </h3>
              <p className="font-body text-sm text-stone mt-1">
                Your Solarpunk adventure starts here
              </p>
            </div>
            <a
              href="/guides"
              className="font-body text-sm font-semibold text-moss hover:text-moss-dark transition-colors"
            >
              View All &rarr;
            </a>
          </div>

          <div className="space-y-4">
            {FEATURED_GUIDES.map((guide, i) => (
              <a
                key={i}
                href={i === 0 ? '/beginners' : '/airship'}
                className="journal-card block p-6 group"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`field-tag ${guide.tagType}`}>
                        {guide.tag}
                      </span>
                    </div>
                    <h4 className="font-display text-lg font-semibold text-bark
                                   group-hover:text-moss transition-colors duration-200">
                      {guide.title}
                    </h4>
                    <p className="font-body text-sm text-bark-light leading-relaxed mt-2 line-clamp-2">
                      {guide.excerpt}
                    </p>
                  </div>
                  <span className="font-body text-xs text-stone whitespace-nowrap">
                    {guide.readTime} min read
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* --- Getting Started Steps --- */}
        <section>
          <div className="mb-6">
            <h3 className="font-display text-xl font-semibold text-bark">
              Quick Start
            </h3>
            <p className="font-body text-sm text-stone mt-1">
              Surviving on floating islands from scratch
            </p>
          </div>

          <div className="space-y-6">
            {[
              { step: '01', title: 'Gather Basic Resources', desc: 'After landing, prioritize collecting wood, stone, and fiber. Craft a Stone Axe and Stone Pickaxe to boost gathering efficiency. Keep an eye out for berry bushes and edible plants.' },
              { step: '02', title: 'Build Your First Shelter', desc: 'Construct a 3x3 wooden hut. Place a Workbench and Campfire inside. Craft a Bed to ensure good sleep quality, which directly affects your work efficiency.' },
              { step: '03', title: 'Unlock the Tech Tree', desc: 'After building a Research Table, prioritize researching Basic Farming and Basic Power. Unlock Solar Panels and Water Pumps to prepare for mid-game expansion.' },
            ].map((s, i) => (
              <div key={i} className="flex gap-5 items-start">
                <span className="step-number shrink-0">{s.step}</span>
                <div>
                  <h4 className="font-display text-base font-semibold text-bark">
                    {s.title}
                  </h4>
                  <p className="font-body text-sm text-bark-light leading-relaxed mt-1">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- Tips & Tricks --- */}
        <section>
          <div className="mb-6">
            <h3 className="font-display text-xl font-semibold text-bark">
              Useful Tips
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {TIPS.map((item, i) => (
              <div key={i} className="journal-card p-4">
                <span className="field-tag stone text-[10px] mb-2 inline-block">
                  {item.category}
                </span>
                <p className="font-body text-sm text-bark leading-relaxed">
                  {item.tip}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* --- Quick Reference: Key Systems --- */}
        <section>
          <h3 className="font-display text-xl font-semibold text-bark mb-6">
            Core Systems at a Glance
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-moss/30">
                  <th className="text-left py-3 px-4 font-display font-semibold text-bark">System</th>
                  <th className="text-left py-3 px-4 font-display font-semibold text-bark">Core Mechanics</th>
                  <th className="text-left py-3 px-4 font-display font-semibold text-bark">Key Unlocks</th>
                </tr>
              </thead>
              <tbody className="font-body text-bark-light">
                <tr className="border-b border-clay/30">
                  <td className="py-3 px-4 font-semibold text-bark">Energy</td>
                  <td className="py-3 px-4">Solar/Wind/Battery storage, day-night cycle management</td>
                  <td className="py-3 px-4">Solar Panel, Windmill, Battery</td>
                </tr>
                <tr className="border-b border-clay/30">
                  <td className="py-3 px-4 font-semibold text-bark">Automation</td>
                  <td className="py-3 px-4">Transport drones, sprinklers, foresters, logic sensors</td>
                  <td className="py-3 px-4">Transport Drone, Sprinkler, Forester, Logic Block</td>
                </tr>
                <tr className="border-b border-clay/30">
                  <td className="py-3 px-4 font-semibold text-bark">Farming</td>
                  <td className="py-3 px-4">Planting, irrigation, fertilization, automated harvesting</td>
                  <td className="py-3 px-4">Farmland, Sprinkler, Fertilizer Station, Auto Harvester</td>
                </tr>
                <tr className="border-b border-clay/30">
                  <td className="py-3 px-4 font-semibold text-bark">Airship</td>
                  <td className="py-3 px-4">Repair, upgrade, unlock higher-tier islands</td>
                  <td className="py-3 px-4">Repair Kit, Airship Dock, Engine Upgrade</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-bark">Building</td>
                  <td className="py-3 px-4">Modular building, room system, aesthetics</td>
                  <td className="py-3 px-4">Wood/Stone/Steel Wall, Floor, Roof</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* --- FAQ Section --- */}
        <section>
          <h3 className="font-display text-xl font-semibold text-bark mb-6">
            Common Questions
          </h3>
          <div className="space-y-2">
            {[
              { q: 'What should I do first in Solarpunk?', a: 'Immediately collect wood and stone to craft basic tools — a Stone Axe and Stone Pickaxe. Build a Crafting Table as soon as possible to unlock more recipes. Gather berries and edible plants to maintain your food supply while you establish your first base.' },
              { q: 'How do I get Copper Ore?', a: 'Copper is scarce on the starting island. Prioritize repairing your airship to reach new islands where copper deposits are more abundant. Use a Furnace to smelt Copper Ore into Copper Ingots.' },
              { q: 'How do Solar Panels work?', a: 'Solar Panels generate energy during daylight hours and stop at night. Use Batteries to store surplus daytime power for nighttime use. Pair Solar Panels with Windmills for more consistent all-day power coverage.' },
            ].map((faq, i) => (
              <details key={i} className="journal-card p-4 group cursor-pointer">
                <summary className="font-display font-semibold text-bark text-sm marker:text-moss">
                  {faq.q}
                </summary>
                <p className="font-body text-sm text-bark-light leading-relaxed mt-3 pl-1 border-l-2 border-moss/30 pl-3">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </section>

      </div>

      <div className="field-divider mt-16" />
    </div>
  );
}
