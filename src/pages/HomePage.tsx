import { Hero } from '../components/sections/Hero';
import { CoreAdvantages } from '../components/sections/CoreAdvantages';
import { ServiceMarket } from '../components/sections/ServiceMarket';
import { ContactCTA } from '../components/sections/ContactCTA';
import { DesktopNav } from '../components/layout/DesktopNav';
import { MobileNav } from '../components/layout/MobileNav';
import { MobileBottomNav } from '../components/layout/MobileBottomNav';

export function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* 导航系统 */}
      <DesktopNav />
      <MobileNav />

      {/* 主内容区域 */}
      <main>
        <Hero />
        <CoreAdvantages />
        <ServiceMarket />
        <ContactCTA />
      </main>

      {/* 移动端底部导航 */}
      <MobileBottomNav />

      {/* 页脚 */}
      <footer className="bg-card/50 border-t border-border py-8 pb-safe-offset">
        <div className="container-custom text-center text-sm text-foreground/60">
          <p>© 2026 关威雄 · 资产架构师 · 版权所有</p>
          <p className="mt-2">基于SXA反身性交易模型 · 极端市场专家</p>
        </div>
      </footer>
    </div>
  );
}
