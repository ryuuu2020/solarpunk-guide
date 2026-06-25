export default function AutomationPage() {
  const machines = [
    { name: 'Transport Drone', desc: 'Transports resources between islands. Set pickup and delivery points — drones automatically ferry items across your island network. Each drone requires naming before deployment.', unlock: 'Drone Technology research' },
    { name: 'Sprinkler', desc: 'Automatically waters nearby crop fields by pumping water from the ground. Eliminates manual watering for adjacent farmland plots. Wireless Sprinkler variant available with advanced research.', unlock: 'Irrigation research' },
    { name: 'Forester', desc: 'Automatically produces wood over time. Place it in a suitable location and it will generate a steady supply of wood without manual tree chopping.', unlock: 'Forestry research' },
    { name: 'Magnetic Fisher', desc: 'Retrieves resources from water bodies automatically. Can sometimes pull non-magnetic items as well. Place near ponds or water sources for passive resource collection.', unlock: 'Fishing Technology research' },
    { name: 'Automatic Drill', desc: 'Automated resource extraction for mining. Place on resource deposits to gather ores and minerals without manual mining.', unlock: 'Mining Automation research' },
    { name: 'Logic Block', desc: 'Energy logic device used with sensors to create automated switching. For example: connect lights to a power source with a Daytime Sensor in the middle to automatically turn lights on at night and off during the day.', unlock: 'Power Logic research' },
    { name: 'Daytime Sensor', desc: 'Energy sensor for time-based switching. Opens or closes energy circuits based on day/night cycle. Can invert signal to trigger at opposite times.', unlock: 'Sensor research' },
    { name: 'Recycler', desc: 'Decomposes crafted items back into their component parts. Useful for reclaiming materials from obsolete equipment.', unlock: 'Recycling research' },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <h1 className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-bark leading-none mb-4">Automation & Machines Guide</h1>
      <p className="font-body text-base text-stone max-w-2xl italic mb-8">Solarpunk&apos;s automation focuses on reducing manual labor through machines and drones — not factory assembly lines</p>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="flex-1 lg:max-w-[65%] space-y-12">
          <section>
            <h2 className="font-display text-2xl font-bold text-bark mb-4">How Automation Works in Solarpunk</h2>
            <p className="font-body text-bark-light leading-relaxed">
              Solarpunk is a peaceful survival-crafting game, not an industrial factory simulator. Automation means reducing repetitive manual tasks — letting machines and drones handle resource gathering, watering, and transport so you can focus on exploration, building, and airship travel.
            </p>
            <p className="font-body text-bark-light leading-relaxed mt-3">
              The key to efficient automation is the energy system. Every automated machine requires power to operate. Your solar panels, windmills, and batteries form the backbone that makes automation possible. Build your power infrastructure first, then add machines that remove friction from your daily routine.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-bark mb-6">Automation Machines</h2>
            <div className="space-y-4">
              {machines.map((m, i) => (
                <div key={i} className="journal-card p-5">
                  <h3 className="font-display text-base font-semibold text-bark">{m.name}</h3>
                  <p className="font-body text-sm text-bark-light leading-relaxed mt-1">{m.desc}</p>
                  <p className="font-body text-xs text-stone mt-2">Unlock: {m.unlock}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-bark mb-4">Automation Progression Path</h2>
            <div className="space-y-4">
              <div className="journal-card p-4">
                <h3 className="font-display text-sm font-semibold text-bark">Early Game: Manual to Semi-Automated</h3>
                <p className="font-body text-sm text-bark-light mt-2">Start with a Sprinkler for your first farm. It eliminates daily manual watering. Then add a Magnetic Fisher near water for passive resource income. These two machines dramatically reduce early-game busywork.</p>
              </div>
              <div className="journal-card p-4">
                <h3 className="font-display text-sm font-semibold text-bark">Mid Game: Passive Resource Generation</h3>
                <p className="font-body text-sm text-bark-light mt-2">Unlock the Forester for automatic wood production and Automatic Drill for mining. Set up Transport Drones to move resources between your islands. Connect Logic Blocks with Daytime Sensors to automate lighting and power switching.</p>
              </div>
              <div className="journal-card p-4">
                <h3 className="font-display text-sm font-semibold text-bark">Late Game: Island Networks</h3>
                <p className="font-body text-sm text-bark-light mt-2">Build specialized production islands connected by Transport Drone routes. One island for farming, another for mining, a third for animal husbandry. Use Logic Blocks to automate power distribution across your island network.</p>
              </div>
            </div>
          </section>
        </div>

        <aside className="lg:w-[30%] space-y-10 shrink-0">
          <div className="field-sidebar-block">
            <h3 className="font-display text-base font-semibold text-bark mb-4">Related Guides</h3>
            <div className="space-y-2 font-body text-sm">
              <a href="/energy" className="block text-moss hover:text-moss-dark transition-colors">Energy System Guide</a>
              <a href="/farming" className="block text-moss hover:text-moss-dark transition-colors">Farming System Guide</a>
              <a href="/crafting" className="block text-moss hover:text-moss-dark transition-colors">Crafting Recipes</a>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
