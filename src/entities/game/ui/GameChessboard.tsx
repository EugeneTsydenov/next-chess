'use client';

import {
  fenSelector,
  userRoleSelector,
  userSideSelector,
} from '@/entities/game/model/redux/gameSelectors';
import { useAppSelector } from '@/shared/lib';
import { Chessboard } from '@/shared/ui';
import * as React from 'react';

const GameChessboard: React.FC = () => {
  const fen = useAppSelector(fenSelector);
  const userSide = useAppSelector(userSideSelector);
  const userRole = useAppSelector(userRoleSelector);

  return (
    <Chessboard
      boardWidth={560}
      position={fen}
      isDraggablePiece={() => {
        return userRole !== 'watcher';
      }}
      boardOrientation={userSide === 'w' ? 'white' : 'black'}
    />
  );
};

export default GameChessboard;
