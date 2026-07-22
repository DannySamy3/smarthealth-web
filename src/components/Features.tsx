"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import PhoneMockup from "./PhoneMockup";
import styles from "./Features.module.css";

type RoleType = "community" | "institution" | "organics" | "manufacturer" | "importer" | "distributor";

interface RoleDetail {
  id: RoleType;
  label: string;
  badge: string;
  title: string;
  description: string;
  bullets: string[];
}

export default function Features() {
  const [activeRole, setActiveRole] = useState<RoleType>("community");

  const rolesList: { id: RoleType; label: string }[] = [
    { id: "community", label: "Community Feed" },
    { id: "institution", label: "Institution Node" },
    { id: "organics", label: "Organics & Supps" },
    { id: "manufacturer", label: "Manufacturer" },
    { id: "importer", label: "Importer" },
    { id: "distributor", label: "Distributor" }
  ];

  const roleDetails: Record<RoleType, RoleDetail> = {
    community: {
      id: "community",
      label: "Community Feed",
      badge: "Shared Care Network",
      title: "Collaborative Social Health & Media Feed",
      description: "The core of Smart Health's user interaction. Verified healthcare professionals and patients connect in open chats, discuss health topics, and share rich media posts containing images and videos.",
      bullets: [
        "Share health topics with images & videos",
        "Direct patient-to-professional chat rooms",
        "Verified medical answers & feeds",
        "Find My Meds & emergency ambulance pings"
      ]
    },
    institution: {
      id: "institution",
      label: "Institution Node",
      badge: "B2B Institution Hub",
      title: "Hospitals & Clinic Procurement Control",
      description: "Hospitals, large clinics, and medical facilities manage bulk pharmaceutical orders, track shipments in real-time, browse supplier catalogs, and coordinate ward shelf inventories.",
      bullets: [
        "Direct-to-source supply purchasing",
        "Internal inventory & shelf audits",
        "Low stock levels emergency warning alerts",
        "Digital custody shipment handshakes"
      ]
    },
    organics: {
      id: "organics",
      label: "Organics & Supps",
      badge: "Organics & Supplements Node",
      title: "Wellness & Organic Formulations Catalogs",
      description: "Natural supplement suppliers, vitamin dealers, and wellness brands upload organic catalog lists, manage retail orders, and verify purity compliance markers.",
      bullets: [
        "Digital organic bulk catalogs",
        "Vitamin purity verification checks",
        "Active batch packaging tracking",
        "Direct B2B supply lines"
      ]
    },
    manufacturer: {
      id: "manufacturer",
      label: "Manufacturer",
      badge: "B2B Production Node",
      title: "Serialization & Clinical Transparency",
      description: "Manufacturers generate secure drug batches. List chemical specifications, contraindications, dosages, and quality trial data to build ultimate trust with B2B institutional buyers.",
      bullets: [
        "Lot/Batch serialization tracking",
        "Deep pharmaceutical specs",
        "Contraindication logs",
        "Trial certifications uploads"
      ]
    },
    importer: {
      id: "importer",
      label: "Importer",
      badge: "B2B IMPORT VAULT & SOURCING",
      title: "Customs Permitting, Global Sourcing & Targeted Ads",
      description: "Importers source bulk products from manufacturers, manage TMDA/TFDA regulatory vaults, maintain batch inventory, and distribute directly to hospitals, clinics, and pharmacies.",
      bullets: [
        "TMDA & TFDA compliance vaults",
        "Upstream manufacturer import orders",
        "Batch & strength inventory management",
        "Downstream B2B sales & distribution",
        "Role-targeted B2B advertising feed"
      ]
    },
    distributor: {
      id: "distributor",
      label: "Distributor",
      badge: "B2B Logistics Node",
      title: "Cold Chain Telemetry & GPS Routes",
      description: "Logistics companies trace freight. IoT temperature and speed sensors stream real-time data straight to clinic dashboards, shielding stocks from cold chain breaches.",
      bullets: [
        "GPS tracking coordinate lines",
        "Cold chain thermal logs",
        "Carrier telemetry sync",
        "ETA route recalculation"
      ]
    }
  };

  const handleRoleChange = (roleId: RoleType) => {
    setActiveRole(roleId);
  };

  const currentDetail = roleDetails[activeRole];

  return (
    <section className={styles.section} id="ecosystem-demo">
      <div className="container">
        
        <div className={styles.header}>
          <span className="section-label">Interactive Showcase</span>
          <h2 className={styles.heading}>Who We <em>Serve</em></h2>
          <p className={styles.description}>
            Smart Health connects Patients, Healthcare Professionals, Clinics, and B2B Suppliers into a single synchronized healthcare network. Select a role below to explore.
          </p>
        </div>

        <div className={styles.grid}>
          
          {/* Details & Selector Column */}
          <div className={`${styles.leftColumn} animate-fade-up`}>
            <span className={styles.selectorTitle}>Select a Node Workspace</span>
            
            <div className={styles.tabs} id="demo-role-tabs">
              {rolesList.map((role) => (
                <button
                  key={role.id}
                  className={`${styles.tabBtn} ${activeRole === role.id ? styles.activeTabBtn : ""}`}
                  onClick={() => handleRoleChange(role.id)}
                  id={`tab-btn-${role.id}`}
                >
                  {role.label}
                </button>
              ))}
            </div>

            {/* Display Detail Pane */}
            <div className={`${styles.detailCard} glass-card`}>
              <span className={styles.detailBadge}>{currentDetail.badge}</span>
              <h3 className={styles.detailTitle}>{currentDetail.title}</h3>
              <p className={styles.detailDesc}>{currentDetail.description}</p>
              
              <div className={styles.bullets}>
                {currentDetail.bullets.map((bullet, idx) => (
                  <div key={idx} className={styles.bulletItem}>
                    <Check size={14} strokeWidth={3} className={styles.bulletIcon} />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Phone Mockup Column */}
          <div className={styles.visualColumn}>
            <PhoneMockup activeRole={activeRole} />
          </div>

        </div>

      </div>
    </section>
  );
}
