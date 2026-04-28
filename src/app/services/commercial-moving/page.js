"use client";
import React, { useState } from "react";
import Image from "next/image";
import CTA from "@/components/CTA";
import styles from "@/styles/CommercialMoving.module.css";

export default function CommercialMovingPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

  const faqs = [
    { q: "Do you have the equipment to move heavy industrial machinery?", a: "Yes. Our commercial fleet includes heavy-duty flatbeds, hydraulic cranes, and specialized rigging equipment designed to safely transport manufacturing machinery and industrial assets." },
    { q: "Can you handle retail inventory and warehouse relocations?", a: "Absolutely. We provide systematic inventory cataloging and palletized moving solutions to ensure retail goods and warehouse stock are transferred without mixing or loss." },
    { q: "What is your liability coverage for commercial freight?", a: "We offer enterprise-grade transit insurance policies that cover up to ₹10 Crores in commercial freight, customizable based on your specific inventory valuation." }
  ];

  return (
    <main className={styles.mainWrapper}>
      <section className={styles.heroBanner}>
        <div className={styles.heroOverlay}>
          <div className={styles.heroContent}>
            <span className={styles.badge}>B2B Logistics</span>
            <h1>Commercial Relocations</h1>
            <p>Engineered transport and rigging solutions for retail spaces, warehouses, and industrial manufacturing facilities.</p>
          </div>
        </div>
      </section>
      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.twoColumnLayout}>
            <div className={styles.leftContent}>
              <h2 className={styles.sectionTitle}>Scale Meets Precision</h2>
              <p className={styles.description}>Relocating a commercial enterprise requires meticulous planning to ensure zero operational downtime. At NexGo, we treat your business continuity as our top priority. Our commercial logistics engineers provide highly structured moving solutions tailored for large-scale corporate assets.</p>
              <div className={styles.mainImageWrapper}>
                <Image src="/images/services/commercial-machinery.png" alt="Heavy Machinery Rigging" width={800} height={450} className={styles.contentImage} priority />
              </div>
              <h3 className={styles.subTitle}>Industrial Machinery & Rigging</h3>
              <p className={styles.description}>Manufacturing equipment requires specialized handling. We deploy certified rigging experts and dedicated commercial fleet vehicles to transport your sensitive industrial assets with absolute precision and safety.</p>
              <div className={styles.featureGrid}>
                <div className={styles.featureItem}>
                  <h4>Heavy-Duty Equipment</h4>
                  <p>Deployment of hydraulic cranes, custom flatbeds, and certified rigging engineers.</p>
                </div>
                <div className={styles.featureItem}>
                  <h4>Large-Scale Warehousing</h4>
                  <p>Systematic pallet moving, industrial rack dismantling, and digital inventory cataloging.</p>
                </div>
              </div>
              <div className={styles.staggeredImageGrid}>
                <div className={styles.imageHoverContainer}>
                  <Image src="/images/services/commercial-warehouse.png" alt="Warehouse and Retail Logistics" width={380} height={280} className={styles.contentImage} />
                </div>
                <div className={styles.imageHoverContainer}>
                  <Image src="/images/services/loading-crew.png" alt="Professional loading crew" width={380} height={280} className={styles.contentImage} />
                </div>
              </div>
              <h3 className={styles.subTitle}>Commercial Execution Protocol</h3>
              <div className={styles.processTimeline}>
                {[
                  { n: "1", t: "Logistics Audit", d: "On-site survey by our commercial engineers to assess freight volume, access points, and specific rigging needs." },
                  { n: "2", t: "Decommissioning", d: "Systematic labeling, safe electrical shutdown, server racking, and precise palletizing of inventory." },
                  { n: "3", t: "Industrial Transit", d: "Deployment of specialized heavy-duty fleets and enclosed containers, continuously monitored via GPS." },
                  { n: "4", t: "Re-installation", d: "Careful uncrating, re-assembly of commercial fixtures, and precision placement of machinery at the new facility." },
                  { n: "5", t: "Final Handover", d: "Comprehensive testing and inventory sign-off to ensure your enterprise is fully operational." }
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
              <h3 className={styles.subTitle}>Commercial Inquiries</h3>
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
                  <h3 className={styles.widgetTitleDark}>Request Enterprise Quote</h3>
                  <form className={styles.sidebarForm}>
                    <input type="text" placeholder="Company Name" required />
                    <input type="text" placeholder="Contact Person" required />
                    <input type="text" placeholder="Estimated Freight Volume" required />
                    <input type="text" placeholder="Destination" required />
                    <button type="submit" className={styles.quoteButton}>Get Commercial Quote</button>
                  </form>
                </div>
                <div className={styles.sidebarWidget}>
                  <div className={styles.trustSeals}>
                    <div className={styles.seal}>
                      <span className={styles.sealIcon}>🛡️</span>
                      <div>
                        <strong>₹10 Cr Coverage</strong>
                        <p>Enterprise Liability</p>
                      </div>
                    </div>
                    <div className={styles.seal}>
                      <span className={styles.sealIcon}>⚙️</span>
                      <div>
                        <strong>Zero Downtime</strong>
                        <p>Weekend Deployments</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.reviewWidget}>
                  <div className={styles.reviewHeader}>
                    <span className={styles.googleG}>G</span>
                    <div className={styles.reviewScore}>
                      <strong>5.0/5.0</strong>
                      <span className={styles.reviewStars}>★★★★★</span>
                    </div>
                  </div>
                  <p>Trusted by India's Top Enterprises & Corporations.</p>
                </div>
                <div className={`${styles.sidebarWidget} ${styles.blueWidget}`}>
                  <h4 className={styles.widgetTitleWhite}>Get a B2B Proposal</h4>
                  <p className={styles.widgetTextWhite}>Engage directly with our B2B logistics directors to architect your custom freight strategy.</p>
                  <button className={styles.outlineButton}>Request Proposal ➔</button>
                </div>
                <div className={styles.sidebarWidget}>
                  <h4 className={styles.widgetTitleDark}>Enterprise Benefits</h4>
                  <ul className={styles.guaranteeList}>
                    <li><span className={styles.check}>✓</span> Dedicated Account Managers</li>
                    <li><span className={styles.check}>✓</span> Certified Rigging Engineers</li>
                    <li><span className={styles.check}>✓</span> Corporate GST Invoicing</li>
                    <li><span className={styles.check}>✓</span> Multi-Site Logistics</li>
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