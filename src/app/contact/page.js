"use client";
import React, { useState } from "react";
import Image from "next/image";
import CTA from "@/components/CTA";
import styles from "@/styles/Contact.module.css";

export default function ContactPage() {
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    {
      question: "How quickly do you respond to custom quote requests?",
      answer: "Our enterprise logistics team aims to respond to all custom quote requests within 30 minutes during standard working hours. For complex commercial moves, we may schedule a brief consultation call first."
    },
    {
      question: "Who do I contact for live in-transit tracking?",
      answer: "Once your move is initiated, you will be assigned a dedicated Move Coordinator. You will receive their direct phone line and WhatsApp contact for 24/7 live updates. You can also track your fleet via our mobile dashboard."
    },
    {
      question: "Do you offer dedicated support for corporate clients?",
      answer: "Yes. Corporate and enterprise clients are assigned to our B2B specialized support tier, which includes prioritized dispatch, custom billing cycles, and a dedicated account manager."
    }
  ];

  return (
    <main className={styles.mainWrapper}>
      <section className={styles.heroSection}>
        <div className={styles.heroBackground}>
          <Image 
            src="/images/hero-bg.jpg" 
            alt="Contact NexGo Support" 
            fill 
            className={styles.heroImage} 
            priority
          />
          <div className={styles.heroOverlay}></div>
        </div>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <span className={styles.topBadge}>24/7 Support</span>
            <h1 className={styles.heroTitle}>Get in Touch</h1>
            <p className={styles.heroSubtitle}>
              Whether you need a custom relocation quote or have a question about our enterprise logistics, our team is ready to assist you.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.contactGrid}>
            
            <div className={styles.infoColumn}>
              <div className={styles.infoCard}>
                <div className={styles.iconWrapper}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className={styles.infoText}>
                  <h3>Head Office</h3>
                  <p>A-102, Bajrang Complex, Opp McDonald, Kadodara Road, N.H. No-08, Umbhel, Surat - 394327, Gujarat, India</p>
                </div>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.iconWrapper}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div className={styles.infoText}>
                  <h3>Direct Contact</h3>
                  <p><strong>Phone:</strong> <a href="tel:+917949329100">+91-7949329100</a></p>
                  <p><strong>Email:</strong> <a href="mailto:shreedurgatranslogistic@gmail.com">shreedurgatranslogistic@gmail.com</a></p>
                </div>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.iconWrapper}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <div className={styles.infoText}>
                  <h3>Working Hours</h3>
                  <p>Monday - Sunday<br/>7:00 AM - 9:45 PM</p>
                </div>
              </div>

              <div className={styles.socialBlock}>
                <h3 className={styles.socialTitle}>Connect With Us</h3>
                <div className={styles.socialIcons}>
                  <a href="#" className={styles.socialIcon} aria-label="LinkedIn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </a>
                  <a href="#" className={styles.socialIcon} aria-label="Twitter">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5 2.8 12 3 12c1.4.2 2.8-.2 3.8-1.1-2.6-.9-3.4-3-3.4-3 1.1.2 2.3.2 3.3-.1-3-2.1-3.6-5.5-3.6-5.5 1.3.8 2.8 1.3 4.4 1.4-2.8-2-3.8-6.1-1.6-8.8 3.4 4.3 8.6 7.2 14.6 7.4.2-1.8 1-3.4 2.3-4.5 2.5-2.1 6.2-1.2 7.6 1.4 1.7-.3 3.3-1 4.7-1.8-.6 1.7-1.7 3.1-3 4z"></path></svg>
                  </a>
                  <a href="#" className={styles.socialIcon} aria-label="Facebook">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  </a>
                  <a href="#" className={styles.socialIcon} aria-label="Instagram">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.formColumnWrapper}>
              {/* DECORATIVE GLOW ELEMENTS */}
              <div className={styles.formGlowBlue}></div>
              <div className={styles.formGlowOrange}></div>
              <div className={styles.formColumn}>
                <div className={styles.formHeader}>
                  <h2>Send a Message</h2>
                  <p>Fill out the form below and our logistics managers will get back to you within 30 minutes.</p>
                </div>
                
                <form className={styles.contactForm}>
                  <div className={styles.inputRow}>
                    <div className={styles.inputGroup}>
                      <label>Full Name</label>
                      <input type="text" placeholder="John Doe" required />
                    </div>
                    <div className={styles.inputGroup}>
                      <label>Phone Number</label>
                      <input type="tel" placeholder="+91 98765 43210" required />
                    </div>
                  </div>

                  <div className={styles.inputRow}>
                    <div className={styles.inputGroup}>
                      <label>Email Address</label>
                      <input type="email" placeholder="john@example.com" required />
                    </div>
                    <div className={styles.inputGroup}>
                      <label>Service Required</label>
                      <div className={styles.selectWrapper}>
                        <select required defaultValue="">
                          <option value="" disabled>Select a Service</option>
                          <option value="residential">Residential Shifting</option>
                          <option value="commercial">Commercial/Office Move</option>
                          <option value="vehicle">Vehicle Transport</option>
                          <option value="storage">Warehousing & Storage</option>
                          <option value="other">Other Inquiry</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className={styles.inputGroup}>
                    <label>Your Message / Requirements</label>
                    <textarea rows="4" placeholder="Tell us about your moving date, locations, and specific needs..." required></textarea>
                  </div>

                  <button type="submit" className={styles.submitBtn}>
                    Submit Request <span className={styles.btnArrow}>➔</span>
                  </button>
                </form>

                <div className={styles.nextSteps}>
                  <h3 className={styles.nextStepsTitle}>What Happens Next?</h3>
                  <div className={styles.stepsList}>
                    <div className={styles.stepItem}>
                      <div className={styles.stepNumber}>1</div>
                      <div className={styles.stepText}>Submit Details</div>
                    </div>
                    <div className={styles.stepDivider}></div>
                    <div className={styles.stepItem}>
                      <div className={styles.stepNumber}>2</div>
                      <div className={styles.stepText}>Fast AI Quote</div>
                    </div>
                    <div className={styles.stepDivider}></div>
                    <div className={styles.stepItem}>
                      <div className={styles.stepNumber}>3</div>
                      <div className={styles.stepText}>Seamless Relocation</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.mapSection}>
        <div className={styles.container}>
          <div className={styles.mapContainer}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119066.52982230402!2d72.7398947!3d21.1592001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className={styles.mapIframe}
            ></iframe>
          </div>
        </div>
      </section>

      {/* SUPPORT FAQ SECTION */}
      <section className={styles.faqSection}>
        <div className={styles.container}>
          <div className={styles.faqHeader}>
            <span className={styles.sectionBadge}>Support Center</span>
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className={styles.faqList}>
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`${styles.faqItem} ${activeFaq === index ? styles.active : ''}`}
                onClick={() => setActiveFaq(activeFaq === index ? null : index)}
              >
                <div className={styles.faqQuestion}>
                  <h3>{faq.question}</h3>
                  <span className={styles.toggleIcon}>{activeFaq === index ? '−' : '+'}</span>
                </div>
                <div className={styles.faqAnswer}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}