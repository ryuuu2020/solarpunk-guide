'use client';

export default function CommunityPage() {
  const events = [
    { date: '2026-06-20', title: '社区发现新型自动化农场布局', desc: '一位社区玩家分享了一套全新的自动化农场布局方案，通过优化传送带路径和分拣器位置，将单位面积产量提升了约 40%。该布局已在多个岛屿环境中经过验证，社区正在测试其在不同生物群系下的表现。完整蓝图已发布在社区频道，欢迎前往下载试用。' },
    { date: '2026-06-15', title: '官方确认下次更新将加入新生物群系"水晶洞穴"', desc: '开发团队在最新的开发日志中确认，下一个大版本更新将实装全新的地下生物群系"水晶洞穴"。该生物群系将引入独特的资源类型、全新的环境机制以及与之配套的研究科技树。预计更新将在下个季度上线，具体日期将在后续公告中公布。' },
    { date: '2026-06-10', title: '玩家自制飞船蓝图分享活动开启', desc: '社区发起了首届"飞船蓝图设计大赛"，鼓励玩家分享自己的飞船设计方案。参赛作品涵盖了从小型探索舰到巨型移动基地的各种规模，展现了 Solarpunk 飞船系统的深广度。优秀作品将在社区展示页面永久展出，票选最高的设计将成为社区的推荐蓝图。' },
    { date: '2026-06-05', title: '新版太阳能阵列优化方案发布', desc: '一位能源工程专业的玩家运用真实世界的太阳能布局算法，重新设计了游戏中的太阳能阵列排布方案。新方案在相同面积下提升了约 15% 的日均发电量，特别优化了低纬度岛屿的日照角度利用效率。方案文件可在社区资源库中下载。' },
    { date: '2026-05-28', title: '跨岛屿物流网络专题讨论', desc: '社区举办了一场关于跨岛屿自动化物流的专题讨论，多位高端玩家分享了各自的多岛屿运输方案。讨论涵盖了传送带直连、飞船定期运输和专用物流调度算法等多种方案，每个方案都附带了详细的效率数据和使用场景分析。讨论纪要已整理发布。' },
    { date: '2026-05-20', title: '社区翻译组完成全部攻略中文本地化', desc: '经过社区翻译组的共同努力，Solarpunk 攻略站的全部内容已完成中文翻译和本地化校对。这标志着中文玩家社区的资源水准达到了新的高度。翻译组仍在招募新成员，欢迎有能力和热情的玩家加入志愿者团队。' },
  ];

  return (
    <div className="min-h-screen bg-field-paper bg-paper-texture">
      <header className="pt-12 pb-6 px-4 lg:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col items-start">
          <a href="/" className="font-display text-sm text-moss hover:text-moss-dark transition-colors mb-4">&larr; 返回首页</a>
          <h1 className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-bark leading-none">玩家社区</h1>
          <p className="font-body text-base text-stone mt-3 max-w-md leading-relaxed italic">Solarpunk 中文玩家社区动态与活动</p>
        </div>
        <div className="field-divider mt-6" />
      </header>

      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="flex-1 lg:max-w-[65%] space-y-12">
            <section>
              <h2 className="font-display text-2xl font-bold text-bark">关于社区</h2>
              <p className="font-body text-bark-light leading-relaxed mt-4">
                Solarpunk 中文玩家社区是一个由热爱这款游戏的玩家自发组织的信息交流平台。我们致力于为中文玩家提供及时的游戏资讯、高质量的攻略内容以及友好的交流环境。无论你是刚刚入坑的新手还是已经飞遍云端的老玩家，这里都有你的位置。
              </p>
              <p className="font-body text-bark-light leading-relaxed mt-3">
                    社区的核心活动包括攻略创作与维护、游戏资讯翻译、玩家作品展示以及定期的社区活动组织。攻略站的内容完全由社区志愿者编写和维护，每篇攻略都经过了多名资深玩家的审校。我们坚持免费开放所有攻略内容，希望通过社区的共同努力，让每一位 Solarpunk 玩家都能获得更好的游戏体验。
              </p>
              <p className="font-body text-bark-light leading-relaxed mt-3">
                    社区目前的主要交流渠道包括爱发电平台、玩家自建的讨论组以及攻略站本身的评论区。我们定期举办各类活动，如蓝图分享大赛、效率挑战赛和专题讨论会，活跃社区氛围并促进玩家之间的交流与合作。所有活动和公告都会第一时间发布在本页面和首页的最新动态栏目中。
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-bark mb-6">近期动态</h2>
              <div className="space-y-4">
                {events.map((e, i) => (
                  <div key={i} className="journal-card p-6">
                    <span className="font-body text-xs text-stone">{e.date}</span>
                    <h3 className="font-display text-lg font-semibold text-bark mt-1">{e.title}</h3>
                    <p className="font-body text-sm text-bark-light leading-relaxed mt-2">{e.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-bark mb-6">加入社区</h2>
              <p className="font-body text-bark-light leading-relaxed">
                如果你热爱 Solarpunk，并且希望为中文玩家社区贡献自己的力量，我们非常欢迎你的加入。无论你擅长攻略写作、数据测试、蓝图设计还是翻译校对，这里都有适合你的角色。目前社区特别需要以下方面的志愿者：自动化系统攻略编写、游戏数据测试验证、攻略内容校对以及新版本更新内容的翻译。有兴趣的玩家可以通过爱发电平台联系我们。
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-bark mb-6">常见问题</h2>
              <div className="space-y-2">
                <details className="journal-card p-4 group cursor-pointer">
                  <summary className="font-display font-semibold text-bark text-sm marker:text-moss">如何向攻略站贡献内容？</summary>
                  <p className="font-body text-sm text-bark-light leading-relaxed mt-3 pl-3 border-l-2 border-moss/30">
                    欢迎通过爱发电平台联系我们，说明你希望贡献的内容类型和方向。我们的编辑团队会与你联系，沟通具体的合作方式。一般来说，撰写一篇新攻略的流程是：提交大纲 → 编辑审核 → 撰写初稿 → 数据验证 → 审校发布。整个流程通常需要一到两周时间，具体取决于内容的复杂程度。
                  </p>
                </details>
                <details className="journal-card p-4 group cursor-pointer">
                  <summary className="font-display font-semibold text-bark text-sm marker:text-moss">攻略站会一直免费吗？</summary>
                  <p className="font-body text-sm text-bark-light leading-relaxed mt-3 pl-3 border-l-2 border-moss/30">
                    是的。所有攻略内容将永久免费开放。我们是玩家社区项目，不追求商业盈利。网站运营成本通过社区成员的爱发电支持来覆盖，所有捐款完全自愿。即使在极端情况下需要寻求资金支持，我们也绝不会对攻略内容设置付费墙。这是我们对社区的承诺。
                  </p>
                </details>
                <details className="journal-card p-4 group cursor-pointer">
                  <summary className="font-display font-semibold text-bark text-sm marker:text-moss">社区活动一般多久举办一次？</summary>
                  <p className="font-body text-sm text-bark-light leading-relaxed mt-3 pl-3 border-l-2 border-moss/30">
                    社区活动没有固定的举办周期，我们倾向于根据游戏更新节奏和社区热度来灵活安排。通常每个季度至少会有一到两次主题活动，如蓝图大赛、效率挑战赛或专题讨论会。每次大型游戏更新后，我们会第一时间组织社区测试和攻略更新活动。具体活动安排会在本页面和首页动态中提前公告。
                  </p>
                </details>
              </div>
            </section>
          </div>

          <aside className="lg:w-[30%] space-y-10 shrink-0">
            <div className="field-sidebar-block">
              <h3 className="font-display text-base font-semibold text-bark mb-4">社区链接</h3>
              <div className="space-y-2 font-body text-sm">
                <a href="https://afdian.com/a/gameguidehub" target="_blank" rel="noopener noreferrer" className="block text-moss hover:text-moss-dark transition-colors">❤️ 爱发电支持我们</a>
              </div>
            </div>
            <div className="field-sidebar-block">
              <h3 className="font-display text-base font-semibold text-bark mb-4">贡献者招募</h3>
              <div className="space-y-1 font-body text-xs text-bark-light leading-relaxed">
                <p>攻略作者 — 撰写和更新游戏攻略</p>
                <p>数据测试员 — 验证游戏数值和数据</p>
                <p>翻译志愿者 — 英文资讯中文化</p>
                <p>UI 设计师 — 改进攻略展示效果</p>
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
