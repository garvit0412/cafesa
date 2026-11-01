import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <a
      href="#home"
      className="fixed bottom-6 right-6 z-50 w-11 h-11 bg-espresso text-ivory rounded-full flex items-center justify-center shadow-lg hover:bg-espresso-light transition-all duration-300 opacity-90 hover:opacity-100"
      aria-label="Back to top"
    >
      <ArrowUp size={18} strokeWidth={2.5} />
    </a>
  );
}
