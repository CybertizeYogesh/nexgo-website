"use client";

import React, { useState } from "react";
import Image from "next/image";
import CTA from "@/components/CTA";
import styles from "@/styles/WarehouseServices.module.css";

export default function WarehouseServicesPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

  const faqs = [
    { q: "Is there a minimum or maximum time limit for storage?", a: "We offer highly flexible terms. You can store your items for as little as one week during a transitional move, or for several years for long-term safe-keeping." },
    { q: "Are your warehouses climate-controlled?", a: "Yes, our premium storage vaults are strictly temperature and humidity-controlled to protect sensitive items like fine art, electronics, and antique wooden furniture from warping or mold." },
    { q: "Can I access my stored items while they are in the warehouse?", a: "Absolutely. With 48 hours notice, we can prepare your storage vault for a secure visitation, or we can deliver specific requested items directly to you." }
  ];

  return (
    <main className={styles.mainWrapper}>
      <section className={styles.heroBanner}>
        <div className={styles.heroOverlay}>
          <div className={styles.heroContent}>
            <span className={styles.badge}>Secure Storage</span>
            <h1>Premium Warehouse Services</h1>
            <p>Climate-controlled, 24/7 CCTV monitored storage facilities for your short and long-term security needs.</p>
          </div>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.twoColumnLayout}>
            <div className={styles.leftContent}>
              <h2 className={styles.sectionTitle}>Absolute Security for Your Assets</h2>
              <p className={styles.description}>Sometimes your new space isn't quite ready, or you simply need to downsize securely. NexGo provides state-of-the-art warehousing solutions designed for the absolute preservation of your household or commercial assets. We don't just store items; we protect them in specialized, private vaults.</p>

              <div className={styles.mainImageWrapper}>
                <Image src="/images/services/warehouse-main.webp" alt="Clean and secure warehouse facility" width={800} height={450} className={styles.contentImage} priority />
              </div>

              <h3 className={styles.subTitle}>Enterprise-Grade Storage Infrastructure</h3>
              <p className={styles.description}>Our facilities are built to international safety standards, featuring multi-layered security protocols, proactive pest control, and strict climate regulation.</p>

              <div className={styles.featureGrid}>
                <div className={styles.featureItem}>
                  <h4>Climate Control</h4>
                  <p>Regulated humidity and temperature to prevent wood warping and fabric mold.</p>
                </div>
                <div className={styles.featureItem}>
                  <h4>24/7 Surveillance</h4>
                  <p>Round-the-clock CCTV monitoring, biometric access, and active fire suppression systems.</p>
                </div>
              </div>

              <div className={styles.staggeredImageGrid}>
                <div className={styles.imageHoverContainer}>
                  <Image src="/images/services/warehouse-storage.webp" alt="Secure wooden storage vaults" width={380} height={280} className={styles.contentImage} />
                </div>
                <div className={`${styles.imageHoverContainer} ${styles.imageOffset}`}>
                  <Image src="/images/services/warehouse-security.webp" alt="High-tech security and CCTV" width={380} height={280} className={styles.contentImage} />
                </div>
              </div>

              <h3 className={styles.subTitle}>The Storage Process</h3>
              <div className={styles.processTimeline}>
                {[
                  { n: "1", t: "Inventory Assessment", d: "Detailed digital cataloging and volume calculation of items to be stored." },
                  { n: "2", t: "Specialized Export Packing", d: "Items are packed using anti-moisture silica gels and long-term preservation wraps." },
                  { n: "3", t: "Secure Transport", d: "Moving your assets from your location directly to our nearest secure facility." },
                  { n: "4", t: "Vault Sealing", d: "Items are loaded into dedicated wooden vaults and sealed with a unique ID." },
                  { n: "5", t: "On-Demand Retrieval", d: "Request delivery of your entire vault or specific items whenever you are ready." }
                ].map((step, i) => (
                  <div key={i} className={styles.processStep}>
                    <div className={styles.stepNum}>{step.n}</div>
                    <div className={styles.stepText}>
                      <h4>{step.t}</h4>
                      <p>{step.d}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className={styles.subTitle}>Frequently Asked Questions</h3>
              <div className={styles.faqWrapper}>
                {faqs.map((faq, i) => (
                  <div key={i} className={`${styles.faqItem} ${openFaq === i ? styles.faqOpen : ''}`} onClick={() => toggleFaq(i)}>
                    <div className={styles.faqHeader}>
                      <h4>{faq.q}</h4>
                      <span className={styles.faqIcon}>{openFaq === i ? '−' : '+'}</span>
                    </div>
                    <div className={styles.faqBody}><p>{faq.a}</p></div>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.rightSidebar}>
              <div className={styles.sidebarInner}>
                <div className={styles.sidebarWidget}>
                  <h3 className={styles.widgetTitleDark}>Get a Storage Quote</h3>
                  <form className={styles.sidebarForm}>
                    <input type="text" placeholder="Your Name" />
                    <input type="text" placeholder="Phone Number" />
                    <input type="text" placeholder="Estimated Volume (BHK/Boxes)" />
                    <input type="text" placeholder="Approximate Duration (Months)" />
                    <button type="submit" className={styles.quoteButton}>Calculate Cost</button>
                  </form>
                </div>

                <div className={styles.sidebarWidget}>
                  <div className={styles.trustSeals}>
                    <div className={styles.seal}>
                      <span className={styles.sealIcon}>🎥</span>
                      <div>
                        <strong>24/7 CCTV</strong>
                        <p>Active Surveillance</p>
                      </div>
                    </div>
                    <div className={styles.seal}>
                      <span className={styles.sealIcon}>🌡️</span>
                      <div>
                        <strong>Climate Controlled</strong>
                        <p>Moisture & Pest Free</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.reviewWidget}>
                  <div className={styles.reviewHeader}>
                    <span className={styles.googleG}>G</span>
                    <div className={styles.reviewScore}>
                      <strong>4.9/5.0</strong>
                      <span className={styles.reviewStars}>★★★★★</span>
                    </div>
                  </div>
                  <p>Based on <strong>1,500+</strong> verified customer reviews across India.</p>
                </div>

                <div className={`${styles.sidebarWidget} ${styles.blueWidget}`}>
                  <h4 className={styles.widgetTitleWhite}>Storage Prep Guide</h4>
                  <p className={styles.widgetTextWhite}>Learn how to prepare your items for long-term safe-keeping.</p>
                  <button className={styles.outlineButton}>Download PDF ➔</button>
                </div>

                <div className={styles.sidebarWidget}>
                  <h4 className={styles.widgetTitleDark}>Our Guarantees</h4>
                  <ul className={styles.guaranteeList}>
                    <li><span className={styles.check}>✓</span> Dedicated Private Vaults</li>
                    <li><span className={styles.check}>✓</span> Regular Pest Control</li>
                    <li><span className={styles.check}>✓</span> Fire Suppression Systems</li>
                    <li><span className={styles.check}>✓</span> Comprehensive Insurance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}