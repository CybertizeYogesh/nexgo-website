import Link from "next/link";
import CTA from "@/components/CTA";
import styles from "@/styles/ServiceDetail.module.css";

export const metadata = {
  title: "Secure Warehousing & Storage Services - NexGo Packers & Movers",
  description: "Climate-controlled, 24/7 monitored warehousing and storage facilities across India.",
};

export default function WarehousingPage() {
  const handledItems = [
    { icon: "✓", title: "Climate Control", desc: "Temperature and humidity controlled storage zones." },
    { icon: "✓", title: "24/7 Security", desc: "CCTV monitoring and strict access control." },
    { icon: "✓", title: "Inventory System", desc: "Digital cataloging of all stored items." },
    { icon: "✓", title: "Flexible Tenure", desc: "Daily, monthly, or yearly contracts." },
    { icon: "✓", title: "Short-Term Storage", desc: "Ideal for temporary relocations." },
    { icon: "✓", title: "Long-Term Storage", desc: "Safe storage for extended periods." },
  ];

  const processSteps = [
    { num: "1", title: "Site Visit", desc: "Free assessment of storage requirements." },
    { num: "2", title: "Item Cataloging", desc: "Digital inventory of items to be stored." },
    { num: "3", title: "Secure Packing", desc: "Professional packing for storage." },
    { num: "4", title: " climate-Controlled Storage", desc: "Placement in appropriate storage zone." },
    { num: "5", title: "On-Demand Retrieval", desc: "Quick retrieval when you need items." },
  ];

  const faqs = [
    { q: "Is the storage facility climate-controlled?", a: "Yes. We have climate-controlled zones to protect electronics, fine art, and sensitive items." },
    { q: "How secure are your warehouses?", a: "Our facilities feature 24/7 CCTV monitoring, security personnel, and strict access control systems." },
    { q: "Can I access my items anytime?", a: "You can request retrieval with advance notice. We offer flexible access based on yourstorage agreement." },
    { q: "What is the minimum storage period?", a: "We offer flexible tenure - from daily storage for short-term needs to monthly and yearly contracts." },
  ];

  return (
    <main>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <span className={styles.badge}>Storage Solutions</span>
          <h1 className={styles.animateFadeUp}>Secure Warehousing & Storage</h1>
          <p className={styles.animateFadeUpDelay}>Climate-controlled, 24/7 monitored storage facilities. Safe storage for your belongings.</p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.twoColumnLayout}>
            <div className={styles.leftColumn}>
              <h2 className={styles.sectionTitle}>Your Belongings, Safely Stored</h2>
              <p>Need a temporary home for your belongings while you finalize your new lease? Our national network of modern warehouses provides the ultimate secure environment for your household or commercial goods.</p>
              <p>From climate-controlled zones for fine art and electronics to 24/7 CCTV monitoring, NexGo ensures your stored items remain in pristine condition until you need them.</p>

              <h3 className={styles.subTitle}>What We Offer</h3>
              <div className={styles.handlingGrid}>
                {handledItems.map((item, index) => (
                  <div key={index} className={styles.handlingCard}>
                    <div className={styles.checkIcon}>{item.icon}</div>
                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className={styles.subTitle}>How It Works</h3>
              <div className={styles.processTimeline}>
                {processSteps.map((step, index) => (
                  <div key={index} className={styles.processStep}>
                    <div className={styles.stepNum}>{step.num}</div>
                    <div className={styles.stepContent}>
                      <h4>{step.title}</h4>
                      <p>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className={styles.subTitle}>Frequently Asked Questions</h3>
              <div className={styles.faqWrapper}>
                {faqs.map((faq, index) => (
                  <div key={index} className={styles.faqItem}>
                    <h4>{faq.q}</h4>
                    <p>{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.rightColumn}>
              <div className={styles.stickyWidget}>
                <h3>Need Storage?</h3>
                <p>Get a quote for secure warehousing.</p>
                <div className={styles.contactBox}>
                  <div className={styles.contactRow}>
                    <span>📞</span> <strong>+91-9876543210</strong>
                  </div>
                  <div className={styles.contactRow}>
                    <span>✉️</span> <strong>info@nexgo.in</strong>
                  </div>
                </div>
                <Link href="/quote" className={styles.quoteButton}>Get a Free Quote</Link>
                <div className={styles.sideLinks}>
                  <h4>Other Services</h4>
                  <ul>
                    <li><Link href="/services/domestic-moving">Domestic Moving →</Link></li>
                    <li><Link href="/services/corporate-shifting">Corporate Shifting →</Link></li>
                    <li><Link href="/services/vehicle-transport">Car & Bike Transport →</Link></li>
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