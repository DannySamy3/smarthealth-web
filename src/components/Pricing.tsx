"use client";

import { 
  ArrowRight, 
  Smartphone, 
  Activity, 
  MessageSquare, 
  Bot, 
  Users,
  Building,
  Sparkles,
  Download,
  Database
} from "lucide-react";
import styles from "./Pricing.module.css";

interface PlanDetail {
  id: string;
  title: string;
  subtitle: string;
  amount: string;
  priceSub: string;
  feeNote: string;
  featured?: boolean;
  benefits: {
    icon: React.ReactNode;
    name: string;
    text: string;
  }[];
}

export default function Pricing() {
  const plans: PlanDetail[] = [
    {
      id: "community",
      title: "Community Account",
      subtitle: "For Patients & Everyday Users",
      amount: "0",
      priceSub: "forever",
      feeNote: "1.5% transaction fee on completed pharmacy bids",
      benefits: [
        {
          icon: <Bot size={12} />,
          name: "AI Health Assistant",
          text: "Decipher jargon and ask preliminary safety questions 24/7."
        },
        {
          icon: <Smartphone size={12} />,
          name: "Find My Meds GPS",
          text: "Snap prescription photo to broadcast request to local pharmacies."
        },
        {
          icon: <Activity size={12} />,
          name: "One-Tap Ambulance",
          text: "Request emergency ambulance dispatch directly to exact coordinates."
        },
        {
          icon: <MessageSquare size={12} />,
          name: "Doctor Appointments",
          text: "Book telemedicine consultations directly from verified profiles."
        }
      ]
    },
    {
      id: "professional",
      title: "Professional Plan",
      subtitle: "For Doctors, Nurses & Pharmacists",
      amount: "80,000",
      priceSub: "/month",
      feeNote: "2.5% transaction fee on patient consultation bookings",
      featured: true,
      benefits: [
        {
          icon: <Users size={12} />,
          name: "Verified Profile Badge",
          text: "Highlight your specialty and credentials to patients."
        },
        {
          icon: <MessageSquare size={12} />,
          name: "Consultation Bookings",
          text: "Accept, decline, and manage virtual patient appointments."
        },
        {
          icon: <Sparkles size={12} />,
          name: "Shared Community Feed",
          text: "Discuss medical topics, share case feeds, and network with peers."
        },
        {
          icon: <Bot size={12} />,
          name: "Case AI Integration",
          text: "Access patient records, chat summaries, and automated diagnostics."
        }
      ]
    },
    {
      id: "business",
      title: "B2B Business Plan",
      subtitle: "For Importers, Manufacturers, Clinics, Organics",
      amount: "270,000",
      priceSub: "/month",
      feeNote: "1.8% transaction fee on completed B2B procurement orders",
      benefits: [
        {
          icon: <Building size={12} />,
          name: "Unified B2B Marketplace",
          text: "List catalog items, manage purchase requests, and take bulk orders."
        },
        {
          icon: <Database size={12} />,
          name: "Pharma Data Engine",
          text: "Track drug batch serialization lot numbers, expiries, and MOQs."
        },
        {
          icon: <Activity size={12} />,
          name: "Logistics cold-chain",
          text: "Monitor IoT temperature, GPS routes, speeds, and transit ETA."
        },
        {
          icon: <Sparkles size={12} />,
          name: "Role-Targeted Ads",
          text: "Promote items on community feeds targeting Hospital Directors directly."
        }
      ]
    }
  ];

  return (
    <section className={styles.section} id="pricing">
      <div className={`container ${styles.container}`}>
        
        <div className={styles.header}>
          <span className="section-label">Pricing & Fees</span>
          <h2 className={styles.heading}>Subscription <em>Plans & Fees</em></h2>
          <p className={styles.description}>
            Patients use Smart Health for free. Professional and business roles subscribe to secure custom nodes, with flat transaction fees applied to app sales.
          </p>
        </div>

        <div className={styles.grid}>
          {plans.map((plan, idx) => (
            <div 
              key={plan.id} 
              className={`${styles.card} ${plan.featured ? styles.featuredCard : ""} glass-card reveal-on-scroll delay-${idx + 1}`}
            >
              <div className={styles.planMeta}>
                <span className={styles.planTitle}>{plan.title}</span>
                <span className={styles.planSubtitle}>{plan.subtitle}</span>
                <span className={styles.planFeeNote}>{plan.feeNote}</span>
              </div>

              <div className={styles.planPrice}>
                <span className={styles.currency}>TSh</span>
                <span className={styles.amount}>{plan.amount}</span>
                <span className={styles.priceSub}> {plan.priceSub}</span>
              </div>

              <div className={styles.benefitsList}>
                {plan.benefits.map((b, idx) => (
                  <div key={idx} className={styles.benefitItem}>
                    <div className={styles.benefitIcon}>
                      {b.icon}
                    </div>
                    <div className={styles.benefitContent}>
                      <span className={styles.benefitName}>{b.name}</span>
                      <span className={styles.benefitText}>{b.text}</span>
                    </div>
                  </div>
                ))}
              </div>

              <button 
                className={styles.downloadBtn} 
                onClick={() => alert(`Smart Health mobile app download initiated for ${plan.title}`)}
              >
                <Download size={14} />
                <span>Get Smart Health App</span>
                <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
