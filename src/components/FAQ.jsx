"use client";

import { useState, useEffect, useRef } from "react";
import styles from "../styles/FAQ.module.css";

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

const faqs = [
  {
    q: "How much notice do I need to give before moving?",
    a: "We recommend booking at least 1-2 weeks in advance to ensure your preferred moving date, though we do accommodate last-minute requests based on availability."
  },
  {
    q: "Are my belongings insured during the move?",
    a: "Yes, we provide comprehensive transit insurance options to ensure your goods are fully protected against any unforeseen circumstances."
  },
  {
    q: "Do you provide all the packing materials?",
    a: "Absolutely. Our team brings premium packing materials, including bubble wrap, sturdy cartons, and specialized packing paper to secure all items."
  },
  {
    q: "Are there any hidden charges in the quote?",
    a: "No. We believe in 100% transparent pricing. The quote you receive after our assessment is the final price you pay."
  }
];

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      <div className={styles.container}>
        <Reveal>
          <h2 className={styles.sectionTitleDark}>Frequently Asked Questions</h2>
        </Reveal>
        <Reveal delay={100}>
          <p className={styles.faqSubtitle}>
            Find answers to common questions about our moving services.
          </p>
        </Reveal>
        <div className={styles.faqContainer}>
          {faqs.map((faq, index) => (
            <Reveal key={index} delay={index * 100}>
              <div
                className={`${styles.faqItem} ${openFaq === index ? styles.faqOpen : ''}`}
                onClick={() => toggleFaq(index)}
              >
                <div className={styles.faqHeader}>
                  <h3>{faq.q}</h3>
                  <span className={styles.faqIcon}>{openFaq === index ? '-' : '+'}</span>
                </div>
                <div className={styles.faqBody}>
                  <p>{faq.a}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}