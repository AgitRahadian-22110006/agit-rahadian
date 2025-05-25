import React from 'react';
import { Link } from 'react-router-dom';
import './BlogPostCard.css';

const BlogPostCard = ({ post }) => {
  const { title, excerpt, created_at, author, slug } = post;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <article className="blog-card">
      <h2 className="blog-card-title">{title}</h2>
      <p className="blog-card-excerpt">{excerpt}</p>

      <div className="blog-card-meta">
        <span className="blog-card-author">✍️ {author || 'Anonim'}</span>
        <time className="blog-card-date" dateTime={created_at}>
          🗓️ {formatDate(created_at)}
        </time>
      </div>

      <Link to={`/blog/${slug}`} className="blog-card-button">
        Baca Selengkapnya →
      </Link>
    </article>
  );
};

export default BlogPostCard;
