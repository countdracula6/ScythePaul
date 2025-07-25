import ReleaseCard from '../components/ReleaseCard';
import cover1 from '../assets/images/cover1.jpg';
import cover2 from '../assets/images/cover2.jpg';
import cover3 from '../assets/images/cover3.jpg';
import releases from '../data/releases';

export default function Home() {
  const covers = [cover1, cover2, cover3];

  return (
    <div style={gridWrapper}>
      <div style={gridStyle}>
        {releases.map((release, index) => (
          <ReleaseCard
            key={index}
            cover={covers[index % 3]} // cycle through 3 covers
            title={release.title}
            band="ScythePaul"
            date="2025"
            lyrics={release.snippet}
          />
        ))}
      </div>
    </div>
  );
}

const gridWrapper = {
  maxWidth: '960px',
  margin: '0 auto',
  padding: '1rem'
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  justifyItems: 'center',
  gap: '1rem'
};
