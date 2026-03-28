/**
 * How It Works Section
 * - Horizontal step-by-step timeline
 * - Orange connector lines between steps
 * - Framer Motion stagger reveal
 */
import { motion, type Variants } from 'framer-motion';
import { MessageSquare, FolderOpen, Settings, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: <MessageSquare className="w-7 h-7" />,
    step: '01',
    title: 'Contact Us',
    desc: 'Reach out via phone, email, or our contact form with your specific requirement.',
    color: 'from-orange-400 to-orange-500',
  },
  {
    icon: <FolderOpen className="w-7 h-7" />,
    step: '02',
    title: 'Submit Documents',
    desc: 'Share the required documents. We guide you on exactly what is needed — no confusion.',
    color: 'from-orange-500 to-amber-500',
  },
  {
    icon: <Settings className="w-7 h-7" />,
    step: '03',
    title: 'We Process & Verify',
    desc: 'Our experts carefully review, process, and verify everything to ensure accuracy.',
    color: 'from-amber-500 to-orange-600',
  },
  {
    icon: <CheckCircle className="w-7 h-7" />,
    step: '04',
    title: 'Service Completed',
    desc: 'Receive your completed service on time — smooth, professional, and hassle-free.',
    color: 'from-orange-600 to-red-500',
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const stepVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-slate-50 relative overflow-hidden">

      {/* ── Decorative top gradient ── */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-400/30 to-transparent" />

      {/* ── Decorative pattern ── */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #e67e22 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-badge">The Process</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 mb-3">
            How We <span className="gradient-text">Get It Done</span>
          </h2>
          <div className="orange-divider" />
          <p className="text-slate-500 max-w-xl mx-auto mt-5 text-lg">
            A simple, transparent four-step process designed to give you clarity and confidence at every stage.
          </p>
        </motion.div>

        {/* ── Steps ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative"
        >
          {/* Connector line (desktop only) */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5">
            <motion.div
              className="step-line h-full rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3 }}
              style={{ transformOrigin: 'left' }}
            />
          </div>

          {steps.map((s, i) => (
            <motion.div
              key={i}
              variants={stepVariants}
              className="relative flex flex-col items-center text-center group"
            >
              {/* Step circle */}
              <div className={`relative z-10 w-24 h-24 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center text-white shadow-xl shadow-orange-500/20 mb-6 group-hover:-translate-y-2 transition-transform duration-300`}>
                {s.icon}
                {/* Step number badge */}
                <span className="absolute -top-2.5 -right-2.5 w-7 h-7 rounded-full bg-slate-900 text-white text-xs font-extrabold flex items-center justify-center border-2 border-white">
                  {s.step}
                </span>
              </div>

              <h3 className="text-base font-bold text-slate-900 mb-2">{s.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed max-w-[200px]">{s.desc}</p>

              {/* Mobile arrow (except last) */}
              {i < steps.length - 1 && (
                <div className="lg:hidden mt-6 text-orange-300 text-2xl">↓</div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* ── Bottom note ── */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-slate-400 text-sm mt-14 font-medium"
        >
          Most services are completed within <span className="text-orange-500 font-bold">3–7 working days</span>. Complex cases may vary — we keep you informed throughout.
        </motion.p>
      </div>
    </section>
  );
}
