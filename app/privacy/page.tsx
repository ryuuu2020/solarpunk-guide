'use client';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-field-paper bg-paper-texture">
      <header className="pt-12 pb-6 px-4 lg:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col items-start">
          <a href="/" className="font-display text-sm text-moss hover:text-moss-dark transition-colors mb-4">&larr; 返回首页</a>
          <h1 className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-bark leading-none">隐私政策</h1>
        </div>
        <div className="field-divider mt-6" />
      </header>

      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="space-y-8">
          <section>
            <p className="font-body text-bark-light leading-relaxed">
              Solarpunk 生存指南（以下简称"本站"）非常重视用户的隐私保护。本隐私政策说明了我们如何收集、使用和保护您的信息。使用本站即表示您同意本隐私政策的条款。
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-bark">我们收集的信息</h2>
            <p className="font-body text-bark-light leading-relaxed mt-3">
              本站通过 Google Analytics 收集匿名的访问统计数据，包括页面浏览量、访问时长、大致地理位置和设备类型等。这些数据无法用于识别个人身份，仅用于分析网站流量和优化内容。
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-bark">Cookie 使用</h2>
            <p className="font-body text-bark-light leading-relaxed mt-3">
              本站使用 Google Analytics 的 Cookie 来追踪访问数据。您可以在浏览器设置中禁用 Cookie，但可能会影响部分功能的正常使用。我们不会使用 Cookie 来收集个人身份信息或进行广告追踪。
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-bark">第三方服务</h2>
            <p className="font-body text-bark-light leading-relaxed mt-3">
              本站使用 Google Analytics 和 Google Tag Manager 进行流量分析。这些服务的隐私政策请参考 Google 官方网站。本站包含指向爱发电等第三方平台的链接，我们对这些外部网站的隐私实践不承担任何责任。
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-bark">数据安全</h2>
            <p className="font-body text-bark-light leading-relaxed mt-3">
              本站采取合理的技术手段保护数据安全。由于本站仅收集匿名统计数据，不存储任何用户个人身份信息，因此不存在个人数据泄露的风险。
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-bark">联系我们</h2>
            <p className="font-body text-bark-light leading-relaxed mt-3">
              如果您对本隐私政策有任何疑问，请通过爱发电平台联系我们。
            </p>
          </section>
        </div>
        <div className="field-divider mt-16" />
      </main>

      <footer className="max-w-6xl mx-auto px-4 lg:px-8 py-10 text-center">
        <p className="font-body text-xs text-stone">&copy; {new Date().getFullYear()} Solarpunk 生存指南 · <a href="/" className="hover:text-bark transition-colors">返回首页</a> · <a href="/terms" className="hover:text-bark transition-colors">使用条款</a></p>
      </footer>
    </div>
  );
}
