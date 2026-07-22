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
      text: "We protect lives by eliminating fake medications. Every importer, distributor, manufacturer, and pharmacy is legally verified via BRELA and TFDA credentials, and every batch number is tracked from production to shelf."
    },
    {
      num: "02",
      title: "For the Economy: Digital Medical Commerce",
      text: "Digitize the informal medical sector. Small clinics, pharmacies, and local dispensaries can procure bulk items safely, review transparent catalogs, and request direct B2B shipments without fragmented middleman pricing."
    },
    {
      num: "03",
      title: "For the Patient: Emergency Anxiety Erased",
      text: "Access critical care immediately. Whether you need an ambulance dispatch at midnight, a virtual telemedicine consultation, or a broadcast order for a hard-to-find prescription, it takes just a single tap."
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
            <div key={idx} className={`${styles.row} animate-fade-up`}>
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
