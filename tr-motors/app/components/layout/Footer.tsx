'use client';

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--black)',
      borderTop: '1px solid #1a1a1a',
      padding: '40px clamp(24px, 6vw, 120px)',
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '24px',
      }}>
        {/* Logo */}
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
          <span style={{
            fontFamily: 'var(--font-display)',
            fontSize: '20px',
            fontWeight: 900,
            letterSpacing: '0.04em',
            background: 'linear-gradient(180deg, #E8E8E8 0%, #C0C0C0 40%, #888 70%, #C0C0C0 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            TR <span style={{
              background: 'linear-gradient(180deg, #FF4444 0%, #CC2222 50%, #991111 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>M</span>OTORS
          </span>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '8px',
            letterSpacing: '0.25em',
            color: '#444',
            marginTop: '2px',
          }}>PERFORMANCE X DETAILING</span>
        </div>

        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '10px',
          color: '#333',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
        }}>
          © {new Date().getFullYear()} TR Motors — Todos los derechos reservados
        </div>

        <div style={{ display: 'flex', gap: '24px' }}>
          {['Instagram', 'WhatsApp', 'Facebook'].map(social => (
            <a
              key={social}
              href="#"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                letterSpacing: '0.15em',
                color: '#444',
                textDecoration: 'none',
                textTransform: 'uppercase',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#888')}
              onMouseLeave={e => (e.currentTarget.style.color = '#444')}
            >
              {social}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
