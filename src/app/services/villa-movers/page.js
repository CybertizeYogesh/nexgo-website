"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
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
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay}>
          <div className={styles.heroContainer}>
            <span className={styles.premiumBadge}>White-Glove Service</span>
            <h1 className={styles.heroTitle}>Luxury Villa Relocations</h1>
            <p className={styles.heroSubtitle}>Discreet, flawless, and completely hands-off moving experiences for premium estates and luxury residences.</p>
            <a href="#consultation" className={styles.heroButton}>Consult a Move Expert</a>
          </div>
        </div>
      </section>

      <section className={styles.partnerBanner}>
        <p>Trusted by India's Most Exclusive Real Estate Developers</p>
        <div className={styles.partnerLogos}>
          <span>DLF Luxury</span>
          <span>Lodha Group</span>
          <span>Prestige Estates</span>
          <span>Godrej Properties</span>
        </div>
      </section>

      <section className={styles.introSection}>
        <div className={styles.narrowContainer}>
          <h2 className={styles.introTitle}>An Elevated Standard of Moving</h2>
          <p className={styles.introText}>
            Moving a large-scale estate requires a level of precision and care that goes far beyond standard logistics. Our specialized Villa Movers division provides an exclusive, end-to-end relocation service designed for complete discretion and absolute protection of your high-value assets.
          </p>
        </div>
      </section>

      <section className={styles.zRow}>
        <div className={styles.zContainer}>
          <div className={styles.zImageWrapper}>
            <Image src="/images/services/villa-art.png" alt="Packing fine art and antiques" width={600} height={500} className={styles.zImage} />
          </div>
          <div className={styles.zTextWrapper}>
            <h3>Museum-Grade Asset Protection</h3>
            <p>Your fine art, antiques, and luxury furniture are irreplaceable. We abandon standard cardboard for bespoke wooden crating, multi-layer shock absorption, and climate-controlled transport to ensure absolute preservation.</p>
            <ul className={styles.premiumList}>
              <li>Custom Crating for Chandeliers</li>
              <li>Grand Piano Transport</li>
              <li>Sculpture & Canvas Wrapping</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.zRow} ${styles.zReverse}`}>
        <div className={styles.zContainer}>
          <div className={styles.zTextWrapper}>
            <h3>Complete "Hands-Off" Experience</h3>
            <p>From the moment you engage our team, you won't need to lift a finger. Our white-glove crew handles the micro-organization of closets, wardrobe packing with specialized garment boxes, and perfect recreation of your living spaces in the new estate.</p>
            <ul className={styles.premiumList}>
              <li>Wardrobe & Closet Transference</li>
              <li>Kitchen & Pantry Setup</li>
              <li>Debris & Material Removal</li>
            </ul>
          </div>
          <div className={styles.zImageWrapper}>
            <Image src="/images/services/villa-wardrobe.png" alt="White glove wardrobe packing" width={600} height={500} className={styles.zImage} />
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
              <h4>Comprehensive Coverage</h4>
              <p>High-limit insurance policies covering 100% of declared value for peace of mind.</p>
            </div>
            <div className={styles.darkStat}>
              <svg className={styles.svgIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
              <h4>Absolute Discretion</h4>
              <p>Strict NDA protocols and unmarked vehicles available upon request.</p>
            </div>
            <div className={styles.darkStat}>
              <svg className={styles.svgIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              <h4>Elite Crew</h4>
              <p>Only our most senior, rigorously trained staff are assigned to villa projects.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.processSection}>
        <div className={styles.container}>
          <h2 className={styles.centerTitle}>Our Signature Process</h2>
          <div className={styles.processGrid}>
            <div className={styles.processCard}>
              <div className={styles.processStepNumber}>01</div>
              <h4>Private Estate Survey</h4>
              <p>An initial walk-through by a Senior Move Manager to catalog high-value items, measure entryways, and establish security protocols.</p>
            </div>
            <div className={styles.processCard}>
              <div className={styles.processStepNumber}>02</div>
              <h4>Custom Crating & Prep</h4>
              <p>Carpenters build custom crates for art and chandeliers off-site. The team arrives to protect floors, walls, and staircases before moving begins.</p>
            </div>
            <div className={styles.processCard}>
              <div className={styles.processStepNumber}>03</div>
              <h4>White-Glove Transference</h4>
              <p>Execution using air-ride suspension vehicles. Items are packed room-by-room with micro-labeling for exact placement.</p>
            </div>
            <div className={styles.processCard}>
              <div className={styles.processStepNumber}>04</div>
              <h4>Estate Recreation</h4>
              <p>Furniture is assembled, art is staged, and wardrobes are re-hung. All packing debris is removed same-day, leaving the home ready to live in.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="consultation" className={styles.consultationSection}>
        <div className={styles.narrowContainer}>
          <div className={styles.luxuryFormWrapper}>
            <h2>Request a Private Consultation</h2>
            <p>Speak directly with our Luxury Move Director to design your customized relocation plan.</p>
            <form className={styles.luxuryForm}>
              <div className={styles.formRow}>
                <input type="text" placeholder="First Name" className={styles.luxuryInput} />
                <input type="text" placeholder="Last Name" className={styles.luxuryInput} />
              </div>
              <div className={styles.formRow}>
                <input type="email" placeholder="Email Address" className={styles.luxuryInput} />
                <input type="text" placeholder="Phone Number" className={styles.luxuryInput} />
              </div>
              <input type="text" placeholder="Current Estate Location" className={styles.luxuryInput} />
              <button type="submit" className={styles.luxuryBtn}>Schedule Consultation</button>
            </form>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <div className={styles.narrowContainer}>
          <h2 className={styles.centerTitle}>Client Inquiries</h2>
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