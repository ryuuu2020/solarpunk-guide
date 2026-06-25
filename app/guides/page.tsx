'use client';

export default function GuidesPage() {
  const guides = [
    {
      title: '新手生存完全指南',
      category: '基础生存',
      tagType: 'moss' as const,
      desc: '从登陆浮空岛的第一天到建立自给自足的基地，手把手带你走完 Solarpunk 前 10 小时。本指南涵盖了所有新玩家必须掌握的基础知识：初始资源采集优先级、工具制作顺序、第一晚生存策略、基础能源系统搭建以及如何快速解锁关键科技节点。我们将详细讲解每个阶段的资源分配最优方案，帮助你在最短时间内站稳脚跟。特别适合第一次接触开放世界生存建造类游戏的玩家，内容深入浅出，配合大量实战截图和路线指引，让你从一开始就走在正确的轨道上。',
      readTime: '15',
      difficulty: '入门',
      href: '/beginners',
    },
    {
      title: '飞船建造与自定义教程',
      category: '飞船系统',
      tagType: 'terracotta' as const,
      desc: '详解飞行器建造系统：引擎选择、甲板布局、燃料管理以及如何在云层之上建立移动基地。飞船是 Solarpunk 游戏中最具标志性的系统之一，拥有一艘精心打造的飞船不仅能极大地提升你的探索效率，还能作为一座完全可自定义的移动基地。本教程涵盖从基础飞船修复到终极飞行堡垒的全部内容，包括引擎性能对比、最佳甲板布局方案、仓库与居住区规划技巧、燃料消耗计算与优化策略、武器装备安装指南以及多艘飞船的协同管理方案。无论你是一位休闲探索者还是追求极限效率的硬核玩家，都能从中获得宝贵的建造灵感。',
      readTime: '12',
      difficulty: '进阶',
      href: '/airship',
    },
    {
      title: '全自动生产线搭建指南',
      category: '自动化',
      tagType: 'terracotta' as const,
      desc: '从手动采集到全自动流水线的完整进阶路线。涵盖传送带布局、自动分类系统、工业熔炉阵列、无人机运输网络配置以及多岛屿资源调度策略。自动化是 Solarpunk 后期玩法的核心支柱，一个设计精良的自动化基地可以将你的生产效率提升数十倍，彻底解放双手。本指南以循序渐进的方式带你理解每一种自动化组件的特性和最佳使用场景，通过多个实战案例展示从简单传送带到复杂多岛屿物流网络的演进过程。我们还会分享社区验证的高效布局蓝图，让你可以直接复制到自己的存档中。',
      readTime: '20',
      difficulty: '进阶',
      href: '/automation',
    },
    {
      title: '农耕系统完全解析',
      category: '农耕',
      tagType: 'moss' as const,
      desc: '从第一块耕地的开垦到大型自动化农场的建立，全面解析 Solarpunk 的农耕系统。包括作物种类与生长周期、土壤肥力管理、灌溉系统设计、阳光与温度对作物的影响、肥料制作配方以及自动化收割与分类流水线搭建。农耕是游戏中稳定食物供给和部分工业原料来源的关键系统，理解其深层机制能让你在恶劣环境中也能保持稳定的资源产出。本指南还特别涵盖跨岛屿的物流农场设计理念，教你如何将不同岛屿的气候优势结合起来，实现全年无间断的大规模农业生产。',
      readTime: '18',
      difficulty: '中级',
      href: '/farming',
    },
    {
      title: '能源系统终极指南',
      category: '能源',
      tagType: 'moss' as const,
      desc: '全面剖析 Solarpunk 的各种能源方案：太阳能板阵列优化、风力发电布局、电池储能策略、地热与生物质能等高级能源的解锁与使用。能源是驱动一切自动化设备的前提，没有可靠的能源供应，再好的生产设计也只能停留在纸上。本指南不仅介绍每种能源设备的参数和特性，更重要的是教你如何根据岛屿环境、昼夜循环和季度变化设计弹性的混合能源系统。我们还会讲解能源网络布线技巧、负载平衡策略以及故障转移方案，确保你的基地在任何情况下都不会断电停产。',
      readTime: '15',
      difficulty: '中级',
      href: '/energy',
    },
    {
      title: '全资源采集与分布地图',
      category: '资源',
      tagType: 'terracotta' as const,
      desc: '全岛资源分布一览：木材、石头、铁矿、铜矿、金矿、稀土等各类资源的生成规律和最佳采集地点。附带各岛屿矿物分布热力图和高效采集路线规划。理解资源分布规律可以帮你做出更明智的探索和基地选址决策。本指南收录了游戏中所有已知的资源类型，包括基础建材、金属矿物、稀有元素和生物质资源，并逐一说明其用途、采集工具要求和替代获取方式。我们还会分享社区积累的"资源传送带"设计理念，教你如何建立高效的跨岛屿资源运输网络。',
      readTime: '14',
      difficulty: '入门',
      href: '/resources',
    },
    {
      title: '世界地图与生物群系探索指南',
      category: '探索',
      tagType: 'moss' as const,
      desc: '完整的浮空岛世界地图，包含已知的所有岛屿坐标、生物群系类型、特殊资源点以及隐藏区域的探索攻略。了解每个岛屿的气候特征、昼夜长度、危险等级以及可解锁的独特技术。不同生物群系之间存在显著的环境差异，这些差异直接影响你的生存策略和基地建设方案。本指南就像一本真正的野外日志，记录了先行者们探索每个区域时发现的重要信息，帮助你提前做好充分准备，减少探索过程中的意外和损失。',
      readTime: '10',
      difficulty: '入门',
      href: '/map',
    },
    {
      title: '30条生存技巧合集',
      category: '技巧',
      tagType: 'moss' as const,
      desc: '汇集社区资深玩家总结的30条实用生存技巧，涵盖资源管理、基地防御、天气应对、效率优化等方方面面。每一条技巧都经过了实际验证，有些是小技巧能显著提升游戏体验，有些则是你可能玩了几十小时后才发现的高阶操作。从最基础的热键操作到复杂的自动化逻辑调试，从食物保鲜妙招到极端天气求生策略，这份合集是每一位 Solarpunk 玩家都值得收藏的参考手册。',
      readTime: '8',
      difficulty: '全等级',
      href: '/tips',
    },
  ];

  return (
    <div className="min-h-screen bg-field-paper bg-paper-texture">
      <header className="pt-12 pb-6 px-4 lg:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col items-start">
          <a href="/" className="font-display text-sm text-moss hover:text-moss-dark transition-colors mb-4">&larr; 返回首页</a>
          <h1 className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-bark leading-none">建造指南</h1>
          <p className="font-body text-base text-stone mt-3 max-w-md leading-relaxed italic">从基础生存到高级建造的完整攻略合集</p>
        </div>
        <div className="field-divider mt-6" />
      </header>

      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="flex-1 lg:max-w-[65%] space-y-12">
            <section>
              <h2 className="font-display text-2xl font-bold text-bark">攻略总览</h2>
              <p className="font-body text-bark-light leading-relaxed mt-4">
                欢迎来到 Solarpunk 攻略总览页面。我们按照游戏的核心系统对攻略进行了分类整理，无论你是刚踏上浮空岛的新手，还是追求极限效率的老玩家，都能在这里找到所需的内容。每篇攻略都由经验丰富的社区玩家编写和审校，内容经过多次版本更新验证，确保信息的准确性和实用性。以下是当前收录的所有攻略条目，点击即可查看完整内容。
              </p>
              <p className="font-body text-bark-light leading-relaxed mt-3">
                Solarpunk 作为一款开放世界生存建造游戏，其核心玩法涉及多个相互关联的系统：你需要采集资源来建造设施，建造设施来解锁更高级的科技，而科技的进步又会解锁新的资源采集方式。这种环环相扣的机制使得系统性地学习游戏攻略变得尤为重要。本页面将帮助你根据自己的当前进度和兴趣方向，快速定位到最有价值的攻略内容。
              </p>
              <p className="font-body text-bark-light leading-relaxed mt-3">
                我们建议新玩家按照以下顺序阅读攻略：先从新手生存完全指南开始，了解游戏的基本操作和初期目标；然后阅读能源系统指南，确保你的基地有稳定的电力供应；接着学习农耕系统，建立可持续的食物来源；再逐步深入到自动化和飞船系统。对于有一定经验的玩家，可以直接跳转到自己感兴趣的主题。所有攻略中的数值数据均来自社区估算和实际测试，可能随着游戏版本更新而调整，请以游戏内实际数据为准。
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-bark mb-6">全部攻略条目</h2>
              <div className="space-y-4">
                {guides.map((guide, i) => (
                  <a key={i} href={guide.href} className="journal-card block p-6 group">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2 flex-wrap">
                          <span className={`field-tag ${guide.tagType}`}>{guide.category}</span>
                          <span className="font-body text-xs text-stone">{guide.difficulty}</span>
                        </div>
                        <h3 className="font-display text-lg font-semibold text-bark group-hover:text-moss transition-colors duration-200">
                          {guide.title}
                        </h3>
                        <p className="font-body text-sm text-bark-light leading-relaxed mt-2">
                          {guide.desc}
                        </p>
                      </div>
                      <span className="font-body text-xs text-stone whitespace-nowrap">{guide.readTime} 分钟阅读</span>
                    </div>
                  </a>
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-bark mb-6">常见问题</h2>
              <div className="space-y-2">
                <details className="journal-card p-4 group cursor-pointer">
                  <summary className="font-display font-semibold text-bark text-sm marker:text-moss">新手应该从哪篇攻略开始看？</summary>
                  <p className="font-body text-sm text-bark-light leading-relaxed mt-3 pl-3 border-l-2 border-moss/30">
                    建议从"新手生存完全指南"开始。这篇攻略专为零基础玩家设计，涵盖了从登陆浮空岛到建立第一个稳定基地的完整流程。配合游戏内置的生存手册系统，你可以在一到两个游戏日内掌握所有基础操作。完成新手指南后，推荐阅读"能源系统终极指南"，因为稳定的能源供应是所有后续系统运转的前提条件。
                  </p>
                </details>
                <details className="journal-card p-4 group cursor-pointer">
                  <summary className="font-display font-semibold text-bark text-sm marker:text-moss">攻略中的数值数据准确吗？</summary>
                  <p className="font-body text-sm text-bark-light leading-relaxed mt-3 pl-3 border-l-2 border-moss/30">
                    所有数值数据均来自社区玩家的实际测试和估算，在发布时已与最新游戏版本进行核对。但需要说明的是，Solarpunk 仍在持续更新中，某些参数可能在版本变动后发生调整。我们会在每次重大更新后重新验证攻略数据，但难免存在一定的滞后。如果你发现某处数据与游戏内实际表现不符，欢迎通过爱发电平台联系我们反馈。
                  </p>
                </details>
                <details className="journal-card p-4 group cursor-pointer">
                  <summary className="font-display font-semibold text-bark text-sm marker:text-moss">攻略内容会定期更新吗？</summary>
                  <p className="font-body text-sm text-bark-light leading-relaxed mt-3 pl-3 border-l-2 border-moss/30">
                    会。我们密切关注 Solarpunk 的官方更新公告和社区反馈，在每次游戏内容更新后会优先更新受影响最大的攻略条目。通常完整更新周期约为一到两周。新内容的攻略（如新增生物群系或系统）会在社区充分探索后编写发布。你可以在首页的"最新动态"栏目或新闻页面查看最近的攻略更新状态。
                  </p>
                </details>
              </div>
            </section>
          </div>

          <aside className="lg:w-[30%] space-y-10 shrink-0">
            <div className="field-sidebar-block">
              <h3 className="font-display text-base font-semibold text-bark mb-4">按难度筛选</h3>
              <div className="space-y-2 font-body text-sm">
                <a href="/beginners" className="block text-moss hover:text-moss-dark transition-colors">入门级 &mdash; 零基础友好</a>
                <a href="/farming" className="block text-moss hover:text-moss-dark transition-colors">中级 &mdash; 需要基础理解</a>
                <a href="/automation" className="block text-moss hover:text-moss-dark transition-colors">进阶 &mdash; 核心玩家进阶</a>
              </div>
            </div>
            <div className="field-sidebar-block">
              <h3 className="font-display text-base font-semibold text-bark mb-4">快速导航</h3>
              <div className="space-y-2 font-body text-sm text-bark-light">
                <p className="font-semibold text-bark">基础系统</p>
                <p>能源系统 / 农耕系统 / 资源采集</p>
                <p className="font-semibold text-bark mt-3">进阶系统</p>
                <p>自动化 / 飞船建造 / 高级建造</p>
                <p className="font-semibold text-bark mt-3">参考工具</p>
                <p>制作配方 / 技巧合集 / 地图探索</p>
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
