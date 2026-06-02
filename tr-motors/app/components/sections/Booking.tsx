'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { InlineWidget } from 'react-calendly';

export default function Booking() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="reservas" className="section-pad" style={{
      background: '#0C0C0C',
      borderTop: '1px solid #1a1a1a',
    }}>
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
            }}>05 / Reservas</span>
          </motion.div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '24px' }}>
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
              <span className="text-chrome">Reservá</span><br />
              <span style={{ color: 'rgba(192,192,192,0.2)', WebkitTextStroke: '1px rgba(192,192,192,0.2)' }}>
                tu turno.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 300,
                fontSize: '15px',
                color: '#666',
                maxWidth: '320px',
                lineHeight: 1.7,
              }}
            >
              Elegí día y horario que más te convenga.
              Confirmación automática por mail.
            </motion.p>
          </div>
        </div>

        {/* Calendly embed */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            border: '1px solid #1e1e1e',
            overflow: 'hidden',
            background: 'var(--black-card)',
          }}
        >
          {/* Replace URL with actual Calendly link */}
          <InlineWidget
            url="https://calendly.com/joeltripodi-trabajo/30min"
            styles={{ height: '700px', minWidth: '320px' }}
            pageSettings={{
              backgroundColor: '080808',
              hideEventTypeDetails: false,
              hideLandingPageDetails: false,
              primaryColor: 'CC2222',
              textColor: 'F5F5F5',
            }}
          />
        </motion.div>

        {/* Info cards below */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2px',
          marginTop: '3px',
        }}>
          {[
            { label: 'Confirmación', value: 'Automática', sub: 'por mail y WhatsApp' },
            { label: 'Cancelación', value: 'Sin cargo', sub: 'hasta 24hs antes' },
            { label: 'Horarios', value: 'Lun — Sab', sub: '09:00 a 19:00' },
            { label: 'Consultas', value: 'WhatsApp', sub: '091 946 795' },
          ].map(item => (
            <div
              key={item.label}
              style={{
                background: 'var(--black-card)',
                border: '1px solid #1e1e1e',
                padding: '28px 32px',
              }}
            >
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                color: '#444',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                marginBottom: '8px',
              }}>{item.label}</div>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '22px',
                textTransform: 'uppercase',
                letterSpacing: '0.02em',
                color: '#F5F5F5',
                marginBottom: '4px',
              }}>{item.value}</div>
              <div style={{
                fontFamily: 'var(--font-body)',
                fontSize: '13px',
                color: '#555',
              }}>{item.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
