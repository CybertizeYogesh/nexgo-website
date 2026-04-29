"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/WhyChooseUs.module.css";

const features = [
  "Highly Trained Professionals",
  "Top-Quality Packing Materials",
  "Zero Hidden Charges",
  "Timely Delivery"
];

export default function WhyChooseUs() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={`${styles.section} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.container}>
        <div className={`${styles.imageColumn} ${styles.animateFadeRight}`}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/hero-banner.webp"
              alt="Professional Moving Team"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className={styles.floatingTag}>
            <span className={styles.tagIcon}>✓</span>
            <span className={styles.tagText}>Trusted Service</span>
          </div>
        </div>

        <div className={styles.contentColumn}>
          <span className={`${styles.badge} ${styles.animateFadeUp}`}>Why Choose Us</span>
          <h2 className={`${styles.headline} ${styles.animateFadeUp} ${styles.delay100}`}>
            We Make Moving Stress-Free & Secure
          </h2>
          <p className={`${styles.description} ${styles.animateFadeUp} ${styles.delay200}`}>
            At NexGo Packers and Movers, we prioritize the safety of your belongings and your peace of mind. Our commitment to quality ensures a seamless relocation experience from start to finish.
          </p>

          <ul className={styles.featureList}>
            {features.map((feature, index) => (
              <li 
                key={index} 
                className={`${styles.featureItem} ${styles.animateFadeUp}`}
                style={{ transitionDelay: `${300 + (index * 100)}ms` }}
              >
                <span className={styles.checkIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <span className={styles.featureText}>{feature}</span>
              </li>
            ))}
          </ul>
          <Link 
            href="/quote" 
            className={`${styles.ctaBtn} ${styles.animateFadeUp}`}
            style={{ transitionDelay: '700ms' }}
          >
            Get Your Quote <span>➔</span>
          </Link>
        </div>
      </div>
    </section>
  );
}