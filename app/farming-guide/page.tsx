import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solarpunk Farming Guide — Best Crops, Automated Farms & Seasonal Planning (2026)",
  description:
    "Master Solarpunk farming with our complete guide to crops, automated irrigation, greenhouse setups, seasonal planning, and maximizing food production on floating islands.",
};

const CROP_COMPARISON = [
  { crop: "Carrot", growthTime: "3 Days", yield: "2-3 per plant", waterNeed: "Low (1 unit/day)", bestSeason: "Spring / Autumn", specialUse: "Starter crop. Fast growth, minimal water, great for early game food supply." },
  { crop: "Corn", growthTime: "5 Days", yield: "3-4 per plant", waterNeed: "Medium (2 units/day)", bestSeason: "Summer", specialUse: "Staple food crop. High caloric value, used in cooking recipes and animal feed." },
  { crop: "Tomato", growthTime: "4 Days", yield: "4-5 per plant", waterNeed: "Medium (2 units/day)", bestSeason: "Summer / Autumn", specialUse: "Versatile cooking ingredient. Can be eaten raw or processed into sauce for trading." },
  { crop: "Wheat", growthTime: "6 Days", yield: "2-3 per plant", waterNeed: "Low (1 unit/day)", bestSeason: "Autumn", specialUse: "Used for bread and flour production. High trade value when processed at the Mill." },
  { crop: "Potato", growthTime: "5 Days", yield: "3-5 per plant", waterNeed: "Low (1 unit/day)", bestSeason: "Spring / Autumn", specialUse: "Underground crop — immune to wind damage. Excellent calorie-to-water ratio for survival runs." },
  { crop: "Cotton", growthTime: "7 Days", yield: "2-3 per plant", waterNeed: "Medium (2 units/day)", bestSeason: "Summer", specialUse: "Non-food crop. Produces cloth material for crafting clothing, bandages, and sails." },
  { crop: "Sunberry", growthTime: "4 Days", yield: "3-4 per plant", waterNeed: "High (3 units/day)", bestSeason: "Summer", specialUse: "High-value trading crop. Sells for 3x the price of corn. Requires greenhouse in cold seasons." },
  { crop: "Mushroom", growthTime: "3 Days", yield: "4-6 per plant", waterNeed: "Very Low (0.5 units/day)", bestSeason: "Any (indoor only)", specialUse: "Only grows indoors or in caves. Zero sunlight required, ideal for underground greenhouse builds." },
];

const FARM_AUTOMATION = [
  { component: "Solar Panel (Basic)", powerDraw: "50W (output)", coverage: "Powers 2-3 sprinklers per panel", bestSetup: "Place at highest elevation for maximum sun exposure. Use 1 panel per 4x4 farm plot in early game." },
  { component: "Water Pump", powerDraw: "30W (draw)", coverage: "Supplies 6 sprinklers per pump", bestSetup: "Build adjacent to a natural water source or Rain Collector. One pump can feed an entire 8x8 greenhouse farm." },
  { component: "Sprinkler (Basic)", powerDraw: "10W (draw)", coverage: "3x3 tile radius (9 tiles)", bestSetup: "Space sprinklers every 3 tiles for full coverage. Connect to water pump via pipes. Upgrade to Advanced Sprinklers for 5x5 coverage." },
  { component: "Sprinkler (Advanced)", powerDraw: "18W (draw)", coverage: "5x5 tile radius (25 tiles)", bestSetup: "Mid-game upgrade. Covers nearly 3x the area of Basic Sprinklers. Place at center of a 5x5 plot for 100% coverage." },
  { component: "Auto-Harvester", powerDraw: "40W (draw)", coverage: "7x7 tile radius (49 tiles)", bestSetup: "Endgame automation. Automatically harvests and replants crops within range. Requires Seed Dispenser upgrade for full automation loop." },
  { component: "Greenhouse Controller", powerDraw: "25W (draw)", coverage: "Controls 1 entire greenhouse (up to 12x12)", bestSetup: "Regulates temperature and humidity automatically. Combine with Solar Panel array and Battery Bank for 24/7 climate control." },
];

