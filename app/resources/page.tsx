'use client';

export default function ResourcesPage() {
  const resources = [
    { name: '木材', type: '基础建材', locations: '所有岛屿', tool: '石斧/铁斧', uses: '建筑、工具、燃料' },
    { name: '石头', type: '基础建材', locations: '所有岛屿', tool: '石镐/铁镐', uses: '建筑材料、熔炉、道路' },
    { name: '纤维', type: '基础材料', locations: '所有岛屿', tool: '手工采集', uses: '布料、绳索、基础工具' },
    { name: '铁矿', type: '金属矿物', locations: '草原、荒漠岛屿', tool: '铁镐以上', uses: '铁锭 → 工具、机械、结构件' },
    { name: '铜矿', type: '金属矿物', locations: '草原浮岛群为主', tool: '铁镐以上', uses: '铜线、电路板、电气元件' },
    { name: '金矿', type: '稀有矿物', locations: '荒漠、极地岛屿', tool: '高级镐', uses: '高级电路、装饰、贸易' },
    { name: '硅砂', type: '工业原料', locations: '荒漠、沙滩区域', tool: '铲子', uses: '玻璃、硅片、太阳能板' },
    { name: '水晶矿', type: '特殊矿物', locations: '水晶洞穴', tool: '高级镐', uses: '光学元件、高级能源设备' },
    { name: '钛矿', type: '高级金属', locations: '云顶高地', tool: '顶级镐', uses: '钛合金 → 飞船引擎、高级装甲' },
    { name: '能源核心碎片', type: '稀有材料', locations: '云顶高地', tool: '特殊采集', uses: '飞船引擎核心、终极设备' },
    { name: '煤炭', type: '燃料', locations: '地下矿脉', tool: '铁镐', uses: '熔炉燃料、早期能源' },
    { name: '石油', type: '燃料/原料', locations: '特定岛屿地质区', tool: '钻井设备', uses: '高级燃料、塑料、化工原料' },
  ];

  return (
    <div className="min-h-screen bg-field-paper bg-paper-texture">
      <header className="pt-12 pb-6 px-4 lg:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col items-start">
          <a href="/" className="font-display text-sm text-moss hover:text-moss-dark transition-colors mb-4">&larr; 返回首页</a>
          <h1 className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-bark leading-none">资源采集与分布</h1>
          <p className="font-body text-base text-stone mt-3 max-w-md leading-relaxed italic">全岛资源类型、分布规律与高效采集路线指南</p>
        </div>
        <div className="field-divider mt-6" />
      </header>

      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="flex-1 lg:max-w-[65%] space-y-12">
            <section>
              <h2 className="font-display text-2xl font-bold text-bark">资源系统概述</h2>
              <p className="font-body text-bark-light leading-relaxed mt-4">
                资源采集是 Solarpunk 一切活动的根基。从建造第一个庇护所需要的木材和石头，到打造飞船引擎核心所需的钛合金和能源核心碎片，每一种资源都有其特定的生成地点、采集工具要求和最佳获取时机。理解资源的分布规律和采集效率，可以帮你大幅缩短从"资源紧缺"到"物质充裕"之间的发展时间。
              </p>
              <p className="font-body text-bark-light leading-relaxed mt-3">
                游戏中的资源按照稀有度和使用阶段大致可以分为四个层次：基础资源（木材、石头、纤维）在所有岛屿均可采集，是建造和维护基础设施的永久消耗品；中级资源（铁、铜、煤炭）主要分布在 L2 及以上级别的岛屿，是工业化和自动化的基础；高级资源（金、硅砂、水晶）仅出现在特定生物群系，需要专门的前往和采集计划；终极资源（钛矿、能源核心碎片）分布在高危岛屿上，代表了游戏的最先进技术层级。
              </p>
              <p className="font-body text-bark-light leading-relaxed mt-3">
                采集效率的提升有两条路径：使用更高级的工具（石质 → 铁质 → 合金）直接提升每次采集的数量和速度；以及建立自动化采集网络让机器持续运转。前者适合游戏早期和探索阶段，后者是后期大规模生产的必要手段。建议的推进策略是：用手动采集积累首批中级金属 → 建造熔炉和基础自动化线 → 用自动化生产反哺采集 → 解锁更高级的工具和采集设备 → 循环往复。
              </p>
              <p className="font-body text-bark-light leading-relaxed mt-3">
                对于跨岛屿的资源获取，效率最高的方案是在每个主要资源岛屿上建立专业化采集前哨站。例如在草原浮岛群建立铜矿和铁矿采集站，在荒漠岛屿建立硅砂和金矿采集站。通过飞船或传送带将这些前哨站的产出汇总到主基地，进行统一的冶炼、加工和生产。这种分布式的采集网络是目前公认的大型基地资源管理最佳实践。每种资源的采集频率和消耗速度不同，定期审视你的资源储备数据有助于及时调整各前哨站的产能分配。
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-bark mb-6">资源速查表</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b-2 border-moss/30">
                      <th className="text-left py-3 px-3 font-display font-semibold text-bark">资源</th>
                      <th className="text-left py-3 px-3 font-display font-semibold text-bark">类型</th>
                      <th className="text-left py-3 px-3 font-display font-semibold text-bark">分布地点</th>
                      <th className="text-left py-3 px-3 font-display font-semibold text-bark">采集工具</th>
                      <th className="text-left py-3 px-3 font-display font-semibold text-bark">主要用途</th>
                    </tr>
                  </thead>
                  <tbody className="font-body text-bark-light">
                    {resources.map((r, i) => (
                      <tr key={i} className="border-b border-clay/30 hover:bg-field-paper-warm/50 transition-colors">
                        <td className="py-3 px-3 font-semibold text-bark">{r.name}</td>
                        <td className="py-3 px-3 text-xs">{r.type}</td>
                        <td className="py-3 px-3 text-xs">{r.locations}</td>
                        <td className="py-3 px-3 text-xs">{r.tool}</td>
                        <td className="py-3 px-3 text-xs">{r.uses}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="font-body text-xs text-stone mt-4 italic">* 资源分布信息基于当前版本游戏数据，可能随版本更新调整。</p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-bark mb-6">常见问题</h2>
              <div className="space-y-2">
                <details className="journal-card p-4 group cursor-pointer">
                  <summary className="font-display font-semibold text-bark text-sm marker:text-moss">初始岛屿的资源够用吗？</summary>
                  <p className="font-body text-sm text-bark-light leading-relaxed mt-3 pl-3 border-l-2 border-moss/30">
                    初始岛屿的资源足够支撑你建立基础基地和修复飞船，但仅限于基础资源。木材、石头和纤维充足；少量铁矿石可以通过探索找到；但铜矿、金矿等中级资源在初始岛屿上极为稀少。你需要尽快修复飞船前往 L2 级别的草原浮岛群获取更丰富的矿物资源。如果你计划将初始岛屿作为长期主基地，则必须建立跨岛屿的资源运输网络。
                  </p>
                </details>
                <details className="journal-card p-4 group cursor-pointer">
                  <summary className="font-display font-semibold text-bark text-sm marker:text-moss">如何高效采集稀有矿物？</summary>
                  <p className="font-body text-sm text-bark-light leading-relaxed mt-3 pl-3 border-l-2 border-moss/30">
                    首先锁定矿物的主要分布岛屿（如金矿在荒漠和极地岛屿，钛矿在云顶高地）。在目标岛屿建立前哨站，包含供电、住宿和基础仓储设施。使用你能制作的最顶级采集工具。如果条件允许，建造采矿机和传送带系统实现自动化采集。对于无法自动采集的稀有资源（如能源核心碎片），建议准备充足的补给和高级防御装备，因为这些资源通常分布在最危险的岛屿区域。
                  </p>
                </details>
                <details className="journal-card p-4 group cursor-pointer">
                  <summary className="font-display font-semibold text-bark text-sm marker:text-moss">矿物资源会再生吗？</summary>
                  <p className="font-body text-sm text-bark-light leading-relaxed mt-3 pl-3 border-l-2 border-moss/30">
                    大多数地表矿脉在采集后不会自动再生。这也是为什么资源管理在 Solarpunk 中如此重要——如果你将某个岛屿的矿物全部采光，就需要前往新的岛屿寻找替代来源。不过，某些深层矿脉（需要使用采矿机开采的类型）可能具有缓慢的再生率（社区对此有不同观察，可能存在版本差异）。为了长期发展的可持续性，建议同时开发多个资源岛屿并合理分配采集强度，避免单一矿源的过度开采。
                  </p>
                </details>
              </div>
            </section>
          </div>

          <aside className="lg:w-[30%] space-y-10 shrink-0">
            <div className="field-sidebar-block">
              <h3 className="font-display text-base font-semibold text-bark mb-4">相关攻略</h3>
              <div className="space-y-2 font-body text-sm">
                <a href="/map" className="block text-moss hover:text-moss-dark transition-colors">世界地图</a>
                <a href="/crafting" className="block text-moss hover:text-moss-dark transition-colors">制作配方大全</a>
                <a href="/automation" className="block text-moss hover:text-moss-dark transition-colors">自动化系统指南</a>
              </div>
            </div>

            <div className="bg-moss-light/50 border border-moss/20 p-6">
              <h3 className="font-display text-sm font-semibold text-moss-dark mb-2">采集效率提示</h3>
              <p className="font-body text-xs text-bark-light leading-relaxed">
                使用更高级的工具可以将单次采集产出提升 40%-80%（社区估算）。在开始大规模采集前先升级工具，事半功倍。
              </p>
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
