'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  { value: '500+', label: 'Autos tratados' },
  { value: '5', label: 'Años de experiencia' },
  { value: '100%', label: 'Satisfacción' },
  { value: '0', label: 'Compromisos en calidad' },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="nosotros" className="section-pad" style={{ background: 'var(--black)' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 clamp(24px, 6vw, 120px)' }}>

        <div ref={ref}>
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
            }}>06 / Nosotros</span>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '80px',
            alignItems: 'center',
          }}>
            {/* Text side */}
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.1 }}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 900,
                  fontSize: 'clamp(48px, 5vw, 80px)',
                  textTransform: 'uppercase',
                  lineHeight: 0.9,
                  letterSpacing: '-0.02em',
                  marginBottom: '40px',
                }}
              >
                <span className="text-chrome">No es</span><br />
                <span style={{
                  color: 'rgba(192,192,192,0.2)',
                  WebkitTextStroke: '1px rgba(192,192,192,0.2)',
                }}>un lavado.</span><br />
                <span style={{
                  background: 'linear-gradient(180deg, #FF4444 0%, #CC2222 50%, #991111 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>Es una obsesión.</span>
              </motion.h2>

              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.4 }}
                style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
              >
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 300,
                  fontSize: '16px',
                  color: '#777',
                  lineHeight: 1.8,
                }}>
                  TR Motors nació de la pasión por los autos y la búsqueda de la perfección.
                  Cada vehículo que entra al taller es tratado con el mismo cuidado y nivel de
                  detalle, sin importar la marca o el modelo.
                </p>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 300,
                  fontSize: '16px',
                  color: '#777',
                  lineHeight: 1.8,
                }}>
                  Usamos exclusivamente productos profesionales de las mejores marcas del mundo.
                  Nuestro equipo está en constante formación para traerte las técnicas más avanzadas
                  del mercado internacional.
                </p>

                <div style={{
                  display: 'flex',
                  gap: '16px',
                  marginTop: '8px',
                  flexWrap: 'wrap',
                }}>
                  {['Gtechniq', 'Koch Chemie', 'Gyeon', 'Menzerna'].map(brand => (
                    <span
                      key={brand}
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '10px',
                        letterSpacing: '0.2em',
                        color: '#444',
                        border: '1px solid #222',
                        padding: '6px 14px',
                        textTransform: 'uppercase',
                      }}
                    >{brand}</span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Stats side */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '2px',
            }}>
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                  style={{
                    background: 'var(--black-card)',
                    border: '1px solid #1e1e1e',
                    padding: '40px 32px',
                  }}
                >
                  <div style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 900,
                    fontSize: 'clamp(36px, 4vw, 56px)',
                    lineHeight: 1,
                    letterSpacing: '-0.03em',
                    background: i === 3
                      ? 'linear-gradient(180deg, #FF4444 0%, #CC2222 100%)'
                      : 'linear-gradient(180deg, #E8E8E8 0%, #888 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    marginBottom: '12px',
                  }}>{stat.value}</div>
                  <div style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: 400,
                    fontSize: '13px',
                    color: '#555',
                    lineHeight: 1.4,
                  }}>{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
