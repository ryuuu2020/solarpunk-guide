export const metadata = {
  title: "Solarpunk Colonist Guide — Traits & Skills (2026)",
  description: "Complete guide to Solarpunk colonists. Best traits, skill priorities, work assignments, and how to build an efficient colony.",
};

export default function ColonistGuidePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <h1 className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-bark leading-none mb-4">Solarpunk Colonist Guide — Traits & Skills</h1>
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <section>
            <h2 className="font-display text-2xl font-bold text-bark">Colonist Traits Overview</h2>
            <p className="font-body text-bark-light leading-relaxed mt-4">Each Solarpunk colonist has a set of traits that modify their efficiency at specific tasks. Traits are assigned at character creation and cannot be changed. When recruiting new colonists, prioritize trait compatibility with your colony's current bottleneck — if farming is slow, recruit colonists with Agricultural Affinity.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-bark">Essential Traits</h2>
            <p className="font-body text-bark-light leading-relaxed mt-4">Agricultural Affinity: +30% farming speed and crop yield. Builder: +25% construction speed. Researcher: unlocks faster tech tree progression. Mechanic: reduces machine maintenance time by 40%. Trader: improves trade deal values by 15-20%. Medic: +50% healing speed. Each colony should aim to have at least one colonist with each of these essential traits.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-bark">Work Priority System</h2>
            <p className="font-body text-bark-light leading-relaxed mt-4">The work priority system determines which tasks each colonist performs when multiple tasks are queued. Set higher priorities (1-3) for colonists' primary skills and lower priorities (7-10) for secondary tasks. A colonist with Agricultural Affinity should have farming at priority 1, hauling at priority 5, and construction at priority 8.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-bark">Colony Size Planning</h2>
            <p className="font-body text-bark-light leading-relaxed mt-4">Optimal colony size for the early game is 6-8 colonists: 2 farmers, 1 builder, 1 researcher, 1 crafter, and 1-2 generalists. Expanding beyond 10 colonists before you have stable food and housing creates satisfaction problems. Add colonists only when your food production exceeds current daily consumption by at least 30%.</p>
          </section>
        <section>
          <h2 className="font-display text-2xl font-bold text-bark">FAQ</h2>
          <div className="space-y-4 mt-4">
              <div>
                <h3 className="font-semibold text-white">What should I know about colonist traits overview in Solarpunk?</h3>
                <p className="font-body text-bark-light leading-relaxed mt-4">Each Solarpunk colonist has a set of traits that modify their efficiency at specific tasks. Traits are assigned at character creation and cannot be changed. When recruiting new colonists, prioritize t...</p>
              </div>
              <div>
                <h3 className="font-semibold text-white">What should I know about essential traits in Solarpunk?</h3>
                <p className="font-body text-bark-light leading-relaxed mt-4">Agricultural Affinity: +30% farming speed and crop yield. Builder: +25% construction speed. Researcher: unlocks faster tech tree progression. Mechanic: reduces machine maintenance time by 40%. Trader:...</p>
              </div>
              <div>
                <h3 className="font-semibold text-white">What should I know about work priority system in Solarpunk?</h3>
                <p className="font-body text-bark-light leading-relaxed mt-4">The work priority system determines which tasks each colonist performs when multiple tasks are queued. Set higher priorities (1-3) for colonists' primary skills and lower priorities (7-10) for seconda...</p>
              </div>
          </div>
        </section>
      </div>
    </div>
  );
}
