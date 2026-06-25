'use client';

export default function EnergyPage() {
  const sources = [
    { name: '太阳能板', tier: 'T2', output: '15 单位/小时', condition: '仅白天', desc: '最常见的可再生能源，安装简单、维护成本低。发电量受纬度、天气和面板清洁度影响。在荒漠等高日照岛屿上效率可达 20 单位/小时。', pros: '零燃料消耗，维护简单', cons: '夜间无效，阴天减半' },
    { name: '风力发电机', tier: 'T2', output: '8 单位/小时', condition: '全天候', desc: '全天发电但功率不稳定。在高原和沿海岛屿效率较高，可与太阳能板互补，确保阴天和夜间的基础供电。', pros: '全天发电，补充夜间', cons: '功率不稳定，占地较大' },
    { name: '电池组', tier: 'T2', output: '存储容量', condition: '储能设备', desc: '不是发电设备，但同样是能源系统的核心组件。储存白天的多余电力供夜间使用，保障 24 小时稳定供电。', pros: '平衡供需，稳定电网', cons: '容量有限，会老化衰减' },
    { name: '地热发电机', tier: 'T3', output: '25 单位/小时', condition: '全天候稳定', desc: '利用地热资源发电，输出稳定且不受天气影响。但只能在特定的地热活跃区域建造，建造成本高昂。', pros: '全天稳定，输出高', cons: '建造地点受限，成本高' },
    { name: '生物质能', tier: 'T3', output: '12 单位/小时', condition: '消耗燃料', desc: '燃烧有机物发电，可作为废料处理方案。优点是原材料可再生，缺点是发电量较低且需要持续供给燃料。', pros: '可再生原料，废物利用', cons: '输出低，需燃料供给' },
  ];

  return (
    <div className="min-h-screen bg-field-paper bg-paper-texture">
      <header className="pt-12 pb-6 px-4 lg:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col items-start">
          <a href="/" className="font-display text-sm text-moss hover:text-moss-dark transition-colors mb-4">&larr; 返回首页</a>
          <h1 className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-bark leading-none">能源系统指南</h1>
          <p className="font-body text-base text-stone mt-3 max-w-md leading-relaxed italic">太阳能、风能、储能与高级能源方案全解析</p>
        </div>
        <div className="field-divider mt-6" />
      </header>

      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="flex-1 lg:max-w-[65%] space-y-12">
            <section>
              <h2 className="font-display text-2xl font-bold text-bark">能源系统概述</h2>
              <p className="font-body text-bark-light leading-relaxed mt-4">
                能源是所有自动化设备和高级设施的驱动力。在 Solarpunk 中，没有稳定的能源供应，再精妙的生产设计也只能停留在纸上。能源系统的管理涉及发电、储能、配电和故障恢复四个方面，是一个需要持续关注和优化的动态平衡过程。
              </p>
              <p className="font-body text-bark-light leading-relaxed mt-3">
                选择能源方案时，最重要的参考因素是岛屿的地理和气候条件。同一套能源配置在温带岛屿上可能绰绰有余，但搬到极地或荒漠岛屿上可能完全不够用。因此，不存在一个"最佳"的通用能源方案——你需要根据每个岛屿的具体环境来设计专属的能源配置。好的能源策略是因地制宜的灵活方案，而非刻板地套用某一种固定搭配。
              </p>
              <p className="font-body text-bark-light leading-relaxed mt-3">
                混合能源系统是当前社区公认的最佳实践。通过组合多种能源类型，你可以最大限度地降低单一能源类型的固有缺陷：太阳能和风能互补覆盖全天候发电、电池组平衡供需波动、地热或生物质能提供稳定的基线输出。在岛屿之间的能源也可以建立互联网络——如果某个岛屿能源过剩而另一个短缺，可以通过飞船运输电池模块或建立能源管道来实现跨岛屿的电力调度。
              </p>
              <p className="font-body text-bark-light leading-relaxed mt-3">
                对于大多数温带岛屿的玩家，推荐的入门能源配置是：2 块太阳能板 + 1 台风力发电机 + 2 组电池。这套配置能提供约 38 单位/小时的平均输出功率（白天依赖太阳能，夜晚和阴天靠风能和电池补充，社区估算），足以支撑研究台、基础工作台、洒水器和约 10 个自动化组件的正常运转。随着基地规模的扩大，你需要逐步增加发电容量并升级到更高级的能源方案。
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-bark mb-6">能源设备一览</h2>
              <div className="space-y-4">
                {sources.map((s, i) => (
                  <div key={i} className="journal-card p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-display text-lg font-semibold text-bark">{s.name}</h3>
                      <span className={`field-tag ${s.tier === 'T2' ? 'moss' : 'terracotta'} text-[10px]`}>{s.tier}</span>
                    </div>
                    <div className="flex flex-wrap gap-4 mb-2">
                      <span className="font-body text-sm text-stone">功率：{s.output}</span>
                      <span className="font-body text-sm text-stone">条件：{s.condition}</span>
                    </div>
                    <p className="font-body text-sm text-bark-light leading-relaxed mb-2">{s.desc}</p>
                    <div className="flex gap-6 mt-3 pt-3 border-t border-clay/30">
                      <p className="font-body text-xs text-bark-light"><span className="font-semibold text-bark">优点：</span>{s.pros}</p>
                      <p className="font-body text-xs text-bark-light"><span className="font-semibold text-bark">缺点：</span>{s.cons}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="font-body text-xs text-stone mt-4 italic">* 功率数据为社区估算值，实际输出受环境因素影响。</p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-bark mb-6">常见问题</h2>
              <div className="space-y-2">
                <details className="journal-card p-4 group cursor-pointer">
                  <summary className="font-display font-semibold text-bark text-sm marker:text-moss">如何计算我需要的总发电量？</summary>
                  <p className="font-body text-sm text-bark-light leading-relaxed mt-3 pl-3 border-l-2 border-moss/30">
                    列出你基地中所有电力设备的功率需求并求和，再加上 20% 的冗余裕量，确保在高峰期不会因电力不足而停机。例如：研究台（5）+ 水器（8）+ 基础工作台（3）+ 2 个熔炉（8×2）+ 照明（2）= 34 单位/小时。加上冗余后目标发电量为 41 单位/小时。然后根据你所在岛屿的日照和风力条件反算需要的发电设备数量。
                  </p>
                </details>
                <details className="journal-card p-4 group cursor-pointer">
                  <summary className="font-display font-semibold text-bark text-sm marker:text-moss">电池充满需要多久？</summary>
                  <p className="font-body text-sm text-bark-light leading-relaxed mt-3 pl-3 border-l-2 border-moss/30">
                    电池充满所需时间取决于你的发电设备在当前时段的多余输出功率。以标准电池（容量 100 单位）为例：如果白天发电 38 单位/小时，耗电 20 单位/小时，则多出 18 单位/小时用于充电，充满大约需要 5-6 小时。这也是为什么建议至少配置 2 组电池——它们可以更有效地吸收发电高峰期的大量冗余电力。
                  </p>
                </details>
                <details className="journal-card p-4 group cursor-pointer">
                  <summary className="font-display font-semibold text-bark text-sm marker:text-moss">极地岛屿用什么能源最好？</summary>
                  <p className="font-body text-sm text-bark-light leading-relaxed mt-3 pl-3 border-l-2 border-moss/30">
                    极地岛屿日照时间短（约 8 小时/天），太阳能效率大打折扣。推荐方案：地热发电机（如果有地热点）+ 多组风力发电机 + 大容量电池组。风力发电机在极地地区因强风和低温反而可能有更高的功率输出。如果地热不可用，可以考虑使用生物质能发电作为稳定的基线输出来源。极地岛屿的能源配置需要特别强调储能容量和冗余设计。
                  </p>
                </details>
              </div>
            </section>
          </div>

          <aside className="lg:w-[30%] space-y-10 shrink-0">
            <div className="field-sidebar-block">
              <h3 className="font-display text-base font-semibold text-bark mb-4">相关攻略</h3>
              <div className="space-y-2 font-body text-sm">
                <a href="/automation" className="block text-moss hover:text-moss-dark transition-colors">自动化系统指南</a>
                <a href="/farming" className="block text-moss hover:text-moss-dark transition-colors">农耕系统指南</a>
                <a href="/map" className="block text-moss hover:text-moss-dark transition-colors">世界地图</a>
              </div>
            </div>
            <div className="field-sidebar-block">
              <h3 className="font-display text-base font-semibold text-bark mb-4">推荐入门配置</h3>
              <div className="font-body text-xs text-bark-light leading-relaxed">
                <p>温带岛屿：2 太阳能 + 1 风车 + 2 电池</p>
                <p>荒漠岛屿：3 太阳能 + 2 电池</p>
                <p>极地岛屿：2 风车 + 3 电池 + 地热</p>
              </div>
            </div>
          </aside>
        </div>
        <div className="field-divider mt-16" />
      </main>
      <footer className="max-w-6xl mx-auto px-4 lg:px-8 py-10 text-center">
        <p className="font-body text-xs text-stone">&copy; {new Date().getFullYear()} Solarpunk 生存指南 · <a href="/privacy" className="hover:text-bark transition-colors">隐私政策</a> · <a href="/terms" className="hover:text-bark transition-colors">使用条款</a></p>
      </footer>
    </div>
  );
}
