'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect, useCallback } from 'react';
import { Droplets, Shield, Wind, Sparkles, Car, ShieldCheck, X } from 'lucide-react';

const services = [
  {
    id: '01',
    icon: Droplets,
    name: 'Lavado Premium',
    tagline: 'Más que un lavado.',
    description: 'Proceso completo de descontaminación exterior con productos de alta gama. Sin contacto dañino, sin marcas.',
    features: ['Foam cannon', 'Lavado sin contacto', 'Secado con soplador', 'Protección de vidrios'],
    price: 'Consultar',
    duration: '2-3 hs',
    color: 'var(--chrome)',
  },
  {
    id: '02',
    icon: Sparkles,
    name: 'Pulido Profesional',
    tagline: 'Borramos el tiempo.',
    description: 'Corrección de pintura con máquinas orbitales. Eliminamos rayones, espirales y oxidación.',
    features: ['Corrección 1 paso', 'Corrección 2 pasos', 'Acabado espejo', 'Sin hologramas', 'Saca bollo disponible'],
    price: 'Consultar',
    duration: '1-2 días',
    color: 'var(--chrome)',
    featured: true,
  },
  {
    id: '03',
    icon: Shield,
    name: 'Coating Cerámico',
    tagline: 'Protección de por vida.',
    description: 'Corrección de pintura (eliminación de rayas y defectos del barniz) en tres pasos, buscando profundidad en el color y abrillantado del mismo, luego sellado con cerámico (Gyeon, Gtechniq, Dimension 10H). Protección nanocerámico de largo plazo sobre la carrocería. Resistencias a rayos UV, repelencia extrema al agua y brillo de alto estándar.',
    features: ['Corrección 3 pasos', 'Sellado cerámico premium', 'Resistencia UV', 'Repelencia extrema al agua', 'Brillo alto estándar', 'Garantía 2-5 años'],
    price: 'Consultar',
    duration: '2-3 días',
    color: 'var(--red)',
    highlight: true,
  },
  {
    id: '04',
    icon: Wind,
    name: 'Detailing Interior',
    tagline: 'Adentro también importa.',
    description: 'Limpieza profunda de habitáculo completo: tapizados, plásticos, alfombras y cuero.',
    features: ['Extracción de suciedad', 'Ozono anti-olor', 'Protección cuero', 'Sanitización'],
    price: 'Consultar',
    duration: '4-6 hs',
    color: 'var(--chrome)',
  },
  {
    id: '05',
    icon: ShieldCheck,
    name: 'Lámina de Seguridad',
    tagline: 'Protección invisible.',
    description: 'Aplicación de lámina de protección para pintura (PPF) de alta calidad. Protege contra impactos, rayaduras y agentes externos manteniendo el acabado original.',
    features: ['Autosanante', 'Anti-impactos', 'Protección UV', 'Transparente', 'Garantía 5 años'],
    price: 'Consultar',
    duration: 'A definir',
    color: 'var(--chrome)',
  },
  {
    id: '06',
    icon: Car,
    name: 'Full Detailing',
    tagline: 'El tratamiento completo.',
    description: 'Paquete integral que combina todos nuestros servicios. El auto sale como nuevo del taller.',
    features: ['Pulido + Coating', 'Interior completo', 'Vidrios tratados', 'Llantas y gomas', 'Saca bollo disponible'],
    price: 'Consultar',
    duration: '3-5 días',
    color: 'var(--red)',
  },
];

function ServiceModal({
  service,
  onClose,
}: {
  service: typeof services[0];
  onClose: () => void;
}) {
  const Icon = service.icon;

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose],
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [handleKeyDown]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: 'rgba(0,0,0,0.92)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.97 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'var(--black-card)',
          border: '1px solid var(--black-border)',
          width: '100%',
          maxWidth: '800px',
          maxHeight: '90vh',
          overflow: 'auto',
          position: 'relative',
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: 'sticky',
            top: '16px',
            float: 'right',
            marginRight: '16px',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(0,0,0,0.6)',
            border: '1px solid #333',
            cursor: 'pointer',
            color: '#F5F5F5',
            zIndex: 10,
            transition: 'border-color 0.2s',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#666'; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#333'; }}
        >
          <X size={18} />
        </button>

        <div style={{ padding: '48px 40px 40px' }}>
          <div style={{
            width: '44px',
            height: '44px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: `1px solid ${service.color}33`,
            marginBottom: '20px',
          }}>
            <Icon size={20} color={service.color} />
          </div>

          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: 'clamp(32px, 4vw, 44px)',
            textTransform: 'uppercase',
            color: '#F5F5F5',
            lineHeight: 1,
            marginBottom: '6px',
          }}>{service.name}</h2>

          <p style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 400,
            fontStyle: 'italic',
            fontSize: '16px',
            color: service.highlight ? 'var(--red)' : '#555',
            marginBottom: '32px',
            letterSpacing: '0.05em',
          }}>{service.tagline}</p>

          <div style={{ marginBottom: '28px' }}>
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: '20px',
              textTransform: 'uppercase',
              color: 'var(--red)',
              letterSpacing: '0.05em',
              marginBottom: '12px',
            }}>¿En qué consiste?</h3>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 300,
              fontSize: '15px',
              color: '#999',
              lineHeight: 1.8,
            }}>{service.description}</p>
          </div>

          <div style={{ marginBottom: '36px' }}>
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: '20px',
              textTransform: 'uppercase',
              color: 'var(--red)',
              letterSpacing: '0.05em',
              marginBottom: '16px',
            }}>¿Qué incluye?</h3>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
              gap: '10px',
            }}>
              {service.features.map((f) => (
                <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{
                    width: '5px',
                    height: '5px',
                    background: service.color,
                    flexShrink: 0,
                  }} />
                  <span style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '14px',
                    color: '#AAA',
                  }}>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            borderTop: '1px solid #1e1e1e',
            paddingTop: '24px',
          }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px' }}>
              <span style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '24px',
                color: service.highlight ? 'var(--red)' : '#C0C0C0',
              }}>{service.price}</span>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                color: '#444',
                letterSpacing: '0.15em',
              }}>{service.duration}</span>
            </div>
            <a
              href="#booking"
              onClick={(e) => { e.preventDefault(); onClose(); setTimeout(() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' }), 300); }}
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '13px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#F5F5F5',
                textDecoration: 'none',
                background: 'var(--red)',
                padding: '14px 36px',
                display: 'inline-block',
                clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)',
                transition: 'background 0.2s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--red-bright)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--red)'; }}
            >
              Reservar
            </a>
          </div>
        </div>
      </motion.div>

      <style>{`
      `}</style>
    </motion.div>
  );
}

