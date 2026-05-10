'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

// Placeholder gallery items - client will replace with real photos
const galleryItems = [
  { id: 1, label: 'Coating Cerámico — Ferrari 488', category: 'coating', size: 'large' },
  { id: 2, label: 'Pulido Profesional — BMW M3', category: 'pulido', size: 'small' },
  { id: 3, label: 'Full Detailing — Porsche 911', category: 'full', size: 'small' },
  { id: 4, label: 'Detailing Interior — Mercedes AMG', category: 'interior', size: 'medium' },
  { id: 5, label: 'PPF — Lamborghini Huracán', category: 'ppf', size: 'medium' },
  { id: 6, label: 'Lavado Premium — Audi RS6', category: 'lavado', size: 'small' },
];

const categories = ['Todos', 'Coating', 'Pulido', 'Interior', 'PPF', 'Full'];

// Placeholder colored blocks simulating photos
const colors = [
  'linear-gradient(135deg, #1a0808 0%, #2d0a0a 50%, #1a0808 100%)',
  'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0d0d0d 100%)',
  'linear-gradient(135deg, #080d08 0%, #111811 50%, #080d08 100%)',
  'linear-gradient(135deg, #08080d 0%, #11111a 50%, #08080d 100%)',
  'linear-gradient(135deg, #0d0808 0%, #1a1011 50%, #0d0808 100%)',
  'linear-gradient(135deg, #0a080d 0%, #141018 50%, #0a080d 100%)',
];

export default function Gallery() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [active, setActive] = useState('Todos');

  return (
    <section id="galeria" className="section-pad" style={{ background: 'var(--black)' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 clamp(24px, 6vw, 120px)' }}>

        <div ref={ref} style={{ marginBottom: '60px' }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}
          >
            <div className="red-line" />
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              letterSpacing: '0.3em',
              color: 'var(--red)',
              textTransform: 'uppercase',
            }}>04 / Galería</span>
          </motion.div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '32px' }}>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 900,
                fontSize: 'clamp(48px, 6vw, 96px)',
                textTransform: 'uppercase',
                lineHeight: 0.9,
                letterSpacing: '-0.02em',
              }}
            >
              <span style={{ color: 'rgba(192,192,192,0.2)', WebkitTextStroke: '1px rgba(192,192,192,0.2)' }}>El trabajo</span><br />
              <span className="text-chrome">habla solo.</span>
            </motion.h2>

            {/* Filter tabs */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              style={{ display: 'flex', gap: '2px', flexWrap: 'wrap' }}
            >
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 600,
                    fontSize: '12px',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: active === cat ? '#F5F5F5' : '#555',
                    background: active === cat ? 'var(--red)' : 'transparent',
                    border: '1px solid',
                    borderColor: active === cat ? 'var(--red)' : '#222',
                    padding: '8px 16px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {cat}
                </button>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Gallery grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gridTemplateRows: 'auto',
          gap: '3px',
        }}>
          {galleryItems.map((item, i) => {
            const colSpans = [8, 4, 4, 6, 6, 4];
            const heights = ['380px', '380px', '380px', '320px', '320px', '320px'];
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
                style={{
                  gridColumn: `span ${colSpans[i]}`,
                  height: heights[i],
                  background: colors[i],
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer',
                }}
                onMouseEnter={e => {
                  const overlay = e.currentTarget.querySelector('.overlay') as HTMLElement;
                  if (overlay) overlay.style.opacity = '1';
                }}
                onMouseLeave={e => {
                  const overlay = e.currentTarget.querySelector('.overlay') as HTMLElement;
                  if (overlay) overlay.style.opacity = '0';
                }}
              >
                {/* Placeholder pattern */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.01) 0px, rgba(255,255,255,0.01) 1px, transparent 1px, transparent 20px)',
                }} />

                {/* Center placeholder text */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  gap: '8px',
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    border: '1px solid #333',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <div style={{ width: '16px', height: '16px', background: '#222' }} />
                  </div>
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '9px',
                    color: '#333',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                  }}>foto del trabajo</span>
                </div>

                {/* Hover overlay */}
                <div
                  className="overlay"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(8,8,8,0.85)',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '28px',
                  }}
                >
                  <div style={{
                    width: '24px',
                    height: '2px',
                    background: 'var(--red)',
                    marginBottom: '12px',
                  }} />
                  <span style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: '16px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    color: '#F5F5F5',
                    lineHeight: 1.3,
                  }}>{item.label}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          style={{ textAlign: 'center', marginTop: '60px' }}
        >
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '13px',
            color: '#444',
            letterSpacing: '0.1em',
            marginBottom: '24px',
            textTransform: 'uppercase',
          }}>
            Más trabajos en Instagram
          </p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: '13px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#888',
              textDecoration: 'none',
              border: '1px solid #222',
              padding: '12px 32px',
              display: 'inline-block',
              clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)',
              transition: 'color 0.2s, border-color 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.color = '#F5F5F5';
              e.currentTarget.style.borderColor = '#444';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = '#888';
              e.currentTarget.style.borderColor = '#222';
            }}
          >
            @trmotors
          </a>
        </motion.div>
      </div>
    </section>
  );
}
