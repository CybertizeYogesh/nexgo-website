"use client";

import React, { useState } from "react";
import Image from "next/image";
import CTA from "@/components/CTA";
import styles from "@/styles/ServiceDetail.module.css";

export default function HomeShiftingPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

  const faqs = [
    { q: "Do you provide transit insurance for household goods?", a: "Yes. We offer comprehensive transit insurance covering 100% of the declared value for complete financial protection." },
    { q: "How far in advance should I book my home move?", a: "We recommend booking at least 7-10 days in advance for local shifts and 15 days for long-distance relocations." },
    { q: "Do you provide packing materials?", a: "Yes, our team brings everything: premium bubble wrap, double-walled cartons, and industrial stretch film." }
  ];

  return (
    <main className={styles.mainWrapper}>
      <section className={styles.heroBanner}>
        <div className={styles.heroOverlay}>
          <div className={styles.heroContent}>
            <span className={styles.badge}>Residential Logistics</span>
            <h1>Expert Home Shifting Services</h1>
            <p>India's most trusted household relocation partner with 100% safety record.</p>
          </div>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.twoColumnLayout}>
            <div className={styles.leftContent}>
              <h2 className={styles.sectionTitle}>Safe & Reliable Household Shifting</h2>
              <p className={styles.description}>Relocating a home is more than just moving boxes; it's about transitioning your life. At NexGo, we treat every single item as if it were our own. Our professionally trained crew uses international standard techniques to ensure your belongings arrive in the exact same condition they left.</p>

              <div className={styles.mainImageWrapper}>
                <Image src="/images/services/professional-packing.png" alt="Professional packing service for home shifting" width={800} height={450} className={styles.contentImage} priority />
              </div>

              <h3 className={styles.subTitle}>Why Choose NexGo for Home Shifting?</h3>
              <p className={styles.description}>Unlike local operators, we provide a dedicated Move Manager for every client. From the initial survey to the final unpacking at your new home, you have a single point of contact who ensures everything stays on schedule.</p>

              <div className={styles.featureGrid}>
                <div className={styles.featureItem}>
                  <h4>3-Layer Packing</h4>
                  <p>Bubble wrap, corrugated sheets, and film for max protection.</p>
                </div>
                <div className={styles.featureItem}>
                  <h4>Modern Fleet</h4>
                  <p>Weather-proof, closed-container trucks with GPS tracking.</p>
                </div>
              </div>

              <div className={styles.staggeredImageGrid}>
                <div className={styles.imageHoverContainer}>
                  <Image src="/images/services/packing.png" alt="Detail view of packing fragile items" width={380} height={280} className={styles.contentImage} />
                </div>
                <div className={`${styles.imageHoverContainer} ${styles.imageOffset}`}>
                  <Image src="/images/services/loading.png" alt="Detail view of loading boxes into moving truck" width={380} height={280} className={styles.contentImage} />
                </div>
              </div>

              <h3 className={styles.subTitle}>Our Shifting Process</h3>
              <div className={styles.processTimeline}>
                {[
                  { n: "1", t: "Survey", d: "Video or in-person inventory assessment." },
                  { n: "2", t: "Packing", d: "Premium materials applied by experts." },
                  { n: "3", t: "Loading", d: "Safe handling using advanced gear." },
                  { n: "4", t: "Transit", d: "Real-time tracking through our portal." },
                  { n: "5", t: "Unpacking", d: "Placement and basic setup at your new home." }
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
                  <h3 className={styles.widgetTitleDark}>Get a Free Quote</h3>
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
                        <p>Zero Risk Transit</p>
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
                  <h4 className={styles.widgetTitleWhite}>Free Moving Checklist</h4>
                  <p className={styles.widgetTextWhite}>Don't forget a single detail. Download our comprehensive step-by-step moving guide.</p>
                  <button className={styles.outlineButton}>Download PDF ➔</button>
                </div>

                <div className={styles.sidebarWidget}>
                  <h4 className={styles.widgetTitleDark}>Our Guarantees</h4>
                  <ul className={styles.guaranteeList}>
                    <li><span className={styles.check}>✓</span> 100% Price Transparency</li>
                    <li><span className={styles.check}>✓</span> On-Time Delivery</li>
                    <li><span className={styles.check}>✓</span> Background-Checked Staff</li>
                    <li><span className={styles.check}>✓</span> 24/7 Live Tracking</li>
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