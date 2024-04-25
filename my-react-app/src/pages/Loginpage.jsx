import React, { useState } from 'react';
import '../assets/loginpage.css';
// import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const EmployeeLoginDetail = [
  {
    name: "Adam mohamad",
    email: "adam@gmail.com",
    password: "1234"
  },
  {
    name: "vignesh",
    email: "vignesh@gmail.com",
    password: "1234"
  }
];

export default function Loginpage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');
  // const history = useHistory(); 
 
const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your login logic here
    console.log('Submitted:', { email, password });
    const authenticated = EmployeeLoginDetail.some(obj => obj.email === email && obj.password === password);
    console.log(authenticated);
    setIsAuthenticated(authenticated);
    if (authenticated) {
     navigate('/dashboard'); // Redirect to /dashboard if authenticated
    }
    else {
      setError('Invalid username or password'); // Set error message
    }
  };

  console.log(email);
  console.log(password);
  return (
    <div className="mac-book-pro-9">
      <div className="container">
        <div className="rectangle-1"></div>
        <div className="indias-first-end-to-end-event-experience-app">
          Code Crave Solutions pvt ltd
        </div>
        <img className="group-30" src="assets/vectors/Group30_x2.svg" alt="Group 30" />
      </div>
      <div className="group-101">
        <form onSubmit={handleSubmit}>
          <div className="group">
            <div className="get-started">
              Get Started
            </div>
            <div className="lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit-sed"></div>
            <div className="group-4">
              <div className="email-address">
                Email Address
              </div>
              <div className="group-397">
                <input
                  className="sourabh-bankaalienbrains-in"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="group-399">
              <div className="password">
                Password
              </div>
              <div className="container-1">
                <input
                  className="container"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="group-96">
              <div className="group-95">
                <input type="checkbox" />
                <div className="remember-me">
                  Remember me
                </div>
              </div>
              <div className="forgot-password">
                Forgot Password
              </div>
            </div>
            <button type="submit" className="login">
              Login
            </button>
            <div className='error_message'>{error}</div>
            <span className="by-clicking-on-button-above-you-agrees-to-our-terms-of-use-and-privacy-policy">
              By clicking on button above, you agree to our terms of use and privacy policy
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
