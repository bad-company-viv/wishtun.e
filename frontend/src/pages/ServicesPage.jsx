import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Brain, Layers, Heart, Activity, Award, Users, Globe, CheckCircle,
  Headphones, Phone, ArrowRight, Plus, Minus,
} from "lucide-react";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="border-b border-gray-100 py-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full justify-between items-start text-left group"
      >
        <span className="text-base md:text-lg font-semibold text-gray-900 group-hover:text-purple-700 transition-colors pr-4">
          {question}
        </span>
        {isOpen
          ? <Minus size={18} className="text-purple-500 shrink-0 mt-1" />
          : <Plus size={18} className="text-purple-400 shrink-0 mt-1" />}
      </button>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          className="overflow-hidden"
        >
          <p className="pt-4 text-gray-500 leading-relaxed text-sm font-light max-w-2xl">{answer}</p>
        </motion.div>
      )}
    </div>
  );
};

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 pt-24">

      {/* HERO */}
      <section className="text-center px-4 max-w-4xl mx-auto py-20">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 font-bold tracking-widest uppercase text-xs px-5 py-2 rounded-full mb-6"
        >
          <Brain size={14} /> Psychologist-Designed • Science-Backed
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-7xl font-serif font-bold mb-6 leading-tight"
        >
          Choose Your <br />
          <span className="italic text-purple-600">Transformation Path.</span>
        </motion.h1>
        <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
          Every offering is rooted in psychology and precision sound design. Start where you are — go as deep as you choose.
        </p>
      </section>

      {/* CREDENTIAL TRUST STRIP */}
      <section className="px-4 max-w-3xl mx-auto mb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: <Award size={24} className="text-purple-500" />, stat: "5+", label: "Years in Psychology" },
            { icon: <Users size={24} className="text-pink-500" />, stat: "1000+", label: "Lives Changed" },
            { icon: <Globe size={24} className="text-indigo-500" />, stat: "10K+", label: "Global Listeners" },
            { icon: <CheckCircle size={24} className="text-green-500" />, stat: "21-Day", label: "Proven Framework" },
          ].map((item, i) => (
            <div key={i} className="bg-purple-50 border border-purple-100 rounded-2xl p-5 text-center">
              <div className="flex justify-center mb-2">{item.icon}</div>
              <p className="text-2xl font-black text-gray-900">{item.stat}</p>
              <p className="text-xs text-gray-500 mt-1 leading-tight">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3-TIER PRODUCT LADDER */}
      <section className="px-4 max-w-6xl mx-auto mb-24">
        <div className="text-center mb-14">
          <span className="text-purple-600 uppercase tracking-[0.2em] text-xs font-bold mb-3 block">Offerings</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold">Start Free. Go Deep When Ready.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Tier 1 */}
          <div className="border-2 border-gray-100 rounded-[2rem] p-8 hover:border-purple-100 transition-colors">
            <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center mb-5">
              <Headphones size={28} className="text-purple-500" />
            </div>
            <span className="text-xs font-black uppercase tracking-widest text-purple-400 mb-2 block">Free</span>
            <h3 className="text-2xl font-serif font-bold mb-3">Manifestation Reset Track</h3>
            <p className="text-gray-500 text-sm font-light leading-relaxed mb-6">
              A 10-minute psychologist-designed audio track to experience subconscious reprogramming firsthand. The best starting point — no commitment needed.
            </p>
            <ul className="space-y-2 mb-8 text-sm">
              {["Psychologist-layered audio architecture", "Subconscious affirmation embedding", "Instant digital delivery"].map((f, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-600">
                  <CheckCircle size={14} className="text-purple-400 shrink-0" /> {f}
                </li>
              ))}
            </ul>
            <Link
              to="/free-gift"
              className="flex items-center justify-center gap-2 w-full border-2 border-purple-200 text-purple-700 font-bold py-3.5 rounded-2xl hover:bg-purple-50 transition-colors"
            >
              Get Free Track <ArrowRight size={16} />
            </Link>
          </div>

          {/* Tier 2 — Highlighted */}
          <div className="border-2 border-purple-400 rounded-[2rem] p-8 bg-gradient-to-br from-purple-50 to-pink-50 relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-xs font-black px-5 py-1.5 rounded-full uppercase tracking-widest whitespace-nowrap">
              Most Popular
            </div>
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-5 shadow-sm">
              <Layers size={28} className="text-purple-600" />
            </div>
            <span className="text-xs font-black uppercase tracking-widest text-purple-600 mb-2 block">Core</span>
            <h3 className="text-2xl font-serif font-bold mb-3">Music + Guidance Package</h3>
            <p className="text-gray-500 text-sm font-light leading-relaxed mb-6">
              Full healing music library combined with Ria's guided reprogramming sessions and a personalized 21-day roadmap.
            </p>
            <ul className="space-y-2 mb-8 text-sm">
              {[
                "Complete healing music library",
                "Guided reprogramming sessions",
                "21-day personalized roadmap",
                "Priority community access",
                "Monthly live Q&A",
              ].map((f, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-700">
                  <CheckCircle size={14} className="text-purple-500 shrink-0" /> {f}
                </li>
              ))}
            </ul>
            <a
              href="https://riagupta.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-purple-600 to-purple-800 text-white font-bold py-4 rounded-2xl shadow-lg shadow-purple-200 hover:shadow-purple-300 transition-all hover:scale-[1.01]"
            >
              Explore Package <ArrowRight size={16} />
            </a>
          </div>

          {/* Tier 3 */}
          <div className="border-2 border-gray-100 rounded-[2rem] p-8 hover:border-indigo-100 transition-colors">
            <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-5">
              <Heart size={28} className="text-indigo-500" />
            </div>
            <span className="text-xs font-black uppercase tracking-widest text-indigo-400 mb-2 block">Premium</span>
            <h3 className="text-2xl font-serif font-bold mb-3">1:1 Coaching with Ria</h3>
            <p className="text-gray-500 text-sm font-light leading-relaxed mb-6">
              A fully personalized engagement — subconscious audit, custom music protocol, and ongoing mentorship from Ria. For those serious about deep, lasting transformation.
            </p>
            <ul className="space-y-2 mb-8 text-sm">
              {[
                "Personalized subconscious audit",
                "Custom music + affirmation protocol",
                "1:1 video coaching sessions",
                "Direct WhatsApp/DM access to Ria",
                "Unlimited session replays",
              ].map((f, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-600">
                  <CheckCircle size={14} className="text-indigo-400 shrink-0" /> {f}
                </li>
              ))}
            </ul>
            <a
              href="https://riagupta.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full border-2 border-indigo-200 text-indigo-700 font-bold py-3.5 rounded-2xl hover:bg-indigo-50 transition-colors"
            >
              <Phone size={16} /> Book Discovery Call
            </a>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS — Process */}
      <section className="py-24 px-4 bg-gray-50 border-y border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-purple-600 uppercase tracking-[0.2em] text-xs font-bold mb-3 block">The Process</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-16">How the Transformation Works</h2>
          <div className="grid md:grid-cols-4 gap-8 text-left">
            {[
              { step: "01", title: "Experience First", desc: "Start with the free track. Feel the shift — no explanation needed, the experience speaks." },
              { step: "02", title: "Understand the Science", desc: "Learn the psychology behind subconscious reprogramming. Trust is built through knowledge." },
              { step: "03", title: "Deepen Your Practice", desc: "Upgrade to the Core Package for structured 21-day reprogramming with Ria's guidance." },
              { step: "04", title: "Transform Deeply", desc: "For lasting change, 1:1 coaching gives you a personalized protocol and direct mentorship." },
            ].map((item, i) => (
              <div key={i}>
                <span className="text-5xl font-black text-purple-100 block mb-3 leading-none">{item.step}</span>
                <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-500 font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4 max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-purple-600 uppercase tracking-[0.2em] text-xs font-bold mb-3 block">Questions</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold">Common Questions</h2>
        </div>
        <div>
          {[
            {
              question: "Do I need to believe in manifestation for this to work?",
              answer: "No. The approach is grounded in psychology — specifically subconscious reprogramming and sound healing principles. Your belief system doesn't need to change; understanding the mechanism is enough to experience the shift.",
            },
            {
              question: "Why 21 days?",
              answer: "Neuroplasticity research shows it takes approximately 21 days of consistent repetition to form new neural pathways. This is the minimum threshold for meaningful mindset shifts — which is why all of Ria's frameworks are built around it.",
            },
            {
              question: "Can I start without headphones?",
              answer: "Yes — the tracks are designed to work without headphones. For the deepest subconscious-level impact (particularly the binaural and subliminal layers), headphones are recommended but not required.",
            },
            {
              question: "What's the difference between the Core Package and 1:1 Coaching?",
              answer: "The Core Package is a structured program — music library + guided sessions + 21-day roadmap. It's self-directed with community support. 1:1 Coaching is fully personalized: Ria audits your specific subconscious patterns and builds a custom protocol around your individual goals.",
            },
            {
              question: "How do I know if the Discovery Call is right for me?",
              answer: "If you're curious about how Ria's approach could apply to your specific situation, a discovery call is the best starting point. It's free, there's no pressure, and you'll leave with clarity — whether or not you proceed.",
            },
          ].map((item, i) => (
            <FAQItem key={i} question={item.question} answer={item.answer} />
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 px-4 bg-gradient-to-br from-purple-900 to-indigo-900 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <Brain size={48} className="text-purple-300 mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">
            Not Sure Where to Start?
          </h2>
          <p className="text-white/70 font-light text-lg mb-10 leading-relaxed">
            Start with the free track. Experience it first-hand. Then decide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/free-gift"
              className="inline-flex items-center justify-center gap-2 bg-white text-purple-900 font-black px-10 py-4 rounded-full hover:bg-purple-50 transition-colors shadow-2xl"
            >
              <Headphones size={20} /> Get Free Track
            </Link>
            <a
              href="https://riagupta.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white font-bold px-10 py-4 rounded-full hover:bg-white/20 transition-colors"
            >
              <Phone size={20} /> Book Discovery Call
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
