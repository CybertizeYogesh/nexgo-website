"use client";

import { useState, useEffect, useRef } from "react";
import styles from "../styles/ServiceAreas.module.css";

function Reveal({ children, delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 0.6s ease-out ${delay}ms, transform 0.6s ease-out ${delay}ms`,
        willChange: "opacity, transform"
      }}
    >
      {children}
    </div>
  );
}

const cities = [
  { name: "Delhi NCR", highlight: false },
  { name: "Mumbai", highlight: false },
  { name: "Bangalore", highlight: false },
  { name: "Pune", highlight: false },
  { name: "Chennai", highlight: false },
  { name: "Hyderabad", highlight: false },
  { name: "Kolkata", highlight: false },
  { name: "Ahmedabad", highlight: false }
];

function MapPin() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
  );
}

export default function ServiceAreas() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Reveal>
            <span className={styles.label}>Service Areas</span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className={styles.title}>Our Service Areas</h2>
          </Reveal>
          <Reveal delay={200}>
            <p className={styles.subtitle}>Providing reliable relocation services across major Indian cities.</p>
          </Reveal>
        </div>

        <div className={styles.citiesGrid}>
          {cities.map((city, index) => (
            <Reveal key={index} delay={index * 80}>
              <div key={index} className={`${styles.cityCard} ${city.highlight ? styles.highlight : ''}`}>
                <span className={styles.iconWrapper}>
                  <MapPin />
                </span>
                <span className={styles.cityName}>{city.name}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}