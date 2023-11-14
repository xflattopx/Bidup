// HomePage.tsx

import React from 'react';
import './HomePage.css';

interface HomePageProps {
  userRole?: string; // 'driver' or 'customer'
}

const HomePage: React.FC<HomePageProps> = ({ userRole }) => {
  const navigateTo = (path: string) => {
    window.location.href = path; // Directly change the URL
  };

  return (
    <div className="home-page-container">
      <div className="box">
        <nav className="navbar">
          <ul>
            <li><button onClick={() => navigateTo('/register')}>Register</button></li>
            <li><button onClick={() => navigateTo('/login')}>Login</button></li>
            {userRole === 'driver' && (
              <li className="dropdown">
                <button onClick={() => navigateTo('/queue')}>View Queue</button>
                <div className="dropdown-content">
                  <button onClick={() => navigateTo('/dashboard')}>Driver Dashboard</button>
                  <button onClick={() => navigateTo('/profile')}>Profile</button>
                </div>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default HomePage;
