import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Youtube, Instagram, Phone, Headphones, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-900/20 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-20 pb-10">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 pb-16 border-b border-white/10">
          {/* Brand */}
          <div>
            <img
              src="/images/wishtune-logo.png"
              alt="Wishtune"
              className="h-9 w-auto object-contain mb-4 brightness-0 invert"
            />
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Where psychology meets sound healing. Designed by a trained psychologist for real, lasting transformation.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="https://www.instagram.com/riiagupta/" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white/50 hover:text-[#E1306C] hover:border-[#E1306C]/30 transition-all">
                <Instagram size={16} />
              </a>
              <a href="https://www.youtube.com/@manifestologywithria" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white/50 hover:text-[#FF0000] hover:border-[#FF0000]/30 transition-all">
                <Youtube size={16} />
              </a>
              <a href="https://www.linkedin.com/in/ria-gupta-007/" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white/50 hover:text-[#0077b5] hover:border-[#0077b5]/30 transition-all">
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/30 mb-5">Explore</h4>
            <ul className="space-y-3">
              {[
                { label: "Blog", href: "https://riagupta.com/blog" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer"
                    className="text-white/50 hover:text-white text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA block */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/30 mb-5">Start Here</h4>
            <p className="text-white/50 text-sm mb-6 leading-relaxed">
              Not sure where to begin? Start with the free track — no commitment, just experience.
            </p>
            <div className="space-y-3">
              <Link
                to="/free-gift"
                className="flex items-center gap-2 w-full border border-purple-500/30 text-purple-300 font-semibold px-5 py-3 rounded-2xl hover:bg-purple-900/20 transition-all text-sm"
              >
                <Headphones size={16} /> Get Free Track
              </Link>
              <button
                onClick={() => document.dispatchEvent(new CustomEvent("openDiscoveryForm"))}
                className="flex items-center gap-2 w-full bg-purple-600 text-white font-bold px-5 py-3 rounded-2xl hover:bg-purple-700 transition-all text-sm"
              >
                <Phone size={16} /> Book a Discovery Call
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/25">
          <p>© 2026 Wishtune by Ria Gupta — All Rights Reserved.</p>
          <div className="flex items-center gap-1">
            <span>Made with</span>
            <Heart size={10} className="text-pink-400 mx-0.5" />
            <span>for conscious seekers</span>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
