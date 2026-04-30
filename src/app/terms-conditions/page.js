import Link from "next/link";
import Image from "next/image";
import styles from "./TermsConditions.module.css";

export const metadata = {
  title: "Terms & Conditions - NexGo Packers & Movers",
  description: "Read the terms and conditions for using NexGo Packers & Movers relocation and logistics services.",
};

export default function TermsConditionsPage() {
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
          <h1 className={styles.title}>Terms & Conditions</h1>
          <p className={styles.subtitle}>Last Updated: May 2026</p>
        </div>
      </section>

      {/* Overlapping Content Section */}
      <section className={styles.termsContent}>
        <div className={styles.termsContainer}>
          <Link href="/" className={styles.backButton}>
            ← Back to Home
          </Link>

          <div className={styles.termsSection}>
            <p>
              Welcome to NexGo Packers & Movers. By accessing our website, requesting a quote, or utilizing our packing and relocation services, you agree to be bound by the following terms and conditions. Please read them carefully.
            </p>
          </div>

          <div className={styles.termsSection}>
            <div className={styles.sectionHeader}>
              <div className={styles.iconWrapper}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              </div>
              <h2>1. Service Agreement & Quotes</h2>
            </div>
            <p>Our commitment to providing you with an accurate estimate is based on the information provided during the initial survey:</p>
            <ul className={styles.termsList}>
              <li><strong>Initial Quotes:</strong> Quotes generated via our website or AI tool are preliminary estimates based on volume and distance.</li>
              <li><strong>Final Pricing:</strong> The final binding price is determined only after a physical or verified video survey of the inventory by a NexGo representative.</li>
              <li><strong>Validity:</strong> Quotations are valid for 15 days from the date of issue unless specified otherwise.</li>
            </ul>
          </div>

          <div className={styles.termsSection}>
            <div className={styles.sectionHeader}>
              <div className={styles.iconWrapper}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
              </div>
              <h2>2. Payment Terms</h2>
            </div>
            <p>To ensure a smooth transition, we adhere to a structured payment schedule:</p>
            <ul className={styles.termsList}>
              <li>A booking advance of 20% to 30% of the total estimated cost is required to confirm your moving date.</li>
              <li>The remaining balance must be cleared before the unloading of goods at the destination address.</li>
              <li>We accept payments via Bank Transfer, UPI, Credit/Debit Cards, and verified digital wallets. We do not accept cash payments exceeding standard limits.</li>
            </ul>
          </div>

          <div className={styles.termsSection}>
            <div className={styles.sectionHeader}>
              <div className={styles.iconWrapper}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </div>
              <h2>3. Customer Responsibilities</h2>
            </div>
            <p>For the safety and efficiency of the move, clients are responsible for the following:</p>
            <ul className={styles.termsList}>
              <li><strong>Valuables:</strong> NexGo will not pack or transport jewelry, cash, precious stones, confidential legal documents, or hazardous/flammable materials. These must be moved personally by the client.</li>
              <li><strong>Permissions:</strong> Securing necessary gate passes, parking permissions, and elevator access from building management at both the origin and destination.</li>
              <li><strong>Presence:</strong> The client or an authorized representative must be present during the packing and loading process to verify the inventory list.</li>
            </ul>
          </div>

          <div className={styles.termsSection}>
            <div className={styles.sectionHeader}>
              <div className={styles.iconWrapper}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              <h2>4. Liability & Insurance</h2>
            </div>
            <p>While we guarantee zero-damage packing, transit risks necessitate insurance coverage:</p>
            <ul className={styles.termsList}>
              <li>Comprehensive transit insurance is highly recommended. Uninsured goods are transported entirely at the owner's risk.</li>
              <li>In the rare event of damage to insured goods, claims must be reported to NexGo in writing within 48 hours of delivery.</li>
              <li>NexGo's liability is strictly limited to the terms set forth by the underwritten insurance policy. Mechanical or internal electrical faults in appliances without external physical damage are not covered.</li>
            </ul>
          </div>

          <div className={styles.termsSection}>
            <div className={styles.sectionHeader}>
              <div className={styles.iconWrapper}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
              </div>
              <h2>5. Cancellations & Refunds</h2>
            </div>
            <p>
              We understand plans change. Cancellations made at least 48 hours prior to the scheduled packing date are eligible for a full refund of the booking advance. Cancellations made within 48 hours will incur a cancellation fee equivalent to 10% of the total estimate to cover pre-arranged logistics.
            </p>
          </div>

          <div className={styles.contactBox}>
            <h3>Legal Contact</h3>
            <p>For any legal inquiries or clarifications regarding these terms, please contact our administrative office:</p>
            <p><strong>NexGo Packers & Movers HQ</strong></p>
            <p>123 Transport Nagar, New Delhi - 110001</p>
            <p>Email: legal@nexgo.in</p>
            <p>Phone: +91-9876543210</p>
          </div>
        </div>
      </section>
    </main>
  );
}
