"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./Testimonials.module.css";

interface Testimonial {
  quote: string;
  name: string;
  org: string;
  image: string;
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      quote: "Automatically mapping TFDA permits and production serialization codes has saved hundreds of manual auditing hours. The workflow fits perfectly with our manufacturing lines.",
      name: "Dr. Sarah Jenkins",
      org: "Pharmaceutical Research Lead, Geneva Amox",
      image: "/images/testimonials/sarah.png"
    },
    {
      quote: "Smart Health was an exceptional partner in securing our supply lines. It quickly unified our multiple product batches into one clear, verified portal. Real-time cold-chain telemetry protects our vaccines daily.",
      name: "Dr. David K. Mussa",
      org: "Chief Medical Director, Regional Referral Hospital",
      image: "/images/testimonials/david.png"
    },
    {
      quote: "Our shelf compliance is seamless. Checking and signing off on arriving shipments is extremely fast and transparent. Automated alerts prevent drug inventory gaps before they can affect our patients.",
      name: "Amira Otieno",
      org: "Licensed Lead Pharmacist, Global Health Dispensary",
      image: "/images/testimonials/amira.png"
    },
    {
      quote: "The system audit logs provide immediate traceability reports. Toggling node access status and verifying regulatory permits happens in seconds. We have had zero compliance gaps since deploying the nodes.",
      name: "Marcus Vance",
      org: "Supply Chain & Logistics Director, Apex Pharma",
      image: "/images/testimonials/marcus.png"
    }
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  // Auto-play slider
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.section} id="testimonials">
      <div className="container">
        
        <div className={`${styles.header} reveal-on-scroll`}>
          <span className="section-label">Testimonials</span>
          <h2 className={styles.heading}>
            Trusted by Healthcare<br />
            <em>Professionals</em>
          </h2>
        </div>

        <div className={`${styles.carousel} reveal-on-scroll delay-1`}>
          <button 
            className={`${styles.arrow} ${styles.arrowPrev}`} 
            onClick={handlePrev}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            className={`${styles.arrow} ${styles.arrowNext}`} 
            onClick={handleNext}
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>

          <div className={styles.sliderWrapper}>
            <div 
              className={styles.sliderTrack}
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((t, idx) => (
                <div key={idx} className={styles.slide}>
                  <div className={styles.slideContent}>
                    <p className={styles.quote}>
                      “{t.quote}”
                    </p>
                    <div className={styles.attrib}>
                      <div className={styles.avatarWrapper}>
                        <img src={t.image} alt={t.name} className={styles.avatarImage} />
                      </div>
                      <div className={styles.who}>
                        <div className={styles.name}>{t.name}</div>
                        <div className={styles.org}>{t.org}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.dots}>
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                className={`${styles.dot} ${activeIndex === idx ? styles.dotActive : ""}`}
                onClick={() => handleDotClick(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
