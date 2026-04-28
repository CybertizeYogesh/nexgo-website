import Image from "next/image";
import CTA from "@/components/CTA";
import styles from "@/styles/About.module.css";
import { milestones } from "@/data/about";

export const metadata = {
  title: "About Us - NexGo Packers & Movers",
  description: "Learn about NexGo's journey and core values in providing trusted moving services across India.",
};

export default function AboutPage() {
  return (
    <main>
      <section className={styles.pageHeader}>
        <div className={styles.headerContainer}>
          <div className={styles.headerContent}>
            <h1 className={`${styles.title} ${styles.animateHeader}`}>About NexGo Packers & Movers</h1>
            <p className={`${styles.subtitle} ${styles.animateHeader} ${styles.delay100}`}>
              Delivering trust, safety, and reliability across India.
            </p>
          </div>
          <div className={`${styles.headerVisual} ${styles.animateHeader} ${styles.delay200}`}>
            <div className={styles.truckWrapper}>
              <Image
                src="/images/about/truck-transparent.png"
                alt="NexGo Delivery Fleet"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.ourStory}>
        <div className={styles.container}>
          <div className={styles.storyGrid}>
            <div className={styles.storyContent}>
              <h2>Our Journey</h2>
              <p>
                NexGo Packers & Movers was founded with a singular mission: to eliminate the stress and anxiety that comes with relocating. We understood that moving isn&apos;t just about transporting belongings—it&apos;s about transitioning lives, dreams, and memories.
              </p>
              <p>
                What started as a small local operation has grown into a trusted nationwide logistics partner. Our team of dedicated professionals works tirelessly to ensure every move is handled with the utmost care and precision.
              </p>
              <p>
                Today, NexGo is proud to have served thousands of families and businesses across India, earning a reputation for reliability, transparency, and exceptional customer service.
              </p>
            </div>
            <div className={styles.imagePlaceholder}>
              <Image
                src="/images/about/our-journey.jpg"
                alt="NexGo Packers and Movers Journey"
                fill
                style={{ objectFit: 'cover', borderRadius: '16px' }}
              />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.missionVision}>
        <div className={styles.container}>
          <h2>Mission & Vision</h2>
          <div className={styles.missionGrid}>
            <div className={styles.missionCard}>
              <h3>Our Mission</h3>
              <p>To deliver absolute peace of mind by providing safe, fast, and transparent relocation services to every family and business we serve.</p>
            </div>
            <div className={styles.missionCard}>
              <h3>Our Vision</h3>
              <p>Over the next 5 years, we aim to become India&apos;s most trusted and technologically advanced logistics network, setting the gold standard for the packing and moving industry.</p>
            </div>
            <div className={styles.missionCard}>
              <h3>Our Promise</h3>
              <p>To treat every single customer with respect and ensure zero-damage transitions, making relocation a seamless joy rather than a chore.</p>
            </div>
            <div className={styles.missionCard}>
              <h3>Our Approach</h3>
              <p>Combining human empathy with cutting-edge logistics technology to engineer the most efficient moving routes and secure packing strategies.</p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.timeline}>
        <div className={styles.container}>
          <h2>Our Growth Timeline</h2>
          <div className={styles.timelineContainer}>
            <div className={styles.timelineLine}></div>
            {milestones.map((milestone) => (
              <div key={milestone.id} className={styles.timelineItem}>
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineYear}>{milestone.year}</div>
                <div className={styles.timelineTitle}>{milestone.title}</div>
                <div className={styles.timelineDesc}>{milestone.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className={styles.valuesSection}>
        <div className={styles.container}>
          <h2>Our Core Values</h2>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <svg className={styles.valueIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L3 7V12C3 17.55 6.84 22.74 12 24C17.16 22.74 21 17.55 21 12V7L12 2Z" fill="var(--action-orange)" />
                <path d="M12 7V12M12 17V17.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <h3>Safety First</h3>
              <p>We treat your belongings as our own, ensuring every item is handled with exceptional care from start to finish.</p>
            </div>
            <div className={styles.valueCard}>
              <svg className={styles.valueIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="var(--action-orange)" strokeWidth="2" />
                <path d="M12 7V12L15 15" stroke="var(--action-orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <h3>Total Transparency</h3>
              <p>Honest pricing with absolutely no hidden fees. We believe in complete openness throughout your move.</p>
            </div>
            <div className={styles.valueCard}>
              <svg className={styles.valueIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z" fill="var(--action-orange)" />
              </svg>
              <h3>Customer Commitment</h3>
              <p>24/7 support and dedicated move coordinators to guide you through every step of your relocation journey.</p>
            </div>
            <div className={styles.valueCard}>
              <svg className={styles.valueIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="var(--action-orange)" strokeWidth="2" />
                <path d="M12 6V12L16 14" stroke="var(--action-orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <h3>On-Time Execution</h3>
              <p>We respect your time. Our precise logistics planning ensures that your belongings arrive exactly when promised, every single time.</p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.awardsSection}>
        <div className={styles.container}>
          <h2>Awards & Recognitions</h2>
          <div className={styles.awardsGrid}>
            <div className={styles.awardItem}>
              <svg className={styles.awardIcon} width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 15C15.3137 15 18 12.3137 18 9V3H6V9C6 12.3137 8.68629 15 12 15Z" stroke="var(--action-orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6 5H3V9C3 11.2091 4.79086 13 7 13" stroke="var(--action-orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M18 5H21V9C21 11.2091 19.2091 13 17 13" stroke="var(--action-orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 15V21" stroke="var(--action-orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8 21H16" stroke="var(--action-orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <h3 className={styles.awardTitle}>Best Emerging Logistics Startup 2025</h3>
              <p className={styles.awardDesc}>Recognized for outstanding growth and customer satisfaction in the residential moving sector.</p>
            </div>
            <div className={styles.awardItem}>
              <svg className={styles.awardIcon} width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="var(--action-orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9 12L11 14L15 10" stroke="var(--action-orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <h3 className={styles.awardTitle}>ISO 9001:2015 Certified</h3>
              <p className={styles.awardDesc}>Adhering to strict international standards for quality management and operational safety.</p>
            </div>
            <div className={styles.awardItem}>
              <svg className={styles.awardIcon} width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="10" r="6" stroke="var(--action-orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M15.477 14.894L18 22L12 18.5L6 22L8.523 14.894" stroke="var(--action-orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 10L12.5 11L13.5 11L12.8 11.8L13 12.8L12 12.3L11 12.8L11.2 11.8L10.5 11L11.5 11L12 10Z" fill="var(--action-orange)" />
              </svg>
              <h3 className={styles.awardTitle}>Indian Transporters Association</h3>
              <p className={styles.awardDesc}>An active, verified member of the national association ensuring ethical transport practices.</p>
            </div>
            <div className={styles.awardItem}>
              <svg className={styles.awardIcon} width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 15L8.47 17.5l1.35-4.13L6.3 10.5h4.26L12 6.5l1.44 4h4.26l-3.52 2.87 1.35 4.13L12 15z" stroke="var(--action-orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <h3 className={styles.awardTitle}>Logistics Excellence 2024</h3>
              <p className={styles.awardDesc}>Awarded for maintaining a 99.8% on-time delivery rate across interstate commercial and residential moves.</p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.b2bTrustStrip}>
        <div className={styles.container}>
          <h2 className={styles.b2bTitle}>Trusted by Leading Indian Enterprises</h2>
          <div className={styles.b2bGrid}>
            <div className={styles.b2bCard}>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
              <span>TechFlow</span>
            </div>
            <div className={styles.b2bCard}>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
              <span>ApexRetail</span>
            </div>
            <div className={styles.b2bCard}>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
              <span>GlobalBank</span>
            </div>
            <div className={styles.b2bCard}>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle></svg>
              <span>AutoCorp</span>
            </div>
            <div className={styles.b2bCard}>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
              <span>MedLife</span>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.fleetSection}>
        <div className={styles.container}>
          <h2>Equipped for Excellence</h2>
          <div className={styles.fleetGrid}>
            <div className={styles.fleetCard}>
              <svg className={styles.fleetIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17H5C3.89543 17 3 16.1046 3 15C3 13.8954 3.89543 13 5 13H7" stroke="var(--action-orange)" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M19 17H17C15.8954 17 15 16.1046 15 15C15 13.8954 15.8954 13 17 13H19" stroke="var(--action-orange)" strokeWidth="1.5" strokeLinecap="round" />
                <rect x="3" y="10" width="18" height="7" rx="1" stroke="var(--action-orange)" strokeWidth="1.5" />
                <path d="M7 17V20C7 20.5523 7.44772 21 8 21H16C16.5523 21 17 20 17 20V17" stroke="var(--action-orange)" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M10 7L13 4L10 3" stroke="var(--action-orange)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <h3>Modern GPS-Enabled Fleet</h3>
              <p>Specialized closed-container vehicles ensuring weather-proof transit.</p>
            </div>
            <div className={styles.fleetCard}>
              <svg className={styles.fleetIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 21V5C19 3.89543 18.1046 3 17 3H7C5.89543 3 5 3.89543 5 5V21" stroke="var(--action-orange)" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M3 21H21" stroke="var(--action-orange)" strokeWidth="1.5" />
                <rect x="8" y="7" width="8" height="3" stroke="var(--action-orange)" strokeWidth="1.5" />
                <rect x="8" y="13" width="8" height="3" stroke="var(--action-orange)" strokeWidth="1.5" />
                <circle cx="17" cy="14" r="3" stroke="var(--action-orange)" strokeWidth="1.5" />
              </svg>
              <h3>Secure Warehousing</h3>
              <p>24/7 CCTV-monitored, climate-controlled storage facilities for short and long-term needs.</p>
            </div>
            <div className={styles.fleetCard}>
              <svg className={styles.fleetIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 16V8C21 7.44772 20.5523 7 20 7H4C3.44772 7 3 7.44772 3 8V16C3 16.5523 3.44772 17 4 17H20C20.5523 17 21 16.5523 21 16Z" stroke="var(--action-orange)" strokeWidth="1.5" />
                <path d="M3.5 10L12 14L20.5 10" stroke="var(--action-orange)" strokeWidth="1.5" />
                <path d="M8 7V4C8 3.44772 8.44772 3 9 3H15C15.5523 3 16 3.44772 16 4V7" stroke="var(--action-orange)" strokeWidth="1.5" />
              </svg>
              <h3>Premium Packing Tech</h3>
              <p>Utilizing industrial-grade bubble wrap, corrugated sheets, and custom crating for fragile items.</p>
            </div>
            <div className={styles.fleetCard}>
              <svg className={styles.fleetIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 21h18M5 21V7l7-4 7 4v14M9 11v10M15 11v10" stroke="var(--action-orange)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5 11h14" stroke="var(--action-orange)" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <h3>Advanced Handling Gear</h3>
              <p>Equipped with hydraulic tail-lifts, heavy-duty trolleys, and specialized cranes to safely load and unload bulky machinery.</p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.techSection}>
        <div className={styles.container}>
          <h2>Powered by Next-Gen Technology</h2>
          <div className={styles.techGrid}>
            <div className={styles.techCard}>
              <h3>Live GPS Dashboard</h3>
              <p>Real-time truck tracking and predictive ETA algorithms accessible right from your smartphone.</p>
            </div>
            <div className={styles.techCard}>
              <h3>Automated Inventory</h3>
              <p>Digital barcoding and app-based cataloging ensure not a single cable or file is misplaced.</p>
            </div>
            <div className={styles.techCard}>
              <h3>Instant AI Quotes</h3>
              <p>Our proprietary pricing engine analyzes volume and distance to give you accurate, binding quotes instantly.</p>
            </div>
            <div className={styles.techCard}>
              <h3>Digital e-POD System</h3>
              <p>Instant electronic Proof of Delivery with photo verification and digital signatures for complete transparency.</p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.coverageSection}>
        <div className={styles.container}>
          <h2>Unmatched National Reach</h2>
          <div className={styles.coverageGrid}>
            <div className={styles.coverageContent}>
              <p>From the high-rises of Mumbai to the tech parks of Bangalore, our dedicated network ensures flawless point-to-point delivery across the subcontinent.</p>
              <p>We have strategically positioned logistics hubs to guarantee minimal transit times and maximum security for your belongings, whether you are moving across the street or across the country.</p>
              <ul className={styles.coverageList}>
                <li><span className={styles.check}>✓</span> Inter-city & intra-city relocations</li>
                <li><span className={styles.check}>✓</span> Dedicated regional logistics hubs</li>
                <li><span className={styles.check}>✓</span> 24/7 tracked interstate fleet</li>
              </ul>
            </div>
            <div className={styles.coverageMapPlaceholder}>
              <Image 
                src="/images/about/coverage-map.jpg" 
                alt="National Coverage Map" 
                fill 
                className={styles.coverageImage} 
              />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.qualitySection}>
        <div className={styles.container}>
          <div className={styles.qualityHeader}>
            <span className={styles.sectionBadge}>Quality Assurance</span>
            <h2>Uncompromising Quality & Safety</h2>
          </div>
          
          <div className={styles.zigZagRow}>
            <div className={styles.zigZagImageWrapper}>
              <Image 
                src="/images/about/packing.jpg" 
                alt="Packing Materials" 
                fill 
                className={styles.zigZagImage} 
              />
            </div>
            <div className={styles.zigZagContent}>
              <h3>The 3-Layer Protection Standard</h3>
              <p>We don&apos;t just put things in boxes. Every fragile item goes through our rigorous 3-layer packing protocol to ensure complete waterproofing and impact resistance during transit.</p>
              <ul className={styles.qualityList}>
                <li><span className={styles.check}>✓</span> Premium anti-static bubble wrap</li>
                <li><span className={styles.check}>✓</span> Double-walled corrugated sheets</li>
                <li><span className={styles.check}>✓</span> Industrial-grade stretch film</li>
              </ul>
            </div>
          </div>
          <div className={`${styles.zigZagRow} ${styles.zigZagReverse}`}>
            <div className={styles.zigZagContent}>
              <h3>Specialized Handling & Complete Coverage</h3>
              <p>Your peace of mind is our priority. From custom wooden crating for delicate electronics and glass, to our comprehensive transit insurance policies, we guarantee that your belongings arrive exactly as they left.</p>
              <ul className={styles.qualityList}>
                <li><span className={styles.check}>✓</span> Custom wooden crating for electronics</li>
                <li><span className={styles.check}>✓</span> Hydraulic loading lifts for heavy items</li>
                <li><span className={styles.check}>✓</span> Comprehensive transit insurance</li>
              </ul>
            </div>
            <div className={styles.zigZagImageWrapper}>
              <Image 
                src="/images/about/truck-loading.jpg" 
                alt="Secure Transit Loading" 
                fill 
                className={styles.zigZagImage} 
              />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.caseStudySection}>
        <div className={styles.container}>
          <div className={styles.caseStudyCard}>
            <div className={styles.caseStudyImageWrapper}>
              <Image 
                src="/images/about/case-study.jpg" 
                alt="IT Firm Relocation Case Study" 
                fill 
                className={styles.caseStudyImage} 
              />
            </div>
            <div className={styles.caseStudyContent}>
              <span className={styles.caseStudyBadge}>Featured Commercial Move</span>
              <h3>Relocating a 500-Employee IT Firm in 48 Hours</h3>
              <div className={styles.caseStudyBlock}>
                <h4 className={styles.challengeTitle}>The Challenge</h4>
                <p>A leading tech firm in Pune needed a complete office relocation with zero downtime for their server infrastructure.</p>
              </div>
              <div className={styles.caseStudyBlock}>
                <h4 className={styles.solutionTitle}>The Solution</h4>
                <p>Deployed a 40-man specialized IT packing crew over a single weekend, utilizing anti-static server crates and synchronized fleet dispatch.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.csrSection}>
        <div className={styles.container}>
          <div className={styles.csrBanner}>
            <Image 
              src="/images/about/csr-bg.jpg" 
              alt="Sustainable Logistics Background" 
              fill 
              className={styles.csrImage}
            />
            <div className={styles.csrOverlay}>
              <div className={styles.csrIconWrapper}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
                  <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
                </svg>
              </div>
              <h2>Moving Forward, Sustainably</h2>
              <p>As a national logistics provider, we recognize our responsibility to the environment and the communities we serve. NexGo is actively transitioning to 100% recyclable packing materials, implementing AI-driven route optimization to drastically reduce our fleet&apos;s carbon footprint, and partnering with local charities to donate gently used furniture and clothing on behalf of our clients.</p>
            </div>
          </div>
        </div>
      </section>
      <CTA />
    </main>
  );
}
