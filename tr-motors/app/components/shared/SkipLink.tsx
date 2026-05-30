'use client';

export default function SkipLink() {
  return (
    <a
      href="#inicio"
      style={{
        position: 'fixed',
        left: '-9999px',
        zIndex: 99999,
        background: 'var(--red)',
        color: '#F5F5F5',
        padding: '8px 16px',
        fontFamily: 'var(--font-body)',
        fontSize: '14px',
        textDecoration: 'none',
      }}
      onFocus={(e) => { e.currentTarget.style.left = '16px'; e.currentTarget.style.top = '16px'; }}
      onBlur={(e) => { e.currentTarget.style.left = '-9999px'; }}
    >
      Ir al contenido
    </a>
  );
}
