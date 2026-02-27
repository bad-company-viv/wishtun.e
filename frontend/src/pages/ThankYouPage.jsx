import React from 'react';
import { motion } from 'framer-motion';
import { Check, Mail, ArrowRight, Headphones, Instagram, MessageCircle, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ThankYouPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-indigo-900 text-white flex items-center justify-center p-4">
            <div className="max-w-2xl w-full">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    {/* Success Icon */}
                    <div className="w-24 h-24 bg-green-400/20 rounded-full flex items-center justify-center mx-auto mb-6 ring-2 ring-green-400/40 shadow-[0_0_40px_rgba(74,222,128,0.2)]">
                        <Check size={48} className="text-green-400" strokeWidth={3} />
                    </div>

                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 leading-tight">
                        Welcome to Your Journey.
                    </h1>
                    <p className="text-xl text-white/70 mb-12 font-light leading-relaxed max-w-lg mx-auto">
                        Your free Manifestation Track is on its way. Check your inbox — then follow these next steps.
                    </p>
                </motion.div>

                {/* Step-by-step next steps */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="space-y-4 mb-10"
                >
                    {[
                        {
                            step: "01",
                            icon: <Mail size={22} className="text-purple-300" />,
                            title: "Check Your Email",
                            desc: "Your free track link is in your inbox. Subject: [Your Free Manifestation Track — Ria Gupta]",
                        },
                        {
                            step: "02",
                            icon: <Headphones size={22} className="text-pink-300" />,
                            title: "Listen with Intention",
                            desc: "Find a quiet moment. Put on headphones if you can. Notice the shift — even after a single listen.",
                        },
                        {
                            step: "03",
                            icon: <Instagram size={22} className="text-amber-300" />,
                            title: "Follow Ria on Instagram",
                            desc: "Get daily insights on subconscious mindset, healing music, and manifestation psychology.",
                        },
                        {
                            step: "04",
                            icon: <MessageCircle size={22} className="text-green-300" />,
                            title: "DM Ria When You're Ready",
                            desc: "Ready to go deeper? Reach out directly to explore the Core Package or book a personal discovery call.",
                        },
                    ].map((item, i) => (
                        <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-5 flex items-start gap-5">
                            <div className="shrink-0 w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                                {item.icon}
                            </div>
                            <div className="flex-1 text-left">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-xs font-black text-white/40 uppercase tracking-widest">Step {item.step}</span>
                                </div>
                                <h3 className="font-bold text-white mb-1">{item.title}</h3>
                                <p className="text-white/60 text-sm font-light leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <a
                        href="https://www.instagram.com/riiagupta/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-3 bg-white text-purple-900 font-bold py-4 px-8 rounded-2xl hover:bg-purple-50 transition-colors"
                    >
                        <Instagram size={20} /> Follow on Instagram
                    </a>
                    <a
                        href="/"
                        className="inline-flex items-center justify-center gap-3 bg-white/10 border border-white/20 text-white font-bold py-4 px-8 rounded-2xl hover:bg-white/20 transition-colors"
                    >
                        Explore All Packages <ArrowRight size={18} />
                    </a>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="text-center text-white/30 text-xs mt-10 flex items-center justify-center gap-2"
                >
                    <Heart size={12} className="text-pink-400" />
                    Made with care by Ria Gupta • Wishtune
                </motion.p>
            </div>
        </div>
    );
};

export default ThankYouPage;
