import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import '../styles/BentoSkills.css';

const BENTO_ITEMS = [
  {
    id: 'edu',
    title: 'Education',
    size: 'wide',
    accent: 'emerald',
    icon: '🎓',
    content: (
      <>
        <p className="bento-big-text">B.Tech ECE</p>
        <p className="bento-sub">IIIT Una · Expected May 2027</p>
        <p className="bento-sub" style={{ marginTop: 4 }}>Electronics &amp; Communication Engineering</p>
      </>
    ),
  },
  {
    id: 'leetcode',
    title: 'Problem Solving',
    size: 'normal',
    accent: 'amber',
    icon: '⚡',
    content: (
      <>
        <p className="bento-big-text" style={{ color: 'var(--accent-amber)' }}>1700+</p>
        <p className="bento-sub">LeetCode Rating</p>
        <p className="bento-sub">400+ problems solved</p>
      </>
    ),
  },
  {
    id: 'backend',
    title: 'Core Backend',
    size: 'normal',
    accent: 'cyan',
    icon: '⚙️',
    content: (
      <div className="bento-tags">
        {['Node.js', 'Express.js', 'REST APIs', 'WebSockets', 'WebRTC', 'FastAPI'].map(t => (
          <span key={t} className="bento-tag cyan">{t}</span>
        ))}
      </div>
    ),
  },
  {
    id: 'ai',
    title: 'AI / GenAI',
    size: 'tall',
    accent: 'violet',
    icon: '🤖',
    content: (
      <div className="bento-tags">
        {['OpenAI API', 'DALL·E', 'LangChain', 'LangGraph', 'Groq Llama 4', 'RAG Pipelines'].map(t => (
          <span key={t} className="bento-tag violet">{t}</span>
        ))}
      </div>
    ),
  },
  {
    id: 'frontend',
    title: 'Frontend',
    size: 'normal',
    accent: 'emerald',
    icon: '🎨',
    content: (
      <div className="bento-tags">
        {['React.js', 'React Native', 'Tailwind CSS', 'Framer Motion', 'Vite'].map(t => (
          <span key={t} className="bento-tag emerald">{t}</span>
        ))}
      </div>
    ),
  },
  {
    id: 'db',
    title: 'Databases',
    size: 'normal',
    accent: 'cyan',
    icon: '🗄️',
    content: (
      <div className="bento-tags">
        {['PostgreSQL', 'MongoDB', 'SQLite', 'Firebase'].map(t => (
          <span key={t} className="bento-tag cyan">{t}</span>
        ))}
      </div>
    ),
  },
  {
    id: 'beyond',
    title: 'Beyond Code',
    size: 'wide',
    accent: 'violet',
    icon: '🏏',
    content: (
      <>
        <p className="bento-sub" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
          When I'm not coding, you'll find me on the <strong style={{ color: 'var(--accent-violet)' }}>cricket</strong> field or pushing my limits at the <strong style={{ color: 'var(--accent-violet)' }}>gym</strong>.
          I believe in staying physically sharp to maintain peak mental performance in my engineering work.
        </p>
      </>
    ),
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};
const item = {
  hidden: { opacity: 0, y: 28, scale: 0.96 },
  show:   { opacity: 1, y: 0,  scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function BentoSkills() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section id="about" className="bento-section" ref={ref}>
      <div className="bento-header">
        <span className="section-label">About Me</span>
        <h2 className="bento-title">
          My <span className="gradient-text">Arsenal</span>
        </h2>
        <p className="bento-description">
          A multidisciplinary engineer obsessed with building things that scale.
        </p>
      </div>

      <motion.div
        className="bento-grid"
        variants={container}
        initial="hidden"
        animate={inView ? 'show' : 'hidden'}
      >
        {BENTO_ITEMS.map(card => (
          <motion.div
            key={card.id}
            className={`bento-card bento-${card.size} glow-border accent-${card.accent}`}
            variants={item}
            whileHover={{ y: -4 }}
          >
            <div className="bento-card-header">
              <span className="bento-icon">{card.icon}</span>
              <h3 className="bento-card-title">{card.title}</h3>
            </div>
            <div className="bento-card-body">{card.content}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
