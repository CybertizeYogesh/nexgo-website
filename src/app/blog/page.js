"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CTA from "@/components/CTA";
import styles from "@/styles/Blog.module.css";
import { blogPosts, categories } from "@/data/blogPosts";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch = post.title.toLowerCase().includes(searchLower) || post.excerpt.toLowerCase().includes(searchLower);
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  const showFeatured = currentPosts.length > 0;
  const featuredPost = showFeatured ? currentPosts[0] : null;
  const gridPosts = showFeatured ? currentPosts.slice(1) : [];

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const getPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
        pages.push(i);
      } else if (i === currentPage - 2 || i === currentPage + 2) {
        pages.push('...');
      }
    }
    return pages.filter((val, index, arr) => val !== '...' || arr[index - 1] !== '...');
  };

  return (
    <main className={styles.mainWrapper}>
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <span className={styles.topBadge}>Logistics Intelligence</span>
          <h1 className={styles.heroTitle}>The NexGo Journal</h1>
          <p className={styles.heroSubtitle}>Insights, guides, and engineering standards for the modern Indian relocation industry.</p>
          
          <div className={styles.searchContainer}>
            <input 
              type="text" 
              placeholder="Search articles, guides, and news..." 
              value={searchQuery} 
              onChange={handleSearchChange} 
              className={styles.searchInput} 
            />
          </div>
          
          <div className={styles.categoryNav}>
            {categories.map((cat) => (
              <button 
                key={cat} 
                className={`${styles.catBtn} ${activeCategory === cat ? styles.activeCat : ""}`}
                onClick={() => handleCategoryChange(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.blogBody}>
        <div className={styles.container}>
          <div className={styles.contentLayout}>
            
            <div className={styles.mainFeed}>
              {featuredPost && (
                <Link href={featuredPost.slug} className={styles.featuredCard}>
                  <div className={styles.featuredImgWrapper}>
                    {/* FIXED: Modern Image Syntax */}
                    <Image src={featuredPost.image} alt={featuredPost.title} fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority />
                  </div>
                  <div className={styles.featuredInfo}>
                    <span className={styles.postCat}>{featuredPost.category}</span>
                    <h2>{featuredPost.title}</h2>
                    <p>{featuredPost.excerpt}</p>
                    <div className={styles.postMeta}>
                      <strong>{featuredPost.author}</strong>
                      <span>{featuredPost.date} • {featuredPost.readTime}</span>
                    </div>
                  </div>
                </Link>
              )}

              {currentPosts.length > 0 ? (
                <>
                  {gridPosts.length > 0 && (
                    <div className={styles.postGrid}>
                      {gridPosts.map((post) => (
                        <Link href={post.slug} key={post.id} className={styles.gridCard}>
                          <div className={styles.gridImgWrapper}>
                            {/* FIXED: Modern Image Syntax */}
                            <Image src={post.image} alt={post.title} fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                          </div>
                          <div className={styles.gridInfo}>
                            <span className={styles.postCatSmall}>{post.category}</span>
                            <h3>{post.title}</h3>
                            <p>{post.excerpt}</p>
                            <span className={styles.gridDate}>{post.date}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                  
                  {totalPages > 1 && (
                    <div className={styles.paginationContainer}>
                      <button 
                        onClick={() => handlePageChange(currentPage - 1)} 
                        disabled={currentPage === 1}
                        className={`${styles.pageBtn} ${currentPage === 1 ? styles.disabledBtn : ''}`}
                      >
                        Previous
                      </button>
                      
                      {getPageNumbers().map((page, index) => (
                        page === '...' ? (
                          <span key={`dots-${index}`} className={styles.pageDots}>...</span>
                        ) : (
                          <button 
                            key={page} 
                            onClick={() => handlePageChange(page)} 
                            className={`${styles.pageBtn} ${currentPage === page ? styles.activePageBtn : ''}`}
                          >
                            {page}
                          </button>
                        )
                      ))}
                      
                      <button 
                        onClick={() => handlePageChange(currentPage + 1)} 
                        disabled={currentPage === totalPages}
                        className={`${styles.pageBtn} ${currentPage === totalPages ? styles.disabledBtn : ''}`}
                      >
                        Next
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <div className={styles.noResults}>
                  <h3>No articles found</h3>
                  <p>Try adjusting your search or category filter.</p>
                  <button onClick={() => {setSearchQuery(""); handleCategoryChange("All");}} className={styles.resetBtn}>Reset Filters</button>
                </div>
              )}
            </div>

            <aside className={styles.sidebar}>
              <div className={styles.stickySidebar}>
                <div className={styles.newsletterBox}>
                  <h3>Get Daily Insights</h3>
                  <p>Join 12,000+ professionals receiving our daily logistics updates.</p>
                  <form className={styles.sideForm}>
                    <input type="email" placeholder="Email Address" required />
                    <button type="submit">Subscribe ➔</button>
                  </form>
                </div>
                
                <div className={styles.trustBox}>
                  <h4>Move With Confidence</h4>
                  <p>Ready to plan your relocation? Get a certified NexGo quote in 2 minutes.</p>
                  <Link href="/quote" className={styles.sideCta}>Get a Free Quote</Link>
                </div>
                
                <div className={styles.popularTags}>
                  <h4>Trending Topics</h4>
                  <div className={styles.tagCloud}>
                    <span onClick={() => {setSearchQuery("Packing"); setCurrentPage(1);}}>#SafePacking</span>
                    <span onClick={() => {setSearchQuery("Commercial"); setCurrentPage(1);}}>#CorporateMove</span>
                    <span onClick={() => {setSearchQuery("Insurance"); setCurrentPage(1);}}>#TransitInsurance</span>
                    <span onClick={() => {setSearchQuery("Interstate"); setCurrentPage(1);}}>#IntercityLogistics</span>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
      
      <CTA />
    </main>
  );
}