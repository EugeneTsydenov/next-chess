'use client';

import { SessionProvider as NextAuthSessionProvider } from 'next-auth/react';
import * as React from 'react';

const SessionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <NextAuthSessionProvider>{children}</NextAuthSessionProvider>;
};

export default SessionProvider;
