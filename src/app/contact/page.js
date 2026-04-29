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
            src="/images/hero-bg.webp" 
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
            
            {/* LEFT COLUMN: INFO, SOCIAL, & TRACKING */}
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

              {/* EMERGENCY CONTACT CARD */}
              <div className={`${styles.infoCard} ${styles.emergencyCard}`}>
                <div className={styles.iconWrapperRed}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                    <line x1="12" y1="9" x2="12" y2="13"></line>
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                  </svg>
                </div>
                <div className={styles.infoText}>
                  <h3>In-Transit Emergency</h3>
                  <p>For urgent dispatch escalation: <br/><strong><a href="tel:+919876543210">+91-9876543210</a></strong></p>
                </div>
              </div>

              {/* SOCIAL BLOCK */}
              <div className={styles.socialBlock}>
                <h3 className={styles.socialTitle}>Connect With Us</h3>
                <div className={styles.socialIcons}>
                  <a href="#" className={styles.socialIcon} aria-label="LinkedIn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </a>
                  <a href="#" className={styles.socialIcon} aria-label="X">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a href="#" className={styles.socialIcon} aria-label="Facebook">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  </a>
                  <a href="#" className={styles.socialIcon} aria-label="Instagram">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  </a>
                </div>
              </div>

              {/* UPGRADED TRACKING PORTAL */}
              <div className={styles.trackingCard}>
                <div className={styles.trackingIconWrapper}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                  </svg>
                </div>
                <div className={styles.trackingContent}>
                  <h3>Live Tracking Portal</h3>
                  <p>Track your fleet in real-time using your consignment number.</p>
                  <button className={styles.trackingBtn}>
                    Track Shipment <span className={styles.trackArrow}>➔</span>
                  </button>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: FORM & TIMELINE */}
            <div className={styles.formColumnWrapper}>
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
                      <input type="text" id="fullName" placeholder=" " required />
                      <label htmlFor="fullName">Full Name</label>
                    </div>
                    <div className={styles.inputGroup}>
                      <input type="tel" id="phoneNumber" placeholder=" " required />
                      <label htmlFor="phoneNumber">Phone Number</label>
                    </div>
                  </div>

                  <div className={styles.inputRow}>
                    <div className={styles.inputGroup}>
                      <input type="email" id="emailAddr" placeholder=" " required />
                      <label htmlFor="emailAddr">Email Address</label>
                    </div>
                    <div className={styles.inputGroup}>
                      <div className={styles.selectWrapper}>
                        <select id="serviceReq" required defaultValue="">
                          <option value="" disabled></option>
                          <option value="residential">Residential Shifting</option>
                          <option value="commercial">Commercial/Office Move</option>
                          <option value="vehicle">Vehicle Transport</option>
                          <option value="storage">Warehousing & Storage</option>
                          <option value="other">Other Inquiry</option>
                        </select>
                        <label htmlFor="serviceReq">Service Required</label>
                      </div>
                    </div>
                  </div>

                  <div className={styles.inputGroup}>
                    <textarea id="msgReq" rows="4" placeholder=" " required></textarea>
                    <label htmlFor="msgReq">Your Message / Requirements</label>
                  </div>

                  <button type="submit" className={styles.submitBtn}>
                    Submit Request <span className={styles.btnArrow}>➔</span>
                  </button>

                  {/* PRIVACY ASSURANCE */}
                  <div className={styles.privacyNote}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                    <span>Your information is 100% secure and will never be shared.</span>
                  </div>
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

      {/* MAP WITH OVERLAY CARD */}
      <section className={styles.mapSection}>
        <div className={styles.container}>
          <div className={styles.mapContainer}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119066.41709444391!2d72.73989475470362!3d21.159340298539745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1714295325852!5m2!1sen!2sin" 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className={styles.mapIframe}
            ></iframe>
            {/* FLOATING MAP CARD */}
            <div className={styles.mapOverlayCard}>
              <h4>NexGo Headquarters</h4>
              <p>A-102, Bajrang Complex, Surat, Gujarat</p>
              <a href="https://maps.google.com/?q=Surat,+Gujarat" target="_blank" rel="noopener noreferrer" className={styles.directionsBtn}>
                Get Directions
              </a>
            </div>
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
                  {/* SINGLE + ICON FOR ROTATION */}
                  <span className={styles.toggleIcon}>+</span>
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