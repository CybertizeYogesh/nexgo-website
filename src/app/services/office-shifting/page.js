"use client";
import React, { useState } from "react";
import Image from "next/image";
import CTA from "@/components/CTA";
import styles from "@/styles/OfficeServiceDetail.module.css";

export default function OfficeShiftingPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

  const faqs = [
    { q: "How do you handle sensitive IT equipment and servers?", a: "We use specialized anti-static packaging and custom-built crates for servers and IT assets. Our team is trained in technical handling to ensure zero data or hardware damage." },
    { q: "Can you perform the move during weekends or overnight?", a: "Absolutely. We offer 24/7 corporate relocation services to ensure your business experiences zero downtime by moving during non-working hours." },
    { q: "Do you help with office furniture installation?", a: "Yes, our crew includes professional carpenters who specialize in the dismantling and reassembly of modular workstations, conference tables, and executive desks." }
  ];

  return (
    <main className={styles.mainWrapper}>
      <section className={styles.heroBanner}>
        <div className={styles.heroOverlay}>
          <div className={styles.heroContent}>
            <span className={styles.badge}>Corporate Logistics</span>
            <h1>Seamless Office Shifting Services</h1>
            <p>Minimize business downtime with India's most efficient corporate relocation experts.</p>
          </div>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.twoColumnLayout}>
            {/* LEFT COLUMN */}
            <div className={styles.leftContent}>
              <h2 className={styles.sectionTitle}>Precision-Led Corporate Relocation</h2>
              <p className={styles.description}>Office shifting requires more than just heavy lifting; it requires meticulous planning and technical expertise. NexGo specializes in "Business Continuity" moving, ensuring your infrastructure is back online before your employees arrive at the new location.</p>

              <div className={styles.mainImageWrapper}>
                <Image src="/images/services/office-main.webp" alt="Professional office relocation and setup" width={800} height={450} className={styles.contentImage} priority />
              </div>

              <h3 className={styles.subTitle}>Corporate Specialized Handling</h3>
              <p className={styles.description}>From sensitive server rooms to confidential paper files, we provide customized logistics solutions tailored to your company's specific needs and security protocols.</p>

              <div className={styles.featureGrid}>
                <div className={styles.featureItem}>
                  <h4>IT Asset Management</h4>
                  <p>Secure transport for servers, networking gear, and workstations.</p>
                </div>
                <div className={styles.featureItem}>
                  <h4>Zero-Downtime Promise</h4>
                  <p>Overnight and weekend shifting schedules to keep you operational.</p>
                </div>
              </div>

              <div className={styles.staggeredImageGrid}>
                <div className={styles.imageHoverContainer}>
                  <Image src="/images/services/office-packing.webp" alt="Packing office equipment" width={380} height={280} className={styles.contentImage} />
                </div>
                <div className={styles.imageHoverContainer}>
                  <Image src="/images/services/server-loading.webp" alt="Loading IT infrastructure" width={380} height={280} className={styles.contentImage} />
                </div>
              </div>

              <h3 className={styles.subTitle}>Corporate Shifting Process</h3>
              <div className={styles.processTimeline}>
                {[
                  { n: "1", t: "Logistics Audit", d: "Detailed survey of assets and technical requirements." },
                  { n: "2", t: "IT Decommissioning", d: "Systematic labeling and safe shutdown of hardware." },
                  { n: "3", t: "Specialized Crating", d: "Custom wooden crates for high-value equipment." },
                  { n: "4", t: "Priority Transit", d: "Sealed, direct-route transport for faster delivery." },
                  { n: "5", t: "Asset Re-installation", d: "Furniture and workstation assembly at the new site." }
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

            {/* RIGHT SIDEBAR */}
            <div className={styles.rightSidebar}>
              <div className={styles.sidebarInner}>
                {/* Quote Form */}
                <div className={styles.sidebarWidget}>
                  <h3 className={styles.widgetTitleDark}>Get a Free Quote</h3>
                  <form className={styles.sidebarForm}>
                    <input type="text" placeholder="Company Name" required />
                    <input type="text" placeholder="Contact Person" required />
                    <input type="text" placeholder="Current Location" required />
                    <input type="text" placeholder="Destination" required />
                    <button type="submit" className={styles.quoteButton}>Get Corporate Quote</button>
                  </form>
                </div>

                {/* Trust Seals */}
                <div className={styles.sidebarWidget}>
                  <div className={styles.trustSeals}>
                    <div className={styles.seal}>
                      <span className={styles.sealIcon}>✓</span>
                      <div>
                        <strong>B2B Specialist</strong>
                        <p>Corporate Verified</p>
                      </div>
                    </div>
                    <div className={styles.seal}>
                      <span className={styles.sealIcon}>🔒</span>
                      <div>
                        <strong>Data Secure</strong>
                        <p>Confidential Handling</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Review Widget */}
                <div className={styles.reviewWidget}>
                  <div className={styles.reviewHeader}>
                    <span className={styles.googleG}>G</span>
                    <div className={styles.reviewScore}>
                      <strong>5.0/5.0</strong>
                      <span className={styles.reviewStars}>★★★★★</span>
                    </div>
                  </div>
                  <p>Top-rated by <strong>400+</strong> Corporate Clients.</p>
                </div>

                {/* Blue Widget */}
                <div className={`${styles.sidebarWidget} ${styles.blueWidget}`}>
                  <h4 className={styles.widgetTitleWhite}>Get a B2B Proposal</h4>
                  <p className={styles.widgetTextWhite}>Request a formal corporate shifting quote and presentation for your company.</p>
                  <button className={styles.outlineButton}>Request Proposal ➔</button>
                </div>

                {/* Corporate Benefits */}
                <div className={styles.sidebarWidget}>
                  <h4 className={styles.widgetTitleDark}>Corporate Benefits</h4>
                  <ul className={styles.guaranteeList}>
                    <li><span className={styles.check}>✓</span> GST Invoicing</li>
                    <li><span className={styles.check}>✓</span> Dedicated Key Account Mgr</li>
                    <li><span className={styles.check}>✓</span> Full Liability Coverage</li>
                    <li><span className={styles.check}>✓</span> Bulk Discount Pricing</li>
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
