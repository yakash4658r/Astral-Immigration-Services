/**
 * Hero Section Component
 * - Full-screen with city backdrop, gradient overlay
 * - Bold typography, animated CTA buttons with pulse-glow effect
 * - Animated floating stats strip
 */
import { motion, type Variants } from 'framer-motion';
import { ArrowRight, Phone, ShieldCheck, Clock, Users } from 'lucide-react';

const stats = [
  { icon: <ShieldCheck className="w-5 h-5" />, value: '500+', label: 'Visas Processed' },
  { icon: <Clock className="w-5 h-5" />,       value: '5+',   label: 'Years Experience' },
  { icon: <Users className="w-5 h-5" />,       value: '1000+',label: 'Happy Clients'  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};

const itemVariants: Variants = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero-section relative min-h-screen flex flex-col justify-center">

      {/* ── Gradient overlay ── */}
      <div className="hero-overlay absolute inset-0 z-0" />

      {/* ── Decorative grid pattern ── */}
      <div
        className="absolute inset-0 z-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* ── Floating orange orb ── */}
      <div className="float-anim absolute right-[8%] top-[20%] w-72 h-72 rounded-full bg-orange-500/10 blur-3xl pointer-events-none z-0" />
      <div
        className="float-anim absolute left-[5%] bottom-[25%] w-52 h-52 rounded-full bg-orange-400/8 blur-2xl pointer-events-none z-0"
        style={{ animationDelay: '2s' }}
      />

      {/* ── Main content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-300 text-xs font-bold uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse inline-block" />
              Chennai's Trusted Immigration Partner
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.12] tracking-tight mb-6"
          >
            Your Trusted Partner for{' '}
            <span className="relative inline-block">
              <span className="gradient-text">Visa & Documentation</span>
              <motion.span
                className="absolute -bottom-1 left-0 h-[3px] bg-gradient-to-r from-orange-500 to-orange-300 rounded-full block"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 1.2, duration: 0.8 }}
              />
            </span>{' '}
            Solutions
          </motion.h1>

          {/* Sub-heading */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-white/75 leading-relaxed max-w-2xl mb-10"
          >
            Reliable and professional support for visa processing, immigration services, and
            government compliance — serving individuals, families, and businesses across Chennai.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollTo('#services')}
              className="pulse-glow inline-flex items-center gap-2.5 px-7 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl text-base transition-all duration-300 hover:-translate-y-1 shadow-xl shadow-orange-500/30 cursor-pointer"
            >
              Explore Services
              <ArrowRight className="w-5 h-5" />
            </button>
            <a
              href="tel:8072516152"
              className="inline-flex items-center gap-2.5 px-7 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl text-base border border-white/25 hover:border-white/50 transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm"
            >
              <Phone className="w-5 h-5 text-orange-400" />
              Call Us Now
            </a>
          </motion.div>
        </motion.div>

        {/* ── Stats strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.7 }}
          className="mt-20 flex flex-wrap gap-6 md:gap-0"
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className={`flex items-center gap-4 flex-1 min-w-[160px] ${
                i < stats.length - 1 ? 'md:border-r border-white/15 md:pr-10 md:mr-10' : ''
              }`}
            >
              <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-orange-500/20 text-orange-400 shrink-0">
                {s.icon}
              </div>
              <div>
                <p className="text-2xl font-extrabold text-white leading-none">{s.value}</p>
                <p className="text-sm text-white/60 mt-0.5 font-medium">{s.label}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5"
      >
        <span className="text-white/40 text-xs tracking-widest uppercase font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="w-5 h-8 rounded-full border-2 border-white/20 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-orange-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
