'use client';

import * as React from 'react';

export function useToggle(initialState: boolean): [boolean, () => void] {
  const [isShow, setIsShow] = React.useState(initialState);

  function toggle() {
    setIsShow(prev => !prev);
  }

  return [isShow, toggle];
}
