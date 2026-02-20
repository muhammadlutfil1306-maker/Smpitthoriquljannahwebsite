import React, { useEffect, useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const darkSections = ['hero', 'cokurikuler', 'facilities', 'ppdb', 'footer'];

const navLinks = [
  { label: 'Beranda', href: '#hero', id: 'hero' },
  { label: 'Tentang', href: '#about', id: 'about' },
  { label: 'Akademik', href: '#academics', id: 'academics' },
  { label: 'Ko-Kurikuler', href: '#cokurikuler', id: 'cokurikuler' },
  { label: 'Fasilitas', href: '#facilities', id: 'facilities' },
];

export const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollContainerRef = useRef<HTMLElement | null>(null);

  const isDark = darkSections.includes(activeSection);

  useEffect(() => {
    const container = document.querySelector('.no-scrollbar') as HTMLElement;
    if (!container) return;
    scrollContainerRef.current = container;

    const handleScroll = () => {
      setIsScrolled(container.scrollTop > 60);
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current || document.querySelector('.no-scrollbar');
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { root: container, threshold: 0.5 }
    );

    const sections = container.querySelectorAll('section[id]');
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollTo = useCallback((href: string) => {
    const target = document.getElementById(href.replace('#', ''));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsMobileMenuOpen(false);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 h-12 flex items-center transition-all duration-500"
        style={{
          background: isScrolled
            ? isDark ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.7)'
            : 'transparent',
          backdropFilter: isScrolled ? 'blur(16px) saturate(1.5)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(16px) saturate(1.5)' : 'none',
          borderBottom: isScrolled
            ? isDark ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(0,0,0,0.04)'
            : '1px solid transparent',
        }}
      >
        <div className="w-full max-w-7xl mx-auto px-5 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); scrollTo('#hero'); }}
            className="flex items-center gap-2 group"
          >
            <div
              className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shrink-0"
              style={{ fontSize: 9, fontWeight: 800 }}
            >
              TJ
            </div>
            <span
              className={`text-[13px] transition-colors duration-300 ${
                isDark ? 'text-white/80 group-hover:text-white' : 'text-slate-700 group-hover:text-slate-900'
              }`}
              style={{ fontWeight: 600, letterSpacing: '-0.01em' }}
            >
              Thoriqul Jannah
            </span>
          </a>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-5">
            {navLinks.map((link) => {
              const active = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                  className={`relative py-1 text-[11px] uppercase transition-colors duration-300 cursor-pointer ${
                    active
                      ? isDark ? 'text-white' : 'text-slate-900'
                      : isDark ? 'text-white/35 hover:text-white/60' : 'text-slate-400 hover:text-slate-600'
                  }`}
                  style={{ fontWeight: active ? 600 : 450, letterSpacing: '0.06em' }}
                >
                  {link.label}
                  {active && (
                    <motion.div
                      layoutId="underline"
                      className={`absolute -bottom-1 left-0 right-0 h-[2px] rounded-full ${isDark ? 'bg-white' : 'bg-slate-900'}`}
                      transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#ppdb"
              onClick={(e) => { e.preventDefault(); scrollTo('#ppdb'); }}
              className={`hidden lg:inline-flex items-center gap-1 text-[11px] uppercase tracking-wider py-1.5 px-4 rounded-full transition-all duration-300 active:scale-95 group ${
                isDark ? 'bg-white text-slate-900 hover:bg-white/90' : 'bg-slate-900 text-white hover:bg-slate-800'
              }`}
              style={{ fontWeight: 600, letterSpacing: '0.08em' }}
            >
              Daftar
              <ArrowUpRight size={11} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <button
              className={`lg:hidden w-8 h-8 flex items-center justify-center rounded-lg transition-colors ${
                isDark ? 'text-white/70 hover:bg-white/10' : 'text-slate-500 hover:bg-black/5'
              }`}
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[70] bg-white lg:hidden flex flex-col"
          >
            <div className="flex items-center justify-between px-5 h-12 shrink-0">
              <div className="flex items-center gap-2">
                <div
                  className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white"
                  style={{ fontSize: 9, fontWeight: 800 }}
                >
                  TJ
                </div>
                <span className="text-slate-900 text-[13px]" style={{ fontWeight: 600 }}>
                  Thoriqul Jannah
                </span>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors"
              >
                <X size={16} className="text-slate-500" />
              </button>
            </div>

            <div className="flex-1 flex flex-col items-start justify-center px-8 gap-1 overflow-y-auto">
              {[...navLinks, { label: 'Pendaftaran', href: '#ppdb', id: 'ppdb' }].map((link, i) => {
                const active = activeSection === link.id;
                return (
                  <motion.a
                    key={link.id}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 + 0.1, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                    className={`py-2 flex items-center gap-3 transition-colors ${
                      active ? 'text-slate-900' : 'text-slate-300 hover:text-slate-500'
                    }`}
                  >
                    <span className="text-2xl sm:text-3xl tracking-tight" style={{ fontWeight: active ? 700 : 400 }}>
                      {link.label}
                    </span>
                    {active && (
                      <motion.div layoutId="mobileDot" className="w-2 h-2 rounded-full bg-blue-500" />
                    )}
                  </motion.a>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="px-5 pb-6 shrink-0"
            >
              <a
                href="#ppdb"
                onClick={(e) => { e.preventDefault(); scrollTo('#ppdb'); }}
                className="flex items-center justify-center gap-2 w-full py-3.5 bg-slate-900 text-white rounded-xl text-[13px] active:scale-[0.98] transition-transform"
                style={{ fontWeight: 600 }}
              >
                Daftar Sekarang
                <ArrowUpRight size={14} />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
