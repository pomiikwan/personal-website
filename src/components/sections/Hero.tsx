export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 lg:pt-16 pb-20"
    >
      <div className="container-custom py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 左侧：文字内容 */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              <span className="gradient-text">关威雄</span>
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-foreground/80 mb-6">
              资产架构师
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-foreground/70 mb-8 leading-relaxed">
              极端市场环境下的资产保全与增值专家
              <br className="hidden sm:block" />
              16年专注一件事：
              <span className="text-tech-cyan">
                在极端市场环境下实现资产的保全与增值
              </span>
            </p>

            {/* 核心数据 - 响应式布局 */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 mb-8">
              <div className="bg-card border border-border rounded-lg p-3 lg:p-4 corner-deco">
                <div className="text-2xl lg:text-3xl font-bold text-tech-cyan flex items-center justify-center gap-2">
                  <svg
                    className="w-5 h-5 lg:w-6 lg:h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                  <span>16+</span>
                </div>
                <div className="text-xs lg:text-sm text-foreground/60 mt-1">
                  年实战经验
                </div>
              </div>
              <div className="bg-card border border-border rounded-lg p-3 lg:p-4 corner-deco">
                <div className="text-2xl lg:text-3xl font-bold text-finance-gold flex items-center justify-center gap-2">
                  <svg
                    className="w-5 h-5 lg:w-6 lg:h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                    />
                  </svg>
                  <span>489%</span>
                </div>
                <div className="text-xs lg:text-sm text-foreground/60 mt-1">
                  最佳基金收益
                </div>
              </div>
              <div className="bg-card border border-border rounded-lg p-3 lg:p-4 corner-deco">
                <div className="text-2xl lg:text-3xl font-bold text-tactical-green flex items-center justify-center gap-2">
                  <svg
                    className="w-5 h-5 lg:w-6 lg:h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>100%</span>
                </div>
                <div className="text-xs lg:text-sm text-foreground/60 mt-1">
                  账户正收益
                </div>
              </div>
              <div className="bg-card border border-border rounded-lg p-3 lg:p-4 corner-deco col-span-2 lg:col-span-1">
                <div className="text-2xl lg:text-3xl font-bold text-tech-cyan flex items-center justify-center gap-2">
                  <svg
                    className="w-5 h-5 lg:w-6 lg:h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                  <span>3</span>
                </div>
                <div className="text-xs lg:text-sm text-foreground/60 mt-1">
                  私募基金主体
                </div>
              </div>
            </div>

            {/* CTA按钮 */}
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
              <button className="px-8 py-3 btn-primary font-semibold rounded-lg transition tech-glow flex items-center justify-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10" strokeWidth={2} />
                  <circle cx="12" cy="12" r="6" strokeWidth={2} />
                  <circle cx="12" cy="12" r="2" fill="currentColor" />
                </svg>
                了解我的能力
              </button>
              <button className="px-8 py-3 btn-secondary font-semibold rounded-lg transition flex items-center justify-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <rect x="3" y="3" width="7" height="7" strokeWidth={2} />
                  <rect x="14" y="3" width="7" height="7" strokeWidth={2} />
                  <rect x="14" y="14" width="7" height="7" strokeWidth={2} />
                  <rect x="3" y="14" width="7" height="7" strokeWidth={2} />
                </svg>
                查看服务接口
              </button>
            </div>
          </div>

          {/* 右侧：SXA模型 */}
          <div className="bg-card border border-border rounded-lg p-6 lg:p-8 corner-deco">
            <div className="text-center mb-4">
              <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-xl bg-tech-cyan/20 border-2 border-tech-cyan flex items-center justify-center mx-auto mb-3">
                <svg
                  className="w-8 h-8 lg:w-10 lg:h-10 text-tech-cyan icon-pulse"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold">SXA反身性交易模型</h3>
              <p className="text-xs sm:text-sm text-foreground/60 mt-2">
                基于索罗斯理论的量化+主观混合策略
              </p>
            </div>

            {/* 流程图 */}
            <div className="flex items-center justify-between mb-4 lg:mb-6">
              <div className="flex flex-col items-center gap-2 lg:gap-3">
                <div className="w-14 h-14 lg:w-20 lg:h-20 rounded-full bg-tech-cyan/20 border-2 border-tech-cyan flex items-center justify-center">
                  <svg
                    className="w-6 h-6 lg:w-8 lg:h-8 text-tech-cyan"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="11" cy="11" r="8" strokeWidth={2} />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-4.35-4.35"
                    />
                  </svg>
                </div>
                <span className="text-xs font-semibold">研判</span>
              </div>
              <svg
                className="w-6 h-6 lg:w-8 lg:h-8 text-tech-cyan/50 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <polyline points="9,18 15,12 9,6" strokeWidth={2} />
              </svg>
              <div className="flex flex-col items-center gap-2 lg:gap-3">
                <div className="w-14 h-14 lg:w-20 lg:h-20 rounded-full bg-finance-gold/20 border-2 border-finance-gold flex items-center justify-center">
                  <svg
                    className="w-6 h-6 lg:w-8 lg:h-8 text-finance-gold"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <span className="text-xs font-semibold">发掘</span>
              </div>
              <svg
                className="w-6 h-6 lg:w-8 lg:h-8 text-finance-gold/50 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <polyline points="9,18 15,12 9,6" strokeWidth={2} />
              </svg>
              <div className="flex flex-col items-center gap-2 lg:gap-3">
                <div className="w-14 h-14 lg:w-20 lg:h-20 rounded-full bg-tactical-green/20 border-2 border-tactical-green flex items-center justify-center">
                  <svg
                    className="w-6 h-6 lg:w-8 lg:h-8 text-tactical-green"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="10" strokeWidth={2} />
                    <polygon
                      points="10,8 16,12 10,16"
                      fill="currentColor"
                      strokeWidth={2}
                    />
                  </svg>
                </div>
                <span className="text-xs font-semibold">决策</span>
              </div>
            </div>

            {/* 反身性循环指示 */}
            <div className="text-center mb-4 lg:mb-6">
              <svg
                className="w-8 h-8 mx-auto text-tech-cyan/50 animate-spin"
                style={{ animationDuration: '3s' }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <polyline points="23,4 23,10 17,10" strokeWidth={2} />
                <polyline points="1,20 1,14 7,14" strokeWidth={2} />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"
                />
              </svg>
              <span className="text-xs text-tech-cyan block mt-2">
                反身性增强循环
              </span>
            </div>

            {/* 实战业绩 */}
            <div className="bg-background/50 rounded-lg p-3 lg:p-4 mb-4 lg:mb-6">
              <div className="text-xs sm:text-sm text-foreground/60 mb-2 lg:mb-3 flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8l4 4-4 4M8 12h8"
                  />
                </svg>
                实战业绩（全部实盘）
              </div>
              <div className="grid grid-cols-2 gap-2 lg:gap-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs lg:text-sm text-foreground/60">
                    万有道1号
                  </span>
                  <span className="text-base lg:text-lg font-bold text-finance-gold flex items-center gap-1">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <polyline points="23,6 13.5,15.5 8.5,10.5 1,18" strokeWidth={2} />
                      <polyline points="17,6 23,6 23,12" strokeWidth={2} />
                    </svg>
                    489%
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs lg:text-sm text-foreground/60">
                    万有道2号
                  </span>
                  <span className="text-base lg:text-lg font-bold text-finance-gold flex items-center gap-1">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <polyline points="23,6 13.5,15.5 8.5,10.5 1,18" strokeWidth={2} />
                      <polyline points="17,6 23,6 23,12" strokeWidth={2} />
                    </svg>
                    234%
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs lg:text-sm text-foreground/60">
                    万有道3号
                  </span>
                  <span className="text-base lg:text-lg font-bold text-finance-gold flex items-center gap-1">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <polyline points="23,6 13.5,15.5 8.5,10.5 1,18" strokeWidth={2} />
                      <polyline points="17,6 23,6 23,12" strokeWidth={2} />
                    </svg>
                    252%
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs lg:text-sm text-foreground/60">
                    私人账户
                  </span>
                  <span className="text-base lg:text-lg font-bold text-finance-gold flex items-center gap-1">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <polyline points="23,6 13.5,15.5 8.5,10.5 1,18" strokeWidth={2} />
                      <polyline points="17,6 23,6 23,12" strokeWidth={2} />
                    </svg>
                    464%
                  </span>
                </div>
              </div>
            </div>

            <button className="w-full py-2.5 lg:py-3 btn-primary font-semibold rounded-lg transition flex items-center justify-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                />
              </svg>
              申请模型授权
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
