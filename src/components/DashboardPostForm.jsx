import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import { supabase } from '../services/supabaseClient';
import 'react-quill/dist/quill.snow.css';
import './DashboardPostForm.css';

function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')       // spasi jadi tanda strip
    .replace(/[^\w\-]+/g, '')   // hapus karakter non-alphanumeric
    .replace(/\-\-+/g, '-');    // ganti multiple strip jadi satu strip
}

const DashboardPostForm = ({ onClose, onRefresh, editingPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [saving, setSaving] = useState(false);

  // Kunci scroll body saat modal aktif
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  // Jika edit post, isi form dengan data post
  useEffect(() => {
    if (editingPost) {
      setTitle(editingPost.title);
      setContent(editingPost.content);  // pastikan content HTML asli
    } else {
      setTitle('');
      setContent('');
    }
  }, [editingPost]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    const {
      data: { user: currentUser },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !currentUser) {
      alert('User belum login atau sesi habis, silakan login ulang.');
      setSaving(false);
      return;
    }

    // Simpan konten HTML asli dari ReactQuill langsung
    const postData = {
      title,
      content,
      slug: slugify(title),
      user_id: currentUser.id,
      author: currentUser.user_metadata?.full_name || currentUser.email,
    };

    let result;
    if (editingPost) {
      result = await supabase
        .from('posts')
        .update(postData)
        .eq('id', editingPost.id);
    } else {
      result = await supabase
        .from('posts')
        .insert(postData);
    }

    setSaving(false);

    if (result.error) {
      alert('Gagal menyimpan post.');
      console.error(result.error);
    } else {
      onRefresh();
      onClose();
    }
  };

  return (
    <div className="form-overlay" onClick={onClose}>
      <div
        className="form-container"
        onClick={(e) => e.stopPropagation()}
      >
        <h2>{editingPost ? 'Edit Post' : 'Tambah Post'}</h2>
        <form onSubmit={handleSubmit}>
          <label>Judul</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="Masukkan judul post"
          />

          <label>Konten</label>
          <ReactQuill
            theme="snow"
            value={content}
            onChange={setContent}
            placeholder="Tulis isi artikel di sini..."
            modules={{
              toolbar: [
                [{ header: [1, 2, 3, false] }],
                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                [{ list: 'ordered' }, { list: 'bullet' }],
                ['link', 'image'],
                ['clean'],
              ],
            }}
            formats={[
              'header',
              'bold', 'italic', 'underline', 'strike', 'blockquote',
              'list', 'bullet',
              'link', 'image',
            ]}
            style={{ minHeight: '300px', marginBottom: '2rem' }}
          />

          <div className="form-actions">
            <button type="submit" disabled={saving}>
              {saving ? 'Menyimpan...' : 'Simpan'}
            </button>
            <button type="button" onClick={onClose} className="cancel">
              Batal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DashboardPostForm;
