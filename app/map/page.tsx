'use client';

export default function MapPage() {
  const biomes = [
    { name: '初始浮空岛', climate: '温带', daylight: '14小时', danger: '低', resources: '木材、石头、纤维、浆果', desc: '玩家起始岛屿，气候温和，资源丰富但种类有限。包含完整的新手引导区域和基础生态系统。' },
    { name: '草原浮岛群', climate: '温带/亚热', daylight: '13小时', danger: '低~中', resources: '铜矿、铁矿、棉花、染料植物', desc: '由多个中型浮岛组成的群岛区域，矿业资源丰富，是进入工业时代的关键跳板。' },
    { name: '荒漠浮岛', climate: '炎热干燥', daylight: '16小时', danger: '中', resources: '金矿、硅砂、稀有矿物', desc: '日照充沛但水资源极度稀缺。太阳能板效率极高，但需要建立完善的水循环系统才能在此长期驻留。' },
    { name: '水晶洞穴', climate: '恒温暗处', daylight: '0小时', danger: '高', resources: '水晶矿、稀土元素、上古遗物', desc: '即将在下次更新中实装的新生物群系。地下洞穴环境，无自然光照，完全依赖人造能源。' },
    { name: '极地浮岛', climate: '寒冷', daylight: '8小时', danger: '高', resources: '稀有金属、永冻冰晶、特殊纤维', desc: '高纬度浮岛区域，温度极低，需要高级保暖设备和强力能源系统。独特资源仅在此区域产出。' },
    { name: '云顶高地', climate: '多变', daylight: '12小时', danger: '极高', resources: '钛矿、能源核心碎片、数据芯片', desc: '游戏中后期解锁的最高层浮岛区域，环境恶劣但蕴含最顶级的资源。只有装备了完全升级飞船的玩家才能抵达。' },
  ];

  const tips = [
    '每个生物群系首次抵达时建议先建造小型前哨站，而非直接迁移主基地。',
    '携带至少 3 天份量的食物和水前往新岛屿，意外情况远比想象中常见。',
    '不同岛屿的日夜长度差异巨大，能源规划必须以目标岛屿的实际日照时长为依据。',
    '在荒漠和极地岛屿之间建立物资互补的物流链，可以大幅提升整体效率。',
    '探索新区域时优先标记资源点位置，方便后续规划采集路线。',
  ];

  return (
    <div className="min-h-screen bg-field-paper bg-paper-texture">
      <header className="pt-12 pb-6 px-4 lg:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col items-start">
          <a href="/" className="font-display text-sm text-moss hover:text-moss-dark transition-colors mb-4">&larr; 返回首页</a>
          <h1 className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-bark leading-none">世界地图</h1>
          <p className="font-body text-base text-stone mt-3 max-w-md leading-relaxed italic">浮空岛世界全貌 — 生物群系、资源分布与探索路线</p>
        </div>
        <div className="field-divider mt-6" />
      </header>

      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="space-y-12">
          <section>
            <h2 className="font-display text-2xl font-bold text-bark">浮空岛世界概述</h2>
            <p className="font-body text-bark-light leading-relaxed mt-4">
              Solarpunk 的世界由众多漂浮在云端的岛屿组成，每座岛屿都是一个独特的小型生态系统。岛屿之间通过飞船进行航行连接，不同岛屿的气候、资源和危险程度差异巨大。理解这些差异并据此调整你的策略，是成功探索整个浮空岛世界的关键。游戏中的世界不是随机生成的，而是一个经过精心设计的固定地图，每座岛屿都有其独特的位置坐标和资源分布。
            </p>
            <p className="font-body text-bark-light leading-relaxed mt-3">
              初始岛屿是玩家的起点，气候温和、危险程度低，适合学习基本操作和建立第一个基地。随着游戏进程的推进，你将通过修复和升级飞船来解锁越来越高级的岛屿区域。每个新解锁的生物群系都会带来独特的挑战和机遇：荒漠岛屿拥有极佳的太阳能条件但缺水严重，极地岛屿产出稀有金属但温度过低，云顶高地提供最顶级的资源但环境极端危险。
            </p>
            <p className="font-body text-bark-light leading-relaxed mt-3">
              本指南按照探索顺序介绍了当前版本中已知的所有主要岛屿区域和生物群系。每个条目包含气候特征、昼夜长度、危险等级和主要资源分布信息，帮助你在出发前做好充分准备。请注意，岛屿的具体资源分布可能因游戏版本更新而有所调整，本页面的资源信息基于社区玩家的大量探索数据汇总，标注为"社区估算"。
            </p>
            <p className="font-body text-bark-light leading-relaxed mt-3">
              探索新岛屿时建议遵循"先观察、再前哨、后开发"的原则。抵达新岛屿后，首先在安全区域建立一个小型前哨站，包括基础供电、储水和简易住所。运行一段时间确认环境稳定后，再决定是否将此处作为主要基地进行大规模开发。同时，建立岛屿之间的定期物流运输是后期游戏中最重要的基础建设之一。
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-bark mb-6">生物群系一览</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {biomes.map((b, i) => (
                <div key={i} className="journal-card p-6">
                  <h3 className="font-display text-lg font-semibold text-bark">{b.name}</h3>
                  <div className="mt-3 space-y-1.5 font-body text-sm text-bark-light">
                    <p><span className="font-semibold text-bark">气候：</span>{b.climate}</p>
                    <p><span className="font-semibold text-bark">日照时长：</span>{b.daylight}</p>
                    <p><span className="font-semibold text-bark">危险等级：</span>{b.danger}</p>
                    <p><span className="font-semibold text-bark">主要资源：</span>{b.resources}</p>
                  </div>
                  <p className="font-body text-sm text-bark-light leading-relaxed mt-3 border-t border-clay/30 pt-3">{b.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-bark mb-6">探索技巧</h2>
            <div className="space-y-3">
              {tips.map((t, i) => (
                <div key={i} className="journal-card p-4">
                  <p className="font-body text-sm text-bark leading-relaxed">{t}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-bark mb-6">常见问题</h2>
            <div className="space-y-2">
              <details className="journal-card p-4 group cursor-pointer">
                <summary className="font-display font-semibold text-bark text-sm marker:text-moss">如何解锁新的岛屿区域？</summary>
                <p className="font-body text-sm text-bark-light leading-relaxed mt-3 pl-3 border-l-2 border-moss/30">
                  通过飞船系统解锁新岛屿。初始岛屿的飞船码头需要修复后才能使用。修复飞船后，你可以航行到 L2 级别的草原浮岛群。要解锁更高级的岛屿区域，需要不断升级飞船的引擎系统，每次重大引擎升级都会解锁新的岛屿层级。建议优先解锁距离最近、危险等级较低的岛屿，积累资源后再挑战高级区域。
                </p>
              </details>
              <details className="journal-card p-4 group cursor-pointer">
                <summary className="font-display font-semibold text-bark text-sm marker:text-moss">不同岛屿的气候会影响作物种植吗？</summary>
                <p className="font-body text-sm text-bark-light leading-relaxed mt-3 pl-3 border-l-2 border-moss/30">
                  会，影响非常显著。每个岛屿的气候条件（温度、日照时长、湿度）都会直接影响作物的生长速度和产量。例如，温带岛屿适合大多数作物，荒漠岛屿虽然日照充足但需要大量灌溉，极地岛屿则只适合耐寒作物。利用这一特性，可以在不同岛屿上建立专业化农场，最大限度地提升特定作物的产出效率。
                </p>
              </details>
              <details className="journal-card p-4 group cursor-pointer">
                <summary className="font-display font-semibold text-bark text-sm marker:text-moss">建议在哪个岛屿建立主基地？</summary>
                <p className="font-body text-sm text-bark-light leading-relaxed mt-3 pl-3 border-l-2 border-moss/30">
                  对大多数玩家来说，初始浮空岛是建立主基地的最佳选择。它拥有最温和的气候、最完整的生态系统以及最大的可建造面积。建议将初始岛屿作为居住、农耕和基础生产的中心枢纽，在其他岛屿建立专业化前哨站（如采矿站、能源站），通过飞船物流将资源汇总到主基地进行加工。这种"一主多辅"的布局在实践中被证明是效率最高的方案。
                </p>
              </details>
            </div>
          </section>
        </div>
        <div className="field-divider mt-16" />
      </main>
      <footer className="max-w-6xl mx-auto px-4 lg:px-8 py-10 text-center">
        <p className="font-body text-xs text-stone">&copy; {new Date().getFullYear()} Solarpunk 生存指南 · <a href="/privacy" className="hover:text-bark transition-colors">隐私政策</a> · <a href="/terms" className="hover:text-bark transition-colors">使用条款</a></p>
      </footer>
    </div>
  );
}
