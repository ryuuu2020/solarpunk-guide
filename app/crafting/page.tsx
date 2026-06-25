'use client';

export default function CraftingPage() {
  const recipes = [
    { name: '基础工作台', materials: '木材 x10 + 石头 x5', station: '手工制作', unlock: '默认解锁', tier: 1, category: '基础' },
    { name: '石斧', materials: '木材 x4 + 石头 x3 + 纤维 x2', station: '基础工作台', unlock: '默认解锁', tier: 1, category: '工具' },
    { name: '石镐', materials: '木材 x4 + 石头 x4 + 纤维 x2', station: '基础工作台', unlock: '默认解锁', tier: 1, category: '工具' },
    { name: '篝火', materials: '石头 x5 + 木材 x8', station: '手工制作', unlock: '默认解锁', tier: 1, category: '生存' },
    { name: '木墙', materials: '木材 x6 + 纤维 x2', station: '基础工作台', unlock: '默认解锁', tier: 1, category: '建造' },
    { name: '床铺', materials: '木材 x8 + 纤维 x6 + 布料 x4', station: '基础工作台', unlock: '默认解锁', tier: 1, category: '生存' },
    { name: '雨水收集器', materials: '木材 x12 + 铁锭 x2 + 布料 x3', station: '基础工作台', unlock: '基础水源研究', tier: 2, category: '生存' },
    { name: '太阳能电池板', materials: '硅片 x4 + 铜线 x8 + 玻璃 x2', station: '电子工作台', unlock: '基础电力研究', tier: 2, category: '能源' },
    { name: '风力发电机', materials: '铁锭 x8 + 铜线 x6 + 齿轮 x3', station: '机械工作台', unlock: '风能技术研究', tier: 2, category: '能源' },
    { name: '研究台', materials: '木材 x15 + 铁锭 x5 + 铜线 x3', station: '基础工作台', unlock: '基础科学', tier: 1, category: '科技' },
    { name: '熔炉', materials: '石头 x20 + 铁锭 x4', station: '基础工作台', unlock: '基础冶炼', tier: 1, category: '生产' },
    { name: '自动浇水系统', materials: '铁管 x6 + 水泵 x1 + 电路板 x2', station: '高级工作台', unlock: '自动农耕研究', tier: 3, category: '农耕' },
    { name: '传送带', materials: '铁锭 x4 + 齿轮 x2 + 橡胶 x1', station: '机械工作台', unlock: '基础自动化', tier: 2, category: '自动化' },
    { name: '工业熔炉', materials: '钢锭 x15 + 耐火砖 x8 + 温度传感器 x2', station: '高级工作台', unlock: '工业冶炼', tier: 3, category: '生产' },
    { name: '飞船引擎核心', materials: '钛合金 x20 + 能源核心 x1 + 高级电路 x5', station: '飞船装配台', unlock: '引擎技术 III', tier: 4, category: '飞船' },
  ];

  const tiers = [
    { label: 'Tier 1 — 基础科技', desc: '默认解锁或通过基础研究即可获得。使用基础工作台或手工制作，材料为初始岛屿可获取的基础资源。' },
    { label: 'Tier 2 — 中级科技', desc: '需要完成中级研究，部分材料需要跨岛屿采集。工作台升级为电子/机械工作台，产物开始涉及自动化组件。' },
    { label: 'Tier 3 — 高级科技', desc: '需要高级研究解锁，涉及多岛屿资源链。使用高级或专业工作台，产物通常用于构建自动化系统和高级设施。' },
    { label: 'Tier 4 — 终极科技', desc: '游戏末期解锁，需要稀有材料和跨岛屿协作生产。产物是游戏中最强大的设备和组件，如飞船引擎核心和高级能源系统。' },
  ];

  return (
    <div className="min-h-screen bg-field-paper bg-paper-texture">
      <header className="pt-12 pb-6 px-4 lg:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col items-start">
          <a href="/" className="font-display text-sm text-moss hover:text-moss-dark transition-colors mb-4">&larr; 返回首页</a>
          <h1 className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-bark leading-none">制作配方大全</h1>
          <p className="font-body text-base text-stone mt-3 max-w-md leading-relaxed italic">从基础工具到飞船引擎核心的完整配方速查表</p>
        </div>
        <div className="field-divider mt-6" />
      </header>

      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="space-y-12">
          <section>
            <h2 className="font-display text-2xl font-bold text-bark">配方概述</h2>
            <p className="font-body text-bark-light leading-relaxed mt-4">
              制作系统是 Solarpunk 的核心玩法之一。游戏中几乎所有物品都需要通过制作来获得，从最基础的石斧到复杂的飞船引擎核心，每个物品都有其特定的制作配方。配方系统按照科技等级（Tier）划分为四个阶段，随着你解锁更高级的研究，可用的制作配方也会逐渐增多。理解制作系统的运作规律，可以帮助你更高效地规划资源采集和基地发展路线。
            </p>
            <p className="font-body text-bark-light leading-relaxed mt-3">
              在 Solarpunk 中，制作需要满足三个条件：拥有对应的配方、备齐所需材料、在正确的工作台进行操作。不同等级的物品需要不同等级的工作台：基础物品可使用手工制作或基础工作台，中级物品需要电子或机械工作台，高级物品则需要专用装配台。本页面收集了游戏中最常用和最重要的配方，按照功能类别和科技等级进行分类，方便玩家快速查找。所有材料数量均为社区估算值，实际游戏中的配方可能因版本更新而有所调整。
            </p>
            <p className="font-body text-bark-light leading-relaxed mt-3">
              每个 Tier 等级之间存在明显的技术和材料跳变。从 Tier 1 到 Tier 2 的跨越主要涉及金属加工和基础电力的引入，此时你需要开始建立跨岛屿的物流来获取铜矿和铁矿。Tier 2 到 Tier 3 则标志着你的基地进入工业化阶段，自动化生产开始取代手动操作。而 Tier 4 则是游戏的终极目标，只有建立了完整的自动化生产链和跨岛屿物流网络，才能稳定生产这些顶级装备。
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-bark mb-6">科技等级说明</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {tiers.map((t, i) => (
                <div key={i} className="journal-card p-5">
                  <h3 className="font-display text-base font-semibold text-bark">{t.label}</h3>
                  <p className="font-body text-sm text-bark-light leading-relaxed mt-2">{t.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-bark mb-6">配方速查表</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-moss/30">
                    <th className="text-left py-3 px-3 font-display font-semibold text-bark">物品名称</th>
                    <th className="text-left py-3 px-3 font-display font-semibold text-bark">所需材料</th>
                    <th className="text-left py-3 px-3 font-display font-semibold text-bark">制作台</th>
                    <th className="text-left py-3 px-3 font-display font-semibold text-bark">解锁条件</th>
                    <th className="text-center py-3 px-3 font-display font-semibold text-bark">等级</th>
                  </tr>
                </thead>
                <tbody className="font-body text-bark-light">
                  {recipes.map((r, i) => (
                    <tr key={i} className="border-b border-clay/30 hover:bg-field-paper-warm/50 transition-colors">
                      <td className="py-3 px-3">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-bark">{r.name}</span>
                          <span className="field-tag stone text-[10px]">{r.category}</span>
                        </div>
                      </td>
                      <td className="py-3 px-3 text-xs">{r.materials}</td>
                      <td className="py-3 px-3 text-xs">{r.station}</td>
                      <td className="py-3 px-3 text-xs">{r.unlock}</td>
                      <td className="py-3 px-3 text-center">
                        <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold ${r.tier <= 2 ? 'bg-moss-light text-moss-dark' : 'bg-terracotta-light text-terracotta-dark'}`}>
                          {r.tier}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="font-body text-xs text-stone mt-4 italic">* 材料数量为社区估算值，实际游戏内数据可能因版本更新有所变动</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-bark mb-6">材料获取指南</h2>
            <p className="font-body text-bark-light leading-relaxed">
              制作配方中涉及的各类材料分布在不同的浮空岛屿上。基础材料如木材、石头和纤维在所有岛屿上均可采集。金属矿物（铁、铜、金等）则主要集中在特定的矿区岛屿，通常需要通过飞船解锁后才能抵达。稀有材料如钛合金和能源核心的需求量虽然不大，但获取难度较高，往往需要多个岛屿之间的协作生产和复杂的加工工序。建议在建立基础基地后，优先完善跨岛屿运输网络，确保材料供应链的稳定运转。更多材料详情请参考资源采集页面。
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-bark mb-6">常见问题</h2>
            <div className="space-y-2">
              <details className="journal-card p-4 group cursor-pointer">
                <summary className="font-display font-semibold text-bark text-sm marker:text-moss">如何解锁更多制作配方？</summary>
                <p className="font-body text-sm text-bark-light leading-relaxed mt-3 pl-3 border-l-2 border-moss/30">
                  制作配方通过研究台进行研究来解锁。建造研究台后，按照科技树逐步研究各项技术即可解锁对应配方。建议优先研究"基础电力"和"基础自动化"，这两条分支会解锁大量中级配方。随着游戏进程推进，你会在更高级的岛屿上发现独特的研究材料，用于解锁高级和终极科技配方。
                </p>
              </details>
              <details className="journal-card p-4 group cursor-pointer">
                <summary className="font-display font-semibold text-bark text-sm marker:text-moss">为什么有些配方显示灰色无法制作？</summary>
                <p className="font-body text-sm text-bark-light leading-relaxed mt-3 pl-3 border-l-2 border-moss/30">
                    可能的原因有三个：尚未解锁对应配方、当前工作台等级不足、或者缺少必要材料。请先确认你已通过研究台解锁了该配方，然后检查你当前使用的工作台是否为配方要求的工作台类型。如果以上条件都满足，请检查材料种类和数量是否齐全。某些高级配方还需要特定的中间产物，如电路板和合金锭。
                </p>
              </details>
              <details className="journal-card p-4 group cursor-pointer">
                <summary className="font-display font-semibold text-bark text-sm marker:text-moss">材料数量不够时可以用替代品吗？</summary>
                <p className="font-body text-sm text-bark-light leading-relaxed mt-3 pl-3 border-l-2 border-moss/30">
                  游戏中的制作配方对材料的要求是固定的，目前不支持使用替代材料。不过，某些高级配方中的中间产物（如铁锭和钢锭）可以通过多种方式获取：手动冶炼、自动化生产线或与其他岛屿进行交易。在资源紧张时，建议优先建立跨岛屿交易系统，用富余资源换取所缺材料，而不是将时间浪费在低效的采集上。
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
