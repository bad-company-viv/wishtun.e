import React, { useState } from 'react';
import { ShieldCheck, Lock } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { products } from '../data/products';

import { useCart } from '../context/CartContext';
import { ShoppingBag } from 'lucide-react';

const CheckoutPage = () => {
    const navigate = useNavigate();
    const { cart, cartTotal, clearCart } = useCart();
    const [isProcessing, setIsProcessing] = useState(false);
    const [selectedPurpose, setSelectedPurpose] = useState('');
    const [showPurposeSelector, setShowPurposeSelector] = useState(false);

    // Check if cart contains Sleep Mixtape
    const hasSleepMixtape = cart.some(item => item.id === 'sleep');

    // Purpose options for Sleep Mixtape
    const purposeOptions = [
        {
            id: 'health',
            title: 'Health',
            subtitle: 'RESTORE BALANCE & PHYSICAL VITALITY',
            description: 'Focus your sleep on healing, recovery, and boosting energy and overall health.',
            icon: '🌿'
        },
        {
            id: 'wealth',
            title: 'Wealth',
            subtitle: 'FINANCIAL FLOW',
            description: 'Program your subconscious for abundance, prosperity, and financial success.',
            icon: '💰'
        },
        {
            id: 'love',
            title: 'Love',
            subtitle: 'RELATIONSHIPS, CONNECTION & SELF-LOVE',
            description: 'Attract deeper connections, enhance relationships, and cultivate self-love.',
            icon: '💖'
        },
        {
            id: 'beauty',
            title: 'Beauty',
            subtitle: 'CONFIDENCE & RADIANCE',
            description: 'Enhance your natural radiance from the inside out, boosting confidence.',
            icon: '🌸'
        },
        {
            id: 'overall',
            title: 'Overall',
            subtitle: 'ALL-INCLUSIVE ALIGNMENT & LIFE FORCE ENERGY',
            description: 'A balanced combination of all areas for complete life transformation.',
            icon: '⭐'
        }
    ];

    // Redirect if cart is empty
    if (!cart || cart.length === 0) {
        return (
            <div className="min-h-screen bg-[#0f030e] text-white flex flex-col items-center justify-center p-4 text-center">
                <ShoppingBag size={48} className="text-white/20 mb-4" />
                <h2 className="text-2xl font-serif mb-4">Your bag is empty</h2>
                <button
                    onClick={() => navigate('/shop')}
                    className="text-brand-gold hover:text-white transition-colors border-b border-brand-gold pb-1"
                >
                    Return to Shop
                </button>
            </div>
        );
    }

    // Show purpose selector if Sleep Mixtape is in cart and no purpose selected
    if (hasSleepMixtape && !selectedPurpose && !showPurposeSelector) {
        setShowPurposeSelector(true);
    }

    const handlePurposeSelect = (purposeId) => {
        setSelectedPurpose(purposeId);
        setShowPurposeSelector(false);
    };

    const handlePayment = (e) => {
        e.preventDefault();

        // If Sleep Mixtape is in cart but no purpose selected, show selector
        if (hasSleepMixtape && !selectedPurpose) {
            setShowPurposeSelector(true);
            return;
        }

        setIsProcessing(true);

        // Simulate payment processing
        setTimeout(() => {
            clearCart(); // Clear cart on success
            setIsProcessing(false);
            navigate('/thank-you');
        }, 1500);
    };

    // Purpose Selector View
    if (showPurposeSelector) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <div className="text-sm text-purple-200 mb-2 tracking-widest uppercase">
                            STEP 1 OF 2 - PERSONALIZE
                        </div>
                        <h1 className="text-4xl md:text-5xl font-serif mb-4">
                            What Would You Like <span className="italic text-purple-300">to Manifest?</span>
                        </h1>
                        <p className="text-purple-200 max-w-2xl mx-auto leading-relaxed">
                            Your Sleep Mixtape is personalized around your intention. Pick the area of
                            life you most want to transform.
                        </p>
                    </div>

                    {/* Purpose Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {purposeOptions.map((purpose) => (
                            <div
                                key={purpose.id}
                                onClick={() => handlePurposeSelect(purpose.id)}
                                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 cursor-pointer hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:border-purple-300/50"
                            >
                                <div className="text-4xl mb-4 text-center">{purpose.icon}</div>
                                <h3 className="text-xl font-bold mb-2 text-center">{purpose.title}</h3>
                                <p className="text-xs uppercase tracking-widest text-purple-200 mb-3 text-center">
                                    {purpose.subtitle}
                                </p>
                                <p className="text-sm text-purple-100 leading-relaxed text-center">
                                    {purpose.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Product Info */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
                        <div className="text-sm text-purple-200 mb-2 tracking-widest uppercase">
                            YOUR ORDER
                        </div>
                        <h3 className="text-2xl font-serif mb-4">The Sleep Mixtape</h3>
                        <p className="text-purple-200 mb-6">
                            Deep delta waves designed to trigger rapid REM cycles and cellular regeneration
                        </p>
                        <div className="text-3xl font-bold text-purple-300">₹2,499</div>
                    </div>

                    {/* Back Button */}
                    <div className="text-center mt-8">
                        <button
                            onClick={() => navigate(-1)}
                            className="text-purple-200 hover:text-white transition-colors border-b border-purple-300 pb-1"
                        >
                            ← Back to Cart
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    // Regular Checkout View
    return (
        <div className="min-h-screen bg-[#0f030e] text-white flex items-center justify-center py-12 px-4">
            <div className="max-w-md w-full">
                {/* Header */}
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-serif text-white mb-2">Complete Your Order</h2>
                    <div className="flex items-center justify-center gap-2 text-white/40 text-sm">
                        <Lock size={14} />
                        <span>Secure SSL Encrypted Payment</span>
                    </div>
                </div>

                {/* Selected Purpose Display */}
                {selectedPurpose && (
                    <div className="bg-purple-900/20 border border-purple-500/30 rounded-xl p-4 mb-6">
                        <div className="text-xs uppercase tracking-widest text-purple-300 mb-2">
                            Your Intention
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-2xl">
                                {purposeOptions.find(p => p.id === selectedPurpose)?.icon}
                            </span>
                            <div>
                                <div className="font-semibold text-purple-200">
                                    {purposeOptions.find(p => p.id === selectedPurpose)?.title}
                                </div>
                                <div className="text-xs text-purple-300">
                                    {purposeOptions.find(p => p.id === selectedPurpose)?.subtitle}
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={() => setShowPurposeSelector(true)}
                            className="text-xs text-purple-400 hover:text-purple-300 mt-2 underline"
                        >
                            Change intention
                        </button>
                    </div>
                )}

                {/* Order Summary Box */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
                    <h3 className="text-xs uppercase tracking-widest text-white/40 mb-4">Order Summary</h3>
                    <div className="space-y-3 mb-6 max-h-40 overflow-y-auto custom-scrollbar">
                        {cart.map((item, i) => (
                            <div key={i} className="flex justify-between items-center text-sm">
                                <span className="text-white/80">{item.title} <span className="text-white/40">x{item.quantity}</span></span>
                                <span className="font-medium">₹{((item.priceValue || item.price) * item.quantity).toLocaleString()}</span>
                            </div>
                        ))}
                    </div>
                    <div className="border-t border-white/10 pt-4 flex justify-between items-center text-xl font-serif font-bold">
                        <span>Total</span>
                        <span className="text-brand-gold">₹{cartTotal.toLocaleString()}</span>
                    </div>
                </div>

                {/* Simulated Form */}
                <form className="space-y-4" onSubmit={handlePayment}>
                    <div>
                        <label className="block text-sm text-white/60 mb-1">Email Address</label>
                        <input
                            type="email"
                            required
                            placeholder="you@example.com"
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors"
                        />
                    </div>

                    <div className="pt-4">
                        <button
                            type="submit"
                            disabled={isProcessing}
                            className="w-full bg-brand-gold hover:bg-white text-brand-dark font-bold text-lg py-4 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isProcessing ? 'Processing...' : `Pay ₹${cartTotal.toLocaleString()}`}
                        </button>
                    </div>
                </form>

                <div className="mt-6 text-center">
                    <p className="text-xs text-white/30 mb-2">Powered by Stripe • Guaranteed Secure</p>
                    <div className="flex items-center justify-center gap-2 text-white/40 text-xs">
                        <ShieldCheck size={12} />
                        <span>100% Satisfaction Guarantee</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CheckoutPage;
