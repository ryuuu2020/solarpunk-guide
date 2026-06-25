import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '关于 Solarpunk 生存指南 — 玩家社区攻略站',
  description: 'Solarpunk 生存指南是一个由玩家社区维护的免费攻略站。了解我们的使命和内容覆盖范围。',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-field-paper bg-paper-texture">
      <header className="pt-12 pb-6 px-4 lg:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col items-start">
          <a href="/" className="font-display text-sm text-moss hover:text-moss-dark transition-colors mb-4">&larr; 返回首页</a>
          <h1 className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-bark leading-none">关于本站</h1>
          <p className="font-body text-base text-stone mt-3 max-w-md leading-relaxed italic">了解 Solarpunk 生存指南</p>
        </div>
        <div className="field-divider mt-6" />
      </header>

      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="flex-1 lg:max-w-[65%] space-y-12">
            <section>
              <h2 className="font-display text-2xl font-bold text-bark">我们的使命</h2>
              <p className="font-body text-bark-light leading-relaxed mt-4">
                Solarpunk 生存指南是一个由玩家社区维护的免费攻略站。我们的目标是为 Solarpunk 玩家提供全面、准确、易懂的游戏攻略，帮助每一位玩家在浮岛之上建造属于自己的绿色乌托邦。
              </p>
            </section>
            <section>
              <h2 className="font-display text-2xl font-bold text-bark">覆盖内容</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
                {['生存入门指南', '能源系统详解', '全资源采集', '建造与自动化', '飞船系统攻略', '制作配方速查', '农耕与食物', '岛屿探索指南', '进阶技巧合集'].map(item => (
                  <div key={item} className="journal-card p-3 text-center">
                    <span className="font-body text-sm text-bark">{item}</span>
                  </div>
                ))}
              </div>
            </section>
            <section>
              <h2 className="font-display text-2xl font-bold text-bark">免责声明</h2>
              <div className="journal-card p-6 mt-4">
                <p className="font-body text-sm text-bark-light leading-relaxed">
                  Solarpunk 生存指南是一个粉丝自制的第三方攻略网站，与 Cyberwave 或 rokaplay 没有任何官方关联。
                </p>
                <p className="font-body text-sm text-bark-light leading-relaxed mt-3">
                  本站内容由玩家社区贡献和维护。攻略信息仅供参考，游戏数据可能随着版本更新而变化。我们尽力保证内容准确，但不对因攻略信息导致的游戏进度问题负责。
                </p>
                <p className="font-body text-sm text-bark-light leading-relaxed mt-3">
                  Solarpunk 游戏名称、图标和相关资产归其各自所有者版权所有。
                </p>
              </div>
            </section>
          </div>
          <aside className="lg:w-[30%] space-y-10 shrink-0">
            <div className="field-sidebar-block">
              <h3 className="font-display text-base font-semibold text-bark mb-4">联系与支持</h3>
              <div className="space-y-3 font-body text-sm text-bark-light">
                <p>📧 反馈与建议：通过爱发电联系我们</p>
                <a href="https://afdian.com/a/gameguidehub" target="_blank" rel="noopener noreferrer" className="block text-moss hover:text-moss-dark transition-colors">❤️ 在爱发电支持我们</a>
              </div>
            </div>
          </aside>
        </div>
        <div className="field-divider mt-16" />
      </main>
      <footer className="max-w-6xl mx-auto px-4 lg:px-8 py-10 text-center">
        <p className="font-body text-xs text-stone">&copy; {new Date().getFullYear()} Solarpunk 生存指南 · <a href="/" className="hover:text-bark transition-colors">返回首页</a></p>
      </footer>
    </div>
  );
}