function ServiceCard({
  service,
  index,
  onSelect,
}: {
  service: typeof services[0];
  index: number;
  onSelect: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onClick={onSelect}
      style={{
        background: service.highlight ? '#160808' : 'var(--black-card)',
        border: `1px solid ${service.highlight ? '#CC222244' : '#1e1e1e'}`,
        padding: '40px',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'transform 0.3s ease, border-color 0.3s ease',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
        (e.currentTarget as HTMLDivElement).style.borderColor = service.highlight ? '#CC2222' : '#333';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
        (e.currentTarget as HTMLDivElement).style.borderColor = service.highlight ? '#CC222244' : '#1e1e1e';
      }}
    >
      {service.highlight && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: 'linear-gradient(90deg, transparent, var(--red), transparent)',
        }} />
      )}

      <div style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '11px',
        color: '#333',
        letterSpacing: '0.2em',
        marginBottom: '24px',
      }}>{service.id}</div>

      <div style={{
        width: '44px',
        height: '44px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: `1px solid ${service.color}33`,
        marginBottom: '24px',
      }}>
        <Icon size={20} color={service.color} />
      </div>

      <h3 style={{
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: '28px',
        letterSpacing: '-0.01em',
        textTransform: 'uppercase',
        color: '#F5F5F5',
        lineHeight: 1,
        marginBottom: '6px',
      }}>{service.name}</h3>

      <p style={{
        fontFamily: 'var(--font-display)',
        fontWeight: 400,
        fontStyle: 'italic',
        fontSize: '14px',
        color: service.highlight ? 'var(--red)' : '#555',
        marginBottom: '16px',
        letterSpacing: '0.05em',
      }}>{service.tagline}</p>

      <p style={{
        fontFamily: 'var(--font-body)',
        fontWeight: 300,
        fontSize: '14px',
        color: '#777',
        lineHeight: 1.7,
        marginBottom: '28px',
      }}>{service.description}</p>

      <ul style={{
        listStyle: 'none',
        padding: 0,
        marginBottom: '32px',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
      }}>
        {service.features.map((f) => (
          <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{
              width: '4px',
              height: '4px',
              background: service.color,
              borderRadius: '50%',
              flexShrink: 0,
            }} />
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: '#888' }}>{f}</span>
          </li>
        ))}
      </ul>

      <div style={{
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'space-between',
        borderTop: '1px solid #1e1e1e',
        paddingTop: '20px',
      }}>
        <span style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: '20px',
          color: service.highlight ? 'var(--red)' : '#C0C0C0',
        }}>{service.price}</span>
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          color: '#444',
          letterSpacing: '0.15em',
        }}>{service.duration}</span>
      </div>
    </motion.div>
  );
}

export default function ServicesClient() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true });
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <section id="servicios" className="section-pad" style={{ background: 'var(--black)' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 clamp(24px, 6vw, 120px)' }}>
        <div ref={titleRef} style={{ marginBottom: '80px' }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={titleInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}
          >
            <div className="red-line" />
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              letterSpacing: '0.3em',
              color: 'var(--red)',
              textTransform: 'uppercase',
            }}>02 / Servicios</span>
          </motion.div>

          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: '24px',
          }}>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
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
              <span className="text-chrome">Lo que</span><br />
              <span style={{
                color: 'rgba(192,192,192,0.2)',
                WebkitTextStroke: '1px rgba(192,192,192,0.2)',
              }}>hacemos</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={titleInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 300,
                fontSize: '15px',
                color: '#666',
                maxWidth: '320px',
                lineHeight: 1.7,
              }}
            >
              Cada servicio está pensado para dar el mejor resultado posible. Sin atajos, sin compromisos.
            </motion.p>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '2px',
        }}>
          {services.map((service, i) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={i}
              onSelect={() => setSelectedService(service)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedService && (
          <ServiceModal
            service={selectedService}
            onClose={() => setSelectedService(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
