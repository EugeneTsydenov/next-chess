import { ProtectedRoute } from '@/entities/auth';
import * as React from 'react';

const PlayPage: React.FC = () => {
  return <ProtectedRoute permission='all'>Play</ProtectedRoute>;
};

export default PlayPage;
