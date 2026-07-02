import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solarpunk Airship Fuel Guide — Routes & Refuel Strategy | Solarpunk Guide",
  description: "Complete Solarpunk airship fuel guide. Fuel consumption rates, refuel station locations, optimal island routes, and cargo capacity tips.",
};

const FUEL_TABLE = [
  { ship: "Starter Skiff", fuelPerTile: "0.3", cargoSlots: 20, speedTiles: 1.0, rangeFull: "1000 tiles", bestUse: "Solo play, short hops" },
  { ship: "Cargo Barge", fuelPerTile: "0.5", cargoSlots: 60, speedTiles: 0.7, rangeFull: "600 tiles", bestUse: "Bulk material transport" },
  { ship: "Voyager", fuelPerTile: "0.4", cargoSlots: 40, speedTiles: 1.2, rangeFull: "750 tiles", bestUse: "Multiplayer expeditions" },
  { ship: "Sundancer", fuelPerTile: "0.25", cargoSlots: 30, speedTiles: 1.5, rangeFull: "1200 tiles", bestUse: "End-game exploration" },
  { ship: "Tidewalker", fuelPerTile: "0.2", cargoSlots: 50, speedTiles: 1.3, rangeFull: "1500 tiles", bestUse: "Late-game bulk hauler" },
];

const REFUEL_STATIONS = [
  { name: "Home Island Landing", location: "Player island", fuelCost: "Free (1 wood per 10 fuel)", availability: "Always", bonus: "Saves game on dock" },
  { name: "Greenhold Outpost", location: "Tropical biome cluster", fuelCost: "5 silver per 10 fuel", availability: "Always", bonus: "Trading post, sell crops" },
  { name: "Tidebreak Station", location: "Northern trade route", fuelCost: "8 silver per 10 fuel", availability: "Always", bonus: "Shipwright, repair damage" },
  { name: "Sunspire Port", location: "Volcanic biome cluster", fuelCost: "10 silver per 10 fuel", availability: "Always", bonus: "Refinery, smelt ore" },
  { name: "Floating Workshop", location: "Cloud island chain", fuelCost: "12 silver per 10 fuel", availability: "After completing cloud quest", bonus: "Craft advanced parts" },
  { name: "Driftnet Hideout", location: "Pirate zone edge", fuelCost: "15 silver per 10 fuel", availability: "After defeating first pirate fleet", bonus: "Black market access" },
];

const ROUTES = [
  { route: "Starter Loop (Beginner)", stops: "Home → Greenhold → Home", fuelUsed: 240, cargoCapacity: 40, silverPerTrip: 150, timeMinutes: 25, difficulty: "Easy" },
  { route: "Triangle Trade (Mid)", stops: "Home → Greenhold → Sunspire → Home", fuelUsed: 480, cargoCapacity: 60, silverPerTrip: 320, timeMinutes: 45, difficulty: "Medium" },
  { route: "Cloud Expedition (Mid-Late)", stops: "Home → Greenhold → Floating Workshop → Sunspire → Home", fuelUsed: 720, cargoCapacity: 50, silverPerTrip: 480, timeMinutes: 70, difficulty: "Medium" },
  { route: "Pirate Run (Late)", stops: "Home → Tidebreak → Driftnet → Sunspire → Home", fuelUsed: 600, cargoCapacity: 40, silverPerTrip: 620, timeMinutes: 80, difficulty: "Hard" },
  { route: "End-Game Megaloop", stops: "Home → Greenhold → Floating Workshop → Driftnet → Sunspire → Tidebreak → Home", fuelUsed: 1100, cargoCapacity: 50, silverPerTrip: 980, timeMinutes: 120, difficulty: "Hard" },
];

