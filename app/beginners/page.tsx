'use client';

export default function BeginnersPage() {
  const steps = [
    { step: '01', title: '落地与资源采集', desc: '游戏一开始你会出现在初始浮空岛的中心区域。第一步是环顾四周，标记可见的资源点。优先采集木材（攻击树木获得）和石头（地面上可拾取），同时注意收集纤维（从灌木和草丛中获得）。这三种基础资源是制作第一批工具和建造第一个庇护所的必备材料。建议在前 10 分钟内尽可能多地收集这些基础物资，为后续的快速发展打好基础。' },
    { step: '02', title: '制作基础工具', desc: '收集到足够的木材和石头后，打开制作菜单制作石斧和石镐。石斧可以大幅提升伐木效率，石镐则用于开采石头和后续的矿物采集。同时，用手头的木材制作一把简易的木质武器，用于防身。工具的质量直接影响你的采集速度，优先制作工具是非常值得的投资。制作完毕后立即装备它们，你的资源采集效率将得到质的飞跃。' },
    { step: '03', title: '寻找水源与食物', desc: '在建立庇护所之前，你需要确认附近的水源和食物来源。初始岛屿上通常有小型池塘或溪流，标记其位置。同时留意野生的浆果丛和可食用植物，它们是早期食物的重要来源。如果找不到近处的水源，优先建造雨水收集器解决饮水问题。在 Solarpunk 中，水资源的管理往往比食物更加紧迫，尤其是在干燥的生物群系中。' },
    { step: '04', title: '搭建第一个庇护所', desc: '用木材搭建一个 3x3 的小屋。不需要太复杂，只要有屋顶和四面墙即可。在小屋内放置基础工作台和篝火。工作台让你能制作更多物品，篝火提供照明和温暖。之后立即制作一张床铺。睡眠质量直接与工作效率挂钩——睡眠不足状态下，所有操作的效率都会显著下降。一个好的庇护所还能在暴风雨等恶劣天气中保护你。' },
    { step: '05', title: '建立基础科技', desc: '建造研究台是游戏早期最重要的里程碑之一。研究台需要木材、铁锭和铜线来制作。建造完毕后，在科技树中按照以下优先级进行研究：基础农耕 → 基础电力 → 基础冶炼。这个顺序逻辑清晰——先保障食物供给，再解决能源问题，最后建立工业基础。每个研究项目完成后都会解锁一批新的制作配方，你的生存能力将迎来质的飞跃。' },
    { step: '06', title: '建造基础能源系统', desc: '完成基础电力研究后，立即建造太阳能板和电池。在温带岛屿上，推荐配置为 2 块太阳能板 + 1 组电池作为入门方案。太阳能板在白天产生电力，电池则储存多余的电力供夜间使用。这个简单的电力系统足以驱动你的研究台、基础工作台和初始照明需求。确保将所有电力设备通过电线连接起来形成一个完整的电网。' },
    { step: '07', title: '开垦农田', desc: '有了稳定的能源供应后，开始规划你的第一个农场。在庇护所附近选择一片平坦的区域，使用锄头开垦耕地。第一批作物建议种植生长快速的叶菜类和浆果，它们能在 2-3 个游戏日内收获，快速为你提供稳定的食物来源。初期不需要追求大规模，4-6 块耕地就足以维持一个人的日常食物需求。后续随着科技解锁，可以逐步安装洒水器实现自动化灌溉。' },
    { step: '08', title: '修复飞船', desc: '完成以上步骤后，你的基地已经具备了基本自给自足的能力。接下来前往岛屿最高处寻找坠毁的飞船部件。收集铁锭、木材和布料来制作飞船修理套件，然后在飞船码头完成修复。初次修复飞船是解锁其他岛屿的关键步骤。修复完成后，你的第一站应该前往 L2 级别的草原浮岛群，那里的铜矿和铁矿资源将助力你进入工业化时代。' },
  ];

  return (
    <div className="min-h-screen bg-field-paper bg-paper-texture">
      <header className="pt-12 pb-6 px-4 lg:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col items-start">
          <a href="/" className="font-display text-sm text-moss hover:text-moss-dark transition-colors mb-4">&larr; 返回首页</a>
          <h1 className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-bark leading-none">新手生存完全指南</h1>
          <p className="font-body text-base text-stone mt-3 max-w-md leading-relaxed italic">从登陆浮空岛到建立自给自足基地的完整流程</p>
        </div>
        <div className="field-divider mt-6" />
      </header>

      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="flex-1 lg:max-w-[65%] space-y-12">
            <section>
              <h2 className="font-display text-2xl font-bold text-bark">欢迎来到浮空岛</h2>
              <p className="font-body text-bark-light leading-relaxed mt-4">
                Solarpunk 是一款开放世界生存建造游戏。你将从零开始，在漂浮于云端的岛屿上建立自己的家园。本指南专为第一次接触这款游戏的玩家设计，将带你走完从登陆第一天到建立自给自足基地的前 10 个小时游戏过程。我们将按照最效率的发展路线，手把手地引导你完成每一个关键步骤。
              </p>
              <p className="font-body text-bark-light leading-relaxed mt-3">
                在开始之前，有几个重要提示：首先，这款游戏鼓励你按照自己的节奏来探索和建造，本指南提供的路线是一个经过验证的高效方案，但你完全可以按照自己的喜好调整顺序或跳过某些步骤。其次，游戏中没有"完美"的玩法，不同的发展策略会带来不同的游戏体验。最后，Solarpunk 的核心乐趣在于创造和探索的过程本身，不要过分追求速度而忽略了享受游戏的乐趣。
              </p>
              <p className="font-body text-bark-light leading-relaxed mt-3">
                  本指南中的所有数值和推荐配置均为社区玩家反复测试后的估算结果。随着游戏版本的更新，某些参数可能会有所调整，建议以游戏内实际显示为准。如果在某个步骤遇到困难，不要灰心——这是学习的一部分。你可以回到攻略站查阅相关系统的专题指南，或在社区中寻求其他玩家的帮助和建议。
              </p>
              <p className="font-body text-bark-light leading-relaxed mt-3">
                你需要经历从一无所有到逐步建立完整基地系统的过程。在这个过程中，你将学会如何高效采集资源、规划基地布局、管理能源系统以及利用科技树解锁更高级的建造能力。每一步都是环环相扣的：没有足够的资源就无法建造设施，没有合适的设施就无法解锁新科技，而没有科技的支持你也无法探索更广阔的浮空岛世界。这正是生存建造类游戏的核心魅力所在——每一次进步都来自于你之前积累的所有努力。
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-bark mb-6">新手发展路线</h2>
              <div className="space-y-6">
                {steps.map((s, i) => (
                  <div key={i} className="flex gap-5 items-start">
                    <span className="step-number shrink-0">{s.step}</span>
                    <div>
                      <h3 className="font-display text-base font-semibold text-bark">{s.title}</h3>
                      <p className="font-body text-sm text-bark-light leading-relaxed mt-1">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-bark mb-6">常见问题</h2>
              <div className="space-y-2">
                <details className="journal-card p-4 group cursor-pointer">
                  <summary className="font-display font-semibold text-bark text-sm marker:text-moss">我应该先建房子还是先做工具？</summary>
                  <p className="font-body text-sm text-bark-light leading-relaxed mt-3 pl-3 border-l-2 border-moss/30">
                    建议先制作工具（石斧、石镐），再建造庇护所。工具能大幅提升资源采集效率，让你在更短的时间内收集到建造所需的材料。而且制作工具所需的资源量极少（各 4-5 个单位的基础材料），几乎不会拖延你的建屋进度。不过如果你发现天色将晚且还没有安全的过夜场所，可以优先搭建一个简易小屋。
                  </p>
                </details>
                <details className="journal-card p-4 group cursor-pointer">
                  <summary className="font-display font-semibold text-bark text-sm marker:text-moss">为什么我的食物总是不够吃？</summary>
                  <p className="font-body text-sm text-bark-light leading-relaxed mt-3 pl-3 border-l-2 border-moss/30">
                  新手最常见的食物短缺原因有三个：没有尽早开垦农田、忽视了睡眠质量导致的效率下降、以及过度依赖野外采集而非农业种植。解决方法是：在搭建庇护所后尽快开垦 4-6 块耕地并种植快速作物；使用肥料和洒水器加速生长；同时探索周边区域寻找野生的长期食物补给点作为应急储备来源。
                  </p>
                </details>
                <details className="journal-card p-4 group cursor-pointer">
                  <summary className="font-display font-semibold text-bark text-sm marker:text-moss">我该什么时候开始做自动化？</summary>
                  <p className="font-body text-sm text-bark-light leading-relaxed mt-3 pl-3 border-l-2 border-moss/30">
                    建议先在手动生产中积累足够的资源和经验，等到以下条件满足后再启动自动化建设：拥有稳定的能源供应（至少 2 太阳能 + 2 电池）、解锁了传送带和分拣器的基础配方、手头有足够的铁锭和铜锭储备。自动化是一个系统工程，前期投入较大，建议从最简单的传送带连接开始（如采矿机 → 熔炉），逐步扩展到更复杂的流水线。具体步骤请参考自动化系统的专题攻略。
                  </p>
                </details>
              </div>
            </section>
          </div>

          <aside className="lg:w-[30%] space-y-10 shrink-0">
            <div className="field-sidebar-block">
              <h3 className="font-display text-base font-semibold text-bark mb-4">快速导航</h3>
              <div className="space-y-2 font-body text-sm">
                <a href="/guides" className="block text-moss hover:text-moss-dark transition-colors">全部攻略总览</a>
                <a href="/tips" className="block text-moss hover:text-moss-dark transition-colors">30 条生存技巧</a>
                <a href="/crafting" className="block text-moss hover:text-moss-dark transition-colors">制作配方速查</a>
                <a href="/faq" className="block text-moss hover:text-moss-dark transition-colors">常见问题汇总</a>
              </div>
            </div>
            <div className="field-sidebar-block">
              <h3 className="font-display text-base font-semibold text-bark mb-4">建议阅读顺序</h3>
              <div className="space-y-1 font-body text-xs text-bark-light leading-relaxed">
                <p>1. 本页面（新手入门）</p>
                <p>2. 能源系统指南</p>
                <p>3. 农耕系统指南</p>
                <p>4. 自动化系统指南</p>
                <p>5. 飞船系统详解</p>
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
