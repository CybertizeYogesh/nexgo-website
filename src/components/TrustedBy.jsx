"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/TrustedBy.module.css";

function Globe() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
    </svg>
  );
}

function Cube() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
      <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
      <line x1="12" y1="22.08" x2="12" y2="12"></line>
    </svg>
  );
}

function IntersectCircles() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="12" r="6"></circle>
      <circle cx="15" cy="12" r="6"></circle>
    </svg>
  );
}

function Shield() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    </svg>
  );
}

function Hexagon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
    </svg>
  );
}

function Star() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
  );
}

const companies = [
  { icon: <Globe />, name: "GlobalTech" },
  { icon: <Cube />, name: "BlockBuild" },
  { icon: <IntersectCircles />, name: "Synergy Corp" },
  { icon: <Shield />, name: "SecureFlow" },
  { icon: <Hexagon />, name: "HexaData" },
  { icon: <Star />, name: "StarPoint" }
];

export default function TrustedBy() {
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
      <div className={`${styles.container} ${styles.animateFadeUp}`}>
        <div className={styles.label}>Trusted By Leading Enterprises Across India</div>
        <div className={styles.trackWrapper}>
          <div className={styles.track}>
            <div className={styles.logoGroup}>
              {companies.map((company, index) => (
                <div key={`set1-${index}`} className={styles.logo}>
                  <div className={styles.iconWrapper}>{company.icon}</div>
                  <span className={styles.companyName}>{company.name}</span>
                </div>
              ))}
            </div>
            <div className={styles.logoGroup} aria-hidden="true">
              {companies.map((company, index) => (
                <div key={`set2-${index}`} className={styles.logo}>
                  <div className={styles.iconWrapper}>{company.icon}</div>
                  <span className={styles.companyName}>{company.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}