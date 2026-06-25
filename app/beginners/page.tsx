'use client';

export default function BeginnersPage() {
  const steps = [
    { step: '01', title: 'Landing & Resource Gathering', desc: 'You start in the center area of the starting island. First, look around and mark visible resource points. Prioritize gathering Wood (attack trees) and Stone (pick up from the ground), while also collecting Fiber (from bushes and grass). These three basic resources are essential for crafting your first tools and building your first shelter. We recommend gathering as many of these basic materials as possible in the first 10 minutes to lay a solid foundation for rapid early development.' },
    { step: '02', title: 'Craft Basic Tools', desc: 'Once you\'ve gathered enough Wood and Stone, open the crafting menu to craft a Stone Axe and Stone Pickaxe. The Axe greatly improves woodcutting efficiency, while the Pickaxe is used for mining stone and later mineral gathering. Also craft a simple wooden weapon for self-defense. Tool quality directly impacts your gathering speed — investing in tools early is well worth it. Equip them immediately after crafting for a dramatic improvement in resource gathering efficiency.' },
    { step: '03', title: 'Find Water & Food', desc: 'Before building your shelter, identify nearby water and food sources. Starting islands usually have small ponds or streams — mark their locations. Also look for wild berry bushes and edible plants, which are important early food sources. If you can\'t find nearby water, prioritize building a Rain Collector for drinking water. In Solarpunk, water management is often more pressing than food, especially in dry biomes.' },
    { step: '04', title: 'Build Your First Shelter', desc: 'Build a 3x3 wooden hut. It doesn\'t need to be elaborate — just a roof and four walls will do. Place a Basic Workbench and Campfire inside. The Workbench enables crafting more items and the Campfire provides light and warmth. After that, immediately craft a Bed. Sleep quality directly affects work efficiency — all operations are significantly slower when sleep-deprived. A good shelter also protects you during storms and harsh weather.' },
    { step: '05', title: 'Establish Basic Technology', desc: 'Building a Research Station is one of the most important early-game milestones. The Research Station requires Wood, Iron Ingots, and Copper Wire to craft. Once built, research in the tech tree in this priority order: Basic Farming → Basic Power → Basic Smelting. The logic is clear — secure food supply first, then solve energy, then build industrial foundations. Each completed research project unlocks a batch of new crafting recipes, giving your survival capabilities a qualitative leap.' },
    { step: '06', title: 'Build Basic Energy System', desc: 'After completing Basic Power research, immediately build Solar Panels and Batteries. On temperate islands, the recommended starter setup is 2 Solar Panels + 1 Battery Pack. Solar Panels generate power during the day, and Batteries store surplus power for nighttime use. This simple power system is enough to drive your Research Station, Basic Workbench, and initial lighting needs. Make sure all power devices are connected via wires into a complete power grid.' },
    { step: '07', title: 'Start Your Farm', desc: 'With a stable energy supply established, begin planning your first farm. Choose a flat area near your shelter and use a hoe to till farmland. For your first crops, plant fast-growing leafy greens and berries — they can be harvested in 2-3 in-game days and quickly provide a stable food source. Don\'t aim for large scale initially — 4-6 farmland plots are enough to sustain one person\'s daily food needs. As you unlock more tech, you can gradually install Sprinklers for automated irrigation.' },
    { step: '08', title: 'Repair the Airship', desc: 'After completing the steps above, your base should be basically self-sufficient. Now head to the highest point on the island to find crashed airship parts. Gather Iron Ingots, Wood, and Cloth to craft an Airship Repair Kit, then complete the repair at the Airship Dock. The first airship repair is the key to unlocking other islands. After repairs, your first destination should be the L2-tier Grassland Archipelago islands, where copper and iron ore resources will propel you into the industrial age.' },
  ];

  return (
    <div className="min-h-screen bg-field-paper bg-paper-texture">
      
      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="flex-1 lg:max-w-[65%] space-y-12">
            <section>
              <h2 className="font-display text-2xl font-bold text-bark">Welcome to the Floating Islands</h2>
              <p className="font-body text-bark-light leading-relaxed mt-4">
                Solarpunk is an open-world survival building game. You start from scratch and build your own home on islands floating among the clouds. This guide is designed specifically for first-time players and will walk you through the first 10 hours of gameplay — from landing on Day 1 to establishing a self-sufficient base. We follow the most efficient development route, guiding you step by step through every critical milestone.
              </p>
              <p className="font-body text-bark-light leading-relaxed mt-3">
                Before we begin, a few important notes: first, this game encourages you to explore and build at your own pace — this guide provides a proven efficient route, but you are completely free to adjust the order or skip steps as you prefer. Second, there is no "perfect" way to play — different development strategies lead to different gameplay experiences. Finally, the core joy of Solarpunk lies in the process of creation and exploration itself — don't sacrifice the fun of the game by chasing speed.
              </p>
              <p className="font-body text-bark-light leading-relaxed mt-3">
                All numerical values and recommended configurations in this guide are the results of repeated testing by community players. As the game receives updates, certain parameters may adjust — please refer to in-game displays as the final authority. If you encounter difficulties at any step, don't be discouraged — it's part of the learning process. You can return to the guide site to consult system-specific guides or seek help and advice from other players in the community.
              </p>
              <p className="font-body text-bark-light leading-relaxed mt-3">
                You will experience the journey from having nothing to establishing a complete base system. Along the way, you'll learn how to efficiently gather resources, plan base layouts, manage energy systems, and use the tech tree to unlock more advanced building capabilities. Each step builds on the previous one: without enough resources, you can't build facilities; without the right facilities, you can't unlock new tech; and without tech support, you can't explore the broader floating island world. This is the core appeal of survival building games — every advancement comes from all the effort you've accumulated before.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-bark mb-6">Beginner Progression Route</h2>
              <div className="space-y-6">
                {steps.map((s, i) => (
                  <div key={i} className="flex gap-5 items-start">
                    <span className="step-number shrink-0">{s.step}</span>
                    <div>
                      <h3 className="font-display text-base font-semibold text-bark">{s.title}</h3>
                      <p className="font-body text-sm text-bark-light leading-relaxed mt-1">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-bark mb-6">Frequently Asked Questions</h2>
              <div className="space-y-2">
                <details className="journal-card p-4 group cursor-pointer">
                  <summary className="font-display font-semibold text-bark text-sm marker:text-moss">Should I build a house or craft tools first?</summary>
                  <p className="font-body text-sm text-bark-light leading-relaxed mt-3 pl-3 border-l-2 border-moss/30">
                    We recommend crafting tools (Stone Axe, Stone Pickaxe) first, then building your shelter. Tools dramatically improve resource gathering efficiency, letting you collect building materials in much less time. Plus, the resources needed for tools are minimal (4-5 units of basic materials each) and will hardly delay your house-building progress. However, if night is approaching and you don't yet have a safe place to sleep, prioritize building a simple hut.
                  </p>
                </details>
                <details className="journal-card p-4 group cursor-pointer">
                  <summary className="font-display font-semibold text-bark text-sm marker:text-moss">Why am I always running out of food?</summary>
                  <p className="font-body text-sm text-bark-light leading-relaxed mt-3 pl-3 border-l-2 border-moss/30">
                    The three most common reasons for food shortages among beginners: not starting a farm early enough, ignoring sleep quality's impact on efficiency, and relying too heavily on wild gathering instead of farming. Solutions: after building your shelter, quickly till 4-6 farmland plots and plant fast-growing crops; use fertilizer and sprinklers to accelerate growth; and explore the surrounding area for wild long-term food supply points as emergency reserves.
                  </p>
                </details>
                <details className="journal-card p-4 group cursor-pointer">
                  <summary className="font-display font-semibold text-bark text-sm marker:text-moss">When should I start building automation?</summary>
                  <p className="font-body text-sm text-bark-light leading-relaxed mt-3 pl-3 border-l-2 border-moss/30">
                    We recommend accumulating sufficient resources and experience through manual production first, then starting automation when the following conditions are met: a stable energy supply (at least 2 Solar + 2 Battery), unlocked basic Conveyor Belt and Sorter recipes, and enough Iron and Copper Ingot reserves on hand. Automation is a systems engineering effort with substantial upfront investment — start with the simplest conveyor belt connection (e.g., Mining Machine → Furnace) and gradually expand to more complex assembly lines. For detailed steps, refer to the Automation System guide.
                  </p>
                </details>
              </div>
            </section>
          </div>

          <aside className="lg:w-[30%] space-y-10 shrink-0">
            <div className="field-sidebar-block">
              <h3 className="font-display text-base font-semibold text-bark mb-4">Quick Navigation</h3>
              <div className="space-y-2 font-body text-sm">
                <a href="/guides" className="block text-moss hover:text-moss-dark transition-colors">All Guides Overview</a>
                <a href="/tips" className="block text-moss hover:text-moss-dark transition-colors">30 Survival Tips</a>
                <a href="/crafting" className="block text-moss hover:text-moss-dark transition-colors">Crafting Recipe Reference</a>
                <a href="/faq" className="block text-moss hover:text-moss-dark transition-colors">FAQ Collection</a>
              </div>
            </div>
            <div className="field-sidebar-block">
              <h3 className="font-display text-base font-semibold text-bark mb-4">Recommended Reading Order</h3>
              <div className="space-y-1 font-body text-xs text-bark-light leading-relaxed">
                <p>1. This Page (Beginner Guide)</p>
                <p>2. Energy System Guide</p>
                <p>3. Farming System Guide</p>
                <p>4. Automation System Guide</p>
                <p>5. Airship System Deep Dive</p>
              </div>
            </div>
          </aside>
        </div>
        <div className="field-divider mt-16" />
      </main>
          </div>
  );
}
