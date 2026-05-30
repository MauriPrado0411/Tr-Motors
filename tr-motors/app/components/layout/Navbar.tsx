'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from '../shared/Logo';

const navLinks = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuOpenRef = useRef(false);

  useEffect(() => {
    menuOpenRef.current = menuOpen;
  }, [menuOpen]);

  useEffect(() => {
    const handler = () => {
      setScrolled(window.scrollY > 40);
      if (menuOpenRef.current) setMenuOpen(false);
    };
    window.addEventListener('scroll', handler, { passive: true });
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
            padding: '0 clamp(16px, 4vw, 40px)',
            height: scrolled ? '56px' : '64px',
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
            <Logo />
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex" style={{
            gap: '36px',
            alignItems: 'center',
          }}>
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
            className="block md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            style={{
              background: 'rgba(255,255,255,0.06)',
              border: 'none',
              color: '#F5F5F5',
              cursor: 'pointer',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background 0.2s ease',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.12)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.06)')}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </motion.nav>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 999,
              background: 'rgba(8,8,8,0.97)',
              backdropFilter: 'blur(16px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '32px',
            }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '28px',
                  letterSpacing: '0.12em',
                  color: '#F5F5F5',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--red)')}
                onMouseLeave={e => (e.currentTarget.style.color = '#F5F5F5')}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#reservas"
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: navLinks.length * 0.06 + 0.1 }}
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '15px',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#F5F5F5',
                background: 'var(--red)',
                padding: '14px 36px',
                textDecoration: 'none',
                textAlign: 'center',
                clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)',
                marginTop: '8px',
              }}
            >
              Reservar turno
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
