"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "../legal.module.css";

export default function TermsPage() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Header />
      
      <main className={styles.section}>
        <div className={styles.container}>
          <div className={styles.card}>
            <h1 className={styles.title}>Terms of Service</h1>
            <span className={styles.lastUpdated}>Last Updated: July 19, {currentYear}</span>
            
            <div className={styles.content}>
              <p>
                These Terms of Service ("Terms") govern the relationship between our platform, its users (patients), and the participating businesses and professionals. By accessing or using Smart Health, you agree to comply with and be bound by these Terms.
              </p>

              <h2>1. User Categorization and Eligibility</h2>
              <p>
                Smart Health governs access based on specific verified user roles. You must register under the appropriate node category:
              </p>
              <ul>
                <li><strong>Role-Specific Terms:</strong> Separate guidelines and access controls apply to PATIENTS, IMPORTERS, DISTRIBUTORS, INSTITUTIONS (Clinics/Hospitals), MANUFACTURERS, and COMMUNITY healthcare professionals.</li>
                <li><strong>Minimum Age:</strong> You must be 18 years or older to register an account, book appointments, request emergency ambulance dispatch, or engage in B2B transactions on the platform.</li>
                <li><strong>Account Responsibility:</strong> Users are solely responsible for maintaining the confidentiality of their credentials and all JWT-authenticated sessions and activities under their account.</li>
              </ul>

              <h2>2. Crucial Legal Disclaimers</h2>
              <p>
                <strong>Medical Advice Disclaimer:</strong> Smart Health is a platform facilitating connections and information sharing. It does not provide medical advice. Any content, interaction, or suggestions made by the built-in AI Health Assistant are for informational purposes only and must not be treated as a substitute for professional medical advice, diagnosis, or treatment.
              </p>
              <p>
                <strong>No Professional-Patient Relationship:</strong> Using the platform or interacting with the AI Health Assistant does not establish a doctor-patient relationship. A professional medical relationship is only established directly between verified healthcare professionals and patients during their booked consultations.
              </p>
              <p>
                <strong>Third-Party Services Disclaimer:</strong> Smart Health connects users to third-party pharmacies (via prescription broadcasts) and independent ambulance operators. Smart Health is not liable for the quality of medicines supplied by local pharmacies, nor the actions, response times, or quality of care provided by independent ambulance crews.
              </p>

              <h2>3. Regulatory Compliance & Documentation Verification</h2>
              <ul>
                <li><strong>Mandatory Verification:</strong> All business entities (Manufacturers, Importers, Distributors, Institutions, Organics & Supplements Suppliers) must upload valid regulatory permits, including TFDA (Tanzania Food and Drugs Authority) certificates, Pharmacy Council licenses, BRELA incorporation documents, and TIN numbers. Smart Health reserves the right to suspend accounts that fail validation.</li>
                <li><strong>Prescription Requirements:</strong> Participating pharmacies are legally obligated to review and check valid physical or digital verified prescriptions before dispensing prescription-only medications.</li>
              </ul>

              <h2>4. Transactions, Payments, and Fees</h2>
              <ul>
                <li><strong>B2B Purchasing:</strong> Bulk orders between Institutions and Importers/Manufacturers are subject to agreed delivery timelines and payment terms (Cash on Delivery vs. Credit terms).</li>
                <li><strong>Ambulance Booking Fees:</strong> Emergency ambulance requests require payment processing via integrated mobile money channels (M-Pesa, Tigo Pesa, Airtel Money, HaloPesa) or secure card APIs. Cancellation fees may apply once a carrier is marked "En-Route".</li>
                <li><strong>Platform Transaction Fees:</strong> Platform subscription plans (TSh 80,000/mo for Professionals and TSh 270,000/mo for B2B nodes) and transactional fees (2.5% on patient consultations, 1.8% on B2B procurement, and 1.5% on pharmacy bids) are billed automatically.</li>
              </ul>

              <h2>5. Community Guidelines & Intellectual Property</h2>
              <ul>
                <li><strong>Content Moderation:</strong> Users may not post counterfeit medicine listings, inappropriate media, or abusive content on the Community Feed or B2B directories.</li>
                <li><strong>Targeted Ads Liability:</strong> Importers, manufacturers, and wellness brands running targeted advertisements on the professional feed are solely liable for the accuracy of their pharmaceutical specs, clinical certifications, and catalog pricing.</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
