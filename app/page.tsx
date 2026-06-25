'use client';

import { useState, useRef, useEffect } from 'react';

/* ============================================
   Solarpunk Guide — Template C: Field Journal
   Asymmetric Layout + Hand-Drawn Elements
   ============================================ */

const NAV_ITEMS = [
  { label: 'Field Log', href: '/', active: true },
  { label: 'Guides', href: '/guides' },
  { label: 'Crafting', href: '/crafting' },
  { label: 'World Map', href: '/map' },
  { label: 'Tips', href: '/tips' },
  { label: 'Community', href: '/community' },
];

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

const CRAFTING_RECIPES = [
  { name: 'Basic Workbench', materials: 'Wood x10 + Stone x5', tier: '1' },
  { name: 'Solar Panel', materials: 'Silicon Wafer x4 + Copper Wire x8 + Glass x2', tier: '2' },
  { name: 'Auto Watering System', materials: 'Iron Pipe x6 + Water Pump x1 + Circuit Board x2', tier: '3' },
  { name: 'Airship Engine Core', materials: 'Titanium Alloy x20 + Energy Core x1 + Advanced Circuit x5', tier: '4' },
];

const TIPS = [
  { tip: 'Build a Rain Collector early — water is scarcer than food in the early game', category: 'Survival' },
  { tip: 'Place fences along floating island edges to prevent accidental falls', category: 'Building' },
  { tip: 'Solar panels need regular cleaning — dust reduces efficiency', category: 'Tech' },
  { tip: 'Warm-tone lighting reduces crop growth penalty during nighttime', category: 'Farming' },
];

