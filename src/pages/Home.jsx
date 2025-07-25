// src/pages/Home.jsx
import ReleaseCard from '../components/ReleaseCard';
import cover1 from '../assets/images/cover1.jpg';
import cover2 from '../assets/images/cover2.jpg';
import cover3 from '../assets/images/cover3.jpg';

export default function Home() {
  return (
    <div style={gridWrapper}>
      <div style={gridStyle}>
        <ReleaseCard 
          cover={cover1}
          title="Ashes in Motion"
          band="ScythePaul"
          date="2025"
          lyrics="Through shadows we ignite..."
        />
        <ReleaseCard 
          cover={cover2}
          title="Veins of Iron"
          band="ScythePaul"
          date="2025"
          lyrics="Rust and blood combine..."
        />
        <ReleaseCard 
          cover={cover3}
          title="Echoes Divide"
          band="ScythePaul"
          date="2025"
          lyrics="Whispers cut through the void..."
        />
      </div>
    </div>
  );
}

const gridWrapper = {
  maxWidth: '960px',     // fits 3 cards at 300px + gaps
  margin: '0 auto',
  padding: '1rem'
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)', // always 3 columns on desktop
  justifyItems: 'center',
  gap: '1rem'
};
