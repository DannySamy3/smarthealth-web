"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, Shield, Globe, Award, Heart, CheckCircle2, Lock, Smartphone } from "lucide-react";
import styles from "./Hero.module.css";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef<{ x: number | null; y: number | null }>({ x: null, y: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const particleCount = 45;
    const connectionDistance = 100;
    const mouseConnectionDistance = 140;

    const resizeCanvas = () => {
      if (canvas && containerRef.current) {
        canvas.width = containerRef.current.offsetWidth;
        canvas.height = containerRef.current.offsetHeight;
        initParticles();
      }
    };

    const initParticles = () => {
      particles = [];
      const width = canvas.width;
      const height = canvas.height;

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          radius: Math.random() * 2 + 1,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const width = canvas.width;
      const height = canvas.height;
      const mouse = mouseRef.current;

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx = -p.vx;
        if (p.y < 0 || p.y > height) p.vy = -p.vy;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(56, 189, 248, 0.4)";
        ctx.fill();
      });

      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);

          if (dist < connectionDistance) {
            const alpha = (1 - dist / connectionDistance) * 0.12;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        if (mouse.x !== null && mouse.y !== null) {
          const distToMouse = Math.hypot(p1.x - mouse.x, p1.y - mouse.y);
          if (distToMouse < mouseConnectionDistance) {
            const alpha = (1 - distToMouse / mouseConnectionDistance) * 0.22;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(14, 165, 233, ${alpha})`;
            ctx.lineWidth = 1.0;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    animationFrameId = requestAnimationFrame(draw);

    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = null;
      mouseRef.current.y = null;
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={styles.hero} ref={containerRef} id="hero">
      {/* Background concentric orbits */}
      <div className={styles.orbits} aria-hidden="true">
        <div className={`${styles.orbitRing} ${styles.ring1}`}></div>
        <div className={`${styles.orbitRing} ${styles.ring2}`}></div>
        <div className={`${styles.orbitRing} ${styles.ring3}`}></div>
      </div>

      {/* Floating Canvas Particles */}
      <canvas ref={canvasRef} className={styles.particles} aria-hidden="true" />

      <div className="container">
        <div className={styles.inner}>
          
          <div className="badge-pill animate-fade-up">
            <Lock size={12} style={{ color: "var(--brand-cyan)", strokeWidth: 3 }} />
            Africa's Unified Health Ecosystem
          </div>

          <h1 className={`${styles.heading} animate-fade-up`}>
            Securing Healthcare from<br />
            <em>Factory to Patient</em>
          </h1>

          <p className={`${styles.description} animate-fade-up`}>
            Smart Health connects pharmaceutical supply chains with instant patient care. Securely procure bulk medicines, broadcast prescription requests to local pharmacies, consult verified doctors, and summon emergency ambulances in a single verified network.
          </p>

          <div className={`${styles.buttons} animate-fade-up`}>
            <a 
              href="#ecosystem-demo" 
              className="button button--outline-light"
              onClick={(e) => handleScrollClick(e, "ecosystem-demo")}
            >
              I am a Patient
              <span className="button-icon">
                <ArrowRight size={14} strokeWidth={2.5} />
              </span>
            </a>
            <a 
              href="#ecosystem" 
              className="button button--primary"
              onClick={(e) => handleScrollClick(e, "ecosystem")}
            >
              I am a Business
              <span className="button-icon">
                <ArrowRight size={14} strokeWidth={2.5} />
              </span>
            </a>
          </div>

          <div className="animate-fade-up" style={{ marginTop: "1.25rem", fontSize: "0.875rem", color: "var(--text-muted)", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
            <Smartphone size={14} style={{ color: "var(--brand-cyan)" }} />
            <span>Available on iOS App Store & Android Google Play Store</span>
          </div>

          {/* Trusted Logobar */}
          <div className={styles.logos}>
            <span className={styles.logosLabel}>Regulatory & Compliance Standards</span>
            <div className={styles.logosRow}>
              <div className={styles.logo}>
                <Shield size={16} className={styles.logoSymbol} />
                <span>TFDA Licensed</span>
              </div>
              <div className={styles.logo}>
                <Globe size={16} className={styles.logoSymbol} />
                <span>BRELA Registered</span>
              </div>
              <div className={styles.logo}>
                <Award size={16} className={styles.logoSymbol} />
                <span>Pharmacy Council</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
