import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  ShieldCheck,
  Sparkles,
  Heart,
  Lock,
  Layers,
  Brain,
  Headphones,
  Phone,
  Music,
  X,
  Send,
  CheckCircle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

// Inline coaching inquiry form
const CoachingInquiryForm = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", goals: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Coaching inquiry:", form);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white/10 border border-white/20 rounded-3xl p-8 text-center"
      >
        <div className="w-14 h-14 bg-green-400/20 rounded-full flex items-center justify-center mx-auto mb-4 ring-2 ring-green-400/30">
          <CheckCircle size={28} className="text-green-400" />
        </div>
        <h4 className="text-xl font-serif font-bold mb-2">Details Received!</h4>
        <p className="text-white/60 text-sm font-light">Ria's team will reach out within 24 hours to schedule your discovery call.</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-4">
      <div>
        <label className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-1.5">Your Name</label>
        <input
          type="text"
          required
          placeholder="Full name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full bg-white/10 border border-white/20 rounded-2xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all text-sm"
        />
      </div>
      <div>
        <label className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-1.5">Email Address</label>
        <input
          type="email"
          required
          placeholder="your@email.com"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full bg-white/10 border border-white/20 rounded-2xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all text-sm"
        />
      </div>
      <div>
        <label className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-1.5">Phone / WhatsApp</label>
        <input
          type="tel"
          placeholder="+91 00000 00000"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="w-full bg-white/10 border border-white/20 rounded-2xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all text-sm"
        />
      </div>
      <div>
        <label className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-1.5">What do you want to work on?</label>
        <input
          type="text"
          placeholder="e.g. anxiety, confidence, manifestation…"
          value={form.goals}
          onChange={(e) => setForm({ ...form, goals: e.target.value })}
          className="w-full bg-white/10 border border-white/20 rounded-2xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all text-sm"
        />
      </div>
      <div className="sm:col-span-2">
        <button
          type="submit"
          className="w-full bg-white text-purple-900 font-black py-4 rounded-2xl hover:bg-purple-50 transition-colors flex items-center justify-center gap-2 text-base shadow-lg"
        >
          <Send size={18} /> Request My Discovery Call
        </button>
        <p className="text-white/30 text-xs text-center mt-3">Free • No obligation • We'll contact you within 24 hours</p>
      </div>
    </form>
  );
};

