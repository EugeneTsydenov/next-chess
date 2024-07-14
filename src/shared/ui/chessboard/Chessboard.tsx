'use client';

import { ChessboardProps } from 'react-chessboard/dist/chessboard/types';
import { Chessboard as ReactChessboard } from 'react-chessboard';
import * as React from 'react';

const Chessboard: React.FC<ChessboardProps> = props => {
  return (
    <ReactChessboard
      customBoardStyle={{
        borderRadius: '4px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
      }}
      customDarkSquareStyle={{ backgroundColor: '#779952' }}
      customLightSquareStyle={{ backgroundColor: '#edeed1' }}
      boardWidth={props.boardWidth}
      allowDragOutsideBoard={props.allowDragOutsideBoard}
      animationDuration={props.animationDuration}
      areArrowsAllowed={props.areArrowsAllowed}
      arePiecesDraggable={props.arePiecesDraggable}
      arePremovesAllowed={props.arePremovesAllowed}
      autoPromoteToQueen={props.autoPromoteToQueen}
      boardOrientation={props.boardOrientation}
      clearPremovesOnRightClick={props.clearPremovesOnRightClick}
      customArrows={props.customArrows}
      customArrowColor={props.customArrowColor}
      customNotationStyle={props.customNotationStyle}
      customDndBackend={props.customDndBackend}
      customDndBackendOptions={props.customDndBackendOptions}
      customDropSquareStyle={props.customDropSquareStyle}
      customPieces={props.customPieces}
      customPremoveDarkSquareStyle={props.customPremoveDarkSquareStyle}
      customPremoveLightSquareStyle={props.customPremoveLightSquareStyle}
      customSquare={props.customSquare}
      customSquareStyles={props.customSquareStyles}
      dropOffBoardAction={props.dropOffBoardAction}
      id={props.id}
      isDraggablePiece={props.isDraggablePiece}
      getPositionObject={props.getPositionObject}
      onArrowsChange={props.onArrowsChange}
      onDragOverSquare={props.onDragOverSquare}
      onMouseOutSquare={props.onMouseOutSquare}
      onMouseOverSquare={props.onMouseOverSquare}
      onPieceClick={props.onPieceClick}
      onPieceDragBegin={props.onPieceDragBegin}
      onPieceDragEnd={props.onPieceDragEnd}
      onPieceDrop={props.onPieceDrop}
      onPromotionCheck={props.onPromotionCheck}
      onPromotionPieceSelect={props.onPromotionPieceSelect}
      onSquareClick={props.onSquareClick}
      onSquareRightClick={props.onSquareRightClick}
      position={props.position}
      promotionDialogVariant={props.promotionDialogVariant}
      promotionToSquare={props.promotionToSquare}
      showBoardNotation={props.showBoardNotation}
      showPromotionDialog={props.showPromotionDialog}
      snapToCursor={props.snapToCursor}
    />
  );
};

export default Chessboard;
