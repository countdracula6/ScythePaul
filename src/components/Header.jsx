// src/components/Header.jsx
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
  const [hovered, setHovered] = useState(null);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/music', label: 'Music' },
    { path: '/about', label: 'About' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/tour', label: 'Tour' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <header style={headerStyle}>
      <h1 style={logoStyle}>ScythePaul</h1>
      
      <nav>
        <ul style={navListStyle}>
          {navItems.map((item, index) => (
            <li key={item.path}>
              <Link
                to={item.path}
                style={{
                  ...linkStyle,
                  color: hovered === index ? 'var(--accent-pink)' : 'var(--text-white)',
                  textShadow: hovered === index ? '0 0 8px var(--accent-pink)' : 'none',
                  borderBottom: hovered === index ? '2px solid var(--accent-pink)' : '2px solid transparent'
                }}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

const headerStyle = {
  background: 'var(--bg-charcoal)',
  padding: '1rem 2rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottom: '1px solid var(--gray-light)'
};

const logoStyle = {
  color: 'var(--accent-pink)',
  margin: 0,
  fontFamily: 'var(--font-heading)',
  textShadow: '0 0 6px var(--accent-pink)'
};

const navListStyle = {
  listStyle: 'none',
  display: 'flex',
  gap: '2rem',
  margin: 0,
  padding: 0
};

const linkStyle = {
  textDecoration: 'none',
  fontFamily: 'var(--font-body)',
  padding: '0.3rem 0.5rem',
  transition: '0.3s'
};
