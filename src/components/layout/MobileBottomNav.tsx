export function MobileBottomNav() {
  return (
    <div className="bottom-nav fixed bottom-0 left-0 right-0 bg-card border-t border-border py-2 px-4 z-50">
      <div className="flex justify-around items-center">
        <a href="#home" className="flex flex-col items-center gap-1 text-foreground/60 text-xs hover:text-tech-cyan transition">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <span>首页</span>
        </a>
        <a href="#capabilities" className="flex flex-col items-center gap-1 text-foreground/60 text-xs hover:text-tech-cyan transition">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <span>能力</span>
        </a>
        <a href="#services" className="flex flex-col items-center gap-1 text-foreground/60 text-xs hover:text-tech-cyan transition">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <rect x="3" y="3" width="7" height="7" strokeWidth={2} />
            <rect x="14" y="3" width="7" height="7" strokeWidth={2} />
            <rect x="14" y="14" width="7" height="7" strokeWidth={2} />
            <rect x="3" y="14" width="7" height="7" strokeWidth={2} />
          </svg>
          <span>服务</span>
        </a>
        <a href="#contact" className="flex flex-col items-center gap-1 text-foreground/60 text-xs hover:text-tech-cyan transition">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <span>我的</span>
        </a>
      </div>
    </div>
  );
}
