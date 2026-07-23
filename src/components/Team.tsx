"use client";

import { 
  UserCheck, 
  Code, 
  Calculator, 
  ShieldCheck, 
  Stethoscope, 
  Lock, 
  LineChart,
  Sparkles
} from "lucide-react";
import styles from "./Team.module.css";

interface TeamMember {
  name: string;
  role: string;
  badge: string;
  image?: string;
  objectPosition?: string;
  icon: React.ReactNode;
  bio: string;
  isPlaceholder?: boolean;
}

export default function Team() {
  const members: TeamMember[] = [
    {
      name: "Jullu Masatu",
      role: "Sales & Medical Operations",
      badge: "Medical & Pharmacy Lead",
      image: "/images/team/jullu_masatu.png",
      objectPosition: "center 10%",
      icon: <Stethoscope size={18} />,
      bio: "Co-Founder leading B2B sales strategy, medical partnerships, and regulatory TMDA/TFDA compliance operations."
    },
    {
      name: "Daniel Ntunduye",
      role: "Software & Technology Lead",
      badge: "CTO & Platform Architect",
      image: "/images/team/daniel_ntunduye.jpg",
      objectPosition: "center 10%",
      icon: <Code size={18} />,
      bio: "Co-Founder architecting core software infrastructure, mobile app ecosystem, real-time telemetry, and data engines."
    },
    {
      name: "Samwel Soka",
      role: "Finance & Accounting Lead",
      badge: "CFO & Governance Lead",
      image: "/images/team/samwel_sokka.jpg",
      objectPosition: "center 28%",
      icon: <Calculator size={18} />,
      bio: "Co-Founder managing financial governance, institutional accounting standards, fiscal compliance, and capital allocation."
    }
  ];

  return (
    <section className={styles.section} id="about">
      <div className="container">
        
        {/* Section Header */}
        <div className={`${styles.header} reveal-on-scroll`}>
          <span className="section-label">About Smart Health</span>
          <h2 className={styles.heading}>
            Pioneering Digital Health <em>Infrastructure</em>
          </h2>
          <p className={styles.description}>
            Smart Health was founded by a multidisciplinary team combining medical authority, advanced software engineering, and financial governance to build Africa's most trusted healthcare network.
          </p>
        </div>

        {/* Founders Grid */}
        <div className={styles.grid}>
          {members.map((member, idx) => (
            <div 
              key={idx} 
              className={`${styles.card} glass-card reveal-on-scroll delay-${idx + 1}`}
            >
              {/* Image Container with Gradient Overlay */}
              <div className={styles.imageWrapper}>
                {member.image ? (
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className={styles.memberImage} 
                    style={member.objectPosition ? { objectPosition: member.objectPosition } : undefined}
                  />
                ) : (
                  <div className={styles.placeholderAvatar}>
                    <div className={styles.placeholderRing}>
                      <div className={styles.placeholderIcon}>
                        {member.icon}
                      </div>
                    </div>
                    <span className={styles.placeholderName}>Samwel Sokka</span>
                    <span className={styles.placeholderText}>Photo Uploading Soon</span>
                  </div>
                )}
                <div className={styles.imageOverlay} />
                
                {/* Expert Badge Overlay */}
                <div className={styles.badgeOverlay}>
                  {member.icon}
                  <span>{member.badge}</span>
                </div>
              </div>

              {/* Card Details Body */}
              <div className={styles.cardBody}>
                <div className={styles.shareholderPill}>
                  <ShieldCheck size={13} className={styles.shieldIcon} />
                  <span>Founding Shareholder</span>
                </div>

                <h3 className={styles.memberName}>{member.name}</h3>
                <span className={styles.memberRole}>{member.role}</span>
                <p className={styles.memberBio}>{member.bio}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Executive Commitment Pillars */}
        <div className={`${styles.pillarsBar} reveal-on-scroll`}>
          <div className={styles.pillarItem}>
            <div className={`${styles.pillarIcon} ${styles.iconBlue}`}>
              <Stethoscope size={20} />
            </div>
            <div>
              <h4 className={styles.pillarTitle}>Medical Authority</h4>
              <p className={styles.pillarDesc}>Verified practitioner credentials & TMDA/TFDA regulatory vaults</p>
            </div>
          </div>

          <div className={styles.pillarDivider} />

          <div className={styles.pillarItem}>
            <div className={`${styles.pillarIcon} ${styles.iconIndigo}`}>
              <Lock size={20} />
            </div>
            <div>
              <h4 className={styles.pillarTitle}>Technical Innovation</h4>
              <p className={styles.pillarDesc}>High-availability cloud architecture, telemetry & encrypted chats</p>
            </div>
          </div>

          <div className={styles.pillarDivider} />

          <div className={styles.pillarItem}>
            <div className={`${styles.pillarIcon} ${styles.iconCyan}`}>
              <LineChart size={20} />
            </div>
            <div>
              <h4 className={styles.pillarTitle}>Fiscal Governance</h4>
              <p className={styles.pillarDesc}>Transparent B2B order settlement, audit trails & financial compliance</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
