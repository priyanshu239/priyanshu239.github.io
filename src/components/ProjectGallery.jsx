import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import '../styles/ProjectGallery.css';

const PROJECTS = [
  {
    id: 'ai-health',
    title: 'AI Health Assistant',
    category: 'AI / Full-Stack',
    accent: 'emerald',
    summary: 'Full-stack medical report analysis platform with a 6-node LangGraph pipeline.',
    description:
      'An end-to-end medical AI platform leveraging Groq Llama 4 Scout Vision for AI-powered diagnosis. Built a 6-node LangGraph pipeline with streaming FastAPI backend and a React frontend featuring a live health progress dashboard.',
    tags: ['LangGraph', 'Groq Llama 4', 'FastAPI', 'React', 'Streaming', 'Python'],
    emoji: '🏥',
    featured: true,
  },
  {
    id: 'appointy',
    title: 'Appointy',
    category: 'Full-Stack / MERN',
    accent: 'cyan',
    summary: 'Complete MERN stack healthcare platform with 3-level role-based auth.',
    description:
      'A robust healthcare scheduling platform with three-level RBAC (Patient, Doctor, Admin), seamless Razorpay payment integration, appointment management, and a real-time notification system.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js', 'Razorpay', 'JWT'],
    emoji: '📅',
    featured: true,
  },
  {
    id: 'pixgen',
    title: 'PixGen',
    category: 'AI / Full-Stack',
    accent: 'violet',
    summary: 'AI image generation platform integrating OpenAI DALL·E — 30% latency reduction.',
    description:
      'AI-powered image generation SaaS integrating OpenAI DALL·E. Solved API bottlenecks through intelligent prompt preprocessing and request queuing, cutting response latency by 30%. Includes a gallery with community sharing.',
    tags: ['OpenAI DALL·E', 'React', 'Node.js', 'Request Queue', 'REST API'],
    emoji: '🎨',
    featured: true,
  },
  {
    id: 'nosql',
    title: 'AI NoSQL Database Engine',
    category: 'Systems / Backend',
    accent: 'amber',
    summary: 'Custom mini AI-powered NoSQL database engine built from scratch in Node.js.',
    description:
      'A ground-up implementation of an AI-powered NoSQL database engine in Node.js, featuring a custom query language parser, indexing strategies, and an AI assistant for schema optimization suggestions.',
    tags: ['Node.js', 'Systems Design', 'NoSQL', 'AI', 'Custom Engine'],
    emoji: '🗄️',
    featured: false,
  },
  {
    id: 'satellite',
    title: 'Satellite Tracking System',
    category: 'Hardware + Software',
    accent: 'cyan',
    summary: 'Hardware-software practicum to track live satellites using a dish antenna.',
    description:
      'A hybrid hardware/software system that interfaces with a dish antenna to track real-time satellite positions. Processes TLE data, calculates azimuth/elevation, and drives servo motors for autonomous tracking.',
    tags: ['Python', 'TLE Data', 'Hardware', 'Servo Control', 'Real-Time'],
    emoji: '🛰️',
    featured: false,
  },
];

const cardVariants = {
  hidden:  { opacity: 0, y: 36 },
  show:    (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: 'easeOut' }
  }),
};

function ProjectCard({ project, index }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      className={`project-card-wrapper ${project.featured ? 'featured' : ''}`}
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      onHoverStart={() => setFlipped(true)}
      onHoverEnd={() => setFlipped(false)}
    >
      <div className={`project-card accent-${project.accent} ${flipped ? 'flipped' : ''}`}>
        {/* Front */}
        <div className="card-face card-front">
          <div className="pc-emoji">{project.emoji}</div>
          <div className={`pc-category cat-${project.accent}`}>{project.category}</div>
          <h3 className="pc-title">{project.title}</h3>
          <p className="pc-summary">{project.summary}</p>
          <div className="pc-tags">
            {project.tags.slice(0, 3).map(t => (
              <span key={t} className={`pc-tag tag-${project.accent}`}>{t}</span>
            ))}
            {project.tags.length > 3 && (
              <span className="pc-tag tag-more">+{project.tags.length - 3}</span>
            )}
          </div>
          <div className="hover-hint">Hover to reveal ↗</div>
        </div>

        {/* Back (hover-reveal) */}
        <div className="card-face card-back">
          <h3 className="pcb-title">{project.title}</h3>
          <p className="pcb-desc">{project.description}</p>
          <div className="pcb-tags">
            {project.tags.map(t => (
              <span key={t} className={`pc-tag tag-${project.accent}`}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectGallery() {
  const [filter, setFilter] = useState('All');
  const [ref, inView] = useInView({ threshold: 0.05 });
  const filters = ['All', 'AI / Full-Stack', 'Full-Stack / MERN', 'Systems / Backend', 'Hardware + Software'];

  const visible = filter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === filter);

  return (
    <section id="projects" className="projects-section" ref={ref}>
      <div className="proj-header">
        <span className="section-label">What I've Built</span>
        <h2 className="proj-title">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="proj-sub">Hover over a card to reveal the full story.</p>
      </div>

      {/* Filter pills */}
      <div className="proj-filters">
        {filters.map(f => (
          <button
            key={f}
            className={`filter-pill ${filter === f ? 'active' : ''}`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={filter}
          className="projects-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {visible.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
