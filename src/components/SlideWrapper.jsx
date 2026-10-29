import React, { useRef } from 'react';

export default function SlideWrapper({ children, slideKey, direction, onSwipeLeft, onSwipeRight }) {
  const touchStartX = useRef(null);
  const touchStartY = useRef(null);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null || touchStartY.current === null) return;

    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    const deltaY = e.changedTouches[0].clientY - touchStartY.current;

    // Horizontal swipe threshold: 50px and more horizontal than vertical
    if (Math.abs(deltaX) > 50 && Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX < 0) {
        onSwipeLeft?.(); // Swiped left -> Next
      } else {
        onSwipeRight?.(); // Swiped right -> Previous
      }
    }

    touchStartX.current = null;
    touchStartY.current = null;
  };

  const animClass = direction >= 0 ? "animate-slide-next" : "animate-slide-prev";

  return (
    <main
      className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-3 pb-16 flex flex-col justify-center overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div
        key={slideKey}
        className={`w-full h-full flex flex-col justify-center ${animClass}`}
      >
        {children}
      </div>
    </main>
  );
}
