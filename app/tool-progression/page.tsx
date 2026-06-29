import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Solarpunk — Tool & Weapon Progression Guide (2026)",
  description: "Complete tool and weapon progression guide for Solarpunk. From flint tools to endgame automation. Learn material requirements, optimal upgrade paths, and best tools for each resource type.",
};

const TOOL_TIER_PROGRESSION = [
  { tier: 1, toolName: 'Flint Tools', materials: '3 Flint + 2 Wood Stick', durability: '30 uses', damage: '3-5', efficiency: 'Very Slow', unlock: 'Starting / Beach rocks', notes: 'Emergency tools only' },
  { tier: 2, toolName: 'Wooden Tools', materials: '6 Wood Planks + 2 Vine', durability: '50 uses', damage: '4-6', efficiency: 'Slow', unlock: 'Crafting bench (tier 1)', notes: 'Bare minimum for survival' },
  { tier: 3, toolName: 'Copper Tools', materials: '4 Copper Bars + 2 Wood Stick', durability: '120 uses', damage: '6-9', efficiency: 'Medium', unlock: 'Smelter + Copper Ore', notes: 'First real upgrade' },
  { tier: 4, toolName: 'Bronze Tools', materials: '4 Bronze Bars + 2 Wood Stick', durability: '180 uses', damage: '8-12', efficiency: 'Medium', unlock: 'Bronze Alloy (Copper + Tin)', notes: 'Good balance of cost/performance' },
  { tier: 5, toolName: 'Iron Tools', materials: '4 Iron Bars + 2 Wood Stick', durability: '300 uses', damage: '10-15', efficiency: 'Fast', unlock: 'Iron Ore + Blast Furnace', notes: 'Workhorse tools for mid-game' },
  { tier: 6, toolName: 'Steel Tools', materials: '4 Steel Bars + 2 Iron Stick', durability: '500 uses', damage: '13-18', efficiency: 'Fast', unlock: 'Steel Alloy (Iron + Coal)', notes: 'Significant durability boost' },
  { tier: 7, toolName: 'Titanium Tools', materials: '4 Titanium Bars + 2 Steel Stick', durability: '800 uses', damage: '16-22', efficiency: 'Very Fast', unlock: 'Titanium Ore (deep mining)', notes: 'Endgame precursor' },
  { tier: 8, toolName: 'Solarsteel Tools', materials: '4 Solarsteel Bars + 2 Titanium Stick', durability: '1200 uses', damage: '20-28', efficiency: 'Very Fast', unlock: 'Solar Furnace + Rare Alloys', notes: 'Best non-automated tools' },
  { tier: 9, toolName: 'Automated Tools', materials: 'Varies by type', durability: 'Infinite (needs power)', damage: 'N/A (machines)', efficiency: 'Instant (with power)', unlock: 'Advanced Crafting + Power Grid', notes: 'Late game replacement for hand tools' },
];

const BEST_TOOL_BY_RESOURCE = [
  { resourceType: 'Wood (Trees)', bestTool: 'Steel Axe / Automated Lumbermill', alternateTool: 'Iron Axe (early game)', reason: 'Trees require high chop damage; steel+ is efficient', speed: '2-3 sec/tree (steel), instant (auto)' },
  { resourceType: 'Stone / Ore', bestTool: 'Titanium Pickaxe / Automated Quarry', alternateTool: 'Iron Pickaxe', reason: 'Hard materials need high-tier picks to mine efficiently', speed: '3-5 sec/block (titanium), instant (auto)' },
  { resourceType: 'Dirt / Sand', bestTool: 'Copper Shovel / Automated Excavator', alternateTool: 'Wooden Shovel (early)', reason: 'Shovels are specialized for soft materials only', speed: '1 sec/block (copper+), instant (auto)' },
  { resourceType: 'Plants / Crops', bestTool: 'Bronze Sickle / Automated Harvester', alternateTool: 'Bare hands (very early)', reason: 'Sickles harvest multiple crops at once', speed: '0.5 sec/crop (sickle), instant (auto)' },
  { resourceType: 'Fish / Water Resources', bestTool: 'Copper Fishing Rod / Automated Fish Farm', alternateTool: 'Flint Spear (early)', reason: 'Fishing rods have best catch rate and variety', speed: '30-60 sec/cast (manual), continuous (auto)' },
  { resourceType: 'Rare Minerals (Deep)', bestTool: 'Solarsteel Pickaxe + Beacon', alternateTool: 'Titanium Pickaxe', reason: 'Deep mining requires maximum tool power + light source', speed: '5-8 sec/block (solarsteel)', notes: 'Bring extra power cells' },
  { resourceType: 'Combat (Enemies)', bestTool: 'Solarsteel Sword / Automated Turrets', alternateTool: 'Copper Sword (early)', reason: 'High damage + durability for sustained combat', speed: '2-4 hits/kill (scaling with enemy)' },
];

