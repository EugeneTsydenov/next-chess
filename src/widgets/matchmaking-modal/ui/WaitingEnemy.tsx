import * as React from 'react';

interface WaitingEnemyProps {
  isWaitingEnemy: boolean;
}

const WaitingEnemy: React.FC<WaitingEnemyProps> = ({ isWaitingEnemy }) => {
  if (!isWaitingEnemy) return;

  return <div></div>;
};

export default WaitingEnemy;
