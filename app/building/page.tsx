export const metadata = {
  title: "Solarpunk Building Guide — Construction Tips (2026)",
  description:
    "Complete building guide for Solarpunk. Construction materials, placement strategies, and optimization.",
};

export default function BuildingPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <h1 className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-bark leading-none mb-4">Building Guide</h1>
      <p className="font-body text-base text-stone max-w-2xl italic mb-8">Construct your floating island home — walls, roofs, floors, and decorative elements</p>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="flex-1 lg:max-w-[65%] space-y-12">
          <section>
            <h2 className="font-display text-2xl font-bold text-bark mb-4">Building Overview</h2>
            <p className="font-body text-bark-light leading-relaxed">
              Building is a core activity in Solarpunk. You construct your base piece by piece using walls, floors, roofs, and stairs. Buildings provide shelter, house your crafting stations and storage, and define the visual character of your island settlement.
            </p>
            <p className="font-body text-bark-light leading-relaxed mt-3">
              Start simple — a wooden hut with a Crafting Table and Campfire. Expand as you gather more resources and unlock new building materials through research. Your base grows organically with your progress through the game.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-bark mb-6">Building Materials</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-moss/30">
                    <th className="text-left py-3 px-4 font-display font-semibold text-bark">Material</th>
                    <th className="text-left py-3 px-4 font-display font-semibold text-bark">Components</th>
                    <th className="text-left py-3 px-4 font-display font-semibold text-bark">Best For</th>
                  </tr>
                </thead>
                <tbody className="font-body text-bark-light">
                  <tr className="border-b border-clay/30">
                    <td className="py-3 px-4 font-semibold text-bark">Timber</td>
                    <td className="py-3 px-4">Walls, Roofs, Floors, Stairs</td>
                    <td className="py-3 px-4">Early game construction, rustic aesthetic</td>
                  </tr>
                  <tr className="border-b border-clay/30">
                    <td className="py-3 px-4 font-semibold text-bark">Brick</td>
                    <td className="py-3 px-4">Walls, Floors</td>
                    <td className="py-3 px-4">Durable mid-game structures</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-bark">Glass</td>
                    <td className="py-3 px-4">Windows, decorative elements</td>
                    <td className="py-3 px-4">Aesthetics, greenhouses, natural light</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-bark mb-4">Building Tips</h2>
            <div className="space-y-4">
              <div className="journal-card p-5">
                <h3 className="font-display text-sm font-semibold text-bark">Start Small, Expand Gradually</h3>
                <p className="font-body text-sm text-bark-light mt-2">Begin with a 3x3 or 4x4 wooden shelter. Place your essential crafting stations inside. As you gather more materials and unlock new recipes, add rooms and floors.</p>
              </div>
              <div className="journal-card p-5">
                <h3 className="font-display text-sm font-semibold text-bark">Plan Your Layout</h3>
                <p className="font-body text-sm text-bark-light mt-2">Group related functions together: crafting stations near storage, sleeping quarters away from noisy machines, farming near water sources. Good layout saves you running time.</p>
              </div>
              <div className="journal-card p-5">
                <h3 className="font-display text-sm font-semibold text-bark">Use Fences and Railings</h3>
                <p className="font-body text-sm text-bark-light mt-2">Your island floats in the sky! Fences prevent accidental falls off edges, especially important near farming areas and high-traffic paths.</p>
              </div>
            </div>
          </section>
        </div>

        <aside className="lg:w-[30%] space-y-10 shrink-0">
          <div className="field-sidebar-block">
            <h3 className="font-display text-base font-semibold text-bark mb-4">Related Guides</h3>
            <div className="space-y-2 font-body text-sm">
              <a href="/resources" className="block text-moss hover:text-moss-dark transition-colors">Resource Gathering</a>
              <a href="/crafting" className="block text-moss hover:text-moss-dark transition-colors">Crafting Recipes</a>
              <a href="/beginners" className="block text-moss hover:text-moss-dark transition-colors">Beginner Guide</a>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
