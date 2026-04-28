"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import styles from "@/styles/Services.module.css";

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

const allServices = [
  {
    href: "/services/home-shifting",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
    ),
    title: "Home Shifting",
    description: "Seamless, zero-damage household relocation. We pack, transport, and unpack your life's memories with care."
  },
  {
    href: "/services/office-shifting",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>
    ),
    title: "Office Shifting",
    description: "Minimal downtime office transitions with specialized handling for IT infrastructure and sensitive documents."
  },
  {
    href: "/services/villa-movers",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"></path><path d="M5 21V7l8-4v18"></path><path d="M19 21V11l-6-4"></path><path d="M9 9l-2 2"></path><path d="M9 13l-2 2"></path></svg>
    ),
    title: "Villa Movers",
    description: "Exclusive, premium moving services for large-scale residential properties and luxury estates."
  },
  {
    href: "/services/commercial-moving",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
    ),
    title: "Commercial Moving",
    description: "Heavy-duty transport solutions for retail spaces, restaurants, and large commercial inventories."
  },
  {
    href: "/services/loading-unloading",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line></svg>
    ),
    title: "Loading & Unloading",
    description: "Professional handling using advanced equipment like hydraulic tail-lifts and heavy-duty trolleys."
  },
  {
    href: "/services/packing-unpacking",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
    ),
    title: "Packing & Unpacking",
    description: "Industrial-grade 3-layer protection applied by our trained crew to ensure complete waterproof and impact resistance."
  },
  {
    href: "/services/warehouse-services",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
    ),
    title: "Warehouse Services",
    description: "Climate-controlled, 24/7 CCTV monitored storage facilities for your short and long-term storage needs."
  },
  {
    href: "/services/insurance-services",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path></svg>
    ),
    title: "Insurance Services",
    description: "Comprehensive transit coverage to provide you with absolute financial protection and peace of mind."
  }
];

export default function Services({ limit }) {
  const displayedServices = limit ? allServices.slice(0, limit) : allServices;

  return (
    <div className={styles.mainWrapper}>
      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <Reveal>
            <div style={{ textAlign: 'center' }}>
              <span className={styles.badge}>Our Services</span>
              <h2 className={styles.sectionTitleDark}>Our Premium Moving Services</h2>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <p className={styles.subtitle} style={{ textAlign: 'center', marginBottom: '50px', color: '#555' }}>
              Comprehensive relocation solutions tailored to meet all your moving needs with utmost care and professionalism.
            </p>
          </Reveal>
          <div className={styles.servicesGrid}>
            {displayedServices.map((service, index) => (
              <Reveal key={index} delay={(index % 4) * 100}>
                <div className={styles.serviceCard}>
                  <div className={styles.iconWrapper}>
                    {service.icon}
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <Link href={service.href} className={styles.serviceLink}>
                    Explore Service ➔
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
          {limit && limit < allServices.length && (
            <Reveal delay={200}>
              <div style={{ textAlign: 'center', marginTop: '50px' }}>
                <Link href="/services" className={styles.viewAllBtn}>
                  View All Services <span>➔</span>
                </Link>
              </div>
            </Reveal>
          )}
        </div>
      </section>
    </div>
  );
}