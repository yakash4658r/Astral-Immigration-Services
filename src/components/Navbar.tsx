/**
 * Navbar Component
 * - Transparent at top, glassmorphism on scroll
 * - Smooth mobile hamburger menu with Framer Motion
 */
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';

const navLinks = [
  { label: 'Home',         href: '#home' },
  { label: 'About',        href: '#about' },
  { label: 'Services',     href: '#services' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Contact',      href: '#contact' },
];

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false);
  const [menuOpen,    setMenuOpen]    = useState(false);
  const [activeLink,  setActiveLink]  = useState('#home');

  /* ── Scroll listener ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── Close menu on resize ── */
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const handleNav = (href: string) => {
    setActiveLink(href);
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled ? 'glass-nav shadow-lg shadow-black/5 py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">

         {/* ── Logo ── */}
<a
  href="#home"
  onClick={(e) => { e.preventDefault(); handleNav('#home'); }}
  className="flex items-center gap-2 group"
>
  {/* 👇 Indha line-ah thaan maathirukken 👇 */}
  <img 
  src={`${import.meta.env.BASE_URL}Logo.png`}  // 👈 Ithu correct
  alt="Astral Logo" 
  className="w-14 h-15 object-contain" 
/>

  <div className="flex flex-col leading-tight">
    <span
      className={`text-4xl font-800 tracking-tight transition-colors duration-300 ${
        scrolled ? 'text-slate-900' : 'text-white'
      }`}
    >
      <span className="text-orange-500">Astral</span> Immigration
    </span>
    <span
      className={`text-base font-500 tracking-widest uppercase transition-colors duration-300 ${
        scrolled ? 'text-slate-500' : 'text-white/70'
      }`}
    >
      Services
    </span>
  </div>
</a>

          {/* ── Desktop links ── */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                  className={`relative px-4 py-2 text-sm font-600 rounded-lg transition-all duration-300 ${
                    activeLink === link.href
                      ? scrolled ? 'text-orange-500' : 'text-orange-400'
                      : scrolled ? 'text-slate-700 hover:text-orange-500' : 'text-white/90 hover:text-white'
                  }`}
                >
                  {link.label}
                  {activeLink === link.href && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-orange-500 rounded-full"
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* ── Desktop CTA ── */}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNav('#contact'); }}
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white text-sm font-700 rounded-lg transition-all duration-300 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5"
          >
            Get Started
          </a>

          {/* ── Hamburger ── */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              scrolled ? 'text-slate-800 hover:bg-slate-100' : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {menuOpen
                ? <motion.span key="x" initial={{rotate:-90,opacity:0}} animate={{rotate:0,opacity:1}} exit={{rotate:90,opacity:0}} transition={{duration:0.2}}><X className="w-6 h-6" /></motion.span>
                : <motion.span key="menu" initial={{rotate:90,opacity:0}} animate={{rotate:0,opacity:1}} exit={{rotate:-90,opacity:0}} transition={{duration:0.2}}><Menu className="w-6 h-6" /></motion.span>
              }
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-white/95 backdrop-blur-lg border-t border-slate-100"
          >
            <ul className="px-4 py-3 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                    className={`block px-4 py-3 text-sm font-600 rounded-lg transition-colors duration-200 ${
                      activeLink === link.href
                        ? 'bg-orange-50 text-orange-600'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-orange-500'
                    }`}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <motion.li initial={{opacity:0,x:-16}} animate={{opacity:1,x:0}} transition={{delay:navLinks.length*0.06}}>
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); handleNav('#contact'); }}
                  className="block mt-2 px-4 py-3 text-sm font-700 text-center bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-200"
                >
                  Get Started
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
