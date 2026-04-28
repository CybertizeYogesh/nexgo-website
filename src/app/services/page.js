"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import CTA from "@/components/CTA";
import styles from "@/styles/Services.module.css";

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

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    { q: "How much notice do I need to give before moving?", a: "We recommend booking at least 7-10 days in advance for local shifts, and 15-20 days in advance for long-distance relocations to ensure fleet availability." },
    { q: "Are my belongings insured during the move?", a: "Yes. We offer comprehensive transit insurance to cover any unforeseen circumstances, giving you 100% peace of mind during interstate moves." },
    { q: "Do you provide all the packing materials?", a: "Yes, our team brings premium bubble wrap, double-walled corrugated sheets, stretch film, and custom crates for delicate items." },
    { q: "Are there any hidden charges in the quote?", a: "No. Our quotes are completely transparent. After our pre-move survey, the price provided is binding." }
  ];

  return (
    <main className={styles.mainWrapper}>
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <span className={styles.badge}>End-to-End Logistics</span>
          <h1 className={styles.title}>Our Specialized Moving Services</h1>
          <p className={styles.subtitle}>
            From packing your fragile glassware to unloading heavy commercial equipment, our specialized teams handle every aspect of your relocation with absolute precision.
          </p>
        </div>
      </section>

      <section className={styles.statsSection}>
        <div className={styles.container}>
          <div className={styles.statsFloatingCard}>
            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <span className={styles.statNumber}>
                  <AnimatedNumber end="15" duration={2} suffix="+" />
                </span>
                <span className={styles.statLabel}>Years Exp.</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statNumber}>
                  <AnimatedNumber end="10000" duration={2} suffix="+" />
                </span>
                <span className={styles.statLabel}>Families</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statNumber}>
                  <AnimatedNumber end="500" duration={2} suffix="+" />
                </span>
                <span className={styles.statLabel}>Corporate</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statNumber}>
                  <AnimatedNumber end="15000" duration={2} suffix="+" />
                </span>
                <span className={styles.statLabel}>Pin Codes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <div className={styles.iconWrapper}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
              </div>
              <h3>Home Shifting</h3>
              <p>Seamless, zero-damage household relocation. We pack, transport, and unpack your life's memories with care.</p>
              <Link href="/services/home-shifting" className={styles.serviceLink}>Explore Service</Link>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.iconWrapper}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>
              </div>
              <h3>Office Shifting</h3>
              <p>Minimal downtime office transitions with specialized handling for IT infrastructure and sensitive documents.</p>
              <Link href="/services/office-shifting" className={styles.serviceLink}>Explore Service</Link>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.iconWrapper}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"></path><path d="M5 21V7l8-4v18"></path><path d="M19 21V11l-6-4"></path><path d="M9 9l-2 2"></path><path d="M9 13l-2 2"></path></svg>
              </div>
              <h3>Villa Movers</h3>
              <p>Exclusive, premium moving services for large-scale residential properties and luxury estates.</p>
              <Link href="/services/villa-movers" className={styles.serviceLink}>Explore Service</Link>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.iconWrapper}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
              </div>
              <h3>Commercial Moving</h3>
              <p>Heavy-duty transport solutions for retail spaces, restaurants, and large commercial inventories.</p>
              <Link href="/services/commercial-moving" className={styles.serviceLink}>Explore Service</Link>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.iconWrapper}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line></svg>
              </div>
              <h3>Loading & Unloading</h3>
              <p>Professional handling using advanced equipment like hydraulic tail-lifts and heavy-duty trolleys.</p>
              <Link href="/services/loading-unloading" className={styles.serviceLink}>Explore Service</Link>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.iconWrapper}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
              </div>
              <h3>Packing & Unpacking</h3>
              <p>Industrial-grade 3-layer protection applied by our trained crew to ensure complete waterproof and impact resistance.</p>
              <Link href="/services/packing-unpacking" className={styles.serviceLink}>Explore Service</Link>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.iconWrapper}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              </div>
              <h3>Warehouse Services</h3>
              <p>Climate-controlled, 24/7 CCTV monitored storage facilities for your short and long-term storage needs.</p>
              <Link href="/services/warehouse-services" className={styles.serviceLink}>Explore Service</Link>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.iconWrapper}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path></svg>
              </div>
              <h3>Insurance Services</h3>
              <p>Comprehensive transit coverage to provide you with absolute financial protection and peace of mind.</p>
              <Link href="/services/insurance-services" className={styles.serviceLink}>Explore Service</Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.advantagesSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitleDark}>The NexGo Advantage</h2>
          <div className={styles.advantagesGrid}>
            <div className={styles.advantageCard}>
              <div className={styles.advIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--primary-blue)" strokeWidth="1.5"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
              </div>
              <h3>Nationwide Network</h3>
              <p>Operating across 50+ cities and 15,000+ pin codes for flawless point-to-point delivery.</p>
            </div>
            <div className={styles.advantageCard}>
              <div className={styles.advIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--primary-blue)" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="M9 12l2 2 4-4"></path></svg>
              </div>
              <h3>Zero Damage Promise</h3>
              <p>Strict adherence to international quality standards ensuring your assets remain untouched.</p>
            </div>
            <div className={styles.advantageCard}>
              <div className={styles.advIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--primary-blue)" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <h3>24/7 Live Support</h3>
              <p>Dedicated move coordinators available around the clock to assist with your relocation.</p>
            </div>
            <div className={styles.advantageCard}>
              <div className={styles.advIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--primary-blue)" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </div>
              <h3>In-House Crew</h3>
              <p>We do not use day-laborers. Every packer undergoes a rigorous training program.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.processSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitleDark}>Our Simple Process</h2>
          <div className={styles.processGrid}>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>1</div>
              <div className={styles.stepText}>
                <h3>Survey & Quote</h3>
                <p>Free home visit and volumetric analysis for a transparent quote.</p>
              </div>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>2</div>
              <div className={styles.stepText}>
                <h3>Expert Packing</h3>
                <p>Industrial protection applied systematically by our trained crew.</p>
              </div>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>3</div>
              <div className={styles.stepText}>
                <h3>Safe Transit</h3>
                <p>Real-time GPS tracked vehicles ensuring secure handling.</p>
              </div>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>4</div>
              <div className={styles.stepText}>
                <h3>Unpack & Settle</h3>
                <p>Complete unloading and basic furniture assembly at your new location.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.testimonialSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitleDark}>Trusted by Thousands</h2>
          <div className={styles.testimonialGrid}>
            <div className={styles.testiCard}>
              <div className={styles.quoteMark}>"</div>
              <div className={styles.stars}>★★★★★</div>
              <p className={styles.testiText}>Amazing home shifting experience. Not a single glass was broken during our move from Delhi to Bangalore!</p>
              <h4 className={styles.testiAuthor}>- Amit Sharma</h4>
            </div>
            <div className={styles.testiCard}>
              <div className={styles.quoteMark}>"</div>
              <div className={styles.stars}>★★★★★</div>
              <p className={styles.testiText}>Our corporate office move was seamless. The IT infrastructure was handled perfectly with zero downtime.</p>
              <h4 className={styles.testiAuthor}>- Priya Desai, TechCorp</h4>
            </div>
            <div className={styles.testiCard}>
              <div className={styles.quoteMark}>"</div>
              <div className={styles.stars}>★★★★★</div>
              <p className={styles.testiText}>My car arrived without a scratch. The enclosed carrier and live GPS tracking gave me complete peace of mind.</p>
              <h4 className={styles.testiAuthor}>- Rahul Verma</h4>
            </div>
            <div className={styles.testiCard}>
              <div className={styles.quoteMark}>"</div>
              <div className={styles.stars}>★★★★★</div>
              <p className={styles.testiText}>Their storage facility is top-notch. Clean, climate-controlled, and very secure for our long-term needs.</p>
              <h4 className={styles.testiAuthor}>- Sneha Gupta</h4>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitleDark}>Frequently Asked Questions</h2>
          <p className={styles.faqSubtitle}>Find answers to common questions about our moving services.</p>
          <div className={styles.faqContainer}>
            {faqs.map((faq, index) => (
              <div
                key={index}
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
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}