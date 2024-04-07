import { Square } from 'react-chessboard/dist/chessboard/types';

export interface IMoveData {
  from: Square;
  to: Square;
  promotion: string;
}
