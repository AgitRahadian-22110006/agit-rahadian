import React, { useEffect, useState } from 'react';
import { supabase } from '../services/supabaseClient';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import './LikeButton.css';

const LikeButton = ({ postId }) => {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchLikes = async () => {
      const { data, error } = await supabase
        .from('posts')
        .select('likes')
        .eq('id', postId)
        .single();

      if (!error && data) {
        setLikes(data.likes || 0);
      }
    };

    fetchLikes();
  }, [postId]);

  const toggleLike = async () => {
    if (loading) return;
    setLoading(true);

    const newLikes = liked ? likes - 1 : likes + 1;

    const { error } = await supabase
      .from('posts')
      .update({ likes: newLikes })
      .eq('id', postId);

    if (!error) {
      setLikes(newLikes);
      setLiked(!liked);
    }

    setLoading(false);
  };

  return (
    <div className="like-button-container">
      <span className="like-label">Like:</span>
      <div className="like-button" onClick={toggleLike}>
        {liked ? (
          <AiFillHeart className="icon liked" />
        ) : (
          <AiOutlineHeart className="icon" />
        )}
        <span className="like-count">{likes}</span>
      </div>
    </div>
  );
};

export default LikeButton;
