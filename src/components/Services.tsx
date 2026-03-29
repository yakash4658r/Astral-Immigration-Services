  /**
   * Services Section
    * - Premium CSS Grid cards with hover lift + conditionally rendered images
  
  * - Premium CSS Grid cards with hover lift + icon color transition
    * - Framer Motion stagger animation
  */
  import { motion, type Variants } from 'framer-motion';
  import {
    Plane, UserCheck, CreditCard, Building2, FileText,
    Truck, Scale
  } from 'lucide-react';

  interface Service {
    icon: React.ReactNode;
    category: string;
    title: string;
    items: string[];
    color: string;
    bg: string;
    image?: string; // புதுசா இமேஜ் ஆட் பண்ணிருக்கோம்
  
  }

  const services: Service[] = [
    {
      icon: <Plane className="w-7 h-7" />,
      category: 'Visa',
      title: 'Visa Services',
      items: ['Inbound Visa Assistance', 'Outbound Visa Assistance', 'Tourist & Business Visas', 'Long-Stay Visa Support'],
      color: 'text-sky-600',
      bg: 'bg-sky-50',
      image: `${import.meta.env.BASE_URL}images/visa.jpg` // ✅ Fixed: Removed 'public/' and added BASE_URL
    },
    {
      icon: <UserCheck className="w-7 h-7" />,
      category: 'FRRO & Expat',
      title: 'FRRO & Expat Services',
      items: ['FRRO Registration', 'Visa Renewal for Expats', 'Change of Address Update', 'Passport Details Update'],
      color: 'text-violet-600',
      bg: 'bg-violet-50',
      image: `${import.meta.env.BASE_URL}images/frro.jpg` 
    },
    {
      icon: <CreditCard className="w-7 h-7" />,
      category: 'Passport & ID',
      title: 'Passport & ID Services',
      items: ['Passport New Application', 'Passport Renewal', 'PAN Card (New & Correction)', 'Aadhaar Card Update'],
      color: 'text-emerald-600',
      bg: 'bg-emerald-50',
      image: `${import.meta.env.BASE_URL}images/passport.jpg` 
    },
    {
      icon: <Building2 className="w-7 h-7" />,
      category: 'Business & Tax',
      title: 'Business & Tax Services',
      items: ['GST Registration', 'GST Monthly Filing', 'Income Tax Filing', 'TDS Returns & Refunds'],
      color: 'text-amber-600',
      bg: 'bg-amber-50',
      image: `${import.meta.env.BASE_URL}images/Business & Tax.jpg` 
    },
    {
      icon: <Truck className="w-7 h-7" />,
      category: 'Import / Export',
      title: 'Import & Export License',
      items: ['IEC Registration', 'Export License Assistance', 'C Form Support', 'Trade Documentation'],
      color: 'text-blue-600',
      bg: 'bg-blue-50',
      image: `${import.meta.env.BASE_URL}images/Import&Export.jpg`  
    },
    {
      icon: <Scale className="w-7 h-7" />,
      category: 'Legal',
      title: 'Legal & Notary Services',
      items: ['Affidavit Preparation', 'Notary Services', 'Document Attestation', 'Legal Document Support'],
      color: 'text-rose-600',
      bg: 'bg-rose-50',
      image: `${import.meta.env.BASE_URL}images/Legal & Notary Services.jpg` 
    },
];

  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
  };

  export default function Services() {
    return (
      <section id="services" className="py-24 bg-slate-50 relative overflow-hidden">

        {/* ── Bg decoration ── */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-400/30 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── Section Header ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="section-badge">What We Offer</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 mb-3">
              Our Comprehensive <span className="gradient-text">Services</span>
            </h2>
            <div className="orange-divider mx-auto" />
  
            <div className="orange-divider" />
            <p className="text-slate-500 max-w-2xl mx-auto mt-5 text-lg">
              From visa assistance to business compliance — we handle it all under one roof,
              with expert care and precision.
            </p>
          </motion.div>

          {/* ── Cards Grid ── */}
          <motion.div
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: '-50px' }}
  className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 items-start"
>
            {services.map((svc, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                className="card-shine group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-350 cursor-default overflow-hidden flex flex-col h-full"
              >
                {/* Image Section (Only renders if image exists in the array) */}
                {svc.image && (
                  <div className="w-full h-48 overflow-hidden relative">
                    <img 
                      src={svc.image} 
                      alt={svc.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Subtle dark gradient overlay for premium feel */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                )}

                {/* Text Content Section */}
<div className="p-7 flex flex-col flex-grow">
  {/* Icon */}
  <div className={`w-14 h-14 rounded-2xl ${svc.bg} flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-orange-100`}>
    <span className={`transition-colors duration-300 ${svc.color} group-hover:text-orange-500`}>
      {svc.icon}
    </span>
  </div>

  {/* Category badge */}
  <span className="text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-orange-400 transition-colors duration-300">
    {svc.category}
  </span>

  {/* Title */}
  <h3 className="text-lg font-bold text-slate-900 mt-1.5 mb-4 group-hover:text-orange-600 transition-colors duration-300">
    {svc.title}
  </h3>

  {/* Items list */}
  <ul className="space-y-2 mb-6 flex-grow">
    {svc.items.map((item, j) => (
      <li key={j} className="flex items-start gap-2.5 text-sm text-slate-600">
        <span className="w-1.5 h-1.5 rounded-full bg-orange-400/60 group-hover:bg-orange-500 transition-colors duration-300 shrink-0 mt-1.5" />
        <span>{item}</span>
      </li>
    ))}
  </ul>

  {/* Bottom accent line */}
  <div className="mt-auto h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-orange-500 to-orange-300 rounded-full transition-all duration-500" />
</div>
  
              
                </motion.div>
            ))}
          </motion.div>

          {/* ── Bottom CTA banner ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-14 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl shadow-orange-500/20"
          >
            <div className="text-center sm:text-left">
              <p className="text-white font-extrabold text-xl sm:text-2xl">
                Not sure which service you need?
              </p>
              <p className="text-orange-100 mt-1">
                Get a free consultation — we'll guide you through the right process.
              </p>
            </div>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-orange-600 font-bold rounded-xl hover:bg-orange-50 transition-all duration-300 hover:-translate-y-0.5 shrink-0 shadow-lg"
            >
              <FileText className="w-5 h-5" />
              Talk to an Expert
            </a>
          </motion.div>
        </div>
      </section>
    );
  }
  

  