"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setMobileServicesOpen(false);
  };

  const services = [
    { href: "/services/home-shifting", label: "Home Shifting" },
    { href: "/services/office-shifting", label: "Office Shifting" },
    { href: "/services/villa-movers", label: "Villa Movers" },
    { href: "/services/commercial-moving", label: "Commercial Moving" },
    { href: "/services/loading-unloading", label: "Loading & Unloading" },
    { href: "/services/packing-unpacking", label: "Packing & Unpacking" },
    { href: "/services/warehouse-services", label: "Warehouse Services" },
    { href: "/services/insurance-services", label: "Insurance Services" },
  ];

  const isActive = (path) => pathname === path;
  const isServicesActive = pathname?.startsWith('/services');

  return (
    <>
      <div
        className={`${styles.overlay} ${isOpen ? styles.showOverlay : ""}`}
        onClick={closeMenu}
        aria-hidden="true"
      ></div>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/logo.webp"
            alt="NexGo Packers and Movers Logo"
            width={160}
            height={82}
            className={styles.logoImage}
            priority
          />
        </Link>

        <ul className={styles.navLinks}>
          <li>
            <Link href="/" className={`${styles.navLink} ${isActive('/') ? styles.activeLink : ''}`}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className={`${styles.navLink} ${isActive('/about') ? styles.activeLink : ''}`}>
              About Us
            </Link>
          </li>
          <li
            className={styles.dropdownWrapper}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
            onFocus={() => setServicesOpen(true)}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget)) {
                setServicesOpen(false);
              }
            }}
          >
            <Link 
              href="/services" 
              className={`${styles.navLink} ${isServicesActive ? styles.activeLink : ''}`}
              aria-haspopup="true"
              aria-expanded={servicesOpen}
              onClick={(e) => {
                if (!servicesOpen) {
                  e.preventDefault();
                  setServicesOpen(true);
                }
              }}
            >
              Services
              <svg
                className={`${styles.arrow} ${servicesOpen ? styles.arrowUp : ""}`}
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </Link>
            <div className={`${styles.dropdown} ${servicesOpen ? styles.dropdownShow : ""}`}>
              {services.map((service, index) => (
                <Link
                  key={index}
                  href={service.href}
                  className={`${styles.dropdownLink} ${isActive(service.href) ? styles.activeDropdownLink : ''}`}
                  onClick={() => setServicesOpen(false)}
                >
                  {service.label}
                </Link>
              ))}
            </div>
          </li>
          <li>
            <Link href="/blog" className={`${styles.navLink} ${isActive('/blog') ? styles.activeLink : ''}`}>
              Blog
            </Link>
          </li>
          <li>
            <Link href="/contact" className={`${styles.navLink} ${isActive('/contact') ? styles.activeLink : ''}`}>
              Contact Us
            </Link>
          </li>
        </ul>

        <Link href="/quote" className={styles.ctaButton}>
          Get a Quote
        </Link>

        <button
          className={`${styles.menuButton} ${isOpen ? styles.active : ""}`}
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      <div className={`${styles.mobileMenu} ${isOpen ? styles.showMenu : styles.hideMenu}`}>
        <ul className={styles.mobileLinks}>
          <li>
            <Link href="/" className={`${styles.mobileLink} ${isActive('/') ? styles.activeMobileLink : ''}`} onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className={`${styles.mobileLink} ${isActive('/about') ? styles.activeMobileLink : ''}`} onClick={closeMenu}>
              About Us
            </Link>
          </li>
          <li className={styles.mobileAccordionWrapper}>
            <div className={styles.mobileAccordionHeader}>
              <Link href="/services" className={`${styles.mobileLink} ${styles.mobileAccordionLink} ${isServicesActive ? styles.activeMobileLink : ''}`} onClick={closeMenu}>
                Services
              </Link>
              <button
                className={styles.mobileAccordionToggle}
                onClick={(e) => {
                  e.preventDefault();
                  setMobileServicesOpen(!mobileServicesOpen);
                }}
                aria-label="Toggle services menu"
              >
                <svg className={`${styles.arrow} ${mobileServicesOpen ? styles.arrowUp : ""}`} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
            </div>
            <div className={`${styles.mobileAccordionContent} ${mobileServicesOpen ? styles.mobileAccordionOpen : ""}`}>
              {services.map((service, index) => (
                <Link 
                  key={index} 
                  href={service.href} 
                  className={`${styles.mobileSubLinkItem} ${isActive(service.href) ? styles.activeMobileSubLink : ''}`} 
                  onClick={closeMenu}
                >
                  {service.label}
                </Link>
              ))}
            </div>
          </li>
          <li>
            <Link href="/blog" className={`${styles.mobileLink} ${isActive('/blog') ? styles.activeMobileLink : ''}`} onClick={closeMenu}>
              Blog
            </Link>
          </li>
          <li>
            <Link href="/contact" className={`${styles.mobileLink} ${isActive('/contact') ? styles.activeMobileLink : ''}`} onClick={closeMenu}>
              Contact Us
            </Link>
          </li>
        </ul>
        <Link href="/quote" className={styles.mobileCta} onClick={closeMenu}>
          Get a Quote
        </Link>
      </div>
    </nav>
    </>
  );
}