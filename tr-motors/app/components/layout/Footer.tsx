'use client';

import Logo from '../shared/Logo';

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
        <Logo size={20} subtitleColor="#444" />

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
          {[
            { label: 'Instagram', href: 'https://instagram.com/trmotors.uy' },
            { label: 'WhatsApp', href: 'https://wa.me/59891946795' },
            { label: 'Email', href: 'mailto:joeltripodi.trabajo@gmail.com' },
          ].map(social => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
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
              aria-label={social.label}
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
