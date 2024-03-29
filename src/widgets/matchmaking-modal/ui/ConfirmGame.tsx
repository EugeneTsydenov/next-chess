import * as React from 'react';

interface ConfirmGameProps {
  isConfirmedGame: boolean;
}

const ConfirmGame: React.FC<ConfirmGameProps> = ({ isConfirmedGame }) => {
  if (!isConfirmedGame) return;

  return <div></div>;
};

export default ConfirmGame;
