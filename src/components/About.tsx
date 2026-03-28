/**
 * About Us Section
<<<<<<< HEAD
 * - Two-column layout: text + image & decorative visual
=======
 * - Two-column layout: text + decorative visual
>>>>>>> ec746734adc4554fca8f52a78d1505292564987b
 * - Framer Motion whileInView animations
 */
import { motion, type Variants } from 'framer-motion';
import { MapPin, Award, Briefcase, CheckCircle2 } from 'lucide-react';

const highlights = [
  { icon: <CheckCircle2 className="w-5 h-5 text-orange-500" />, text: 'Inbound & Outbound Visa Specialists' },
  { icon: <CheckCircle2 className="w-5 h-5 text-orange-500" />, text: 'End-to-End Government Documentation' },
  { icon: <CheckCircle2 className="w-5 h-5 text-orange-500" />, text: 'Serving Individuals, Families & Businesses' },
  { icon: <CheckCircle2 className="w-5 h-5 text-orange-500" />, text: 'Based in Velachery, Chennai' },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">

      {/* ── Subtle bg shape ── */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-orange-500/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-slate-100 blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<<<<<<< HEAD
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
=======
        <div className="grid lg:grid-cols-2 gap-16 items-center">
>>>>>>> ec746734adc4554fca8f52a78d1505292564987b

          {/* ── Left: Text Content ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
          >
<<<<<<< HEAD
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-orange-600 font-bold text-sm tracking-wide mb-4">
              ABOUT US
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight mt-3 mb-6">
              Navigating Immigration<br />
              <span className="text-orange-500">Made Simple for You</span>
            </h2>
=======
            <span className="section-badge">About Us</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight mt-3 mb-2">
              Navigating Immigration<br />
              <span className="gradient-text">Made Simple for You</span>
            </h2>
            <div className="orange-divider orange-divider-left mb-6" />
>>>>>>> ec746734adc4554fca8f52a78d1505292564987b

            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Led by Proprietor{' '}
              <span className="font-bold text-slate-800">Nivedha Sajeev</span>, Astral Immigration
              Services offers end-to-end solutions for both inbound and outbound visa services,
              ensuring a smooth and hassle-free experience for our clients.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              Based in Chennai, we assist individuals, families, and businesses in navigating complex
              immigration and compliance processes with ease. Our commitment is to deliver fast,
              transparent, and personalized support — every single time.
            </p>

            {/* Highlights */}
            <ul className="space-y-3 mb-8">
              {highlights.map((h, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3 text-slate-700 font-medium"
                >
                  {h.icon}
                  {h.text}
                </motion.li>
              ))}
            </ul>

            {/* Proprietor tag */}
            <div className="inline-flex items-center gap-3 px-5 py-3 bg-orange-50 rounded-xl border border-orange-100">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold text-base shrink-0">
                NS
              </div>
              <div>
                <p className="font-bold text-slate-900 text-sm">Nivedha Sajeev</p>
                <p className="text-slate-500 text-xs">Proprietor, Astral Immigration Services</p>
              </div>
            </div>
          </motion.div>

<<<<<<< HEAD
          {/* ── Right: Image & Decorative card grid ── */}
=======
          {/* ── Right: Decorative card grid ── */}
>>>>>>> ec746734adc4554fca8f52a78d1505292564987b
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.15 }}
<<<<<<< HEAD
            className="relative flex flex-col gap-6"
          >
            
            {/* 1. Main About Image Section (Pudhusa Add Pannathu) */}
            <div className="relative w-full h-[300px] sm:h-[400px] rounded-3xl overflow-hidden shadow-2xl group">
              <img 
                src="public/images/about.jpg" 
                alt="Astral Immigration Team" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
              
              {/* Floating badge over the image */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl px-4 py-2.5 border border-white/20">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-bold text-slate-800 tracking-wide">Available 24/7</span>
                </div>
              </div>
            </div>

            {/* 2. Stats Grid (Already irundha Cards) */}
=======
            className="relative"
          >
>>>>>>> ec746734adc4554fca8f52a78d1505292564987b
            <div className="grid grid-cols-2 gap-5">
              {/* Card 1 */}
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 text-white shadow-xl shadow-orange-500/25"
              >
                <Award className="w-8 h-8 mb-3 opacity-90" />
                <p className="text-3xl font-extrabold">5+</p>
                <p className="text-sm text-orange-100 mt-1 font-medium">Years of Excellence</p>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-slate-900 rounded-2xl p-6 text-white shadow-xl"
              >
                <Briefcase className="w-8 h-8 mb-3 text-orange-400" />
                <p className="text-3xl font-extrabold">15+</p>
                <p className="text-sm text-slate-400 mt-1 font-medium">Service Categories</p>
              </motion.div>

<<<<<<< HEAD
              {/* Card 3 (Location) */}
=======
              {/* Card 3 */}
>>>>>>> ec746734adc4554fca8f52a78d1505292564987b
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm col-span-2"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 mb-0.5">Our Location</p>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      Ground Floor, No. 8B, Flat F, V V Colony,<br />
                      1st Cross Street, Velachery, Chennai – 600088
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

<<<<<<< HEAD
=======
            {/* Floating badge */}
            <div className="absolute -top-5 -right-4 bg-white rounded-2xl shadow-xl px-4 py-3 border border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-bold text-slate-700">Available 24/7</span>
              </div>
            </div>
>>>>>>> ec746734adc4554fca8f52a78d1505292564987b
          </motion.div>
        </div>
      </div>
    </section>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> ec746734adc4554fca8f52a78d1505292564987b
