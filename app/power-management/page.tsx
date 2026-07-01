export const metadata = {
  title: "Solarpunk Power Management Guide — Solar, Wind, Battery & Grid Optimization (2026)",
  description: "Complete Solarpunk power management guide. Solar panel vs wind turbine comparison, battery storage optimization, grid design, and energy efficiency tips for your floating island base.",
};

const POWER_SOURCES = [
  { source: "Solar Panel (Basic)", output: "50W (daytime only)", cost: "Iron Ingot (6), Copper Wire (4), Glass (4)", efficiency: "80% on clear days, 40% cloudy, 10% storm", bestUse: "Primary daytime power. The backbone of early-to-mid game energy.", footprint: "2x2 tiles" },
  { source: "Solar Panel (Advanced)", output: "120W (daytime only)", cost: "Steel Ingot (8), Advanced Circuit (4), Reinforced Glass (6)", efficiency: "90% clear, 60% cloudy, 25% storm", bestUse: "Upgrade from Basic as soon as Advanced Circuits are available. Nearly double the output.", footprint: "2x2 tiles" },
  { source: "Wind Turbine (Small)", output: "30W (24h, wind-dependent)", cost: "Iron Ingot (10), Copper Wire (6), Wood (8)", efficiency: "Varies by altitude and weather. Higher islands = more wind.", bestUse: "Supplemental night power. Place at the highest point on your island.", footprint: "1x1 tile (requires 3-tile height clearance)" },
  { source: "Wind Turbine (Large)", output: "80W (24h, wind-dependent)", cost: "Steel Ingot (15), Circuit Board (8), Wood (12)", efficiency: "Varies by altitude. Up to 2x Small Turbine output on high islands.", bestUse: "Primary night power for mid-game. A pair of Large Turbines can power a small base overnight.", footprint: "2x2 tile (requires 5-tile height clearance)" },
  { source: "Geothermal Generator", output: "200W (24h, constant)", cost: "Titanium Ingot (20), Quantum Core (2), Diamond Drill (1)", efficiency: "100% regardless of weather or time", bestUse: "Endgame baseline power. Constant output eliminates the need for batteries — but extremely expensive to build.", footprint: "3x3 tiles" },
  { source: "Fusion Reactor", output: "500W (24h, constant)", cost: "Diamond (20), Quantum Core (5), Exotic Matter (3)", efficiency: "100% — the ultimate power source", bestUse: "Endgame final upgrade. Powers an entire fully-developed base indefinitely.", footprint: "4x4 tiles" },
];

const BATTERY_TYPES = [
  { battery: "Basic Battery Pack", capacity: "500Wh", chargeRate: "50W", dischargeRate: "100W", cost: "Iron Ingot (4), Copper Wire (2)", bestUse: "Early game. Two packs can store enough solar power for a night of basic operations." },
  { battery: "Medium Battery Bank", capacity: "2000Wh", chargeRate: "150W", dischargeRate: "250W", cost: "Steel Ingot (8), Circuit Board (4)", bestUse: "Mid-game standard. One bank handles a full night of turret and research station power." },
  { battery: "Large Power Cell", capacity: "5000Wh", chargeRate: "300W", dischargeRate: "500W", cost: "Titanium Ingot (12), Advanced Circuit (6)", bestUse: "Late game. Single cell powers heavy turret arrays and shield generators through extended attacks." },
  { battery: "Quantum Capacitor", capacity: "20000Wh", chargeRate: "1000W", dischargeRate: "2000W", cost: "Diamond (8), Quantum Core (3)", bestUse: "Endgame. Stores enough energy to run an entire base for 2-3 in-game days without any generation." },
];

