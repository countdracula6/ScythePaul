import { useEffect, useRef } from 'react';

export default function ReleaseCard({ cover, title, band, date, lyrics }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = cover;
    img.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      // overlay
      ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
      ctx.fillRect(0, canvas.height - 70, canvas.width, 70);

      ctx.fillStyle = '#fff';
      ctx.font = 'bold 16px Orbitron';
      ctx.fillText(title, 10, canvas.height - 50);
      ctx.font = '14px Cinzel';
      ctx.fillText(`${band} • ${date}`, 10, canvas.height - 30);
      ctx.font = '12px Cinzel';
      ctx.fillText(lyrics, 10, canvas.height - 12);
    };
  }, [cover, title, band, date, lyrics]);

  return (
    <div style={cardStyle}>
      <canvas ref={canvasRef} width={300} height={300}></canvas>
    </div>
  );
}

const cardStyle = {
  width: '300px',
  height: '300px',
  borderRadius: '8px',
  overflow: 'hidden',
  boxShadow: '0 4px 12px rgba(0,0,0,0.5)'
};