const SEASONAL_CALENDAR = [
  { season: "Spring", duration: "14 Days", bestCrops: "Carrot, Potato, Wheat", weatherEffects: "Mild rain boosts growth by +20%. Low pest activity.", strategy: "Plant fast-growing crops to build up food reserves for summer. Focus on carrots and potatoes for calorie density." },
  { season: "Summer", duration: "14 Days", bestCrops: "Corn, Tomato, Cotton, Sunberry", weatherEffects: "Heat waves can wilt crops without shade. High pest activity.", strategy: "Diversify crops for cooking and trading. Build shade covers over sensitive crops. Prioritize cotton if you need cloth for upgrades." },
  { season: "Autumn", duration: "14 Days", bestCrops: "Carrot, Wheat, Potato", weatherEffects: "Reduced sunlight slows growth by -15%. Occasional frost at night.", strategy: "Final harvest before winter. Stockpile wheat for bread production. Move sensitive crops into greenhouses before frost arrives." },
  { season: "Winter", duration: "14 Days", bestCrops: "Mushroom (indoor only)", weatherEffects: "Outdoor crops die. Water sources freeze. Zero sunlight for photosynthesis.", strategy: "Shift entirely to greenhouse farming. Mushrooms are the only viable winter crop. Stockpile food in autumn — aim for 200+ food units per settler before winter." },
];

