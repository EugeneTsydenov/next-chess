import { Piece, Square } from 'react-chessboard/dist/chessboard/types';
import { gameSocket, gameStore } from '@/entities/game';
import { observer } from 'mobx-react-lite';
import { Chessboard } from '@/shared/ui';
import * as React from 'react';

const GameChessboard: React.FC = observer(() => {
  const fen = gameStore.fen;

  function isDraggablePiece({ piece }: { piece: Piece }) {
    if (gameStore.userRole === 'watcher') return false;
    if (gameStore.userSide !== gameStore.turn) return false;
    if (gameStore.userSide !== piece[0]) return false;
    return true;
  }

  function onDrop(sourceSquare: Square, targetSquare: Square, piece: Piece) {
    gameSocket.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: piece.toLowerCase() ?? 'q',
    });

    return true;
  }

  return (
    <Chessboard
      boardWidth={560}
      position={fen}
      isDraggablePiece={isDraggablePiece}
      boardOrientation={gameStore.userSide === 'w' ? 'white' : 'black'}
      onPieceDrop={onDrop}
    />
  );
});

export default GameChessboard;
