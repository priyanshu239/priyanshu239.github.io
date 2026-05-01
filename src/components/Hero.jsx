import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import '../styles/Hero.css';

const TYPED_WORDS = ['REST APIs', 'AI Systems', 'Real-Time Apps', 'Scalable Backends'];

function TypedText() {
  const spanRef = useRef(null);
  useEffect(() => {
    let wi = 0, ci = 0, deleting = false;
    const tick = () => {
      const word = TYPED_WORDS[wi % TYPED_WORDS.length];
      if (!deleting) {
        ci++;
        if (ci > word.length) { deleting = true; setTimeout(tick, 1400); return; }
      } else {
        ci--;
        if (ci < 0) { deleting = false; wi++; ci = 0; }
      }
      if (spanRef.current) spanRef.current.textContent = word.slice(0, ci);
      setTimeout(tick, deleting ? 50 : 90);
    };
    const t = setTimeout(tick, 600);
    return () => clearTimeout(t);
  }, []);
  return <span ref={spanRef} className="typed-word" />;
}

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      {/* Radial background glow */}
      <div className="hero-glow hero-glow-1" />
      <div className="hero-glow hero-glow-2" />

      {/* Grid decoration */}
      <div className="hero-grid" aria-hidden="true" />

      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="section-label">Available for opportunities</span>
        </motion.div>

        <motion.h1
          className="hero-name"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
        >
          Priyanshu<br />
          <span className="gradient-text">Kumar</span>
        </motion.h1>

        <motion.p
          className="hero-headline"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Full-Stack &amp; Backend Developer — crafting{' '}
          <TypedText />
          <span className="typed-cursor">|</span>
        </motion.p>

        <motion.p
          className="hero-subtext"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Building scalable REST APIs, AI-powered applications, and real-time systems.
          Eager to push the boundaries of next-generation breakthroughs.
        </motion.p>

        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
        >
          <a href="#projects" className="btn-primary" id="hero-explore-btn">
            Explore My Work
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="https://drive.google.com/file/d/1DysWIx2L4wOeQKQHaeCprRQtfvlUNXpv/view?usp=drive_link"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
            id="hero-resume-btn"
          >
            View Resume ↗
          </a>
        </motion.div>

        {/* Floating badges */}
        <motion.div
          className="hero-badges"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          {['Node.js', 'React', 'LangChain', 'PostgreSQL', 'WebRTC'].map((b, i) => (
            <span key={b} className="hero-badge" style={{ animationDelay: `${i * 0.12}s` }}>
              {b}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Decorative asymmetric element */}
      <motion.div
        className="hero-deco-blob"
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
      />
    </section>
  );
}
