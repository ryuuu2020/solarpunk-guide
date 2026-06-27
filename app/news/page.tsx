export default function NewsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <h1 className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-bark leading-none mb-4">News & Updates</h1>
      <p className="font-body text-base text-stone max-w-2xl italic mb-8">Official Solarpunk game news and update information</p>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="flex-1 lg:max-w-[65%] space-y-8">
          
          <div className="journal-card p-6">
            <span className="field-tag terracotta text-[10px] mb-2 inline-block">PLATFORM NEWS</span>
            <h2 className="font-display text-lg font-semibold text-bark mb-2">Crossplay Update Live — Feature Voting Opens to All Players</h2>
            <span className="font-body text-xs text-stone">June 27, 2026</span>
            <p className="font-body text-sm text-bark-light mt-3 leading-relaxed">
              Cyberwave shipped the Solarpunk mid-update on June 23, bringing three significant additions. First, crossplay is now live across PC and GOG, meaning you can co-op build with friends regardless of platform — a long-requested feature since launch. Second, the developer opened a Feature Voting system where players can submit and upvote new feature ideas directly, with Cyberwave committing to prioritize top-voted items in upcoming patches. Third, a batch of quality-of-life fixes landed: improved airship physics handling, faster farm crop processing, and several stability fixes for large settlements. The airship bug that caused cargo to despawn during fast travel has been addressed. For players who left after week one, now is a good time to return — the early-game grind has been noticeably smoothed by the farming speed boost, and crossplay means you can finally invite your friends to your island commune.
            </p>
          </div>

          <div className="journal-card p-6">
            <span className="field-tag moss text-[10px] mb-2 inline-block">GAME UPDATE</span>
            <h2 className="font-display text-lg font-semibold text-bark mb-2">Mid-Update: Crossplay Testing, Feature Voting Opens</h2>
            <span className="font-body text-xs text-stone">June 26, 2026</span>
            <p className="font-body text-sm text-bark-light mt-3 leading-relaxed">
              Cyberwave has released a mid-update introducing the first phase of crossplay support — Steam and GOG players can now join the same co-op sessions. While full cross-platform play (PC to console) is still in development, this is a significant step. The update also opens community feature voting through the official Discord, letting players prioritize upcoming features: expanded animal breeding, new island biomes, automated farming drones, and weather system improvements. Several bug fixes address floating item visual glitches and airship docking collision issues reported since the June 8 launch. With 6,300+ Kickstarter backers and a growing player base across 6 platforms, Cyberwave confirmed content updates will roll out every 3-4 weeks through 2026.
            </p>
          </div>
<div className="journal-card p-6">
            <span className="field-tag moss text-[10px] mb-2 inline-block">GAME UPDATE</span>
            <h2 className="font-display text-lg font-semibold text-bark mb-2">Solarpunk 1.0 Launches Worldwide</h2>
            <span className="font-body text-xs text-stone">June 8, 2026</span>
            <p className="font-body text-sm text-bark-light mt-3 leading-relaxed">
              Solarpunk has launched on Steam, GOG, Epic Games Store, PlayStation 5, Xbox Series X|S, and Nintendo Switch 2. The game supports online co-op for 2-4 players and is available in 14 languages. Developed by Cyberwave, a two-person German studio, and published by rokaplay.
            </p>
            <p className="font-body text-sm text-bark-light mt-2 leading-relaxed">
              The game features peaceful survival-crafting gameplay on floating islands. Players fly airships between islands, grow crops, raise animals, and power their bases with solar panels, windmills, and batteries.
            </p>
          </div>

          <div className="journal-card p-6">
            <span className="field-tag terracotta text-[10px] mb-2 inline-block">PLATFORM NEWS</span>
            <h2 className="font-display text-lg font-semibold text-bark mb-2">Available on All Major Platforms</h2>
            <span className="font-body text-xs text-stone">June 2026</span>
            <p className="font-body text-sm text-bark-light mt-3 leading-relaxed">
              Solarpunk is now available on PC (Steam, GOG, Epic), PlayStation 5, Xbox Series X|S, and Nintendo Switch 2. Each platform supports the full 1.0 experience with 2-4 player online co-op. Cross-play between platforms is not currently supported — players must be on the same platform to join co-op sessions.
            </p>
          </div>

          <div className="journal-card p-6">
            <span className="field-tag stone text-[10px] mb-2 inline-block">DEVELOPMENT</span>
            <h2 className="font-display text-lg font-semibold text-bark mb-2">From Kickstarter to Launch</h2>
            <span className="font-body text-xs text-stone">2022 - 2026</span>
            <p className="font-body text-sm text-bark-light mt-3 leading-relaxed">
              Solarpunk was funded through Kickstarter in 2022, with 6,312 backers pledging €305,266. The game went through closed beta testing in 2025, which introduced features including the transport drone system, reworked animal AI, power logic, cooking recipes, and animal breeding. The full 1.0 release launched on June 8, 2026.
            </p>
          </div>

          <div className="journal-card p-6">
            <h2 className="font-display text-lg font-semibold text-bark mb-2">For Latest Official News</h2>
            <p className="font-body text-sm text-bark-light leading-relaxed">
              For the most up-to-date game news, patch notes, and developer updates, visit:
            </p>
            <ul className="font-body text-sm text-moss space-y-1 mt-2">
              <li><a href="https://store.steampowered.com/app/1805110" target="_blank" rel="noopener noreferrer" className="hover:text-moss-dark transition-colors">Steam Store Page &rarr;</a></li>
              <li><a href="https://solarpunk.wikily.gg" target="_blank" rel="noopener noreferrer" className="hover:text-moss-dark transition-colors">Community Wiki &rarr;</a></li>
            </ul>
          </div>
        </div>

        <aside className="lg:w-[30%] space-y-10 shrink-0">
          <div className="field-sidebar-block">
            <h3 className="font-display text-base font-semibold text-bark mb-4">Game Info</h3>
            <div className="font-body text-xs text-bark-light space-y-1">
              <p><strong>Developer:</strong> Cyberwave</p>
              <p><strong>Publisher:</strong> rokaplay</p>
              <p><strong>Release Date:</strong> June 8, 2026</p>
              <p><strong>Platforms:</strong> PC, PS5, Xbox, Switch 2</p>
              <p><strong>Price:</strong> $22.99 / €22.99</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
