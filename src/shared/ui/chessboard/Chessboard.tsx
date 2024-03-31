'use client';

import { ChessboardProps } from 'react-chessboard/dist/chessboard/types';
import { Chessboard as ReactChessboard } from 'react-chessboard';
import { ForwardRefExoticComponent } from 'react';
import * as React from 'react';

const Chessboard: React.FC<
  ForwardRefExoticComponent<
    Pick<
      ChessboardProps,
      | 'allowDragOutsideBoard'
      | 'animationDuration'
      | 'areArrowsAllowed'
      | 'arePiecesDraggable'
      | 'arePremovesAllowed'
      | 'autoPromoteToQueen'
      | 'boardOrientation'
      | 'boardWidth'
      | 'clearPremovesOnRightClick'
      | 'customArrows'
      | 'customArrowColor'
      | 'customBoardStyle'
      | 'customNotationStyle'
      | 'customDarkSquareStyle'
      | 'customDndBackend'
      | 'customDndBackendOptions'
      | 'customDropSquareStyle'
      | 'customLightSquareStyle'
      | 'customPieces'
      | 'customPremoveDarkSquareStyle'
      | 'customPremoveLightSquareStyle'
      | 'customSquare'
      | 'customSquareStyles'
      | 'dropOffBoardAction'
      | 'id'
      | 'isDraggablePiece'
      | 'getPositionObject'
      | 'onArrowsChange'
      | 'onDragOverSquare'
      | 'onMouseOutSquare'
      | 'onMouseOverSquare'
      | 'onPieceClick'
      | 'onPieceDragBegin'
      | 'onPieceDragEnd'
      | 'onPieceDrop'
      | 'onPromotionCheck'
      | 'onPromotionPieceSelect'
      | 'onSquareClick'
      | 'onSquareRightClick'
      | 'position'
      | 'promotionDialogVariant'
      | 'promotionToSquare'
      | 'showBoardNotation'
      | 'showPromotionDialog'
      | 'snapToCursor'
    >
  >
> = props => {
  return (
    <ReactChessboard
      customBoardStyle={{
        borderRadius: '4px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
      }}
      customDarkSquareStyle={{ backgroundColor: '#779952' }}
      customLightSquareStyle={{ backgroundColor: '#edeed1' }}
      {...props}
    />
  );
};

export default Chessboard;
