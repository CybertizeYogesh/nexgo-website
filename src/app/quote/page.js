"use client";

import Image from "next/image";
import styles from "./Quote.module.css";

export default function QuotePage() {
  // Basic prevent default for the UI phase. Will be wired to backend later.
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your quote request has been submitted. Our team will contact you shortly.");
  };

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
          <h1 className={styles.title}>Get a Free Quote</h1>
          <p className={styles.subtitle}>
            Fill out the form below with your moving details, and our logistics experts will provide you with a customized, binding estimate within 30 minutes.
          </p>
        </div>
      </section>

      {/* Split Layout Section */}
      <section className={styles.quoteContent}>
        <div className={styles.quoteWrapper}>
          {/* Left Side: Interactive Form */}
          <div className={styles.formContainer}>
            <div className={styles.formHeader}>
              <h2>Your Relocation Details</h2>
              <p>Please provide accurate information for the best estimate.</p>
            </div>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGrid}>
                <div className={styles.inputGroup}>
                  <label htmlFor="fullName" className={styles.label}>Full Name</label>
                  <input type="text" id="fullName" className={styles.input} placeholder="John Doe" required />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="phone" className={styles.label}>Phone Number</label>
                  <input type="tel" id="phone" className={styles.input} placeholder="+91 98765 43210" required />
                </div>
                <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                  <label htmlFor="email" className={styles.label}>Email Address</label>
                  <input type="email" id="email" className={styles.input} placeholder="john@example.com" required />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="origin" className={styles.label}>Moving From (City)</label>
                  <input type="text" id="origin" className={styles.input} placeholder="e.g. Mumbai" required />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="destination" className={styles.label}>Moving To (City)</label>
                  <input type="text" id="destination" className={styles.input} placeholder="e.g. Bangalore" required />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="date" className={styles.label}>Tentative Moving Date</label>
                  <input type="date" id="date" className={styles.input} required />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="service" className={styles.label}>Service Required</label>
                  <select id="service" className={styles.select} defaultValue="" required>
                    <option value="" disabled>Select a Service...</option>
                    <option value="home">Home Shifting</option>
                    <option value="office">Office Relocation</option>
                    <option value="commercial">Commercial Moving</option>
                    <option value="vehicle">Vehicle Transport</option>
                    <option value="storage">Storage & Warehousing</option>
                  </select>
                </div>
                <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                  <label htmlFor="message" className={styles.label}>Inventory Size & Special Requirements</label>
                  <textarea id="message" className={styles.textarea} placeholder="E.g., 2 BHK apartment, includes a grand piano and delicate glassware..."></textarea>
                </div>
                <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                  <button type="submit" className={styles.submitBtn}>Generate My Quote</button>
                </div>
              </div>
            </form>
          </div>

          {/* Right Side: Trust & Contact Panel */}
          <div className={styles.infoContainer}>
            <div className={styles.infoSection}>
              <h3>Why Choose NexGo?</h3>
              <ul className={styles.trustList}>
                <li>
                  <svg className={styles.checkIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span><strong>100% Price Transparency:</strong> No hidden fees or surprise charges on moving day.</span>
                </li>
                <li>
                  <svg className={styles.checkIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span><strong>Zero Damage Promise:</strong> Premium 3-layer packing for all delicate items.</span>
                </li>
                <li>
                  <svg className={styles.checkIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span><strong>Live GPS Tracking:</strong> Monitor your belongings in real-time from your phone.</span>
                </li>
                <li>
                  <svg className={styles.checkIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span><strong>Dedicated Coordinator:</strong> A single point of contact throughout your entire move.</span>
                </li>
              </ul>
            </div>
            <div className={styles.infoSection}>
              <h3>Need Immediate Help?</h3>
              <div className={styles.contactDetail}>
                <div className={styles.contactIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <span>+91 98765 43210</span>
              </div>
              <div className={styles.contactDetail}>
                <div className={styles.contactIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <span>quotes@nexgo.in</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
