'use client';

export default function AutomationPage() {
  const components = [
    { name: '传送带', tier: 'T2', desc: '自动化系统的基础组件，用于在两个节点之间运输物品。直线布局效率最高，转弯和交叉会降低传输速度并增加能耗。', key: '基础自动化研究' },
    { name: '分拣器', tier: 'T2', desc: '从传送带上按类型分离物品，是自动分类系统的核心。可以配置复杂的过滤规则，实现多级分类。', key: '基础自动化研究' },
    { name: '合并器', tier: 'T2', desc: '将多条传送带汇集到一条主线上。用于整合不同来源的产物到统一的生产线或仓库。', key: '基础自动化研究' },
    { name: '工业熔炉', tier: 'T3', desc: '自动化版本的熔炉，支持从传送带自动输入原料和输出成品。生产效率比手动熔炉高约 40%。（社区估算）', key: '工业冶炼研究' },
    { name: '自动工作台', tier: 'T3', desc: '可编程的自动化生产设备，设定配方后自动从相连的传送带获取材料并产出成品。', key: '高级自动化研究' },
    { name: '无人机基站', tier: 'T3', desc: '指挥无人机进行物品运输，覆盖范围广且不受地形影响，适合跨岛屿的长距离物流。', key: '无人机技术研究' },
    { name: '智能控制器', tier: 'T4', desc: '自动化系统的中央控制单元，可连接多个设备设定全局生产策略，是构建大型自动化工厂的必备组件。', key: '智能系统研究' },
  ];

  return (
    <div className="min-h-screen bg-field-paper bg-paper-texture">
      <header className="pt-12 pb-6 px-4 lg:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col items-start">
          <a href="/" className="font-display text-sm text-moss hover:text-moss-dark transition-colors mb-4">&larr; 返回首页</a>
          <h1 className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-bark leading-none">自动化系统指南</h1>
          <p className="font-body text-base text-stone mt-3 max-w-md leading-relaxed italic">从手动采集到全自动流水线的完整进阶路线</p>
        </div>
        <div className="field-divider mt-6" />
      </header>

      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="flex-1 lg:max-w-[65%] space-y-12">
            <section>
              <h2 className="font-display text-2xl font-bold text-bark">自动化系统概述</h2>
              <p className="font-body text-bark-light leading-relaxed mt-4">
                自动化是 Solarpunk 中后期玩法的核心支柱。在游戏初期，你需要手动完成所有的资源采集、加工和物品制作。但随着基地规模的扩大和生产需求的增长，手动操作会变得极其低效且占用大量时间。自动化系统让你能够将重复性的生产任务交给机器完成，从而将注意力集中在探索、建造和高级策略规划上。一个设计精良的自动化基地可以将你的整体生产效率提升数倍到数十倍。
              </p>
              <p className="font-body text-bark-light leading-relaxed mt-3">
                自动化系统的演进路径大致可以分为三个阶段。第一阶段是"点对点连接"——用传送带将单个采矿机连接到单个熔炉，实现最基础的自动化采集与加工。第二阶段是"生产流水线"——将多个加工设备通过传送带串联起来，形成从原料到成品的完整生产链。第三阶段是"智能工厂"——使用智能控制器、无人机网络和中央调度系统，实现跨岛屿、跨生产链的全自动化生产和物资调配。每个阶段的跃迁都需要解锁相应的研究科技，同时投入大量资源来建设基础设施。
              </p>
              <p className="font-body text-bark-light leading-relaxed mt-3">
                在规划自动化系统时，最重要的原则是"模块化"和"可扩展"。不要一次性铺开过于宏大的自动化蓝图——你很可能在中途发现设计缺陷需要全部推倒重来。相反，从一个可工作的最小自动化单元开始（例如简单的采矿→冶炼→仓储流水线），验证其运转良好后再逐步扩展和优化。预留足够的空间供未来的扩展也是一个重要的设计习惯。传送带、分拣器和加工设备都需要足够的空间来布局和调整，拥挤的设计不仅难以维护，也缺乏灵活性来应对生产需求的变化。
              </p>
              <p className="font-body text-bark-light leading-relaxed mt-3">
                能源是自动化系统的血液。所有自动化设备都需要电力来运转，而且越高级的设备功耗越大。一条中型自动化流水线（包含 15-20 个设备单元）的电力消耗大约在 150-200 单位/小时（社区估算）。在启动自动化建设之前，务必确认你的能源系统有充足的发电能力和储能容量来支撑额外的负载。否则，你可能会发现精心搭建的自动化工厂在夜间或阴天时完全停摆，造成资源和时间的浪费。
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-bark mb-6">自动化组件一览</h2>
              <div className="space-y-3">
                {components.map((c, i) => (
                  <div key={i} className="journal-card p-5">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-display text-base font-semibold text-bark">{c.name}</h3>
                      <span className={`field-tag ${c.tier === 'T2' ? 'moss' : c.tier === 'T3' ? 'terracotta' : 'stone'} text-[10px]`}>{c.tier}</span>
                    </div>
                    <p className="font-body text-sm text-bark-light leading-relaxed">{c.desc}</p>
                    <p className="font-body text-xs text-stone mt-1">解锁条件：{c.key}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-bark mb-6">典型布局示例</h2>
              <p className="font-body text-bark-light leading-relaxed">
                最简单的入门布局是"采矿机 → 传送带 → 熔炉 → 传送带 → 储物箱"。采矿机自动采集矿石，传送带将矿石运送到熔炉进行冶炼，冶炼后的金属锭再由传送带运入储物箱。根据你的需求，你可以在这个基本模板上不断扩展：在熔炉后添加自动工作台进行加工、在传送带之间加入分拣器进行物品分类、或者使用合并器将多个采矿机的产出汇集到一条主传送带。更多详细的布局蓝图请参考社区频道的攻略资源，那里有经过玩家验证的高效设计方案。
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-bark mb-6">常见问题</h2>
              <div className="space-y-2">
                <details className="journal-card p-4 group cursor-pointer">
                  <summary className="font-display font-semibold text-bark text-sm marker:text-moss">传送带上的物品突然不移动了怎么办？</summary>
                  <p className="font-body text-sm text-bark-light leading-relaxed mt-3 pl-3 border-l-2 border-moss/30">
                    检查以下三个常见原因：目标设备已满（如储物箱装满、熔炉输出口堆积）、传送带方向设置错误（物品在反向传输）、或者供能不足导致设备暂停运转。先清空目标设备的输出缓冲区，再确认传送带的所有段落方向正确，最后检查电力供应是否充足。在大规模的自动化系统中，定期巡视检查全部传送带的状态是一个必要的维护习惯。
                  </p>
                </details>
                <details className="journal-card p-4 group cursor-pointer">
                  <summary className="font-display font-semibold text-bark text-sm marker:text-moss">自动化系统应该先用传送带还是无人机？</summary>
                  <p className="font-body text-sm text-bark-light leading-relaxed mt-3 pl-3 border-l-2 border-moss/30">
                    先用传送带。传送带在短距离和高频运输场景下效率最高，且制作和维护成本远低于无人机系统。无人机更适合跨越复杂地形或岛屿之间的长距离运输，以及应对需要灵活调整运输路线的场景。建议的演进顺序是：先用传送带建立岛内基础自动化，再用无人机网络将多个岛屿的自动化系统连接起来，形成一个全局的物流网络。
                  </p>
                </details>
                <details className="journal-card p-4 group cursor-pointer">
                  <summary className="font-display font-semibold text-bark text-sm marker:text-moss">如何避免自动化系统出现生产瓶颈？</summary>
                  <p className="font-body text-sm text-bark-light leading-relaxed mt-3 pl-3 border-l-2 border-moss/30">
                    定期检查生产链中每个环节的实际产出和消耗数据。如果在某个设备前出现了物品堆积，说明该设备的下游产能不足；如果某设备频繁闲置等待原料，说明其上游产能不够。通过调整设备的数量和加工速度参数来平衡每个环节的产能。新玩家常见的错误是：只加生产设备而忽视运输和仓储容量，导致整条流水线的效率下降。注意整个自动化链条必须均衡配置才能发挥最大潜力。
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
                <a href="/farming" className="block text-moss hover:text-moss-dark transition-colors">农耕系统指南</a>
                <a href="/crafting" className="block text-moss hover:text-moss-dark transition-colors">制作配方大全</a>
              </div>
            </div>
            <div className="field-sidebar-block">
              <h3 className="font-display text-base font-semibold text-bark mb-4">设计原则</h3>
              <div className="space-y-1 font-body text-xs text-bark-light leading-relaxed">
                <p>模块化 — 独立单元可复用</p>
                <p>可扩展 — 预留扩展空间</p>
                <p>易维护 — 清晰标识和走线</p>
                <p>冗余设计 — 关键节点双线</p>
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
