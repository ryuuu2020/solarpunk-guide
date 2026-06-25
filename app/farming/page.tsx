'use client';

export default function FarmingPage() {
  const crops = [
    { name: '浆果', growth: '2-3 天', water: '低', yield: '中', notes: '新手最佳选择，生食即可，无需加工' },
    { name: '叶菜', growth: '2-3 天', water: '中', yield: '高', notes: '生长快、产量高，适合维持日常食物供应' },
    { name: '根茎作物', growth: '4-5 天', water: '低', yield: '高', notes: '耐旱性强，储藏时间长，适合作为储备口粮' },
    { name: '谷类', growth: '5-7 天', water: '中', yield: '中', notes: '需要磨坊加工，可制作面包等长效食物' },
    { name: '纤维作物', growth: '4-5 天', water: '低', yield: '高', notes: '产出布料原材料，是制作衣物和绳索的关键' },
    { name: '药用植物', growth: '6-8 天', water: '中', yield: '低', notes: '用于制作各类药品和治疗物品' },
    { name: '染料植物', growth: '3-5 天', water: '中', yield: '中', notes: '产出天然染料，用于染色布料和装饰物品' },
  ];

  return (
    <div className="min-h-screen bg-field-paper bg-paper-texture">
      <header className="pt-12 pb-6 px-4 lg:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col items-start">
          <a href="/" className="font-display text-sm text-moss hover:text-moss-dark transition-colors mb-4">&larr; 返回首页</a>
          <h1 className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-bark leading-none">农耕系统指南</h1>
          <p className="font-body text-base text-stone mt-3 max-w-md leading-relaxed italic">从开垦第一块耕地到大型自动化农场的完整农耕体系</p>
        </div>
        <div className="field-divider mt-6" />
      </header>

      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="flex-1 lg:max-w-[65%] space-y-12">
            <section>
              <h2 className="font-display text-2xl font-bold text-bark">农耕系统概述</h2>
              <p className="font-body text-bark-light leading-relaxed mt-4">
                农耕是 Solarpunk 中维持稳定食物供给和获取部分工业原料的核心系统。与野外采集不同，农耕提供一个可控、可扩展且可持续的资源产出方式。从最初的一小片手工耕地到横跨多个岛屿的全自动化农场网络，农耕系统的发展贯穿了整个游戏的始终。
              </p>
              <p className="font-body text-bark-light leading-relaxed mt-3">
                在 Solarpunk 中，作物生长受到多个因素的影响：土壤肥力、灌溉水量、日照时长、环境温度和病虫害风险。理解并管理这些变量是成为一名高效农夫的必经之路。每个因素之间还存在交互作用——例如充足的水分会加速肥料的分解吸收，而适宜的温度可以增强作物对病虫害的自然抵抗力。掌握这些深层机制，你就能在资源投入最小化的情况下实现产量最大化。
              </p>
              <p className="font-body text-bark-light leading-relaxed mt-3">
                农耕系统与游戏中的其他系统深度关联。能源系统驱动洒水器和自动收割机，自动化系统通过传送带和分拣器处理收获物，而飞船物流网络则将不同岛屿的农场产出汇总到中央加工基地。一个设计良好的农耕体系不仅能解决你的食物问题，还能为工业加工提供源源不断的植物原料——如纤维作物产出布料、药用植物提供制药原料、染料植物则用于建筑的个性化装饰。对农耕系统的投资是游戏中回报率最高的长期策略之一。
              </p>
              <p className="font-body text-bark-light leading-relaxed mt-3">
                每个岛屿的气候条件直接决定了哪些作物适合在此种植。温带岛屿适合大多数常见作物；荒漠岛屿虽然日照充沛但极度缺水，只适合种植耐旱品种且需要额外的灌溉投入；极地岛屿则只适合极少数耐寒作物，其他作物必须依赖温室和人工供暖才能存活。利用不同岛屿的气候特性进行专业化种植——在温带种植主食作物、在荒漠种植纤维和染料作物、在极地种植稀有药用植物——是最大化农耕产出的进阶策略。
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-bark mb-6">作物一览</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b-2 border-moss/30">
                      <th className="text-left py-3 px-3 font-display font-semibold text-bark">作物</th>
                      <th className="text-left py-3 px-3 font-display font-semibold text-bark">生长周期</th>
                      <th className="text-left py-3 px-3 font-display font-semibold text-bark">需水量</th>
                      <th className="text-left py-3 px-3 font-display font-semibold text-bark">产量</th>
                      <th className="text-left py-3 px-3 font-display font-semibold text-bark">备注</th>
                    </tr>
                  </thead>
                  <tbody className="font-body text-bark-light">
                    {crops.map((c, i) => (
                      <tr key={i} className="border-b border-clay/30">
                        <td className="py-3 px-3 font-semibold text-bark">{c.name}</td>
                        <td className="py-3 px-3">{c.growth}</td>
                        <td className="py-3 px-3">{c.water}</td>
                        <td className="py-3 px-3">{c.yield}</td>
                        <td className="py-3 px-3 text-xs">{c.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="font-body text-xs text-stone mt-4 italic">* 生长周期为社区估算值，实际时间受土壤肥力、灌溉、温度和光照影响。</p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-bark mb-6">灌溉与肥料</h2>
              <p className="font-body text-bark-light leading-relaxed">
                灌溉系统分为三个级别：手动浇水（效率最低，适合 4 块耕地以内的小型农田）、洒水器（中级，覆盖 3x3 范围，需要水管连接水源）和自动灌溉网络（高级，可编程定时、按需供水，支持跨越多个耕地区域的集中供水）。肥料系统同样分为三个等级：基础有机肥、复合肥和高级生长加速剂，不同等级的肥料对作物的增产效果依次递增。使用高级生长加速剂可以在同样条件下将作物成熟时间缩短约 30%（社区估算），但制作成本也较高。
              </p>
              <p className="font-body text-bark-light leading-relaxed mt-3">
                施肥和灌溉的频率需要根据作物类型精确调整。过量施肥不仅浪费资源，还可能导致土壤盐碱化——这会让作物的长期产量下降。建议从第二季种植开始就建立定期的土壤检测和轮作计划。一个成熟的农耕专家会为每个地块制定全年的种植和养护计划，将高产作物和恢复地力的养土植物交替种植。
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-bark mb-6">常见问题</h2>
              <div className="space-y-2">
                <details className="journal-card p-4 group cursor-pointer">
                  <summary className="font-display font-semibold text-bark text-sm marker:text-moss">作物为什么停止生长？</summary>
                  <p className="font-body text-sm text-bark-light leading-relaxed mt-3 pl-3 border-l-2 border-moss/30">
                    主要有四个可能原因：缺水（灌溉系统故障或水源枯竭）、温度过高/过低（超出了作物的耐受范围）、光照不足（作物处于连续阴影中）、或者已达到最大生长阶段待收获。先检查灌溉系统是否正常供水，再确认当前环境温度是否在作物的适宜范围内。如果温度问题是长期性的，考虑迁移该作物到气候更合适的岛屿。
                  </p>
                </details>
                <details className="journal-card p-4 group cursor-pointer">
                  <summary className="font-display font-semibold text-bark text-sm marker:text-moss">如何实现全年不间断生产？</summary>
                  <p className="font-body text-sm text-bark-light leading-relaxed mt-3 pl-3 border-l-2 border-moss/30">
                    利用不同岛屿的气候差异建立跨岛屿的种植体系。在温带岛屿种植大部分主食作物，在荒漠岛屿利用长日照种植需光作物，在极地岛屿的温室中维持稀有作物的全年生产。通过飞船物流将各岛屿的农产品集中到主基地进行统一加工和存储。这种分布式种植架构在社区中被称为"农作物联"模式，是目前已知的可持续性最佳的农业生产方案。
                  </p>
                </details>
                <details className="journal-card p-4 group cursor-pointer">
                  <summary className="font-display font-semibold text-bark text-sm marker:text-moss">农耕自动化需要哪些前提条件？</summary>
                  <p className="font-body text-sm text-bark-light leading-relaxed mt-3 pl-3 border-l-2 border-moss/30">
                    首先需要解锁自动农耕研究中的洒水器和自动收割机配方；其次需要稳定的能源供应来驱动这些设备（单块农田的自动化设备大约消耗 5 单位/小时的电力，社区估算）；最后需要建立传送带系统将收获物自动运输到仓库。建议先用 4-6 块耕地的中小型农场测试你的自动化设计，确认运转稳定后再扩展到更大规模。
                  </p>
                </details>
              </div>
            </section>
          </div>

          <aside className="lg:w-[30%] space-y-10 shrink-0">
            <div className="field-sidebar-block">
              <h3 className="font-display text-base font-semibold text-bark mb-4">相关攻略</h3>
              <div className="space-y-2 font-body text-sm">
                <a href="/automation" className="block text-moss hover:text-moss-dark transition-colors">自动化系统指南</a>
                <a href="/energy" className="block text-moss hover:text-moss-dark transition-colors">能源系统指南</a>
                <a href="/resources" className="block text-moss hover:text-moss-dark transition-colors">资源采集指南</a>
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
