import { useState, useEffect } from 'react';
import { supabase } from '../services/supabaseClient';
import './CommentSection.css';

export default function CommentsSection({ postId }) {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchComments();
  }, [postId]);

  async function fetchComments() {
    const { data, error } = await supabase
      .from('comments')
      .select('*')
      .eq('post_id', postId)
      .order('created_at', { ascending: true });

    if (error) {
      console.error('Error fetching comments:', error);
    } else {
      setComments(data);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!name || !message) {
      alert('Please fill all fields');
      return;
    }
    setLoading(true);

    const { data, error } = await supabase
      .from('comments')
      .insert([{ post_id: postId, name: name, message: message }]);

    if (error) {
      console.error('Error inserting comment:', error);
      alert('Failed to add comment');
    } else {
      setName('');
      setMessage('');
      fetchComments();
    }

    setLoading(false);
  }

  return (
    <div className="comments-section">
      <h3>Comments</h3>
      <form className="comment-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={e => setName(e.target.value)}
          maxLength={50}
          required
        />
        <textarea
          placeholder="Your comment"
          value={message}
          onChange={e => setMessage(e.target.value)}
          maxLength={300}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit Comment'}
        </button>
      </form>

      <ul className="comments-list">
        {comments.length === 0 ? (
          <li>No comments yet. Be the first!</li>
        ) : (
          comments.map(c => (
            <li key={c.id}>
              <strong>{c.name}</strong>: {c.message}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