export default function PowerManagementPage() {
  return (
    <div className="min-h-screen bg-field-paper bg-paper-texture">
      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="flex-1 lg:max-w-[65%] space-y-12">
            <section>
              <h2 className="font-display text-2xl font-bold text-bark">Power: The Invisible Foundation</h2>
              <p className="font-body text-bark-light leading-relaxed mt-4">
                Every machine, turret, research station, and automated farm in Solarpunk requires power. Without a stable power grid, your base is a collection of inert structures. This guide covers every power source, battery type, and grid design principle you need to keep the lights on — literally and figuratively.
              </p>
              <p className="font-body text-bark-light leading-relaxed mt-3">
                The core challenge of Solarpunk power management is the <strong>day-night cycle</strong>. Solar panels produce power only during daylight hours, but your base consumes power 24 hours a day. The gap must be bridged by batteries (storing daytime surplus for nighttime use) or alternative power sources (wind, geothermal, fusion) that generate power around the clock.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-bark mb-6">Power Generation Comparison</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border border-gray-700 text-sm">
                  <thead className="bg-gray-800">
                    <tr>
                      <th className="p-3 border border-gray-700 text-bark">Source</th>
                      <th className="p-3 border border-gray-700 text-bark">Output</th>
                      <th className="p-3 border border-gray-700 text-bark">Cost</th>
                      <th className="p-3 border border-gray-700 text-bark">Efficiency</th>
                      <th className="p-3 border border-gray-700 text-bark">Best Use</th>
                    </tr>
                  </thead>
                  <tbody>
                    {POWER_SOURCES.map((p, i) => (
                      <tr key={i} className="hover:bg-gray-800/50">
                        <td className="p-3 border border-gray-700 font-semibold text-bark">{p.source}</td>
                        <td className="p-3 border border-gray-700 text-accent">{p.output}</td>
                        <td className="p-3 border border-gray-700 text-bark-light text-xs">{p.cost}</td>
                        <td className="p-3 border border-gray-700 text-bark-light text-xs">{p.efficiency}</td>
                        <td className="p-3 border border-gray-700 text-bark-light text-xs">{p.bestUse}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-bark mb-6">Battery Storage Comparison</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border border-gray-700 text-sm">
                  <thead className="bg-gray-800">
                    <tr>
                      <th className="p-3 border border-gray-700 text-bark">Battery</th>
                      <th className="p-3 border border-gray-700 text-bark">Capacity</th>
                      <th className="p-3 border border-gray-700 text-bark">Charge</th>
                      <th className="p-3 border border-gray-700 text-bark">Discharge</th>
                      <th className="p-3 border border-gray-700 text-bark">Best Use</th>
                    </tr>
                  </thead>
                  <tbody>
                    {BATTERY_TYPES.map((b, i) => (
                      <tr key={i} className="hover:bg-gray-800/50">
                        <td className="p-3 border border-gray-700 font-semibold text-bark">{b.battery}</td>
                        <td className="p-3 border border-gray-700 text-accent">{b.capacity}</td>
                        <td className="p-3 border border-gray-700 text-bark-light">{b.chargeRate}</td>
                        <td className="p-3 border border-gray-700 text-bark-light">{b.dischargeRate}</td>
                        <td className="p-3 border border-gray-700 text-bark-light text-xs">{b.bestUse}</td>
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
                  <summary className="font-semibold text-bark cursor-pointer hover:text-accent">How many Solar Panels do I need for a basic base?</summary>
                  <p className="mt-2 text-bark-light">A basic base (Research Station, Basic Workbench, 2 turrets, lights) consumes approximately 80-100W. Two Basic Solar Panels (100W combined at peak) plus one Basic Battery Pack is the minimum viable setup. However, this leaves zero margin for expansion — add a third panel as soon as you can afford the materials. For mid-game bases with 6 turrets and automated farms, target 300W of generation from a mix of Advanced Solar and Wind Turbines.</p>
                </details>
                <details className="p-4 border border-gray-700 bg-gray-800/30">
                  <summary className="font-semibold text-bark cursor-pointer hover:text-accent">Are Wind Turbines worth the investment?</summary>
                  <p className="mt-2 text-bark-light">Yes, on high-altitude islands. Wind Turbines produce power 24/7, complementing Solar Panels perfectly — solar handles daytime, wind handles nighttime. On islands at maximum altitude, a Large Wind Turbine can produce 80W consistently, making it more reliable than a Basic Solar Panel. On low-altitude islands, wind output drops significantly and may not justify the material cost. Check your island&apos;s wind rating in the environment panel before investing.</p>
                </details>
                <details className="p-4 border border-gray-700 bg-gray-800/30">
                  <summary className="font-semibold text-bark cursor-pointer hover:text-accent">What happens if my power grid fails during a raid?</summary>
                  <p className="mt-2 text-bark-light">Turrets stop firing immediately. Your Shield Generator collapses. Automated defenses go offline. This is catastrophic — a power failure during a raid almost always results in significant base damage or total destruction. Always keep at least 30 percent battery reserve specifically for raid emergencies. Build a secondary, isolated power grid for critical defenses (turrets and shield) that is separate from your production power grid — if your factory drains the batteries, your defenses stay online.</p>
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
