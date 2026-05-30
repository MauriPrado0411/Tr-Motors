'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Phone, Share2, Clock } from 'lucide-react';

const contactItems = [
  {
    icon: MapPin,
    label: 'Dirección',
    value: 'Juan Benito Blanco 1293',
    sub: 'Montevideo, Uruguay',
    href: 'https://maps.app.goo.gl/hw8rJE7YdAz2MiK29',
  },
  {
    icon: Phone,
    label: 'WhatsApp',
    value: '+598 94 900 542',
    sub: 'Respuesta rápida',
    href: 'https://wa.me/5989400542',
  },
  {
    icon: Share2,
    label: 'Instagram',
    value: '@trmotors',
    sub: 'Seguinos para ver trabajos',
    href: 'https://instagram.com/trmotors',
  },
  {
    icon: Clock,
    label: 'Horarios',
    value: 'Lun — Sab',
    sub: '09:00 a 19:00 hs',
    href: null,
  },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contacto" className="section-pad" style={{
      background: '#0C0C0C',
      borderTop: '1px solid #1a1a1a',
    }}>
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
            }}>06 / Contacto</span>
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
              marginBottom: '64px',
            }}
          >
            <span style={{ color: 'rgba(192,192,192,0.2)', WebkitTextStroke: '1px rgba(192,192,192,0.2)' }}>
              Encontranos
            </span><br />
            <span className="text-chrome">acá.</span>
          </motion.h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '60px',
          }}>
            {/* Contact items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              {contactItems.map((item, i) => {
                const Icon = item.icon;
                const Wrapper = item.href ? 'a' : 'div';
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                  >
                    <Wrapper
                      {...(item.href ? { href: item.href, target: '_blank', rel: 'noopener noreferrer', 'aria-label': item.label } : {})}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '24px',
                        padding: '24px 28px',
                        background: 'var(--black-card)',
                        border: '1px solid #1e1e1e',
                        textDecoration: 'none',
                        color: 'inherit',
                        cursor: item.href ? 'pointer' : 'default',
                        transition: 'border-color 0.2s ease',
                      }}
                      onMouseEnter={item.href ? (e: React.MouseEvent<HTMLElement>) => {
                        (e.currentTarget as HTMLElement).style.borderColor = '#333';
                      } : undefined}
                      onMouseLeave={item.href ? (e: React.MouseEvent<HTMLElement>) => {
                        (e.currentTarget as HTMLElement).style.borderColor = '#1e1e1e';
                      } : undefined}
                    >
                      <div style={{
                        width: '40px',
                        height: '40px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid #CC222233',
                        flexShrink: 0,
                      }}>
                        <Icon size={16} color="var(--red)" />
                      </div>
                      <div>
                        <div style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '10px',
                          color: '#444',
                          letterSpacing: '0.2em',
                          textTransform: 'uppercase',
                          marginBottom: '4px',
                        }}>{item.label}</div>
                        <div style={{
                          fontFamily: 'var(--font-display)',
                          fontWeight: 700,
                          fontSize: '18px',
                          textTransform: 'uppercase',
                          letterSpacing: '0.03em',
                          color: '#F5F5F5',
                          marginBottom: '2px',
                        }}>{item.value}</div>
                        <div style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '12px',
                          color: '#555',
                        }}>{item.sub}</div>
                      </div>
                    </Wrapper>
                  </motion.div>
                );
              })}
            </div>

            {/* Map placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{
                background: 'var(--black-card)',
                border: '1px solid #1e1e1e',
                minHeight: '360px',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Embed Google Maps iframe here - replace with actual coordinates */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.886988311417!2d-56.14591832336818!3d-34.909285473701594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f811346c53c1f%3A0xe5327a233b5e4f8e!2sJuan%20Benito%20Blanco%201293%2C%2011300%20Montevideo%2C%20Departamento%20de%20Montevideo!5e0!3m2!1ses!2suy!4v1778444866848!5m2!1ses!2suy"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(100%) invert(90%) contrast(90%)', minHeight: '360px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Map overlay with address */}
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(transparent, rgba(8,8,8,0.95))',
                padding: '40px 24px 24px',
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}>
                  <MapPin size={14} color="var(--red)" />
                  <span style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 600,
                    fontSize: '14px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: '#F5F5F5',
                  }}>Juan Benito Blanco 1293, Montevideo, Uruguay</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
