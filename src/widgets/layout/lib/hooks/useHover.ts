import * as React from 'react';

export function useHover() {
  const [isHover, setHover] = React.useState(false);

  function onMouseEnter(e: React.MouseEvent<HTMLElement>) {
    e.stopPropagation();
    setHover(true);
  }

  function onMouseLeave(e: React.MouseEvent<HTMLElement>) {
    e.stopPropagation();
    setHover(false);
  }

  return { isHover, onMouseEnter, onMouseLeave };
}
