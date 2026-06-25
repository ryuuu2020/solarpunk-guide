'use client';

import { useState, useRef, useEffect } from 'react';

/* ============================================
   Solarpunk Guide — Template C: Field Journal
   Asymmetric Layout + Hand-Drawn Elements
   ============================================ */

const NAV_ITEMS = [
  { label: '生存日志', href: '/', active: true },
  { label: '建造指南', href: '/guides' },
  { label: '制作配方', href: '/crafting' },
  { label: '世界地图', href: '/map' },
  { label: '生存技巧', href: '/tips' },
  { label: '社区', href: '/community' },
];

const FEATURED_GUIDES = [
  {
    title: '新手生存完全指南',
    excerpt: '从登陆浮空岛的第一天到建立自给自足的基地，手把手带你走完 Solarpunk 前 10 小时',
    tag: 'GUIDE',
    tagType: 'moss' as const,
    readTime: '15',
  },
  {
    title: '飞船建造与自定义教程',
    excerpt: '详解飞行器建造系统：引擎选择、甲板布局、燃料管理以及如何在云层之上建立移动基地',
    tag: 'TUTORIAL',
    tagType: 'terracotta' as const,
    readTime: '12',
  },
];

const CRAFTING_RECIPES = [
  { name: '基础工作台', materials: '木材x10 + 石头x5', tier: '1' },
  { name: '太阳能电池板', materials: '硅片x4 + 铜线x8 + 玻璃x2', tier: '2' },
  { name: '自动浇水系统', materials: '铁管x6 + 水泵x1 + 电路板x2', tier: '3' },
  { name: '飞船引擎核心', materials: '钛合金x20 + 能源核心x1 + 高级电路x5', tier: '4' },
];

const TIPS = [
  { tip: '早期优先建造雨水收集器，水资源比食物更稀缺', category: '生存' },
  { tip: '浮空岛边缘放围栏防止失足坠落', category: '建造' },
  { tip: '太阳能板需要定期清洁，灰尘会降低效率', category: '科技' },
  { tip: '暖色调灯光可以减少作物夜间生长惩罚', category: '农耕' },
];

