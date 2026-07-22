"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "../legal.module.css";

export default function PrivacyPage() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Header />
      
      <main className={styles.section}>
        <div className={styles.container}>
          <div className={styles.card}>
            <h1 className={styles.title}>Privacy Policy</h1>
            <span className={styles.lastUpdated}>Last Updated: July 19, {currentYear}</span>
            
            <div className={styles.content}>
              <p>
                Smart Health processes sensitive medical and personal data. This Privacy Policy details exactly how we capture, process, protect, and share this information to ensure security and regulatory compliance.
              </p>

              <h2>1. Types of Data Collected</h2>
              <ul>
                <li><strong>Personal Information:</strong> Full name, email address, phone number, physical address, and profile pictures.</li>
                <li><strong>Sensitive Health Data:</strong> Scans/photos of medical prescriptions uploaded during "Find My Meds" broadcasts, appointment reasons, and medical histories discussed with doctors or input to the AI Health Assistant.</li>
                <li><strong>Professional & Business Data:</strong> National ID cards, professional qualifications/medical certs, business registration documents (BRELA, TFDA, Pharmacy Council licenses), bank statements, and facility images.</li>
                <li><strong>Geographical Data:</strong> Live GPS coordinates (latitude/longitude) used to match patients with local pharmacies, route emergency ambulances, or display local professionals.</li>
                <li><strong>Payment Details:</strong> Transaction records (amounts, methods, and statuses). Raw credit/debit card numbers are not stored on our servers; they are processed entirely through secure compliance-certified third-party payment APIs.</li>
              </ul>

              <h2>2. How the Data is Used</h2>
              <p>
                We use collected information to run and secure the health network:
              </p>
              <ul>
                <li>To match prescription broadcast requests with local pharmacies using GPS radius metrics.</li>
                <li>To route emergency ambulance dispatch units to your exact location.</li>
                <li>To audit the credentials of healthcare professionals and B2B pharmaceutical operations.</li>
                <li>To train and improve the AI Health Assistant (all health logs used for analysis are strictly anonymized, scrubbed of PII, and secured).</li>
                <li>To deliver targeted advertisements to specific roles (e.g. displaying clinical specs to Hospital Directors).</li>
              </ul>

              <h2>3. Data Sharing & Third-Party Disclosures</h2>
              <ul>
                <li><strong>With Pharmacies:</strong> When a user broadcasts a prescription request, the drug list is shared with nearby pharmacies.</li>
                <li><strong>With Ambulance Providers:</strong> Sharing GPS pickup locations with independent ambulance operators for dispatch routing.</li>
                <li><strong>With Regulatory Authorities:</strong> Sharing verification credentials with the Ministry of Health, TFDA, or Pharmacy Council under legal court orders or audit compliance mandates.</li>
              </ul>

              <h2>4. Data Security and Retention</h2>
              <p>
                All data transfers use secure HTTPS protocols. Account passwords are encrypted using secure hashing, and database records use industry-standard encryption (AES-256). Active sessions use tokenized JWT security.
              </p>
              <p>
                <strong>Data Retention:</strong> We store sensitive medical records, prescription images, and business papers only as long as necessary to fulfill app actions, maintain legal audits, or until an account deletion request is processed.
              </p>

              <h2>5. User Rights & Compliance</h2>
              <p>
                Smart Health complies with international data standards (HIPAA security rules, GDPR) and local regulations, including the <strong>Tanzania Personal Data Protection Act</strong>.
              </p>
              <p>
                Users have the right to access, review, update, export, or request the complete deletion of their personal profiles and sensitive medical history from our servers.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
