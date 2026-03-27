/**
 * Why Choose Us Section
 * - Icon-grid layout with subtle gradient background
 * - Framer Motion whileInView stagger
 */
import { motion, type Variants } from 'framer-motion';
import { Zap, BookOpen, HeartHandshake, Eye, LayoutGrid } from 'lucide-react';

interface Reason {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const reasons: Reason[] = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Fast & Reliable Processing',
    desc: 'We prioritize speed without compromising accuracy. Your applications are handled with urgency and diligence.',
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: 'Expert Documentation Guidance',
    desc: 'Our team ensures every document is perfectly prepared, reducing errors and rejection risks significantly.',
  },
  {
    icon: <HeartHandshake className="w-6 h-6" />,
    title: 'Personalized Customer Support',
    desc: 'We assign dedicated support for each client — you are never just a ticket number to us.',
  },
  {
    icon: <Eye className="w-6 h-6" />,
    title: 'Transparent & Trustworthy',
    desc: 'No hidden fees. No false promises. We maintain complete transparency throughout the process.',
  },
  {
    icon: <LayoutGrid className="w-6 h-6" />,
    title: 'One-Stop Compliance Solution',
    desc: 'From visas to tax filings and legal documentation — handle everything in one trusted place.',
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

function ReasonCard({ reason, index }: { reason: Reason; index: number }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.55, delay: index * 0.05 } },
      }}
      className="group relative bg-slate-50 hover:bg-white rounded-2xl p-7 border border-transparent hover:border-orange-100 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
    >
      {/* Glow on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-white group-hover:bg-orange-500 border border-slate-200 group-hover:border-orange-500 shadow-sm flex items-center justify-center text-slate-500 group-hover:text-white transition-all duration-300 mb-5">
        {reason.icon}
      </div>

      {/* Background number */}
      <span className="absolute top-5 right-6 text-5xl font-extrabold text-slate-100 group-hover:text-orange-50 transition-colors duration-300 select-none leading-none">
        {String(index + 1).padStart(2, '0')}
      </span>

      <h3 className="text-base font-bold text-slate-900 mb-2 relative z-10">{reason.title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed relative z-10">{reason.desc}</p>
    </motion.div>
  );
}

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">

      {/* ── Decorative blob ── */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-badge">Our Advantage</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 mb-3">
            Why Clients <span className="gradient-text">Choose Astral</span>
          </h2>
          <div className="orange-divider" />
          <p className="text-slate-500 max-w-xl mx-auto mt-5 text-lg">
            We go beyond just processing paperwork — we become your long-term immigration and compliance partner.
          </p>
        </motion.div>

        {/* ── Row 1: 3 cards ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7"
        >
          {reasons.slice(0, 3).map((r, i) => (
            <ReasonCard key={i} reason={r} index={i} />
          ))}
        </motion.div>

        {/* ── Row 2: 2 cards centered ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid sm:grid-cols-2 gap-7 mt-7 max-w-4xl mx-auto"
        >
          {reasons.slice(3).map((r, i) => (
            <ReasonCard key={i + 3} reason={r} index={i + 3} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
