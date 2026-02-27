import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  AnimatePresence,
} from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Zap,
  Shield,
  Star,
  ChevronDown,
  Check,
  X,
  Music,
  Heart,
  Award,
  Brain,
  Clock,
  Gift,
  Lock,
  Activity,
  UserCheck,
  UserX,
  Headphones,

  Plus,
  Phone,
  MessageCircle,
  Layers,
  BookOpen,
  Mic2,
  ScrollText,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";



// Vertical Lines Background Component
const VerticalLinesBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
    {[...Array(40)].map((_, i) => (
      <motion.div
        key={i}
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: ["0%", "100%", "100%"], opacity: [0, 0.6, 0.3] }}
        transition={{ duration: 2, delay: i * 0.03, ease: "easeOut" }}
        className="absolute w-px bg-gradient-to-b from-transparent via-purple-300 to-pink-200"
        style={{ left: `${(i / 40) * 100}%` }}
      />
    ))}
  </div>
);

// Wave Background Component
const WaveBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-80 z-0">
    {[...Array(3)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-[200%] h-[200%] left-[-50%] top-[-50%]"
        style={{ border: "1px solid rgba(147, 51, 234, 0.3)", borderRadius: "40%", transform: "translateZ(0)" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 15 + i * 5, repeat: Infinity, ease: "linear", delay: i * -5 }}
      />
    ))}
    <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="wave-grad-home" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(147, 51, 234, 0)" />
          <stop offset="50%" stopColor="rgba(147, 51, 234, 0.5)" />
          <stop offset="100%" stopColor="rgba(147, 51, 234, 0)" />
        </linearGradient>
      </defs>
      {[...Array(5)].map((_, i) => (
        <motion.path
          key={`wave-${i}`}
          d="M0,50 C150,150 350,0 500,50 C650,100 850,-50 1000,50 V100 H0 V50 Z"
          fill="none"
          stroke="url(#wave-grad-home)"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            d: ["M0,50 C150,150 350,0 500,50 C650,100 850,-50 1000,50", "M0,50 C150,-50 350,100 500,50 C650,0 850,150 1000,50"],
            pathLength: 1,
            opacity: [0.4, 1, 0.4]
          }}
          transition={{ duration: 8 + i, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: i * 0.5 }}
          className="w-full h-full"
          style={{ transform: `scaleY(${0.8 + i * 0.3}) translateY(${i * 25}px)`, transformOrigin: "center" }}
        />
      ))}
    </svg>
  </div>
);

// Purchase Notification Component (updated for healing music context)
const PurchaseNotification = () => {
  const [notification, setNotification] = useState(null);
  const notifications = [
    { name: "Priya S.", location: "Mumbai", action: "started her healing journey", time: "2 minutes ago" },
    { name: "Ananya K.", location: "Bangalore", action: "booked a discovery call", time: "5 minutes ago" },
    { name: "Meera R.", location: "Delhi", action: "downloaded the free track", time: "1 minute ago" },
    { name: "Divya M.", location: "Pune", action: "joined the Core Package", time: "8 minutes ago" },
    { name: "Sunaina T.", location: "Hyderabad", action: "started her healing journey", time: "3 minutes ago" },
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      const random = notifications[Math.floor(Math.random() * notifications.length)];
      setNotification(random);
      setTimeout(() => setNotification(null), 5000);
    }, 15000);
    return () => clearInterval(interval);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, x: -50, scale: 0.9 }}
      animate={notification ? { opacity: 1, x: 20, scale: 1 } : { opacity: 0, x: -50, scale: 0.9 }}
      className="fixed bottom-8 left-0 z-50 pointer-events-none"
    >
      {notification && (
        <div className="bg-white/80 backdrop-blur-xl border border-purple-100 p-4 rounded-2xl shadow-2xl flex items-center gap-4 max-w-sm pointer-events-auto">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold shrink-0">
            {notification.name[0]}
          </div>
          <div>
            <p className="text-sm font-bold text-gray-900">
              {notification.name} <span className="font-normal text-gray-500">from {notification.location}</span>
            </p>
            <p className="text-xs text-purple-600 font-medium">{notification.action}</p>
            <p className="text-[10px] text-gray-400 mt-0.5">{notification.time}</p>
          </div>
          <button onClick={() => setNotification(null)} className="ml-2 text-gray-400 hover:text-gray-600 shrink-0">
            <X size={14} />
          </button>
        </div>
      )}
    </motion.div>
  );
};

