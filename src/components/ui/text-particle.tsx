"use client"

import { useEffect, useRef } from 'react';

interface ParticleProps {
  x: number;
  y: number;
  originX: number;
  originY: number;
  color: string;
  size: number;
  baseSize: number; // Armazena o tamanho original
  friction: number;
  ease: number;
  vx: number;
  vy: number;
}

interface TextParticleProps {
  text: string;
  color?: string;
  fontSize?: number;
  fontFamily?: string;
  gap?: number;
  mouseRadius?: number;
  particleSize?: number;
  returnSpeed?: number;
  forceFactor?: number;
  className?: string;
}

export function TextParticle({ 
  text = "AI\nFIRST", 
  color = '#C9A84C', 
  fontSize = 150, 
  fontFamily = 'sans-serif',
  gap = 6,
  mouseRadius = 80,
  particleSize = 3,
  returnSpeed = 0.05,
  forceFactor = 0.2,
  className = ""
}: TextParticleProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    let animationFrameId: number;
    let particles: ParticleProps[] = [];
    const mouse = { x: 0, y: 0, active: false };

    const init = () => {
      const container = containerRef.current;
      if (!container) return;

      // Usamos o tamanho real do container
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      // Desenhar texto temporário para mapear pixels
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'white';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      
      ctx.font = `bold ${fontSize}px ${fontFamily}`;
      
      // Suporte para multiline
      const lines = text.split('\n');
      const lineHeight = fontSize * 0.9;
      const totalHeight = lines.length * lineHeight;
      
      lines.forEach((line, index) => {
        ctx.fillText(
          line.toUpperCase(), 
          centerX, 
          centerY - (totalHeight / 2) + (index * lineHeight) + (lineHeight / 2)
        );
      });

      // Ler dados dos pixels
      const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
      particles = [];

      // Mapear apenas pixels coloridos (onde tem texto)
      for (let y = 0; y < canvas.height; y += gap) {
        for (let x = 0; x < canvas.width; x += gap) {
          const index = (y * canvas.width + x) * 4;
          const alpha = pixels[index + 3];

          if (alpha > 128) {
            particles.push({
              x: x, 
              y: y,
              originX: x,
              originY: y,
              color: color,
              size: particleSize,
              baseSize: particleSize,
              friction: 0.95,
              ease: 0.1,
              vx: 0,
              vy: 0
            });
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        // Cálculo de distância do mouse
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < mouseRadius) {
          // Efeito de desintegração/repulsão
          const angle = Math.atan2(dy, dx);
          const force = (mouseRadius - distance) / mouseRadius;
          
          p.vx -= Math.cos(angle) * force * forceFactor * 50;
          p.vy -= Math.sin(angle) * force * forceFactor * 50;
        }

        // Retorno suave à posição original
        p.vx += (p.originX - p.x) * returnSpeed;
        p.vy += (p.originY - p.y) * returnSpeed;

        p.vx *= p.friction;
        p.vy *= p.friction;

        p.x += p.vx;
        p.y += p.vy;

        // Lógica de Expansão (Bolinhas crescendo no hover)
        let targetSize = p.baseSize;
        if (distance < mouseRadius) {
          const expansionForce = (mouseRadius - distance) / mouseRadius;
          targetSize = p.baseSize * (1 + expansionForce * 2); // Expande até 3x o tamanho base
        }
        
        // Interpolação suave para o tamanho
        p.size += (targetSize - p.size) * 0.1;

        // Desenhar ponto (redondo como pedido)
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleResize = () => {
      init();
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    
    init();
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [text, color, fontSize, fontFamily, gap, mouseRadius, particleSize, returnSpeed, forceFactor]);

  return (
    <div ref={containerRef} className={`w-full h-full min-h-[400px] ${className}`}>
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
