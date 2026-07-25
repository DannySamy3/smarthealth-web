"use client";

import { 
  Smartphone, 
  Activity, 
  MessageSquare, 
  Bot, 
  Users,
  Building,
  Sparkles,
  Database,
  Megaphone,
  Clock,
  Calendar,
  Layers
} from "lucide-react";
import styles from "./Pricing.module.css";

interface PlanDetail {
  id: string;
  title: string;
  subtitle: string;
  amount: string;
  currency: string;
  priceSub: string;
  convertedPrice: string;
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
      currency: "TSh",
      amount: "0",
      priceSub: "forever",
      convertedPrice: "Free ($0 USD)",
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
      currency: "$",
      amount: "5",
      priceSub: "/month",
      convertedPrice: "~TSh 13,500 / month",
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
          name: "Free Community Feed Posting",
          text: "Publish medical cases, peer insights, and clinical discussions for free."
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
      currency: "$",
      amount: "0",
      priceSub: "monthly fee",
      convertedPrice: "Pay per transaction & ad only",
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
          name: "Pay-Per-Ad Promotion",
          text: "No fixed monthly fee — pay only per transaction made & targeted ad pass."
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
            Patients use Smart Health for free. Professionals pay $5/mo, and B2B roles have zero monthly subscription fees — paying only for completed transactions & targeted ads.
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

              <div className={styles.priceContainer}>
                <div className={styles.planPrice}>
                  <span className={styles.currency}>{plan.currency}</span>
                  <span className={styles.amount}>{plan.amount}</span>
                  <span className={styles.priceSub}> {plan.priceSub}</span>
                </div>
                <div className={styles.convertedBadge}>
                  {plan.convertedPrice}
                </div>
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

            </div>
          ))}
        </div>

        {/* Commercial B2B Feed & Ad Posting Rates */}
        <div className={styles.postingSection}>
          <div className={styles.postingHeader}>
            <div className={styles.postingBadgeWrapper}>
              <Megaphone size={16} />
              <span>Commercial & Product Ad Rates</span>
            </div>
            <h3 className={styles.postingTitle}>Targeted Ad & Commercial Post Rates</h3>
            <p className={styles.postingSubtitle}>
              Patients, Doctors, Nurses & Pharmacists post on the feed for <strong>FREE</strong>. Commercial B2B roles (Importers, Manufacturers, Clinics, Organics) pay standard promotion rates for targeted product ads:
            </p>
          </div>

          <div className={styles.postingGrid}>
            <div className={styles.postingCard}>
              <div className={styles.postingIconWrap}>
                <Clock size={20} />
              </div>
              <span className={styles.postingDuration}>24-Hour Commercial Post</span>
              <div className={styles.postingPriceBox}>
                <span className={styles.postingAmount}>$1</span>
                <span className={styles.postingUnit}>USD / 24hrs</span>
              </div>
              <span className={styles.postingTsh}>~TSh 2,700</span>
              <p className={styles.postingDesc}>Single targeted product ad active on community feeds for 24 hours.</p>
            </div>

            <div className={styles.postingCard}>
              <div className={styles.postingIconWrap}>
                <Calendar size={20} />
              </div>
              <span className={styles.postingDuration}>Weekly Ad Pass</span>
              <div className={styles.postingPriceBox}>
                <span className={styles.postingAmount}>$10</span>
                <span className={styles.postingUnit}>USD / week</span>
              </div>
              <span className={styles.postingTsh}>~TSh 27,000</span>
              <p className={styles.postingDesc}>7-day targeted promo pass with priority feed positioning.</p>
            </div>

            <div className={`${styles.postingCard} ${styles.postingCardFeatured}`}>
              <div className={styles.postingIconWrap}>
                <Layers size={20} />
              </div>
              <span className={styles.postingDuration}>Monthly Unlimited Ad Pass</span>
              <div className={styles.postingPriceBox}>
                <span className={styles.postingAmount}>$30</span>
                <span className={styles.postingUnit}>USD / month</span>
              </div>
              <span className={styles.postingTsh}>~TSh 81,000</span>
              <p className={styles.postingDesc}>30-day unlimited commercial posts & targeted ad campaigns.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

