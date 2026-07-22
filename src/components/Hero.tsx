"use client";

import { 
  ArrowRight, 
  Shield, 
  Globe, 
  Award, 
  CheckCircle2, 
  Smartphone, 
  Truck, 
  Users, 
  Building2,
  FileCheck
} from "lucide-react";
import PhoneMockup from "@/components/PhoneMockup";
import styles from "./Hero.module.css";

export default function Hero() {
  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={styles.hero} id="hero">
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

          {/* Right Visual Phone Mockup Column */}
          <div className={styles.rightCol}>
            <PhoneMockup activeRole="community" overrideImageSrc="/images/app_roles.png" />
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
