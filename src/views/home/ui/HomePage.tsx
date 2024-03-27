import { ProtectedRoute } from '@/entities/auth';
import * as React from 'react';

const HomePage: React.FC = () => {
  return <ProtectedRoute permission='all'>Home</ProtectedRoute>;
};

export default HomePage;
