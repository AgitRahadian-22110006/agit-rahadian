// src/pages/Blog.jsx
import React, { useEffect, useState } from 'react';
import { supabase } from '../services/supabaseClient';
import BlogPostCard from '../components/BlogPostCard';
import Navbar from '../components/Navbar';
import SEO from '../components/SEO';
import './Blog.css';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Gagal mengambil data post:', error);
    } else {
      setPosts(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Beranda",
        item: "https://agitrahadian.my.id/"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://agitrahadian.my.id/blog"
      }
    ]
  };

  return (
    <>
      <SEO
        title="Blog Agit Rahadian | Artikel Pemrograman dan Web"
        description="Baca artikel terbaru seputar pemrograman, pengembangan web, dan wawasan digital dari Agit Rahadian. Cocok untuk developer dan pemilik bisnis digital."
        keywords="Blog Agit Rahadian, Artikel Pemrograman, Tutorial Web Developer, Belajar Koding, Supabase, JavaScript"
        canonical="https://agitrahadian.my.id/blog"
        ogType="website"
        ogImage="https://agitrahadian.my.id/assets/profile-picture.avif"
        structuredData={breadcrumbSchema}
      />

      <Navbar />
      <main className="blog-page">
        <h1 className="blog-title">
          <span className="blog-title-line">Blog</span>
          <span className="blog-title-line">Agit Rahadian</span>
        </h1>

        {loading ? (
          <p className="loading">Memuat postingan...</p>
        ) : posts.length === 0 ? (
          <p className="empty">Belum ada postingan.</p>
        ) : (
          <div className="posts-container">
            {posts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </main>
    </>
  );
};

export default Blog;
