'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: '0 40px',
          height: scrolled ? '64px' : '80px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: scrolled
            ? 'rgba(8,8,8,0.95)'
            : 'transparent',
          borderBottom: scrolled ? '1px solid #222' : '1px solid transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          transition: 'all 0.4s ease',
        }}
      >
        {/* Logo */}
        <a href="#" style={{ textDecoration: 'none' }}>
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
            <span style={{
              fontFamily: 'var(--font-display)',
              fontSize: '26px',
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
              color: '#888',
              marginTop: '2px',
            }}>
              PERFORMANCE X DETAILING
            </span>
          </div>
        </a>

        {/* Desktop links */}
        <div style={{
          display: 'flex',
          gap: '36px',
          alignItems: 'center',
        }}
          className="hidden md:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                fontSize: '13px',
                letterSpacing: '0.15em',
                color: '#AAAAAA',
                textDecoration: 'none',
                textTransform: 'uppercase',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#F5F5F5')}
              onMouseLeave={e => (e.currentTarget.style.color = '#AAAAAA')}
            >
              {link.label}
            </a>
          ))}

          <a
            href="#reservas"
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: '13px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#F5F5F5',
              background: 'var(--red)',
              padding: '10px 24px',
              textDecoration: 'none',
              clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)',
              transition: 'background 0.2s ease',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'var(--red-bright)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'var(--red)')}
          >
            Reservar turno
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: 'none',
            border: 'none',
            color: '#F5F5F5',
            cursor: 'pointer',
            padding: '8px',
          }}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              top: '64px',
              left: 0,
              right: 0,
              background: 'rgba(8,8,8,0.98)',
              backdropFilter: 'blur(12px)',
              zIndex: 999,
              padding: '32px 40px',
              borderBottom: '1px solid #222',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '24px',
                  letterSpacing: '0.1em',
                  color: '#F5F5F5',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#reservas"
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '16px',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#F5F5F5',
                background: 'var(--red)',
                padding: '14px 28px',
                textDecoration: 'none',
                textAlign: 'center',
                clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)',
                marginTop: '8px',
              }}
            >
              Reservar turno
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
