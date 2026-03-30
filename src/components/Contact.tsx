/**
 * Contact Section + Footer
 * - Contact info cards with hover effects
 * - Dark slate footer with social icons
 * - Framer Motion reveal animations
 */
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Globe, ArrowRight, Send } from 'lucide-react';

/* ── Inline SVG social icons ── */
const SocialFb = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
  </svg>
);
const SocialIg = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);
const SocialTw = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);
const SocialLi = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const socialLinks = [
  { icon: <SocialFb />, label: 'Facebook',  href: '#' },
  { icon: <SocialIg />, label: 'Instagram', href: '#' },
  { icon: <SocialTw />, label: 'Twitter',   href: '#' },
  { icon: <SocialLi />, label: 'LinkedIn',  href: '#' },
];

const contactCards = [
  {
    icon: <MapPin className="w-6 h-6" />,
    label: 'Our Office',
    lines: [
      'Ground Floor, No. 8B, Flat F,',
      'V V Colony, 1st Cross Street,',
      'Velachery West, Velachery,',
      'Chennai – 600088',
    ],
    link: 'https://maps.google.com/?q=Velachery,Chennai',
    linkText: 'View on Maps',
  },
  {
    icon: <Phone className="w-6 h-6" />,
    label: 'Phone',
    lines: ['+91 80725 16152', '+91 99403 00857', '+91 7200060857'],
    link: 'tel:8072516152',
    linkText: 'Call Now',
  },
  {
    icon: <Mail className="w-6 h-6" />,
    label: 'Email',
    lines: ['info.astralimmigration@gmail.com'],
    link: 'mailto:info.astralimmigration@gmail.com',
    linkText: 'Send Email',
  },
  {
    icon: <Globe className="w-6 h-6" />,
    label: 'Working Hours',
    lines: ['Mon – Sat: 9:00 AM – 7:00 PM', 'Sunday: By Appointment'],
    link: 'tel:8072516152',
    linkText: 'Schedule a Call',
  },
];

