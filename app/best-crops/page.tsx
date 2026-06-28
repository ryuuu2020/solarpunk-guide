export const metadata = {
  title: "Solarpunk Best Crops Guide — Tier List (2026)",
  description: "Complete tier list of all crops in Solarpunk. Best crops for food, fiber, and fuel production on every island type.",
};

export default function BestCropsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <h1 className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-bark leading-none mb-4">Solarpunk Best Crops Tier List</h1>
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <section>
            <h2 className="font-display text-2xl font-bold text-bark">S-Tier Crops</h2>
            <p className="font-body text-bark-light leading-relaxed mt-4">Corn, Wheat, and Tomato form the S-tier of Solarpunk agriculture. Corn offers the best caloric density per plot, Wheat enables bread production which provides a mood bonus, and Tomatoes grow fast enough to provide a quick food stockpile in the critical early days. All three tolerate a wide range of climates and irrigation setups, making them forgiving for new players learning the farming system.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-bark">A-Tier Crops</h2>
            <p className="font-body text-bark-light leading-relaxed mt-4">Carrot excels as the fastest-growing food crop (4 days) with minimal water requirements — ideal for early game when your irrigation network is still small. Potato provides a high caloric yield per tile in cold or temperate climates. Cotton is the only crop that produces fiber, making it essential for textile production despite its lower food value. Sunflower seeds produce oil for cooking and lamp fuel.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-bark">Crop Rotation Strategy</h2>
            <p className="font-body text-bark-light leading-relaxed mt-4">Rotating crops between plots maintains soil fertility. A proven 3-cycle rotation: food crops → fiber crops → fallow (rest) → repeat. This prevents soil depletion and maintains yield without fertilizer. Start rotation when you have enough food reserves (3+ days supply) to sustain the colony during the fallow phase.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-bark">Irrigation & Water Management</h2>
            <p className="font-body text-bark-light leading-relaxed mt-4">Every crop requires water access within 2 tiles. Build irrigation canals along the center of your farm strips — a single canal services 4 tiles on each side, covering an 8-tile-wide band per canal. For large farms (20+ plots), use a main trunk canal with perpendicular branch canals every 8 tiles.</p>
          </section>
        <section>
          <h2 className="font-display text-2xl font-bold text-bark">FAQ</h2>
          <div className="space-y-4 mt-4">
              <div>
                <h3 className="font-semibold text-white">What should I know about s-tier crops in Solarpunk?</h3>
                <p className="font-body text-bark-light leading-relaxed mt-4">Corn, Wheat, and Tomato form the S-tier of Solarpunk agriculture. Corn offers the best caloric density per plot, Wheat enables bread production which provides a mood bonus, and Tomatoes grow fast enou...</p>
              </div>
              <div>
                <h3 className="font-semibold text-white">What should I know about a-tier crops in Solarpunk?</h3>
                <p className="font-body text-bark-light leading-relaxed mt-4">Carrot excels as the fastest-growing food crop (4 days) with minimal water requirements — ideal for early game when your irrigation network is still small. Potato provides a high caloric yield per til...</p>
              </div>
              <div>
                <h3 className="font-semibold text-white">What should I know about crop rotation strategy in Solarpunk?</h3>
                <p className="font-body text-bark-light leading-relaxed mt-4">Rotating crops between plots maintains soil fertility. A proven 3-cycle rotation: food crops → fiber crops → fallow (rest) → repeat. This prevents soil depletion and maintains yield without fertilizer...</p>
              </div>
          </div>
        </section>
      </div>
    </div>
  );
}
