import { ProtectedRoute } from '@/entities/auth';
import * as React from 'react';

const PlayOnlinePage: React.FC = () => {
  return (
    <ProtectedRoute permission='authUser'>
      <div>Play Online</div>
    </ProtectedRoute>
  );
};

export default PlayOnlinePage;
