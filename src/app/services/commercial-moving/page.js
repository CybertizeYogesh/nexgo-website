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
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay}>
          <div className={styles.heroContainer}>
            <span className={styles.premiumBadge}>B2B Logistics</span>
            <h1 className={styles.heroTitle}>Commercial Relocations</h1>
            <p className={styles.heroSubtitle}>Engineered transport and rigging solutions for retail spaces, warehouses, and industrial manufacturing facilities.</p>
            <a href="#consultation" className={styles.heroButton}>Request Enterprise Proposal</a>
          </div>
        </div>
      </section>

      <section className={styles.partnerBanner}>
        <p>Trusted by India's Top Enterprises & Corporations</p>
        <div className={styles.partnerLogos}>
          <span>Reliance Retail</span>
          <span>Tata Motors</span>
          <span>Aditya Birla Group</span>
          <span>ITC Limited</span>
        </div>
      </section>

      <section className={styles.introSection}>
        <div className={styles.narrowContainer}>
          <h2 className={styles.introTitle}>Scale Meets Precision</h2>
          <p className={styles.introText}>
            Relocating a commercial enterprise requires meticulous planning to ensure zero operational downtime. At NexGo, we treat your business continuity as our top priority. Our commercial logistics engineers provide highly structured moving solutions tailored for large-scale corporate assets.
          </p>
        </div>
      </section>

      <section className={styles.zRow}>
        <div className={styles.zContainer}>
          <div className={styles.zImageWrapper}>
            <Image src="/images/services/commercial-machinery.png" alt="Heavy Machinery Rigging" width={600} height={500} className={styles.zImage} />
          </div>
          <div className={styles.zTextWrapper}>
            <h3>Industrial Machinery & Rigging</h3>
            <p>Manufacturing equipment requires specialized handling. We deploy certified rigging experts and dedicated commercial fleet vehicles to transport your sensitive industrial assets with absolute precision and safety.</p>
            <ul className={styles.premiumList}>
              <li>Heavy-Duty Hydraulic Cranes</li>
              <li>Custom Flatbed Transports</li>
              <li>Certified Rigging Engineers</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.zRow} ${styles.zReverse}`}>
        <div className={styles.zContainer}>
          <div className={styles.zTextWrapper}>
            <h3>Large-Scale Warehousing & Retail</h3>
            <p>From massive warehouse transitions to overnight retail shop fitting, our teams work around the clock. We utilize advanced inventory cataloging to ensure your supply chain remains uninterrupted during the entire move.</p>
            <ul className={styles.premiumList}>
              <li>Systematic Pallet Moving</li>
              <li>Industrial Rack Dismantling</li>
              <li>Digital Inventory Cataloging</li>
            </ul>
          </div>
          <div className={styles.zImageWrapper}>
            <Image src="/images/services/commercial-warehouse.png" alt="Warehouse and Retail Logistics" width={600} height={500} className={styles.zImage} />
          </div>
        </div>
      </section>

      <section className={styles.darkBanner}>
        <div className={styles.container}>
          <div className={styles.darkBannerGrid}>
            <div className={styles.darkStat}>
              <svg className={styles.svgIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              <h4>Enterprise Liability Coverage</h4>
              <p>High-limit commercial freight insurance policies protecting your inventory up to ₹10 Crores.</p>
            </div>
            <div className={styles.darkStat}>
              <svg className={styles.svgIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
              <h4>Zero-Downtime Guarantee</h4>
              <p>Overnight and weekend deployment schedules designed to keep your business fully operational.</p>
            </div>
            <div className={styles.darkStat}>
              <svg className={styles.svgIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              <h4>Dedicated Account Managers</h4>
              <p>A single point of B2B contact coordinating your entire logistical strategy from start to finish.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.processSection}>
        <div className={styles.container}>
          <h2 className={styles.centerTitle}>Commercial Execution Protocol</h2>
          <div className={styles.processGrid}>
            <div className={styles.processCard}>
              <div className={styles.processStepNumber}>01</div>
              <h4>Logistics Audit</h4>
              <p>On-site survey by our commercial engineers to assess freight volume, access points, and specific rigging needs.</p>
            </div>
            <div className={styles.processCard}>
              <div className={styles.processStepNumber}>02</div>
              <h4>Decommissioning</h4>
              <p>Systematic labeling, safe electrical shutdown, server racking, and precise palletizing of inventory.</p>
            </div>
            <div className={styles.processCard}>
              <div className={styles.processStepNumber}>03</div>
              <h4>Industrial Transit</h4>
              <p>Deployment of specialized heavy-duty fleets and enclosed containers, continuously monitored via GPS.</p>
            </div>
            <div className={styles.processCard}>
              <div className={styles.processStepNumber}>04</div>
              <h4>Re-installation</h4>
              <p>Careful uncrating, re-assembly of commercial fixtures, and precision placement of machinery at the new facility.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="consultation" className={styles.consultationSection}>
        <div className={styles.narrowContainer}>
          <div className={styles.luxuryFormWrapper}>
            <h2>Request a Commercial Proposal</h2>
            <p>Engage directly with our B2B logistics directors to architect your custom freight and relocation strategy.</p>
            <form className={styles.luxuryForm}>
              <div className={styles.formRow}>
                <input type="text" placeholder="Company Name" className={styles.luxuryInput} />
                <input type="text" placeholder="Contact Person" className={styles.luxuryInput} />
              </div>
              <div className={styles.formRow}>
                <input type="email" placeholder="Official Email" className={styles.luxuryInput} />
                <input type="text" placeholder="Phone Number" className={styles.luxuryInput} />
              </div>
              <input type="text" placeholder="Estimated Freight Volume / Move Details" className={styles.luxuryInput} />
              <button type="submit" className={styles.luxuryBtn}>Submit for Analysis</button>
            </form>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <div className={styles.narrowContainer}>
          <h2 className={styles.centerTitle}>Commercial Inquiries</h2>
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
      </section>

      <CTA />
    </main>
  );
}