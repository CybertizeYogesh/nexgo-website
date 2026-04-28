"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/Stats.module.css";

const AnimatedNumber = ({ end, duration, suffix = "" }) => {
  const [count, setCount] = useState(0);
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
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTimestamp = null;
    const endValue = parseInt(end.replace(/,/g, ""), 10);
    const durationMs = duration * 1000;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / durationMs, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * endValue));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [end, duration, isVisible]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
};

export default function Stats() {
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

  const stats = [
    { end: "10", suffix: "+", label: "Years Experience" },
    { end: "5000", suffix: "+", label: "Happy Clients" },
    { end: "50", suffix: "+", label: "Cities Covered" },
    { end: "100", suffix: "%", label: "Safe Delivery" }
  ];

  return (
    <section className={styles.statsSection}>
      <div className={styles.container}>
        <div 
          ref={ref}
          className={styles.statsFloatingCard}
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
            willChange: "opacity, transform"
          }}
        >
          <div className={styles.statsGrid}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.statCard}>
                <span className={styles.statNumber}>
                  <AnimatedNumber end={stat.end} duration={2} suffix={stat.suffix} />
                </span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}