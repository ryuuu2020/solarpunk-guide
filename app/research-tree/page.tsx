export const metadata = {
  title: "Solarpunk Research Tree Guide — Best Tech Order (2026)",
  description: "Complete research tree guide for Solarpunk. Best research order, priority technologies, and efficient tech unlocking strategy.",
};

export default function ResearchTreePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <h1 className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-bark leading-none mb-4">Solarpunk Research Tree — Best Unlock Order</h1>
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <section>
            <h2 className="font-display text-2xl font-bold text-bark">Research Priorities</h2>
            <p className="font-body text-bark-light leading-relaxed mt-4">The research tree in Solarpunk divides into four main branches: Agriculture, Infrastructure, Technology, and Society. For most playstyles, prioritize Agriculture first (unlocks crop variants and irrigation), then Infrastructure (enables larger buildings and storage), then Technology (automation and energy efficiency), and finally Society (trade and diplomacy).</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-bark">Early Game Research (Days 1-15)</h2>
            <p className="font-body text-bark-light leading-relaxed mt-4">Immediate priorities: Basic Irrigation (enables canal building), Crop Rotation (boosts all crop yields by 15%), and Basic Storage (increases stockpile capacity). These three technologies have the highest ROI in the first 15 days and unlock the foundation for all subsequent growth.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-bark">Mid Game Research (Days 16-40)</h2>
            <p className="font-body text-bark-light leading-relaxed mt-4">Focus on: Advanced Solar Panels (increases energy output 150%), Workshop Automation (removes manual labor from production chains), and Marine Navigation (enables inter-island travel). The automation tech is particularly valuable as it frees up colonists from repetitive tasks for more complex work.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-bark">Research Speed Tips</h2>
            <p className="font-body text-bark-light leading-relaxed mt-4">Assign your Researcher trait colonist to the research station full-time. Build a dedicated Research Building (separate from your main hall) to avoid interruptions. Stockpile Paper and Knowledge Crystals before queuing major research — running out of materials mid-research pauses progress without refunding time invested.</p>
          </section>
        <section>
          <h2 className="font-display text-2xl font-bold text-bark">FAQ</h2>
          <div className="space-y-4 mt-4">
              <div>
                <h3 className="font-semibold text-white">What should I know about research priorities in Solarpunk?</h3>
                <p className="font-body text-bark-light leading-relaxed mt-4">The research tree in Solarpunk divides into four main branches: Agriculture, Infrastructure, Technology, and Society. For most playstyles, prioritize Agriculture first (unlocks crop variants and irrig...</p>
              </div>
              <div>
                <h3 className="font-semibold text-white">What should I know about early game research (days 1-15) in Solarpunk?</h3>
                <p className="font-body text-bark-light leading-relaxed mt-4">Immediate priorities: Basic Irrigation (enables canal building), Crop Rotation (boosts all crop yields by 15%), and Basic Storage (increases stockpile capacity). These three technologies have the high...</p>
              </div>
              <div>
                <h3 className="font-semibold text-white">What should I know about mid game research (days 16-40) in Solarpunk?</h3>
                <p className="font-body text-bark-light leading-relaxed mt-4">Focus on: Advanced Solar Panels (increases energy output 150%), Workshop Automation (removes manual labor from production chains), and Marine Navigation (enables inter-island travel). The automation t...</p>
              </div>
          </div>
        </section>
      </div>
    </div>
  );
}
