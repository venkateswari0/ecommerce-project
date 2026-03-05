import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isLogin ? 'Login' : 'Sign Up', { email, password });
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
          <p>{isLogin ? 'Welcome back to LINAKart' : 'Create your LINAKart account'}</p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {!isLogin && (
            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm your password"
                required
              />
            </div>
          )}

          <button type="submit" className="login-btn">
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>

        <div className="login-divider">OR</div>

        <div className="social-login">
          <button className="social-btn google-btn">Google</button>
          <button className="social-btn facebook-btn">Facebook</button>
        </div>

        <div className="login-toggle">
          <p>
            {isLogin ? "Don't have an account?" : 'Already have an account?'}
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? 'Sign up here' : 'Login here'}
            </button>
          </p>
        </div>

        <div className="login-links">
          <a href="#forgot">Forgot Password?</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
