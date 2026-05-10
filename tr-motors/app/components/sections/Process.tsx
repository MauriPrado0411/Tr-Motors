'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  {
    number: '01',
    title: 'Elegís tu servicio',
    description: 'Revisá nuestro catálogo de servicios y elegí el que mejor se adapta a tu auto y lo que necesitás.',
    detail: 'Sin compromiso',
  },
  {
    number: '02',
    title: 'Reservás online',
    description: 'Usá nuestro sistema de turnos para elegir el día y horario que más te convenga. Confirmación inmediata.',
    detail: '100% online',
  },
  {
    number: '03',
    title: 'Traés el auto',
    description: 'Llegás al taller en el horario acordado. Evaluamos el estado del vehículo y comenzamos el trabajo.',
    detail: 'Puntual y preciso',
  },
  {
    number: '04',
    title: 'Retirás impecable',
    description: 'Te avisamos cuando el trabajo está listo. El resultado habla solo. Te mandamos fotos del proceso.',
    detail: 'Garantía de calidad',
  },
];

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="proceso" className="section-pad" style={{
      background: '#0C0C0C',
      borderTop: '1px solid #1a1a1a',
      borderBottom: '1px solid #1a1a1a',
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 clamp(24px, 6vw, 120px)' }}>

        <div ref={ref} style={{ marginBottom: '80px' }}>
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
            }}>03 / Proceso</span>
          </motion.div>

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
            <span className="text-chrome">Simple</span>{' '}
            <span style={{ color: 'rgba(192,192,192,0.15)', WebkitTextStroke: '1px rgba(192,192,192,0.15)' }}>
              de principio<br />a fin.
            </span>
          </motion.h2>
        </div>

        {/* Steps */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '0',
          position: 'relative',
        }}>
          {/* Connecting line */}
          <div style={{
            position: 'absolute',
            top: '32px',
            left: '8%',
            right: '8%',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, #333 20%, #333 80%, transparent)',
          }} className="hidden md:block" />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              style={{
                padding: '40px 32px',
                borderRight: i < steps.length - 1 ? '1px solid #1a1a1a' : 'none',
                position: 'relative',
              }}
            >
              {/* Big number */}
              <div style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 900,
                fontSize: '72px',
                lineHeight: 1,
                color: '#161616',
                position: 'absolute',
                top: '16px',
                right: '24px',
                letterSpacing: '-0.05em',
                userSelect: 'none',
              }}>{step.number}</div>

              {/* Step dot */}
              <div style={{
                width: '12px',
                height: '12px',
                background: i === 0 ? 'var(--red)' : '#333',
                borderRadius: '50%',
                marginBottom: '32px',
                border: i === 0 ? 'none' : '1px solid #444',
                position: 'relative',
                zIndex: 1,
              }} />

              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                color: 'var(--red)',
                letterSpacing: '0.2em',
                marginBottom: '16px',
                textTransform: 'uppercase',
              }}>{step.detail}</div>

              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '24px',
                textTransform: 'uppercase',
                letterSpacing: '0.02em',
                color: '#F5F5F5',
                marginBottom: '16px',
              }}>{step.title}</h3>

              <p style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 300,
                fontSize: '14px',
                color: '#666',
                lineHeight: 1.7,
              }}>{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
