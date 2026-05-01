import { useState, useEffect, useRef } from 'react';
import '../styles/CustomCursor.css';

export default function CustomCursor() {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const dot  = dotRef.current;
    const ring = ringRef.current;

    const onMove = (e) => {
      const { clientX: x, clientY: y } = e;
      dot.style.left  = `${x}px`;
      dot.style.top   = `${y}px`;
      // Ring follows with a tiny lag via requestAnimationFrame
      ring.animate(
        [{ left: ring.style.left || `${x}px`, top: ring.style.top || `${y}px` },
         { left: `${x}px`, top: `${y}px` }],
        { duration: 80, fill: 'forwards', easing: 'ease-out' }
      );
      ring.style.left = `${x}px`;
      ring.style.top  = `${y}px`;
    };

    const onEnter = () => setHovered(true);
    const onLeave = () => setHovered(false);

    window.addEventListener('mousemove', onMove);
    document.querySelectorAll('a, button, [data-cursor="pointer"]')
      .forEach(el => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });

    return () => {
      window.removeEventListener('mousemove', onMove);
    };
  }, []);

  return (
    <>
      <div ref={dotRef}  className="cursor-dot" />
      <div ref={ringRef} className={`cursor-ring ${hovered ? 'hovered' : ''}`} />
    </>
  );
}
