'use client';

export default function NewsPage() {
  const news = [
    {
      date: '2026-06-20',
      title: '社区发现新型自动化农场布局，产量提升 40%',
      summary: '一位资深玩家分享了一套经过优化的自动化农场布局方案。该设计通过改进传送带路径和分拣器位置，实现了单位面积产量约 40% 的提升。社区团队正在多个岛屿环境下进行兼容性测试，测试完成后将在攻略站发布完整布局蓝图和搭建教程。',
      category: '社区发现',
    },
    {
      date: '2026-06-15',
      title: '官方确认下次更新将加入新生物群系"水晶洞穴"',
      summary: '开发团队在最新的开发者日志中正式确认，下一次重大内容更新将加入命名为"水晶洞穴"的全新地下生物群系。该区域预计将引入独特的水晶矿物资源、专属的环境生存挑战机制以及全新的科技树分支。据开发者透露，水晶洞穴将不同于任何现有的岛屿环境，需要玩家开发全新的生存策略。目前尚未公布具体上线日期，预计将在下个季度推出。',
      category: '官方公告',
    },
    {
      date: '2026-06-10',
      title: '玩家自制飞船蓝图分享活动开启',
      summary: '社区正式发起首届飞船蓝图设计大赛。目前已收到超过 50 份参赛作品，涵盖从单人探索舰到多人移动基地的各种设计。评选标准包括功能性、美观度、建造效率和技术创新性四个方面。获胜作品将在攻略站永久展示，并作为社区的官方推荐蓝图。',
      category: '社区活动',
    },
    {
      date: '2026-06-05',
      title: '攻略站完成能源系统攻略大更新',
      summary: '本站的能源系统攻略已全面更新至最新版本。新增内容包括地热发电详解、混合能源系统优化方案以及极端环境（极地/荒漠）下的能源配置指南。同时更新了所有能源设备的参数数据，确保与当前游戏版本一致。',
      category: '攻略更新',
    },
    {
      date: '2026-05-28',
      title: 'Solarpunk 发布性能优化补丁',
      summary: '开发团队发布了针对大型自动化基地的性能优化补丁。更新后，大型传送带网络和无人机系统的帧率表现得到显著改善，据社区测试反馈，在拥有超过 500 个自动化组件的存档中帧率提升约 25%。同时修复了若干已知的自动化系统逻辑错误。',
      category: '游戏更新',
    },
    {
      date: '2026-05-20',
      title: '社区翻译组完成攻略全部中文本地化',
      summary: '经过一个月的努力，社区翻译组完成了本站全部攻略内容的简体中文本地化工作。这是 Solarpunk 中文社区建设的一个重要里程碑。翻译组目前仍在招募新的志愿者，欢迎有兴趣的玩家加入。',
      category: '社区动态',
    },
  ];

  return (
    <div className="min-h-screen bg-field-paper bg-paper-texture">
      <header className="pt-12 pb-6 px-4 lg:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col items-start">
          <a href="/" className="font-display text-sm text-moss hover:text-moss-dark transition-colors mb-4">&larr; 返回首页</a>
          <h1 className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-bark leading-none">新闻中心</h1>
          <p className="font-body text-base text-stone mt-3 max-w-md leading-relaxed italic">Solarpunk 最新游戏消息与攻略站更新动态</p>
        </div>
        <div className="field-divider mt-6" />
      </header>

      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="flex-1 lg:max-w-[65%] space-y-12">
            <section>
              <p className="font-body text-bark-light leading-relaxed">
                本页面汇总了 Solarpunk 攻略站和游戏社区的最新动态，包括游戏官方更新公告、社区重要发现、攻略站内容更新以及社区活动预告。我们会持续跟踪游戏的最新发展，确保玩家能第一时间获取到有价值的信息。新闻按照时间倒序排列，最新消息置于最上方。
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-bark mb-6">近期新闻</h2>
              <div className="space-y-4">
                {news.map((n, i) => (
                  <div key={i} className="journal-card p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-body text-xs text-stone">{n.date}</span>
                      <span className="field-tag stone text-[10px]">{n.category}</span>
                    </div>
                    <h3 className="font-display text-lg font-semibold text-bark">{n.title}</h3>
                    <p className="font-body text-sm text-bark-light leading-relaxed mt-2">{n.summary}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-bark mb-6">常见问题</h2>
              <div className="space-y-2">
                <details className="journal-card p-4 group cursor-pointer">
                  <summary className="font-display font-semibold text-bark text-sm marker:text-moss">游戏下次更新什么时候？</summary>
                  <p className="font-body text-sm text-bark-light leading-relaxed mt-3 pl-3 border-l-2 border-moss/30">
                    开发团队通常每季度发布一次大型内容更新，期间会穿插小型修复补丁。最近确认的"水晶洞穴"更新预计在下个季度上线。具体的发布日期以官方公告为准，我们会在第一时间通过新闻页面和首页动态通知玩家。
                  </p>
                </details>
                <details className="journal-card p-4 group cursor-pointer">
                  <summary className="font-display font-semibold text-bark text-sm marker:text-moss">如何投稿社区新闻？</summary>
                  <p className="font-body text-sm text-bark-light leading-relaxed mt-3 pl-3 border-l-2 border-moss/30">
                    如果你有与 Solarpunk 相关的新闻线索或社区发现想与大家分享，欢迎通过爱发电平台联系我们。请在投稿时附上信息来源（官方链接、社区帖子链接等）和简要说明。经编辑确认后，符合条件的投稿将会被收录到新闻页面中。
                  </p>
                </details>
                <details className="journal-card p-4 group cursor-pointer">
                  <summary className="font-display font-semibold text-bark text-sm marker:text-moss">攻略站多久发布一次新闻？</summary>
                  <p className="font-body text-sm text-bark-light leading-relaxed mt-3 pl-3 border-l-2 border-moss/30">
                    新闻的发布频率没有固定规律，取决于游戏更新和社区活动的活跃程度。在游戏更新密集期或社区活动集中时，新闻更新会更加频繁。建议将首页"最新动态"栏目作为日常关注点，那里会实时更新最重要的消息摘要。
                  </p>
                </details>
              </div>
            </section>
          </div>

          <aside className="lg:w-[30%] space-y-10 shrink-0">
            <div className="field-sidebar-block">
              <h3 className="font-display text-base font-semibold text-bark mb-4">新闻分类</h3>
              <div className="space-y-2 font-body text-sm text-bark-light">
                <p>官方公告 — 开发团队正式发布的消息</p>
                <p>游戏更新 — 补丁和版本更新说明</p>
                <p>社区发现 — 玩家发现的技巧和优化</p>
                <p>攻略更新 — 本站内容更新通知</p>
                <p>社区活动 — 玩家活动与赛事</p>
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
