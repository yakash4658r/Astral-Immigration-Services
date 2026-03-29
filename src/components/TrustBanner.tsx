/**
 * Trust Banner / Testimonials Section
 * - Alternating light & animated stats banner
 * - Client testimonial quote cards
 * - Framer Motion whileInView
 */
import { motion, type Variants } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Ramesh Kumar',
    role: 'Business Owner, Chennai',
    quote: 'Astral Immigration helped us get our export license done within days. Exceptional service and very transparent throughout.',
    stars: 5,
 
    // Pudhusa image path add pannirukkom
    image: 'images/client1.jpg', 
 
    initials: 'RK',
    bg: 'from-orange-400 to-orange-600',
   },
  {
    name: 'Priya Chandran',
    role: 'IT Professional',
    quote: 'FRRO registration was completely stress-free. Nivedha and her team guided me at every step. Highly recommend!',
    stars: 5,
 
    // Pudhusa image path add pannirukkom
    image: 'images/client2.jpg', 
 
    initials: 'PC',
    bg: 'from-slate-600 to-slate-800',
   },
  {
    name: 'Arjun Mehta',
    role: 'Student Visa Applicant',
    quote: 'Got my student visa processed without a single mistake. The documentation guidance was perfect. Thank you, Astral!',
    stars: 5,
 
    // Pudhusa image path add pannirukkom
    image: 'images/client3.jpg', 
 
    initials: 'AM',
    bg: 'from-amber-500 to-orange-500',
   },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function TrustBanner() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">

      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-400/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-badge">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 mb-3">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <div className="orange-divider" />
          <p className="text-slate-500 max-w-xl mx-auto mt-5 text-lg">
            Hundreds of satisfied clients trust Astral Immigration for their most critical documentation needs.
          </p>
        </motion.div>

        {/* ── Testimonial cards ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="group relative bg-white rounded-2xl p-7 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <Quote className="w-12 h-12 text-orange-500" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, si) => (
                  <Star key={si} className="w-4 h-4 text-orange-400 fill-orange-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-600 text-sm leading-relaxed mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
 
                
                {/* INGU THAN IMAGE UPDATE PANNIRUKEN */}
                <img 
                  src={t.image} 
                  alt={t.name} 
                  className="w-11 h-11 rounded-full object-cover shrink-0 border-2 border-orange-100 shadow-sm"
                />
                
 
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.bg} flex items-center justify-center text-white text-sm font-bold shrink-0`}>
                  {t.initials}
                </div>
                 <div>
                  <p className="font-bold text-slate-900 text-sm">{t.name}</p>
                  <p className="text-slate-400 text-xs">{t.role}</p>
                </div>
              </div>

              {/* Bottom accent */}
              <div className="mt-6 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-orange-500 to-orange-300 rounded-full transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>

        {/* ── Horizontal stats bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {[
            { val: '500+',  label: 'Visas Processed'     },
            { val: '1000+', label: 'Happy Clients'       },
            { val: '15+',   label: 'Service Types'       },
            { val: '5+',    label: 'Years of Excellence' },
          ].map((stat, i) => (
            <div key={i} className={`text-center ${i < 3 ? 'lg:border-r border-white/10' : ''}`}>
              <p className="text-3xl sm:text-4xl font-extrabold text-orange-400 leading-none">{stat.val}</p>
              <p className="text-slate-400 text-sm mt-2 font-medium">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
 
}
 

 