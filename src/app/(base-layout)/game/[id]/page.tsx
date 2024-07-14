import { GamePage } from '@/views/game-id';
import * as React from 'react';

interface GamePageProps {
  params: {
    id: string;
  };
  searchParams: Record<string, string>;
}

const Page: React.FC<GamePageProps> = url => {
  return <GamePage url={url} />;
};

export default Page;
