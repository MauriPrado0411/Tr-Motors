'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Droplets, Zap, Shield, Wind, Sparkles, Car } from 'lucide-react';

const services = [
  {
    id: '01',
    icon: Droplets,
    name: 'Lavado Premium',
    tagline: 'Más que un lavado.',
    description: 'Proceso completo de descontaminación exterior con productos de alta gama. Sin contacto dañino, sin marcas.',
    features: ['Foam cannon', 'Lavado sin contacto', 'Secado con soplador', 'Protección de vidrios'],
    price: 'Desde $900',
    duration: '2-3 hs',
    color: 'var(--chrome)',
  },
  {
    id: '02',
    icon: Sparkles,
    name: 'Pulido Profesional',
    tagline: 'Borramos el tiempo.',
    description: 'Corrección de pintura con maquinas orbitales. Eliminamos rayones, espirales y oxidación.',
    features: ['Corrección 1 paso', 'Corrección 2 pasos', 'Acabado espejo', 'Sin hologramas'],
    price: 'Desde $3.500',
    duration: '1-2 días',
    color: 'var(--chrome)',
    featured: true,
  },
  {
    id: '03',
    icon: Shield,
    name: 'Coating Cerámico',
    tagline: 'Protección de por vida.',
    description: 'Aplicación de recubrimiento cerámico profesional. Hidrofóbico, anti-rayado y brillo permanente.',
    features: ['9H hardness', 'Garantía 2-5 años', 'Efecto hidrofóbico', 'Brillo profundo'],
    price: 'Desde $8.000',
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
    price: 'Desde $2.000',
    duration: '4-6 hs',
    color: 'var(--chrome)',
  },
  {
    id: '05',
    icon: Zap,
    name: 'Paint Protection Film',
    tagline: 'Invisible. Invencible.',
    description: 'Película de protección de pintura (PPF) autosanante. El máximo nivel de protección física.',
    features: ['Autosanante', 'Anti-impactos', 'Transparente', 'Garantía 10 años'],
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
    features: ['Pulido + Coating', 'Interior completo', 'Vidrios tratados', 'Llantas y gomas'],
    price: 'Consultar',
    duration: '3-5 días',
    color: 'var(--red)',
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      style={{
        background: service.highlight ? '#160808' : 'var(--black-card)',
        border: `1px solid ${service.highlight ? '#CC222244' : '#1e1e1e'}`,
        padding: '40px',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'default',
        transition: 'transform 0.3s ease, border-color 0.3s ease',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
        (e.currentTarget as HTMLDivElement).style.borderColor = service.highlight ? '#CC2222' : '#333';
      }}
      onMouseLeave={e => {
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

      {/* Number */}
      <div style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '11px',
        color: '#333',
        letterSpacing: '0.2em',
        marginBottom: '24px',
      }}>{service.id}</div>

      {/* Icon */}
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

      {/* Name & tagline */}
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

      {/* Features */}
      <ul style={{ listStyle: 'none', padding: 0, marginBottom: '32px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {service.features.map(f => (
          <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ width: '4px', height: '4px', background: service.color, borderRadius: '50%', flexShrink: 0 }} />
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: '#888' }}>{f}</span>
          </li>
        ))}
      </ul>

      {/* Price + duration */}
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

export default function Services() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true });

  return (
    <section id="servicios" className="section-pad" style={{ background: 'var(--black)' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 clamp(24px, 6vw, 120px)' }}>

        {/* Section header */}
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

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '24px' }}>
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
              <span style={{ color: 'rgba(192,192,192,0.2)', WebkitTextStroke: '1px rgba(192,192,192,0.2)' }}>hacemos</span>
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

        {/* Cards grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '2px',
        }}>
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
