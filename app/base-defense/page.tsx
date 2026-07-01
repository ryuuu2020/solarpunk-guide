export const metadata = {
  title: "Solarpunk Base Defense Guide — Turrets, Walls & Raid Protection (2026)",
  description: "Complete Solarpunk base defense guide. Turret placement strategy, wall design, raid wave mechanics, and how to protect your floating island base from enemy attacks.",
};

const DEFENSE_STRUCTURES = [
  { name: "Wooden Walls", tier: "Early", cost: "Wood (15 per segment)", durability: 200, specialProps: "None — basic barrier", bestUse: "First defense line on Day 1-5. Upgrade to stone as soon as possible." },
  { name: "Stone Walls", tier: "Mid", cost: "Stone (20 per segment)", durability: 500, specialProps: "Fireproof — does not burn", bestUse: "Permanent outer walls. Replace all wooden walls with stone by Day 10." },
  { name: "Reinforced Walls", tier: "Late", cost: "Iron Ingot + Stone (25 per segment)", durability: 1000, specialProps: "Explosion resistant, slows enemy mining", bestUse: "Core base defense. Build around your most critical structures (Research Station, Power Grid)." },
  { name: "Basic Turret", tier: "Early", cost: "Iron Ingot (8), Copper Wire (4)", damage: "Low", range: "Medium", bestUse: "Perimeter coverage. Place on corners for 360-degree firing arcs." },
  { name: "Laser Turret", tier: "Mid", cost: "Steel Ingot (12), Circuit Board (6)", damage: "Medium", range: "Long", bestUse: "Primary defense turret. Higher damage than Basic, longer range. Upgrade all Basic Turrets to Laser by mid-game." },
  { name: "Plasma Turret", tier: "Late", cost: "Titanium Ingot (15), Advanced Circuit (8)", damage: "High", range: "Very Long", bestUse: "Anti-air and anti-boss turret. Place at the center of your base to cover all angles. Expensive but worth it." },
  { name: "Tesla Coil", tier: "Late", cost: "Gold Ingot (10), Super Capacitor (4)", damage: "AoE (chain lightning)", range: "Short", bestUse: "Crowd control. Place near chokepoints where enemies cluster. Chains to up to 5 targets." },
  { name: "Shield Generator", tier: "Endgame", cost: "Diamond (5), Quantum Core (2)", damage: "None (defense only)", range: "Area", bestUse: "Projects a shield dome that absorbs damage. Place at base center. Requires significant power — build a dedicated power plant first." },
];

const RAID_TYPES = [
  { type: "Scout Party", waveCount: "1-2 waves", enemyTypes: "Basic drones and infantry", difficulty: "Easy", counter: "2-3 Basic Turrets on perimeter" },
  { type: "Assault Squad", waveCount: "3-4 waves", enemyTypes: "Armored infantry, shielded drones", difficulty: "Medium", counter: "4-6 Laser Turrets, stone walls" },
  { type: "Siege Force", waveCount: "5-6 waves", enemyTypes: "Siege walkers, bombers, elite infantry", difficulty: "Hard", counter: "8+ Laser Turrets, reinforced walls, Tesla Coil at chokepoint" },
  { type: "Boss Raid", waveCount: "1 wave + boss", enemyTypes: "Unique boss enemy + escort", difficulty: "Very Hard", counter: "Full defense setup: Plasma Turrets, Shield Generator, reinforced walls, all turrets active" },
];