export default function HomePage() {
  const [activeNav, setActiveNav] = useState(NAV_ITEMS[0].label);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    const activeEl = container.querySelector('.nav-pill.active');
    if (activeEl) {
      activeEl.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }, [activeNav]);

  return (
    <div className="min-h-screen bg-field-paper bg-paper-texture">

      {/* ===== Hero Image ===== */}
      <div className="w-full h-48 lg:h-80 overflow-hidden">
        <img src="/hero.jpg" alt="Solarpunk" className="w-full h-full object-cover" />
      </div>

      {/* ===== Header ===== */}
      <header className="pt-12 pb-6 px-4 lg:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col items-start">
          <h1 className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-bark leading-none">
            Solarpunk Survival Guide
          </h1>
            <p className="font-body text-base text-stone mt-3 max-w-md leading-relaxed italic">
              Survive, build, and explore on floating islands — a Solarpunk field journal from the ground up
            </p>

          <div className="w-full mt-8">
            <div
              ref={scrollRef}
              className="flex gap-1.5 overflow-x-auto pb-2 scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setActiveNav(item.label)}
                  className={`nav-pill ${activeNav === item.label ? 'active' : ''}`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="field-divider mt-6" />
      </header>

      {/* ===== Main Content: Asymmetric Layout ===== */}
      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

          {/* ===== Main Column (wider, left) ===== */}
          <div className="flex-1 lg:max-w-[65%] space-y-16">

            {/* --- Welcome / Hero message --- */}
            <section>
              <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight text-bark leading-tight text-balance">
                Welcome to the Floating Islands
              </h2>
              <p className="font-body text-lg text-bark-light leading-relaxed mt-4 max-w-2xl">
                Solarpunk is an open-world survival building game where you build a home on islands floating in the sky — solo or with friends. Start by gathering your first pieces of wood, progress through the tech tree, build automated factories, and craft your very own airship. This guide takes you from zero to mastering every core system.
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
                  { step: '03', title: 'Unlock the Tech Tree', desc: 'After building a Research Station, prioritize researching Basic Farming and Basic Power. Unlock Solar Panels and Water Pumps to prepare for automation.' },
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
                      <td className="py-3 px-4">Solar Panel, Wind Turbine, Battery Pack</td>
                    </tr>
                    <tr className="border-b border-clay/30">
                      <td className="py-3 px-4 font-semibold text-bark">Automation</td>
                      <td className="py-3 px-4">Conveyor belts, sorters, drone transport network</td>
                      <td className="py-3 px-4">Conveyor Belt System, Smart Sorter, Drone Station</td>
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
                  { q: 'What should I do first in Solarpunk?', a: 'Immediately collect 2 Wood to craft a Survival Handbook. It unlocks the recipe browser, tracks game progress, and is the single most important item in the game.' },
                  { q: 'How do I get Copper Ore?', a: 'Copper is scarce on the starting island. Prioritize repairing your airship to reach L2 islands, where copper deposits are abundant. Use a Furnace to smelt Copper Ore into Copper Ingots.' },
                  { q: 'How do Solar Panels work?', a: 'They produce 15 units/hour during daytime and zero at night. Use Batteries to store surplus daytime power for nighttime use. The recommended setup is 2 Solar Panels + 1 Wind Turbine + 2 Battery Packs.' },
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

          {/* ===== Sidebar (narrower, right) ===== */}
          <aside className="lg:w-[30%] space-y-10 shrink-0">
            {/* --- Crafting Quick Reference --- */}
            <div className="field-sidebar-block">
              <h3 className="font-display text-base font-semibold text-bark mb-4">
                Key Recipe Reference
              </h3>
              <div className="space-y-3">
                {CRAFTING_RECIPES.map((recipe, i) => (
                  <div key={i} className="recipe-card">
                    <h4 className="font-display text-sm font-semibold text-bark">
                      {recipe.name}
                    </h4>
                    <p className="font-body text-xs text-stone mt-1 leading-relaxed">
                      {recipe.materials}
                    </p>
                    <span className="field-tag terracotta text-[10px] mt-2 inline-block">
                      {recipe.tier}
                    </span>
                  </div>
                ))}
              </div>
              <a
                href="/crafting"
                className="inline-block font-body text-xs font-semibold text-moss hover:text-moss-dark transition-colors mt-4"
              >
                Full Recipe List &rarr;
              </a>
            </div>

            {/* --- Community Updates --- */}
            <div className="field-sidebar-block">
              <h3 className="font-display text-base font-semibold text-bark mb-4">
                Latest Updates
              </h3>
              <div className="space-y-4">
                {[
                  { date: '2026-06-20', text: 'Community discovers a new automated farm layout, boosting yield by 40%' },
                  { date: '2026-06-15', text: 'Devs confirm "Crystal Caverns" biome coming in the next major update' },
                  { date: '2026-06-10', text: 'Community airship blueprint sharing event now open' },
                ].map((update, i) => (
                  <div key={i}>
                    <span className="font-body text-[11px] text-stone">
                      {update.date}
                    </span>
                    <p className="font-body text-sm text-bark-light mt-0.5 leading-relaxed">
                      {update.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* --- Afdian support card --- */}
            <div className="bg-moss-light/50 border border-moss/20 p-6">
              <h3 className="font-display text-sm font-semibold text-moss-dark mb-2">
                Support This Site
              </h3>
              <p className="font-body text-xs text-bark-light leading-relaxed mb-4">
                If this guide has helped you, consider supporting us to keep creating more in-depth content
              </p>
              <a
                href="https://afdian.com/a/gameguidehub"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-pill
                           bg-moss text-white text-sm font-semibold
                           hover:bg-moss-dark transition-colors duration-200"
              >
                ❤️ Support Us
              </a>
            </div>
          </aside>

        </div>

        <div className="field-divider mt-16" />
      </main>

      {/* ===== Footer ===== */}
      <footer className="max-w-6xl mx-auto px-4 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <span className="font-body text-sm text-stone">
              &copy; {new Date().getFullYear()} Solarpunk Survival Guide
            </span>
            <a
              href="/privacy"
              className="font-body text-sm text-stone hover:text-bark transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="font-body text-sm text-stone hover:text-bark transition-colors"
            >
              Terms of Use
            </a>
            <a
              href="/about"
              className="font-body text-sm text-stone hover:text-bark transition-colors"
            >
              About
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://afdian.com/a/gameguidehub"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm font-semibold text-terracotta hover:text-terracotta-dark transition-colors"
            >
              Afdian &rarr;
            </a>
          </div>
        </div>
        {/* More Game Guides */}
        <div className="mt-6 pt-6 border-t border-clay/30">
          <p className="font-body text-xs text-stone mb-3 text-center">More Game Guides</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://dispatch-guide-sigma.vercel.app" className="font-body text-xs text-bark-light hover:text-bark transition-colors">Dispatch Guide</a>
            <a href="https://menace-guide.vercel.app" className="font-body text-xs text-bark-light hover:text-bark transition-colors">MENACE Guide</a>
            <a href="https://olden-era-guide-tau.vercel.app" className="font-body text-xs text-bark-light hover:text-bark transition-colors">Olden Era Guide</a>
            <a href="https://going-medieval-guide.vercel.app" className="font-body text-xs text-bark-light hover:text-bark transition-colors">Going Medieval Guide</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
