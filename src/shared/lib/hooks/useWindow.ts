import * as React from 'react';

export function useWindow() {
  const [isWindow, setIsWindow] = React.useState(false);

  React.useEffect(() => {
    setIsWindow(true);
  }, []);

  return isWindow;
}
