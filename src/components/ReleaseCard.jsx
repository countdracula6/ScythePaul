import { FaHeart, FaShareAlt, FaPlay } from 'react-icons/fa';

export default function ReleaseCard({ cover, title, band, date, lyrics }) {
  return (
    <div style={cardStyle}>
      <img src={cover} alt={title} style={imageStyle} />
      <div style={infoStyle}>
        <h3 style={titleStyle}>{title}</h3>
        <p style={bandStyle}>{band}</p>
        <small style={dateStyle}>{date}</small>
        <p style={lyricStyle}>{lyrics}</p>
        <div style={iconRow}>
          <FaHeart style={iconStyle} />
          <FaShareAlt style={iconStyle} />
          <FaPlay style={iconStyle} />
        </div>
      </div>
    </div>
  );
}

const cardStyle = {
  background: 'var(--gray-medium)',
  padding: '0.8rem',          // less padding inside the card
  borderRadius: '8px',
  width: '300px',
  color: 'var(--text-white)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '0 auto'            // center each card
};

const imageStyle = {
  width: '300px',
  height: '300px',
  objectFit: 'cover',
  border: '2px solid var(--accent-pink)',
  marginBottom: '0.3rem'      // less space below the image
};

const infoStyle = {
  textAlign: 'center'
};

const titleStyle = {
  margin: '0.3rem 0',
  fontFamily: 'var(--font-heading)',
  color: 'var(--accent-pink)'
};

const bandStyle = {
  margin: 0,
  fontFamily: 'var(--font-body)'
};

const dateStyle = {
  color: 'var(--gray-light)'
};

const lyricStyle = {
  fontStyle: 'italic',
  fontSize: '0.9rem',
  color: 'var(--accent-pink)'
};

const iconRow = {
  display: 'flex',
  justifyContent: 'center',
  gap: '1rem',                // reduced spacing between icons
  marginTop: '0.3rem'
};

const iconStyle = {
  cursor: 'pointer',
  fontSize: '1.3rem',
  transition: '0.3s'
};