// Exit Intent Popup Component
const ExitPopup = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="absolute inset-0 bg-black/60 backdrop-blur-md" />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-xl bg-white rounded-[3rem] overflow-hidden shadow-2xl p-8 md:p-12 text-center"
          >
            <button onClick={onClose} className="absolute top-6 right-6 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">
              <X size={20} />
            </button>
            <div className="mb-8 flex justify-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center">
                <Gift className="w-10 h-10 text-purple-600 animate-bounce" />
              </div>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-4 leading-tight">
              Before You Go —<br /><span className="italic text-purple-600">Experience This Free.</span>
            </h2>
            <p className="text-gray-500 mb-10 text-lg font-light leading-relaxed">
              A 10-minute <strong>Manifestation Track</strong> — psychologist-designed to shift your subconscious state instantly.
            </p>
            <div className="space-y-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => { onClose(); navigate('/free-gift'); }}
                className="w-full bg-gradient-to-r from-purple-600 to-purple-800 text-white font-bold py-6 rounded-full shadow-xl shadow-purple-200 flex items-center justify-center gap-3 text-xl tracking-widest"
              >
                GET MY FREE TRACK <Sparkles size={20} />
              </motion.button>
              <button onClick={onClose} className="text-gray-400 text-xs font-bold uppercase tracking-widest hover:text-gray-600 transition-colors">
                No thanks, I'll pass on experiencing it
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};