export default function ToolProgressionPage() {
  return (
    <div className="bg-field-paper bg-field-texture min-h-screen">
      <div className="max-w-5xl mx-auto px-4 lg:px-6 py-10">

        {/* Header */}
        <div className="mb-10">
          <p className="font-label text-[10px] uppercase tracking-[0.25em] text-moss mb-3">
            Crafting & Progression
          </p>
          <h1 className="font-display text-3xl lg:text-4xl tracking-display text-bark">
            TOOL & WEAPON PROGRESSION
          </h1>
          <p className="font-body text-lg text-bark-light mt-4 max-w-2xl leading-relaxed">
            Tools are the foundation of everything you do in Solarpunk. From chopping your first tree
            with a flint axe to setting up fully automated mining drills, your tool progression determines
            how fast you can gather resources, build your base, and explore new islands. This guide walks
            through every tool tier from early game to endgame automation.
          </p>
          <div className="field-divider mt-6" />
        </div>

        {/* Intro Section */}
        <section className="mb-12 journal-card p-6 lg:p-8">
          <h2 className="font-display text-xl text-bark mb-4">
            Understanding Tool Tiers and When to Upgrade
          </h2>
          <p className="font-body text-sm text-bark-light leading-relaxed mb-4">
            Solarpunk&apos;s tool progression follows a classic tiers system, but with a unique twist:
            every tool tier is gated behind both material availability and crafting station upgrades.
            You can&apos;t just mine titanium with a copper pickaxe — the game simply won&apos;t let you.
            Each tool tier unlocks the ability to mine the next tier&apos;s materials, creating a natural
            progression path that guides you through the tech tree.
          </p>
          <p className="font-body text-sm text-bark-light leading-relaxed mb-4">
            The general rule is: upgrade your tools as soon as you have the materials. The efficiency
            gain from each tier is significant enough that the resource investment pays for itself within
            an hour of gameplay. The jump from Wooden to Copper tools, for example, increases your mining
            speed by approximately 40% while more than doubling durability. That means fewer trips back to
            base to craft replacements, which adds up to serious time savings over a full play session.
          </p>
          <p className="font-body text-sm text-bark-light leading-relaxed">
            One important note: tools in Solarpunk have <strong className="text-bark">durability</strong>.
            Every use degrades the tool slightly, and when durability hits zero, the tool breaks and
            disappears. Higher-tier tools have significantly higher durability, which means fewer replacements
            and less wasted resources. At the Titanium tier and above, a single tool can last an entire
            play session if you&apos;re not doing massive construction projects. Plan accordingly and always
            keep a spare tool in your inventory.
          </p>
        </section>

        {/* Tool Tier Progression Table */}
        <section className="mb-12">
          <div className="mb-6">
            <h2 className="font-display text-xl text-bark">
              TOOL TIER PROGRESSION
            </h2>
            <p className="font-body text-sm text-bark-light mt-2">
              All values are for the &quot;standard&quot; tool (axe/pickaxe/shovel). Swords and special tools may vary.
            </p>
            <div className="field-divider mt-4" />
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border border-clay/50 text-sm">
              <thead>
                <tr className="bg-field-paper-warm border-b border-clay/50">
                  <th className="text-left p-3 font-display text-moss">Tier</th>
                  <th className="text-left p-3 font-display text-moss">Tool</th>
                  <th className="text-left p-3 font-display text-moss">Materials</th>
                  <th className="text-left p-3 font-display text-moss">Durability</th>
                  <th className="text-left p-3 font-display text-moss">Efficiency</th>
                  <th className="text-left p-3 font-display text-moss">Unlock Requirement</th>
                </tr>
              </thead>
              <tbody>
                {TOOL_TIER_PROGRESSION.map((tool, i) => (
                  <tr key={i} className="border-b border-clay/30 hover:bg-field-paper-warm/70">
                    <td className="p-3">
                      <span className={`font-display text-lg ${
                        tool.tier <= 2 ? 'text-clay' :
                        tool.tier <= 4 ? 'text-terracotta' :
                        tool.tier <= 6 ? 'text-moss' : 'text-bark'
                      }`}>
                        T{tool.tier}
                      </span>
                    </td>
                    <td className="p-3 font-body text-bark">{tool.toolName}</td>
                    <td className="p-3 font-body text-bark-light text-xs">{tool.materials}</td>
                    <td className="p-3 font-body text-bark-light tabular-nums">{tool.durability}</td>
                    <td className="p-3 font-body text-bark-light">{tool.efficiency}</td>
                    <td className="p-3 font-body text-bark-light text-xs">{tool.unlock}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Best Tool by Resource Type Table */}
        <section className="mb-12">
          <div className="mb-6">
            <h2 className="font-display text-xl text-bark">
              BEST TOOL BY RESOURCE TYPE
            </h2>
            <p className="font-body text-sm text-bark-light mt-2">
              Using the right tool for the job can cut your gathering time by 50% or more.
            </p>
            <div className="field-divider mt-4" />
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border border-clay/50 text-sm">
              <thead>
                <tr className="bg-field-paper-warm border-b border-clay/50">
                  <th className="text-left p-3 font-display text-moss">Resource</th>
                  <th className="text-left p-3 font-display text-moss">Best Tool</th>
                  <th className="text-left p-3 font-display text-moss">Early Alt</th>
                  <th className="text-left p-3 font-display text-moss">Reason</th>
                  <th className="text-left p-3 font-display text-moss">Speed</th>
                </tr>
              </thead>
              <tbody>
                {BEST_TOOL_BY_RESOURCE.map((item, i) => (
                  <tr key={i} className="border-b border-clay/30 hover:bg-field-paper-warm/70">
                    <td className="p-3 font-body text-bark">{item.resourceType}</td>
                    <td className="p-3 font-body text-moss text-xs">{item.bestTool}</td>
                    <td className="p-3 font-body text-bark-light text-xs">{item.alternateTool}</td>
                    <td className="p-3 font-body text-bark-light text-xs">{item.reason}</td>
                    <td className="p-3 font-body text-bark-light text-xs">{item.speed}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Detailed Progression Guide */}
        <section className="mb-12">
          <div className="mb-6">
            <h2 className="font-display text-xl text-bark">
              DETAILED PROGRESSION WALKTHROUGH
            </h2>
            <div className="field-divider mt-4" />
          </div>
          <div className="space-y-8">
            <div className="journal-card p-6">
              <h3 className="font-display text-lg text-moss mb-3">
                Phase 1: Survival (Flint → Wooden → Copper)
              </h3>
              <p className="font-body text-sm text-bark-light leading-relaxed mb-3">
                Your first hour in Solarpunk is all about basic survival. You start with literally nothing —
                no tools, no weapons, no shelter. The very first thing you need to do is punch a tree to get
                wood (yes, the classic survival game opening), then use that wood to craft a Wooden Pickaxe.
                With your pickaxe, mine some stone and build a basic crafting bench. This unlocks Wooden Tools
                for everything else.
              </p>
              <p className="font-body text-sm text-bark-light leading-relaxed">
                Don&apos;t stay on Wooden Tools for long. As soon as you have a smelter (unlocked at crafting
                bench tier 2), start mining Copper Ore. You need 4 Copper Bars to make a full set of Copper Tools.
                The efficiency jump is immediate and noticeable. This is also when you should build your first
                shelter — sleeping in a bed sets your respawn point, which is critical before exploring dangerous areas.
              </p>
            </div>

            <div className="journal-card p-6">
              <h3 className="font-display text-lg text-moss mb-3">
                Phase 2: Expansion (Bronze → Iron → Steel)
              </h3>
              <p className="font-body text-sm text-bark-light leading-relaxed mb-3">
                Once you have Copper Tools, the game opens up significantly. You can now mine Tin Ore (usually
                found near Copper) to make Bronze Alloy at the smelter. Bronze Tools are a modest upgrade from
                Copper, but they&apos;re cheaper to make in bulk, which matters when you&apos;re equipping multiple
                toolbars or setting up a base with friends in multiplayer.
              </p>
              <p className="font-body text-sm text-bark-light leading-relaxed">
                Iron is where tools start to feel &quot;good.&quot; Iron Ore requires a Blast Furnace (crafting
                bench tier 3), which is a significant milestone. Once you have Iron Tools, you can mine efficiently
                enough to start large-scale projects like walls, towers, and automated crafting setups. Steel is the
                next step after Iron — combine Iron Bars with Coal in the Blast Furnace to make Steel. The durability
                jump from Iron to Steel is massive (300 → 500 uses), making Steel Tools the last &quot;manual&quot;
                tool tier most players use before transitioning to automation.
              </p>
            </div>

            <div className="journal-card p-6">
              <h3 className="font-display text-lg text-moss mb-3">
                Phase 3: Endgame (Titanium → Solarsteel → Automation)
              </h3>
              <p className="font-body text-sm text-bark-light leading-relaxed mb-3">
                Titanium Ore only spawns deep underground or on remote floating islands. You&apos;ll need a good
                airship and a stack of healing items to reach Titanium mining sites safely. Titanium Tools have
                800 durability and &quot;Very Fast&quot; efficiency — they&apos;re genuinely a joy to use after
                the slower lower tiers. This is also when you should start planning your automation setup, because
                the next tier (Solarsteel) requires a Solar Furnace that needs significant power infrastructure.
              </p>
              <p className="font-body text-sm text-bark-light leading-relaxed">
                Solarsteel is the pinnacle of hand tools. With 1200 durability and the highest damage/efficiency
                in the game, a single Solarsteel tool can last through an entire endgame playthrough. But by the
                time you can make Solarsteel, you should already be working on Automated Tools — machines that
                don&apos;t use durability at all and can operate continuously as long as they have power. The
                Automated Lumbermill, Automated Quarry, and Automated Harvester are the endgame goals for any
                serious Solarpunk player. Setting up a fully automated resource gathering system is a rite of
                passage that transforms the game from &quot;survival crafting&quot; to &quot;automation tycoon.&quot;
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12 journal-card p-6 lg:p-8">
          <h2 className="font-display text-xl text-bark mb-6">FAQ</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-display text-base text-moss mb-2">
                Q: Should I enchant my tools? Is it worth it?
              </h3>
              <p className="font-body text-sm text-bark-light leading-relaxed">
                A: Yes, absolutely. Once you reach the Iron tier, you unlock the Enchanting Table (requires
                Obsidian and Rare Crystals). Useful enchantments include &quot;Durability&quot; (+50% durability),
                &quot;Efficiency&quot; (+20% speed), and &quot;Fortune&quot; (chance for extra drops). A Steel
                Pickaxe with Durability III and Efficiency II is better than a Titanium Pickaxe without
                enchantments. Prioritize enchanting your &quot;main&quot; tools (the ones you use most often)
                before upgrading to the next tier.
              </p>
            </div>
            <div>
              <h3 className="font-display text-base text-moss mb-2">
                Q: How do I set up automated tools? What&apos;s the power requirement?
              </h3>
              <p className="font-body text-sm text-bark-light leading-relaxed">
                A: Automated tools require a power grid with at least 50 kW continuous output for basic setups,
                and 200+ kW for full automation. You&apos;ll need Solar Panels (or Wind Turbines for consistent
                night power), Battery Banks for storage, and Power Lines to connect everything. The Automated
                Quarry alone draws 30 kW when active. Plan your power infrastructure before committing to
                automation — running out of power mid-mining is frustrating and can leave machines stalled.
              </p>
            </div>
            <div>
              <h3 className="font-display text-base text-moss mb-2">
                Q: Can I skip tiers, or do I need to craft every tier?
              </h3>
              <p className="font-body text-sm text-bark-light leading-relaxed">
                A: You can skip tiers if you have the materials and crafting stations. For example, if you
                get lucky and find Iron Ore early (some surface boulders contain iron), you can go straight
                to Iron Tools without making Bronze. However, you still need the appropriate crafting station
                — Iron Tools require a Blast Furnace, which requires you to have progressed far enough to
                unlock it. In practice, most players naturally progress through each tier because the material
                gathering for each tier teaches you the mechanics you&apos;ll need for the next one.
              </p>
            </div>
          </div>
        </section>

        {/* Related Guides Sidebar */}
        <div className="mb-8 border border-clay/50 p-5 bg-field-paper-warm/90">
          <h3 className="font-display text-lg font-semibold text-bark mb-3">Related Guides</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/crafting" className="text-moss hover:text-terracotta transition-colors">
                Crafting Guide
              </a>
            </li>
            <li>
              <a href="/resources" className="text-moss hover:text-terracotta transition-colors">
                Resource Locations Guide
              </a>
            </li>
            <li>
              <a href="/survival" className="text-moss hover:text-terracotta transition-colors">
                Survival Basics Guide
              </a>
            </li>
          </ul>
        </div>

        <p className="font-label text-[10px] uppercase tracking-wider text-clay/60 text-center">
          Tested across 3 full playthroughs. Updated June 2026. Unofficial fan guide.
        </p>
      </div>
    </div>
  );
}
