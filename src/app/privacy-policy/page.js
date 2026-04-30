import Link from "next/link";
import Image from "next/image";
import styles from "./PrivacyPolicy.module.css";

export const metadata = {
  title: "Privacy Policy - NexGo Packers & Movers",
  description: "Learn how NexGo Packers & Movers collects, uses, and protects your personal data.",
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      {/* Premium Header with Background */}
      <section className={styles.pageHeader}>
        <div className={styles.backgroundWrapper}>
          <Image
            src="/images/hero-bg.jpg"
            alt="Logistics Background"
            fill
            className={styles.backgroundImage}
            priority
          />
          <div className={styles.overlay} />
        </div>
        <div className={styles.headerContainer}>
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.subtitle}>Last Updated: May 2026</p>
        </div>
      </section>

      {/* Overlapping Content Section */}
      <section className={styles.policyContent}>
        <div className={styles.policyContainer}>
          <Link href="/" className={styles.backButton}>
            ← Back to Home
          </Link>

          <div className={styles.policySection}>
            <p>
              At NexGo Packers & Movers, we prioritize your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard the data you provide when using our website and relocation services.
            </p>
          </div>

          <div className={styles.policySection}>
            <div className={styles.sectionHeader}>
              <div className={styles.iconWrapper}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="16" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
              </div>
              <h2>1. Information We Collect</h2>
            </div>
            <p>To provide you with accurate moving quotes and seamless logistical services, we may collect the following information:</p>
            <ul className={styles.policyList}>
              <li><strong>Personal Identification:</strong> Name, email address, and phone number.</li>
              <li><strong>Relocation Details:</strong> Current pickup address, destination address, and inventory details.</li>
              <li><strong>Technical Data:</strong> IP address, browser type, and interaction data via cookies.</li>
            </ul>
          </div>

          <div className={styles.policySection}>
            <div className={styles.sectionHeader}>
              <div className={styles.iconWrapper}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                </svg>
              </div>
              <h2>2. How We Use Your Information</h2>
            </div>
            <p>The information we collect is strictly used to facilitate your relocation:</p>
            <ul className={styles.policyList}>
              <li>Provide accurate estimates and quotes for packing and moving services.</li>
              <li>Coordinate logistics, schedule pickups, and manage transit tracking.</li>
              <li>Communicate with you regarding your move, including customer support and updates.</li>
              <li>Improve our website performance and optimize user experience.</li>
            </ul>
          </div>

          <div className={styles.policySection}>
            <div className={styles.sectionHeader}>
              <div className={styles.iconWrapper}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h2>3. Data Protection & Security</h2>
            </div>
            <p>
              We implement robust security measures to maintain the safety of your personal information. Your data is stored on secure networks and is only accessible by a limited number of authorized NexGo logistics coordinators who require the information to execute your move.
            </p>
          </div>

          <div className={styles.policySection}>
            <div className={styles.sectionHeader}>
              <div className={styles.iconWrapper}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                  <line x1="1" y1="1" x2="23" y2="23"></line>
                </svg>
              </div>
              <h2>4. Third-Party Disclosure</h2>
            </div>
            <p>
              We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you (such as transit insurance providers), so long as those parties agree to keep this information confidential.
            </p>
          </div>

          <div className={styles.policySection}>
            <div className={styles.sectionHeader}>
              <div className={styles.iconWrapper}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h2>5. Your Rights</h2>
            </div>
            <p>
              You have the right to request access to the personal data we hold about you, request corrections to any inaccurate data, or request the deletion of your data from our systems once your relocation is complete and all accounts are settled.
            </p>
          </div>

          <div className={styles.policySection}>
            <div className={styles.sectionHeader}>
              <div className={styles.iconWrapper}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="23 4 23 10 17 10"></polyline>
                  <polyline points="1 20 1 14 7 14"></polyline>
                  <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
                </svg>
              </div>
              <h2>6. Changes to this Policy</h2>
            </div>
            <p>
              NexGo reserves the right to update this Privacy Policy at any time. Any changes will be posted on this page with an updated modification date. We encourage you to review this policy periodically.
            </p>
          </div>

          <div className={styles.contactBox}>
            <h3>Contacting Us</h3>
            <p>If there are any questions regarding this privacy policy, you may contact us using the information below:</p>
            <p><strong>NexGo Packers & Movers</strong></p>
            <p>123 Transport Nagar, New Delhi - 110001</p>
            <p>Email: info@nexgo.in</p>
            <p>Phone: +91-9876543210</p>
          </div>
        </div>
      </section>
    </main>
  );
}
