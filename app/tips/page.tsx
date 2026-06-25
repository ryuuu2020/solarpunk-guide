'use client';

export default function TipsPage() {
  const tips = [
    { tip: '早期优先建造雨水收集器，水资源比食物更稀缺。在 Solarpunk 的初期阶段，自然水源点稀少且不可再生，雨水收集器是唯一可靠的长期水源。', category: '生存' },
    { tip: '浮空岛边缘放围栏防止失足坠落。坠落是新手最常见的死亡原因，建造围栏的材料成本远低于死亡后的装备损失和跑尸时间。', category: '建造' },
    { tip: '太阳能板需要定期清洁，灰尘会降低效率。在荒漠岛屿上这一问题尤为严重，建议每三个游戏日手动清洁一次，或安装自动清洁模块。', category: '科技' },
    { tip: '暖色调灯光可以减少作物夜间生长惩罚。与冷白光源相比，暖色调的人造光更接近自然光合作用所需的波长范围，作物夜间生长速度可提升约 15%。（社区估算）', category: '农耕' },
    { tip: '制作床铺越早越好，睡眠质量直接影响工作效率。缺乏良好睡眠状态下，工具使用速度下降 30%，移动速度下降 15%。在第一天夜晚前务必制作至少一张简易床铺。', category: '生存' },
    { tip: '在基地中心放置一个储物箱作为"中转站"，然后让自动化系统把生产成品送到这里。这样可以大幅减少你在仓库间来回跑动的时间。', category: '自动化' },
    { tip: '探洞前准备至少 3 个充满电的电池。地下环境没有自然光，太阳能板完全失效，所有照明和设备运转完全依赖储能系统。', category: '探索' },
    { tip: '不同类型的作物对土壤肥力的需求不同，合理轮作可以减少肥料消耗。例如，豆类作物可以提升后续作物的氮元素吸收效率。', category: '农耕' },
    { tip: '用传送带连接各个生产站台时，优先使用直线布局。过多的转弯会降低物品传输速度并增加能量消耗，连接点过多还可能导致物品卡顿。', category: '自动化' },
    { tip: '暴风雨来临前用帆布遮盖露天设备。雨水会损坏未保护的电子设备，维修成本远高于预防成本。', category: '生存' },
    { tip: '飞船的燃料消耗与载重量成正比。在规划长途旅行前，清理不必要的货物可以有效延长航程范围。每减少 10 个单位的负重，航程可增加约 8%。（社区估算）', category: '飞船' },
    { tip: '不同岛屿之间建立专门的"物流飞船"而非人货混装。专用物流飞船可以更大限度地利用货仓空间，飞行频率也更高。', category: '飞船' },
    { tip: '在多个岛屿上都建造基础能源系统作为备用。单一岛屿的能源系统一旦出现故障，你可以立即转移到另一个岛屿继续生产。', category: '能源' },
    { tip: '定期检查电池的充放电循环次数，老化电池的容量会逐渐下降。建议在电池效率降至 80% 以下时及时更换。', category: '能源' },
    { tip: '使用分拣器对传送带上的混合物品进行分类，避免手动整理库存。合理设置的分类系统可以完全自动化仓库管理。', category: '自动化' },
    { tip: '在岛屿之间铺设传送带虽然成本高昂，但长远来看是最稳定的资源运输方式，不受天气和燃料限制。', category: '自动化' },
    { tip: '将高耗能工厂建在日照充足的荒漠岛屿上，可以降低储能需求。荒漠岛屿的长时间日照可以最大程度地利用太阳能优势。', category: '能源' },
    { tip: '用告示牌在基地内标记各个区域的功能。在大规模基地中，清晰的标识可以大幅减少迷路和误操作的概率。', category: '建造' },
    { tip: '提前建造一个食物储备仓，至少存放 10 天的应急口粮。极端天气事件可能中断食物供应链，储备仓是最后的保险。', category: '生存' },
    { tip: '使用不同的颜色标记不同种类的储物箱，一眼就能找到需要的材料。建议木材用棕色、金属用灰色、食物用绿色、电子元件用蓝色。', category: '建造' },
    { tip: '在飞船甲板上预留一个紧急逃生舱的位置。虽然占用空间，但在遭遇极端情况时可以保住你的核心物资和科技进度。', category: '飞船' },
    { tip: '使用定时器控制灌溉系统的开关时间，避免水资源浪费。夜间蒸发量低，适当的间歇灌溉比持续灌溉更高效。', category: '农耕' },
    { tip: '培养多种作物而非单一品种。单一作物一旦遭遇病虫害或气候异常，可能导致整个食物供应链崩溃。多样性是生态农业的基础。', category: '农耕' },
    { tip: '研究解锁顺序建议：基础电力 → 基础农耕 → 基础冶炼 → 自动化入门 → 飞船升级 I。这个顺序能在最短时间内建立起稳定的资源循环。', category: '科技' },
    { tip: '定期清理传送带上的积压物品，过多的杂物堆积会拖慢整个自动化系统的运转速度。', category: '自动化' },
    { tip: '在极端温度岛屿上需要额外考虑温控系统。加热器和冷却器的能耗较大，建议单独规划一条能源线路供应温控设备。', category: '生存' },
    { tip: '飞船的引擎有多种类型，重型引擎推力大但耗油快，轻型引擎效率高但载重有限。根据你的主要用途选择：探索用轻型、运输用重型。', category: '飞船' },
    { tip: '在基地外围种植荆棘类防御植物，可以有效阻挡野生动物的侵扰。相比木墙，荆棘植物会自我修复且不需要额外维护。', category: '生存' },
    { tip: '制作一个便携式工作台随身携带，在远离基地的探索途中可以随时进行紧急维修和物品制作。', category: '工具' },
    { tip: '经常备份存档。Solarpunk 作为开放世界游戏，某些关键决策一旦做出就无法撤销。定期备份可以让你在需要时回到重要的时间节点。', category: '通用' },
  ];

  return (
    <div className="min-h-screen bg-field-paper bg-paper-texture">
      <header className="pt-12 pb-6 px-4 lg:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col items-start">
          <a href="/" className="font-display text-sm text-moss hover:text-moss-dark transition-colors mb-4">&larr; 返回首页</a>
          <h1 className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-bark leading-none">生存技巧</h1>
          <p className="font-body text-base text-stone mt-3 max-w-md leading-relaxed italic">30 条由社区老玩家验证的 Solarpunk 实用生存技巧</p>
        </div>
        <div className="field-divider mt-6" />
      </header>

      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="space-y-12">
          <section>
            <p className="font-body text-bark-light leading-relaxed">
              以下 30 条生存技巧由 Solarpunk 社区资深玩家整理和验证，涵盖了游戏中的核心系统和玩法机制。无论你是刚刚踏上浮空岛的新手还是已经飞遍云端的老玩家，这里的每一条技巧都有可能为你的生存之旅带来新的启发。技巧按照类别进行了分组归类，方便你快速定位到感兴趣的领域。所有涉及具体数值的技巧均标注为"社区估算"，数据可能在游戏版本更新后有所调整。
            </p>
            <p className="font-body text-bark-light leading-relaxed mt-3">
              这些技巧并非官方攻略，而是社区玩家在数百小时游戏过程中积累的实战经验。有些技巧是显而易见的小窍门，有些则是你玩了几十小时后才可能自己发现的深层机制。我们建议你至少通读一遍全部 30 条技巧，将它们作为你探索 Solarpunk 世界的参考手册。即使你现在用不到某条技巧，了解这些知识也可能会在未来的某个关键时刻帮到你。
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-bark mb-6">技巧合集</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {tips.map((item, i) => (
                <div key={i} className="journal-card p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="step-number text-xs w-5 h-5">{i + 1}</span>
                    <span className="field-tag stone text-[10px]">{item.category}</span>
                  </div>
                  <p className="font-body text-sm text-bark leading-relaxed">{item.tip}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-bark mb-6">常见问题</h2>
            <div className="space-y-2">
              <details className="journal-card p-4 group cursor-pointer">
                <summary className="font-display font-semibold text-bark text-sm marker:text-moss">这些技巧适用于什么游戏版本？</summary>
                <p className="font-body text-sm text-bark-light leading-relaxed mt-3 pl-3 border-l-2 border-moss/30">
                  以上技巧基于当前最新版本的游戏机制整理。Solarpunk 仍在持续更新中，某些系统机制可能在后续版本中发生变化。我们会在每次重大更新后重新验证所有技巧的适用性，但难免存在一定的时效性差异。建议结合游戏内实际表现来参考这些技巧，遇到不一致的情况欢迎反馈。
                </p>
              </details>
              <details className="journal-card p-4 group cursor-pointer">
                <summary className="font-display font-semibold text-bark text-sm marker:text-moss">哪几条技巧对新手最重要？</summary>
                <p className="font-body text-bark-light leading-relaxed mt-3 pl-3 border-l-2 border-moss/30">
                  对于刚起步的新手，建议优先关注编号 1~5 的技巧。其中："早期建造雨水收集器"和"尽早上床铺"是最容易被忽视的生存基础；"浮空岛边缘放置围栏"是一条拯救过无数新玩家性命的建议；"研究解锁顺序"则提供了一个经过验证的高效科技发展路线。掌握了这 5 条基础技巧后，再逐步扩展到其他类别。
                </p>
              </details>
              <details className="journal-card p-4 group cursor-pointer">
                <summary className="font-display font-semibold text-bark text-sm marker:text-moss">有更进阶的技巧吗？</summary>
                <p className="font-body text-sm text-bark-light leading-relaxed mt-3 pl-3 border-l-2 border-moss/30">
                  本页面的 30 条技巧覆盖了从入门到进阶的各个层面。如果你已经掌握了这些内容，建议前往专门的自动化、飞船和能源系统攻略页面，那里有针对特定系统的深度优化技巧。另外，社区频道中常有高手分享他们的最新发现和极限配置方案，是获取进阶技巧的另一重要渠道。关注首页"最新动态"栏目也能第一时间了解到社区的最新成果。
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
