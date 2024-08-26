import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="text-section">
          <h1>Hey,</h1>
          <h1>I'm Ibrahim</h1>
          <p>— a brand and experience design partner nudging people, teams and brands into greatness.</p>
        </div>
        <div className="links">
          <a href="https://www.linkedin.com/in/ibrahim-y-59a564194/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:ibrahim.younis267@gmail.com">Connect</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
