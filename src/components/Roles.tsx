"use client";

import { 
  ShieldCheck, 
  Radio, 
  Database, 
  Bot,
  Truck,
  Users
} from "lucide-react";
import styles from "./Roles.module.css";

interface FeatureDetail {
  icon: React.ReactNode;
  title: string;
  summary: string;
  items: string[];
  timeline?: string[];
}

export default function Roles() {
  const features: FeatureDetail[] = [
    {
      icon: <ShieldCheck size={22} />,
      title: "Triple-Layer Verification",
      summary: "Absolute trust and safety. Every professional is audited with physical documents before interacting with patients.",
      items: [
        "Identity verification via National ID uploads",
        "Mandatory Medical & Technical Certificate checks",
        "Profile status tracking (Pending, Approved, Rejected)"
      ]
    },
    {
      icon: <Radio size={22} />,
      title: "Smart Pharmacy Broadcast",
      summary: "Dynamic radius order pings. Patients find hard-to-stock medications without stepping out.",
      items: [],
      timeline: [
        "Request: Snap photo of a prescription",
        "Broadcast: Ping verified local pharmacies",
        "Offers: Pharmacies reply with stock bids",
        "Choice: Select best price and location"
      ]
    },
    {
      icon: <Database size={22} />,
      title: "Pharma Data Engine",
      summary: "A medical directory, not a generic shop. Track compliance data directly inside drug profiles.",
      items: [
        "Tracks expiration dates & batch numbers",
        "Configures bulk MOQ order quantity controls",
        "Detailed contraindications & interactions alerts"
      ]
    },
    {
      icon: <Bot size={22} />,
      title: "AI Health Assistant",
      summary: "Your 24/7 smart medical companion. Get instant answers to health queries and jargon lookup.",
      items: [
        "Decipher complex pharmaceutical terms",
        "Answers preliminary safety questions",
        "Helps navigate healthcare application steps"
      ]
    },
    {
      icon: <Truck size={22} />,
      title: "Emergency Ambulance Dispatch",
      summary: "Emergency care when seconds count. Direct GPS coordinate dispatch with seamless digital payments.",
      items: [
        "One-tap request using direct GPS positioning",
        "Integrated payments via Mobile Money (M-Pesa, Tigo) & Cards",
        "Real-time dispatch tracking (Pending, En-Route, Arrived)"
      ]
    },
    {
      icon: <Users size={22} />,
      title: "Direct Professional Consultations",
      summary: "Secure, one-on-one encrypted chat rooms linking everyday users directly with verified medical professionals.",
      items: [
        "Book appointments with verified doctors & specialists",
        "Private patient-to-doctor 1-on-1 chat rooms",
        "Interactive comments on targeted health campaigns"
      ]
    }
  ];

  return (
    <section className={styles.section} id="ecosystem">
      <div className="container">
        
        <div className={styles.header}>
          <span className="section-label">Core Capabilities</span>
          <h2 className={styles.heading}>Deep Dive <em>Features</em></h2>
          <p className={styles.description}>
            Explore the core technologies powering absolute trust, safety, and instant access in the Smart Health ecosystem.
          </p>
        </div>

        <div className={styles.grid}>
          {features.map((feat, idx) => (
            <div key={idx} className={`${styles.card} glass-card reveal-on-scroll delay-${(idx % 3) + 1}`}>
              <div className={styles.icon}>
                {feat.icon}
              </div>
              <h3 className={styles.cardTitle}>{feat.title}</h3>
              <p className={styles.summary}>{feat.summary}</p>
              
              <span className={styles.itemsTitle}>
                {feat.timeline ? "HOW IT WORKS" : "Specifications"}
              </span>
              
              {feat.timeline ? (
                <div className={styles.timelineWrapper}>
                  {feat.timeline.map((step, stepIdx) => {
                    const [stepTitle, stepDesc] = step.split(": ");
                    return (
                      <div key={stepIdx} className={styles.timelineStep}>
                        <span className={styles.stepNum}>0{stepIdx + 1}</span>
                        <span>
                          <strong>{stepTitle}</strong>: {stepDesc}
                        </span>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className={styles.itemsList}>
                  {feat.items.map((item, itemIdx) => (
                    <div key={itemIdx} className={styles.item}>
                      <div className={styles.bullet} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
