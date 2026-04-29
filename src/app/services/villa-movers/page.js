"use client";
import React, { useState } from "react";
import Image from "next/image";
import CTA from "@/components/CTA";
import styles from "@/styles/VillaMovers.module.css";

export default function VillaMoversPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

  const faqs = [
    { q: "How do you handle high-value artwork and chandeliers?", a: "We utilize custom-built wooden crating and museum-grade packing materials. A specialized handling team oversees all fine art and delicate fixtures." },
    { q: "Do you offer pre-move organizing and decluttering?", a: "Yes, our white-glove service includes pre-move sorting, professional organizing, and secure disposal or donation of unwanted items." },
    { q: "Will there be a dedicated supervisor on site?", a: "Absolutely. Every luxury villa move is assigned a Senior Project Manager who remains on-site from the first box packed to the final piece of furniture placed." }
  ];

  return (
    <main className={styles.mainWrapper}>
      <section className={styles.heroBanner}>
        <div className={styles.heroOverlay}>
          <div className={styles.heroContent}>
            <span className={styles.badge}>White-Glove Service</span>
            <h1>Luxury Villa Relocations</h1>
            <p>Discreet, flawless, and completely hands-off moving experiences for premium estates and luxury residences.</p>
          </div>
        </div>
      </section>
      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.twoColumnLayout}>
            <div className={styles.leftContent}>
              <h2 className={styles.sectionTitle}>An Elevated Standard of Moving</h2>
              <p className={styles.description}>Moving a large-scale estate requires a level of precision and care that goes far beyond standard logistics. Our specialized Villa Movers division provides an exclusive, end-to-end relocation service designed for complete discretion and absolute protection of your high-value assets.</p>
              <div className={styles.mainImageWrapper}>
                <Image src="/images/services/villa-art.webp" alt="Packing fine art and antiques" width={800} height={450} className={styles.contentImage} priority />
              </div>
              <h3 className={styles.subTitle}>Museum-Grade Asset Protection</h3>
              <p className={styles.description}>Your fine art, antiques, and luxury furniture are irreplaceable. We abandon standard cardboard for bespoke wooden crating, multi-layer shock absorption, and climate-controlled transport to ensure absolute preservation.</p>
              <div className={styles.featureGrid}>
                <div className={styles.featureItem}>
                  <h4>Complete "Hands-Off" Experience</h4>
                  <p>Our white-glove crew handles the micro-organization of closets, wardrobe packing, and perfect recreation of your living spaces.</p>
                </div>
                <div className={styles.featureItem}>
                  <h4>Absolute Discretion</h4>
                  <p>Strict NDA protocols and unmarked vehicles are available upon request to ensure your complete privacy.</p>
                </div>
              </div>
              <div className={styles.staggeredImageGrid}>
                <div className={styles.imageHoverContainer}>
                  <Image src="/images/services/villa-wardrobe.webp" alt="White glove wardrobe packing" width={380} height={280} className={styles.contentImage} />
                </div>
                <div className={styles.imageHoverContainer}>
                  <Image src="/images/services/packing-fragile.webp" alt="Secure packaging of delicate items" width={380} height={280} className={styles.contentImage} />
                </div>
              </div>
              <h3 className={styles.subTitle}>Our Signature Process</h3>
              <div className={styles.processTimeline}>
                {[
                  { n: "1", t: "Private Estate Survey", d: "An initial walk-through by a Senior Move Manager to catalog high-value items, measure entryways, and establish security protocols." },
                  { n: "2", t: "Custom Crating & Prep", d: "Carpenters build custom crates for art and chandeliers off-site. The team arrives to protect floors, walls, and staircases." },
                  { n: "3", t: "White-Glove Transference", d: "Execution using air-ride suspension vehicles. Items are packed room-by-room with micro-labeling for exact placement." },
                  { n: "4", t: "Estate Recreation", d: "Furniture is assembled, art is staged, and wardrobes are re-hung. All packing debris is removed same-day." }
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
              <h3 className={styles.subTitle}>Client Inquiries</h3>
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
                  <h3 className={styles.widgetTitleDark}>Request Consultation</h3>
                  <form className={styles.sidebarForm}>
                    <input type="text" placeholder="Full Name" required />
                    <input type="tel" placeholder="Contact Number" required />
                    <input type="text" placeholder="Current Estate Location" required />
                    <input type="text" placeholder="Destination" required />
                    <button type="submit" className={styles.quoteButton}>Schedule Consultation</button>
                  </form>
                </div>
                <div className={styles.sidebarWidget}>
                  <div className={styles.trustSeals}>
                    <div className={styles.seal}>
                      <span className={styles.sealIcon}>✦</span>
                      <div>
                        <strong>Luxury Partners</strong>
                        <p>DLF & Godrej Approved</p>
                      </div>
                    </div>
                    <div className={styles.seal}>
                      <span className={styles.sealIcon}>🔒</span>
                      <div>
                        <strong>Comprehensive Cover</strong>
                        <p>High-Limit Insurance</p>
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
                  <p>Trusted by India's most exclusive real estate developers and VIP clients.</p>
                </div>
                <div className={`${styles.sidebarWidget} ${styles.blueWidget}`}>
                  <h4 className={styles.widgetTitleWhite}>Pre-Move Organizing</h4>
                  <p className={styles.widgetTextWhite}>Our white-glove service includes professional sorting, decluttering, and secure disposal.</p>
                  <button className={styles.outlineButton}>Learn More ➔</button>
                </div>
                <div className={styles.sidebarWidget}>
                  <h4 className={styles.widgetTitleDark}>Elite Standards</h4>
                  <ul className={styles.guaranteeList}>
                    <li><span className={styles.check}>✓</span> Dedicated Supervisor</li>
                    <li><span className={styles.check}>✓</span> Museum-Grade Packing</li>
                    <li><span className={styles.check}>✓</span> Custom Wood Crating</li>
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