"use client";

import React, { useState } from "react";
import Image from "next/image";
import CTA from "@/components/CTA";
import styles from "@/styles/PackingUnpacking.module.css";

export default function PackingUnpackingPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

  const faqs = [
    { q: "Do I need to empty my drawers and wardrobes before you arrive?", a: "No, you don't need to lift a finger. Our trained crew handles the micro-packing of all personal items, clothing, and drawer contents into specialized cartons." },
    { q: "How do you pack fragile kitchenware and glass items?", a: "We use specialized dish-pack boxes, cellular dividers, and wrap every single piece of glassware in multi-layered archival tissue and premium bubble wrap." },
    { q: "What happens to the empty boxes after unpacking?", a: "We provide a complete debris removal service. Once the unpacking is finished, our team clears away all empty cartons, bubble wrap, and tape on the same day." }
  ];

  return (
    <main className={styles.mainWrapper}>
      <section className={styles.heroBanner}>
        <div className={styles.heroOverlay}>
          <div className={styles.heroContent}>
            <span className={styles.badge}>Premium Protection</span>
            <h1>Expert Packing & Unpacking</h1>
            <p>Industrial-grade 3-layer protection applied by our trained professionals for zero-damage transit.</p>
          </div>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.twoColumnLayout}>
            <div className={styles.leftContent}>
              <h2 className={styles.sectionTitle}>The First Line of Defense for Your Assets</h2>
              <p className={styles.description}>The safety of your move is determined before the truck even arrives. We don't just put things in boxes; we engineer custom packaging solutions for every item type in your home. From fragile glassware to heavy electronics, our 3-layer protection standard ensures absolute security.</p>

              <div className={styles.mainImageWrapper}>
                <Image src="/images/services/packing-main.png" alt="Professional moving crew packing a living room" width={800} height={450} className={styles.contentImage} priority />
              </div>

              <h3 className={styles.subTitle}>The 3-Layer Protection Standard</h3>
              <p className={styles.description}>We abandon cheap materials in favor of industrial-grade supplies. Every piece of furniture and fragile item goes through our rigorous triple-wrap process.</p>

              <div className={styles.featureGrid}>
                <div className={styles.featureItem}>
                  <h4>Shock Absorption</h4>
                  <p>High-grade bubble wrap and foam peanuts neutralize transit vibrations.</p>
                </div>
                <div className={styles.featureItem}>
                  <h4>Structural Integrity</h4>
                  <p>5-ply heavy-duty corrugated cartons and hard edge guards prevent crushing.</p>
                </div>
              </div>

              <div className={styles.staggeredImageGrid}>
                <div className={styles.imageHoverContainer}>
                  <Image src="/images/services/packing-fragile.png" alt="Wrapping fragile glassware" width={380} height={280} className={styles.contentImage} />
                </div>
                <div className={`${styles.imageHoverContainer} ${styles.imageOffset}`}>
                  <Image src="/images/services/unpacking-setup.png" alt="Crew unpacking and setting up kitchen" width={380} height={280} className={styles.contentImage} />
                </div>
              </div>

              <h3 className={styles.subTitle}>Our Packing Protocol</h3>
              <div className={styles.processTimeline}>
                {[
                  { n: "1", t: "Material Audit", d: "Assessing your inventory to bring the exact right type and amount of packing supplies." },
                  { n: "2", t: "Categorized Packing", d: "Room-by-room, color-coded boxing to ensure nothing is mixed or lost." },
                  { n: "3", t: "Triple Wrapping", d: "Bubble wrap, corrugated sheet, and stretch film applied to all furniture." },
                  { n: "4", t: "Custom Crating", d: "Building bespoke wooden crates for TVs, artwork, and delicate chandeliers." },
                  { n: "5", t: "Systematic Unpacking", d: "Careful unboxing, placement, and immediate debris removal at the destination." }
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
                  <h3 className={styles.widgetTitleDark}>Get a Packing Quote</h3>
                  <form className={styles.sidebarForm}>
                    <input type="text" placeholder="Your Name" />
                    <input type="text" placeholder="Phone Number" />
                    <input type="text" placeholder="Size of Home/Office" />
                    <input type="text" placeholder="Service Required (Pack/Unpack/Both)" />
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
                      <span className={styles.sealIcon}>📦</span>
                      <div>
                        <strong>Premium Materials</strong>
                        <p>Industrial Grade Only</p>
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
                  <h4 className={styles.widgetTitleWhite}>Material Quality Guide</h4>
                  <p className={styles.widgetTextWhite}>See exactly what materials we use to protect your high-value assets.</p>
                  <button className={styles.outlineButton}>Download PDF ➔</button>
                </div>

                <div className={styles.sidebarWidget}>
                  <h4 className={styles.widgetTitleDark}>Our Guarantees</h4>
                  <ul className={styles.guaranteeList}>
                    <li><span className={styles.check}>✓</span> 5-Ply Sturdy Cartons</li>
                    <li><span className={styles.check}>✓</span> Specialized Wardrobe Boxes</li>
                    <li><span className={styles.check}>✓</span> Color-Coded Labeling</li>
                    <li><span className={styles.check}>✓</span> Same-Day Debris Removal</li>
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