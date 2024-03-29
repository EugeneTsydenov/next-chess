'use client';

import { Chessboard as ReactChessboard } from 'react-chessboard';
import * as React from 'react';

const Chessboard: React.FC = () => {
  return (
    <ReactChessboard
      customBoardStyle={{
        borderRadius: '4px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
      }}
      customDarkSquareStyle={{ backgroundColor: '#779952' }}
      customLightSquareStyle={{ backgroundColor: '#edeed1' }}
      boardWidth={770}
    />
  );
};

export default Chessboard;
