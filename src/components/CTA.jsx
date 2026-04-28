import Link from "next/link";
import styles from "../styles/CTA.module.css";

export default function CTA() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Ready for a Stress-Free Move?</h2>
        <p className={styles.subtitle}>
          Get a personalized quote in minutes and let us handle the rest.
        </p>
        <Link href="/quote" className={styles.button}>
          Get A Free Quote
        </Link>
      </div>
    </section>
  );
}