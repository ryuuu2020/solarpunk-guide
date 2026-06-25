import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solarpunk 建造指南 — 基地建造与自动化布局完全攻略',
  description: 'Solarpunk 建造系统完全指南：建筑类型、材料等级、自动化传送带布局、无人机网络、最佳基地设计。打造高效浮岛工厂。',
};

export default function BuildingPage() {
  return (
    <div className="min-h-screen bg-field-paper bg-paper-texture">
      <header className="pt-12 pb-6 px-4 lg:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col items-start">
          <a href="/" className="font-display text-sm text-moss hover:text-moss-dark transition-colors mb-4">&larr; 返回首页</a>
          <h1 className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-bark leading-none">
            建造指南
          </h1>
          <p className="font-body text-base text-stone mt-3 max-w-md leading-relaxed italic">
            从木屋到全自动工厂 —— Solarpunk 建造系统深度解析
          </p>
        </div>
        <div className="field-divider mt-6" />
      </header>

      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="flex-1 lg:max-w-[65%] space-y-16">

            {/* Building Materials */}
            <section>
              <h2 className="font-display text-3xl font-bold text-bark">建筑材料等级</h2>
              <div className="space-y-4 mt-6">
                <p className="font-body text-bark-light leading-relaxed">
                  Solarpunk 的建筑系统分三个材料等级，每个等级提供更好的耐久度和美观度加成。
                </p>
                <div className="overflow-x-auto mt-4">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="border-b-2 border-moss/30">
                        <th className="text-left py-3 px-4 font-display font-semibold text-bark">等级</th>
                        <th className="text-left py-3 px-4 font-display font-semibold text-bark">材料</th>
                        <th className="text-left py-3 px-4 font-display font-semibold text-bark">耐久度</th>
                        <th className="text-left py-3 px-4 font-display font-semibold text-bark">美观加成</th>
                        <th className="text-left py-3 px-4 font-display font-semibold text-bark">解锁条件</th>
                      </tr>
                    </thead>
                    <tbody className="font-body text-bark-light">
                      <tr className="border-b border-clay/30">
                        <td className="py-3 px-4"><span className="field-tag moss text-[10px]">T1</span></td>
                        <td className="py-3 px-4">木材</td>
                        <td className="py-3 px-4">100 HP</td>
                        <td className="py-3 px-4">+0</td>
                        <td className="py-3 px-4">初始解锁</td>
                      </tr>
                      <tr className="border-b border-clay/30">
                        <td className="py-3 px-4"><span className="field-tag terracotta text-[10px]">T2</span></td>
                        <td className="py-3 px-4">石材</td>
                        <td className="py-3 px-4">250 HP</td>
                        <td className="py-3 px-4">+1/每块</td>
                        <td className="py-3 px-4">L2岛屿石矿采集</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4"><span className="field-tag stone text-[10px]">T3</span></td>
                        <td className="py-3 px-4">钢材</td>
                        <td className="py-3 px-4">500 HP</td>
                        <td className="py-3 px-4">+2/每块</td>
                        <td className="py-3 px-4">L3岛屿钴矿解锁</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Automation Layout */}
            <section>
              <h2 className="font-display text-3xl font-bold text-bark">自动化传送带布局</h2>
              <div className="space-y-4 mt-6">
                <p className="font-body text-bark-light leading-relaxed">
                  自动化是 Solarpunk 最核心的进阶玩法。合理的传送带布局可以将生产效率提升5-10倍。
                </p>

                <h3 className="font-display text-xl font-semibold text-bark mt-8">基础布局模式</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <div className="journal-card p-5">
                    <h4 className="font-display font-semibold text-bark text-sm">总线模式（推荐新手）</h4>
                    <p className="font-body text-xs text-bark-light mt-2">
                      一条主传送带贯穿工厂，各生产线从总线分支接入。优点是结构清晰、易于扩展，适合初期到中期。
                    </p>
                    <ul className="font-body text-xs text-bark-light mt-2 space-y-1 list-disc list-inside">
                      <li>主总线：铜锭 + 铁锭 + 木材</li>
                      <li>分支线：每条分支负责一个产品</li>
                      <li>适配规模：5-15个工作台</li>
                    </ul>
                  </div>
                  <div className="journal-card p-5">
                    <h4 className="font-display font-semibold text-bark text-sm">模块化模式（进阶）</h4>
                    <p className="font-body text-xs text-bark-light mt-2">
                      每个产品独立成模块，模块间用无人机连接。优点是高度可扩展、调试方便，适合后期大规模生产。
                    </p>
                    <ul className="font-body text-xs text-bark-light mt-2 space-y-1 list-disc list-inside">
                      <li>模块间用无人机运输</li>
                      <li>每个模块自给自足</li>
                      <li>适配规模：15+工作台</li>
                    </ul>
                  </div>
                </div>

                <h3 className="font-display text-xl font-semibold text-bark mt-8">智能分类器设置</h3>
                <p className="font-body text-bark-light leading-relaxed mt-4">
                  智能分类器是自动化系统的核心组件。将其放置在传送带交叉点，设置筛选规则，可以实现自动分拣不同资源到对应仓库。
                </p>
                <div className="journal-card p-4 mt-4">
                  <h4 className="font-display font-semibold text-bark text-sm">推荐分类规则</h4>
                  <ul className="font-body text-sm text-bark-light mt-2 space-y-1 list-disc list-inside">
                    <li>分类器1：铜矿 → 熔炉线 / 其他 → 继续前进</li>
                    <li>分类器2：铁矿 → 熔炉线 / 其他 → 继续前进</li>
                    <li>分类器3：成品 → 仓库 / 原料 → 回流总线</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Drone System */}
            <section>
              <h2 className="font-display text-3xl font-bold text-bark">无人机运输网络</h2>
              <div className="space-y-4 mt-6">
                <p className="font-body text-bark-light leading-relaxed">
                  无人机是后期最强大的物流工具。每架无人机可以携带5个物品在岛屿间飞行，彻底解决传送带无法跨越的远距离运输问题。
                </p>
                <div className="overflow-x-auto mt-4">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="border-b-2 border-moss/30">
                        <th className="text-left py-3 px-4 font-display font-semibold text-bark">无人机等级</th>
                        <th className="text-left py-3 px-4 font-display font-semibold text-bark">运载量</th>
                        <th className="text-left py-3 px-4 font-display font-semibold text-bark">飞行范围</th>
                        <th className="text-left py-3 px-4 font-display font-semibold text-bark">能耗</th>
                      </tr>
                    </thead>
                    <tbody className="font-body text-bark-light">
                      <tr className="border-b border-clay/30">
                        <td className="py-3 px-4">基础无人机</td>
                        <td className="py-3 px-4">5个物品</td>
                        <td className="py-3 px-4">同一岛屿</td>
                        <td className="py-3 px-4">3单位/次</td>
                      </tr>
                      <tr className="border-b border-clay/30">
                        <td className="py-3 px-4">高级无人机</td>
                        <td className="py-3 px-4">10个物品</td>
                        <td className="py-3 px-4">相邻岛屿</td>
                        <td className="py-3 px-4">5单位/次</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">货运无人机</td>
                        <td className="py-3 px-4">20个物品</td>
                        <td className="py-3 px-4">任意岛屿</td>
                        <td className="py-3 px-4">8单位/次</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="font-display text-3xl font-bold text-bark">常见问题</h2>
              <div className="space-y-2 mt-6">
                {[
                  { q: '传送带上的物品卡住了怎么办？', a: '检查传送带方向是否正确，智能分类器是否有匹配的筛选规则。如果物品到达传送带末端无处可去，它会一直停留在末端。确保每个传送带末端都连接了仓库或工作台。' },
                  { q: '无人机为什么不工作？', a: '检查无人机基站是否有电力供应，目标位置是否在无人机飞行范围内。基础无人机只能在同一岛屿内飞行。' },
                  { q: '建筑美观度有什么用？', a: '美观度影响居民的幸福度和工作效率。高美观度的基地能提升工作台产出速度10-20%。' },
                ].map((faq, i) => (
                  <details key={i} className="journal-card p-4 cursor-pointer">
                    <summary className="font-display font-semibold text-bark text-sm marker:text-moss">{faq.q}</summary>
                    <p className="font-body text-sm text-bark-light leading-relaxed mt-3 pl-1 border-l-2 border-moss/30 pl-3">{faq.a}</p>
                  </details>
                ))}
              </div>
            </section>

          </div>

          <aside className="lg:w-[30%] space-y-10 shrink-0">
            <div className="field-sidebar-block">
              <h3 className="font-display text-base font-semibold text-bark mb-4">快速导航</h3>
              <div className="space-y-2 font-body text-sm">
                <a href="#materials" className="block text-bark-light hover:text-bark transition-colors">建筑材料</a>
                <a href="#automation" className="block text-bark-light hover:text-bark transition-colors">传送带布局</a>
                <a href="#drones" className="block text-bark-light hover:text-bark transition-colors">无人机系统</a>
                <a href="#faq" className="block text-bark-light hover:text-bark transition-colors">常见问题</a>
              </div>
            </div>
          </aside>
        </div>
        <div className="field-divider mt-16" />
      </main>

      <footer className="max-w-6xl mx-auto px-4 lg:px-8 py-10 text-center">
        <p className="font-body text-xs text-stone">
          &copy; {new Date().getFullYear()} Solarpunk 生存指南 · <a href="/" className="hover:text-bark transition-colors">返回首页</a>
        </p>
      </footer>
    </div>
  );
}
