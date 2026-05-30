'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Process from './components/sections/Process';
import Gallery from './components/sections/Gallery';
import Booking from './components/sections/Booking';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import IntroAnimation from './components/intro';

export default function Home() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <>
      <AnimatePresence>
        {!introDone && (
          <motion.div
            key="intro"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            style={{ position: 'fixed', inset: 0, zIndex: 9999 }}
          >
            <IntroAnimation onComplete={() => setIntroDone(true)} />
            <button
              onClick={() => setIntroDone(true)}
              style={{
                position: 'fixed',
                bottom: 28,
                right: 28,
                zIndex: 10000,
                background: 'transparent',
                border: '1px solid rgba(255,255,255,0.2)',
                color: 'rgba(255,255,255,0.4)',
                padding: '8px 20px',
                fontSize: 11,
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                borderRadius: 3,
                fontFamily: 'Helvetica Neue, sans-serif',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)';
                e.currentTarget.style.color = 'rgba(255,255,255,0.8)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                e.currentTarget.style.color = 'rgba(255,255,255,0.4)';
              }}
            >
              Skip intro
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {introDone && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Navbar />
          <main>
            <Hero />
            <Services />
            <Process />
            <Gallery />
            <Booking />
            <Contact />
          </main>
          <Footer />
        </motion.div>
      )}
    </>
  );
}
