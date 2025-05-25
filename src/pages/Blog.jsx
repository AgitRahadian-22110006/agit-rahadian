import React, { useEffect, useState } from 'react';
import { supabase } from '../services/supabaseClient';
import BlogPostCard from '../components/BlogPostCard';
import Navbar from '../components/Navbar';
import '../styles/Blog.css';

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

  return (
    <>
      <Navbar />
      <main className="blog-page">
        <h1 className="blog-title">Blog Agit Rahadian</h1>

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
