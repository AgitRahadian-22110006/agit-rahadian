// src/pages/AdminDashboard.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../services/supabaseClient';
import { Helmet } from 'react-helmet-async';
import './Dashboard.css';
import { FaPlus, FaSignOutAlt, FaSearch } from 'react-icons/fa';
import DashboardPostForm from '../components/DashboardPostForm';

const AdminDashboard = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingPost, setEditingPost] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [stats, setStats] = useState({ posts: 0, comments: 0, likes: 0 });
  const navigate = useNavigate();

  useEffect(() => {
    fetchPosts();
    fetchComments();
    fetchStats();
  }, []);

  // Ambil semua post
  const fetchPosts = async () => {
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching posts:', error);
    } else {
      setPosts(data);
      setFilteredPosts(data);
    }
  };

  // Ambil semua komentar terbaru (misal 20)
  const fetchComments = async () => {
    const { data, error } = await supabase
      .from('comments')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(20);

    if (error) {
      console.error('Error fetching comments:', error);
    } else {
      setComments(data);
    }
  };

  // Ambil statistik (jumlah post, komentar, likes)
  const fetchStats = async () => {
    const [{ count: postCount }, { count: commentCount }, { data: likeData }] = await Promise.all([
      supabase.from('posts').select('id', { count: 'exact', head: true }),
      supabase.from('comments').select('id', { count: 'exact', head: true }),
      supabase.from('posts').select('likes'),
    ]);

    const totalLikes = likeData?.reduce((acc, post) => acc + (post.likes || 0), 0) || 0;

    setStats({
      posts: postCount || 0,
      comments: commentCount || 0,
      likes: totalLikes,
    });
  };

  // Edit post
  const handleEdit = (post) => {
    setEditingPost(post);
    setShowForm(true);
  };

  // Hapus post dengan konfirmasi
  const handleDelete = async (id) => {
    if (window.confirm('Yakin ingin menghapus post ini?')) {
      const { error } = await supabase.from('posts').delete().eq('id', id);
      if (error) {
        alert('Gagal menghapus post.');
      } else {
        fetchPosts();
        fetchStats();
      }
    }
  };

  // Hapus komentar dengan konfirmasi
  const handleDeleteComment = async (id) => {
    if (window.confirm('Yakin ingin menghapus komentar ini?')) {
      const { error } = await supabase.from('comments').delete().eq('id', id);
      if (error) {
        alert('Gagal menghapus komentar.');
      } else {
        fetchComments();
        fetchStats();
      }
    }
  };

  // Reset likes pada post tertentu (set likes ke 0)
  const handleResetLikes = async (postId) => {
    if (window.confirm('Yakin ingin menghapus semua likes pada post ini?')) {
      const { error } = await supabase.from('posts').update({ likes: 0 }).eq('id', postId);
      if (error) {
        alert('Gagal menghapus likes.');
      } else {
        fetchPosts();
        fetchStats();
      }
    }
  };

  // Logout
  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/admin');
  };

  // Filter post by title
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    const filtered = posts.filter((post) =>
      post.title.toLowerCase().includes(value)
    );
    setFilteredPosts(filtered);
  };

  return (
    <div className="admin-dashboard">
      <Helmet>
        <title>Admin Dashboard | Agit Rahadian</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <header className="admin-header">
        <h1>Dashboard Admin | Agit Rahadian</h1>
        <div className="admin-actions">
          <button onClick={() => navigate('/')}>🏠 Home</button>
          <button onClick={() => { setShowForm(true); setEditingPost(null); }}>
            <FaPlus /> Tambah Post
          </button>
          <button onClick={handleLogout} className="danger">
            <FaSignOutAlt /> Logout
          </button>
        </div>
      </header>

      <div className="dashboard-stats">
        <div className="stat-box">
          <h3>{stats.posts}</h3>
          <p>Total Post</p>
        </div>
        <div className="stat-box">
          <h3>{stats.comments}</h3>
          <p>Komentar</p>
        </div>
        <div className="stat-box">
          <h3>{stats.likes}</h3>
          <p>Total Likes</p>
        </div>
      </div>

      <div className="search-bar">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Cari post berdasarkan judul..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      {showForm && (
        <DashboardPostForm
          onClose={() => { setShowForm(false); setEditingPost(null); }}
          onRefresh={() => { fetchPosts(); fetchStats(); }}
          editingPost={editingPost}
        />
      )}

      {/* Post List */}
      <div className="post-list">
        {filteredPosts.length === 0 ? (
          <p>Tidak ada post yang ditemukan.</p>
        ) : (
          filteredPosts.map((post) => (
            <div key={post.id} className="post-card">
              <h3>{post.title}</h3>
              
              <div className="post-actions">
                <button onClick={() => handleEdit(post)}>Edit</button>
                <button onClick={() => handleDelete(post.id)} className="danger">Hapus</button>
                <button onClick={() => handleResetLikes(post.id)} className="warning">
                  Reset Likes ({post.likes || 0})
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Comments Section */}
      <section className="comments-management">
        <h2>Daftar Komentar Terbaru</h2>
        {comments.length === 0 ? (
          <p>Tidak ada komentar.</p>
        ) : (
          <ul className="comments-list">
            {comments.map(comment => (
              <li key={comment.id} className="comment-item">
                <div>
                  <strong>{comment.name}</strong> pada post <em>{comment.post_id}</em>
                  <p>{comment.message}</p>
                  <small>{new Date(comment.created_at).toLocaleString()}</small>
                </div>
                <button 
                  className="danger"
                  onClick={() => handleDeleteComment(comment.id)}
                  title="Hapus Komentar"
                >
                  Hapus
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default AdminDashboard;
