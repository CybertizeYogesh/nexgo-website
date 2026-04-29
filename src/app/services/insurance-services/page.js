"use client";

import React, { useState } from "react";
import Image from "next/image";
import CTA from "@/components/CTA";
import styles from "@/styles/InsuranceServices.module.css";

export default function InsuranceServicesPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

  const faqs = [
    { q: "What does transit insurance actually cover?", a: "Our comprehensive policy covers accidental damage, fire, theft, and natural calamities during the entire transit period—from the moment packing begins until the final item is unloaded." },
    { q: "How is the premium calculated?", a: "The premium is typically calculated as a small percentage (usually 2-3%) of the total declared value of the goods you are moving." },
    { q: "What is the process for filing a claim?", a: "In the rare event of damage, you must notify your Move Manager within 24 hours. We provide a dedicated claims officer who helps you document the damage and process the settlement quickly." }
  ];

  return (
    <main className={styles.mainWrapper}>
      <section className={styles.heroBanner}>
        <div className={styles.heroOverlay}>
          <div className={styles.heroContent}>
            <span className={styles.badge}>Financial Security</span>
            <h1>Transit Insurance Services</h1>
            <p>Comprehensive risk coverage to provide you with absolute financial protection and peace of mind.</p>
          </div>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.twoColumnLayout}>
            <div className={styles.leftContent}>
              <h2 className={styles.sectionTitle}>Zero-Risk Relocation Strategy</h2>
              <p className={styles.description}>While we maintain a 99% damage-free record, we believe in being prepared for the unexpected. NexGo offers enterprise-grade transit insurance for both residential and commercial moves. We don't just move your life; we provide a safety net for your most valuable investments.</p>

              <div className={styles.mainImageWrapper}>
                <Image src="/images/services/insurance-main.webp" alt="Secure transit and insurance protection" width={800} height={450} className={styles.contentImage} priority />
              </div>

              <h3 className={styles.subTitle}>Why Transit Insurance is Essential</h3>
              <p className={styles.description}>Transit involves various external factors beyond anyone's control, such as road conditions or weather. Our insurance partners provide specialized moving-risk coverage that standard home insurance usually excludes.</p>

              <div className={styles.featureGrid}>
                <div className={styles.featureItem}>
                  <h4>All-Risk Coverage</h4>
                  <p>Protection against accidental breakage, fire, theft, and environmental damage.</p>
                </div>
                <div className={styles.featureItem}>
                  <h4>Fast Claim Settlement</h4>
                  <p>A streamlined, digital-first process to ensure you aren't left waiting for reimbursements.</p>
                </div>
              </div>

              <div className={styles.staggeredImageGrid}>
                <div className={styles.imageHoverContainer}>
                  <Image src="/images/services/claims-process.webp" alt="Digital claims processing" width={380} height={280} className={styles.contentImage} />
                </div>
                <div className={styles.imageHoverContainer}>
                  <Image src="/images/services/policy-docs.webp" alt="Official insurance policy documents" width={380} height={280} className={styles.contentImage} />
                </div>
              </div>

              <h3 className={styles.subTitle}>The Protection Protocol</h3>
              <div className={styles.processTimeline}>
                {[
                  { n: "1", t: "Asset Valuation", d: "You provide a declared value for the items being moved in our digital inventory app." },
                  { n: "2", t: "Policy Generation", d: "We generate an official transit insurance certificate before the truck leaves your premises." },
                  { n: "3", t: "Seal Verification", d: "Digital photos are taken of the container seals and item condition at the time of loading." },
                  { n: "4", t: "Full Transit Cover", d: "Your assets are protected from the moment of pickup to the final handover at the destination." },
                  { n: "5", t: "Instant Verification", d: "A final inspection at delivery ensures everything is accounted for before the policy closes." }
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
                  <h3 className={styles.widgetTitleDark}>Calculate Premium</h3>
                  <form className={styles.sidebarForm}>
                    <input type="text" placeholder="Your Name" />
                    <input type="text" placeholder="Phone Number" />
                    <input type="text" placeholder="Total Estimated Value" />
                    <input type="text" placeholder="Move Type (Local/Domestic)" />
                    <button type="submit" className={styles.quoteButton}>Check Premium</button>
                  </form>
                </div>

                <div className={styles.sidebarWidget}>
                  <div className={styles.trustSeals}>
                    <div className={styles.seal}>
                      <span className={styles.sealIcon}>🛡️</span>
                      <div>
                        <strong>IRDA Approved</strong>
                        <p>Certified Partners</p>
                      </div>
                    </div>
                    <div className={styles.seal}>
                      <span className={styles.sealIcon}>💸</span>
                      <div>
                        <strong>Cashless Claims</strong>
                        <p>Direct Settlement</p>
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
                  <p>Trusted by <strong>10,000+</strong> families for secure transit.</p>
                </div>

                <div className={`${styles.sidebarWidget} ${styles.blueWidget}`}>
                  <h4 className={styles.widgetTitleWhite}>Exclusion List</h4>
                  <p className={styles.widgetTextWhite}>Download the list of items not covered under standard transit insurance.</p>
                  <button className={styles.outlineButton}>Download PDF ➔</button>
                </div>

                <div className={styles.sidebarWidget}>
                  <h4 className={styles.widgetTitleDark}>Why Insure With Us?</h4>
                  <ul className={styles.guaranteeList}>
                    <li><span className={styles.check}>✓</span> 100% Transparency</li>
                    <li><span className={styles.check}>✓</span> Digital Documentation</li>
                    <li><span className={styles.check}>✓</span> Dedicated Claims Mgr</li>
                    <li><span className={styles.check}>✓</span> Low Premium Rates</li>
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