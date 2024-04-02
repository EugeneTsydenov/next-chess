'use client';

import { fenSelector } from '@/entities/game/model/redux/gameSelectors';
import { useAppSelector } from '@/shared/lib';
import { Chessboard } from '@/shared/ui';
import * as React from 'react';

const GameChessboard: React.FC = () => {
  const fen = useAppSelector(fenSelector);

  return <Chessboard boardWidth={560} position={fen} isDraggablePiece={() => false} />;
};

export default GameChessboard;
