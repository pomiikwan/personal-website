import { Home, Shield, Grid3x3, User, Mail, LogIn, UserPlus, Zap } from 'lucide-react';

export function DesktopNav() {
  const navItems = [
    { id: 'home', label: '首页', icon: Home },
    { id: 'capabilities', label: '能力矩阵', icon: Shield },
    { id: 'services', label: '服务市场', icon: Grid3x3 },
    { id: 'about', label: '关于我', icon: User },
    { id: 'contact', label: '联系我', icon: Mail },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="desktop-nav fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-tech-cyan to-tactical-green flex items-center justify-center">
              <Zap className="w-5 h-5 text-background" />
            </div>
            <span className="font-bold text-xl">关威雄</span>
            <span className="text-sm text-foreground/70 hidden sm:inline">
              | 资产架构师
            </span>
          </div>

          {/* 导航链接 */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="nav-link hover:text-tech-cyan transition flex items-center gap-2"
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* 登录注册按钮 */}
          <div className="hidden md:flex items-center gap-4">
            <button className="px-4 py-2 text-sm font-medium text-tech-cyan hover:text-tech-cyan/80 transition flex items-center gap-2">
              <LogIn className="w-4 h-4" />
              登录
            </button>
            <button className="px-4 py-2 bg-tech-cyan text-background text-sm font-medium rounded-lg hover:opacity-90 transition flex items-center gap-2 tech-glow">
              <UserPlus className="w-4 h-4" />
              注册
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
