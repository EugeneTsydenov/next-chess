'use client';

import {
  fenSelector,
  turnSelector,
  userRoleSelector,
  userSideSelector,
} from '@/entities/game/model/redux/gameSelectors';
import { Piece, Square } from 'react-chessboard/dist/chessboard/types';
import { useAppSelector } from '@/shared/lib';
import { Chessboard } from '@/shared/ui';
import * as React from 'react';

const GameChessboard: React.FC = () => {
  const fen = useAppSelector(fenSelector);
  const userSide = useAppSelector(userSideSelector);
  const userRole = useAppSelector(userRoleSelector);
  const turn = useAppSelector(turnSelector);

  function isDraggablePiece({ piece }: { piece: Piece }) {
    if (userRole === 'watcher') return false;
    if (userSide !== turn) return false;
    if (userSide !== piece[0]) return false;
    return true;
  }

  return (
    <Chessboard
      boardWidth={560}
      position={fen}
      isDraggablePiece={isDraggablePiece}
      boardOrientation={userSide === 'w' ? 'white' : 'black'}
    />
  );
};

export default GameChessboard;
