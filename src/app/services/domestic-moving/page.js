import Link from "next/link";
import CTA from "@/components/CTA";
import styles from "@/styles/ServiceDetail.module.css";

export const metadata = {
  title: "Premium Domestic & Household Moving Services - NexGo Packers & Movers",
  description: "Safe, secure, and fully insured domestic household relocation services across India with zero-damage guarantee.",
};

export default function DomesticMovingPage() {
  const handledItems = [
    { icon: "✓", title: "Delicate Electronics", desc: "Anti-static packing for TVs, PCs, and home theaters." },
    { icon: "✓", title: "Heavy Furniture", desc: "Expert dismantling and reassembly of beds, wardrobes." },
    { icon: "✓", title: "Fragile Kitchenware", desc: "Custom cellular boxes for glass, crockery, and china." },
    { icon: "✓", title: "Fine Art & Antiques", desc: "Custom wooden crating for high-value decorative items." },
    { icon: "✓", title: "Modular Furniture", desc: "Complete dissembly and reassembly services." },
    { icon: "✓", title: "Appliances", desc: "Safe disconnection, packing, and reinstallation support." },
  ];

  const processSteps = [
    { num: "1", title: "Pre-Move Survey", desc: "Free home visit or video survey to analyze volume and provide binding quote." },
    { num: "2", title: "Quality Packing", desc: "Trained crew with premium materials systematically pack and barcode items." },
    { num: "3", title: "Safe Loading", desc: "Hydraulic tail-lifts and cargo straps secure items in weather-proof trucks." },
    { num: "4", title: "GPS Transit", desc: "Real-time tracking with dedicated move manager monitoring your shipment." },
    { num: "5", title: "Unload & Setup", desc: "Complete unloading, unpacking, and basic furniture assembly." },
  ];

  const faqs = [
    { q: "Do you provide transit insurance for household goods?", a: "Yes. We offer comprehensive transit insurance covering any unforeseen circumstances during interstate moves, giving you 100% peace of mind." },
    { q: "How far in advance should I book my home move?", a: "We recommend booking 7-10 days in advance for local shifts and 15-20 days for long-distance relocations to ensure fleet availability." },
    { q: "Do you handle appliances like ACs and water heaters?", a: "We handle basic furniture dismantling. For complex appliances like split ACs, we recommend hiring specialized technicians, which we can help arrange." },
    { q: "What areas do you service?", a: "We provide domestic moving services across all major cities in India with Pan-India network coverage." },
  ];

  return (
    <main>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <span className={styles.badge}>Residential Logistics</span>
          <h1 className={styles.animateFadeUp}>Premium Domestic & Household Moving Services</h1>
          <p className={styles.animateFadeUpDelay}>Experience a 100% stress-free home relocation with our specialized packing team, GPS-tracked fleet, and comprehensive transit insurance.</p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.twoColumnLayout}>
            <div className={styles.leftColumn}>
              <h2 className={styles.sectionTitle}>Your Memories, Safely Transported</h2>
              <p>Relocating to a new home is a major life event. At NexGo Packers & Movers, we understand that we aren't just moving boxes - we are moving your life's memories. Whether shifting to the next street or across the country, our dedicated household shifting team ensures a seamless, zero-damage transition.</p>
              <p>Unlike local vendors, we employ a strict <strong>3-Layer Protection Standard</strong> using premium bubble wrap, corrugated sheets, and stretch film. Every item is inventoried, safely loaded using hydraulic lifts, and transported in closed, weather-proof containers.</p>

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
                <h3>Ready to Shift?</h3>
                <p>Get a precise, personalized quote for your household move in minutes.</p>
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
                    <li><Link href="/services/corporate-shifting">Corporate Shifting →</Link></li>
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