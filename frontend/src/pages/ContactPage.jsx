import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, CheckCircle, Phone, Brain, Layers, Heart, Activity } from "lucide-react";

const ContactPage = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    interest: "Discovery Call",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formState);
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-white text-gray-900 pt-28 pb-20 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-purple-600 font-bold tracking-widest uppercase text-xs mb-4 block"
          >
            Let's Talk
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight"
          >
            Ready to Explore <br />
            <span className="italic text-purple-600">What's Possible?</span>
          </motion.h1>
          <p className="text-gray-500 text-lg max-w-xl mx-auto font-light leading-relaxed">
            Book a free discovery call — a real conversation about your goals, Ria's approach, and whether it's the right fit. No pressure, no pitch.
          </p>
        </div>

        {/* Direct CTA — priority */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="bg-gradient-to-br from-purple-900 to-indigo-900 rounded-[2.5rem] p-8 md:p-12 text-white text-center mb-16"
        >
          <Brain className="w-12 h-12 text-purple-300 mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-3">Book a Free Discovery Call</h2>
          <p className="text-white/70 font-light mb-8 max-w-lg mx-auto leading-relaxed">
            A 30-minute call with Ria to understand your goals, explore how subconscious reprogramming applies to your life, and find the right starting point.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://riagupta.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-purple-900 font-black px-10 py-4 rounded-full hover:bg-purple-50 transition-colors text-lg shadow-2xl"
            >
              <Phone size={20} /> Book Your Free Call
            </a>
          </div>
          <p className="text-white/30 text-xs mt-6">Free • No obligation • 30 minutes</p>
        </motion.div>

        {/* What we offer section */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: <Brain size={24} className="text-purple-600" />,
              title: "Free Manifestation Track",
              desc: "Start here. A 10-minute psychologist-designed track to experience the technology firsthand.",
              cta: "Get Free Track →",
              href: "/free-gift",
            },
            {
              icon: <Layers size={24} className="text-pink-600" />,
              title: "Core Music + Guidance Package",
              desc: "Full healing music library with multi-layered subliminal architecture and guided reprogramming sessions.",
              cta: "Explore Package →",
              href: "https://riagupta.com",
            },
            {
              icon: <Heart size={24} className="text-indigo-600" />,
              title: "Premium 1:1 Coaching",
              desc: "Personal coaching with Ria — subconscious audit, custom protocol, and ongoing transformation mentorship.",
              cta: "Book Discovery Call →",
              href: "https://riagupta.com",
            },
          ].map((item, i) => (
            <div key={i} className="bg-white border border-purple-50 rounded-3xl p-7 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500 font-light leading-relaxed mb-4">{item.desc}</p>
              <a
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="text-purple-600 font-semibold text-sm hover:text-purple-800 transition-colors"
              >
                {item.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Enquiry Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-gray-50 border border-gray-100 rounded-[2.5rem] p-8 md:p-12">
          {/* Left: Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-3 text-gray-900">Send an Enquiry</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                Prefer to write in? Fill out the form and Ria's team will respond within 24 hours.
              </p>
            </div>
            <div className="space-y-5">
              <div className="flex items-center gap-4 text-gray-700">
                <div className="w-11 h-11 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mb-0.5">Email</p>
                  <p className="font-semibold text-gray-900 text-sm">support@riagupta.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-gray-700">
                <div className="w-11 h-11 rounded-full bg-pink-100 flex items-center justify-center text-pink-600">
                  <Activity size={18} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mb-0.5">Instagram</p>
                  <a href="https://www.instagram.com/riiagupta/" target="_blank" rel="noopener noreferrer"
                    className="font-semibold text-gray-900 text-sm hover:text-purple-600 transition-colors">
                    @riiagupta
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form or Success */}
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white border border-purple-100 rounded-3xl p-8 flex flex-col items-center justify-center text-center min-h-[360px]"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-5">
                <CheckCircle size={32} className="text-green-600" />
              </div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">Enquiry Received!</h3>
              <p className="text-gray-500 mb-6 text-sm max-w-xs leading-relaxed">
                Thank you, {formState.name}! We'll be in touch within 24 hours.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="text-purple-600 font-bold hover:text-purple-800 transition-colors text-sm border-b border-purple-200 pb-0.5"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-semibold">Your Name</label>
                <input
                  type="text"
                  className="w-full bg-white border border-gray-200 rounded-2xl px-4 py-3 text-gray-900 placeholder:text-gray-300 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all text-sm"
                  placeholder="Your full name"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-semibold">Email Address</label>
                <input
                  type="email"
                  className="w-full bg-white border border-gray-200 rounded-2xl px-4 py-3 text-gray-900 placeholder:text-gray-300 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all text-sm"
                  placeholder="your@email.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-semibold">I'm Interested In</label>
                <select
                  className="w-full bg-white border border-gray-200 rounded-2xl px-4 py-3 text-gray-900 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all appearance-none text-sm"
                  value={formState.interest}
                  onChange={(e) => setFormState({ ...formState, interest: e.target.value })}
                >
                  <option value="Discovery Call">Free Discovery Call</option>
                  <option value="Free Track">Free Manifestation Track</option>
                  <option value="Core Package">Core Music + Guidance Package</option>
                  <option value="Premium Coaching">Premium 1:1 Coaching</option>
                  <option value="Other">Other Inquiry</option>
                </select>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-semibold">Tell Us About Your Goals</label>
                <textarea
                  className="w-full bg-white border border-gray-200 rounded-2xl px-4 py-3 text-gray-900 placeholder:text-gray-300 h-28 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all resize-none text-sm"
                  placeholder="What are you working through? What would transformation look like for you?"
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-purple-800 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-purple-200 hover:scale-[1.01] transition-all"
              >
                <Send size={17} /> Send Enquiry
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
