/**
 * Astral Immigration Services — Landing Page
 * ─────────────────────────────────────────────
 * Tech Stack: React 19 + Tailwind CSS v4 + Framer Motion + Lucide React
 * Author: Expert Frontend Developer
 *
 * Sections:
 *   1. Navbar       — Glassmorphism sticky navbar
 *   2. Hero         — Full-screen hero with stats
 *   3. About        — Company intro with highlights
 *   4. Services     — Premium card grid
 *   5. WhyChooseUs  — Reasons with hover icon effect
 *   6. HowItWorks   — 4-step process timeline
 *   7. Contact      — Info cards + CTA panel + Footer
 */

import Navbar      from './components/Navbar';
import Hero        from './components/Hero';
import About       from './components/About';
import Services    from './components/Services';
import WhyChooseUs  from './components/WhyChooseUs';
import TrustBanner  from './components/TrustBanner';
import HowItWorks   from './components/HowItWorks';
import Contact      from './components/Contact';
import BackToTop    from './components/BackToTop';

export default function App() {
  return (
    <div className="overflow-x-hidden" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>

      {/* ── Navigation ── */}
      <Navbar />

      {/* ── Main sections ── */}
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <TrustBanner />
        <HowItWorks />
        <Contact />
      </main>

      {/* ── Back to top button ── */}
      <BackToTop />

    </div>
  );
}
