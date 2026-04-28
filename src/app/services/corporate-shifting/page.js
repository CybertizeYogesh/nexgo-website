import Link from "next/link";
import CTA from "@/components/CTA";
import styles from "@/styles/ServiceDetail.module.css";

export const metadata = {
  title: "Corporate & Office Shifting Services - NexGo Packers & Movers",
  description: "Minimal downtime corporate office relocation with specialized IT infrastructure handling across India.",
};

export default function CorporateShiftingPage() {
  const handledItems = [
    { icon: "✓", title: "Server & Data Center Moves", desc: "Anti-static packing for servers, storage arrays, and network gear." },
    { icon: "✓", title: "Workstation Setup", desc: "Complete IT cubicle, desk, and chair relocation." },
    { icon: "✓", title: "Confidential Files", desc: "Tamper-proof sealed crate systems for sensitive documents." },
    { icon: "✓", title: "Conference Furniture", desc: "Meeting tables, chairs, and AV equipment handling." },
    { icon: "✓", title: "Phone Systems", desc: "Structured cabling and communication infrastructure." },
    { icon: "✓", title: "Breakroom Equipment", desc: "Coffee machines, refrigerators, and pantry items." },
  ];

  const processSteps = [
    { num: "1", title: "Site Survey", desc: "Free consultation to assess office size and IT infrastructure requirements." },
    { num: "2", title: "Phased Planning", desc: "Custom moving schedule designed for minimal business disruption." },
    { num: "3", title: "Night/Weekend Move", desc: "Execution during off-peak hours to ensure zero downtime." },
    { num: "4", title: "IT Reconnection", desc: "Systematic reconnection of all computers and equipment." },
    { num: "5", title: "Quality Check", desc: "Complete testing and verification before handover." },
  ];

  const faqs = [
    { q: "Can you handle server room relocations?", a: "Yes. We have specialized teams trained in anti-static handling for data centers and server rooms with sensitive equipment." },
    { q: "How do you ensure zero downtime?", a: "We execute moves over weekends or after business hours. Critical systems can be moved in phases to maintain operations." },
    { q: "Do you provide IT infrastructure support?", a: "Our team handles physical disconnection and reconnection. We work with your IT partners for full system integration." },
    { q: "What areas do you service?", a: "We provide corporate shifting services across all major cities in India with Pan-India network coverage." },
  ];

  return (
    <main>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <span className={styles.badge}>Commercial Logistics</span>
          <h1 className={styles.animateFadeUp}>Corporate & Office Shifting Services</h1>
          <p className={styles.animateFadeUpDelay}>Minimal downtime office transitions with specialized IT infrastructure handling. Get back to business faster.</p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.twoColumnLayout}>
            <div className={styles.leftColumn}>
              <h2 className={styles.sectionTitle}>Your Business, Moving With Precision</h2>
              <p>In business, time is money. NexGo engineers precision-timed commercial moves designed to execute over weekends or after hours, ensuring your team can plug in and start working immediately on Monday morning.</p>
              <p>Our IT specialists handle servers, workstations, and sensitive equipment with anti-static care, while our project managers coordinate every detail to minimize disruption to your operations.</p>

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

              <h3 className={styles.subTitle}>Our 5-Step Relocation Process</h3>
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
                <h3>Ready to Relocate?</h3>
                <p>Get a customized corporate moving quote for your office.</p>
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
                    <li><Link href="/services/vehicle-transport">Car & Bike Transport →</Link></li>
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