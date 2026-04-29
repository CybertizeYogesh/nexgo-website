"use client";

import React, { useState } from "react";
import Image from "next/image";
import CTA from "@/components/CTA";
import styles from "@/styles/VehicleTransport.module.css";

export default function VehicleTransportPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

  const faqs = [
    {
      q: "Do you use open or enclosed carriers?",
      a: "For premium and luxury vehicles, we exclusively use closed, weather-proof container trucks with hydraulic ramps to ensure zero dust, debris, or weather exposure."
    },
    {
      q: "How do you secure sports cars with low ground clearance?",
      a: "Our specialized fleet is equipped with hydraulic lift-gates and wheel-to-wheel strapping systems that never touch your vehicle's chassis or suspension."
    },
    {
      q: "Is my vehicle insured during transit?",
      a: "Yes, we provide comprehensive bumper-to-bumper transit insurance covering the full declared value of your vehicle from pickup to delivery."
    }
  ];

  return (
    <main className={styles.mainWrapper}>
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay}>
          <div className={styles.heroContainer}>
            <span className={styles.premiumBadge}>Auto Logistics</span>
            <h1 className={styles.heroTitle}>Secure Vehicle Transport</h1>
            <p className={styles.heroSubtitle}>
              Enclosed, climate-controlled relocation for luxury cars, superbikes, and daily drivers across India.
            </p>
            <a href="#consultation" className={styles.heroButton}>
              Get a Transport Quote
            </a>
          </div>
        </div>
      </section>

      <section className={styles.partnerBanner}>
        <p>Trusted by India's Premier Auto Dealerships</p>
        <div className={styles.partnerLogos}>
          <span>Porsche</span>
          <span>Mercedes-Benz</span>
          <span>BMW Motorrad</span>
          <span>Audi India</span>
        </div>
      </section>

      <section className={styles.introSection}>
        <div className={styles.narrowContainer}>
          <h2 className={styles.introTitle}>Your Vehicle is in Safe Hands</h2>
          <p className={styles.introText}>
            Transporting a vehicle requires specialized engineering and absolute care. We don't just drive your car onto a ramp; we provide a meticulously engineered logistics solution utilizing state-of-the-art carriers and highly trained handlers to ensure your vehicle arrives in showroom condition.
          </p>
        </div>
      </section>

      <section className={styles.zRow}>
        <div className={styles.zContainer}>
          <div className={styles.zImageWrapper}>
            <Image
              src="/images/services/vehicle-carrier.webp"
              alt="Enclosed premium vehicle carrier"
              width={600}
              height={500}
              className={styles.zImage}
            />
          </div>
          <div className={styles.zTextWrapper}>
            <h3>Premium Enclosed Carriers</h3>
            <p>
              Shield your investment from the elements. Our fleet of custom-built, enclosed auto carriers provides absolute protection against road debris, dust, and severe weather conditions during cross-country transits.
            </p>
            <ul className={styles.premiumList}>
              <li>Hydraulic Lift Gates</li>
              <li>Climate-Controlled Interiors</li>
              <li>Air-Ride Suspension Systems</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.zRow} ${styles.zReverse}`}>
        <div className={styles.zContainer}>
          <div className={styles.zTextWrapper}>
            <h3>Zero-Damage Tie-Down Systems</h3>
            <p>
              Traditional transport methods can strain a vehicle's suspension. We utilize advanced soft-tie, over-the-tire strapping systems that secure the vehicle by its wheels, allowing the chassis to ride smoothly on its own suspension.
            </p>
            <ul className={styles.premiumList}>
              <li>Wheel-to-Wheel Strapping</li>
              <li>Pre-Transit Condition Reports</li>
              <li>Specialized Superbike Cradles</li>
            </ul>
          </div>
          <div className={styles.zImageWrapper}>
            <Image
              src="/images/services/vehicle-strapping.webp"
              alt="Secure wheel strapping system"
              width={600}
              height={500}
              className={styles.zImage}
            />
          </div>
        </div>
      </section>

      <section className={styles.darkBanner}>
        <div className={styles.container}>
          <div className={styles.darkBannerGrid}>
            <div className={styles.darkStat}>
              <svg
                className={styles.svgIcon}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              <h4>Full Transit Insurance</h4>
              <p>Bumper-to-bumper coverage protecting the complete declared value of your vehicle.</p>
            </div>
            <div className={styles.darkStat}>
              <svg
                className={styles.svgIcon}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
              <h4>No Hidden Costs</h4>
              <p>Transparent pricing encompassing tolls, taxes, and specialized handling fees.</p>
            </div>
            <div className={styles.darkStat}>
              <svg
                className={styles.svgIcon}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <h4>24/7 Live Tracking</h4>
              <p>Real-time GPS coordinates and dedicated status updates from your driver.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.processSection}>
        <div className={styles.container}>
          <h2 className={styles.centerTitle}>Our Transport Process</h2>
          <div className={styles.processGrid}>
            <div className={styles.processCard}>
              <div className={styles.processStepNumber}>01</div>
              <h4>Detailed Inspection</h4>
              <p>We generate a meticulous, timestamped digital condition report of your vehicle prior to loading, noting any existing marks.</p>
            </div>
            <div className={styles.processCard}>
              <div className={styles.processStepNumber}>02</div>
              <h4>Secure Loading</h4>
              <p>Your vehicle is carefully driven onto the carrier using low-angle hydraulic ramps and secured using soft wheel straps.</p>
            </div>
            <div className={styles.processCard}>
              <div className={styles.processStepNumber}>03</div>
              <h4>Priority Transit</h4>
              <p>Our enclosed fleet departs on optimized routes with dual-driver teams to ensure the fastest, safest delivery time possible.</p>
            </div>
            <div className={styles.processCard}>
              <div className={styles.processStepNumber}>04</div>
              <h4>Doorstep Handover</h4>
              <p>The vehicle is unloaded at your destination, followed by a final joint inspection to guarantee it arrived in exact pre-move condition.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="consultation" className={styles.consultationSection}>
        <div className={styles.narrowContainer}>
          <div className={styles.luxuryFormWrapper}>
            <h2>Request a Transport Quote</h2>
            <p>Provide your vehicle details below, and our auto logistics team will instantly calculate your transit route and pricing.</p>
            <form className={styles.luxuryForm}>
              <div className={styles.formRow}>
                <input type="text" placeholder="Vehicle Make & Model" className={styles.luxuryInput} />
                <input type="text" placeholder="Manufacturing Year" className={styles.luxuryInput} />
              </div>
              <div className={styles.formRow}>
                <input type="text" placeholder="Pickup City" className={styles.luxuryInput} />
                <input type="text" placeholder="Delivery City" className={styles.luxuryInput} />
              </div>
              <div className={styles.formRow}>
                <input type="text" placeholder="Your Name" className={styles.luxuryInput} />
                <input type="text" placeholder="Phone Number" className={styles.luxuryInput} />
              </div>
              <button type="submit" className={styles.luxuryBtn}>
                Calculate My Quote
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <div className={styles.narrowContainer}>
          <h2 className={styles.centerTitle}>Client Inquiries</h2>
          <div className={styles.faqWrapper}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`${styles.faqItem} ${openFaq === i ? styles.faqOpen : ""}`}
                onClick={() => toggleFaq(i)}
              >
                <div className={styles.faqHeader}>
                  <h4>{faq.q}</h4>
                  <span className={styles.faqIcon}>{openFaq === i ? "−" : "+"}</span>
                </div>
                <div className={styles.faqBody}>
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}