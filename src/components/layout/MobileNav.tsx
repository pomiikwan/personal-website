import { Search, User, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function MobileNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* 移动端顶部导航 */}
      <nav className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-tech-cyan to-tactical-green flex items-center justify-center">
                {/* <Zap className="w-4 h-4 text-background" /> */}
              </div>
              <span className="font-bold text-lg">关威雄</span>
            </div>
            <div className="flex items-center gap-3">
              <button className="p-2 hover:bg-card/50 rounded-lg transition">
                <Search className="w-5 h-5" />
              </button>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2 hover:bg-card/50 rounded-lg transition"
              >
                {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* 移动端下拉菜单 */}
        {menuOpen && (
          <div className="border-t border-border bg-card/95 backdrop-blur">
            <div className="px-4 py-2 space-y-1">
              <a
                href="#home"
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-2 rounded-lg hover:bg-tech-cyan/10 hover:text-tech-cyan transition"
              >
                首页
              </a>
              <a
                href="#capabilities"
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-2 rounded-lg hover:bg-tech-cyan/10 hover:text-tech-cyan transition"
              >
                能力矩阵
              </a>
              <a
                href="#services"
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-2 rounded-lg hover:bg-tech-cyan/10 hover:text-tech-cyan transition"
              >
                服务市场
              </a>
              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-2 rounded-lg hover:bg-tech-cyan/10 hover:text-tech-cyan transition"
              >
                关于我
              </a>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-2 rounded-lg hover:bg-tech-cyan/10 hover:text-tech-cyan transition"
              >
                联系我
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
