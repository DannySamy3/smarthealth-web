"use client";

import { useEffect, useRef } from "react";
import { 
  ArrowRight, 
  Shield, 
  Globe, 
  Award, 
  CheckCircle2, 
  Smartphone, 
  Truck, 
  Users, 
  Activity,
  Zap,
  Building2,
  FileCheck
} from "lucide-react";
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
    const particleCount = 50;
    const connectionDistance = 110;
    const mouseConnectionDistance = 150;

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
          vx: (Math.random() - 0.5) * 0.7,
          vy: (Math.random() - 0.5) * 0.7,
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
        ctx.fillStyle = "rgba(29, 78, 216, 0.35)";
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
            ctx.strokeStyle = `rgba(29, 78, 216, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        if (mouse.x !== null && mouse.y !== null) {
          const distToMouse = Math.hypot(p1.x - mouse.x, p1.y - mouse.y);
          if (distToMouse < mouseConnectionDistance) {
            const alpha = (1 - distToMouse / mouseConnectionDistance) * 0.25;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(2, 132, 199, ${alpha})`;
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
      {/* Dynamic Background Concentric Orbits */}
      <div className={styles.orbits} aria-hidden="true">
        <div className={`${styles.orbitRing} ${styles.ring1}`}></div>
        <div className={`${styles.orbitRing} ${styles.ring2}`}></div>
        <div className={`${styles.orbitRing} ${styles.ring3}`}></div>
      </div>

      {/* Interactive Particle Field */}
      <canvas ref={canvasRef} className={styles.particles} aria-hidden="true" />

      <div className="container">
        <div className={styles.splitGrid}>
          
          {/* Left Hero Column */}
          <div className={styles.leftCol}>
            
            <div className={styles.badgePill}>
              <span className={styles.livePulseDot} />
              <span>Unified Medical Ecosystem</span>
            </div>

            <h1 className={styles.heading}>
              Securing Healthcare from<br />
              <em>Factory to Patient</em>
            </h1>

            <p className={styles.description}>
              Smart Health connects pharmaceutical supply chains with instant patient care. Securely procure bulk medicines, broadcast prescription requests to local pharmacies, consult verified doctors, and dispatch emergency ambulances in a single unified network.
            </p>

            <div className={styles.buttons}>
              <a 
                href="#ecosystem-demo" 
                className="button button--primary"
                onClick={(e) => handleScrollClick(e, "ecosystem-demo")}
              >
                Explore App Showcase
                <span className="button-icon">
                  <ArrowRight size={15} strokeWidth={2.5} />
                </span>
              </a>
              <a 
                href="#ecosystem" 
                className="button button--outline-light"
                onClick={(e) => handleScrollClick(e, "ecosystem")}
              >
                For Businesses & Clinics
              </a>
            </div>

            {/* Quick Stats Banner */}
            <div className={styles.statsRow}>
              <div className={styles.statItem}>
                <span className={styles.statVal}>100%</span>
                <span className={styles.statLbl}>Verified Entities</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.statItem}>
                <span className={styles.statVal}>24/7</span>
                <span className={styles.statLbl}>GPS Emergency</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.statItem}>
                <span className={styles.statVal}>TFDA</span>
                <span className={styles.statLbl}>Licensed Vault</span>
              </div>
            </div>

          </div>

          {/* Right Visual Hero Card Stack */}
          <div className={styles.rightCol}>
            
            <div className={styles.heroVisualCard}>
              
              <div className={styles.cardHeader}>
                <div className={styles.cardHeaderTitle}>
                  <Building2 size={18} className={styles.headerIcon} />
                  <div>
                    <h4>Smart Health Ecosystem</h4>
                    <span className={styles.subText}>Live Platform Network</span>
                  </div>
                </div>
                <span className={styles.badgeVerified}>
                  <CheckCircle2 size={13} /> Active Node
                </span>
              </div>

              <div className={styles.heroCardContent}>
                
                {/* Floating Metric 1: Emergency Ambulance */}
                <div className={`${styles.floatingWidget} ${styles.widget1}`}>
                  <div className={`${styles.widgetIcon} ${styles.iconAmbulance}`}>
                    <Truck size={18} />
                  </div>
                  <div>
                    <h5 className={styles.widgetTitle}>Emergency Ambulance</h5>
                    <p className={styles.widgetSub}>One-Tap GPS Dispatch • En-Route</p>
                  </div>
                  <span className={styles.liveTag}>LIVE</span>
                </div>

                {/* Floating Metric 2: Doctor Chat */}
                <div className={`${styles.floatingWidget} ${styles.widget2}`}>
                  <div className={`${styles.widgetIcon} ${styles.iconDoctor}`}>
                    <Users size={18} />
                  </div>
                  <div>
                    <h5 className={styles.widgetTitle}>Doctor Consultation</h5>
                    <p className={styles.widgetSub}>Verified Specialist • 1-on-1 Chat</p>
                  </div>
                  <span className={styles.onlineDot} />
                </div>

                {/* Floating Metric 3: TFDA Vault */}
                <div className={`${styles.floatingWidget} ${styles.widget3}`}>
                  <div className={`${styles.widgetIcon} ${styles.iconVault}`}>
                    <FileCheck size={18} />
                  </div>
                  <div>
                    <h5 className={styles.widgetTitle}>Regulatory Compliance Vault</h5>
                    <p className={styles.widgetSub}>BRELA, TFDA & Expiry Batch Tracked</p>
                  </div>
                  <span className={styles.shieldTag}>
                    <Shield size={12} /> Verified
                  </span>
                </div>

              </div>

              {/* Bottom Platform Bar */}
              <div className={styles.heroCardFooter}>
                <Smartphone size={15} className={styles.footerPhoneIcon} />
                <span>Available on iOS App Store & Android Google Play Store</span>
              </div>

            </div>

          </div>

        </div>

        {/* Regulatory & Compliance Banner */}
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
    </section>
  );
}
