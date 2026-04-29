import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.backgroundWrapper}>
        <Image
          src="/images/hero-bg.webp"
          alt="NexGo Background"
          fill
          style={{ objectFit: "cover" }}
          className={styles.backgroundImage}
          priority
        />
        <div className={styles.overlay} />
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={`${styles.title} ${styles.animateLeft1}`}>
            Fast, Safe & Reliable Relocation Services
          </h1>
          <p className={`${styles.subtitle} ${styles.animateLeft2}`}>
            Experience stress-free home and office shifting with our professional team. We handle everything from packing to unpacking, ensuring your belongings reach safely and on time.
          </p>
          <div className={`${styles.trustIndicators} ${styles.animateLeft3}`}>
            <div className={styles.trustItem}>
              <span className={styles.trustIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </span>
              <span>ISO Certified</span>
            </div>
            <div className={styles.trustItem}>
              <span className={styles.trustIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </span>
              <span>100% Safe Transit</span>
            </div>
            <div className={styles.trustItem}>
              <span className={styles.trustIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </span>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>

        <div className={`${styles.formCard} ${styles.animateRight}`}>
          <h2 className={styles.formTitle}>Get a Free Moving Quote</h2>
          <form className={styles.form}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className={styles.input}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className={styles.input}
              required
            />
            <div className={styles.row}>
              <input
                type="text"
                name="fromCity"
                placeholder="Moving From (City)"
                className={styles.input}
                required
              />
              <input
                type="text"
                name="toCity"
                placeholder="Moving To (City)"
                className={styles.input}
                required
              />
            </div>
            <button type="submit" className={styles.submitButton}>
              Get Free Quote
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}