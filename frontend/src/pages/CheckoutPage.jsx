import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, Lock, Sparkles, Heart, Star, Leaf, Sun } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PURPOSES = [
    {
        id: "health",
        label: "Health",
        emoji: "🌿",
        tagline: "Vitality, healing & physical wellbeing",
        description: "Reprogram beliefs around your body, energy, and overall health to attract a state of vibrant wellness.",
        color: "from-green-50 to-emerald-50",
        border: "border-emerald-200",
        accent: "text-emerald-600",
        activeBg: "bg-emerald-600",
        ring: "ring-emerald-400",
    },
    {
        id: "wealth",
        label: "Wealth",
        emoji: "✨",
        tagline: "Abundance, money & financial flow",
        description: "Shift scarcity beliefs and open your subconscious to abundance, opportunity, and financial expansion.",
        color: "from-amber-50 to-yellow-50",
        border: "border-amber-200",
        accent: "text-amber-600",
        activeBg: "bg-amber-500",
        ring: "ring-amber-400",
    },
    {
        id: "love",
        label: "Love",
        emoji: "💜",
        tagline: "Relationships, connection & love",
        description: "Release emotional blocks and create space for deep, authentic love — with yourself and others.",
        color: "from-pink-50 to-rose-50",
        border: "border-pink-200",
        accent: "text-pink-600",
        activeBg: "bg-pink-600",
        ring: "ring-pink-400",
    },
    {
        id: "beauty",
        label: "Beauty",
        emoji: "🌸",
        tagline: "Confidence, radiance & self-image",
        description: "Reclaim a positive self-image from the inside out — confidence, beauty, and presence that radiates naturally.",
        color: "from-purple-50 to-violet-50",
        border: "border-purple-200",
        accent: "text-purple-600",
        activeBg: "bg-purple-600",
        ring: "ring-purple-400",
    },
    {
        id: "overall",
        label: "Overall",
        emoji: "🌟",
        tagline: "All-round alignment & holistic growth",
        description: "A balanced blend across all life areas for those ready to shift everything at once.",
        color: "from-indigo-50 to-blue-50",
        border: "border-indigo-200",
        accent: "text-indigo-600",
        activeBg: "bg-indigo-600",
        ring: "ring-indigo-400",
    },
];

const CheckoutPage = () => {
    const navigate = useNavigate();
    const [selected, setSelected] = useState(null);

    const handleProceed = () => {
        if (!selected) return;
        // Replace link below with actual Razorpay/payment URL when available
        window.open(
            `https://riagupta.com/product/sleep-mixtape/?purpose=${selected}`,
            "_blank"
        );
    };

    const selectedPurpose = PURPOSES.find((p) => p.id === selected);

    return (
        <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-white text-gray-900 overflow-x-hidden">
            {/* Top Banner */}
            <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-4 px-4 text-center">
                <p className="text-sm md:text-base font-semibold">
                    ✓ &nbsp;Almost There! Personalise Your Sleep Mixtape Below.
                </p>
            </div>

            <div className="container-custom py-14 md:py-20 max-w-4xl mx-auto px-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-14"
                >
                    <span className="inline-block bg-purple-100 text-purple-700 px-5 py-1.5 rounded-full text-xs font-bold mb-6 uppercase tracking-widest">
                        Step 1 of 2 — Personalise
                    </span>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight text-gray-900">
                        What Would You Like{" "}
                        <span className="italic text-purple-600">to Manifest?</span>
                    </h1>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
                        Your Sleep Mixtape is personalised around your intention. Pick the area of life you most want to transform.
                    </p>
                </motion.div>

                {/* Purpose Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
                    {PURPOSES.map((purpose, i) => {
                        const isActive = selected === purpose.id;
                        return (
                            <motion.button
                                key={purpose.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.08 }}
                                onClick={() => setSelected(purpose.id)}
                                className={`relative text-left p-7 rounded-[2rem] border-2 transition-all duration-300 focus:outline-none group
                  ${isActive
                                        ? `bg-gradient-to-br ${purpose.color} ${purpose.border} ring-4 ${purpose.ring} shadow-xl`
                                        : `bg-white border-gray-100 shadow-sm hover:shadow-md hover:border-purple-100`
                                    }`}
                            >
                                {/* Selection indicator */}
                                <div
                                    className={`absolute top-4 right-4 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200
                    ${isActive ? `${purpose.activeBg} border-transparent` : "border-gray-200 bg-white"}`}
                                >
                                    {isActive && <Check size={13} className="text-white" strokeWidth={3} />}
                                </div>

                                <div className="text-3xl mb-4">{purpose.emoji}</div>
                                <h3 className={`text-xl font-bold mb-1 ${isActive ? purpose.accent : "text-gray-900"}`}>
                                    {purpose.label}
                                </h3>
                                <p className={`text-xs font-semibold uppercase tracking-wider mb-3 ${isActive ? purpose.accent : "text-gray-400"}`}>
                                    {purpose.tagline}
                                </p>
                                <p className="text-sm text-gray-500 font-light leading-relaxed">
                                    {purpose.description}
                                </p>
                            </motion.button>
                        );
                    })}
                </div>

                {/* Order Summary */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="bg-white border border-purple-100 rounded-[2rem] p-8 md:p-10 shadow-sm mb-8"
                >
                    <div className="flex items-center justify-between flex-wrap gap-4">
                        <div>
                            <p className="text-xs font-black uppercase tracking-widest text-purple-500 mb-1">Your Order</p>
                            <h3 className="text-2xl font-bold text-gray-900">
                                The Sleep Mixtape
                                {selectedPurpose && (
                                    <span className={`ml-2 text-base font-semibold ${selectedPurpose.accent}`}>
                                        ({selectedPurpose.label})
                                    </span>
                                )}
                            </h3>
                            <p className="text-gray-400 text-sm mt-1">60-min manifesting music • Instant digital delivery</p>
                        </div>
                        <div className="text-right">
                            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest line-through mb-1">₹5,999</p>
                            <p className="text-4xl font-black text-purple-600">₹2,499</p>
                            <p className="text-xs text-gray-400 mt-1">One-time payment</p>
                        </div>
                    </div>
                </motion.div>

                {/* CTA */}
                <div className="flex flex-col items-center gap-4">
                    <motion.button
                        whileHover={selected ? { scale: 1.02 } : {}}
                        whileTap={selected ? { scale: 0.98 } : {}}
                        onClick={handleProceed}
                        disabled={!selected}
                        className={`w-full max-w-lg font-black text-xl py-7 rounded-[2rem] flex items-center justify-center gap-4 transition-all duration-300
              ${selected
                                ? "bg-purple-600 text-white shadow-2xl shadow-purple-200 hover:bg-purple-700"
                                : "bg-gray-100 text-gray-400 cursor-not-allowed"
                            }`}
                    >
                        {selected ? (
                            <>Proceed to Secure Payment <ArrowRight className="w-6 h-6" /></>
                        ) : (
                            "Select Your Intention Above"
                        )}
                    </motion.button>
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                        <Lock size={12} /> Secure Payment • Instant Access • 21-Day Guarantee
                    </div>
                    <button
                        onClick={() => navigate("/offer")}
                        className="text-gray-400 hover:text-gray-600 transition-colors text-sm mt-2"
                    >
                        ← Go back
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
