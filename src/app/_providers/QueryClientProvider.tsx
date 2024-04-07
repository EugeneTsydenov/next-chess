'use client';

import { QueryClient, QueryClientProvider as ReactQueryProvider } from '@tanstack/react-query';
import * as React from 'react';

const queryClient = new QueryClient();

const QueryClientProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <ReactQueryProvider client={queryClient}>{children}</ReactQueryProvider>;
};

export default QueryClientProvider;
