// pages/Login.jsx
import AdminLogin from '../components/AdminLogin';
import { Helmet } from 'react-helmet-async';

const Login = () => {
  return (
    <div className="login-page">
      <Helmet>
        <title>Admin Login | Agit Rahadian</title>
        <meta name="description" content="Halaman login admin untuk mengelola blog Agit Rahadian" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <main>
        <AdminLogin />
      </main>
    </div>
  );
};

export default Login;
