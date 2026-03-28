"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, LockKeyhole, AlertCircle } from "lucide-react";

const CODE_MAPPING: Record<string, string> = {
  'ELYON1': '/presentations/welcome.html',
  // Can add more codes here
};

// Premium Animated Aurora Background using Framer Motion
const AuroraBackground = () => (
  <div className="fixed inset-0 z-0 overflow-hidden bg-[#000000] pointer-events-none">
    <motion.div 
      className="absolute top-[0%] left-[10%] w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] rounded-full mix-blend-screen"
      style={{
        background: 'radial-gradient(circle, rgba(147,51,234,0.08) 0%, rgba(0,0,0,0) 70%)',
        filter: 'blur(80px)',
      }}
      animate={{
        x: [0, 30, 0, -30, 0],
        y: [0, -30, 30, 0, 0],
        scale: [1, 1.05, 0.95, 1.05, 1],
      }}
      transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div 
      className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full mix-blend-screen"
      style={{
        background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, rgba(0,0,0,0) 70%)',
        filter: 'blur(80px)',
      }}
      animate={{
        x: [0, -40, 0, 40, 0],
        y: [0, 40, -40, 0, 0],
        scale: [1, 0.95, 1.05, 0.95, 1],
      }}
      transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div 
      className="absolute top-[20%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full mix-blend-screen"
      style={{
        background: 'radial-gradient(circle, rgba(201,168,76,0.05) 0%, rgba(0,0,0,0) 70%)',
        filter: 'blur(100px)',
      }}
      animate={{
        x: [0, 20, 0, -20, 0],
        y: [0, 40, -40, 0, 0],
        opacity: [0.3, 0.4, 0.3],
      }}
      transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
    />
    {/* Subtle noise texture over gradient */}
    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }} />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
  </div>
);

export const ApresentacaoFlow = () => {
  const [step, setStep] = useState<"input" | "success">("input");
  const [error, setError] = useState<string | null>(null);

  // Page initialization logic
  useEffect(() => {
    // Scroll to top on mount to ensure clean view
    window.scrollTo(0, 0);
  }, []);

  const handleInitialSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const enteredCode = (formData.get("code") as string || "").trim().toUpperCase();
    
    setError(null);

    if (!enteredCode) return;

    const redirectionUrl = CODE_MAPPING[enteredCode];

    if (redirectionUrl) {
      setStep("success");
      setTimeout(() => {
        window.location.href = redirectionUrl;
      }, 1800);
    } else {
      setError("Nenhum documento foi encontrado para o código fornecido.");
    }
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col justify-center items-center bg-black selection:bg-white/20 overflow-hidden font-['Inter']">
      <AuroraBackground />

      {/* Main Content Container - Flex centered, ensuring it doesn't break */}
      <div className="relative z-10 w-full max-w-4xl px-4 flex flex-col items-center justify-center min-h-screen">
        
        <AnimatePresence mode="wait">
          
          {/* STEP 1: DIRECT CODE INPUT */}
          {step === "input" && (
            <motion.div 
              key="step-input"
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -30, filter: "blur(10px)", scale: 0.95 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="w-full flex flex-col items-center gap-12"
            >
              <div className="text-center space-y-4">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }} 
                  animate={{ opacity: 1, scale: 1 }} 
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="w-16 h-16 mx-auto bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(255,255,255,0.03)] backdrop-blur-md"
                >
                  <LockKeyhole className="text-white/70 w-8 h-8" strokeWidth={1.5} />
                </motion.div>
                <h1 className="text-4xl md:text-6xl font-['Urbanist'] font-bold tracking-tight text-white leading-tight">
                  Bem-vindo à Elyon
                </h1>
                <p className="text-white/40 text-lg md:text-xl font-medium tracking-wide">
                  Acesso restrito para parceiros e clientes.
                </p>
              </div>

              {/* Simple Input and Button to ensure zero bugs */}
              <form 
                onSubmit={handleInitialSubmit}
                className="w-full max-w-sm flex flex-col gap-4 mt-4 relative"
              >
                <div className="flex flex-col gap-3 w-full">
                  <input 
                    name="code"
                    type="text"
                    placeholder="Insira o código da apresentação"
                    className="w-full h-14 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl px-6 text-white placeholder:text-white/30 outline-none focus:border-white/30 focus:bg-white/10 transition-all font-medium text-center text-lg shadow-[0_4px_16px_rgba(0,0,0,0.2)]"
                    required
                    autoComplete="off"
                    onChange={() => { if (error) setError(null); }}
                  />
                  <button 
                    type="submit"
                    className="w-full h-12 bg-white text-black hover:bg-white/90 font-bold uppercase tracking-widest text-sm rounded-xl transition-colors shadow-[0_4px_16px_rgba(255,255,255,0.1)] focus:outline-none focus:ring-2 focus:ring-white/50"
                  >
                    Avançar
                  </button>
                </div>
                
                {/* Error Message Display */}
                <AnimatePresence>
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute -bottom-12 left-0 right-0 flex items-center justify-center gap-2 text-red-400 text-sm font-medium bg-red-400/10 py-2 px-3 rounded-lg border border-red-400/20"
                    >
                      <AlertCircle size={16} />
                      <span>{error}</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>

              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ delay: 0.5, duration: 1 }}
                className="absolute bottom-8 text-[10px] text-white/30 uppercase tracking-[0.3em]"
              >
                Elyon Nexus &bull; Technology for Humans
              </motion.div>
            </motion.div>
          )}

          {/* STEP 2: SUCCESS */}
          {step === "success" && (
            <motion.div 
              key="step-success"
              initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="w-full flex flex-col items-center gap-8"
            >
              <div className="relative">
                {/* Expanding success glow */}
                <motion.div 
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 2.5, opacity: [0, 0.2, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="absolute inset-0 bg-white rounded-full blur-xl"
                />
                <div className="relative z-10 w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-[0_0_80px_rgba(255,255,255,0.3)]">
                  <ShieldCheck size={48} className="text-black" strokeWidth={1.5} />
                </div>
              </div>
              
              <div className="text-center space-y-3">
                <h2 className="text-3xl md:text-4xl font-['Urbanist'] font-bold text-white tracking-tight">
                  Acesso Autorizado
                </h2>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="text-white/50 text-lg flex items-center justify-center gap-2"
                >
                  Iniciando sua apresentação
                  <span className="flex gap-1">
                    <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}>.</motion.span>
                    <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}>.</motion.span>
                    <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}>.</motion.span>
                  </span>
                </motion.p>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
};
