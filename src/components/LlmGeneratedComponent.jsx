"use client";

import React from "react";
import CTA from "@/components/CTA";
import styles from "@/styles/ServiceDetail.module.css";

export default function LlmGeneratedComponent() {
  const featureData = {
    heading: "Why Choose NexGo for Home Shifting?",
    moveManager: {
      label: "Dedicated Move Manager",
      description: "Unlike local operators, we provide a dedicated Move Manager for every client. From the initial survey to the final unpacking at your new home, you have a single point of contact who ensures everything stays on schedule."
    },
    packing: {
      label: "3-Layer Packing",
      description: "Bubble wrap, corrugated sheets, and film for max protection."
    },
    fleet: {
      label: "Modern Fleet",
      description: "Weather-proof, closed-container trucks with GPS tracking."
    }
  };

  const reviewData = {
    rating: "4.9/5.0",
    reviewCount: "1,500+",
    reviewText: "Based on 1,500+ verified customer reviews across India."
  };

  const checklistData = {
    title: "Free Moving Checklist",
    description: "Don't forget a single detail. Download our comprehensive step-by-step moving guide.",
    buttonText: "Download PDF ➔"
  };

  const guaranteesData = {
    title: "Our Guarantees",
    items: [
      "100% Price Transparency",
      "On-Time Delivery",
      "Background-Checked Staff",
      "24/7 Live Tracking"
    ]
  };

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
            {/* LEFT COLUMN: FEATURE TEXT */}
            <div className={styles.leftContent}>
              <h2 className={styles.sectionTitle}>{featureData.heading}</h2>
              <p className={styles.description}>{featureData.moveManager.description}</p>

              <div className={styles.featureGrid}>
                <div className={styles.featureItem}>
                  <h4>{featureData.packing.label}</h4>
                  <p>{featureData.packing.description}</p>
                </div>
                <div className={styles.featureItem}>
                  <h4>{featureData.fleet.label}</h4>
                  <p>{featureData.fleet.description}</p>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: EQUAL-STACKED IMAGES */}
            <div className={styles.rightSidebar}>
              <div className={styles.imageStackContainer}>
                <div className={styles.imagePlaceholder}>
                  <span className={styles.imagePlaceholderText}>image_moving_team.png</span>
                  <p>Clean, modern image of a moving team carrying a couch.</p>
                </div>
                <div className={styles.imagePlaceholder}>
                  <span className={styles.imagePlaceholderText}>image_packing_boxes.png</span>
                  <p>Close-up of hands applying the final layer of film to a corrugated box.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INFO PANEL - THREE CARDS */}
      <section className={styles.infoPanelSection}>
        <div className={styles.container}>
          <div className={styles.infoPanelGrid}>
            
            {/* CARD 1: GOOGLE REVIEWS */}
            <div className={styles.infoCard}>
              <div className={styles.reviewBadge}>
                <span className={styles.googleG}>G</span>
                <div className={styles.reviewScoreBlock}>
                  <strong>{reviewData.rating}</strong>
                  <span className={styles.stars}>★★★★★</span>
                </div>
              </div>
              <p className={styles.reviewText}>{reviewData.reviewText}</p>
            </div>

            {/* CARD 2: FREE CHECKLIST */}
            <div className={`${styles.infoCard} ${styles.blueCard}`}>
              <h4 className={styles.cardTitle}>{checklistData.title}</h4>
              <p className={styles.cardDescription}>{checklistData.description}</p>
              <button className={styles.downloadButton}>{checklistData.buttonText}</button>
            </div>

            {/* CARD 3: GUARANTEES */}
            <div className={styles.infoCard}>
              <h4 className={styles.cardTitleDark}>{guaranteesData.title}</h4>
              <ul className={styles.guaranteeList}>
                {guaranteesData.items.map((item, index) => (
                  <li key={index}>
                    <span className={styles.checkmark}>✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}