// Science Education Section — NEW (TOFU Phase 1)
const ScienceSection = () => {
  const pillars = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Psychology-Grounded",
      description: "Designed by a trained psychologist, every track is rooted in how the subconscious mind actually processes and stores new beliefs.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Layered Audio Architecture",
      description: "Affirmations and manifestations are embedded beneath the music — accessible to your subconscious, not your conscious resistance.",
      color: "bg-pink-100 text-pink-600"
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Scientifically-Informed",
      description: "Sound frequencies, binaural principles, and neuro-acoustic layering work together to guide your mind into receptive states.",
      color: "bg-indigo-100 text-indigo-600"
    },
  ];

  return (
    <section className="py-14 md:py-20 px-4 bg-white">
      <div className="container-custom max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-purple-600 uppercase tracking-[0.2em] text-sm font-bold mb-4 block">The Science</span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-gray-900 leading-tight">
            Why This Music <span className="italic text-purple-600">Works Differently</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto font-light leading-relaxed">
            This isn't background music. It's a precision-designed tool for subconscious transformation — built at the intersection of psychology, sound engineering, and mindset science.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white p-10 rounded-[2.5rem] border border-purple-50 shadow-sm relative group hover:shadow-xl transition-shadow duration-500"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center font-serif font-bold text-xl text-purple-600 border border-purple-50">
                0{i + 1}
              </div>
              <div className={`w-16 h-16 ${pillar.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                {pillar.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{pillar.title}</h3>
              <p className="text-gray-500 leading-relaxed font-light">{pillar.description}</p>
            </motion.div>
          ))}
        </div>

        {/* What is subconscious reprogramming */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-[3rem] p-10 md:p-16 border border-purple-100"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-purple-600 uppercase tracking-[0.2em] text-sm font-bold mb-4 block">Understanding The Process</span>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                What is Subconscious Reprogramming?
              </h3>
              <div className="space-y-5 text-gray-600 font-light leading-relaxed text-lg">
                <p>Your subconscious mind runs 95% of your daily behaviour — beliefs, habits, emotional patterns — all operating beneath your awareness.</p>
                <p>Most people try to change through willpower alone, working against their own subconscious programming. <span className="text-purple-700 font-semibold">That's why it doesn't stick.</span></p>
                <p>Ria's music bypasses the critical conscious mind and speaks directly to the subconscious — during relaxed, receptive states where real change happens.</p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { label: "Conscious Mind", pct: 5, color: "bg-gray-300", desc: "Where effort and willpower live" },
                { label: "Subconscious Mind", pct: 95, color: "bg-gradient-to-r from-purple-500 to-pink-500", desc: "Where beliefs, habits & identity live" },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-purple-50">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-bold text-gray-900">{item.label}</span>
                    <span className="font-black text-purple-600 text-xl">{item.pct}%</span>
                  </div>
                  <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden mb-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.3 }}
                      className={`h-full ${item.color} rounded-full`}
                    />
                  </div>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              ))}
              <p className="text-sm text-center text-purple-600 font-semibold pt-2">
                ✦ Ria's music reaches where traditional methods can't
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// 4-Phase Journey Section (replaces 3-step "press play")
const FunnelJourneySection = () => {
  const phases = [
    {
      number: "01",
      phase: "Awareness",
      title: "Understand What's Possible",
      description: "Learn how subconscious programming, sound healing, and layered audio actually work. Education first — curiosity before commitment.",
      icon: <BookOpen className="w-8 h-8" />,
      color: "from-purple-100 to-purple-50",
      accent: "text-purple-600",
      border: "border-purple-200"
    },
    {
      number: "02",
      phase: "Trust",
      title: "Experience Before You Decide",
      description: "Download a free track. Feel the shift. Experience Ria's work before making any decisions — trust built through experience, not promises.",
      icon: <Headphones className="w-8 h-8" />,
      color: "from-pink-100 to-pink-50",
      accent: "text-pink-600",
      border: "border-pink-200"
    },
    {
      number: "03",
      phase: "Explore",
      title: "Find What Fits You",
      description: "From the core healing music package to guided coaching sessions — choose the depth that matches where you are on your journey.",
      icon: <Layers className="w-8 h-8" />,
      color: "from-indigo-100 to-indigo-50",
      accent: "text-indigo-600",
      border: "border-indigo-200"
    },
    {
      number: "04",
      phase: "Transform",
      title: "Long-Term Subconscious Shift",
      description: "Consistent listening rewires your baseline — clarity, confidence, and a new identity that reflects what you're actually capable of.",
      icon: <Sparkles className="w-8 h-8" />,
      color: "from-amber-100 to-amber-50",
      accent: "text-amber-600",
      border: "border-amber-200"
    },
  ];

  return (
    <section className="py-14 md:py-20 px-4 bg-gray-50/50">
      <div className="container-custom max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-purple-600 uppercase tracking-[0.2em] text-sm font-bold mb-4 block">Your Journey</span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-gray-900 italic">
            Transformation in <span className="text-purple-600">Four Phases</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light">
            From curiosity to credibility to conversion — we don't rush this. Real change takes the right sequence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((phase, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`bg-gradient-to-b ${phase.color} p-8 rounded-[2.5rem] border ${phase.border} relative group hover:shadow-xl transition-all duration-500`}
            >
              <div className={`text-6xl font-black ${phase.accent} opacity-20 absolute top-6 right-6 font-serif leading-none`}>
                {phase.number}
              </div>
              <div className={`w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 ${phase.accent} shadow-sm group-hover:scale-110 transition-transform duration-500`}>
                {phase.icon}
              </div>
              <span className={`text-xs font-black uppercase tracking-widest ${phase.accent} mb-2 block`}>{phase.phase}</span>
              <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">{phase.title}</h3>
              <p className="text-gray-500 leading-relaxed font-light text-sm">{phase.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Connecting arrow line */}
        <div className="hidden lg:flex items-center mt-8 text-gray-400 text-sm font-medium">
          <span className="shrink-0">Start here</span>
          <div className="flex-1 h-px bg-gradient-to-r from-purple-200 via-pink-200 to-amber-200 mx-4" />
          <span className="shrink-0">Grow here</span>
        </div>
      </div>
    </section>
  );
};

// Qualification Section (updated for psychology/coaching context)
const QualificationSection = () => (
  <section className="py-14 md:py-20 px-4 bg-white overflow-hidden">
    <div className="container-custom max-w-6xl">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-gray-900">
          Is This <span className="italic text-purple-600">Right For You?</span>
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-green-50/50 p-10 md:p-12 rounded-[3rem] border border-green-100"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
              <UserCheck size={28} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 uppercase tracking-tight">This is for you if...</h3>
          </div>
          <ul className="space-y-6">
            {[
              "You're curious about the link between psychology, music, and mindset change.",
              "You want science-backed, ethically positioned tools — not generic 'law of attraction' content.",
              "You feel stuck in patterns that willpower alone can't seem to break.",
              "You're open to a long-term, education-led approach to transformation.",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <Check size={20} className="text-green-500 shrink-0 mt-1" />
                <span className="text-gray-700 font-medium leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-red-50/50 p-10 md:p-12 rounded-[3rem] border border-red-100"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600">
              <UserX size={28} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 uppercase tracking-tight">This is NOT for you if...</h3>
          </div>
          <ul className="space-y-6">
            {[
              "You're looking for an overnight miracle or instant results without any consistency.",
              "You want generic affirmations or unscientific 'good vibes only' content.",
              "You aren't willing to give the process time — real subconscious shift takes 21+ days.",
              "You're not open to understanding the psychology behind the tools you use.",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <X size={20} className="text-red-400 shrink-0 mt-1" />
                <span className="text-gray-600 font-medium leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  </section>
);

// Product Ladder Section (NEW — 3 tiers per MoM)
const ProductLadderSection = () => {
  const navigate = useNavigate();
  const tiers = [
    {
      level: "Start Here",
      title: "Free Manifestation Track",
      subtitle: "10-Min Sleep-Optimized Audio",
      description: "Experience Ria's work before anything else. A special sleep-priming track to shift your subconscious state while you drift off.",
      price: "Free",
      cta: "Download Free Track",
      href: "/free-gift",
      items: [
        "10-minute sleep-ready track",
        "Introduction to Theta states",
        "Instant digital delivery",
        "No email marketing spam",
      ],
      highlight: false,
      badge: "ENTRY POINT",
      badgeColor: "bg-purple-100 text-purple-600",
      btnClass: "border-2 border-purple-200 text-purple-700 hover:border-purple-600 hover:bg-purple-50",
    },
    {
      level: "Core Experience",
      title: "The Sleep Mixtape",
      subtitle: "60-Min Bedtime Protocol",
      description: "A 60-minute calming audio for bedtime and slow mornings when your mind is naturally relaxed and more open to positive change.",
      price: "₹2,499",
      originalPrice: "₹5,999",
      cta: "Secure My Mixtape",
      href: "/offer",
      items: [
        "Track Duration: 60 minutes",
        "Soft, dreamy music for deep rest",
        "Perfect for sleep, yoga, and wind-down",
        "Builds calm confidence and self-belief",
        "Use nightly for best manifestation results",
      ],
      highlight: true,
      badge: "MOST POPULAR",
      badgeColor: "bg-purple-600 text-white",
      btnClass: "bg-gradient-to-r from-purple-600 to-purple-800 text-white shadow-xl shadow-purple-200",
    },
    {
      level: "Personal Shift",
      title: "Premium Coaching",
      subtitle: "1:1 Strategy with Ria Gupta",
      description: "A customized coaching engagement with Ria. We audit your specific subconscious blocks and anchor new beliefs during sleep.",
      price: "Custom",
      cta: "Book Discovery Call",
      href: "#contact",
      items: [
        "Personalized subconscious audit",
        "Custom sleep protocol with Ria",
        "One-on-one strategy sessions",
        "Tailored healing track library",
        "Priority mentorship access",
      ],
      highlight: false,
      badge: "PREMIUM",
      badgeColor: "bg-amber-100 text-amber-700",
      btnClass: "border-2 border-amber-500 text-amber-700 hover:bg-amber-500 hover:text-white",
    },
  ];

  return (
    <section id="packages" className="py-14 md:py-20 px-4 bg-[#f4f4f7]">
      <div className="container-custom max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-purple-600 uppercase tracking-[0.2em] text-sm font-bold mb-4 block">Choose Your Path</span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-gray-900">
            Start Where <span className="italic text-purple-600">You Are</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light">
            Every journey begins with a single step. Explore the level that feels right — there's no pressure, only progress.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`relative bg-white rounded-[2.5rem] p-8 md:p-10 flex flex-col ${tier.highlight ? 'ring-2 ring-purple-600 shadow-2xl shadow-purple-100' : 'border border-purple-50 shadow-md'}`}
            >
              {tier.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-purple-600 text-white text-xs font-black uppercase tracking-widest px-5 py-2 rounded-full shadow-lg">
                    ✦ Most Popular
                  </div>
                </div>
              )}
              <div className="mb-6">
                <span className={`text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full ${tier.badgeColor} inline-block mb-4`}>
                  {tier.badge}
                </span>
                <span className="text-purple-600 font-bold text-sm uppercase tracking-widest block mb-2">{tier.level}</span>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{tier.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{tier.subtitle}</p>
                <p className="text-gray-600 font-light leading-relaxed text-sm">{tier.description}</p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {tier.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-gray-700">
                    <Check size={16} className="text-purple-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <div className="mb-4">
                  {tier.originalPrice && (
                    <p className="text-gray-400 text-xs font-bold uppercase tracking-widest line-through mb-1">{tier.originalPrice}</p>
                  )}
                  <p className="text-4xl font-black text-gray-900">{tier.price}</p>
                </div>
                {tier.href.startsWith('http') ? (
                  <a
                    href={tier.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full font-bold py-4 rounded-2xl flex items-center justify-center gap-2 text-base transition-all duration-300 ${tier.btnClass}`}
                  >
                    {tier.cta} <ArrowRight size={18} />
                  </a>
                ) : (
                  <button
                    onClick={() => tier.href === '#contact'
                      ? document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })
                      : navigate(tier.href)
                    }
                    className={`w-full font-bold py-4 rounded-2xl flex items-center justify-center gap-2 text-base transition-all duration-300 ${tier.btnClass}`}
                  >
                    {tier.cta} <ArrowRight size={18} />
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-gray-400 text-sm mt-10 font-light">
          Not sure where to start? The free track is always the best first step. Trust the process.
        </p>
      </div>
    </section>
  );
};

