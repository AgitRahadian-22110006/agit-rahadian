// src/pages/PostDetail.jsx
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../services/supabaseClient';
import LikeButton from '../components/LikeButton';
import CommentSection from '../components/CommentSection';
import SEO from '../components/SEO';
import './PostDetail.css';

function decodeHtml(html) {
  const txt = document.createElement('textarea');
  txt.innerHTML = html;
  return txt.value;
}

const PostDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('slug', slug)
        .single();

      if (error) {
        console.error('Error fetching post:', error);
      } else {
        setPost(data);
      }
      setLoading(false);
    };

    fetchPost();
  }, [slug]);

  if (loading) return <div className="post-loading">Memuat...</div>;
  if (!post) return <div className="post-error">Post tidak ditemukan.</div>;

  const contentToRender = decodeHtml(post.content);
  const siteUrl = 'https://agitrahadian.my.id';
  const pageUrl = `${siteUrl}/blog/${post.slug}`;

  // Contoh JSON-LD untuk BlogPosting
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": post.image_url || `${siteUrl}/assets/profile-picture.avif`, // ganti sesuai kolom image
    "datePublished": post.created_at,
    "dateModified": post.updated_at || post.created_at,
    "author": {
      "@type": "Person",
      "name": post.author || 'Anonim'
    },
    "publisher": {
      "@type": "Organization",
      "name": "Agit Rahadian",
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/android-chrome-512x512.png`
      }
    },
    "description": post.excerpt || post.content.slice(0, 160)
  };

  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt || post.content.slice(0, 160)}
        keywords={post.tags || 'Blog, Agit Rahadian, Pemrograman, Web'}
        canonical={pageUrl}
        ogImage={post.image_url || `${siteUrl}/assets/profile-picture.avif`}
        ogType="article"
        structuredData={articleSchema}
      />

      <article
        className="post-detail-container"
        itemScope
        itemType="http://schema.org/BlogPosting"
      >
        <button
          onClick={() => navigate('/blog')}
          className="back-button"
          aria-label="Kembali ke Blog"
        >
          ← Kembali ke Blog
        </button>

        <header>
          <h1 className="post-title" itemProp="headline">
            {post.title}
          </h1>
          <div className="post-meta">
            <span
              className="post-author"
              itemProp="author"
              itemScope
              itemType="http://schema.org/Person"
            >
              Ditulis oleh: <strong itemProp="name">{post.author || 'Anonim'}</strong>
            </span>
            <time
              className="post-date"
              dateTime={post.created_at}
              itemProp="datePublished"
            >
              {new Date(post.created_at).toLocaleDateString('id-ID', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </div>
        </header>

        <div className="post-like-row">
          <LikeButton postId={post.id} />
        </div>

        <section
          className="post-content"
          itemProp="articleBody"
          dangerouslySetInnerHTML={{ __html: contentToRender }}
        />

        <CommentSection postId={post.id} />
      </article>
    </>
  );
};

export default PostDetail;
