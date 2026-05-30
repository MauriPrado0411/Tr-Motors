'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const galleryItems = [
  { id: 1, label: 'Coating Cerámico — Ferrari 488', category: 'coating', image: '/images/gallery-1.jpg' },
  { id: 2, label: 'Pulido Profesional — BMW M3', category: 'pulido', image: '/images/gallery-2.jpg' },
  { id: 3, label: 'Full Detailing — Porsche 911', category: 'full', image: '/images/gallery-3.jpg' },
  { id: 4, label: 'Detailing Interior — Mercedes AMG', category: 'interior', image: '/images/gallery-4.jpg' },
  { id: 5, label: 'PPF — Lamborghini Huracán', category: 'ppf', image: '/images/gallery-5.jpg' },
  { id: 6, label: 'Lavado Premium — Audi RS6', category: 'lavado', image: null },
];

const categories = ['Todos', 'Coating', 'Pulido', 'Interior', 'PPF', 'Full'];

const fallbackGradients = [
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
  const swiperRef = useRef<SwiperType | null>(null);

  const filtered =
    active === 'Todos'
      ? galleryItems
      : galleryItems.filter((i) => i.category === active.toLowerCase());

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(0);
    }
  }, [active]);

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

          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: '32px',
          }}>
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
              <span style={{
                color: 'rgba(192,192,192,0.2)',
                WebkitTextStroke: '1px rgba(192,192,192,0.2)',
              }}>El trabajo</span>
              <br />
              <span className="text-chrome">habla solo.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              style={{ display: 'flex', gap: '2px', flexWrap: 'wrap' }}
            >
              {categories.map((cat) => (
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

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="gallery-swiper"
        >
          <Swiper
            onSwiper={(s) => { swiperRef.current = s; }}
            modules={[Autoplay, Navigation, Pagination]}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 4000,
              pauseOnMouseEnter: true,
              disableOnInteraction: false,
            }}
            loop={filtered.length > 1}
            speed={700}
            grabCursor
            style={{ width: '100%' }}
          >
            {filtered.map((item, i) => {
              return (
                <SwiperSlide key={item.id}>
                  <div style={{
                    position: 'relative',
                    width: '100%',
                    height: '520px',
                    overflow: 'hidden',
                  }}>
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.label}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          display: 'block',
                        }}
                      />
                    ) : (
                      <div style={{
                        width: '100%',
                        height: '100%',
                        background: fallbackGradients[i % fallbackGradients.length],
                      }} />
                    )}

                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(0deg, rgba(0,0,0,0.7) 0%, transparent 40%, transparent 100%)',
                    }} />

                    <div style={{
                      position: 'absolute',
                      bottom: '40px',
                      left: '40px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '12px',
                    }}>
                      <div style={{
                        width: '32px',
                        height: '3px',
                        background: 'var(--red)',
                      }} />
                      <span style={{
                        fontFamily: 'var(--font-display)',
                        fontWeight: 700,
                        fontSize: 'clamp(20px, 2.5vw, 32px)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        color: '#F5F5F5',
                        lineHeight: 1.2,
                        textShadow: '0 2px 12px rgba(0,0,0,0.5)',
                      }}>
                        {item.label}
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </motion.div>

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
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#F5F5F5';
              e.currentTarget.style.borderColor = '#444';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#888';
              e.currentTarget.style.borderColor = '#222';
            }}
          >
            @trmotors
          </a>
        </motion.div>
      </div>

      <style>{`
        .gallery-swiper .swiper-button-prev,
        .gallery-swiper .swiper-button-next {
          color: #F5F5F5;
          background: rgba(0,0,0,0.4);
          width: 48px;
          height: 48px;
          border-radius: 0;
          transition: background 0.2s ease;
        }
        .gallery-swiper .swiper-button-prev:hover,
        .gallery-swiper .swiper-button-next:hover {
          background: rgba(0,0,0,0.7);
        }
        .gallery-swiper .swiper-button-prev::after,
        .gallery-swiper .swiper-button-next::after {
          font-size: 18px;
          font-weight: 700;
        }
        .gallery-swiper .swiper-pagination {
          position: relative;
          margin-top: 24px;
        }
        .gallery-swiper .swiper-pagination-bullet {
          background: #333;
          opacity: 1;
          width: 10px;
          height: 10px;
          margin: 0 6px !important;
          border-radius: 0;
          transition: background 0.2s ease;
        }
        .gallery-swiper .swiper-pagination-bullet-active {
          background: var(--red);
        }
      `}</style>
    </section>
  );
}
