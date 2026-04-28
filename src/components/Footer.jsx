import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brandColumn}>
          <Image
            src="/logo.jpg"
            alt="NexGo Packers and Movers Logo"
            width={180}
            height={60}
          />
          <p className={styles.description}>
            Providing safe, fast, and reliable packing and moving services for your home and office relocation needs.
          </p>
        </div>

        <div className={styles.quickLinks}>
          <h3 className={styles.heading}>Quick Links</h3>
          <Link href="/" className={styles.link}><span>›</span> Home</Link>
          <Link href="/about" className={styles.link}><span>›</span> About Us</Link>
          <Link href="/services" className={styles.link}><span>›</span> Services</Link>
          {/* Synced with Navbar */}
          <Link href="/blog" className={styles.link}><span>›</span> Blog</Link>
          <Link href="/contact" className={styles.link}><span>›</span> Contact Us</Link>
        </div>

        <div className={styles.contactColumn}>
          <h3 className={styles.heading}>Contact Us</h3>
          <div className={styles.contactItem}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--action-orange)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={styles.contactIcon}
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>123 Transport Nagar, New Delhi - 110001</span>
          </div>
          <div className={styles.contactItem}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--action-orange)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={styles.contactIcon}
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>+91-9876543210</span>
          </div>
          <div className={styles.contactItem}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--action-orange)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={styles.contactIcon}
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            <span>info@nexgo.in</span>
          </div>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <div className={styles.bottomContent}>
          <div className={styles.copyright}>
            © 2026 NexGo Packers and Movers. All Rights Reserved.
          </div>
          <div className={styles.legalLinks}>
            <Link href="/privacy-policy" className={styles.legalLink}>Privacy Policy</Link>
            <span className={styles.separator}>•</span>
            <Link href="/terms-conditions" className={styles.legalLink}>Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
