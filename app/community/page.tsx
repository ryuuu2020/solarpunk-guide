export default function CommunityPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <h1 className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-bark leading-none mb-4">Community</h1>
      <p className="font-body text-base text-stone max-w-2xl italic mb-8">Connect with other Solarpunk players and find community resources</p>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="flex-1 lg:max-w-[65%] space-y-12">
          <section>
            <h2 className="font-display text-2xl font-bold text-bark mb-4">About This Community</h2>
            <p className="font-body text-bark-light leading-relaxed">
              Solarpunk has a growing player community built around this peaceful survival-crafting game. Players share base designs, farming layouts, airship configurations, and automation setups. The game supports online co-op for 2-4 players, so connecting with other players is part of the experience.
            </p>
            <p className="font-body text-bark-light leading-relaxed mt-3">
              Whether you&apos;re a newcomer building your first wooden hut or a veteran with an island-spanning automated network, there&apos;s a place for you in the Solarpunk community. Share your creations, ask questions, and learn from other players.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-bark mb-4">Where to Find Players</h2>
            <div className="space-y-3">
              <div className="journal-card p-4">
                <h3 className="font-display text-sm font-semibold text-bark">Steam Community</h3>
                <p className="font-body text-sm text-bark-light mt-1">The official Steam Community hub for Solarpunk — discussions, screenshots, guides, and workshop content.</p>
                <a href="https://steamcommunity.com/app/1805110" target="_blank" rel="noopener noreferrer" className="font-body text-xs text-moss hover:text-moss-dark transition-colors mt-1 inline-block">Visit Steam Community &rarr;</a>
              </div>
              <div className="journal-card p-4">
                <h3 className="font-display text-sm font-semibold text-bark">Official Discord</h3>
                <p className="font-body text-sm text-bark-light mt-1">Cyberwave maintains an official Discord server for announcements, bug reports, and community discussion.</p>
              </div>
              <div className="journal-card p-4">
                <h3 className="font-display text-sm font-semibold text-bark">Reddit</h3>
                <p className="font-body text-sm text-bark-light mt-1">The Solarpunk subreddit for player discussions, creations, and community events.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-bark mb-4">Community Resources</h2>
            <div className="space-y-3">
              <div className="journal-card p-4">
                <h3 className="font-display text-sm font-semibold text-bark">Wiki Resources</h3>
                <p className="font-body text-sm text-bark-light mt-1">Community-maintained wikis with detailed item databases, crafting recipes, and system references.</p>
                <div className="flex flex-wrap gap-3 mt-2">
                  <a href="https://solarpunk.wikily.gg" target="_blank" rel="noopener noreferrer" className="font-body text-xs text-moss hover:text-moss-dark transition-colors">Wikily.gg &rarr;</a>
                  <a href="https://solarpunkgamewiki.com" target="_blank" rel="noopener noreferrer" className="font-body text-xs text-moss hover:text-moss-dark transition-colors">Game Wiki &rarr;</a>
                </div>
              </div>
            </div>
          </section>
        </div>

        <aside className="lg:w-[30%] space-y-10 shrink-0">
          <div className="field-sidebar-block">
            <h3 className="font-display text-base font-semibold text-bark mb-4">Game Info</h3>
            <div className="font-body text-xs text-bark-light space-y-1">
              <p><strong>Developer:</strong> Cyberwave (2-person German studio)</p>
              <p><strong>Publisher:</strong> rokaplay</p>
              <p><strong>Release:</strong> June 8, 2026</p>
              <p><strong>Platforms:</strong> Steam, GOG, Epic, PS5, Xbox, Switch 2</p>
              <p><strong>Co-op:</strong> 2-4 players online</p>
              <p><strong>Price:</strong> $22.99 / €22.99</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
