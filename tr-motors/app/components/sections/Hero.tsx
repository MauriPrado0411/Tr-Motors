'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const serviceTags = [
  'Lavado Premium', 'Coating Cerámico', 'Pulido Profesional',
  'Detailing Interior', 'Paint Protection Film', 'Descontaminación',
  'Lavado Premium', 'Coating Cerámico', 'Pulido Profesional',
  'Detailing Interior', 'Paint Protection Film', 'Descontaminación',
];

function FloatingTag({ label, index }: { label: string; index: number }) {
  const colors = ['#CC2222', '#C0C0C0', '#888888'];
  const color = colors[index % 3];
  return (
    <div style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      padding: '8px 20px',
      border: `1px solid ${color}33`,
      background: `${color}0A`,
      whiteSpace: 'nowrap',
      flexShrink: 0,
    }}>
      <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: color, flexShrink: 0 }} />
      <span style={{
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: '12px',
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        color: '#AAAAAA',
      }}>
        {label}
      </span>
    </div>
  );
}

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      id="inicio"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--black)',
      }}
    >
      {/* Background grid */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(204,34,34,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(204,34,34,0.04) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px',
        maskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, black 40%, transparent 100%)',
      }} />

      {/* Red glow top-right */}
      <div style={{
        position: 'absolute',
        top: '-20%',
        right: '-10%',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(204,34,34,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Bottom-left chrome glow */}
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '-10%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(192,192,192,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10"
      >
        {/* Main headline */}
        <div style={{ padding: '0 clamp(24px, 6vw, 120px)' }}>
          <div style={{ overflow: 'hidden' }}>
            <motion.h1
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 900,
                fontSize: 'clamp(52px, 13vw, 180px)',
                lineHeight: 0.88,
                letterSpacing: '-0.02em',
                textTransform: 'uppercase',
                background: 'linear-gradient(180deg, #E8E8E8 0%, #C0C0C0 40%, #888 70%, #C0C0C0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Tu auto.
            </motion.h1>
          </div>

          <div style={{ overflow: 'hidden' }}>
            <motion.h1
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 900,
                fontStyle: 'italic',
                fontSize: 'clamp(52px, 13vw, 180px)',
                lineHeight: 0.88,
                letterSpacing: '-0.02em',
                textTransform: 'uppercase',
                background: 'linear-gradient(180deg, #FF4444 0%, #CC2222 50%, #991111 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Impecable.
            </motion.h1>
          </div>

          <div style={{ overflow: 'hidden' }}>
            <motion.h1
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 300,
                fontSize: 'clamp(52px, 13vw, 180px)',
                lineHeight: 0.88,
                letterSpacing: '-0.02em',
                textTransform: 'uppercase',
                color: 'rgba(192,192,192,0.25)',
                WebkitTextStroke: '1px rgba(192,192,192,0.3)',
              }}
            >
              Siempre.
            </motion.h1>
          </div>
        </div>

        {/* Sub + CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          style={{
            padding: '32px clamp(24px, 6vw, 120px) 0',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-end',
            gap: '40px',
            justifyContent: 'space-between',
          }}
        >
          <p style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 300,
            fontSize: 'clamp(15px, 1.8vw, 18px)',
            color: '#888',
            maxWidth: '380px',
            lineHeight: 1.7,
          }}>
            Detailing profesional con los mejores productos del mercado.
            Cada servicio, un resultado que habla solo.
          </p>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', width: '100%' }}>
            <a
              href="#reservas"
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '14px',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#F5F5F5',
                background: 'var(--red)',
                padding: '16px 36px',
                textDecoration: 'none',
                clipPath: 'polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%)',
                transition: 'background 0.2s ease, transform 0.2s ease',
                display: 'inline-block',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'var(--red-bright)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'var(--red)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Reservar turno
            </a>
            <a
              href="#servicios"
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '14px',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#AAAAAA',
                background: 'transparent',
                padding: '16px 36px',
                textDecoration: 'none',
                border: '1px solid #333',
                clipPath: 'polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%)',
                transition: 'color 0.2s ease, border-color 0.2s ease, transform 0.2s ease',
                display: 'inline-block',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = '#F5F5F5';
                e.currentTarget.style.borderColor = '#666';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = '#AAAAAA';
                e.currentTarget.style.borderColor = '#333';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Ver servicios
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Scrolling tags bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        style={{
          position: 'relative',
          bottom: 'auto',
          left: 0,
          right: 0,
          overflow: 'hidden',
          borderTop: '1px solid #1a1a1a',
          borderBottom: '1px solid #1a1a1a',
          padding: '14px 0',
        }}
      >
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          style={{ display: 'flex', gap: '16px', width: 'max-content' }}
        >
          {serviceTags.map((tag, i) => (
            <FloatingTag key={`${tag}-${i}`} label={tag} index={i} />
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{
          position: 'relative',
          bottom: 'auto',
          right: 'clamp(24px, 6vw, 120px)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '10px',
          letterSpacing: '0.2em',
          color: '#444',
          textTransform: 'uppercase',
        }}>scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={14} color="#444" />
        </motion.div>
      </motion.div>

    </section>
  );
}
