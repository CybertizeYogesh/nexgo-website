import styles from "../styles/Testimonials.module.css";

const testimonials = [
  {
    name: "Priya Desai",
    role: "Dispatch Coordinator",
    review: "NexGo handled our complex logistics with absolute precision. Their team is incredibly reliable and ensured our dispatch schedule was completely uninterrupted."
  },
  {
    name: "Amit Sharma",
    role: "Small Business Owner",
    review: "Relocating my shop inventory felt like a nightmare until I found NexGo. Fast, secure, and completely transparent pricing. Highly recommended!"
  },
  {
    name: "Vikram Singh",
    role: "Independent Transporter",
    review: "The professionalism and efficiency of the NexGo crew are unmatched. They packed and moved my household goods perfectly with zero damages."
  }
];

function Star({ filled }) {
  if (filled) {
    return (
      <svg className={styles.star} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    );
  }
  return <svg className={styles.starEmpty} viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>;
}

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Testimonials</span>
          <h2 className={styles.title}>What Our Clients Say</h2>
        </div>

        <div className={styles.reviewsGrid}>
          {testimonials.map((client, index) => (
            <div key={index} className={styles.reviewCard}>
              <div className={styles.rating}>
                {[...Array(5)].map((_, i) => <Star key={i} filled={true} />)}
              </div>
              <p className={styles.quote}>"{client.review}"</p>
              <div className={styles.clientInfo}>
                <div className={styles.clientImage}>{client.name.charAt(0)}</div>
                <div>
                  <div className={styles.clientName}>{client.name}</div>
                  <div className={styles.clientLocation}>{client.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}