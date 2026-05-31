'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import SmokeCanvas from './SmokeCanvas';
import styles from './IntroAnimation.module.css';

interface IntroAnimationProps {
  onComplete?: () => void;
}

export default function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const [smokeActive, setSmokeActive] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const carControls = useAnimation();
  const carImgRef = useRef<HTMLImageElement>(null);
  const timerRef = useRef<NodeJS.Timeout[]>([]);

  const addTimer = (fn: () => void, ms: number) => {
    const t = setTimeout(fn, ms);
    timerRef.current.push(t);
  };

  async function runSequence() {
    addTimer(() => setSmokeActive(true), 700);

    carControls.start({
      x: 0,
      y: '-50%',
      scale: 1,
      rotate: 0,
      transition: {
        duration: 2.0,
        ease: [0.16, 1, 0.3, 1],
      },
    });

    addTimer(() => {
      setSmokeActive(false);
      setShowTitle(true);
    }, 1500);

    addTimer(() => onComplete?.(), 4000);
  }

  useEffect(() => {
    const t = setTimeout(() => runSequence(), 16);
    const timers = timerRef.current;
    return () => { clearTimeout(t); timers.forEach(clearTimeout); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.scene}>
      <SmokeCanvas active={smokeActive} phase="enter" carRef={carImgRef} />

      <motion.div
        className={styles.carWrap}
        animate={carControls}
        initial={{ x: '-120vw', y: '-50%', scale: 1.15 }}
      >
        <AnimatePresence>
          {!showTitle && (
            <motion.div
              className={styles.headlightCone}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.5 } }}
            />
          )}
        </AnimatePresence>

        <motion.img
          ref={carImgRef}
          src="/cars/m2-front.png"
          alt="BMW M2"
          className={styles.carImg}
          style={{ mixBlendMode: 'screen' }}
        />
      </motion.div>

      <AnimatePresence>
        {showTitle && (
          <motion.div
            className={styles.titleWrap}
            initial={{ opacity: 0, x: '-50%', y: 24 }}
            animate={{ opacity: 1, x: '-50%', y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.p
              className={styles.titleSub}
              initial={{ opacity: 0, letterSpacing: '0.7em' }}
              animate={{ opacity: 1, letterSpacing: '0.38em' }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              BIENVENIDOS A
            </motion.p>

            <motion.h1
              className={styles.titleMain}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <span style={{
                background: 'linear-gradient(180deg, #E8E8E8 0%, #C0C0C0 40%, #888 70%, #C0C0C0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>T</span>
              <span style={{
                background: 'linear-gradient(180deg, #FF4444 0%, #CC2222 50%, #991111 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>R</span>{' '}
              <span style={{
                background: 'linear-gradient(180deg, #E8E8E8 0%, #C0C0C0 40%, #888 70%, #C0C0C0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>MOTORS</span>
            </motion.h1>

            <motion.div
              className={styles.titleDivider}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.7, duration: 0.6, ease: 'easeOut' }}
            />

            <motion.p
              className={styles.titleTagline}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.6 }}
            >
              Performance x Detailing
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
