"use client";

import React, { useState } from "react";
import Image from "next/image";
import CTA from "@/components/CTA";
import styles from "@/styles/LoadingUnloading.module.css";

export default function LoadingUnloadingPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

  const faqs = [
    { q: "Do you use specialized equipment for heavy items?", a: "Yes, we use hydraulic tail-lifts, industrial-grade dollies, and heavy-duty ramps to ensure no manual strain on your items or our crew." },
    { q: "How do you protect the floors during loading?", a: "We use high-density floor runners and corner guards to ensure no scratches or scuffs are left on your property's flooring or walls." },
    { q: "Can I book only the loading/unloading crew without a truck?", a: "Yes, we offer labor-only services for clients who have their own transport but need professional muscle and expertise for safe handling." }
  ];

  return (
    <main className={styles.mainWrapper}>
      <section className={styles.heroBanner}>
        <div className={styles.heroOverlay}>
          <div className={styles.heroContent}>
            <span className={styles.badge}>Industrial Handling</span>
            <h1>Expert Loading & Unloading</h1>
            <p>Professional muscle meets technical expertise for safe, zero-strain relocation.</p>
          </div>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.twoColumnLayout}>
            <div className={styles.leftContent}>
              <h2 className={styles.sectionTitle}>Engineered Muscle & Precision Handling</h2>
              <p className={styles.description}>Loading and unloading is the most critical phase of any move. We don't rely on brute force alone; we use calculated logistics and specialized equipment to ensure that even the heaviest safes, machinery, or fragile furniture are handled with technical precision.</p>

              <div className={styles.mainImageWrapper}>
                <Image src="/images/services/loading-main.webp" alt="Professional loading and unloading crew" width={800} height={450} className={styles.contentImage} priority />
              </div>

              <h3 className={styles.subTitle}>Our Technical Edge</h3>
              <p className={styles.description}>Our fleet and crews are equipped with the latest mechanical aids to eliminate manual lifting risks, ensuring a perfectly smooth transition into and out of the carrier.</p>

              <div className={styles.featureGrid}>
                <div className={styles.featureItem}>
                  <h4>Hydraulic Tail-Lifts</h4>
                  <p>Ensuring smooth transition from ground to truck level for heavy items and machinery.</p>
                </div>
                <div className={styles.featureItem}>
                  <h4>Specialized Trolleys</h4>
                  <p>Multi-terrain dollies and stair-climbers for complex architectural access.</p>
                </div>
              </div>

              <div className={styles.staggeredImageGrid}>
                <div className={styles.imageHoverContainer}>
                  <Image src="/images/services/loading-crew.png" alt="Crew using hydraulic lifts" width={380} height={280} className={styles.contentImage} />
                </div>
                <div className={`${styles.imageHoverContainer} ${styles.imageOffset}`}>
                  <Image src="/images/services/unloading-care.webp" alt="Careful unloading with floor protection" width={380} height={280} className={styles.contentImage} />
                </div>
              </div>

              <h3 className={styles.subTitle}>The Loading Protocol</h3>
              <div className={styles.processTimeline}>
                {[
                  { n: "1", t: "Weight Analysis", d: "Center of gravity and weight distribution calculation." },
                  { n: "2", t: "Premises Protection", d: "High-density floor runners and wall corner guards applied." },
                  { n: "3", t: "Rigging & Anchoring", d: "Industrial-grade ratchet straps to secure items in transit." },
                  { n: "4", t: "Strategic Unloading", d: "Systematic room-by-room placement at destination." },
                  { n: "5", t: "Verified Inventory", d: "Final digital checklist scan upon complete unloading." }
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
                  <h3 className={styles.widgetTitleDark}>Get a Labor Quote</h3>
                  <form className={styles.sidebarForm}>
                    <input type="text" placeholder="Your Name" />
                    <input type="text" placeholder="Phone Number" />
                    <input type="text" placeholder="Moving From" />
                    <input type="text" placeholder="Moving To" />
                    <button type="submit" className={styles.quoteButton}>Send Request</button>
                  </form>
                </div>

                <div className={styles.sidebarWidget}>
                  <div className={styles.trustSeals}>
                    <div className={styles.seal}>
                      <span className={styles.sealIcon}>🏆</span>
                      <div>
                        <strong>ISO 9001:2015</strong>
                        <p>Certified Quality</p>
                      </div>
                    </div>
                    <div className={styles.seal}>
                      <span className={styles.sealIcon}>🛡️</span>
                      <div>
                        <strong>100% Insured</strong>
                        <p>Zero Risk Handling</p>
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
                  <h4 className={styles.widgetTitleWhite}>Equipment Checklist</h4>
                  <p className={styles.widgetTextWhite}>See the exact tools and technology our crews bring to every job.</p>
                  <button className={styles.outlineButton}>Download PDF ➔</button>
                </div>

                <div className={styles.sidebarWidget}>
                  <h4 className={styles.widgetTitleDark}>Our Guarantees</h4>
                  <ul className={styles.guaranteeList}>
                    <li><span className={styles.check}>✓</span> Background-Checked Staff</li>
                    <li><span className={styles.check}>✓</span> All Equipment Included</li>
                    <li><span className={styles.check}>✓</span> Ergonomic Handling</li>
                    <li><span className={styles.check}>✓</span> Floor & Wall Protection</li>
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