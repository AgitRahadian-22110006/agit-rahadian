import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../services/supabaseClient';
import { AiFillHeart, AiOutlineComment } from 'react-icons/ai';
import './BlogPostCard.css';

const BlogPostCard = ({ post }) => {
  const { id, title, excerpt, created_at, author, slug } = post;
  const [likes, setLikes] = useState(0);
  const [commentsCount, setCommentsCount] = useState(0);

  useEffect(() => {
    const fetchCounts = async () => {
      const { data: likeData, error: likeError } = await supabase
        .from('posts')
        .select('likes')
        .eq('id', id)
        .single();

      if (!likeError && likeData) {
        setLikes(likeData.likes || 0);
      }

      const { count: commentCount, error: commentError } = await supabase
        .from('comments')
        .select('*', { count: 'exact', head: true })
        .eq('post_id', id);

      if (!commentError && commentCount !== null) {
        setCommentsCount(commentCount);
      }
    };

    fetchCounts();
  }, [id]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <article className="blog-card" aria-label={`Post: ${title}`}>
      <h2 className="blog-card-title">{title}</h2>

      <p className="blog-card-excerpt">{excerpt}</p>

      <div className="blog-card-meta">
        <span className="blog-card-author">✍️ {author || 'Anonim'}</span>
        <time className="blog-card-date" dateTime={created_at}>
          🗓️ {formatDate(created_at)}
        </time>
        <div className="blog-card-engagement">
          <span className="blog-card-like"><AiFillHeart /> {likes}</span>
          <span className="blog-card-comment"><AiOutlineComment /> {commentsCount}</span>
        </div>
      </div>

      <Link to={`/blog/${slug}`} className="blog-card-button" aria-label={`Baca selengkapnya tentang ${title}`}>
        Baca Selengkapnya →
      </Link>
    </article>
  );
};

export default BlogPostCard;
