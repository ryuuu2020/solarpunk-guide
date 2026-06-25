'use client';

export default function FaqPage() {
  const faqs = [
    { q: 'What is Solarpunk?', a: 'Solarpunk is an open-world survival building game set on islands floating above the clouds. Players gather resources, build bases, research technology, repair airships, and explore the vast sky world. The game blends survival management, automated production, and sandbox building elements. You can play solo or team up with friends in co-op mode. The core appeal lies in the satisfaction of building your own floating island home from scratch and the freedom of creative expression.' },
    { q: 'Does the game support English?', a: 'Solarpunk officially supports Simplified Chinese, Traditional Chinese, and English interfaces and subtitles. The in-game text translation quality is good, with the vast majority of content localized. Our guide site provides the full English version, with content translated and written by community volunteers for easy reference.' },
    { q: 'What should a beginner do first?', a: 'Immediately collect 2 Wood to craft a Survival Handbook. The Handbook unlocks the recipe browser and tracks game progress — it\'s the most important item in the game. After that, follow this order: craft Stone Axe and Stone Pickaxe → gather basic resources → build a 3x3 hut → place Workbench and Campfire → craft a Bed → build a Research Station and prioritize researching Basic Power and Basic Farming. Following this path, you can establish a stable survival foundation by Day 1.' },
    { q: 'How do I get Copper Ore?', a: 'Copper Ore is extremely scarce on the starting island. Prioritize repairing your airship to reach L2-tier Grassland Archipelago islands, which have the most abundant copper deposits. After mining Copper Ore, use a Furnace to smelt it into Copper Ingots. Copper Ingots are the base material for crafting electronic components and power equipment. If you cannot reach L2 islands yet, you can try trading with merchant bots, but this is far less efficient than direct mining.' },
    { q: 'How do Solar Panels work?', a: 'Solar Panels produce power during the day (approximately 15 units/hour, depending on sunlight intensity and island latitude) and stop generating completely at night. You must pair them with Battery systems to store surplus daytime power for nighttime use. The recommended starter energy setup is: 2 Solar Panels + 1 Wind Turbine + 2 Battery Packs. This configuration can provide round-the-clock stable power on most temperate islands.' },
    { q: 'How do I repair the airship?', a: 'Go to the highest point on the island to find the crashed airship parts. After gathering enough materials, craft an Airship Repair Kit at a Basic Workbench (Iron Ingot x5 + Wood x8 + Cloth x2). Then build an Airship Dock and use the repair option in the dock interface. Note that the repair process consumes power — make sure your base has sufficient energy reserves. After repair is complete, you will unlock the ability to travel to L2 islands.' },
    { q: 'Does the game have multiplayer?', a: 'Solarpunk supports multiplayer co-op mode. You can invite friends to join your world to build and explore together, or join another player\'s save file. In multiplayer mode, resources, bases, and tech progress are shared, opening up rich possibilities for teamwork. Each player can take on different roles in a multiplayer world, such as one handling farming while another focuses on exploration and resource gathering.' },
    { q: 'What energy sources are available?', a: 'The main energy sources in the game include: Solar Panels (daytime generation), Wind Turbines (all-day generation with variable output), Battery storage systems, and mid-game unlocks such as Geothermal Generators and Biomass power. Each energy source has its strengths and weaknesses — the optimal approach is to build a hybrid energy system, flexibly adjusting the proportion of each source based on each island\'s climate characteristics.' },
    { q: 'How long do crops take to mature?', a: 'Growth cycles vary significantly between crops. Fast-growing crops like berries and leafy greens take about 2-3 in-game days, while longer-growing crops like grains and fruit trees may need 5-8 in-game days. Actual growth speed is also affected by soil fertility, irrigation status, light conditions, and temperature. Using fertilizer and automated irrigation systems can significantly reduce maturation time.' },
    { q: 'How do I use the conveyor belt system?', a: 'Conveyor belts are the foundational component of automated production. When using them, first run a belt from the output device (such as a Mining Machine) to the target device (such as a Furnace), ensuring the belt direction is correct. The belt will automatically transport items placed on one end to the other. Advanced usage includes setting up Sorters to classify mixed items, using Mergers to combine multiple belts into a main line, and configuring buffer zones to smooth production fluctuations.' },
    { q: 'Can I customize my airship?', a: 'Yes, airship customization is one of Solarpunk\'s deepest systems. You can freely design deck layouts, choose different engine types, install weapons and equipment, and configure storage space and living quarters. An airship can evolve into a small mobile base containing workbenches, storage systems, and energy equipment. Advanced players can even build multiple airships for different purposes — logistics transport, long-range exploration, and mobile combat platforms.' },
    { q: 'How accurate is the data in the guides?', a: 'The numerical data in our guides comes from actual testing and estimation by community players. We verify against the current game version before publishing, but Solarpunk is still receiving ongoing updates, and certain parameters may change with version updates. All numerical data is marked as "community estimates" — we recommend using in-game displayed values as the final reference. If you find data errors, please report them via Afdian.' },
  ];

  return (
    <div className="min-h-screen bg-field-paper bg-paper-texture">
      <header className="pt-12 pb-6 px-4 lg:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col items-start">
          <a href="/" className="font-display text-sm text-moss hover:text-moss-dark transition-colors mb-4">&larr; Back to Home</a>
          <h1 className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-bark leading-none">Frequently Asked Questions</h1>
          <p className="font-body text-base text-stone mt-3 max-w-md leading-relaxed italic">The 12 most commonly asked Solarpunk questions with detailed answers</p>
        </div>
        <div className="field-divider mt-6" />
      </header>

      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="space-y-12">
          <section>
            <p className="font-body text-bark-light leading-relaxed">
              This page compiles the 12 most frequently asked questions from the Solarpunk player community, along with detailed answers. These questions cover game entry, core system mechanics, multiplayer gameplay, and guide site usage. If you're experiencing Solarpunk for the first time, we recommend reading through these questions — they will help you quickly build a general understanding of the game. For deeper system-level questions, please refer to our dedicated system guide pages, which offer more detailed explanations and hands-on guidance.
            </p>
            <p className="font-body text-bark-light leading-relaxed mt-3">
              Solarpunk is a game with deep systems and open-ended gameplay, and new players may encounter various questions in the first few hours. The FAQ below synthesizes the most common questions from community feedback, with each answer aiming to provide key information concisely while linking to relevant guide pages for further learning. If you have a question not covered here, feel free to ask through the Afdian platform or community channels — we regularly update this FAQ list.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-bark mb-6">All Questions</h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <details key={i} className="journal-card p-5 group cursor-pointer">
                  <summary className="font-display font-semibold text-bark marker:text-moss">
                    {faq.q}
                  </summary>
                  <p className="font-body text-sm text-bark-light leading-relaxed mt-3 pl-3 border-l-2 border-moss/30">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-bark mb-6">Guide Site Questions</h2>
            <div className="space-y-2">
              <details className="journal-card p-4 group cursor-pointer">
                <summary className="font-display font-semibold text-bark text-sm marker:text-moss">How often is the guide site updated?</summary>
                <p className="font-body text-sm text-bark-light leading-relaxed mt-3 pl-3 border-l-2 border-moss/30">
                  The guide site doesn't have a fixed update schedule — we arrange updates flexibly based on the game's update pace and community contributions. Typically, major guides are updated within 1-2 weeks after each significant game update. The News page and Community Updates section are updated more frequently to ensure you get the latest game news and community developments as soon as possible.
                </p>
              </details>
              <details className="journal-card p-4 group cursor-pointer">
                <summary className="font-display font-semibold text-bark text-sm marker:text-moss">Can I view the guide on mobile?</summary>
                <p className="font-body text-sm text-bark-light leading-relaxed mt-3 pl-3 border-l-2 border-moss/30">
                  This site uses responsive design and provides a good browsing experience on mobile phones, tablets, and desktop computers. The page layout automatically adapts to screen size, and all tables and content are viewable on mobile. You can add this site to your mobile browser's home screen for quick access to guide content, just like a native app.
                </p>
              </details>
              <details className="journal-card p-4 group cursor-pointer">
                <summary className="font-display font-semibold text-bark text-sm marker:text-moss">How do I report errors in the guides?</summary>
                <p className="font-body text-sm text-bark-light leading-relaxed mt-3 pl-3 border-l-2 border-moss/30">
                  If you find errors or outdated information in our guides, you can report them through the Afdian platform. Please include the specific guide page URL and a description of the issue in your report so we can quickly locate and fix it. Players who provide valuable feedback will be acknowledged in our community updates.
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
