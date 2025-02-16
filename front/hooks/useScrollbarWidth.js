import * as React from 'react';

export const useScrollbarWidth = () => {
  const [scrollbarWidth, setScrollbarWidth] = React.useState(0);

  React.useEffect(() => {
    const outer = document.createElement('div');
    outer.style.visibility = 'hidden';
    outer.style.overflow = 'scroll';
    outer.style.msOverflowStyle = 'scrollbar';
    document.body.appendChild(outer);

    const inner = document.createElement('div');
    outer.appendChild(inner);

    const calculatedWidth = outer.offsetWidth - inner.offsetWidth;

    outer.parentNode.removeChild(outer);

    setScrollbarWidth(calculatedWidth);
  }, []);

  return scrollbarWidth;
};