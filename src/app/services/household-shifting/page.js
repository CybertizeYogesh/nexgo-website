import Image from "next/image";
import Link from "next/link";
import CTA from "@/components/CTA";
import styles from "@/styles/ServiceDetail.module.css";

export const metadata = {
  title: "Household Shifting Services - NexGo Packers & Movers",
  description: "Safe, secure, and fully insured household relocation services across India.",
};

export default function HouseholdShiftingPage() {
  return (
    <main className={styles.mainWrapper}>
      <section className={styles.heroBanner}>
        <div className={styles.heroOverlay}>
          <div className={styles.heroContent}>
            <span className={styles.badge}>Residential Logistics</span>
            <h1 className={styles.animateFadeUp}>Premium Household Shifting Services</h1>
            <p className={styles.animateFadeUpDelay}>Experience a 100% stress-free home relocation with our specialized packing team, GPS-tracked fleet, and comprehensive transit insurance.</p>
          </div>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.twoColumnLayout}>
            <div className={styles.leftContent}>
              <h2 className={styles.sectionTitle}>Your Memories, Safely Transported</h2>
              <p>Relocating to a new home is a major life event. At NexGo Packers & Movers, we understand that we aren't just moving boxes; we are moving your life's memories. Whether you are shifting to the next street or across the country, our dedicated household shifting team ensures a seamless, zero-damage transition.</p>
              <p>Unlike local vendors, we employ a strict <strong>3-Layer Protection Standard</strong> using premium bubble wrap, corrugated sheets, and stretch film. Every item is inventoried, safely loaded using hydraulic lifts, and transported in closed, weather-proof containers.</p>
              <h3 className={styles.subTitle}>Comprehensive Handling</h3>
              <div className={styles.handlingGrid}>
                <div className={styles.handlingCard}>
                  <div className={styles.checkIcon}>✓</div>
                  <div>
                    <h4>Delicate Electronics</h4>
                    <p>Anti-static packing for TVs, home theaters, and PCs.</p>
                  </div>
                </div>
                <div className={styles.handlingCard}>
                  <div className={styles.checkIcon}>✓</div>
                  <div>
                    <h4>Heavy Furniture</h4>
                    <p>Expert dismantling and reassembly of beds and wardrobes.</p>
                  </div>
                </div>
                <div className={styles.handlingCard}>
                  <div className={styles.checkIcon}>✓</div>
                  <div>
                    <h4>Fragile Kitchenware</h4>
                    <p>Custom cellular boxes for glass, crockery, and fine china.</p>
                  </div>
                </div>
                <div className={styles.handlingCard}>
                  <div className={styles.checkIcon}>✓</div>
                  <div>
                    <h4>Fine Art & Antiques</h4>
                    <p>Custom wooden crating for high-value decorative items.</p>
                  </div>
                </div>
              </div>
              <h3 className={styles.subTitle}>Our 5-Step Relocation Process</h3>
              <div className={styles.processTimeline}>
                <div className={styles.processStep}>
                  <div className={styles.stepNum}>1</div>
                  <div className={styles.stepText}>
                    <h4>Pre-Move Survey & AI Quote</h4>
                    <p>A free home visit or video survey to analyze the volume and provide a binding, transparent quote with zero hidden charges.</p>
                  </div>
                </div>
                <div className={styles.processStep}>
                  <div className={styles.stepNum}>2</div>
                  <div className={styles.stepText}>
                    <h4>Industrial-Grade Packing</h4>
                    <p>Our trained crew arrives on time with premium materials to systematically pack and digitally barcode your belongings.</p>
                  </div>
                </div>
                <div className={styles.processStep}>
                  <div className={styles.stepNum}>3</div>
                  <div className={styles.stepText}>
                    <h4>Safe Loading & Securing</h4>
                    <p>Heavy-duty trolleys and hydraulic tail-lifts are used to load items safely, securing them with cargo straps inside the truck.</p>
                  </div>
                </div>
                <div className={styles.processStep}>
                  <div className={styles.stepNum}>4</div>
                  <div className={styles.stepText}>
                    <h4>GPS-Tracked Transit</h4>
                    <p>Your dedicated move manager monitors the weather-proof truck in real-time, keeping you updated until arrival.</p>
                  </div>
                </div>
                <div className={styles.processStep}>
                  <div className={styles.stepNum}>5</div>
                  <div className={styles.stepText}>
                    <h4>Unloading & Setup</h4>
                    <p>We unload, unbox, and reassemble basic furniture in your new home, removing all packing debris before we leave.</p>
                  </div>
                </div>
              </div>
              <h3 className={styles.subTitle}>Frequently Asked Questions</h3>
              <div className={styles.faqWrapper}>
                <div className={styles.faqItem}>
                  <h4>Do you provide transit insurance for household goods?</h4>
                  <p>Yes. We offer comprehensive transit insurance to cover any unforeseen circumstances, giving you 100% peace of mind during interstate moves.</p>
                </div>
                <div className={styles.faqItem}>
                  <h4>How far in advance should I book my home move?</h4>
                  <p>We recommend booking at least 7-10 days in advance for local shifts, and 15-20 days in advance for long-distance relocations to ensure fleet availability.</p>
                </div>
                <div className={styles.faqItem}>
                  <h4>Do you uninstall ACs and wall-mounted TVs?</h4>
                  <p>We handle basic dismantling of beds and standard furniture. However, for complex electronics like split ACs or drilling tasks, we recommend hiring specialized technicians, which we can help arrange.</p>
                </div>
              </div>
            </div>

            <div className={styles.rightSidebar}>
              <div className={styles.stickyWidget}>
                <h3>Ready to Shift?</h3>
                <p>Get a precise, personalized quote for your household move in minutes.</p>
                <div className={styles.contactDetails}>
                  <div className={styles.contactRow}>
                    <span>📞</span> <strong>+91-9876543210</strong>
                  </div>
                  <div className={styles.contactRow}>
                    <span>✉️</span> <strong>info@nexgo.in</strong>
                  </div>
                </div>
                <Link href="/quote" className={styles.quoteButton}>
                  Get a Free Quote
                </Link>
                <div className={styles.sidebarLinks}>
                  <h4>Other Services</h4>
                  <ul>
                    <li><Link href="/services/office-shifting">Office Shifting ➔</Link></li>
                    <li><Link href="/services/vehicle-transport">Car & Bike Transport ➔</Link></li>
                    <li><Link href="/services/warehousing">Secure Warehousing ➔</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}