const footerLinks = [
  { label: 'Home',         href: '#home' },
  { label: 'About',        href: '#about' },
  { label: 'Services',     href: '#services' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Contact',      href: '#contact' },
];

const scrollTo = (id: string) =>
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

export default function Contact() {
  return (
    <>
      {/* ═══════════════════════════════════════════
          CONTACT SECTION
      ═══════════════════════════════════════════ */}
      <section id="contact" className="py-24 bg-white relative overflow-hidden">

        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-orange-500/5 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── Header ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="section-badge">Get In Touch</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 mb-3">
              We Are Here <span className="gradient-text">To Help You</span>
            </h2>
            <div className="orange-divider" />
            <p className="text-slate-500 max-w-xl mx-auto mt-5 text-lg">
              Have questions or ready to get started? Reach out — our team responds promptly.
            </p>
          </motion.div>

          {/* ── Two-column layout ── */}
          <div className="grid lg:grid-cols-5 gap-12 items-start">

            {/* ── Left: Contact cards ── */}
            <div className="lg:col-span-3 grid sm:grid-cols-2 gap-5">
              {contactCards.map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="group bg-slate-50 hover:bg-white rounded-2xl p-6 border border-transparent hover:border-orange-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-orange-100 group-hover:bg-orange-500 flex items-center justify-center text-orange-500 group-hover:text-white transition-all duration-300 mb-4">
                    {card.icon}
                  </div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">{card.label}</p>
                  {card.lines.map((line, j) => (
                    <p key={j} className="text-slate-700 font-medium text-sm leading-relaxed">{line}</p>
                  ))}
                  <a
                    href={card.link}
                    className="inline-flex items-center gap-1.5 text-orange-500 text-sm font-bold mt-3 hover:text-orange-600 group/link"
                  >
                    {card.linkText}
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200" />
                  </a>
                </motion.div>
              ))}
            </div>

            {/* ── Right: Quick enquiry panel ── */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-2 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white"
            >
              <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center text-orange-400 mb-5">
                <Send className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-extrabold mb-2">Ready to Get Started?</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Call us or drop an email and our immigration experts will connect with you within 24 hours.
              </p>

              {/* Quick action links */}
              <div className="space-y-3">
                <a
                  href="tel:8072516152"
                  className="flex items-center gap-3 w-full px-4 py-3 bg-orange-500 hover:bg-orange-600 rounded-xl text-white font-bold text-sm transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Phone className="w-4 h-4" />
                  Call: +91 80725 16152
                </a>
                <a
                  href="tel:9940300857"
                  className="flex items-center gap-3 w-full px-4 py-3 bg-white/10 hover:bg-white/15 rounded-xl text-white font-medium text-sm transition-all duration-300 border border-white/10"
                >
                  <Phone className="w-4 h-4 text-orange-400" />
                  Call: +91 99403 00857
                </a>
                <a
                  href="tel:7200060857"
                  className="flex items-center gap-3 w-full px-4 py-3 bg-white/10 hover:bg-white/15 rounded-xl text-white font-medium text-sm transition-all duration-300 border border-white/10"
                >
                  <Phone className="w-4 h-4 text-orange-400" />
                  Call: +91 72000 60857
                </a>
                <a
                  href="mailto:info.astralimmigration@gmail.com"
                  className="flex items-center gap-3 w-full px-4 py-3 bg-white/10 hover:bg-white/15 rounded-xl text-white font-medium text-sm transition-all duration-300 border border-white/10"
                >
                  <Mail className="w-4 h-4 text-orange-400" />
                  info.astralimmigration@gmail.com
                </a>
              </div>

              {/* Social */}
              <div className="border-t border-white/10 mt-7 pt-6">
                <p className="text-slate-400 text-xs mb-3 uppercase tracking-wider font-medium">Follow Us</p>
                <div className="flex gap-3">
                  {socialLinks.map((s, i) => (
                    <a
                      key={i}
                      href={s.href}
                      aria-label={s.label}
                      className="w-9 h-9 rounded-lg bg-white/10 hover:bg-orange-500 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300"
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FOOTER
      ═══════════════════════════════════════════ */}
      <footer className="bg-slate-900 text-slate-400">

        {/* ── Main content ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-9 h-9 rounded-lg bg-orange-500 flex items-center justify-center shrink-0">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-extrabold text-sm leading-tight">
                    <span className="text-orange-500">Astral</span> Immigration Services
                  </p>
                  
                </div>
              </div>
              <p className="text-sm leading-relaxed max-w-xs mb-5">
                Your trusted partner for visa processing, immigration services, and government compliance in Chennai. End-to-end solutions. Hassle-free experience.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    aria-label={s.label}
                    className="w-9 h-9 rounded-lg bg-white/5 hover:bg-orange-500 flex items-center justify-center text-slate-500 hover:text-white transition-all duration-300"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Quick Links</h4>
              <ul className="space-y-2.5">
                {footerLinks.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                      className="text-sm hover:text-orange-400 transition-colors duration-200 flex items-center gap-1.5 group/fl"
                    >
                      <ArrowRight className="w-3 h-3 text-orange-500/50 group-hover/fl:text-orange-400 group-hover/fl:translate-x-0.5 transition-all duration-200" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact mini */}
            <div>
              <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2.5 text-sm">
                  <MapPin className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" />
                  <span>Ground Floor, No. 8B, Flat F, V V Colony, 1st Cross St, Velachery, Chennai – 600088</span>
                </li>
                <li>
                  <a href="tel:8072516152" className="flex items-center gap-2.5 text-sm hover:text-orange-400 transition-colors duration-200">
                    <Phone className="w-4 h-4 text-orange-500 shrink-0" />
                    +91 80725 16152
                  </a>
                </li>
                <li>
                  <a href="tel:9940300857" className="flex items-center gap-2.5 text-sm hover:text-orange-400 transition-colors duration-200">
                    <Phone className="w-4 h-4 text-orange-500 shrink-0" />
                    +91 99403 00857
                  </a>
                </li>
                <li>
                  <a href="tel:7200060857" className="flex items-center gap-2.5 text-sm hover:text-orange-400 transition-colors duration-200">
                    <Phone className="w-4 h-4 text-orange-500 shrink-0" />
                    +91 72000 60857
                  </a>
                </li>
                <li>
                  <a href="mailto:info.astralimmigration@gmail.com" className="flex items-center gap-2.5 text-sm hover:text-orange-400 transition-colors duration-200 break-all">
                    <Mail className="w-4 h-4 text-orange-500 shrink-0" />
                    info.astralimmigration@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
            <p>&copy; {new Date().getFullYear()} Astral Immigration Services. All Rights Reserved.</p>
            <p className="flex items-center gap-1">
              Crafted with <span className="text-orange-500 mx-1">&#9829;</span> in Chennai, India
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
