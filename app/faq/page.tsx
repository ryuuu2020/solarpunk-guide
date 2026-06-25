'use client';

export default function FaqPage() {
  const faqs = [
    { q: 'Solarpunk 是什么游戏？', a: 'Solarpunk 是一款开放世界生存建造游戏，背景设定在漂浮于云端的岛屿之上。玩家需要采集资源、建造基地、研究科技、修复飞船并探索更广阔的天空世界。游戏融合了生存管理、自动化生产和沙盒建造等多种玩法元素，既可以单人游玩，也支持与朋友联机合作。游戏的核心魅力在于从零开始建造属于自己浮空家园的成就感和自由创造空间。' },
    { q: '游戏支持中文吗？', a: 'Solarpunk 官方支持简体中文和繁体中文界面与字幕。游戏内文本的翻译质量良好，绝大多数内容都已经过本地化处理。我们的攻略站也提供完整的中文版本，内容由社区志愿者翻译和编写，方便中文玩家查阅。' },
    { q: '新手第一件该做什么？', a: '立即收集 2 个木材制作生存手册。生存手册解锁配方浏览器、追踪游戏进程，是游戏中最重要的物品。之后建议按以下顺序推进：制作石斧和石镐 → 收集基础资源 → 搭建 3x3 小屋 → 放置工作台和篝火 → 制作床铺→ 建造研究台并优先研究基础电力和基础农耕。按这个顺序走，第一天就能建立起稳定的生存基础。' },
    { q: '如何获得铜矿？', a: '初始岛屿的铜矿资源非常稀少。优先修复飞船前往 L2 级别的草原浮岛群，那里的铜矿储量最为丰富。采集铜矿后使用熔炉将其冶炼为铜锭，铜锭是制作电子元件和电力设备的基础材料。如果暂时无法前往 L2 岛屿，也可以尝试与交易机器人进行交换，但效率远低于直接采集。' },
    { q: '太阳能板如何工作？', a: '太阳能板在白天产出电力（约 15 单位/小时，取决于日照强度和岛屿纬度），夜晚则完全停止发电。因此必须搭配电池系统储存白天的多余电力供夜间使用。推荐的入门能源配置为：2 块太阳能板 + 1 台风力发电机 + 2 组电池。这套配置可以在绝大多数温带岛屿上实现全天候稳定供电。' },
    { q: '如何修复飞船？', a: '前往岛上最高处寻找坠毁的飞船部件。收集足够材料后，在基础工作台制作飞船修理套件（铁锭 x5 + 木材 x8 + 布料 x2）。然后建造飞船码头，在码头界面选择修复飞船。注意修复过程需要消耗一定电力，请确保基地有足够的能源储备。修复完成后，你将解锁前往 L2 岛屿的航行能力。' },
    { q: '游戏有联机模式吗？', a: 'Solarpunk 支持多人联机合作模式。你可以邀请好友加入你的世界一起建造和探索，也可以加入其他玩家的存档。联机模式下，资源、基地和科技进度是共享的，这为团队协作提供了丰富的可能性。每个玩家可以在联机世界中承担不同的职责，如一人负责农耕、另一人负责探索和资源采集。' },
    { q: '有哪些能源获取方式？', a: '游戏中主要的能源获取方式包括：太阳能板（白天发电）、风力发电机（全天发电但效率不稳定）、电池储能系统、以及中期解锁的地热发电机和生物质能发电。不同的能源各有优劣，最佳方案是建立混合能源系统，根据每个岛屿的气候特征灵活配置各类能源的比重。' },
    { q: '作物需要多久才能成熟？', a: '不同作物的生长周期差异很大。快速生长的作物如浆果和叶菜类大约需要 2-3 个游戏日，而需要长时间生长的作物如谷类和果树可能需要 5-8 个游戏日。实际生长速度还受土壤肥力、灌溉状态、光照条件和温度的影响。使用肥料和自动化灌溉系统可以显著缩短成熟时间。' },
    { q: '传送带系统如何使用？', a: '传送带是自动化生产的基础组件。使用时先将传送带从产出设备（如采矿机）铺设到目标设备（如熔炉），确保传送带的方向正确。传送带会自动将一端放上的物品运送到另一端。进阶使用包括设置分拣器对混合物品进行分类、使用合并器将多条传送带汇集到一条主线上，以及配置缓冲区来平滑生产波动。' },
    { q: '飞船可以自定义吗？', a: '可以，飞船的自定义是 Solarpunk 最具深度的系统之一。你可以自由设计飞船的甲板布局、选择不同类型的引擎、安装武器装备、配置储物空间和居住设施。飞船可以发展为一个小型移动基地，包含工作台、储物系统和能源设备。高级玩家甚至可以建造多艘不同用途的飞船，分别用于物流运输、远距离探索和移动战斗平台。' },
    { q: '攻略中的数据准确吗？', a: '本站攻略中的数值数据均来自社区玩家的实际测试和估算。我们在发布前会与当前游戏版本进行核对，但 Solarpunk 仍在持续更新中，某些参数可能在版本变动后发生调整。所有涉及数值的数据均标注为"社区估算"，建议结合游戏内实际显示数值作为最终参考。如果你发现数据有误，欢迎通过爱发电平台反馈。' },
  ];

  return (
    <div className="min-h-screen bg-field-paper bg-paper-texture">
      <header className="pt-12 pb-6 px-4 lg:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col items-start">
          <a href="/" className="font-display text-sm text-moss hover:text-moss-dark transition-colors mb-4">&larr; 返回首页</a>
          <h1 className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-bark leading-none">常见问题</h1>
          <p className="font-body text-base text-stone mt-3 max-w-md leading-relaxed italic">Solarpunk 玩家最常问的 12 个问题与详细解答</p>
        </div>
        <div className="field-divider mt-6" />
      </header>

      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="space-y-12">
          <section>
            <p className="font-body text-bark-light leading-relaxed">
              本页面整理了 Solarpunk 玩家社区中最常被问到的 12 个问题及其详细解答。这些问题涵盖了游戏入门、核心系统机制、联机玩法以及攻略站使用等多个方面。如果你是第一次接触 Solarpunk，建议先通读这些问题，它们能帮你快速建立对游戏的整体认知。对于更深入的系统性问题，请参考我们专门的系统攻略页面，那里有更加详尽的解说和实战指导。
            </p>
            <p className="font-body text-bark-light leading-relaxed mt-3">
              Solarpunk 是一个系统深度大、玩法自由的游戏，新玩家在前几个小时内可能会遇到各种疑问。下列 FAQ 综合了社区反馈中最常见的问题，每个回答都力求简明扼要地提供关键信息，同时附上相关攻略页面的链接，方便你进一步深入学习。如果你有这里没有涵盖到的问题，欢迎通过爱发电平台或社区频道提出，我们会定期更新这份 FAQ 列表。
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-bark mb-6">全部问题</h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <details key={i} className="journal-card p-5 group cursor-pointer">
                  <summary className="font-display font-semibold text-bark marker:text-moss">
                    {faq.q}
                  </summary>
                  <p className="font-body text-sm text-bark-light leading-relaxed mt-3 pl-3 border-l-2 border-moss/30">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-bark mb-6">攻略站相关问题</h2>
            <div className="space-y-2">
              <details className="journal-card p-4 group cursor-pointer">
                <summary className="font-display font-semibold text-bark text-sm marker:text-moss">攻略站多久更新一次？</summary>
                <p className="font-body text-sm text-bark-light leading-relaxed mt-3 pl-3 border-l-2 border-moss/30">
                  攻略站没有固定的更新周期，我们会根据游戏更新节奏和社区贡献情况灵活安排。通常在每次游戏重大更新后的 1-2 周内完成主要攻略的更新。新闻页面和社区动态栏目会更频繁地更新，确保你第一时间获取最新的游戏资讯和玩家社区动态。
                </p>
              </details>
              <details className="journal-card p-4 group cursor-pointer">
                <summary className="font-display font-semibold text-bark text-sm marker:text-moss">如何在手机上查看攻略？</summary>
                <p className="font-body text-sm text-bark-light leading-relaxed mt-3 pl-3 border-l-2 border-moss/30">
                  本站采用响应式设计，在手机、平板和电脑上都能获得良好的浏览体验。页面布局会根据屏幕尺寸自动适配，所有表格和内容都可以在手机端正常查看。你可以将本站添加到手机浏览器的主屏幕上，像使用本地 App 一样快速访问攻略内容。
                </p>
              </details>
              <details className="journal-card p-4 group cursor-pointer">
                <summary className="font-display font-semibold text-bark text-sm marker:text-moss">如何报告攻略中的错误？</summary>
                <p className="font-body text-sm text-bark-light leading-relaxed mt-3 pl-3 border-l-2 border-moss/30">
                  如果你发现了攻略中的错误或过时信息，可以通过爱发电平台向我们反馈。请在反馈时附上具体的攻略页面链接和问题描述，以便我们快速定位和修复。对于提供有价值反馈的玩家，我们会发布在社区动态中表示感谢。
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
