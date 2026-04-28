import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import CTA from "@/components/CTA";
import styles from "@/styles/BlogPost.module.css";
import { blogPosts } from "@/data/blogPosts";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug.replace("/blog/", ""),
  }));
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const expectedSlug = `/blog/${slug}`;
  const post = blogPosts.find((p) => p.slug === expectedSlug);

  if (!post) {
    notFound();
  }

  const contentToRead = post.content || post.excerpt;
  const wordCount = contentToRead.split(/\s+/).length;
  const calculatedReadTime = Math.max(1, Math.ceil(wordCount / 200));

  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  const displayContent = post.content || `
    <p class="intro-paragraph"><em>Note: To make this content dynamic, add a "content" field to this post in your <code>blogPosts.js</code> file containing your HTML string. For now, this is placeholder text.</em></p>
    <h2>The Importance of Professional Logistics</h2>
    <p>When it comes to high-value relocation, standard moving practices are no longer sufficient. Companies are expanding faster, supply chains are tighter, and the cost of operational downtime has skyrocketed.</p>
    <blockquote>"A successful move is not measured by boxes transported, but by absolute safety and continuity."</blockquote>
    <h3>Key Implementation Strategies</h3>
    <ul>
      <li><strong>Digital Inventory Mapping:</strong> Cataloging items to bypass sorting delays.</li>
      <li><strong>Secure Route Engineering:</strong> Working with municipalities to map safe transit paths.</li>
    </ul>
    <p>As we move further into the decade, the physical execution will always rely on the expertise of certified rigging engineers on the ground.</p>
  `;

  return (
    <main className={styles.mainWrapper}>
      <article className={styles.articleContainer}>
        
        <nav className={styles.breadcrumbs}>
          <Link href="/">Home</Link>
          <span className={styles.crumbSep}>/</span>
          <Link href="/blog">Blog</Link>
          <span className={styles.crumbSep}>/</span>
          <span className={styles.crumbCurrent}>{post.category}</span>
        </nav>
        
        <header className={styles.articleHeader}>
          <div className={styles.metaRow}>
            <span className={styles.categoryBadge}>{post.category}</span>
            <span className={styles.metaText}>{post.date}</span>
            <span className={styles.metaDot}>•</span>
            <span className={styles.metaText}>{calculatedReadTime} min read</span>
          </div>
          <h1 className={styles.articleTitle}>{post.title}</h1>
          <p className={styles.articleExcerpt}>{post.excerpt}</p>
          
          <div className={styles.authorRow}>
            <div className={styles.authorAvatar}>N</div>
            <div className={styles.authorInfo}>
              <strong>{post.author || "NexGo Logistics Team"}</strong>
              <span>Author</span>
            </div>
          </div>
        </header>
        
        <div className={styles.heroImageWrapper}>
          {/* FIXED: Modern Image Syntax */}
          <Image src={post.image} alt={post.title} fill style={{ objectFit: "cover" }} sizes="100vw" priority />
        </div>
        
        <div className={styles.contentLayout}>
          
          <aside className={styles.socialShare}>
            <div className={styles.stickySocial}>
              <span className={styles.shareText}>Share</span>
              <a href={`https://twitter.com/intent/tweet?url=https://nexgo.in${expectedSlug}&text=${post.title}`} target="_blank" rel="noreferrer" className={styles.shareBtn}>𝕏</a>
              <a href={`https://www.linkedin.com/sharing/share-offsite/?url=https://nexgo.in${expectedSlug}`} target="_blank" rel="noreferrer" className={styles.shareBtn}>in</a>
              <a href={`https://api.whatsapp.com/send?text=${post.title} https://nexgo.in${expectedSlug}`} target="_blank" rel="noreferrer" className={styles.shareBtn}>Wa</a>
            </div>
          </aside>
          
          <div 
            className={styles.articleContent} 
            dangerouslySetInnerHTML={{ __html: displayContent }} 
          />
        </div>
      </article>

      {relatedPosts.length > 0 && (
        <section className={styles.relatedSection}>
          <div className={styles.relatedContainer}>
            <h3 className={styles.relatedTitle}>More in {post.category}</h3>
            <div className={styles.relatedGrid}>
              {relatedPosts.map(related => (
                <Link href={related.slug} key={related.id} className={styles.relatedCard}>
                  <div className={styles.relatedImgWrapper}>
                    {/* FIXED: Modern Image Syntax */}
                    <Image src={related.image} alt={related.title} fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, 33vw" />
                  </div>
                  <div className={styles.relatedInfo}>
                    <h4>{related.title}</h4>
                    <span className={styles.relatedRead}>Read Article ➔</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
      
      <CTA />
    </main>
  );
}