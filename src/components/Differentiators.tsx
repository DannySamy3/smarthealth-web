"use client";

import styles from "./Differentiators.module.css";

interface Differentiator {
  num: string;
  title: string;
  text: string;
}

export default function Differentiators() {
  const diffs: Differentiator[] = [
    {
      num: "01",
      title: "For the Supply Chain: Counterfeit Eradication",
      text: "Protect the supply chain by eliminating fake medications. Every manufacturer, importer, distributor, and health institution is verified via BRELA, TFDA, and Pharmacy Board credentials, with full batch, strength, and expiry tracking from production line to dispensary."
    },
    {
      num: "02",
      title: "For the Economy: Digital Medical Commerce",
      text: "Digitize B2B pharmaceutical procurement. Importers, distributors, clinics, and local pharmacies manage MOQ controls, review transparent bulk catalogs, and fulfill multi-stage purchase orders directly with integrated mobile payment status tracking."
    },
    {
      num: "03",
      title: "For the Patient: Emergency Care & Consultation",
      text: "Access critical care instantly. Request real-time GPS ambulance dispatches with mobile money payments, book verified doctor appointments, launch 1-on-1 chats, and broadcast prescription photos to receive live stock bids from local pharmacies."
    }
  ];

  return (
    <section className={styles.section} id="why-us">
      <div className="container">
        
        <div className={styles.header}>
          <span className="section-label">Why Choose Smart Health?</span>
          <h2 className={styles.heading}>Value <em>Propositions</em></h2>
        </div>

        <div className={styles.editorial}>
          {diffs.map((diff, idx) => (
            <div key={idx} className={`${styles.row} reveal-on-scroll delay-${idx + 1}`}>
              <span className={styles.number} aria-hidden="true">{diff.num}</span>
              <div className={styles.content}>
                <h3 className={styles.rowTitle}>{diff.title}</h3>
                <p className={styles.rowText}>{diff.text}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
