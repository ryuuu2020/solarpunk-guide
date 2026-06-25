'use client';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-field-paper bg-paper-texture">
      <header className="pt-12 pb-6 px-4 lg:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col items-start">
          <a href="/" className="font-display text-sm text-moss hover:text-moss-dark transition-colors mb-4">&larr; 返回首页</a>
          <h1 className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-bark leading-none">使用条款</h1>
        </div>
        <div className="field-divider mt-6" />
      </header>

      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="space-y-8">
          <section>
            <p className="font-body text-bark-light leading-relaxed">
              欢迎使用 Solarpunk 生存指南。使用本站即表示您同意遵守以下使用条款。如果您不同意这些条款，请停止使用本站。
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-bark">内容使用</h2>
            <p className="font-body text-bark-light leading-relaxed mt-3">
              本站所有攻略内容均为社区志愿者编写，供个人学习和参考使用。您可以自由浏览和在社交媒体上分享链接，但未经许可不得将本站内容用于商业目的。如需转载或在其他平台引用本站内容，请注明出处并链接回本站原文。
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-bark">内容准确性</h2>
            <p className="font-body text-bark-light leading-relaxed mt-3">
              本站攻略内容基于社区玩家的实际游戏经验编写，尽力确保信息的准确性。但由于游戏版本持续更新，部分信息可能存在时效性差异。本站不对因使用攻略内容而导致的游戏进度问题或其他损失承担责任。建议将本站信息作为参考，实际游戏操作请以游戏内显示为准。
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-bark">知识产权</h2>
            <p className="font-body text-bark-light leading-relaxed mt-3">
              Solarpunk 游戏名称、图标、游戏截图和相关资产归 Cyberwave 和 rokaplay 所有。本站是一个粉丝自制的第三方攻略站，与游戏开发商没有任何官方关联。本站原创的攻略文字内容归作者和社区共同所有。
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-bark">免责声明</h2>
            <p className="font-body text-bark-light leading-relaxed mt-3">
              本站以"现状"提供内容和信息，不作任何形式的明示或暗示保证。本站不对网站的可用性、内容的完整性或服务的持续性做出任何承诺。我们保留随时修改本使用条款的权利，修改后的条款在网站上发布后立即生效。
            </p>
          </section>
        </div>
        <div className="field-divider mt-16" />
      </main>

      <footer className="max-w-6xl mx-auto px-4 lg:px-8 py-10 text-center">
        <p className="font-body text-xs text-stone">&copy; {new Date().getFullYear()} Solarpunk 生存指南 · <a href="/" className="hover:text-bark transition-colors">返回首页</a> · <a href="/privacy" className="hover:text-bark transition-colors">隐私政策</a></p>
      </footer>
    </div>
  );
}
