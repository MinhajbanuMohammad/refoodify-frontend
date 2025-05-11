import React, { useState } from 'react';
import './AuthForm.css';

const AuthForm = () => {
  const [activeTab, setActiveTab] = useState('login');
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = activeTab === 'signup' ? '/api/auth/signup' : '/api/auth/login';

    try {
      const response = await fetch(`http://localhost:5000${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Something went wrong');

      alert(`Success: ${activeTab === 'signup' ? 'Account created!' : 'Logged in!'}`);
      console.log('User Data:', data);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <section className="auth-section">
      <h2>Please Move Forward To Create or Login in to your account</h2>
      <div className="auth-tabs">
        <button className={`tab ${activeTab === 'login' ? 'active' : ''}`} onClick={() => setActiveTab('login')}>
          Login
        </button>
        <button className={`tab ${activeTab === 'signup' ? 'active' : ''}`} onClick={() => setActiveTab('signup')}>
          Sign Up
        </button>
      </div>

      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>{activeTab === 'login' ? 'Login' : 'Sign Up'}</h2>
        {activeTab === 'signup' && (
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        )}
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        <button type="submit">{activeTab === 'login' ? 'Login' : 'Sign Up'}</button>
      </form>
    </section>
  );
};

export default AuthForm;