const OTOPage = () => {
  const navigate = useNavigate();

  const handleAcceptOffer = () => {
    window.open("https://riagupta.com/product/sleep-mixtape/", "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-purple-50 text-gray-900 overflow-x-hidden">
      {/* TOP CONFIRMATION BANNER */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-4 px-4 text-center">
        <p className="text-sm md:text-base font-semibold">
          ✓ &nbsp;Your free Manifestation Track is on its way to your inbox!
        </p>
      </div>

      <div className="container-custom py-14 md:py-24 relative max-w-4xl mx-auto px-4">
        {/* Background Decor */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-200/20 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pink-200/20 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative z-10 text-center">
          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Sparkles className="text-purple-600 w-8 h-8" />
            </div>
            <span className="inline-block bg-purple-100 text-purple-700 px-5 py-1.5 rounded-full text-sm font-bold mb-6 uppercase tracking-widest">
              One more step before you listen
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight text-gray-900">
              Ready to Go Deeper?
              <span className="block italic text-purple-600 mt-2">Unlock the Full Experience.</span>
            </h1>
            <p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              The free track gives you a taste. The Core Package gives you the full healing music library — plus guided reprogramming sessions with Ria to accelerate your transformation.
            </p>
          </motion.div>

          {/* Comparison: Free Track vs Core Package */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="grid md:grid-cols-2 gap-0 border border-purple-100 rounded-[2.5rem] overflow-hidden mb-16 shadow-xl bg-white text-left"
          >
            <div className="bg-gray-50 p-8 border-b md:border-b-0 md:border-r border-purple-100">
              <h3 className="text-base font-bold mb-6 text-gray-400 uppercase tracking-widest">Your Free Track</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-600 text-sm">
                  <Check size={16} className="text-green-500 shrink-0 mt-0.5" />
                  <span>1x 10-minute Manifestation Reset Track</span>
                </li>
                <li className="flex items-start gap-3 text-gray-400 text-sm">
                  <X size={16} className="text-red-300 shrink-0 mt-0.5" />
                  <span>No full healing music library</span>
                </li>
                <li className="flex items-start gap-3 text-gray-400 text-sm">
                  <X size={16} className="text-red-300 shrink-0 mt-0.5" />
                  <span>No guided reprogramming sessions</span>
                </li>
                <li className="flex items-start gap-3 text-gray-400 text-sm">
                  <X size={16} className="text-red-300 shrink-0 mt-0.5" />
                  <span>No personalized 21-day roadmap</span>
                </li>
                <li className="flex items-start gap-3 text-gray-400 text-sm">
                  <X size={16} className="text-red-300 shrink-0 mt-0.5" />
                  <span>No direct support from Ria</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 text-left relative border border-purple-100">
              <div className="absolute top-4 right-4 bg-purple-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                Recommended
              </div>
              <h3 className="text-base font-bold mb-6 text-purple-700 uppercase tracking-widest">Music + Guidance Package</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-800 text-sm">
                  <Check size={16} className="text-purple-500 shrink-0 mt-0.5" />
                  <span>Full healing music library (all tracks)</span>
                </li>
                <li className="flex items-start gap-3 text-gray-800 text-sm">
                  <Check size={16} className="text-purple-500 shrink-0 mt-0.5" />
                  <span>Multi-layered subconscious affirmation architecture</span>
                </li>
                <li className="flex items-start gap-3 text-gray-800 text-sm">
                  <Check size={16} className="text-purple-500 shrink-0 mt-0.5" />
                  <span>Guided reprogramming sessions with Ria</span>
                </li>
                <li className="flex items-start gap-3 text-gray-800 text-sm">
                  <Check size={16} className="text-purple-500 shrink-0 mt-0.5" />
                  <span>Personalized 21-day transformation roadmap</span>
                </li>
                <li className="flex items-start gap-3 text-gray-800 text-sm">
                  <Check size={16} className="text-purple-500 shrink-0 mt-0.5" />
                  <span>Priority support & community access</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Pricing & Decision */}
          <div className="mb-16 flex flex-col items-center">
            <div className="mb-8">
              <p className="text-gray-400 text-sm line-through mb-1">₹5,999 regular price</p>
              <p className="text-4xl sm:text-6xl md:text-7xl font-black text-purple-600 leading-none">₹2,499</p>
              <p className="text-gray-500 mt-2 text-sm">One-time payment • Instant access</p>
            </div>

            <div className="w-full max-w-lg space-y-6">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleAcceptOffer}
                className="w-full bg-gradient-to-r from-purple-600 to-purple-800 text-white font-black text-xl md:text-2xl py-7 rounded-[2rem] shadow-2xl shadow-purple-200 flex items-center justify-center gap-4 hover:shadow-purple-300 transition-all duration-300"
              >
                <Sparkles className="w-6 h-6" />
                Yes, I Want the Core Package
                <ArrowRight className="w-6 h-6" />
              </motion.button>

              <button
                onClick={() => navigate("/thank-you")}
                className="text-gray-400 hover:text-gray-600 transition-colors text-sm font-medium"
              >
                I'll stick with the free track for now
              </button>
            </div>
          </div>

          {/* Why upgrade — 3 value props */}
          <div className="grid md:grid-cols-3 gap-6 text-left">
            {[
              {
                icon: <Brain className="text-purple-600" size={24} />,
                title: "Psychology-Led Depth",
                desc: "The Core Package is structured around real psychological reprogramming progression — not just a playlist.",
              },
              {
                icon: <Layers className="text-pink-600" size={24} />,
                title: "Full Layering System",
                desc: "Multi-track library with different contexts: sleep, focus, anxiety relief, confidence building, and more.",
              },
              {
                icon: <Heart className="text-indigo-600" size={24} />,
                title: "Ria's Guidance",
                desc: "Access to reprogramming sessions means you understand how to listen, when, and why — for maximum impact.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-purple-50 rounded-3xl p-8 shadow-sm">
                <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h4 className="font-bold mb-2 text-gray-900">{item.title}</h4>
                <p className="text-sm text-gray-500 font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Premium coaching teaser */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-br from-purple-900 to-indigo-900 rounded-[2.5rem] p-8 md:p-12 text-white text-left"
          >
            <div className="mb-8">
              <span className="text-purple-300 text-xs font-black uppercase tracking-widest block mb-3">Looking for deeper work?</span>
              <h3 className="text-2xl md:text-3xl font-serif font-bold mb-3">Premium 1:1 Coaching with Ria</h3>
              <p className="text-white/70 font-light leading-relaxed max-w-2xl">
                A fully personalized coaching engagement — subconscious audit, custom music protocol, and ongoing mentorship. Leave your details and Ria's team will reach out within 24 hours.
              </p>
            </div>

            {/* Inline Details Form */}
            <CoachingInquiryForm />
          </motion.div>

          {/* Final Trust */}
          <div className="mt-12 flex flex-col items-center gap-3">
            <div className="flex -space-x-3">
              {[
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1521119989659-a83eee4882b2?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop"
              ].map((url, i) => (
                <img key={i} src={url} className="w-11 h-11 rounded-full border-4 border-white object-cover shadow-md" alt={`User ${i}`} />
              ))}
            </div>
            <p className="text-gray-500 text-sm">Join thousands already on their healing journey</p>
            <div className="flex items-center gap-2 text-xs text-gray-400 mt-1">
              <Lock size={12} /> Secure Payment • Instant Access • 21-Day Guarantee
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTOPage;
