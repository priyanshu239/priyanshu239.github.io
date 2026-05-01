import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import '../styles/ExperienceTimeline.css';

const EXPERIENCES = [
  {
    id: 'slotin',
    role: 'Software Development Intern',
    company: 'Slotin Solutions',
    period: 'Dec 2025 – Feb 2026',
    type: 'Industry',
    accent: 'emerald',
    highlights: [
      'Developed a dynamic Meals Management Module using JavaScript & Firebase Realtime Database',
      'Built a 6-day menu planning system with dynamic pricing engine',
      'Handled complex CRUD operations for 100+ items across multiple residential societies',
    ],
    tags: ['JavaScript', 'Firebase', 'CRUD', 'Real-time DB'],
  },
  {
    id: 'zenith',
    role: 'PR & Media Lead',
    company: 'Zenith Sports Club, IIIT Una',
    period: 'Sep 2023 – Present',
    type: 'Leadership',
    accent: 'violet',
    highlights: [
      'Coordinated media coverage for 10+ college sports events',
      'Deployed a participant feedback system integrated with college portal',
      'Improved satisfaction scores by 15% through data-driven iterations',
    ],
    tags: ['Media', 'PR', 'Events', 'Analytics'],
  },
];

const lineVariants = {
  hidden: { scaleY: 0 },
  show:   { scaleY: 1, transition: { duration: 1.2, ease: 'easeInOut' } },
};

const cardVariants = {
  hidden: { opacity: 0, x: -30 },
  show:   (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay: i * 0.2, ease: 'easeOut' },
  }),
};

export default function ExperienceTimeline() {
  const [ref, inView] = useInView({ threshold: 0.15 });

  return (
    <section id="experience" className="experience-section" ref={ref}>
      <div className="exp-header">
        <span className="section-label">Where I've Worked</span>
        <h2 className="exp-title">
          <span className="gradient-text">Experience</span>
        </h2>
      </div>

      <div className="timeline">
        {/* Animated vertical line */}
        <motion.div
          className="timeline-line"
          variants={lineVariants}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          style={{ originY: 0 }}
        />

        {EXPERIENCES.map((exp, i) => (
          <motion.div
            key={exp.id}
            className={`timeline-entry entry-${exp.accent}`}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
          >
            {/* Dot on the line */}
            <div className={`timeline-dot dot-${exp.accent}`} />

            <div className="timeline-card glow-border">
              {/* Header */}
              <div className="tc-header">
                <div>
                  <span className={`tc-type type-${exp.accent}`}>{exp.type}</span>
                  <h3 className="tc-role">{exp.role}</h3>
                  <p className="tc-company">{exp.company}</p>
                </div>
                <span className="tc-period">{exp.period}</span>
              </div>

              {/* Highlights */}
              <ul className="tc-highlights">
                {exp.highlights.map((h, idx) => (
                  <li key={idx}>
                    <span className={`bullet bullet-${exp.accent}`} />
                    {h}
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="tc-tags">
                {exp.tags.map(t => (
                  <span key={t} className={`tc-tag tag-${exp.accent}`}>{t}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
