"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import styles from "./FAQ.module.css";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "Who can register on the Smart Health platform?",
      answer: "Smart Health supports verified healthcare actors: Manufacturers, Organics & Supplements Suppliers, Importers, Distributors, Healthcare Institutions (Hospitals, Clinics, Pharmacies), Healthcare Professionals (Doctors, Nurses, Pharmacists), and Patients. Each business/professional profile must be verified before gaining network access."
    },
    {
      question: "How does pharmaceutical drug traceability work?",
      answer: "Manufacturers generate secure drug batches with unique identifiers. Importers, distributors, and clinics scan these identifiers at every transfer point, creating an immutable timeline of custody and cold-chain thermal logs."
    },
    {
      question: "Are clearance documents and permits secure?",
      answer: "Yes, security is a core pillar. Importers and pharmacies upload compliance documentation (such as TFDA permits or Pharmacy Board certifications) directly to our encrypted storage vaults. These uploads are audited by our compliance verification team before profiles are activated."
    },
    {
      question: "Is there developer API support and database integration?",
      answer: "Yes. The platform is designed with developers in mind. The backend codebase features an Express TypeScript API, a relational PostgreSQL schema managed via Prisma migrations, Docker orchestration setup, and Socket.IO WebSockets for live status updates. Standard endpoints allow easy integration with clinic systems."
    }
  ];

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={`${styles.faqSection} section`} id="faq">
      <div className="container">
        
        <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 5rem auto" }}>
          <span className="section-label">Support Center</span>
          <h2 style={{ fontSize: "2.75rem", fontWeight: 800, marginBottom: "1.25rem" }}>Frequently Asked <em>Questions</em></h2>
          <p style={{ fontSize: "1.15rem", color: "var(--text-secondary)" }}>
            Got questions about how the Smart Health supply network operates? We have gathered answers to the most common inquiries.
          </p>
        </div>

        <div className={`${styles.accordionContainer} reveal-on-scroll`}>
          {faqs.map((faq, idx) => {
            const isActive = activeIndex === idx;
            return (
              <div 
                key={idx} 
                className={`${styles.item} ${isActive ? styles.itemActive : ""}`}
                id={`faq-item-${idx}`}
              >
                <button 
                  className={styles.trigger} 
                  onClick={() => handleToggle(idx)}
                  aria-expanded={isActive}
                  aria-controls={`faq-content-${idx}`}
                  id={`faq-btn-${idx}`}
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`${styles.icon} ${isActive ? styles.iconRotated : ""}`} size={18} />
                </button>
                
                <div 
                  id={`faq-content-${idx}`}
                  className={`${styles.contentWrapper} ${isActive ? styles.contentWrapperOpen : ""}`}
                  aria-hidden={!isActive}
                >
                  <div className={styles.contentInner}>
                    <div className={styles.content}>
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
