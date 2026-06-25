'use client';

export default function AirshipPage() {
  const engines = [
    { name: '基础引擎', tier: 'T1', thrust: '基础', fuel: '低', desc: '初始飞船自带的引擎，推力有限，仅能往返初始岛屿和 L2 草原群岛。适合新手在初期探索邻近岛屿。' },
    { name: '中级引擎', tier: 'T2', thrust: '中等', fuel: '中等', desc: '升级后的引擎，解锁 L3 级别岛屿的航行能力。燃油效率有所提升，是中期探索的主力配置。' },
    { name: '重型引擎', tier: 'T3', thrust: '高', fuel: '高', desc: '强大的推力允许更大的载重量，适合用于物流运输飞船。油耗较高，建议搭配大型燃料仓。' },
    { name: '终极引擎', tier: 'T4', thrust: '极高', fuel: '极高', desc: '游戏中最强力的引擎，解锁所有浮空岛区域的航行能力。可以支持巨型飞船满载运行。' },
  ];

  return (
    <div className="min-h-screen bg-field-paper bg-paper-texture">
      <header className="pt-12 pb-6 px-4 lg:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col items-start">
          <a href="/" className="font-display text-sm text-moss hover:text-moss-dark transition-colors mb-4">&larr; 返回首页</a>
          <h1 className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-bark leading-none">飞船系统详解</h1>
          <p className="font-body text-base text-stone mt-3 max-w-md leading-relaxed italic">引擎选择、甲板布局与云层之上的移动基地建造</p>
        </div>
        <div className="field-divider mt-6" />
      </header>

      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="flex-1 lg:max-w-[65%] space-y-12">
            <section>
              <h2 className="font-display text-2xl font-bold text-bark">飞船系统概述</h2>
              <p className="font-body text-bark-light leading-relaxed mt-4">
                飞船是 Solarpunk 中最具标志性的系统，它既是你在浮空岛之间穿梭的交通工具，也可以被打造为一座完全自定义的移动基地。从最初修复的残破飞船到后期的飞行堡垒，飞船系统的发展几乎贯穿了游戏的整个进程。每一次引擎升级都会解锁新的岛屿区域，而每一次甲板扩展都会给你带来更多的自定义空间和功能性提升。
              </p>
              <p className="font-body text-bark-light leading-relaxed mt-3">
                飞船系统可以分为三个核心部分：引擎系统决定你能飞多远和载重多少、甲板布局决定飞船的实际功能和居住舒适度、燃油管理则影响飞行的经济性和可持续性。这三个部分相互制约又相辅相成——更强大的引擎允许更大的甲板和更重的载荷，但同时也需要更多的燃油和更大容量的燃料仓。在飞船设计中找到推力、载重和航程之间的平衡点，是每一位飞船设计师需要持续优化的工作。
              </p>
              <p className="font-body text-bark-light leading-relaxed mt-3">
                飞船不仅仅是一个交通工具。在甲板上，你可以放置工作台、储物箱、研究台、种植区和能源设备，将其打造为一座完全自给自足的移动基地。这种"飞行基地"的理念在后期探索中尤为重要——当你需要前往远离主基地的高危岛屿时，飞船上的设施可以保障你的基本生存和生产需求。许多老玩家会选择建造两艘不同用途的飞船：一艘轻量化探索舰用于快速侦察和短途航行，一艘重型移动基地用于长途远征和岛屿开发。
              </p>
              <p className="font-body text-bark-light leading-relaxed mt-3">
                燃料管理是飞船运营中不可忽视的成本因素。每次航行都会消耗一定量的燃料，燃料消耗量与飞行距离、引擎类型和当前载重量成正比。建立一个稳定的燃料生产和补给系统（通常涉及生物质能炼油或跨岛屿资源采购）是长期运营多艘飞船的必要条件。在远航前务必确认燃料储量充足并携带一定量的储备燃料——在云层之中油尽停船是 Solarpunk 中最糟糕的经历之一。
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-bark mb-6">引擎类型对比</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b-2 border-moss/30">
                      <th className="text-left py-3 px-3 font-display font-semibold text-bark">引擎</th>
                      <th className="text-left py-3 px-3 font-display font-semibold text-bark">等级</th>
                      <th className="text-left py-3 px-3 font-display font-semibold text-bark">推力</th>
                      <th className="text-left py-3 px-3 font-display font-semibold text-bark">油耗</th>
                      <th className="text-left py-3 px-3 font-display font-semibold text-bark">说明</th>
                    </tr>
                  </thead>
                  <tbody className="font-body text-bark-light">
                    {engines.map((e, i) => (
                      <tr key={i} className="border-b border-clay/30">
                        <td className="py-3 px-3 font-semibold text-bark">{e.name}</td>
                        <td className="py-3 px-3">{e.tier}</td>
                        <td className="py-3 px-3">{e.thrust}</td>
                        <td className="py-3 px-3">{e.fuel}</td>
                        <td className="py-3 px-3 text-xs">{e.desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="font-body text-xs text-stone mt-4 italic">* 油耗和推力数据为社区估算值，具体取决于实际载重和航行距离。</p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-bark mb-6">甲板布局建议</h2>
              <p className="font-body text-bark-light leading-relaxed">
                典型的探索用小型飞船甲板布局：引擎舱（尾部）→ 驾驶舱（前部）→ 储物区（中部）→ 小型居住区（中部侧翼）。燃料仓应尽量紧邻引擎以减少管路损耗。在甲板上预留一个紧急逃生舱的位置——虽然占用空间，但在遭遇极端风暴或引擎故障时可以保住你的核心物资和科技进度。大型移动基地的布局则更加复杂，需要专门的能源舱、生产车间、仓储区以及足够的生活空间来支持长时间的自给航行。
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-bark mb-6">常见问题</h2>
              <div className="space-y-2">
                <details className="journal-card p-4 group cursor-pointer">
                  <summary className="font-display font-semibold text-bark text-sm marker:text-moss">飞船修复需要什么材料？</summary>
                  <p className="font-body text-sm text-bark-light leading-relaxed mt-3 pl-3 border-l-2 border-moss/30">
                    初始飞船修复需要制作修理套件（铁锭 x5 + 木材 x8 + 布料 x2）并在飞船码头使用。铁锭通过熔炉冶炼铁矿获得，布料通过加工纤维或纤维作物获取。修复飞船后还需要解锁基础航行技术研究，并在码头使用一次"测试飞行"功能来完成初次飞行的校准。整个过程大约需要小型基地的完整能源和材料支持。
                  </p>
                </details>
                <details className="journal-card p-4 group cursor-pointer">
                  <summary className="font-display font-semibold text-bark text-sm marker:text-moss">我应该造几艘飞船？</summary>
                  <p className="font-body text-sm text-bark-light leading-relaxed mt-3 pl-3 border-l-2 border-moss/30">
                    取决于你的游戏阶段和目标。早期建议集中资源打造一艘通用型飞船，满足基础的岛屿解锁和资源运输需求。中期可以增加一艘专用的物流飞船，专门在已解锁的岛屿之间进行定期物资运输。后期可以在多个岛屿维持一支小型飞船编队，每艘承担不同的角色：探索舰、运输舰、移动基地舰和战斗舰。但要注意每艘新增飞船都会增加燃料消耗和维护成本。
                  </p>
                </details>
                <details className="journal-card p-4 group cursor-pointer">
                  <summary className="font-display font-semibold text-bark text-sm marker:text-moss">飞船能用来战斗吗？</summary>
                  <p className="font-body text-sm text-bark-light leading-relaxed mt-3 pl-3 border-l-2 border-moss/30">
                    目前版本的 Solarpunk 没有专门的飞船战斗系统。飞船主要用于探索、运输和作为移动基地。不过，你可以在甲板上安装防御性设备来应对环境危害——如风暴防护罩用于极端天气、加固装甲用于高速碰撞保护。未来的版本更新中可能会引入更丰富的飞船交互玩法。社区中也有关于潜在空中战斗系统的讨论和期待。
                  </p>
                </details>
              </div>
            </section>
          </div>

          <aside className="lg:w-[30%] space-y-10 shrink-0">
            <div className="field-sidebar-block">
              <h3 className="font-display text-base font-semibold text-bark mb-4">相关攻略</h3>
              <div className="space-y-2 font-body text-sm">
                <a href="/energy" className="block text-moss hover:text-moss-dark transition-colors">能源系统指南</a>
                <a href="/map" className="block text-moss hover:text-moss-dark transition-colors">世界地图</a>
                <a href="/automation" className="block text-moss hover:text-moss-dark transition-colors">自动化系统指南</a>
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