export default function BaseDefensePage() {
  return (
    <div className="min-h-screen bg-field-paper bg-paper-texture">
      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="flex-1 lg:max-w-[65%] space-y-12">
            <section>
              <h2 className="font-display text-2xl font-bold text-bark">Protecting Your Floating Island</h2>
              <p className="font-body text-bark-light leading-relaxed mt-4">
                Base defense in Solarpunk is not optional. Every few in-game days, enemy forces will attack your island, targeting your power grid, storage, and production facilities. A well-designed defense system turns these raids from existential threats into resource delivery events — enemies drop valuable crafting materials when destroyed.
              </p>
              <p className="font-body text-bark-light leading-relaxed mt-3">
                The key principle of Solarpunk defense is <strong>layered protection</strong>. Outer walls slow enemies down. Turrets placed behind walls deal damage while enemies mine through. Inner defenses protect your core structures if the outer line breaks. A single layer of defense will eventually fail; three layers give you time to respond, repair, and adapt.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-bark mb-6">Defense Structures Comparison</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border border-gray-700 text-sm">
                  <thead className="bg-gray-800">
                    <tr>
                      <th className="p-3 border border-gray-700 text-bark">Structure</th>
                      <th className="p-3 border border-gray-700 text-bark">Tier</th>
                      <th className="p-3 border border-gray-700 text-bark">Cost</th>
                      <th className="p-3 border border-gray-700 text-bark">Durability</th>
                      <th className="p-3 border border-gray-700 text-bark">Best Use</th>
                    </tr>
                  </thead>
                  <tbody>
                    {DEFENSE_STRUCTURES.filter(d => d.durability).map((d, i) => (
                      <tr key={i} className="hover:bg-gray-800/50">
                        <td className="p-3 border border-gray-700 font-semibold text-bark">{d.name}</td>
                        <td className="p-3 border border-gray-700 text-bark-light">{d.tier}</td>
                        <td className="p-3 border border-gray-700 text-bark-light">{d.cost}</td>
                        <td className="p-3 border border-gray-700 text-bark-light">{d.durability}</td>
                        <td className="p-3 border border-gray-700 text-bark-light text-xs">{d.bestUse}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-bark mb-6">Turrets & Special Structures</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border border-gray-700 text-sm">
                  <thead className="bg-gray-800">
                    <tr>
                      <th className="p-3 border border-gray-700 text-bark">Structure</th>
                      <th className="p-3 border border-gray-700 text-bark">Damage</th>
                      <th className="p-3 border border-gray-700 text-bark">Range</th>
                      <th className="p-3 border border-gray-700 text-bark">Special</th>
                      <th className="p-3 border border-gray-700 text-bark">Best Use</th>
                    </tr>
                  </thead>
                  <tbody>
                    {DEFENSE_STRUCTURES.filter(d => d.damage).map((d, i) => (
                      <tr key={i} className="hover:bg-gray-800/50">
                        <td className="p-3 border border-gray-700 font-semibold text-bark">{d.name}</td>
                        <td className="p-3 border border-gray-700 text-bark-light">{d.damage}</td>
                        <td className="p-3 border border-gray-700 text-bark-light">{d.range}</td>
                        <td className="p-3 border border-gray-700 text-bark-light text-xs">{d.specialProps}</td>
                        <td className="p-3 border border-gray-700 text-bark-light text-xs">{d.bestUse}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-bark mb-6">Raid Types &amp; Counter Strategies</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border border-gray-700 text-sm">
                  <thead className="bg-gray-800">
                    <tr>
                      <th className="p-3 border border-gray-700 text-bark">Raid Type</th>
                      <th className="p-3 border border-gray-700 text-bark">Waves</th>
                      <th className="p-3 border border-gray-700 text-bark">Enemies</th>
                      <th className="p-3 border border-gray-700 text-bark">Difficulty</th>
                      <th className="p-3 border border-gray-700 text-bark">Counter</th>
                    </tr>
                  </thead>
                  <tbody>
                    {RAID_TYPES.map((r, i) => (
                      <tr key={i} className="hover:bg-gray-800/50">
                        <td className="p-3 border border-gray-700 font-semibold text-bark">{r.type}</td>
                        <td className="p-3 border border-gray-700 text-bark-light">{r.waveCount}</td>
                        <td className="p-3 border border-gray-700 text-bark-light text-xs">{r.enemyTypes}</td>
                        <td className="p-3 border border-gray-700 text-bark-light">{r.difficulty}</td>
                        <td className="p-3 border border-gray-700 text-bark-light text-xs">{r.counter}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-bark">FAQ</h2>
              <div className="space-y-4">
                <details className="p-4 border border-gray-700 bg-gray-800/30">
                  <summary className="font-semibold text-bark cursor-pointer hover:text-accent">How many turrets do I need for mid-game defense?</summary>
                  <p className="mt-2 text-bark-light">A minimum of six Laser Turrets covering all four cardinal directions of your base, plus two extra at your main entrance chokepoint. Place turrets on elevated platforms — height gives them longer effective range and prevents ground enemies from blocking line of sight. Turrets positioned at ground level lose approximately 30 percent of their effective range due to terrain obstruction.</p>
                </details>
                <details className="p-4 border border-gray-700 bg-gray-800/30">
                  <summary className="font-semibold text-bark cursor-pointer hover:text-accent">Should I build a full wall around my base or just chokepoints?</summary>
                  <p className="mt-2 text-bark-light">Full perimeter walls are ideal but resource-intensive. A practical compromise: build a full outer wall with one intentional gap — a chokepoint. Enemies pathfind toward the gap, where you concentrate your heaviest defenses. This is more resource-efficient than trying to make every wall segment equally strong. Do not leave multiple gaps — that splits the enemy force into unpredictable approach vectors.</p>
                </details>
                <details className="p-4 border border-gray-700 bg-gray-800/30">
                  <summary className="font-semibold text-bark cursor-pointer hover:text-accent">Do turrets consume power when not firing?</summary>
                  <p className="mt-2 text-bark-light">Yes. All turrets consume a small idle power draw (approximately 10-20 percent of their firing power consumption). Keep turrets connected to your power grid but use Power Switches to toggle turret banks on and off. During peaceful periods, leave one bank active for basic coverage and turn off the rest. Before a raid warning appears, toggle all turrets on. This significantly extends your battery life between solar charging cycles.</p>
                </details>
              </div>
            </section>

            <p className="font-body text-bark-light text-sm border-t border-gray-700 pt-4">
              Last updated: July 1, 2026.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
