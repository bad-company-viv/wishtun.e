import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Sparkles, Check, ArrowRight } from 'lucide-react';

const ManifestationPage = () => {
    const navigate = useNavigate();
    const [selectedPurpose, setSelectedPurpose] = useState('');

    const purposeOptions = [
        { id: 'wealth', title: 'Wealth' },
        { id: 'health', title: 'Health' },
        { id: 'beauty', title: 'Beauty' },
        { id: 'love', title: 'Love' },
        { id: 'overall', title: 'A little bit of everything' }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!selectedPurpose) {
            alert('Please select what you want to manifest');
            return;
        }

        // Redirect to external checkout page
        window.open("https://riagupta.com/product/sleep-mixtape/", "_blank");
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-purple-50 text-gray-900 overflow-x-hidden">
            {/* TOP CONFIRMATION BANNER */}
            <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-4 px-4 text-center">
                <p className="text-sm md:text-base font-semibold">
                    ✓ &nbsp;Almost There! Personalize Your Sleep Mixtape Below
                </p>
            </div>

            <div className="container-custom py-14 md:py-24 relative max-w-2xl mx-auto px-4">
                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-200/20 rounded-full blur-[150px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pink-200/20 rounded-full blur-[150px] pointer-events-none" />

                <div className="relative z-10 text-center">
                    {/* Header */}
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight text-gray-900">
                            What Do You Want
                            <span className="block italic text-purple-600 mt-2">to Manifest?</span>
                        </h1>
                        <p className="text-xl text-gray-500 mb-12 max-w-xl mx-auto font-light leading-relaxed">
                            Your Sleep Mixtape is personalized around your intention. Pick the area of life you most want to transform.
                        </p>
                    </motion.div>

                    {/* Form Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.97 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white border border-purple-100 rounded-[2.5rem] overflow-hidden shadow-xl text-left p-8 md:p-12"
                    >
                        <form onSubmit={handleSubmit} className="space-y-8">
                            {/* Purpose Selection */}
                            <div>
                                <h3 className="text-lg font-bold mb-6 text-gray-900 uppercase tracking-widest">
                                    What do you want to manifest?
                                </h3>
                                <div className="space-y-3">
                                    {purposeOptions.map((purpose) => (
                                        <label
                                            key={purpose.id}
                                            className={`flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all duration-200 ${
                                                selectedPurpose === purpose.id
                                                    ? 'bg-purple-50 border-2 border-purple-200'
                                                    : 'bg-gray-50 border-2 border-transparent hover:bg-purple-50 hover:border-purple-100'
                                            }`}
                                        >
                                            <input
                                                type="radio"
                                                name="purpose"
                                                value={purpose.id}
                                                checked={selectedPurpose === purpose.id}
                                                onChange={(e) => setSelectedPurpose(e.target.value)}
                                                className="sr-only"
                                            />
                                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                                                selectedPurpose === purpose.id
                                                    ? 'border-purple-600 bg-purple-600'
                                                    : 'border-gray-300'
                                            }`}>
                                                {selectedPurpose === purpose.id && (
                                                    <Check size={12} className="text-white" />
                                                )}
                                            </div>
                                            <span className="text-gray-700 font-medium">{purpose.title}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="pt-4">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    disabled={!selectedPurpose}
                                    className="w-full bg-purple-600 text-white font-black text-xl py-6 rounded-[2rem] shadow-2xl flex items-center justify-center gap-4 hover:bg-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {selectedPurpose ? 'CONTINUE TO PAYMENT' : 'SELECT YOUR INTENTION ABOVE'}
                                    {selectedPurpose && <ArrowRight className="w-6 h-6" />}
                                </motion.button>
                                
                                <p className="text-gray-400 text-[10px] font-black uppercase tracking-[0.2em] text-center mt-4">
                                    INSTANT DIGITAL DELIVERY • ONE-TIME PAYMENT
                                </p>
                            </div>
                        </form>
                    </motion.div>

                    {/* Back Button */}
                    <div className="mt-8">
                        <button
                            onClick={() => navigate(-1)}
                            className="text-gray-400 hover:text-gray-600 transition-colors text-sm font-medium"
                        >
                            ← Back to Previous Page
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManifestationPage;