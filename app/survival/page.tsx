import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solarpunk 生存指南 — 从零开始的浮岛生存攻略',
  description: 'Solarpunk 新手入门完全指南：第一天该做什么、能源系统、食物来源、基地选址、飞船修复。从零开始打造你的浮岛家园。',
};

export default function SurvivalPage() {
  return (
    <div className="min-h-screen bg-field-paper bg-paper-texture">
      <header className="pt-12 pb-6 px-4 lg:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col items-start">
          <a href="/" className="font-display text-sm text-moss hover:text-moss-dark transition-colors mb-4">&larr; 返回首页</a>
          <h1 className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-bark leading-none">
            生存指南
          </h1>
          <p className="font-body text-base text-stone mt-3 max-w-md leading-relaxed italic">
            从零开始的 Solarpunk 生存完全攻略
          </p>
        </div>
        <div className="field-divider mt-6" />
      </header>

      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="flex-1 lg:max-w-[65%] space-y-16">

            {/* Day 1: First Steps */}
            <section>
              <h2 className="font-display text-3xl font-bold text-bark">第一天：开局必做</h2>
              <div className="space-y-4 mt-6">
                <p className="font-body text-bark-light leading-relaxed">
                  进入 Solarpunk 世界的第一天至关重要。你出生在一个浮岛上，周围有基础的树木、石头和少量资源。以下是新手开局的标准操作流程。
                </p>

                <div className="journal-card p-6">
                  <h3 className="font-display text-lg font-semibold text-bark mb-4">Day 1 操作清单</h3>
                  <ol className="space-y-4 font-body text-bark-light">
                    <li className="flex gap-3">
                      <span className="step-number shrink-0">1</span>
                      <div>
                        <strong className="text-bark">制作生存手册</strong>
                        <p className="mt-1">收集2个木材（砍树获得），按F键打开制作菜单，制作「生存手册」。这是整个游戏最重要的物品——它解锁配方浏览器、追踪游戏进程，并给出下一步提示。</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="step-number shrink-0">2</span>
                      <div>
                        <strong className="text-bark">建立临时庇护所</strong>
                        <p className="mt-1">用木材建造一个4x4的小木屋。不需要太大——初期只需要一个放工作台和床的空间。确保有屋顶（雨天会损坏未覆盖的物品）。</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="step-number shrink-0">3</span>
                      <div>
                        <strong className="text-bark">制作基础工具</strong>
                        <p className="mt-1">制作木斧（砍树效率+50%）、木镐（采矿效率+50%）和木剑（基础自卫）。优先制作工具，而不是直接用手采集。</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="step-number shrink-0">4</span>
                      <div>
                        <strong className="text-bark">采集食物</strong>
                        <p className="mt-1">采集浆果丛（每个产出3-5个浆果），如果岛上有苹果树就敲下来。Day 1需要至少20个食物单位维持饱食度。</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="step-number shrink-0">5</span>
                      <div>
                        <strong className="text-bark">制作篝火</strong>
                        <p className="mt-1">用5个木材和3个石头制作篝火。夜晚温度下降，篝火提供温暖和烹饪功能。</p>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
            </section>

            {/* Energy System */}
            <section>
              <h2 className="font-display text-3xl font-bold text-bark">能源系统详解</h2>
              <div className="space-y-4 mt-6">
                <p className="font-body text-bark-light leading-relaxed">
                  Solarpunk 的能源系统是所有自动化生产的基础。没有电力，你的传送带、无人机和高级工作台都无法运转。理解能源系统是游戏进阶的关键。
                </p>

                <h3 className="font-display text-xl font-semibold text-bark mt-8">发电设备对比</h3>
                <div className="overflow-x-auto mt-4">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="border-b-2 border-moss/30">
                        <th className="text-left py-3 px-4 font-display font-semibold text-bark">设备</th>
                        <th className="text-left py-3 px-4 font-display font-semibold text-bark">产出（/小时）</th>
                        <th className="text-left py-3 px-4 font-display font-semibold text-bark">工作时间</th>
                        <th className="text-left py-3 px-4 font-display font-semibold text-bark">材料需求</th>
                      </tr>
                    </thead>
                    <tbody className="font-body text-bark-light">
                      <tr className="border-b border-clay/30">
                        <td className="py-3 px-4 font-semibold text-bark">太阳能板</td>
                        <td className="py-3 px-4">15 单位</td>
                        <td className="py-3 px-4">仅白天</td>
                        <td className="py-3 px-4">铁锭x5 + 玻璃x3 + 铜线x8</td>
                      </tr>
                      <tr className="border-b border-clay/30">
                        <td className="py-3 px-4 font-semibold text-bark">风力发电机</td>
                        <td className="py-3 px-4">8 单位</td>
                        <td className="py-3 px-4">全天候</td>
                        <td className="py-3 px-4">铁锭x8 + 布料x4 + 木材x6</td>
                      </tr>
                      <tr className="border-b border-clay/30">
                        <td className="py-3 px-4 font-semibold text-bark">电池组</td>
                        <td className="py-3 px-4">储存50单位</td>
                        <td className="py-3 px-4">被动充放电</td>
                        <td className="py-3 px-4">铜锭x6 + 铁锭x3 + 玻璃x2</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-semibold text-bark">高级太阳能</td>
                        <td className="py-3 px-4">25 单位</td>
                        <td className="py-3 px-4">仅白天</td>
                        <td className="py-3 px-4">钢锭x5 + 强化玻璃x3 + 芯片x2</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="font-display text-xl font-semibold text-bark mt-8">推荐能源配置</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <div className="journal-card p-5">
                    <h4 className="font-display font-semibold text-bark text-sm">初期配置（Day 1-7）</h4>
                    <ul className="font-body text-sm text-bark-light mt-2 space-y-1 list-disc list-inside">
                      <li>1x 太阳能板</li>
                      <li>1x 电池组</li>
                      <li>供能：工作台 + 熔炉</li>
                    </ul>
                  </div>
                  <div className="journal-card p-5">
                    <h4 className="font-display font-semibold text-bark text-sm">中期配置（L2岛屿解锁后）</h4>
                    <ul className="font-body text-sm text-bark-light mt-2 space-y-1 list-disc list-inside">
                      <li>2x 太阳能板</li>
                      <li>1x 风力发电机</li>
                      <li>3x 电池组</li>
                      <li>供能：传送带 + 自动化</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Food & Farming */}
            <section>
              <h2 className="font-display text-3xl font-bold text-bark">食物与农耕</h2>
              <div className="space-y-4 mt-6">
                <p className="font-body text-bark-light leading-relaxed">
                  食物是生存的基础。饱食度归零会持续扣血。Solarpunk 提供多种食物来源：采集、狩猎、种植和自动化农场。
                </p>

                <h3 className="font-display text-xl font-semibold text-bark mt-8">食物来源优先级</h3>
                <div className="space-y-3 mt-4">
                  <div className="journal-card p-4">
                    <span className="field-tag moss text-[10px] mb-2 inline-block">前期</span>
                    <h4 className="font-display font-semibold text-bark">浆果采集 + 简单农耕</h4>
                    <p className="font-body text-sm text-bark-light mt-1">采集岛上浆果丛，用木材制作4-6块耕地，种植胡萝卜（生长最快，3天成熟）。</p>
                  </div>
                  <div className="journal-card p-4">
                    <span className="field-tag terracotta text-[10px] mb-2 inline-block">中期</span>
                    <h4 className="font-display font-semibold text-bark">多样化农场 + 洒水系统</h4>
                    <p className="font-body text-sm text-bark-light mt-1">扩展农田至12-16块，加入小麦和土豆。建造洒水器连接水管，实现自动灌溉。</p>
                  </div>
                  <div className="journal-card p-4">
                    <span className="field-tag stone text-[10px] mb-2 inline-block">后期</span>
                    <h4 className="font-display font-semibold text-bark">全自动农场 + 食品加工</h4>
                    <p className="font-body text-sm text-bark-light mt-1">自动播种机+自动收割机+传送带直接送入仓库。建造食品加工台制作高级食物（面包、果酱）。</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Island Tiers */}
            <section>
              <h2 className="font-display text-3xl font-bold text-bark">岛屿等级与资源分布</h2>
              <div className="space-y-4 mt-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="border-b-2 border-moss/30">
                        <th className="text-left py-3 px-4 font-display font-semibold text-bark">等级</th>
                        <th className="text-left py-3 px-4 font-display font-semibold text-bark">解锁条件</th>
                        <th className="text-left py-3 px-4 font-display font-semibold text-bark">主要资源</th>
                        <th className="text-left py-3 px-4 font-display font-semibold text-bark">难度</th>
                      </tr>
                    </thead>
                    <tbody className="font-body text-bark-light">
                      <tr className="border-b border-clay/30">
                        <td className="py-3 px-4"><span className="field-tag moss text-[10px]">L1 初始</span></td>
                        <td className="py-3 px-4">出生点</td>
                        <td className="py-3 px-4">木材、石头、浆果、少量铜</td>
                        <td className="py-3 px-4">低</td>
                      </tr>
                      <tr className="border-b border-clay/30">
                        <td className="py-3 px-4"><span className="field-tag terracotta text-[10px]">L2 中级</span></td>
                        <td className="py-3 px-4">修复飞船 + 完成交易</td>
                        <td className="py-3 px-4">铜矿（丰富）、铁矿、煤矿</td>
                        <td className="py-3 px-4">中</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4"><span className="field-tag stone text-[10px]">L3 高级</span></td>
                        <td className="py-3 px-4">飞船引擎升级</td>
                        <td className="py-3 px-4">钴矿、金矿、芯片材料</td>
                        <td className="py-3 px-4">高</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

          </div>

          <aside className="lg:w-[30%] space-y-10 shrink-0">
            <div className="field-sidebar-block">
              <h3 className="font-display text-base font-semibold text-bark mb-4">快速导航</h3>
              <div className="space-y-2 font-body text-sm">
                <a href="#day1" className="block text-bark-light hover:text-bark transition-colors">第一天开局</a>
                <a href="#energy" className="block text-bark-light hover:text-bark transition-colors">能源系统</a>
                <a href="#food" className="block text-bark-light hover:text-bark transition-colors">食物与农耕</a>
                <a href="#islands" className="block text-bark-light hover:text-bark transition-colors">岛屿等级</a>
              </div>
            </div>
          </aside>
        </div>

        <div className="field-divider mt-16" />
      </main>

      <footer className="max-w-6xl mx-auto px-4 lg:px-8 py-10 text-center">
        <p className="font-body text-xs text-stone">
          &copy; {new Date().getFullYear()} Solarpunk 生存指南 · <a href="/" className="hover:text-bark transition-colors">返回首页</a>
        </p>
      </footer>
    </div>
  );
}