export default function HomePage() {
  const [activeNav, setActiveNav] = useState(NAV_ITEMS[0].label);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    const activeEl = container.querySelector('.nav-pill.active');
    if (activeEl) {
      activeEl.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }, [activeNav]);

  return (
    <div className="min-h-screen bg-field-paper bg-paper-texture">

      {/* ===== Hero Image ===== */}
      <div className="w-full h-48 lg:h-80 overflow-hidden">
        <img src="/hero.jpg" alt="Solarpunk" className="w-full h-full object-cover" />
      </div>

      {/* ===== Header ===== */}
      <header className="pt-12 pb-6 px-4 lg:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col items-start">
          <h1 className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-bark leading-none">
            Solarpunk 生存指南
          </h1>
            <p className="font-body text-base text-stone mt-3 max-w-md leading-relaxed italic">
              在漂浮岛屿上生存、建造、探索 —— 从零开始的 Solarpunk 攻略日志
            </p>

          <div className="w-full mt-8">
            <div
              ref={scrollRef}
              className="flex gap-1.5 overflow-x-auto pb-2 scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setActiveNav(item.label)}
                  className={`nav-pill ${activeNav === item.label ? 'active' : ''}`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="field-divider mt-6" />
      </header>

      {/* ===== Main Content: Asymmetric Layout ===== */}
      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

          {/* ===== Main Column (wider, left) ===== */}
          <div className="flex-1 lg:max-w-[65%] space-y-16">

            {/* --- Welcome / Hero message --- */}
            <section>
              <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight text-bark leading-tight text-balance">
                欢迎来到浮空岛世界
              </h2>
              <p className="font-body text-lg text-bark-light leading-relaxed mt-4 max-w-2xl">
                Solarpunk 是一款开放世界生存建造游戏，你将独自或与朋友一起在漂浮于空中的岛屿上建立家园。从采集第一块木材开始，逐步解锁科技树，建造自动化工厂，打造属于你自己的飞行器。本指南从零开始，带你掌握所有核心系统。
              </p>
            </section>

            {/* --- Featured Guides --- */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-display text-xl font-semibold text-bark">
                    精选攻略
                  </h3>
                  <p className="font-body text-sm text-stone mt-1">
                    从零开始的 Solarpunk 冒险之旅
                  </p>
                </div>
                <a
                  href="/guides"
                  className="font-body text-sm font-semibold text-moss hover:text-moss-dark transition-colors"
                >
                  查看全部 &rarr;
                </a>
              </div>

              <div className="space-y-4">
                {FEATURED_GUIDES.map((guide, i) => (
                  <a
                    key={i}
                    href={i === 0 ? '/beginners' : '/airship'}
                    className="journal-card block p-6 group"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className={`field-tag ${guide.tagType}`}>
                            {guide.tag}
                          </span>
                        </div>
                        <h4 className="font-display text-lg font-semibold text-bark
                                       group-hover:text-moss transition-colors duration-200">
                          {guide.title}
                        </h4>
                        <p className="font-body text-sm text-bark-light leading-relaxed mt-2 line-clamp-2">
                          {guide.excerpt}
                        </p>
                      </div>
                      <span className="font-body text-xs text-stone whitespace-nowrap">
                        {guide.readTime} 分钟阅读
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </section>

            {/* --- Getting Started Steps --- */}
            <section>
              <div className="mb-6">
                <h3 className="font-display text-xl font-semibold text-bark">
                  快速上手
                </h3>
                <p className="font-body text-sm text-stone mt-1">
                  从零开始在浮空岛上生存
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { step: '01', title: '收集基础资源', desc: '落地后优先收集木材、石头和纤维。制作石斧和石镐，提升采集效率。留意浆果丛和可食用植物。' },
                  { step: '02', title: '建造第一个庇护所', desc: '用木材搭建 3x3 的小屋，放置工作台和篝火。制作床铺以保证睡眠质量，这会直接影响工作效率。' },
                  { step: '03', title: '解锁科技树', desc: '建造研究台后，优先研究基础农耕和基础电力。解锁太阳能板和水泵，为自动化做准备。' },
                ].map((s, i) => (
                  <div key={i} className="flex gap-5 items-start">
                    <span className="step-number shrink-0">{s.step}</span>
                    <div>
                      <h4 className="font-display text-base font-semibold text-bark">
                        {s.title}
                      </h4>
                      <p className="font-body text-sm text-bark-light leading-relaxed mt-1">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* --- Tips & Tricks --- */}
            <section>
              <div className="mb-6">
                <h3 className="font-display text-xl font-semibold text-bark">
                  实用技巧
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {TIPS.map((item, i) => (
                  <div key={i} className="journal-card p-4">
                    <span className="field-tag stone text-[10px] mb-2 inline-block">
                      {item.category}
                    </span>
                    <p className="font-body text-sm text-bark leading-relaxed">
                      {item.tip}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* --- Quick Reference: Key Systems --- */}
            <section>
              <h3 className="font-display text-xl font-semibold text-bark mb-6">
                核心系统速览
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b-2 border-moss/30">
                      <th className="text-left py-3 px-4 font-display font-semibold text-bark">系统</th>
                      <th className="text-left py-3 px-4 font-display font-semibold text-bark">核心机制</th>
                      <th className="text-left py-3 px-4 font-display font-semibold text-bark">关键解锁</th>
                    </tr>
                  </thead>
                  <tbody className="font-body text-bark-light">
                    <tr className="border-b border-clay/30">
                      <td className="py-3 px-4 font-semibold text-bark">能源</td>
                      <td className="py-3 px-4">太阳能/风能/电池储能，日夜循环管理</td>
                      <td className="py-3 px-4">太阳能板、风力发电机、电池组</td>
                    </tr>
                    <tr className="border-b border-clay/30">
                      <td className="py-3 px-4 font-semibold text-bark">自动化</td>
                      <td className="py-3 px-4">传送带、分类器、无人机运输网络</td>
                      <td className="py-3 px-4">传送带系统、智能分类器、无人机基站</td>
                    </tr>
                    <tr className="border-b border-clay/30">
                      <td className="py-3 px-4 font-semibold text-bark">农耕</td>
                      <td className="py-3 px-4">种植、灌溉、施肥、自动化收获</td>
                      <td className="py-3 px-4">耕地、洒水器、肥料站、自动收割机</td>
                    </tr>
                    <tr className="border-b border-clay/30">
                      <td className="py-3 px-4 font-semibold text-bark">飞船</td>
                      <td className="py-3 px-4">修复、升级、解锁更高级岛屿</td>
                      <td className="py-3 px-4">修理套件、飞船码头、引擎升级</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-bark">建造</td>
                      <td className="py-3 px-4">模块化建造、房间系统、美观度</td>
                      <td className="py-3 px-4">木墙/石墙/钢墙、地板、屋顶</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* --- FAQ Section --- */}
            <section>
              <h3 className="font-display text-xl font-semibold text-bark mb-6">
                玩家常问
              </h3>
              <div className="space-y-2">
                {[
                  { q: 'Solarpunk 中第一件该做什么？', a: '立即用2个木材制作生存手册。它解锁配方浏览器、追踪游戏进程，是游戏中最重要的物品。' },
                  { q: '如何获得铜矿？', a: '初始岛屿铜矿稀少。优先修复飞船前往L2岛屿，那里铜矿储量丰富。用熔炉将铜矿冶炼为铜锭。' },
                  { q: '太阳能板如何工作？', a: '白天产出15单位/小时，夜晚为零。用电池储存白天多余电力供夜间使用。推荐2太阳能+1风车+2电池配置。' },
                ].map((faq, i) => (
                  <details key={i} className="journal-card p-4 group cursor-pointer">
                    <summary className="font-display font-semibold text-bark text-sm marker:text-moss">
                      {faq.q}
                    </summary>
                    <p className="font-body text-sm text-bark-light leading-relaxed mt-3 pl-1 border-l-2 border-moss/30 pl-3">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </section>

          </div>

          {/* ===== Sidebar (narrower, right) ===== */}
          <aside className="lg:w-[30%] space-y-10 shrink-0">
            {/* --- Crafting Quick Reference --- */}
            <div className="field-sidebar-block">
              <h3 className="font-display text-base font-semibold text-bark mb-4">
                关键配方速查
              </h3>
              <div className="space-y-3">
                {CRAFTING_RECIPES.map((recipe, i) => (
                  <div key={i} className="recipe-card">
                    <h4 className="font-display text-sm font-semibold text-bark">
                      {recipe.name}
                    </h4>
                    <p className="font-body text-xs text-stone mt-1 leading-relaxed">
                      {recipe.materials}
                    </p>
                    <span className="field-tag terracotta text-[10px] mt-2 inline-block">
                      {recipe.tier}
                    </span>
                  </div>
                ))}
              </div>
              <a
                href="/crafting"
                className="inline-block font-body text-xs font-semibold text-moss hover:text-moss-dark transition-colors mt-4"
              >
                完整配方列表 &rarr;
              </a>
            </div>

            {/* --- Community Updates --- */}
            <div className="field-sidebar-block">
              <h3 className="font-display text-base font-semibold text-bark mb-4">
                最新动态
              </h3>
              <div className="space-y-4">
                {[
                  { date: '2026-06-20', text: '社区发现新型自动化农场布局，产量提升 40%' },
                  { date: '2026-06-15', text: '官方确认下次更新将加入新生物群系"水晶洞穴"' },
                  { date: '2026-06-10', text: '玩家自制飞船蓝图分享活动开启' },
                ].map((update, i) => (
                  <div key={i}>
                    <span className="font-body text-[11px] text-stone">
                      {update.date}
                    </span>
                    <p className="font-body text-sm text-bark-light mt-0.5 leading-relaxed">
                      {update.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* --- Afdian support card --- */}
            <div className="bg-moss-light/50 border border-moss/20 p-6">
              <h3 className="font-display text-sm font-semibold text-moss-dark mb-2">
                支持本站
              </h3>
              <p className="font-body text-xs text-bark-light leading-relaxed mb-4">
                如果本指南对你有帮助，欢迎支持我们持续更新更多深度攻略
              </p>
              <a
                href="https://afdian.com/a/gameguidehub"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-pill
                           bg-moss text-white text-sm font-semibold
                           hover:bg-moss-dark transition-colors duration-200"
              >
                ❤️ 支持我们
              </a>
            </div>
          </aside>

        </div>

        <div className="field-divider mt-16" />
      </main>

      {/* ===== Footer ===== */}
      <footer className="max-w-6xl mx-auto px-4 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <span className="font-body text-sm text-stone">
              &copy; {new Date().getFullYear()} Solarpunk 生存指南
            </span>
            <a
              href="/privacy"
              className="font-body text-sm text-stone hover:text-bark transition-colors"
            >
              隐私政策
            </a>
            <a
              href="/terms"
              className="font-body text-sm text-stone hover:text-bark transition-colors"
            >
              使用条款
            </a>
            <a
              href="/about"
              className="font-body text-sm text-stone hover:text-bark transition-colors"
            >
              关于本站
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://afdian.com/a/gameguidehub"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm font-semibold text-terracotta hover:text-terracotta-dark transition-colors"
            >
              爱发电 &rarr;
            </a>
          </div>
        </div>
        {/* More Game Guides */}
        <div className="mt-6 pt-6 border-t border-clay/30">
          <p className="font-body text-xs text-stone mb-3 text-center">More Game Guides</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://dispatch-guide-sigma.vercel.app" className="font-body text-xs text-bark-light hover:text-bark transition-colors">Dispatch Guide</a>
            <a href="https://menace-guide.vercel.app" className="font-body text-xs text-bark-light hover:text-bark transition-colors">MENACE Guide</a>
            <a href="https://olden-era-guide-tau.vercel.app" className="font-body text-xs text-bark-light hover:text-bark transition-colors">Olden Era Guide</a>
            <a href="https://going-medieval-guide.vercel.app" className="font-body text-xs text-bark-light hover:text-bark transition-colors">Going Medieval Guide</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
