import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ isLoggedIn, setIsLoggedIn }) => {
  console.log("Login component rendered");
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://life-gives-you-pencils-api-f1604f957ec2.herokuapp.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },        
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();  

      if (response.ok) {  
        localStorage.setItem('authToken', data.token);
        setIsLoggedIn(true);
        console.log('Login success, isLoggedIn:', isLoggedIn);

        navigate('/img-management');
      } else {
        console.log('Error response:', data);
        setErrorMessage(data.message || 'Login failed.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setErrorMessage('Something went wrong during login.');
    }
  };

  return (
    <div className='login-page-wrapper'>

      <div className='login-form-wrapper'>
      {errorMessage && <div>{errorMessage}</div>}
      <form onSubmit={handleLogin}>        
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          /><div className='login-form-spacing'>  </div>
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          /><br /><br />
        </label>
        <button className='btn-admin-login' type="submit">Login</button>
      </form>
      </div>
    </div>
  );
};

export default Login;
