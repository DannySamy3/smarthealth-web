"use client";

import { UserCheck, Code, Calculator, Mail, ShieldCheck } from "lucide-react";
import styles from "./Team.module.css";

interface TeamMember {
  name: string;
  role: string;
  badge: string;
  image?: string;
  icon: React.ReactNode;
  bio: string;
  isPlaceholder?: boolean;
}

export default function Team() {
  const members: TeamMember[] = [
    {
      name: "Jullu Masatu",
      role: "Shareholder & Medical Lead",
      badge: "Sales & Pharmacy Expert",
      image: "/images/team/jullu_masatu.png",
      icon: <UserCheck size={18} />,
      bio: "Co-Founder and Shareholder leading sales strategy, medical partnerships, and regulatory pharmacy operations across the Smart Health network."
    },
    {
      name: "Daniel Ntunduye",
      role: "Shareholder & Technical Lead",
      badge: "Software Developer & CTO",
      image: "/images/team/daniel_ntunduye.jpg",
      icon: <Code size={18} />,
      bio: "Co-Founder and Shareholder architecting the core software infrastructure, mobile application ecosystem, and B2B data security engines."
    },
    {
      name: "Samwel Sokka",
      role: "Shareholder & Finance Lead",
      badge: "Chief Financial Officer",
      icon: <Calculator size={18} />,
      bio: "Co-Founder and Shareholder managing financial strategy, institutional accounting, fiscal compliance, and audit operations across Smart Health.",
      isPlaceholder: true
    }
  ];

  return (
    <section className={styles.section} id="about">
      <div className="container">
        
        <div className={`${styles.header} reveal-on-scroll`}>
          <span className="section-label">About Us</span>
          <h2 className={styles.heading}>About Smart Health & <em>Founders</em></h2>
          <p className={styles.description}>
            Smart Health is driven by a multidisciplinary leadership team combining medical expertise, cutting-edge software engineering, and financial governance to transform healthcare across Africa.
          </p>
        </div>

        <div className={styles.grid}>
          {members.map((member, idx) => (
            <div 
              key={idx} 
              className={`${styles.card} glass-card reveal-on-scroll delay-${idx + 1}`}
            >
              <div className={styles.imageContainer}>
                {member.image ? (
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className={styles.memberImage} 
                  />
                ) : (
                  <div className={styles.placeholderAvatar}>
                    <div className={styles.placeholderIcon}>
                      {member.icon}
                    </div>
                    <span className={styles.placeholderText}>Photo Coming Soon</span>
                  </div>
                )}
                
                <div className={styles.roleTag}>
                  {member.icon}
                  <span>{member.badge}</span>
                </div>
              </div>

              <div className={styles.cardContent}>
                <div className={styles.shareholderBadge}>
                  <ShieldCheck size={13} />
                  <span>Shareholder</span>
                </div>

                <h3 className={styles.name}>{member.name}</h3>
                <span className={styles.roleTitle}>{member.role}</span>
                <p className={styles.bio}>{member.bio}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
