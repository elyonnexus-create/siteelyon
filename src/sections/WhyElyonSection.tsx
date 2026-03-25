"use client"

import { useState } from "react"
import { ArrowUpRight } from "lucide-react"

export function WhyElyonSection() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section
      id="sobre"
      className="bg-[#0A0A0A] pt-16 pb-0 md:pt-24 md:pb-0 px-6 overflow-hidden flex justify-center items-center"
    >
      <div
        className="group relative grid grid-cols-1 justify-items-center md:grid-cols-2 gap-12 md:gap-20 lg:gap-32 max-w-7xl mx-auto items-center cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Left: Text Block */}
        <div className="relative z-10 flex w-full flex-col items-center text-center md:items-start md:text-left">
          {/* Label with animated line */}
          <div
            style={{
              display: 'inline-block',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: 9999,
              padding: '10px 32px',
              marginBottom: 32,
              fontSize: 12,
              fontWeight: 600,
              color: '#fff',
              letterSpacing: '0.08em',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              lineHeight: 1
            }}
          >
            A Essência
          </div>

          {/* Title - responsive text sizes */}
          <h2 className="relative">
            <span
              className="block text-5xl font-bold tracking-tight text-white transition-all duration-700 sm:text-6xl md:text-6xl lg:text-8xl font-['Urbanist']"
              style={{
                transform: isHovered ? "translateY(-4px)" : "translateY(0)",
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              Por que
            </span>
            <span
              className="block text-5xl font-bold tracking-tight text-white transition-all duration-700 sm:text-6xl md:text-6xl lg:text-8xl font-['Urbanist']"
              style={{
                transform: isHovered ? "translateX(16px)" : "translateX(0)",
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              a <span style={{ color: '#C9A84C' }}>Elyon</span>?
            </span>
          </h2>

          {/* Description - responsive spacing */}
          <div className="flex flex-col gap-6">
            <p
              className="mt-8 max-w-[460px] text-lg leading-relaxed transition-all duration-700 md:mt-10 md:text-xl lg:mt-12 font-['Inter']"
              style={{
                color: isHovered ? "rgba(255, 255, 255, 0.9)" : "rgba(255, 255, 255, 0.5)",
                transform: isHovered ? "translateY(-6px)" : "translateY(0)",
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              "<span style={{ color: '#C9A84C' }}>Elyon</span>" significa O Altíssimo. Não escolhemos esse nome por estética. Escolhemos porque ele nos lembra, todos os dias, do padrão que não negociamos.
            </p>

            <p
              className="max-w-[460px] text-lg leading-relaxed transition-all duration-700 md:text-xl font-['Inter'] font-medium"
              style={{
                color: isHovered ? "rgba(255, 255, 255, 0.8)" : "rgba(255, 255, 255, 0.4)",
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              Negócios verdadeiramente grandes não se constroem sobre o que está na moda. Constroem-se sobre o que permanece quando a moda passa.
            </p>
          </div>

          {/* Minimal CTA - responsive spacing */}
          <a
            href="#servicos"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="mt-8 flex items-center gap-6 md:mt-12 lg:mt-14 group/cta"
            style={{ textDecoration: 'none' }}
          >
            <div
              className="flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-500 md:h-14 md:w-14 lg:h-16 lg:w-16"
              style={{
                borderColor: isHovered ? "white" : "rgba(255, 255, 255, 0.2)",
                backgroundColor: isHovered ? "white" : "transparent",
                color: isHovered ? "black" : "white",
                transform: isHovered ? "scale(1.1)" : "scale(1)",
                boxShadow: isHovered ? "0 8px 32px rgba(255, 255, 255, 0.2)" : "0 0 0 transparent",
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              <ArrowUpRight
                className="h-5 w-5 transition-transform duration-500 md:h-6 md:w-6"
                style={{
                  transform: isHovered ? "rotate(45deg)" : "rotate(0deg)",
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              />
            </div>
            <span
              className="text-xs font-semibold uppercase tracking-widest text-white transition-all duration-700 md:text-sm"
              style={{
                opacity: isHovered ? 1 : 0.5,
                transform: isHovered ? "translateX(0)" : "translateX(-12px)",
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                transitionDelay: isHovered ? "100ms" : "0ms",
              }}
            >
              Explore
            </span>
          </a>
        </div>

        {/* Right: Image Block */}
        <div
          className="relative transition-all duration-700 w-full max-w-[340px] mx-auto md:max-w-none md:w-full flex flex-col items-center justify-self-center"
          style={{
            transform: isHovered ? "translateX(8px) translateY(-8px)" : "translateX(0) translateY(0)",
            transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {/* Frame outline */}
          <div
            className="absolute -inset-4 border transition-all duration-700 md:-inset-6"
            style={{
              borderColor: isHovered ? "rgba(255, 255, 255, 0.2)" : "transparent",
              transform: isHovered ? "scale(1.02)" : "scale(1)",
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          />

          {/* Image container - responsive sizing */}
          <div className="relative aspect-square overflow-hidden rounded-2xl shadow-2xl">
            <div
              className="absolute -inset-1 transition-all duration-700"
              style={{
                boxShadow: isHovered ? "0 32px 80px rgba(0, 0, 0, 0.6)" : "0 0 0 transparent",
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            />
            <img
              src="/assets/images/founder.png"
              alt="Elyon Founder"
              className="h-full w-full object-cover transition-all duration-1000"
              style={{
                transform: isHovered ? "scale(1.05)" : "scale(1)",
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            />

            <div
              className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-700"
              style={{
                opacity: isHovered ? 1 : 0.4,
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            />

            {/* Corner accents */}
            <div
              className="absolute left-6 top-6 h-8 w-px bg-white/80 transition-all duration-500 md:left-10 md:top-10 md:h-12"
              style={{
                opacity: isHovered ? 1 : 0,
                transform: isHovered ? "scaleY(1)" : "scaleY(0)",
                transformOrigin: "top",
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                transitionDelay: "50ms",
              }}
            />
            <div
              className="absolute left-6 top-6 h-px w-8 bg-white/80 transition-all duration-500 md:left-10 md:top-10 md:w-12"
              style={{
                opacity: isHovered ? 1 : 0,
                transform: isHovered ? "scaleX(1)" : "scaleX(0)",
                transformOrigin: "left",
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                transitionDelay: "100ms",
              }}
            />
            <div
              className="absolute bottom-6 right-6 h-8 w-px bg-white/80 transition-all duration-500 md:bottom-10 md:right-10 md:h-12"
              style={{
                opacity: isHovered ? 1 : 0,
                transform: isHovered ? "scaleY(1)" : "scaleY(0)",
                transformOrigin: "bottom",
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                transitionDelay: "150ms",
              }}
            />
            <div
              className="absolute bottom-6 right-6 h-px w-8 bg-white/80 transition-all duration-500 md:bottom-10 md:right-10 md:w-12"
              style={{
                opacity: isHovered ? 1 : 0,
                transform: isHovered ? "scaleX(1)" : "scaleX(0)",
                transformOrigin: "right",
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                transitionDelay: "200ms",
              }}
            />
          </div>

          {/* Index number */}
          <span
            className="absolute -bottom-10 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-0 font-mono text-sm text-white/40 transition-all duration-700 md:-bottom-14 md:text-base tracking-[0.2em] whitespace-nowrap"
            style={{
              opacity: isHovered ? 1 : 0.4,
              transform: isHovered ? "translateY(16px)" : "translateY(0)",
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            KLEBER — FOUNDER ELYON
          </span>
        </div>
      </div>
    </section>
  )
}