// About Ria — Authority Section (updated to lead with Psychologist credentials)
const AboutFounderSection = () => (
  <section className="py-14 md:py-20 px-4 bg-white border-t border-purple-50">
    <div className="container-custom max-w-6xl">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative order-last md:order-first"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-200 to-pink-200 rounded-[2.5rem] blur-2xl opacity-60" />
          <div className="relative rounded-[2.5rem] overflow-hidden border border-purple-100 shadow-2xl">
            <img
              src="/images/founder.jpeg"
              alt="Ria Gupta — Psychologist & Music Producer"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
            {/* Credentials badge */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur rounded-2xl p-4 shadow-xl border border-purple-50">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center shrink-0">
                  <Award className="text-purple-600 w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">Ria Gupta</p>
                  <p className="text-xs text-purple-600 font-semibold">Psychologist • Music Producer • Subconscious Reprogramming Expert</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8 text-left"
        >
          <div>
            <span className="text-purple-600 uppercase tracking-[0.2em] text-sm font-bold mb-4 block">Meet Ria Gupta</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.1] mb-6 text-gray-900 font-bold">
              Psychology meets <br /><span className="italic text-purple-600">Sound Healing.</span>
            </h2>
          </div>

          <div className="space-y-5 text-lg text-gray-500 font-light leading-relaxed">
            <p>Ria Gupta is a trained psychologist and music producer working at the intersection of psychology, sound healing, and subconscious reprogramming.</p>
            <p>Her work combines <strong className="text-gray-700">scientifically-informed audio engineering</strong> with deep psychological understanding of how the mind processes and adopts new beliefs.</p>
            <p>"Most manifestation content is too generic, too mystical, or too vague. I wanted to build something grounded — where the science is real and the results are verifiable."</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: <Brain size={18} />, label: "Trained Psychologist" },
              { icon: <Music size={18} />, label: "Music Producer" },
              { icon: <Layers size={18} />, label: "Subliminal Audio Expert" },
              { icon: <ScrollText size={18} />, label: "Manifestation Coach" },
            ].map((cred, i) => (
              <div key={i} className="flex items-center gap-3 text-sm text-gray-700 bg-purple-50 rounded-2xl px-4 py-3 font-medium">
                <span className="text-purple-500">{cred.icon}</span>
                {cred.label}
              </div>
            ))}
          </div>

          <div className="pt-4 border-l-4 border-purple-200 pl-6">
            <a
              href="https://riagupta.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 text-2xl font-serif font-bold mb-1 block hover:text-purple-600 transition-colors"
            >
              Ria Gupta
            </a>
            <p className="text-purple-600 italic font-medium">&mdash; Founder, Wishtune</p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

