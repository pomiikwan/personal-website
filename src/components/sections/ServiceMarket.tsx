export function ServiceMarket() {
  const services = [
    {
      id: 1,
      title: "量化交易信号",
      desc: "基于SXA模型",
      icon: "bar-chart",
      color: "tech-cyan",
      features: ["实时信号推送", "多市场覆盖", "风险等级评估"],
      price: "¥XXX/月"
    },
    {
      id: 2,
      title: "研报分析接口",
      desc: "AI智能分析",
      icon: "file-text",
      color: "finance-gold",
      features: ["核心观点提取", "数据可视化", "情绪倾向分析"],
      price: "¥X/份"
    },
    {
      id: 3,
      title: "自研大模型接口",
      desc: "金融场景优化",
      icon: "cpu",
      color: "tactical-green",
      features: ["金融领域微调", "多轮对话支持", "32K上下文"],
      price: "¥X/1K tokens"
    },
    {
      id: 4,
      title: "Agent团队接口",
      desc: "多Agent协同",
      icon: "bot",
      color: "tech-cyan",
      features: ["研究分析Agent", "交易执行Agent", "风险监控Agent"],
      price: "¥X/任务"
    },
    {
      id: 5,
      title: "SXA模型授权",
      desc: "反身性交易模型",
      icon: "zap",
      color: "finance-gold",
      features: ["家族账户管理", "特殊机会投资", "极端市场资产保全"],
      price: "¥XXX/年",
      label: "授权费"
    },
    {
      id: 6,
      title: "舆情分析服务",
      desc: "市场舆情监控",
      icon: "megaphone",
      color: "tactical-green",
      features: ["实时舆情监控", "情绪倾向分析", "风险预警推送"],
      price: "¥XXX/月"
    }
  ];

  const getIcon = (iconName: string) => {
    const icons: Record<string, JSX.Element> = {
      "bar-chart": <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />,
      "file-text": <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />,
      "cpu": <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />,
      "bot": <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
      "zap": <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />,
      "megaphone": <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
    };
    return icons[iconName] || icons["bar-chart"];
  };

  return (
    <section id="services" className="py-12 lg:py-20">
      <div className="container-custom">
        <h2 className="text-2xl lg:text-3xl font-bold mb-6 lg:mb-8 text-center flex items-center justify-center gap-3">
          <svg className="w-8 h-8 text-finance-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <rect x="3" y="3" width="7" height="7" strokeWidth={2} />
            <rect x="14" y="3" width="7" height="7" strokeWidth={2} />
            <rect x="14" y="14" width="7" height="7" strokeWidth={2} />
            <rect x="3" y="14" width="7" height="7" strokeWidth={2} />
          </svg>
          服务接口
        </h2>

        {/* 分类标签 */}
        <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-4 mb-6 lg:mb-8 -mx-4 px-4 lg:mx-0 lg:px-0">
          <button className="flex-shrink-0 px-4 lg:px-6 py-2 rounded-full bg-tech-cyan text-background text-sm font-medium flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            全部服务
          </button>
          <button className="flex-shrink-0 px-4 lg:px-6 py-2 rounded-full bg-card border border-border text-sm font-medium hover:border-tech-cyan transition flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            量化交易
          </button>
          <button className="flex-shrink-0 px-4 lg:px-6 py-2 rounded-full bg-card border border-border text-sm font-medium hover:border-tech-cyan transition flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            AI服务
          </button>
          <button className="flex-shrink-0 px-4 lg:px-6 py-2 rounded-full bg-card border border-border text-sm font-medium hover:border-tech-cyan transition flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            咨询服务
          </button>
          <button className="flex-shrink-0 px-4 lg:px-6 py-2 rounded-full bg-card border border-border text-sm font-medium hover:border-tech-cyan transition flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" strokeWidth={2} />
              <line x1="2" y1="12" x2="22" y2="12" strokeWidth={2} />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 014-10" />
            </svg>
            资源对接
          </button>
        </div>

        {/* 服务卡片网格 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {services.map((service) => (
            <div key={service.id} className="service-card p-4 lg:p-6 corner-deco">
              <div className="flex items-center gap-3 mb-3 lg:mb-4">
                <div className={`w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-${service.color}/20 border border-${service.color}/30 flex items-center justify-center flex-shrink-0`}>
                  <svg className={`w-6 h-6 lg:w-7 lg:h-7 text-${service.color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {getIcon(service.icon)}
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-sm lg:text-base">{service.title}</h3>
                  <p className="text-xs text-foreground/60">{service.desc}</p>
                </div>
              </div>
              <div className="space-y-1.5 lg:space-y-2 mb-3 lg:mb-4 text-xs lg:text-sm text-foreground/70">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <svg className={`w-4 h-4 text-${service.color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <polyline points="20,6 9,17 4,12" strokeWidth={2} />
                    </svg>
                    {feature}
                  </div>
                ))}
              </div>
              <div className="border-t border-border pt-3 lg:pt-4">
                <div className="flex justify-between items-center mb-2 lg:mb-3">
                  <span className="text-xs lg:text-sm text-foreground/60 flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                    {service.label || "起售价"}
                  </span>
                  <span className="text-base lg:text-lg font-bold text-finance-gold">{service.price}</span>
                </div>
                <button className="w-full py-2 btn-primary text-sm font-semibold rounded-lg transition flex items-center justify-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <line x1="5" y1="12" x2="19" y2="12" strokeWidth={2} />
                    <polyline points="12,5 19,12 12,19" strokeWidth={2} />
                  </svg>
                  {service.id === 5 ? "申请授权" : "查看详情"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