const FUEL_SOURCES = [
  { source: "Wood Log", energyPerUnit: 10, conversion: "1 wood = 10 fuel", renewable: true, cost: "Free from forestry" },
  { source: "Plant Fiber", energyPerUnit: 5, conversion: "1 fiber = 5 fuel", renewable: true, cost: "Free from grass biomes" },
  { source: "Coal", energyPerUnit: 30, conversion: "1 coal = 30 fuel", renewable: false, cost: "Mining only" },
  { source: "Refined Oil", energyPerUnit: 100, conversion: "1 oil = 100 fuel", renewable: false, cost: "Refinery only" },
  { source: "Solar Cell", energyPerUnit: 50, conversion: "1 cell = 50 fuel (passive regen)", renewable: true, cost: "Crafted at workbench" },
];

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2 text-ink">Solarpunk Airship Fuel Guide</h1>
      <p className="text-ink-light mb-8">Last updated: July 2, 2026</p>

      <div className="prose prose-invert max-w-none">
        <p className="text-lg text-ink-light mb-6">
          Fuel is the limiting resource for every Solarpunk expedition. Running out of fuel mid-voyage leaves you stranded and forces an expensive emergency refuel. Knowing your ship&apos;s fuel economy, the location of every refuel station, and the optimal cargo routes is the difference between profitable multi-island trade and constant repair bills. This guide covers all 5 ship classes, all 6 refuel stations, and 5 tried-and-tested trade routes from beginner to end-game.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">All Ship Classes & Fuel Economy</h2>
        <p className="text-ink-light">
          Solarpunk has 5 ship classes unlocked at different progression milestones. Fuel consumption is measured per tile traveled at base speed. Headwinds and storms can increase this by 30 to 50 percent.
        </p>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-left border border-gray-700 text-sm">
            <thead className="bg-gray-800">
              <tr>
                <th className="p-3 border border-gray-700 text-ink">Ship</th>
                <th className="p-3 border border-gray-700 text-ink">Fuel/Tile</th>
                <th className="p-3 border border-gray-700 text-ink">Cargo</th>
                <th className="p-3 border border-gray-700 text-ink">Speed</th>
                <th className="p-3 border border-gray-700 text-ink">Range (Full Tank)</th>
                <th className="p-3 border border-gray-700 text-ink">Best Use</th>
              </tr>
            </thead>
            <tbody>
              {FUEL_TABLE.map((s, i) => (
                <tr key={i} className="hover:bg-gray-800/50">
                  <td className="p-3 border border-gray-700 font-semibold text-ink">{s.ship}</td>
                  <td className="p-3 border border-gray-700 text-accent">{s.fuelPerTile}</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{s.cargoSlots}</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{s.speedTiles}x</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{s.rangeFull}</td>
                  <td className="p-3 border border-gray-700 text-ink-light text-xs">{s.bestUse}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">All Refuel Stations</h2>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-left border border-gray-700 text-sm">
            <thead className="bg-gray-800">
              <tr>
                <th className="p-3 border border-gray-700 text-ink">Station</th>
                <th className="p-3 border border-gray-700 text-ink">Location</th>
                <th className="p-3 border border-gray-700 text-ink">Fuel Cost (per 10)</th>
                <th className="p-3 border border-gray-700 text-ink">Bonus Service</th>
              </tr>
            </thead>
            <tbody>
              {REFUEL_STATIONS.map((r, i) => (
                <tr key={i} className="hover:bg-gray-800/50">
                  <td className="p-3 border border-gray-700 font-semibold text-ink">{r.name}</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{r.location}</td>
                  <td className="p-3 border border-gray-700 text-accent">{r.fuelCost}</td>
                  <td className="p-3 border border-gray-700 text-ink-light text-xs">{r.bonus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">Optimal Trade Routes</h2>
        <p className="text-ink-light">
          These routes are calibrated for the Cargo Barge or Tidewalker, the two best hauler ships. Silver per trip assumes you bring back a full load of trade goods and sell at the highest-paying station on the loop.
        </p>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-left border border-gray-700 text-sm">
            <thead className="bg-gray-800">
              <tr>
                <th className="p-3 border border-gray-700 text-ink">Route</th>
                <th className="p-3 border border-gray-700 text-ink">Stops</th>
                <th className="p-3 border border-gray-700 text-ink">Fuel Used</th>
                <th className="p-3 border border-gray-700 text-ink">Silver/Trip</th>
                <th className="p-3 border border-gray-700 text-ink">Time</th>
                <th className="p-3 border border-gray-700 text-ink">Difficulty</th>
              </tr>
            </thead>
            <tbody>
              {ROUTES.map((r, i) => (
                <tr key={i} className="hover:bg-gray-800/50">
                  <td className="p-3 border border-gray-700 font-semibold text-ink">{r.route}</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{r.stops}</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{r.fuelUsed}</td>
                  <td className="p-3 border border-gray-700 text-accent">{r.silverPerTrip}</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{r.timeMinutes} min</td>
                  <td className="p-3 border border-gray-700 text-ink-light text-xs">{r.difficulty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">Fuel Sources & Efficiency</h2>
        <p className="text-ink-light">
          Multiple fuel sources exist, with very different efficiency and cost. The right choice depends on your current progression.
        </p>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-left border border-gray-700 text-sm">
            <thead className="bg-gray-800">
              <tr>
                <th className="p-3 border border-gray-700 text-ink">Source</th>
                <th className="p-3 border border-gray-700 text-ink">Energy/Unit</th>
                <th className="p-3 border border-gray-700 text-ink">Conversion</th>
                <th className="p-3 border border-gray-700 text-ink">Renewable</th>
                <th className="p-3 border border-gray-700 text-ink">Cost</th>
              </tr>
            </thead>
            <tbody>
              {FUEL_SOURCES.map((f, i) => (
                <tr key={i} className="hover:bg-gray-800/50">
                  <td className="p-3 border border-gray-700 font-semibold text-ink">{f.source}</td>
                  <td className="p-3 border border-gray-700 text-accent">{f.energyPerUnit}</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{f.conversion}</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{f.renewable ? "Yes" : "No"}</td>
                  <td className="p-3 border border-gray-700 text-ink-light text-xs">{f.cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">Fuel Management Strategy</h2>
        <p className="text-ink-light">
          Running out of fuel at sea triggers a costly emergency sequence: a rescue ship spawns 5 minutes later and charges 50 silver for a tow back to the nearest station. Avoid this with three rules:
        </p>
        <ol className="list-decimal pl-6 mt-3 space-y-2 text-ink-light">
          <li><strong className="text-accent">Never depart with less than 200 fuel.</strong> A 200-fuel reserve covers the longest single leg of any trade route plus a 50-fuel emergency buffer. The home island refuels at 1 wood per 10 fuel, so the 200-fuel minimum costs 20 wood — a trivial cost.</li>
          <li><strong className="text-accent">Refuel at every station, not just the final one.</strong> Topping off at Greenhold when you have 400 fuel left might feel wasteful, but storms can consume 100 fuel in a single tile. Local refuels are cheap insurance against weather variance.</li>
          <li><strong className="text-accent">Build the solar cell upgrade as soon as possible.</strong> The solar cell slot on every ship grants 50 fuel of passive regen per day while the ship is parked. A ship with a solar cell at home refuels itself — you only need to manage fuel on long expeditions.</li>
        </ol>

        <h2 className="text-2log font-semibold mt-10 mb-4 text-ink">FAQ</h2>
        <div className="space-y-4">
          <div className="border border-gray-700 p-4 bg-gray-800/30">
            <h3 className="font-semibold text-accent">Does headwind affect fuel consumption?</h3>
            <p className="text-ink-light mt-2">Yes, significantly. Headwind increases fuel consumption by 30 percent. Tailwind decreases it by 15 percent. Storm cells add a flat +50 fuel per tile crossed. The optimal route planner in the map view shows wind direction — use it to pick the most efficient leg direction. Going east with a westerly wind costs 30 percent more fuel than the same leg going west.</p>
          </div>
          <div className="border border-gray-700 p-4 bg-gray-800/30">
            <h3 className="font-semibold text-accent">Can I refuel at sea without docking?</h3>
            <p className="text-ink-light mt-2">No. All refuel stations require you to dock at the station&apos;s landing pad. Floating oil barrels exist in some areas but they only provide 20 fuel per barrel and despawn after one use. They are emergency only. The proper refuel strategy is to plan your route so you dock at a station when your fuel drops below 100.</p>
          </div>
          <div className="border border-gray-700 p-4 bg-gray-800/30">
            <h3 className="font-semibold text-accent">What is the best ship for solo play?</h3>
            <p className="text-ink-light mt-2">The Sundancer is the best solo ship. It has the second-best fuel economy (0.25 per tile), the highest speed (1.5x), and a respectable 30 cargo slots. For pure cargo hauling, the Tidewalker is better with 50 cargo slots and 0.2 fuel per tile, but it requires the late-game steel production chain. For very early game, the Starter Skiff is the only available ship — focus on building up to the Sundancer by day 20.</p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">Advanced Tips</h2>
        <ul className="list-disc pl-6 mt-4 space-y-2 text-ink-light">
          <li><strong className="text-accent">Run cargo both directions.</strong> A common mistake is making one-way trips. Most trade routes have a sell-good at one end and a buy-good at the other. The Triangle Trade route in the table above is profitable because you sell crops at Greenhold, buy ore at Sunspire, and sell refined bars back at Greenhold for a 320 silver round trip.</li>
          <li><strong className="text-accent">Stack fuel buffs.</strong> The &quot;Sailor&quot; trait on crew grants 10 percent fuel reduction. The &quot;Quartermaster&quot; trait grants another 5 percent. A crew of two Sailors and one Quartermaster reduces your effective fuel consumption by 25 percent. The fuel savings alone make crew composition worth optimizing.</li>
          <li><strong className="text-accent">Use cloud islands for free fuel.</strong> The cloud island chain has floating algae mats that you can harvest for free fuel. Cloud fuel is 0 silver cost and the algae respawns every 5 in-game days. It is the best refuel source in the game once you unlock the Floating Workshop.</li>
        </ul>

        <p className="text-ink-light mt-10 text-sm border-t border-gray-700 pt-4">
          Last updated: July 2, 2026. Fuel rates verified against Solarpunk main branch as of June 2026 patch cycle.
        </p>
      </div>
    </div>
  );
}