// Experience Stories / Testimonials (renamed and reframed)
const ExperienceStoriesSection = () => {
  const stories = [
    {
      text: "I approached this skeptically — I'm not someone who believes in anything unproven. But the psychology behind it made sense. After 3 weeks of consistent listening, my anxiety baseline genuinely shifted. I feel calmer without trying.",
      name: "Priya K.",
      location: "Bangalore",
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      tag: "21-day journey"
    },
    {
      text: "I'm a psychology student, so when Ria explained the subconscious mechanism behind the music, I was genuinely impressed. The layering is real — you can feel the shift without consciously hearing it. This is genuinely different from everything else.",
      name: "Shreya M.",
      location: "Delhi",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      tag: "Core Package"
    },
    {
      text: "A month of listening and I've stopped waking up with that familiar sense of dread. I don't know exactly how to explain it — but something fundamental has changed. I'm more decisive, less reactive. Highly recommend starting with the free track.",
      name: "Ananya R.",
      location: "Mumbai",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      tag: "Free track → Core Package"
    },
  ];

  return (
    <section className="py-14 md:py-20 px-4 bg-white border-y border-gray-50">
      <div className="container-custom max-w-6xl">
        <div className="text-center mb-20">
          <span className="text-purple-600 uppercase tracking-[0.2em] text-sm font-bold mb-4 block">Experience Stories</span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-gray-900">
            Their Journey, <span className="italic">in Their Words</span>
          </h2>
          <p className="text-lg text-gray-400 font-light">Experience over claims. Impact over promises.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {stories.map((story, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-purple-50/50 p-10 rounded-[2.5rem] relative"
            >
              <span className="absolute top-6 right-6 text-xs font-bold uppercase tracking-widest text-purple-400 bg-purple-100 px-3 py-1 rounded-full">
                {story.tag}
              </span>
              <div className="text-purple-200 text-6xl font-serif leading-none mb-4">"</div>
              <p className="text-gray-700 italic text-base leading-relaxed mb-8 font-light">{story.text}</p>
              <div className="flex items-center gap-5">
                <img src={story.img} className="w-14 h-14 rounded-full border-2 border-purple-200 shadow-md" alt={story.name} />
                <div>
                  <p className="font-bold text-gray-900 text-lg">{story.name}</p>
                  <p className="text-xs uppercase text-purple-600 font-bold tracking-widest">{story.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Social Bridge Section — drives visitors to Instagram/YouTube
const SocialBridgeSection = () => {
  const topics = [
    {
      label: "How the Subconscious Mind Works",
      platform: "Instagram",
      color: "bg-purple-50 border-purple-100",
      text: "text-purple-600",
      emoji: "🧠",
    },
    {
      label: "The Science of Manifestation",
      platform: "YouTube",
      color: "bg-red-50 border-red-100",
      text: "text-red-500",
      emoji: "⚡",
    },
    {
      label: "Sound Healing & Frequency Explained",
      platform: "Instagram",
      color: "bg-pink-50 border-pink-100",
      text: "text-pink-600",
      emoji: "🎵",
    },
    {
      label: "21-Day Reprogramming Framework",
      platform: "YouTube",
      color: "bg-amber-50 border-amber-100",
      text: "text-amber-600",
      emoji: "📅",
    },
  ];

  return (
    <section className="py-14 md:py-20 px-4 bg-white">
      <div className="container-custom max-w-5xl">
        <div className="text-center mb-16">
          <span className="text-purple-600 uppercase tracking-[0.2em] text-xs font-bold mb-4 block">Keep Learning</span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-gray-900">
            Want to Go Deeper? <br />
            <span className="italic text-purple-600">We Teach It All — Free.</span>
          </h2>
          <p className="text-gray-400 font-light text-lg max-w-xl mx-auto">
            Ria regularly shares psychology breakdowns, sound science explainers, and manifestation frameworks — follow along to build your foundation before you begin.
          </p>
        </div>

        {/* Featured Video Embed */}
        <div className="mb-12 rounded-[2rem] overflow-hidden shadow-2xl shadow-purple-100/50 border border-purple-100 aspect-video w-full max-w-3xl mx-auto">
          <iframe
            src="https://www.youtube.com/embed/FIb4jmgb8go?rel=0&modestbranding=1"
            title="Ria Gupta — Manifestation & Sound Healing"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>


        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://www.instagram.com/riiagupta/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 text-white font-bold px-8 py-4 rounded-full hover:shadow-xl hover:shadow-pink-200 hover:scale-105 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            Follow on Instagram
          </a>
          <a
            href="https://www.youtube.com/@manifestologywithria"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white border-2 border-gray-200 text-gray-700 font-bold px-8 py-4 rounded-full hover:border-red-300 hover:text-red-600 hover:shadow-lg hover:shadow-red-100 hover:scale-105 transition-all duration-300"
          >
            <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            Watch on YouTube
          </a>
        </div>
      </div>
    </section>
  );
};

// FAQ Section (updated)
const FAQSection = () => (
  <section className="py-14 md:py-20 px-4 bg-gray-50">
    <div className="container-custom max-w-3xl mx-auto">
      <h2 className="text-4xl md:text-6xl font-serif font-bold mb-16 text-center text-gray-900 italic">
        Questions? We Have <span className="text-purple-600">Answers</span>
      </h2>
      <div className="space-y-8">
        {[
          { q: "Is there actual psychology behind this?", a: "Yes. Ria is a trained psychologist. Every element of the music — the layering, the affirmation placement, the frequency choices — is grounded in how the subconscious mind processes information during relaxed states. This is not generic wellness content." },
          { q: "Will I consciously hear the affirmations?", a: "No — and that's intentional. The affirmations are layered beneath the music specifically to bypass your conscious defenses. Your logical mind would filter them out. Your subconscious, however, absorbs them during relaxed states." },
          { q: "How long before I feel a difference?", a: "Most listeners report a subtle shift in mood and baseline anxiety within the first week. For deeper reprogramming — identity-level shifts — we recommend 21+ days of regular listening. This is a long-term investment in your subconscious baseline." },
          { q: "What's the difference between music tiers?", a: "The free track is an experience — a taster to feel Ria's approach. The Core Package includes the full music library plus guided reprogramming sessions. Premium Coaching is a 1:1 engagement with Ria where everything is tailored to your specific patterns." },
          { q: "Can I book a consultation first?", a: "Absolutely. In fact, we encourage it. A discovery call with Ria lets you understand whether her approach is right for you before any commitment. Use the 'Book a Discovery Call' button to start that conversation." },
        ].map((faq, i) => (
          <div key={i} className="bg-white p-8 rounded-3xl border border-purple-100 shadow-sm">
            <h4 className="text-xl font-bold text-gray-900 mb-4">{faq.q}</h4>
            <p className="text-gray-500 leading-relaxed font-light">{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);


// In-Page Sticky Section Navigator (appears after hero scroll)
const SectionNavigator = () => {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState("");

  const sections = [
    { id: "science", label: "The Science" },
    { id: "journey", label: "Your Journey" },
    { id: "packages", label: "Packages" },
    { id: "stories", label: "Stories" },
    { id: "about-ria", label: "About Ria" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.85;
      setVisible(window.scrollY > heroHeight);

      // Highlight active section
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section.id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(section.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 hidden md:flex"
        >
          <div className="flex items-center gap-1 bg-white/90 backdrop-blur-xl border border-purple-100 shadow-2xl shadow-purple-100/40 rounded-full px-3 py-2">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 whitespace-nowrap ${active === s.id
                  ? "bg-purple-600 text-white shadow-md shadow-purple-200"
                  : "text-gray-500 hover:text-purple-700 hover:bg-purple-50"
                  }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Main HomePage Component
const HomePage = () => {
  const navigate = useNavigate();
  const heroRef = useRef(null);
  const [showExitPopup, setShowExitPopup] = useState(false);

  useEffect(() => {
    const isShown = sessionStorage.getItem("exitPopupShown");
    if (isShown) return;
    const handleMouseLeave = (e) => {
      if (e.clientY < 25) {
        setShowExitPopup(true);
        sessionStorage.setItem("exitPopupShown", "true");
        document.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
    const activationTimer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
    }, 2000);
    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      clearTimeout(activationTimer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <SectionNavigator />
      <PurchaseNotification />
      <PurchaseNotification />
      <ExitPopup isOpen={showExitPopup} onClose={() => setShowExitPopup(false)} />

      {/* HERO SECTION — NOW LEADING WITH SLEEP */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center px-4 pt-32 pb-20 overflow-hidden bg-white"
      >
        <VerticalLinesBackground />
        <WaveBackground />
        <div className="container-custom max-w-5xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-serif font-bold text-gray-950 mb-10 leading-[1] tracking-tight">
              Manifest While <br />
              <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 bg-clip-text text-transparent italic">
                You Sleep.
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light mb-16">
              Manifest faster overnight with psychologist-designed calming music. No rituals. No overthinking. Just press play and wake up aligned.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 text-left max-w-4xl mx-auto mb-20">
              {[
                { icon: <Clock className="w-5 h-5" />, title: "Sleep Smarter", desc: "No extra time needed — change happens while you rest." },
                { icon: <Brain className="w-5 h-5" />, title: "Subconscious Access", desc: "Reach the layers of the mind where your deepest beliefs are stored." },
                { icon: <Shield className="w-5 h-5" />, title: "Zero Resistance", desc: "Bypass your conscious filter while you're offline." }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="p-6 rounded-3xl bg-white border border-purple-50 shadow-xl shadow-purple-500/5"
                >
                  <div className="text-purple-600 mb-4 bg-purple-50 w-10 h-10 rounded-xl flex items-center justify-center">{item.icon}</div>
                  <h4 className="font-bold text-gray-900 text-sm mb-2">{item.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed font-light">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="mt-8 flex justify-center">
              <ChevronDown className="text-purple-300" size={32} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* PROBLEM / POSITIONING — UPDATED WITH ORIGINAL HERO HOOK */}
      <section className="py-14 md:py-24 px-4 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-100 to-transparent" />
        <div className="container-custom max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-purple-50 border border-purple-100 rounded-full px-6 py-2 mb-10"
          >
            <Zap className="w-4 h-4 text-purple-600" />
            <span className="text-xs font-black text-purple-700 uppercase tracking-[0.2em]">
              Psychologist-Designed • Science-Backed • Ethical Manifestation
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-7xl font-serif font-bold mb-10 text-gray-900 leading-[1.1] tracking-tight">
            Where Psychology <br />
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent italic">
              Meets Sound Healing.
            </span>
          </h2>

          <p className="text-xl md:text-3xl text-gray-500 mb-12 font-light leading-relaxed max-w-4xl mx-auto italic">
            "Why does manifestation never seem to work?"
          </p>

          <p className="text-lg md:text-xl text-gray-500 mb-12 font-light leading-relaxed max-w-3xl mx-auto">
            It's not because you're doing it wrong. It's because most methods work <em>against</em> how your mind actually functions.
            Ria's approach works <span className="text-purple-600 font-bold not-italic">with your subconscious</span> — not over it.
          </p>

          <div className="flex justify-center"><div className="w-24 h-px bg-purple-100" /></div>
        </div>
      </section>

      {/* SCIENCE EDUCATION SECTION */}
      <div id="science"><ScienceSection /></div>

      {/* 4-PHASE FUNNEL JOURNEY */}
      <div id="journey"><FunnelJourneySection /></div>

      {/* PRODUCT LADDER */}
      <div id="packages"><ProductLadderSection /></div>

      {/* QUALIFICATION SECTION */}
      <QualificationSection />

      {/* EXPERIENCE STORIES */}
      <div id="stories"><ExperienceStoriesSection /></div>

      {/* SOCIAL BRIDGE — Instagram & YouTube */}
      <SocialBridgeSection />

      {/* FAQ SECTION */}
      <FAQSection />

      {/* ABOUT RIA — AUTHORITY SECTION */}
      <div id="about-ria"><AboutFounderSection /></div>

      {/* COMBINED FINAL CTA */}
      <section className="py-14 md:py-20 px-4 bg-gradient-to-b from-white via-purple-50 to-purple-100 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(147,51,234,0.08)_0%,_transparent_70%)]" />
        <div className="container-custom max-w-3xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-purple-500 uppercase tracking-[0.2em] text-xs font-bold mb-6 block">Your Next Step</span>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold mb-6 text-gray-900 tracking-tight leading-[1.1]">
              Ready to Begin?
            </h2>
            <p className="text-lg md:text-xl text-gray-500 mb-12 max-w-xl mx-auto font-light leading-relaxed">
              Start free. Go deep when you're ready. No rush — just real, sustained transformation guided by psychology.
            </p>

            {/* 3 action paths */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <button
                onClick={() => navigate('/free-gift')}
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-purple-600 to-purple-800 text-white font-bold py-4 px-9 rounded-full hover:shadow-xl hover:shadow-purple-200 hover:scale-105 transition-all text-base"
              >
                <Headphones size={18} /> Get the Free Track
              </button>
              <button
                onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center gap-3 border-2 border-purple-200 text-purple-700 font-bold py-4 px-9 rounded-full hover:border-purple-400 hover:bg-purple-50 transition-all text-base"
              >
                Explore All Packages
              </button>
            </div>

            <p className="text-gray-400 text-sm">
              Or{" "}
              <button
                onClick={() => document.dispatchEvent(new CustomEvent("openDiscoveryForm"))}
                className="text-purple-600 font-semibold hover:underline underline-offset-2 transition-all"
              >
                book a free discovery call
              </button>
              {" "}— no pressure, just a conversation.
            </p>

            <p className="text-gray-300 text-xs mt-8">Free discovery call • No obligation • Psychology-led conversation</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
