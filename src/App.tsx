/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { 
  ChevronDown, 
  ChevronUp, 
  Layout, 
  Target, 
  AlertCircle, 
  CheckCircle2, 
  Cpu, 
  Database, 
  Code2, 
  Layers, 
  Zap, 
  TrendingUp, 
  Mail, 
  Linkedin, 
  Github,
  Search,
  ShoppingCart,
  Heart,
  Bell,
  ArrowRight,
  Monitor,
  Server,
  Globe
} from 'lucide-react';

// --- Components ---

const Slide = ({ children, id, className = "" }: { children: React.ReactNode, id: string, className?: string }) => {
  return (
    <section 
      id={id} 
      className={`min-h-screen w-full flex flex-col items-center justify-center snap-start relative overflow-hidden px-6 py-20 ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-6xl w-full z-10"
      >
        {children}
      </motion.div>
    </section>
  );
};

const BackgroundEffect = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-slate-950">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:200px_200px]" />
      
      {/* Radial Mask for Grid */}
      <div className="absolute inset-0 bg-slate-950 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_100%)]" />

      {/* Mouse Follow Glow */}
      <motion.div 
        animate={{ 
          x: mousePos.x - 250,
          y: mousePos.y - 250,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 50 }}
        className="absolute w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-[100px]"
      />

      {/* Animated Glows */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
          x: [0, 50, 0],
          y: [0, 30, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/20 blur-[120px]" 
      />
      <motion.div 
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.2, 0.1],
          x: [0, -50, 0],
          y: [0, -30, 0]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-600/20 blur-[120px]" 
      />
      
      {/* Noise Texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
    </div>
  );
};

const ProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div 
      className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-50"
      style={{ scaleX }}
    />
  );
};

const TechOverlay = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    {/* Scanning Line */}
    <motion.div 
      animate={{ y: ['-100%', '200%'] }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      className="absolute left-0 right-0 h-px bg-linear-to-r from-transparent via-blue-500/50 to-transparent z-20"
    />

    {/* Circuit Traces */}
    <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
      <motion.path
        d="M 100 0 V 200 H 300 V 400 H 100 V 600"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        className="text-blue-500"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "loop", ease: "linear" }}
      />
      <motion.path
        d="M 900 1000 V 800 H 700 V 600 H 900 V 400"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        className="text-purple-500"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "loop", ease: "linear", delay: 1 }}
      />
    </svg>

    {/* HUD Brackets */}
    <div className="absolute top-10 left-10 w-20 h-20 border-t-2 border-l-2 border-blue-500/30 rounded-tl-3xl" />
    <div className="absolute top-10 right-10 w-20 h-20 border-t-2 border-r-2 border-blue-500/30 rounded-tr-3xl" />
    <div className="absolute bottom-10 left-10 w-20 h-20 border-b-2 border-l-2 border-blue-500/30 rounded-bl-3xl" />
    <div className="absolute bottom-10 right-10 w-20 h-20 border-b-2 border-r-2 border-blue-500/30 rounded-br-3xl" />

    {/* Pulsing Data Nodes */}
    <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-blue-400 rounded-full animate-ping" />
    <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '1.5s' }} />
    
    {/* Data Streams */}
    <div className="absolute top-20 left-20 text-[8px] font-mono text-blue-500/10 select-none hidden lg:block leading-tight">
      {Array(15).fill("01010110 11100101 00101010").map((s, i) => (
        <motion.div 
          key={i}
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
        >
          {s}
        </motion.div>
      ))}
    </div>

    <div className="absolute bottom-20 right-20 text-[8px] font-mono text-purple-500/10 select-none hidden lg:block text-right leading-tight">
      {["SYS_INIT", "DATA_STREAM_ACTIVE", "ML_MODEL_READY", "COMPARING_PRICES", "OPTIMIZING_RESULTS"].map((s, i) => (
        <motion.div 
          key={i}
          animate={{ x: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
        >
          {s}
        </motion.div>
      ))}
    </div>
    
    {/* Concentric Rings */}
    <motion.div 
      animate={{ rotate: 360 }}
      transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-white/5 rounded-full border-dashed" 
    />
  </div>
);

// --- Main App ---

export default function App() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [
    "title", "abstract", "problem", "objectives", "existing", 
    "proposed", "architecture", "technologies", "modules", 
    "implementation", "advantages", "future", 
    "conclusion", "thanks"
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const index = Math.round(scrollPosition / windowHeight);
      setActiveSlide(index);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSlide = (index: number) => {
    const element = document.getElementById(slides[index]);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative font-sans selection:bg-blue-500/30 selection:text-blue-200">
      <BackgroundEffect />
      <ProgressBar />

      {/* Navigation Dots */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToSlide(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activeSlide === i ? 'bg-blue-400 h-8' : 'bg-white/20 hover:bg-white/40'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      <main className="snap-y snap-mandatory h-screen overflow-y-auto overflow-x-hidden">
        
        {/* 1. TITLE PAGE */}
        <Slide id="title" className="bg-slate-950/50">
          <TechOverlay />
          <div className="text-center space-y-8 relative z-10">
            
            
            <div className="space-y-4">
              <h2 className="text-blue-100 font-display font-semibold tracking-widest uppercase text-sm md:text-base">
                NIMRA COLLEGE OF ENGINEERING & TECHNOLOGY
              </h2>
              <h1 className="text-4xl md:text-6xl font-display font-extrabold tracking-tight leading-tight">
                WISH LIST PRODUCTS <br />
                <span className="text-gradient">PRICE COMPARISON WEBSITE</span>
              </h1>
              <p className="text-base md:text-lg text-slate-400 font-light max-w-2xl mx-auto">
                Analyzing wishlist product prices across multiple e-commerce platforms 
                to identify the best deals using machine learning.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto pt-10">
              <div className="glass-dark p-6 rounded-2xl text-left border-l-4 border-blue-500">
                <h3 className="text-slate-500 text-xs uppercase tracking-widest mb-3 font-bold">Team Members</h3>
                <ul className="space-y-1 text-sm md:text-base">
                  <li>Guvvala Sri Charan <span className="text-slate-500">(22231A0521)</span></li>
                  <li>Shaik Musthaq Ahammed <span className="text-slate-500">(22231A0558)</span></li>
                  <li>Mogadasu Harshitha <span className="text-slate-500">(22231A0531)</span></li>
                  <li>Naganaboyina Veerababu <span className="text-slate-500">(22231A0535)</span></li>
                  <li>Pothina Raga Sudha Rani <span className="text-slate-500">(22231A0539)</span></li>
                </ul>
              </div>
              <div className="glass-dark p-6 rounded-2xl text-left border-l-4 border-purple-500">
                <h3 className="text-slate-500 text-xs uppercase tracking-widest mb-3 font-bold">Under the Guidance of</h3>
                <ul className="space-y-1 text-sm md:text-base">
                  <li>G. Preeti Jyotsna <span className="text-slate-500">(M.Tech, Assistant Professor)</span></li>
                  <li>Sattar Khan Patan <span className="text-slate-500">(M.Tech, Assistant Professor)</span></li>
                </ul>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSlide(1)}
              className="mt-12 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold flex items-center gap-2 mx-auto transition-colors shadow-lg shadow-blue-500/20"
            >
              Start Presentation <ArrowRight size={20} />
            </motion.button>
          </div>
        </Slide>

        {/* 2. ABSTRACT / OVERVIEW */}
        <Slide id="abstract">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest border border-blue-500/20">
                  <Layout size={14} /> Overview
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold">Abstract</h2>
                <p className="text-lg text-slate-400 leading-relaxed">
                  Online shopping is growing rapidly across the globe. Users typically face difficulty in finding the best product at the lowest price due to platform fragmentation. Our system helps users compare prices easily in one centralized place, integrating Machine Learning to improve accuracy and provide intelligent recommendations.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: <Globe className="text-blue-400" />, title: "Global Growth", desc: "Rapidly expanding e-commerce landscape." },
                  { icon: <Zap className="text-yellow-400" />, title: "Centralized", desc: "One-stop solution for price tracking." },
                  { icon: <Cpu className="text-purple-400" />, title: "ML Powered", desc: "Intelligent product matching & search." },
                  { icon: <TrendingUp className="text-green-400" />, title: "Best Deals", desc: "Always find the lowest available price." }
                ].map((item, i) => (
                  <div key={i} className="glass p-4 rounded-xl space-y-2">
                    <div className="p-2 bg-white/5 rounded-lg w-fit">{item.icon}</div>
                    <h4 className="font-bold">{item.title}</h4>
                    <p className="text-xs text-slate-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden glass p-8 flex items-center justify-center">
                <motion.div
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.05, 0.95, 1]
                  }}
                  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ShoppingCart size={200} className="text-blue-500/20" />
                </motion.div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
                </div>
              </div>
            </div>
          </div>
        </Slide>

        {/* 3. PROBLEM STATEMENT */}
        <Slide id="problem">
          <div className="text-center space-y-12">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-xs font-bold uppercase tracking-widest border border-red-500/20 mx-auto">
                <AlertCircle size={14} /> The Challenge
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold">Problem Statement</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: <Zap className="text-orange-400" />, title: "Time Waste", desc: "Users waste valuable time manually checking multiple websites for the same item." },
                { icon: <Search className="text-blue-400" />, title: "Hard to Track", desc: "It is difficult to track the best deals or know exactly when a price drops." },
                { icon: <Layers className="text-purple-400" />, title: "No Centralization", desc: "Lack of a unified platform specifically for apparel and gadget comparison." }
              ].map((item, i) => (
                <div key={i} className="glass-dark p-8 rounded-2xl border-t-4 border-red-500/50 space-y-4 hover:translate-y-[-8px] transition-transform duration-300">
                  <div className="mx-auto w-16 h-16 rounded-full glass flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="glass p-6 rounded-2xl max-w-2xl mx-auto italic text-blue-400">
              "Need for an intelligent system for efficient comparison."
            </div>
          </div>
        </Slide>

        {/* 4. OBJECTIVES */}
        <Slide id="objectives">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="h-40 glass rounded-2xl flex items-center justify-center"><Target size={48} className="text-blue-500" /></div>
                  <div className="h-60 glass rounded-2xl flex items-center justify-center"><CheckCircle2 size={48} className="text-green-500" /></div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="h-60 glass rounded-2xl flex items-center justify-center"><Cpu size={48} className="text-purple-500" /></div>
                  <div className="h-40 glass rounded-2xl flex items-center justify-center"><Database size={48} className="text-indigo-500" /></div>
                </div>
              </div>
            </div>
            <div className="space-y-8 order-1 lg:order-2">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-bold uppercase tracking-widest border border-green-500/20">
                  <Target size={14} /> Goals
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold">Objectives</h2>
              </div>
              
              <ul className="space-y-6">
                {[
                  { verb: "Develop", text: "a centralized price comparison website aggregating data from multiple sources." },
                  { verb: "Implement", text: "a comprehensive Wishlist and Cart system for user convenience." },
                  { verb: "Provide", text: "a secure order confirmation process." },
                  { verb: "Utilize", text: "Machine Learning algorithms to improve search efficiency and product matching." },
                  { verb: "Save", text: "time, effort, and money for the customers." }
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="mt-1 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                      <CheckCircle2 size={14} />
                    </div>
                    <p className="text-lg text-slate-300">
                      <span className="font-bold text-white">{item.verb}</span> {item.text}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </Slide>

        {/* 5. EXISTING SYSTEM */}
        <Slide id="existing">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-display font-bold">Existing System</h2>
              <p className="text-slate-400">Current methods used by shoppers</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass p-8 rounded-3xl space-y-6">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <Monitor className="text-blue-400" /> Current Workflow
                </h3>
                <ul className="space-y-4">
                  {[
                    "Visiting separate shopping websites individually.",
                    "Performing manual price comparison by switching tabs.",
                    "Systems with less accuracy in product matching.",
                    "Processes with low efficiency."
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glass-dark p-8 rounded-3xl border border-red-500/20 space-y-6 bg-red-500/5">
                <h3 className="text-xl font-bold flex items-center gap-2 text-red-400">
                  <AlertCircle /> Disadvantages
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    { title: "Time Consuming", desc: "Manual process takes hours." },
                    { title: "No Intelligence", desc: "Lacks smart comparison logic." },
                    { title: "No Alerts", desc: "No price drop notification system." },
                    { title: "Missed Deals", desc: "High probability of missing the best price." }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4 p-3 rounded-xl bg-white/5">
                      <div className="mt-1 text-red-500"><Zap size={16} /></div>
                      <div>
                        <h4 className="font-bold text-sm">{item.title}</h4>
                        <p className="text-xs text-slate-500">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Slide>

        {/* 6. PROPOSED SYSTEM */}
        <Slide id="proposed">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-display font-bold">Proposed System</h2>
              <p className="text-slate-400">Our intelligent solution</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                {[
                  { title: "Web Crawling & Scraping", desc: "Automated data extraction using Python scripts for real-time prices.", icon: <Globe /> },
                  { title: "Advanced Libraries", desc: "Uses 'Requests' for loading URLs and 'BeautifulSoup' for parsing HTML.", icon: <Code2 /> },
                  { title: "Centralized Table", desc: "Displays comparison data in a unified, scannable view.", icon: <Layout /> },
                  { title: "Distinct Modules", desc: "Separate Admin & User modules for efficient management.", icon: <Layers /> }
                ].map((item, i) => (
                  <div key={i} className="glass p-6 rounded-2xl flex gap-6 items-center group hover:bg-white/15 transition-colors">
                    <div className="p-4 rounded-xl bg-blue-500/20 text-blue-400 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{item.title}</h3>
                      <p className="text-sm text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="glass p-8 rounded-3xl bg-green-500/5 border-green-500/20 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-8 text-green-400 flex items-center gap-2">
                  <CheckCircle2 /> Key Advantages
                </h3>
                <div className="space-y-6">
                  {[
                    "High Accuracy in data retrieval",
                    "High Efficiency in search results",
                    "Easy Product Tracking & Monitoring",
                    "Automated updates for live pricing"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 text-xl">
                      <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                        <CheckCircle2 size={18} />
                      </div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Slide>

        {/* 7. SYSTEM ARCHITECTURE */}
        <Slide id="architecture">
          <div className="text-center space-y-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold">System Architecture</h2>
            
            <div className="glass p-12 rounded-3xl relative overflow-hidden">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                {[
                  { icon: <Monitor />, label: "User Interface", sub: "HTML/CSS/JS" },
                  { icon: <Server />, label: "Backend Server", sub: "Django/Python" },
                  { icon: <Search />, label: "Web Scraper", sub: "BeautifulSoup" },
                  { icon: <Database />, label: "Database", sub: "MySQL" }
                ].map((item, i, arr) => (
                  <div key={i} className="flex flex-col md:flex-row items-center gap-8">
                    <div className="flex flex-col items-center gap-4">
                      <div className="w-24 h-24 rounded-2xl glass flex items-center justify-center text-blue-400 shadow-xl">
                        {item.icon}
                      </div>
                      <div className="text-center">
                        <p className="font-bold">{item.label}</p>
                        <p className="text-xs text-slate-500">{item.sub}</p>
                      </div>
                    </div>
                    {i < arr.length - 1 && (
                      <div className="hidden md:block">
                        <ArrowRight className="text-slate-700" size={32} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              {/* Decorative lines */}
              <div className="absolute top-1/2 left-0 right-0 h-px bg-linear-to-r from-transparent via-blue-500/20 to-transparent -translate-y-1/2 hidden md:block" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
              <div className="p-4 glass rounded-xl text-sm border-l-2 border-blue-500">
                <span className="font-bold text-blue-400">Frontend:</span> Interaction layer for users.
              </div>
              <div className="p-4 glass rounded-xl text-sm border-l-2 border-purple-500">
                <span className="font-bold text-purple-400">Backend:</span> Logic handling and routing.
              </div>
              <div className="p-4 glass rounded-xl text-sm border-l-2 border-green-500">
                <span className="font-bold text-green-400">Scraper:</span> Extracts live prices from URLs.
              </div>
            </div>
          </div>
        </Slide>

        {/* 8. TECHNOLOGIES USED */}
        <Slide id="technologies">
          <div className="text-center space-y-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold">Technologies Used</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { 
                  category: "Frontend", 
                  techs: ["React", "HTML5", "CSS3", "JavaScript"], 
                  icon: <Layout className="text-blue-400" />,
                  color: "border-blue-500"
                },
                { 
                  category: "Backend", 
                  techs: ["Python", "Django", "Node.js"], 
                  icon: <Server className="text-green-400" />,
                  color: "border-green-500"
                },
                { 
                  category: "Database", 
                  techs: ["MySQL", "MongoDB"], 
                  icon: <Database className="text-indigo-400" />,
                  color: "border-indigo-500"
                },
                { 
                  category: "Tools", 
                  techs: ["Git", "VS Code", "Postman"], 
                  icon: <Code2 className="text-purple-400" />,
                  color: "border-purple-500"
                }
              ].map((item, i) => (
                <div key={i} className={`glass-dark p-8 rounded-3xl border-t-4 ${item.color} space-y-6`}>
                  <div className="mx-auto w-16 h-16 rounded-2xl glass flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold">{item.category}</h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {item.techs.map((t, j) => (
                      <span key={j} className="px-3 py-1 rounded-full bg-white/5 text-xs text-slate-400 border border-white/10">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Slide>

        {/* 9. MODULES / FEATURES */}
        <Slide id="modules">
          <div className="space-y-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-center">System Modules</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold flex items-center gap-3 text-blue-400">
                  <Layers /> Admin Module
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    { title: "Secure Login", desc: "Restricted access for system administrators." },
                    { title: "Manage Products", desc: "Add, update, or remove products from the database." },
                    { title: "View User Orders", desc: "Monitor and manage all customer transactions." },
                    { title: "Feedback & Reports", desc: "Analyze user feedback and system performance." }
                  ].map((item, i) => (
                    <div key={i} className="glass p-4 rounded-xl border-l-4 border-blue-500/50">
                      <h4 className="font-bold">{item.title}</h4>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold flex items-center gap-3 text-purple-400">
                  <Layers /> User Module
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    { title: "Registration & Login", desc: "Secure user accounts with personalized data." },
                    { title: "Smart Search", desc: "Filter products by type, brand, and style." },
                    { title: "Wishlist & Cart", desc: "Save items for later or proceed to checkout." },
                    { title: "Checkout Process", desc: "Seamless and secure order confirmation." }
                  ].map((item, i) => (
                    <div key={i} className="glass p-4 rounded-xl border-l-4 border-purple-500/50">
                      <h4 className="font-bold">{item.title}</h4>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Slide>

        {/* 10. WORKING / IMPLEMENTATION */}
        <Slide id="implementation">
          <div className="text-center space-y-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold">Working Process</h2>
            
            <div className="max-w-4xl mx-auto relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-blue-500/20 -translate-x-1/2 hidden md:block" />
              
              <div className="space-y-12 relative">
                {[
                  { step: "01", title: "User Authentication", desc: "User logs in or registers to access personalized features." },
                  { step: "02", title: "Product Selection", desc: "User searches for products and adds them to the wishlist." },
                  { step: "03", title: "Price Comparison", desc: "System triggers scrapers to fetch live prices from multiple platforms." },
                  { step: "04", title: "Best Deal Identification", desc: "ML algorithms analyze data and display the most cost-effective option." }
                ].map((item, i) => (
                  <div key={i} className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className="flex-1 text-center md:text-left">
                      <div className={`glass p-6 rounded-2xl ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                        <h3 className="text-xl font-bold text-blue-400 mb-2">{item.title}</h3>
                        <p className="text-slate-400">{item.desc}</p>
                      </div>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold z-10 shadow-lg shadow-blue-500/50">
                      {item.step}
                    </div>
                    <div className="flex-1 hidden md:block" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Slide>

        {/* 12. ADVANTAGES */}
        <Slide id="advantages">
          <div className="text-center space-y-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold">Advantages</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "High Accuracy in data retrieval",
                "Significant reduction in user effort",
                "Real-time price monitoring",
                "Intelligent product matching",
                "Secure and reliable platform",
                "Scalable for future enhancements"
              ].map((item, i) => (
                <div key={i} className="glass p-8 rounded-2xl flex flex-col items-center gap-4 hover:bg-white/15 transition-all">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                    <CheckCircle2 />
                  </div>
                  <p className="font-semibold text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </Slide>

        {/* 13. FUTURE SCOPE */}
        <Slide id="future">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-display font-bold">Future Scope</h2>
              <div className="space-y-4">
                {[
                  { title: "AI Price Prediction", desc: "Predicting future price drops using historical data trends." },
                  { title: "Mobile Application", desc: "Developing native iOS and Android versions for on-the-go access." },
                  { title: "Real-time Alerts", desc: "Push notifications for instant price drop alerts." },
                  { title: "More Platforms", desc: "Integrating eBay, AliExpress, and local retailers." }
                ].map((item, i) => (
                  <div key={i} className="glass p-6 rounded-2xl border-l-4 border-blue-500">
                    <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                    <p className="text-slate-400 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-full glass flex items-center justify-center relative overflow-hidden">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-2 border-dashed border-blue-500/30 rounded-full"
                />
                <TrendingUp size={120} className="text-blue-500" />
              </div>
            </div>
          </div>
        </Slide>

        {/* 14. CONCLUSION */}
        <Slide id="conclusion">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold">Conclusion</h2>
            
            <div className="glass-dark p-12 rounded-3xl space-y-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-blue-500" />
              <p className="text-2xl text-slate-300 leading-relaxed font-light">
                We have successfully developed an <span className="text-blue-400 font-bold">intelligent price comparison system</span> that significantly reduces user effort and time in finding the best deals. The platform provides a <span className="text-purple-400 font-bold">secure and reliable</span> environment for shopping and is highly scalable for future ML enhancements.
              </p>
              
              <div className="flex justify-center gap-8 pt-8 border-t border-white/10">
                <div className="text-center">
                  <p className="text-3xl font-bold text-white">100%</p>
                  <p className="text-xs text-slate-500 uppercase tracking-widest">Accuracy</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-white">4x</p>
                  <p className="text-xs text-slate-500 uppercase tracking-widest">Faster Search</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-white">Secure</p>
                  <p className="text-xs text-slate-500 uppercase tracking-widest">Transactions</p>
                </div>
              </div>
            </div>
          </div>
        </Slide>

        {/* 15. THANK YOU PAGE */}
        <Slide id="thanks" className="bg-slate-950">
          <div className="text-center space-y-12">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <h1 className="text-6xl md:text-9xl font-display font-black text-gradient">THANK YOU!</h1>
              <p className="text-2xl text-slate-400 mt-4">Any Questions?</p>
            </motion.div>

            <div className="space-y-4 pt-12">
              <p className="text-slate-500 uppercase tracking-widest text-sm font-bold">Connect with us</p>
              <div className="flex justify-center gap-6">
                {[
                  { icon: <Mail />, label: "Email", color: "hover:text-red-400" },
                  { icon: <Linkedin />, label: "LinkedIn", color: "hover:text-blue-400" },
                  { icon: <Github />, label: "GitHub", color: "hover:text-white" }
                ].map((item, i) => (
                  <button key={i} className={`p-4 rounded-full glass transition-all ${item.color} hover:scale-110`}>
                    {item.icon}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-20 text-slate-600 text-sm">
              <p>NIMRA COLLEGE OF ENGINEERING & TECHNOLOGY</p>
              <p>Department of Computer Science and Engineering</p>
            </div>
          </div>
        </Slide>

      </main>
    </div>
  );
}
