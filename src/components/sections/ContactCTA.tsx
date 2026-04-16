export function ContactCTA() {
  return (
    <section id="contact" className="py-12 lg:py-20">
      <div className="container-custom">
        <div className="bg-gradient-to-br from-tech-cyan/20 to-tactical-green/20 border border-tech-cyan/30 rounded-lg p-6 lg:p-12 text-center">
          <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-tech-cyan/20 border-2 border-tech-cyan flex items-center justify-center mx-auto mb-4 lg:mb-6">
            <svg className="w-8 h-8 lg:w-10 lg:h-10 text-tech-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
            </svg>
          </div>
          <h2 className="text-2xl lg:text-3xl font-bold mb-3 lg:mb-4">
            寻找创新者型资产架构师？
          </h2>
          <p className="text-base lg:text-lg text-foreground/70 mb-6 lg:mb-8 max-w-2xl mx-auto">
            我不是在找工作，而是在找合作。
            <br className="hidden sm:block" />
            如果您需要创新者型资产架构师，而非执行型螺丝钉，欢迎深度交流。
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 lg:gap-4">
            <button className="px-6 lg:px-8 py-2.5 lg:py-3 btn-primary font-semibold rounded-lg transition tech-glow flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              立即联系我
            </button>
            <button className="px-6 lg:px-8 py-2.5 lg:py-3 btn-secondary font-semibold rounded-lg transition flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="3" y="3" width="7" height="7" strokeWidth={2} />
                <rect x="14" y="3" width="7" height="7" strokeWidth={2} />
                <rect x="14" y="14" width="7" height="7" strokeWidth={2} />
                <rect x="3" y="14" width="7" height="7" strokeWidth={2} />
              </svg>
              查看服务接口
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
