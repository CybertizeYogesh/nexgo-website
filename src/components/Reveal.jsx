"use client";

import { useState, useEffect, useRef } from "react";
import styles from "../styles/Reveal.module.css";

export function Reveal({ children, delay = 0, className = "" }) {
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
      className={`${styles.reveal} ${isVisible ? styles.visible : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export function RevealGroup({ children, staggerIndex = 0, staggerDelay = 100, className = "" }) {
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
    <div ref={ref} className={`${styles.revealGroup} ${isVisible ? styles.visible : ""} ${className}`}>
      {children}
    </div>
  );
}

export function getStaggerClass(index, maxItems = 8) {
  const delays = [0, 100, 200, 300, 400, 500, 600, 700];
  return `animation-delay-${delays[index] || (index * 100)}`;
}