export default function FarmingGuidePage() {
  return (
    <div className="min-h-screen bg-field-paper bg-paper-texture">
      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <header className="mb-10">
          <p className="font-label text-[10px] uppercase tracking-[0.25em] text-accent mb-3">
            Farming & Food Production
          </p>
          <h1 className="font-display text-3xl lg:text-4xl tracking-display text-ink">
            SOLARPUNK FARMING GUIDE
          </h1>
          <p className="font-body text-lg text-ink-light mt-4 max-w-2xl leading-relaxed">
            Master Solarpunk farming with our complete guide to crops, automated irrigation, greenhouse
            setups, seasonal planning, and maximizing food production on floating islands.
          </p>
        </header>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="flex-1 lg:max-w-[65%] space-y-12">
            <section>
              <h2 className="font-display text-2xl font-bold text-ink mb-4">
                Why Farming Matters: Food Is Survival
              </h2>
              <p className="font-body text-ink-light leading-relaxed">
                In Solarpunk, farming is not just another crafting sub-system — it is the engine that
                keeps your settlers alive. Every colonist on your floating island consumes food daily.
                Without a stable food supply, your settlers starve, your workforce collapses, and your
                base grinds to a halt. There is no substitute for farming: you cannot outrun hunger by
                scavenging alone, and wild berries and fish respawn too slowly to sustain a population
                beyond the earliest days.
              </p>
              <p className="font-body text-ink-light leading-relaxed mt-3">
                Beyond survival, farming is your primary economic engine. Processed crops — bread from
                wheat, sauce from tomatoes, cloth from cotton — are among the most valuable trade goods
                in the game. A well-optimized farm generates surplus that you can sell to passing trader
                airships for rare materials, research blueprints, and advanced components. In the mid to
                late game, automated farms produce passive income: you harvest while you explore, mine,
                or fight, and return to a full silo and a healthy trading balance.
              </p>
              <p className="font-body text-ink-light leading-relaxed mt-3">
                Farming also integrates with nearly every other system in the game. Water management
                connects to your power grid through automated pumps and sprinklers. Crop waste can be
                composted into fertilizer, which boosts soil quality and feeds back into the farm loop.
                Cotton farms supply cloth for airship sails and crafting stations. Understanding farming
                is understanding Solarpunk itself — it is the foundation upon which everything else is
                built, literally hovering above the clouds.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-ink mb-6">
                Crop Comparison Table
              </h2>
              <p className="font-body text-ink-light mb-4">
                Each crop has unique growth requirements, yields, and special properties. Choose your
                crops based on your current season, available water supply, and whether you prioritize
                food, crafting materials, or trade value.
              </p>
              <div className="overflow-x-auto">
                <table className="parchment-table">
                  <thead>
                    <tr>
                      <th className="text-left p-3 text-ink">Crop</th>
                      <th className="text-left p-3 text-ink">Growth Time</th>
                      <th className="text-left p-3 text-ink">Yield</th>
                      <th className="text-left p-3 text-ink">Water Need</th>
                      <th className="text-left p-3 text-ink">Best Season</th>
                      <th className="text-left p-3 text-ink">Special Use</th>
                    </tr>
                  </thead>
                  <tbody>
                    {CROP_COMPARISON.map((item, i) => (
                      <tr key={i}>
                        <td className="p-3 font-semibold text-ink">{item.crop}</td>
                        <td className="p-3 text-ink-faded text-sm">{item.growthTime}</td>
                        <td className="p-3 text-ink-faded text-sm">{item.yield}</td>
                        <td className="p-3 text-ink-faded text-sm">{item.waterNeed}</td>
                        <td className="p-3 text-ink-faded text-sm">{item.bestSeason}</td>
                        <td className="p-3 text-ink-light text-xs">{item.specialUse}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="font-body text-xs text-ink-faded mt-3 italic">
                Growth times assume standard soil quality and daytime conditions. Greenhouse cultivation
                reduces growth time by 20% and removes seasonal restrictions.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-ink mb-6">
                Farm Automation Components
              </h2>
              <p className="font-body text-ink-light mb-4">
                Manual farming works for your first few plots, but automation is essential as your base
                and settler count grow. Each component in the automation chain requires power and water
                infrastructure — plan your grid layout before investing resources.
              </p>
              <div className="overflow-x-auto">
                <table className="parchment-table">
                  <thead>
                    <tr>
                      <th className="text-left p-3 text-ink">Component</th>
                      <th className="text-left p-3 text-ink">Power Draw</th>
                      <th className="text-left p-3 text-ink">Coverage</th>
                      <th className="text-left p-3 text-ink">Best Setup</th>
                    </tr>
                  </thead>
                  <tbody>
                    {FARM_AUTOMATION.map((item, i) => (
                      <tr key={i}>
                        <td className="p-3 font-semibold text-ink">{item.component}</td>
                        <td className="p-3 text-accent">{item.powerDraw}</td>
                        <td className="p-3 text-ink-faded text-sm">{item.coverage}</td>
                        <td className="p-3 text-ink-light text-xs">{item.bestSetup}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="font-body text-xs text-ink-faded mt-3 italic">
                Total power budget for a mid-game 8x8 automated farm: 1 Solar Panel (50W output) + 1
                Water Pump (30W) + 4 Sprinklers (40W) + 1 Auto-Harvester (40W) = 110W draw, requiring
                at least 3 Basic Solar Panels or 1 Advanced Solar Panel with a Battery Bank for nighttime
                operation.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-ink mb-4">
                Greenhouse vs. Outdoor Farming
              </h2>
              <p className="font-body text-ink-light leading-relaxed">
                Outdoor farming is cheaper and simpler — it requires no power, no glass, and no climate
                control. For your first two seasons, plant everything outdoors. Carrots, potatoes, and
                wheat thrive in open air with minimal maintenance. The trade-off is that outdoor crops
                are vulnerable to weather damage (wind, frost, heat waves), seasonal restrictions (most
                crops die in winter), and pest swarms that can wipe out entire fields overnight.
              </p>
              <p className="font-body text-ink-light leading-relaxed mt-3">
                Greenhouses are the mid-game upgrade that transforms farming from a seasonal activity
                into a year-round industry. A greenhouse — built from glass panels, steel frames, and a
                Greenhouse Controller — creates a climate-controlled environment where any crop can grow
                in any season. Growth time is reduced by 20%, crops are immune to weather and pests, and
                water consumption drops by 15% thanks to recycled condensation. The catch is the resource
                cost: a basic 6x6 greenhouse requires approximately 40 glass panels, 12 steel frames, and
                a power-hungry controller drawing 25W continuously.
              </p>
              <p className="font-body text-ink-light leading-relaxed mt-3">
                The recommended progression is: start with a 4x4 outdoor carrot and potato farm to
                stabilize your food supply. Once you have a functional power grid (mid-game, around day
                10-15), build your first 6x6 greenhouse and move high-value crops — tomatoes, sunberries,
                and cotton — indoors. By late game, aim for two greenhouses: one for food crops and one
                for cash crops. The investment pays for itself within two seasons through increased yield
                and uninterrupted production.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-ink mb-6">
                Seasonal Planting Calendar
              </h2>
              <p className="font-body text-ink-light mb-4">
                Each season in Solarpunk lasts 14 in-game days. Planning your planting schedule around
                the seasonal cycle is the difference between a thriving settlement and a starvation
                spiral. Below is the optimal planting strategy for a standard four-season year.
              </p>
              <div className="overflow-x-auto">
                <table className="parchment-table">
                  <thead>
                    <tr>
                      <th className="text-left p-3 text-ink">Season</th>
                      <th className="text-left p-3 text-ink">Duration</th>
                      <th className="text-left p-3 text-ink">Best Crops</th>
                      <th className="text-left p-3 text-ink">Weather Effects</th>
                      <th className="text-left p-3 text-ink">Strategy</th>
                    </tr>
                  </thead>
                  <tbody>
                    {SEASONAL_CALENDAR.map((item, i) => (
                      <tr key={i}>
                        <td className="p-3 font-semibold text-ink">{item.season}</td>
                        <td className="p-3 text-ink-faded text-sm">{item.duration}</td>
                        <td className="p-3 text-ink-faded text-sm">{item.bestCrops}</td>
                        <td className="p-3 text-ink-light text-xs">{item.weatherEffects}</td>
                        <td className="p-3 text-ink-light text-xs">{item.strategy}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="font-body text-xs text-ink-faded mt-3 italic">
                Pro tip: Keep a food buffer of at least 150 units per settler at all times. Winter
                is unforgiving — if you enter the cold season with low food reserves, even a greenhouse
                setup may not produce fast enough to prevent starvation.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-ink mb-4">FAQ</h2>
              <div className="space-y-4">
                <details className="p-4 border border-gray-700 bg-gray-800/30">
                  <summary className="font-semibold text-ink cursor-pointer hover:text-accent">
                    How many farms do I need for X settlers?
                  </summary>
                  <p className="mt-2 text-ink-light">
                    A general rule: each settler consumes 1 food unit per day. Each farm tile produces
                    approximately 0.5-0.8 food units per day depending on crop type and automation level.
                    For a settlement of 5 settlers, you need roughly 8-10 farm tiles (one 3x3 or 4x4
                    plot) with carrots or potatoes. For 10 settlers, increase to 16-20 tiles (two 4x4
                    plots). For 20+ settlers, you need at least 40 farm tiles plus Automated Sprinklers
                    and a Greenhouse Controller — manual harvesting becomes unsustainable at this scale.
                    Always plant 20% more than your calculated minimum to account for weather losses
                    and pest damage. Keep a food buffer of 150 units per settler to survive a full
                    winter without harvesting.
                  </p>
                </details>

                <details className="p-4 border border-gray-700 bg-gray-800/30">
                  <summary className="font-semibold text-ink cursor-pointer hover:text-accent">
                    Does rain water crops in Solarpunk?
                  </summary>
                  <p className="mt-2 text-ink-light">
                    Yes, but with caveats. Natural rain provides approximately 0.5 water units per
                    farm tile per rain event, which is not enough to fully irrigate most crops —
                    tomatoes and sunberries still need supplemental watering. Rain only occurs during
                    Spring and Autumn, and the frequency varies by biome (forest biomes get 40% more
                    rain than desert biomes). During Summer, rain is extremely rare, and during Winter,
                    precipitation falls as snow which does not water crops. You cannot rely on rain
                    alone for any farm larger than a 2x2 plot. Invest in a Water Pump and Sprinkler
                    system as soon as you expand beyond 4-6 farm tiles. Rain Collectors placed on
                    elevated platforms can supplement your water supply but should be treated as a
                    bonus resource, not your primary water source.
                  </p>
                </details>

                <details className="p-4 border border-gray-700 bg-gray-800/30">
                  <summary className="font-semibold text-ink cursor-pointer hover:text-accent">
                    When should I upgrade to automated farming?
                  </summary>
                  <p className="mt-2 text-ink-light">
                    Upgrade to automated farming when your manual farm exceeds 12-16 tiles. At that
                    point, the daily time investment of watering and harvesting by hand cuts into your
                    ability to explore, mine, and defend your base. The trigger conditions are: (1) you
                    have at least 3 Basic Solar Panels or 1 Advanced Solar Panel with a stable power
                    grid, (2) you have researched the Automated Farming node in the tech tree, and (3)
                    you have 12+ farm tiles that need daily maintenance. The ideal first automation
                    setup is 1 Water Pump powering 4 Basic Sprinklers covering a 4x4 grid, which costs
                    approximately 70W total. Do not rush automation before you have reliable power —
                    a dead sprinkler system means dead crops, and dead crops mean dead settlers.
                    Upgrade Sprinklers to Advanced before adding the Auto-Harvester, because automated
                    harvesting without adequate watering just replants crops that die immediately.
                  </p>
                </details>
              </div>
            </section>

            <p className="font-body text-ink-light text-sm border-t border-gray-700 pt-4">
              Last updated: July 2, 2026.
            </p>
          </div>

          <aside className="lg:w-[30%] space-y-6 shrink-0">
            <div className="bg-parchment-light border border-ink-faded/20 rounded-sm p-5">
              <h3 className="font-display text-lg font-semibold text-ink mb-3">Related Guides</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/power-management" className="text-accent hover:underline">
                    Power Management Guide
                  </a>
                </li>
                <li>
                  <a href="/base-defense" className="text-accent hover:underline">
                    Base Defense Guide
                  </a>
                </li>
                <li>
                  <a href="/tier-list" className="text-accent hover:underline">
                    Tier List & Rankings
                  </a>
                </li>
                <li>
                  <a href="/best-base-locations" className="text-accent hover:underline">
                    Best Base Locations
                  </a>
                </li>
                <li>
                  <a href="/tool-progression" className="text-accent hover:underline">
                    Tool Progression Guide
                  </a>
                </li>
              </ul>
            </div>

            <div className="bg-parchment-light border border-ink-faded/20 rounded-sm p-5">
              <h3 className="font-display text-lg font-semibold text-ink mb-3">Quick Tips</h3>
              <ul className="space-y-3 text-sm text-ink-light">
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold mt-0.5 shrink-0">1</span>
                  <span>Start with carrots and potatoes — low water needs, fast growth, and reliable yields for early game.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold mt-0.5 shrink-0">2</span>
                  <span>Build your first greenhouse by day 12-15 to prepare for winter. Without indoor farming, winter is a death sentence.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold mt-0.5 shrink-0">3</span>
                  <span>Diversify crops — plant at least 3 different crops to spread risk. A pest swarm that hits your only cornfield can end a run.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold mt-0.5 shrink-0">4</span>
                  <span>Place farms near your water source and power grid. Long pipe runs increase power draw and leak water over distance.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold mt-0.5 shrink-0">5</span>
                  <span>Process raw crops before trading — bread sells for 3x the price of raw wheat. Invest in a Mill and Kitchen early.</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
