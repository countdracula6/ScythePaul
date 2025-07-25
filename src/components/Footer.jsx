// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer style={footerStyle}>
      <p style={textStyle}>
        © {new Date().getFullYear()} <span style={brandStyle}>ScythePaul</span>. All rights reserved.
      </p>
      <p style={linkWrapperStyle}>
        <a href="mailto:contact@scythepaul.com" style={linkStyle}>
          contact@scythepaul.com
        </a>
      </p>
    </footer>
  );
}

const footerStyle = {
  background: 'var(--bg-charcoal)',
  padding: '1rem 2rem',
  textAlign: 'center',
  borderTop: '1px solid var(--gray-light)',
  marginTop: '2rem'
};

const textStyle = {
  color: 'var(--text-white)',
  margin: '0.3rem 0',
  fontFamily: 'var(--font-body)'
};

const brandStyle = {
  color: 'var(--accent-pink)',
  fontFamily: 'var(--font-heading)',
  textShadow: '0 0 4px var(--accent-pink)'
};

const linkWrapperStyle = {
  marginTop: '0.5rem'
};

const linkStyle = {
  color: 'var(--text-white)',
  textDecoration: 'none',
  transition: '0.3s'
};
