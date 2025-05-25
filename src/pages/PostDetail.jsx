import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../services/supabaseClient';
import LikeButton from '../components/LikeButton';
import CommentSection from '../components/CommentSection';
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

  return (
    <article className="post-detail-container" itemScope itemType="http://schema.org/Article">
      <button
      onClick={() => navigate('/blog')}
      style={{
        marginBottom: '1.5rem',
        padding: '0.5rem 1rem',
        backgroundColor: '#00bfff',
        color: '#fff',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        fontWeight: '600',
      }}
      aria-label="Kembali ke Blog"
    >
      ← Kembali ke Blog
    </button>

      <header>
        <h1 className="post-title" itemProp="headline">{post.title}</h1>
        <div className="post-meta">
          <span className="post-author" itemProp="author" itemScope itemType="http://schema.org/Person">
            Ditulis oleh: <strong itemProp="name">{post.author || 'Anonim'}</strong>
          </span>
          <time className="post-date" dateTime={post.created_at} itemProp="datePublished">
            {new Date(post.created_at).toLocaleDateString('id-ID', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        </div>
      </header>

      {/* Like button */}
      <div className="like-wrapper">
        <span className="like-label"></span>
        <LikeButton postId={post.id} />
      </div>

      <section
        className="post-content"
        itemProp="articleBody"
        dangerouslySetInnerHTML={{ __html: contentToRender }}
      />

      <CommentSection postId={post.id} />
    </article>
  );
};

export default PostDetail;
