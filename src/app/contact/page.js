"use client";
import React from "react";
import CTA from "@/components/CTA";
import styles from "@/styles/Contact.module.css";

export default function ContactPage() {
  return (
    <main className={styles.mainWrapper}>
      <section className={styles.heroSection}>
        <div className={styles.glowOrb}></div>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <span className={styles.topBadge}>24/7 Support</span>
            <h1 className={styles.heroTitle}>Get in Touch</h1>
            <p className={styles.heroSubtitle}>
              Whether you need a custom relocation quote or have a question about our enterprise logistics, our team is ready to assist you.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.contactGrid}>
            
            <div className={styles.infoColumn}>
              <div className={styles.infoCard}>
                <div className={styles.iconWrapper}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className={styles.infoText}>
                  <h3>Head Office</h3>
                  <p>A-102, Bajrang Complex, Opp McDonald, Kadodara Road, N.H. No-08, Umbhel, Surat - 394327, Gujarat, India</p>
                </div>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.iconWrapper}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div className={styles.infoText}>
                  <h3>Direct Contact</h3>
                  <p><strong>Phone:</strong> <a href="tel:+917949329100">+91-7949329100</a></p>
                  <p><strong>Email:</strong> <a href="mailto:shreedurgatranslogistic@gmail.com">shreedurgatranslogistic@gmail.com</a></p>
                </div>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.iconWrapper}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <div className={styles.infoText}>
                  <h3>Working Hours</h3>
                  <p>Monday - Sunday<br/>7:00 AM - 9:45 PM</p>
                </div>
              </div>
            </div>

            <div className={styles.formColumn}>
              <div className={styles.formHeader}>
                <h2>Send a Message</h2>
                <p>Fill out the form below and our logistics managers will get back to you within 30 minutes.</p>
              </div>
              
              <form className={styles.contactForm}>
                <div className={styles.inputRow}>
                  <div className={styles.inputGroup}>
                    <label>Full Name</label>
                    <input type="text" placeholder="John Doe" required />
                  </div>
                  <div className={styles.inputGroup}>
                    <label>Phone Number</label>
                    <input type="tel" placeholder="+91 98765 43210" required />
                  </div>
                </div>

                <div className={styles.inputRow}>
                  <div className={styles.inputGroup}>
                    <label>Email Address</label>
                    <input type="email" placeholder="john@example.com" required />
                  </div>
                  <div className={styles.inputGroup}>
                    <label>Service Required</label>
                    {/* FIXED: Removed 'selected' from option, added 'defaultValue' to select */}
                    <select required defaultValue="">
                      <option value="" disabled>Select a Service</option>
                      <option value="residential">Residential Shifting</option>
                      <option value="commercial">Commercial/Office Move</option>
                      <option value="vehicle">Vehicle Transport</option>
                      <option value="storage">Warehousing & Storage</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                  </div>
                </div>

                <div className={styles.inputGroup}>
                  <label>Your Message / Requirements</label>
                  <textarea rows="4" placeholder="Tell us about your moving date, locations, and specific needs..." required></textarea>
                </div>

                <button type="submit" className={styles.submitBtn}>Submit Request ➔</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.mapSection}>
        <div className={styles.container}>
          <div className={styles.mapContainer}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.65594002685!2d72.9774645!3d21.1660855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f4a3bcfffff%3A0x6b6c00d43f05c412!2sKadodara%2C%20Gujarat%20394327!5e0!3m2!1sen!2sin!4v1714240000000!5m2!1sen!2sin" 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className={styles.mapIframe}
            ></iframe>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}