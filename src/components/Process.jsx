"use client";

import { Reveal } from "./Reveal";
import styles from "../styles/Process.module.css";

const steps = [
  {
    number: "1",
    title: "Book Your Move",
    description: "Share your requirements and get a free quote.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    )
  },
  {
    number: "2",
    title: "Safe Packing",
    description: "Our experts pack your belongings with care.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    )
  },
  {
    number: "3",
    title: "Secure Loading",
    description: "Careful loading into our specialized vehicles.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="2" ry="2" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    )
  },
  {
    number: "4",
    title: "Timely Delivery",
    description: "Safe unloading and setup at your new destination.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    )
  }
];

export default function Process() {
  return (
    <section className={styles.processSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Reveal>
            <span className={styles.badge}>Process</span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className={styles.title}>Our Simple Process</h2>
          </Reveal>
          <Reveal delay={200}>
            <p className={styles.subtitle}>Moving made easy in 4 simple steps.</p>
          </Reveal>
        </div>

        <div className={styles.processGrid}>
          {steps.map((step, index) => (
            <Reveal key={index} delay={index * 120}>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>{step.number}</div>
                <div className={styles.stepContent}>
                  <div className={styles.stepIcon}>{step.icon}</div>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDescription}>{step.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}