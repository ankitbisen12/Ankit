"use client";
import { useState, useEffect } from 'react';
import { AiOutlineArrowUp} from 'react-icons/ai';

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`${
        visible ? 'block' : 'hidden'
      } fixed right-4 bottom-4 p-2 rounded-full bg-intro-200 text-white hover:bg-blue-600`}
    >
      <AiOutlineArrowUp className="text-2xl"/>
    </button>
  );
}
