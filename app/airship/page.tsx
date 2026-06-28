export const metadata = {
  title: "Solarpunk Airship Guide — Building & Navigation (2026)",
  description:
    "Complete airship guide for Solarpunk. Building, navigation, and combat strategies.",
};

export default function AirshipPage() {
  const upgrades = [
    { name: 'Timber Hull', desc: 'Increases damage capacity before reaching critical damage thresholds. A sturdier hull means you can weather more storm damage and accidental impacts.', unlock: 'Basic airship repair' },
    { name: 'Solar Canopy', desc: 'Onboard solar recharge rate boost. Generates power for your airship while flying, reducing reliance on battery reserves for long journeys.', unlock: 'Solar research' },
    { name: 'Storm Plating', desc: 'Weather resilience upgrade. Mitigates storm drift during thunderstorm encounters, making it easier to maintain course in bad weather.', unlock: 'Advanced materials research' },
    { name: "Captain's HUD", desc: 'Readout detail upgrade. Displays speed, weather, wind, and time information. Higher tiers provide more precise navigation data.', unlock: 'Navigation research' },
    { name: 'Battery Cells', desc: 'Power reserve upgrade. Increases onboard energy storage, feeding the airship HUD battery readout. Essential for long-distance flights.', unlock: 'Energy storage research' },
    { name: 'Prop Engine', desc: 'Base thrust and acceleration power upgrade. Determines how fast your airship moves and how quickly it can reach cruising speed.', unlock: 'Advanced propulsion research' },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <h1 className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-bark leading-none mb-4">Airship System Guide</h1>
      <p className="font-body text-base text-stone max-w-2xl italic mb-8">Six upgrades, one ship — from a clear-sky cruiser to a storm-worthy hauler</p>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="flex-1 lg:max-w-[65%] space-y-12">
          <section>
            <h2 className="font-display text-2xl font-bold text-bark mb-4">Airship Overview</h2>
            <p className="font-body text-bark-light leading-relaxed">
              The airship is Solarpunk&apos;s signature system — your vehicle for traveling between floating islands. Starting as a wreck on your first island, you repair it and progressively upgrade six systems. Each upgrade makes your airship more capable: flying farther, surviving storms, carrying more power, and navigating with greater precision.
            </p>
            <p className="font-body text-bark-light leading-relaxed mt-3">
              The airship also serves as a mobile platform. You can place crafting stations, storage, and other equipment on deck — effectively creating a mobile mini-base. This becomes particularly valuable in mid-to-late game when you&apos;re traveling between distant islands.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-bark mb-6">Airship Upgrades</h2>
            <div className="space-y-4">
              {upgrades.map((u, i) => (
                <div key={i} className="journal-card p-5">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="step-number shrink-0 w-6 h-6 text-xs">{String(i + 1).padStart(2, '0')}</span>
                    <h3 className="font-display text-base font-semibold text-bark">{u.name}</h3>
                  </div>
                  <p className="font-body text-sm text-bark-light leading-relaxed ml-9">{u.desc}</p>
                  <p className="font-body text-xs text-stone mt-1 ml-9">Unlock via: {u.unlock}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-bark mb-4">Upgrade Priority</h2>
            <div className="journal-card p-5 space-y-3">
              <div>
                <h3 className="font-display text-sm font-semibold text-bark">Early Priority: Timber Hull + Prop Engine</h3>
                <p className="font-body text-sm text-bark-light mt-1">Survivability and basic mobility first. A sturdier hull protects you during early flights, while better thrust helps you reach new islands faster.</p>
              </div>
              <div>
                <h3 className="font-display text-sm font-semibold text-bark">Mid Priority: Solar Canopy + Battery Cells</h3>
                <p className="font-body text-sm text-bark-light mt-1">Energy independence for longer flights. Solar recharge plus extra battery capacity means fewer stops to refuel.</p>
              </div>
              <div>
                <h3 className="font-display text-sm font-semibold text-bark">Late Priority: Storm Plating + Captain&apos;s HUD</h3>
                <p className="font-body text-sm text-bark-light mt-1">Weather mastery and precision. Storm Plating lets you fly through thunderstorms safely. HUD upgrades make navigation precise enough for the most distant islands.</p>
              </div>
            </div>
          </section>
        </div>

        <aside className="lg:w-[30%] space-y-10 shrink-0">
          <div className="field-sidebar-block">
            <h3 className="font-display text-base font-semibold text-bark mb-4">Related Guides</h3>
            <div className="space-y-2 font-body text-sm">
              <a href="/energy" className="block text-moss hover:text-moss-dark transition-colors">Energy System Guide</a>
              <a href="/map" className="block text-moss hover:text-moss-dark transition-colors">World Map</a>
              <a href="/automation" className="block text-moss hover:text-moss-dark transition-colors">Automation & Machines</a>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
