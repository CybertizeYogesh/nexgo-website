import Link from "next/link";
import CTA from "@/components/CTA";
import styles from "@/styles/ServiceDetail.module.css";

export const metadata = {
  title: "Full Truck Load (FTL) Cargo Transport - NexGo Packers & Movers",
  description: "Dedicated fleet and cargo transport services for businesses and industries across India.",
};

export default function CargoTransportPage() {
  const handledItems = [
    { icon: "✓", title: "Dedicated Fleet", desc: "Exclusive truck for your cargo." },
    { icon: "✓", title: "Pan-India Network", desc: "Coverage across all major cities." },
    { icon: "✓", title: "Real-Time Tracking", desc: "GPS monitoring throughout transit." },
    { icon: "✓", title: "Priority Delivery", desc: "Scheduled delivery windows." },
    { icon: "✓", title: "Bulk Cargo", desc: "Handling large volume shipments." },
    { icon: "✓", title: "Industrial Logistics", desc: "Heavy machinery and equipment." },
  ];

  const processSteps = [
    { num: "1", title: "Cargo Assessment", desc: "Analysis of cargo volume and requirements." },
    { num: "2", title: "Fleet Allocation", desc: "Dedicated truck assignment." },
    { num: "3", title: "Loading & Securing", desc: "Professional loading with cargo straps." },
    { num: "4", title: "GPS Tracking", desc: "Real-time monitoring en route." },
    { num: "5", title: "Priority Delivery", desc: "Timely delivery to destination." },
  ];

  const faqs = [
    { q: "What types of cargo do you transport?", a: "We handle all types - from raw materials to finished goods, machinery, and bulk shipments." },
    { q: "Do you offer dedicated trucks?", a: "Yes. Our FTL services provide dedicated fleet capacity exclusively for your cargo." },
    { q: "Can you handle heavy machinery?", a: "Yes. We have specialized handling equipment for industrial machinery and equipment." },
    { q: "What is your delivery guarantee?", a: "We offer priority delivery with scheduled windows. GPS tracking keeps you informed throughout." },
  ];

  return (
    <main>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <span className={styles.badge}>Industrial Logistics</span>
          <h1 className={styles.animateFadeUp}>Full Truck Load (FTL) Cargo Transport</h1>
          <p className={styles.animateFadeUpDelay}>Dedicated fleet services for businesses. GPS-monitored trucks with priority delivery.</p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.twoColumnLayout}>
            <div className={styles.leftColumn}>
              <h2 className={styles.sectionTitle}>Your Cargo, Our Priority</h2>
              <p>For businesses requiring dedicated fleet capacity, NexGo offers premium FTL services with GPS-monitored trucks, expert handling, and prioritized delivery schedules.</p>
              <p>Our extensive Pan-India network ensures your cargo reaches destination on time, every time, with complete tracking transparency.</p>

              <h3 className={styles.subTitle}>What We Handle</h3>
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

              <h3 className={styles.subTitle}>Our 5-Step Transport Process</h3>
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
                <h3>Need Cargo Transport?</h3>
                <p>Get a customized quote for your business.</p>
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
                    <li><Link href="/services/warehousing">Secure Warehousing →</Link></li>
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